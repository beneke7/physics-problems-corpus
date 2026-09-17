---
id: cpho-f-2018-q2
source: cpho-f
native_id: "二、平行板电容器极板1和2的面积均为 $S$ ，水平固定放置，它们之间的距离为 $d$ ，接入如图所示的电路中，电源的电动势记为 $U$ 。不带电的导体薄平板3的质量为 $m$ 、尺寸与电容器极板相同。平板3平放在极板2的正上方，且与极板2有良好的电接触。整个系统置于真空室内，真空的介电常量为 $\varepsilon_{0}$ 。闭合电键 K 后，平板3与极板1和2相继碰撞，上下往复运动。假设导体板之间的电场均可视为匀强电场；导线电阻和电源内阻足够小，充放电时间可忽略不计；平板3与极板1或2碰撞后立即在极短时间内达到静电平衡；所有碰撞都是完全非弹性的。重力加速度大小为 $g$ 。"
year: 2018
language: zh
translated: false
topic: [electromagnetism, mechanics]
subtopic: [capacitance, electric-field, collisions, energy-conservation]
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

二、平行板电容器极板1和2的面积均为 $S$ ，水平固定放置，它们之间的距离为 $d$ ，接入如图所示的电路中，电源的电动势记为 $U$ 。不带电的导体薄平板3的质量为 $m$ 、尺寸与电容器极板相同。平板3平放在极板2的正上方，且与极板2有良好的电接触。整个系统置于真空室内，真空的介电常量为 $\varepsilon_{0}$ 。闭合电键 K 后，平板3与极板1和2相继碰撞，上下往复运动。假设导体板之间的电场均可视为匀强电场；导线电阻和电源内阻足够小，充放电时间可忽略不计；平板3与极板1或2碰撞后立即在极短时间内达到静电平衡；所有碰撞都是完全非弹性的。重力加速度大小为 $g$ 。

（1） 电源电动势 $U$ 至少为多大？
（2） 求平板 3 运动的周期（用 $U$ 和题给条件表示）。

已知积分公式

$$
\int \frac{\mathrm{d} x}{\sqrt{a x^{2}+b x}}=\frac{1}{\sqrt{a}} \ln \left(2 a x+b+2 \sqrt{a} \sqrt{a x^{2}+b x}\right)+C \text {, 其中 } a>0, C \text { 为积分常数。 }
$$

参考解答：
（1）在平板 3 离开极板 2 之前，平板 3 的带电量为

$$
Q=C_{0} U=\frac{\varepsilon_{0} S}{d} U
$$

设平板3离开极板2之后，各板电荷面密度如图a所示。由电荷守恒有

$$
\sigma_{1}-\sigma_{2}=\sigma \equiv \frac{Q}{S}=\frac{\varepsilon_{0}}{d} U
$$

设上、下两电容器各自两极板间电场的场强分别为 $E_{1} 、 E_{2}$（见图a），有

$$
E_{1}=\frac{\sigma_{1}}{\varepsilon_{0}}, \quad E_{2}=\frac{\sigma_{2}}{\varepsilon_{0}}
$$

将上式代入（1）式得

$$
\varepsilon_{0} E_{1}-\varepsilon_{0} E_{2}=\frac{\varepsilon_{0}}{d} U
$$

即

$$
E_{1}-E_{2}=\frac{U}{d}
$$

另外，两个串联电容器的总电势差为 $U$ ，故

$$
E_{2} x+E_{1}(d-x)=U
$$

联立（2）（3）式得

$$
\begin{aligned}
& E_{1}=\frac{U}{d} \frac{d+x}{d} \\
& E_{2}=\frac{U}{d} \frac{x}{d}
\end{aligned}
$$

由（4）（5）式得，极板 $1 、 2$ 上电荷面密度分别为

$$
\sigma_{1}=\varepsilon_{0} E_{1}, \quad \sigma_{2}=\varepsilon_{0} E_{2}
$$

平板3受到的电场力（向上为正方向，下同）为

