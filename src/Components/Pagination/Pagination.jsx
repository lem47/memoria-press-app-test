import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { changePage, changeSize } from '../../redux/dataSlice';
import './Pagination.scss';

export default function Pagination() {
  const { page, size } = useSelector(state => state);

  const dispatch = useDispatch();
  const people = useSelector(state => state.data);

  const handleChangePage = (event, newPage) => {
    dispatch(changePage(newPage + 1));
  };

  const handleChangeRowsPerPage = (event) => {
    dispatch(changeSize(parseInt(event.target.value, 10)));
  };

  return (
    <div className="Pagination">
      <TablePagination
        component="div"
        count={people.totalCount}
        page={page - 1}
        onPageChange={handleChangePage}
        rowsPerPage={size}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
