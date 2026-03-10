/* SMOOTH BUILDER 5.0 - DRAGGABLE LIST */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useMemo, useState, useCallback } = React;

  function moveItem(arr, from, to) { const next = arr.slice(); const [moved] = next.splice(from, 1); next.splice(to, 0, moved); return next; }

  function DraggableList({ sections, order, activeId, onReorder, onSelect, getLabel, getMeta }) {
    const list = sections || [];
    const ids = order || [];
    const byId = useMemo(() => new Map(list.map(s => [s.id, s])), [list]);
    const ordered = useMemo(() => ids.map(id => byId.get(id)).filter(Boolean), [ids, byId]);
    const [draggedId, setDraggedId] = useState(null);

    const handleKeyDown = useCallback((e, id) => {
      const idx = ids.indexOf(id);
      if ((e.altKey || e.ctrlKey) && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault();
        const dir = e.key === 'ArrowUp' ? -1 : 1;
        const nextIdx = Math.max(0, Math.min(ids.length - 1, idx + dir));
        if (nextIdx !== idx) onReorder?.(moveItem(ids, idx, nextIdx));
      } else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect?.(id); }
    }, [ids, onReorder, onSelect]);

    return (
      <div className="draggable-list">
        <div className="draggable-list__items" role="list">
          {ordered.map((section) => {
            const id = section.id;
            const label = getLabel?.(section) || section.type || id;
            const meta = getMeta?.(section) || section.variant || '';
            return (
              <div key={id} className={`draggable-item ${activeId === id ? 'is-active' : ''} ${draggedId === id ? 'is-dragging' : ''}`} role="listitem" tabIndex={0} draggable onClick={() => onSelect?.(id)} onKeyDown={(e) => handleKeyDown(e, id)} onDragStart={(e) => { if (!e.target.closest('.draggable-handle')) { e.preventDefault(); return; } setDraggedId(id); e.dataTransfer.effectAllowed = 'move'; }} onDragOver={(e) => { e.preventDefault(); if (draggedId && draggedId !== id) { const from = ids.indexOf(draggedId), to = ids.indexOf(id); if (from !== -1 && to !== -1) onReorder?.(moveItem(ids, from, to)); } }} onDragEnd={() => setDraggedId(null)}>
                <span className="draggable-handle" title="Drag">⋮⋮</span>
                <div className="draggable-meta"><div className="draggable-title">{label}</div>{meta && <div className="draggable-subtitle">{meta}</div>}</div>
                <div className="draggable-actions">
                  <button type="button" className="draggable-btn" onClick={(e) => { e.stopPropagation(); const i = ids.indexOf(id); if (i > 0) onReorder?.(moveItem(ids, i, i - 1)); }}>↑</button>
                  <button type="button" className="draggable-btn" onClick={(e) => { e.stopPropagation(); const i = ids.indexOf(id); if (i < ids.length - 1) onReorder?.(moveItem(ids, i, i + 1)); }}>↓</button>
                </div>
              </div>
            );
          })}
          {!ordered.length && <div className="draggable-list__empty">Keine Sections.</div>}
        </div>
        <div className="draggable-list__hint"><span>Alt + ↑↓ zum Verschieben</span></div>
      </div>
    );
  }

  SB5.components.DraggableList = DraggableList;
})(window);
