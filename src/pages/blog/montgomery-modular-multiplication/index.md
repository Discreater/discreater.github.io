---
title: Montgomery Modular Multiplication 
lang: zh-CN
tags: "crypto,WIP"
date: "2022-10-17 19:15"
---


# Montgomery Modular Multiplication  [WIP]

To compute: $\hat{Z} = \hat{X}\hat{Y}\mod M$, when $M$ is an $N$-bit odd positive integer.

## Montgomery Domain

Assume $R$ is a power of 2 and $R > M$. We can transform $\hat{X}$ into Montgomery domain: $$X = \hat{X}R \mod M, \hat{X} = XR^{-1} \mod M $$

So:
$$ Z = \hat{Z}R \mod M = \hat{X}\hat{Y}R \mod M $$
$$ = \hat{X}RR^{-1}\hat{Y}RR^{-1}R \mod M $$
$$ = XYR^{-1} \mod M $$

Basic Algorithm:

::: pseudocode
% This quicksort algorithm is extracted from Chapter 7, Introduction to Algorithms (3rd edition)
\begin{algorithm}
\caption{Quicksort with lineNumber}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$A, p, r$}
    \IF{$p < r$} 
        \STATE $q = $ \CALL{Partition}{$A, p, r$}
        \STATE \CALL{Quicksort}{$A, p, q - 1$}
        \STATE \CALL{Quicksort}{$A, q + 1, r$}
    \ENDIF
\ENDPROCEDURE
\PROCEDURE{Partition}{$A, p, r$}
    \STATE $x = A[r]$
    \STATE $i = p - 1$
    \FOR{$j = p$ \TO $r - 1$}
        \IF{$A[j] < x$}
            \STATE $i = i + 1$
            \STATE exchange
            $A[i]$ with $A[j]$
        \ENDIF
        \STATE exchange $A[i]$ with $A[r]$
    \ENDFOR
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
:::





