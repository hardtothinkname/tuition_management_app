import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import SideBar from '../Sidebar/index';
import './dashboard.css'
import { Modal } from 'react-bootstrap';
import CopyRightFooter from '../Components/CopyRightFooter';
// import NavBar from '../NavBar';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendarAlt, faCaretSquareRight, faChalkboardTeacher, faChartPie, faExternalLinkSquareAlt, faMoneyCheckAlt, faSync, faTimesCircle, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Chart } from './chart';

const Dashboard = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <div id="page-content-wrapper">
      <div className="container container-wrapper pt-4">
        <div className="card mb-3">
          <div className="card-body py-0 mt-2">
            <div className="d-flex">
              <div style={{ width: "5%" }}><i className="fa fa-fw fa-bullhorn"></i></div>
              <div style={{ width: "95%" }}><marquee className="m-0">Welcome to Robocube Tuition</marquee></div>
            </div>
          </div>
        </div>
        <div className="alert alert-info">
          <h5 className="font-weight-bold mb-2 mt-1">Booking a FREE remotely training</h5>
          <p className="mb-1"><a target="_blank" href="https://help.synorexcloud.com/book-an-appointment/">Book an Appointment <FontAwesomeIcon icon={faExternalLinkSquareAlt}/></a></p>
        </div>
        <div className="alert alert-warning">
          <h5 className="font-weight-bold mb-2 mt-1">FREE license actived!</h5>
          <p className="mb-1">The FREE version license is currently activated. Before you start, please subscribe to one of the <a href="https://synorexcloud.com/robocube-tuition/" target="_blank">plans <FontAwesomeIcon icon={faExternalLinkSquareAlt}/></a></p>
        </div>
        <div className="alert alert-warning">
          <h5 className="font-weight-bold mb-2 mt-1">Please complete your setup</h5>
          <p className="mb-2">These easy steps will help you take full advantage of your dashboard, turning all your paperwork with Robocube Tuition.</p>
          <a href="https://tuition.robocube.cloud/students/add?intro"><p className="mb-1">
            <FontAwesomeIcon icon={faTimesCircle} color='#dc3545'/> Create or import your students data <FontAwesomeIcon icon={faCaretSquareRight} color='#856404'/>
          </p></a><a href="https://tuition.robocube.cloud/classNamees/add?intro" style={{ color: "inherit !important" }}><p className="mb-1"><FontAwesomeIcon icon={faTimesCircle} color='#dc3545'/> Create your first className <FontAwesomeIcon icon={faCaretSquareRight} color='#856404'/></p></a><a href="https://tuition.robocube.cloud/students/list?intro" style={{ color: "inherit !important" }}><p className="mb-1"><FontAwesomeIcon icon={faTimesCircle} color='#dc3545'/> Setup student subscription tuition className <FontAwesomeIcon icon={faCaretSquareRight} color='#856404'/></p></a><a href="https://tuition.robocube.cloud/payment/add?intro" style={{ color: "inherit !important" }}><p className="mb-1"><FontAwesomeIcon icon={faTimesCircle} color='#dc3545'/> One click to generated receipt <FontAwesomeIcon icon={faCaretSquareRight} color='#856404'/></p></a>
        </div>

        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4 className="font-weight-bold mb-1">0</h4>
                <span className="d-block">Total Students (Active)</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4 className="font-weight-bold mb-1" id="outstanding_count">0</h4>
                <span className="d-block">Outstanding Students
                <a href="https://tuition.robocube.cloud/reports/outstanding_payment" target="_blank" className="ml-2">
                <FontAwesomeIcon icon={faSync} />
                </a></span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4 className="font-weight-bold mb-1">0</h4>
                <span className="d-block">New Students (This month)</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4 className="font-weight-bold mb-1">0</h4>
                <span className="d-block">Check In (Today)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card mb-3">
              <div className="card-body font-weight-bold pb-0">Monthly Joined</div>
              <div className="card-body">
                {/* <canvas id="chart-joined" height="180" width="360" style={{display: "block", boxSizing: "border-box", height: "144px", width: "288px"}}></canvas> */}
                {/* <canvas id="myChart" width="400" height="400"></canvas> */}
                <Chart/>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body font-weight-bold pb-2">What's News</div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush" id="append-news">
                  <li className="list-group-item">
                    <p className="mb-0 font-weight-bold">Robocube Tuition Upgrade <em className="float-right small text-muted">8 months ago</em></p>
                    <span className="text-muted d-block small text-truncateA" style={{ whiteSpace: "pre-wrap" }}>
                      Add Support Box Enable &amp; Disable Tab in “General” <br/>
                      Add Alphabet Sorting Function (Student Name) in “classNamees Attendance” <br/>
                      Add “Print without joined date” in “classNamees Attendance” <br/>
                      Separate Chinese &amp; English Name in Two Column - “Edit className” <br/>
                      Add Export to Excel in “Daily &amp; Monthly Collection Report” <br/>
                      Add “Date Options” in “Sales by Courses Report”
                    </span>
                  </li>

                  <li className="list-group-item">
                    <p className="mb-0 font-weight-bold">Robocube Tuition Upgrade <em className="float-right small text-muted">9 months ago</em></p>
                    <span className="text-muted d-block small text-truncateA" style={{ whiteSpace: "pre-wrap" }}>clone className
                      attendance dont show empty className<br/>
                      className cal total attendance<br/>
                      bulk delete student<br/>
                      view school className student list<br/>
                      fast add student to className</span>
                  </li>

                  <li className="list-group-item">
                    <p className="mb-0 font-weight-bold">Robocube Tuition Upgrade <em className="float-right small text-muted">10 months ago</em></p>
                    <span className="text-muted d-block small text-truncateA" style={{ whiteSpace: "pre-wrap" }}>- fix chat button padding size</span>
                  </li>

                  <li className="list-group-item">
                    <p className="mb-0 font-weight-bold">Robocube Tuition Upgrade <em className="float-right small text-muted">10 months ago</em></p>
                    <span className="text-muted d-block small text-truncateA" style={{ whiteSpace: "pre-wrap" }}>- live chat support
                      - remove whatsapp chat link <br/>
                      - fix monthly collection date<br/>
                      - add date column</span>
                  </li>

                  <li className="list-group-item">
                    <p className="mb-0 font-weight-bold">Robocube Tuition Upgrade <em className="float-right small text-muted">10 months ago</em></p>
                    <span className="text-muted d-block small text-truncateA" style={{ whiteSpace: "pre-wrap" }}>- std page print
                      - inactive std count dashboard<br/>
                      - new dashboard<br/>
                      - epoint balance check<br/>
                      - print receipt format check</span>
                  </li>
                </ul>
              </div>
            </div>


          </div>
          <div className="col-md-6 mb-3">
            <div className="row">
              <div className="col-md-4 mb-4">
                <a href="https://tuition.robocube.cloud/payment/list" className="btn btn-block btn-secondary py-3">
                  <FontAwesomeIcon icon={faMoneyCheckAlt}  width={'50px'} size={'2xl'}/>
                  <span className="d-block">Sales Payment</span>
                </a>
              </div>
              <div className="col-md-4 mb-4">
                <a href="https://tuition.robocube.cloud/students/add" className="btn btn-block btn-secondary py-3">
                  <FontAwesomeIcon icon={faUserGraduate} fixedWidth size={'2xl'} />
                  <span className="d-block">New Student</span>
                </a>
              </div>
              <div className="col-md-4 mb-4">
                <a href="https://tuition.robocube.cloud/classNamees/add" className="btn btn-block btn-secondary py-3">
                  <FontAwesomeIcon icon={faChalkboardTeacher} fixedWidth size={'2xl'} />
                  <span className="d-block">New Class</span>
                </a>
              </div>
              <div className="col-md-4 mb-4">
                <a href="https://tuition.robocube.cloud/calendar" className="btn btn-block btn-secondary py-3">
                  <FontAwesomeIcon icon={faCalendarAlt} fixedWidth size={'2xl'} />
                  <span className="d-block">Calendar</span>
                </a>
              </div>
              <div className="col-md-4 mb-4">
                <a href="https://tuition.robocube.cloud/content/add/announcement" className="btn btn-block btn-secondary py-3">
                  <FontAwesomeIcon icon={faBullhorn} fixedWidth size={'2xl'} />
                  <span className="d-block">New Ann.</span>
                </a>
              </div>
              <div className="col-md-4 mb-4">
                <a href="https://tuition.robocube.cloud/reports" className="btn btn-block btn-secondary py-3">
                  <FontAwesomeIcon icon={faChartPie} fixedWidth size={'2xl'} />
                  <span className="d-block">Reports</span>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body font-weight-bold pb-0">Birthday (This Month)</div>
              <div className="card-body px-0">
                <table className="table table-sm table-sm2 mb-0">
                  <thead>
                    <tr><th>Student</th>
                      <th>Birthday</th>
                    </tr></thead>
                  <tbody>
                    <tr><td className="text-center" colspan="2">No result found</td></tr>									</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header>
            <Modal.Title>Annoucement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            各位客户注意：
            <br /><br />
            我们很高兴地宣布，我们的新网站将于4月24日正式上线！我们的新网站将提供更好的用户体验，更方便地访问我们的服务。
            请注意，随着新网站的上线，我们的域名也将更改为一个新的链接，该更改将于4月24日生效。
            <br /><br />
            我们恳请所有客户相应地更新他们的书签和保存的链接。新的链接将为我们所有的客户提供更安全和更高效的体验。
            我们的支持团队可通过电子邮件 support@synorexcloud.com 或我们的右下角在线聊天功能随时为您提供帮助。
            <br /><br />
            感谢您的合作，我们期待为您在新网站上提供更好的体验！
            <br /><br />
            此致<br />
            Synorex<br />
            <br />
            <br />
            Hi there,
            <br /><br />
            We are excited to announce the launch of our new website on April 24th! Our new website will provide an improved user experience and easier access to our services. Please note that with the launch of our new website, our domain name will also change to a new link. This change will take effect on April 24th.
            <br /><br />
            We kindly ask all our clients to update their bookmarks and saved links accordingly. The new link will provide a more secure and efficient experience for all our clients. Our support team is available to assist you with any questions or concerns you may have. You can reach us via email at support@synorexcloud.com or through our Live Chat feature on the new website.
            <br /><br />
            Thank you for your cooperation and we look forward to providing you with an improved experience on our new website!
            <br /><br />
            Best regards,<br />
            Synorex
          </Modal.Body>
        </Modal>
      </div>

      <CopyRightFooter />
    </div >
  );
};

export default Dashboard;