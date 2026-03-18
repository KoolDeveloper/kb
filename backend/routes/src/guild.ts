import type { RouteMap } from "../../src/utils/types";

export const guildRouter : RouteMap = {
  "/guild": () => new Response("OK", { status: 200 }),
  "/guild/create ": {
    POST: () => new Response("OK", { status: 200 }),
  },
  "/guild/:id": {
    GET: () => new Response("OK", { status: 200 }),
    PUT: () => new Response("OK", { status: 200 }),
    DELETE: () => new Response("OK", { status: 200 }),
  }
};