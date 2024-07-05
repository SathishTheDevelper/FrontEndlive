// import {useContext,useEffect} from 'react';




// import { Input, Tabs,Drawer } from 'antd';
// import EmployeMentDetails from './EmploymentDetails';
// import {MailFilled,MobileFilled,LeftOutlined} from "@ant-design/icons";

// import { useParams } from 'react-router-dom';
// import CandidateContext from '../../../Providers/Candidate';
// import Skills from './skill';
// import CandiateTimeLine from '../Timeline';
// import WorkExperience from './WorkExperience';
// import Education from './Educations';
// import Projects from './projects';
// import BasicDetailEdit from './EditCandidateinfo';
// import WorkExperienceEdit from './WorkExperienceEdit';
// import EducationEdit from './EducationEdit';
// import ProjectEdit from './EditProject';
// import Resume from './Resume';
// import EditResume from '../EditResume';
// import AssignEditCandidatesPopup from '../AssignEditCandidate';
// import AssignTable from '../AssignTable';

// // import CandidateTable from './candidateTable';
// // import CandidateContext from '../../Providers/Candidate';
// // import CandidateBasicInfo from './CandidateBasicInfo';
// // import AssignTable from './AssignTable';
// // import AssignEditCandidatesPopup from './AssignEditCandidate';
// // import AddCandidatesPopup from './AddCandidate';
// // import EditResume from './EditResume';
// import { useNavigate } from 'react-router-dom';


// const { Search } = Input;




// const CandidateViewPage=()=>{
// //  const {setopenresumeDrawer,resumeDrawer,searchCandidateOwner,AllcandidatesSearch,skillSearch,handleDateChange,candidateOwner,setLoading,Allcandidate,Allcandidates,candidateLoading,openDrawer,handleOpenDrawer,handleOpenDrawerassign,openAssign,assignEditCandidate,handleClickEditAssign,handleAllcandidateSearch,handleopenDrawerforAdd,openAddCandidateDrawer,handleSkillSearch} = useContext(CandidateContext);

//  const {openAssign,handleClickEditAssign,assignEditCandidate,handleOpenDrawerassign,setopenresumeDrawer,resumeDrawer,handleClickProject,openProjectDrawer,openEducationDrawer,handleClickEducation,openworkexperiencepopup,setworkexperiencePopup,handleViewCandidate,candidateSingle,openEmployeementDetilsDrawer,setOpenEmployementDetilsPopup}=useContext(CandidateContext)
// const params =useParams()

// //Tabs Items

// const navigate=useNavigate()

 


 


// //  const handleDateChange = (date, dateString) => {
// //   // dateString will contain the formatted date in "DD-MM-YYYY" format
// //   console.log('Selected Date:', dateString);
// // };

// //  Pie Chart Start here

// //  Pie Chart ends here

// const items=[   {
//     key: '1',
//     label: 'Employment Details',
//    children:<EmployeMentDetails />,
//   },
//   {
//     key: '2',
//     label: 'Professional Skills',
//  children:<Skills/>,
//   },
 
//   {
//     key: '4',
//     label: 'Work Experience',
//  children:<WorkExperience/>
//   },
//   {
//     key: '5',
//     label: 'Education',
//   children:<Education/>,
//   },
//   {
//     key: '6',
//     label: 'Projects',
//   children:<Projects/>,
//   },
//   {
//     key: '7',
//     label: 'Resume',
//   children:<Resume/>,
//   },
//   {
//     key: '3',
//     label: 'Time Line',
//     children: <CandiateTimeLine candidateSingle={candidateSingle}/>
// //   children:<CandidateTable handlePageChange={handlePageChange} pagination={pagination} setPagination={setPagination} filteredData={filteredData} setFilterData={setFilterData}/>,
//   },
// ]

// useEffect(() => {
//     // Function to load and display PDF file
//      handleViewCandidate(params.id)   
//   }, []); 

//   console.log("assign",assignEditCandidate);
//  return( 
//      <>

//      {/* Drawer Open For CandidateView */}
//      <Drawer
//     title="Assign Candidate To New Job"
//     placement="right"
//     onClose={(e)=>handleOpenDrawerassign()}
//     closable={openAssign}
//     size="large"
    
//     open={openAssign}
//     height={50}
//     width={650}
    
//   >
//      <AssignTable/>
//   </Drawer>
//      <Drawer
//     title="Edit Candidate"
//     placement="right"
//     onClose={(e)=>handleClickEditAssign()}
//     closable={assignEditCandidate}
//     size="large"
    
//     open={assignEditCandidate}
//     height={50}
//     width={650}
    
//   >
//      <AssignEditCandidatesPopup/>
//   </Drawer>
//      <Drawer
//     title="Edit Candidate"
//     placement="right"
//      onClose={()=>setOpenEmployementDetilsPopup(false)}
//     closable={openEmployeementDetilsDrawer}
//     size="large"
    
