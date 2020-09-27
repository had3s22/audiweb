import React from "react";
import {Col, Layout, Row} from "antd";
import LayerList from "../arch/LayerList";
import AudioList from "../audio/AudioList";
import MyHeader2 from "./MyHeader2";

const {Content} = Layout;
const Page2 = () => {
    return <React.Fragment>
        <MyHeader2/>
        <Row>
            <Col span={12}>
                <Content style={{margin: '0 16px', height: 350, overflow: "auto"}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <LayerList/>
                    </div>
                </Content>
            </Col>
            <Col span={12}>
                <Content style={{margin: '0 16px', height: 350, overflow: "auto"}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <AudioList/>
                    </div>
                </Content>
            </Col>

        </Row>

    </React.Fragment>
}

export default Page2;