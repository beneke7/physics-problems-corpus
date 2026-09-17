---
id: cpho-f-2023-q3
source: cpho-f
native_id: "三、（40 分）卢瑟福 $\alpha$ 粒子散射实验揭示了原子的核式结构。利用粒子散射实验可确定材料靶原子的种类、浓度及其深度分布等信息。典型的实验装置示意图如图3a所示，一束 $\alpha$ 粒子入射到待测材料靶（例如金箔）上，测量不同角度 $\theta$ 方向上散射 $\alpha$ 粒子的数目。"
year: 2023
language: zh
translated: false
topic: [quantum-physics]
subtopic: [nuclear, decay, mass-defect, coulomb-scattering]
difficulty: null
difficulty_norm: 4
math_tools: [geometry-trigonometry]
format: open-ended
core_ideas: []
estimated_time_min: 60
points: null
has_solution: false
has_figure: true
figure_files: [cpho-f-2023-q3-fig01.png, cpho-f-2023-q3-fig02.png, cpho-f-2023-q3-fig03.png, cpho-f-2023-q3-fig04.png, cpho-f-2023-q3-fig05.png, cpho-f-2023-q3-fig06.png, cpho-f-2023-q3-fig07.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2023.mmd; figures require local harvest"
verification_status: pending
---

三、（40 分）卢瑟福 $\alpha$ 粒子散射实验揭示了原子的核式结构。利用粒子散射实验可确定材料靶原子的种类、浓度及其深度分布等信息。典型的实验装置示意图如图3a所示，一束 $\alpha$ 粒子入射到待测材料靶（例如金箔）上，测量不同角度 $\theta$ 方向上散射 $\alpha$ 粒子的数目。

![](cpho-f-2023-q3-fig01.png)
图3a

![](cpho-f-2023-q3-fig02.png)
图3b

![](cpho-f-2023-q3-fig03.png)
图3c

（1）$\alpha$ 粒子可以通过放射性元素的衰变获得。静止的 ${ }_{84}^{210} \mathrm{Po}$（针）衰变到 Pb （铅），同时放出动能为5．31 MeV 的 $\alpha$ 粒子。试写出此衰变过程的反应式，并计算衰变末态粒子的总动能（单位取 MeV，保留两位有效数字）。
（2）如图3b，质量为 $m$ 、电荷为 $2 e$（ $e>0$ ）、动能为 $E$ 的 $\alpha$ 粒子从远处沿某直线入射，该直线与靶核 A 的距离为 $b$（瞄准距离）。该 $\alpha$ 粒子被核电荷数为 $Z$ 的原子核 A 散射后，其在远处的运动方向与远处入射方向之间的夹角为 $\theta$（散射角）。靶核 A 可视为始终静止不动，求 $b$ 与 $\theta$ 之间的关系 $b(\theta)$ 。
（3）在 $\alpha$ 粒子散射实验中，入射的实际上是一束 $\alpha$ 粒子流，其束流强度为 $I$（单位时间内、单位横截面积上入射的粒子数）。散射粒子的角分布相对于过 A 且与 $\alpha$ 粒子远处入射方向平行的直线是轴对称的，在以靶核 A 为中心的环带立体角元 $\mathrm{d} \Omega=2 \pi \sin \theta \mathrm{~d} \theta$ 内，单位时间出射的粒子数 $\frac{\mathrm{d} N}{\mathrm{~d} t}$ 正比于 $I \mathrm{~d} \Omega$

$$
\frac{\mathrm{d} N}{\mathrm{~d} t}=\sigma(\theta) \mathrm{I} \mathrm{~d} \Omega
$$

其中 $\sigma(\theta)$ 具有面积量纲，称为微分散射截面。求 $\sigma(\theta)$ 的表达式（其中不可含有参量 $b$ ）。
（4）实验上利用加速器获得动能不同的 $\alpha$ 粒子与金原子核发生散射。在散射角 $\theta=60^{\circ}$ 时测得的微分散射截面（相对值）与入射 $\alpha$ 粒子动能的关系如图3c 所示，实验数据在 $\alpha$ 粒子动能为25 MeV 处出现拐点。试解释该拐点出现的原因，并计算该情形下 $\alpha$ 粒子到金原子核的最小距离。已知 $\frac{e^{2}}{4 \pi \varepsilon_{0}}=1.44 \mathrm{fm} \cdot \mathrm{MeV}$ ，金原子的核电荷数为 79 。金原子核可视为始终静止不动。
（5）在图3a 所示的 $\alpha$ 粒子散射实验中，由于 $\alpha$ 粒子源或探测器（荧光屏和显微镜）的遮挡，无法实现散射角为 $180^{\circ}$ 左右的测量。试提出一个方案，以实现散射角为 $180^{\circ}$ 的测量，并画出实验方案示意图。

参考解答：
（1）${ }_{84}^{210} \mathrm{Po}$ 的 $\alpha$ 衰变的反应式为

$$
{ }_{84}^{210} \mathrm{Po} \rightarrow{ }_{82}^{206} \mathrm{~Pb}+{ }_{2}^{4} \mathrm{He}
$$

由于衰变前母核是静止的，设衰变后 $\alpha$ 粒子和子核 ${ }_{82}^{206} \mathrm{~Pb}$ 的运动速度分别为 $v$ 和 $V$ 。由动量守恒得

$$
0=M_{\mathrm{Pb}} V+m_{a} v
$$

式中 $m$ 和 $M$ 分别为 $\alpha$ 粒子和 ${ }_{82}^{206} \mathrm{~Pb}$ 核的质量。衰变末态粒子的总动能

$$
E_{\mathrm{d}}=\frac{1}{2} M_{\mathrm{Pb}} V^{2}+\frac{1}{2} m_{\alpha} v^{2}
$$

由（2）（3）式解得

$$
E_{\mathrm{d}}=E_{\alpha}\left(1+\frac{m_{\alpha}}{M_{\mathrm{Pb}}}\right) \approx \frac{A}{A-4} E_{\alpha}
$$

式中 $A$ 为 Po 核的质量数，$E_{\alpha}$ 为 $\alpha$ 粒子的动能

$$
E_{\alpha}=\frac{1}{2} m_{a} v^{2}=5.31 \mathrm{MeV}
$$

由（4）式和题给数据得

$$
E_{\mathrm{d}}=5.41 \mathrm{MeV}
$$

（2）
【解法一】
如解题图3a，质量为 $M$ 、带正电荷 $Z e$（ $e$ 是基本电荷）的原子核 A 位于原点，而质量为 $m$ 、能量为 $E$ 、电荷为 $+2 e$ 的 $\alpha$ 粒子以速度 $v_{0}$ 入射，瞄准距离为 $b$ ；由于 $\alpha$ 粒子受到原子核库仑斥力 $\boldsymbol{F}$ 的作用改变方向，以偏转角 $\theta$ 射出。在散射过程中，由于电子的质量远小于 $\alpha$粒子的质量，忽略核外电子与 $\alpha$ 粒子的作用；由于靶原子的质量通常远大于 $\alpha$ 粒子的质量，近似认为原子核静止不动。

![](cpho-f-2023-q3-fig04.png)
解题图3a

$\alpha$ 粒子与原子核的散射为弹性过程，散射后 $\alpha$ 粒子在无穷远处的速率仍为 $v_{0}$ 。因此，散射后无穷远处的 $\alpha$ 粒子在垂直方向的速度为：

$$
v_{\perp \infty}=v_{0} \sin \theta
$$

在散射过程中，$\alpha$ 粒子在垂直方向上所受的力与 $\alpha$ 粒子和原子核之间的距离有关，为：

$$
F_{\perp}=F \sin \varphi=\frac{1}{4 \pi \varepsilon_{0}} \frac{2 Z e^{2}}{r^{2}} \sin \varphi
$$

考虑到动量的变化等于冲量，因此有：

$$
\mathrm{d} v_{\perp}=\frac{F_{\perp}}{m} \mathrm{~d} t=\frac{2 Z e^{2}}{4 \pi \varepsilon_{0}} \frac{\sin \varphi}{m r^{2}} \mathrm{~d} t
$$

库仑力为有心力，$\alpha$ 粒子散射过程中角动量守恒，有：

$$
L=m r^{2} \frac{\mathrm{~d} \varphi}{\mathrm{~d} t}=m v_{0} b
$$

由（8）（9）可得：

$$
\mathrm{d} v_{\perp}=\frac{2 Z e^{2}}{4 \pi \varepsilon_{0} m v_{0} b} \sin \varphi \mathrm{~d} \varphi
$$

$\alpha$ 粒子在入射的时候，其在垂直方向上的速度为零；考虑到其在无穷远处的渐进行为，可知入射时 $\varphi=0$ ，散射到无穷远处时 $\varphi=\pi-\theta$ 。
因此，对（10）式进行积分，可得：

$$
v_{\perp \infty}=\int_{0}^{\pi-\theta} \frac{2 Z e^{2}}{4 \pi \varepsilon_{0} m v_{0} b} \sin \varphi \mathrm{~d} \varphi=\frac{2 Z e^{2}}{4 \pi \varepsilon_{0} m v_{0} b}(1+\cos \theta)
$$

由（6）（11）可得：

$$
b=\frac{D}{2} \cot \frac{\theta}{2}=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E} \cot \frac{\theta}{2}
$$

