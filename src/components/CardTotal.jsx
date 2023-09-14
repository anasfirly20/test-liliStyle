// utils
import { formatNumber } from "../helpers/utils";

// Components
import CustomModal from "../components/CustomModal";

// NextUI
import { useDisclosure } from "@nextui-org/use-disclosure";

export default function CardTotal({ dataItems, isCheckedAll }) {
  // Total Quantity of all items
  const totalQuantity = dataItems?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  //   Total price of all items
  const totalPrice = dataItems?.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const totalCost = totalQuantity * totalPrice;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="fixed border w-[25%] p-5 rounded-lg">
      <h1 className="font-bold text-2xl text-custom-black">
        Ringkasan Belanja
      </h1>
      <section className="flex justify-between mt-5 border-b pb-5">
        <p className="text-base text-custom-gray w-fit">
          Total Harga ({isCheckedAll ? totalQuantity : 0} barang)
        </p>
        <p className="text-base text-custom-gray w-[30%] text-end break-words">
          Rp{isCheckedAll ? formatNumber(totalCost) : 0}
        </p>
      </section>
      <section className="flex justify-between mt-5">
        <h3 className="font-bold text-xl text-custom-black">Total Harga:</h3>
        <h3 className="font-bold text-xl text-custom-black break-words text-end w-[40%]">
          Rp{isCheckedAll ? formatNumber(totalCost) : 0}
        </h3>
      </section>
      <section className="mt-5">
        <button
          className="bg-custom-yellow py-2 rounded-lg w-full text-white font-semibold text-lg active:opacity-80"
          onClick={onOpen}
        >
          Beli ({isCheckedAll ? totalQuantity : 0})
        </button>
      </section>
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        totalCost={totalCost}
      />
    </section>
  );
}
