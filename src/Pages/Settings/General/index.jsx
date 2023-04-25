import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

import React, { useEffect, useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import PaymentTab from "./PaymentTab";
import MessagePaymentTab from "./MessagePaymentTab";
import MessageOutstandingTab from "./MessageOutstandingTab";

const teachers = [
    {
        "No": "mr",
        "Name": "Lawson",
        "Status": "Luke",
        "Gender": "Software Developer",
        "Email": "coding",
        "Phone": "Software Developer",
        "Class(s)": "Software Developer"
    },
]

export const General = () => {
    const [key, setKey] = useState('payment');

    return (
        <div className="page-content-wrapper">
            <div class="container-fluid py-2">
                <div class="row">
                    <div class="col-6 my-auto">
                        <h4 class="py-2 mb-0 font-weight-bold">General</h4>
                    </div>
                </div>
            </div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="payment" title="Payment">
                    <PaymentTab />
                </Tab>
                <Tab eventKey="meesgae_payment" title="Sned Message (Payment)">
                    <MessagePaymentTab />
                </Tab>
                <Tab eventKey="message_outstanding" title="Send Message (Outstanding)">
                    <MessageOutstandingTab />
                </Tab>
            </Tabs>
        </div>
    )
}

export default General;