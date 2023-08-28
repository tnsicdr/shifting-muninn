import { RootRoute, Route } from "@tanstack/react-router";
import Dashboard from "../screens/Dashboard/Dashboard";
import Root from "./root";

const rootRoute = new RootRoute({
  component: Root,
});

const index = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

export const routeTree = rootRoute.addChildren([index]);
