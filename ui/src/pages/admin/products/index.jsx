import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Table, Tag, Space, message, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearErrors,
  deleteProduct,
  getAdminProduct,
} from "../../../actions/productAction";
import { DELETE_PRODUCT_RESET } from "../../../constants/productConstants";
import { formatCurrency } from "../../../utils/helper";
import DrawerProduct from "./DrawerProduct";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, products } = useSelector((state) => state.products);
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );
  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      message.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      message.success("Xóa sách thành công");
      history.push("/admin/products");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, message, error, deleteError, history, isDeleted]);
  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "Tên sản phẩm",
      width: "15%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      width: "10%",
      key: "price",
      align: "center",
      render: (price) => <span>{formatCurrency(`${price}`) + " đ"}</span>,
    },
    {
      title: "Khuyến mãi",
      dataIndex: "promotion",
      key: "promotion",
      width: "7%",
      align: "center",
    },
    {
      title: "Giá nhập hàng",
      dataIndex: "importPrice",
      key: "importPrice",
      width: "10%",
      align: "center",
      render: (importPrice) => (
        <span>{formatCurrency(`${importPrice}`) + " đ"}</span>
      ),
    },
    {
      title: "Số hàng trong kho",
      dataIndex: "Stock",
      key: "stock",
      width: "10%",
      align: "center",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "Nhà phân phối",
      dataIndex: "supplier",
      key: "supplier",
      align: "center",
    },
    {
      title: "Thương hiệu",
      dataIndex: "brand",
      key: "brand",
      align: "center",
    },
    {
      title: "Ngày nhập",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (importPrice) => {
        const date = new Date(importPrice);
        const formattedDate = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`;
        return <span>{formattedDate}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined />
          <DeleteOutlined
            style={{ color: "red" }}
            onClick={(e) => deleteProductHandler(record._id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Card
        title="Quản lý sản phẩm"
        bordered={false}
        extra={
          <Button type="primary" onClick={showDrawer}>
            Thêm mới
          </Button>
        }
      >
        <Table columns={columns} dataSource={products} bordered />;
      </Card>
      <DrawerProduct open={openDrawer} onClose={onClose} />
    </div>
  );
};

export default AdminProducts;
