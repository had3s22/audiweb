import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {ExperimentOutlined, HomeOutlined,} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import {setPageNumber} from '../store/slices';

const {Sider} = Layout;
const {SubMenu} = Menu;
const MySider = () => {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    const onClick = (num) => (e) => {
        dispatch(setPageNumber(num));
    }
    return <Sider breakpoint="lg"
                  collapsedWidth="0"
                  collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined/>} onClick={onClick(1)}>
                Home
            </Menu.Item>
            <SubMenu key="sub1" icon={<ExperimentOutlined/>} title="Experiments">
                <Menu.Item key="2" onClick={onClick(2)}>
                    Dolor Sit
                </Menu.Item>
                <Menu.Item key="3" onClick={onClick(3)}>
                    Donec Pede
                </Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
}
export default MySider;