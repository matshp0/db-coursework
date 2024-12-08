export const updateProjectSchema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string', minLength: 1 },
      description: { type: 'string', minLength: 1 },
      ownerId: { type: 'number' },
      teamId: { type: 'number' },
    },
    required: [],
    additionalProperties: false,
  },
};

export const createProjectSchema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string', minLength: 1 },
      description: { type: 'string', minLength: 1 },
      ownerId: { type: 'number' },
      teamId: { type: 'number' },
    },
    required: ['name', 'ownerId', 'teamId'],
    additionalProperties: false,
  },
};
