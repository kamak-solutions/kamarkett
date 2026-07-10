import { buildApp } from '../src/app.js';

let app;

export default async function handler(request, response) {
  if (!app) {
    app = buildApp({ logger: false });
    await app.ready();
  }

  app.server.emit('request', request, response);
}
