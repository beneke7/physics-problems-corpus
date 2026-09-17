---
id: cpho-f-2018-q4
source: cpho-f
native_id: "四、如图，一张紧的弦沿 $x$ 轴水平放置，长度为 $L$ 。弦的左端位于坐标原点。弦可通过其左、右端与振源连接，使弦产生沿 $y$ 方向的横向受迫振动，振动传播的速度为 $u$ 。"
year: 2018
language: zh
translated: false
topic: [oscillations-and-waves]
subtopic: [wave-equation, standing-waves, resonance]
difficulty: null
difficulty_norm: 4
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

四、如图，一张紧的弦沿 $x$ 轴水平放置，长度为 $L$ 。弦的左端位于坐标原点。弦可通过其左、右端与振源连接，使弦产生沿 $y$ 方向的横向受迫振动，振动传播的速度为 $u$ 。
（1）固定弦的右端 $P_{2}$ ，将其左端 $P_{1}$ 与振源连接，稳定时，左端 $P_{1}$ 的振动表达式为 $y(x=0, t)=A_{0} \cos (\omega t)$ ，其中 $A_{0}$ 为振幅，$\omega$ 为圆频率。
（i）已知弦上横波的振幅在传播方向上有衰减，衰减常量为 $\gamma(\gamma>0)$ ，求弦上各处振动的振幅；（已知：在无限长弦上沿 $x$ 轴正方向传播的振幅逐渐衰减的横波表达式为$y(x, t)=A \mathrm{e}^{-\gamma x} \cos \left(\omega t-\frac{\omega x}{u}+\varphi\right)$ ，其中 $A$ 和 $\varphi$ 分别为 $x=0$ 处振动的振幅和初相位。）
（ii）忽略波的振幅在传播方向上的衰减，求弦上驻波的表达式，并确定其波腹和波节处的 $x$ 坐标。
（2）将 $P_{1} 、 P_{2}$ 都与振源连接，$P_{1} 、 P_{2}$ 处的振动表达式分别为：$y(x=0, t)=A_{0} \cos \omega t$ 、 $y(x=L, t)=A_{0} \cos \left(\omega t+\varphi_{0}\right)$ ，其中 $\varphi_{0}$ 为常量。忽略波的振幅在传播方向上的衰减，分别计算$\varphi_{0}=0$ 和 $\varphi_{0}=\pi$ 情形下弦上各处振动的表达式以及共振时圆频率 $\omega$ 应满足的条件。

参考解答：
（1）（i）设稳定时，弦上向右传播的机械波的波的表达式为

$$
y_{\mathrm{R}}(x, t)=A_{1} \mathrm{e}^{-\gamma x} \cos \left(\omega t-\frac{\omega x}{u}+\varphi_{1}\right)
$$

其中 $A_{1}$ 和 $\varphi_{1}$ 为待定系数。由于弦的右端点固定，在右端点反射后弦上反射波的波的表达式为

$$
y_{L}(x, t)=A_{1} \mathrm{e}^{-2 \gamma L+\gamma x} \cos \left(\omega t+\frac{\omega x}{u}-2 \frac{\omega L}{u}+\pi+\varphi_{1}\right)
$$

因此，稳定时在弦上横向振动的表达式为

$$
y(x, t)=y_{\mathrm{L}}(x, t)+y_{\mathrm{R}}(x, t)=A(x) \cos [\omega t+\varphi(x)]
$$

这里

$$
A(x)=A_{1} \sqrt{\mathrm{e}^{-2 \gamma x}+\mathrm{e}^{-4 \gamma L+2 \gamma x}-2 \mathrm{e}^{-2 \gamma L} \cos \left(2 \frac{\omega}{u} x-2 \frac{\omega L}{u}\right)}
$$

由于稳定时弦的左端点的振动表达式是已知的，有

$$
A(x=0)=A_{1} \sqrt{1+\mathrm{e}^{-4 \gamma L}-2 \mathrm{e}^{-2 \gamma L} \cos \left(2 \frac{\omega L}{u}\right)}=A_{0}
$$

比较以上两式得

$$
A_{1}=\frac{A_{0}}{\sqrt{1+\mathrm{e}^{-4 \gamma L}-2 \mathrm{e}^{-2 \gamma L} \cos \left(2 \frac{\omega L}{u}\right)}}
$$

于是，稳定时弦上各处振动的振幅为

$$
A(x)=\frac{A_{0}}{\sqrt{1+\mathrm{e}^{-4 \gamma L}-2 \mathrm{e}^{-2 \gamma L} \cos \left(2 \frac{\omega L}{u}\right)}} \sqrt{\mathrm{e}^{-2 \gamma x}+\mathrm{e}^{-4 \gamma L+2 \gamma x}-2 \mathrm{e}^{-2 \gamma L} \cos \left(2 \frac{\omega}{u} x-2 \frac{\omega L}{u}\right)}
$$

（ii）忽略波传播方向上振幅的衰减，在弦上激发的驻波表达式可写成

