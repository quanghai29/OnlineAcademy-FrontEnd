import styles from "./RowCourse.module.scss";
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import { DOMAIN_API } from "../../redux/constants/common"

export default function RowCourse(props) {
  return (
    <div className={styles['row-course-container']}>
      <div className={styles['row-course__right-content']}>
        <div className={styles['row-course__img']}>
          <img
            src={`${DOMAIN_API}/common/media/image/${props.data.image.img_source}`}
            alt="course-avatar"
          />
        </div>
        <div className={styles['row-course__info']}>
          <div className={styles['text-info']}>
            <Link className={styles['text-info__title']}
              to={{
                pathname: "/course-overview",
                state: {
                  course_id: props.data.id,
                },
              }}>
              {props.data.title}
            </Link>
            <span className={styles['text-info__short-description']}>{props.data.short_description}</span>
            <span className={styles['text-info__author']}>{props.data.author.fullname}</span>
          </div>
          <div className={styles['course-rating']}>
            <span className={styles['amount-rating']}> {props.data.avg_vote}</span>
            <StarRatings rating={props.data.avg_vote}
              starRatedColor="#EC0101"
              name='rating' starDimension="15px" starSpacing="0" />
            <div className={styles['vertical-line']}></div>
            <NumberFormat value={props.data.subscriber} displayType={'text'}
              thousandSeparator={true} thousandsGroupStyle='thousand'
              className={styles['amount-user']} />
            <span className={`material-icons ${styles['school-icon']}`}>school</span>
          </div>
          <div>
            {
              props.data.isBestseller && <div className={styles['best-seller']}>
                Best seller</div>
            }
          </div>
        </div>
      </div>
      <div className={styles['row-course__price']}>
        <NumberFormat value={props.data.price} displayType={'text'}
          thousandSeparator={true} thousandsGroupStyle='thousand' suffix="VND"
          className={props.data.discount === 0 ? '' : styles['has-discount']} />
        {
          props.data.discount > 0 && <NumberFormat
            value={props.data.price - props.data.price * (props.data.discount/100)}
            displayType={'text'} thousandSeparator={true} thousandsGroupStyle='thousand'
            suffix="VND" />
        }
      </div>
    </div>
  )
}