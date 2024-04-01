import React from 'react';
import FileView from './FileView';
import { Empty } from 'antd';
import '../../styles/GridView.css';

const GridView = ({ dataSource = [] }) => {
  if (dataSource.length === 0) {
    return <Empty />
  }

  return (
    <div className='gridViewContainer'>
      {dataSource.map(d => <FileView key={`${d.name} ${d.published}`} data={d} />)}
    </div>
  )
}

export default GridView;