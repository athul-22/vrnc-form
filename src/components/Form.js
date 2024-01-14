import React, { useState, useEffect } from 'react';
import { Form, Button, Steps, Upload, Row, Col, Input, message, theme } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form'; // Import useForm from the correct path
import axios from 'axios';
import './Form.css';
// import { useForm, FormProvider } from 'rc-field-form'; // Correct import from rc-field-form

const { Step } = Steps;

// const { useForm, FormProvider } = Form;

const FormComponent = () => {

  // const [form] = useForm();
  const [form] = useForm();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [formValues, setFormValues] = useState({});

  // State for each input
  const [showroom, setShowroom] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [ephoto, setEphoto] = useState('');
  const [showroomphoto, setShowroomphoto] = useState('');
  const [programbanner, setProgrambanner] = useState('');
  const [participantslist, setParticipantslist] = useState('');
  const [trainingphoto1, setTrainingphoto1] = useState('');
  const [trainingphoto2, setTrainingphoto2] = useState('');
  const [trainingphoto3, setTrainingphoto3] = useState('');
  const [trainingphoto4, setTrainingphoto4] = useState('');
  const [trainingphoto5, setTrainingphoto5] = useState('');
  const [trainingphoto6, setTrainingphoto6] = useState('');
  const [trainingphoto7, setTrainingphoto7] = useState('');
  const [trainingphoto8, setTrainingphoto8] = useState('');
  const [qasectionphoto, setQasectionphoto] = useState('');
  const [refreshsectionphoto, setRefreshsectionphoto] = useState('');
  const [honouringphoto1, setHonouringphoto1] = useState('');
  const [honouringphoto2, setHonouringphoto2] = useState('');
  const [groupphoto, setGroupphoto] = useState('');


  const [fileStates, setFileStates] = useState({ programbanner: null, participantslist: null, trainingphoto1: null, trainingphoto2: null, trainingphoto3: null, trainingphoto4: null, trainingphoto5: null, trainingphoto6: null, trainingphoto7: null, trainingphoto8: null, qasectionphoto: null, refreshsectionphoto: null, honouringphoto1: null, honouringphoto2: null, groupphoto: null, showroomphoto: null, ephoto: null });

  const updateFormValues = (changedValues) => {
    console.log('Changed values:', changedValues);
    setFormValues((prevValues) => ({ ...prevValues, ...changedValues }));
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const next = async () => {
    try {
      const values = await form.validateFields();
      console.log('Step X - Form values:', values);
      // Access form values here, e.g., const showroom = values.showroom;
      setCurrent(current + 1);
    } catch (errorInfo) {
      console.error('Form validation failed:', errorInfo);
    }
  };


  const onFinish = async (form) => {
    try {
      const values = await form.validateFields();
      // Validate the form

      // Create a new FormData object
      const formData = new FormData();

      // Append text field values to FormData
      formData.append('showroom', showroom);
      formData.append('location', location);
      formData.append('date', date);

      // Append image files
      Object.entries(fileStates).forEach(([key, fileList]) => {
        fileList?.forEach((file) => {
          formData.append(key, file.originFileObj);
        });
      });

      // Send form data to the backend API
      const response = await axios.post('http://localhost:3001/api/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response from the server
      if (response.status === 200) {
        console.log('Form data submitted successfully!');
        message.success('Processing complete!');
        setFormValues(values);
        setCurrent(current + 1);
        window.location.href = '/';
      } else {
        console.error('Error submitting form data:', response.data.message);
        message.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error in onFinish:', error);
    }
  };




  const handleImageChange = (fieldName, fileList) => {
    setFileStates((prevStates) => ({ ...prevStates, [fieldName]: fileList }));
  };

  const renderFileList = (fieldName) => {
    const fileList = fileStates[fieldName];
    if (fileList && fileList.length > 0) {
      return (
        <ul>
          {fileList.map((file) => (
            <li key={file.uid}>{file.name}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: '',
      content: () => {

        return (

          <div className='main'>
            <h3>Section 1</h3>

            <label htmlFor="showroom">1: ShowRoom Name</label>
            <input className='input' type="text" id="showroom" name="showroom" value={showroom} onChange={(e) => setShowroom(e.target.value)} />
            <br />

            <label htmlFor="location">2: ShowRoom Location</label>
            <input className='input' type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <br />

            <label htmlFor="date">3: Program conducted on</label>
            <input className='input' type="text" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <br />

            <div>
              <div className='file-upload-main'>
                <label htmlFor="ephoto">4: Entrance photo</label>
                <div className='file-upload'>
                  <Upload
                    listType="text"
                    fileList={fileStates.ephoto}
                    beforeUpload={() => false}
                    onChange={(info) => handleImageChange('ephoto', info.fileList)}
                  >
                    <Button icon={<UploadOutlined />}>Upload Image</Button>
                  </Upload>
                </div>

              </div>
            </div>

            <div>
              <div className='file-upload-main'>
                <label htmlFor="showroomphoto">5: Showroom Photo</label>
                <div className='file-upload'>
                  <Upload
                    listType="text"
                    fileList={fileStates.showroomphoto}
                    beforeUpload={() => false}
                    onChange={(info) => handleImageChange('showroomphoto', info.fileList)}
                  >
                    <Button icon={<UploadOutlined />}>Upload Image</Button>
                  </Upload>
                </div>

              </div>
            </div>

            {/* <label htmlFor="ephoto">4: Entrance Photo</label>
            <input className='input' type="text" id="ephoto" name="ephoto" value={ephoto} onChange={(e) => setEphoto(e.target.value)} />
            <br />

            <label htmlFor="showroomphoto">5: ShowRoom Photo</label>
            <input className='input' type="text" id="showroomphoto" name="showroomphoto" value={showroomphoto} onChange={(e) => setShowroomphoto(e.target.value)} />
            <br /> */}

            <div>
              <h3>Section 1</h3>
              <div className='file-upload-main'>
                <label htmlFor="programbanner">6: Program Banner</label>
                <div className='file-upload'>
                  <Upload
                    listType="text"
                    fileList={fileStates.programbanner}
                    beforeUpload={() => false}
                    onChange={(info) => handleImageChange('programbanner', info.fileList)}
                  >
                    <Button icon={<UploadOutlined />}>Upload Image</Button>
                  </Upload>
                </div>
                {/* {renderFileList('programbanner')} */}
              </div>
            </div>
          </div>

        )
      }
    },
    {
      title: '',
      content: () => <div >
        <h3>Section 2</h3>


        <div>
          <div className='file-upload-main'>
            <label htmlFor="participantslist">7: Participants List</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.participantslist}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('participantslist', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        {/* <div style={{ width: '30%' }}>
          <Form.Item label="1) Participants List Photo" name="participantslist" >
            <Upload beforeUpload={() => false} showUploadList={false} style={{ display: 'block', justifyContent: 'center' }}>
              <Button style={{ marginLeft: "" }} icon={<UploadOutlined />}>Upload Photo</Button>
            </Upload>
          </Form.Item>
        </div> */}
      </div>,
    },
    {
      title: '',
      content: () => <div>
        <h3>Section 3</h3>
        {/* <div style={{ width: '30%' }}> */}
        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto1">8: Training Photo 1</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto1}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto1', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>



        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto2">9: Training Photo 2</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto2}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto2', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto3">10: Training Photo 3</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto3}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto3', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto4">11: Training Photo 4</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto4}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto4', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto5">12: Training Photo 5</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto5}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto5', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto6">13: Training Photo 6</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto6}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto6', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto7">14: Training Photo 7</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto7}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto7', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="trainingphoto8">15: Training Photo 8</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.trainingphoto8}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('trainingphoto8', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        {/* </div> */}
      </div>,
    },
    {
      title: '',
      content: () => <div>
        <h3>Section 4</h3>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="qasectionphoto">16: QA Section Photo</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.qasectionphoto}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('qasectionphoto', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="refreshsectionphoto">17: Refreshments  Session Photo</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.refreshsectionphoto}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('refreshsectionphoto', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>
      </div>,
    },
    {
      title: '',
      content: () => <div>
        <h3>Section 5</h3>
        <div>
          <div className='file-upload-main'>
            <label htmlFor="honouringphoto1">18: Honouring Chief Guest Session Photo</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.honouringphoto1}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('honouringphoto1', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

        <div>
          <div className='file-upload-main'>
            <label htmlFor="honouringphoto2">19: Honouring Chief Guest Session Photo</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.honouringphoto2}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('honouringphoto2', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
        </div>

      </div>
    },
    {
      title: '',
      content: () => <div>
        <h3>Section 6</h3>
        <div>
          <div className='file-upload-main'>
            <label htmlFor="groupphoto">20: Group Photo</label>
            <div className='file-upload'>
              <Upload
                listType="text"
                fileList={fileStates.groupphoto}
                beforeUpload={() => false}
                onChange={(info) => handleImageChange('groupphoto', info.fileList)}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </div>

          </div>
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
    <Form.Provider {...form}>
      <div style={{ margin: '' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
          <Steps current={current} items={items} direction="horizontal" style={{ width: '80%', overflowY: 'auto', height: '50px' }} responsive={false} />
        </div>
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
                    <Button type="primary" onClick={() => onFinish(form)}>
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
    </Form.Provider>
  );
};


export default FormComponent;
