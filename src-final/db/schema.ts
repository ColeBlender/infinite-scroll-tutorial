import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  imageUrl: text("image_url")
    .notNull()
    .default("https://picsum.photos/300/200"),
});

export type Post = typeof posts.$inferSelect;
