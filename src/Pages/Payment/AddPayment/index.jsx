import React from 'react'
import CopyRightFooter from '../../../Components/CopyRightFooter'
import { Form } from 'react-bootstrap'

const AddPayment = () => {
    return (
        <div id="page-content-wrapper">

            <div class="container-fluid py-2">
                <div class="row">
                    <div class="col-6 my-auto">
                        <h4 class="py-2 mb-0 font-weight-bold">Add Payment</h4>
                    </div>
                </div>
            </div>

            <div class="container-fluid container-wrapper" data-select2-id="21">


                <form method="post" onsubmit="Loading(1)" data-select2-id="20">

                    <div class="row" data-select2-id="19">
                        <div class="col-md-6" data-select2-id="18">


                            <div class="form-group row" data-select2-id="17">
                                <label class="col-form-label col-md-3 text-danger">Student</label>
                                <div class="col-md-9" data-select2-id="16">
                                    <Form.Select class="form-control select2 select2-hidden-accessible" onchange="window.location.href='https://tuition.robocube.cloud/payment/add/'+this.value" name="student" required="" data-select2-id="1" tabindex="-1" aria-hidden="true" style={{width: "100%", height: '38px'}}>
                                        <option value="" data-select2-id="3">-</option>
                                    </Form.Select>
                                    <div class="alert alert-warning mt-2">Please select a student</div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">


                        </div>
                    </div>


                </form>

            </div>

            <CopyRightFooter />
        </div>
    )
}

export default AddPayment
