import React from 'react';

const DownloadButton = () => {
  return (
    <div className="flip-container">
      <a
        href="/files/DevSharma-Intern_Resume-3rd-year-Btech.pdf"  // Make sure this path is correct
        download="Dev-Resume.pdf"
        className="btn-flip"
        data-front="Download"
        data-back="Now!"
      ></a>
    </div>
  );
};

export default DownloadButton;
