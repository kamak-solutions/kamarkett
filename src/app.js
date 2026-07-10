import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

export function buildApp(options = {}) {
  const app = Fastify(options);

  app.register(fastifyStatic, {
    root: publicDir,
    prefix: '/',
  });

  // Rota única principal para servir a página do marketplace
  app.get('/', async (request, reply) => {
    return reply.sendFile('index.html');
  });

  return app;
}
