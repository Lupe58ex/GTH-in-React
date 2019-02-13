import React, { Component }  from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css";
const { Header, Content, Footer } = Layout;

class Navbar extends Component { 
    
    
   render(){
       return(
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', borderBottom:'10%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        
      </Layout>
       );
    }
}
export default Navbar;