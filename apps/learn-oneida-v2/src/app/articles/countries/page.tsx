
import React from "react";
import { CountriesArticle } from "~/components/articles/Countries";

const meta: any = () => {
  return [
    { title: "Countries" },
    {
      name: "description",
      content: "Countries in Oneida",
    },
  ];
};

export default function ArticlesCountries() {
  return (
    <div>
      <CountriesArticle />
    </div>
  );
}
