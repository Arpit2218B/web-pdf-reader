import React from 'react';
import RecentFile from './RecentFile';
import '../../styles/Recent.css';
import { useStateValue } from '../../store';
import '../../styles/Recent.css';

const RecentFiles = () => {
  const [{recentFiles}, dispatch] = useStateValue();

  return (
    <div className='recentlyOpened'>
      <h3 className='recentlyOpenedHeading'>Recently opened</h3>
      {!recentFiles || recentFiles?.length === 0 && <center><p className='noFiles'>No recently opened files</p></center>}
      <div className='recentFiles'>
        {
          recentFiles.map(r => <RecentFile key={`${r.name} ${r.published}`} data={r} />)
        }
      </div>
    </div>
  )
}

export default RecentFiles;