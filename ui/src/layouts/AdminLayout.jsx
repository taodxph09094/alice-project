import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import {
  DashboardOutlined,
  DeliveredProcedureOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { RiBillLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import "antd/dist/reset.css";
const { Header, Sider, Content } = Layout;

const AdminLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      route: "/admin/dashboard",
    },
    {
      key: "2",
      icon: <OrderedListOutlined />,
      label: "Quản lý sản phẩm",
      route: "/admin/products",
    },
    {
      key: "3",
      icon: <DeliveredProcedureOutlined />,
      label: "Đơn vị phân phối",
    },
    {
      key: "4",
      icon: <RiBillLine />,
      label: "Quản lý đơn hàng",
    },
    {
      key: "5",
      icon: <UserOutlined />,
      label: "Quản lý tài khoản",
    },
  ];
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.route}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 817,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
  // <div>{props.children}</div>;
};

export default AdminLayout;
