import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import CopyRightFooter from '../../../Components/CopyRightFooter';
import { Link } from 'react-router-dom';

const students = [
    {
        "No": "mr",
        "Name": "Lawson",
        "Status": "Luke",
        "Gender": 28,
        "Join Date": "Software Developer",
        "Phone": "coding",
        "School": "Software Developer",
        "Parent": "coding",
        "Age": 12
    },
]


export const AllStudents = () => {

    const showTable = () => {
        try {
            return students.map((item, index) => {
                return (
                    <tr key={index}>
                        {/* <td classNameName="text-xs font-weight-bold">{index + 1}</td> */}
                        <td classNameName="text-xs font-weight-bold">{item.No}</td>
                        <td classNameName="text-xs font-weight-bold">{item.Name}</td>
                        <td classNameName="text-xs font-weight-bold">{item.Status}</td>
                        <td classNameName="text-xs font-weight-bold">{item.Gender}</td>
                        <td classNameName="text-xs font-weight-bold">{item["Join Date"]}</td>
                        <td classNameName="text-xs font-weight-bold">{item.Phone}</td>
                        <td classNameName="text-xs font-weight-bold">{item.School}</td>
                        <td classNameName="text-xs font-weight-bold">{item.Parent}</td>
                        <td classNameName="text-xs font-weight-bold">{item.Age}</td>

                        <td></td>
                    </tr>
                );
            });
        } catch (e) {
            alert(e.message);
        }
    };
    useEffect(() => {
        // setTimeout(function () {
        if (!$.fn.DataTable.isDataTable("#mytable")) {
            $(document).ready(function () {
                // setTimeout(function () {
                $("#mytable").DataTable({
                    processing: true,
                    select: {
                        style: "single",
                    },
                });
                // }, 1000);
            });
        } else {
            console.log("already datatable")
        }
        // }, 1000);
    })
    return (
        <div id="page-content-wrapper">
            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h4 className="py-2 mb-0 font-weight-bold">
                            All Students					</h4>
                    </div>
                    <div className="col-6 my-auto text-right">
                        <div className="btn-group">
                            <Link to="/students/add" className="btn btn-primary"><i className="fa mr-1 fa-plus-circle"></i> Add New</Link>
                            <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item d-flex justify-content-between align-items-center" href="javascript:;" data-toggle="modal" data-target="#modal-apply">
                                    <span>E-form Apply</span>
                                    <i className="fa fa-fw fa-external-link-square-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid container-wrapper">
                <form method="get">
                    <div className="row">
                        <div className="col-md-6">
                            <Form>
                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Fullname</label>
                                    <div className='col-md-9'>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Control type="text" className="form-control" name="fullname_en" value="" placeholder="English" />
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Control type="text" className="form-control" name="fullname_cn" value="" placeholder="中文 (Optional)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Card ID</label>
                                    <div className="col-md-9">
                                        <Form.Control type="text" placeholder="" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Phone</label>
                                    <div className="col-md-9">
                                        <Form.Control type="text" placeholder="" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Email</label>
                                    <div className="col-md-9">
                                        <Form.Control type="text" placeholder="" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 col-form-label">Age</label>
                                    <div className="col-md-9">
                                        <select className="form-control" name="">
                                            <option value="">-</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-9 offset-md-3">
                                        <Button type="submit" name="search" value="search" className="btn btn-primary">Search</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </form>

                <form method="post">
                    <div className="row mb-3 action-sec d-none">
                        <div className="col-md-6">
                            <div className="row col-md-3">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button" onclick="del_ask()" name="del">Delete</button>
                                        <button className="dropdown-item" type="button" onclick="active_ask()" name="active">Active</button>
                                        <button className="dropdown-item" type="button" onclick="inactive_ask()" name="inactive">Inactive</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table id="mytable" classNameName="align-items-center justify-content-center mb-0">
                            <thead>
                                <tr>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">No</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Name</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Status</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Gender</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Join Date</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Phone</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">School</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Parent</th>
                                    <th classNameName="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Age</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {showTable()}
                            </tbody>
                        </table>
                    </div>
                </form>

            </div>
            <CopyRightFooter />
        </div>
    )
}


export default AllStudents;