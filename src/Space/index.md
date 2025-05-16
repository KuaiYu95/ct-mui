---
title: Space
group:
  title: 布局
---

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 代码演示

```jsx
import { Space } from 'ct-mui';

export default () => (
  <Space wrap size={20}>
    <div style={{ background: 'tan' }}>这是一段文字</div>
    <div style={{ background: 'tan' }}>这是另一段文字</div>
    <div style={{ background: 'tan' }}>这是一段文字</div>
    <div style={{ background: 'tan' }}>这是另一段文字</div>
    <div style={{ background: 'tan' }}>这是一段文字</div>
    <div style={{ background: 'tan' }}>这是另一段文字</div>
    <div style={{ background: 'tan' }}>这是一段文字</div>
    <div style={{ background: 'tan' }}>这是另一段文字</div>
  </Space>
);
```

## API

| 参数      | 说明                                   | 类型                                     | 默认值       | 版本 |
| --------- | -------------------------------------- | ---------------------------------------- | ------------ | ---- |
| align     | 对齐方式                               | `start` \| `end` \|`center` \|`baseline` | -            |      |
| direction | 间距方向                               | `vertical` \| `horizontal`               | `horizontal` |      |
| size      | 间距大小                               | `small` \| `middle` \|`lager` \| number  | `small`      |      |
| wrap      | 是否自动换行，仅在 `horizontal` 时有效 | boolean                                  | false        |      |
