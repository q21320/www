import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import '@/assets/css/root.css'
import AppRouter from './router';
import { useThemeStore } from './stores/theme';

const RootApp = () => {
  const theme = useThemeStore(state => state.theme);
  console.log(theme);
  return (
    <ConfigProvider theme={{ algorithm: theme.algorithm , token:theme.token }}>
      <AppRouter />
    </ConfigProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
)
