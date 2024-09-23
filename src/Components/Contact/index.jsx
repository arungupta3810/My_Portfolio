import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { Col, Row, Button, Form, Input, Modal, Result } from "antd";
import ContactImage from '../../Assets/Images/contact.jpg'

const Contact = () => {
  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState(false);

  const contactDetails = [
    {
      id: 1,
      name: "Email",
      icon: <MailOutlined />,
      value: "arungupta@gmail.com",
    },
    {
      id: 2,
      name: "Phone",
      icon: <PhoneOutlined />,
      value: "+91-8652864081",
    },
    {
      id: 3,
      name: "Location",
      icon: <EnvironmentOutlined />,
      value: "Mumbai, Maharashtra",
    },
  ];

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => setIsVisible(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [isVisible]);

  const onFinish = (values) => {
    form.resetFields();
    setIsVisible(true);
  };

  return (
    <div className="contact">
      <p>
        <PhoneOutlined /> Contact
      </p>
      <Row gutter={24}>
        <Col md={12} xs={24} className="detail">
          {contactDetails?.map((e) => (
            <div className="detail-wrapper" key={e?.id}>
              <div className="icon">{e?.icon}</div>
              <div className="icon-detail">
                <span>{e?.name} </span>
                <span>{e?.value}</span>
              </div>
            </div>
          ))}
          <img src={ContactImage} alt="contact"/>
        </Col>
        <Col md={12} xs={24} className="contact-form">
          <Form
            className="form"
            layout="vertical"
            form={form}
            scrollToFirstError
            style={{ paddingBlock: 32 }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <Input.TextArea rows={8} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {isVisible && (
        <Modal
          visible={isVisible}
          footer={null}
          onCancel={() => setIsVisible(false)}
          centered
        >
          <Result
            status="success"
            title="Form submitted successfully"
            subTitle="I will soon reach out to you. Thanks for your valuable time."
          />
        </Modal>
      )}
    </div>
  );
};

export default Contact;
