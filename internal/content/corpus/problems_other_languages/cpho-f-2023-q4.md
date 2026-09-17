---
id: cpho-f-2023-q4
source: cpho-f
native_id: "四、（50 分）当两个原子之间的距离较小时，两者之间的相互作用表现为强的排斥；距离较大时，其相互作用表现为弱的吸引。大量原子可通过此相互作用结合成晶体。温度趋于 0 K时，原子排列为周期性的空间点阵，处于力平衡状态；温度高于 0 K 时，原子将在平衡位置附近做小幅振动。考虑由质量为 $M$ 的同种原子组成的立方晶体，试用如下模型讨论原子如何结合成晶体以及晶体中原子振动对其热学性质的影响。"
year: 2023
language: zh
translated: false
topic: [quantum-physics, thermodynamics]
subtopic: [solid-state, oscillations-mechanical, statistical-distributions, potential]
difficulty: null
difficulty_norm: 5
math_tools: [calculus, series-complex]
format: open-ended
core_ideas: []
estimated_time_min: 90
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2023.mmd"
verification_status: pending
---

四、（50 分）当两个原子之间的距离较小时，两者之间的相互作用表现为强的排斥；距离较大时，其相互作用表现为弱的吸引。大量原子可通过此相互作用结合成晶体。温度趋于 0 K时，原子排列为周期性的空间点阵，处于力平衡状态；温度高于 0 K 时，原子将在平衡位置附近做小幅振动。考虑由质量为 $M$ 的同种原子组成的立方晶体，试用如下模型讨论原子如何结合成晶体以及晶体中原子振动对其热学性质的影响。
（1）距离为 $R$ 的两个原子之间的相互作用势能 $V(R)$ 可以近似表示为伦纳德－琼斯势

$$
V(R)=\varepsilon\left[\left(\frac{r_{0}}{R}\right)^{12}-\left(\frac{r_{0}}{R}\right)^{6}\right]
$$

其中 $\varepsilon>0$ 表征相互作用强度，$r_{0}$ 表征力程。假设平衡时原子排列在立方点阵的顶点上，即原子的平衡位置为

$$
\boldsymbol{R}_{l_{x} l_{y} l_{z}}=\left(l_{x} a, l_{y} a, l_{z} a\right), l_{x}, l_{y}, l_{z}=\cdots,-2,-1,0,1,2, \cdots
$$

其中 $a$ 是晶格常数。为简单起见，假设伦纳德－琼斯势的形式在晶体熔化前一直成立，参量 $\varepsilon$和 $r_{0}$ 也视为不变。试导出晶格常数 $a$ 的表达式。计算结果中可包含如下常数：

$$
A_{n}=\sum_{l_{x}, l_{y}, l_{z}}\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{-n / 2}
$$

其中 $n$ 是任意正整数，$\sum_{l_{x}, l_{y}, l_{z}} \cdots$ 表示对所有不全为零的 $l_{x}, l_{y}, l_{z}$ 求和。
（2）试计算近邻原子、次近邻原子和次次近邻原子分别对 $A_{6}$ 值的贡献。
（3）严格求解晶体中原子在平衡位置 $\boldsymbol{R}_{l_{x} l_{y} l_{z}}$ 附近的小幅振动是非常复杂的。为简化起见，爱因斯坦假设原子的运动互不干扰，即考虑任意一个原子的振动时，假设其它原子都静止于各自的平衡位置处。在此模型下，求上述晶体中每个原子的小幅振动的圆频率 $\omega_{\mathrm{E}}$（结果可包含 $a$ 和 $A_{n}$ ）。

以下假设爱因斯坦模型（包括上述关于圆频率 $\omega_{\mathrm{E}}$ 的结果）仍然可适用于大振幅的情形：
（4）原子按振动状态的分布为玻尔兹曼分布：当绝对温度为 $T$ 时，原子的动量大小在$[p, p+\mathrm{d} p]$ 内、相对于平衡位置的位移大小在 $[u, u+\mathrm{d} u]$ 内的概率正比于

