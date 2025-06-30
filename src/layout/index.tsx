import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './index.css';
import AppMenu from './Menu';
import AppHeader from './Header';

const { Content, Sider } = Layout;
import { useState } from 'react';

export default function AppLayout() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ width: '100%', height: '100%' }}>
            <AppHeader />
            <Layout>
                <Sider collapsedWidth="55" theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <AppMenu />
                </Sider>
                <Content style={{ padding: '20px', height: '100%' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}
