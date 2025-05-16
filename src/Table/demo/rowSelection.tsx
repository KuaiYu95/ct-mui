import { Table, ThemeProvider } from 'ct-mui';
import { ColumnsType } from 'ct-mui/src/Table';
import React, { useEffect, useRef, useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
    render: (text: string, record) => <a>{record.address}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: any = [];
for (let i = 0; i < 400; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState(data);
  const [loading, setLoading] = useState(false);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setSelectedRowKeys([0]);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDataSource([...dataSource]);
        setTimeout(() => {
          console.log('domRef.current', domRef.current);
          domRef.current?.scrollTo({ top: 10000, behavior: 'smooth' });
        }, 1000);
      }, 1000);
    }, 2000);
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <ThemeProvider>
      <Table
        ref={domRef as any}
        size="large"
        height="400px"
        virtual={true}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{ pageSize: 10, page: 1, total: 20000 }}
        PaginationProps={{
          sx: { p: '20px' },
        }}
      />
    </ThemeProvider>
  );
};
