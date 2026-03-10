/* SMOOTH BUILDER 5.0 - TOAST */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useState, useCallback, useEffect, useRef, createContext, useContext, useMemo } = React;

  const ToastContext = createContext(null);

  function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const timersRef = useRef(new Map());

    const dismiss = useCallback((id) => {
      setToasts(prev => prev.filter(t => t.id !== id));
      const timer = timersRef.current.get(id);
      if (timer) { clearTimeout(timer); timersRef.current.delete(id); }
    }, []);

    const push = useCallback((opts) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const toast = { id, type: opts.type || 'info', message: opts.message || '', title: opts.title || null };
      setToasts(prev => [toast, ...prev].slice(0, 4));
      const duration = opts.duration !== undefined ? opts.duration : 4000;
      if (duration > 0) {
        const t = setTimeout(() => dismiss(id), duration);
        timersRef.current.set(id, t);
      }
      return id;
    }, [dismiss]);

    const api = useMemo(() => ({
      push, dismiss,
      success: (message, opts = {}) => push({ ...opts, type: 'success', message }),
      error: (message, opts = {}) => push({ ...opts, type: 'error', message }),
      info: (message, opts = {}) => push({ ...opts, type: 'info', message })
    }), [push, dismiss]);

    return (
      <ToastContext.Provider value={api}>
        {children}
        <div className="toast-viewport">
          {toasts.map(t => (
            <div key={t.id} className={`toast toast--${t.type}`} role={t.type === 'error' ? 'alert' : 'status'}>
              <div className="toast__body">
                <div className="toast__content">
                  {t.title && <div className="toast__title">{t.title}</div>}
                  <div className="toast__message">{t.message}</div>
                </div>
                <button type="button" className="toast__close" onClick={() => dismiss(t.id)}>×</button>
              </div>
            </div>
          ))}
        </div>
      </ToastContext.Provider>
    );
  }

  function useToast() {
    const ctx = useContext(ToastContext);
    return ctx || { push: () => {}, dismiss: () => {}, success: () => {}, error: () => {}, info: () => {} };
  }

  SB5.components.ToastProvider = ToastProvider;
  SB5.components.useToast = useToast;
})(window);
