/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import './ExportCSV.scss';

const ExportCSV = () => {
  const [fileData, setFileData] = useState([]);

  const fileHeaders = [
    {
      label: 'Name', key: 'name',
    },
    {
      label: 'ID', key: 'id',
    },
    {
      label: 'Class', key: 'class',
    },
    {
      label: 'Score', key: 'score',
    },
    {
      label: 'Speed', key: 'speed',
    },
    {
      label: 'Parents', key: 'parents',
    },
  ];

  const handleDataFetch = async() => {
    const response = await fetch(
      'https://test-task-j.herokuapp.com/data?page=1&size=10',
    );
    const respJSON = await response.json();

    setFileData(respJSON.data);
  };

  useEffect(() => {
    handleDataFetch();
  }, []);

  return (
    <>
      {fileData?.length
        && (
          <CSVLink
            className="ExportCSV"
            headers={fileHeaders}
            data={fileData}
            filename="students.csv"
            target="_blank"
          >
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.00016 0.5L0.333496 5.16667H3.00016V9.16667H7.00016V5.16667H9.66683L5.00016 0.5ZM5.66683 3.83333V7.83333H4.3335V3.83333H3.5535L5.00016 2.38667L6.44683 3.83333H5.66683ZM0.333496 10.5H9.66683V11.8333H0.333496V10.5Z" fill="#C0C0C0" />
            </svg>
            <p>Export CSV</p>
          </CSVLink>
        )}
    </>
  );
};

export default ExportCSV;
