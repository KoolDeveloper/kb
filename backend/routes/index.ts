import type { RouteMap } from "../src/utils/types";

export const routes : RouteMap = {
  "/healthcheck": () => new Response("OK", { status: 200 }),
};