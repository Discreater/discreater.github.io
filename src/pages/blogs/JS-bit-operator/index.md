---
title: JS 按位操作符溢出问题
lang: zh-CN
tags: "javascript"
date: "2020-03-14"
---

# JS 按位操作符溢出问题

最近刷leetcode的时候，碰到要处理 `int` 上边界($2^{31}-1$)和下边界($-2^{31}$)的情况，这时候想当然地用了移位操作符`<<`来计算2的幂次，本以为js的number类型上限应该大于32位，但是实际情况并不是和想象中的一样，先看结果：

```shell
> 1 << 31
-2147483648 // -2^31
> 1 << 30
1073741824  // 2^30
> -1 << 31
-2147483648
> -(1 << 31)
2147483648
> 1 << 32
1
```

1左移31位变成了负数，出现这种情况是因为js的按位操作符是**将操作数看作32位来计算**，结果也是32位的形式。
下面是[MDN的官方解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Summary)

> **按位操作符（Bitwise operators）** 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。

顺便推荐一波[进阶的解决办法](https://zhuanlan.zhihu.com/p/27662366)，来自知乎的ice1000
