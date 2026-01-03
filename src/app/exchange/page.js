"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Slider from "react-slick";



//import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Exchange() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [timeLeft, setTimeLeft] = useState(52);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      window.location.reload();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); 
  }, [timeLeft]);


 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setCheckingAuth(false);
  }, []);

  if (checkingAuth) return null;


  return (
    <div>
      <main>
        <div className="page-wrappers">
          <header className="header" style={{padding: '9px 11px 5px 11px'}}>
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
              <a href="https://wa.me/16723270327?text=Hello%2C%20AngleX Team!">
              <img src="images/customer-care.png" />
              </a>
            </div>
          </header>

          

          <div className="page-wrapper page-wrapper-ex" style={{padding:0}}>
            <div className="mainHeadExchange">
              <p className="">Platform price</p>
              <h3>1 USDT = INR 107</h3>
            </div>

            <div style={{padding: '10px 10px 14px 16px'}}>
            <section className="section-3">
              <p className="title" style={{ textAlign: "left" }}>
                <b>Flash Exchange</b>
              </p>
              <p className="title ptitle">Crypto</p>
              <div className="select-amt" style={{ position: "relative",background: '#fff' }}>
                    <input
                      type="number"
                      placeholder="Please enter the amount"
                      name="amt"           
                      style={{
                        width: "100%",
                        paddingRight: "50px",
                        border: "none",
                        outline: "none",
                        fontSize: "12px",
                        color: "#111",
                        background: "transparent",
                        zIndex: 2,
                        position: "relative",                        
                      }}
                    />   
                    <div
                      className="amt"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",    
                        zIndex:9
                      }}
                    >
                      <img src="/image/uic.png" className="icon" /> USDT
                    </div>                                
                  </div>
                  <div className="dflex avail"><a href="#" style={{fontSize: '12px', fontWeight: 500, marginTop:'5px',color:'#06b58f'}}>Deposit</a></div>     

                  <div className="middleSection">
                        <div className=""></div>
                        <img src="/image/or.png"/>
                        <div className=""></div>
                    </div>    

                    <p className="title ptitle" style={{ textAlign: "left", paddingTop: '10px' }}>
                      Fiat
                    </p>
                    <div className="select-amt" style={{ position: "relative",background: '#fff' }}>
                    <input
                      type="number"
                      placeholder="0.00"
                      name="amt"           
                      style={{
                        width: "100%",
                        paddingRight: "50px",
                        border: "none",
                        outline: "none",
                        fontSize: "12px",
                        color: "#111",
                        background: "transparent",
                        zIndex: 2,
                        position: "relative",                        
                      }}
                    />   
                    <div
                      className="amt"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",    
                        zIndex:9
                      }}
                    >
                      <img src="/image/inr.webp" className="icon" style={{maxWidth:"28px"}} /> INR
                    </div>                                
                  </div>

                  <p className="title ptitle" style={{ textAlign: "left", paddingTop: '10px' }}>
                      Transfer to
                    </p>
                    <div className="select-amt" style={{ position: "relative",background: '#fff',margin: '0px 0 20px' }}>
                    <select         
                      name="amt"  
                      className="form-control"         
                      style={{
                        width: "100%",
                        paddingRight: "50px",
                        border: "none",
                        outline: "none",
                        fontSize: "12px",
                        color: "#111",
                        background: "transparent",
                        zIndex: 2,
                        position: "relative",  
                        padding: '10px 0'                      
                      }}
                    >   
                    <option>Please add bank account first</option>
                    </select>
                                                  
                  </div>

                  <div className="login-bx" style={{marginBottom:"5px"}}><button className="login-btn" style={{backgroundColor: '#10a992', cursor: 'pointer'}}>SELL USDT</button></div>
            </section>

            <section className="section-4">
              <p className="title" style={{ textAlign: "left" }}>
                <b>Exchanges Price</b>
              </p>
              <div className="dflex-out">
                <div className="bx">
                  <div className="dflex">
                    <img src="images/wazirx.png" />{" "}
                    <Link href="/exchange">
                      <img src="images/grn-right-arw.png" />
                    </Link>
                  </div>
                  <div className="text">
                    Avg <span className="b">88.1</span>{" "}
                    <span className="rs">RS</span>
                  </div>
                  <div className="small">1USDT = ₹88.1</div>
                  <div className="rw">
                    Min <span className="black">88RS</span>
                  </div>
                  <div className="rw">
                    Max <span className="black">88.35RS</span>
                  </div>
                </div>
                <div className="bx">
                  <div className="dflex">
                    <img src="images/binance.png" />{" "}
                    <Link href="/exchange">
                      <img src="images/grn-right-arw.png" />
                    </Link>
                  </div>
                  <div className="text">
                    Avg <span className="b">94.34</span>{" "}
                    <span className="rs">RS</span>
                  </div>
                  <div className="small">1USDT = ₹94.34</div>
                  <div className="rw">
                    Min <span className="black">93.74RS</span>
                  </div>
                  <div className="rw">
                    Max <span className="black">94.48RS</span>
                  </div>
                </div>
              </div>
              <p className="title btm" style={{}}>
                Statistics based on the latest 10 pieces of data
              </p>
            </section>
            <section className="section-2">
              <p className="title" style={{ textAlign: "left" }}>
                <b>Platform Advantage</b>
              </p>
              <div className="rw">
                <div className="bx">
                  <div className="image">
                    <img src="images/mic.png" style={{}} />{" "}
                    <h3>
                      <span className="fontt">24/7</span> Support
                    </h3>
                  </div>
                  <div className="info">
                    <p>
                      Got a problem? Just get in touch. Our customer service
                      support team is available 24/7.
                    </p>
                  </div>
                </div>
                <div className="bx">
                  <div className="image">
                    <img src="images/card.png" style={{}} />{" "}
                    <h3>Transaction Free</h3>
                  </div>
                  <div className="info">
                    <p>
                      Use a variety of payment methods to trade cryptocurrency,
                      free, safe and fast.
                    </p>
                  </div>
                </div>
                <div className="bx">
                  <div className="image">
                    <img src="images/money.png" style={{}} />{" "}
                    <h3>Rich Information</h3>
                  </div>
                  <div className="info">
                    <p>
                      Gather a wealth of information, let you know the industry
                      dynamics in first time.
                    </p>
                  </div>
                </div>
                <div className="bx">
                  <div className="image">
                    <img src="images/pro.png" style={{}} />{" "}
                    <h3>Reliable Security</h3>
                  </div>
                  <div className="info">
                    <p>
                      Our sophisticated security measures protect your
                      cryptocurrency from all risks.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

