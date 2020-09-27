import React from "react";
import MyHeader from "./MyHeader";
import {Col, Layout, Row} from "antd";
import '../css/app.css';
import '../css/leftPanel.css';
import '../css/archPanel.css';
import '../css/audioPanel.css';
import LayerList from "./archPanel/LayerList";
import AudioList from "./audioPanel/AudioList";

const {Content, Footer} = Layout;
const Page2 = () => {
    return <React.Fragment>
        <MyHeader/>
        <Row>
            <Col span={12}>
                <Content style={{margin: '0 16px', height: 350, overflow: "auto"}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <LayerList/>
                    </div>
                </Content>
            </Col>
            <Col span={12}>
                <Content style={{margin: '0 16px', height: 350 ,overflow:"auto"}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <AudioList/>
                    </div>
                </Content>
            </Col>

        </Row>

        <Footer style={{textAlign: 'center'}}>...</Footer>
    </React.Fragment>
}

export default Page2;