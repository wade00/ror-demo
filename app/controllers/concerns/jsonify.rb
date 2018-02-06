module Jsonify
  def jsonify(resource, opts={})
    serializer = "#{resource_class(resource)}Serializer".constantize
    JSON.parse(serializer.new(resource, opts).serialized_json)['data']
  end

  private

  def resource_class(resource)
    return resource.class unless resource.try(:count) && resource.count.positive?
    resource.first.class
  end
end
