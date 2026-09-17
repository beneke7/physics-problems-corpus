---
id: cpho-f-2018-q1
source: cpho-f
native_id: "一、如图，半径为 $R$ 、质量为 $M$ 的半球静置于光滑水平桌面上，在半球顶点上有一质量为 $m$ 、半径为 $r$ 的匀质小球。某时刻，小球受到微小的扰动后由静止开始沿半球表面运动。在运动过程中，小球相对于半球的位置由角位置 $\theta$ 描述，$\theta$ 为两球心的连线与坚直方向之间的夹角。已知小球绕其对称轴的转动惯量为 $\frac{2}{5} m r^{2}$ ，小球与半球之间的动摩擦因数为 $\mu$ ，假定最大静摩擦力等于滑动摩擦力。重力加速度大小为 $g$ 。"
year: 2018
language: zh
translated: false
topic: [mechanics]
subtopic: [rolling, friction, center-of-mass, rotational-dynamics]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 50
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2018.mmd"
verification_status: pending
---

一、如图，半径为 $R$ 、质量为 $M$ 的半球静置于光滑水平桌面上，在半球顶点上有一质量为 $m$ 、半径为 $r$ 的匀质小球。某时刻，小球受到微小的扰动后由静止开始沿半球表面运动。在运动过程中，小球相对于半球的位置由角位置 $\theta$ 描述，$\theta$ 为两球心的连线与坚直方向之间的夹角。已知小球绕其对称轴的转动惯量为 $\frac{2}{5} m r^{2}$ ，小球与半球之间的动摩擦因数为 $\mu$ ，假定最大静摩擦力等于滑动摩擦力。重力加速度大小为 $g$ 。
（1）小球开始运动后在一段时间内做纯滚动，求在此过程中，当小球的角位置为 $\theta_{1}$ 时，半球运动的速度大小 $V_{M}\left(\theta_{1}\right)$ 和加速度大小 $a_{M}\left(\theta_{1}\right)$ ；
（2）当小球纯滚动到角位置 $\theta_{2}$ 时开始相对于半球滑动，求 $\theta_{2}$ 所满足的方程（可用半球速度大小 $V_{M}\left(\theta_{2}\right)$ 和加速度大小 $a_{M}\left(\theta_{2}\right)$ 以及题给条件表示）；
（3）当小球刚好运动到角位置 $\theta_{3}$ 时脱离半球，求此时小球质心相对于半球运动速度的大小$v_{m}\left(\theta_{3}\right)$ 。

参考解答：
（1）（解法一）
半球和小球组成的系统在水平方向上没有受到外力作用，系统在水平方向上动量守恒

$$
-M V_{M}+m\left[(R+r) \dot{\theta} \cos \theta-V_{M}\right]=0
$$

设小球转动角速度大小为 $\omega$ ，小球做纯滚动，故有

$$
r \omega=(R+r) \dot{\theta}
$$

无耗散力做功，系统的机械能守恒

$$
\begin{aligned}
& m g(R+r)(1-\cos \theta) \\
& =\frac{1}{2} M V_{M}^{2}+\frac{1}{2} m\left\{\left[(R+r) \dot{\theta} \cos \theta-V_{M}\right]^{2}+[(R+r) \dot{\theta} \sin \theta]^{2}\right\}+\frac{1}{2} I \omega^{2}
\end{aligned}
$$

式中 $I=\frac{2}{5} m r^{2}$ 。联立（1）（2）（3）式得，小球运动到角位置 $\theta_{1}$ 时半球速度大小

$$
V_{M}=\sqrt{\frac{10 m^{2}(R+r) g\left(1-\cos \theta_{1}\right) \cos ^{2} \theta_{1}}{\left[7(M+m)-5 m \cos ^{2} \theta_{1}\right](M+m)}}
$$

或

$$
V_{M}^{2}=\frac{10 m^{2} g(R+r)\left(1-\cos \theta_{1}\right) \cos ^{2} \theta_{1}}{\left[7 M+\left(5 \sin ^{2} \theta_{1}+2\right) m\right](m+M)}
$$

将上式两边对时间 $t$ 微商得

$$
\begin{aligned}
2 V_{M} a_{M}= & \frac{10 m g\left(-2 \cos \theta+3 \cos ^{2} \theta\right)\left[7(M+m)-5 m \cos ^{2} \theta\right]-100 m^{2} g(1-\cos \theta) \cos ^{3} \theta}{\left[7(M+m)-5 m \cos ^{2} \theta\right]^{2}} \\
& \cdot \frac{m(R+r) \sin \theta \cdot \dot{\theta}}{M+m}
\end{aligned}
$$