$$
\begin{aligned}
F_{\mathrm{e}} & =-\sigma_{2} S \cdot \frac{E_{2}}{2}+\sigma_{1} S \cdot \frac{E_{1}}{2}=\frac{\varepsilon_{0} S}{2}\left(E_{1}^{2}-E_{2}^{2}\right)=\varepsilon_{0} S\left(E_{1}-E_{2}\right)\left(\frac{E_{1}+E_{2}}{2}\right) \\
& =\varepsilon_{0} S \frac{U}{d} \cdot\left(E_{1}+E_{2}\right) / 2=\varepsilon_{0} S \frac{U}{d} \cdot \frac{U}{d}\left(\frac{2 x+d}{2 d}\right)=\frac{\varepsilon_{0} S U^{2}}{2 d^{3}}(2 x+d)
\end{aligned}
$$

平板3受到的坚直方向的合力为

$$
F_{\text {total }}=F_{\mathrm{e}}-m g=\frac{\varepsilon_{0} S U^{2}}{2 d^{3}}(2 x+d)-m g=\left(\frac{\varepsilon_{0} S U^{2}}{2 d^{2}}-m g\right)+\frac{\varepsilon_{0} S U^{2}}{d^{3}} x
$$

由此得，平板3在图a所示位置的加速度为

$$
a=\frac{F_{\text {total }}}{m}=\left(\frac{\varepsilon_{0} S U^{2}}{2 m d^{2}}-g\right)+\frac{\varepsilon_{0} S U^{2}}{m d^{3}} x
$$

为使平板3向上运动，应有条件

$$
\frac{\varepsilon_{0} S U^{2}}{2 m d^{2}} \geq g
$$

且开始运动之后加速度始终为正，因此最终将撞到极板2上。上述条件意味着电源电动势 $U$ 至少应为

$$
U_{\min }=\sqrt{\frac{2 m d^{2} g}{\varepsilon_{0} S}}
$$

（2）由（7）式可知

$$
a=a_{0}+B x
$$

其中

$$
a_{0}=\frac{1}{2} B d-g, \quad B=\frac{\varepsilon_{0} S U^{2}}{m d^{3}}
$$

于是

$$
a=\frac{v \mathrm{~d} v}{\mathrm{~d} x}=a_{0}+B x
$$

即

$$
v \mathrm{~d} v=\left(a_{0}+B x\right) \mathrm{d} x
$$

对上式两边作积分

$$
\int_{0}^{v} v^{\prime} \mathrm{d} v^{\prime}=\int_{0}^{x}\left(a_{0}+B x^{\prime}\right) \mathrm{d} x^{\prime}
$$

完成积分得

$$
\frac{1}{2} v^{2}=a_{0} x+\frac{1}{2} B x^{2}
$$

或

$$
v=\sqrt{2 a_{0} x+B x^{2}}
$$

其中 $v$ 为平板3与极板2相距 $x$ 时速度的大小。上式即

$$
\mathrm{d} t=\frac{\mathrm{d} x}{\sqrt{2 a_{0} x+B x^{2}}}
$$

两边积分，可得平板3从极板2运动到极板1（位移为 d）的时间间隔为

$$
t_{1}=\int_{0}^{t_{1}} \mathrm{~d} t=\int_{0}^{d} \frac{\mathrm{~d} x}{\sqrt{2 a_{0} x+B x^{2}}}
$$

完成上述积分得

$$
t_{1}=\sqrt{\frac{1}{B}} \ln \left[\frac{(3 B d-2 g)+\sqrt{8 B d(B d-g)}}{B d-2 g}\right]
$$

将 $B=\frac{\varepsilon_{0} S U^{2}}{m d^{3}}$ 代入上式得

$$
t_{1}=\frac{d}{U} \sqrt{\frac{m d}{\varepsilon_{0} S}} \ln \left[\frac{\left(3 \varepsilon_{0} S U^{2}-2 m g d^{2}\right)+2 U \sqrt{2 \varepsilon_{0} S\left(\varepsilon_{0} S U^{2}-m g d^{2}\right)}}{\varepsilon_{0} S U^{2}-2 m g d^{2}}\right]
$$

