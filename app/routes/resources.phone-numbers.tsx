import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { PhoneNumbersResource } from "~/components/resources/PhoneNumbers";

export const meta: MetaFunction = () => {
  return [
    { title: "Phone Numbers" },
    {
      name: "description",
      content: "Examples of dialogue involving phone numbers in Oneida",
    },
  ];
};

export default function ResourcesPhoneNumbers() {
  return (
    <div>
      <PhoneNumbersResource />
    </div>
  );
}
