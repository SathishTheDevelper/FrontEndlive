import  { useContext, useEffect, useState } from 'react';
import { Form,Checkbox, Button, Select, Input, Space} from 'antd';
import JobContext from '../../Providers/JobProvider';
import { useForm } from 'antd/es/form/Form';
import { Option } from 'antd/es/mentions';


const AssignVendor = () => {
   const {fetchJob, vendorbutton,fetchVendor,handleAssignVendor,vendor,setFilterdata,filterData,handleopenfilter,setPagination,fetchClient,recruiter,clientFilter}=useContext(JobContext)
    const plainOptions = ['opened', 'closed', 'Hold'];

    const [jobType, setJobType] = useState("Full Time");
    const [salaryType, setSalaryType] = useState("Monthly");
const defaultCheckedList = ['opened', 'closed'];
   const [form]=useForm()
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
   
   
    const handleFinish=(values)=>{
        
        let send ={
            ...values,
            vendor_clientbillable:Number(values["vendor_clientbillable"]?.replace(/,/g, '')||""),
            vendor_salary_type:salaryType,
            name:values["name"]?.replace(/,/g, '')||"",
        }
     
  
        handleAssignVendor(send,form)

    }

     useEffect(() => {

  
      fetchVendor()
      
     }, [])
     

     
    const handleJobtypeChange=(e)=>{
        if(e =="Full Time"){
          setSalaryType("LPA")  
        setJobType(e)
            
        } 
        else{
        setJobType(e)
  
        }
      }
      const handleChangeSalary =(e)=>{
        setSalaryType(e)
      }
  
  return (
  







   <div className='m_t_20'>
     
       <Form
        form={form}
        onFinish={handleFinish}
        layout='vertical'>
      
       {/* <Form.Item
        label="Client"
         name="client_id">
         <Select
          placeholder="Select Client"
          allowClear
          showSearch
          options={clientFilter} />
       </Form.Item> */}
       <Form.Item
        label="Assign To"
         name="assign">
         <Select 
            placeholder="Select Vendor"
            allowClear
            mode='multiple'
            
            showSearch
             options={vendor}/>
       </Form.Item>
       <Form.Item
                label="Job Type"
                name="vendor_job_type"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Job Type!",
                  },
                ]}
              >
                <Select placeholder="Select Job Type"
                
                showSearch
               allowClear
                 onChange={handleJobtypeChange}>
                  <Option value="Full Time" label="FullTime">
                    <Space>Full Time</Space>
                  </Option>
                  <Option value="Part Time" label="PartTime">
                    <Space>Part Time</Space>
                  </Option>
                  <Option value="Contract" label="Contract">
                    <Space>Contract</Space>
                  </Option>
                </Select>
            </Form.Item>
       <Form.Item label="Client Budget" name="vendor_clientbillable"
                 
                 rules={[
                  {
                    required: true,
                    message: "Please Enter Client Budget!",
                  },
                ]}
                getValueFromEvent={(e) => {
                  
                  const numericValue = e.target.value.replace(/[^0-9]/g, '');
                  return `${parseFloat(numericValue).toLocaleString('en-IN')}`;
                }}
                >
              {jobType == "Full Time" ? (
                    <Input
                     addonBefore={<p className="m_10">₹</p>}

                    addonAfter={
                      <p className="m_10">LPA</p>
                        
                   
                    }
                    
                    placeholder="1,00,000"  />
                  ) : (
                    <Input
                    
                      className='salary'
                     addonBefore={<p className="m_10">₹</p>}

                      placeholder={salaryType=="Per Hour"? "1,000":"1,00,000"}
                      addonAfter={
                        <Select

                         defaultValue={salaryType}
                          style={{ width: 100 }}
                           onChange={handleChangeSalary}
                        >
                          <Option value="Monthly">Monthly</Option>
                          <Option value="Per Hour">Hourly</Option>
                        </Select>
                      }
                    />
                  )}
                </Form.Item>
              
     
      <div
       className='d_f g_10 j_c_f_e'>
      <Button type='primary' className='btn_cancel' onClick={handleopenfilter}>Cancel</Button>

      <Button type='primary' className='btn' htmlType='submit'
      loading={vendorbutton}>Save</Button>
      </div>
       </Form>
   </div>
  );
};

export default AssignVendor;