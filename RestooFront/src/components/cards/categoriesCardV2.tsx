function CategoriesCardV2({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode | string;
  title: string;
  items: number;
}) {
  return (
    <div className="categories-item" data-aos="fade-up">
      <div className="categories-icon">
        <div className="icon">
          <span>{icon}</span>
        </div>
      </div>

      <div className="categories-item-text">
        <h3>{title}</h3>
        <h4> {items} items</h4>
      </div>
    </div>
  );
}

export default CategoriesCardV2;
