import React, { Fragment } from 'react';

const Pagination = ({
  coursesPerPage,
  totalCourses,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Fragment>
      <ul className="pagination">
        <li className={currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => paginate(currentPage - 1)} href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage === pageNumbers.length ? 'disabled' : ''
          }
        >
          <a onClick={() => paginate(currentPage + 1)} href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Pagination;
