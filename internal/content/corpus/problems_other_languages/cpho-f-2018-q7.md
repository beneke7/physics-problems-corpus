---
id: cpho-f-2018-q7
source: cpho-f
native_id: "七、在固体材料中，考虑相互作用后，可以利用＂准粒子＂的概念研究材料的物理性质。准粒子的动能与动量之间的关系可能与真实粒子的不同。当外加电场或磁场时，准粒子的运动往往可以用经典力学的方法来处理。在某种二维界面结构中，存在电量为 $q$ 、有效质量为 $m$ 的准粒子，它只能在 $x-y$ 平面内运动，其动能 $K$ 与动量大小 $p$ 之间的关系可表示为 $K=\frac{p^{2}}{2 m}+\alpha p$ ，其中 $\alpha$ 为正的常量。"
year: 2018
language: zh
translated: false
topic: [quantum-physics, electromagnetism]
subtopic: [solid-state, lorentz-force, electric-field, magnetic-field, circular-motion]
difficulty: null
difficulty_norm: 5
math_tools: []
format: scaffolded
core_ideas: []
estimated_time_min: 45
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2018.mmd"
verification_status: pending
---

七、在固体材料中，考虑相互作用后，可以利用＂准粒子＂的概念研究材料的物理性质。准粒子的动能与动量之间的关系可能与真实粒子的不同。当外加电场或磁场时，准粒子的运动往往可以用经典力学的方法来处理。在某种二维界面结构中，存在电量为 $q$ 、有效质量为 $m$ 的准粒子，它只能在 $x-y$ 平面内运动，其动能 $K$ 与动量大小 $p$ 之间的关系可表示为 $K=\frac{p^{2}}{2 m}+\alpha p$ ，其中 $\alpha$ 为正的常量。
（1）对于质量为 $m$ 的真实的自由粒子，动能 $K$ 与动量大小 $p$ 之间的关系可表示为 $K=\frac{p^{2}}{2 m}$ ，试从动能定理出发，推导该粒子运动的速度 $v$ 与动量 $\boldsymbol{p}$ 之间的关系式；
（2）仿照（1）的方法，推导准粒子运动的速度 $v$ 与动量 $\boldsymbol{p}$ 之间的关系式；
（3）用动能表示准粒子运动速度的大小；
（4）将该二维界面结构置于匀强磁场中，磁场沿 $z$ 轴正方向，磁感应强度大小为 $B$ ，求动能为 $K$ 的准粒子做匀速率圆周运动的半径、周期和角动量的大小；
（5）将该二维界面结构放置在匀强电场中，准粒子可能在垂直于电场的方向上产生加速度。如果电场沿 ${ }_{x}$ 轴正方向，电场强度大小为 $E$ 。当准粒子的速度大小为 $v(v \neq \alpha)$ 、方向与 $x$ 轴正方向成 $\theta$ 角时，求其运动的加速度的分量 $a_{x}$ 和 $a_{y}$ 。

参考解答：
（1）根据动能定理

$$
\mathrm{d} K=\boldsymbol{F} \cdot \mathrm{d} \boldsymbol{r}=\frac{\mathrm{d} \boldsymbol{p}}{\mathrm{~d} t} \cdot \mathrm{~d} \boldsymbol{r}=\boldsymbol{v} \cdot \mathrm{d} \boldsymbol{p}
$$

并利用真实的自由粒子动能的表达式，有

$$
\mathrm{d} K=\frac{\boldsymbol{p}}{m} \cdot \mathrm{~d} \boldsymbol{p}
$$

由（1）（2）式得

$$
\left(\frac{\boldsymbol{p}}{m}-v\right) \cdot \mathrm{d} \boldsymbol{p}=0
$$

考虑到上式对任意的 $\mathrm{d} \boldsymbol{p}$ 都成立，有

$$
v=\frac{p}{m}
$$

（2）利用题给的准粒子动能的表达式，有

$$
\mathrm{d} K=\frac{\boldsymbol{p}}{m} \cdot \mathrm{~d} \boldsymbol{p}+\alpha \frac{\boldsymbol{p}}{p} \cdot \mathrm{~d} \boldsymbol{p}
$$

由（1）（4）式得

$$
\left(\frac{\boldsymbol{p}}{m}+\alpha \frac{\boldsymbol{p}}{p}-v\right) \cdot \mathrm{d} \boldsymbol{p}=0
$$

考虑到上式对任意的 $\mathrm{d} \boldsymbol{p}$ 都成立，有

$$
v=\frac{\boldsymbol{p}}{m}+\alpha \frac{\boldsymbol{p}}{p}
$$

