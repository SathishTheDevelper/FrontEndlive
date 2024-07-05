import { Button, Drawer, Dropdown, Menu } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useContext, useEffect, useState } from 'react'
import { MoreOutlined} from '@ant-design/icons';
import Avatar from "/images/AvatarImg.png";
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import EmployeeContext from '../../Providers/EmployeeProvider';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CookieUtil from '../../Utils/Cookies';
import { BASE } from '../../Utils/api';


const InfoPage = () => {

    const {fetchsingle, fetchEmployFull, personalEmp, FetchEmployeeTable, employeeLogindata,employeeCompleteFetch, fetchEmploy} = useContext(EmployeeContext);

    console.log("employeeLogindata---->",employeeLogindata)

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const showDrawer1 = () => {
    setOpen1(true);
  };
  const onClose1 = () => {
    setOpen1(false);
  };

  const handelEdit = (id) => {
    console.log("ido--",id)
    showDrawer1()
    fetchsingle(id)
  };

    const openEmployeeInfo=(id)=>{
        console.log("id-------",id)
        // handleClickjobTable(id)
        employeeCompleteFetch(id)
        navigate(`/employeeTabs/${id}`)
      }


  useEffect(() => { 
    FetchEmployeeTable()
  },[])

    // let params = useParams();

    //   useEffect(() => {

    //     let role = CookieUtil.get("role")

    //     let id = CookieUtil.get("admin_id")

    //     if(role=="Employee"){
    //       fetchEmploy(id);
    //     }
    //     else{
    //       fetchEmploy(params?.id);
    //     }
    // },[]);

  return (
    <div>
        <Drawer
        title="Add Employee"
        placement="right"
        closable={false}
        size='large'
        onClose={onClose}
        open={open}
        
        height={50}
        width={700}
      >
        <AddEmployee onClose={onClose} />
      </Drawer>
      <Drawer
        title="Edit Employee"
        placement="right"
        closable={false}
        size='large'
        onClose={onClose1}
        open={open1}
        
        height={50}
        width={700}
      >
        <EditEmployee onClose={onClose1} />
      </Drawer>

        <label className='c_primary profileInfo_heading'>Employee</label>
        <div className='d_f g_20'>
            <div
                className='d_f a_i_f_s f_d_c_xs m_b_5 m_t_5 g_5 f_d_c_sm p_t_5'>
                <Search className="input_search" allowClear placeholder="Search by Job Title / ID" enterButton />
            </div>
            <div className='d_f a_i_c'>
                <button type='primary' className='btn btn-primary' onClick={showDrawer} >+ Add Employee</button>
            </div>
      </div>
      {/* <div className='col_4 g_30 p_t_10'>
        {
            employeeLogindata?.map((item,i) => {
                return<>
                <div className='profile-card'>
                  {
                    item?.display_profile_file ? (
                      <img src={`${BASE}${item?.display_profile_file}`} className='profileInfo-displayPic' onClick={(e)=> openEmployeeInfo(item?._id)} />
                    ) : (
                    <img src={Avatar} alt="Avatar" className='profileInfo-img' onClick={(e)=> openEmployeeInfo(item?._id)} style={{cursor:"pointer"}} />
             ) }
                <div className='p_t_10'>  
                    <label className='profileInfo-employeeName' onClick={(e)=> openEmployeeInfo(item?._id)} style={{cursor:"pointer"}}>{`${item?.firstname} ${item?.lastname} `}</label>
                    <p className='profileInfo-designation-grey'>{item?.designation}</p>
                    <div className='p_t_5'>
                        <div className={`${item?.user_status =="onBoarding"?"onboarding-going":item?.user_status =="releived"?"releived-going":"terminated"}` }>
                        <p> {item?.user_status} </p>
                    </div>
                    </div>
                </div>
                <div className='profileInfo-moreIcon'>
                    <Dropdown overlay={<Menu>
                      <Menu.Item key="1" onClick={(e) => handelEdit(item?._id)}>Edit</Menu.Item>
                      <Menu.Item key="2">Delete</Menu.Item>
                      </Menu>} placement="bottomRight">
                    <MoreOutlined />
                    </Dropdown>
                </div>
                </div>
                </>
            })
        }
      </div> */}
        <div className="row">
          {employeeLogindata?.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="card-use-box">
                    <div className="crd-bx-img">
                    {
                    item?.display_profile_file ? (
                      <img src={`${BASE}${item?.display_profile_file}`} className='rounded-circle' />
                    ) : (
                    <img src={Avatar} alt="Avatar" className='profileInfo-img profile-img' />
             ) }
                    <div className={`active ${item?.id === "deactive" ? 'deactive' : ''}`}></div>
                  </div>
                  <div className="card__text p_t_10">
                  <label className='profileInfo-employeeName' onClick={(e)=> openEmployeeInfo(item?._id)} style={{cursor:"pointer"}}>{`${item?.firstname} ${item?.lastname} `}</label>
                    <p className='info-email'>{item?.email}</p>
                  </div>
                  <ul className="post-pos">
                   <li>
                      <span className="info-position-text">Position: </span>
                      <span>{item?.designation}</span>
                    </li>
                    <li>
                      <span className="info-position-text">User Role: </span>
                      <span>{item?.user_role}</span>
                    </li>
                  </ul>
                 <div>
                    <button type='primary' to="#" className="btn btn-primary me-2" onClick={(e)=> openEmployeeInfo(item?._id)}>View Profile</button>
                    <button type='primary' to="#" className="btn btn-secondary me-2" onClick={(e) => handelEdit(item?._id)}>Edit Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
     </div>
    </div>
  )
}

export default InfoPage
