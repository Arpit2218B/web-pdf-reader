import { Card, Popover } from "antd";
import {
  FilePdfOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { useStateValue } from "../../store";
import { constants } from "../../store/reducer";
import '../../styles/GridView.css';

const FileView = ({ data = {} }) => {
  const [{val}, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: constants.UPDATE_RECENT_FILE_LIST,
      data: data,
    })
  }

  return (
    <Card 
    title={data.title}
    style={{
      marginTop: 16,
      paddingTop: 16,
    }}
    className="gridFile"
    actions={[
      <span>{data.published || '--'}</span>,
      <a href={data.link} target="_blank" onClick={handleClick}><EyeOutlined key="edit" /></a>,
    ]}
    cover={<FilePdfOutlined style={{ fontSize: '5rem', color: '#CB0507', marginBottom: '8px' }} />}
    >
      <Card.Meta
        title={<Popover content={data.name}><span>{data.name || '--'}</span></Popover>}
      />
    </Card>
  )
}

export default FileView;