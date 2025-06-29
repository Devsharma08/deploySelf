import React from 'react';
import { FaDownload } from 'react-icons/fa';
import DownloadButton from './Download_btn';

const DownloadResume = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-black text-white px-6 py-10 sm:px-10">
      {/* Text Section */}
      <div className="flex flex-col items-start text-center sm:text-left">
        <p className="text-2xl sm:text-4xl mb-4 font-semibold duration-700 brightness-150 animate-pulse font-mono">
          Dev Sharma | MERN Stack Developer
        </p>
        <p className="text-sm sm:text-lg font-mono mb-4 font-thin">
          Want to know about my professional growth? Download the attached resume.
        </p>
      </div>

      {/* Download Button */}
      <a
        href={`${import.meta.env.BASE_URL}files/DevSharma-Intern_Resume-3rd-year-Btech.pdf`}
        download="Dev-Resume.pdf"
        className="flex ml-5 justify-center items-center max-551:flex "
      >
        <FaDownload className="text-md sm:text-lg md:text-xl lg:text-2xl" />

        <DownloadButton />
      </a>
    </div>
  );
};

export default DownloadResume;
