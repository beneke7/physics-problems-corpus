---
id: cpho-f-2023-q5
source: cpho-f
native_id: "五、（40 分）黑洞是广义相对论预言的奇异天体，其宏观性质由质量 $M$ 、角动量 $J$ 和电荷 $Q$完全决定。对于一个 $J=0 、 Q=0$ 、质量为 $M$ 的球对称简单黑洞（施瓦西黑洞），可以定义一个以黑洞中心为球心、半径为 $r$ 的球面（称为视界）。按照经典理论，视界以内所有物质都无法逃离黑洞。"
year: 2023
language: zh
translated: false
topic: [gravitation, thermodynamics]
subtopic: [gravitation, energy-conservation, entropy, heat-engines, efficiency]
difficulty: null
difficulty_norm: 5
math_tools: [calculus]
format: open-ended
core_ideas: []
estimated_time_min: 90
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2023.mmd"
verification_status: pending
---

五、（40 分）黑洞是广义相对论预言的奇异天体，其宏观性质由质量 $M$ 、角动量 $J$ 和电荷 $Q$完全决定。对于一个 $J=0 、 Q=0$ 、质量为 $M$ 的球对称简单黑洞（施瓦西黑洞），可以定义一个以黑洞中心为球心、半径为 $r$ 的球面（称为视界）。按照经典理论，视界以内所有物质都无法逃离黑洞。
（1）按照牛顿力学，如果一个粒子在质量为 $M$ 的球对称天体表面的逃逸速度恰好等于真空中的光速 $c$ ，此天体即为黑洞。试导出该天体半径 $r$ 的表达式。已知太阳质量约为 $2 \times 10^{30} \mathrm{~kg}$ ，引力常量 $G=6.67 \times 10^{-11} \mathrm{~m}^{3} /\left(\mathrm{kg} \cdot \mathrm{s}^{2}\right)$ ，真空中的光速 $c=3 \times 10^{8} \mathrm{~m} / \mathrm{s}$ ，试问太阳半径至少收缩到多少时它将成为黑洞？
（2）以上由牛顿力学得到的 $r$ 恰好与广义相对论给出的同质量黑洞的视界半径结果一致。按照贝肯斯坦和霍金的理论，黑洞的熵 $S$ 正比于其视界面积 $A$ ，即

$$
S=\frac{k_{\mathrm{B}} C^{3}}{4 G \hbar} A
$$

其中 $\hbar$ 是约化普朗克常量，$k_{\mathrm{B}}$ 是玻尔兹曼常量。当两个质量均为 $M$ 的简单黑洞塌缩成一个质量为 $M^{\prime}\left(M^{\prime}<2 M\right)$ 的简单黑洞时，求黑洞系统的熵的改变量（结果不含 $A$ ）。
（3）对于一个绝对温度为 $T$ 、质量为 $M$ 的简单黑洞，其内能 $U$ 和熵 $S$ 满足基本热力学关系$\mathrm{d} U=T \mathrm{~d} S$ 。按照相对论，黑洞的内能由爱因斯坦质能关系 $U=M c^{2}$ 给出。试由此导出黑洞温度 $T$ 与其质量 $M$ 之间的关系式，并计算此黑洞的热容。
（4）假设有一可逆热机工作在初始质量分别为 $M_{10}$ 和 $M_{20}$ 的两个简单黑洞之间，已知$M_{20}>M_{10}$ ，求该热机从开始至最终的全过程对外所做的总功。
（5）按照量子力学，霍金提出黑洞表面（即黑洞视界）可以向外辐射电磁波，且此辐射可以等价为与之同温度的黑体辐射，称为霍金辐射。求霍金辐射功率 $P$ 与黑洞质量 $M$ 之间的关系 $P(M)$ 。已知斯特藩－玻尔兹曼常量 $\sigma=\frac{\pi^{2} k_{\mathrm{B}}^{4}}{60 \hbar^{3} c^{2}}$ 。
（6）由于发生霍金辐射，黑洞能量将减少，从而其质量随时间变小。令黑洞的初始质量为$M_{0}$ ，不考虑其它因素，求该黑洞由于霍金辐射而最终消失所需要的时间。

参考解答：
（1）选取无穷远处为势能零点，该天体和质量为 $m$ 的试探粒子之间的引力势能为

$$
V(d)=-\frac{G M m}{d}
$$

这里 $d$ 是试探粒子到黑洞中心的距离。天体的半径为 $r$ ，由机械能守恒可得逃逸速度 $v_{\mathrm{e}}$ 满足方程

$$
\frac{1}{2} m v_{\mathrm{e}}^{2}-\frac{G M m}{r}=0
$$

