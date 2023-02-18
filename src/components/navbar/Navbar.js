import React from 'react';
import './navbar.scss';
import logo from '../../assets/logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Mousewheel } from "swiper";

export default function Navbar() {
    return (
        <div className='navbar-content'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"><img src={logo} /></a>
                    <form className="d-flex search1" role="search">
                        <input className="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                        <i className="bi bi-search"></i>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className='sigin'>
                                <a className="nav-link active" href="#"><i className="bi bi-person-circle"></i>Sign In / Sign Up</a>
                            </li>
                        </ul>
                    </div>
                    <div className='cart'>
                        <i class="bi bi-cart"></i>
                    </div>
                </div>
            </nav>
            <Swiper className="nav second-nav"
             slidesPerView={3}
             spaceBetween={10}
             breakpoints={{
             640: {
                 slidesPerView: 3,
                 spaceBetween: 10,
             },
             768: {
                 slidesPerView: 6,
                 spaceBetween: 10,
             },
             1024: {
                 slidesPerView: 7,
                 spaceBetween: 0,
             },
             }}
             mousewheel={true}
             modules={[Mousewheel]}>
                <SwiperSlide className="nav-link active" aria-current="page" href="#"><i class="bi bi-list"></i>Category</SwiperSlide>
                <SwiperSlide className="nav-link" href="#">Perfume Fiesta</SwiperSlide>
                <SwiperSlide className="nav-link" href="#">Back to School</SwiperSlide>
                <SwiperSlide className="nav-link" href="#">Pre-Owned Products</SwiperSlide>
                <SwiperSlide className="nav-link" href="#">Saver Zone</SwiperSlide>
                <SwiperSlide className="nav-link" href="#">Deal of The Day</SwiperSlide>
                <SwiperSlide className="nav-link" href="#" style={{ background: '#FFDB27' }}>Tech Mania</SwiperSlide>
            </Swiper>

            <nav aria-label="breadcrumb" style={{marginTop: "1rem"}} className='second-nav'>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item" aria-current="page">Mobiles & Tablets</li>
                </ol>
            </nav>
            <div className='bottom' style={{display: "none"}}>
                <div className='saver'>
                    <i class="bi bi-lightbulb"></i>
                    <p>Saver Zone</p>
                </div>
                <div className='deal'>
                    <i class="bi bi-alarm"></i>
                    <p>Deal of the Day</p>
                </div>
                <div className='cart'>
                    <i class="bi bi-cart"></i>
                    <p>Cart</p>
                </div>
            </div>
        </div>
    )
}
