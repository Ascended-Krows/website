// We should guarantee that there is no duplicated menu name
export const menuMap = {
  marketplace: ['collections', 'portfolio'],
  management: ['team', 'about', 'faq'],
  account: ['summary', 'profile'],
};

export const marketplaceMenu = [
  {
    menu: 'marketplace',
    text: 'collections',
    url: '/collections',
  },
  {
    menu: 'marketplace',
    text: 'portfolio',
    url: '/portfolio',
  },
];

export const managementMenu = [
  {
    menu: 'management',
    text: 'team',
    url: '/team',
  },
  {
    menu: 'management',
    text: 'about',
    url: '/about',
  },
  {
    menu: 'management',
    text: 'faq',
    url: '/faq',
  },
];

export const accountMenu = [
  {
    menu: 'account',
    text: 'summary',
    url: '/summary',
  },
  {
    menu: 'account',
    text: 'profile',
    url: '/profile',
  },
];
