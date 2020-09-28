import React from 'react';
import {PageHeader, Descriptions} from 'antd';
import {Anchor} from 'antd';

const {Link} = Anchor;
const MyHeader1 = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                title="Donec quam felis, ultricies">
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="">
                        <Anchor affix={false}>
                            <Link href="https://github.com/had3s22/audiweb"
                                  title="github page"/>
                        </Anchor>
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    )
}

export default MyHeader1;
