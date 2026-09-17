---
id: cpho-f-2022-q3
source: cpho-f
native_id: "三、（60 分）一匀质刚性细圆环半径为 $R$ ，质量为 $M$ ，在水平地面（ $x-y$ 坐标平面）上滚动。假定摩擦系数足够大，以至于圆环和地面之间始终无滑动。记 $t$ 时刻圆环所在平面与坚直方向（ $z$ 方向）之间的夹角为 $\theta(t)$ ，圆环所在平面与地面之间的交线相对于 $x$ 方向的夹角为 $\phi(t)$ ，圆环与地面的瞬时接触点的直角坐标为$(x(t), y(t), 0)$ ，如图3a所示。重力加速度大小为 $g$ 。"
year: 2022
language: zh
translated: false
topic: [mechanics]
subtopic: [rolling, rotational-dynamics, non-inertial-frames, circular-motion]
difficulty: null
difficulty_norm: 5
math_tools: [vector-calculus, differential-equations]
format: open-ended
core_ideas: []
estimated_time_min: 90
points: null
has_solution: false
has_figure: true
figure_files: [cpho-f-2022-q3-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2022.mmd; figures require local harvest"
verification_status: pending
---

三、（60 分）一匀质刚性细圆环半径为 $R$ ，质量为 $M$ ，在水平地面（ $x-y$ 坐标平面）上滚动。假定摩擦系数足够大，以至于圆环和地面之间始终无滑动。记 $t$ 时刻圆环所在平面与坚直方向（ $z$ 方向）之间的夹角为 $\theta(t)$ ，圆环所在平面与地面之间的交线相对于 $x$ 方向的夹角为 $\phi(t)$ ，圆环与地面的瞬时接触点的直角坐标为$(x(t), y(t), 0)$ ，如图3a所示。重力加速度大小为 $g$ 。
（1）描述任意 $t$ 时刻圆环空间位置的

![](cpho-f-2022-q3-fig01.png)
图3a

$x(t) 、 y(t) 、 \theta(t) 、 \phi(t)$ 并非完全相互独立，试求出它们及其对时间的一阶导数之间的所有约束条件。
（2）设圆环做＂匀速圆周运动＂，圆环与地面的接触点以恒定速率绕 $z$ 轴画出一个半径为 $r$ 的圆，$\theta(t)=\theta$（ $\theta$ 为常量），$\phi(t)$ 是时间 $t$ 的线性函数。在实验室参考系 $\Sigma$ 中，不失一般性可设

$$
\binom{x(t)}{y(t)}=r\binom{-\sin (\omega t)}{\cos (\omega t)}
$$

这里 $\omega$ 是待求的角速度。在绕 $z$ 轴以角速度 $\omega$ 匀速旋转的转动参考系 $\Sigma^{\prime}$ 中，$\theta$ 和 $\phi$ 均为常量，圆环绕垂直于环面的中轴线做定轴转动。在参考系 $\Sigma^{\prime}$ 中，圆环上各质元会＂感受＂到离心力和科里奥利力的作用。将圆环视为许多微元的集合，求所有微元所受到的离心力的合力$\boldsymbol{F}_{\text {离心 }}$ 、科里奥利力的合力 $\boldsymbol{F}_{\text {科氏 }}$ 以及相对于圆环质心的离心力的合力矩 $\boldsymbol{\tau}_{\text {离心 }}$ 、科里奥利力的合力矩 $\boldsymbol{\tau}_{\text {科氏 }}$（结果可包含尚未求出的 $\omega$ ）。
（3）求（2）问中的 $\omega$ 以及地面对圆环施加的作用力（结果不得包含 $\omega$ ）。
（4）圆环高速滚动时，圆环可在坚直平面附近摆动而不倒下，具有较好的稳定性，从而圆环质心可近似视为沿直线运动，设该直线沿 $x$ 轴方向，质心速度大小约为常量 $V$ ，即质心位置坐标 $x(t)=V t+\delta x(t)$ ，而 $\delta x(t) 、 y(t) 、 \theta(t) 、 \phi(t)$ 均为小量（注意，它们可能并非是同阶小量）。导出保留到最低阶小量的圆环的运动方程。假设最低阶小量按余弦函数随时间变化，求变化的角频率 $\Omega$ ；并确定保持圆环运动稳定所需的常量 $V$ 的最小值 $V_{\min }$ 。

解答：
（1）记瞬时接触点位置矢量为

$$
\boldsymbol{A}=\left(\begin{array}{l}
x \\
y \\
0
\end{array}\right)
$$

圆环中心（质心）$O$ 的位置矢量为

$$
\boldsymbol{O}=\boldsymbol{A}+R\left(\begin{array}{c}
\sin \theta \sin \phi \\
-\sin \theta \cos \phi \\
\cos \theta
\end{array}\right)
$$

质心 $O$ 的速度为

$$
v_{\mathrm{O}}=\dot{\boldsymbol{O}}=\left(\begin{array}{c}
\dot{x}+R(\dot{\theta} \cos \theta \sin \phi+\dot{\phi} \sin \theta \cos \phi) \\
\dot{y}+R(-\dot{\theta} \cos \theta \cos \phi+\dot{\phi} \sin \theta \sin \phi) \\
-R \dot{\theta} \sin \theta
\end{array}\right)=\dot{\boldsymbol{A}}+\frac{\mathrm{d}}{\mathrm{~d} t}(\boldsymbol{O}-\boldsymbol{A})
$$

无滑动滚动的条件是 $\boldsymbol{v}_{O}$ 与 $(\boldsymbol{O}-\boldsymbol{A})$ 垂直，因为 $(\boldsymbol{O}-\boldsymbol{A})$ 长度固定，所以 $(\boldsymbol{O}-\boldsymbol{A})$ 和 $\frac{\mathrm{d}}{\mathrm{d} t}(\boldsymbol{O}-\boldsymbol{A})$ 始终垂直，因而无滑动滚动的条件简化为 $\dot{\boldsymbol{A}}$ 和 $(\boldsymbol{O}-\boldsymbol{A})$ 垂直，

$$
\left(\begin{array}{lll}
\dot{x}, & \dot{y}, & 0
\end{array}\right)\left(\begin{array}{c}
\sin \theta \sin \phi \\
-\sin \theta \cos \phi \\
\cos \theta
\end{array}\right)=0
$$

即

$$
\dot{x} \sin \theta \sin \phi-\dot{y} \sin \theta \cos \phi=0
$$

一般情况下 $\theta$ 不为零，故

$$
\dot{x} \sin \phi-\dot{y} \cos \phi=0
$$

或

$$
\binom{\dot{x}}{\dot{y}} \|\binom{\cos \phi}{\sin \phi}
$$

即圆环应该在瞬时所在平面内滚动，接触点的速度沿着瞬时所在平面和水平面的交线方向。
（2）本问下面使用绕过坐标原点的 $z$ 轴以角速度 $\omega$ 匀速旋转的 $X Y$ 坐标系，在这个坐标系中，圆环质心处于静止状态，其质心动量始终为 0 ；
根据无滑动滚动的约束条件，圆环绕自身中轴线转动的角速度大小为

$$
\omega^{\prime}=\omega \frac{r}{R}
$$

角速度矢量为

$$
\boldsymbol{\omega}^{\prime}=\omega \frac{r}{R}\left(\begin{array}{c}
0 \\
-\cos \theta \\
-\sin \theta
\end{array}\right)
$$

角动量始终为

$$
\boldsymbol{L}=M R^{2} \boldsymbol{\omega}^{\prime}=M R r \omega\left(\begin{array}{c}
0 \\
-\cos \theta \\
-\sin \theta
\end{array}\right)
$$

圆环与地面的接触点 $A$ 的位置矢量为

$$
\boldsymbol{A}=\left(\begin{array}{c}
X_{A} \\
Y_{A} \\
z_{A}
\end{array}\right)=\left(\begin{array}{l}
0 \\
r \\
0
\end{array}\right)
$$

质心 $O$ 的位置矢量为

$$
\boldsymbol{O}=\left(\begin{array}{c}
X_{O} \\
Y_{O} \\
z_{O}
\end{array}\right)=\left(\begin{array}{c}
0 \\
r-R \sin \theta \\
R \cos \theta
\end{array}\right)
$$

则圆环上相对于矢径 $O A$ 成 $90^{\circ}$ 角的 $B$ 点的位置矢量为

$$
\boldsymbol{B}=\left(\begin{array}{c}
X_{B} \\
Y_{B} \\
Z_{B}
\end{array}\right)=\left(\begin{array}{c}
X_{O} \\
Y_{O} \\
Z_{O}
\end{array}\right)+\left(\begin{array}{c}
-R \\
0 \\
0
\end{array}\right)
$$

考虑圆环上任意点 $C$ ，令 $\angle C O A \equiv \varphi$ ，则 $C$ 在 $X Y$ 坐标系中的位置矢量为

$$
\boldsymbol{C}=\left(\begin{array}{c}
X_{C} \\
Y_{C} \\
z_{C}
\end{array}\right)=\left(\begin{array}{c}
X_{O} \\
Y_{O} \\
z_{O}
\end{array}\right)+\left(\begin{array}{c}
0 \\
R \sin \theta \\
-R \cos \theta
\end{array}\right) \cos \varphi+\left(\begin{array}{c}
-R \\
0 \\
0
\end{array}\right) \sin \varphi=\left(\begin{array}{c}
-R \sin \varphi \\
r-R \sin \theta(1-\cos \varphi) \\
R \cos \theta(1-\cos \varphi)
\end{array}\right)
$$

圆环 $C$ 点处 $\mathrm{d} \varphi$ 弧元受到的离心力（在 $X Y$ 坐标系中）为

$$
\mathrm{d} \boldsymbol{F}_{\text {离心力 }}=M \frac{\mathrm{~d} \varphi}{2 \pi} \omega^{2}\left(\begin{array}{c}
X_{C} \\
Y_{C} \\
0
\end{array}\right)
$$

总的离心力为

$$
\boldsymbol{F}_{\text {离心力 }}=\int_{\varphi=0}^{2 \pi} \mathrm{~d} \boldsymbol{F}_{\text {离心力 }}=M \omega^{2} \int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi}\left(\begin{array}{c}
X_{C} \\
Y_{C} \\
0
\end{array}\right)=M \omega^{2}\left(\begin{array}{c}
X_{O} \\
Y_{O} \\
0
\end{array}\right)=M \omega^{2}\left(\begin{array}{c}
0 \\
r-R \sin \theta \\
0
\end{array}\right)
$$

