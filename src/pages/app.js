import React, { Component } from 'react'
import { Layout } from 'antd'
import Menu from 'components/common/menu'
import { Router } from "react-router-dom";
import { history } from 'utils'
import CustomSwitch from 'routes'
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
            <Content>
              <Router history={history}>
                <CustomSwitch />
              </Router>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}