可得逃逸速度大小

$$
v_{\mathrm{e}}=\sqrt{\frac{2 G M}{r}}
$$

当逃逸速度 $v_{\mathrm{e}}=c$ 时，可得天体的半径满足

$$
r=\frac{2 G M}{c^{2}}
$$

若使得太阳成为黑洞，将太阳质量 $M=2 \times 10^{30} \mathrm{~kg}$ 代入（4）式可得太阳的半径需至少缩小为

$$
r=\frac{2 \times 6.67 \times 10^{-11} \times 2 \times 10^{30}}{9 \times 10^{16}} \approx 2964 \mathrm{~m} \approx 3 \mathrm{~km}
$$

（2） 由题意可知黑洞熵与质量的关系为
$$
S=\frac{k_{\mathrm{B}} c^{3}}{4 G \hbar} A=\frac{k_{\mathrm{B}} c^{3}}{4 G \hbar} 4 \pi r^{2}=\frac{\pi k_{\mathrm{B}} c^{3}}{G \hbar}\left(\frac{2 G M}{c^{2}}\right)^{2}=\frac{4 \pi k_{\mathrm{B}} G M^{2}}{c \hbar}
$$
所以当两个质量均为 $M$ 的球形黑洞塌缩成一个质量为 $M^{\prime}$ 的黑洞时，系统熵的变化为
$$
\Delta S=S_{2}-S_{1}=\frac{4 \pi k_{\mathrm{B}} G}{c \hbar}\left[M^{\prime 2}-2 M^{2}\right]
$$
（3） 利用热力学公式
$$
\frac{1}{T}=\frac{\mathrm{d} S}{\mathrm{~d} U}
$$
以及爱因斯坦关系
$$
U=M c^{2}
$$
可得
$$
\frac{1}{T}=\frac{\mathrm{d} S}{\mathrm{~d} U}=\frac{1}{c^{2}} \frac{\mathrm{~d}}{\mathrm{~d} M}\left(\frac{4 \pi k_{\mathrm{B}} G M^{2}}{c \hbar}\right)=\frac{8 \pi k_{\mathrm{B}} G M}{c^{3} \hbar}
$$
所以黑洞的温度为
$$
T=\frac{c^{3} \hbar}{8 \pi k_{\mathrm{B}} G M}
$$
可知黑洞的温度与质量成反比，质量越小、温度越高。根据热容量的定义可知黑洞的热容量为
$$
C=T \frac{\mathrm{~d} S}{\mathrm{~d} T}=T \frac{\mathrm{~d} S}{\mathrm{~d} M} \frac{\mathrm{~d} M}{\mathrm{~d} T}=T \frac{8 \pi k_{\mathrm{B}} G M}{c \hbar} \frac{-c^{3} \hbar}{8 \pi k_{\mathrm{B}} G T^{2}}=-\frac{c^{2} M}{T}=-\frac{8 \pi k_{\mathrm{B}} G M^{2}}{c \hbar}
$$
可见黑洞的热容量始终是负的，这意味着黑洞在热力学上是不稳定的。
（4）【解法一】
在热机工作过程中，设两个黑洞的质量分别为 $M_{1}$ 和 $M_{2}$ 。由题意知，热机循环过程是可逆过程。故完成若干次完整循环后系统的熵不变。由（6）式可知，熵不变给出
$$
M_{1}^{2}+M_{2}^{2}=M_{10}^{2}+M_{20}^{2}
$$
因为 $M_{20}>M_{10}$ ，由（9）式可知：小质量黑洞为高温热源，大质量黑洞为低温热源。在热机循环过程中，热机从高温热源（小黑洞）吸取热量、向低温热源（大黑洞）放出热量，所以小黑洞质量不断减少，直到最终消失、热机循环终止，即
$$
M_{1}=0
$$
代入上式得
$$
M_{2}=\sqrt{M_{10}^{2}+M_{20}^{2}}
$$
根据能量守恒，可得热机最终对外所做的总功为
$$
W=\left(M_{10}+M_{20}-\sqrt{M_{10}^{2}+M_{20}^{2}}\right) c^{2}
$$
【解法二】
小质量的黑洞是高温热源，大质量黑洞是低温热源。热机从高温热源（小黑洞）吸取热量 $\mathrm{d} Q_{1}$ 、向低温热源（大黑洞）放出热量 $\mathrm{d} Q_{2}$ ，所以小黑洞质量不断减少，最终消失。由卡诺定理可知，
$$
\frac{\mathrm{d} Q_{2}}{\mathrm{~d} Q_{1}}=\frac{T_{2}}{T_{1}}
$$
根据爱因斯坦质能关系和热力学第一定律可得，
$$
\mathrm{d} Q_{1}=-\mathrm{d}\left(M_{1} c^{2}\right), \quad \mathrm{d} Q_{2}=\mathrm{d}\left(M_{2} c^{2}\right)
$$

