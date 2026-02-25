// db/schema.ts
import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  uniqueIndex,
  primaryKey,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  teamId: int("team_id")
    .notNull()
    .references(() => teams.id),
  role: varchar("role", { length: 255 }),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const teams = mysqlTable("teams", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const articles = mysqlTable("articles", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  teamId: int("team_id")
    .notNull()
    .references(() => teams.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const sites = mysqlTable("sites", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  teamId: int("team_id")
    .notNull()
    .references(() => teams.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const locations = mysqlTable("locations", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  siteId: int("site_id")
    .notNull()
    .references(() => sites.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const articleSites = mysqlTable("article_sites", {
  articleId: int("article_id")
    .notNull()
    .references(() => articles.id),
  siteId: int("site_id")
    .notNull()
    .references(() => sites.id),
});

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

export const customers = mysqlTable(
  "customers",
  {
    id: int("id").autoincrement().notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    phones: text("phones").notNull(), // JSON string or normalize
    siteId: int("site_id")
      .notNull()
      .references(() => sites.id),
    teamId: int("team_id")
      .notNull()
      .references(() => teams.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.id] }),
    uniqueIndex("idx_customers_email").on(table.email),
  ],
);
