import React from 'react';
import {PageHeader} from 'antd';

const MyHeader2 = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                title="Audiozation is whatever you want">
                <p>In This experiment we reverted the trained model solely based on the
                    running_mean and running_var of a certain input. You can see the original
                    audios on the left and the inverted ones on the right.
                </p>
            </PageHeader>
        </div>
    )
}

export default MyHeader2;