式中 $D=\frac{1}{4 \pi \varepsilon_{0}} \frac{2 Z e^{2}}{\frac{1}{2} m v_{0}^{2}}=\frac{2 Z e^{2}}{4 \pi \varepsilon_{0} E}$

## 【解法二】

由能量和角动量守恒定律得

$$
\begin{aligned}
& E=\frac{1}{4 \pi \varepsilon_{0}} \frac{(Z e)(2 e)}{r}+\frac{1}{2} m\left(\dot{r}^{2}+r^{2} \dot{\varphi}^{2}\right)=\frac{1}{2} m v_{0}^{2} \\
& L=m r^{2} \dot{\varphi}=m v_{0} b
\end{aligned}
$$

式中 $r$ 是 $\alpha$ 粒子到原子核A（原点）的距离。

$$
\dot{r}=\frac{\mathrm{d} r}{\mathrm{~d} t}=\frac{\mathrm{d} r}{\mathrm{~d} \varphi} \frac{\mathrm{~d} \varphi}{\mathrm{~d} t}=\frac{\mathrm{d} r}{\mathrm{~d} \varphi} \dot{\varphi}
$$

由（6）＇⑦＇式得

$$
\frac{2 m E}{L^{2}}=\frac{4 Z e^{2} m}{4 \pi \varepsilon_{0} L^{2}} \frac{1}{r}+\frac{1}{r^{2}}+\frac{1}{r^{4}}\left(\frac{\mathrm{~d} r}{\mathrm{~d} \varphi}\right)^{2}
$$

