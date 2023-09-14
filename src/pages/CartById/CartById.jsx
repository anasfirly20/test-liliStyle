import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

// Api
import { getCartById } from "../../api/routes/Carts";

// Componennts
import CardDetail from "../../components/CardDetail";

export default function CartById() {
  const { id } = useParams();

  const { data } = useQuery(["cartsData", id], () => getCartById(id));

  return (
    <article className="min-h-screen flex justify-center items-center">
      <CardDetail {...data} />
    </article>
  );
}
