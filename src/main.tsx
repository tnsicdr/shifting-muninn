import { render } from "preact";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router/router.tsx";

render(<RouterProvider router={router} />, document.getElementById("app")!);
