// React query
import { useQuery, useMutation } from "react-query";

// Api routes
import { getAllCarts } from "../../api/routes/Carts";

export default function ShoppingCart() {
  const { data } = useQuery(["cartsData"], () => getAllCarts());

  return (
    <article>
      <h1>Cart</h1>
    </article>
  );
}
