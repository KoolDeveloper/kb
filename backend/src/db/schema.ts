// db/schema.ts
import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
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
  location: varchar("location", { length: 255 }).notNull(),
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

export const customers = mysqlTable("customers", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phones: text("phones").notNull(), // Store as JSON string
  siteId: int("site_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
