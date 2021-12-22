import { makeInteractiveMenu } from './menu.js';
import { matchAnchor } from './places.js';
import { addSmoothScroll } from './scroll.js';
import { switchTabs } from './tabs.js';
import { validateForm } from './validation.js';
import './modal.js';


addSmoothScroll();
makeInteractiveMenu();
matchAnchor();
switchTabs();
validateForm();
