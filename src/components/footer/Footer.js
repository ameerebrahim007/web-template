import React from 'react';
import logo from '../../assets/logo.png';
import badge from '../../assets/badge.png';
import playStore from '../../assets/play-store.png';
import appStore from '../../assets/app-store.png';
import visa from '../../assets/visa.png';
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='row'>
            <div className='col-md-4'>
                <a className="" href="#"><img src={logo} /></a>
                <p>Ourshopee.com is one of the leading and fast-growing virtual shopping website with strong presence in UAE, Oman, Qatar, Bahrain and Kuwait.</p>
                <img src={badge}/>
                <div className='social'>
                    <span>Connect with us</span>
                    <div>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <h4>24/7 Customer Support</h4>
                <p style={{marginTop: '1rem'}}>Ourshopee support team is hard working 24/7 for our customers. We give high priority to troubleshoot and sort out all the complaints and issues of our customers. We will provide entire support till your face smiles.</p>
                <div style={{marginTop: '2rem'}}>
                    <h4>We're always here to help you</h4>
                    <p>Reach out to us through any of these support channels</p>
                    <div className='contact'>
                        <div>
                            <span>Hotline:</span>
                            <span>(971) 4 2582959</span>
                        </div>
                        <div>
                            <span>WhatsApp:</span>
                            <span>(971)52 1740943</span>
                        </div>
                        <div>
                            <span>E-mail :</span>
                            <span>support@ourshopee.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <h4>News letter</h4>
                <div class="input-group mb-4 mt-3">
                    <input type="text" class="form-control" placeholder="Enter you email ID" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-telegram"></i></button>
                </div>
                <div>
                    <h4>Download Our App</h4>
                    <div className='store'>
                        <img src={playStore}/>
                        <img src={appStore}/>
                    </div>
                </div>
            </div>

        </div>
        <div className='links'>
            <span>About Ourshopee   |</span>
            <span>Site Map   |</span>
            <span>Submit a Review   |</span>
            <span>Warranty & Return Policy   |</span>
            <span>privacy policy   |</span>
            <span>Terms and Conditions   |</span>
            <span>Our Blog   |</span>
            <span>Contact Us   |</span>
            <span>FAQs   |</span>
            <span>Sell With Us   |</span>
            <span>Affiliate Program</span>
        </div>
        <div className='text'>
            <img src={visa}/>
            <p>Copyright © 2022 ourshopee.com. All rights reserved.</p>
        </div>
    </div>
  )
}
