import { Icon } from "@iconify/react";
import { Checkbox } from "@nextui-org/checkbox";

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

  return (
    <section className="flex justify-between border-b pb-5">
      <section className="flex gap-2">
        <Checkbox
          size="md"
          color="warning"
          className="self-start"
          isSelected={isChecked}
          onValueChange={() => toggleItemChecked(id)}
        />
        <figure className="rounded-lg w-32 h-28 overflow-hidden">
          <img src={thumbnailUrl} alt={name} className="object-contain" />
        </figure>
        <section>
          <h4>{name}</h4>
          <h4>Rp.{price}</h4>
        </section>
      </section>
      <section className="flex gap-12 self-end">
        <button type="button">
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
              quantity === 1
                ? "border-custom-gray-2"
                : "border-custom-yellow active:opacity-70"
            }`}
            onClick={() => handleDecrement(id)}
            disabled={quantity === 1 ? true : false}
          >
            <Icon icon="ri:subtract-fill" fontSize={25} className="p-1" />
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
