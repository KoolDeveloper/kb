import type { RouteMap } from "../../src/utils/types";

export const articleRouter : RouteMap = {
  "/article": () => new Response("OK", { status: 200 }),
  "/article/create ": {
    POST: () => new Response("OK", { status: 200 }),
  },
  "/article/:id": {
    GET: () => new Response("OK", { status: 200 }),
    PUT: () => new Response("OK", { status: 200 }),
    DELETE: () => new Response("OK", { status: 200 }),
  }
};