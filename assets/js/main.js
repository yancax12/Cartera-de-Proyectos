import { setupThemeToggle, setCurrentYear } from './ui.js';
import { setupFilterGrid } from './filters.js';

setupThemeToggle();
setCurrentYear();

setupFilterGrid({ gridSelector: '#projectsGrid', searchInputId: 'projectSearch', chipsContainerId: 'projectChips' });
setupFilterGrid({ gridSelector: '#blogGrid', searchInputId: 'blogSearch', chipsContainerId: 'blogChips' });
