import { Layout, Card } from 'antd';
import AppHeaderSearch from './Search';
const { Header } = Layout;
import './index.css'
export default function AppHeader() {
  return (
    <Header style={{ background: 'transparent', padding: 0 }}>
      <Card className='header-card'>
        <AppHeaderSearch />
      </Card>
    </Header>
  )
}