圆环 $C$ 点处 $\mathrm{d} \varphi$ 弧元受到的科里奥里力（在 $X Y$ 坐标系中）为

$$
\mathrm{d} \boldsymbol{F}_{\text {科氏力 }}=M \frac{\mathrm{~d} \varphi}{2 \pi}\left[-2 \omega\left(\begin{array}{l}
0 \\
0 \\
1
\end{array}\right) \times v_{C}\right]
$$

其中 $v_{C}$ 为 $C$ 点在 $X Y$ 坐标系中绕圆环中心旋转的速度，

$$
\boldsymbol{v}_{C}=\boldsymbol{\omega}^{\prime} \times(\boldsymbol{C}-\boldsymbol{O})=\omega \frac{r}{R}\left(\begin{array}{c}
0 \\
-\cos \theta \\
-\sin \theta
\end{array}\right) \times(\boldsymbol{C}-\boldsymbol{O})=\omega r\left(\begin{array}{c}
\cos \varphi \\
\sin \theta \sin \varphi \\
-\cos \theta \sin \varphi
\end{array}\right)
$$

总的科里奥里力为

$$
\boldsymbol{F}_{\text {科氏力 }}=\int_{\varphi=0}^{2 \pi} \mathrm{~d} \boldsymbol{F}_{\text {科氏力 }}=-2 M \omega\left(\begin{array}{l}
0 \\
0 \\
1
\end{array}\right) \times \int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi} \boldsymbol{v}_{C}=-2 M \omega\left(\begin{array}{l}
0 \\
0 \\
1
\end{array}\right) \times \boldsymbol{v}_{O}=0
$$

