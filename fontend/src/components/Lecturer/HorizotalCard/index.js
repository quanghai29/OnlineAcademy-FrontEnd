import classes from './HorizotalCard.module.scss';

const HorizotalCard = ({title, shortDesc, img_source}) => {
  return (
    <div className={classes.horizotalCard}>
      <img src={img_source ? `http://localhost:3001/common/media/image/${img_source}` : 'assets/images/course/course1.png'} alt="course" />
      <div className={classes.content}>
        <h6>{title}</h6>
        <p>{shortDesc}</p>
      </div>
    </div>
  );
};

export default HorizotalCard;
