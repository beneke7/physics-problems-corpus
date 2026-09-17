---
id: cpho-f-2022-q6
source: cpho-f
native_id: "六、（50分）仅考虑单一组分、单原子分子组成的非相对论性气体。"
year: 2022
language: zh
translated: false
topic: [thermodynamics]
subtopic: [ideal-gas, processes, internal-energy, specific-heat, phase-transitions]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
format: open-ended
core_ideas: []
estimated_time_min: 75
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2022.mmd"
verification_status: pending
---

六、（50分）仅考虑单一组分、单原子分子组成的非相对论性气体。
对上述气体，若忽略分子的大小以及除碰撞瞬间外分子间的相互作用，则可用理想气体模型描述；若考虑到分子的实际大小及其间的非碰撞相互作用，则理想气体模型不再适用。对此，范德瓦尔斯构建了范德瓦尔斯模型，该模型下，1 mol气体的状态方程（称为范德瓦尔斯方程）为

$$
\left(p+\frac{a}{v^{2}}\right)(v-b)=R T
$$

其中 $T 、 p$ 和 $v$ 分别表示气体的温度、压强和体积（即容器容积），$R$ 是理想气体普适常量，$a$ 和 $b$ 是大于零的常量。在稀疏极限（对于任意给定的 $T, v \rightarrow \infty$ ）下，该模型退化为理想气体模型。
（1）试直接给出 $b$ 的物理含义（不必给出分析过程）。设气体分子可视为半径为 $r$ 的刚性小球（按范德瓦尔斯模型，小球间有微弱的引力），试估计 $b$ 的取值。已知阿伏伽德罗常数为 $N_{\mathrm{A}}$ 。
（2）直接写出 $N \mathrm{~mol}$ 、体积为 $V$ 的范德瓦尔斯气体的状态方程（表达式中不可出现摩尔体积 $v$ ）。
（3）设气体的定容摩尔热容为 $C_{V}, C_{V}$ 满足

$$
\left(\frac{\partial C_{V}}{\partial v}\right)_{T}=T\left(\frac{\partial^{2} p}{\partial T^{2}}\right)_{v}
$$

式中 $\left(\frac{\partial C_{V}}{\partial v}\right)_{T}$ 表示当 $T$ 视为常量时 $C_{V}$ 对 $v$ 的一阶导数，$\left(\frac{\partial^{2} p}{\partial T^{2}}\right)_{v}$ 表示当 $v$ 视为常量时 $p$ 对 $T$的二阶导数，余类推。试证明范德瓦尔斯气体的定容摩尔热容 $C_{V}$ 为常量，并确定此常量。
（此常量的具体形式不必代入后续计算）
（4）已知 1 mol 范德瓦尔斯气体的内能 $u$ 为

$$
u=C_{V} T-\frac{a}{v},
$$

试导出其摩尔熵 $s(T, v)$ 的表达式，其中可含有待定常量。试给出该气体经历准静态绝热过程的方程（用 $T$ 和 $v$ 表出，表达式中可含有待定常量）。
（5） 1 mol 范德瓦尔斯气体经历如下可逆卡诺循环过程：
过程 I——等温膨胀：温度为 $T_{1}$ ，体积由 $v_{1}$ 变为 $v_{2}$
过程 II——绝热降温：温度由 $T_{1}$ 降为 $T_{2}$ ，体积由 $v_{2}$ 变为 $v_{3}$
过程 III——等温压缩：温度为 $T_{2}$ ，体积由 $v_{3}$ 变为 $v_{4}$
过程 IV——绝热升温：温度由 $T_{2}$ 升为 $T_{1}$ ，体积由 $v_{4}$ 变为 $v_{1}$
试计算该循环过程的吸热量 $Q_{1}$ 、放热量 $Q_{2}$ 和循环效率 $\eta$（最终将 $\eta$ 表示为仅依赖于 $T_{1}$ 和 $T_{2}$ 的函数）。
（6）定义等温压缩系数为

$$
\kappa_{T}=-\frac{1}{v}\left(\frac{\partial v}{\partial p}\right)_{T}
$$

试推出范德瓦尔斯气体的等温压缩系数 $\kappa_{T}(T, v)$ 的表达式；以满足条件 $a \ll p v^{2}$ 的范德瓦尔斯气体为例，求 $\kappa_{T}$ 的取值范围，并说明其直观物理意义。

提示：对于二元函数 $y=y\left(x_{1}, x_{2}\right)$ ，当 $x_{1} 、 x_{2}$ 各自独立的微小变化分别为 $\mathrm{d} x_{1} 、 \mathrm{~d} x_{2}$ 时，$y$的全微分（ $y$ 的微小变化）为

$$
\mathrm{d} y=\left(\frac{\partial y}{\partial x_{1}}\right)_{x_{2}} \mathrm{~d} x_{1}+\left(\frac{\partial y}{\partial x_{2}}\right)_{x_{1}} \mathrm{~d} x_{2}
$$

