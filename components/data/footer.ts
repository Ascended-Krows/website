const footerMenuList = [
  {
    id: 1,
    title: 'Management',
    diffClass: 'md:col-start-7',
    list: [
      {
        id: 1,
        href: 'team',
        text: 'Team',
      },
      {
        id: 2,
        href: 'about',
        text: 'About',
      },
      {
        id: 3,
        href: 'faq',
        text: 'FAQ',
      },
    ],
  },
  {
    id: 2,
    title: 'My Account',
    diffClass: 'md:col-start-10',
    list: [
      {
        id: 1,
        href: 'me',
        text: 'Profile',
      },
    ],
  },
];

const socialIcons = [
  {
    id: 1,
    href: 'https://twitter.com/AscendedKrows',
    text: 'twitter',
  },
  {
    id: 2,
    href: 'https://discord.gg/bNrReWVfvY',
    text: 'discord',
  },
];

export { footerMenuList, socialIcons };
