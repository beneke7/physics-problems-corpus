---
id: cpho-f-2018-q8
source: cpho-f
native_id: "八、热辐射入射到反射镜，反射镜可利用热辐射的辐射压力对外做功，这一过程可以用动力学或热学来研究。为简化起见，将热辐射视为一维黑体辐射，正入射到平面理想反射（完全反射）镜上。反射镜所受辐射压力与外界阻力相互平衡，以速度 $v$ 做匀速运动，运动方向与入射辐射的方向相同。已知在实验室参考系中温度为 $T$ 的一维黑体辐射谱（单位时间内在频率 $V$附近单位频率间隔内辐射出的辐射能）为 $\varphi(v, T)=\frac{2 h v}{\mathrm{e}^{h v / k T}-1}$ ，式中 $h$ 为普朗克常量，$k$ 为玻耳兹曼常量。真空中的光速为 $c$ 。"
year: 2018
language: zh
translated: false
topic: [thermodynamics, relativity]
subtopic: [blackbody, doppler, efficiency, heat-engines]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
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

八、热辐射入射到反射镜，反射镜可利用热辐射的辐射压力对外做功，这一过程可以用动力学或热学来研究。为简化起见，将热辐射视为一维黑体辐射，正入射到平面理想反射（完全反射）镜上。反射镜所受辐射压力与外界阻力相互平衡，以速度 $v$ 做匀速运动，运动方向与入射辐射的方向相同。已知在实验室参考系中温度为 $T$ 的一维黑体辐射谱（单位时间内在频率 $V$附近单位频率间隔内辐射出的辐射能）为 $\varphi(v, T)=\frac{2 h v}{\mathrm{e}^{h v / k T}-1}$ ，式中 $h$ 为普朗克常量，$k$ 为玻耳兹曼常量。真空中的光速为 $c$ 。
（1）从一维黑体辐射光子与运动理想反射镜碰撞的动力学观点出发，计算在实验室参考系中镜子利用光子能量克服阻力做功的效率 $\eta$ 。
（2）从热学角度看，辐射的入射过程与相继发生的反射过程可视为作为工作物质的反射镜经历一微小的理想热机循环：入射过程可视为镜子从高温热源吸热，反射过程可视为镜子向低温热源放热，最后镜子恢复原状。基于这一观点，证明在反射镜参照系中入射辐射与反射辐射均为一维黑体辐射，并在反射镜参照系中计算该热机的效率。
（3）在实验室参考系中计算该热机的效率。

参考解答：
（1）以匀速运动理想镜子和单位时间内与之碰撞的所有光子组成的体系为研究对象，设这些光子入射和反射时的总能量分别为 $\varepsilon_{1}$ 和 $\varepsilon_{2}$ ，镜子所受阻力大小为 $F$ 。匀速运动理想镜子碰撞前后总能量（动能与静能之和）与动量不变，光子能量与动量之比为与频率无关的常量——

真空光速 $c$ ，体系的动量定理与能量定理给出

$$
\begin{aligned}
& -\frac{\varepsilon_{2}}{c}-\frac{\varepsilon_{1}}{c}=-F \\
& \varepsilon_{2}-\varepsilon_{1}=-F v
\end{aligned}
$$

利用光子能量克服阻力做功的效率为

$$
\eta=\frac{F v}{\varepsilon_{1}}
$$

联立（1）（2）式得

$$
\eta=\frac{2 v}{c+v}
$$

（2）由于相对论多普勒效应，实验参考系 $S$ 中频率为 $v_{1}$ 的入射辐射在反射镜参考系 $S^{\prime}$ 中的频率红移为 $v_{1}^{\prime}$ ，有

$$
\frac{v_{1}^{\prime}}{v_{1}}=\sqrt{\frac{c-v}{c+v}}
$$

此频率比与入射频率 $v_{1}$ 无关，仅依赖于镜子速度 $v$ 。
设 $S$ 系中 $\mathrm{d} t_{1}$ 时间间隔内通过入射路径上某横截面的一段电磁波在 $S^{\prime}$ 系中被镜面接收的持续时间间隔为 $\mathrm{d} t_{1}^{\prime}$ 。由于通过截面入射的波峰数等于镜面接收的波峰数，有

$$
v_{1} \mathrm{~d} t_{1}=v_{1}^{\prime} \mathrm{d} t_{1}^{\prime}
$$

