import React from "react";
import {Col, Layout, Row} from "antd";
import MyHeader3 from "./MyHeader3";
import Audio from "../audio/Audio";

const links = [
    {
        org: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
        inv: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
    },
    {
        org: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
        inv: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
    },
    {
        org: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
        inv: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
    },
    {
        org: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
        inv: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
    },
    {
        org: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
        inv: 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media/1/layer1_feature1.wav',
    },
]

const {Content} = Layout;
const Page3 = () => {
    const rows = links.map((link) =>
        <Row>
            <Col xs={{span: 6}} lg={{span: 6}}><Audio link={link.org}/></Col>
            <Col xs={{span: 6}} lg={{span: 6}}><Audio link={link.inv}/></Col>
        </Row>)
    return <React.Fragment>
        <MyHeader3/>
        <Content style={{margin: '0 16px', height: 350}}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                <Row>
                    <Col xs={{span: 6}} lg={{span: 6}}>Original</Col>
                    <Col xs={{span: 6}} lg={{span: 6}}>Inverted</Col>
                </Row>
                {rows}
            </div>
        </Content>


    </React.Fragment>
}

export default Page3;