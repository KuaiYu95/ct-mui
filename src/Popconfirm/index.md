---
title: Popconfirm气泡确认框
group: 
  title: 反馈
---
# Popconfirm 气泡确认框

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。
和 confirm 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 代码演示

<code src="./demo.tsx"></code>

## API

| 参数     | 说明 | 类型               | 默认值 | 版本 |
| -------- | ---- | ------------------ | ------ | ---- |
| children | 内容 | ReactNode\| string | -      |      |
| title | 标题 | ReactNode\| string | -      |      |
| onConfirm | 点击确认按钮 | function(e) | -      |      |
| onCancel | 点击取消按钮 | function(e) | -      |      |
