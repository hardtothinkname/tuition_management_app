import React from 'react'
import { Form } from 'react-bootstrap'

const PaymentTab = () => {
  return (
    <div className="tab-content py-3">

				<div className="tab-pane fade active show" id="tab-1">
					
					<div className="container"> 
													<div className="alert alert-warning">Setup PointoAPI API Key to use this function. <a href="https://tuition.robocube.cloud/settings/pointoapi" className="text-primary">Setup</a></div>
													
					</div>
						
				</div>
				
				<div className="tab-pane fade" id="tab-2">
					
					<div className="container">
						<form method="post">
							<div className="row">
								<div className="col-md-12">
								
									<div className="alert alert-info">
										Remark:<br/>
										%NAME% : Name<br/>
										%RECEIPT_NO% : Receipt No<br/>
										%LINK% : Receipt PDF Link<br/>
									</div>
								
									<div className="form-group row">
										<label className="col-form-label col-md-3">WhatsApp</label>
										<div className="col-md-9">
											<textarea className="form-control" rows="4" name="send_msg_whatsapp" maxlength="200" onkeyup="limit_text('send_msg_whatsapp', 'count')">Hey *%NAME%*, here's your confirmation for receipt number *%RECEIPT_NO%*. Review your receipt by click the link: %LINK%</textarea>
											<span className="form-text text-muted d-block small">Limit <span data-label="count">119</span>/200 characters</span>
										</div>
									</div>
									
									<div className="form-group row">
										<label className="col-form-label col-md-3">SMS</label>
										<div className="col-md-9">
											<textarea className="form-control" rows="4" name="send_msg_sms" maxlength="50" onkeyup="limit_text('send_msg_sms', 'count2')">Your receipt %RECEIPT_NO% has been generated!</textarea>
											<span className="form-text text-muted d-block small">Limit <span data-label="count2">45</span>/50 characters</span>
										</div>
									</div>
									
									{/* <!--<div className="form-group row">
										<label className="col-form-label col-md-3">Email</label>
										<div className="col-md-9">
											<textarea className="form-control" rows="4" name="send_msg_email"></textarea>
										</div>
									</div>--> */}
									
									<div className="form-group text-right">
										<button className="btn btn-primary" name="save_msg">Save</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					
				</div>
				
				<div className="tab-pane fade" id="tab-3">
					
					<div className="container">
						<form method="post">
							<div className="row">
								<div className="col-md-12">
								
									<div className="alert alert-info">
										Remark:<br/>
										%NAME% : Name<br/>
										%SUBJECT% : Subject<br/>
										%ITEM% : Item<br/>
										%TOTALOUTSTANDINGAMOUNT% : Total Outstanding Amount<br/>
									</div>
								
									<div className="form-group row">
										<label className="col-form-label col-md-3">WhatsApp</label>
										<div className="col-md-9">
											<textarea className="form-control" rows="4" name="send_msg_whatsapp_outstanding" maxlength="200" onkeyup="limit_text('send_msg_whatsapp_outstanding', 'count')">Your tuition fee is outstanding. Kindly pay by end of this month. Dial %PHONE% for more info. </textarea>
											<span className="form-text text-muted d-block small">Limit <span data-label="count">94</span>/200 characters</span>
										</div>
									</div>
									
									<div className="form-group row">
										<label className="col-form-label col-md-3">SMS</label>
										<div className="col-md-9">
											<textarea className="form-control" rows="4" name="send_msg_sms_outstanding" maxlength="50" onkeyup="limit_text('send_msg_sms_outstanding', 'count2')">Your outstanding statement has been generated. </textarea>
											<span className="form-text text-muted d-block small">Limit <span data-label="count2">47</span>/50 characters</span>
										</div>
									</div>
									
									{/* <!--<div className="form-group row">
										<label className="col-form-label col-md-3">Email</label>
										<div className="col-md-9">
											<textarea className="form-control" rows="4" name="send_msg_email"></textarea>
										</div>
									</div>--> */}
									
									<div className="form-group text-right">
										<button className="btn btn-primary" name="save_msg_outstanding">Save</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					
				</div>
				
				<div className="tab-pane fade " id="tab-4">
					
					<div className="container">
						<form method="post">
							<div className="row">
								<div className="col-md-6 offset-md-3">
									
									<div className="form-group">
										<div className="custom-control custom-checkbox">
											<Form.Control type="checkbox" name="active_support_box" className="custom-control-input" id="support-box" checked=""/>
											<label className="custom-control-label" for="support-box">Support Box</label>
										</div>
									</div>
									
									<div className="form-group">
										<button className="btn btn-primary" name="save_support_box">Save</button>
									</div>
								</div>
							</div>
						</form>
					</div>
					
				</div>

			</div>
  )
}

export default PaymentTab
