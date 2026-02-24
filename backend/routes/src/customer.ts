import type { RouteMap } from "../../src/utils/types";

export const customerRouter : RouteMap = {
  "/customer": () => new Response("OK", { status: 200 }),
  "/customer/create ": {
    POST: () => new Response("OK", { status: 200 }),
  },
  "/customer/:id": {
    GET: () => new Response("OK", { status: 200 }),
    PUT: () => new Response("OK", { status: 200 }),
    DELETE: () => new Response("OK", { status: 200 }),
  }
};