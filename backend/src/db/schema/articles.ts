import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  primaryKey,
} from "drizzle-orm/mysql-core";

import { guild } from "./guild";
import { sites } from "./sites";
import { locations } from "./locations";

export const articles = mysqlTable("articles", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  guildId: int("guild_id")
    .notNull()
    .references(() => guild.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const articleSites = mysqlTable(
  "article_sites",
  {
    articleId: int("article_id")
      .notNull()
      .references(() => articles.id),
    siteId: int("site_id")
      .notNull()
      .references(() => sites.id),
  },
  (table) => [primaryKey({ columns: [table.articleId, table.siteId] })],
);

export const articleLocations = mysqlTable(
  "article_locations",
  {
    articleId: int("article_id")
      .notNull()
      .references(() => articles.id),
    locationId: int("location_id")
      .notNull()
      .references(() => locations.id),
  },
  (table) => [primaryKey({ columns: [table.articleId, table.locationId] })],
);
