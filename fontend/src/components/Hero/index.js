import React from 'react';
import classes from './style.module.scss';

const Hero = () => (
  <div className={`row ${classes.hero}`}>
    <div className={`col m4 ${classes.heroTitle}`}>
        <img src="assets/images/home/heroTitleBg.png" alt="hero title bg" />
        <div className={classes.title}>
          <h2>Mùa dịch tới, với GEL VIE</h2>
          <h2>Ngồi tại nhà, học thả ga</h2>
          <p>GEL VIE - Nỗ lực cùng bạn vươn tới thành công</p>
          <button className="btn">Đăng ký ngay</button>
        </div>
    </div>
    <div className={`col m4 ${classes.girlBg}`}>
      <img src="assets/images/home/girlBg.png" alt="girl bg" />
    </div>
  </div>
);

export default Hero;
