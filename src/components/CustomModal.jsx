// Next UI
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";

// Utils
import { formatNumber } from "../helpers/utils";

export default function App({ isOpen, onOpenChange, totalCost }) {
  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-3">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Total Belanja
              </ModalHeader>
              <ModalBody className="font-bold text-4xl">
                Rp{formatNumber(totalCost)}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

//
