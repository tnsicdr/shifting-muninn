import { Router } from "@tanstack/react-router";
import { routeTree } from "./routes";

export const router = new Router({ routeTree: routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
