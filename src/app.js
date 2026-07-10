import Fastify from "fastify";
import fs from "node:fs";
import path from "node:path";

const app = Fastify({
  logger: true
});

app.get("/", async (_request, reply) => {
  const htmlPath = path.join(process.cwd(), "public", "index.html");
  const html = await fs.promises.readFile(htmlPath, "utf8");

  return reply
    .type("text/html; charset=utf-8")
    .send(html);
});

app.get("/favicon.ico", async (_request, reply) => {
  return reply.code(204).send();
});

// A Vercel precisa receber o servidor Fastify diretamente.
export default app;