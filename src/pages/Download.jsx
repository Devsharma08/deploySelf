import React from 'react';
import { FaDownload } from 'react-icons/fa';
import DownloadButton from './Download_btn';

const DownloadResume = () => {
  return (
    <div className="flex items-center justify-between bg-black text-white p-10">
      <div className='flex flex-col items-start'>
      <p className="text-4xl mb-4 font-semibold text-center duration-700 brightness-150 animate-pulse font-mono">
        Dev Sharma | MERN Stack Develor
      </p>
      <p className='text-lg font-mono mb-4 font-thin text-center'>
        Wanted to know about my proffessional growth download the attached resume.
      </p>
      </div>
      <a
        href="/files/DevSharma-Intern_Resume-3rd-year-Btech.pdf"
        download="Dev-Resume.pdf"
        className='flex space-x-2 justify-center items-center'
      >
        <FaDownload className="icon"  />
        <DownloadButton/>
        </a>
    </div>
  );
};

export default DownloadResume;
