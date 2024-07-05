import  { useState } from 'react'
import {  Button,  DatePicker,  Form, Input,  Radio,  Select,  message } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { useEffect } from 'react';
import { useContext } from 'react';
import InvoiceExpenceContext from '../../../Providers/InvoiceExpence';

const RecordPaymentAdd = ({handleFinish,handleDrawerClose,setAttachment,setFileError}) => {
    const [form] = Form.useForm();
    const [radio,setRadio]=useState("Salary")
     const {invoiceSingle}=useContext(InvoiceExpenceContext)
    const {RecordPaymentAddemployee,addexpensebutton}=useContext(InvoiceExpenceContext)

    const props = {
        name: "file",
        multiple: false,
        action: "https://apiv1.technoladders.com/test",
        beforeUpload: (file) => {
          // Define the allowed file types (e.g., PDF, PNG, JPG)
          const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      
          // Check if the uploaded file's type is in the allowedTypes array
          if (!allowedTypes.includes(file.type)) {
              message.error("Invalid file type. Please upload a PDF, JPG, PNG, DOC, or DOCX.")
            return (
              setFileError(true),
              false
            ) // Prevent the file from being uploaded
          }
      
          return (
              setFileError(false),
              true
            ) ; // Allow the file to be uploaded
        },
        onChange(info) {
          const { status } = info.file;
          if (info.fileList.length > 1) {
            info.fileList.shift();
          }
          if (status !== "uploading") {
          
              // setData({ ...data, resume: info.file.originFileObj });
              setAttachment (info.file.originFileObj)
          }
          if (status === "done") {
            message.success(`${info.file.name} file upload successfully.`);
    
            setAttachment (info.file.originFileObj);
          } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log("Dropped files", e.dataTransfer.files);
        },
      };

      useEffect(() => {
         form.setFieldsValue({
          client_id:invoiceSingle?.client_id?.name,
          amount_billed:invoiceSingle?.total_amount,
          

         })
        //   fetchRecordPaymentAddinit()
      }, [])

       const handlChangeRadio =(e)=>{
          setRadio(e.target.value)
       }
      
  return (
    <Form form={form} onFinish={(values)=>handleFinish(values,form)}
    layout='vertical'>
     <div className='col_2 g_20 col_1_sm g_5_sm m_t_20'>
     <Form.Item
           
       name="client_id"
       label="Customer Name"
     
     >
       <Input/>
     </Form.Item>
     <Form.Item
       name="payment_received"
       label="Payments Received"
     
     >
       <Input/>
     </Form.Item>
  
     </div>
     <div className='col_2  g_20 col_1_sm g_5_sm expence_picker'>
    <Form.Item
       name="amount_billed"
       label="Amount Billed ($)"
       rules={[{ required: true, message: 'Please enter Amount Billed ' }]}
     >
       <Input  placeholder='3,36,000.00' />
     </Form.Item>
   
     </div>
     <div className='col_2 m_t_1 g_20 col_1_sm g_5_sm'>
        <div>Amount Received (₹)</div>
        <Form.Item
         label=""
         name ="amount_received">
        <Input
          placeholder='0.00'/>
        </Form.Item>

    

     
     </div>
     <div className='col_2 m_t_1 g_20 col_1_sm g_5_sm'>
        <div>Bank Charges (If any) (₹)</div>
        <Form.Item
         name ="bank_charges">
             <Input
          placeholder='0.00'/>
        </Form.Item>

    

     
     </div>
     {/* <div className='col_2 m_t_1 g_20 col_1_sm g_5_sm'>
        <div>Tax Deducted</div>
        <Form.Item
       name="expense_type"
       label="Expense Type"
       rules={[{ required: true, message: 'Please select Expense Type' }]}
     >
       <Radio.Group
        onChange ={handlChangeRadio}>
         <Radio value="Salary">Salary</Radio>
         <Radio value="Others">Others</Radio>
       </Radio.Group>
     </Form.Item>

    

     
     </div> */}
     <div className='col_2  g_20 col_1_sm g_5_sm expence_picker'>
    <Form.Item
       name="exchange_rate"
       label="Exchange Rate"
       rules={[{ required: true, message: 'Please enter Exchange Rate ' }]}
     >
       <Input  placeholder='0.00' />
     </Form.Item>
   
     </div>
     <div className='col_2 m_t_1 g_20 col_1_sm g_5_sm'>
        <div>Invoice Amount Receivable in INR (₹)</div>
        <Form.Item
         label=""
         name ="paid_amount">
        <Input
          placeholder='0.00'/>
        </Form.Item>

    

     
     </div>
     <div className='col_2 g_20 col_1_sm g_5_sm m_t_20'>
     <Form.Item
           
       name="payment_date"
       label="Payment Date"
     
     >
        <DatePicker  style={{
           width:"220px"
        }}/> 
     </Form.Item>
     <Form.Item
       name="payment_mode"
       label="Payment Mode "
     
     >
       <Select
        options ={[
          {
           lable:"Online",
           value:"Online"
        },
        {
          lable:"Offline",
          value:"Offline"
       },

        ]}/>
     </Form.Item>
  
     </div>
     <div className='col_2 g_20 col_1_sm g_5_sm '>
     <Form.Item
       name="deposite_to"
       label="Deposite To "
     
     >
       <Select
      />
     </Form.Item>
     </div>

     <Form.Item
       name="reference"
       label="Reference"
     
     >
        <Input.TextArea>
        </Input.TextArea>
     </Form.Item>

     <Form.Item
       name="notes"
       label="Notes"
     
     >
        <Input.TextArea>
        </Input.TextArea>
     </Form.Item>
      
     {/* <div className='col_2  g_20 col_1_sm g_5_sm expence_picker'>
    <Form.Item
       name="paid_amount"
       label="Invoice Amount Receivable
       in INR (₹)"
       rules={[{ required: true, message: 'Please enter Paid Amount ' }]}
     >
       <Input  placeholder='0.00' />
     </Form.Item>
   
     </div> */}
   
     


    
     <div
   style={{
     margin: "10px",
     display: "flex",
     gap: "10px",
     justifyContent: "flex-end",
   }}
 >
   <Button className="btn_cancel" onClick={handleDrawerClose}>Cancel</Button>
   <button type="primary" className="btn btn-primary" htmlType="submit" loading={addexpensebutton}>
      Save
   </button> 
 </div>
   </Form>
  )
}

export default RecordPaymentAdd