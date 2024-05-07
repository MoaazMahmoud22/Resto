import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import Error from "../../components/Error.tsx";

interface Meal {
  foodId: string;
  foodName: string;
  image: string;
  description: string;
  price: number;
}

interface HttpResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

const requestConfig: {} = {};

function ViewFoodAndCategory() {
  const {
    data: loadedMeals,
    isLoading,
    error,
    sendRequest,
  }: HttpResult<Meal[]> = useHttp<Meal[]>(
    "http://localhost:9090/auth/food/all",
    requestConfig,
    []
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const handleDelete = async (foodId: string) => {
    try {
      const token = getToken();
      if (!token) {
        console.error("Token not found.");
        return;
      }

      const response = await fetch(
        `http://localhost:9090/admin/${foodId}`,
        {
          method: "DELETE",headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete food.");
      }
      sendRequest(); // Refresh the list of meals after deleting
    } catch (error) {
      console.error("Error deleting food:", error);
    }
  };
  const getToken = () => {
    return sessionStorage.getItem("token");
  };

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <section className="popular s-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="popular-head">
              <h2>Food Items</h2>
            </div>
          </div>
        </div>

        <div className="row popular-item-box-mt">
          {loadedMeals?.map((food) => (
            <div key={food.foodId} className="col-lg-4 col-md-6">
              <div className="card">
                <img src={food.image} alt={food.foodName} />
                <div className="card-body">
                  <h5 className="card-title">{food.foodName}</h5>
                  <p className="card-text">{food.description}</p>
                  <p className="card-text">${food.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(food.foodId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ViewFoodAndCategory;
