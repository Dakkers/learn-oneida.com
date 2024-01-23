import type { MetaFunction } from "@remix-run/node";
import React from "react";
import dataLolJson from "../data/data-ese-is-here.json";
import { Text } from "@/design/components/text";
import { ParadigmTable } from "~/components/ParadigmTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/design/primitives/accordion";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 4" },
    { name: "description", content: "Module 4 of the Oneida curriculum" },
  ];
};

export default function LearnModule04() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Text as="h1" variant="headline">
        Module 4
      </Text>

      <p className="mt-8 mb-4">
        <b>NOTE:</b> This page is still under construction!
      </p>

      <Text>
        In this module, we&lsquo;ll cover the following:
        <ul>
          <li>
            &quot;Being here&quot;
            <ul>
              <li>Someone is here</li>
              <li>Someone was here</li>
              <li>Someone will be here</li>
              <li>Someone would/might be here</li>
              <li>Someone is not here</li>
              <li>Someone was not here</li>
              <li>Someone will not be here</li>
            </ul>
          </li>

          <li>
            &quot;Wanting something (to happen)&quot;
            <ul>
              <li>To want now</li>
              <li>To not want now</li>
              <li>To have wanted to</li>
              <li>To have previously not wanted to</li>
            </ul>
          </li>

          <li>
            &quot;Being there&quot; (temporarily)
            <ul>
              <li>Someone is there</li>
              <li>Someone was there</li>
              <li>Someone will be there</li>
              <li>Someone would/might be there</li>
              <li>Someone is not there</li>
              <li>Someone was not there</li>
              <li>Someone will not be there</li>
            </ul>
          </li>

          <li>
            &quot;Being there&quot; (usually)
            <ul>
              <li>Someone is there</li>
              <li>Someone was there</li>
              <li>Someone will be there</li>
              <li>Someone would/might be there</li>
              <li>Someone is not there</li>
              <li>Someone was not there</li>
              <li>Someone will not be there</li>
            </ul>
          </li>

          <li>
            Residing at an address / being home
            <ul>
              <li>Someone is at home</li>
              <li>Someone was at home</li>
              <li>Someone will be at home</li>
              <li>Someone would/might be at home</li>
              <li>Someone is not at home</li>
              <li>Someone was not at home</li>
              <li>Someone will not be at home</li>
            </ul>
          </li>

          <li>
            Living in an area or region
            <ul>
              <li>Someone lives there</li>
              <li>Someone used to live there</li>
              <li>Someone will live there</li>
              <li>Someone would/might live there</li>
              <li>Someone doesn&lsquo;t live there</li>
              <li>Someone didn&lsquo;t used to live there</li>
              <li>Someone will not live there</li>
            </ul>
          </li>

          <li>Times of day</li>
          <li>Times of year</li>
          <li>Days of the week</li>
          <li>Months of the year</li>
          <li>Clock time (what time it is)</li>
          <li>Time durations</li>
          <li>Phone number</li>
          <li>Someone&lsquo;s house</li>
          <li>Someone&lsquo;s place of work</li>
          <li>Roads of Oneida Nation</li>
          <li>Cities</li>
          <li>Countries</li>
          <li>In the house</li>
          <li>At someone&lsquo;s place</li>
          <li>Places in the community</li>
          <li>Coming from a place</li>
        </ul>
      </Text>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Someone is here</AccordionTrigger>
          <AccordionContent>
            <ParadigmTable
              columnVisibility={{
                pronounEnglish: false,
                pronounOneida: false,
                translation: false,
              }}
              data={dataLolJson}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
