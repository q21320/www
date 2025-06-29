import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './index.css';
import AppMenu from './Menu';

const { Header, Content } = Layout;

export default function AppLayout() {
    return (
        <Layout>
            <Header style={{ display: 'flex', gap: '20px', padding: '0 20px', alignItems: 'center' }}>
                <AppMenu />
            </Header>
            <Content style={{ padding: '20px' }}>
                <Outlet />
            </Content>
        </Layout>
    );
}
