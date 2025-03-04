import{ useEffect, useState,useMemo } from 'react';
import axios from 'axios';
import Context from './index';
import {notification} from 'antd'
import { BASE_URL} from '../../Utils/api';
import CookieUtil from '../../Utils/Cookies';

 axios.defaults.headers.common['Authorization'] = `Bearer ${CookieUtil.get('token')}`;
const JobProvider = (props) => {
    const [job, setJob] = useState([]);
    const [vendorjob, setvendorjob] = useState("");
    const [openJobs, setOpenJobs] = useState([]);
    const [vendor, setVendor] = useState([]);
    const [vendorbutton,setvendorbutton] = useState(false);
    const [closedJobs,setClosedJobs] = useState([]);
    const [filterData,setFilterdata] = useState({});
    const [openvendor, setopenvendor] = useState(false);
    const [Loading, setLoading] = useState(true);
    const [skill, setSkill] = useState([]);
    const [clients, setClients] = useState([]);
    const [clientFilter, setClientFilter] = useState([]);
    const [recruiter, setRecruter] = useState([]);
    const [endclient, setEndClient] = useState([]);
    const [poc, setPoc] = useState([]);
    const [location, setLocation] = useState([]);
    const [searchjob, setSearchjob] = useState("")
    const [openaddjob,setOpenaddjob]=useState(false);
    const [openFilter,setopenFilter]=useState(false);
    const [jobSingle,setjobSingle]=useState({});
    const [allCandidates,setAllcandidates]=useState([]);
    const [screening,setScreening]=useState([]);
    const [interview,setInterview]=useState([]);
    const [submission,setSubmission]=useState([]);
    const [offered,setOffered]=useState([]);
    const [joined,setJoined]=useState([]);
    const [filled,setFilled]=useState([]);
    const [logsubmission,setLogsubmission]=useState([]);
    const [loginterview,setLoginterview]=useState([]);
    const [logoffered,setLogoffered]=useState([]);
    const [logjoined,setLogjoined]=useState([]);
    const [searchcandidates,setSearchcandidate]=useState("");
    const [viewCandidateDrawer,setViewCandidateDrawer]=useState(false);
    const [addbuttonJob,setAddButton]=useState(false);
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total:10 });
    const memoizedResult = useMemo(() => {
        // Example: converting the searchjob to uppercase
        return searchjob.toUpperCase();
      }, [searchjob]); 
      console.log("hhhhusememo",memoizedResult)

    const token =CookieUtil.get("admin_token")

    const fetchJob = async (status) => {
       
    console.log("pagination",pagination)
        let api=`${BASE_URL}/job`
        
      
         let params={
             ...(status?.checkedList ? {status:status?.checkedList}:{status:["opened","closed","Hold"]}),
             ...(status?.client_id && {client_id:status?.client_id}),
             ...(status?.created_by && {created_by:status?.created_by}),
            page:status?.page? status.page:pagination.current,
            limit:status?.limit? status.limit :pagination.pageSize
         }
        try {

            // if(refresh){
            //     return (
            //         await axios.get(api,{params}).then((resp) => {
                      
            //         setJob([]);
            //     }),
            //     await axios.get(api,{params}).then((resp) => {
            //         setOpenJobs(resp.data.data.data);
            //         setPagination({...pagination,total:resp.data.data.total});
            //     }),
            //     await axios.get(api, {params:{status:"closed"}}).then((resp) => {
                    
            //         setClosedJobs(resp.data.data.data);
            //         setLoading(false) 
            //     }),
            //     // await axios.get(skillapi).then((resp) => {
            //     //     setSkill(resp.data.data);
                
            //     // }),
            //     // await axios.get(locationapi).then((resp) => {
            //     //     setLocation(resp.data.data);
                   
            //     // }),
            //     // await axios.get(clientsapi).then((resp) => {
            //     //     setClients(resp.data.data);
                    
                   
            //     // })
                
            //     )
            // }

            setLoading(true)
            // await axios.get(api).then((resp) => {
            //     setJob(resp.data.data);
            // }); 
            await axios.get(api,{params:{...params}},
                ).then((resp) => {
                setOpenJobs(resp.data.data.data);
                setPagination({...pagination,total:resp.data.data.total});
                setLoading(false)

            });
            // await axios.get(api, {params:{status:"closed"}}).then((resp) => {
                
            //     setClosedJobs(resp.data.data.data);
            //     setLoading(false) 
            // });
          
            

           
           
        } catch (error) {
            setLoading(false)
            console.log('error', error);
        }
    };

    const handleChangeSearch= async(e)=>{
        let api=`${BASE_URL}/job`

        let params={
            page:pagination.current,
            limit:pagination.pageSize,
            job_title:e.target.value,
            status:["opened","closed","Hold"]
         }
        setSearchjob(e.target.value)
        await axios.get(api,{params}).then((resp) => {
            setOpenJobs(resp.data.data.data);
            setPagination({...pagination,total:resp.data.data.total});
        })

    }
    const handleSearchCandiadte=(e)=>{
        setSearchcandidate(e.target.value)
        
    }

    const handleClickjobTable= async(id)=>{
       const jobsingleApi =`${BASE_URL}/job/${id}`
       const candidatesforjob=`${BASE_URL}/candidate`
       const candidatesforscreening=`${BASE_URL}/candidate/screening`
       const candidatesforsubmission=`${BASE_URL}/candidate/submission`
       const candidatesforinterview=`${BASE_URL}/candidate/interview`
       const candidatesforoffered=`${BASE_URL}/candidate/offered`
       const candidatesforjioned=`${BASE_URL}/candidate/joined`
       const candidatestotallogsubmission=`${BASE_URL}/candidate/logsubmission`
       const candidatestotalinterviewlog=`${BASE_URL}/candidate/loginterview`
       const candidatestotalofferedlog=`${BASE_URL}/candidate/logoffered`
       const candidatestotaljionedlog=`${BASE_URL}/candidate/logjoined`
       const candidatesforfilled=`${BASE_URL}/candidate/filled`
       const params = {
        job_id: id,
      };
       try {

        setLoading(true);
           await axios.get(jobsingleApi).then((resp) => {
            console.log("jobsinglee",resp)
            setjobSingle(resp.data.data);
        
         });
         await axios.get(candidatesforjob,{params}).then((resp) => {
            setAllcandidates(resp.data.data);
         });
         await axios.get(candidatesforjioned,{params}).then((resp) => {
            setJoined(resp.data.data);
         }); 
         await axios.get(candidatestotallogsubmission,{params}).then((resp) => {
            setLogsubmission(resp.data.data);
         });
         await axios.get(candidatestotalinterviewlog,{params}).then((resp) => {
            setLoginterview(resp.data.data);
         }); 
         await axios.get(candidatestotalofferedlog,{params}).then((resp) => {
            setLogoffered(resp.data.data);
         });
         await axios.get(candidatestotaljionedlog,{params}).then((resp) => {
            setLogjoined(resp.data.data);
            setLoading(false);
         });
         await axios.get(candidatesforscreening,{params}).then((resp) => {
            setScreening(resp.data.data);
         });
         await axios.get(candidatesforfilled,{params}).then((resp) => {
            setFilled(resp.data.data);
         });
         await axios.get(candidatesforsubmission,{params}).then((resp) => {
            setSubmission(resp.data.data);
         });
         await axios.get(candidatesforinterview,{params}).then((resp) => {
            setInterview(resp.data.data);
         });
         await axios.get(candidatesforoffered,{params}).then((resp) => {
            setOffered(resp.data.data);
         }); 

       }
       catch (error) {
         console.log("error: " + error)
       }

    }

    const addJob=(values,form)=>{
       
        const apiCreate=`${BASE_URL}/job`
        axios.post(apiCreate,values,{
            headers: {
              Authorization: `Bearer ${token}`,
              // Other headers if needed
            },})
             .then((response)=>{
                 if(response.status===201){
                    notification.success({
                        message: response?.data?.message,
                        duration:1,
                      });
                    setAddButton(false)
                    setOpenaddjob(!openaddjob)
                    fetchJob()
                    form.resetFields();


                 }
                 else{
                    setAddButton(false)
                    notification.error("Something Went Wrong!");
                    
                 }
                })  
             .catch((err)=>{
                console.log(err)
                setAddButton(false)
                notification.error("Something Went Wrong!");

             }
             )
    }

    const handleClientChange= async(e)=>{
        let params={
            client_id:e[e.length - 1]
        }
       
         try{

            let pocapi=`${BASE_URL}/clients/${e[e.length - 1]}`
            let endClientapi =`${BASE_URL}/endclients/`
            await axios.get(pocapi).then((resp) => {
                setPoc(resp.data.data);
            }); 
            await axios.get(endClientapi,{params}).then((resp) => {
                setEndClient(resp.data.data);
            }); 

         } 
         catch(err){
            console.log('error',err)
         }
    }

    const handleopenCandidateDrawer= async()=>{
          setViewCandidateDrawer(!viewCandidateDrawer)
    }

    const handlePageChange = (page, pageSize) => {
        setPagination({ ...pagination, current: page, pageSize });
      };


      const handleSerchcandidatedataFetch= async()=>{
        let skillapi=`${BASE_URL}/skills`
        let locationapi =`${BASE_URL}/location`
        await axios.get(skillapi).then((resp) => {
            setSkill(resp.data.data);
        
        });
        await axios.get(locationapi).then((resp) => {
            setLocation(resp.data.data);
           
        });
      }

      const handleopenfilter=()=>{
         setopenFilter(!openFilter)
      }

      const handleChangestatus= async(e,record)=>{
        let statusChangapi=`${BASE_URL}/job/status/${record.action}`
        try{
             await axios.put(statusChangapi, {status:e})
                        .then((res)=>{
                            notification.success({
                                message: res?.data?.message,
                                duration:1,
                              });
                              fetchJob()
                        })
        }
        catch (e) {
            console.log("e",e)
        }
      }

      const fetchClient= async()=>{
        let RescruterApi=`${BASE_URL}/owner-select`
        let clientrApi=`${BASE_URL}/clients/getselect`
        try{
             await axios.get(RescruterApi)
                        .then((res)=>{
                          setRecruter(res?.data?.data)
                             
                        })
                        await axios.get(clientrApi)
                        .then((res)=>{
                          setClientFilter(res?.data?.data)
                             
                        })
        }
        catch (e) {
            console.log("e",e)
        }
      }
      const fetchVendor= async()=>{
        let vendorApi=`${BASE_URL}/vendor`
        // let clientrApi=`${BASE_URL}/clients/getselect`
        try{
             await axios.get(vendorApi)
                        .then((res)=>{
                          setVendor(res?.data?.data)
                             
                        })
                       
        }
        catch (e) {
            console.log("e",e)
        }
      }
    // useEffect(() => {
    //     console.log("component rendered")
    //     fetchJob();
    // }, []);


    const  init = async()=>{
        let skillapi=`${BASE_URL}/skills`
        let locationapi =`${BASE_URL}/location`
        let clientsapi =`${BASE_URL}/clients/select`
    
         
        await axios.get(skillapi).then((resp) => {
            setSkill(resp.data.data);
        
        });
        await axios.get(locationapi).then((resp) => {
            setLocation(resp.data.data);
           
        });
        await axios.get(clientsapi).then((resp) => {
            setClients(resp.data.data);
            
           
        });
    }
 

    useEffect(() => {
        const token = CookieUtil.get('admin_token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, []);

      const handleClickVendor =()=>{
        setopenvendor(!openvendor);
      }

      const handleAssignVendor=(values,form)=>{
        setvendorbutton(true)
       
        const apiCreatevedor=`${BASE_URL}/assignvendor/${vendorjob}`
        axios.put(apiCreatevedor,values,{
            headers: {
              Authorization: `Bearer ${token}`,
              // Other headers if needed
            },})
             .then((response)=>{
           
                    notification.success({
                        message: response?.data?.message,
                        duration:1,
                      });
                    setvendorbutton(false)
        setopenvendor(!openvendor);
                    
                  
                    form.resetFields();


                 })
                
                 
             .catch((err)=>{
                console.log(err)
                setvendorbutton(false)
                  
                notification.error("Something Went Wrong!");

             }
             )
    }
    return (
        <Context.Provider
            value={{
                ...props,
                fetchJob,
                job,
                openJobs,
                closedJobs,
                searchjob,
                skill,
                poc,
                endclient,
                location,
                clients,
                jobSingle,
                logjoined,
                logoffered,
                loginterview,
                logsubmission,
                joined,
                submission,
                interview,
                offered,
                screening,
                allCandidates,
                searchcandidates,
                viewCandidateDrawer,
                handleopenCandidateDrawer,
                handleChangeSearch,
                handleClientChange,
                handleClickjobTable,
                handleSearchCandiadte,
                addJob,
                openaddjob,
                setOpenaddjob,
                setAddButton,
                addbuttonJob,
                filled,
                memoizedResult,
                pagination,
                handlePageChange,
                handleSerchcandidatedataFetch,
                openFilter,
                handleopenfilter,
                setopenFilter,
                handleChangestatus,
                recruiter,
                fetchClient,
                clientFilter,
                setFilterdata,
                filterData,
                Loading,
                setPagination,
                init,
                handleClickVendor,
                openvendor,
                fetchVendor,
                vendor,
                handleAssignVendor,
                vendorbutton,
                setvendorjob,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default JobProvider;