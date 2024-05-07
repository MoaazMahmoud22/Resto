import { useState } from "react";
import AccordionItem from "./accordionItem";

function Accordion() {
  const [activeAccrodion, setActiveAccrodion] = useState(
    "What type of cuisine does your restaurant offer?"
  );
  return (
    <div className="faq-main">
      <div className="accordion" id="accordionExample">
        <AccordionItem
          title="What type of cuisine does your restaurant offer?"
          summery="We offer [insert type of cuisine, e.g., Italian, Asian fusion,
              Mediterranean] cuisine that combines traditional flavors with
              modern twists."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
        <AccordionItem
          title="Can I make a reservation online?"
          summery="We offer [insert type of cuisine, e.g., Italian, Asian fusion,
              Mediterranean] cuisine that combines traditional flavors with
              modern twists."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
        <AccordionItem
          title="Is there a dress code for dining at your restaurant?"
          summery="We offer [insert type of cuisine, e.g., Italian, Asian fusion,
              Mediterranean] cuisine that combines traditional flavors with
              modern twists."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
        <AccordionItem
          title="Is there a dress code for dining your restaurant?"
          summery="We offer [insert type of cuisine, e.g., Italian, Asian fusion,
              Mediterranean] cuisine that combines traditional flavors with
              modern twists."
          isActive={activeAccrodion}
          setActive={setActiveAccrodion}
        />
      </div>
    </div>
  );
}

export default Accordion;
