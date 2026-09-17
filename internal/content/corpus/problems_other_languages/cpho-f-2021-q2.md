---
id: cpho-f-2021-q2
source: cpho-f
native_id: "二、（64分）2021年6月神州12载人火箭与天宫太空站成功对接，这里涉及到追击者（神州12火箭）与目标（太空站）在绕地轨道相遇的问题。本题采用霍尔曼变轨方案来探究追击者如何改变速度（速率和方向）与固定轨道上的目标实现对接（相遇）。"
year: 2021
language: zh
translated: false
topic: [gravitation, mechanics]
subtopic: [orbits, kepler, circular-motion, energy-conservation]
difficulty: null
difficulty_norm: 5
math_tools: [calculus, geometry-trigonometry]
format: open-ended
core_ideas: []
estimated_time_min: 90
points: null
has_solution: false
has_figure: true
figure_files: [cpho-f-2021-q2-fig01.png, cpho-f-2021-q2-fig02.png, cpho-f-2021-q2-fig03.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2021.mmd; figures require local harvest"
verification_status: pending
---

二、（64分）2021年6月神州12载人火箭与天宫太空站成功对接，这里涉及到追击者（神州12火箭）与目标（太空站）在绕地轨道相遇的问题。本题采用霍尔曼变轨方案来探究追击者如何改变速度（速率和方向）与固定轨道上的目标实现对接（相遇）。

如图2a，目标 A 和追击者 c 都在以半径为 $r_{0}$ 的圆轨道上以速率 $v_{0}$ 逆时针运动。在 0 时刻两者的位置分别为

$$
\theta_{\mathrm{A}, i}=\theta_{0}, \theta_{\mathrm{c}, i}=0, r_{\mathrm{A}, i}=r_{\mathrm{c}, i}=r_{0}
$$

在此时刻，追击者 c 瞬间点火，速度瞬间改变 $\Delta v$（如图2b所示）；c的轨道也从半径为 $r_{0}$ 的圆轨道瞬间变为图2c所示的椭圆轨道，椭圆轨道的长轴与极轴方向（中心到点火时 c 的位置的连线）之间的夹角为 $\phi$（ $\phi$ 是沿顺时针方向测量的）。c 的运动方向与极轴方向之间的夹角记为 $\theta_{c}$（ $\theta_{c}$ 正方向为逆时针方向）， c 与中心相距 $r_{\mathrm{c}}\left(\theta_{\mathrm{c}}\right)$ 。
（1）（10 分）若飞行物的质量 $m$ 、能量 $E$（实际为飞行物和地球组成系统的总机械能）和角动量 $L$ 均为已知量，试用$E 、 L 、 m$ 和题给的已知参量 $r_{0} 、 v_{0}$ 等来表示轨道参量 $R$ 、$\varepsilon$ 。已知：正椭圆轨道（长轴沿极轴方向）在极坐标下的形式（原点取为右焦点）为

$$
r(\theta)=\frac{R}{1+\varepsilon \cos \theta}
$$

其中，$R$ 是轨道尺寸参量，$\varepsilon$ 是轨道偏心率，统称为轨道参量。
（2）（6 分）写出点火（见图2c）后追击者 c 的轨道 $r_{\mathrm{c}}\left(\theta_{\mathrm{c}}\right)$的表达式，用 $r_{0}$ 、偏心率 $\varepsilon$ 和 $\phi$ 表示。
（3）（6 分）写出点火后追击者 c 的轨道周期 $T_{\mathrm{c}}$ 与目标A 的周期 $T_{\mathrm{A}}$ 之比 $T_{\mathrm{c}} / T_{\mathrm{A}}$ ，用 $\varepsilon$ 和 $\phi$ 表示。
（4）（18 分）定义两个点火参数（见图2b）：无量纲

![](cpho-f-2021-q2-fig01.png)
图 2a．

![](cpho-f-2021-q2-fig02.png)
图2b

![](cpho-f-2021-q2-fig03.png)
图 2c

的速度大小改变率 $\delta=\left|\frac{\Delta v}{v_{0}}\right|, \Delta v$ 与 $v_{0}$ 之间的夹角 $\alpha$（重合时 $\alpha=0$ ，顺时针方向取为正方向）。试用点火参数 $\delta$ 和 $\alpha$ 来表示追击者 c 的轨道的偏心率$\varepsilon$ 和 $\varepsilon \cos \phi$ 。
（5）（9 分）考虑追击者 c 和目标 A 在第一类轨道汇合点（见图2c）相遇的情形。设自 0时刻起目标 A 经过第一类轨道汇合点的次数为 $n_{\mathrm{A}}$ ，追击者 c 经过第一类轨道汇合点的次数（起始时不计在内）为 $n_{\mathrm{c}}$ 。在 0 时刻，$\theta_{\mathrm{A}, i}=\theta_{0}, \theta_{\mathrm{c}, i}=0$ 。求 $n_{\mathrm{A}}$ ，用 $n_{\mathrm{c}} 、 \theta_{0} 、 \varepsilon$ 和 $\phi$ 表示。
（6）（3 分）将 $n_{\mathrm{A}}$ 用 $\delta 、 \alpha$ 表出，固定 $\delta$ ，试求函数 $n_{\mathrm{A}}(\alpha)$ 相对于 $\alpha$ 变化的两个简单、明显的极值点 $\alpha_{0}$（以便即使喷火时角度 $\alpha$ 相对于 $\alpha_{0}$ 有一些偏差，但解依然近似成立，便于成功对接）。
（7）如果取上述两个 $\alpha_{0}$ 值之一，
（i）（6 分）$\delta$ 值有一个上限 $\delta_{\text {max }}$（即若 $\delta>\delta_{\text {max }}$ ，追击者 c 和目标 A 不会相遇），求 $\delta_{\text {max }}$ ；
（ii）（6 分）令 $\theta_{\mathrm{A}}$ 的初始值为 $\theta_{0}$ ，试写出 $\delta$ 与 $\theta_{0} 、 n_{\mathrm{A}} 、 n_{\mathrm{c}}$ 的关系式；并求当 $\theta_{0}=\frac{\pi}{2}$ 、$n_{\mathrm{A}}=2 、 n_{\mathrm{c}}=1$ 时 $\delta$ 的值。

参考解答：
（1）由轨道方程可知

$$
r_{\text {近 }}=\frac{R}{1+\varepsilon}, \quad r_{\text {远 }}=\frac{R}{1-\varepsilon}
$$

总能量 $E$ 、轨道角动量 $L$ 为守恒量：

$$
L=m v_{\text {近 }} r_{\text {近 }}=m v_{\text {远 }} r_{\text {远 }}=m v r
$$

或

$$
v=\frac{L}{m r}
$$

系统总能量为

$$
E=-\frac{C}{r_{\text {近 }}}+\frac{L^{2}}{2 m r_{\text {近 }}^{2}}=-\frac{C}{r_{\text {远 }}}+\frac{L^{2}}{2 m r_{\text {远 }}^{2}}
$$

其中

$$
C=G M m=m r_{0} v_{0}^{2}
$$

这里，利用了

$$
\frac{G M m}{r_{0}^{2}}=m \frac{v_{0}^{2}}{r_{0}}
$$

由（1）（2）（3）式和 $C$ 的表达式得

$$
\begin{aligned}
& R=\frac{L^{2}}{m^{2} r_{0} v_{0}^{2}} \\
& \varepsilon=\sqrt{1+\frac{2 E L^{2}}{m^{3} r_{0}^{2} v_{0}^{4}}}=\sqrt{1+\frac{2 E R}{m r_{0} v_{0}^{2}}}
\end{aligned}
$$

（2）追击者 c 的椭圆轨道点火后变为偏转的椭圆。按题中角度定义，这偏转的椭圆轨道为

$$
r_{\mathrm{c}}\left(\theta_{\mathrm{c}}\right)=\frac{R}{1+\varepsilon \cos \left(\theta_{\mathrm{c}}+\phi\right)}
$$

初始条件为

$$
r_{c}=r_{0} \text {, 当 } \theta_{\mathrm{c}}=0
$$

代入（6）式得

$$
R=r_{0}(1+\varepsilon \cos \phi)
$$

于是

$$
r_{\mathrm{c}}\left(\theta_{\mathrm{c}}\right)=\frac{r_{0}(1+\varepsilon \cos \phi)}{1+\varepsilon \cos \left(\theta_{\mathrm{c}}+\phi\right)}
$$

（3）由（6）式可得点火后的椭圆轨道的长轴长度 $2 a$ 为

$$
2 a=r_{\text {近 }}+r_{\text {远 }}=\frac{r_{0}(1+\varepsilon \cos \phi)}{1+\varepsilon}+\frac{r_{0}(1+\varepsilon \cos \phi)}{1-\varepsilon}=\frac{2 r_{0}(1+\varepsilon \cos \phi)}{1-\varepsilon^{2}}
$$

目标 A 的轨道长轴为2 $r_{0}$ 。由开普勒第三定律得

$$
\frac{T_{\mathrm{c}}}{T_{\mathrm{A}}}=\left(\frac{a}{r_{0}}\right)^{3 / 2}=\left(\frac{1+\varepsilon \cos \phi}{1-\varepsilon^{2}}\right)^{3 / 2}
$$

（4）现将点火后速度用点火参数表达。取极坐标，径向（从圆轨道中心即焦点指向追击者 c所在位置的矢径方向）速度为

$$
v_{r}=v_{0} \delta \sin \alpha
$$

切向（垂直于矢径的方向）速度为

$$
v_{\theta}=v_{0}(1+\delta \cos \alpha)
$$

由角动量 $L$ 守恒有

$$
L=m r_{0} v_{\theta}=m r_{0} v_{0}(1+\delta \cos \alpha)
$$

由（12）式和

$$
r_{\text {近 }}=\frac{r_{0}(1+\varepsilon \cos \phi)}{1+\varepsilon}, \quad r_{\text {远 }}=\frac{r_{0}(1+\varepsilon \cos \phi)}{1-\varepsilon}
$$

得，在近地和远地点速率为

$$
\begin{aligned}
& v_{\text {近 }}=\frac{L}{m r_{\text {近 }}}=\frac{r_{0} v_{0}(1+\delta \cos \alpha)}{\frac{r_{0}(1+\varepsilon \cos \phi)}{1+\varepsilon}=v_{0} \frac{(1+\varepsilon)(1+\delta \cos \alpha)}{1+\varepsilon \cos \phi},} \\
& v_{\text {远 }}=\frac{L}{m r_{\text {远 }}}=\frac{r_{0} v_{0}(1+\delta \cos \alpha)}{\frac{r_{0}(1+\varepsilon \cos \phi)}{1-\varepsilon}}=v_{0} \frac{(1-\varepsilon)(1+\delta \cos \alpha)}{1+\varepsilon \cos \phi}
\end{aligned}
$$

由能量守恒有

$$
E=-\frac{C}{r}+\frac{1}{2} m v^{2}=-\frac{C}{r}+\frac{L^{2}}{2 m r^{2}}
$$

在远地和近地点有

$$
-\frac{C}{r_{\text {远 }}}+\frac{1}{2} m v_{\text {远 }}^{2}=-\frac{C}{r_{\text {近 }}}+\frac{1}{2} m v_{\text {近 }}^{2}
$$

此即

$$
-\frac{(1-\varepsilon) C}{r_{0}(1+\varepsilon \cos \phi)}+\frac{1}{2} m\left[v_{0} \frac{(1-\varepsilon)(1+\delta \cos \alpha)}{1+\varepsilon \cos \phi}\right]^{2}=-\frac{(1+\varepsilon) C}{r_{0}(1+\varepsilon \cos \phi)}+\frac{1}{2} m\left[v_{0} \frac{(1+\varepsilon)(1+\delta \cos \alpha)}{1+\varepsilon \cos \phi}\right]^{2}
$$

化简后有

$$
\frac{C}{r_{0}}=m v_{0}^{2} \frac{(1+\delta \cos \alpha)^{2}}{1+\varepsilon \cos \phi}
$$

利用 $C$ 的表达式，上式即

$$
1+\varepsilon \cos \phi=(1+\delta \cos \alpha)^{2}
$$

或

$$
\varepsilon \cos \phi=\delta \cos \alpha(2+\delta \cos \alpha)
$$

点火后（ $t=0$ ）沿轨道径向速度和切向速度大小之比为

$$
\left.\frac{v_{r}}{v_{\theta}}\right|_{t=0}=\frac{\delta \sin \alpha}{1+\delta \cos \alpha}=\frac{1}{r_{0}}\left(\frac{\mathrm{~d} r_{\mathrm{c}}}{\mathrm{~d} \theta_{c}}\right)_{\theta_{\mathrm{c}}=0}=\frac{\varepsilon \sin \phi}{1+\varepsilon \cos \phi}
$$

此即

$$
\begin{aligned}
\varepsilon \sin \phi & =(1+\varepsilon \cos \phi) \frac{\delta \sin \alpha}{1+\delta \cos \alpha} \\
& =\left(1+2 \delta \cos \alpha+\delta^{2} \cos ^{2} \alpha\right) \frac{\delta \sin \alpha}{1+\delta \cos \alpha} \\
& =\delta \sin \alpha(1+\delta \cos \alpha)
\end{aligned}
$$

由（15）（17）式得

$$
\varepsilon=\delta \sqrt{1+3 \cos ^{2} \alpha+2 \delta \cos \alpha\left(1+\cos ^{2} \alpha\right)+\delta^{2} \cos ^{2} \alpha}
$$

［（解法二）
现将点火后速度用点火参数表达。取极坐标，径向（从圆轨道中心即焦点指向追击者 c 所在位置的矢径方向）速度为

$$
v_{r}=v_{0} \delta \sin \alpha
$$

切向（垂直于矢径的方向）速度为

$$
v_{\theta}=v_{0}(1+\delta \cos \alpha)
$$

由角动量 $L$ 守恒有

$$
L=m r_{0} v_{\theta}=m r_{0} v_{0}(1+\delta \cos \alpha)
$$

由（4）（12）式得

$$
R=\frac{\left[m r_{0} v_{0}(1+\delta \cos \alpha)\right]^{2}}{m^{2} r_{0} v_{0}^{2}}=r_{0}(1+\delta \cos \alpha)^{2}
$$

由（7）（13）式得

$$
(1+\varepsilon \cos \phi)=(1+\delta \cos \alpha)^{2}
$$

于是

$$
\varepsilon \cos \phi=\delta \cos \alpha(2+\delta \cos \alpha)
$$

变速后的能量

$$
E=-\frac{G M m}{r_{0}}+\frac{1}{2} m\left[v_{0}^{2}(1+\delta \cos \alpha)^{2}+v_{0}^{2} \delta^{2} \sin ^{2} \alpha\right]
$$

利用 $C=G M m=m r_{0} v_{0}^{2}$ 得

$$
E=-m v_{0}^{2}+\frac{1}{2} m\left[v_{0}^{2}(1+\delta \cos \alpha)^{2}+v_{0}^{2} \delta^{2} \sin ^{2} \alpha\right]
$$

将（17）式代入（5）式得

$$
\varepsilon=\sqrt{1+\frac{2 E L^{2}}{m^{3} r_{0}^{2} v_{0}^{4}}}=\sqrt{1+\frac{2 E R}{m r_{0} v_{0}^{2}}}=\delta \sqrt{1+3 \cos ^{2} \alpha+2 \delta \cos \alpha\left(1+\cos ^{2} \alpha\right)+\delta^{2} \cos ^{2} \alpha}
$$

］

（5） 在 $t$ 时刻两者相遇，要求：
$$
t=n_{c} T_{c}=n_{A} T_{A}-\frac{\theta_{0}}{2 \pi} T_{A}
$$
利用 ⑩ ⑲ 式得
$$
n_{\mathrm{A}}=\frac{\theta_{0}}{2 \pi}+n_{\mathrm{c}} \frac{T_{\mathrm{c}}}{T_{\mathrm{A}}}=\frac{\theta_{0}}{2 \pi}+n_{\mathrm{c}}\left(\frac{1+\varepsilon \cos \phi}{1-\varepsilon^{2}}\right)^{3 / 2}
$$
（6） 将（15）（18）式和代入（20）式得

$$
n_{\mathrm{A}}(\alpha)=\frac{\theta_{0}}{2 \pi}+n_{\mathrm{c}}[f(\alpha)]^{\frac{3}{2}}
$$

式中

$$
f(\alpha)=\frac{1+\delta \cos \alpha(2+\delta \cos \alpha)}{1-\delta^{2}\left[1+3 \cos ^{2} \alpha+2 \delta \cos \alpha\left(1+\cos ^{2} \alpha\right)+\delta^{2} \cos ^{2} \alpha\right]}
$$

并对 $\alpha$ 求导，使得

$$
\frac{\mathrm{d} f(\alpha)}{\mathrm{d} \alpha}=0
$$

此即

$$
\frac{\mathrm{d} f(\alpha)}{\mathrm{d} \alpha}=-\sin \alpha \frac{\mathrm{d} f(\cos \alpha)}{\mathrm{d} \cos \alpha}=0
$$

显然有解

$$
\alpha=0, \pi
$$

（7）（i）若取 $\alpha=\alpha_{0}=0$ ，由（18）式有

$$
\varepsilon=\delta \sqrt{4+4 \delta+\delta^{2}}=\delta(\delta+2) \leq 1
$$

由此得

$$
0<\delta \leq \delta_{\max }=\sqrt{2}-1 \quad \text { (或 } 0<\delta<0.5 \text { ) }
$$

［
若取 $\alpha=\alpha_{0}=\pi$ ，由（18）式得

$$
\varepsilon=\delta \sqrt{\delta^{2}-4 \delta+4}=\delta|\delta-2| \leq 1
$$

当 $\delta \leq 2$ ，

$$
\varepsilon=\delta(2-\delta) \leq 1
$$

由此得

$$
-(\delta-1)^{2} \leq 0
$$

恒成立。当 $\delta>2$ ，

$$
\varepsilon=\delta(\delta-2) \leq 1
$$

由此得

$$
2<\delta \leq \sqrt{2}+1
$$

合起来有，若取 $\alpha_{0}=\pi$ ，

$$
0<\delta \leq \delta_{\max }=\sqrt{2}+1
$$

（ii）若取 $\alpha=\alpha_{0}=0$ ，由（20）（21）式有

$$
\left(\frac{2 \pi n_{\mathrm{A}}-\theta_{0}}{2 \pi n_{\mathrm{c}}}\right)^{2 / 3}=\frac{1+\delta(2+\delta)}{1-\delta^{2}\left[4+4 \delta+\delta^{2}\right]}=\frac{1}{1-\delta(2+\delta)}
$$

或

$$
\delta^{2}+2 \delta+\left(\frac{2 \pi n_{\mathrm{c}}}{2 \pi n_{\mathrm{A}}-\theta_{0}}\right)^{2 / 3}-1=0
$$

它有解的条件是判别式

$$
\Delta=2^{2}-4\left[\left(\frac{2 \pi n_{\mathrm{c}}}{2 \pi n_{\mathrm{A}}-\theta_{0}}\right)^{2 / 3}-1\right] \geq 0
$$

当 $\theta_{0}=\frac{\pi}{2}, n_{\mathrm{A}}=2, n_{\mathrm{c}}=1$（易验证满足 $\Delta \geq 0$ ），上式成为

$$
\delta^{2}+2 \delta+\left(\frac{4}{7}\right)^{2 / 3}-1=0
$$

解为

$$
0<\delta(\alpha=0)=-1+\sqrt{2-\left(\frac{4}{7}\right)^{2 / 3}}=0.145<\sqrt{2}-1
$$

已去掉 $\delta<0$ 的解。
［
若取 $\alpha=\alpha_{0}=\pi$ ，由（20）（21）式有

$$
\left(\frac{2 \pi n_{\mathrm{A}}-\theta_{0}}{2 \pi n_{\mathrm{c}}}\right)^{2 / 3}=\frac{1-\delta(2-\delta)}{1-\delta^{2}\left[4-4 \delta+\delta^{2}\right]}=\frac{1}{1+\delta(2-\delta)}
$$

或

$$
\delta^{2}-2 \delta+\left(\frac{2 \pi n_{\mathrm{c}}}{2 \pi n_{\mathrm{A}}-\theta_{0}}\right)^{2 / 3}-1=0
$$

它有解的条件是判别式

$$
\Delta=(-2)^{2}-4\left[\left(\frac{2 \pi n_{\mathrm{c}}}{2 \pi n_{\mathrm{A}}-\theta_{0}}\right)^{2 / 3}-1\right] \geq 0
$$

当 $\theta_{0}=\frac{\pi}{2}, n_{A}=2, n_{c}=1$（易验证满足 $\Delta \geq 0$ ），上式成为

$$
\delta^{2}-2 \delta+\left(\frac{4}{7}\right)^{2 / 3}-1=0
$$

解为

$$
0<\delta(\alpha=\pi)=1+\sqrt{2-\left(\frac{4}{7}\right)^{2 / 3}}=2.145<\sqrt{2}+1
$$

已去掉 $\delta<0$ 的解。
］

评分标准：
第（1）问10分，（1）（2）（3）（4）（5）式各2分；
第（2）问6分，（6）式3分，（7）式1分，（8）式2分；
第（3）问6分，（9）式2分，（10）式4分；
第（4）问18分，
解法（一）（11）式1分，（12）（13）（14）式各2分，（15）（16）式各3分，（17）式1分，（18）式4分；
解法（二）（11）式1分，（12）（13）（14）式各2分，（15）式3分，（16）（17）式各2分，（18）式4分；
第（5）问9分，（19）式3分，（20）式6分；
第（6）问3分，（22式1分，（23）式2分；
第（7）问12分，
第（i）小问 6 分，（24）（25）式各 3 分；
第（ii）小问 6 分，（26）（27）式各 3 分；
