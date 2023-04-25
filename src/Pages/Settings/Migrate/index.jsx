import React from "react";
import { Col, Form, Nav, Row, Tab } from "react-bootstrap";
import CopyRightFooter from "../../../Components/CopyRightFooter";


export const Migrate = () => {

    return (
        <div id="page-content-wrapper">

            <div class="container-fluid py-2">
                <div class="row">
                    <div class="col-6 my-auto">
                        <h4 class="py-2 mb-0 font-weight-bold">Migrate</h4>
                    </div>
                </div>
            </div>

            {/* <div class="container-fluid container-wrapper">


                <div class="row">
                    <div class="col-md-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" data-toggle="pill" href="javascript:;" data-target="#tab-1">
                                Students
                            </a>
                            <a class="nav-link " data-toggle="pill" href="javascript:;" data-target="#tab-2">
                                Parents
                            </a>
                            <a class="nav-link " data-toggle="pill" href="javascript:;" data-target="#tab-3">
                                Teachers
                            </a>
                            <a class="nav-link " data-toggle="pill" href="javascript:;" data-target="#tab-4">
                                Items
                            </a>
                            <a class="nav-link " data-toggle="pill" href="javascript:;" data-target="#tab-5">
                                Classes
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="tab-content" id="v-pills-tabContent">

                            <div class="tab-pane fade show active" id="tab-1">
                                <form method="post" enctype="multipart/form-data" onsubmit="Loading(1)">

                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-students.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_student" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div class="tab-pane fade " id="tab-2">
                                <form method="post" enctype="multipart/form-data" onsubmit="Loading(1)">

                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-parents.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_parent" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div class="tab-pane fade " id="tab-3">
                                <form method="post" enctype="multipart/form-data" onsubmit="Loading(1)">

                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-teachers.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_teacher" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div class="tab-pane fade " id="tab-4">
                                <form method="post" enctype="multipart/form-data" onsubmit="Loading(1)">

                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-items.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_item" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div class="tab-pane fade " id="tab-5">
                                <form method="post" enctype="multipart/form-data" onsubmit="Loading(1)">

                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-classes.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_class" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                
            </div> */}
            <div class="container-fluid container-wrapper">

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="students">Students</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="parents">Parents</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="teachers">Teachers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="items">Items</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="classes">Classes</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="students">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-items.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_item" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="parents">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-items.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_item" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="teachers">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-items.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_item" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="items">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-items.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_item" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="classes">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3 text-danger">File</label>
                                        <div class="col-md-9">
                                            <Form.Control type="file" name="file" class="form-control" id="file" required="" accept=".xls, .xlsx" />
                                            <a href="https://tuition.robocube.cloud/uploads/files/sample-import-items.xlsx" class="form-text small text-muted"><i class="fa fa-fw fa-download"></i> Download sample Excel file</a>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-md-9 offset-md-3">
                                            <button type="submit" name="import_item" class="btn btn-primary">Import</button>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            <CopyRightFooter />
        </div>
    )
}

export default Migrate;