$\mathrm{d} \varphi$ 弧元受到的离心力的力矩为

$$
\mathrm{d} \boldsymbol{\tau}_{\text {离心力 }}=(\boldsymbol{C}-\boldsymbol{O}) \times M \frac{\mathrm{~d} \varphi}{2 \pi} \omega^{2}\left(\begin{array}{c}
X_{C} \\
Y_{C} \\
0
\end{array}\right)=M \frac{\mathrm{~d} \varphi}{2 \pi} \omega^{2}(\boldsymbol{C}-\boldsymbol{O}) \times\left(\boldsymbol{C}-\left(\begin{array}{c}
0 \\
0 \\
z_{C}
\end{array}\right)\right)
$$

注意

$$
(\boldsymbol{C}-\boldsymbol{O}) \times \boldsymbol{C}=(\boldsymbol{C}-\boldsymbol{O}) \times(\boldsymbol{C}-\boldsymbol{O})+(\boldsymbol{C}-\boldsymbol{O}) \times \boldsymbol{O}=(\boldsymbol{C}-\boldsymbol{O}) \times \boldsymbol{O}
$$

因此

$$
\int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi}(\boldsymbol{C}-\boldsymbol{O}) \times \boldsymbol{C}=\left[\int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi}(\boldsymbol{C}-\boldsymbol{O})\right] \times \boldsymbol{O}=0
$$

离心力的总力矩 $\boldsymbol{\tau}_{\text {离心力 }}$ 为

