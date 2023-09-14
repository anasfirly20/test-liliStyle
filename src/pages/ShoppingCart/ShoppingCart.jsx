import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getAllCarts } from "../../api/routes/Carts";
import CardItem from "../../components/CardItem";
import toast from "react-hot-toast";
import { Checkbox } from "@nextui-org/checkbox";

export default function ShoppingCart() {
  const { data } = useQuery(["cartsData"], () => getAllCarts());
  const [dataItems, setDataItems] = useState(null);
  const [isCheckedAll, setIsCheckedAll] = useState(true);

  useEffect(() => {
    if (data) {
      const updatedData = data.map((item) => ({
        ...item,
        isChecked: isCheckedAll || item.isChecked,
      }));
      setDataItems(updatedData);
    }
  }, [data]);

  const handleCheckedAll = (value) => {
    setIsCheckedAll(value);
    setDataItems((prevDataItems) =>
      prevDataItems.map((item) => ({ ...item, isChecked: value }))
    );
  };

  const toggleItemChecked = (itemId) => {
    setDataItems((prevDataItems) =>
      prevDataItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleDeleteAll = () => {
    if (isCheckedAll) {
      setDataItems([]);
      setIsCheckedAll(false);
      toast.success("All items in the cart have been deleted");
    }
  };

  return (
    <article className="min-h-screen pt-longer2 px-longer4 flex justify-between">
      <section className="w-[68%]">
        <section className="sticky top-0 bg-custom-white z-20">
          <h1 className="font-bold text-2xl border-b pb-4">Cart</h1>
          <section className="flex justify-between items-center border-b-2 w-full">
            <section className="flex gap-2 py-4">
              <Checkbox
                size="md"
                color="warning"
                isSelected={isCheckedAll}
                onValueChange={handleCheckedAll}
              />
              <p className="font-semibold">Pilih semua</p>
            </section>
            <button
              type="button"
              className={`animate ${
                !isCheckedAll
                  ? "cursor-not-allowed text-custom-gray"
                  : "active:opacity-80 text-blue-400"
              }`}
              onClick={handleDeleteAll}
              disabled={!isCheckedAll}
            >
              Delete
            </button>
          </section>
        </section>
        <section className="grid gap-10 py-10">
          {dataItems?.map((item) => {
            return (
              <CardItem
                key={item.id}
                thumbnailUrl={item?.thumbnailUrl}
                name={item?.name}
                price={item?.price}
                quantity={item?.quantity}
                isChecked={item?.isChecked}
                onToggleChecked={() => toggleItemChecked(item.id)}
              />
            );
          })}
        </section>
      </section>
      <section className="w-[30%] relative">
        <section className="fixed">HERE</section>
      </section>
    </article>
  );
}
