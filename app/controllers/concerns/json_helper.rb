module JsonHelper
  extend ActiveSupport::Concern

  def json_with(resource, **options)
    return json_empty(**options) unless resource
    root_key = resource.class.name.split('::').last.underscore

    return json_error({
      root_key => map_base_to__error(resource.errors.messages)
    }, **options) if has_errors?(resource)

    return json_success({
      root_key => Hash.new
    }, **options) if is_destroyed?(resource)

    return serialize_json_resource(resource, **options)
  end

  def json_empty(**options)
    render json: {}, **options
  end

  def json_error(nested_path_or_obj, message=nil, **options)
    error_obj = set_nested_path(nested_path_or_obj, message)
    render(
      json: { errors: error_obj },
      status: :unprocessable_entity,
      **options
    )
  end

  def json_success(path_or_obj, message=nil, **options)
    render(
      json: set_nested_path(path_or_obj, message),
      **options
    )
  end

  def serialize_json_resource(resource, **options)
    res = ActiveModelSerializers::SerializableResource.new(resource, options[:serializer_options] || {})
    serialized_obj = res.serializer_instance.object
    type = options[:resource] || set_serialized_object_type(serialized_obj)

    data = { type: type, attributes: res.serializer_instance }
    data[:additional_data] = options[:additional_data] if options && options[:additional_data]

    render json: { data: data }, **options
  end

  private

  def set_nested_path(nested_path_or_obj, message)
    return set_nested(nested_path_or_obj, message) if nested_path_or_obj.is_a? String
    nested_path_or_obj
  end

  def map_base_to__error(error_obj)
    if error_obj.has_key? :base
      error_obj[:_error] = error_obj.delete(:base)
    end
    error_obj
  end

  def has_errors?(resource)
    resource.respond_to?(:errors) && resource.errors.any?
  end

  def is_destroyed?(resource)
    resource.respond_to?(:destroyed?) && resource.destroyed?
  end

  def set_nested(path, value, obj={})
    obj.deep_merge(path_to_hash(path, value))
  end

  def set_serialized_object_type(obj)
    type = obj.try(:count) && obj.count.positive? ?
      obj.first.class.to_s.underscore.pluralize :
      obj.class.to_s.underscore
    type.split('/')[0]
  end

  def path_to_hash(path, value)
    parts = (path.is_a?(String) ? path.split('.') : path).reverse
    initial = { parts.shift => value }
    parts.reduce(initial) { |a, e| { e => a } }
  end
end