$$
y(x, t)=A \sin \left(\frac{\omega x}{u}+\varphi\right) \cos (\omega t+\phi)
$$

弦的右端点固定，即

$$
y(x=L, t)=0
$$

由以上两式得

$$
\frac{\omega L}{u}+\varphi=m \pi, \quad m=0,1,2, \cdots
$$

可取 $m=0$ ，得

$$
\varphi=-\frac{\omega L}{u}
$$

$m$ 的其它取值所得到的结果，只是对应的 $\phi$ 取值不同而已，实际上是相互等价的。利用弦的左端点振动表达式 $y(x=0, t)=A_{0} \cos (\omega t)$ ，有

$$
A \sin \left(-\frac{\omega L}{u}\right) \cos (\omega t+\phi)=A_{0} \cos \omega t
$$

由于上式在任意时刻 $t$ 都成立，有

$$
\begin{aligned}
A & =-\frac{A_{0}}{\sin \left(\frac{\omega L}{u}\right)} \\
\phi & =0
\end{aligned}
$$

将（8）（9）式代入（6）式得，弦上驻波的表达式为

$$
y(x, t)=-\frac{A_{0}}{\sin \left(\frac{\omega L}{u}\right)} \sin \left(\frac{\omega x}{u}-\frac{\omega L}{u}\right) \cos (\omega t)
$$

由（10）式知，在坐标为 $x$ 处质点振动的振幅 $A(x)$ 为

$$
A(x)=\left|\frac{A_{0}}{\sin \left(\frac{\omega L}{u}\right)} \sin \left(\frac{\omega x}{u}-\frac{\omega L}{u}\right)\right|
$$

波节点 $x_{n}$ 的位置满足

$$
\left|A\left(x_{n}\right)\right|=0
$$

即

$$
\sin \left(\frac{\omega x_{n}}{u}-\frac{\omega L}{u}\right)=0
$$

由此解得

$$
x_{n}=L-n \pi \frac{u}{\omega}
$$

这里，$n$ 为满足

$$
0 \leq n<\frac{L \omega}{\pi u}
$$

的整数。
在波腹位置 $x_{a}$ 点，振幅 $A(x)$ 最大，即可得

$$
x_{a}=L-\pi \frac{u}{2 \omega}-l \pi \frac{u}{\omega}
$$

$l$ 为满足

$$
0<l<\frac{L \omega}{\pi u}
$$

的整数。
（2）将弦上各处振动的表达式分解成
A：弦的左端点振动、右端点固定
B：弦的右端点振动、左端点固定
两种情形的叠加。设在情形 A 中弦上各点的振动表达式为 $y_{1}(x, t)$ ，而在情形 B 中弦上各点的振动表达式为 $y_{2}(x, t)$ 。利用（1．ii）的结果，可得弦中驻波表达式为

$$
y_{1}(x, t)=-\frac{A_{0}}{\sin \left(\frac{\omega L}{u}\right)} \sin \left(\frac{\omega x}{u}-\frac{\omega L}{u}\right) \cos (\omega t)
$$

利用（1．ii）中的结果，可得弦中驻波表达式为

$$
y_{2}(x, t)=\frac{A_{0}}{\sin \left(\frac{\omega L}{u}\right)} \sin \left(\frac{\omega x}{u}\right) \cos \left(\omega t+\varphi_{0}\right)
$$

当弦的左、右端都有振动时，弦上各处合振动的表达式为以上两式的叠加

$$
y(x, t)=y_{1}(x, t)+y_{2}(x, t)=\frac{A_{0}}{\sin \left(\frac{\omega L}{u}\right)}\left[\sin \left(\frac{\omega L}{u}-\frac{\omega x}{u}\right) \cos \omega t+\sin \left(\frac{\omega x}{u}\right) \cos \left(\omega t+\varphi_{0}\right)\right]
$$

当 $\varphi_{0}=0$ 时，弦线中各处合振动为

$$
y(x, t)=\frac{A_{0}}{\cos \left(\frac{\omega L}{2 u}\right)} \cos \left(\frac{\omega L}{2 u}-\frac{\omega x}{u}\right) \cos \omega t
$$

共振时

$$
\cos \left(\frac{\omega L}{2 u}\right)=0,
$$

由此解得

$$
\omega=\frac{\left(2 n_{1}+1\right) \pi u}{L}, n_{1}=0,1,2,3 \ldots
$$

当 $\varphi_{0}=\pi$ 时，弦线中各处合振动为

$$
y(x, t)=\frac{A_{0}}{\sin \left(\frac{\omega L}{2 u}\right)} \sin \left(\frac{\omega L}{2 u}-\frac{\omega x}{u}\right) \cos \omega t
$$

共振时

$$
\sin \left(\frac{\omega L}{2 u}\right)=0
$$

由此解得

$$
\omega=\frac{2 n_{2} \pi u}{L}, n_{2}=1,2,3 \ldots
$$