首先可以看出，将（8）式右端微分项的系数函数 $\frac{1}{r^{4}}$ 收入微分内，即

$$
\frac{1}{r^{4}}\left(\frac{\mathrm{~d} r}{\mathrm{~d} \varphi}\right)^{2}=\left(\frac{1}{r^{2}} \frac{\mathrm{~d} r}{\mathrm{~d} \varphi}\right)^{2}=\left(-\frac{\mathrm{d}}{\mathrm{~d} \varphi} \frac{1}{r}\right)^{2}=\left(\frac{\mathrm{d}}{\mathrm{~d} \varphi} \frac{1}{r}\right)^{2}
$$

这提示我们，引入新变量

$$
\rho=\frac{1}{r}
$$

方程（8）成为

$$
\frac{\mathrm{d}^{2} \rho}{\mathrm{~d} \varphi^{2}}+\rho=C
$$

式中 $C=\frac{-2 Z e^{2}}{4 \pi \varepsilon_{0} m v_{0}^{2} b^{2}}$
求解微分方程（10）＇式，可得

$$
\frac{1}{r}=C(1+\cos \varphi)+\frac{1}{b} \sin \varphi
$$

在 $\alpha$ 粒子以 $\theta$ 角散射情况下，当 $\alpha$ 粒子出射到无限远时，

$$
\frac{1}{r} \rightarrow 0, \quad \varphi=\pi-\theta
$$

