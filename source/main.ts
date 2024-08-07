import { Hono } from "@hono/hono";
import { botRouter } from "./bot/mod.ts";
import { twaRouter } from "./twa/mod.tsx";
import { apiRouter } from "./api/mod.ts";

const honoApp = new Hono();

honoApp.route("/api", apiRouter);
honoApp.route("/bot", botRouter);
honoApp.route("/twa", twaRouter);

Deno.serve(honoApp.fetch);
