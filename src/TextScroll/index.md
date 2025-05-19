---
title: RemarkAutoLoopScroll 文字滚动
group:
  title: 文字滚动
---

# RemarkAutoLoopScroll 文字滚动

文字自动滚动

```jsx
import { RemarkAutoLoopScroll } from 'ct-mui';

export default () => (
  <RemarkAutoLoopScroll
    id="test"
    text={
      '这是一段很长的文字，这是一段很长的文字，这是一段很长的文字，这是一段很长的文字，这是一段很长的文字，这是一段很长的文字，这是一段很长的文字，这是一段很长的文字，这是一段很长的文字，这是一段很长的文字。'
    }
  />
);
```

## API

| 参数      | 说明         | 类型             | 默认值 | 版本 |
| --------- | ------------ | ---------------- | ------ | ---- |
| id        | 标识         | number \| string |        |      |
| text      | 展示文本     | string           |        |      |
| delay     | 延迟滚动(ms) | number           | 2000   |      |
| animation | 滚动时长(ms) | number           | 15000  |      |
| textSx    | 文本样式     |                  |        |      |