$$
\begin{gathered}
\boldsymbol{\tau}_{\text {离心力 }}=-\int_{\varphi=0}^{2 \pi} M \frac{\mathrm{~d} \varphi}{2 \pi} \omega^{2}(\boldsymbol{C}-\boldsymbol{O}) \times\left(\begin{array}{c}
0 \\
0 \\
z_{C}
\end{array}\right)=-M \omega^{2} \int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi} z_{C}\left(\begin{array}{c}
Y_{C}-Y_{O} \\
-\left(X_{C}-X_{O}\right) \\
0
\end{array}\right) \\
=-M \omega^{2} \int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi} R \cos \theta(1-\cos \varphi)\left(\begin{array}{c}
R \sin \theta \cos \varphi \\
R \sin \varphi \\
0
\end{array}\right) \\
=\frac{1}{2} M \omega^{2} R^{2}\left(\begin{array}{c}
\cos \theta \sin \theta \\
0 \\
0
\end{array}\right)
\end{gathered}
$$

$\mathrm{d} \varphi$ 弧元受到的科里奥里力的力矩 $\mathrm{d} \boldsymbol{\tau}_{\text {科氏力 }}$ 为

$$
\begin{aligned}
\mathrm{d} \boldsymbol{\tau}_{\text {科氏力 }}=-M & \frac{\mathrm{~d} \varphi}{2 \pi}(\boldsymbol{C}-\boldsymbol{O}) \times\left[\left(\begin{array}{c}
0 \\
0 \\
2 \omega
\end{array}\right) \times \boldsymbol{v}_{C}\right] \\
& =-M \frac{\mathrm{~d} \varphi}{2 \pi}(-R \sin \varphi \quad R \sin \theta \cos \varphi \quad-R \cos \theta \cos \varphi) \\
& \quad \times\left(\begin{array}{c}
-2 \omega^{2} r \sin \theta \sin \varphi \\
2 \omega^{2} r \cos \varphi \\
0
\end{array}\right)
\end{aligned}
$$

科里奥里力的总力矩 $\boldsymbol{\tau}_{\text {科氏力 }}$ 为

$$
\boldsymbol{\tau}_{\text {科氏力 }}=\int_{\varphi=0}^{2 \pi} \mathrm{~d} \boldsymbol{\tau}_{\text {科氏力 }}=\left(\begin{array}{c}
-M \omega^{2} R r \cos \theta \\
0 \\
0
\end{array}\right)
$$

上述计算中已利用下列积分公式

$$
\begin{gathered}
\int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi} \sin \varphi=\int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi} \cos \varphi=\int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi} \sin \varphi \cos \varphi=0 \\
\int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi}(\cos \varphi)^{2}=\int_{\varphi=0}^{2 \pi} \frac{\mathrm{~d} \varphi}{2 \pi}(\sin \varphi)^{2}=\frac{1}{2}
\end{gathered}
$$

（3）
解法（一）
在旋转参考系中，圆环质心位置不动，绕对称轴做匀速定轴转动，因此圆环受到的合力、合力矩都应该为零。除了（2）中考虑的离心力和科里奥里力，圆环还受到重力

$$
\boldsymbol{F}_{\text {重力 }}=\left(\begin{array}{c}
0 \\
0 \\
-M g
\end{array}\right)
$$

以及地面对圆环的正压力 $\boldsymbol{N}$（坚直方向）和摩擦力 $\boldsymbol{f}$（水平方向），受力平衡条件是

$$
\boldsymbol{F}_{\text {重力 }}+\boldsymbol{F}_{\text {离心力 }}+\boldsymbol{F}_{\text {科氏力 }}+\boldsymbol{N}+\boldsymbol{f}=0
$$

即

$$
\left(\begin{array}{c}
0 \\
0 \\
-M g
\end{array}\right)+M \omega^{2}\left(\begin{array}{c}
0 \\
r-R \sin \theta \\
0
\end{array}\right)+0+\boldsymbol{N}+\boldsymbol{f}=0
$$

显然 $\boldsymbol{N}$ 应该沿 $z$ 方向， $\boldsymbol{f}$ 应该在 $x y$ 面内。所以在 $X Y$ 坐标系中

$$
\begin{aligned}
\boldsymbol{N} & =\left(\begin{array}{c}
0 \\
0 \\
M g
\end{array}\right) \\
\boldsymbol{f} & =M \omega^{2}\left(\begin{array}{c}
0 \\
R \sin \theta-r \\
0
\end{array}\right)
\end{aligned}
$$