代入（10）式，可得散射角 $\theta$ 满足： $\cot \frac{\theta}{2}=-\frac{1}{C b}$ ，
把 $C=\frac{-2 Z e^{2}}{4 \pi \varepsilon_{0} m v_{0}^{2} b^{2}}$ 代入 ${ }^{(11)}$ ，可得

$$
b=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E} \cot \frac{\theta}{2}
$$

【解法三】
以图3b中A为极点，近心点方向为极轴方向，建立极坐标系（ $r, \phi$ ），则 $\alpha$ 粒子轨道方程为

$$
r=\frac{-p}{1-q \cos \phi}
$$

其中

$$
\begin{aligned}
& p=\left(\frac{2 Z e^{2}}{4 \pi \varepsilon_{0}}\right)^{-1} \frac{L^{2}}{m} \\
& q=\sqrt{1+\left(\frac{2 Z e^{2}}{4 \pi \varepsilon_{0}}\right)^{-2} \frac{2 E L^{2}}{m}}
\end{aligned}
$$

其中轨道角动量为

$$
L=m v_{0} b=\sqrt{2 m E} b
$$

因为 $r>0$ ，由⑥＂式可知

$$
\cos \phi>\frac{1}{q}=\cos \phi_{0}
$$

故有 $\phi \in\left(-\phi_{0}, \phi_{0}\right)$ ，相应散射角

$$
\theta=\pi-2 \phi_{0}
$$

故有

$$
\cot \frac{\theta}{2}=\tan \phi_{0}=\sqrt{q^{2}-1}
$$

将（7）＂式代入（10）＂式得

$$
\cot \frac{\theta}{2}=\frac{4 \pi \varepsilon_{0} E b}{Z e^{2}}
$$

即有

$$
b=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E} \cot \frac{\theta}{2}
$$

【解法四】（利用隆格－楞次矢量）
设 $\alpha$ 粒子速度为 $v$ ，角动量为 $\boldsymbol{L}$ ，并设参量 $\beta=\frac{2 Z e^{2}}{4 \pi \varepsilon_{0}}$ ，则有

$$
\begin{aligned}
& \boldsymbol{F}=\frac{\beta}{r^{2}} \hat{\boldsymbol{r}}=\frac{\mathrm{d}(m v)}{\mathrm{d} t} \\
& \frac{\mathrm{~d} \hat{\boldsymbol{r}}}{\mathrm{~d} t}=\omega \times \hat{\boldsymbol{r}}=\frac{\boldsymbol{L}}{m r^{2}} \times \hat{\boldsymbol{r}}
\end{aligned}
$$

定义 $\alpha$ 粒子的隆格－楞次矢量为

$$
\boldsymbol{B}=m v \times \boldsymbol{L}+m \beta \hat{\boldsymbol{r}}
$$

利用⑥＂${ }^{\prime \prime}$ ⑦＂式可得

$$
\frac{\mathrm{d} \boldsymbol{B}}{\mathrm{~d} t}=\frac{\mathrm{d}(m v)}{\mathrm{d} t} \times \boldsymbol{L}+m \beta \frac{\mathrm{~d} \hat{\boldsymbol{r}}}{\mathrm{~d} t}=\frac{\beta}{r^{2}} \hat{\boldsymbol{r}} \times \boldsymbol{L}+m \beta \frac{\boldsymbol{L}}{m r^{2}} \times \hat{\boldsymbol{r}}=0
$$

故隆格－楞次矢量守恒。
如图设置 $x, y, z$ 坐标轴正向，则 $\boldsymbol{L}=-L \hat{\boldsymbol{z}}$ ，$\alpha$ 粒子初速度 $\boldsymbol{v}_{0}=\boldsymbol{v}_{0} \boldsymbol{\hat { x }}$ 。利用（8）＂式计算初末态隆格－楞次矢量得

$$
\boldsymbol{B}_{\text {初 }}=m v_{0} L \hat{\boldsymbol{y}}-m \beta \hat{\boldsymbol{x}}
$$

$$
\boldsymbol{B}_{\text {末 }}=m v_{0} L(-\sin \theta \hat{\boldsymbol{x}}+\cos \theta \hat{\boldsymbol{y}})+m \beta(\cos \theta \hat{\boldsymbol{x}}+\sin \theta \hat{\boldsymbol{y}})
$$

