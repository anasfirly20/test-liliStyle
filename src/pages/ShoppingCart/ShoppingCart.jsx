import { useState, useEffect } from "react";

// Api
import { getAllCarts } from "../../api/routes/Carts";

// Components
import CardItem from "../../components/CardItem";
import CardTotal from "../../components/CardTotal";

// Miscellaneous
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { Checkbox } from "@nextui-org/checkbox";

export default function ShoppingCart() {
  const { data } = useQuery(["cartsData"], () => getAllCarts());
  const [dataItems, setDataItems] = useState(null);
  const [isCheckedAll, setIsCheckedAll] = useState(true);

  // Add a new prop "isChecked" & store the data from API inside a new state
  useEffect(() => {
    if (data) {
      const updatedData = data.map((item) => ({
        ...item,
        isChecked: isCheckedAll || item.isChecked,
      }));
      setDataItems(updatedData);
    }
  }, [data]);

  // handleCheckAll
  const handleCheckedAll = (value) => {
    setIsCheckedAll(value);
    setDataItems((prevDataItems) =>
      prevDataItems.map((item) => ({ ...item, isChecked: value }))
    );
  };

  // handleCheck for single checkbox
  const toggleItemChecked = (itemId) => {
    setDataItems((prevDataItems) =>
      prevDataItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // handle delete all
  const handleDeleteAll = () => {
    if (isCheckedAll && dataItems.length) {
      setDataItems([]);
      setIsCheckedAll(false);
      toast.success("Semua barang telah dihapus");
    }
  };

  // DEBUG
  useEffect(() => {
    // console.log(">>", dataItems);
  }, [dataItems]);

  return (
    <article className="min-h-screen pt-longer2 px-longer4 flex justify-between">
      <section className="w-[68%]">
        <section className="sticky top-0 bg-custom-white z-20">
          <h1 className="text-custom-black font-bold text-2xl border-b pb-4">
            Cart
          </h1>
          <section className="flex justify-between items-center border-b-2 w-full">
            <section className="flex gap-2 py-4">
              <Checkbox
                size="lg"
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
              disabled={!isCheckedAll ? true : false}
            >
              Delete
            </button>
          </section>
        </section>
        <section className="grid gap-10 py-10">
          {dataItems?.map((item) => {
            return (
              <CardItem
                key={item?.id}
                id={item?.id}
                thumbnailUrl={item?.thumbnailUrl}
                name={item?.name}
                price={item?.price}
                quantity={item?.quantity}
                isChecked={item?.isChecked}
                toggleItemChecked={toggleItemChecked}
                setDataItems={setDataItems}
              />
            );
          })}
        </section>
      </section>
      <section className="w-[30%]">
        <CardTotal dataItems={dataItems} isCheckedAll={isCheckedAll} />
      </section>
    </article>
  );
}
