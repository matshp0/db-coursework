import {
  updateProjectSchema,
  createProjectSchema,
} from '../schemas/projects.js';

export const autoPrefix = '/api';

export default async function(fastify) {
  const {
    getProjects,
    getProjectById,
    updateProject,
    createProject,
    deleteProject,
  } = fastify;
  fastify.get('/projects', getProjects);
  fastify.get('/projects/:id', getProjectById);
  fastify.patch(
    '/projects/:id',
    { schema: updateProjectSchema },
    updateProject
  );
  fastify.post('/projects', { schema: createProjectSchema }, createProject);
  fastify.delete('/projects/:id', deleteProject);
}
