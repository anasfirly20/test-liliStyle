// NextUI
import { Checkbox } from "@nextui-org/checkbox";

// Miscellaneous
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { formatNumber } from "../helpers/utils";
import toast from "react-hot-toast";

export default function CardItem({
  thumbnailUrl,
  id,
  name,
  price,
  quantity,
  isChecked,
  toggleItemChecked,
  setDataItems,
}) {
  const oneQuantity = quantity === 1;

  // handleIncrement
  const handleIncrement = (itemId) => {
    setDataItems((prevDataItems) =>
      prevDataItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // handleDecrement
  const handleDecrement = (itemId) => {
    if (quantity > 1) {
      setDataItems((prevDataItems) =>
        prevDataItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  // handleDelete Item
  const handleDelete = (itemId) => {
    setDataItems((prevDataItems) =>
      prevDataItems.filter((item) => item.id !== itemId)
    );
    toast.success(`Produk ${name} telah dihapus`);
  };

  return (
    <section className="flex flex-wrap gap-y-6 justify-between border-b pb-5">
      <section className="flex gap-2">
        <Checkbox
          size="lg"
          color="warning"
          className="self-start"
          isSelected={isChecked}
          onValueChange={() => toggleItemChecked(id)}
        />
        <figure className="rounded-lg w-32 h-28 overflow-hidden">
          <Link to={`/${id}`}>
            <img
              loading="lazy"
              src={thumbnailUrl}
              alt={name}
              className="object-contain"
            />
          </Link>
        </figure>
        <section className="flex flex-col justify-between">
          <section>
            <Link to={`/${id}`}>{name}</Link>
            <h4 className="text-sm">Rp{formatNumber(price)}</h4>
          </section>
          <h4 className="font-semibold">
            Total Harga: Rp{formatNumber(price * quantity)}
          </h4>
        </section>
      </section>
      <section className="flex gap-12 self-end max-md:flex-row-reverse max-md:w-full">
        <button type="button" onClick={() => handleDelete(id)}>
          <Icon
            icon="material-symbols:delete-outline"
            fontSize={25}
            color="#6b6b6b"
          />
        </button>
        <section className="flex items-center gap-3">
          <button
            type="button"
            className={`border-2 rounded-full ${
              oneQuantity
                ? "border-custom-gray-2"
                : "border-custom-yellow active:opacity-70"
            }`}
            onClick={() => handleDecrement(id)}
            disabled={oneQuantity ? true : false}
          >
            <Icon
              icon="ri:subtract-fill"
              fontSize={25}
              className={`p-1 ${
                oneQuantity ? "text-custom-gray-2" : "text-black"
              }`}
            />
          </button>
          <p className="border-b w-full px-6">{quantity}</p>
          <button
            type="button"
            className="border-2 rounded-full border-custom-yellow active:opacity-70"
            onClick={() => handleIncrement(id)}
          >
            <Icon icon="material-symbols:add" fontSize={25} className=" p-1" />
          </button>
        </section>
      </section>
    </section>
  );
}
