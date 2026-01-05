'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

//import Slider from "react-slick";

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import Footer from './components/footer';

 /*const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
  };

  const settings1 = {
    vertical: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    infinite: true,
    pauseOnHover: false,
  };*/

export default function Index() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

 
  return (
    <div>
      <div className="page-wrappers" style={{background:'#f9f9f9'}}>
         {loading && <div className="loader">
          <Image 
            src="/images/loading.webp"
            alt="loader"
            width={50}
            height={50}
            priority
          />
          </div>}
        {!loading && (
          <div>
            {/* Your main content goes here */}
            <p>Content Loaded</p>
          </div>
        )}
        
        <header className="header">
            <div className="left">
                <Image                
                src="/image/name_logo1.png"
                alt="logo"
                width={130}
                height={18}
                priority
                />
                
            </div>
            <div className="right">
            <Link href="#">
                <Image                
                src="/image/bell.png"
                alt="notification"
                width={24}
                height={24}
                priority
                /></Link>  
            <Link href="#">
                <Image                
                src="/image/support-icon.png"
                alt="earphone"
                width={24}
                height={24}
                priority
                /></Link>
            </div>
        </header>

        <div className="page-wrapper">
            <div className="ifLoginMainDe">
             <div className="inner">
               <span className="labelTxtMain">Available Balance</span>
               <p style={{ fontSize: 12, fontWeight: "400 !important" }}>
                 <span style={{ fontSize: 16, fontWeight: "600 !important" }} /> USDT
               </p>
             </div>
             <div className="mainTwoInDiv">
               <div style={{ width: "50%" }}>
                 <span className="labelTxtMain">Sell Pending</span>
                 <p>
                   <span /> USDT
                 </p>
               </div>
               <div style={{ width: "50%" }}>
                 <span className="labelTxtMain">Deposit Pending</span>
                 <p>
                   <span /> USDT
                 </p>
               </div>
             </div>
             <img src="/image/wallet.png" alt="" />
           </div>

                 
            <div className="easyTradingSection">
                <div className="texteasy">
                    <h2>Easy trading quick profits</h2>
                    <p>Ensuring every user maximizer their <br/> investment return</p>
                    <button>Sign up <i className="bi bi-arrow-right-short"></i></button>
                </div>
                <img src="/image/main_image.png" />
            </div>

            <div className="threeSection">
              <div className="">
                <Link href="/USDT-deposit">
                  <img src="/image/deposit.png" alt="" />
                  <p>Deposit</p>
                </Link>
              </div>
              <div className="">
                <Link href="/exchange">
                  <img src="/image/withdraw.png" alt="" />
                  <p>Sell USDT</p>
                </Link>
              </div>
              <div className="">
                <Link href="/bank">
                  <img src="/image/bankcard.png" alt="" />
                  <p>Add Bank A/C</p>
                </Link>
              </div>

              
            </div>
          {/*<div className="price-calc">
            
                
                <div className="notify">
                  <div className="lefts">
                    <div className="icon">
                      <img src="images/notify.png" />
                    </div>
                    <div className="spr">|</div>
                    <Slider {...settings1} className="text-sl">
                      <p className="text">
                        <span className="time">12:34</span> 84***4556 solid for
                        $756
                      </p>
                      <p className="text">
                        <span className="time">10:55</span> 84***6744 solid for
                        $897
                      </p>
                    </Slider>
                  </div>
                  <div className="rights">
                    <div className="icon right">
                      <img src="images/right-arw.png" />
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="threeSectionSlider">
              <div>
                <span>BTC USDT</span>
                <h3>0.1803</h3>
                <p>+0.12%</p>
              </div>
              <div>
                <span>BTC USDT</span>
                <h3>0.1803</h3>
                <p>+0.12%</p>
              </div>
              <div>
                <span>BTC USDT</span>
                <h3>0.1803</h3>
                <p>+0.12%</p>
              </div>
            </div>

            <div className="twoLastSec">
              <div className="lefttwo">
                <img
                  src="/image/name_logo.png"
                  alt=""
                  style={{ width: 85, marginBottom: 8 }}
                />
                <h2
                  style={{
                    fontSize: '16px',
                    fontWeight: 800,
                    color: "#01ba8e",
                    lineHeight: '23px',
                    marginBottom: 0
                  }}
                >
                  Invite your <br /> friends
                </h2>
                <p style={{ fontSize: '11px', fontWeight: 400, color: "#4b4b4b", lineHeight: '150%' }}>
                  Earn your commissons
                </p>
                <img src="/image/right.png" alt="" style={{ width: '40px', marginTop: '5px' }} />
                <img src="/image/comm.png" alt="" style={{ width: '70px', marginLeft: '35px' }} />
              </div>
              <div className="righttwo">
                <div className="bttright">
                  <img src="/image/ex_super_t.png" alt="" />
                </div>
                <div className="btright">
                  <h2
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      marginBottom: "2px !important"
                    }}
                  >
                    Make money <img src="/image/right_w.png" />
                  </h2>
                  <p style={{ fontSize: '11px', color: "#666" }}>
                    together with AngelX <br /> Super
                  </p>
                </div>
              </div>
            </div>

        


            </div>
    
<Footer></Footer>
     </div>   
    </div>
  );
}





