import { buildApp } from './src/app.js';

const app = buildApp({ logger: true });
const port = Number(process.env.PORT || 3000);

try {
  await app.listen({ port, host: '0.0.0.0' });
  console.log(`Kamarkett rodando em http://localhost:${port}`);
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
