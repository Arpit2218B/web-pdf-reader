import React, { useState } from 'react';
import SearchBar from './SearchBar';
import {
  SearchOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import '../../styles/Header.css';

const Header = ({ ref1 }) => {
  const [showSearch, toggleShowSearch] = useState(false);

  return (
    <div className='header'>
      {!showSearch && (
        <span className='logo' ref1={ref1}>
          <img src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png" />VIEWER
        </span>
      )}
      <div className='searchToggle'>
        {!showSearch && <SearchOutlined className='smallSearch' onClick={() => toggleShowSearch(true)}/>}
        {showSearch && <CloseOutlined className='smallSearch' onClick={() => toggleShowSearch(false)}/>}
      </div>
      <div className='search' data-key={showSearch ? 'show' : 'hide'}>
        <SearchBar ref1={ref1} />
      </div>
    </div>
  )
}

export default Header;