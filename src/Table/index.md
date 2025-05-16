---
title: Table 表格

group:
  title: 数据展示
---

# Table 表格

用于展示的容器

<code src="./demo/rowSelection.tsx">选择</code>

## API

### Table

| 参数         | 说明                                                                                                            | 类型                                                                                                              | 默认值 | 版本 |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| columns      | 表格列的配置描述，具体项见下表                                                                                  | [ColumnsType](#column)\[]                                                                                         | -      |      |
| dataSource   | 数据数组                                                                                                        | object\[]                                                                                                         | -      |      |
| expandable   | 配置展开属性                                                                                                    | [expandable](#expandable)                                                                                         | -      |      |
| loading      | 页面是否加载中                                                                                                  | boolean\| [Spin Props](/components/spin-cn#api)                                                                   | false  |      |
| pagination   | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination-cn) 文档，设为 false 时不展示和进行分页 | object\| `false`                                                                                                  | -      |      |
| rowKey       | 表格行 key 的取值，可以是字符串或一个函数                                                                       | string\| function(record): string                                                                                 | `key`  |      |
| rowSelection | 表格行是否可选择，[配置项](#rowselection)                                                                       | object                                                                                                            | -      |      |
| onChange     | 分页、排序、筛选变化时触发                                                                                      | function(pagination, filters, sorter, extra: { currentDataSource:\[], action: `paginate` \| `sort` \| `filter` }) | -      |      |
| maxHeight    | 表格最大高度, 设置后，在超出最大高度，表格只会在表格区域滚动                                                    | string                                                                                                            |        |      |

### Column

| 参数      | 说明                                                                                                                                                             | 类型                                             | 默认值 | 版本 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------ | ---- |
| align     | 设置列的对齐方式                                                                                                                                                 | `left` \| `right` \| `center`                    | `left` |      |
| dataIndex | 列数据在数据项中对应的 key                                                                                                                                       | string                                           | -      |      |
| render    | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引                                                                                                 | function(text, record, index) {}                 | -      |      |
| sorter    | 排序函数，本地排序使用一个函数(参考[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction) | (order: 'asc'\|'desc', property: string) => void | -      |      |
| title     | 列头显示文字                                                                                                                                                     | ReactNode\|                                      | -      |      |
| width     | 列宽度                                                                                                                                                           | string\| number                                  | -      |      |

### expandable

展开功能的配置。

| 参数              | 说明               | 类型                                             | 默认值 | 版本 |
| ----------------- | ------------------ | ------------------------------------------------ | ------ | ---- |
| expandedRowRender | 额外的展开行       | (record: any, index?: number) => React.ReactNode | -      |      |
| rowExpandable     | 设置是否允许行展开 | (record) => boolean                              | -      |      |

### rowSelection

选择功能的配置。

| 参数                   | 说明                                            | 类型                                                      | 默认值 | 版本 |
| ---------------------- | ----------------------------------------------- | --------------------------------------------------------- | ------ | ---- |
| onChange               | 选中项发生变化时的回调                          | (selectedRowKeys: React.Key[], selectedRows: T[]) => void | -      |      |
| selectedRowKeys        | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[]\|number[]                                        |        |      |
| defaultSelectedRowKeys | 默认选中项的 key 数组                           | string[]\|number[]                                        |        |      |
