import {Input,Form, TimePicker,DatePicker,Button, Select, Divider, AutoComplete} from 'antd'
import {useEffect,useContext, useState}from 'react'
import ViewJobContext from '../../Providers/ViewJob';


// import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
// import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';



 
 const AddInterViewPopup =()=> {
    // Redux state gettings
   
      let viewer;
    
  
      const documentLoad = () => {
          viewer.magnification.fitToPage();
      };
  
      const progressLoad = (args) => {
          // Customize progress bar if needed
      };  
  
      const ajaxRequestSuccess = (args) => {
          // Handle success of AJAX request if needed
      };
  
      function change(args) {
          if (args.checked) {
              viewer.serviceUrl = '';
          } else {
              viewer.serviceUrl = 'https://services.syncfusion.com/react/production/api/pdfviewer';
          }
          viewer.dataBind();
          viewer.load(viewer.documentPath, null);
      }
    const {addbuttonInterview,handleInterviewClose,CandidateView,handleAddInterview,handleStatusEdit} = useContext(ViewJobContext);
   

  

   const [status,setStaus]=useState("")

   const [form] =Form.useForm()
 
 

// candiadtes?.map((item)=>{
//     data.push({
//         value:item?._id,
//         label:`${item?.first_name}${item?.last_name}`
//     })
//  })

  const handleFinish=(values)=>{

    let sendData;

    if (status === "L1 schedule" || status === "L2 schedule" || status === "L3 schedule") {
        sendData = {
            ...values,
            candidate_id: CandidateView?._id,
            status:status,
            date: values["date"]?.$d,
            starttime: values["time"][0].$d,
            endtime: values["time"][1].$d
        };
    }
    if (status === "L1 select" || status === "L2 select" || status === "L3 select" || status =="L1 Reject" || status =="L2 Reject" || status =="L3 Reject") {
      sendData = {
          ...values,
          candidate_id: CandidateView?._id,
          status:status,
          
      };
  }
  

    {
      (status === "L1 schedule" || status === "L2 schedule" || status === "L3 schedule" || status === "L1 select" || status === "L2 select" || status === "L3 select" || status =="L1 Reject" || status =="L2 Reject" || status =="L3 Reject") ? (
        <>
          {handleAddInterview(sendData,form)}
          {handleStatusEdit(values, CandidateView?._id)}
        </>
      ) : 
        handleStatusEdit({
          ...values,
          ...values["client_billing"]&& {client_billing:Number(values["client_billing"]?.replace(/,/g, '')||"")}
        }, CandidateView?._id)

       
      
    }

    // api.create( dispatch,[start,success,failure,"crudadd"],'candidate/interview',sendData,(err,res)=>{
    //   if(err){
    //     setButtonLoading(false)
    //   }
    //     if(res?.data?.success){
    //       handleInterviewClose()
    //   setButtonLoading(false)

    //      notification.success({
    //        message: res?.data?.message,
    //        duration:1,
    //      })}})
       
  }
    useEffect(() => {
        form.setFieldsValue({
            //  candidate_id:`${CandidateView?.first_name}${CandidateView?.last_name}`,
             status:CandidateView?.status

        })
         setStaus(CandidateView?.status)
    }, [CandidateView])


     const handleStatuschange=(e)=>{
      setStaus(e)
     }

    const options=[
      "Screening Submitted",
      "Submitted",
    
     "Internal Duplicate",
    
     "Internal screen Reject",
    
     "Client submission",
    
     "Client Duplicate",
    
     "Client screen Reject",
    
     "L1 schedule",
    
     "L1 feedback pending",
    
     "L1 No show",
    
     "L1 select",
    
     "L1 Hold",
    
     "L1 Reject",
    
     "L2 schedule",
    
     "L2 feedback pending",
    
     "L2 No show",
       
    "L2 select",
    
     "L2 Hold",
    
    "L2 Reject",
    
     "L3 schedule",
    
    "L3 feedback pending",
     "L3 No show",
    
    "L3 select",
    
     "L3 Hold",
    
    "L3 Reject",
    
     "Offered",
    
     "Joined",
    
    " Position Hold"
      ]
    const value=[]
    options.map((item) => {
        value?.push({
          label:item,
          value:item
        })
    })

     
  return (
    <div className='m_t_5'>
      
        <p className='heading_text'>{`${CandidateView?.first_name}${CandidateView?.last_name}`}</p>

      
          <Form form={form} onFinish={handleFinish}
           layout='vertical'>
            {/* <div
              className='col_2 g_20'>
            <Form.Item label="Candidate"  name="candidate_id" className='col_1'>
                <Input disabled
                  style={{
                    width: '310px',
                   }}
                />
            </Form.Item>
            </div> */}
             <div className='col_2 g_20 m_t_10 green'>
             <Form.Item
              label="Status"
               name ="status">
             <Select
           onChange={(e) => handleStatuschange(e, CandidateView?.id)}
  // popupClassName="certain-category-search-dropdown"
  // popupMatchSelectWidth={500}
  style={{
    width: 280,
  }}
  value={status}
  options={value}
  size="large"
/>

                
             {/* <Select
                style={{
                  width: '310px',
                 }}
              placeholder="Select Status"
                        
                        onChange={(e) => handleStatuschange(e, CandidateView?.id)}
                        value={status}
                        // style={{ width: 200 ,display:'flex',alignItems: 'center'}}
                        options={value}
                       
                      /> */}
             </Form.Item>
            {
               status =="Client submission" &&
               
                CandidateView?.job_id?.job_type !=="Full Time" &&
                <Form.Item label="Client Billable" name="client_billing"
                rules={[{ required: true, message: "Client Billable is required" }]}
                getValueFromEvent={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, '');
                  return `${parseFloat(numericValue).toLocaleString('en-IN')}`;
                }}
                
                >
                        
                  <Input
                 
                    
                    placeholder={
                      CandidateView?.job_id?.salaryType=="Monthly"?"1,00,000":"1,000" 
                    }
                    addonBefore={<p className="m_10">{CandidateView?.job_id?.client_id[0]?.currency =="USD"? "$":"₹"}</p>}
                    
                      addonAfter={<p className="m_10">{CandidateView?.job_id?.salaryType} </p>
                    }
                  />
                
              
                 </Form.Item>
              }
               {/* <Form.Item
               label="ClientBillable"
                name ="client_billing">
                <Input
                   style={{
                    width: '310px',
                   }}/>
              </Form.Item> */}
            
             
             </div>

             <div className='col_2'>
             {
               (status =="L2 Reject" || status =="L3 Reject" || status =="L1 Reject" ||status =="L2 select"|| 
               status =="L3 select" || status =="L1 select" 
                ) &&
               <Form.Item
               label="Feedback"
                name ="feedback">
                <Input.TextArea
                   style={{
                    width: '310px',
                   }}/>
              </Form.Item>
            }
             </div>


             {
                (status === "L1 schedule" || status === "L2 schedule" || status === "L3 schedule") &&
                <>
                     <Divider>Add Interview Details</Divider>
                <div
                 className='col_2 g_20'>
                <Form.Item label="InterviewDate" name="date" className='col_1'>
            <DatePicker
             style={{
              width: '310px',
             }}
             />
            </Form.Item>
            <Form.Item label="InterviewTime" name="time"
             rules={[{ required: true, message: "InterviewTime is required" }]}
             className='' >
            <TimePicker.RangePicker
                style={{
                  width: '310px',
                 }}
            showTime={{ format: 'hh:mm', use12Hours:true }}
            changeOnBlur
            
             
            />
            </Form.Item> 
                </div>
                </>
             }

              
          
        
            <div style={{
                  margin: "10px",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "flex-end"
            }}>

            <button className="btn_cancel " onClick={handleInterviewClose} >Cancel</button>
            <button type='primary' className="btn btn-primary" htmlType="submit" loading={addbuttonInterview} >Save</button>

            </div> 
      
          </Form>

          
    </div>
  )
}
export default AddInterViewPopup;
