---
id: cpho-f-2018-q5
source: cpho-f
native_id: "五、质量为 $M$ 的绝热薄壁容器处于远离其他星体的太空（可视为真空）中。在某惯性系中观察，该容器的初始速度为零。容器的容积为 $V$ ，容器中充有某种单原子分子理想气体，气体的初始分子数、分子质量分别为 $N_{0} 、 m$ ，气体的初始温度为 $T_{0} 。 t=0$ 时容器壁上出现面积为$S$ 的一个小孔，由于小孔漏气导致容器开始运动，但容器没有转动。假设小孔较小，容器中的气体在泄漏过程中始终处于平衡态。已知气体分子速度沿 $x$ 方向的分量 $v_{x}$ 的麦克斯韦分布函数为 $f\left(v_{x}\right)=\sqrt{\frac{m}{2 \pi k T}} \exp \left(-\frac{m v_{x}^{2}}{2 k T}\right)$（ $k$ 为玻尔兹曼常量）。在泄漏过程中，求："
year: 2018
language: zh
translated: false
topic: [thermodynamics, mechanics]
subtopic: [kinetic-theory, ideal-gas, variable-mass, momentum, temperature]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 55
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2018.mmd"
verification_status: pending
---

五、质量为 $M$ 的绝热薄壁容器处于远离其他星体的太空（可视为真空）中。在某惯性系中观察，该容器的初始速度为零。容器的容积为 $V$ ，容器中充有某种单原子分子理想气体，气体的初始分子数、分子质量分别为 $N_{0} 、 m$ ，气体的初始温度为 $T_{0} 。 t=0$ 时容器壁上出现面积为$S$ 的一个小孔，由于小孔漏气导致容器开始运动，但容器没有转动。假设小孔较小，容器中的气体在泄漏过程中始终处于平衡态。已知气体分子速度沿 $x$ 方向的分量 $v_{x}$ 的麦克斯韦分布函数为 $f\left(v_{x}\right)=\sqrt{\frac{m}{2 \pi k T}} \exp \left(-\frac{m v_{x}^{2}}{2 k T}\right)$（ $k$ 为玻尔兹曼常量）。在泄漏过程中，求：

（1） 当气体的分子数密度为 $n$ 、温度为 $T$ 时在单位时间内从小孔单位面积泄出的气体分子数；
（2） 当容器中气体温度为 $T$ 时，从小孔泄出的气体分子相对于容器的平均动能；
（3） $t$ 时刻容器中气体的温度；
（4） $t$ 时刻容器运动速度的大小（假设 $M \gg N_{0} m$ ）。

已知积分公式： $\int_{0}^{\infty} x \mathrm{e}^{-A x^{2}} \mathrm{~d} x=\frac{1}{2 A}, \int_{0}^{\infty} x^{2} \mathrm{e}^{-A x^{2}} \mathrm{~d} x=\frac{1}{4} \sqrt{\frac{\pi}{A^{3}}}, \int_{0}^{\infty} x^{3} \mathrm{e}^{-A x^{2}} \mathrm{~d} x=\frac{1}{2 A^{2}}$

参考解答：
（1）设小孔垂直于 $x$ 方向。在 $\mathrm{d} t$ 时间范围内泄出小孔的气体分子数等于处于小孔内侧体积为$v_{x} S \mathrm{~d} t$ 柱体中垂直小孔方向速度分量在 $v_{x}$ 到 $v_{x}+\mathrm{d} v_{x}$ 范围内的气体分子数。该柱体中的符合条件的气体分子数为 $n_{v_{x}} S v_{x} \mathrm{~d} t \mathrm{~d} v_{x}$ ，其中 $n_{v_{x}}$ 为速度为 $v_{x}$ 的气体分子的分子数密度，其与分子数密度 $n$ 的关系为

$$
n_{v_{x}}=n f\left(v_{x}\right)=n \sqrt{\frac{m}{2 \pi k T}} \exp \left(-\frac{m v_{x}^{2}}{2 k T}\right)
$$

