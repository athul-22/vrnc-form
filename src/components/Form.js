import React, { useState } from 'react';
// import '../styles/From.css'
import { Form, Button, Input, message, Steps,theme, Upload, Flex, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import { Steps } from 'antd-mobile';


const c1 = () => {
  return (
    <div>
      Content for Step 1
    </div>
  );
};

const steps = [
  {
    title: '',
    content: () =>
      <div style={{}}>

        <h3>Section 1</h3>

        <Form.Item label="1) ShowRoom Name" name="showroom" rules={[{ required: true, }]}>
          <Input />
        </Form.Item>

        <Form.Item label="2) ShowRoom Location" name="location" rules={[{ required: true, }]}>
          <Input />
        </Form.Item>
        <Form.Item label="3) Program conducted on" name="date" rules={[{ required: true, }]}>
          <Input />
        </Form.Item>

        <div style={{ width: '30%' }}>
          <Form.Item label="4) Entrance Photo" name="ephoto" rules={[{ required: true, }]}>
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="5) ShowRoom Photo" name="showroomphoto" rules={[{ required: true, }]}>
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="6) Program Banner" name="programbanner" rules={[{ required: true, }]}>
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>
        </div>

      </div>,
  },
  {
    title: '',
    content: () => <div >
      <h3>Section 2</h3>
      <div style={{ width: '30%' }}>
        <Form.Item label="1) Participants List Photo" name="participantslist" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>
      </div>
    </div>,
  },
  {
    title: '',
    content: () => <div>
      <h3>Section 3</h3>
      <div style={{ width: '30%' }}>
        <Form.Item label="1) Training Session Photo" name="trainingphoto1" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="2) Training Session Photo" name="trainingphoto2" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="3) Training Session Photo" name="trainingphoto3" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="4) Training Session Photo" name="trainingphoto4" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="5) Training Session Photo" name="trainingphoto5" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="6) Training Session Photo" name="trainingphoto6" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="7) Training Session Photo" name="trainingphoto7" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="8) Training Session Photo" name="trainingphoto8" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>
      </div>
    </div>,
  },
  {
    title: '',
    content: () => <div>
      <h3>Section 4</h3>
      <div style={{ width: '30%' }}>
        <Form.Item label="1) QA Section Photo" name="qasectionphoto" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="2) Refreshments  Session Photo" name="refreshsectionphoto" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>
      </div>
    </div>,
  },
  {
    title: '',
    content: () => <div>
      <h3>Section 5</h3>
      <div style={{ width: '30%' }}>
        <Form.Item label="1) Honouring Chief Guest Session Photo" name="honouringphoto1" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="2) Honouring Chief Guest Session Photo" name="honouringphoto2" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>
      </div>
    </div>,
  },
  {
    title: '',
    content: () => <div>
      <h3>Section 6</h3>
      <div style={{ width: '30%' }}>
        <Form.Item label="1) Group Photo" name="groupphoto" rules={[{ required: true, }]}>
          <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
            <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>
      </div>
    </div>,
  },
];

const { Step } = Steps;

const FormComponent = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 20,
    paddingBottom: 50,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20
  };

  return (
    <div style={{ margin: '20px' }}>
      <Steps current={current} items={items} direction="horizontal" style={{ width: '100%', overflowY: 'auto', height: '50px' }} responsive={false}/>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <div style={contentStyle}>{steps[current].content()}</div>
          <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} style={{ width: '100px' }}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
        </Col>
        
      </Row>
     
    </div>
  );
};


export default FormComponent;