重力相对于质心的力矩为零，地面对圆环的压力与摩擦力的合力相对于质心 $O$ 的力矩$\boldsymbol{\tau}_{\text {地面 }}$（在 $X Y$ 坐标系中）为

$$
\begin{aligned}
\boldsymbol{\tau}_{\text {地面 }} & =(\boldsymbol{A}-\boldsymbol{O}) \times(\boldsymbol{N}+\boldsymbol{f})=R\left(\begin{array}{l}
0, \quad \sin \theta, \quad-\cos \theta
\end{array}\right) \times\left(\begin{array}{c}
0 \\
M \omega^{2}(R \sin \theta-r) \\
M g
\end{array}\right) \\
& =M\left(\begin{array}{c}
g R \sin \theta+\omega^{2} R(R \sin \theta-r) \cos \theta \\
0 \\
0
\end{array}\right)
\end{aligned}
$$

力矩平衡条件为

$$
\boldsymbol{\tau}_{\text {离心力 }}+\boldsymbol{\tau}_{\text {科氏力 }}+\boldsymbol{\tau}_{\text {地面 }}=0
$$

由此知

$$
\frac{\omega^{2} R^{2}}{2} \cos \theta \sin \theta-\omega^{2} R r \cos \theta+g R \sin \theta+\omega^{2} R(R \sin \theta-r) \cos \theta=0
$$

可得

$$
\omega=\sqrt{\frac{g \sin \theta}{\cos \theta\left(2 r-\frac{3}{2} R \sin \theta\right)}}
$$

地面对圆环的摩擦力等于

$$
f=-\frac{2 M g \sin \theta}{(4 r-3 R \sin \theta) \cos \theta}\left(\begin{array}{c}
0 \\
r-R \sin \theta \\
0
\end{array}\right)
$$

地面对圆环施加的作用力由（21）和（26）表示。

解法（二）：利用刚体的主轴、惯量张量、角速度矢量等概念
本解法将在无旋转的 $x y z$ 坐标系内考虑圆环的运动方程，注意 $x y z$ 坐标系与旋转的 $X Y z$ 坐标系的关系为

$$
\binom{x}{y}=\left(\begin{array}{cc}
\cos (\omega t) & -\sin (\omega t) \\
\sin (\omega t) & \cos (\omega t)
\end{array}\right)\binom{X}{Y}=\binom{X \cos (\omega t)-Y \sin (\omega t)}{X \sin (\omega t)+Y \cos (\omega t)}
$$

为了方便起见，定义旋转的 $X Y Z$ 坐标系中的单位向量

$$
\hat{X}=\left(\begin{array}{c}
\cos (\omega t) \\
\sin (\omega t) \\
0
\end{array}\right), \hat{Y}=\left(\begin{array}{c}
-\sin (\omega t) \\
\cos (\omega t) \\
0
\end{array}\right) . \hat{z}=\left(\begin{array}{l}
0 \\
0 \\
1
\end{array}\right)
$$

圆环质心做半径为 $r-R \sin \theta$ 、角速度为 $\omega$ 的匀速圆周运动，
由质心运动定理，地面对圆环的压力和摩擦力分别为

$$
\begin{aligned}
& \boldsymbol{N}=M g \hat{z} \\
& \boldsymbol{f}=-M \omega^{2}(r-R \sin \theta) \hat{Y}
\end{aligned}
$$

圆环在旋转的 $X Y z$ 坐标系中绕质心转动的角速度为

$$
\boldsymbol{\omega}_{X Y Z}^{\prime}=-\omega \frac{r}{R}(\sin \theta \hat{Z}+\cos \theta \hat{Y})
$$

因此圆环在 $x y z$ 坐标系中绕质心转动的角速度为

$$
\boldsymbol{\omega}_{x y z}^{\prime}=\boldsymbol{\omega}_{X Y z}^{\prime}+\omega \hat{z}=\omega\left(1-\frac{r}{R} \sin \theta\right) \hat{z}-\omega \frac{r}{R} \cos \theta \hat{Y}
$$

圆环的主轴方向单位矢量分别为

$$
\begin{aligned}
& \hat{a}_{1}=\sin \theta \hat{z}+\cos \theta \hat{Y} \\
& \hat{a}_{2}=\hat{X} \\
& \hat{a}_{3}=-\cos \theta \hat{z}+\sin \theta \hat{Y}
\end{aligned}
$$

各主轴方向的转动惯量分别为

$$
I_{1}=M R^{2}, \quad I_{2}=I_{3}=\frac{1}{2} M R^{2}
$$

因此圆环相对于质心的角动量为

