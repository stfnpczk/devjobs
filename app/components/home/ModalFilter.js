import { useCallback, useEffect, useRef } from "react";

export default function Modal({ open, onClose, children }) {
  const modalRef = useRef(null);

  const onClick = useCallback(
    ({ target }) => {
      const { current: el } = modalRef;
      if (target === el) {
        onClose();
      }
    },
    [onClose],
  );

  const onAnimEnd = useCallback(() => {
    const { current: el } = modalRef;
    if (!open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) {
      el.showModal();
    }
  }, [open]);

  return (
    <dialog
      className={`${!open ? "closing" : ""} relative mx-auto my-44 w-[clamp(20.4375rem,87.2vw,32.8125rem)] max-w-[29.8125rem] overflow-hidden rounded-md bg-card p-6`}
      ref={modalRef}
      onClose={onClose}
      onClick={onClick}
      onAnimationEnd={onAnimEnd}
    >
      <div>{children}</div>
    </dialog>
  );
}
