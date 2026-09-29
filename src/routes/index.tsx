import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "燃點真愛 | Kindle True Love" },
      { name: "description", content: "燃點真愛以義工服務、音樂與藝術推動社區共融，將愛與溫暖傳遞。" },
      { property: "og:title", content: "燃點真愛 | Kindle True Love" },
      { property: "og:description", content: "將心中愛盡變力量，以行動回饋社會。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});