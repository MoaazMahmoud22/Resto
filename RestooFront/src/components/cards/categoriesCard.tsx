function CategoriesCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode | string;
  title: string;
  items: number;
}) {
  return (
    <div className="col-lg-3 col-md-6 res-mb-20px" data-aos="fade-right">
      <div className="categories-item  ">
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
    </div>
  );
}

export default CategoriesCard;
