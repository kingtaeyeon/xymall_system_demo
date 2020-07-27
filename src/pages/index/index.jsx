import React, {Component} from 'react';
import {Breadcrumb, Layout, Menu, Dropdown, Avatar} from 'antd';
import {
    HomeOutlined, ProfileOutlined, GoldOutlined, DeploymentUnitOutlined, InboxOutlined,
    GroupOutlined, FileProtectOutlined, AppstoreOutlined, FileTextOutlined, PushpinOutlined,
    ReconciliationOutlined, LaptopOutlined, NotificationOutlined, DownOutlined,
    ShopOutlined
} from '@ant-design/icons';
import '@/pages/index/index.sass';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const UserMenu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                个人信息
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                退出
            </a>
        </Menu.Item>
    </Menu>
);


class Index extends Component {

    // onMenuClick = ({ item, key, keyPath, domEvent }) => {
    //     console.log({ item, key, keyPath, domEvent })
    //     this.props.
    // }

    render() {
        return (
            <div className="admin-index">
                <Layout>
                    <Header className="header">
                        <div className="logo-title">
                            <div className="logo-title-text">
                                <img className="logo-img" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
                                <div className="logo-text">兮悦商城管理系统</div>
                            </div>
                            <div className="user-message">
                                <span>欢迎您，</span><Avatar src="https://img95.699pic.com/photo/50135/8179.jpg_wh860.jpg!/both/324x432/unsharp/true"/>
                                <Dropdown style="margin-left:100px" overlay={UserMenu}>

                                    <a className="ant-dropdown-link"
                                       onClick={e => e.preventDefault()}>
                                        丨兮兮<DownOutlined/>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                theme="dark"
                                mode="vertical"
                                style={{height: '100%', borderRight: 0}}
                            >

                                <Menu.Item key="sub1">
                                    <HomeOutlined/>
                                    <span>
                    首页
                  </span>
                                </Menu.Item>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                    <ShopOutlined/>
                    商品系统
                  </span>
                                    }
                                >
                                    <Menu.Item key="1"><ProfileOutlined/><span>分类维护</span></Menu.Item>
                                    <Menu.Item key="2"><GoldOutlined/><span>品牌管理</span></Menu.Item>
                                    <SubMenu title={<span><DeploymentUnitOutlined/>平台属性</span>} key="3">
                                        <Menu.Item key="1"><GroupOutlined/><span>属性分组</span></Menu.Item>
                                        <Menu.Item key="2"><FileProtectOutlined/><span>规格参数</span></Menu.Item>
                                        <Menu.Item key="3"><AppstoreOutlined/><span>销售属性</span></Menu.Item>
                                    </SubMenu>
                                    <SubMenu title={<span><InboxOutlined/>商品维护</span>} key="4">
                                        <Menu.Item key="1"><FileTextOutlined/><span>spu管理</span></Menu.Item>
                                        <Menu.Item key="2"><PushpinOutlined/><span>发布商品</span></Menu.Item>
                                        <Menu.Item key="3"><ReconciliationOutlined/><span>商品管理</span></Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                    <LaptopOutlined/>
                    优惠营销
                  </span>
                                    }
                                >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                    <NotificationOutlined/>
                    库存系统
                  </span>
                                    }
                                >
                                    <Menu.Item key="9"><ProfileOutlined/>仓库维护</Menu.Item>
                                    <Menu.Item key="10"><ProfileOutlined/>库存工作单</Menu.Item>
                                    <Menu.Item key="11"><ProfileOutlined/>商品库存</Menu.Item>
                                    <SubMenu title={<span><InboxOutlined/>采购单维护</span>} key="12">
                                        <Menu.Item key="1"><FileTextOutlined/><span>采购需求</span></Menu.Item>
                                        <Menu.Item key="2"><PushpinOutlined/><span>采购单</span></Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu
                                    key="sub5"
                                    title={
                                        <span>
                                        <NotificationOutlined/>
                                        订单系统
                                    </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub6"
                                    title={
                                        <span>
                                        <NotificationOutlined/>
                                        用户系统
                                    </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub7"
                                    title={
                                        <span>
                                        <NotificationOutlined/>
                                        系统管理
                                    </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                Content
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Index;
