import {
  Button,
  Checkbox,
  Form,
  Input,
} from "antd";

import {
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onFinish = (values: never) => {
    console.log(
      "Received values of form: ",
      values,
    );
    navigate("/");
  };

  return (
    <div className="justify-content center ">
      <div className=" d-flex flex-column justify-content-center align-items-center w-100 py-5 ">
        <div className="d-flex flex-column border p-5">
          <h3 className="mb-1">
            Welcome
          </h3>
          <p className="mb-5">
            Sign in to your account to
            continue
          </p>
          <Form
            // name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message:
                    "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined className="site-form-item-icon" />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message:
                    "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={
                  <LockOutlined className="site-form-item-icon" />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>
                  Remember me
                </Checkbox>
              </Form.Item>

              <Link
                className="login-form-forgot"
                to=""
              >
                Forgot password
              </Link>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mx-auto w-100"
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item>
              <span>
                Don't have account ?
              </span>{" "}
              <Link to="/register">
                Register now!
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
