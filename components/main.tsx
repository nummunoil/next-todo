import React from 'react';
import Content from 'antd/lib/layout';

import Layout from '../components/layout';
import Todo from './todos';

interface Props {}

export const Main = (props: Props) => {
  return (
    <Layout>
      <Content style={{ padding: 24, minHeight: 630 }}>
        <Todo />
      </Content>
    </Layout>
  );
};
