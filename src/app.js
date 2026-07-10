import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = Fastify({
  logger: true
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await app.register(fastifyStatic, {
  root: path.join(__dirname, "..", "public"),
  prefix: "/"
});

app.get("/", async (_request, reply) => {
  return reply.sendFile("index.html");
});

app.get("/health", async () => {
  return {
    status: "ok",
    projeto: "Kamarkett"
  };
});

app.listen({
  port: Number(process.env.PORT) || 3000,
  host: "0.0.0.0"
});