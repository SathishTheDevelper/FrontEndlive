import { useContext,useEffect} from 'react';

import Loader from '../../../Utils/Loader';

import { Button, Input,Table,Select } from 'antd';
import LeaveContext from '../../../Providers/Leaves';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';



const { Search } = Input;




const AdminLevePage=()=>{

  const {requestleaves,fetchrequestleaves,handleChangeStatus}=useContext(LeaveContext)
  const navigate=useNavigate()
//  const { memoizedResult,searchjob,job,Loading,handleChangeSearch,openaddjob,setOpenaddjob} = useContext(JobContext);


//Tabs Items



  const handleopenDrawerJob=()=>{
    // setOpenaddjob(!openaddjob);

  }

//  Pie Chart Start here

//  Pie Chart ends here

const columns = [
  { title: 'Employee Name', dataIndex: 'employee_id', key: 'employee_id' },
  { title: 'Leave Category', dataIndex: 'leave_id', key: 'leave_id' },
  { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
  { title: 'End Date', dataIndex: 'endDate', key: 'endDate' },
  { title: 'No. of Days', dataIndex: 'numberOfDays', key: 'numberOfDays' },
  { title: 'Reason', dataIndex: 'reason', key: 'reason' },
  { title: 'Status', dataIndex: 'status', key: 'status' ,
  render: (text, record) => (
    
             <span className="badge badge-secondary light border-0 ms-1">{record?.status}</span>
         
  
  ), },
  { title: 'Approved by', dataIndex: 'approvedBy', key: 'approvedBy' },
];

const data=[]
requestleaves?.map((item,i)=>{
  data.push({
    key:i+1,
    employee_id:item?.employee_id?.name||"-",
    leave_id:item?.leave_id?.leave_title,
    startDate:moment(item?.startDate).format(' DD-MM-YYYY'),
    endDate:moment(item?.endDate).format(' DD-MM-YYYY'),
    numberOfDays:item.no_of_days,
    reason:item?.reason,
    approvedBy:item.approved_by? item?.approved_by?.name:"-",
    status:item.status,   
    action:item._id,

  })
})
 
  useEffect(() => {
    fetchrequestleaves()
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

      <div
      className='d_f a_i_c f_d_c_xs m_b_5 m_t_5 g_20 f_d_c_sm'>
      <p className='heading_text'>Leaves</p>
        
       <div className='d_f a_i_c'>
       <button type='primary' className='btn btn-primary' onClick={()=>navigate("/leave-management")}>Leave Management</button>
       </div>
      </div>      
      

    
    <div className='tab m_t_10 m_b_10 p_10 responsive_table'>
      <Table
       columns={columns} dataSource={data}/>
    </div>
     


      
        </>
    )
}


export default AdminLevePage;