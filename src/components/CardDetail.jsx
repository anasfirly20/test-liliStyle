import React from "react";
import { useNavigate } from "react-router-dom";

// Miscellaneous
import { Link } from "react-router-dom";
import { formatNumber } from "../helpers/utils";
import { Icon } from "@iconify/react";

export default function CardDetail({ name, price, thumbnailUrl, quantity }) {
  const navigate = useNavigate();

  return (
    <>
      <Link to={-1} className="absolute top-10 left-10 flex items-center group">
        <Icon
          icon="iconamoon:arrow-left-2-light"
          fontSize={30}
          className="group-hover:-translate-x-2 animate-longer3"
        />
        Kembali
      </Link>
      <section className="border rounded-lg overflow-hidden">
        <figure>
          <img src={thumbnailUrl} alt={name} className="object-contain" />
        </figure>
        <section className="p-5 space-y-3">
          <h3 className="font-semibold text-xl">{name}</h3>
          <p>Rp{price && formatNumber(price)}</p>
          <section className="flex justify-between">
            <section className="grid">
              <p className="underline underline-offset-2">Jumlah barang</p>
              <p>x{quantity}</p>
            </section>
            <section className="grid">
              <p className="underline underline-offset-2">Total Harga</p>
              <span className="font-semibold">
                Rp{formatNumber(quantity * price)}
              </span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
