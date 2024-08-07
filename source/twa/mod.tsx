import { Context, Hono } from "@hono/hono";
import { Admin } from "./components/Admin.tsx";
import { User } from "./components/User.tsx";
import { html } from "$helpers/html.ts";

const twaRouter = new Hono();

twaRouter.get("/", async (c: Context) =>
  c.html(new TextDecoder("utf-8")
    .decode(await Deno.readFile("./source/twa/public/index.html"))));

twaRouter.get("/init", (c: Context) => {
  return c.html(
    <>
      {Math.random() > 0.5 ? <Admin /> : <User />}
    </>,
  );
});

twaRouter.get("/update", (c: Context) => {
  if (Math.random() > 0.3) {
    return c.newResponse(null, 204);
  } else {
    return c.html(
      <>
        {Math.random() > 0.5 ? <Admin /> : <User />}
      </>,
    );
  }
});

twaRouter.get("/component/:name", (c: Context) => {
  return c.html(
    <>
      {Math.random() > 0.5 ? <Admin /> : <User />}
    </>,
  );
});

const title = "";

html`
  <a src="${title}"></a>
  <script>
    console.log('hello!')
  </script>

  <button
    type="button"
    class="btn btn-primary"
    _="on click
       set myData to {
         name: 1,
         email: 'hello'
       }
       fetch /api/submit with body (JSON.stringify(myData)) and headers {'Content-Type': 'application/json'}
       then
         put it into #responseContainer">
    Send
  </button>
`;

export { twaRouter };
