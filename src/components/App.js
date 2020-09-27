import React from 'react';
import '../css/app.css';
import '../css/leftPanel.css';
import '../css/archPanel.css';
import '../css/audioPanel.css';
import {Layout} from 'antd';
import Page1 from "./Page1";
import Page2 from "./Page2";
import MySider from "./MySider";
import {useSelector} from 'react-redux';
import {selectPageNumber} from "../store/slices";

function App() {
    const pageNumber = useSelector(selectPageNumber);
    console.log(pageNumber);
    const page = pageNumber === 1 ? <Page1/> : <Page2/>;
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
