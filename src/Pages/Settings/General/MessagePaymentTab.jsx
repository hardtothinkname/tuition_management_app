import React from 'react'

const MessagePaymentTab = () => {
    return (
        <div className="container">
            <form method="post">
                <div className="row">
                    <div className="col-md-12">

                        <div className="alert alert-info">
                            Remark:<br />
                            %NAME% : Name<br />
                            %RECEIPT_NO% : Receipt No<br />
                            %LINK% : Receipt PDF Link<br />
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


                        <div className="form-group text-right">
                            <button className="btn btn-primary" name="save_msg">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MessagePaymentTab
