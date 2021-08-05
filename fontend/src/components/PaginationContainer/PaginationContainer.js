import ReactPaginate from 'react-paginate';
import styles from "./PaginationContainer.module.scss"

const PaginationContainer = (props) => {

  return (
    <ReactPaginate pageCount={props.pageCount}
      pageRangeDisplayed={props.pageRangeDisplayed}
      marginPagesDisplayed={props.marginPagesDisplayed}
      containerClassName={styles['container-pagination']}
      pageClassName={styles['li-pagination']}
      previousClassName={styles['li-pre-next']}
      nextClassName={styles['li-pre-next']}
      activeClassName={styles['page--active']}
      activeLinkClassName={styles['a--active']}
      onPageChange={props.handleClickSelectedPage}
      forcePage={props.selectedPage}
      disabledClassName={styles['disable-previous-next']}
    />
  )
}

export default PaginationContainer