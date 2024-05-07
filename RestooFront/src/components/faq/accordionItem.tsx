function AccordionItem({
  title,
  summery,
  isActive,
  setActive,
}: {
  title: string;
  summery: string;
  isActive: string;
  setActive: (title: string) => void;
}) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${
            isActive === title ? "" : " collapsed"
          } `}
          onClick={() => setActive(title)}
        >
          {title}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${
          isActive === title ? "show" : ""
        }`}
      >
        <div className="accordion-body">{summery}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
