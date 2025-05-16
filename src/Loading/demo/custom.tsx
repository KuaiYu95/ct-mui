import { Card, Loading } from 'ct-mui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Loading loading>
      <Card title="标题">内容</Card>
    </Loading>
  );
};

export default App;