解答：
（1）$b$ 的物理含义：因为气体分子有大小，使得 1 mol 气体分子在容器中运动而不能自由达到的体积的总和。
①
【附注：可以令 $a=0$ ，然后对照 $p(v-b)=R T$ 和理想气体方程 $p v=R T$ 可知，$(v-b)$ 是 1 mol范德瓦尔斯气体在体积为 $v$ 的容器中可以自由活动的区域体积，由此可以分析出 $b$ 的物理含义】
考虑单个气体分子的存在，记其半径为 $r$ ，使得另一个气体分子不能自由达到的体积则为$V_{0}=\frac{4}{3} \pi(2 r)^{3}$ 。由于这一不能自由达到的区域体积为一对分子所共有，故

$$
b=\frac{1}{2} N_{A} V_{0}=\frac{16}{3} N_{A} \pi r^{3}
$$

（2）因为 $T$ 和 $p$ 为强度量，故 $N \mathrm{~mol}$ 、体积为 $V$ 的题设种类气体的范德瓦尔斯方程

$$
\left(p+\frac{N^{2} a}{V^{2}}\right)\left(\frac{V}{N}-b\right)=R T .
$$

亦即有

$$
\left(p+\frac{N^{2} a}{V^{2}}\right)(V-N b)=N R T .
$$

（3）将 1 mol 该气体的范德瓦尔斯方程改写为

$$
p=\frac{R T}{v-b}-\frac{a}{v^{2}},
$$

则有

$$
\left(\frac{\partial p}{\partial T}\right)_{v}=\frac{R}{v-b}, \quad\left(\frac{\partial^{2} p}{\partial T^{2}}\right)_{v}=0
$$

因此

$$
\left(\frac{\partial C_{V}}{\partial v}\right)_{T}=T\left(\frac{\partial^{2} p}{\partial T^{2}}\right)_{v}=0 .
$$

即范德瓦尔斯气体的 $C_{V}$ 不依赖于 $v$（仅可能依赖于 $T$ ）。
考虑 $v \rightarrow \infty$（或 $v \gg b, v R T \gg a$ ）的极限，范德瓦尔斯方程（4）将回到理想气体状态方程的形式，故范德瓦尔斯气体的 $C_{V}$ 与对应的理想气体的 $C_{V}$ 相同，对题设非相对论性单原子分子组成的气体，$C_{V}$ 为常量，并有

$$
C_{V}=\frac{3}{2} R
$$

（4）由题设关系式 $u=C_{V} T-\frac{a}{v}$ ，可得

$$
\mathrm{d} u=C_{V} \mathrm{~d} T+\frac{a}{v^{2}} \mathrm{~d} v
$$

对于可逆准静态过程，由热力学第一定律

$$
\mathrm{d} u=\AA Q+đ W
$$

（式中 $\mathrm{d} Q$ 是气体在微小的可逆准静态过程中所吸收的热量，而 $\mathrm{đ} W=p(-\mathrm{d} v)$ 是微小的可逆准静态过程中外界对气体所做的功）和热力学第二定律

$$
\mathrm{d} s=\frac{\mathrm{đ} Q}{T}
$$

可得， 1 mol 气体的热力学基本微分方程为

$$
\mathrm{d} u=T \mathrm{~d} s-p \mathrm{~d} v
$$

因此

$$
\mathrm{d} s=\frac{1}{T} \mathrm{~d} u+\frac{p}{T} \mathrm{~d} v
$$

将（4）式和（8）式代入（10）式得

$$
\mathrm{d} s=\frac{1}{T}\left(C_{V} \mathrm{~d} T+\frac{a}{v^{2}} \mathrm{~d} v\right)+\frac{1}{T}\left(\frac{R T}{v-b}-\frac{a}{v^{2}}\right) \mathrm{d} v=C_{V} \frac{\mathrm{~d} T}{T}+\frac{R}{v-b} \mathrm{~d} v
$$

积分得

$$
s(T, v)=C_{V} \ln T+R \ln (v-b)+s_{0}
$$

其中 $s_{0}$ 为待定的积分常量。或

$$
s(T, v)=C_{V} \ln \frac{T}{T_{0}}+R \ln \left(\frac{v-b}{v_{0}-b}\right)\left(\text { 其中 } T_{0} 、 v_{0} \text { 为常量 }\right)
$$

可逆绝热过程为等熵过程，由（12）式知，对于 1 mol 上述范德瓦尔斯气体的绝热过程

$$
C_{V} \ln T+R \ln (v-b)=\text { 常量 }
$$

或者

$$
T^{\left(C_{V} / R\right)}(v-b)=T^{3 / 2}(v-b)=\text { 常量 }
$$

即为所求的绝热过程方程。（13）中的常量可以记为 $T_{0}^{\left(C_{V} / R\right)}\left(v_{0}-b\right)$ ）
（5）等温膨胀过程为吸热分过程，吸热量

$$
Q_{1}=T_{1} \Delta s_{1}
$$

其中，$\Delta s_{1}$ 为该过程的熵变。由（12）式得

