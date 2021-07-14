import React from 'react'
import APIgrabber from './APIgrabber';

const Dashboard = () => {
    APIgrabber();
    return (
        <div>
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/main.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/bootstrap.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/bootstrap-responsive.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/font-awesome.min.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/clientarea.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/jquery.pnotify.default.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/progress-buttons.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/ca11_main.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/entypo.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/gap-icons.css" />
            {/*[if lt IE 7]>
            <link media="all" type="text/css" href="https://billing.time4vps.com/templates/design11/css/font-awesome-ie7.min.css" rel="stylesheet">
            <![endif]*/}
            {/*[if lt IE 9]>
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/templates/design11/css/ie8.css" />

            <![endif]*/}
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/includes/modules/Hosting/iv_vps/assets/css/ivvps_clientarea.css" />
            <link media="all" type="text/css" rel="stylesheet" href="https://billing.time4vps.com/includes/modules/Hosting/iv_vps/assets/css/asPieProgress.min.css" />
            <div>
            <div id="page" className="unfold">
                <div id="menu-shadow" />
                <aside id="main-side" className="pull-left not-cart">
                </aside>            
                <section id="main-section" className="not-cart cmd-clientarea" style={{minHeight: '497px'}}>
                <div className="container-fluid dashboard" id="ca11">
                    <header id="main-header" className="navbar">
                    <div className="navbar-inner">
                        <div className="container-fluid">
                        <a href className="brand"><img src="https://billing.time4vps.com/templates/design11//img/time4vps-logo.svg" alt="Time4VPS logo" style={{height: '55px', paddingBottom: '2px'}} /></a>
                        <a className="btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                            <i className="icon-cog" style={{paddingTop: '23px', display: 'inline-block'}} aria-hidden="true" />
                        </a>
                        <div className="nav-collapse collapse navbar-responsive-collapse">
                            <ul className="nav pull-right">
                            <li>
                            </li>
                            <li className="dropdown">
                                <ul className="dropdown-menu notifications-drop" role="menu">
                                <li className="notifications-drop-showall"><a tabIndex={-1} href="clientarea/portal_notifications/">Show all</a></li>
                                <li className="divider" />
                                </ul>
                            </li>
                            <li className="dropdown" id="loig-in-point">
                            </li>
                            <li>
                                <a href="?action=logout" rel="tooltip" data-toggle="tooltip" title data-placement="bottom" data-original-title="Logout">
                                <i className="icon-sign-out" style={{paddingTop: '23px', display: 'inline-block'}} aria-hidden="true" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </header>
                    <div className="row-fluid" style={{overflow: 'hidden'}} id="main_row">
                    <div className="span10" id="left_content">
                        <div className="content-wrapper"><div className="spacing"><article>
                            <div id="client_menu">
                                <div className="span3">
                                <ul>
                                    <li className="active">
                                    <a href="/">
                                        <i className="icon icon-ClipboardText" />
                                        <span>Service Details</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/ResetPassword">
                                        <i className="icon icon-Pulse" />
                                        <span>
                                        Reset Password
                                        </span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/Hostname">
                                        <i className="icon icon-File" />
                                        <span>
                                        Change Hostname
                                        </span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/Reinstall">
                                        <i className="icon icon-Settings" />
                                        <span>
                                        Reinstall OS
                                        </span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/Reboot">
                                        <i className="icon icon-Restart" />
                                        <span>
                                        Server Reboot
                                        </span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/Console">
                                        <i className="icon icon-DesktopMonitor" />
                                        <span>
                                        Emergency Console
                                        </span>
                                    </a>
                                    </li>
                                </ul>
                                </div>
                                <section id="cmenu_content" className="span9">
                                <div className="cmenu_header"><span>Details</span></div>
                                <div className="spacing">
                                    <div className="spacingx">
                                    </div>
                                    <div className="tab-content no-overflow">
                                    <div className="tab-pane fade active in" id="management">
                                        <div id="ivvps_clientarea">
                                        <div>
                                            <table className="checker table table-striped" width="100%">
                                            <tbody><tr>
                                                <td className="product-heading">Product/Service</td>
                                                <td>Linux VPS - <small>Linux 2</small></td>
                                                </tr>
                                                <tr>
                                                <td className="product-heading">Label</td>
                                                <td><span>none (<a href="clientarea/services/linux-vps/159349/label">Edit Label</a>)</span><br /></td>
                                                </tr>
                                                <tr>
                                                <td className="product-heading">Hostname</td>
                                                <td><a href="http://3eyd.l.time4vps.cloud" target="_blank">3eyd.l.time4vps.cloud</a></td>
                                                </tr>
                                                <tr>
                                                <td className="product-heading">Node</td>
                                                <td>k4-b6-lt1</td>
                                                </tr>
                                                <tr>
                                                <td className="product-heading">Specs</td>
                                                <td>
                                                    <ul className="specs">
                                                    <li><span>OS:</span> <strong>Ubuntu 20.04 (64-bit)</strong>
                                                    </li>
                                                    <li><span>Processor:</span> <strong>1 x 2.6 GHz</strong></li>
                                                    <li><span>Memory:</span> <strong>2048 MB</strong></li>
                                                    <li><span>Storage:</span> <strong>20 GB </strong></li>
                                                    <li><span>Bandwidth:</span> <strong>100 Mbps (Monthly limit: 4 TB)</strong></li>
                                                    <a href="/clientarea/services/vps/159349/&make=upgrades&upgradetarget=service"><small>Upgrade / Downgrade</small></a>
                                                    </ul>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td className="product-heading">Components</td>
                                                <td>
                                                    <a href="clientarea/services/linux-vps/159349/&make=upgrades&upgradetarget=config" className="lmore">Upgrade</a>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td className="product-heading">Backups</td>
                                                <td>
                                                    <a href="/clientarea/services/vps/159349/&make=upgrades&upgradetarget=config">Order now</a>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td className="product-heading">IP(s)</td>
                                                <td style={{padding: 0}}>
                                                    <table className="checker table ip-table" width="100%">
                                                    <tbody><tr>
                                                        <td className="ip-version"><code>IPv4</code></td>
                                                        <td className="ip-address text-center">79.98.29.178</td>
                                                        <td><small className="text-muted">Main IP</small></td>
                                                        </tr>
                                                        <tr>
                                                        <td className="ip-version"><code>IPv4</code></td>
                                                        <td className="ip-address text-center">
                                                            10.98.29.178
                                                        </td>
                                                        <td>
                                                            <small className="text-muted">Local IP</small>
                                                        </td>
                                                        </tr>
                                                        <tr>
                                                        <td className="ip-version"><code>IPv6</code></td>
                                                        <td className="ip-address text-center">
                                                            2a02:7b40:4f62:1db2::1
                                                            <small className="text-muted">(3eyd.l.time4vps.cloud)</small>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        </tr>
                                                        
                                                    </tbody></table>
                                                </td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                        <div className="row">
                                            <div className="span12">
                                            <h2 className="text-center">Usage</h2>
                                            </div>
                                        </div>
                                        <div className="usage-row" style={{marginBottom: '20px'}}>
                                            <div className="usage-row-dial">
                                            <h4 className="text-center">RAM</h4>
                                            <div className="pieProgress pie_progress" role="progressbar" data-goal={73.0} aria-valuemin={0} data-step={1} aria-valuemax={100} aria-valuenow={73}>
                                                <div className="pie_progress__number">73%</div>
                                                <div className="pie_progress__label">1495 MB / 2048 MB</div>
                                                <div className="pie_progress__svg"><svg version="1.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 70 70"><ellipse rx={33} ry={33} cx={35} cy={35} stroke="#f2f2f2" fill="none" strokeWidth={4} /><path fill="none" strokeWidth={4} stroke="#ed1c24" d="M35,2 A33,33 0 1 1 2.260214856622234,39.13599670762205" style={{strokeDasharray: '151.38px, 151.38px', strokeDashoffset: '0px'}} /></svg></div></div>
                                            </div>
                                            <div className="usage-row-dial">
                                            <h4 className="text-center">Storage</h4>
                                            <div className="pieProgress pie_progress" role="progressbar" data-goal="19.9" aria-valuemin={0} data-step={1} aria-valuemax={100} aria-valuenow="19.9">
                                                <div className="pie_progress__number">20%</div>
                                                <div className="pie_progress__label">4.0 GB / 20 GB</div>
                                                <div className="pie_progress__svg"><svg version="1.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 70 70"><ellipse rx={33} ry={33} cx={35} cy={35} stroke="#f2f2f2" fill="none" strokeWidth={4} /><path fill="none" strokeWidth={4} stroke="#ed1c24" d="M35,2 A33,33 0 0 1 66.32017278467973,24.60544485137494" style={{strokeDasharray: '41.2631px, 41.2631px', strokeDashoffset: '0px'}} /></svg></div></div>
                                            </div>
                                            <div className="usage-row-dial">
                                            <h4 className="text-center">Bandwidth</h4>
                                            <div className="pieProgress pie_progress" role="progressbar" data-goal={0.0} aria-valuemin={0} data-step={1} aria-valuemax={100} aria-valuenow={0}>
                                                <div className="pie_progress__number">0%</div>
                                                <div className="pie_progress__label">0.001 TB / 4 TB
                                                </div>
                                                <div className="pie_progress__svg"><svg version="1.1" preserveAspectRatio="xMinYMin meet" viewBox="0 0 70 70"><ellipse rx={33} ry={33} cx={35} cy={35} stroke="#f2f2f2" fill="none" strokeWidth={4} /><path fill="none" strokeWidth={4} stroke="#ed1c24" d="M35,2 A33,33 0 0 1 35,2" style={{strokeDasharray: '0px, 0px'}} /></svg></div></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="span12">
                                            <p className="text-center">This information is not in real time. For more precise information please see <a href="https://billing.time4vps.com/clientarea/services/linux-vps/159349/&widget=ivvps_accountgraphs&wid=926">Server Usage Graphs</a>.</p>
                                            </div>
                                        </div>
                                        </div>                                </div>
                                    <div className="tab-pane fade in" id="billing">
                                        <h4>Service Details</h4>
                                        <table className="table table-striped table-aff-center p-top">
                                        <tbody><tr>
                                            <td className="w30 bold">Domain</td>
                                            <td className="bold">
                                                <a href="http://3eyd.l.time4vps.cloud" target="_blank" className="roll-link">
                                                <span data-title="3eyd.l.time4vps.cloud">3eyd.l.time4vps.cloud</span>
                                                </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="w30 bold">Label</td>
                                            <td className="bold">
                                                <span className="label label-Active"><a href="clientarea/services/linux-vps/159349/label">Edit Label</a></span>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="w30 bold">Status</td>
                                            <td><span className="label flat-ui-label label-Active">Active</span></td>
                                            </tr>
                                            <tr>
                                            <td className="w30 bold">Registration Date</td>
                                            <td>2021-07-08</td>
                                            </tr>
                                            <tr>
                                            <td className="w30 bold">First Payment Amount</td>
                                            <td>11.97 EUR</td>
                                            </tr>
                                            <tr>
                                            <td className="w30 bold">Recurring Amount</td>
                                            <td>11.97 EUR </td>
                                            </tr>
                                            <tr>
                                            <td className="w30 bold">Next Due Date</td>
                                            <td>2021-10-08</td>
                                            </tr>
                                            <tr>
                                            <td className="w30 bold">Billing Cycle</td>
                                            <td>Quarterly</td>
                                            </tr>
                                        </tbody></table>                      </div>
                                    <table className="table table-striped">
                                    </table>
                                    <div className="tab-pane fade in" id="addons">
                                        <div className="separator-line" />
                                        <h3>Account Addons</h3>
                                        <table className="table table-striped p-top">
                                        <tbody><tr>
                                            <th className="w30">Addon</th>
                                            <th>Price</th>
                                            <th>Next Due Date</th>
                                            <th>Status</th>
                                            </tr>
                                            <tr>
                                            <td colSpan={4}>Nothing to display</td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                    </div>
                                </div>
                                {/* tab end */}
                                </section>
                            </div>
                            </article>
                        </div></div>                      </div> {/* /row */}
                    </div> {/* /row */}
                </div>{/* /container-fluid */}
                </section>{/* /#main-section */}
                <div id="section-border">
                </div>
            </div>
            <iframe style={{display: 'none', position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} name="__uspapiLocator" tabIndex={-1} role="presentation" aria-hidden="true" title="Blank" /><iframe style={{position: 'absolute', width: '1px', height: '1px', top: '-9999px'}} tabIndex={-1} role="presentation" aria-hidden="true" title="Blank" src="https://consentcdn.cookiebot.com/sdk/bc-v3.min.html" /><iframe id="intercom-frame" style={{position: 'absolute !important', opacity: '0 !important', width: '1px !important', height: '1px !important', top: '0 !important', left: '0 !important', border: 'none !important', display: 'block !important', zIndex: '-1 !important', pointerEvents: 'none'}} aria-hidden="true" tabIndex={-1} title="Intercom" />
            </div>
        </div>
    )
}

export default Dashboard
