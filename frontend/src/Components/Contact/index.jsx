import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { Col, Row, Button, Form, Input, Modal, Result, message } from "antd";
import ContactImage from '../../Assets/Images/contact.jpg'
import { SlideUpWhenVisible } from "../CommonHelper/helperComponents";

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

  const onFinish = () => {
    const name = form.getFieldValue("name")
    const  email = form.getFieldValue("email")
    const message =  form.getFieldValue("message")
    const params = {
      name: name,
      email: email,
      message: message,
    }
    const url = "http://localhost:5005/submit"
    if(name && email && message ){
    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })
      .then(response => response.json())
      .then((data) => {
        if (data) {
          form.resetFields();
          setIsVisible(true);
        }
      }
      )
    }
  };

  return (
    <SlideUpWhenVisible>
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
      <div className="contact-content">
      <span>I welcome the opportunity to connect with you! Whether you have a project in mind, are interested in collaboration, or simply want to say hello, feel free to drop me a line.<br/>Open to new job opportunities, I'm eager to hear from you if my skills align with your needs.<br/>Don't hesitate to get in touch.
      Excited about the prospect of connecting with you!</span>
      </div>
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
    </SlideUpWhenVisible>
  );
};

export default Contact;
