import React, { useState } from 'react';
import { Form, Button, Steps, Upload, Row, Col, Input, message, theme } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useForm, FormProvider } from 'rc-field-form'; // Correct import from rc-field-form
import axios from 'axios';

const { Step } = Steps;

// const { useForm, FormProvider } = Form;

const FormComponent = () => {

  // const [form] = useForm();
  const [form] = useForm();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [formValues, setFormValues] = useState({});

  const updateFormValues = (changedValues) => {
    console.log('Changed values:', changedValues);
    setFormValues((prevValues) => ({ ...prevValues, ...changedValues }));
  };

  const next = async () => {
    try {
      await form.validateFields();
      setCurrent(current + 1);
      console.log('Step X - Form values:', formValues);
    } catch (errorInfo) {
      console.error('Form validation failed:', errorInfo);
    }
  };

  //✅ WORKING V1
  // const onFinish = async () => {
  //   try {
  //     const values = await form.validateFields();
  //     console.log('Form values:', values);

  //     // Send form data to the backend API
  //     const response = await axios.post('http://localhost:3001/api/submit-form', values);

  //     // Handle the response from the server
  //     if (response.status === 200) {
  //       // Update state, show success message, or perform other actions
  //       console.log('Form data submitted successfully!');
  //       message.success('Processing complete!');
  //       setFormValues(values);
  //       setCurrent(current + 1);
  //     } else {
  //       console.error('Error submitting form data:', response.data.message);
  //       message.error('Error submitting form data');
  //     }
  //   } catch (error) {
  //     console.error('Error in onFinish:', error);
  //   }
  // };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form values:', values);

      // Send form data to the backend API
      const response = await axios.post('http://localhost:3001/api/submit-form', { formData: values });

      // Handle the response from the server
      if (response.status === 200) {
        // Update state, show success message, or perform other actions
        console.log('Form data submitted successfully!');
        message.success('Processing complete!');
        setFormValues(values);
        setCurrent(current + 1);
      } else {
        console.error('Error submitting form data:', response.data.message);
        message.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error in onFinish:', error);
    }
  };


  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: '',
      content: () => {

        return (

          <div>

            <h3>Section 1</h3>

            <Form preserve={true} >
              <Form.Item label="1) ShowRoom Name" name="showroom" onValuesChange={updateFormValues}>
                <Input />
              </Form.Item>

              <Form.Item label="2) ShowRoom Location" name="location"onValuesChange={(changedValues) => updateFormValues(changedValues)} >
                <Input />
              </Form.Item>
              <Form.Item label="3) Program conducted on" name="date" onValuesChange={(changedValues) => updateFormValues(changedValues)}>
                <Input />
              </Form.Item>
            </Form>
            <div style={{ width: '30%' }}>
              <Form.Item label="4) Entrance Photo" name="ephoto" >
                <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
                  <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
                </Upload>
              </Form.Item>

              <Form.Item label="5) ShowRoom Photo" name="showroomphoto" >
                <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
                  <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
                </Upload>
              </Form.Item>

              <Form.Item label="6) Program Banner" name="programbanner" >
                <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
                  <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
                </Upload>
              </Form.Item>
            </div>

          </div>
        )
      }
    },
    {
      title: '',
      content: () => <div >
        <h3>Section 2</h3>
        <div style={{ width: '30%' }}>
          <Form.Item label="1) Participants List Photo" name="participantslist" >
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
          <Form.Item label="1) Training Session Photo" name="trainingphoto1" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="2) Training Session Photo" name="trainingphoto2" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="3) Training Session Photo" name="trainingphoto3" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="4) Training Session Photo" name="trainingphoto4" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="5) Training Session Photo" name="trainingphoto5" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="6) Training Session Photo" name="trainingphoto6" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="7) Training Session Photo" name="trainingphoto7" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="8) Training Session Photo" name="trainingphoto8" >
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
          <Form.Item label="1) QA Section Photo" name="qasectionphoto" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="2) Refreshments  Session Photo" name="refreshsectionphoto" >
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
          <Form.Item label="1) Honouring Chief Guest Session Photo" name="honouringphoto1" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="2) Honouring Chief Guest Session Photo" name="honouringphoto2" >
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
          <Form.Item label="1) Group Photo" name="groupphoto" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>
        </div>
      </div>,
    },
  ];


  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  // {steps.map((item, index) => (
  //   <div key={index} style={{ display: index === current ? 'block' : 'none' }}>
  //     {item.content({ form, updateFormValues, formValues })}
  //   </div>
  // ))}


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
    <FormProvider {...form}>
      <div style={{ margin: '20px' }}>
        <Steps current={current} items={items} direction="horizontal" style={{ width: '100%', overflowY: 'auto', height: '50px' }} responsive={false} />
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={8}>
            <div style={contentStyle}>
              <Form initialValues={formValues} >
                {steps.map((item, index) => (
                  <div key={index} style={{ display: index === current ? 'block' : 'none' }}>
                    {item.content({ form, updateFormValues, formValues })}
                  </div>
                ))}

                <div style={{ marginTop: 24 }}>
                  {current < steps.length - 1 && (
                    <Button type="primary" htmlType="submit" onClick={() => next()} style={{ width: '100px' }}>
                      Next
                    </Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => onFinish()}>
                      Done
                    </Button>
                  )}
                  {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                      Previous
                    </Button>
                  )}
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </FormProvider>
  );
};


export default FormComponent;
