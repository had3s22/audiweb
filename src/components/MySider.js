import React, {useState} from 'react';
import '../css/app.css';
import '../css/leftPanel.css';
import '../css/archPanel.css';
import '../css/audioPanel.css';
import {Layout, Menu} from 'antd';
import {ExperimentOutlined, HomeOutlined,} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import {setPageNumber} from '../store/slices';

const {Sider} = Layout;

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
            <Menu.Item key="2" icon={<ExperimentOutlined/>} onClick={onClick(2)}>
                Experiment 1
            </Menu.Item>
            <Menu.Item key="3" icon={<ExperimentOutlined/>} onClick={onClick(3)}>
                Experiment 2
            </Menu.Item>
        </Menu>
    </Sider>
}
export default MySider;