$$
\mathrm{e}^{-\frac{E}{k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p u^{2} \mathrm{~d} u
$$

其中 $E$ 是动量大小为 $p$ 、位移大小为 $u$ 时原子的能量，$k_{\mathrm{B}}$ 是玻尔兹曼常量。已知阿伏伽德罗常数为 $N_{\mathrm{A}}$ ，试计算上述晶体的定容摩尔热容（须有必要的推导过程）。
（5）原子振动的振幅随温度升高而增大。按照林德曼判据，当偏离平衡位置的距离的平均值大于 $C_{\mathrm{L}} a$ 时，晶体就会熔化，其中 $C_{\mathrm{L}}$ 为常数（量级为0．1）。试导出晶体熔点的表达式（结果可包含 $a$ 和 $\omega_{\mathrm{E}}$ ）。
提示：$\quad \int_{0}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{~d} x=\frac{\sqrt{\pi}}{2}, \quad \int_{0}^{+\infty} \mathrm{e}^{-x^{2}} x^{2} \mathrm{~d} x=\frac{\sqrt{\pi}}{4}, \quad \int_{0}^{+\infty} \mathrm{e}^{-x^{2}} x^{3} \mathrm{~d} x=\frac{1}{2}, \quad \int_{0}^{+\infty} \mathrm{e}^{-x^{2}} x^{4} \mathrm{~d} x=\frac{3 \sqrt{\pi}}{8}$

$$
\int_{0}^{+\infty} \int_{0}^{+\infty} f(x) g(y) \mathrm{d} x \mathrm{~d} y=\int_{0}^{+\infty} f(x) \mathrm{d} x \cdot \int_{0}^{+\infty} g(y) \mathrm{d} y
$$

参考解答：
（1）由于这些原子都相同，只考虑处于原点的原子即可。处于原点的原子与其它原子的相互作用势能为

$$
\begin{aligned}
V_{0} & =\sum_{l_{x}, l_{y}, l_{z}} \varepsilon\left[\left(\frac{r_{0}}{R_{l_{x} l_{y} l_{z}}}\right)^{12}-\left(\frac{r_{0}}{R_{l_{x} l_{y} l_{z}}}\right)^{6}\right] \\
& =\varepsilon \sum_{l_{x}, l_{y}, l_{z}} \frac{r_{0}^{12}}{\left(l_{x}^{2} a^{2}+l_{y}^{2} a^{2}+l_{z}^{2} a^{2}\right)^{6}}-\varepsilon \sum_{l_{x}, l_{y}, l_{z}} \frac{r_{0}^{6}}{\left(l_{x}^{2} a^{2}+l_{y}^{2} a^{2}+l_{z}^{2} a^{2}\right)^{3}} \\
& =\varepsilon\left(\frac{r_{0}}{a}\right)^{12} \sum_{l_{x}, l_{y}, l_{z}} \frac{1}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{6}}-\varepsilon\left(\frac{r_{0}}{a}\right)^{6} \sum_{l_{x}, l_{y}, l_{z}} \frac{1}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{3}} \\
& =\varepsilon\left[\left(\frac{r_{0}}{a}\right)^{12} A_{12}-\left(\frac{r_{0}}{a}\right)^{6} A_{6}\right]
\end{aligned}
$$

达到平衡后，势能极小，因此

$$
0=\frac{\mathrm{d} V_{0}}{\mathrm{~d} a}=\varepsilon\left[-12 A_{12} \frac{r_{0}^{12}}{a^{13}}+6 A_{6} \frac{r_{0}^{6}}{a^{7}}\right]
$$

于是

$$
-12 A_{12} \frac{r_{0}^{12}}{a^{13}}+6 A_{6} \frac{r_{0}^{6}}{a^{7}}=0
$$

可解得晶格常数 $a$ 为

$$
a=\left(\frac{2 A_{12}}{A_{6}}\right)^{1 / 6} r_{0}
$$

（2）处于原点的原子共有 6 个近邻原子，其平衡位置为

$$
\left(l_{x}, l_{y}, l_{z}\right)=(-1,0,0),(+1,0,0),(0,-1,0),(0,+1,0),(0,0,-1),(0,0,+1)
$$

根据 $A_{n}$ 的定义可知它们对常数 $A_{6}$ 的贡献为

$$
A_{6}^{\prime}=1+1+1+1+1+1=6
$$

类似地有12个次近邻原子，其平衡位置为

$$
\begin{aligned}
\left(l_{x}, l_{y}, l_{z}\right)= & (-1,-1,0),(-1,+1,0),(+1,-1,0),(+1,+1,0),(-1,0,-1),(-1,0,+1),(+1,0,-1), \\
& (+1,0,+1),(0,-1,-1),(0,-1,+1),(0,+1,-1),(0,+1,+1)
\end{aligned}
$$

它们对常数 $A_{6}$ 的贡献为

$$
A_{6}^{\prime \prime}=12 \times 2^{-3}=\frac{3}{2}
$$

