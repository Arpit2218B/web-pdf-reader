import { Card } from "antd";
import {
  FilePdfOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import '../../styles/Recent.css';

const RecentFile = ({ data = {} }) => {
  return (
    <Card 
    title={data.title}
    style={{
      marginTop: 16,
    }}
    className="recentFile"
    actions={[
      <span>{data.published || '--'}</span>,
      <a href={data.link} target="_blank"><EyeOutlined key="edit" /></a>,
    ]}
    >
      <Card.Meta
        avatar={<FilePdfOutlined style={{ fontSize: '3rem', color: '#CB0507' }} />}
        title={data.name}
        description={data.author || '--'}
      />
    </Card>
  )
}

export default RecentFile;