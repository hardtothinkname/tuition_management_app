import React, { useState } from 'react'
import CopyRightFooter from '../../../Components/CopyRightFooter'
import { Form } from 'react-bootstrap'

const AddStudents = () => {
    const [access, setAccess] = useState(true)
    return (
        <div id="page-content-wrapper">

            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h4 className="py-2 mb-0 font-weight-bold">Pending</h4>
                    </div>
                </div>
            </div>

            <div className="container-fluid container-wrapper">
                <form method="post" enctype="multipart/form-data">

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group row">
                                <label className="col-form-label col-md-3 text-danger">Full Name</label>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Control type="text" className="form-control" name="fullname_en" placeholder="English" required="" />
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Control type="text" className="form-control" name="fullname_cn" placeholder="中文 (Optional)" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Nickname</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" className="form-control" name="nickname" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">NRIC / Birth Cert No.</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" className="form-control" name="nric" onchange="ic_check(this.value)" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Birthday</label>
                                <div className="col-md-9">
                                    <Form.Control type="date" className="form-control" name="birthday" />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="form-group mb-4">
                                <div class="custom-checkbox mt-1">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-active`}
                                        label={`Active`}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-3 pb-1">
                                <label className="col-md-3 col-form-label">Gender</label>
                                <div className="col-md-9 my-auto">

                                    <div class="custom-control custom-radio custom-control-inline">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-male`}
                                            label={`Male`}
                                        />
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-female`}
                                            label={`Female`}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Avatar</label>
                                <div className="col-md-9">
                                    <img src={"https://cdn.synorex.link/assets/images/blank/4x3.jpg"} className="mb-3 rounded-circle border" style={{ height: "85px", width: "85px", objectFit: "cover" }} />
                                    <Form.Control type="file" className="form-control" name="image" adisabled="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <hr className="mb-4" />

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group row section-portal">
                                <label className="col-form-label col-md-3" id="username-text">Username</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" disabled={access} className="form-control" id="username" name="username" />
                                    <span id="check_username" className="form-text font-weight-bold small text-danger">Username has been taken</span>
                                </div>
                            </div>

                            <div className="form-group row section-portal">
                                <label className="col-form-label col-md-3" id="password-text">Password 123</label>
                                <div className="col-md-9">
                                    <Form.Control type="password" disabled={access} className="form-control" id="password" name="password" />
                                    <div id="default_password" className="form-text font-weight-bold small text-muted">Default password: 123</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div class="form-group mb-4">
                                <div class="custom-checkbox mt-1">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-allow-app-access`}
                                        label={`Allow app access for this student`}
                                        checked={access}
                                        onChange={() => setAccess(!access)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr className="mb-4" />

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Phone</label>
                                <div className="col-md-9">
                                    <Form.Control type="tel" className="form-control" name="phone" placeholder="Primary" />
                                    <Form.Control type="tel" className="form-control mt-2" name="phone2" />
                                    <Form.Control type="tel" className="form-control mt-2" name="phone3" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Email</label>
                                <div className="col-md-9">
                                    <Form.Control type="email" className="form-control" name="email" placeholder="Primary" />
                                    <Form.Control type="email" className="form-control mt-2" name="email2" />
                                    <Form.Control type="email" className="form-control mt-2" name="email3" />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Address</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" className="form-control" name="address" placeholder="Primary" />
                                    <Form.Control type="text" className="form-control mt-2" name="address2" />
                                    <Form.Control type="text" className="form-control mt-2" name="address3" />
                                </div>
                            </div>

                        </div>

                    </div>

                    <hr className="mb-4" />

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Join Date</label>
                                <div className="col-md-9">
                                    <Form.Control type="date" className="form-control" name="date_join" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Card ID</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" className="form-control" id="rfid_cardid" name="rfid_cardid" />
                                    <span id="check_cardid" className="d-none form-text font-weight-bold small text-danger">Card ID has been taken</span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Transport</label>
                                <div className="col-md-9">
                                    <select className="form-control select2 select2-hidden-accessible" name="transport" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="3">-</option>';



                                    </select><span className="select2 select2-container select2-container--bootstrap4" dir="ltr" data-select2-id="2" style={{ width: "459.825px;" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-transport-s8-container"><span className="select2-selection__rendered" id="select2-transport-s8-container" role="textbox" aria-readonly="true" title="-">-</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Car Plate No</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" className="form-control" name="car_plate_no" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Remark</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" name="remark" rows="4"></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Code</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" className="form-control" name="code" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">School</label>
                                <div className="col-md-9">
                                    <select className="form-control select2 select2-hidden-accessible" name="school" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="6">-</option>';


                                    </select><span className="select2 select2-container select2-container--bootstrap4" dir="ltr" data-select2-id="5" style={{ width: "459.825px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-school-ci-container"><span className="select2-selection__rendered" id="select2-school-ci-container" role="textbox" aria-readonly="true" title="-">-</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Parent</label>
                                <div className="col-md-9">
                                    <select className="form-control select2 select2-hidden-accessible" name="parent" data-select2-id="7" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="9">-</option>';


                                    </select><span className="select2 select2-container select2-container--bootstrap4" dir="ltr" data-select2-id="8" style={{ width: "459.825px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-parent-y7-container"><span className="select2-selection__rendered" id="select2-parent-y7-container" role="textbox" aria-readonly="true" title="-">-</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Parent 2</label>
                                <div className="col-md-9">
                                    <select className="form-control select2 select2-hidden-accessible" name="parent2" data-select2-id="10" tabindex="-1" aria-hidden="true">
                                        <option value="" data-select2-id="12">-</option>';


                                    </select><span className="select2 select2-container select2-container--bootstrap4" dir="ltr" data-select2-id="11" style={{ width: "459.825px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-parent2-9n-container"><span className="select2-selection__rendered" id="select2-parent2-9n-container" role="textbox" aria-readonly="true" title="-">-</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Guardian</label>
                                <div className="col-md-9">
                                    <Form.Control type="text" className="form-control" name="guardian" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-3">Guardian Phone</label>
                                <div className="col-md-9">
                                    <Form.Control type="tel" className="form-control" name="guardian_phone" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <div className="col-md-9 offset-md-3">
                                    <button type="submit" name="save" className="btn btn-primary">Save</button>
                                    <a href="https://tuition.robocube.cloud/students/list" className="btn btn-link text-muted">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
            <CopyRightFooter />
        </div>
    )
}

export default AddStudents
