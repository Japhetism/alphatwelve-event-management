import React from "react";
import { CloseIcon } from "../../assets/icons/closeIcon";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    
    const { isDarkMode } = useDarkMode();

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isDarkMode ? "dark-mode" : ""}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <CloseIcon color="#334155" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
