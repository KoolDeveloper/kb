// db/schema.ts
import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  uniqueIndex,
  primaryKey,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

export const members = mysqlTable("members", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  guildId: int("guild_id")
    .notNull()
    .references(() => guild.id),
  role: mysqlEnum("role", ["member", "sub-officer","officer", "guildMaster"]),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const guild = mysqlTable("guild", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

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

export const sites = mysqlTable("sites", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  guildId: int("guild_id")
    .notNull()
    .references(() => guild.id),
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
}, (table) => [primaryKey({columns: [table.articleId, table.siteId]})]);

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
  customerId: int("customer_id").notNull().references(()=> customers.id),
})