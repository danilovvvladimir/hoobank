import { FC, useCallback, useEffect } from "react";
import "./Modal.scss";

interface ModalProps {
  isModalActive: boolean;
  setIsModalActive: (state: boolean) => void;
  children: any;
}

const Modal: FC<ModalProps> = ({
  isModalActive,
  setIsModalActive,
  children,
}) => {
  const handleKey = useCallback((event: KeyboardEvent) => {
    if (event.code === "Escape") {
      setIsModalActive(false);
    }
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isModalActive) {
      body?.addEventListener("keydown", handleKey);
    } else {
      body?.removeEventListener("keydown", handleKey);
    }
  }, [isModalActive, handleKey]);

  return (
    <div
      className={isModalActive ? "modal modal--active" : "modal"}
      onClick={() => setIsModalActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close"
          onClick={() => setIsModalActive(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#ffffff"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