设参照系 $S$ 与 $S^{\prime}$ 中入射能流通量谱分别为 $\varphi_{1}\left(v_{1}\right)$ 与 $\varphi_{1}^{\prime}\left(v_{1}^{\prime}\right)$ 。 $S$ 系中 $\mathrm{d} t_{1}$ 时间间隔内入射的频率区间 $\left[v_{1}, v_{1}+\mathrm{d} v_{1}\right]$ 内的光子在 $S^{\prime}$ 系中 $\mathrm{d} t_{1}^{\prime}$ 时间间隔内悉数到达镜面，故

$$
\frac{\varphi_{1}\left(v_{1}\right) \mathrm{d} v_{1} \mathrm{~d} t_{1}}{h v_{1}}=\frac{\varphi_{1}^{\prime}\left(v_{1}^{\prime}\right) \mathrm{d} v_{1}^{\prime} \mathrm{d} t_{1}^{\prime}}{h v_{1}^{\prime}}
$$

由（5）（6）（7）式得

$$
\frac{\varphi_{1}\left(v_{1}\right)}{v_{1}}=\frac{\varphi_{1}^{\prime}\left(v_{1}^{\prime}\right)}{v_{1}^{\prime}}
$$

$S^{\prime}$ 系中反射辐射与入射辐射同频，即

$$
\frac{v_{2}^{\prime}}{v_{1}^{\prime}}=1
$$

利用该系任意频率电磁波入射波峰数等于反射波峰数，入射光子数等于反射光子数（理想反射镜不吸收光子），与（8）式推导类似，可得入射、反射能流通量谱 $\varphi_{1}^{\prime}\left(v_{1}^{\prime}\right)$ 与 $\varphi_{2}^{\prime}\left(v_{2}^{\prime}\right)$ 的关系为

$$
\frac{\varphi_{1}^{\prime}\left(v_{1}^{\prime}\right)}{v_{1}^{\prime}}=\frac{\varphi_{2}^{\prime}\left(v_{2}^{\prime}\right)}{v_{2}^{\prime}}
$$

设入射辐射的一维黑体辐射场的温度为 $T_{1}$ ，即有

$$
\varphi_{1}=\frac{2 h v_{1}}{\mathrm{e}^{h v_{1} / k T_{1}}-1}
$$

由（5）（8）（9）（10）（11）式可得，$S^{\prime}$ 系中入射、反射能流通量谱为如下一维黑体辐射形式

$$
\begin{aligned}
& \varphi_{1}^{\prime}=\frac{2 h v_{1}^{\prime}}{\mathrm{e}^{h v_{1}^{\prime} / k T_{1}^{\prime}}-1} \\
& \varphi_{2}^{\prime}=\frac{2 h v_{2}^{\prime}}{\mathrm{e}^{h v_{2}^{\prime} / k T_{2}^{\prime}}-1}
\end{aligned}
$$

分别相应温度为

$$
T_{1}^{\prime}=\frac{v_{1}^{\prime}}{v_{1}} T_{1}=\sqrt{\frac{c-v}{c+v}} T_{1}
$$

$$
T_{2}^{\prime}=\frac{v_{2}^{\prime}}{v_{1}^{\prime}} T_{1}^{\prime}=T_{1}^{\prime}
$$

按卡诺定理，理想热机效率为

$$
\eta^{\prime}=1-\frac{T_{2}^{\prime}}{T_{1}^{\prime}}=0
$$

这一结果与从动力学观点得到的结果是一致的。事实上，在反射镜参照系中，镜子的位移为零，因而对外做的功为零，镜子利用光子能量克服阻力对外做功的效率也必然为零。
（3）功与能量的数值均与所选参照系有关，因而反射镜参照系与实验参照系的效率自然不同。事实上，$S^{\prime}$ 系中频率为 $v_{2}^{\prime}$ 的反射辐射在 $S$ 系中的频率因多普勒红移变为 $v_{2}$ ，有

$$
\frac{v_{2}}{v_{2}^{\prime}}=\sqrt{\frac{c-v}{c+v}}
$$

与（12）式推导类似，可得 $S$ 系中反射能流通量谱 $\varphi_{2}\left(v_{2}\right)$

$$
\varphi_{2}=\frac{2 h v_{2}}{\mathrm{e}^{h v_{2} / k T_{2}}-1}
$$

它恰好是温度为

$$
T_{2}=\frac{v_{2}}{v_{2}^{\prime}} T_{2}^{\prime}=\frac{c-v}{c+v} T_{1}
$$

的一维黑体辐射。推导中利用了（14）（15）（17）式。理想热机效率为

$$
\eta=1-\frac{T_{2}}{T_{1}}=\frac{2 v}{c+v}
$$

这也与从动力学观点得到的结果一致。
