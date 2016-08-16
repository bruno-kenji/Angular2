import {OpaqueToken} from 'angular2/core';

// each opaque token must have a different name, of your choice
export var LOOKUP_LISTS = new OpaqueToken('LookupLists');

export var lookupLists = {
  mediums: ['Movies', 'Series']
};
