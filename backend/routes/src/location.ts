import type { RouteMap } from "../../src/utils/types";

export const locationRouter : RouteMap = {
    "/locations": () => new Response("OK", { status: 200 }),
    "/location/create ": {
        POST: () => new Response("OK", { status: 200 }),
        },
    "/location/:id": {
        GET: () => new Response("OK", { status: 200 }),
        PUT: () => new Response("OK", { status: 200 }),
        DELETE: () => new Response("OK", { status: 200 }),
        }
};