$$
\begin{aligned}
\boldsymbol{L} & =\left(\boldsymbol{\omega}_{x y z}^{\prime} \cdot \hat{a}_{1}\right) \hat{a}_{1} I_{1}+\left(\boldsymbol{\omega}_{x y z}^{\prime} \cdot \hat{a}_{2}\right) \hat{a}_{2} I_{2}+\left(\boldsymbol{\omega}_{x y z}^{\prime} \cdot \hat{a}_{3}\right) \hat{a}_{3} I_{3} \\
& =M R^{2} \omega\left(\sin \theta-\frac{r}{R}\right) \hat{a}_{1}-\frac{1}{2} M R^{2} \omega \cos \theta \hat{a}_{3} \\
& =M R^{2} \omega\left[\frac{1}{2}\left(1+(\sin \theta)^{2}\right)-\frac{r}{R} \sin \theta\right] \hat{z}+M R^{2} \omega\left(\frac{1}{2} \sin \theta-\frac{r}{R}\right) \cos \theta \hat{Y}
\end{aligned}
$$

质心角动量的变化率等于不包括重力的外力力矩

$$
\frac{\mathrm{d}}{\mathrm{~d} t} \boldsymbol{L}=\boldsymbol{\tau}_{\text {地面 }}
$$

注意

$$
\begin{aligned}
& \frac{\mathrm{d}}{\mathrm{~d} t} \hat{X}=\omega \hat{Y} \\
& \frac{\mathrm{~d}}{\mathrm{~d} t} \hat{Y}=-\omega \hat{X} \\
& \frac{\mathrm{~d}}{\mathrm{~d} t} \hat{Z}=0
\end{aligned}
$$

因此

$$
\frac{\mathrm{d}}{\mathrm{~d} t} \boldsymbol{L}=-M R^{2} \omega^{2}\left(\frac{1}{2} \sin \theta-\frac{r}{R}\right) \cos \theta \hat{X}
$$

而地面对圆环的合力相对于圆环质心的力矩 $\boldsymbol{\tau}_{\text {地面 }}$ 为

$$
\boldsymbol{\tau}_{\text {地面 }}=R \hat{a}_{3} \times(\boldsymbol{N}+\boldsymbol{f})=M g R \sin \theta \hat{X}-M \omega^{2}(r-R \sin \theta) R \hat{X}
$$

因此

$$
\begin{gathered}
-M R^{2} \omega^{2}\left(\frac{1}{2} \sin \theta-\frac{r}{R}\right) \cos \theta=M g R \sin \theta-M \omega^{2}(r-R \sin \theta) R \\
M \omega^{2} R\left(2 r-\frac{3}{2} R \sin \theta\right) \cos \theta=M g R \sin \theta
\end{gathered}
$$

可得

$$
\omega=\sqrt{\frac{g \sin \theta}{\cos \theta\left(2 r-\frac{3}{2} R \sin \theta\right)}}
$$

地面对圆环的摩擦力等于

$$
f=-\frac{2 M g \sin \theta}{(4 r-3 R \sin \theta) \cos \theta}\left(\begin{array}{c}
0 \\
r-R \sin \theta \\
0
\end{array}\right)
$$

（4）注意：下面的小量分析中始终认为一个变量和它的时间导数是同阶的小量，即假设运动中不包含振动频率趋于无穷大的成分。
（1）问中的运动学约束保留到小量的最低阶为

$$
\dot{y} \approx V \phi
$$

由此可见 $y$ 和 $\phi$ 是同阶小量。
圆环质心 $O$ 的位置矢量在一阶小量近似下为

$$
\boldsymbol{O}=\left(\begin{array}{c}
x+R \sin \theta \sin \phi \\
y-R \sin \theta \cos \phi \\
R \cos \theta
\end{array}\right) \approx\left(\begin{array}{c}
V t+\delta x \\
y-R \theta \\
R
\end{array}\right)
$$

地面对圆环的摩擦力在一阶小量近似下为

$$
f=M \frac{\mathrm{~d}}{\mathrm{~d} t} v_{O}=M \frac{\mathrm{~d}}{\mathrm{~d} t}\left(\begin{array}{c}
\dot{x}+R(\dot{\theta} \cos \theta \sin \phi+\dot{\phi} \sin \theta \cos \phi) \\
\dot{y}+R(-\dot{\theta} \cos \theta \cos \phi+\dot{\phi} \sin \theta \sin \phi) \\
-R \dot{\theta} \sin \theta
\end{array}\right) \approx M \frac{\mathrm{~d}}{\mathrm{~d} t}\left(\begin{array}{c}
V+\dot{\delta} x \\
\dot{y}-R \dot{\theta} \\
0
\end{array}\right)=M\left(\begin{array}{c}
\ddot{\delta x} \\
\ddot{y}-R \ddot{\theta} \\
0
\end{array}\right)
$$

