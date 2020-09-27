import React from 'react';
import {PageHeader} from 'antd';

const MyHeader2 = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                title="Audiozation is whatever you want">
                <p>In this experiment we sliced training audios to small fragments and then for a given
                    feature, saw which of these slices activate that feature the most. Then, we merged those
                    slices as a single audio. You can select a feature from a layer on the left, and get
                    the corresponding audio on the right.
                </p>
            </PageHeader>
        </div>
    )
}

export default MyHeader2;
