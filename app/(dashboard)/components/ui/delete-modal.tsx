import Button from "@/app/(landing)/components/ui/button";
import Modal from "./modal";

type TDeteleModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteModal = ({isOpen, onClose, onConfirm}: TDeteleModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Delete Item">
            <p>Are sure want to delete this item? If you click delete is permanently removed.</p>
            <div className="flex gap-5 mt-5">
                <Button variant="ghost" className="w-full rounded-md" onClick={onClose}>Cancel</Button>
                <Button className="w-full rounded-md" onClick={onConfirm}>Yes, delete it</Button>
            </div>
        </Modal>
    )
}

export default DeleteModal;