地面对圆环的压力在一阶近似下为

$$
\boldsymbol{N} \approx\left(\begin{array}{c}
0 \\
0 \\
M g
\end{array}\right)
$$

下面分两种方法近似计算圆环绕质心的角动量：
－－－
计算方法（一）：微元分析
类比（2），考虑圆环上 $C$ 点，瞬时坐标近似为

$$
\boldsymbol{C} \approx \boldsymbol{O}+R\left(\begin{array}{c}
-\sin \varphi \\
\theta \cos \varphi-\phi \sin \varphi \\
-\cos \varphi
\end{array}\right)
$$

在一阶近似下，

$$
\dot{\varphi} \approx \frac{(\dot{x} \cos \phi+\dot{y} \sin \phi)}{R} \approx \frac{V}{R}+\frac{1}{R} \dot{\delta} x
$$

因此 $C$ 点相对于质心 $O$ 点的速度近似为

$$
\boldsymbol{v}_{C}-\boldsymbol{v}_{O} \approx R(\dot{\theta} \cos \varphi-\dot{\phi} \sin \varphi)+(V+\dot{\delta x})\left(\begin{array}{c}
-\cos \varphi \\
-\theta \sin \varphi-\phi \cos \varphi \\
\sin \varphi
\end{array}\right)
$$

$\mathrm{d} \varphi$ 弧元相对于质心的角动量为

$$
\begin{aligned}
d \boldsymbol{L}=(\boldsymbol{C}-\boldsymbol{O}) \times & M \frac{\mathrm{~d} \varphi}{2 \pi}\left(\boldsymbol{v}_{C}-\boldsymbol{v}_{O}\right) \\
& \approx \frac{\mathrm{d} \varphi}{2 \pi} M R^{2}\left(\begin{array}{c}
\dot{\theta}(\cos \varphi)^{2}-\dot{\phi} \cos \varphi \sin \varphi \\
0 \\
-\dot{\theta} \sin \varphi \cos \varphi+\dot{\phi}(\sin \varphi)^{2}
\end{array}\right) \\
& +\frac{\mathrm{d} \varphi}{2 \pi} M R(V+\dot{\delta x})\left(\begin{array}{c}
-\phi \\
1 \\
\theta
\end{array}\right)
\end{aligned}
$$

总角动量为

$$
\boldsymbol{L}=\int_{\varphi=0}^{2 \pi}(\boldsymbol{C}-\boldsymbol{O}) \times M \frac{\mathrm{~d} \varphi}{2 \pi}\left(\boldsymbol{v}_{C}-\boldsymbol{v}_{O}\right) \approx M R^{2}\left(\begin{array}{c}
-\frac{V}{R} \phi+\frac{1}{2} \dot{\theta} \\
\frac{V}{R}+\frac{1}{R} \dot{\delta x} \\
\frac{1}{2} \dot{\phi}+\frac{V}{R} \theta
\end{array}\right)
$$

－－－
计算方法（二）：利用刚体的主轴、惯量张量、角速度矢量等概念
圆环的三个主轴方向在一阶近似下分别为（见前面（2）的解法（二））：
中轴线方向

$$
\hat{a}_{1}=\left(\begin{array}{c}
-\cos \theta \sin \phi \\
\cos \theta \cos \phi \\
\sin \theta
\end{array}\right) \approx\left(\begin{array}{c}
-\phi \\
1 \\
\theta
\end{array}\right)
$$

近似的 $\phi$ 角转轴

$$
\hat{a}_{2}=\left(\begin{array}{c}
\sin \theta \sin \phi \\
-\sin \theta \cos \phi \\
\cos \theta
\end{array}\right) \approx\left(\begin{array}{c}
0 \\
-\theta \\
1
\end{array}\right)
$$

$\theta$ 角转轴

$$
\hat{a}_{3}=\left(\begin{array}{c}
\cos \phi \\
\sin \phi \\
0
\end{array}\right) \approx\left(\begin{array}{l}
1 \\
\phi \\
0
\end{array}\right)
$$

转动惯量分别为

$$
I_{1}=M R^{2}, \quad I_{2}=I_{3}=\frac{1}{2} M R^{2}
$$

绕三个主轴的角速度分别近似为：
绕中轴线方向角速度

$$
\omega_{1}^{\prime} \approx \frac{1}{R}(V+\dot{\delta x})
$$

绕近似 $\phi$ 角转轴角速度

$$
\omega_{2}^{\prime} \approx \dot{\phi}
$$

