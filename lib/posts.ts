import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  keywords: string[];
  difficulty: "iniciante" | "intermediário" | "avançado";
  featured: boolean;
  content: string;
  author?: string;
}

export function getPostBySlug(slug: string): Post | null {
  const files = fs.readdirSync(postsDirectory);

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        category: data.category,
        date: data.date,
        keywords: data.keywords || [],
        difficulty: data.difficulty || "intermediário",
        featured: data.featured || false,
        author: data.author || "Maturidade Neurodivergente",
        content,
      };
    }
  }

  return null;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);
  const posts: Post[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    posts.push({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      category: data.category,
      date: data.date,
      keywords: data.keywords || [],
      difficulty: data.difficulty || "intermediário",
      featured: data.featured || false,
      author: data.author || "Maturidade Neurodivergente",
      content,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
