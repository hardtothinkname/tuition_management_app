import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar = () => {
    return (
        <div id="page-content-wrapper">

            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h4 className="py-2 mb-0 font-weight-bold">Calendar</h4>
                    </div>
                    <div className="col-6 my-auto text-right">
                        <a href="javascript:;" data-toggle="modal" data-target="#modal-add" className="btn btn-primary">
                            <FontAwesomeIcon icon={faPlusCircle}/> Add New</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid container-wrapper">


                <div className="row">

                    <div className="col-xl-2 col-md-3">
                        <div className="custom-control custom-checkbox mb-2 event-checkbox-className">
                            {/* <input type="checkbox" className="custom-control-input" id="checkbox-className" value="1" onchange="search()" checked=""> */}
                            <label className="custom-control-label" for="checkbox-className">Classes</label>
                        </div>
                        <div className="custom-control custom-checkbox mb-2 event-checkbox-holiday">
                            {/* <input type="checkbox" className="custom-control-input" id="checkbox-holiday" value="1" onchange="search()" checked=""> */}
                            <label className="custom-control-label" for="checkbox-holiday">Holidays</label>
                        </div>
                        <div className="custom-control custom-checkbox mb-2 event-checkbox-birthday">
                            {/* <input type="checkbox" className="custom-control-input" id="checkbox-birthday" value="1" onchange="search()" checked=""> */}
                            <label className="custom-control-label" for="checkbox-birthday">Birthday</label>
                        </div>
                        <div className="custom-control custom-checkbox mb-2 event-checkbox-event">
                            {/* <input type="checkbox" className="custom-control-input" id="checkbox-event" value="1" onchange="search()" checked=""> */}
                            <label className="custom-control-label" for="checkbox-event">Events</label>
                        </div>
                    </div>

                    <div className="col-xl-10 col-md-9">
                    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
                    </div>

                </div>

            </div>


            <div className="container-fluid pt-3 border-top" id="copyright">
                2023 © Robocube Tuition. All right reserved. Powered by <a href="https://synorexcloud.com/" target="_blank">Synorex</a>
            </div>
        </div>
    )
}

export default Calendar