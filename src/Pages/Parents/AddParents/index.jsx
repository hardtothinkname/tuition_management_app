import React from 'react'
import { Form } from 'react-bootstrap'

const AddParent = () => {
    return (
        <div id="page-content-wrapper">

            <div class="container-fluid py-2">
                <div class="row">
                    <div class="col-6 my-auto">
                        <h4 class="py-2 mb-0 font-weight-bold">Add Parent</h4>
                    </div>
                </div>
            </div>

            <div class="container-fluid container-wrapper">
                <form method="post" enctype="multipart/form-data">

                    <div class="row">
                        <div class="col-md-6">

                            <div class="form-group row">
                                <label class="col-form-label col-md-3 text-danger">Full Name</label>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <Form.Control type="text" class="form-control" name="fullname_en" placeholder="English" required="" />
                                        </div>
                                        <div class="col-md-6">
                                            <Form.Control type="text" class="form-control" name="fullname_cn" placeholder="中文 (Optional)" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Nickname</label>
                                <div class="col-md-9">
                                    <Form.Control type="text" class="form-control" name="nickname" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">NRIC</label>
                                <div class="col-md-9">
                                    <Form.Control type="text" class="form-control" name="nric" onchange="ic_check(this.value)" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Birthday</label>
                                <div class="col-md-9">
                                    <Form.Control type="date" class="form-control" name="birthday" />
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">

                            <div class="form-group mb-4">
                                <div class="custom-checkbox mt-1">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-active`}
                                        label={`Active`}
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-3 pb-1">
                                <label class="col-md-3 col-form-label">Gender</label>
                                <div class="col-md-9 my-auto">

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
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Avatar</label>
                                <div class="col-md-9">
                                    <img src={"https://cdn.synorex.link/assets/images/blank/4x3.jpg"} class="mb-3 rounded-circle border" style={{ height: "85px", width: "85px", objectFit: "cover" }} />
                                    <Form.Control type="file" class="form-control" name="image" adisabled="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="mb-4" />

                    <div class="row">
                        <div class="col-md-6">

                            <div class="form-group row section-portal">
                                <label class="col-form-label col-md-3" id="username-text">Username</label>
                                <div class="col-md-9">
                                    <Form.Control type="text" class="form-control" id="username" name="username" readonly="" />
                                    <span id="check_username" class="d-none form-text font-weight-bold small text-danger">Username has been taken</span>
                                </div>
                            </div>

                            <div class="form-group row section-portal">
                                <label class="col-form-label col-md-3" id="password-text">Password</label>
                                <div class="col-md-9">
                                    <Form.Control type="password" class="form-control" id="password" name="password" readonly="" />
                                    <span id="default_password" class="d-none form-text font-weight-bold small text-muted">Default password: 123</span>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">

                            <div class="form-group mb-4">
                                <div class="custom-checkbox mt-1">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-allow-app-access`}
                                        label={`Allow app access for this parent`}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr class="mb-4" />

                    <div class="row">
                        <div class="col-md-6">

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Phone</label>
                                <div class="col-md-9">
                                    <Form.Control type="tel" class="form-control" name="phone" placeholder="Primary" />
                                    <Form.Control type="tel" class="form-control mt-2" name="phone2" />
                                    <Form.Control type="tel" class="form-control mt-2" name="phone3" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Email</label>
                                <div class="col-md-9">
                                    <Form.Control type="email" class="form-control" name="email" placeholder="Primary" />
                                    <Form.Control type="email" class="form-control mt-2" name="email2" />
                                    <Form.Control type="email" class="form-control mt-2" name="email3" />
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Address</label>
                                <div class="col-md-9">
                                    <Form.Control type="text" class="form-control" name="address" placeholder="Primary" />
                                    <Form.Control type="text" class="form-control mt-2" name="address2" />
                                    <Form.Control type="text" class="form-control mt-2" name="address3" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr class="mb-4" />

                    <div class="row">
                        <div class="col-md-6">

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Join Date</label>
                                <div class="col-md-9">
                                    <Form.Control type="date" class="form-control" name="date_join" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-form-label col-md-3">Remark</label>
                                <div class="col-md-9">
                                    <textarea class="form-control" name="remark" rows="4"></textarea>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <div class="col-md-9 offset-md-3">
                                    <button type="submit" name="save" class="btn btn-primary">Save</button>
                                    <a href="https://tuition.robocube.cloud/parents/list" class="btn btn-link text-muted">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default AddParent
