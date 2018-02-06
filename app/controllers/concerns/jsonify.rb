module Jsonify
  def jsonify(resource)
    serializer = "#{resource_class(resource)}Serializer".constantize
    JSON.parse(serializer.new(resource).serialized_json)["data"]
  end

  private

  def resource_class(resource)
    return resource.class unless resource.try(:count) && resource.count.positive?
    resource.first.class
  end
end
