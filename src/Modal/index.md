---
title: Modal 对话框
group: 反馈
---

# Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

` <code src="./demo/basic.tsx">基本``</code> `
` <code src="./demo/confirm.tsx">确认对话框``</code> `

## API

| 参数              | 说明                                                       | 类型                              | 默认值  | 版本 |
| ----------------- | ---------------------------------------------------------- | --------------------------------- | ------- | ---- |
| open              | 对话框是否可见                                             | boolean                           | -       |      |
| title             | 标题                                                       | ReactNode                         | -       |      |
| footer            | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode                         | -       |      |
| okText            | 确认按钮文字                                               | ReactNode                         | 确认    |      |
| cancelText        | 取消按钮文字                                               | ReactNode                         | 取消    |      |
| showCancel        | 是否展示取消按钮                                           | boolean                           | true    |      |
| cancleButtonProps | 确认按钮                                                   | ButtonProps                       | -       |      |
| okButtonProps     | 取消按钮                                                   | ButtonProps                       | primary |      |
| closable          | 是否显示右上角的关闭按钮                                   | boolean                           | true    |      |
| onOk              | 点击确定回调，返回 promise 时 resolve 后自动关闭           | function(e)                       | -       |      |
| onCancel          | 点击取消按钮                                               | boolean\| { goButton: ReactNode } | false   |      |
| onClose           | 点击遮罩层或右上角叉的回调， 如果不存在，则用 onCancel     | boolean                           | -       |      |
