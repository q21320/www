import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/css/root.css'
import AppRouter from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
