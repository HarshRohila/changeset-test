import BucketClass from '@orbit/indexeddb-bucket';

export default {
  create(injections = {}) {
    injections.name = 'main';
    injections.namespace =
      'changeset-test-main';
    return new BucketClass(injections);
  }
};
