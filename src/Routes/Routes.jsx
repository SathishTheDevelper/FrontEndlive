import { lazy } from "react";
import AddRole from "../Components/UserManageMent/AddRole";
import AddInvoice from "../Components/InvoiceExpence/Invoice/AddInvoice";
import Company from "../Components/CompanyRegister/company";
import CompanyUsers from "../Components/CompanyRegister/CompanyUsers";
import AddGoal from "../Components/GoalAdmin/AddGoal";
import Goal from "../Components/GoalAdmin/Goal";
import Interviewview from "../Components/Dashboard/interviewview";
import AddDepartment from "../Components/UserManageMent/Adddepartment";
import Account from "../Components/Accounts/Account";
import Contacts from "../Components/Accounts/Contacts";
import JobDetailNew from "../Components/JobDashboard/JobDetailNew";
import RecentActivity from "../Components/PBFReport/RecentActivity";
import AccountContactPage from "../Components/Accounts/AccountContactpage";
import AccountViewpage from "../Components/Accounts/Accountviewpage";
import ListContacts from "../Components/Accounts/ListContacts";
import Workspace from "../Components/Accounts/Workspace";
import Attenence from "../Components/PBFReport/Attenence";
import SpaceList from "../Components/Accounts/SpaceList";
import Board from "../Components/Accounts/Board";
const  GoalAdmin  = lazy(()=>import( "../Components/GoalAdmin")) 
const  Projects  =lazy(()=>import( "../Components/Clients/Project"));
const  AssignEmployess =lazy(()=>import( "../Components/Clients/AssignEmployess"));
const  ViewJob  =lazy(()=>import( "../Components/JobDashboard/ViewJob"));
const JobDashboard = lazy(() => import("../Components/JobDashboard"));
//  const ViewJob = lazy(() => import("../Components/JobDashboard/ViewJob"));
//  const Clients = lazy(() => import("../Components/Clients"));
const  Clients= lazy(()=> import( "../Components/Clients"));
const  AllCandidatesNew  =lazy(()=>import( "../Components/AddCandidateNew"));
const  EmployeeDashboard  =lazy(()=>import( "../Components/TimeSheetEmployee"))
const  EmployeeLevePage  =lazy(()=>import( "../Components/Leaves/EmployeeLeavePage"));
const  UserManageMent  =lazy(()=>import( "../Components/UserManageMent"));
const  CandidateViewPage  =lazy(()=>import( "../Components/Candidate/CandidateViewPage"));
const  LeaveMangement  =lazy(()=>import( "../Components/Leaves/AdminLeavePage/LeaveMangement"));
const  TimeSheetAdmin  =lazy(()=>import("../Components/TimeSheetAdmin"));
const  AdminLevePage  =lazy(()=>import("../Components/Leaves/AdminLeavePage"));
const  PBFTable  =lazy(()=>import("../Components/PBFReport"));
const  ClientReport  =lazy(()=>import( "../Components/PBFReport/ClientReport"));
const  ClientWiseJob  =lazy(()=>import( "../Components/PBFReport/ClientWiseJob"));
const AllCandidates = lazy(() => import("../Components/Candidate"));
const EmployeeDetailinfo = lazy(() => import("../Components/AdminDashboard/EmployeeDetailinfo"));
const EmployeeTable = lazy(() => import("../Components/AdminDashboard/index"));
const FileManager = lazy(() => import("../Components/FileManager"));
const EmployeeTabs = lazy(() => import("../Components/AdminDashboard/EmployeeTabs"));
const InfoPage = lazy(() => import("../Components/AdminDashboard/InfoPage"));
const ProfilesEmployee = lazy(() => import("../Components/ProfilesEmployee"));
//  const Projects = lazy(() => import("../Components/Clients/Project"));

//  const AssignEmployess = lazy(() => import("../Components/Clients/AssignEmployess"));
const  InvoiceExpence  =lazy(()=>import( './../Components/InvoiceExpence/index'));
const  Settings  =lazy(()=>import( './../Components/Settings/index'));


