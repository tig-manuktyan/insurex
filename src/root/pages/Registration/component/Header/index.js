import React from "react";
import BurgerIcon from "../../../../assets/icons/BurgerIcon";
import GoBackIcon from "../../../../assets/icons/GoBackIcon";
import Avatar from "../../../../assets/images/AvatarImg.png";
import { Link } from "react-router-dom";
import './style.scss';

const _Header = () =>
    <div className="body">
        <div className="oneBlockRegister">
            <BurgerIcon />
            <div className="leftBlockHeader">
                <img src={Avatar} />
                <p>חטובמ ןומושיי</p>
            </div>
        </div>
        <div className="twoBlockRegister">
            <Link to={"/"}>
                <GoBackIcon />
            </Link>
            <div className="rightBlockHeader">
                <div className="textBlockHeader">
                    <p className="textHeader">יחצ םולש</p>
                    <div className="afterTextBlock">
                    </div>
                </div>
                <div className="textBlockHeader">
                    <p className="textHeader twoTextHeader">ישאר ךסמ</p>
                    <div className="afterTextBlockTwo">
                    </div>
                </div>
            </div>
        </div>
        <div className="bgColorBlock">

        </div>
    </div>

export default _Header;
