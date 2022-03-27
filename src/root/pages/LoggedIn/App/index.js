import React from "react";
import { Input, Checkbox } from 'antd';
import logo from './../../../assets/images/logoVariant.png';
import {  Link } from "react-router-dom";
import './style.scss';

const Loggedin = () => 
        <div className="loggedin">
            <header>
                <div className="header">
                    <div className="logoBg" />
                    <div className="logoBg2" />
                    <div className="logoBlock">
                        <img className="img" src={logo} />
                    </div>
                    <div className="twoBlockBg" />
                    <div className="twoBlock">
                        <div className="textBlock">
                            <p>ןומושיי</p>
                            <p>חטובמ</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="content">
                <div className="contentBlock">
                    <p className="titleContent">
                        הסינכ
                    </p>
                    <div>
                        <Input className="input" placeholder="תוהז תדועת" />
                        <Input className="input" placeholder="ןופלט" />
                        <div className="checkboxone">
                            <label>שומיש יאנת</label>
                            <Checkbox />
                        </div>
                        <div className="checkboxtwo">
                            <label>יתוא רוכז</label>
                            <Checkbox />
                        </div>
                        <div className="btnBlock">
                            <Link to={'/register'} className="sendBtn">הסינכ</Link>
                        </div>
                        <div className="linkBlock">
                            <a href="#">המשרה</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

export default Loggedin;