//     open={openEmployeementDetilsDrawer}
//     height={50}
//     width={650}
    
//   >
//      <BasicDetailEdit/>
//   </Drawer>

//   <Drawer
//     title="Edit Work Experience"
//     placement="right"
//      onClose={()=>setworkexperiencePopup(false)}
//     closable={openworkexperiencepopup}
//     size="large"
    
//     open={openworkexperiencepopup}
//     height={50}
//     width={750}
    
//   >
//      <WorkExperienceEdit/>
//   </Drawer>

//   <Drawer
//     title="Edit Education"
//     placement="right"
//      onClose={handleClickEducation}
//     closable={openEducationDrawer}
//     size="large"
    
//     open={openEducationDrawer}
//     height={50}
//     width={750}
    
//   >
//      <EducationEdit/>
//   </Drawer>
//   <Drawer
//     title="Edit Project"
//     placement="right"
//      onClose={handleClickProject}
//     closable={openProjectDrawer}
//     size="large"
    
//     open={openProjectDrawer}
//     height={50}
//     width={750}
    
//   >
//      <ProjectEdit/>
//   </Drawer>

//   <Drawer
//     // title="Candidate View"
//     placement="right"
//     onClose={()=>setopenresumeDrawer(false)}
//     closable={false}
//     size="small"
    
//     open={resumeDrawer}
//     height={50}
//      width={700}
    
//   >
//     <EditResume/> 
//   </Drawer>
     

//       {/* <p className='heading_text'>Candidates</p>

//       <div
//       className='d_f a_i_f_s f_d_c_xs m_b_5 m_t_5 g_5 f_d_c_sm f_w_w_md'>
   
//       </div>    */}

   
     

    
//     <div className='tab  m_b_10 p_10 responsive_table'>

//       <div className='p_10' style={{
//         backgroundColor: "rgb(221, 229, 233)"
//       }}>
//         <div className='d_f j_c_s_b a_i_c'>
//          <div className='d_f f_d_c f_w_w w_80_p '>
//          <p className='heading_text m_5' ><LeftOutlined className='back' onClick={()=>navigate(-1)}/>{candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.first_name} {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.last_name}</p>
//          <div className='d_f g_10 m_5'>
//                 <p><span><MailFilled className='c_primary' /> </span>{candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.email_id}</p>
//                 <p><span><MobileFilled className='c_primary'/></span>{candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.phone_no}</p>
//             </div>
//          </div>
//          <div className=''>
//          <button className='save_btn_1' type='primary'
//          onClick={(e)=>handleOpenDrawerassign()}
//         > + Assign To New Job</button>
//          </div>
       

//         </div>
     
          

       
//             <div>
//       <div id="pdf-container"></div>
//       <div id="docx-container"></div>
//     </div>
        
        
//       </div>
//     <Tabs items={items} defaultActiveKey="1" className='p_10'/> 

//     </div>
     


      
//         </>
//     )
// }


// export default CandidateViewPage;

