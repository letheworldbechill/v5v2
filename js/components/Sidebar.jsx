/* SMOOTH BUILDER 5.0 - SIDEBAR */
(function (global) {
  'use strict';
  const SB5 = global.SB5 = global.SB5 || {};
  SB5.components = SB5.components || {};
  const React = global.React;
  const { useMemo, useCallback, useState } = React;

  function SidebarSection({ title, children }) {
    return (
      <section className="sidebar__section">
        <header className="sidebar__sectionHeader"><div className="sidebar__sectionTitle"><h3>{title}</h3></div></header>
        <div className="sidebar__sectionBody">{children}</div>
      </section>
    );
  }

  function Sidebar({ state, dispatch, views, className = '' }) {
    const mode = state?.mode || 'structure';
    const ui = state?.ui || {};
    const ActionTypes = SB5.core.state?.ActionTypes || {};
    const [isCollapsed, setIsCollapsed] = useState(false);

    const setTab = useCallback((tab) => dispatch?.({ type: ActionTypes.SET_SIDEBAR_TAB, payload: tab }), [dispatch, ActionTypes]);
    const toggleCollapsed = useCallback(() => setIsCollapsed(prev => !prev), []);

    const tabs = useMemo(() => {
      if (mode === 'structure') return [{ id: 'sections', label: 'Sections' }, { id: 'properties', label: 'Properties' }];
      if (mode === 'design') return [{ id: 'brand', label: 'Brand' }, { id: 'content', label: 'Inhalt' }];
      return [{ id: 'settings', label: 'Settings' }, { id: 'code', label: 'Code' }];
    }, [mode]);

    const View = useMemo(() => {
      if (views?.[mode]) return views[mode];
      const modes = SB5.modes || {};
      if (mode === 'structure') return modes.StructureSidebar;
      if (mode === 'design') return modes.DesignSidebar;
      if (mode === 'export') return modes.ExportSidebar;
      return null;
    }, [mode, views]);

    return (
      <div className={`sidebar__wrapper ${isCollapsed ? 'is-collapsed' : ''}`}>
        <button 
          type="button" 
          className="sidebar__toggle" 
          onClick={toggleCollapsed}
          title={isCollapsed ? 'Sidebar einblenden' : 'Sidebar ausblenden'}
        >
          {isCollapsed ? '▸' : '◂'}
        </button>
        <aside className={`sidebar ${className}`}>
          <div className="sidebar__header">
            <div className="sidebar__mode"><span className="sidebar__modeLabel">{mode === 'structure' ? 'Struktur' : mode === 'design' ? 'Design' : 'Export'}</span></div>
            <div className="sidebar__tabs" role="tablist">
              {tabs.map(t => <button key={t.id} type="button" className={`sidebar__tab ${ui.sidebarTab === t.id ? 'is-active' : ''}`} onClick={() => setTab(t.id)} role="tab"><span className="sidebar__tabLabel">{t.label}</span></button>)}
            </div>
          </div>
          <div className="sidebar__content">
            {View ? <View state={state} dispatch={dispatch} SidebarSection={SidebarSection} /> : <SidebarSection title="Panel"><p className="sidebar__hint">Kein Panel.</p></SidebarSection>}
          </div>
        </aside>
      </div>
    );
  }

  Sidebar.Section = SidebarSection;
  SB5.components.Sidebar = Sidebar;
})(window);
