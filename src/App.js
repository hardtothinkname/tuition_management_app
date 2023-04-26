import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { Payment } from './Pages/Payment';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './Sidebar/index';
import NavBar from './NavBar';
import Epoint from './Pages/Points/Epoint';
import Ewallet from './Pages/Points/Ewallet';
import AllStudents from './Pages/Students/AllStudents';
import Parents from './Pages/Parents';
import Calendar from './Pages/Calendar';
import Daily from './Pages/Attendace/Daily';
import Classes from './Pages/Attendace/Classes';
import Manually from './Pages/Attendace/Manually';
import Items from './Pages/Inventory/Items';
import AddStudents from './Pages/Students/AddStudents';
import Homework from './Pages/Homework';
import ClassList from './Pages/ClassList';
import Teachers from './Pages/Teachers';
import Reports from './Pages/Reports';
import PaymentMethods from './Pages/Secondary/PaymentMethods';
import Transport from './Pages/Secondary/Transport';
import ItemCat from './Pages/Secondary/ItemCat';
import Courses from './Pages/Secondary/Courses';
import Schools from './Pages/Secondary/Schools';
import Bank from './Pages/Secondary/Bank';
import Migrate from './Pages/Settings/Migrate';
import Devices from './Pages/Settings/Devices';
import Admins from './Pages/Settings/Admins';
import General from './Pages/Settings/General';
import CopyRightFooter from './Components/CopyRightFooter';
import Announcement from './Pages/Content/Announcement';
import Slideshow from './Pages/Content/Slideshow';
import AddParent from './Pages/Parents/AddParents';
import AddPayment from './Pages/Payment/AddPayment';
import Movement from './Pages/Inventory/Movement';
import Package from './Pages/Inventory/Package';
import { useState } from 'react';

const style = {
  wrapper: {
    marginTop: "52px",
    minHeight: "100vh",
    // display: "flex",
    // flexDirection: "column"
  }
}

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebar1, setShowSidebar1] = useState(false);

  const handleSideBar = (event) => {
    console.log("!@#!@#!@")
    setShowSidebar(!showSidebar)
  }
  return (
    <Container fluid>
      <NavBar handleSideBar={handleSideBar}/>
      <Row>
        <div>
          {
            showSidebar && <SideBar />  
          }
        </div>
        <Col>
          <div style={style.wrapper}>

            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/add" element={<AddPayment />} />
              <Route path="/points/epoint" element={<Epoint />} />
              <Route path="/points/ewallet" element={<Ewallet />} />
              <Route path="/students/list" element={<AllStudents />} />
              <Route path="/students/add" element={<AddStudents />} />
              <Route path="/parents/list" element={<Parents />} />
              <Route path="/parents/add" element={<AddParent />} />

              <Route path="/calendar" element={<Calendar />} />

              <Route path="/attendace/daily" element={<Daily />} />
              <Route path="/attendace/classes" element={<Classes />} />
              <Route path="/attendace/manually" element={<Manually />} />

              <Route path="/items/list" element={<Items />} />
              <Route path="/package/list" element={<Package />} />
              <Route path="/movement/list" element={<Movement />} />
              <Route path="/homework/list" element={<Homework />} />
              <Route path="/classes/list" element={<ClassList />} />
              <Route path="/teachers/list" element={<Teachers />} />
              <Route path="/reports" element={<Reports />} />

              <Route path="/content/list/announcement" element={<Announcement />} />
              <Route path="/content/list/slideshow" element={<Slideshow />} />


              <Route path="/secondary/list/payment_method" element={<PaymentMethods />} />
              <Route path="/secondary/list/bank" element={<Bank />} />
              <Route path="/secondary/list/schools" element={<Schools />} />
              <Route path="/secondary/list/courses" element={<Courses />} />
              <Route path="/secondary/list/item_cat" element={<ItemCat />} />
              <Route path="/secondary/list/transports" element={<Transport />} />


              <Route path="/settings/general" element={<General />} />
              <Route path="/settings/admins" element={<Admins />} />
              <Route path="/settings/devices" element={<Devices />} />
              <Route path="/settings/migrate" element={<Migrate />} />

            </Routes>

            <CopyRightFooter />
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
