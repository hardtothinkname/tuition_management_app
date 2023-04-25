import React from 'react'
import CopyRightFooter from '../../Components/CopyRightFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxes, faChartLine, faChartPie, faClock, faUsers } from '@fortawesome/free-solid-svg-icons'

const Reports = () => {
    return (
        <div id="page-content-wrapper">

            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h4 className="py-2 mb-0 font-weight-bold">Reports</h4>
                    </div>
                </div>
            </div>

            <div className="container container-wrapper pt-4">


                <div className="row">
                    <div className="col-md-3 mb-5">
                        <h5 className="font-weight-bold mb-3">
                            <FontAwesomeIcon icon={faChartLine} className='mr-1'/> Sales</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/unpaid_items">Unpaid Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/daily_collection">Daily Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/monthly_collection">Monthly Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/outstanding_payment">Outstanding Payment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/outstanding_payment_className">Outstanding Payment (className)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/epoint_balance">Epoint Balance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/ewallet_balance">Ewallet Balance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/sales_by_item">Sales by Item</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/sales_by_item_cat">Sales by Item Cat.</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/sales_by_school">Sales by School</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/sales_by_course">Sales by Course</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/sales_by_admin">Sales by Admin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/sales_by_teacher">Sales by Teacher</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/sales_by_ref_code">Sales by Reference Code</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/advanced_payment">Advanced Payment</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="font-weight-bold mb-3">
                            <FontAwesomeIcon icon={faUsers} className='mr-1' /> Users</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/birthday_student">Birthday</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/birthday_parent">Birthday (Parent)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/birthday_teacher">Birthday (Teacher)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/whatsapp_marketing">WhatsApp Marketing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/whatsapp_marketing_student">WhatsApp Marketing (Student)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="font-weight-bold mb-3">
                        <FontAwesomeIcon icon={faClock} className='mr-1' /> Attendance</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/student_attendance">Student Attendance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/student_attendance_className">Student Attendance (className)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/teacher_attendance">Teacher Attendance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/daily_attendance">Daily Attendance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/daily_attendance_teacher">Daily Attendance (Teacher)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/monthly_attendance">Monthly Attendance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/monthly_attendance_teacher">Monthly Attendance (Teacher)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/className_deductions">className Deductions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="font-weight-bold mb-3">
                        <FontAwesomeIcon icon={faBoxes} className='mr-1' /> Inventory</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/stock_movement">Stock Movement</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="font-weight-bold mb-3">
                        <FontAwesomeIcon icon={faChartPie} className='mr-1' /> Data Check</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/check_students">Students</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/check_parents">Parents</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/check_teachers">Teachers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/check_items">Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/check_classNamees">classNamees</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-0 py-2" href="https://tuition.robocube.cloud/reports/check_payment_trash">Payment (Trash)</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        <CopyRightFooter/>
        </div>
    )
}

export default Reports
