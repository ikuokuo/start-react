import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';

import { project, pageGroups } from '@/config';
import './index.less';

const { Title, Text, Link } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <Title>
        <a href={project.href} target="_blank" rel="noreferrer">
          {project.name}
        </a>
      </Title>
      {pageGroups.map((g) => (
        <React.Fragment key={g.group.name}>
          <Title level={2}>
            <a href={g.group.href} target="_blank" rel="noreferrer">
              {g.group.name}
            </a>
          </Title>
          {g.pages.map((p) => (
            <Text className="home__text--link" onClick={() => navigate(p.href)}>
              {p.name}
            </Text>
          ))}
        </React.Fragment>
      ))}
      <Title level={2}>References</Title>
      {project.references && project.references.map((r) => (
        <Link key={r.name} href={r.href} target="_blank">{r.name}</Link>
      ))}
    </div>
  );
};

export default Home;