（3）由（5）式可得

$$
v^{2}=\frac{p^{2}}{m^{2}}+2 \alpha \frac{p}{m}+\alpha^{2}
$$

因此有

$$
v=\frac{p}{m}+\alpha
$$

能量为 $K$ 的准粒子动量为

$$
p=-m \alpha+\sqrt{m^{2} \alpha^{2}+2 m K}
$$

利用⑥和⑦可得

$$
v=\sqrt{\alpha^{2}+\frac{2 K}{m}}
$$

（4）在匀强磁场中，准粒子做匀速率圆周运动

$$
v=\omega R
$$

其动量改变率的大小为

$$
\left|\frac{\mathrm{d} \boldsymbol{p}}{\mathrm{~d} t}\right|=\omega p
$$

由以上两式得

$$
\left|\frac{\mathrm{d} \boldsymbol{p}}{\mathrm{~d} t}\right|=\frac{v}{R} p
$$

准粒子做匀速率圆周运动的动力学方程为

$$
p \frac{v}{R}=q v B
$$

利用（7）式解得

$$
R=\frac{p}{q B}=\frac{-m \alpha+\sqrt{m^{2} \alpha^{2}+2 m K}}{q B}
$$

准粒子做匀速率圆周运动的周期为

$$
T=\frac{2 \pi R}{v}=\frac{2 \pi\left(-m \alpha+\sqrt{m^{2} \alpha^{2}+2 m K}\right)}{q B \sqrt{\alpha^{2}+\frac{2 K}{m}}}
$$

准粒子角动量的大小为

$$
L=p R
$$

将（7）式代入（13）式得

$$
L=\frac{2 m^{2} \alpha^{2}+2 m K-2 m \alpha \sqrt{m^{2} \alpha^{2}+2 m K}}{q B}
$$

（5）（解法一）
由（5）式得

$$
\boldsymbol{p}=m \boldsymbol{v}-m \alpha \frac{\boldsymbol{v}}{v}
$$

因准粒子在电场中的运动方程为

$$
\frac{\mathrm{d} \boldsymbol{p}}{\mathrm{~d} t}=q \boldsymbol{E}
$$

即准粒子的加速度有

$$
\frac{\mathrm{d} v}{\mathrm{~d} t}=\alpha \frac{\mathrm{d}}{\mathrm{~d} t}\left(\frac{v}{v}\right)+\frac{q}{m} \boldsymbol{E}
$$

写成分量形式有

$$
\begin{aligned}
& a_{x}=\frac{\alpha}{v} \frac{\mathrm{~d} v_{x}}{\mathrm{~d} t}-\frac{\alpha v_{x}}{v^{2}} \frac{\mathrm{~d} v}{\mathrm{~d} t}+q E \\
& a_{y}=\frac{\alpha}{v} \frac{\mathrm{~d} v_{y}}{\mathrm{~d} t}-\frac{\alpha v_{y}}{v^{2}} \frac{\mathrm{~d} v}{\mathrm{~d} t}
\end{aligned}
$$

利用关系式

$$
\frac{\mathrm{d} v}{\mathrm{~d} t}=\frac{v_{x}}{v} a_{x}+\frac{v_{y}}{v} a_{y}
$$

（17）式可改写成

