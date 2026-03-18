import type { RouteMap } from "../src/utils/types";
import { articleRouter } from "./src/article"
import { authRouter } from "./src/auth"
import { customerRouter } from "./src/customer"
import { sitesRouter } from "./src/site"
import { guildRouter } from "./src/guild"
import { locationRouter } from "./src/location";

export const routes : RouteMap = {
  "/healthcheck": () => new Response("OK", { status: 200 }),
  ...articleRouter,
  ...authRouter,
  ...customerRouter,
  ...sitesRouter,
  ...guildRouter,
  ...locationRouter
};