![](cpho-f-2023-q3-fig05.png)
其中

$$
L=m v_{0} b=\sqrt{2 m E} b
$$

利用隆格－楞次矢量守恒得

$$
m v_{0} L=m v_{0} L \cos \theta-m \beta \sin \theta
$$

便有

$$
\cot \frac{\theta}{2}=\frac{\sin \theta}{1-\cos \theta}=\frac{v_{0} L}{\beta}=\frac{4 \pi \varepsilon_{0} E b}{Z e^{2}}
$$

即有

$$
b=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E} \cot \frac{\theta}{2}
$$

【解法五】
在散射过程中，$\alpha$ 粒子受到原子核的库仑排斥作用，其运动轨迹为双曲线，设半长轴为$a, \alpha$ 粒子到原子核的距离为 $c$ 。

$$
E=k \frac{2 Z e^{2}}{2 a}=\frac{Z e^{2}}{4 \pi \varepsilon_{0} a}
$$

式中 $a=k \frac{2 Z e^{2}}{2 E}=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E}$
散射角 $\theta$ 满足：

$$
\begin{aligned}
& \tan \left(\frac{\pi-\theta}{2}\right)=\frac{b}{a}=\frac{E b}{k Z e^{2}} \\
& \theta=2 \operatorname{arccot}\left(\frac{E b}{k Z e^{2}}\right)=2 \operatorname{arccot}\left(\frac{4 \pi \varepsilon_{0} E b}{Z e^{2}}\right)
\end{aligned}
$$

可得

$$
b=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E} \cot \frac{\theta}{2}
$$ $\square$

（3）由（12）式可知，$b$ 和 $\theta$ 之间存在一一对应关系。考虑瞄准距离在 $b$ 到 $b+\mathrm{d} b$ 之间的 $\alpha$ 粒子，经散射后它们从 $\theta$ 到 $\theta+\mathrm{d} \theta$ 之间的角度射出。因此，凡通过以 $b$ 为内半径、以 $b+\mathrm{d} b$ 为外半径的环形面积 $\mathrm{d} \sigma$ 的 $\alpha$ 粒子，必定散射到角度在 $\theta$ 到 $\theta+\mathrm{d} \theta$ 之间的一个空心圆锥体内，如解题图3b所示。

![](cpho-f-2023-q3-fig06.png)
解题图3b

环形面积 $\mathrm{d} \sigma$ 为

$$
\mathrm{d} \sigma=2 \pi b|\mathrm{~d} b|=\frac{\pi D^{2}}{4} \frac{\cos \frac{\theta}{2}}{\sin ^{3} \frac{\theta}{2}} \mathrm{~d} \theta
$$

推导中利用了（12）式。角度在 $\theta$ 到 $\theta+\mathrm{d} \theta$ 之间的一个空心圆锥体的立体角元为

$$
\mathrm{d} \Omega=\frac{2 \pi r \sin \theta r \mathrm{~d} \theta}{r^{2}}=2 \pi \sin \theta \mathrm{~d} \theta
$$

一个 $\alpha$ 粒子被一个原子核散射到 $\theta$ 方向上单位立体角元中的概率，称为微分散射截面，为

$$
\sigma(\theta)=\frac{\mathrm{d} \sigma}{\mathrm{~d} \Omega}=\frac{D^{2}}{16} \frac{1}{\sin ^{4} \frac{\theta}{2}}=\left(\frac{2 Z e^{2}}{4 \pi \varepsilon_{0} E}\right)^{2} \frac{1}{16 \sin ^{4} \frac{\theta}{2}}
$$

由（15）式可知，在固定的散射方向上（当散射角 $\theta=60^{\circ}$ 时），微分散射截面与 $\alpha$ 粒子动能 $E$ 的平方成反比关系，即随着 $E^{2}$ 的增大而减小。
（4）实验测量的 $\alpha$ 粒子散射截面结果显示在 $\alpha$ 粒子能量为25MeV时出现拐点，即截面突然急剧减小，这表明 $\alpha$ 粒子逼近了原子核区域，强的核力起了作用，从而导致散射截面与 $\alpha$ 粒子动能 $E$ 的关系发生突变。

