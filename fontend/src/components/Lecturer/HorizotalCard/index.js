import classes from './HorizotalCard.module.scss';

const HorizotalCard = () => {
  return (
    <div className={classes.horizotalCard}>
      <img src="assets/images/course/course1.png" alt="course" />
      <div className={classes.content}>
        <h6>The complete web development 2021</h6>
        <p>Javascript cho người mới bắt đầu</p>
      </div>
    </div>
  );
};

export default HorizotalCard;
