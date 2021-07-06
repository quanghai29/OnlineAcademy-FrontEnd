import React from 'react';
import classes from './Hero.module.scss';

const Hero = () => (
  <div className={classes.hero}>
    <div className={classes.heroTitle}>
      <img src="assets/images/home/heroTitleBg.png" alt="hero title bg" />
      <div className={classes.title}>
        <h2>Mùa dịch tới, với GEL VIE</h2>
        <h2>Ngồi tại nhà, học thả ga</h2>
        <p>GEL VIE - Nỗ lực cùng bạn vươn tới thành công</p>
        <button>Đăng ký ngay</button>
      </div>
    </div>
    <div className={classes.girlBg}>
      <img src="assets/images/home/girlBg.png" alt="girl bg" />
    </div>
  </div>
);

export default Hero;
