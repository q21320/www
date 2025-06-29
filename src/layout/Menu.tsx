import { Menu } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


interface MenuItem {
    label: string;
    key: string;
    path: string;
}

export default function AppMenu() {
    const navigate = useNavigate();
    const [currentKey, setCurrentKey] = useState('1');
    const [items] = useState<MenuItem[]>([
        {
            label: '首页',
            key: '1',
            path: '/'
        },
        {
            label: '关于我们',
            key: '2',
            path: '/about'
        },
    ]);
    const handleClick = (row: MenuInfo) => {
        setCurrentKey(row.key);
        const path = items.find(item => item.key === row.key)!.path;
        navigate(path);
    }
    useEffect(() => {
        const key = items.find(item => item.path === window.location.pathname)!.key;
        console.log(key, 'key');

        setCurrentKey(key);
    }, [currentKey, items]);
    return (
        <Menu
            // theme="dark"
            key={currentKey}
            defaultSelectedKeys={[currentKey]}
            onClick={(row) => handleClick(row)}
            items={items}
        />
    );
}
