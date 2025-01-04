import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../img/reviews-1.jpg';
import img2 from '../img/abhi.png';
import img3 from '../img/anand.jpg';
import img4 from '../img/krushna.jpg';
import img5 from '../img/vishal.jpg';
import img6 from '../img/rahul.jpg';
import img7 from '../img/sanket.jpg';

import './Reviews.css';
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
    return (
        <>
            <div className='section'>
                <h2>
                    What Clients Say
                </h2>
            </div>
            <Card className="bg-dark text-white position-relative">
                <Card.Img src={img1} alt="Card background" style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
                <div className="overlay"></div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                    <Carousel fade className="card-carousel" indicators={false} controls={false} interval={5000} pause={false}>
                        <Carousel.Item>
                            <img src={img2} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "I recently discovered Liqui-Vista, and it's now my go-to for top-notch liquors.
                                The selection is unmatched, and the service is impeccable. Fast shipping and
                                excellent packaging. Highly recommend!"
                            </h4>
                            <p>-- Abhi Bhangale --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img7} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                I'm very happy with my purchase. I got two pairs of Japan Blue denims that cannot be found in France any more.
                                Shipping was super fast. I definitely recommend buying from Liqui-Vista and can't wait to pay them
                                a visit when I get to go to Birmingham.
                            </h4>
                            <p>-- Sanket Narode --</p>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={img3} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "Reliability is key, and Liqui-Vista delivers. I've been a customer
                                for years, and they've consistently exceeded my expectations.
                                The range of options, reliability in delivery, and the dedication
                                to customer satisfaction make them my preferred choice."
                            </h4>
                            <p>-- Anand Patwari --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img4} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "Liqui-Vista is synonymous with luxury. Their selection of premium liquors
                                is unmatched. The attention to detail in sourcing exquisite brands and
                                delivering them to my doorstep makes every purchase feel like a celebration."
                            </h4>
                            <p>-- Krushna Ingale --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img5} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "I was impressed by Liquivista's attention to detail in packaging. My order arrived
                                quickly, and each bottle was securely wrapped, ensuring that everything arrived in perfect condition."
                            </h4>
                            <p>-- Vishal Dhakane --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img6} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "Navigating Liquivisa's website is a breeze. The layout is user-friendly, and the search function makes
                                it easy to find exactly what you're looking for. A hassle-free online shopping experience."
                            </h4>
                            <p>-- Rahul Munde --</p>
                        </Carousel.Item>
                    </Carousel>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default Reviews;
