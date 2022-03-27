import React from "react";
import { Input } from 'antd';
import Header from './../component/Header/index';
import SelectOp from "../component/SelectOp";
import './style.scss';

const Registration = () => 
        <div className="registration">
            <Header />
            <section className="content">
                <div className="contentBlock">
                    <p className="titleContent">
                        הסינכ
                    </p>
                    <div>
                        <SelectOp/>
                        <Input className="input" placeholder="תוהז תדועת" />
                        <Input className="input" placeholder="*יטרפ םש" />
                        <Input className="input" placeholder="*החפשמ םש" />
                        <Input className="input" placeholder="*דיינ ןופלט" />
                        <Input className="input" placeholder="*רפסמו בוחר" />
                        <SelectOp/>
                        <Input className="input" placeholder="*ינורטקלא ראוד" />
                        <SelectOp/>
                        <div className="btnBlock">
                            <button to={'/register'} className="sendBtn">םשרה   </button>
                        </div>
                        <div className="linkBlock">
                            <a href="#">רתוי רחואמ םשרא</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

export default Registration;
