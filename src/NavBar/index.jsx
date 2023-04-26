import { faBars, faBuilding, faHome, faQuestionCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
// import { connect } from 'react-redux'
import { Link } from "react-router-dom";

export const NavBar = ( { handleSideBar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ padding: "2px 1rem" }}>
            <a className="navbar-brand mr-4" href="javascript:void(0)"  onClick={(event) => handleSideBar(event)} ><FontAwesomeIcon icon={faBars} /></a>

            <a className="navbar-brand font-weight-boldA" href="https://tuition.robocube.cloud/">
                {/* <img src="https://cdn.synorex.link/assets/images/robocube/tuition.png" style="height: 38px;" className="mr-1"> */}

                <Link to="/"><img src={"https://cdn.synorex.link/assets/images/robocube/tuition.png"} height={"38px"} className="mr-1" alt="Logo" /></Link>

                <span className="small">Robocube Tuition</span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <FontAwesomeIcon icon={faUsers} />
            </button>

            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown" data-title="Branches" data-intro="You can switch the system of different branches here">
                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">
                            <FontAwesomeIcon icon={faBuilding} /> Hanyi test                </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <h6 className="dropdown-header">RECENT</h6>
                            <a className="dropdown-item" href="https://tuition.robocube.cloud/home/branch_access/168190031021"><FontAwesomeIcon icon={faBuilding} /> Hanyi test</a>                    <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-primary text-center" style={{ backgroundColor: "inherit !important" }} href="https://tuition.robocube.cloud/branches/list">All Branches</a>
                        </div>
                    </li>

                </ul>
                <ul className="navbar-nav ml-auto">


                    <li className="nav-item dropdown my-auto d-none d-md-inline-block" data-title="Synorex ONE" data-intro="Click here to return to the Robocube License portal">
                        <a className="nav-link mr-1" href="https://account.robocube.cloud/" target="_blank" data-toggle="tooltip" title="" data-original-title="Apps"><FontAwesomeIcon style={{ fontSize: "1.25rem" }} icon={faHome}/></a>
                    </li>

                    <li className="nav-item dropdown my-auto d-none d-md-inline-block" data-title="Help &amp; Support" data-intro="Click here to view the system manual and ask for help">
                        <a className="nav-link mr-1" href="http://help.synorexcloud.com/" target="_blank" data-toggle="tooltip" title="" data-original-title="Help &amp; Support">
                        <FontAwesomeIcon style={{ fontSize: "1.25rem" }} icon={faQuestionCircle}/></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link py-0" href="javascript:void(0)" data-toggle="dropdown"><img src={"https://cdn.synorexcloud.com/assets/images/icons/avatar.svg"} style={{ height: "35px" }} /></a>
                        <div className="dropdown-menu dropdown-menu-right mt-3" style={{ minWidth: "300px" }}>
                            <div className="container text-center py-3">
                                <img src={"https://cdn.synorexcloud.com/assets/images/blank/1x1.jpg"} style={{ width: "35%" }} className="d-block mx-auto mb-3 border rounded-circle" />
                                <h6 className="mb-1">hanyikoh</h6>
                                <p className="mb-2 small text-muted">60183758138</p>
                                <p className="mb-0 small">
                                    <a href="https://one.synorexcloud.com/client/account?pg=profile" target="_blank" className="btn btn-sm btn-light btn-block">My Account</a>
                                    <a href="https://tuition.robocube.cloud/auth/logout" className="btn btn-sm btn-light text-danger btn-block">Logout</a>
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* <!--<li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">Hi, hanyikoh</a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="https://tuition.robocube.cloud/auth/profile"><i className="fa fa-fw mr-2 fa-user"></i> Profile</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="https://tuition.robocube.cloud/auth/logout"><i className="fa fa-fw mr-2 fa-sign-out-alt"></i> Logout</a>
                        </div>
                    </li>--> */}

                </ul>
                {/* <!--<ul className="navbar-nav ml-auto">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown">Hi, hanyikoh</a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="https://tuition.robocube.cloud/auth/profile"><i className="fa fa-fw mr-2 fa-user"></i> Profile</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="https://tuition.robocube.cloud/auth/logout"><i className="fa fa-fw mr-2 fa-sign-out-alt"></i> Logout</a>
                        </div>
                    </li>

                </ul>--> */}
            </div>
        </nav >
    )
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

export default NavBar;