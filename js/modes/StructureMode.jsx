/* SMOOTH BUILDER 5.2 - STRUCTURE MODE SIDEBAR (Krug IA) */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.modes = SB5.modes || {};
  const React = global.React;
  const { useState, useMemo, useCallback, useEffect, useRef } = React;

  /* ─────────────────────────────────────────────────────────────
     SEARCH COMPONENT - Fuzzy search mit Synonymen
     ───────────────────────────────────────────────────────────── */
  function SectionSearch({ sections, categories, onSelect, onClose }) {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, []);

    // Keyboard shortcut listener
    useEffect(() => {
      const handler = (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          inputRef.current?.focus();
        }
        if (e.key === 'Escape') {
          setQuery('');
          onClose?.();
        }
      };
      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
    }, [onClose]);

    const results = useMemo(() => {
      if (!query.trim()) return [];
      const q = query.toLowerCase().trim();
      const sectionList = Object.values(sections);
      
      return sectionList.filter(s => {
        // Name match
        if (s.name.toLowerCase().includes(q)) return true;
        // Type match
        if (s.type.toLowerCase().includes(q)) return true;
        // Keyword match
        if (s.keywords?.some(kw => kw.toLowerCase().includes(q))) return true;
        return false;
      }).slice(0, 8); // Max 8 Resultate
    }, [query, sections]);

    return (
      <div className="section-search">
        <div className="section-search__input-wrap">
          <span className="section-search__icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="section-search__input"
            placeholder="Suche... (⌘K)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button 
              type="button" 
              className="section-search__clear"
              onClick={() => setQuery('')}
            >×</button>
          )}
        </div>
        {results.length > 0 && (
          <div className="section-search__results">
            {results.map(s => (
              <button
                key={s.type}
                type="button"
                className="section-search__result"
                onClick={() => {
                  onSelect(s.type);
                  setQuery('');
                }}
              >
                <span className="section-search__result-icon">{s.icon}</span>
                <span className="section-search__result-name">{s.name}</span>
                <span className="section-search__result-cat">{categories[s.category]?.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     CATEGORY COMPONENT - Kollabierbare Kategorie
     ───────────────────────────────────────────────────────────── */
  function SectionCategory({ category, sections, isCollapsed, onToggle, onAddSection, activeSections }) {
    const sectionList = Object.values(sections).filter(s => s.category === category.id);
    const activeCount = activeSections.filter(as => sectionList.some(s => s.type === as.type)).length;
    const isPrimary = category.id === 'primary';

    return (
      <div className={`section-category ${isPrimary ? 'section-category--primary' : ''} ${isCollapsed ? 'is-collapsed' : ''}`}>
        <button 
          type="button" 
          className="section-category__header"
          onClick={() => !isPrimary && onToggle()}
        >
          <span className="section-category__icon">{category.icon}</span>
          <span className="section-category__name">{category.name}</span>
          {!isPrimary && (
            <>
              <span className="section-category__count">({sectionList.length})</span>
              <span className="section-category__chevron">{isCollapsed ? '▸' : '▾'}</span>
            </>
          )}
        </button>
        
        {!isCollapsed && (
          <div className="section-category__items">
            {sectionList.map(s => {
              const isActive = activeSections.some(as => as.type === s.type);
              return (
                <button
                  key={s.type}
                  type="button"
                  className={`section-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => onAddSection(s.type)}
                >
                  <span className="section-item__check">{isActive ? '✓' : ''}</span>
                  <span className="section-item__icon">{s.icon}</span>
                  <span className="section-item__name">{s.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     MAIN SIDEBAR COMPONENT
     ───────────────────────────────────────────────────────────── */
  function StructureSidebar({ state, dispatch, SidebarSection }) {
    const layout = state?.layout || { sections: [], order: [], spacing: {} };
    const ui = state?.ui || {};
    const ActionTypes = SB5.core.state?.ActionTypes || {};

    const DraggableList = SB5.components.DraggableList;
    const SpacingSlider = SB5.components.SpacingSlider;
    const VariantPicker = SB5.components.VariantPicker;

    // Neue Datenstruktur mit categories
    const sectionsData = SB5.data?.sections?.sections || SB5.data?.sections || {};
    const categoriesData = SB5.data?.sections?.categories || {
      primary: { id: 'primary', name: 'Hauptbereiche', icon: '⭐' },
      trust: { id: 'trust', name: 'Vertrauen', icon: '🏆' },
      content: { id: 'content', name: 'Inhalt', icon: '📄' },
      extras: { id: 'extras', name: 'Extras', icon: '⚙️' }
    };
    const categoryOrder = SB5.data?.sections?.categoryOrder || ['primary', 'trust', 'content', 'extras'];

    // Collapsed state für Kategorien
    const [collapsedCategories, setCollapsedCategories] = useState(() => {
      const initial = {};
      Object.keys(categoriesData).forEach(id => {
        initial[id] = categoriesData[id]?.collapsed ?? (id !== 'primary');
      });
      return initial;
    });

    const toggleCategory = useCallback((catId) => {
      setCollapsedCategories(prev => ({ ...prev, [catId]: !prev[catId] }));
    }, []);

    const activeSection = useMemo(() => 
      layout.sections.find(s => s.id === ui.activeSection), 
      [layout.sections, ui.activeSection]
    );
    const activeSpacing = ui.activeSection 
      ? (layout.spacing?.[ui.activeSection] || { pt: 64, pb: 64 }) 
      : null;

    const addSection = useCallback((type) => 
      dispatch?.({ type: ActionTypes.ADD_SECTION, payload: { type } }), 
      [dispatch, ActionTypes]
    );
    const reorder = useCallback((newOrder) => 
      dispatch?.({ type: ActionTypes.REORDER, payload: newOrder }), 
      [dispatch, ActionTypes]
    );
    const selectSection = useCallback((id) => 
      dispatch?.({ type: ActionTypes.SELECT_SECTION, payload: id }), 
      [dispatch, ActionTypes]
    );
    const updateSpacing = useCallback((key, value) => {
      if (!ui.activeSection) return;
      dispatch?.({ type: ActionTypes.UPDATE_SPACING, payload: { id: ui.activeSection, [key]: value } });
    }, [dispatch, ActionTypes, ui.activeSection]);
    const updateVariant = useCallback((variant) => {
      if (!ui.activeSection) return;
      dispatch?.({ type: ActionTypes.UPDATE_SECTION_VARIANT, payload: { id: ui.activeSection, variant } });
    }, [dispatch, ActionTypes, ui.activeSection]);

    // Properties Tab (wenn Sektion ausgewählt)
    if (ui.sidebarTab === 'properties' && activeSection) {
      const sectionMeta = sectionsData[activeSection.type];
      return (
        <>
          <SidebarSection title={`${sectionMeta?.name || activeSection.type}`}>
            <VariantPicker 
              sectionType={activeSection.type} 
              currentVariant={activeSection.variant} 
              onChange={updateVariant} 
            />
          </SidebarSection>
          <SidebarSection title="Spacing">
            <SpacingSlider 
              label="Padding Top" 
              value={activeSpacing?.pt || 64} 
              onChange={(v) => updateSpacing('pt', v)} 
            />
            <SpacingSlider 
              label="Padding Bottom" 
              value={activeSpacing?.pb || 64} 
              onChange={(v) => updateSpacing('pb', v)} 
            />
          </SidebarSection>
        </>
      );
    }

    // Sections Tab (Hauptansicht)
    return (
      <>
        {/* Search */}
        <div className="sidebar__search-section">
          <SectionSearch 
            sections={sectionsData}
            categories={categoriesData}
            onSelect={addSection}
            onClose={() => {}}
          />
        </div>

        {/* Kategorisierte Sektionen */}
        <SidebarSection title="Sections hinzufügen">
          <div className="section-categories">
            {categoryOrder.map(catId => {
              const category = categoriesData[catId];
              if (!category) return null;
              return (
                <SectionCategory
                  key={catId}
                  category={category}
                  sections={sectionsData}
                  isCollapsed={collapsedCategories[catId]}
                  onToggle={() => toggleCategory(catId)}
                  onAddSection={addSection}
                  activeSections={layout.sections}
                />
              );
            })}
          </div>
        </SidebarSection>

        {/* Reihenfolge */}
        <SidebarSection title="Reihenfolge">
          <DraggableList 
            sections={layout.sections} 
            order={layout.order} 
            activeId={ui.activeSection} 
            onReorder={reorder} 
            onSelect={selectSection} 
            getLabel={(s) => sectionsData[s.type]?.name || s.type} 
            getMeta={(s) => s.variant} 
          />
        </SidebarSection>
      </>
    );
  }

  SB5.modes.StructureSidebar = StructureSidebar;
})(window);
