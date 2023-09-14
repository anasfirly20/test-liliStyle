// React query
import { useQuery, useMutation } from "react-query";

// Api routes
import { getAllCarts } from "../../api/routes/Carts";

// Miscellaneous
import { Icon } from "@iconify/react";
import CardItem from "../../components/CardItem";

export default function ShoppingCart() {
  const { data } = useQuery(["cartsData"], () => getAllCarts());

  return (
    <article className="min-h-screen pt-longer2 px-longer4">
      <section>
        <h1 className="font-bold text-2xl border-b pb-4">Cart</h1>
        <section className="flex justify-between items-center border-b-2 w-full">
          <section className="flex gap-2 py-4">
            <input type="checkbox" />
            <p className="font-semibold">Pilih semua</p>
          </section>
          <button type="button" className="text-blue-400">
            Delete
          </button>
        </section>
        <section className="grid gap-10 py-10">
          {data?.map((item) => {
            return (
              <CardItem
                key={item.id}
                thumbnailUrl={item?.thumbnailUrl}
                name={item?.name}
                price={item?.price}
                quantity={item?.quantity}
              />
            );
          })}
        </section>
      </section>
    </article>
  );
}
