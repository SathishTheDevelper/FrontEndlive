import { useState } from 'react';
import { Card, Button, Table, Drawer, Form, Input } from 'antd';

import { useContext } from 'react';
import LeaveContext from '../../../Providers/Leaves';
import { useEffect } from 'react';



const Leaves = () => {

  const {AddLeaves,fetchtotalleaves,totalleaves}=useContext(LeaveContext)
  // const [data, setData] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();
 
  let data=[]
  totalleaves?.map((leave)=>{
    data.push({
      action:leave._id,
      leaveTitle:leave.leave_title,
      applicableDays:leave.applicable_days,
      description:leave.description,
    })
  })
  const columns = [
    {
      title: 'Leave Title',
      dataIndex: 'leaveTitle',
      key: 'leaveTitle',
    },
    {
      title: 'Applicable Days',
      dataIndex: 'applicableDays',
      key: 'applicableDays',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const onFinish = (values) => {
    console.log('Submitted values:', values);
    // Add the values to the table data
    AddLeaves(values)
    onCloseDrawer()
  };

  useEffect(() => {
    fetchtotalleaves()
  }, [])
  

  return (
    <div>
      <Card extra={<Button type="primary" onClick={showDrawer}>Add Leave</Button>}>
        <Table dataSource={data} columns={columns} />
      </Card>

      <Drawer
        title="Add Leave"
        placement="right"
        closable={true}
        onClose={onCloseDrawer}
        visible={drawerVisible}
        width={400}
      >
        <Form form={form} onFinish={onFinish} >
          <Form.Item className='m_t_10' name="leave_title" label="Leave Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="applicable_days" label="Applicable Days" rules={[{ required: true }]}>
             <Input/>
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>

          <div
          style={{
            margin: "10px",
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
          }}
        >
          <Button className="btn_cancel" onClick={onCloseDrawer} >
            Cancel
          </Button>
          <Button
           type="primary"

            className="btn"
            htmlType="submit"
            // loading={buttonLodaing}
          >
            Save
          </Button>
        </div>
            {/* <Button type="primary" htmlType="submit">
              Submit
            </Button> */}
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Leaves;
