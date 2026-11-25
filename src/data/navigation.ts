// Main navigation (specification §1).
// `ready: false` pages are not built and not shown in the menu, so the live
// site never contains empty templates. Flip to true as each phase completes.

export interface NavItem {
  label: string;
  path: string; // relative to the site base, with trailing slash
  ready: boolean;
}

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '', ready: true },
  { label: 'The Stories', path: 'stories/', ready: true },
  { label: 'What Emerges', path: 'what-emerges/', ready: true },
  { label: 'Project Gallery', path: 'project-gallery/', ready: true },
  { label: 'Fieldnotes', path: 'fieldnotes/', ready: true },
  { label: 'The Research', path: 'research/', ready: true },
  { label: 'About', path: 'about/', ready: true },
];

export const liveNavigation = () => NAVIGATION.filter((item) => item.ready);

export const isReady = (path: string) => NAVIGATION.some((i) => i.path === path && i.ready);

/** Prefix a site-relative path with the deployment base (e.g. /home/). */
export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
