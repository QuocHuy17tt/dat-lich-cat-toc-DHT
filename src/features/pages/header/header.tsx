import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectLoginState, setToken } from "../../auth/login/loginSlice";
import { Link, useNavigate } from 'react-router-dom';

export type tabPage = {
    tab: string
}

export const Header: React.FC<tabPage> = ({tab}) => {
    const dispatch = useAppDispatch();
    const Account = localStorage.getItem("Account");
    let navigate = useNavigate();
    return (
        <>
        <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
            <div className="navbar-brand header-logo">
                <a href="index.html" className="b-brand">
                    <div className="b-bg">
                        <i className="feather icon-trending-up"></i>
                    </div>
                    <span className="b-title">Tiệm tóc DHT</span>
                </a>
                <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div>
            <div className="navbar-content scroll-div">
                <ul className="nav pcoded-inner-navbar">
                    <li className="nav-item pcoded-menu-caption text-left">
                        <label>MENU</label>
                    </li>
                    <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className={tab=== "home" ? "nav-item active" : "nav-item"}>
                        <Link to="/" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></Link>
                    </li>
                    <li className="nav-item pcoded-menu-caption text-left">
                        <label>Tạo người dùng</label>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" className={tab=== "signin" ? "nav-item active" : "nav-item"}>
                        <Link to ="/create" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Đăng ký</span></Link>
                    </li>
                    <li className="nav-item pcoded-menu-caption text-left">
                        <label>QUẢN LÝ</label>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" className={tab=== "service" ? "nav-item active" : "nav-item"}>
                        <Link to ="/service" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Dịch vụ</span></Link>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" className={tab=== "gallery" ? "nav-item active" : "nav-item"}>
                        <Link to ="/gallery" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Bộ sưu tập</span></Link>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" className={tab=== "blog" ? "nav-item active" : "nav-item"}>
                        <Link to ="/blog" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Bài viết</span></Link>
                    </li>
                    <li data-username="form elements advance componant validation masking wizard picker select" className={tab=== "account" ? "nav-item active" : "nav-item"}>
                        <Link to ="/account" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Tài khoản</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="navbar pcoded-header navbar-expand-lg navbar-light px-0">
        <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
            <a href="index.html" className="b-brand">
                   <div className="b-bg">
                       <i className="feather icon-trending-up"></i>
                   </div>
                   <span className="b-title">Datta Able</span>
               </a>
        </div>
        <a className="mobile-menu" id="mobile-header" href="javascript:">
            <i className="feather icon-more-horizontal"></i>
        </a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li><a href="javascript:" className="full-screen" ><i className="feather icon-maximize"></i></a></li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown">Dropdown</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="javascript:">Action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Another action</a></li>
                        <li><a className="dropdown-item" href="javascript:">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <div className="main-search">
                        <div className="input-group">
                            <input type="text" id="m-search" className="form-control" placeholder="Search . . ."/>
                            <a href="javascript:" className="input-group-append search-close">
                                <i className="feather icon-x input-group-text"></i>
                            </a>
                            <span className="input-group-append search-btn btn btn-primary">
                                <i className="feather icon-search input-group-text"></i>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li>
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="javascript:" data-toggle="dropdown"><i className="icon feather icon-bell"></i></a>
                        <div className="dropdown-menu dropdown-menu-right notification">
                            <div className="noti-head">
                                <h6 className="d-inline-block m-b-0">Notifications</h6>
                                <div className="float-right">
                                    <a href="javascript:" className="m-r-10">mark as read</a>
                                    <a href="javascript:">clear all</a>
                                </div>
                            </div>
                            <ul className="noti-body">
                                <li className="n-title">
                                    <p className="m-b-0">NEW</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>New ticket Added</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="n-title">
                                    <p className="m-b-0">EARLIER</p>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>Prchace New Theme and make payment</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="notification">
                                    <div className="media">
                                        <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/>
                                        <div className="media-body">
                                            <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                            <p>currently login</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="noti-footer">
                                <a href="javascript:">show all</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown drp-user">
                        <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon feather icon-settings"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-notification">
                            <div className="pro-head">
                                <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image"/>
                                <span>{Account}</span>
                                <button  className=" btn dud-logout" title="Logout" onClick={() => {
                                    dispatch(setToken(''));
                                    sessionStorage.removeItem("token");
                                    localStorage.removeItem("Account");
                                    navigate("/",{replace:true});
                                    window.location.reload();
                                }}>
                                    <i className="feather icon-log-out"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>
    </>
    )
}