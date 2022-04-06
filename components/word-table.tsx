import { Table, Input } from "antd";

interface IWordTableProps {
  present: string;
  past: string;
  past_participe: string;
  mode: string;
  handleInput: Function;
}


const WordTable = (props: IWordTableProps) : JSX.Element => {

  const columns = [{
    title: 'Present',
    dataIndex: 'present',
    key: 'present'
  },
  {
    title: 'Past',
    dataIndex: 'past',
    key: 'past',
      render: () => {
	return <Input onChange={(event) => props.handleInput('past', event.target.value)} />
    }
  },
  {
    title: 'Past Participe',
    dataIndex: 'past_participe',
    key: 'past_participe',
    render: () => {
      return <Input onChange={(event) => props.handleInput('past_participe', event.target.value)} />
    }
  }];

  const createColumn = () => {
   return columns;
  }

  const createData = () => ([{
    key: '1',
    ...props
  }])

  return (
    <Table pagination={false} columns={createColumn()} dataSource={createData()} />
  )
};

export { WordTable };