处于原点的原子共有8个次次近邻原子，其平衡位置为

$$
\begin{gathered}
\left(l_{x}, l_{y}, l_{z}\right)=(-1,-1,-1),(-1,-1,+1),(-1,+1,-1),(-1,+1,+1),(+1,-1,-1), \\
(+1,-1,+1),(+1,+1,-1),(+1,+1,+1)
\end{gathered}
$$

它们对常数 $A_{6}$ 的贡献为

$$
A_{6}^{\prime \prime \prime}=8 \times 3^{-3}=\frac{8}{27}
$$

可见远离该原子的其他原子对常数 $A_{6}$ 贡献较小。
（3）由于所有原子都相同，只需考虑平衡位置为原点的原子即可。按照爱因斯坦的假设，其它原子仍然位于 $\boldsymbol{R}_{l_{x} l_{y} l_{z}}$ 处，因此当处于原点的原子偏离平衡位置的位移为 $\boldsymbol{u}$ 时，它与其他原子的相互作用势能为

$$
V=\sum_{I_{x}, I_{y}, I_{z}} \varepsilon\left[\left(\frac{r_{0}}{\left|\boldsymbol{R}_{I_{x} I_{y} I_{z}}-\boldsymbol{u}\right|}\right)^{12}-\left(\frac{r_{0}}{\left|\boldsymbol{R}_{I_{x} I_{y} I_{z}}-\boldsymbol{u}\right|}\right)^{6}\right]
$$

当 $u$ 较小时，可以把上式对小量 $u$ 做级数展开。利用以下公式

$$
\begin{aligned}
|\boldsymbol{R}-\boldsymbol{u}|^{-n} & =\left|R^{2}-2 \boldsymbol{R} \cdot \boldsymbol{u}+u^{2}\right|^{-\frac{n}{2}}=R^{-n}\left(1-2 \frac{\boldsymbol{R} \cdot \boldsymbol{u}}{R^{2}}+\frac{u^{2}}{R^{2}}\right)^{-\frac{n}{2}} \\
& =R^{-n}\left[1-\frac{n}{2}\left(-2 \frac{\boldsymbol{R} \cdot \boldsymbol{u}}{R^{2}}+\frac{u^{2}}{R^{2}}\right)+\frac{1}{2} \frac{-n}{2}\left(\frac{-n}{2}-1\right)\left(-2 \frac{\boldsymbol{R} \cdot \boldsymbol{u}}{R^{2}}+\frac{u^{2}}{R^{2}}\right)^{2}+\cdots\right] \\
& =R^{-n}\left[1+n \frac{\boldsymbol{R} \cdot \boldsymbol{u}}{R^{2}}-\frac{n}{2} \frac{u^{2}}{R^{2}}+\frac{n(n+2)}{2}\left(\frac{\boldsymbol{R} \cdot \boldsymbol{u}}{R^{2}}\right)^{2}+\cdots\right]
\end{aligned}
$$

保留到 $u^{2}$ 项可得

$$
\sum_{l_{x}, l_{y}, l_{z}}\left|\boldsymbol{R}_{l_{x} l_{y} l_{z}}-\boldsymbol{u}\right|^{-n}=\sum_{l_{x}, l_{y}, l_{z}} R_{l_{x} l_{y} l_{z}}^{-n}+n \sum_{l_{x}, l_{y}, l_{z}} \frac{\boldsymbol{R}_{l_{x} l_{y} l_{z}} \cdot \boldsymbol{u}}{R_{l_{x} l_{y} l_{z}}^{n+2}}-\frac{n}{2} \sum_{l_{x}, l_{y}, l_{z}} \frac{u^{2}}{R_{l_{x} l_{y} l_{z}}^{n+2}}+\frac{n(n+2)}{2} \sum_{l_{x}, l_{y}, l_{z}} \frac{\left(\boldsymbol{R}_{l_{x} l_{y} l_{z}} \cdot \boldsymbol{u}\right)^{2}}{R_{l_{x} l_{y} l_{z}}^{n+4}}
$$

利用 $\left(l_{x}, l_{y}, l_{z}\right)$ 与 $\left(-l_{x},-l_{y},-l_{z}\right)$ 成对出现的对称性有

