---
title: Pagination 分页
group:
  title: 导航
---

# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

```jsx
import { Pagination, ThemeProvider } from 'ct-mui';
import { createTheme } from '@mui/material';

export default () => (
  <ThemeProvider
    theme={createTheme({
      cssVariables: true,
      palette: {
        primary: {
          main: '#206CFF',
        },
      },
    })}
  >
    {' '}
    <Pagination total={100} page={1} />{' '}
  </ThemeProvider>
);
```

## API

| 参数            | 说明                                                       | 类型                     | 默认值                     | 版本 |
| --------------- | ---------------------------------------------------------- | ------------------------ | -------------------------- | ---- |
| page            | 当前页数                                                   | number                   | 1                          |      |
| pageSize        | 每页条数                                                   | number                   | 20                         |      |
| pageSizeOptions | 指定每页可以显示多少条                                     | string\[] \| number\[]   | \[`10`, `20`, `50`, `100`] |      |
| total           | 数据总数                                                   | number                   | 0                          |      |
| onChange        | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize) | -                          |      |
