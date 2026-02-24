import type { RouteMap } from "../../src/utils/types";

export const sitesRouter : RouteMap = {
    "/sites": () => new Response("OK", { status: 200 }),
    "/sites/create ": {
        POST: () => new Response("OK", { status: 200 }),
        },
    "/sites/:id": {
        GET: () => new Response("OK", { status: 200 }),
        PUT: () => new Response("OK", { status: 200 }),
        DELETE: () => new Response("OK", { status: 200 }),
        }
};