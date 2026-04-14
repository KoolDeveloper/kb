import {
  mysqlTable,
  int,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";

import { guild } from "./guild";

export const sites = mysqlTable("sites", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  guildId: int("guild_id")
    .notNull()
    .references(() => guild.id),
  createdAt: timestamp("created_at").defaultNow(),
});