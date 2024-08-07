import { FC } from "@hono/hono/jsx";

export const Layout: FC = (props) => {
  return (
    <>
      <button
        class="btn btn-accent mr-6"
        _="on click toggle .hidden on .blt
          then set window.canWhileUpdate to true"
      >
        <span class="blt btn-warning">update!</span>
        <span class="blt hidden loading loading-spinner loading-sm">
          updating...
        </span>
      </button>
      <button
        class="btn mr-6"
        _="on click if window.canWhileUpdate == true
          set window.canWhileUpdate to false
          then toggle .hidden on .blt"
      >
        stop update
      </button>
      {props.children}
    </>
  );
};
