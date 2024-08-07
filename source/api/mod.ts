// deno-lint-ignore-file require-await no-unused-vars
import { Hono } from "@hono/hono";
import apifly from "@vseplet/apifly";
import { MyApiflyDefinition } from "$ApiflyDefinition";

const apiRouter = new Hono();

const apiflyServer = new apifly.server<MyApiflyDefinition>()
  .load(async () => {
    return {
      a: {
        b: "1",
        c: {
          d: true,
        },
      },
    };
  })
  .guards({
    "a": {
      "b": (state, value, patch) => patch === "1",
      "c": {
        "d": (state, value, patch) => patch === true,
      },
    },
  })
  .store(async (state) => {
    console.log(state);
  })
  .watchers({
    "a": {
      "b": async (_state) => {},
      "c": {
        "d": async (_state) => {},
      },
    },
  })
  .procedure("hi", async (args) => {
    return "Hello, World";
  })
  .procedure("hi2", async (args) => {
    return false;
  })
  .procedure("hi3", async (args) => {
    return [0, 0, 0];
  });

apiRouter.post(
  "/",
  async (c) => c.json(await apiflyServer.handleRequest(await c.req.json())),
);

export { apiflyServer, apiRouter };
