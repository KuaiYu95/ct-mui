---
title: Card 卡片容器
group:
  title: 导航
---

# Card 卡片容器

用于展示的容器

```jsx
import { Card } from 'ct-mui';

export default () => (
  <Card title="标题" extra="操作">
    这是一段文字
  </Card>
);
```

## API

| 参数     | 说明                 | 类型      | 默认值 | 版本 |
| -------- | -------------------- | --------- | ------ | ---- |
| title    | 标题                 | ReactNode | -      |      |
| extra    | 卡片右上角的操作区域 | ReactNode | -      |      |
| children | 内容                 | ReactNode | -      |      |
