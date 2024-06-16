
import React from "react";
import { PhoneNumbersArticle } from "~/components/articles/PhoneNumbers";

export const meta: any = () => {
  return [
    { title: "Phone Numbers" },
    {
      name: "description",
      content: "Examples of dialogue involving phone numbers in Oneida",
    },
  ];
};

export default function ArticlesPhoneNumbers() {
  return (
    <div>
      <PhoneNumbersArticle />
    </div>
  );
}
