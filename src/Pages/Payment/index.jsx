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
import CopyRightFooter from "../../Components/CopyRightFooter";
import { Link } from "react-router-dom";

const payments = [
    {
        "Date / Time": "mr",
        "Receipt": "Lawson",
        "No": "Luke",
        "Date": 28,
        "Student": "Software Developer",
        "Cashier": "coding",
        "Payment Method": "Software Developer",
        "Total ($)": "coding"
    },
]

export const Payment = () => {

    useEffect(() => {
        // setTimeout(function () {
        if (!$.fn.DataTable.isDataTable("#mytable")) {
            $(document).ready(function () {
                // setTimeout(function () {
                $("#mytable").DataTable({
                    // pagingType: "full_numbers",
                    // pageLength: 20,
                    processing: true,
                    // dom: "Bfrtip",
                    select: {
                        style: "single",
                    },

                    // buttons: [
                    //     {
                    //         extend: "pageLength",
                    //         className: "btn btn-secondary bg-secondary",
                    //     },
                    //     {
                    //         extend: "copy",
                    //         className: "btn btn-secondary bg-secondary",
                    //     },
                    //     {
                    //         extend: "csv",
                    //         className: "btn btn-secondary bg-secondary",
                    //     },
                    //     {
                    //         extend: "print",
                    //         customize: function (win) {
                    //             $(win.document.body).css("font-size", "10pt");
                    //             $(win.document.body)
                    //                 .find("table")
                    //                 .addClass("compact")
                    //                 .css("font-size", "inherit");
                    //         },
                    //         className: "btn btn-secondary bg-secondary",
                    //     },
                    // ],

                    // fnRowCallback: function (
                    //     nRow,
                    //     aData,
                    //     iDisplayIndex,
                    //     iDisplayIndexFull
                    // ) {
                    //     var index = iDisplayIndexFull + 1;
                    //     $("td:first", nRow).html(index);
                    //     return nRow;
                    // },

                    // lengthMenu: [
                    //     [10, 20, 30, 50, -1],
                    //     [10, 20, 30, 50, "All"],
                    // ],
                    // columnDefs: [
                    //     {
                    //         targets: 0,
                    //         render: function (data, type, row, meta) {
                    //             return type === "export" ? meta.row + 1 : data;
                    //         },
                    //     },
                    // ],
                });
                // }, 1000);
            });
        } else {
            console.log("already datatable")
        }
        // }, 1000);
    })

    const showTable = () => {
        try {
            return payments.map((item, index) => {
                return (
                    <tr key={index}>
                        {/* <td className="text-xs font-weight-bold">{index + 1}</td> */}
                        <td className="text-xs font-weight-bold">{item["Date / Time"]}</td>
                        <td className="text-xs font-weight-bold">{item.Receipt}</td>
                        <td className="text-xs font-weight-bold">{item.No}</td>
                        <td className="text-xs font-weight-bold">{item.Date}</td>
                        <td className="text-xs font-weight-bold">{item.Student}</td>
                        <td className="text-xs font-weight-bold">{item.Cashier}</td>
                        <td className="text-xs font-weight-bold">{item["Payment Method"]}</td>
                        <td className="text-xs font-weight-bold">{item["Total ($)"]}</td>
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
                            All Payment					</h4>
                    </div>
                    <div class="col-6 my-auto text-right">
                        <div class="btn-group">
                            {/* <a href="https://tuition.robocube.cloud/payment/add" class="btn btn-primary"><i class="fa mr-1 fa-plus-circle"></i> Add New</a> */}
                            <Link to={'/payment/add'} class="btn btn-primary"><i class="fa mr-1 fa-plus-circle"></i> Add New</Link>
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
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Date / Time</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Receipt</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">No</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Date</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Student</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Cashier</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Payment Method</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Total ($)</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {showTable()}
                        </tbody>
                    </table>
                </div>
            </div>
            <CopyRightFooter/>
        </div>
    )
}

export default Payment;