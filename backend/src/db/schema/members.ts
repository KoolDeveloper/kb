import {
  mysqlTable,
  int,
  varchar,
  timestamp,
  uniqueIndex,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

import { relations } from "drizzle-orm";
import { guild } from "./guild";

export const members = mysqlTable(
  "members",
  {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    username: varchar("username", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    experience: int("experience"),
    guildId: int("guild_id")
      .notNull()
      .references(() => guild.id),
    role: mysqlEnum("role", [
      "member",
      "sub-officer",
      "officer",
      "guildMaster",
    ]).notNull(),
    passwordHash: varchar("password_hash", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_members_username").on(table.username),
    uniqueIndex("idx_members_email").on(table.email),
  ],
);

export const membersRelations = relations(members, ({ one }) => ({
  guild: one(guild, {
    fields: [members.guildId],
    references: [guild.id],
  }),
}));
