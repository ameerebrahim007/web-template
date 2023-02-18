import React from 'react';
import './subFooter.scss'

export default function SubFooter() {
  return (
    <div className='subFooter row'>
        <div className='col-md-2'>
            <h5>Mobiles & Tablets</h5>
            <div>
                <p>Mobile Phones</p>
                <p>Mobile Accessories</p>
                <p>Mobile Photography Accessories</p>
                <p>Tablets</p>
                <p>Power Banks</p>
                <p>Headphones & Earphones</p>
            </div>
        </div>
        <div className='col-md-2'>
            <h5>Laptops & Computers</h5>
            <div>
                <p>Laptops</p>
                <p>Desktop Computers</p>
                <p>PC Components</p>
                <p>Drives & Storage</p>
                <p>Networking</p>
                <p>Software</p>
                <p>Computer Accessories</p>
            </div>
        </div>
        <div className='col-md-2'>
            <h5>Gaming & Accessories</h5>
            <div>
                <p>Gaming Chairs & Desks</p>
                <p>Gaming PC Accessories</p>
                <p>Gaming PC & Components</p>
                <p>Gaming Consoles</p>
                <p>Gaming Consoles Accessories</p>
                <p>Video Games</p>
            </div>
        </div>
        <div className='col-md-2'>
            <h5>Electronics</h5>
            <div>
                <p>Speakers & Audio Devices</p>
                <p>Projector & Accessories</p>
                <p>Television & Accessories</p>
                <p>Torches & Emergency</p>
                <p>Printers, Scanner & Copiers</p>
                <p>Printer Accessories</p>
                <p>Telephones & Communication</p>

            </div>
        </div>
        <div className='col-md-2'>
            <h5>Home Appliances</h5>
            <div>
                <p>Food Preparation & Kitchenwares</p>
                <p>Heating, Cooling & Air</p>
                <p>Blenders And Juicers</p>
                <p>Coffee,Tea & Espresso</p>
                <p>Ovens And Toasters</p>
                <p>Vacuums & Floor Care</p>
            </div>
        </div>
        <div className='col-md-2'>
            <h5>Pre Owned</h5>
            <div>
                <p>Pre-Owned Mobiles</p>
                <p>Pre-Owned Laptops</p>
                <p>Pre-Owned Printers</p>
                <p>Pre-Owned Tablets</p>
            </div>
        </div>
    </div>
  )
}