$$
\left\{\begin{array}{l}
\left(1-\frac{\alpha}{v}+\frac{\alpha v_{x}^{2}}{v^{3}}\right) a_{x}+\frac{\alpha v_{x} v_{y}}{v^{3}} a_{y}=\frac{q E}{m} \\
\left(1-\frac{\alpha}{v}+\frac{\alpha v_{y}^{2}}{v^{3}}\right) a_{y}+\frac{\alpha v_{x} v_{y}}{v^{3}} a_{x}=0
\end{array}\right.
$$

或写成

$$
\begin{aligned}
& \left(1-\frac{\alpha \sin ^{2} \theta}{v}\right) a_{x}+\frac{\alpha \sin \theta \cos \theta}{v} a_{y}=\frac{q E}{m} \\
& \left(1-\frac{\alpha \cos ^{2} \theta}{v}\right) a_{y}+\frac{\alpha \sin \theta \cos \theta}{v} a_{x}=0
\end{aligned}
$$

解此二元一次方程组得

$$
\left\{\begin{array}{l}
a_{x}=\frac{q E}{m}+\frac{q E}{m} \frac{\alpha \sin ^{2} \theta}{v-\alpha} \\
a_{y}=-\frac{q E}{m} \frac{\alpha \cos \theta \sin \theta}{v-\alpha}
\end{array}\right.
$$

［（解法二）
由（5）式得

$$
\boldsymbol{p}=m \boldsymbol{v}-m \alpha \frac{\boldsymbol{v}}{v}
$$

因准粒子在电场中的运动方程为

$$
\frac{\mathrm{d} \boldsymbol{p}}{\mathrm{~d} t}=q \boldsymbol{E}
$$

在直角坐标系中

$$
\left\{\begin{array}{l}
\frac{\mathrm{d} p}{\mathrm{~d} t} \cos \theta-p \sin \theta \frac{\mathrm{~d} \theta}{\mathrm{~d} t}=q E \\
\frac{\mathrm{~d} p}{\mathrm{~d} t} \sin \theta+p \cos \theta \frac{\mathrm{~d} \theta}{\mathrm{~d} t}=0
\end{array}\right.
$$

由此解得

$$
\left\{\begin{array}{l}
\frac{\mathrm{d} p}{\mathrm{~d} t}=q E \cos \theta \\
\frac{\mathrm{~d} \theta}{\mathrm{~d} t}=-\frac{q E}{p} \sin \theta
\end{array}\right.
$$

由（5）式得

$$
\left\{\begin{array}{l}
a_{x}=\frac{\mathrm{d} v_{x}}{\mathrm{~d} t}=\frac{d}{d t}\left[\left(\frac{p}{m}+\alpha\right) \cos \theta\right]=\frac{1}{m} \cos \theta \frac{d p}{d t}-\left(\frac{p}{m}+\alpha\right) \sin \theta \frac{d \theta}{d t} \\
a_{y}=\frac{\mathrm{d} v_{y}}{\mathrm{~d} t}=\frac{d}{d t}\left[\left(\frac{p}{m}+\alpha\right) \sin \theta\right]=\frac{1}{m} \sin \theta \frac{d p}{d t}+\left(\frac{p}{m}+\alpha\right) \cos \theta \frac{d \theta}{d t}
\end{array}\right.
$$

将（18）式代入（19）式，并利用（6）式，得

$$
\left\{\begin{array}{l}
a_{x}=\frac{q E}{m}+\frac{q E}{m} \frac{\alpha \sin ^{2} \theta}{v-\alpha} \\
a_{y}=-\frac{q E}{m} \frac{\alpha \cos \theta \sin \theta}{v-\alpha}
\end{array}\right.
$$

（解法三）
由（5）式得

$$
\boldsymbol{p}=m \boldsymbol{v}-m \alpha \frac{\boldsymbol{v}}{v}
$$

准粒子在电场中的运动方程为

$$
\frac{\mathrm{d} \boldsymbol{p}}{\mathrm{~d} t}=q \boldsymbol{E}
$$

在直角坐标系中，（15）式可写成分量形式

$$
\left\{\begin{array}{l}
p_{x}=m(v-\alpha) \cos \theta \\
p_{y}=m(v-\alpha) \sin \theta
\end{array}\right.
$$

由（16）（17）式得

$$
\left\{\begin{array}{l}
-m(v-\alpha) \sin \theta \frac{\mathrm{d} \theta}{\mathrm{~d} t}+m \cos \theta \frac{\mathrm{~d} v}{\mathrm{~d} t}=q E \\
m(v-\alpha) \cos \theta \frac{\mathrm{d} \theta}{\mathrm{~d} t}+m \sin \theta \frac{\mathrm{~d} v}{\mathrm{~d} t}=0
\end{array}\right.
$$

由此解得

$$
\left\{\begin{array}{l}
\frac{\mathrm{d} v}{\mathrm{~d} t}=\frac{q E}{m} \cos \theta \\
\frac{\mathrm{~d} \theta}{\mathrm{~d} t}=-\frac{q E}{m} \frac{\sin \theta}{v-\alpha}
\end{array}\right.
$$

将（19）式代入下式

$$
\left\{\begin{array}{l}
a_{x}=\frac{d v_{x}}{d t}=\frac{d v}{d t} \cos \theta-\sin \theta \frac{d \theta}{d t} \\
a_{y}=\frac{d v_{y}}{d t}=\frac{d v}{d t} \sin \theta+\cos \theta \frac{d \theta}{d t}
\end{array}\right.
$$

得

$$
\left\{\begin{array}{l}
a_{x}=\frac{q E}{m}+\frac{q E}{m} \frac{\alpha \sin ^{2} \theta}{v-\alpha} \\
a_{y}=-\frac{q E}{m} \frac{\alpha \cos \theta \sin \theta}{v-\alpha}
\end{array}\right.
$$
