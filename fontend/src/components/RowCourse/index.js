import styles from "./RowCourse.module.scss"
import courseImg from "../../assets/images/image.jpg"
import RatingStar from "../RatingStar"
import NumberFormat from 'react-number-format';

export default function RowCourse(props) {

  return (
    <div className={styles['row-course-container']}>
      <div className={styles['row-course__right-content']}>
        <div className={styles['row-course__img']}>
          <img src={courseImg} alt="course-avatar" />
        </div>
        <div className={styles['row-course__info']}>
          <div className={styles['text-info']}>
            <span className={styles['text-info__title']}>{props.data.title}</span>
            <span className={styles['text-info__short-description']}>{props.data.short_description}</span>
            <span className={styles['text-info__author']}>{props.data.author.fullname}</span>
          </div>
          <div className={styles['course-rating']}>
            <RatingStar rate={4.5} />
            <div className={styles['vertical-line']}></div>
            <NumberFormat value={props.data.subscriber} displayType={'text'}
              thousandSeparator={true} thousandsGroupStyle='thousand'
              className={styles['amount-user']} />
            <span className={`material-icons ${styles['school-icon']}`}>school</span>
          </div>
          <div>
            <button className={styles['btn']}>Best seller</button>
          </div>
        </div>
      </div>
      <div className={styles['row-course__price']}>
        <span>{props.data.discount === 0 ? props.data.price :
          props.data.price * props.data.discount} VND</span>
      </div>
    </div>
  )
}