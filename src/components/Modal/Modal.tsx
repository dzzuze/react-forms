import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) {
        return null;
    }

    const domRoot = document.getElementById('modal-root')!;

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen === true) {
            containerRef.current?.focus();
        }
    }, [isOpen]);

    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" 
        onClick={onClose}
        >
            <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl" 
                ref={containerRef} 
                tabIndex={-1} 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        domRoot
    )
}