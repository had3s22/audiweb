import React from 'react';
import '../css/app.css';
import '../css/arch.css';
import '../css/audio.css';
import '../css/fonts/Crimson_Text/CrimsonText-Regular.ttf';
import {Layout} from 'antd';
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";
import MySider from "./MySider";
import {useSelector} from 'react-redux';
import {selectPageNumber} from "../store/slices";
import Page3 from "./Page3/Page3";

function App() {
    const pageNumber = useSelector(selectPageNumber);
    const page = pageNumber === 1 ? <Page1/> : pageNumber === 2 ? <Page2/> : <Page3/>;
    return (
        <Layout style={{minHeight: '100vh'}}>
            <MySider/>
            <Layout className="site-layout">
                {page}
            </Layout>
        </Layout>
    );
}

export default App;