进一步黑洞温度与其质量成反比

$$
T \propto \frac{1}{M},
$$

由上面两式可知，

$$
\frac{\mathrm{d} M_{2}}{\mathrm{~d} M_{1}}=-\frac{T_{2}}{T_{1}}=-\frac{M_{1}}{M_{2}}
$$

所以有

$$
M_{1} \mathrm{~d} M_{1}+M_{2} \mathrm{~d} M_{2}=0
$$

对上式两边同时积分可得

$$
M_{1}^{2}+M_{2}^{2}=M_{10}^{2}+M_{20}^{2}
$$

所以在热机循环过程中，大黑洞的质量不断增加并满足

$$
M_{2}=\sqrt{M_{10}^{2}+M_{20}^{2}-M_{1}^{2}}
$$

最终小黑洞的质量消耗殆尽，热机循环终止，即末态为

$$
M_{1}=0
$$

可逆热机的效率只取决于高温热源和低温热源的温度，

$$
\eta=\frac{\mathrm{d} W}{\mathrm{~d} Q_{1}}=1-\frac{T_{2}}{T_{1}}
$$

所以热机最终对外所做的总功为

$$
\begin{aligned}
W & =\int\left(1-\frac{T_{2}}{T_{1}}\right) \mathrm{d} Q_{1}=-\int_{M_{10}}^{0}\left(1-\frac{M_{1}}{M_{2}}\right) c^{2} \mathrm{~d} M_{1} \\
& =-\int_{M_{10}}^{0}\left(1-\frac{M_{1}}{\sqrt{M_{10}^{2}+M_{20}^{2}-M_{1}^{2}}}\right) c^{2} \mathrm{~d} M_{1} \\
& =\left(M_{10}+M_{20}-\sqrt{M_{10}^{2}+M_{20}^{2}}\right) c^{2}
\end{aligned}
$$

（5）根据斯特藩－玻尔兹曼定律可知，单位时间黑洞向外辐射的能量（即霍金辐射功率）为

$$
\begin{aligned}
P & =\sigma T^{4} A=4 \pi \sigma r^{2} T^{4}=4 \pi \sigma\left(\frac{2 G M}{c^{2}}\right)^{2}\left(\frac{c^{3} \hbar}{8 \pi k_{\mathrm{B}} G M}\right)^{4} \\
& =\sigma \frac{c^{8} \hbar^{4}}{256 \pi^{3} k_{\mathrm{B}}^{4} G^{2} M^{2}}=\frac{\pi^{2} k_{\mathrm{B}}^{4}}{60 \hbar^{3} c^{2}} \frac{c^{8} \hbar^{4}}{256 \pi^{3} k_{\mathrm{B}}^{4} G^{2} M^{2}} \\
& =\frac{c^{6} \hbar}{15360 \pi G^{2} M^{2}}
\end{aligned}
$$

（6）由于霍金辐射，黑洞能量的减小值等于辐射的能量，即

$$
-c^{2} \frac{\mathrm{~d} M}{\mathrm{~d} t}=P=\frac{c^{6} \hbar}{15360 \pi G^{2} M^{2}}
$$

可得

$$
-M^{2} \mathrm{~d} M=\frac{c^{4} \hbar}{15360 \pi G^{2}} \mathrm{~d} t
$$

两边同时积分可得

$$
-\int_{M_{0}}^{0} M^{2} \mathrm{~d} M=\int_{0}^{t_{f}} \frac{c^{4} \hbar}{15360 \pi G^{2}} \mathrm{~d} t
$$

所以黑洞由于霍金辐射而消失所需要的时间为

$$
t_{f}=\frac{5120 \pi G^{2} M_{0}^{3}}{c^{4} \hbar}
$$

评分参考：本题40分。
第（1）问5分，（1）（2）（3）（4）（5）式各1分；
第（2）问4分，（6）式3分，（7）式1分；
第（3）问8分，（8）式各3分，（9）式1分，（10）式4分；
第（4）问10分，【解法一】（11）式3分，（12）（13）式各2分，（14）式3分；
【解法二】（15）（16）（17）（18）（19）（20）（21）（22）式各 1 分，（23）式 2 分；
第（5）问5分，（24式5分；
第（6）问8分，（25）式3分，（26）式1分，（27）（28）式各2分。
