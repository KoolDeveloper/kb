import type { RouteMap } from "../../src/utils/types";

export const customerRouter : RouteMap = {
  "/customer": () => new Response("OK", { status: 200 }),
  "/customer/create ": {
    POST: () => new Response("OK", { status: 200 }),
  },
};