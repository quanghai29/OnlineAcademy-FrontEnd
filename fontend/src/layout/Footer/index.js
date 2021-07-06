import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => <footer className={classes.footer}>
    <div className={classes.footerTop}>
        <div className={classes.footerLeft}>
            <img src="assets/images/header/Logo.png" alt="logo" />
            <div className={classes.icons}>
                <img src="assets/images/footer/facebook.png" alt="facebook" />
                <img src="assets/images/footer/twitter.png" alt="twitter" />
                <img src="assets/images/footer/youtube.png" alt="youtube" />
                <img src="assets/images/footer/ball.png" alt="ball" />
            </div>
        </div>
        <div className={classes.footerRight}>
            <article>
                <h3>Contact Us</h3>
                <ul>
                    <li><p>(+55) 254. 254. 254</p></li>
                    <li><p>Info@lsemajafrica.com</p></li>
                    <li><p>277 Nguyễn Văn Cừ, Quận 5, Thành phố Hồ Chí Minh, Việt Nam</p></li>
                </ul>
            </article>
            <article>
                <ul>
                    <li><p>Terms and Conditions</p></li>
                    <li><p>Faq</p></li>
                </ul>
            </article>
        </div>
    </div>
    <div className={classes.footerBottom}>
        <p>All Right Reserved | GOGE AFRICA 2019</p>
        <div className={classes.policy}>
            <p>Privacy Policy</p>
            <p> Site Credit</p>
        </div>
    </div>
</footer>;

export default Footer;