$$
\begin{aligned}
& \sum_{l_{x}, l_{y}, l_{z}} \frac{l_{x}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=\sum_{l_{x}, l_{y}, l_{z}} \frac{l_{y}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=\sum_{l_{x}, l_{y}, l_{z}} \frac{l_{z}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=0 \\
& \sum_{l_{x}, l_{y}, l_{z}} \frac{l_{x} l_{y}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=\sum_{l_{x}, l_{y}, l_{z}} \frac{l_{y} l_{z}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=\sum_{l_{x}, l_{y}, l_{z}} \frac{l_{z} l_{x}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=0
\end{aligned}
$$

同理利用 $l_{x} \leftrightarrow l_{y} \leftrightarrow l_{z}$ 的对称性可得，

$$
\begin{array}{r}
\sum_{l_{x}, l_{y}, l_{z}} \frac{l_{x}^{2}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=\sum_{l_{x}, l_{y}, l_{z}} \frac{l_{y}^{2}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=\sum_{l_{x}, l_{y}, l_{z}} \frac{l_{z}^{2}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}} \\
=\frac{1}{3} \sum_{l_{x}, l_{y}, l_{z}} \frac{l_{x}^{2}+l_{y}^{2}+l_{z}^{2}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{n / 2}}=\frac{1}{3} \sum_{l_{x}, l_{y}, l_{z}}\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{-\frac{n-2}{2}}=\frac{1}{3} A_{n-2}
\end{array}
$$

于是有

$$
\begin{gathered}
\sum_{l_{x}, l_{y}, l_{z}} \frac{\boldsymbol{R}_{x l} l_{y} l_{z} \cdot \boldsymbol{u}}{R_{x l}^{n+2} l_{z}}=\frac{1}{a^{n+1}} \sum_{l_{x}, l_{y}, l_{z}} \frac{u_{x} l_{x}+u_{y} l_{y}+u_{z} l_{z}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{(n+2) / 2}}=0 \\
\sum_{l_{x}, l_{y}, l_{z}} \frac{\left(\boldsymbol{R}_{x l} l_{y} l_{z} \cdot \boldsymbol{u}\right)^{2}}{R_{l_{x} l_{y} l_{z}}^{n+4}}=\frac{1}{a^{n+2}} \sum_{l_{x}, l_{y}, l_{z}} \frac{u_{x}^{2} l_{x}^{2}+u_{y}^{2} l_{y}^{2}+u_{z}^{2} l_{z}^{2}+2 u_{x} u_{y} l_{x} l_{y}+2 u_{y} u_{z} l_{y} l_{z}+2 u_{z} u_{x} l_{z} l_{x}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{(n+4) / 2}} \\
=\frac{1}{a^{n+2}} \sum_{l_{x}, l_{y}, l_{z}} \frac{u_{x}^{2} l_{x}^{2}+u_{y}^{2} l_{y}^{2}+u_{z}^{2} l_{z}^{2}}{\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{(n+4) / 2}}=\frac{u^{2}}{3 a^{n+2}} \sum_{l_{x}, l_{y}, l_{z}}\left(l_{x}^{2}+l_{y}^{2}+l_{z}^{2}\right)^{-\frac{n+2}{2}}=\frac{u^{2}}{3 a^{n+2}} A_{n+2}
\end{gathered}
$$

利用以上这些结果可得

$$
\begin{aligned}
\sum_{l_{x}, l_{y}, l_{z}}\left|\boldsymbol{R}_{l_{x} l_{y} l_{z}}-\boldsymbol{u}\right|^{-n} & =A_{n} a^{-n}-\frac{n}{2} A_{n+2} a^{-(n+2)} u^{2}+\frac{n(n+2)}{6} A_{n+2} a^{-(n+2)} u^{2} \\
& =A_{n} a^{-n}+\frac{n(n-1)}{6} A_{n+2} a^{-(n+2)} u^{2}
\end{aligned}
$$

所以原点处的原子偏离平衡位置的位移为 $\boldsymbol{u}$ 时系统能量为

$$
\begin{aligned}
V & =\varepsilon \sum_{l_{x}, l_{y}, l_{z}}\left(r_{0}^{12}\left|\boldsymbol{R}_{l_{x} l_{y} l_{z}}-\boldsymbol{u}\right|^{-12}-r_{0}^{6}\left|\boldsymbol{R}_{l_{x} l_{y} l_{z}}-\boldsymbol{u}\right|^{-6}\right) \\
& =\varepsilon r_{0}^{12}\left(A_{12} a^{-12}+\frac{12 \times 11}{6} A_{14} a^{-14} u^{2}\right)-\varepsilon r_{0}^{6}\left(A_{6} a^{-6}+\frac{6 \times 5}{6} A_{8} a^{-8} u^{2}\right) \\
& =\varepsilon\left[A_{12}\left(\frac{r_{0}}{a}\right)^{12}-A_{6}\left(\frac{r_{0}}{a}\right)^{6}\right]+\varepsilon\left(22 A_{14} \frac{r_{0}^{12}}{a^{14}}-5 A_{8} \frac{r_{0}^{6}}{a^{8}}\right) u^{2} \\
& =V_{0}+\frac{1}{2} M \omega_{\mathrm{E}}^{2} u^{2}
\end{aligned}
$$

这里 $V_{0}=\varepsilon\left[A_{12}\left(\frac{r_{0}}{a}\right)^{12}-A_{6}\left(\frac{r_{0}}{a}\right)^{6}\right]$ ，由此可以得到爱因斯坦频率为

$$
\omega_{\mathrm{E}}=\sqrt{\frac{2 \varepsilon}{M}\left(22 A_{14} \frac{r_{0}^{12}}{a^{14}}-5 A_{8} \frac{r_{0}^{6}}{a^{8}}\right)}
$$

（4）动量大小为 $p$ 、位移大小为 $u$ 时原子的能量 $E$ 为

$$
E(p, u)=V_{0}+\frac{p^{2}}{2 M}+\frac{1}{2} M \omega_{\mathrm{E}}^{2} u^{2}
$$

每个原子的平均能量为

$$
\begin{aligned}
\bar{E} & =\frac{\int_{0}^{+\infty} \int_{0}^{+\infty} E \mathrm{e}^{-\frac{E}{k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p u^{2} \mathrm{~d} u}{\int_{0}^{+\infty} \int_{0}^{+\infty} \mathrm{e}^{-\frac{E}{k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p u^{2} \mathrm{~d} u}=\frac{\int_{0}^{+\infty} \int_{0}^{+\infty}\left(V_{0}+\frac{p^{2}}{2 M}+\frac{1}{2} M \omega_{\mathrm{E}}^{2} u^{2}\right) \mathrm{e}^{-\frac{V_{0}}{k_{\mathrm{B}} T}} \mathrm{e}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p u^{2} \mathrm{~d} u}{\int_{0}^{+\infty} \int_{0}^{+\infty} \mathrm{e}^{-\frac{V_{0}}{k_{\mathrm{B}} T}} \mathrm{e}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p u^{2} \mathrm{~d} u} \\
& =V_{0}+\frac{1}{2 M} \frac{\int_{0}^{+\infty} \mathrm{e}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} p^{4} \mathrm{~d} p \int_{0}^{+\infty} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} u^{2} \mathrm{~d} u}{\int_{0}^{+\infty} \mathrm{e}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p \int_{0}^{+\infty} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} u^{2} \mathrm{~d} u}+\frac{1}{2} M \omega_{\mathrm{E}}^{2} \frac{\mathrm{e}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p \int_{0}^{+\infty} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} u^{4} \mathrm{~d} u}{\int_{0}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p \int_{0}^{+\infty} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} u^{2} \mathrm{~d} u} \\
& =V_{0}+\frac{1}{2 M} \frac{\int_{0}^{+\infty} \mathrm{e}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} p^{4} \mathrm{~d} p}{\int_{0}^{+\infty} \mathrm{e}^{-\frac{p^{2}}{2 M k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p}+\frac{1}{2} M \omega_{\mathrm{E}}^{2} \frac{\int_{0}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 \mathrm{~B}_{\mathrm{B}} T}} u^{4} \mathrm{~d} u}{\int_{0}^{+\infty} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} \mathrm{u}^{2}}{2 k_{\mathrm{B}} T}} u^{2} \mathrm{~d} u} \\
& =V_{0}+2 k_{\mathrm{B}} T \int_{0}^{+\infty} \mathrm{e}^{-x^{2}} \mathrm{~d} x
\end{aligned}
$$

由于

$$
\frac{\mathrm{de}^{-x^{2}}}{\mathrm{~d} x}=-2 x \mathrm{e}^{-x^{2}}
$$

利用分部积分可得

$$
\begin{aligned}
& \int_{0}^{\infty} \mathrm{e}^{-x^{2}} x^{2} \mathrm{~d} x=-\frac{1}{2} \int_{0}^{\infty} \mathrm{e} \mathrm{~d} e^{-x^{2}}=\frac{1}{2} \int_{0}^{\infty} \mathrm{e}^{-x^{2}} \mathrm{~d} x=\frac{\sqrt{\pi}}{4} \\
& \int_{0}^{\infty} \mathrm{e}^{-x^{2}} x^{4} \mathrm{~d} x=-\frac{1}{2} \int_{0}^{\infty} x^{3} \mathrm{de}^{-x^{2}}=\frac{3}{2} \int_{0}^{\infty} x^{2} \mathrm{e}^{-x^{2}} \mathrm{~d} x=\frac{3}{2} \frac{\sqrt{\pi}}{4}=\frac{3 \sqrt{\pi}}{8}
\end{aligned}
$$

把上面两个积分代入平均能量的表达式，可得每个原子的平均能量为

$$
\bar{E}=V_{0}+3 k_{\mathrm{B}} T
$$

1 mol 晶体包含 $N_{\mathrm{A}}$（阿伏伽德罗常数）个原子。因此，在爱因斯坦模型下，1mol 晶体的内能为

$$
U=N_{\mathrm{A}} \bar{E}=N_{\mathrm{A}} V_{0}+3 N_{\mathrm{A}} k_{\mathrm{B}} T
$$

所以定容摩尔热容为

$$
C_{V}=\left(\frac{\partial U}{\partial T}\right)_{V}=3 N_{\mathrm{A}} k_{\mathrm{B}}
$$

（5）原子偏离平衡位置的距离的平均值为

$$
\bar{u}=\frac{\int_{0}^{+\infty} \int_{0}^{+\infty} u \mathrm{e}^{-\frac{E}{k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p u^{2} \mathrm{~d} u}{\int_{0}^{+\infty} \int_{0}^{+\infty} \mathrm{e}^{-\frac{E}{k_{\mathrm{B}} T}} p^{2} \mathrm{~d} p u^{2} \mathrm{~d} u}=\frac{\int_{0}^{+\infty} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} u^{3} \mathrm{~d} u}{\int_{0}^{+\infty} \mathrm{e}^{-\frac{M \omega_{\mathrm{E}}^{2} u^{2}}{2 k_{\mathrm{B}} T}} u^{2} \mathrm{~d} u}=\sqrt{\frac{2 k_{\mathrm{B}} T}{M \omega_{\mathrm{E}}^{2}}} \frac{\int_{0}^{+\infty} \mathrm{e}^{-x^{2}} x^{3} \mathrm{~d} x}{\int_{0}^{+\infty} \mathrm{e}^{-x^{2}} x^{2} \mathrm{~d} x}
$$

利用分部积分和变量替换 $x^{2}=t$ ，得

$$
\int_{0}^{+\infty} \mathrm{e}^{-x^{2}} x^{3} \mathrm{~d} x=-\frac{1}{2} \int_{0}^{+\infty} x^{2} \mathrm{de}^{-x^{2}}=-\frac{1}{2} \int_{0}^{+\infty} t \mathrm{de}^{-t}=\frac{1}{2} \int_{0}^{+\infty} \mathrm{e}^{-t} \mathrm{~d} t=\frac{1}{2}
$$

由此得到

$$
\bar{u}=\sqrt{\frac{2 k_{\mathrm{B}} T}{M \omega_{\mathrm{E}}^{2}}} \frac{\frac{1}{2}}{\frac{\sqrt{\pi}}{4}}=2 \sqrt{\frac{2 k_{\mathrm{B}} T}{\pi M \omega_{\mathrm{E}}^{2}}}
$$

当温度等于熔点时 $T=T_{\mathrm{M}}$ ，按照林德曼判据有

$$
\bar{u}_{\mathrm{M}}=C_{\mathrm{L}} a
$$

此即

$$
\sqrt{\frac{8 k_{\mathrm{B}} T_{\mathrm{M}}}{\pi M \omega_{\mathrm{E}}^{2}}}=C_{\mathrm{L}} a
$$

因此

$$
T_{\mathrm{M}}=\frac{\pi M a^{2} \omega_{\mathrm{E}}^{2} C_{\mathrm{L}}^{2}}{8 k_{\mathrm{B}}}
$$

评分参考：本题50分。
第（1）问8分，（1）式4分，（2）（3）式各2分；
第（2）问6分，（4）（5）（6）式各2分；
第（3）问17分，（7）式4分，（8）式3分，（9）式2分，（15）式2分，（16）式4分，（17）式2分；
第（4）问11分，（18）式2分，（19）式5分，（22）（23）式各1分，（24）式2分，
第（5）问8分，（25）式3分，（27）式2分，（28）式3分。