const RoutesDynamic = [
  {
    path: "/jobs",
    exact: true,
    component: <JobDashboard />,
  },
  {
    path: "/jobs/:id",
    exact: true,

    component: <ViewJob />,
  },
  {
    path: "/clients",
    exact: true,

    component: <Clients />,
  },
  {
    path: "/clients/:id",
    exact: true,

    component: <AssignEmployess />,
  },
  {
    path: "/project/",
    exact: true,

    component: <Projects />,
  },
  {
    path: "/candidates",
    exact: true,

    component: <AllCandidates />,
  },
  {
    path: "/candidates/:id",
    exact: true,

    component: <CandidateViewPage />,
  },
  {
    path: "/addcandidate",
    exact: true,

    component: <AllCandidatesNew />,
  },
  {
    path: "/Timesheet",
    exact: true,

    component: <EmployeeDashboard />,
  },
  {
    path: "/leave",
    exact: true,

    component: <EmployeeLevePage />,
  },
  {
    path: "/leave-admin",
    exact: true,

    component: <AdminLevePage />,
  },
  {
    path: "/leave-management",
    exact: true,

    component: <LeaveMangement/>,
  },

  {
    path: "/TimesheetAdmin",
    exact: true,

    component: <TimeSheetAdmin/>,
  },
  {
    path: "/usermanagement",
    exact: true,

    component: <UserManageMent />,
  },
  {
    path: "/pbf-report",
    exact: true,

    component: <PBFTable />,
  },
  {
    path: "/client-report",
    exact: true,

    component: <ClientReport/>,
  },
  {
    path: "/client-report/:id",
    exact: true,

    component: <ClientWiseJob/>,
  },
  {
    path: "/invoice-expence",
    exact: true,

    component: <InvoiceExpence/>,
  },
  {
    path: "/addrole",
    exact: true,

    component: <AddRole/>,
  },
  {
    path: "/addinvoice",
    exact: true,

    component: <AddInvoice/>,
  },
  {
    path: "/setting",
    exact: true,

    component: <Settings/>,
  },
  {
    path: "/company",
    exact: true,

    component: <Company/>,
  },
  {
    path: "/account",
    exact: true,

    component: <Account/>,
  },
  {
    path: "/account/:id",
    exact: true,

    component: <AccountContactPage/>,
  },
  {
    path: "/contacts",
    exact: true,

    component: <Contacts/>,
  },
  {
    path: "/company/:id/",
    exact: true,

    component: <CompanyUsers/>,
  },
  {
    path: "/profileDetail",
    exact: true,

    component: <EmployeeDetailinfo />,
  },
  {
    path: "/employetable",
    exact: true,

    component: <EmployeeTable />,
  },
  {
    path: "/myprofiles/:id",
    exact: true,

    component: <ProfilesEmployee />,
  },
  {
    path: "/filemanager",
    exact: true,

    component: <FileManager />,
  },
  {
    path: "/employeeTabs/:id",
    exact: true,

    component: <EmployeeTabs />,
  }, 
  {
    path: "/infopage",
    exact: true,

    component: <InfoPage />,
  },
  {
    path: "/goal",
    exact: true,

    component: <Goal/>,
  },
  {
    path: "/addgoal",
    exact: true,

    component: <AddGoal/>,
  },
  {
    path: "/adddepartment",
    exact: true,

    component: <AddDepartment/>,
  },
  {
    path: "/inerviewview",
    exact: true,

    component: <Interviewview/>,
  },
  {
    path: "/jobdetail",
    exact: true,

    component: <JobDetailNew/>,
  },
  {
    path: "/recentactivity",
    exact: true,

    component: <RecentActivity/>,
  },
  {
    path: "/clientwsie",
    exact: true,

    component: <ClientReport/>,
  },
  {
    path: "/accountview/:id",
    exact: true,

    component: <AccountViewpage/>,
  },

  {
    path: "/listcontacts/:id",
    exact: true,

    component: <ListContacts/>,
  },
  {
    path: "/space",
    exact: true,

    component: <Workspace/>,
  },
  {
    path: "/space/:id",
    exact: true,

    component: <SpaceList/>,
  },
  {
    path: "/spaceList/:id",
    exact: true,

    component: <Board/>,
  },
  

  {
    path: "/attenence",
    exact: true,

    component: <Attenence/>,
  },
 
];
export default RoutesDynamic;
