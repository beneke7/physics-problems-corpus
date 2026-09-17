---
id: cpho-f-2008-q4
source: cpho-f
native_id: "四、"
year: 2008
language: zh
translated: false
topic: [quantum-physics, electromagnetism]
subtopic: [solid-state, capacitance, electrostatics, potential]
difficulty: null
difficulty_norm: 5
math_tools: [linear-algebra]
format: scaffolded
core_ideas: []
estimated_time_min: 55
points: null
has_solution: false
has_figure: true
figure_files: [cpho-f-2008-q4-fig01.png, cpho-f-2008-q4-fig02.png, cpho-f-2008-q4-fig03.png, cpho-f-2008-q4-fig04.png, cpho-f-2008-q4-fig05.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2008.mmd; figures require local harvest"
verification_status: pending
---

四、
如图1所示，器件由相互紧密接触的金属层（ M ）、薄绝缘层（I）和金属层（M）构成。按照经典物理的观点，在I层绝缘性能理想的情况下，电子不可能从一个金属层穿过绝缘层到达另一个金属层。但是，按照量子物理的原理，在一定的条件下，

![](cpho-f-2008-q4-fig01.png)
图1

这种渡越是可能的，习惯上将这一过程称为隧穿，它是电子具有波动性的结果．隧穿是单个电子的过程，是分立的事件，通过绝缘层转移的电荷量只能是电子电荷量 $-e(e=1.60 \times 10 \left.{ }^{-19} \mathrm{C}\right)$ 的整数倍，因此也称为单电子隧穿，MIM 器件亦称为隧穿结或单电子隧穿结．本题涉及对单电子隧穿过程控制的库仑阻塞原理，由于据此可望制成尺寸很小的单电子器件，这是目前研究得很多、有应用前景的领域。

1．显示库仑阻塞原理的最简单的做法是将图1的器件看成一个电容为 $C$ 的电容器，如图2 所示。电容器极板上的电荷来源于金属极板上导电电子云相对于正电荷背景的很小位移，可以连续变化．如前所述，以隧穿方式通过绝缘层的只能

![](cpho-f-2008-q4-fig02.png)
图2

是分立的单电子电荷。如果隧穿过程会导致体系静电能量上升，则此过程不能发生，这种现象称为库仑阻塞．试求出发生库仑阻塞的条件即电容器极板间的电势差 $V_{\mathrm{AB}}=V_{\mathrm{A}}-V_{\mathrm{B}}$ 在什么范围内单电子隧穿过程被禁止．

2．假定 $V_{\mathrm{AB}}=0.10 \mathrm{mV}$ 是刚能发生隧穿的电压．试估算电容 $C$ 的大小．
3．将图1的器件与电压为 $V$ 的恒压源相接时，通常采用图2所示的双结构器件来观察单电子隧穿，避免杂散电容的影响。中间的金属块层称为单电子岛。作为电极的左、右金属块层分别记为 S，D 。若已知岛中有净电荷量—ne，其中净电子数 $n$ 可为正、负整数或零，$e$ 为电子电荷量的大小，两个 MIM 结的电容分别为 $C_{\mathrm{S}}$ 和 $C_{\mathrm{D}}$ 。试证明双结结构器件的静电能中与岛上净电荷量相关的静电能（简称单电子岛的静电能）为

$$
U_{n}=\frac{(-n e)^{2}}{2\left(C_{\mathrm{S}}+C_{\mathrm{D}}\right)} \text {. }
$$

4．在图3给出的具有源（S）、漏（D）电极双结结构的基础上，通过和岛连接的电容 $C_{\mathrm{G}}$添加门电极（G）构成如图4给出的单电子三极管结构，门电极和岛间没有单电子隧穿事件发

![](cpho-f-2008-q4-fig03.png)
图3

![](cpho-f-2008-q4-fig04.png)
图4

生。在 $V$ 较小且固定的情况下，通过门电压 $V_{\mathrm{G}}$ 可控制岛中的净电子数 $n$ 。对于 $V_{\mathrm{G}}$ 如何控制 $n$ ，简单的模型是将 $V_{\mathrm{G}}$ 的作用视为岛中附加了等效电荷 $q_{0}=C_{\mathrm{G}} V_{\mathrm{G}}$ 。这时，单电子岛的静电能可近似为 $U_{n}=\left(-n e+q_{0}\right)^{2} / 2 C_{\sum}$ ，式中 $C_{\sum}=C_{\mathrm{S}}+C_{\mathrm{D}}+C_{\mathrm{G}}$ 。利用方格图（图5），考虑库仑阻塞效应，用粗线画出岛中净电子数从 $n=0$开始，$C_{\mathrm{G}} V_{\mathrm{G}} / e$ 由 0 增大到 3的过程中，单电子岛的静电能$U_{n}$ 随 $C_{\mathrm{G}} V_{\mathrm{G}}$ 变化的图线（纵坐标表示 $U_{n}$ ，取 $U_{n}$ 的单位为

![](cpho-f-2008-q4-fig05.png)
图5

$e^{2} / 2 C_{\sum}$ ；横坐标表示 $C_{\mathrm{G}} V_{\mathrm{G}}$ ，取 $C_{\mathrm{G}} V_{\mathrm{G}}$ 的单位为 $e$ ）。要求标出关键点的坐标，并把 $n=0$ ，1，2，3时 $C_{\mathrm{G}} V_{\mathrm{G}} / e$ 的变化范围填在表格中。（此小题只按作图及所填表格（表1）评分）。

表 1
| $n$ | 0 | 1 | 2 | 3 |
| :--- | :--- | :--- | :--- | :--- |
| $C_{\mathrm{G}} V_{\mathrm{G}} / e$ 变化范围 |  |  |  |  |
