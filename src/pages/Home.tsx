import React from 'react';
import { useThemeStore } from '../stores/theme';
import { Button, Card } from 'antd';

const Home: React.FC = () => {
  const setTheme = useThemeStore((state) => state.setThemeAlgorithm);
  return (
    <div>
      <Card>
        <h1>Home Page</h1>
        <Button onClick={() => setTheme()}>切换主题</Button>
      </Card>
    </div>
  );
};

export default Home;