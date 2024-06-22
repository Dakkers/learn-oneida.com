
import React from "react";
import { RelationshipsArticle } from "~/components/articles/Relationships";

const meta: any = () => {
  return [
    { title: "Relationships" },
    {
      name: "description",
      content: "Relationships in Oneida",
    },
  ];
};

export default function ArticlesRelationships() {
  return (
    <div>
      <RelationshipsArticle />
    </div>
  );
}
