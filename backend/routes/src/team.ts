import type { RouteMap } from "../../src/utils/types";

export const teamsRouter : RouteMap = {
  "/teams": () => new Response("OK", { status: 200 }),
  "/teams/create ": {
    POST: () => new Response("OK", { status: 200 }),
  },
  "/teams/:id": {
    GET: () => new Response("OK", { status: 200 }),
    PUT: () => new Response("OK", { status: 200 }),
    DELETE: () => new Response("OK", { status: 200 }),
  }
};