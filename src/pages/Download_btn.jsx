import React from 'react';

const DownloadButton = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-6 sm:py-10">
      <a
        href={`${import.meta.env.BASE_URL}files/DevSharma-Intern_Resume-3rd-year-Btech.pdf`}
        download="Dev-Resume.pdf"
        className="btn-flip"
        data-front="Download"
        data-back="Now!"
      ></a>
    </div>
  );
};

export default DownloadButton;
