import React, { Component } from 'react'
import { Layout } from 'antd'
import Menu from 'components/common/menu'
import history from 'utils/history'
const {
  Header, Footer, Sider, Content,
} = Layout;


export default class Index extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Sider>
            <Menu
              history={history}
              // location={location}
            />
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}