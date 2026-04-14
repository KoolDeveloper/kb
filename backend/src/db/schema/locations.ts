// db/schema.ts
import {
  mysqlTable,
  int,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";

import { sites } from "./sites";

export const locations = mysqlTable("locations", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  siteId: int("site_id")
    .notNull()
    .references(() => sites.id),
  createdAt: timestamp("created_at").defaultNow(),
});