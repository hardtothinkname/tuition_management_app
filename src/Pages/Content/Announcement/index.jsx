import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

import React, { useEffect } from "react";

const announcements = [
    {
        "No": "mr",
        "Title": "Lawson",
        "Status": "Luke",
        "Author": "Software Developer",
        "Create On": "coding",
    },
]

export const Announcement = () => {
    useEffect(() => {
        if (!$.fn.DataTable.isDataTable("#mytable")) {
            $(document).ready(function () {
                $("#mytable").DataTable({
                    processing: true,
                    select: {
                        style: "single",
                    },
                });
            });
        } else {
            console.log("already datatable")
        }
    })

    const showTable = () => {
        try {
            return announcements.map((item, index) => {
                return (
                    <tr key={index}>
                        {/* <td className="text-xs font-weight-bold">{index + 1}</td> */}
                        <td className="text-xs font-weight-bold">{item.No}</td>
                        <td className="text-xs font-weight-bold">{item.Title}</td>
                        <td className="text-xs font-weight-bold">{item.Status}</td>
                        <td className="text-xs font-weight-bold">{item.Author}</td>
                        <td className="text-xs font-weight-bold">{item['Create On']}</td>
                        <td></td>
                    </tr>
                );
            });
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <div className="page-content-wrapper">
            <div class="container-fluid py-2">
                <div class="row">
                    <div class="col-6 my-auto">
                        <h4 class="py-2 mb-0 font-weight-bold">
                            Announcements					</h4>
                    </div>
                    <div class="col-6 my-auto text-right">
                        <div class="btn-group">
                            <a href="https://tuition.robocube.cloud/payment/add" class="btn btn-primary"><i class="fa mr-1 fa-plus-circle"></i> Add New</a>
                            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a href="https://tuition.robocube.cloud/payment/add?by_class" class="dropdown-item">New Payment by Class</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-2">
                <div className="table-responsive p-0 pb-2">
                    <table id="mytable" className="align-items-center justify-content-center mb-0">
                        <thead>
                            <tr>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">No</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Title</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Status</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Author</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Create On</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {showTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Announcement;