平板 3 到达极板 1 时，其上表面所带的正电荷与极板 1 所带负电荷交换后相互抵消；下表面所带电荷为

$$
-Q_{2}=-\varepsilon_{0} E_{2} S=-Q=-\frac{\varepsilon_{0} S}{d} U
$$

极板 2 带电为

$$
Q_{2}=\varepsilon_{0} E_{2} S=Q=\frac{\varepsilon_{0} S}{d} U
$$

平板3与极板1碰撞后，速度为零，在重力和电场力的作用下又向下运动，并与极板2发生完全非弹性碰撞。

在平板3向下运动过程中，其总带电量为

$$
-Q=-\frac{\varepsilon_{0} S}{d} U
$$

设平板3离开极板1后，各板电荷面密度如图b所示。由电荷守恒有

$$
\sigma_{1}^{\prime}-\sigma_{2}^{\prime}=-\frac{\varepsilon_{0}}{d} U
$$

上、下两个电容器各自两极板间的场强 $E_{1}^{\prime}$ 和 $E_{2}^{\prime}$（见图b）分别为

$$
E_{1}^{\prime}=\frac{\sigma_{1}^{\prime}}{\varepsilon_{0}}, \quad E_{2}^{\prime}=\frac{\sigma_{2}^{\prime}}{\varepsilon_{0}}
$$

将上式代入（11）式得

$$
E_{1}^{\prime}-E_{2}^{\prime}=-\frac{U}{d}
$$

另外，两个串联电容器的总电势差为 $U$ ，故

$$
E_{2}^{\prime} x+E_{1}^{\prime}(d-x)=U
$$

联立（12）（13）式得

$$
\begin{aligned}
E_{1}^{\prime} & =\frac{U}{d} \frac{(d-x)}{d} \\
E_{2}^{\prime} & =\frac{U}{d} \frac{2 d-x}{d}
\end{aligned}
$$

由此可得电荷面密度

$$
\sigma_{1}^{\prime}=\varepsilon_{0} E_{1}^{\prime}, \quad \sigma_{2}^{\prime}=\varepsilon_{0} E_{2}^{\prime}
$$

以及平板3受到的电场力

$$
\begin{aligned}
F_{\mathrm{e}}^{\prime} & =-\sigma_{2}^{\prime} S \frac{E_{2}^{\prime}}{2}+\sigma_{1}^{\prime} S \frac{E_{1}^{\prime}}{2}=\frac{\varepsilon_{0} S}{2}\left(E_{1}^{\prime 2}-E_{2}^{\prime 2}\right)=\varepsilon_{0} S\left(E_{1}^{\prime}-E_{2}^{\prime}\right) \frac{E_{1}^{\prime}+E_{2}^{\prime}}{2} \\
& =\varepsilon_{0} S\left(-\frac{U}{d}\right) \cdot \frac{E_{1}^{\prime}+E_{2}^{\prime}}{2}=\varepsilon_{0} S\left(-\frac{U}{d}\right) \frac{U}{d}\left(\frac{3 d-2 x}{2 d}\right)=-\frac{\varepsilon_{0} S U^{2}}{2 d^{3}}(3 d-2 x)
\end{aligned}
$$

平板3受到坚直方向的合力为

$$
F_{\text {total }}^{\prime}=F_{\mathrm{e}}^{\prime}-m g=-\frac{\varepsilon_{0} S U^{2}}{2 d^{3}}(3 d-2 x)-m g=-\left(\frac{3 \varepsilon_{0} S U^{2}}{2 d^{2}}+m g\right)+\frac{\varepsilon_{0} S U^{2}}{d^{3}} x
$$

由此得，平板3在图b所示位置的加速度

