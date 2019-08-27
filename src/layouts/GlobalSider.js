import React from 'react'
import { Layout, Menu, Icon  } from 'antd'
const { Sider, Content } = Layout
const { SubMenu } = Menu

export default class GlobalSider extends React.Component {
    constructor (props) {
        super (props)
        const menus = [
            {title: 'Nav1', key: '1'},
            {title: 'User', key: '2', 
                // children: [
                //     {title: 'Tom', key: '2-1'},
                //     {title: 'Bill', key: '2-2'},
                //     {title: 'Alex', key: '2-2'},
                // ]
            },
            {title: 'Team', key: '3', 
                // children: [
                //     {title: 'Team1', key: '3-1'},
                //     {title: 'Team2', key: '3-2'},
                // ]
            },
        ]
        this.state = {
            menus,
            menuActiveKey: '1'
        }
    }

    componentWillReceiveProps (nextProps) {
        this.state.menuActiveKey = nextProps.toSideKey
    }

    handleClick = e => {
        this.setState({
            menuActiveKey: e.key,
        });
        this.props.tabSideMenu(e)
    }

    render () {
        const menuKeys = this.state.menuActiveKey

        return (
            <Sider
                style={{
                    // position: 'fixed',
                    // left: '0',
                    // width: '200px',
                    height: '100vh',
                    overflow: 'auto'
                }}
                trigger={null} collapsible collapsed={this.props.collapsed}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[menuKeys]} style={{ textAlign: 'left'}}>
                {this.state.menus.map(menu => (
                    <Menu.Item key={menu.key} onClick={() => this.handleClick(menu)}>
                        <Icon type="video-camera" />
                        <span>{menu.title}</span>
                    </Menu.Item>
                ))}
                {/* <Menu.Item key="1">
                    <Icon type="video-camera" />
                    <span>nav 1</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>User</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="team" />
                        <span>Team</span>
                        </span>
                    }
                >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu> */}
            </Menu>
            </Sider>
        )
    }
}