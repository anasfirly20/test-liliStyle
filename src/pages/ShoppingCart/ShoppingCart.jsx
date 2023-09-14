// React query
import { useQuery, useMutation } from "react-query";

// Api routes
import { getAllCarts } from "../../api/routes/Carts";

export default function ShoppingCart() {
  const { data } = useQuery(["cartsData"], () => getAllCarts());

  return (
    <div>
      <h1>ShoppingCart</h1>
    </div>
  );
}
