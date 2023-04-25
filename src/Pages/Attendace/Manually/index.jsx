import React from 'react'
import { Form } from 'react-bootstrap'

const Manually = () => {
    return (
        <div id="page-content-wrapper">

            <div class="container-fluid py-2">
                <div class="row">
                    <div class="col-6 my-auto">
                        <h4 class="py-2 mb-0 font-weight-bold">Manually Attendance</h4>
                    </div>
                </div>
            </div>

            <div class="container-fluid container-wrapper">


                <div class="row">
                    <div class="col-md-8 mb-4">

                        <table class="table table-smA table-bordered table-striped">
                            <thead>
                                <tr><th style={{ width: "20%" }}>Date / Time</th>
                                    <th>Details</th>
                                    <th style={{ width: "15%" }}>Action</th>
                                </tr></thead>
                            <tbody>
                                <tr><td class="text-center" colspan="6">No result found</td></tr></tbody>
                        </table>

                    </div>

                    <div class="col-md-4 mb-4">

                        <form method="get">

                            <div class="alert alert-warning">Please select a user</div>

                            <div class="form-group row">
                                <label class="col-md-3 col-form-label">User</label>
                                <div class="col-md-9">
                                    <select class="form-control select2 select2-hidden-accessible" name="user" required="" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="3">-</option>
                                        <optgroup label="Student">
                                        </optgroup>
                                        <optgroup label="Teacher">
                                        </optgroup>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 col-form-label">Date</label>
                                <div class="col-md-9">
                                    <Form.Control type="date" class="form-control" name="date" value="2023-04-22" required="" />
                                </div>
                            </div>
                            {/* 
                            <!--<div class="form-group row">
                                <label class="col-md-3 col-form-label">Reason</label>
                                <div class="col-md-9">
                                    <textarea class="form-control" name="reason" rows="4">Admin adjust</textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-3 col-form-label">Remark</label>
                                <div class="col-md-9">
                                    <textarea class="form-control" name="remark" rows="4"></textarea>
                                </div>
                            </div>--> */}

                            <div class="form-group row">
                                <div class="offset-md-3 col-md-9">
                                    <button class="btn btn-primary" type="submit" name="save">Search</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>

            </div>


            <div class="container-fluid pt-3 border-top" id="copyright">
                2023 © Robocube Tuition. All right reserved. Powered by <a href="https://synorexcloud.com/" target="_blank">Synorex</a>
            </div>
        </div>
    )
}

export default Manually
