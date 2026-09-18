import type { Metadata } from "next";
import BlogList from "./blog-list";

export const metadata: Metadata = {
  title: "Journal | Northstar",
  description: "Practical thinking on brand, experience, and growth for teams moving with intent.",
};

export default function BlogPage() {
  return <BlogList />;
}
