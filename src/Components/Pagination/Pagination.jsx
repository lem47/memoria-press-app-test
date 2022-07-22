import React, { useEffect } from 'react';
import './Pagination.scss';
import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import { fetchData } from '../../toolkitRedux/services/studentsApi';

export default function Pagination() {
  const dispatch = useDispatch();
  const people = useSelector(state => state.data);

  let page = 0;
  let size = 10;

  useEffect(() => {
    dispatch(fetchData(page, size));
  }, [page, size]);

  const handleChangePage = (event, newPage) => {
    page = newPage;
  };

  const handleChangeRowsPerPage = (event) => {
    size = (parseInt(event.target.value, 10));
    page = 0;
  };

  return (
    <div className="Pagination">
      <TablePagination
        component="div"
        count={people.data.totalCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={size}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