$$
a^{\prime}=\frac{F_{\text {total }}^{\prime}}{m}=-\left(\frac{3 \varepsilon_{0} S U^{2}}{2 m d^{2}}+g\right)+\frac{\varepsilon_{0} S U^{2}}{m d^{3}} x
$$

因为 $\frac{\varepsilon_{0} S U^{2}}{2 m d^{2}}+g \geq 0$ ，则 $a^{\prime}<0$ ，平板3能一直向下加速运动。令

$$
a^{\prime}=-a_{0}^{\prime}-B^{\prime}(d-x)
$$

其中

$$
a_{0}^{\prime}=\frac{1}{2} B^{\prime} d+g, \quad B^{\prime}=B=\frac{\varepsilon_{0} S U^{2}}{m d^{3}}
$$

重复前述关于平板3上升过程的类似处理，可得

$$
\frac{1}{2} v^{2}=\left[a_{0}^{\prime}(d-x)+\frac{1}{2} B(d-x)^{2}\right]
$$

其中 $v$ 为平板3离开极板1后坐标为 $x$（原点在极板2）时的速度。上式即

$$
\mathrm{d} t=-\frac{\mathrm{d} x}{\sqrt{2 a_{0}^{\prime}(d-x)+B(d-x)^{2}}}
$$

两边积分得，平板3从极板1运动到极板2（位移为 $-d$ ）的时间 $t_{2}$ 为

$$
t_{2}=\int_{0}^{t_{2}} \mathrm{~d} t=-\int_{d}^{0} \frac{\mathrm{~d} x}{\sqrt{2 a_{0}^{\prime}(d-x)+B(d-x)^{2}}}
$$

完成上述积分得

$$
t_{2}=\sqrt{\frac{1}{B}} \ln \left[\frac{(3 B d+2 g)+\sqrt{8 B d(B d+g)}}{B d+2 g}\right]
$$

将 $B=\frac{\varepsilon_{0} S U^{2}}{m d^{3}}$ 代入上式得

$$
t_{2}=\frac{d}{U} \sqrt{\frac{m d}{\varepsilon_{0} S}} \ln \left[\frac{\left(3 \varepsilon_{0} S U^{2}+2 m g d^{2}\right)+2 U \sqrt{\varepsilon_{0} S\left(2 \varepsilon_{0} S U^{2}+m g d^{2}\right)}}{\varepsilon_{0} S U^{2}+2 m g d^{2}}\right]
$$

平板3从极板1运动到极板2后，与极板2发生完全非弹性碰撞，速度变为零。其下表面所带的负电荷与极板2所带正电荷交换后相互抵消，上表面所带电荷为

$$
Q_{1}^{\prime}=\varepsilon_{0} E_{1}^{\prime} S=Q=\frac{\varepsilon_{0} S}{d} U
$$

极板1所带电荷为

$$
-Q_{1}^{\prime}=-\varepsilon_{0} E_{1}^{\prime} S=-Q=-\frac{\varepsilon_{0} S}{d} U
$$

这时系统状态与初始状态完全相同，平板3完成一个完整的周期运动，此后平板3重复以上的上下往复运动过程。导体平板3的运动周期为

$$
\begin{aligned}
T= & t_{1}+t_{2} \\
= & \frac{d}{U} \sqrt{\frac{m d}{\varepsilon_{0} S}}\left\{\ln \left[\frac{\left(3 \varepsilon_{0} S U^{2}-2 m g d^{2}\right)+2 U \sqrt{2 \varepsilon_{0} S\left(\varepsilon_{0} S U^{2}-m g d^{2}\right)}}{\varepsilon_{0} S U^{2}-2 m g d^{2}}\right]\right. \\
& \left.+\ln \left[\frac{\left(3 \varepsilon_{0} S U^{2}+2 m g d^{2}\right)+2 U \sqrt{\varepsilon_{0} S\left(2 \varepsilon_{0} S U^{2}+m g d^{2}\right)}}{\varepsilon_{0} S U^{2}+2 m g d^{2}}\right]\right\}
\end{aligned}
$$

已利用（10）式和（19）式。