$$
\Delta s_{1}=\left[C_{V} \ln T_{1}+R \ln \left(v_{2}-b\right)+s_{0}\right]-\left[C_{V} \ln T_{1}+R \ln \left(v_{1}-b\right)+s_{0}\right]=R \ln \frac{v_{2}-b}{v_{1}-b}
$$

将（15）式代入（14）式，得

$$
Q_{1}=T_{1} R \ln \frac{v_{2}-b}{v_{1}-b}
$$

等温压缩过程为放热分过程，放热量

$$
Q_{2}=T_{2}\left|\Delta s_{2}\right|
$$

其中，$\Delta s_{2}(<0)$ 为该过程的熵变。由（12）式得

$$
\Delta s_{2}=\left[C_{V} \ln T_{2}+R \ln \left(v_{4}-b\right)+s_{0}\right]-\left[C_{V} \ln T_{1}+R \ln \left(v_{3}-b\right)+s_{0}\right]=R \ln \frac{v_{4}-b}{v_{3}-b}
$$

将（18）式代入（17）式，得

$$
Q_{2}=T_{2} R \ln \frac{v_{3}-b}{v_{4}-b}
$$

所以，循环效率

$$
\eta=1-\frac{Q_{2}}{Q_{1}}=1-\frac{T_{2} \ln \frac{v_{3}-b}{v_{4}-b}}{T_{1} \ln \frac{v_{2}-b}{v_{1}-b}}
$$

对于两个绝热过程，由（13）式得

$$
T_{1}^{\left(C_{V} / R\right)}\left(v_{2}-b\right)=T_{2}^{\left(C_{V} / R\right)}\left(v_{3}-b\right), \quad T_{1}^{\left(C_{V} / R\right)}\left(v_{1}-b\right)=T_{2}^{\left(C_{V} / R\right)}\left(v_{4}-b\right)
$$

因此，

$$
\frac{v_{2}-b}{v_{1}-b}=\frac{v_{3}-b}{v_{4}-b}
$$

将（22）式代入（20）式，得

$$
\eta=1-\frac{T_{2}}{T_{1}}
$$

即为所求 $\eta$ 作为 $T_{1}$ 和 $T_{2}$ 的函数。
（6）由 1 mol 气体范德瓦尔斯状态方程 $\left(p+\frac{a}{v^{2}}\right)(v-b)=R T$ 得

$$
R \mathrm{~d} T=(v-b) \mathrm{d} p+\left(p+\frac{a}{v^{2}}\right) \mathrm{d} v-(v-b) \frac{2 a}{v^{3}} \mathrm{~d} v=(v-b) \mathrm{d} p+\left[\frac{R T}{v-b}-(v-b) \frac{2 a}{v^{3}}\right] \mathrm{d} v
$$

等温时， $\mathrm{d} T=0$ ，则由（24）得

$$
\left(\frac{\partial v}{\partial p}\right)_{T}=\left[\frac{2 a}{v^{3}}-\frac{R T}{(v-b)^{2}}\right]^{-1}=\frac{v^{3}(v-b)^{2}}{2 a(v-b)^{2}-R T v^{3}}
$$

对于范德瓦尔斯模型，可得

$$
\kappa_{T}=-\frac{1}{v}\left(\frac{\partial v}{\partial p}\right)_{T}=\frac{v^{2}(v-b)^{2}}{R T v^{3}-2 a(v-b)^{2}}
$$

对上式改写

$$
\kappa_{T}^{-1}=\frac{R T v}{(v-b)^{2}}-\frac{2 a}{v^{2}}
$$

代入范德瓦尔斯方程

$$
\frac{R T}{v-b}=p+\frac{a}{v^{2}}
$$

则

$$
\kappa_{T}^{-1}=\frac{v}{v-b}\left[p+\frac{a}{v^{2}}-\frac{2 a(v-b)}{v^{3}}\right]
$$

由（1）问的结果知 $v>b$ ，结合题给条件 $a \ll p v^{2}$ ，可得

$$
\kappa_{T}^{-1}>\frac{v}{v-b}\left(p+\frac{a}{v^{2}}-\frac{2 a}{v^{2}}\right)=\frac{v}{v-b}\left(p-\frac{a}{v^{2}}\right)>0
$$

故对于范德瓦尔斯气体，$\kappa_{T}$ 的取值范围为

$$
\kappa_{T}>0
$$

其直观的物理意义为：等温压缩时，物质的体积随压强增大而减小。
我们知道范德瓦尔斯气体是一种稳定物质状态，根据日常经验推而广之，稳定物质系统都有$\kappa_{T}>0$,

评分标准：总 50 分

（1） 问6分，（1）（2）式各3分
（2） 问2分，（3）式2分
（3） 问8分，（5）式3分，（6）式1分，（7）式4分（需论述过程或方程，直接写出给2分）
（4） 问10分，（8）式2分，（9）式2分，（11）式2分，（12）式2分，（13）（或（13））式2分
（5） 问12分，（14）（16）（17）（19）（22）式各2分，（20）（23）式各1分
（6） 问12分，（25）式4分，（26）式2分，（28）式4分，（29）式2分
