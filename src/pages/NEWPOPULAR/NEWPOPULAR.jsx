import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Epicworld, Newrelease, Awardwinningtvshows, USfantasyTV, KoreanTVDramedies, criticallyacclaimedtvshow, TVTHRILLER } from "../Database/imagedatabase.jsx";
import { TVactiondndadventure, TVDRAMA, TOP10INDIA } from "../Database/imagedatabase.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./NEWPOPULAR.css"
import Navbar from "../Navbar/Navbar.jsx"
const mainimage = "https://i.postimg.cc/dV2gHsjW/king-and-zodiac.webp"
const title = "https://i.postimg.cc/RCnm1zyY/kings-and-zodiac-title.webp"
function NEWPOPULAR() {
    const scroll = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        border: "none"
    };
    return (
        <>
        <Navbar />
            <div className="container">
                <img src={mainimage} className="mainimage" alt="Main Image" />
                <img src={title} className="titleimage" alt="Title Image" />
                <p className="seriescontent">A street fighter discovers a world of mystical powers and ancient<br/>warriors as he trains to become the chosen guardian of a<br/>reincarnated goddess.</p>
                <button className="playbutton"><svg style={{ marginRight: "5px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Play" aria-labelledby=":R19kpt9llkm:" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>Play</button>
                <button className="moreinfobutton"><svg style={{ marginRight: "5px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="CircleI" aria-labelledby=":Rkqt9llkm:" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>More Info</button>
                <h4 className="censor">U/A 16+</h4>
            </div>
            <div className="secondintermediateNewpopular"></div>
            <div className="secondcontentNewpopular">
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">New Release</p>
                    <Slider {...scroll}>
                        {Newrelease.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">Top 10 TV Shows in India Today</p>
                    <Slider {...scroll}>
                        {TOP10INDIA.map((p) => (
                            <div className="card-container">
                                <div>
                                    <img className="cardvertical" src={p.imgtv} />
                                    <span>
                                        <img className="numbers" src={p.imgno} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">Epic World</p>
                    <Slider {...scroll}>
                        {Epicworld.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">Award-Winning TV Shows</p>
                    <Slider {...scroll}>
                        {Awardwinningtvshows.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">Top 10 Movies in India Today</p>
                    <Slider {...scroll}>
                        {TOP10INDIA.map((p) => (
                            <div className="card-container">
                                <div>
                                    <img className="cardvertical" src={p.imgmovie} />
                                    <span>
                                        <img className="numbers" src={p.imgno} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">US Fantasy TV</p>
                    <Slider {...scroll}>
                        {USfantasyTV.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">Korean TV Dramedies</p>
                    <Slider {...scroll}>
                        {KoreanTVDramedies.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">critically acclaimed tv show</p>
                    <Slider {...scroll}>
                        {criticallyacclaimedtvshow.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">TV Action and Adventure</p>
                    <Slider {...scroll}>
                        {TVactiondndadventure.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">TV DRAMA</p>
                    <Slider {...scroll}>
                        {TVDRAMA.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="box" style={{ paddingBottom: "50px" }}>
                    <p className="libheading">TV THRILLER</p>
                    <Slider {...scroll}>
                        {TVTHRILLER.map((p) => (
                            <div>
                                <img className="card" src={p.img} alt="Data Image" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="homefooter">
                    <div className="footericons">
                        <a href="https://www.facebook.com/NetflixIN/"><FontAwesomeIcon className="brandicon" icon={faFacebookF} style={{ color: "#ffffff", marginLeft: "310px" }} /></a>
                        <a href="https://www.instagram.com/Netflix_IN/"><FontAwesomeIcon className="brandicon" icon={faInstagram} style={{ color: "#ffffff", marginLeft: "40px" }} /></a>
                        <a href="https://twitter.com/netflixindia"><FontAwesomeIcon className="brandicon" icon={faTwitter} style={{ color: "#ffffff", marginLeft: "40px" }} /></a>
                        <a href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"><FontAwesomeIcon className="brandicon" icon={faYoutube} style={{ color: "#ffffff", marginLeft: "40px" }} /></a>
                    </div>
                    <div>
                        <a className="footerinfo1" href="">Audio Description</a>
                        <a className="footerinfo1" style={{ left: "560px" }} href="">Help Centre</a>
                        <a className="footerinfo1" style={{ left: "770px" }} href="">Gift Card</a>
                        <a className="footerinfo1" style={{ left: "1020px" }} href="">Media Centre</a><br />
                        <a className="footerinfo2" href="">Investor Relations</a>
                        <a className="footerinfo2" style={{ left: "560px" }} href="">Jobs</a>
                        <a className="footerinfo2" style={{ left: "770px" }} href="">Terms of Use</a>
                        <a className="footerinfo2" style={{ left: "1020px" }} href="">Privacy</a><br />
                        <a className="footerinfo3" href="">Legal Notices</a>
                        <a className="footerinfo3" style={{ left: "560px" }} href="">Cookie Preferences</a>
                        <a className="footerinfo3" style={{ left: "770px" }} href="">Corporate Information</a>
                        <a className="footerinfo3" style={{ left: "1020px" }} href="">Contact Us</a>
                    </div>
                    <div>
                        <button className="servicecodebtn">Service Code</button>
                    </div>
                    <div className="netflixyear">
                        <span>© 1997-2024 Netflix, Inc.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NEWPOPULAR;