小孔处单位时间单位面积泄出气体的平均分子数为

$$
N_{\text {泄 }}=\int_{0}^{\infty} n_{v_{x}} v_{x} \mathrm{~d} v_{x}=\sqrt{\frac{m}{2 \pi k T}} \int_{0}^{\infty} v_{x} n \exp \left(-\frac{m v_{x}^{2}}{2 k T}\right) \mathrm{d} v_{x}=n \sqrt{\frac{k T}{2 \pi m}}
$$

（2）在当气体温度为 $T$ 时，泄出气体分子的平均动能为

$$
\bar{E}_{\mathrm{k}}=\frac{1}{N_{\text {泄 }}} \int_{0}^{\infty} \frac{1}{2} m v_{x}^{2} n_{v_{x}} v_{x} d v_{x}+k T
$$

其中 $k T$ 为气体分子垂直于 $x$ 方向速度对平均动能的贡献。将（1）和（2）式代入（3）式得

$$
\begin{aligned}
& \bar{E}_{\mathrm{k}}=\frac{1}{n \sqrt{\frac{k T}{2 \pi m}}} \int_{0}^{\infty} \frac{1}{2} m n \sqrt{\frac{m}{2 \pi k T}} v_{x}^{3} \exp \left(-\frac{m v_{x}^{2}}{2 k T}\right) \mathrm{d} v_{x}+k T \\
& =\frac{1}{\sqrt{\frac{k T}{2 \pi m}}} \frac{1}{2} m \sqrt{\frac{m}{2 \pi k T}} \frac{1}{2(m / 2 k T)^{2}}+k T=2 k T
\end{aligned}
$$

（3）由于小孔垂直于 $x$ 方向，考虑到对称性，气体泄出后，容器运动速度沿 $x$ 轴负方向。设在时刻 $t$ 容器中气体的分子数为 $N$ ，容器整体运动速度大小为 $u$ ；在时刻 $t+\mathrm{d} t$ 容器中气体的分子数为 $N+\mathrm{d} N$ ，容器整体运动速度大小为 $u+\mathrm{d} u$ 。此过程中整个体系的动量守恒

$$
(M+N m) u=[(M+N m+m \mathrm{~d} N)(u+\mathrm{d} u)]-m \mathrm{~d} N\left(u-\bar{v}_{x}\right)
$$

其中 $\bar{v}_{x}$ 为 $\mathrm{d} t$ 时间内泄出的气体分子在 $x$ 方向上的平均速度大小，注意 $\mathrm{d} N$ 为负值。化简后并去

除高阶小量得

$$
(M+N m) \mathrm{d} u=-m \bar{v}_{x} \mathrm{~d} N
$$

在此过程中体系的能量守恒。因此有

$$
\begin{aligned}
\frac{1}{2}(M+N m) u^{2}+\frac{3}{2} N k T & =\frac{1}{2}(M+N m+\mathrm{d} N m)(u+\mathrm{d} u)^{2}+\frac{3}{2}(N+\mathrm{d} N) k(T+d T) \\
& -\frac{1}{2} \mathrm{~d} N m \overline{\left(u-v_{x}\right)^{2}}-\mathrm{d} N k T
\end{aligned}
$$

方程左边两项分别为 $\mathrm{d} t$ 前体系整体平动动能和内能。右边前两项分别为 $\mathrm{d} t$ 后体系整体平动动能、内能；后两项对应泄出气体分子的平均动能。化简后并去除高阶小量得

$$
(M+N m) u \mathrm{~d} u+\frac{3}{2} N k \mathrm{~d} T+\frac{1}{2} k T \mathrm{~d} N+m u \bar{v}_{x} \mathrm{~d} N-\frac{1}{2} m \overline{v_{x}^{2}} \mathrm{~d} N=0
$$

将（6）式代入（8）式得

$$
\left(\frac{1}{2} m \overline{v_{x}^{2}}-\frac{1}{2} k T\right) \mathrm{d} N=\frac{3}{2} N k \mathrm{~d} T
$$

