import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import { useState } from "react";
import ImageUploadPreview from "../ui/image-upload-preview";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                placeholder="e. g. Mandiri, BCA, BRI"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="e. g. 1231234224"
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="accountName">Account Name</label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                placeholder="e. g. Holder name as registered on the account"
              />
            </div>
          </div>
        </div>

        <Button className="ml-auto mt-3 rounded-lg">Add Bank Account</Button>
      </div>
    </Modal>
  );
};

export default BankInfoModal;
