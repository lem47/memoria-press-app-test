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
              <path
                d="M4.99992 0.5L0.333252 5.16667H2.99992V9.16667H6.99992V5.
                16667H9.66659L4.99992 0.5ZM5.66659 3.83333V7.83333H4.33325V3.
                83333H3.55325L4.99992 2.38667L6.44659 3.83333H5.66659ZM0.333252
                10.5H9.66659V11.8333H0.333252V10.5Z"
                fill="#C0C0C0"
              />
            </svg>
            <p>Export CSV</p>
          </CSVLink>
        )}
    </>
  );
};

export default ExportCSV;
