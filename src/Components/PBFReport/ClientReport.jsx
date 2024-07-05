import React, { useContext, useEffect } from 'react';
import { Modal, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import PBFContext from '../../Providers/PBFReports';
import {LeftOutlined } from '@ant-design/icons';
import Loader from '../../Utils/Loader';
import GraphDashboard from './../Dashboard/GraphDashboard';
import ClientBarChart from './../Dashboard/ClientBarChart';
import { Tab } from 'react-bootstrap';
import CookieUtil from '../../Utils/Cookies';
import ClientwiseReport from '../UtlilsComponent/ClientWiseChart';
import SelectCustom from './SelectCustom';
import { useState } from 'react';


const ClientReport = () => {
   const {fetchClients,clients,clientLoading,customPopup,openCustompopup}=useContext(PBFContext)
   console.log("clients",clients)
   const [filter,setFilter]=useState("Week")


    const navigate=useNavigate()
    const role = CookieUtil.get("role")
 let logindata = JSON.parse(CookieUtil.get('admin'));

 const data=[]
 const chartlabel=[]
 const chart1=[]
 const chart2=[]
 const chart3=[]
 const chart4=[]
 const chart5=[]
 const chart6=[]
 clients?.map((item,i)=>{
   if(i<5){
    chartlabel.push(item?.name)
   chart1.push(item.jobCount)
   chart2.push(item.clientSubmission)
   chart3.push(item.clientScreenReject)
   chart4.push(item.Interview)
   chart5.push(item.Offered)
   chart6.push(item.joined)
   }
   if(role == "Client"){
     if(item._id ==logindata?.client_id){
      data.push({
        action:item?._id,
        ...item,
    })
     }
   }
   else{
    data.push({
      action:item?._id,
      ...item,
  })
   }
  
 })
  const columns = [
    {
      title: 'Client Name',
      dataIndex: 'name',
      key: 'name',
      render:(text,record)=>(
        <a  className="hover_add" onClick={(e)=>navigate(`/client-report/${record?.action}`)}>{text}</a>

      )
    },
    {
      title: 'Total Positions',
      dataIndex: 'jobCount',
      key: 'jobCount',
    },
    {
      title: 'Client Submission',
      dataIndex: 'clientSubmission',
      key: 'clientSubmission',
    },
    {
      title: 'Interviewed',
      dataIndex: 'Interview',
      key: 'Interview',
    },
    {
      title: 'Joined',
      dataIndex: 'joined',
      key: 'joined',
    },
    {
      title: 'Offered',
      dataIndex: 'Offered',
      key: 'Offered',
    },
  ];

  useEffect(() => {
    if(filter =="Custom"){
       return openCustompopup()
    }
    else{
    fetchClients()

    }
  }, [filter])


  
  const option=[
    {
       label:"This Week",
       value:"Week"
   },
   {
    label:" This Month",
    value:"Month"
 },
 {
    label:"This Year",
    value:"Year"
 }
 ]
  

  return(
    <>
     {
      clientLoading && <Loader/>
     }
    {/* <div
    className='d_f a_i_c f_d_c_xs m_b_5 m_t_5 g_20 f_d_c_sm'>
         <p className='heading_text'><LeftOutlined className='back' onClick={()=>navigate(-1)}/>Clients</p>
     
   
    </div>       */}
    
   
    
    <div className='container-fluid'>
    <div className="row">
                    <Tab.Container defaultActiveKey={'Grid'} >
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="heading_text mb-0">
                            <LeftOutlined className='back' onClick={()=>navigate(-1)}/>Clients</h4>
                            <div className="d-flex align-items-center">
                               
                            </div>
                        </div>
                     
                    
                    </Tab.Container>
                </div> 
   <div className='card'>
     {
       role !== "Client" && <ClientwiseReport  setFilter={setFilter} filter={filter} chartlabel={chartlabel} chart1={chart1} chart2 ={chart2} chart3={chart3} chart4={chart4} chart5={chart5}/> 
     }
       <Table dataSource={data} columns={columns} />

    </div>   
    </div>


    <Modal
title=""
placement="right"
visible={customPopup}
onCancel={openCustompopup}
okButtonProps={{ style: { display: 'none' } }}
cancelButtonProps={{ style: { display: 'none' } }}


// open={viewInterviewDrawer}
height={50}
width={500}

>
	 <SelectCustom/>
	 {/* <AddList/> */}
{/* <AddInterViewPopup status={status}/> */}
</Modal>
    
     </>
  )
  
 
  
  
  
};

export default ClientReport;
