/* eslint-disable import/prefer-default-export */

interface Entry {
  name: string;
  href: string;
  siderName?: string;
  siderKey?: string;
}

// project

interface Project extends Entry {
  baseUrl: string;
  references?: Array<Entry>;
}

const project: Project = {
  name: 'Start React',
  href: 'https://github.com/ikuokuo/start-react',
  // NOTE: package.json homepage
  baseUrl: '/start-react',
  // baseUrl: process.env.PUBLIC_URL,
  references: [
    { name: 'React', href: 'https://reactjs.org/' },
    { name: 'React Router', href: 'https://reactrouter.com/' },
    { name: 'Ant Design', href: 'https://ant.design/' },
  ],
};

// page

type PageInfo = Entry;

interface PageGroup {
  group: PageInfo;
  pages: Array<PageInfo>;
}

const pageGroups: Array<PageGroup> = [
  {
    group: {
      name: 'MobX',
      href: 'https://mobx.js.org/',
      siderName: undefined,
      siderKey: 'mobx',
    },
    pages: [
      {
        name: 'MobX with React.FC',
        href: '/mobx/fc',
        siderName: 'React.FC',
        siderKey: undefined,
      },
      {
        name: 'MobX with React.Component',
        href: '/mobx/cls',
        siderName: 'React.Component',
        siderKey: undefined,
      },
    ],
  },
];

export { project, pageGroups };
