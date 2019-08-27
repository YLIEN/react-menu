import React from 'react'
import { Layout, Tabs, Icon } from 'antd';
// import Router from '../Router.js'

import GlobalSider from './GlobalSider'
import GlobalFooter from './GlobalFooter'
import GlobalContent from './GlobalContent'

import './Layout.css'
const { Header, Sider, Content } = Layout

export default class BasicLayout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          collapsed: false,
          toContent: {},
          toSideKey: ''
        }
    }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  tabSideMenu = menu => {
    this.setState({
      toContent: menu
    })
  }

  fromContent = item => {
    this.setState({
      toSideKey: item
    })
  }

  render() {
    return (
      <Layout>
        <GlobalSider collapsed = {this.state.collapsed} tabSideMenu = {this.tabSideMenu} toSideKey={this.state.toSideKey}/>
        <Layout>
          <Header style={{ background: '#fff', paddingLeft: '20px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
            }}
          >
            <GlobalContent fromContent={this.fromContent} toContent={this.state.toContent} />
          </Content>
          <GlobalFooter />
        </Layout>
      </Layout>
    );
  }
}