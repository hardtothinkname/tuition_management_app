import React from 'react'
import style from '../../../shared/style'

export default function Ewallet() {
    return (
        <div id="page-content-wrapper">

            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h4 className="py-2 mb-0 font-weight-bold">Ewallet</h4>
                    </div>
                </div>
            </div>

            <div className="container-fluid container-wrapper">
                <div className="row">
                    <div className="col-md-8 mb-4">
                        <table className="table table-sm table-bordered table-striped">
                            <thead>
                                <tr><th style={style['w-20']}>Date / Time</th>
                                    <th>Details</th>
                                    <th className="text-right" style={style['w-15']}>Credit ($)</th>
                                    <th className="text-right" style={style['w-15']}>Debit ($)</th>
                                    <th className="text-right" style={style['w-15']}>Amount ($)</th>
                                </tr></thead>
                            <tbody>
                                <tr><td className="text-center" colspan="5">No result found</td></tr></tbody>                        <tfoot>
                                <tr><th colspan="2">Total</th>
                                    <th className="text-right" style={style['w-15']}>
                                        0.00							</th>
                                    <th className="text-right" style={style['w-15']}>
                                        0.00							</th>
                                    <th className="text-right" style={style['w-15']}>
                                        0.00							</th>
                                </tr></tfoot>
                        </table>

                    </div>

                    <div className="col-md-4 mb-4">

                        <form method="post">

                            <div className="form-group row">
                                <label className="col-md-3 col-form-label">Student</label>
                                <div className="col-md-9">
                                    <select onchange="select(this, 'ewallet');" className="form-control select2 select2-hidden-accessible" id="student" name="student" required="" data-select2-id="student" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="2">-</option>
                                    </select><span className="select2 select2-container select2-container--bootstrap4" dir="ltr" data-select2-id="1" style={{ width: "296.538px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-student-container"><span className="select2-selection__rendered" id="select2-student-container" role="textbox" aria-readonly="true" title="-">-</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    <div className="alert alert-warning mt-2">Please select a student</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


            <div className="container-fluid pt-3 border-top" id="copyright">
                2023 © Robocube Tuition. All right reserved. Powered by <a href="https://synorexcloud.com/" target="_blank">Synorex</a>
            </div>
        </div>
    )
}
