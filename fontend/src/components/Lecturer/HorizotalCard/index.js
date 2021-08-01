import classes from './HorizotalCard.module.scss';

const HorizotalCard = ({title, shortDesc}) => {
  return (
    <div className={classes.horizotalCard}>
      <img src="assets/images/course/course1.png" alt="course" />
      <div className={classes.content}>
        <h6>{title}</h6>
        <p>{shortDesc}</p>
      </div>
    </div>
  );
};

export default HorizotalCard;
