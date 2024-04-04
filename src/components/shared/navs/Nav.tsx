import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNav } from "@/store";

function Nav() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {useNav.getState().items.map((item) => (
        <AccordionItem value={item.title}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>
            {Array.isArray(item.description) ? (
              item.description.map((subItem) => (
                <Button variant="titleAccordion">{subItem}</Button>
              ))
            ) : (
              <Button>{item.description}</Button>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Nav;
