import SourceClass, { JSONAPISerializer } from '@orbit/jsonapi';
import { camelize } from '@ember/string';

export default {
  create(injections = {}) {
    injections.name = 'remote';
    injections.host = 'https://reqres.in';
    injections.namespace = 'api';
    injections.SerializerClass = CustomJSONAPISerializer;
    return new SourceClass(injections);
  }
};

class CustomJSONAPISerializer extends JSONAPISerializer {
  deserializeResource(resource) {
    const resourceCopy = { ...resource };
    const { id } = resource;
    delete resourceCopy.id;

    const attributes = {};
    Object.keys(resourceCopy).forEach(key => {
      attributes[camelize(key)] = resourceCopy[key];
    });

    const record = {
      id,
      type: 'user',
      attributes
    };

    return record;
  }
}
