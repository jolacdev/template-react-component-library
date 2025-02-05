export const booleanPrefixes = ['is', 'should', 'has', 'can', 'did', 'will'];

const perfectionistSortObjectCustomGroups = {
  id: {
    elementNamePattern: '^(?:id|.+Id)$',
    groupName: 'id',
    selector: 'property',
  },
  flag: {
    elementNamePattern: `^(?:${booleanPrefixes.join('|')})[A-Z].*$`, // Example: /^(?:a|b|c|)[A-Z].*$/
    groupName: 'flag',
    selector: 'property',
  },
};

export const perfectionistSortTypes = {
  ignoreCase: true,
  order: 'asc',
  type: 'natural',
  customGroups: [
    perfectionistSortObjectCustomGroups.id,
    {
      ...perfectionistSortObjectCustomGroups.flag,
      groupName: `required-${perfectionistSortObjectCustomGroups.flag.groupName}`,
      modifiers: ['required'],
    },
    {
      ...perfectionistSortObjectCustomGroups.flag,
      groupName: `optional-${perfectionistSortObjectCustomGroups.flag.groupName}`,
      modifiers: ['optional'],
    },
  ],
  groups: [
    perfectionistSortObjectCustomGroups.id.groupName,
    'required-property',
    'required-multiline-property',
    'optional-property',
    'optional-multiline-property',
    'required-flag',
    'optional-flag',
    'required-method',
    'optional-method',
  ],
};

export const perfectionistSortObjects = {
  ...perfectionistSortTypes,
  objectDeclarations: true,
  customGroups: [
    perfectionistSortObjectCustomGroups.id,
    perfectionistSortObjectCustomGroups.flag,
  ],
  destructuredObjects: {
    groups: true,
  },
  groups: [
    perfectionistSortObjectCustomGroups.id.groupName,
    'property',
    'multiline-property',
    perfectionistSortObjectCustomGroups.flag.groupName,
    'method',
  ],
};
