import React, { useEffect, useState } from 'react';
import main from '../../assets/main.png';
import './main.scss';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/image114.png'
import img2 from '../../assets/image114-1.png'
import img3 from '../../assets/image114-2.png'
import img4 from '../../assets/image114-3.png'
import img5 from '../../assets/image114-4.png'
import img6 from '../../assets/image114-5.png'
import img7 from '../../assets/image114-6.png'
import img8 from '../../assets/image114-7.png'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
// import required modules
import { Navigation, Mousewheel } from "swiper";

export default function Main() {

    const [cat, setCat] = useState([]);
    const [deal, setDeal] = useState([]);
    const [phone, setPhone] = useState([]);
    const [mobacc, setMobacc] = useState([]);
    const [photoacc, setPhotoacc] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/subcat")
        .then(res => {
            setCat(res.data)
            console.log(process.env.PUBLIC_URL);
        })
        .catch(err => {
            console.log(err);
        })
        axios.get("http://localhost:8081/hotdeals")
        .then(res => {
            setDeal(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        axios.get("http://localhost:8081/phones")
        .then(res => {
            setPhone(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        axios.get("http://localhost:8081/mobile-acc")
        .then(res => {
            setMobacc(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        axios.get("http://localhost:8081/photo-acc")
        .then(res => {
            setPhotoacc(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className='main'>
            <div>
                <img style={{width: "-webkit-fill-available"}} src={main} />
            </div>
            <div className='subcategory'>
                <h3 style={{marginBottom: "1rem"}}>Sub Category</h3>
                <div className='category sub'>
                <Swiper slidesPerView={2}
                        spaceBetween={30}
                        breakpoints={{
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            648: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 20,
                            },
                        }}
                        mousewheel={true}
                        modules={[Mousewheel]}
                        className="mySwiper">
                    {
                        cat.map(data => {
                            return (
                                <SwiperSlide>
                                    <div key={data.id}>
                                        <img src={data.image}  />
                                        <h6>{data.title}</h6>
                                    </div>
                                </SwiperSlide>  
                            )
                        })
                    }
                </Swiper>
                </div>
            </div>
            <div className='subcategory'>
                <h3 style={{marginBottom: "1rem"}}>Hot Deals</h3>
                <div class="card-deck category">
                <Swiper slidesPerView={2}
                                // centeredSlides={true}
                                spaceBetween={30}
                                grabCursor={true}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                mousewheel={true}
                                modules={[Mousewheel]}>
                    {
                        deal.map(data => {
                            return (
                                <SwiperSlide>
                                <div className="card" key={data.id}>
                                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                                    <div className='time'>{data.time}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <span className='price'>{data.price}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button class="btn btn-outline-danger">Add to Cart</button>
                                    </div>
                                </div>
                                </SwiperSlide>  

                            )
                        })
                    }
                    </Swiper>
                </div>
            </div>
            <div className='subcategory'>
                <h3 style={{marginBottom: "1rem"}}>TOP BRANDS</h3>
                <Swiper className="buttons mySwiper"
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                    }}
                    mousewheel={true}
                    modules={[Mousewheel]}
                >
                    <SwiperSlide className="brand"><img src={img1}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img2}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img3}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img4}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img5}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img6}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img7}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img8}/></SwiperSlide>
                </Swiper>
                <Swiper className="buttons sec mySwiper"
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                    }}
                    mousewheel={true}
                    modules={[Mousewheel]}
                >
                    <SwiperSlide className="brand"><img src={img1}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img2}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img3}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img4}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img5}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img6}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img7}/></SwiperSlide>
                    <SwiperSlide className="brand"><img src={img8}/></SwiperSlide>
                </Swiper>
                </div>
            {/* /</div> */}
            <div className='phone'>
                <div className='title'>
                    <h3>Mobile Phones</h3>
                    <button>View All</button>
                </div>
                <Swiper className='content mySwiper'
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        648: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}>
                    {
                        phone.map(data => {
                            return (
                                <SwiperSlide className="card category" key={data.id}>
                                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                                    <h5 class="card-title">{data.title}</h5>
                                    <div class="card-body">
                                        <span className='price'>{data.price}</span>
                                        <span className='cutprice'>{data.cutPrice}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button class="btn btn-outline-danger">15% off</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className='phone'>
                <div className='title'>
                    <h3>Mobile Accessories</h3>
                    <button>View All</button>
                </div>
                <Swiper className='content mySwiper'
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        648: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}>
                    {
                        mobacc.map(data => {
                            return (
                                <SwiperSlide className="card category" key={data.id}>
                                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                                    <h5 class="card-title">{data.title}</h5>
                                    <div class="card-body">
                                        <span className='price'>{data.price}</span>
                                        <span className='cutprice'>{data.cutPrice}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button class="btn btn-outline-danger">15% off</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className='phone'>
                <div className='title'>
                    <h3>Mobile Photography Accessories</h3>
                    <button>View All</button>
                </div>
                <Swiper className='content mySwiper'
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        648: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}>
                    {
                        photoacc.map(data => {
                            return (
                                <SwiperSlide className="card category" key={data.id}>
                                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                                    <h5 class="card-title">{data.title}</h5>
                                    <div class="card-body">
                                        <span className='price'>{data.price}</span>
                                        <span className='cutprice'>{data.cutPrice}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button class="btn btn-outline-danger">15% off</button>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
