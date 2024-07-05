import { useContext,useState,useEffect} from 'react';
import JobContext from '../../Providers/JobProvider';
import {Space,Cascader} from "antd"
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import { Button, Input,Form, FormItem ,Select} from '../../Utils/Formelements';
import { useForm } from 'antd/es/form/Form';



const AddJob=()=>{
 const {addJob,handleopenDrawerJob,addbuttonJob,clients,handleClientChange,skill,location,poc,endclient,setAddButton,init} = useContext(JobContext);
 const [jobType, setJobType] = useState("Full Time");
 const [salaryType, setSalaryType] = useState("Monthly");
 const [job_description, setJobDescription] = useState("");
 const [form] = useForm();



 const options = [{
  label:0,
  value:0
 }];
     for (let i = 1; i <= 20; i++) {
    options.push({
      label:i,
      value: i,
    });
  }

  const menuThree = (parent, menu) => {
    const filter = menu?.filter((e) => {
      return String(e?.parent?._id||null) === String(parent) });
      console.log(filter,("filter"));
      const list = filter?.map((e) => {
        return {
          label: e?.name,
          value: e?._id,
          children: menuThree(e?._id, menu)
           
        }})
        return list
        
     
    ;}

    let skillsdata = [];
    skill?.map((item,i) => {
     skillsdata.push({
      key:i,
       label: item?.name,
       value: item?.name,
     });
   });
   let locationsdata=[]
   location?.map((item,i) => {
     locationsdata.push({
      key:i,
       label: item?.name,
       value: item?.name,
     });
   });
   let Pocdata=[]
   poc?.contact_persons?.map((item) => {
    Pocdata.push({
      label: item?.name,
      value: item?.name,
    });
  });
  let EndClientdata=[]
  endclient?.map((item) => {
   EndClientdata.push({
     label: item?.name,
     value: item?.name
   });
 });

    const clientsData= menuThree(null,clients)

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
    const handleChangedescription = (value) => {
      setJobDescription(value)
    };
    const onAddJobSubmit=(values)=>{
      setAddButton(true)
    
      let sendData ={
         ...values,
         salary:Number(values["salary"]?.replace(/,/g, '')||""),
         exp_to:values["exp_to"]||0,
        required_no_of_candidates:values["required_no_of_candidates"]?values["required_no_of_candidates"]:0,
         salaryType:salaryType,
         job_description:job_description,
      }

      addJob(sendData,form)
      setJobDescription("")
      setSalaryType("Monthly")
  
      }


      useEffect(() => {
        init()
      }, [])


      const customInputStyle = {
        '& .ant-input:focus, & .ant-input-focused': {
          borderColor: '#ff4d4f', // Primary red color
          boxShadow: '0 0 0 2px rgba(255, 77, 79, 0.2)',
        },
      };
      
 return( 
     <>
       <Form
      onFinish={onAddJobSubmit}
      form={form}
        layout='vertical'>
         <div className='col_2 g_20 col_1_sm g_5_sm m_t_10 '>
            <FormItem label="Job ID"
             name="job_id"
              rules={[
                {
                  required: true,
                  message: "Please Enter Job ID!",
                },
              ]}>
             <Input
              
activeBorderColor="red"



             
           
              placeholder=' Enter Job ID'/>
            </FormItem>
         </div>
         <div className='col_2 g_20 col_1_sm g_5_sm m_t_1'>
            <FormItem label="Job Title"
             name="job_title"
              rules={[
                {
                  required: true,
                  message: "Please Enter Job Title!",
                },
                {
                  pattern: new RegExp(/^[a-zA-Z\s]+$/),
                  message: "field does not accept numbers",
                },
              ]}>
             <Input
             placeholder=" Enter Job Title"
             
              
             />
            </FormItem>
            <FormItem
                label="Job Type"
                name="job_type"
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
               options={[
                {
                 label:"Full Time",
                 value:"Full Time"
               },
               {
                label:"Part Time",
                value:"Part Time"
              },{
                label:"Contract",
                value:"Contract"
              },

              ]}
                 onChange={handleJobtypeChange}>
                
                </Select>
            </FormItem>
            
         </div>
         <div className='col_2 g_20 col_1_sm g_5_sm m_t_1 '>
       
           <FormItem label="Experience" className='h_10 h_100_sm'    rules={[
    {
      required: true,
      message: "Please Select Experience!",
    },
  ]}
  hasFeedback
  validateStatus={
    form.getFieldError("exp_from") 
      ? "error"
      : ""
  }>
           <div className="d_f a_i_c experience g_10 f_w_w_sm g_5_sm">
                <FormItem name="exp_from"  >
                  <Select options={options}
                     />
                </FormItem>
                <FormItem>to</FormItem>
                <FormItem name="exp_to">
                  <Select options={options} defaultValue={0}/>
                </FormItem>
              </div>
           </FormItem>
           <FormItem
                label="Client Name"
                name="client_id"
                
                rules={[
                  {
                    required: true,
                    message: "Please Select Client Name!",
                  },
                ]}
              >
                <Cascader placeholder="Select Client" options={clientsData}
                           showSearch
                           optionFilterProp="children"
          filterOption={(input, option) =>
          (option?.label.toLowerCase()?? "").includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
          }
                  dropdownRender={(menu) => (
                    <div style={{ width: '300px' }}>{menu}</div>
                  )}
                 onChange={handleClientChange} 
                 />
              </FormItem>
         </div>
         <div className='col_2 g_20 col_1_sm g_5_sm m_t_1'>
       
         <FormItem label="End Client" name="end_client">
                  <Select
                 
                  placeholder="Select EndClient"
                  width={260}
                  showSearch
                  mode="tags"
                  dropdownRender={(menu) => <>{menu}</>}
                 options={EndClientdata}
                />
              </FormItem>
              <FormItem label="POC" name="poc">
                  <Select
                  style={{
                    // width: 300,
                  }}
                  placeholder="Select POC"
                  showSearch
                  mode="tags"
                  dropdownRender={(menu) => <>{menu}</>}
                  options={Pocdata}
                />
                </FormItem>
    </div>
    <div className='col_2 g_20 col_1_sm g_5_sm m_t_1'>
       
    <FormItem label="Job Location" name="job_location"
       rules={[
        {
          required: true,
          message: "Please Select Job Location!",
        },
      ]}>
                  <Select
                  
                  placeholder="Select Location"
                  showSearch
                  allowClear
                  optionFilterProp="children"
 filterOption={(input, option) =>
 (option?.label.toLowerCase()?? "").includes(input.toLowerCase())
 }
 filterSort={(optionA, optionB) =>
 (optionA?.label ?? "")
 .toLowerCase()
 .localeCompare((optionB?.label ?? "").toLowerCase())
 }
                  mode="tags"
                  dropdownRender={(menu) => <>{menu}</>}
                  options={locationsdata}
                />
              </FormItem>
              <FormItem label="Client Budget" name="salary"
                 
                 rules={[
                  {
                    required: true,
                    message: "Please Enter Client Budget!",
                  },
                ]}
                getValueFromEvent={(e) => {
                   console.log("ffff",e)
                  const numericValue = e.target.value.replace(/[^0-9]/g, '');
                  return `${parseFloat(numericValue).toLocaleString('en-IN')}`;
                }}
                >
              {jobType == "Full Time" ? (
                    <Input
                    addonAfter={
                      <p className="m_10">LPA</p>
                        
                   
                    }
                    
                    placeholder="1,00,000"  />
                  ) : (
                    <Input
                    
                      className='salary'
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
                </FormItem>
  </div>
  <div className='col_2 g_20 col_1_sm g_5_sm m_t_1'>
          <FormItem
                label="Required No. of Candidates"
                name="required_no_of_candidates"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Required No. of Candidates!",
                  },
                ]}
              >
                <Input placeholder="Enter Value" type="number" />
              </FormItem>
              <FormItem label="Joining Availability" name="joing_avaliability">
                <Select placeholder="Select Joining Availability"
                 allowClear
                  showSearch
                 optionFilterProp="children"
                 filterOption={(input, option) =>
                 (option?.label.toLowerCase()?? "").includes(input.toLowerCase())
                 }
                 filterSort={(optionA, optionB) =>
                 (optionA?.label ?? "")
                 .toLowerCase()
                 .localeCompare((optionB?.label ?? "").toLowerCase())
                 }
                
                >
                  <Option value="Immediately" label="Immediately">
                    <Space>Immediately</Space>
                  </Option>
                  <Option value="Less Then 15 Days" label="Less Then 15 Days">
                    <Space>Less Then 15 Days</Space>
                  </Option>
                  <Option value="Less Then 30 Days" label="Less Then 30 Days">
                    <Space>Less Then 30 Days</Space>
                  </Option>
                  <Option value="More Then 30 Days" label="More Then 30 Days">
                    <Space>More Then 30 Days</Space>
                  </Option>
                </Select>
              </FormItem>
     </div>
     <div className='col_2 g_20 col_1_sm g_5_sm m_t_1'>
     <FormItem label="Skills" name="skils"
        rules={[
          {
            required: true,
            message: "Please Select Skills!",
          },
        ]}>
                <Select
                 
                  placeholder="Select Skill"
                  showSearch
                  
                  mode="tags"
                  dropdownRender={(menu) => <>{menu}</>}
                  options={skillsdata}
                />
              </FormItem>
     </div>
     <div className='col_1 g_20 col_1_sm g_5_sm m_t_1'>
     <FormItem label="Job Description" name="job_description"
        rules={[
          {
            required: true,
            message: "Please Enter Job Description !",
          },
        ]}>
                <ReactQuill
                  theme="snow"
                  className="job_description"
                  name="job_description"
                  value={job_description}
                  onChange={handleChangedescription}
                />
     </FormItem>
     </div>

     <div className='d_f j_c_f_e g_10 '
          
          >
            <Button className='btn_cancel' onClick={handleopenDrawerJob}>
              Cancel
            </Button>
            <button
            className='btn btn-primary'
               type='primary'
              htmlType="submit"
              loading={addbuttonJob}
            >
              Save
            </button>
          </div>
     
       </Form>
    
      
        </>
    ) 
}


export default AddJob;

