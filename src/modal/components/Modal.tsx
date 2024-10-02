import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalProps from "../interface/ModalProps";
import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

const Modal = ({isOpen, children}: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;