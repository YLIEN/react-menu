import React from 'react'
import { Tabs } from 'antd'
import { unique } from '../until/until.js'
import Alex from '../module/user/Alex'
import Bill from '../module/user/Bill'
import Tom from '../module/user/Tom'

const { TabPane } = Tabs

export default class GlobalContent extends React.Component {
    constructor (props) {
        super(props)
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            {
                title: 'Tab 3',
                content: 'Content of Tab 3',
                key: '3',
                closable: false,
            },
        ];
        this.state = {
            activeKey: panes[0].key,
            // panes,
            collapsed: false,
            fromLayout: []
        }
    }
    
    componentWillReceiveProps (nextProps) {
        if (this.props.toContent !== nextProps.toContent) {
            this.state.fromLayout.push(nextProps.toContent)
            this.state.activeKey = nextProps.toContent.key
        }
    }

    onChange = activeKey => {
        this.setState({ 
            activeKey
        })
        this.props.fromContent(activeKey)
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }
    
    remove = targetKey => {
        let { activeKey } = this.state
        let lastIndex
        this.state.fromLayout.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1
          }
        })
        const fromLayout = this.state.fromLayout.filter(pane => pane.key !== targetKey);
        if (fromLayout.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = fromLayout[lastIndex].key
          } else {
            activeKey = fromLayout[0].key
          }
        }
        this.setState({ fromLayout, activeKey })
        
        this.props.fromContent(activeKey)
    }

    render () {
        let arr = unique(this.state.fromLayout)
        this.state.fromLayout = arr.filter(function (item) {
            return JSON.stringify(item) !== '{}'
        })

        return (
            <Tabs
                hideAdd
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {this.state.fromLayout.map(pane => (
                    <TabPane tab={pane.title} key={pane.key}>
                        {pane.title === 'Nav1' && <Alex />}
                        {pane.title === 'User' && <Bill />}
                        {pane.title === 'Team' && <Tom />}
                    </TabPane>
                ))}
            </Tabs>
        )
    }
}