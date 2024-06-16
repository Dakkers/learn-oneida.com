
import {
  Accordion as PrimitiveAccordion,
  AccordionItem as PrimitiveAccordionItem,
  AccordionTrigger as PrimitiveAccordionTrigger,
  AccordionContent as PrimitiveAccordionContent
} from "../../primitives/accordion";

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple'
}

export function Accordion ({
  children,
  type = 'single',
}: AccordionProps) {
  return (
    <PrimitiveAccordion type={type}>
      {children}
    </PrimitiveAccordion>
  )
}

interface AccordionItemProps {
  children: React.ReactNode;
  id: string;
  title: React.ReactNode;
}

Accordion.Item = function AccordionItem ({
  children,
  id,
  title,
}: AccordionItemProps) {
  return (
    <PrimitiveAccordionItem id={id} value={id}>
      <PrimitiveAccordionTrigger>{title}</PrimitiveAccordionTrigger>
      <PrimitiveAccordionContent>
        {children}
      </PrimitiveAccordionContent>
    </PrimitiveAccordionItem>
  )
}
