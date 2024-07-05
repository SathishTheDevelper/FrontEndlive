import { useContext,useEffect} from 'react';



import { Button, Input,Table,Select, Image } from 'antd';

import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Loader from '../../Utils/Loader';

import CompanyContext from '../../Providers/Company';
import { BASE, BASE_URL } from '../../Utils/api';
// import { useEffect } from 'react'


const { Search } = Input;




const Company=()=>{

  const {fetchCompany,Loading,company,}=useContext(CompanyContext)
  const navigate=useNavigate()
//  const { memoizedResult,searchjob,job,Loading,handleChangeSearch,openaddjob,setOpenaddjob} = useContext(JobContext);

 const handlenavigate=(id)=>{
    navigate(`/company/${id}`)
 }
//Tabs Items



  const handleopenDrawerJob=()=>{
    // setOpenaddjob(!openaddjob);

  }

//  Pie Chart Start here

//  Pie Chart ends here

const columns = [
  { title: 'Logo', dataIndex: 'logo', key: 'logo',
  render:(image)=>

      <Image
      style={{
        height: "35px",
      }}
      alt={image}
      src={`${BASE}${image}`} />
    
    
    },

  { title: 'Company Name', dataIndex: 'company_name', key: 'company_name',
  render:(text,record)=>(
    <a  className="hover_add" onClick={(e)=>handlenavigate(record?.action)}>{text}</a>

  )
  },
  { title: 'Intustry Type', dataIndex: 'industry', key: 'industry' },
  { title: 'Company Register', dataIndex: 'startDate', key: 'startDate' },

//   { title: 'Status', dataIndex: 'status', key: 'status' ,
//   render: (text, record) => (
//     <div className="green">
//       <Select
//         defaultValue={record?.status}
//         onChange={(e) => handleChangeStatus(e,record)}
//         className={` ${record.status == "Pending" ? "status_hold" :'status_selectbox'}`}
//         options={[
//           {
//             label: "Pending",
//             value: "Pending",
//           },
//           {
//             label: "Approved",
//             value: "Approved",
//           },
//         ]}
//       />
//     </div>
//   ), },
  { title: 'Approved by', dataIndex: 'approvedBy', key: 'approvedBy' },
];

const data=[]
company?.map((item,i)=>{
  data.push({
    key:i+1,
    company_name:item?.organization||"-",
    industry:item?.industry|| "-",
    logo:item?.logo,
    startDate:moment(item?.created_At).format(' DD-MM-YYYY'),
    // endDate:moment(item?.endDate).format(' DD-MM-YYYY'),
    numberOfDays:item.no_of_days,
    reason:item?.reason,
    approvedBy:item.approved_by? item?.approved_by?.name:"-",
    status:item.status,   
    action:item._id,

  })
})

 useEffect(() => {
    fetchCompany()
   
 }, [])
 
 
  
  
 return( 
     <>

     {/* Drawer Open For Add Job */}
     {/* <Drawer
    title="Create New Job"
    placement="right"
    onClose={handleopenDrawerJob}
    closable={openaddjob}
    size="large"
    
    open={openaddjob}
    height={50}
    width={650}
    
  >
    <AddJob/>
  </Drawer> */}
    
     
     {/* {
        Loading && <Loader />
     } */}
  {
    Loading ?
    <Loader/> :
    <div
    className='d_f a_i_c f_d_c_xs m_b_5 m_t_5 g_20 f_d_c_sm'>
    <p className='heading_text'>Companies</p>
      
     {/* <div className='d_f a_i_c'>
     <Button type='primary' className='btn create_btn' onClick={()=>navigate("/leave-management")}>Leave Management</Button>
     </div> */}
    </div>  

  }

         
      

    
    <div className='tab m_t_10 m_b_10 p_10 responsive_table'>
      <Table
       columns={columns} dataSource={data}/>
    </div>
     


      
        </>
    )
}


export default Company;