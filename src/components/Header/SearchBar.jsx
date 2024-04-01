import { Input } from 'antd';
import React from 'react';
import {
  SearchOutlined,
} from '@ant-design/icons';
import '../../styles/Header.css';
import { useStateValue } from '../../store';
import { constants } from '../../store/reducer';

const SearchBar = () => {
  const [{searchKey}, dispatch] = useStateValue();

  const handleChange = (e) => {
    dispatch({
      type: constants.UPDATE_SEARCH_KEY,
      data: e.target.value,
    })
  }

  return (
    <div className='searchContainer'>
      <SearchOutlined styles={{ color: '#bbb'}} />
      <Input className='searchInput' placeholder='Search files' onChange={handleChange} />
    </div>
  )
}

export default SearchBar;