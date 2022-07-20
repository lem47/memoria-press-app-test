import * as React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination({ people, changePage, changeSize }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    changePage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    changeSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="Pagination">
      <TablePagination
        component="div"
        count={people.totalCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

Pagination.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  people: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
  changeSize: PropTypes.func.isRequired,
};
