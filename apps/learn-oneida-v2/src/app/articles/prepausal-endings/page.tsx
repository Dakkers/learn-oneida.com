import React from "react";
import { PrepausalEndingsArticle } from "~/components/articles/PrepausalEndings";

const meta: any = () => {
  return [
    { title: "Prepausal Endings" },
    {
      name: "description",
      content: "Prepausal vs. medial endings in Oneida",
    },
  ];
};

export default function ArticlesPrepausalEndings() {
  return <PrepausalEndingsArticle />;
}