由（4）式得

$$
\frac{1}{2} m \overline{v_{x}^{2}}+k T=2 k T
$$

此即

$$
\frac{1}{2} m \overline{v_{x}^{2}}=k T
$$

将上式代入（9）式得

$$
\frac{1}{2} k T \mathrm{~d} N=\frac{3}{2} N k \mathrm{~d} T
$$

此即

$$
\frac{\mathrm{d} N}{N}=3 \frac{\mathrm{~d} T}{T}
$$

两边积分得

$$
T=C N^{1 / 3}
$$

式中 $C$ 为积分常数。代入初始条件得

$$
T_{0}=C N_{0}^{1 / 3} \quad C=\frac{T_{0}}{N_{0}^{1 / 3}}
$$

由（2）式， $\mathrm{d} t$ 时间内泄漏出的气体分子数为

$$
\mathrm{d} N=-\frac{N}{V} S \sqrt{\frac{k T}{2 \pi m}} \mathrm{~d} t=-\frac{N^{7 / 6}}{V} S \sqrt{\frac{k C}{2 \pi m}} \mathrm{~d} t
$$

积分得

$$
N=N_{0}\left(1+\frac{S}{6 V} \sqrt{\frac{k T_{0}}{2 \pi m}} t\right)^{-6}
$$

由此得，$t$ 时刻容器中气体的温度为

$$
T=C N^{1 / 3}=T_{0}\left(1+\frac{S}{6 V} \sqrt{\frac{k T_{0}}{2 \pi m}} t\right)^{-2}
$$

（4）由（6）式得

$$
\mathrm{d} u=-\frac{m \bar{v}_{x} \mathrm{~d} N}{M+N m}
$$

其中 $\bar{v}_{x}$ 为泄出气体分子的平均速度大小

$$
\begin{aligned}
\bar{v}_{x} & =\frac{1}{N_{\text {泄 }}} \int_{0}^{\infty} v_{x} n_{v_{x}} v_{x} d v_{x}=\frac{1}{\sqrt{\frac{k T}{2 \pi m}}} \int_{0}^{\infty} \sqrt{\frac{m}{2 \pi k T}} v_{x}^{2} \exp \left(-\frac{m v_{x}^{2}}{2 k T}\right) \mathrm{d} v_{m x} \\
& =\frac{1}{4} \frac{1}{\sqrt{\frac{k T}{2 \pi m}}} \sqrt{\frac{m}{2 \pi k T}} \sqrt{\frac{\pi}{(m / 2 k T)^{3}}}=\sqrt{\frac{\pi k T}{2 m}}
\end{aligned}
$$

将（17）式代入（16）式得

$$
u(t)=-\int_{N_{0}}^{N(t)} \sqrt{\frac{\pi m k T}{2}} \frac{\mathrm{~d} N}{M+N m}=-\sqrt{\frac{\pi m k T_{0}}{2 N_{0}^{1 / 3}}} \int_{N_{0}}^{N(t)} \frac{N^{1 / 6} \mathrm{~d} N}{M+N m}
$$

当容器质量远大于其中气体质量（ $M \gg N_{0} m$ ）时，上式可近似为

$$
u(t) \approx-\frac{1}{M} \sqrt{\frac{\pi m k T_{0}}{2 N_{0}^{1 / 3}}} \int_{N_{0}}^{N(t)} N^{1 / 6} \mathrm{~d} N=-\frac{6}{7 M} \sqrt{\frac{\pi m k T_{0}}{2 N_{0}^{1 / 3}}}\left(N(t)^{7 / 6}-N_{0}^{7 / 6}\right)
$$

将（14）式代入（19）式得，$t$ 时刻容器运动速度的大小为

$$
u(t) \approx \frac{6 N_{0}}{7 M} \sqrt{\frac{\pi m k T_{0}}{2}}\left(1-\left(1+\frac{S}{6 V} \sqrt{\frac{k T_{0}}{2 \pi m}} t\right)^{-7}\right)
$$
