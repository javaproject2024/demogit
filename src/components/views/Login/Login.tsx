import {
  Button,
  Checkbox,
  Form,
  Input,
} from "antd";
import React from "react";
import {
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";

const onFinish = (values: never) => {
  console.log(
    "Received values of form: ",
    values,
  );
};

function Login() {
  return (
    <div className="justify-content center">
      <div className=" d-flex justify-content-center flex-column w-100 py-5">
        <div className="d-flex flex-column align-items-center">
          <h3 className="mb-1">
            Welcome
          </h3>
          <p className="mb-5">
            Sign in to your account to
            continue
          </p>
          <Form
            name="normal_login"
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

              <a
                className="login-form-forgot"
                href=""
              >
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or{" "}
              <a href="">
                register now!
              </a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
