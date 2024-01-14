// Install required packages if not already installed
// npm install antd react-scripts

// Import necessary components from Ant Design
import { useEffect, useState } from 'react';
import { Layout, Button, Table, Modal, Form, Input, Switch } from 'antd';
import { PlusOutlined, EyeOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const { Header, Content } = Layout;

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [formData, setFormData] = useState([]);

  // Define table columns
  const columns = [
    { title: 'Sl. No', dataIndex: 'slNo', key: 'slNo' },
    { title: 'Action', key: 'action', render: (_, record) => <Button icon={<EyeOutlined />} onClick={() => handleView(record)}></Button> },
    { title: 'Showroom', dataIndex: 'showroom', key: 'showroom' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  // Handler for viewing details
const handleView = (record) => {
  Modal.success({
    title: 'View Details',
    content: (
      <div>
        <p>Showroom: {record.showroom}</p>
        <p>Location: {record.location}</p>
        <p>Date: {record.date}</p>
      </div>
    ),
    maskClosable: true, // Set this property to true
    footer: [
      <Button key="showFullReport" type="primary" onClick={() => handleShowFullReport(record._id)}>
        Show Full Report
      </Button>,
      <Button key="close" type="secondary" style={{ backgroundColor: 'red', borderColor: 'red', color: 'white', marginLeft: '10px' }} onClick={() => handleClose()}>
        Close
      </Button>,
    ],
    onCancel: () => handleClose(),
  });
};


const handleClose = () => {
  Modal.destroyAll();
};


  const handleShowFullReport = (record) => {
    window.location.href = `http://localhost:3000/report/${record}`;
  };

  // Handler for toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handler for showing the add form
  const showAddForm = () => {
    setAddFormVisible(true);
  };

  // Handler for hiding the add form
  const hideAddForm = () => {
    setAddFormVisible(false);
  };

  // Add form layout
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    style: { margin: 0 },
  };

//USEEFFECT FOR FETCHING FORMS
useEffect(() => {
  fetch('http://localhost:3001/api/get')
    .then(res => res.json())
    .then(data => {
      // Format the data received from the backend
      const formattedData = data.map((item, index) => ({
        slNo: index + 1,
        showroom: item.showroom,
        location: item.location,
        date: item.date,
        _id: item._id,
        // Add more fields as needed
      }));
      setFormData(formattedData);
    })
    .catch(error => console.error(error));
}, []);

  return (
    <Layout style={{minHeight: '100vh', background: darkMode ? '#001529' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <div>
          {/* <img src="your-logo-url" alt="Logo" style={{ height: '32px', marginRight: '16px' }} /> */}
        </div>
        <h3 style={{color:'white'}}>VRNC</h3>
        <Link to="/form" ><Button icon={<PlusOutlined />} >Add Response</Button></Link>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Header>
      <Content style={{ padding: '1px' }}>
        <Table  columns={columns} dataSource={formData} scroll={{ x: true }} />
      </Content>
      
      {/* Add Form Modal */}
      <Modal title="Add Item" visible={addFormVisible} onOk={hideAddForm} onCancel={hideAddForm}>
        <Form {...layout}>
          <Form.Item label="Name" name="name" rules={[{ required: false, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          {/* Add more form fields as needed */}
        </Form>
      </Modal>
    </Layout>
  );
};

export default Dashboard;
