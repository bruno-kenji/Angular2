import {OpaqueToken} from 'angular2/core';

export var lookupLists = {
  mediums: ['Movies', 'Series']
};

// each opaque token must have a different name, of your choice
export var LOOKUP_LISTS = new OpaqueToken('LookupLists');
