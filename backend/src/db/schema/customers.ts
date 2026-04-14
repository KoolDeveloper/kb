import {
  mysqlTable,
  int,
  varchar,
  timestamp,
  uniqueIndex,
  primaryKey,
} from "drizzle-orm/mysql-core";

import { sites } from "./sites";
import { guild } from "./guild";

export const customers = mysqlTable(
  "customers",
  {
    id: int("id").autoincrement().notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    siteId: int("site_id")
      .notNull()
      .references(() => sites.id),
    guildId: int("guild_id")
      .notNull()
      .references(() => guild.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.id] }),
    uniqueIndex("idx_customers_email").on(table.email),
  ],
);

export const customer_phones = mysqlTable("customer_phones", {
  id: int("id").autoincrement().notNull(),
  customerId: int("customer_id")
    .notNull()
    .references(() => customers.id),
});