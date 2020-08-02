import SourceClass, { JSONAPISerializer, JSONAPIRequestProcessor } from '@orbit/jsonapi';
import { camelize, underscore } from '@ember/string';

export default {
  create(injections = {}) {
    injections.name = 'remote';
    // injections.host = 'https://reqres.in';
    // injections.namespace = 'api';
    injections.SerializerClass = CustomJSONAPISerializer;
    injections.RequestProcessorClass = CustomJSONAPIRequestProcessor;
    return new SourceClass(injections);
  }
};

class CustomJSONAPISerializer extends JSONAPISerializer {

  serialize(document) {
    // if (!(document.data instanceof Array) && document.data.type === 'user') {
    //   debugger
    //   const attributes = document.data.attributes;
    //   delete attributes.type;
    //   delete attributes.id;

    //   const body = {};
    //   Object.keys(attributes).forEach(key => {
    //     body[underscore(key)] = attributes[key];
    //   });

    //   return body;
    // }

    return super.serialize(document);
  }

  deserialize(document, options) {

    // if (document.type === 'user' && !(document.data instanceof Array)) {
    //   debugger
    //   const attributes = {...document};
    //   delete attributes.type;
    //   delete attributes.id;
    //   return {
    //     id: document.id,
    //     type: document.type,
    //     attributes,
    //   }
    // }

    return super.deserialize(document, options);
  }

  deserializeResource(resource) {
    // if (resource) {
    //   const resourceCopy = { ...resource };
    //   delete resourceCopy.id;

    //   const attributes = {};
    //   Object.keys(resourceCopy).forEach(key => {
    //     attributes[camelize(key)] = resourceCopy[key];
    //   });

    //   const record = {
    //     type: 'user',
    //     attributes
    //   };

    //   if (resource.id) {
    //     record.id = resource.id;
    //   }

    //   return record;
    // }
    return super.deserializeResource(resource);
  }
}

class CustomJSONAPIRequestProcessor extends JSONAPIRequestProcessor {
  preprocessResponseDocument(document, query) {
    // document.type = query.expression?.type || query.record?.type;
    return super.preprocessResponseDocument(document, query);
  }
}
