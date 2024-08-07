import type { FC } from "@hono/hono/jsx";
import { Layout } from "./Layout.tsx";

export const User: FC<{}> = (props: {}) => {
  return (
    <Layout>
      <h1>Hello User!</h1>
      <script type="text/hyperscript">
        on load set window.canWhileUpdate to false
      </script>
    </Layout>
  );
};
