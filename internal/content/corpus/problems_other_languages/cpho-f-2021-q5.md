---
id: cpho-f-2021-q5
source: cpho-f
native_id: "五、（64 分）（1）（21 分）一个电子的自旋磁矩为"
year: 2021
language: zh
translated: false
topic: [quantum-physics, electromagnetism]
subtopic: [solid-state, magnetic-field, statistical-distributions, magnetostatics]
difficulty: null
difficulty_norm: 5
math_tools: [linear-algebra, calculus]
format: open-ended
core_ideas: []
estimated_time_min: 90
points: null
has_solution: false
has_figure: true
figure_files: [cpho-f-2021-q5-fig01.png, cpho-f-2021-q5-fig02.png, cpho-f-2021-q5-fig03.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2021.mmd; figures require local harvest"
verification_status: pending
---

五、（64 分）（1）（21 分）一个电子的自旋磁矩为

$$
\boldsymbol{\mu}=\frac{-e}{m} \boldsymbol{S}
$$

式中 $-e(e>0)$ 是电子电荷，$m$ 是电子质量，$\frac{-e}{m}$ 是电子的荷质比； $\boldsymbol{S}$ 是自旋角动量，其 $z$分量 $S_{z}$ 只能取两个值，自旋向上时 $S_{z}=\frac{1}{2} \hbar$ ，向下时 $S_{z}=-\frac{1}{2} \hbar$ ，其中 $\hbar=\frac{h}{2 \pi}, h$ 是普朗克常量。假设一个分子或原子的磁矩等于一个电子的自旋磁矩。
（i）（14分）将顺磁体置于外磁场中，由于其分子的磁矩平行或反平行于磁场方向排列的几率发生变化而产生磁化；磁化程度用单位体积内的磁矩（磁化强度） $\boldsymbol{M}$ 描述， $\boldsymbol{M}=\chi \boldsymbol{H}$ ，其中 $\chi$ 为磁化率， $\boldsymbol{H} \equiv \frac{\boldsymbol{B}}{\mu_{0}}-\boldsymbol{M}$ 为磁场强度， $\boldsymbol{B}$ 为磁感应强度，$\mu_{0}$ 为真空磁导率。在通常温度 $T$（绝对温度）下，$\chi \ll 1, k T \gg \frac{e \hbar}{2 m} B$（ $k$ 为玻尔兹曼常量）；设磁感应强度 $\boldsymbol{B}$ 是均匀的，顺磁体的分子数密度为 $n$ ，试利用玻尔兹曼统计导出顺磁体的磁化率满足 $\chi=\frac{C}{T}$ ，并给出 $C$ 的表达式。已知：玻尔兹曼统计认为，粒子处在某个能量状态的几率正比于 $\mathrm{e}^{-\frac{E}{k T}}$ ，其中$E$ 为该状态的能量，$T$ 为粒子所处平衡态的绝对温度。
（ii）（7 分）铁磁体不同于顺磁体：在居里温度以下，铁磁体可以在没有外磁场的环境中产生并保持比较强的磁性，此称为自发磁化；自发磁化产生＂磁畴＂，每个＂磁畴＂中分子磁矩均沿着同一方向排列（顺排），此时铁磁体处于铁磁相。磁矩发生顺排的原因是因为量子效应，也可以认为里面有很强的等效磁场，外斯称其为＂分子场＂。＂分子场＂比一个自旋磁矩在原子间距上产生的磁场大 3 个量级左右。在居里温度以上，铁磁体转变为顺磁体，它的磁化率遵从居里－外斯定律 $\chi=\frac{C}{T-\theta}$（其中 $\theta$ 为居里温度），与通常的顺磁体有差异，其差异来自于铁磁体内部的＂分子场＂$H_{m}$ ，$H_{m}$ 可表示为 $H_{m}=\gamma M$ 。假设铁磁体的分子数密度亦为 $n$ ，试给出 $\gamma$ 的表达式（居里温度 $\theta$ 可视为已知量）；并导出在所有磁矩都是顺排的情形下分子场 $H_{m}$ 的表达式。
（2）（9 分）在铁磁晶体中原子是在周期性的格点上排列的。每个原子所感受到的磁场可理解为其最近邻格点上的原子提供的＂分子场＂的平均值。
（i）（7 分）考察如图5a 所示的一维晶格自旋系统，所有格点上的磁矩都是顺排的。这个系统的居里温度为 $\theta$ 。假设上一问中导出的 $H_{m}$ 与 $\theta$ 之间的

![](cpho-f-2021-q5-fig01.png)
图5a

关系仍然成立，且此系统包含 $N(N \gg 1)$ 个格点，每个格点上有一个原子；当发生自发磁化后，原子的自旋平行排列，这样的排列会使系统能量最低。试给出此时一个自旋在其最近邻格点上产生的等效磁场、以及整个系统的磁能。
（ii）（2 分）假设这个一维晶格自旋系统中的某一个非端点晶格上的自旋发生翻转，变为反平行排列，如图5b 所示。相比于图5a 的情形，系统的能量增加了多少？
（3）（17分）若原子自旋交替反向排列，则称为反铁磁体。反铁磁体具有特殊的晶格结构：

该结构由 A 位晶格和 B 位晶格组成，如图5c所示。A位的最近邻都是 B，次近邻才是A；B 位类似。反铁磁体的最近邻＂分子场＂与铁磁体的方

![](cpho-f-2021-q5-fig02.png)
图5c

向相反，而且除了最近邻自旋之外，次近邻自旋对＂分子场＂也有贡献。此时，A、B 位的＂分子场＂可分别表示为

$$
\boldsymbol{H}_{\mathrm{mA}}=-\alpha_{\mathrm{AB}} \boldsymbol{\mu}_{\mathrm{B}}-\alpha_{\mathrm{AA}} \boldsymbol{\mu}_{\mathrm{A}}, \quad \boldsymbol{H}_{\mathrm{mB}}=-\alpha_{\mathrm{AB}} \boldsymbol{\mu}_{\mathrm{A}}-\alpha_{\mathrm{BB}} \boldsymbol{\mu}_{\mathrm{B}},
$$

式中，$\mu_{\mathrm{A}} 、 \mu_{\mathrm{B}}$ 分别是 $\mathrm{A} 、 \mathrm{~B}$ 位上自旋磁矩。设所有 A 位原子都是相同的，所有 B 位原子也都是相同的，则 $\alpha_{\mathrm{AA}}=\alpha_{\mathrm{BB}}=\alpha, \alpha_{\mathrm{AB}}=\alpha_{\mathrm{BA}}=\beta, \beta>|\alpha|$ 。
（i）（5 分）试给出具有 $N$ 个格点（A、B 各有 $N / 2$ 个格点）的反铁磁体的磁能；
（ii）（12分）奈尔温度是指高出这个温度时，反铁磁相消失，反铁磁体呈顺磁性。这时， A 位晶格和 B 位晶格的磁化强度和磁场分别满足

$$
M_{\mathrm{A}}=\frac{C}{2 T} H_{\mathrm{A}}, \quad M_{\mathrm{B}}=\frac{C}{2 T} H_{\mathrm{B}},
$$

这里系数 $C$ 与第（1）（i）问中的类同。试给出一维反铁磁体的奈尔温度。
（4）（17分）下面考虑另一种情境：原子分布在晶格常数为 $a$ 的二维$x-y$ 平面内的正方点阵上，原子的磁矩可在平面内转动。如图5d，在尺寸为 $L(L \gg a)$ 的平面区域内，磁矩分布由各点上的箭头所示。由于＂分子场＂效应，磁矩之间具有比较强的相互作用，这种作用只明显存在于最近邻分子之间。设此平面内第 $i$ 个格点上的自旋角动量 $\boldsymbol{S}_{i}$ 与 $x$ 轴的夹角为 $\theta_{i} \in[0,2 \pi]$ ，系统磁能可表示为

$$
\begin{aligned}
E\left(\left\{\theta_{i}\right\}\right) & =-J^{\prime} \sum_{\langle i, j\rangle} \boldsymbol{S}_{i} \cdot \boldsymbol{S}_{j} \\
& =-J \sum_{\langle i, j\rangle} \cos \left(\theta_{i}-\theta_{j}\right)
\end{aligned}
$$

其中 $J^{\prime} 、 J\left(J^{\prime} 、 J>0\right)$ 为常量，$\langle i, j\rangle$ 代表所有最近邻（一个格点一般有四个最近邻的格点）的格点 $i$ 和 $j$ ，系统构型由 $\left\{\theta_{i}\right\}$ 给出。假设系统与环境达到热平衡，系统体积不变，此时亥姆赫兹自由能为 $F=E-T S$ ，其中 $E$ 为系统内能，$S$ 为系统熵。
（i）（3 分）系统中可能存在的涡旋构型如图5e 所示。沿着围绕涡旋中心的闭合回路走一圈，该闭合回路上最近邻格点 $\langle i, j\rangle$ 的磁矩取向角之差的和为

$$
\sum_{\langle i, j\rangle}\left(\theta_{i}-\theta_{j}\right)=2 \pi l
$$

这里，$l$ 是与涡旋结构有关的一个正整数，$l=1$ 的情形如图5e 所示。为方便起见，考虑以涡旋中心为圆心、较大半径为 $r$ 的闭合回路（圆），试求圆上相邻格点取向角之差的平均值$\left\langle\theta_{i}-\theta_{j}\right\rangle$ 。
（ii）（5分）当围绕涡旋中心的回路半径 $r$ 比较大时，可近似认为磁矩依次排列成半径差为 $a$ 的一系列同心圆，相邻同心圆上最近邻磁矩之间的夹角可认为是零。半径小的区域也作同样近似，对总能量影响不大。由此估算图5e 所示的一个涡旋系统的能量。
（iii）（3 分）如果涡旋的中心放在不同的位置，则可以认为系统处于不同的状态。假设在尺寸为 $L$ 、晶格常数为 $a$ 的正方点阵上只有一个涡旋，试估算可能的状态数 $\Omega$ ，进而计算系统的熵 $S \equiv k \ln \Omega$ 。
（iv）（6 分）若系统存在某个温度，高于或低于此温度，系统性质有明显不同，则可能发生了相变。对于一个涡旋系统，找出可能的相变温度，并加以说明。

参考解答：
（1）
（i）按题设，一个分子的磁矩等于电子的自旋磁矩为

$$
\boldsymbol{\mu}=\frac{-e}{m} \boldsymbol{S}
$$

它在外场 B 中的能量为

$$
E=-\boldsymbol{\mu} \cdot \boldsymbol{B}=\frac{e}{m} S_{z} B= \pm \frac{e \hbar}{2 m} B= \pm m_{0} B
$$

式中，$m_{0}=\frac{e \hbar}{2 m}$ ，已取 $\boldsymbol{B}=B \hat{\mathbf{z}}, \hat{\mathbf{z}}$ 为方向矢量。
按照波尔兹曼统计，在能量为 $E$ 的状态上分子数（占据数）满足

$$
N_{ \pm} \propto e^{\mp \frac{m_{0} B}{k T}}
$$

总分子数为

$$
N=N_{+}+N_{-}
$$

由以上两式得

$$
\frac{N_{ \pm}}{N}=\frac{e^{\mp m_{0} B / k T}}{e^{m_{0} B / k T}+e^{-m_{0} B / k T}}
$$

每个分子的平均磁矩为

$$
\langle m\rangle=\frac{-m_{0} N_{+}+m_{0} N_{-}}{N}
$$

根据磁化强度的定义有

$$
M=n\langle m\rangle=n m_{0} \frac{\frac{e^{m_{0} B / k T}-e^{-m_{0} B / k T}}{2}}{\frac{e^{m_{0} B / k T}+e^{-m_{0} B / k T}}{2}}=n m_{0} \frac{\operatorname{sh} \frac{m_{0} B}{k T}}{\operatorname{ch} \frac{m_{0} B}{k T}}=n m_{0} \tanh \frac{m_{0} B}{k T}
$$

在高温近似

$$
k T \gg \frac{e \hbar}{2 m} B=m_{0} B
$$

下有

$$
\tanh \frac{m_{0} B}{k T}=\frac{m_{0} B}{k T}
$$

由

$$
M=\chi H=\frac{\chi}{1+\chi} \frac{B}{\mu_{0}} \approx \frac{\chi}{\mu_{0}} B
$$

已考虑到 $\chi \ll 1$ 。由（4）（5）式知，在高温近似下有

$$
\chi=\frac{\mu_{0} n m_{0}^{2}}{k T}=\frac{C}{T}
$$

从而

$$
C=\frac{\mu_{0} n m_{0}^{2}}{k}=\frac{\mu_{0} n}{k}\left(\frac{e \hbar}{2 m}\right)^{2}
$$

（ii）在居里温度 $\theta$ 以上，由外斯定律

$$
\chi=\frac{C}{T-\theta}
$$

有

$$
M=\chi H=\frac{C}{T-\theta} H
$$

此即

$$
\frac{T}{C} M=H+\frac{\theta}{C} M=H+H_{m}
$$

因此，存在附加磁场（即所谓＂分子场＂）

$$
H_{\mathrm{m}}=\frac{\theta}{C} M,
$$

与按照题中给出的表示

$$
H_{m}=\gamma M
$$

比较，得

$$
\gamma=\frac{\theta}{C}
$$

在所有磁矩都是顺排的情形下，由（9）式得

$$
H_{\mathrm{m}}=\gamma M=\frac{\theta}{C} M=\frac{\theta}{\mu_{0} n m_{0}^{2} / k} n m_{0}=\frac{k \theta}{\mu_{0} m_{0}}
$$

（2）（i）若认为这个分子场是最近邻自旋提供的，则每个自旋为最近邻分子提供的分子场（等效磁场）为

$$
H_{\mathrm{m}}^{\prime}=\frac{k \theta}{2 \mu_{0} m_{0}}
$$

此后，为简明起见，将 $H_{\mathrm{m}}^{\prime}$ 写成 $H_{\mathrm{m}}$ ，但理解为等效磁场。在这个分子场中自旋能量为

$$
E=-m_{0} B_{\mathrm{m}}=-m_{0} \mu_{0} H_{\mathrm{m}}=-\frac{1}{2} k \theta
$$

整个系统的能量为

$$
E_{N}=-\frac{1}{2}(N-1) k \theta
$$

（ii）这个非端点晶格上的自旋发生翻转前，它给左右最近邻自旋提供的分子场的能量为

$$
\left(-\frac{1}{2} k \theta-\frac{1}{2} k \theta\right)=(-k \theta)
$$

这个非端点晶格上的自旋发生翻转后，它给左右最近邻自旋提供的分子场的能量为

$$
\left(+\frac{1}{2} k \theta+\frac{1}{2} k \theta\right)=(+k \theta)
$$

相比于第（2）（i）问的情形，系统的能量增加为

$$
(+k \theta)-(-k \theta)=2 k \theta
$$

（3）（i）A 位自旋能量

$$
\begin{aligned}
& -\mu_{0} \boldsymbol{\mu}_{\mathrm{A}} \cdot \boldsymbol{H}_{\mathrm{mA}}=-\mu_{0} \boldsymbol{\mu}_{\mathrm{A}} \cdot\left(-\alpha_{\mathrm{AB}} \boldsymbol{\mu}_{\mathrm{B}}-\alpha_{\mathrm{AA}} \boldsymbol{\mu}_{\mathrm{A}}\right) \\
= & \mu_{0}\left(\alpha \boldsymbol{\mu}_{\mathrm{A}} \cdot \boldsymbol{\mu}_{\mathrm{B}}-\beta \mu_{\mathrm{A}}^{2}\right)=-\mu_{0}\left(\beta m_{0}^{2}-\alpha m_{0}^{2}\right)=-\mu_{0} m_{0}^{2}(\beta-\alpha)
\end{aligned}
$$

同理，B 位自旋能量与 A 位的相同。总能量为

$$
E_{N}=-\frac{1}{2}(N-1) \mu_{0} m_{0}^{2} \beta+\frac{1}{2}(N-2) \mu_{0} m_{0}^{2} \alpha \text { (或 } E_{N}=-\frac{1}{2} N \mu_{0} m_{0}^{2}(\beta-\alpha) \text { ) }
$$

（ii）A、B 位分子数密度分别为 $\frac{n}{2}$ 。对 A 位有

$$
M_{\mathrm{A}}=\frac{C}{2 T} H_{\mathrm{A}} \text {, 即 } \boldsymbol{M}_{\mathrm{A}} \equiv \frac{n}{2} \overline{\boldsymbol{\mu}}_{\mathrm{A}}=\frac{C}{2 T}\left(\boldsymbol{H}+\boldsymbol{H}_{\mathrm{mA}}\right)
$$

式中 $\overline{\boldsymbol{\mu}}_{\mathrm{A}}$ 是 A 位上 $\boldsymbol{\mu}_{\mathrm{A}}$ 的平均值，而 $\boldsymbol{M}_{\mathrm{A}}$ 是与之相应的磁化强度；同理，对 B 位有

$$
\boldsymbol{M}_{\mathrm{B}} \equiv \frac{n}{2} \overline{\boldsymbol{\mu}}_{\mathrm{B}}=\frac{C}{2 T}\left(\boldsymbol{H}+\boldsymbol{H}_{\mathrm{mB}}\right)
$$

外场 $\boldsymbol{H}$ 为零时，若自发磁化，此时对应反铁磁相变，即

$$
\begin{aligned}
& \boldsymbol{M}_{\mathrm{A}}=\frac{C}{n T}\left(-\alpha_{\mathrm{AB}} \boldsymbol{M}_{\mathrm{B}}-\alpha_{\mathrm{AA}} \boldsymbol{M}_{\mathrm{A}}\right) \\
& \boldsymbol{M}_{\mathrm{B}}=\frac{C}{n T}\left(-\alpha_{\mathrm{BA}} \boldsymbol{M}_{\mathrm{A}}-\alpha_{\mathrm{BB}} \boldsymbol{M}_{\mathrm{B}}\right)
\end{aligned}
$$

此即

$$
\begin{aligned}
& \left(1+\frac{C}{n T} \alpha\right) \boldsymbol{M}_{\mathrm{A}}+\frac{C}{n T} \beta \boldsymbol{M}_{\mathrm{B}}=0 \\
& \frac{C}{n T} \beta \boldsymbol{M}_{\mathrm{A}}+\left(1+\frac{C}{n T} \alpha\right) \boldsymbol{M}_{\mathrm{B}}=0
\end{aligned}
$$

若要有非零解，系数行列式须为零

$$
\operatorname{det}\left(\begin{array}{cc}
1+\frac{C}{n T} \alpha & \frac{C}{n T} \beta \\
\frac{C}{n T} \beta & 1+\frac{C}{n T} \alpha
\end{array}\right)=0
$$

即

$$
T=\frac{C}{n}(\beta-\alpha)
$$

此即奈尔温度，代入 C 的表达式 $C=\frac{\mu_{0} n m_{0}^{2}}{k}$ ，得

$$
T=\frac{\mu_{0} m_{0}^{2}}{k}(\beta-\alpha)
$$

（4）（i）
（解法一）
考虑围绕涡旋中心半径为 $r$ 的闭合回路，则这个回路上一共有

$$
N=\frac{2 \pi r}{a}
$$

个磁矩，由于绕回路一圈总的 $\theta$ 角的改变量是 $2 \pi l$ ，则相邻磁矩 $\theta$ 角的改变量（ $\theta$ 角之差）的平均值为

$$
\left\langle\theta_{i}-\theta_{j}\right\rangle=\frac{2 \pi l}{N}=\frac{2 \pi l}{2 \pi r / a}=\frac{l a}{r}
$$

（解法二）
任取围绕涡旋中心、半径为 $r$ 的闭合回路上两个邻近格点 $\boldsymbol{r}$ 和 $\boldsymbol{r}+\mathrm{d} \boldsymbol{r}$ ，设其自旋 $\boldsymbol{S}(\boldsymbol{r}) 、 \boldsymbol{S}(\boldsymbol{r}+\mathrm{d} \boldsymbol{r})$的方向分别为 $\theta(\boldsymbol{r}) 、 \theta(\boldsymbol{r}+\mathrm{d} \boldsymbol{r})$ ，有

$$
\theta(\boldsymbol{r}+\mathrm{d} \boldsymbol{r})-\theta(\boldsymbol{r})=\nabla \theta(\boldsymbol{r}) \cdot \mathrm{d} \boldsymbol{r}=|\nabla \theta(\boldsymbol{r})| \hat{\boldsymbol{n}}(\boldsymbol{r}) \cdot \mathrm{d} \boldsymbol{r}
$$

考虑到漩涡相对于过其中心的轴的对称性，各点 $\boldsymbol{r}$ 的 $|\nabla \theta(\boldsymbol{r})|$ 只与 $r$ 有关，各点 $\boldsymbol{r}$ 的 $\nabla \theta(\boldsymbol{r})$ 的方向为 $\hat{\boldsymbol{n}}_{\theta}$（注：设在 $\boldsymbol{r}$ 处格点的自旋方向与二维平面上的 $x$ 轴的夹角为 $\theta_{\boldsymbol{r}}$ ，则

$$
\begin{aligned}
\mathrm{d} \theta_{\boldsymbol{r}} & =\nabla \theta_{\boldsymbol{r}} \cdot \mathrm{d} \boldsymbol{r}=\left(\frac{\partial \theta_{r}}{\partial \theta} \hat{\boldsymbol{n}}_{\theta}+\frac{\partial \theta_{r}}{\partial r} \hat{\boldsymbol{n}}_{r}\right) \cdot r \mathrm{~d} \hat{\boldsymbol{n}}_{r} \\
& =\frac{\partial \theta_{r}}{\partial \theta} \hat{\boldsymbol{n}}_{\theta} \cdot(r \mathrm{~d} \theta) \hat{\boldsymbol{n}}_{\theta}=\frac{\partial \theta_{r}}{\partial \theta} r \mathrm{~d} \theta \equiv\left|\nabla \theta_{\boldsymbol{r}}\right| r \mathrm{~d} \theta
\end{aligned}
$$

），且 $\mathrm{d} \boldsymbol{r}=(r \mathrm{~d} \theta) \hat{\boldsymbol{n}}_{\theta}$ ，因而，沿着围绕涡旋中心的闭合回路走一圈，$\theta$ 角的改变量是

$$
2 \pi l=\oint \nabla \theta(\boldsymbol{r}) \cdot \mathrm{d} \boldsymbol{r}=|\nabla \theta(\boldsymbol{r})| \oint r \mathrm{~d} \theta=2 \pi r|\nabla \theta(\boldsymbol{r})|
$$

于是

$$
|\nabla \theta(\boldsymbol{r})|=\frac{l}{r}
$$

同理

$$
\theta_{i}\left(\boldsymbol{r}_{i}\right)-\theta_{j}\left(\boldsymbol{r}_{j}\right)=\left|\nabla \theta\left(\boldsymbol{r}_{i j}\right)\right| a
$$

于是

$$
\theta_{i}\left(\boldsymbol{r}_{i}\right)-\theta_{j}\left(\boldsymbol{r}_{j}\right)=\frac{l a}{r}
$$

因此

$$
\left\langle\theta_{i}-\theta_{j}\right\rangle=\frac{l a}{r}
$$

（ii）由于沿着圆周磁矩角度变化很小，系统能量

$$
\begin{aligned}
E\left(\left\{\theta_{i}\right\}\right) & =-J \sum_{\langle i, j\rangle} \cos \left(\theta_{i}-\theta_{j}\right) \approx-J \sum_{\langle i, j\rangle}\left[1-\frac{1}{2}\left(\theta_{i}-\theta_{j}\right)^{2}\right] \\
& =E_{0}+\frac{J}{2} \sum_{r \in[a, L]\langle i, j\rangle \in\{r\}}\left(\theta_{i}-\theta_{j}\right)^{2}
\end{aligned}
$$

（解法一）
所求的一个涡旋的能量为

$$
\begin{aligned}
E_{\text {vortex }} & \equiv E\left(\left\{\theta_{i}\right\}\right)-E_{0} \\
& =\frac{J}{2} \sum_{r \in[a, L]\langle i, j\rangle \in\{r\}}\left(\theta_{i}-\theta_{j}\right)^{2}=\frac{J}{2} \int_{a}^{L} \mathrm{~d} r \int_{0}^{2 \pi} r \mathrm{~d} \theta|\nabla \theta(\boldsymbol{r})|^{2}
\end{aligned}
$$

于是

$$
E_{\text {vortex }}=\frac{J}{2} \int_{a}^{L} \mathrm{~d} r \int_{0}^{2 \pi} r \mathrm{~d} \theta|\nabla \theta(\boldsymbol{r})|^{2}=\frac{2 \pi J}{2} \int_{a}^{L} \mathrm{~d} r \frac{l^{2}}{r}=\pi J l^{2} \ln \frac{L}{a}
$$

（解法二）
所求的一个涡旋的能量为

$$
\begin{aligned}
E_{\text {vortex }} & \equiv E\left(\left\{\theta_{i}\right\}\right)-E_{0} \\
& =\frac{J}{2} \sum_{r \in[a, L] \backslash\langle i, j\rangle \in\{r\}}\left(\theta_{i}-\theta_{j}\right)^{2}=\frac{J}{2} \sum_{r \in[a, L]} N<\theta_{i}-\theta_{j}>^{2} \\
& =\frac{J}{2} \sum_{r \in[a, L]} \frac{2 \pi r}{a}\left(\frac{l a}{r}\right)^{2}=\pi J l^{2} \sum_{r \in[a, L]} \frac{a}{r}
\end{aligned}
$$

于是

$$
E_{\text {vortex }}=\pi J l^{2} \sum_{r \in[a, L]} \frac{\Delta r}{r}=\pi J l^{2} \int_{a}^{L} \frac{\mathrm{~d} r}{r}=\pi J l^{2} \ln \frac{L}{a}
$$

（解法三）
考虑以涡旋中心 O 为圆心、半径为 $r \rightarrow r+\Delta r\left(r \gg a, ~ r \Delta r \gg a^{2}\right)$ 的一个二维细圆环，两个近邻磁矩的夹角 $\Delta \theta=\theta_{i}-\theta_{j} \ll 1$ ，可取近似

$$
-J(\cos \Delta \theta-1) \approx \frac{J}{2}(\Delta \theta)^{2}
$$

设 $l=1$ 。在解题图5a中，a、b、c、d 是格点e 的最邻近格点，O $x$ 是二维 $x-y$（正方点阵）平面的水平轴。设 Oe长为 $r$ ，Oe 与 $\mathrm{O} x$ 的夹角为 $\alpha$ ，且由题设 Oe 与格点 e处的自旋取向（平行于直线 fg）垂直（余亦同）。设格点 b、c

![](cpho-f-2021-q5-fig03.png)
解题图5a

处的自旋取向与格点 e 处的自旋取向之间的夹角分别为 $\theta_{\mathrm{be}} 、 \theta_{\mathrm{ce}}$（余类推），由于 $\mathrm{O} x \perp \mathrm{be}$ ，

O $x \| \mathrm{ca}$（或 be ⟂ ce），有

$$
\angle \mathrm{beg}=\angle x \mathrm{Oe}=\alpha, \quad \angle \mathrm{cef}=\frac{\pi}{2}-\angle \mathrm{beg}=\frac{\pi}{2}-\alpha
$$

于是

$$
\theta_{\mathrm{be}}=\frac{a \cos \alpha}{r}, \quad \theta_{\mathrm{ce}}=\frac{a \sin \alpha}{r}
$$

同理，

$$
\theta_{\mathrm{de}}=\frac{a \cos \alpha}{r}, \quad \theta_{\mathrm{ae}}=\frac{a \sin \alpha}{r}
$$

格点 e 的磁矩与最近邻的格点磁矩之间的相互作用能为

$$
<E_{\mathrm{a}}>_{l=1}=\frac{J}{2}\left[\frac{1}{2}\left(\theta_{\mathrm{be}}^{2}+\theta_{\mathrm{de}}^{2}+\theta_{\mathrm{ae}}^{2}+\theta_{\mathrm{ce}}^{2}\right)\right]
$$

式中圆括号前的因子 $\frac{1}{2}$ 是因为位于相邻格点处的磁矩之间的相互作用能是两个相邻格点上的磁矩共有的。于是

$$
<E_{\mathrm{a}}>_{l=1}=\frac{J}{4}\left[2\left(\frac{a \cos \alpha}{r}\right)^{2}+2\left(\frac{a \sin \alpha}{r}\right)^{2}\right]=\frac{J a^{2}}{2 r}
$$

对于任意的 $l$ ，由于 $\Delta \theta$ 正比于 $l$ ，而相互作用能正比于 $(\Delta \theta)^{2}$ ，故

$$
<E_{\mathrm{a}}>=\frac{J l^{2} a^{2}}{2 r}
$$

它只与 $r$ 有关。
在以涡旋中心 O 为圆心、半径为 $r \rightarrow r+\Delta r ~\left(r \gg a, ~ \Delta r\right.$ 足够小，但 $\left.r \Delta r \gg a^{2}\right)$ 的一个细圆环中包含的格点磁矩的数目是

$$
\Delta n=\frac{2 \pi r \Delta r}{a^{2}}
$$

在 $r \rightarrow r+\Delta r$ 的细圆环中的所有格点磁矩的相互作用能量为

$$
\Delta E_{r}=\left\langle E_{i}\right\rangle \Delta n=\frac{J l^{2} a^{2}}{2 r^{2}} \frac{2 \pi r \Delta r}{a^{2}}=\pi J l^{2} \frac{\Delta r}{r}
$$

值得指出的是，在三维模型中，格点e 的最邻近点还应当加上前后两个最邻近格点 m、n（在原平面过 e 点垂直方向上）；但由题设，m、n 点处的磁矩方向均与e点处的平行，因而对相互作用能没有贡献。

一个涡旋的能量

$$
E_{\text {vortex }}=\sum_{r=a}^{L} \Delta E_{r}=\pi J l^{2} \sum_{r=a}^{L} \frac{\Delta r}{r}=\pi J l^{2} \int_{a}^{L} \frac{\mathrm{~d} r}{r}=\pi J l^{2} \ln \frac{L}{a}
$$

（解法四）
首先计算 $l=1$ 的自旋磁矩涡旋的能量，见图5 e。晶格常数为 $a$ 。
按题设：（1）只考虑最近邻的磁矩之间的相互作用能，即

$$
E\left(\left\{\theta_{i}\right\}\right)=-J \sum_{\langle i, j\rangle}\left[\cos \left(\theta_{i}-\theta_{j}\right)-1\right]
$$

其中 $\langle i, j\rangle$ 代表 $i, j$ 是最近邻（注：这里已经对能量进行了＂重整化＂，也就是把铁磁基态的能量取做了 0 ）；（2）对 $l=1$ 的涡旋，各个磁矩的方向（假定都是顺时针的）总与从涡旋

中心指向该磁矩的半径相垂直；（3）平均说来，每一个格点占有的面积是 $a^{2}$ ，因此，任何微观地大而宏观地小的面积 $\Delta S$ 中包含的磁矩的数目是 $\Delta S / a^{2}$ 。

现在考虑以涡旋中心为圆心、半径为 $r \rightarrow r+\Delta r\left(r \Delta r \gg a^{2}\right)$ 的一个细圆环，它的面积是$2 \pi r \Delta r$ ，所以其中包含的磁矩的数目是

$$
\Delta n=\frac{2 \pi r \Delta r}{a^{2}} .
$$

考虑距离涡旋中心很远的区域，因此两个近邻磁矩的夹角 $\Delta \theta=\theta_{i}-\theta_{j} \ll 1$ ，可取近似

$$
-J(\cos \Delta \theta-1) \approx \frac{J}{2}(\Delta \theta)^{2}
$$

一个磁矩有4个最近邻。让我们考虑两种极端情形。第一种是这个原胞正交于从涡旋中心指向这个原胞的射线，见解题图5b。那么一个给定磁矩与两个横向近邻磁矩的夹角是 0 ，相互作用能也是 0 ，而与两个纵向近邻磁矩的夹角是 $a / r$ ，所以它与最近邻磁矩相互作用能的平均值是

$$
\left\langle E_{i}\right\rangle=\frac{J}{2} \cdot \frac{1}{2} \cdot 2 \cdot \frac{a^{2}}{r^{2}}=\frac{J}{2} \frac{a^{2}}{r^{2}} .
$$

第二种是这个原胞与从涡旋中心指向这个原胞的射线成 $45^{\circ}$ 角，见解题图5c。那么给定的磁矩与它的4个近邻的夹角都是 $a /(\sqrt{2} r)$ ，所以它与最近邻磁矩相互作用能的平均值是

$$
\left\langle E_{i}\right\rangle=\frac{J}{2} \cdot \frac{(a / \sqrt{2})^{2}}{r^{2}} \times \frac{4}{2}=\frac{J}{2} \frac{a^{2}}{r^{2}} .
$$

我们发现二者完全相同！把上述分析推广到其它情形，很容易发现：这个结论适用于原胞在任何位置（方位），因为总有$\sin ^{2} \alpha+\cos ^{2} \alpha=1$ 。所以普适的结论是

$$
\left\langle E_{i}\right\rangle=\frac{J}{2} \frac{a^{2}}{r^{2}} .
$$

在 $r \rightarrow r+\Delta r$ 的细圆环中的相互作用能量为

$$
\Delta E=\left\langle E_{i}\right\rangle \Delta n=\frac{J}{2} \frac{a^{2}}{r^{2}} \frac{2 \pi r \Delta r}{a^{2}}=\pi J \frac{\Delta r}{r},
$$

再把 $r$ 从 $a / 2$ 到 $L / 2$ 积分，即得单个涡旋的总能量为

$$
E_{\text {vortex }}=\pi J \int_{a / 2}^{L / 2} \frac{\mathrm{~d} r}{r}=\pi J \ln \frac{L}{a} .
$$

把上述结论推广到任意的 $l$ 是直接的：$\Delta \theta$ 正比于 $l$ ，而能量正比于 $(\Delta \theta)^{2}$ ，所以

$$
E_{l-\text { vortex }}=\pi J l^{2} \ln \frac{L}{a} .
$$

（iii）可以将涡旋中心放在 $\Omega=\frac{L^{2}}{a^{2}}$ 个可能位置上，因此单个涡旋的熵可估算为

$$
S=k \ln \Omega=k \ln \frac{L^{2}}{a^{2}}=2 k \ln \frac{L}{a}
$$

（iv）单个涡旋的亥姆赫兹自由能为

$$
F=E_{0}+\left(\pi J l^{2}-2 k T\right) \ln \frac{L}{a}
$$

由（29）式可知，系统可能的相变温度为

$$
T=\frac{\pi J l^{2}}{2 k}
$$

当 $T<\frac{\pi J l^{2}}{2 k}$ 时，随着尺寸 $L$ 增大，单个涡旋的自由能会发散到正无穷，说明此时系统不利于形成单个涡旋；当 $T>\frac{\pi J l^{2}}{2 k}$ 时，随着尺寸 $L$ 增大，单个涡旋的自由能会发散到负无穷，说明增加涡旋可以降低自由能，此时系统倾向于形成单个涡旋。 （2 分）

评分标准：
第（1）问21分，
第（i）小问 14 分，（1）（2）（3）各 2 分，（4）式 3 分，（5）（6）各 2 分，（7）式 1 分；
第（ii）小问5分，（8）式3分，（9）（10）式各2分；
第（2）问9分，
第（i）小问9分，（11）式3分，（12）（13）式各2分；
第（ii）小问2分，（14）式2分；
第（3）问17分，
第（i）小问 5 分，（15）式 2 分，（16）式 3 分；
第（ii）小问 12 分，（17）式 2 分，（18）式 1 分，（19）式 2 分，（20式 1 分，
（21）式3分，（22）式2分，（23）式1分。
第（4）问17分，
第（i）小问3分，（24）式3分；
第（ii）小问 5 分，（25）式 1 分；（26）（27）式各 2 分；
第（iii）小问3分，（28）式3分；
第（iv）小问 6 分，（29）（30）式各 2 分，讨论得出的结论正确的给 2 分。
