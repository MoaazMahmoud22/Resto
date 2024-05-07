import { ordersInt } from "../../data/order";

function OrderData({ order }: { order: ordersInt }) {
  const { title, date, price, status } = order;
  return (
    <tr>
      <td>{title}</td>
      <td>{date}</td>
      <td>${price}</td>
      <td>
        <div className="delete-action ">
          <a href="" className={status.toLowerCase()}>
            {status}
          </a>
        </div>
      </td>
      <td>
        <div className="delete-action ">
          <button className="view-btn">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6084 11.7904C18.5748 10.7737 18.5748 9.22894 17.6084 8.21222C15.9786 6.49741 13.1794 4.16797 9.99984 4.16797C6.82024 4.16797 4.02108 6.49741 2.39126 8.21222C1.42492 9.22894 1.42492 10.7737 2.39126 11.7904C4.02108 13.5052 6.82024 15.8346 9.99984 15.8346C13.1794 15.8346 15.9786 13.5052 17.6084 11.7904ZM9.99984 12.5013C11.3805 12.5013 12.4998 11.382 12.4998 10.0013C12.4998 8.62059 11.3805 7.5013 9.99984 7.5013C8.61913 7.5013 7.49984 8.62059 7.49984 10.0013C7.49984 11.382 8.61913 12.5013 9.99984 12.5013Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default OrderData;
