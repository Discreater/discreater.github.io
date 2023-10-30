---
title: Computer Arithmetic
tags: "WIP"
date: "2023-01-06"
---


# Computer Arithmetic

[Credits](#Credits)

# Numbers and Arithmetic

## 1.3 NUMBERS AND THEIR ENCODINGS

数字表示形式

1. 石头或木棍，不同的石头或木棍表示5个或10个的一组
2. 罗马数字 I, V, X, L, C, D, M, ((I)) 和 (((I)) 分别表示 1, 5, 10, 50, 100, 500, 1000, 10 000 和 100 000，不适合表达非常大的数字
3. **Positional system**: 数值表示种每个符号的值不仅依赖于其形状，而且依赖于它相对于其他符号的位置，比如数字 222，每个 "2" 都代表不同的值，最左边的是 200，中间的是 20，最右边的是 2.
4. **Fixed-radix** positional system: 每个位置上的单位值都是右边相邻位置上单位值的常数倍。我们日常用的十进制数系统就是 radix 为常数 10 的 positional system. 时间则是 **mixed-radix** positional system.

## 1.4 FIXED-RADIX POSITIONAL NUMBER SYSTEMS

常规的 fixed-radix, fixed-point positional number system 通常基于正整数 radix（base）$r$ 和隐式数字集 $\{0, 1···, r - 1\}$。每个无符号数都由长度为 ${k+l}$ 的数字向量组成，${k}$ 为整数部分，${l}$ 为小数部分。
$$(x_{k-1}x_{k-2}\cdots x_1x_0.x_{-1}x_{-2}\cdots x_{-l})_r = \sum_{i=-l}^{k-1} x_ir^i$$

> EXAMPLE 1.1 平衡三元数: $r=3$，数字集 $[-1, 1]$

> EXAMPLE 1.2 负radix: radix $-r$，数字集 $[0, r-1]$
> $$(\cdots x_5x) $$


## Credits

https://www.zhihu.com/people/resens
