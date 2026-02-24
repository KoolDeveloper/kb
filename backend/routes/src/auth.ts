import type { RouteMap } from "../../src/utils/types";

export const authRouter : RouteMap = {
  "/login": () => new Response("OK", { status: 200 }),
  "/register": () => new Response("OK", { status: 200 }),
};