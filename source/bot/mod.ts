import { Context, Hono, Next } from "@hono/hono";
import { webhookCallback } from "@grammy";
import { bot } from "$shared";

const botHandleUpdate = webhookCallback(bot, "hono");
const botRouter = new Hono();

botRouter.post("/", async (c: Context, next: Next) => {
  try {
    return await botHandleUpdate(c);
  } catch (e) {
    console.error(e);
  }

  await next();
});

export { botRouter };
