export default interface ModalProps {
    isOpen: boolean
    inClose: () => void;
    children: React.ReactNode;
}