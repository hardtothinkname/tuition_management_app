import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
// import { withRouter } from "react-router";
import './sidebar.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faBox, faBullhorn, faCalendar, faChartPie, faCircle, faClock, faCogs, faFileInvoice, faHome, faSchool, faShieldAlt, faStar, faTags, faUserCircle, faUserTie, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import style from "../shared/style";

// Add the icons you want to use to the library
// library.add(faFileInvoice);
const sideBarStyle = {
    marginTop: {
        marginTop: "52px"
    }
}
const SideBar = props => {
    const [open, setOpen] = useState({ points: false, students: false, attendance: false, inventory: false, content: false, secondary: false, settings: false });
    const [active, setActive] = useState({
        home: false, payment: false, parents: false, calendar: false, homework: false, classes: false, teachers:false, reports:false
    })

    function handleActiveNavItem(navItemName) {
        setActive(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => {
                acc[key] = key === navItemName;
                return acc;
            }, {})
        }));
    }

    return (
        <div id="wrapper" style={sideBarStyle.marginTop} className="toggled">
            <div id="sidebar-wrapper" data-title="Sidebar" data-intro="All the functions of the system are gathered in the left menu">
                <ul className="sidebar-nav" id="accordion">
                    <li className={active.home ? "active" : ""}>
                        {/* <a href="https://tuition.robocube.cloud/"><i className="fa fa-fw fa-home"></i> Home</a> */}
                        <Link onClick={() => handleActiveNavItem("home")} to="/"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faHome} /> Home</Link>
                    </li>
                    <li className={active.payment ? "active" : ""}>
                        <Link onClick={() => handleActiveNavItem("payment")} to="/payment"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faFileInvoice} /> Payment</Link>
                    </li>
                    <li >
                        <a style={{ ...style.sideBarItem, cursor: 'pointer' }} onClick={() => setOpen({ ...open, points: !open.points })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open.points}>
                            <FontAwesomeIcon style={style.sideBarIcon} fixedWidth icon={faStar} /> Points
                        </a>
                    </li>
                    <Collapse in={open.points}>
                        <div id="example-collapse-text">
                            <ul>
                                <li>
                                    <Link style={{ padding: 0 }} to="/points/epoint"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Epoint</Link>
                                </li>
                                <li>
                                    <Link style={{ padding: 0 }} to="/points/ewallet"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Ewallet</Link>
                                </li>
                            </ul>
                        </div>
                    </Collapse >
                    <li  >
                        <a style={{ ...style.sideBarItem, cursor: 'pointer' }} onClick={() => setOpen({ ...open, students: !open.students })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open.students}>
                            <FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faUsers} /> Students
                        </a>
                    </li>
                    <Collapse in={open.students}>
                        <div id="example-collapse-text">
                            <ul>
                                <li>
                                    <Link style={{ padding: 0 }} to="/students/list"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> All Students</Link>
                                </li>
                                <li>
                                    <Link style={{ padding: 0 }} to="/students/add"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Pending</Link>
                                </li>
                            </ul>
                        </div>
                    </Collapse >
                    <li>
                        <Link to="/parents/list"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faUserCircle} /> Parents</Link>
                    </li>
                    <li className={active.calendar ? "active" : ""}>
                        <Link to="/calendar" onClick={() => handleActiveNavItem("calendar")}><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faCalendar} /> Calendar</Link>
                    </li>
                    <li  >
                        <a style={{ ...style.sideBarItem, cursor: 'pointer' }} onClick={() => setOpen({ ...open, attendance: !open.attendance })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open.attendance}>
                            <FontAwesomeIcon style={style.sideBarIcon} fixedWidth icon={faClock} /> Attendance
                        </a>
                        <Collapse in={open.attendance}>
                            <div id="example-collapse-text">
                                <ul>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/attendace/daily"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Daily</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/attendace/classes"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Classes</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/attendace/manually"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Manually</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse >
                    </li>
                    <li  >
                        <a style={{ ...style.sideBarItem, cursor: 'pointer' }} onClick={() => setOpen({ ...open, inventory: !open.inventory })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open.inventory}>
                            <FontAwesomeIcon style={style.sideBarIcon} fixedWidth icon={faBox} /> Inventory
                        </a>
                        <Collapse in={open.inventory}>
                            <div id="example-collapse-text">
                                <ul>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/items/list"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Items</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/package/list"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Package</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/movement/list"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Movement</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse >
                    </li>
                    <li  >
                        <a style={{ ...style.sideBarItem, cursor: 'pointer' }} onClick={() => setOpen({ ...open, content: !open.content })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open.content}>
                            <FontAwesomeIcon style={style.sideBarIcon} fixedWidth icon={faBullhorn} /> Content
                        </a>
                        <Collapse in={open.content}>
                            <div id="example-collapse-text">
                                <ul>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/content/list/announcement"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Announcement</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/content/list/slideshow"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Slideshow</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse >
                    </li>
                    <li className={active.homework ? "active" : ""} >
                        <Link to="/homework/list" onClick={() => handleActiveNavItem("calendar")}><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faBook} /> Homework</Link>
                    </li>
                    <li  className={active.classes ? "active" : ""}>
                        <Link to="/classes/list" onClick={() => handleActiveNavItem("classes")}><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faSchool} /> Classes</Link>
                    </li>
                    <li  className={active.teachers ? "active" : ""}>
                        <Link to="/teachers/list" onClick={() => handleActiveNavItem("teachers")}><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faUserTie} /> Teachers</Link>
                    </li>
                    <li className={active.reports ? "active" : ""}>
                        <Link to="/reports" onClick={() => handleActiveNavItem("reports")}><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faChartPie} /> Reports</Link>
                    </li>
                    <li>
                        <a style={{ ...style.sideBarItem, cursor: 'pointer' }} onClick={() => setOpen({ ...open, secondary: !open.secondary })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open.secondary}>
                            <FontAwesomeIcon style={style.sideBarIcon} fixedWidth icon={faTags} /> Secondary
                        </a>
                        <Collapse in={open.secondary}>
                            <div id="example-collapse-text">
                                <ul>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/secondary/list/bank"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Bank</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/secondary/list/schools"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Schools</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/secondary/list/courses"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Courses</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/secondary/list/item_cat"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Item Cat.</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/secondary/list/transports"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Transports</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/secondary/list/payment_method"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Payment Methods</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse >
                    </li>


                    <li>
                        <a style={{ ...style.sideBarItem, cursor: 'pointer' }} onClick={() => setOpen({ ...open, settings: !open.settings })}
                            aria-controls="example-collapse-text"
                            aria-expanded={open.settings}>
                            <FontAwesomeIcon style={style.sideBarIcon} fixedWidth icon={faCogs} /> Settings
                        </a>
                        <Collapse in={open.settings}>
                            <div id="example-collapse-text">
                                <ul>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/settings/general"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> General</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/settings/admins"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Admins</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/settings/devices"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Devices</Link>
                                    </li>
                                    <li>
                                        <Link style={{ padding: 0 }} to="/settings/migrate"><FontAwesomeIcon icon={faCircle} style={{ ...style.sideBarIcon, color: "transparent" }} /> Migrate</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse >
                    </li>
                    <li  >
                        <Link to="/payment"><FontAwesomeIcon fixedWidth style={style.sideBarIcon} icon={faShieldAlt} /> Insurance <span className="badge badge-danger">New</span></Link>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default SideBar