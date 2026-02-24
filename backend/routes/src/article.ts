import type { RouteMap } from "../../src/utils/types";

export const articleRouter : RouteMap = {
  "/article": () => new Response("OK", { status: 200 }),
  "/article/create ": {
    POST: () => new Response("OK", { status: 200 }),
  },
};