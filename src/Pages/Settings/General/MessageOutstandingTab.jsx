import React from 'react'

const MessageOutstandingTab = () => {
    return (
        <div className="container">
            <form method="post">
                <div className="row">
                    <div className="col-md-12">

                        <div className="alert alert-info">
                            Remark:<br />
                            %NAME% : Name<br />
                            %SUBJECT% : Subject<br />
                            %ITEM% : Item<br />
                            %TOTALOUTSTANDINGAMOUNT% : Total Outstanding Amount<br />
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


                        <div className="form-group text-right">
                            <button className="btn btn-primary" name="save_msg_outstanding">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MessageOutstandingTab
