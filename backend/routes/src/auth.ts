import type { RouteMap } from "../../src/utils/types";

export const authRouter : RouteMap = {
  "/auth/login": () => new Response("OK", { status: 200 }),
  "/auth/register": () => new Response("OK", { status: 200 }),
  "/auth/logout": () => new Response("OK", { status: 200 }),
  "/user/:id": {
    GET: () => new Response("OK", { status: 200 }),
    PUT: () => new Response("OK", { status: 200 }),
    DELETE: () => new Response("OK", { status: 200 }),
  }
};