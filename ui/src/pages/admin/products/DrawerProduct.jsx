import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import {
  createStatistical,
  getAdminStatistical,
} from "../../../actions/statisticalAction";
import { useForm } from "antd/lib/form/Form";
import { clearErrors, createProduct } from "../../../actions/productAction";
import { NEW_PRODUCT_RESET } from "../../../constants/productConstants";
import { NEW_STATISTICAL_RESET } from "../../../constants/statisticalConstants";
const { Option } = Select;
const DrawerProduct = (props) => {
  const dispatch = useDispatch();
  const { onClose, open } = props;
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const { statisticals } = useSelector((state) => state.statisticals);
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [importPrice, setImportPrice] = useState(0);
  const [stock, setStock] = useState(1);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  useEffect(() => {
    dispatch(getAdminStatistical());
  }, [dispatch]);
  let totalAmount = 0;
  statisticals &&
    statisticals.forEach((item) => {
      totalAmount += item.budget;
    });
  useEffect(() => {
    setBudget(totalAmount - importPrice * stock);
  });
  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      message.success("Thêm sản phẩm thành công");
      onClose();
      dispatch({ type: NEW_PRODUCT_RESET });
      dispatch({ type: NEW_STATISTICAL_RESET });
    }
  }, [dispatch, message, error, success]);

  const [form] = useForm();

  const onFinish = (values) => {
    setImportPrice(values.importPrice);
    setStock(values.Stock);
    const payload = {
      name: values.name,
      price: values.price,
      description: description,
      category: values.category,
      Stock: values.Stock,
      supplier: values.supplier,
      promotion: values.promotion,
      brand: values.brand,
      importPrice: values.importPrice,
      images: images,
    };
    let bug = 0;
    console.log(payload);
    dispatch(createProduct(payload));
    const statisForm = new FormData();
    statisForm.set("budget", bug - importPrice * stock);
    dispatch(createStatistical(statisForm));
  };
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      <Drawer
        title="Thêm sản phẩm mới"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Hủy</Button>
            <Button onClick={() => form.submit()} type="primary">
              Thêm vào kho
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          hideRequiredMark
          form={form}
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên sản phẩm"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên sản phẩm",
                  },
                ]}
              >
                <Input placeholder="Nhập tên sản phẩm" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="supplier"
                label="Nhà phân phối"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập nhà phân phối",
                  },
                ]}
              >
                <Input placeholder="Nhập nhà phân phối" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Danh mục"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn danh mục",
                  },
                ]}
              >
                <Select placeholder="Vui lòng chọn danh mục">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="brand"
                label="Hãng sản xuất"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập hãng sản xuất",
                  },
                ]}
              >
                <Select placeholder="Vui lòng nhập hãng sản xuất">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="importPrice"
                label="Giá nhập"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập giá nhập ",
                  },
                ]}
              >
                <Input placeholder="Nhập nhập giá nhập" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Giá sản phẩm"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập giá sản phẩm",
                  },
                ]}
              >
                <Input placeholder="Nhập giá sản phẩm" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Stock"
                label="Số lượng nhập"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số lượng hàng",
                  },
                ]}
              >
                <Input placeholder="Vui lòng nhập số lượng hàng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="promotion"
                label="Giảm giá"
                rules={[
                  {
                    required: true,
                    message: "Nhập % giảm giá",
                  },
                ]}
              >
                <Input placeholder="Nhập % giảm giá" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <CKEditor
                cols="80"
                rows="5"
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data);
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </Col>
          </Row>
        </Form>
        <Row gutter={16} style={{ marginTop: 20 }}>
          <Col span={24}>
            <div className="card-imageProduct">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>
            <hr></hr>

            <div className="button-container mr-auto ml-auto">
              <input
                type="file"
                name="avatar"
                className="inputImageProduct"
                // style="position:relative;overflow:hidden"
                // name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default DrawerProduct;
