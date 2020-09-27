import React from 'react';
import {PageHeader} from 'antd';

const MyHeader2 = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                title="Audiozation is whatever you want">
                <p>nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
                    venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
                    leo. Sed fringilla mauris sit amet nibh. Donec sodales
                </p>
            </PageHeader>
        </div>
    )
}

export default MyHeader2;
