/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './PeopleTable.scss';
import { v4 as uuidv4 } from 'uuid';
import { changeSortBy, changeSortDir, fetchData } from '../../../redux/dataSlice';
import { PersonRow } from '../PersonRow/PersonRow';
import Checkbox from '../Checkbox/Checkbox';

export const PeopleTable = () => {
  const [dir, setDir] = useState(-1);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [sorted, setSorted] = useState(false);

  const dispatch = useDispatch();
  const people = useSelector(state => state.data);
  const clear = {
    page: 1,
    size: 10,
    search: '',
    sortBy: '',
    sortDir: '',
  };

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(people.data.map(person => person.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleSelect = (e) => {
    const { id, checked } = e.target;

    setIsCheck([...isCheck, +id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== +id));
    }
  };

  return (
    <table className="PeopleTable">
      <thead>
        <tr>
          <th className="PeopleTable__headers" style={{ width: 420 }}>
            <div className="PeopleTable__header">
              <div className="PeopleTable__check">
                <Checkbox
                  type="checkbox"
                  name="selectAll"
                  id={0}
                  handleClick={handleSelectAll}
                  isChecked={isCheckAll}
                />
                <p className="PeopleTable__name">Name</p>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="PeopleTable__az"
                onClick={() => {
                  dispatch(changeSortBy('name'));
                  setDir(dir * -1);
                  dispatch(changeSortDir(dir));
                  setSorted(true);
                }}
              >
                <path d="M8.95998 2.10666L7.38665 0.533325L5.81332 2.10666H8.95998ZM5.92665 10.82H7.15332L4.15998 3.17999H3.06665L0.0666504 10.82H1.29332L1.90665 9.18666H5.31332L5.92665 10.82ZM2.31332 8.09333L3.60665 4.63999L4.89998 8.09333H2.31332ZM7.38665 13.4667L8.93998 11.9133H5.83332L7.38665 13.4667ZM13.44 4.02666V3.18666H7.90665V4.25333H11.8267L7.87998 9.95999V10.82H13.5667V9.75999H9.48665L13.44 4.02666Z" fill="#C0C0C0" />
              </svg>
            </div>
          </th>
          <th className="PeopleTable__headers" style={{ width: 100 }}>ID</th>
          <th className="PeopleTable__headers" style={{ width: 100 }}>
            <div className="PeopleTable__header">
              <p className="PeopleTable__name">Class</p>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="PeopleTable__arrows"
                onClick={() => {
                  dispatch(changeSortBy('class'));
                  setDir(dir * -1);
                  dispatch(changeSortDir(dir));
                  setSorted(true);
                }}
              >
                <path
                  d="M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006
                  0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006
                  10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006
                  8.94L6.1134 8L4.00006 10.1133Z"
                  fill="#C0C0C0"
                />
              </svg>
            </div>
          </th>
          <th className="PeopleTable__headers" style={{ width: 130 }}>
            <div className="PeopleTable__header">
              <p className="PeopleTable__name">Av. Score, %</p>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="PeopleTable__arrows"
                onClick={() => {
                  dispatch(changeSortBy('score'));
                  setDir(dir * -1);
                  dispatch(changeSortDir(dir));
                  setSorted(true);
                }}
              >
                <path
                  d="M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006
                  0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006
                  10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006
                  8.94L6.1134 8L4.00006 10.1133Z"
                  fill="#C0C0C0"
                />
              </svg>
            </div>
          </th>
          <th className="PeopleTable__headers" style={{ width: 140 }}>
            <div className="PeopleTable__header">
              <p className="PeopleTable__name">Av. Speed</p>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="PeopleTable__arrows"
                onClick={() => {
                  dispatch(changeSortBy('speed'));
                  setDir(dir * -1);
                  dispatch(changeSortDir(dir));
                  setSorted(true);
                }}
              >
                <path
                  d="M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006
                  0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006
                  10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006
                  8.94L6.1134 8L4.00006 10.1133Z"
                  fill="#C0C0C0"
                />
              </svg>
            </div>
          </th>
          <th className="PeopleTable__headers">
            <div className="PeopleTable__header">
              <p>Parents</p>
              {sorted && (
                <div
                  className="PeopleTable__clear"
                  onClick={() => {
                    dispatch(fetchData(clear));
                    setSorted(false);
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325
                      0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325
                      9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992
                      5.00004L10.1666 1.27337Z"
                      fill="#A6192E"
                    />
                  </svg>
                  <p>Reset sorting</p>
                </div>
              )}
            </div>
          </th>
        </tr>
      </thead>

      <tbody className="PeopleTable__content">
        {people.data.map(person => (
          <PersonRow
            key={uuidv4()}
            person={person}
            handleClick={handleSelect}
            isCheck={isCheck}
          />
        ))}
      </tbody>
    </table>
  );
};
