import React, { useState, useContext } from 'react';
import TCell from './TCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TableRow, IconButton, Collapse, Checkbox } from '@mui/material';

import TableContext from './context';

interface RowContentProps {
  index: number;
  row: any;
}

const RowContent: React.FC<RowContentProps> = ({ row, index }) => {
  const [open, setOpen] = useState(false);
  const { dataSource, columns, size, rowKey, rowSelection, expandable } =
    useContext(TableContext);
  const showExpand = expandable?.rowExpandable(row);

  const onAddSelectedRowKey = (key: React.Key) => {
    const cur = [...(rowSelection?.selectedRowKeys || []), key];
    rowSelection?.onChange?.(
      cur,
      cur.map((key) => dataSource.find((data: any) => data[rowKey!] === key)),
    );
  };

  const onRemoveSelectedRowKey = (key: React.Key) => {
    const cur = (rowSelection?.selectedRowKeys || []).filter(
      (item) => item !== key,
    );
    rowSelection?.onChange?.(
      cur,
      cur.map((key) => dataSource.find((data: any) => data[rowKey!] === key)),
    );
  };
  const onSelectedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onAddSelectedRowKey(row[rowKey!]);
    } else {
      onRemoveSelectedRowKey(row[rowKey!]);
    }
  };

  return (
    <>
      {rowSelection && (
        <TCell size={size} sx={{ paddingInlineStart: 1, width: 64 }}>
          <Checkbox
            sx={{ color: 'text.auxiliary' }}
            size="small"
            onChange={onSelectedChange}
            checked={rowSelection?.selectedRowKeys?.includes(row[rowKey!])}
            {...rowSelection?.getCheckboxProps?.(row)}
          />
        </TCell>
      )}
      {showExpand && (
        <TCell size={size}>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TCell>
      )}

      {columns.map((column) => {
        const value = row[column.dataIndex];
        const dom = column.render?.(value, row, index) || value;
        return (
          <TCell
            key={column.dataIndex}
            size={size}
            sx={{ width: column.width, minWidth: column.minWidth }}
          >
            {dom}
          </TCell>
        );
      })}

      {showExpand && (
        <TableRow>
          <TCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={columns.length + 1}
            size={size}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              {expandable?.expandedRowRender(row)}
            </Collapse>
          </TCell>
        </TableRow>
      )}
    </>
  );
};

export default RowContent;
