import { Layout, Card } from 'antd';
const { Header } = Layout;
import './index.css'
export default function AppHeader() {
  return (
    <Header style={{ background: 'transparent', padding: 0 }}>
      <Card className='header-card'>
      </Card>
    </Header>
  )
}