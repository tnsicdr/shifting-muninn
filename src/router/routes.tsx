import { Outlet, RootRoute, Route } from "@tanstack/react-router";
import Dashboard from "../screens/Dashboard/Dashboard";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

const index = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

export const routeTree = rootRoute.addChildren([index]);
