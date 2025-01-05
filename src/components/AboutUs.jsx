/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navigationbar } from './Navigationbar';
import munot from '../img/munot-pic.png';
import mehul from '../img/mehul.jpg';
import backimg from '../img/video (1080p).mp4'
import { Container } from "react-bootstrap";
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


export function AboutUs() {
    return (
        <>
            <Navigationbar></Navigationbar>
            <section className="section-white mt-5">
                <div className="container text-center">
                    <h1>About Us</h1>
                    <p>Who are we</p>
                    <Container>
                        <h5>We are a group of modern stores that offer our customers access to vast selection of spirits,
                            Wines and beers from the four corners of the globe. With over 1500 brands, Our library stocks
                            and support local brands as well as international brands ranging from popular well-known labels
                            to rarest find liquors in India. We pride ourselves on stocking a vast and curated selection of liquor,
                            wine and beer, and if we don’t have something you’re looking for, our team will work to stock it..
                        </h5>
                        <h5>
                            With a legacy of over three decades, we have the credibility and experience to understand your demands
                            and help you find that ideal bottle you are looking for. Whether you are looking for a single bottle,
                            few bottles for any occasion or corporate orders, we got you covered. Your one stop shop for all your alcohol needs.
                        </h5>
                    </Container>
                </div>
            </section>
            <video
              className="bck-img mt-4"
              style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
              autoPlay
              loop
              muted
            >
              <source src={backimg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <section className="section-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title">Meet the Founder</h2>
                            <p className="section-subtitle mt-3">
                                Embark on a journey with the visionaries behind our brand. Our founders are dedicated to enriching your experience with a curated selection of exceptional artworks.
                            </p>
                        </div>

                        

                        <section id="about" className="about-section mt-5 mb-3">
                            <div className="container">
                                <div className="row">

                                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5 md-5">
                                        <div className="about-text">
                                            <h1>Munot Gadale</h1>

                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi nemo incidunt quisquam quos, nam voluptate tempora suscipit odio a? Ex vel quisquam recusandae reiciendis asperiores minima, porro nisi consequatur.</h5>
                                            <div className="item-social mt-4">
                                                <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>

                                                <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>

                                                <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </a>

                                                <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-mf-12 col-12">
                                        <div className="about-img">
                                            <img src={munot} alt="" className="img-fluid hover-effect" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-white mt-5">
                <div className="container">
                    <div className="row">
                        <section id="about" className="about-section mt-5 mb-3">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-4 col-mf-12 col-12">
                                        <div className="about-img">
                                            <img src={mehul} alt="" className="img-fluid hover-effect" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5 md-5">
                                        <div className="about-text">
                                            <h1>Mehul Bhole</h1>

                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi nemo incidunt quisquam quos, nam voluptate tempora suscipit odio a? Ex vel quisquam recusandae reiciendis asperiores minima, porro nisi consequatur.</h5>
                                            <div className="item-social mt-4">
                                                <a href="https://www.linkedin.com/in/mehul-bhole-062923195/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>

                                                <a href="https://www.linkedin.com/in/mehul-bhole-062923195/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>

                                                <a href="https://www.linkedin.com/in/mehul-bhole-062923195/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </a>

                                                <a href="https://www.linkedin.com/in/mehul-bhole-062923195/" style={{ textDecoration: 'none' }}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </section>

                    </div>
                </div>
            </section>


        </>
    );
}