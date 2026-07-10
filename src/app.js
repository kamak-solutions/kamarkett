import Fastify from "fastify";
import fs from "node:fs";
import path from "node:path";

const app = Fastify();

app.get("/", async (request, reply) => {
  const htmlPath = path.join(process.cwd(), "public", "index.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  reply.type("text/html").send(html);
});

export default async function handler(req, res) {
  await app.ready();
  app.server.emit("request", req, res);
}