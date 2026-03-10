/* SMOOTH BUILDER 5.0 - MODAL */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const ReactDOM = global.ReactDOM;
  const { useEffect, useRef, useCallback } = React;

  function Modal({ open, onClose, title, children, footer, size = 'md' }) {
    const overlayRef = useRef(null);
    const dialogRef = useRef(null);

    const handleClose = useCallback(() => { if (typeof onClose === 'function') onClose(); }, [onClose]);

    useEffect(() => {
      if (!open) return;
      const prev = document.activeElement;
      document.body.style.overflow = 'hidden';
      const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
      document.addEventListener('keydown', onKey);
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
        if (prev && prev.focus) prev.focus();
      };
    }, [open, handleClose]);

    if (!open) return null;

    const sizeClass = { sm: 'modal__dialog--sm', md: 'modal__dialog--md', lg: 'modal__dialog--lg', xl: 'modal__dialog--xl' }[size] || 'modal__dialog--md';

    const modal = (
      <div className="modal" ref={overlayRef} onMouseDown={(e) => { if (e.target === overlayRef.current) handleClose(); }}>
        <div className={`modal__dialog ${sizeClass}`} role="dialog" aria-modal="true" ref={dialogRef} onMouseDown={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <div className="modal__title">{title}</div>
            <button type="button" className="modal__close" onClick={handleClose}>×</button>
          </div>
          <div className="modal__content">{children}</div>
          {footer && <div className="modal__footer">{footer}</div>}
        </div>
      </div>
    );

    return ReactDOM.createPortal(modal, document.body);
  }

  SB5.components.Modal = Modal;
})(window);
