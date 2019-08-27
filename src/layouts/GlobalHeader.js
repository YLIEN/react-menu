import React from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout;

export default class GlobalHeader extends React.Component {
    render () {
        return (
            <Header style={{ background: '#fff', paddingLeft: '20px' }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
            </Header>
        )
    }
}