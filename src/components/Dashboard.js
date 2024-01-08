// Install required packages if not already installed
// npm install antd react-scripts

// Import necessary components from Ant Design
import { useState } from 'react';
import { Layout, Button, Table, Modal, Form, Input, Switch } from 'antd';
import { PlusOutlined, EyeOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import { MoonOutlined, SunOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [addFormVisible, setAddFormVisible] = useState(false);

  // Define table columns
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Action', key: 'action', render: (_, record) => <Button icon={<EyeOutlined />} onClick={() => handleView(record)}></Button> },
  ];

  // Dummy data for the table
  const data = [
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
  ];

  // Handler for viewing details
  const handleView = (record) => {
    Modal.info({
      title: 'View Details',
      content: (
        <div>
          <p>Name: {record.name}</p>
          {/* Add more details as needed */}
        </div>
      ),
      onOk() {},
    });
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
  };

  return (
    <Layout style={{ minHeight: '100vh', background: darkMode ? '#001529' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <div>
          {/* <img src="your-logo-url" alt="Logo" style={{ height: '32px', marginRight: '16px' }} /> */}
        </div>
        <h3 style={{color:'white'}}>VRNC</h3>
        <Link to="/form" ><Button icon={<PlusOutlined />} >Add Response</Button></Link>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Header>
      {/* <Content style={{ padding: '24px' }}>
        <Table columns={columns} dataSource={data} />
      </Content> */}
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
