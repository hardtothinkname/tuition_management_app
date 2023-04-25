import React from 'react'
import { Form } from 'react-bootstrap'
import CopyRightFooter from '../../../Components/CopyRightFooter'

const classNamees = () => {
    return (
        <div id="page-content-wrapper">

            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h4 className="py-2 mb-0 font-weight-bold">className Attendance</h4>
                    </div>
                </div>
            </div>

            <div className="container-fluid container-wrapper">


                <form method="get">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-form-label col-md-3 text-danger">className</label>
                                <div className="col-md-9">
                                    <select className="form-control select2 select2-hidden-accessible" name="className" required="" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="3">-</option>
                                        </select>
                                 </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Date</label>
                                <div className="col-md-9">
                                    <Form.Control type="month" className="form-control" name="month" value="2023-04" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-9 offset-md-3">
                                    <div className="custom-control custom-checkbox">
                                        {/* <input type="checkbox" className="custom-control-input" id="customCheck1" value="1" name="date_filter"> */}
                                        <label className="custom-control-label" for="customCheck1">Only show dates with classes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <div className="col-md-9 offset-md-3">
                                    <button type="submit" className="btn btn-primary">Search</button>
                                    <button style={{marginLeft: "5%"}} type="button" onclick="print_normal()" className="btn btn-secondary">Print</button>
                                    <button style={{marginLeft: "5%"}} type="button" onclick="print_join_date()" className="btn btn-secondary">Print with join date</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="alert alert-warning">No result found</div>
            </div>
            <CopyRightFooter/>
        </div>
    )
}

export default classNamees