绕 $\theta$ 角转轴角速度

$$
\omega_{3}^{\prime} \approx \dot{\theta}
$$

圆环绕质心的角动量近似为

$$
\boldsymbol{L} \approx \frac{1}{R}(V+\dot{\delta} x) M R^{2}\left(\begin{array}{c}
-\phi \\
1 \\
\theta
\end{array}\right)+\frac{1}{2} M R^{2} \dot{\phi}\left(\begin{array}{c}
0 \\
-\theta \\
1
\end{array}\right)+\frac{1}{2} M R^{2} \dot{\theta}\left(\begin{array}{l}
1 \\
\phi \\
0
\end{array}\right) \approx M R^{2}\left(\begin{array}{c}
-\frac{V}{R} \phi+\frac{1}{2} \dot{\theta} \\
\frac{V}{R}+\frac{1}{R} \dot{\delta x} \\
\frac{1}{2} \dot{\phi}+\frac{V}{R} \theta
\end{array}\right)
$$

－－－
地面对圆环的压力和摩擦力的合力对圆环质心的力矩 $\boldsymbol{\tau}_{\text {地面 }}$ 在一阶近似下为

$$
\boldsymbol{\tau}_{\text {地面 }} \approx R\left(\begin{array}{lll}
0 & \theta & -1
\end{array}\right) \times M\left(\begin{array}{c}
\ddot{\delta x} \\
\ddot{y}-R \ddot{\theta} \\
g
\end{array}\right) \approx M R\left(\begin{array}{c}
g \theta+\ddot{y}-R \ddot{\theta} \\
-\ddot{\delta x} \\
0
\end{array}\right)
$$

由

$$
\frac{\mathrm{d}}{\mathrm{~d} t} \boldsymbol{L}=\boldsymbol{\tau}_{\text {地面 }}
$$

得三个分量满足的方程，

$$
\begin{aligned}
& -V \dot{\phi}+\frac{R}{2} \ddot{\theta} \approx g \theta+\ddot{y}-R \ddot{\theta} \\
& \ddot{\delta} x \approx-\ddot{\delta} x \\
& \frac{R}{2} \ddot{\phi}+V \dot{\theta} \approx 0
\end{aligned}
$$

再考虑前面运动学约束 $\dot{y} \approx V \phi$ ，可知 $y(t) 、 \theta(t) 、 \phi(t)$ 为同阶小量。
将（31）代入（41）式中消去 $y$ ，得

$$
\frac{3 R}{2} \ddot{\theta}-g \theta \approx 2 V \dot{\phi}
$$

再取导数，代入④3，得

$$
\frac{3 R}{2} \dddot{\theta}+\left(\frac{4 V^{2}}{R}-g\right) \dot{\theta}=0
$$

设 $y(t) 、 \theta(t) 、 \phi(t)$ 均作角频率为 $\Omega$ 的简谐振动，即均正比于 $\cos (\Omega t+$ 常数 $)$ ，
则 $\Omega$ 需要满足

$$
-\frac{3 R}{2} \Omega^{2}+\left(\frac{4 V^{2}}{R}-g\right)=0
$$

故

$$
\Omega=\sqrt{\frac{8 V^{2}}{3 R^{2}}-\frac{2 g}{3 R}}
$$

圆环运动稳定需要 $\Omega$ 为实数，故

$$
\frac{8 V^{2}}{3 R^{2}}-\frac{2 g}{3 R} \geq 0
$$

最小速率为

$$
V_{\min }=\frac{\sqrt{g R}}{2}
$$

（42）说明在最低阶小量近似下 $\ddot{\delta} x \approx 0$ ，因此 $\delta x$ 应该是相对于 $y 、 \theta 、 \phi$ 的高阶小量。

评分标准：总60分
第（1）问 6 分，
（2）（3）（5）（6）各1分，（4）2分

第（2）问23分，
（7）为2分，（11）为2分，（12）为2分，（13）为2分，（15）为3分，（16）为2分，（17）为4分，（18）为2分，（19）为 4 分；

第（3）问12分，
解法（一）：（20） 1 分，（21） 2 分，（22） 1 分，（23） 2 分，（24） 1 分，（25）为 3 分，（26）为 2 分；
解法（二）：（21）为 2 分，（22） 1 分，（25） 1 分，（27） 1 分，（28）为 2 分，（29）为 3 分，（30）为 2 分；
第（4）问19分，
（31） 2 分，（32） 2 分，（33）（34）各 1 分，（39）为 3 分，（40）（41）（42）（43）各 1 分，（44）（45）（46）各 2 分；