由（1）式可知

$$
\frac{m(R+r) \dot{\theta}}{M+m}=\frac{V_{M}}{\cos \theta}
$$

由以上两式得，小球运动到角位置 $\theta_{1}$ 时，半球的加速度大小为

$$
a_{M}\left(\theta_{1}\right)=-\frac{5 m g \sin \theta_{1}\left[14(M+m)-21(M+m) \cos \theta_{1}+5 m \cos ^{3} \theta_{1}\right]}{\left[7(M+m)-5 m \cos ^{2} \theta_{1}\right]^{2}}
$$

［（解法二）
见下面第（2）问解答，列出动力学方程和运动学约束，也可以解得半球的加速度大小 $a_{M}\left(\theta_{1}\right)$ 。I
（2）当小球纯滚动到角位置 $\theta\left(\theta \leq \theta_{2}\right)$ 时，设小球对半球的正压力和摩擦力大小分别为 $N$ 和$f$ ，由牛顿第二定律有

$$
N \sin \theta-f \cos \theta=M a_{M}
$$

在半球参考系中，对小球利用质心运动定理得

$$
\begin{aligned}
& m g \cos \theta-N-m a_{M} \sin \theta=m \frac{v_{\mathrm{C}}^{2}}{R+r} \\
& m g \sin \theta+m a_{M} \cos \theta-f=m \frac{\mathrm{~d} v_{\mathrm{C}}}{\mathrm{~d} t}
\end{aligned}
$$

式中 $v_{\mathrm{C}}$ 为半球参考系中小球质心速度的大小

$$
v_{\mathrm{C}}=r \omega=(R+r) \dot{\theta}=\frac{M+m}{m \cos \theta} V_{M}
$$

（9）式的最后等式已应用了（1）式。在小球质心参考系中对小球利用转动定理有

$$
f r=I \frac{\mathrm{~d} \omega}{\mathrm{~d} t}
$$

由（6）（7）（8）（9）（10）式得

$$
\begin{aligned}
& f=\frac{2 m}{7}\left(g \sin \theta+a_{M} \cos \theta\right) \\
& N=m g \cos \theta-m a_{M} \sin \theta-m \frac{v_{\mathrm{C}}^{2}}{R+r}
\end{aligned}
$$

按照纯滚动条件，要求

$$
f \leq \mu N
$$

当小球纯滚动到角位置 $\theta_{2}$ 时开始相对于半球滑动，上式中等号成立。将（11）（12）式代入 $f=\mu N$ 得

$$
\frac{2 m}{7}\left[g \sin \theta_{2}+a_{M}\left(\theta_{2}\right) \cos \theta_{2}\right]=\mu\left[m g \cos \theta_{2}-m a_{M}\left(\theta_{2}\right) \sin \theta_{2}-m \frac{v_{\mathrm{C}}^{2}\left(\theta_{2}\right)}{R+r}\right]
$$

将（9）式代入上式得 $\theta_{2}$ 所满足的方程为

$$
\frac{2}{7} g \sin \theta_{2}-\mu g \cos \theta_{2}+a_{M}\left(\theta_{2}\right)\left(\frac{2}{7} \cos \theta_{2}+\mu \sin \theta_{2}\right)+\frac{\mu(M+m)^{2} V_{M}^{2}\left(\theta_{2}\right)}{(R+r) m^{2} \cos ^{2} \theta_{2}}=0
$$

式中 $V_{M}\left(\theta_{2}\right)$ 和 $a_{M}\left(\theta_{2}\right)$ 如（4）（5）式 $\left(\theta_{1} \rightarrow \theta_{2}\right)$ 所示。
（3）在小球刚好运动到角位置 $\theta_{3}$ 处脱离半球的瞬间，

$$
N=0
$$

此时半球的加速度为零。因此，在小球脱离半球的瞬间，小球质心相对于半球运动速度的大小 $v_{m}\left(\theta_{3}\right)$ 满足

$$
m g \cos \theta_{3}=m \frac{v_{\mathrm{C}}^{\prime 2}}{R+r}
$$

由此得

$$
v_{\mathrm{C}}^{\prime}=\sqrt{(R+r) g \cos \theta_{3}}
$$
