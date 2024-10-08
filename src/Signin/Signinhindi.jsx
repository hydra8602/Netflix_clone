import React, { useState,useEffect } from 'react';
import "./Signin.css";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function Signin() {
    const [username, setUsername] = useState('sid');
    const [password, setPassword] = useState('123');

    const nextpage = () => {
        if (username === "sid" && password === "123") {
            window.alert("Login Success");
            window.location = "/HOME";
        } else {
            window.alert("Invalid Username or Password");
        }
    };

    const changetoenglish = () => {
        // Navigate to the next page
        window.location = "/sign";
    }
    useEffect(() => {
        // Navigate to the next page if the current page is being unloaded
        window.onunload = () => {
            window.location.href = "/sign";
        };
    }, []);

    const googlerecaptcha = () => {
        document.getElementById("captchainfo").innerHTML = "<br/>The information collected by Google reCAPTCHA is<br/>subject to the Google <a className='googlelinks' href='https://policies.google.com/privacy'>Privacy Policy</a> and <a className='googlelinks' href='https://policies.google.com/terms'>Terms of Service</a>, and is used for providing, maintaining, and improving<br/>the reCAPTCHA service and for general<br/>security purposes (it is not used for personalised<br/>advertising by Google).";
        document.getElementById("captchainfo").style.color = "#8C8C8C";
    };

    return (
        <>
            <div className="header netflix">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.72em" height="1em" viewBox="0 0 512 138"><path fill="#ff0011" d="M340.657 0v100.203c12.36.575 24.687 1.27 36.98 2.09v21.245a1822.444 1822.444 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789.409 1789.409 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1815.88 1815.88 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848.195 1848.195 0 0 1 38.331-2.62v21.247a1815.638 1815.638 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96c-7.882.81-15.75 1.673-23.603 2.584L21.56 59.824v74.802a1834.87 1834.87 0 0 0-21.561 2.936V.012H20.49zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78" /></svg>
            </div>
            <div className="mainarea">
                <div className='mainareainner'>
                    <h1 className='signinmain'>साइन इन करें</h1>
                    <input className='input' type='textbox' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='ईमेल या फ़ोन नंबर' /><br /><br />
                    <input className='input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='पासवर्ड' /><br /><br />
                    <button className='signinbutton' onClick={nextpage}>साइन इन करें</button>
                    <p style={{ textAlign: "center", padding: "5px" }}>या</p>
                    <button className='signincodebutton'>साइन-इन कोड का इस्तेमाल करें</button><br />
                    <a href='#' className='forgetpassword'><p style={{ textAlign: "center" }}>पासवर्ड भूल गए?</p></a>
                    <input type="checkbox" id="myCheckbox" className="customcheckbox" />
                    <label style={{ marginLeft: "75px" }} htmlFor="myCheckbox">याद रखें</label>
                    <p style={{ marginLeft: "75px", color: "rgba(255,255,255,0.7)" }}>Netflix पर नए हैं?<Link to="/"><a href='#' className='signupnow'>अभी साइन अप करें</a></Link></p>
                    <span className='googlerecaptcha'>यह पक्का करने के लिए कि आप बॉट नहीं हैं, यह पेज Google <br /><span style={{ marginLeft: "75px" }}>reCAPTCHA द्वारा सुरक्षित है.</span><button onClick={googlerecaptcha} className='learnmorebutton'>और जानें.</button></span>
                    <span id="captchainfo"></span>
                </div>
            </div>
            <div className='footer'>
                <div className='footermsg'>
                    <div><p className='phnumber'>कोई सवाल है?</p></div>
                    <div><a className='phnumber' href="">000-800-919-1694</a></div>
                    <div><p>पर कॉल करें</p></div>
                </div>
                <div className='footerlinks'>
                    <div className='links1'><a href="">FAQ</a></div>
                    <div className='links1'><a href="">सहायता केंद्र</a></div>
                    <div className='links1'><a href="">उपयोग की शर्तें</a></div>
                    <div className='links1'><a href="">प्रायवेसी</a></div>
                </div>
                <div className='footerlinks2'>
                    <div className='links2'><a href="">कुकी प्रेफ़रेंस</a></div>
                    <div className='links2'><a href="">कॉरपोरेट जानकारी</a></div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle Dropdownedited" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="Languages" aria-labelledby=":R26aqkqela9:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>हिन्दी
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" onClick={changetoenglish} href="#">English</a></li>
                        <li><a class="dropdown-item"  href="#">हिन्दी</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Signin;