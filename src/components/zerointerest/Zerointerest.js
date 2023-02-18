import React, { useEffect, useState } from 'react';
import './zerointerest.scss';
import axios from 'axios';

export default function Zerointerest() {

    const [zeroint, setZeroint] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/zero-int")
        .then(res => {
            setZeroint(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

  return (
    <div className='zeroint'>
        <div className='title'>
                <div className='category row'>
                    {
                        zeroint.map(data => {
                            return (
                                <div className="card col-lg-2 col-md-4 col-sm-6" key={data.id}>
                                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                                    <div className='time'>{data.time}</div>
                                    <h5 class="card-title">{data.title}</h5>
                                    <div class="card-body">
                                        <span className='price'>{data.price}</span>
                                        <span className='cutprice'>{data.cutPrice}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button class="btn btn-outline-danger">15% off</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>

        <div className='title'>
                <div className='category row'>
                    {
                        zeroint.map(data => {
                            return (
                                <div className="card col-lg-2 col-md-4 col-sm-6" key={data.id}>
                                    <img class="card-img-top" src={data.image} alt="Card image cap" />
                                    <div className='time'>{data.time}</div>
                                    <h5 class="card-title">{data.title}</h5>
                                    <div class="card-body">
                                        <span className='price'>{data.price}</span>
                                        <span className='cutprice'>{data.cutPrice}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button class="btn btn-outline-danger">15% off</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>

        </div>
  )
}
