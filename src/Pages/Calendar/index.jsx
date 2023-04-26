import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'
import AddNewModal from './addNewModal'
import CopyRightFooter from '../../Components/CopyRightFooter'

const Calendar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id="page-content-wrapper">
            <div className="container-fluid py-2">
                <div className="row">
                    <div className="col-6 my-auto">
                        <h4 className="py-2 mb-0 font-weight-bold">Calendar</h4>
                    </div>
                    <div className="col-6 my-auto text-right">
                        <a onClick={handleShow} href="javascript:;" data-toggle="modal" data-target="#modal-add" className="btn btn-primary">
                            <FontAwesomeIcon icon={faPlusCircle} /> Add New</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid container-wrapper">


                <div className="row">

                    <div className="col-xl-2 col-md-3">
                        <Form.Check
                            type={'checkbox'}
                            id={`classes-checkbox`}
                            label={`Classes`}
                        />
                        <Form.Check
                            type={'checkbox'}
                            id={`holidays-checkbox`}
                            label={`Holidays`}
                        />
                        <Form.Check
                            type={'checkbox'}
                            id={`birthday-checkbox`}
                            label={`Birthday`}
                        />
                        <Form.Check
                            type={'checkbox'}
                            id={`events-checkbox`}
                            label={`Events`}
                        />
                    </div>

                    <div className="col-xl-10 col-md-9">
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                        />
                    </div>

                </div>

            </div>
            <CopyRightFooter />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group key={`inline-radio`} className="mb-3">
                                <Form.Check inline label="Event" name="group1" type={'radio'} id={`inline-radio-1`} />
                                <Form.Check inline label="Holiday" name="group1" type={'radio'} id={`inline-radio-2`} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Control type="date" class="form-control" name="date_join" />
                        </Form.Group>
                        <Form.Group key={`inline-checkbox`} className="mb-3">
                                <Form.Check inline label="Same Day" name="group1" type={'checkbox'} id={`inline-checkbox-1`} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Calendar