【解法一】
由（12）式也可以看出，固定 $\theta$ 角，$E$ 越大 $b$ 越小。当 $b$ 小到一定程度，$\alpha$ 粒子会进入原子核，散射关系发生突变（强核力起作用）。突变点的 $\alpha$ 粒子正好掠过原子核表面，最近距离$r$ 近似为原子核半径。设 $\alpha$ 粒子距离原子核的最近距离为 $r_{\text {min }}$ ，此时其速度为 $v^{\prime}$ ，由角动量守恒和能量守恒得

$$
\begin{aligned}
& m v_{0} b=m v ' r_{\min } \\
& \frac{1}{2} m v_{0}^{2}=\frac{1}{2} m v^{\prime 2}+\frac{2 Z e^{2}}{4 \pi \varepsilon_{0} r_{\min }} \\
& r_{\min }=\frac{D}{2}\left(1+\frac{1}{\sin \frac{\theta}{2}}\right)=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E}\left(1+\frac{1}{\sin \frac{\theta}{2}}\right)
\end{aligned}
$$

由（19）式和题给数据（ $E=25 \mathrm{MeV}, \theta=60^{\circ}, Z=79$ ）得

$$
r_{\min } \approx 1.365 \times 10^{-14} \mathrm{~m}=13.65 \mathrm{fm}
$$

【解法二】
在散射过程中，$\alpha$ 粒子受到原子核的库仑排斥作用，其运动轨迹为双曲线。设半长轴为$a, \alpha$ 粒子到原子核的距离为 $c$ 。

$$
\begin{aligned}
& a=k \frac{2 Z e^{2}}{2 E}=\frac{Z e^{2}}{4 \pi \varepsilon_{0} E} \\
& c=k \frac{a}{\cos \left(\frac{\pi-\theta}{2}\right)}=2 a
\end{aligned}
$$

（或者 $b=a \tan \left(\frac{\pi-\theta}{2}\right)=\sqrt{3} a, c=\sqrt{b^{2}+a^{2}}=2 a$ ）

$$
\begin{aligned}
& r_{\min }=c+a \\
& r_{\min }=3 a=13.65 \mathrm{fm}
\end{aligned}
$$

（5）在通常的卢瑟福 $\alpha$ 粒子散射实验中，由于 $\alpha$ 粒子源或探测器的遮挡，无法实现散射角为180° 的测量。考虑到 $\alpha$ 粒子带正电荷，可在 $\alpha$ 粒子飞行的路径加上一个静磁场来改变其运动

方向。（若有同学写：加交变电场，也算对。） ②1

实验方案如解题图3c所示：从 $\alpha$ 粒子源出射的一束 $\alpha$ 粒子经静磁场偏转 $90^{\circ}$ 射到靶粒子上，散射角为 $180^{\circ}$ 的粒子射出后经静磁场偏转 $90^{\circ}$ 进入 $\alpha$ 粒子探测器加以测量。（22）

![](cpho-f-2023-q3-fig07.png)
磁场偏转区

解题图3c

评分参考：本题40分。
第（1）问8分，（1）（4）式各3分，（5）式各2分；
第（2）问12分，【解法一】（7）（8）（9）（10）（11）（12）式各2分；
【解法二】（6）＇（7）＇⑧＇（10）＇⑪＇（12）＇式各2分
【解法三】⑥＂（7）＂式各3分，⑧＂（10）＂（12）＂式各2分
【解法四】（7）＂${ }^{(9) \prime \prime}(10)^{\prime \prime \prime}(11)^{\prime \prime \prime}(12){ }^{\prime \prime \prime}(14)$＂＇式各2分
【解法五】（6）＂＇＂（7）＂＇＂式各4分、（8）＂＇＂（9）＂＂式各2分
第（3）问5分，（13）式3分，（15）式2分；
第（4）问10分，【解法一】（16）（17）（18）（19）（20）式各2分；
【解法二】（16）（17）＇⑱＇（19）＇（20）＇式各2分
第（5）问5分，（21）式2分，（22）式3分。
