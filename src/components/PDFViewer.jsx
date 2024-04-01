import React, { useRef } from 'react';
import Header from './Header';
import RecentFiles from './RecentFiles';
import Files from './Files';
import { Tour } from 'antd';

const PDFViewer = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  return (
    <div>
      <Header ref1={ref1} />
      <RecentFiles />
      <Files />
      <Tour ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} />
    </div>
  )
}

export default PDFViewer;