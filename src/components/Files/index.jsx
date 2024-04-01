import React, { useState } from 'react';
import {
  UnorderedListOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import '../../styles/Files.css';
import GridView from './GridView';
import ListView from './ListView';
import useFetchFiles from '../../services/useFetchFiles';
import { useStateValue } from '../../store';

const Files = () => {
  const [showGrid, toggleShowGrid] = useState(false);
  const [loading, error] = useFetchFiles();
  const [{fileList: data, searchKey}, dispatch] = useStateValue();

  const filterData = () => {
    if(searchKey.length === 0)
      return data;
    const tempData = [...data];
    const finalData = tempData.filter(d => d.name.toLowerCase().includes(searchKey.toLowerCase()));
    return finalData;
  }

  return (
    <div className='files'>
      <div className='filesHeader'>
        <h3 className='filesHeading'>All files</h3>
        {!showGrid && <UnorderedListOutlined styles={{fontSize: '24px', cursor: 'pointer'}} onClick={() => toggleShowGrid(true)}/>}
        {showGrid && <AppstoreOutlined styles={{fontSize: '24px', cursor: 'pointer'}} onClick={() => toggleShowGrid(false)}/>}
      </div>
      {showGrid && <GridView dataSource={filterData()} loading={loading} />}
      {!showGrid && <ListView dataSource={filterData()} loading={loading} />}
    </div>
  )
}

export default Files;