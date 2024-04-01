import { Button, Table } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import React from 'react';
import { useStateValue } from '../../store';
import { constants } from '../../store/reducer';
import '../../styles/ListView.css';

const columns = (viewHandler) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    render: (d) => d || '--',
    className: 'hiddenColumns'
  },
  {
    title: 'Year published',
    dataIndex: 'published',
    key: 'published',
    render: (d) => d || '--',
    className: 'hiddenColumns'
  },
  {
    title: '',
    dataIndex: 'link',
    key: 'view',
    fixed: 'right',
    render: (d, row) => <a href={d} target="_blank"><Button onClick={() => viewHandler(row)}><EyeOutlined /> View</Button></a>
  },
];

const ListView = ({ dataSource, loading }) => {
  const [{val}, dispatch] = useStateValue();

  const handleClick = (data) => {
    dispatch({
      type: constants.UPDATE_RECENT_FILE_LIST,
      data: data,
    })
  }

  return (
    <div className='listViewContainer'>
      <Table dataSource={dataSource} style={{overflow: 'auto'}} columns={columns(handleClick)} pagination={false} loading={loading} />
    </div>
  )
}

export default ListView;