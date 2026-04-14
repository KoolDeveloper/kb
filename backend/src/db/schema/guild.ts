import {
  mysqlTable,
  int,
  varchar,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/mysql-core";

import { relations } from "drizzle-orm";
import { members } from "./members";

export const guild = mysqlTable(
  "guild",
  {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [uniqueIndex("idx_guild_name").on(table.name)],
);

export const guildRelations = relations(guild, ({ many }) => ({
  members: many(members),
}));