import React, { Fragment, useContext, useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { Accordion, Dropdown, Nav, Tab } from 'react-bootstrap';


// import PDF from "../../../images/New/Pdffile.svg"
 import Image from "/images/user.jpg"




import { Drawer, Empty } from 'antd';

import AssignTable from '../AssignTable';
import AssignEditCandidatesPopup from '../AssignEditCandidate';
import Loader from './../../../Utils/Loader';
import { BASE } from '../../../Utils/api';
import CandidateContext from '../../../Providers/Candidate';





const CandidateViewPage = () => {
	const navigate =useNavigate()
     const [view,setView]=useState(false)
     const params =useParams()
    const {setOpenAssign,openAssign,handleClickEditAssign,assignEditCandidate,handleViewCandidate,Loading,candidateSingle,handleOpenDrawerassign}=useContext(CandidateContext)

	const docs = [
		{ uri:`${BASE}uploads/naukri_avinashlavale[3y_0m].pdf` } // Remote file
	, // Local File
	  ];
    const [parsedData, setParsedData] = useState(null);

    const parseResume = (resumeText) => {
        // Placeholder parsing logic using regular expressions
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        const phoneRegex = /(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
        const skillsRegex = /\b(?:javascript|react|node\.js|html|css|...)\b/gi; // Adjust as needed

        const email = resumeText.match(emailRegex);
        const phone = resumeText.match(phoneRegex);
        const skills = resumeText.match(skillsRegex);

        return { email: email ? email[0] : null, phone: phone ? phone[0] : null, skills: skills ? skills : [] };
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
            const resumeText = event.target.result;
            const parsed = parseResume(resumeText);
            setParsedData(parsed);
        };

        reader.readAsText(file);
    };


    function  PostComment(item){

        return(
            <ul className="post-comment d-flex mt-1">
                <li>
                    <label className="me-3"><Link to={"#"}><i class="fa-solid fa-briefcase me-2"></i> 
					{`${candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.to_exp_from || 0} Years ${candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.to_exp_to ||0} Months ` ||"-"}
                      </Link></label>
                </li>
                <li>
                    <label className="me-3"><Link to={"#"}><i class="fa-solid fa-wallet me-2"></i>
					{`${candidateSingle?.length>0 ? candidateSingle[candidateSingle.length-1]?.current_ctc:0} ${candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.job_id?candidateSingle[candidateSingle.length-1]?.job_id.salaryType:"LPA"}`||"-"}</Link></label>
                </li>
                <li>
                    <label className="me-3"><Link to={"#"}><i class="fa-solid fa-location-dot me-2"></i>
                    {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.current_location ||"-"}
    </Link></label>	
                </li>
			
            </ul>
        )
    }


	const resumename = (data) => {
		const match = data.match(/(\d+)([a-zA-Z0-9_[\] -]+\.[a-zA-Z0-9]+)/);
	  
		// Check if there is a match and extract the desired parts
		if (match) {
		  const numericPart = match[1]; // "17024865174681702377542774"
		  const alphanumericPart = match[2]; // "naukri_sowmyak[4y_11m].docx"
		  
		  console.log('Numeric Part:', numericPart);
		  console.log('Alphanumeric Part:', alphanumericPart);
			  // Return the alphanumeric part if needed
		  return alphanumericPart;
		} else {
		  console.log("No match found.");
		  const fileNameWithExtension = data.split('\\').pop();
	
		  // Remove the file extension
		  const fileNameWithoutExtension = fileNameWithExtension.split('.').slice(0, -1).join('.');
		
		  return fileNameWithoutExtension;
		
		}
	  };

    useEffect(() => {
        // Function to load and display PDF file
        handleViewCandidate(params.id)   
      }, []); 

	  const ondata =(data)=>{
    
		const inputDate = new Date(data);
	
	const formattedDate = inputDate.toLocaleString('en-US', {
	  year: 'numeric',
	  month: 'short',
	  day: 'numeric',
	  hour: 'numeric',
	  minute: '2-digit',
	  hour12: true,
	});
	
	 return formattedDate
	
		
	   }


	const TimelineColors =["primary","info","danger","success","warning","dark"]
	const TimelineColorText =["text-primary","info","danger","success","warning","dark"]
	
    return (
        <>           
           {
			 Loading ?
			  <Loader/>
			  :
			  <div className="container-fluid">  
			  <div className="d-flex justify-content-between align-items-center mb-4">
	  <h4 className="heading mb-0"><i class="fa-solid fa-chevron-left"
		onClick={()=>navigate(-1)}
	   style={
		  {
			  cursor:"pointer"
		  }
	   }></i > {`Candidates/Thamos`}</h4>
	  <div className="d-flex align-items-center">
		  {/* <Nav as="ul" className="nav nav-pills mix-chart-tab user-m-tabe" id="pills-tab">
			  <Nav.Item as="li" className="nav-item" role="presentation">
				  <Nav.Link as="button" className="nav-link" eventKey={'List'}>
					  {SVGICON.List}
				  </Nav.Link>
			  </Nav.Item>
			  <Nav.Item as="li" className="nav-item" >
				  <Nav.Link as="button" className="nav-link" eventKey={'Grid'}>
					  {SVGICON.GridDots}										
				  </Nav.Link>
			  </Nav.Item>
		  </Nav> */}
	   
	  </div>
  </div>             
				  <div className="row">
					  <div className="col-lg-12">
						  <div className="card">
							  
							  
								<div
								 className='d-flex justify-content-between align-items-center'>
								<div
								 className='d-flex gap-3 align-items-center m-5'>
									<div className="img-wrraper">                              
									  <div className="">
										  <img src={Image} className="rounded-circle m_t_1" width="120" />
									  </div>
									  <Link
									   style={{
										  left: "140px",
										  position: "absolute",
										  top: "174px"
									   }}
									   to={"/edit-profile"} className="icon-wrapper"><i className="fa-solid fa-pencil"></i></Link>
								  </div> 
								  
									<div>
									<h4 className="text-primary mb-0">{candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.first_name} {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.last_name}</h4>
									  {PostComment(candidateSingle)}
									  <ul className="canidate-location">
									  <li>
									  <span className="card__info__stats"> <i class="fa-solid fa-clock me-2"></i> Relevent Experience: </span>

									  {`${candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.re_exp_from||0} Years ${candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.re_exp_to||0} Months `||"-"}
									  <span className="card__info__stats"
									   style={{
										 marginLeft: "10px"
									   }}> <i class="fa-solid fa-indian-rupee-sign me-2"></i> Expected  Salary : </span>

									  {`${candidateSingle?.length>0 ? candidateSingle[candidateSingle.length-1]?.expected_ctc||0:0} ${candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.job_id?candidateSingle[candidateSingle.length-1]?.job_id.salaryType:"LPA"}`||"-"}
									  </li>
									  <li>
									  <span className="card__info__stats"><i class="fa-solid fa-clock-rotate-left me-2"></i> Notice Period: </span>

									  {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.notice_period ||"-"}
									  <span className="card__info__stats"
									   style={{
										 marginLeft: "10px"
									   }}> <i class="fa-solid fa-file me-2"></i> Offer Details : </span>
                                      {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.offer_details ||"-"}
 									  </li>
									

                               <li>
                                       <span className="card__info__stats"> <i class="fa-solid fa-location-dot me-2"></i>  Preferred Locations: </span>
                  {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.preferred_location?.map((item)=>
                  <span className="color_gray" style={{display:"inline-block"}} >{item},&nbsp;</span>)}
                                       
                                   </li>
                        
                                   <li>
									{
										view ?

								         <>
										 		<span className="card__info__stats"><i class="fa-solid  fa-envelope me-2"></i> </span>

{candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.email_id ||"-"}
<span className="card__info__stats"
 style={{
   marginLeft: "10px"
 }}><i class="fa-solid fa-phone me-2"></i>  </span>
{candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.phone_no ||"-"}
										 </>
										:
										<button onClick ={()=>setView(true)} className="btn btn-info btn-sm " style={{
											marginRight:"20px"
										 }} > <i class="fa-solid fa-eye "></i> Access Emaill & Phone Number</button>
										
									}
								 
								   </li>
                               </ul> 
									</div>
								</div>
								<button onClick={(e)=>handleOpenDrawerassign()} className="btn btn-secondary btn-sm " style={{
								   marginRight:"20px"
								}} > + Assign To New Job</button>
								   
								</div>
						  
								  
						  </div>
					  </div>
					  <div className="col-lg-12">
					  <div className="card">
							  <div className="card-body">
							  <div className="profile-tab">
								  <div className="custom-tab-1">
									  <Tab.Container defaultActiveKey='Posts'>					
										  <Nav as='ul' className="nav nav-tabs">
											  <Nav.Item as='li' className="nav-item">
												  <Nav.Link to="#my-posts" eventKey='Posts'>Employment Details</Nav.Link>
											  </Nav.Item>
											  <Nav.Item as='li' className="nav-item">
												  <Nav.Link to="#about-me"  eventKey='About'>Resume</Nav.Link>
											  </Nav.Item>
											  <Nav.Item as='li' className="nav-item">
												  <Nav.Link to="#profile-settings" eventKey='Setting'>Timeline</Nav.Link>
											  </Nav.Item>
										  </Nav>
										  <Tab.Content>
											  <Tab.Pane id="my-posts"  eventKey='Posts'>
											  <div className="profile-about-me mt-2">
													 
														 {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.summary &&
														   <div className="pt-4 border-bottom-1 pb-3">
														   <h4 className="text-primary">Profile Summary</h4>
														   <p>
														   {candidateSingle?.length>0 && candidateSingle[candidateSingle.length-1]?.summary} 
														   </p>
													   </div>
}

													 
												  </div>
											  <div className="profile-skills mb-5 mt_2">
  
													  <h4 className="text-primary mb-2">Skills</h4>
  {candidateSingle[candidateSingle.length-1]?.skills?.length>0 &&candidateSingle[candidateSingle.length-1]?.skills.filter((e)=>e).map((e,i)=> e &&
   													  <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 me-1">{e}</Link>
														 )}           

													  
													  
												  </div>
												  <div className="row">
		   
		   <div className='col-xl-12 '>
		   <h4 className="text-primary">Experience</h4>
  
		   <div
				//  style={{ height: "370px" }}
				 id="DZ_W_TimeLine1"
				 className="widget-timeline dz-scroll style-1   ps--active-y"
			   >
				    {candidateSingle[0]?.workExperiences?.length>0 ? 
			 <ul className="timeline">
			 {
                   candidateSingle[0]?.workExperiences?.map((work,i)=>{
				 return (
					<li>
					<div className={`timeline-badge ${TimelineColors[i]}`}></div>
					<Link
					  className="timeline-panel text-muted"
					  to="/widget-basic"
					>
					  <h6 className="mb-0">
					  {work.designation} 
						<strong className="text-info"> ({work.expType=="F" && "Full Time"})</strong>
					  </h6>
					  <span className="">{work.Organization||work.organization||""} ({work.startDate?.replace("'","")}-{work.endDate.replace("'","")}) </span> 
					  <span>{work?.profile||""}</span>

					  
					  
					  {/* <p className="mb-0">
						Quisque a consequat ante Sit amet magna at volutapt...
					  </p> */}
					</Link>
				  </li>
				 )
					

				 })
			 }
			{/* <li>
			  <div className="timeline-badge primary"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				 <h6 className="mb-0">
				  Youtube, a video-sharing website, goes live{" "}
				  <strong className="text-primary">$500</strong>.
				</h6>
				<span>10 minutes ago</span>
				<span>10 minutes ago</span>
			   
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge info"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>20 minutes ago</span>
				<h6 className="mb-0">
				  New order placed{" "}
				  <strong className="text-info">#XF-2356.</strong>
				</h6>
				<p className="mb-0">
				  Quisque a consequat ante Sit amet magna at volutapt...
				</p>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge danger"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>30 minutes ago</span>
				<h6 className="mb-0">
				  john just buy your product{" "}
				  <strong className="text-warning">Sell $250</strong>
				</h6>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge success"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>15 minutes ago</span>
				<h6 className="mb-0">
				  StumbleUpon is acquired by eBay.{" "}
				</h6>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge warning"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>20 minutes ago</span>
				<h6 className="mb-0">
				  Mashable, a news website and blog, goes live.
				</h6>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge dark"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>20 minutes ago</span>
				<h6 className="mb-0">
				  Mashable, a news website and blog, goes live.
				</h6>
			  </Link>
			</li> */}
		  </ul>
		:
		<Empty
        style={{
          margin: "29px auto"
        }}
       description={
        <span>
            No Data found ..........
        </span>
      } />}
				
			   </div>
		   </div>
		   {/* <div className='col-xl-12'>
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion className="accordion" id="accordionExample2">
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2" className="accordion-header" id="headingOne2">												  
								   Following												  
							   </Accordion.Header>
							   <Accordion.Body id="collapseOne2" className="accordion-collapse collapse show">													
								   {followers.map((item, index)=>(
									   <div className="products mb-3" key={index}>
										   <img src={item.image} className="avatar avatar-md" alt="" />
										   <div>
											   <h6><Link to={"#"}>{item.title}</Link></h6>
											   <span>{item.subtitle}</span>	
										   </div>	
									   </div>
								   ))}
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div>
		   <div className='col-xl-12'>
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion  id="accordionExample4">
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2" className="accordion-header" id="headingOne4">												  
								   Interest												  
							   </Accordion.Header>
							   <Accordion.Body id="collapseOne4" className="accordion-collapse collapse show" >
								   <div className="profile-interest">
									   <LightGallery
										   onInit={onInit}
										   speed={500}
										   plugins={[lgThumbnail, lgZoom]}
										   elementClassNames="row sp4"
									   >
										   
										   {galleryBlog.map((item,index)=>(
											   <div data-src={item.image} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1" key={index}>
												   <img src={item.image} style={{width:"100%"}} alt="gallery"/>
											   </div>
										   ))}
									   </LightGallery>	
								   </div>
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div>
		   <div className="col-xl-12">
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion >
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2" >												  
								   Our Latest News												  
							   </Accordion.Header>
							   <Accordion.Body >
								   <div className="accordion-body">
									   <div className="profile-news">
										   {mediaBlog.map((item, index)=>(
											   <div className="media pt-3 pb-3" key={index}>
												   <img src={item.image} alt="image" className="me-3 rounded" width="75" />
												   <div className="media-body">
													   <h6 className="m-b-5"><Link to="/post-details" className="text-black">Collection of textile samples</Link></h6>
													   <p className="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
												   </div>
											   </div>
										   ))}															
									   </div>
								   </div>
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div>
		   <div className="col-xl-12">
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion>
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2">												  
								   Friends												  
							   </Accordion.Header>
							   <Accordion.Body id="collapseOne6">													
								   <div className="friend-list">
									   {friends.map((item, ind)=>(
										   <img src={item.image} className="avatar avatar-md" alt=""  key={ind}/>
									   ))}															
								   </div>													
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div> */}
	   </div>
	   <div className="row mt-1">
		   
		   <div className='col-xl-12 '>
		   <h4 className="text-primary">Projects</h4>
  
		   <div
				
				 id="DZ_W_TimeLine1"
				 className="widget-timeline dz-scroll style-1   ps--active-y"
			   >
				    {candidateSingle[0]?.projects?.length>0 ? 
			 <ul className="timeline">
			 {
                   candidateSingle[0]?.projects?.map((project,i)=>{
					  if(project.designation){
						<li>
						<div className={`timeline-badge ${TimelineColors[i]}`}></div>
						<Link
						  className="timeline-panel text-muted"
						  to="/widget-basic"
						>
						  <h6 className="mb-0">
						  {`${project.client&&  `${project.client} -` }`||""} {project.project||""}
						  
							{/* <strong className="text-info"> ({project.expType=="F" && "Full Time"})</strong> */}
						  </h6>
						  <p>({project?.site} - {project?.employmentNature||""})</p>
						  <p>{project?.details||""}</p>
 
						
	
						  
						  
						  {/* <p className="mb-0">
							Quisque a consequat ante Sit amet magna at volutapt...
						  </p> */}
						</Link>
					  </li>
					 }
				 else{ 
					<li>
					<div className={`timeline-badge ${TimelineColors[i]}`}></div>
					<Link
					  className="timeline-panel text-muted"
					  to="/widget-basic"
					>
					  <h6 className="mb-0">
					  <p className="key_Skill"> {`${project.client&&  `${project.client} -` }`||""} {project.project||""}</p>
					  
						{/* <strong className="text-info"> ({work.expType=="F" && "Full Time"})</strong> */}
					  </h6>
					  <p>( {project?.employmentNature||""})</p>
					  <p>{project?.details||""}</p>

					

					  
					  
					  {/* <p className="mb-0">
						Quisque a consequat ante Sit amet magna at volutapt...
					  </p> */}
					</Link>
				  </li>
				 }
					

				 })
			 }
			{/* <li>
			  <div className="timeline-badge primary"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				 <h6 className="mb-0">
				  Youtube, a video-sharing website, goes live{" "}
				  <strong className="text-primary">$500</strong>.
				</h6>
				<span>10 minutes ago</span>
				<span>10 minutes ago</span>
			   
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge info"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>20 minutes ago</span>
				<h6 className="mb-0">
				  New order placed{" "}
				  <strong className="text-info">#XF-2356.</strong>
				</h6>
				<p className="mb-0">
				  Quisque a consequat ante Sit amet magna at volutapt...
				</p>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge danger"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>30 minutes ago</span>
				<h6 className="mb-0">
				  john just buy your product{" "}
				  <strong className="text-warning">Sell $250</strong>
				</h6>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge success"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>15 minutes ago</span>
				<h6 className="mb-0">
				  StumbleUpon is acquired by eBay.{" "}
				</h6>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge warning"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>20 minutes ago</span>
				<h6 className="mb-0">
				  Mashable, a news website and blog, goes live.
				</h6>
			  </Link>
			</li>
			<li>
			  <div className="timeline-badge dark"></div>
			  <Link
				className="timeline-panel text-muted"
				to="/widget-basic"
			  >
				<span>20 minutes ago</span>
				<h6 className="mb-0">
				  Mashable, a news website and blog, goes live.
				</h6>
			  </Link>
			</li> */}
		  </ul>
		:
		<Empty
        style={{
          margin: "29px auto"
        }}
       description={
        <span>
            No Data found ..........
        </span>
      } />
	  }
				
			   </div>
		   </div>
		   {/* <div className='col-xl-12'>
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion className="accordion" id="accordionExample2">
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2" className="accordion-header" id="headingOne2">												  
								   Following												  
							   </Accordion.Header>
							   <Accordion.Body id="collapseOne2" className="accordion-collapse collapse show">													
								   {followers.map((item, index)=>(
									   <div className="products mb-3" key={index}>
										   <img src={item.image} className="avatar avatar-md" alt="" />
										   <div>
											   <h6><Link to={"#"}>{item.title}</Link></h6>
											   <span>{item.subtitle}</span>	
										   </div>	
									   </div>
								   ))}
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div>
		   <div className='col-xl-12'>
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion  id="accordionExample4">
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2" className="accordion-header" id="headingOne4">												  
								   Interest												  
							   </Accordion.Header>
							   <Accordion.Body id="collapseOne4" className="accordion-collapse collapse show" >
								   <div className="profile-interest">
									   <LightGallery
										   onInit={onInit}
										   speed={500}
										   plugins={[lgThumbnail, lgZoom]}
										   elementClassNames="row sp4"
									   >
										   
										   {galleryBlog.map((item,index)=>(
											   <div data-src={item.image} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1" key={index}>
												   <img src={item.image} style={{width:"100%"}} alt="gallery"/>
											   </div>
										   ))}
									   </LightGallery>	
								   </div>
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div>
		   <div className="col-xl-12">
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion >
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2" >												  
								   Our Latest News												  
							   </Accordion.Header>
							   <Accordion.Body >
								   <div className="accordion-body">
									   <div className="profile-news">
										   {mediaBlog.map((item, index)=>(
											   <div className="media pt-3 pb-3" key={index}>
												   <img src={item.image} alt="image" className="me-3 rounded" width="75" />
												   <div className="media-body">
													   <h6 className="m-b-5"><Link to="/post-details" className="text-black">Collection of textile samples</Link></h6>
													   <p className="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
												   </div>
											   </div>
										   ))}															
									   </div>
								   </div>
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div>
		   <div className="col-xl-12">
			   <div className="card">
				   <div className="card-body profile-accordion pb-0">
					   <Accordion>
						   <Accordion.Item className="accordion-item">
							   <Accordion.Header as="h2">												  
								   Friends												  
							   </Accordion.Header>
							   <Accordion.Body id="collapseOne6">													
								   <div className="friend-list">
									   {friends.map((item, ind)=>(
										   <img src={item.image} className="avatar avatar-md" alt=""  key={ind}/>
									   ))}															
								   </div>													
							   </Accordion.Body>
						   </Accordion.Item>
					   </Accordion>
				   </div>
			   </div>
		   </div> */}
	   </div>
											  </Tab.Pane>
											  <Tab.Pane id="about-me" eventKey='About'>
												  {/* <div className="profile-about-me">
													  <div className="pt-4 border-bottom-1 pb-3">
														  <h4 className="text-primary">About Me</h4>
														  <p className="mb-2">
															  A wonderful serenity has taken possession of my
															  entire soul, like these sweet mornings of spring
															  which I enjoy with my whole heart. I am alone, and
															  feel the charm of existence was created for the
															  bliss of souls like mine.I am so happy, my dear
															  friend, so absorbed in the exquisite sense of mere
															  tranquil existence, that I neglect my talents.
														  </p>
														  <p>
															  A collection of textile samples lay spread out on
															  the table - Samsa was a travelling salesman - and
															  above it there hung a picture that he had recently
															  cut out of an illustrated magazine and housed in a
															  nice, gilded frame.
														  </p>
													  </div>
												  </div>
												  <div className="profile-skills mb-5">
													  <h4 className="text-primary mb-2">Skills</h4>
													  <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 me-1"> Admin</Link>
													  <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 me-1" > Dashboard</Link>
													  <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 me-1">Photoshop</Link>
													  <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 me-1">Bootstrap</Link>
													  <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 me-1">Responsive</Link>
													  <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 me-1">Crypto</Link>
												  </div>
												  <div className="profile-lang  mb-5">
													  <h4 className="text-primary mb-2">Language</h4>
													  <Link to="/app-profile" className="text-muted pe-3 f-s-16">
														  <i className="flag-icon flag-icon-us" />English
													  </Link>
													  <Link to="/app-profile" className="text-muted pe-3 f-s-16">
														  <i className="flag-icon flag-icon-fr" />French
													  </Link>
													  <Link to="/app-profile" className="text-muted pe-3 f-s-16">
														  <i className="flag-icon flag-icon-bd" />Bangla
													  </Link>
												  </div> */}
												  
												  <div>

												  <iframe src={`${BASE}uploads/suraj-kumar_mobile-developer.docx`} width="100%" height="500px" />
     
      </div>
	
												  {/* <div className="profile-personal-info">
													  <h4 className="text-primary mb-4">
														  Personal Information
													  </h4>
													  <div className="row mb-2">
														  <div className="col-3">
															  <h5 className="f-w-500"> Name<span className="pull-right">:</span></h5>
														  </div>
														  <div className="col-9">
															  <span>Mitchell C.Shay</span>
														  </div>
													  </div>
													  <div className="row mb-2">
														  <div className="col-3">
															  <h5 className="f-w-500">Email<span className="pull-right">:</span></h5>
														  </div>
														  <div className="col-9">
															  <span>example@examplel.com</span>
														  </div>
													  </div>
													  <div className="row mb-2">
														  <div className="col-3">
															  <h5 className="f-w-500">Availability<span className="pull-right">:</span></h5>
														  </div>
														  <div className="col-9">
															  <span>Full Time (Free Lancer)</span>
														  </div>
													  </div>
													  <div className="row mb-2">
														  <div className="col-3">
															  <h5 className="f-w-500">Age<span className="pull-right">:</span></h5>
														  </div>
														  <div className="col-9">
															  <span>27</span>
														  </div>
													  </div>
													  <div className="row mb-2">
														  <div className="col-3">
															  <h5 className="f-w-500">  Location<span className="pull-right">:</span></h5>
														  </div>
														  <div className="col-9">
															  <span>Rosemont Avenue Melbourne, Florida</span>
														  </div>
													  </div>
													  <div className="row mb-2">
														  <div className="col-3">
															  <h5 className="f-w-500">Year Experience<span className="pull-right">:</span></h5>
														  </div>
														  <div className="col-9">
															  <span>07 Year Experiences</span>
														  </div>
													  </div>
												  </div> */}
											  </Tab.Pane>
											  <Tab.Pane id="profile-settings" eventKey='Setting'>
											  <div className="row mt-5">
		   
		   <div className='col-xl-12 '>
		   {/* <h4 className="text-primary">Experience</h4> */}
  
		   <div
                  style={{ height: "370px" }}
                  id="DZ_W_TimeLine"
                  className="widget-timeline dz-scroll height370 ps--active-y"
                >
                  <ul className="timeline">
				  {
				 candidateSingle?.length>0 && candidateSingle?.map((item,i)=>(
                    <li>
					<div className={`timeline-badge ${TimelineColors[i]}`}></div>
					<div
					  className="timeline-panel text-muted"
					  to="/widget-basic"
					>
					  <span>{ondata(item?.createdAt)}</span>
					  {
						 item?.job_id ?
						 <h6 className="mb-1">
						 Assigned Job :
						<strong className={`text-primary me-2`}>
						{
                    item?.job_id ?
                    `${item?.job_id?.job_title}( ${item?.job_id?.job_id})`
                      :
                      "-"
                  }</strong>

					  </h6> :""
					  }
					
					  <h6 className="mb-1">
						 Created By :
						<strong className={`text-primary me-2`}>
						{item?.candidate_owner?.name}
				</strong>

					  </h6>
					  <h6 className="mb-1">
						  Status :
						<strong className={`text-primary me-2`}>
						{item?.status}
				</strong>

					  </h6>
					  {
						 item?.resume && 
						 <h6 className="mb-1">
						  Assigned Resume:
					    <div
						  className='d-flex flex-column p-1'>
                          
    {/* <img src={PDF} className="mt-1 mb-1" width={50} height={50} /> */}
    <a href={`${BASE}${item?.resume||""}`}>
     {resumename(item.resume)||""}</a>   
						</div>

					  </h6>
					  }
					  
		
					</div>
				  </li>

				  ))}

                    {/* <li>
                      <div className="timeline-badge primary"></div>
                      <Link
                        className="timeline-panel text-muted"
                        to="/widget-basic"
                      >
                        <span>10 minutes ago</span>
                        <h6 className="mb-0">
                          Youtube, a video-sharing website, goes live{" "}
                          <strong className="text-primary">$500</strong>.
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <div className="timeline-badge info"></div>
                      <Link
                        className="timeline-panel text-muted"
                        to="/widget-basic"
                      >
                        <span>20 minutes ago</span>
                        <h6 className="mb-0">
                          New order placed{" "}
                          <strong className="text-info">#XF-2356.</strong>
                        </h6>
                        <p className="mb-0">
                          Quisque a consequat ante Sit amet magna at volutapt...
                        </p>
                      </Link>
                    </li>
                    <li>
                      <div className="timeline-badge danger"></div>
                      <Link
                        className="timeline-panel text-muted"
                        to="/widget-basic"
                      >
                        <span>30 minutes ago</span>
                        <h6 className="mb-0">
                          john just buy your product{" "}
                          <strong className="text-warning">Sell $250</strong>
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <div className="timeline-badge success"></div>
                      <Link
                        className="timeline-panel text-muted"
                        to="/widget-basic"
                      >
                        <span>15 minutes ago</span>
                        <h6 className="mb-0">
                          StumbleUpon is acquired by eBay.{" "}
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <div className="timeline-badge warning"></div>
                      <Link
                        className="timeline-panel text-muted"
                        to="/widget-basic"
                      >
                        <span>20 minutes ago</span>
                        <h6 className="mb-0">
                          Mashable, a news website and blog, goes live.
                        </h6>
                      </Link>
                    </li>
                    <li>
                      <div className="timeline-badge dark"></div>
                      <Link
                        className="timeline-panel text-muted"
                        to="/widget-basic"
                      >
                        <span>20 minutes ago</span>
                        <h6 className="mb-0">
                          Mashable, a news website and blog, goes live.
                        </h6>
                      </Link>
                    </li> */}
                  </ul>
                </div>
		   </div>
		
	   </div>
											  </Tab.Pane>
										  </Tab.Content>	
									  </Tab.Container>		
								  </div>
							  </div>
							  </div>
						  </div>
					  </div>
				  </div>
					  
  
			  </div>

			  
		   }
		         <Drawer
    title={`Assign Candidate To New Job`}
    placement="right"
    onClose={()=>setOpenAssign(!openAssign)}
    closable={openAssign}
    size="large"
    
    open={openAssign}
    height={50}
    width={650}
    
  >
     <AssignTable/>
  </Drawer>
  <Drawer
    title="Edit Candidate"
    placement="right"
    onClose={(e)=>handleClickEditAssign()}
    closable={assignEditCandidate}
    size="large"
    
    open={assignEditCandidate}
    height={50}
    width={650} 
    
  >
     <AssignEditCandidatesPopup/>
  </Drawer> 
        </>
    );
};



// function  PostComment(){
// 	return(
// 		<ul className="post-comment d-flex mt-3 text-center">
// 			<li>
// 				<label className="me-3"><Link to={"#"}><i className="fa-regular fa-heart me-2"></i>Like</Link></label>
// 			</li>
// 			<li>
// 				<label className="me-3"><Link to={"#"}><i className="fa-regular fa-message me-2"></i>Comment</Link></label>
// 			</li>
// 			<li>
// 				<label className="me-3"><Link to={"#"}><i className="fa-solid fa-share me-2"></i>Share</Link></label>	
// 			</li>
// 		</ul>
// 	)
// }

export default CandidateViewPage;