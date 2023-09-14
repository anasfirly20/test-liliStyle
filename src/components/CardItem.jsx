import { Icon } from "@iconify/react";
import { useEffect } from "react";

export default function CardItem({
  thumbnailUrl,
  name,
  price,
  quantity,
  isCheckedAll,
  isChecked,
  onToggleChecked,
}) {
  return (
    <section className="flex justify-between border-b pb-5">
      <section className="flex gap-2">
        <input
          type="checkbox"
          className="self-start"
          checked={isCheckedAll ? isChecked : false}
          onChange={onToggleChecked}
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
          <button type="button" className="border-2 rounded-full">
            <Icon icon="ri:subtract-fill" fontSize={25} className=" p-1" />
          </button>
          <p className="border-b w-full px-6">{quantity}</p>
          <button type="button" className="border-2 rounded-full">
            <Icon icon="material-symbols:add" fontSize={25} className=" p-1" />
          </button>
        </section>
      </section>
    </section>
  );
}
