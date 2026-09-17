---
id: cpho-f-2023-q6
source: cpho-f
native_id: "六、（50 分）在制作玻璃时通过掺入熔融的金属（如金、银、铜等），可以制成彩色的玻璃。这些金属颗粒中的电子在光的电场驱动下，对入射白光中的特定频率成分产生共振吸收，导致光在此频率附近的成分转化为热，从而使透过玻璃的光呈现出颜色。这种共振称为等离激元共振。"
year: 2023
language: zh
translated: false
topic: [electromagnetism, quantum-physics]
subtopic: [electrostatics, conductors, current, ac-circuits, solid-state]
difficulty: null
difficulty_norm: 5
math_tools: [differential-equations, series-complex]
format: open-ended
core_ideas: []
estimated_time_min: 75
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/cpho-f/2023.mmd"
verification_status: pending
---

六、（50 分）在制作玻璃时通过掺入熔融的金属（如金、银、铜等），可以制成彩色的玻璃。这些金属颗粒中的电子在光的电场驱动下，对入射白光中的特定频率成分产生共振吸收，导致光在此频率附近的成分转化为热，从而使透过玻璃的光呈现出颜色。这种共振称为等离激元共振。
（1）考虑真空中一个半径为 $R$ 、相对介电常数为 $\varepsilon_{\mathrm{r}}$ 的均匀介质球，将其置于匀强外电场 $\boldsymbol{E}_{0}$中。试求稳定后球内的电场强度 $\boldsymbol{E}_{\mathrm{in}}$ 和球的电偶极矩 $\boldsymbol{p}$ 。已知均匀介质球在均匀外场中是均匀极化的，真空介电常量为 $\varepsilon_{0}$ 。
（2）考虑一块均匀金属导体，其导电电子数密度为 $n$ 、质量为 $m$ 、电荷量为 $-e(e>0)$ ，电子在外场作用下定向漂移速度为 $\boldsymbol{v}$ 时，被晶格散射的平均作用等效为一阻力 $\boldsymbol{f}=-\gamma m v$ ，$\gamma$ 为阻力系数。不考虑电子间的相互作用。
（i）若此金属导体中有匀强恒定电场 $\boldsymbol{E}$ ，试求稳定后金属内的电流密度 $\boldsymbol{j}$ ，以及此金属的电导率 $\sigma_{0}$ 。
（ii）若此金属导体中有振幅为 $\boldsymbol{E}_{\mathrm{m}}$ 、圆频率为 $\omega$ 的匀强交变电场 $\boldsymbol{E}(t)=\boldsymbol{E}_{\mathrm{m}} \cos \omega t$ ，电子将会运动形成电流。若稳定后金属内的电流密度表示为 $\boldsymbol{j}(t)=\boldsymbol{j}_{\mathrm{m}} \cos \left(\omega t+\varphi_{j}\right)$ ，记 $\sigma=\frac{j_{\mathrm{m}}}{E_{\mathrm{m}}}$ ，可类比交流电的复数表示引入复电导率 $\tilde{\sigma}=\sigma \mathrm{e}^{\mathrm{i} \varphi_{j}}$ ，在复数形式下金属内复电流密度$\tilde{\boldsymbol{j}}=\boldsymbol{j}_{\mathrm{m}} \mathrm{e}^{\mathrm{i}\left(\omega t+\varphi_{j}\right)}$ 和复电场强度 $\tilde{\boldsymbol{E}}=\boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}$ 的关系可表述为 $\tilde{\boldsymbol{j}}=\tilde{\sigma} \tilde{\boldsymbol{E}}$ 。求此金属的复电导率$\tilde{\sigma}=\operatorname{Re} \tilde{\sigma}+\mathrm{i} \operatorname{Im} \tilde{\sigma}$ 的表达式（用 $\omega 、 \gamma 、 \varepsilon_{0}$ 和参量 $\omega_{\mathrm{p}}=\sqrt{\frac{n e^{2}}{\varepsilon_{0} m}}$ 表示）。
（iii）在上述匀强交变电场中，电子将会整体同步地运动，可类比电介质定义金属导体中的极化强度。在复数形式下金属内复极化强度 $\tilde{\boldsymbol{P}}$ 和复电场强度 $\tilde{\boldsymbol{E}}$ 的关系可表述为 $\tilde{\boldsymbol{P}}=\tilde{\chi} \varepsilon_{0} \tilde{\boldsymbol{E}}$ ，其中 $\tilde{\chi}$ 为复极化率。进而可引入复电位移矢量 $\tilde{\boldsymbol{D}}=\varepsilon_{0} \tilde{\boldsymbol{E}}+\tilde{\boldsymbol{P}}=\tilde{\varepsilon}_{\mathrm{r}} \varepsilon_{0} \tilde{\boldsymbol{E}}$ 和复相对介电常数 $\tilde{\varepsilon}_{\mathrm{r}}$ 。求此金属的复相对介电常数 $\tilde{\varepsilon}_{\mathrm{r}}(\omega)=\operatorname{Re} \tilde{\varepsilon}_{\mathrm{r}}(\omega)+\mathrm{i} \operatorname{Im} \tilde{\varepsilon}_{\mathrm{r}}(\omega)$ 的表达式（用 $\omega, \gamma$ 和参量 $\omega_{\mathrm{p}}=\sqrt{\frac{n e^{2}}{\varepsilon_{0} m}}$表示）。
（3）用上述金属导体制成半径为 $R$ 的纳米球形颗粒，放入圆频率为 $\omega\left(\omega<\omega_{\mathrm{p}}\right)$ 的平面简谐电磁波中，其电场振幅大小为 $E_{0}$ ，波长远大于 $R$ 。只考虑金属颗粒在电场中的极化，且在复数形式下可与第（1）问中介质球的极化类比。已知 $\gamma \ll \omega_{\mathrm{p}}$ ，不考虑电磁辐射。
（i）试求稳定后金属纳米颗粒内的电场振幅大小 $E_{\mathrm{in}}(\omega)$ ；当 $\omega=\omega_{\mathrm{r}}$ 时 $E_{\mathrm{in}}$ 达到最大，发生等离激元共振，试求共振圆频率 $\omega_{\mathrm{r}}$（为简单起见，求 $\omega_{\mathrm{r}}$ 时可取 $\gamma=0$ ）。
（ii）试求共振时该颗粒内的电场振幅大小 $E_{\mathrm{r}}=E_{\mathrm{in}}\left(\omega_{\mathrm{r}}\right)$ ，以及共振时该颗粒内的平均发热功率 $P_{\mathrm{r}}$ 。（考虑到 $\gamma \ll \omega_{\mathrm{p}}$ ，略去 $\gamma$ 的高阶小量）

参考解答：
（1）均匀介质球在均匀外场中是均匀极化的，设极化强度为 $\boldsymbol{P}$ ，介质球表面的极化电荷密度分布为

$$
\sigma^{\prime}(\theta)=\boldsymbol{P} \cdot \boldsymbol{n}=P \cos \theta
$$

此为球面余弦分布电荷，极化电荷在球内产生的退极化场是匀强电场

$$
\boldsymbol{E}^{\prime}=-\frac{\boldsymbol{P}}{3 \varepsilon_{0}}
$$

球求内的总电场强度

$$
\boldsymbol{E}_{\text {in }}=\boldsymbol{E}_{0}+\boldsymbol{E}^{\prime}
$$

介质的极化规律

$$
\boldsymbol{P}=\left(\varepsilon_{\mathrm{r}}-1\right) \varepsilon_{0} \boldsymbol{E}_{\mathrm{in}}
$$

联立（2）（3）（4）式解得

$$
\boldsymbol{P}=\frac{\varepsilon_{\mathrm{r}}-1}{\varepsilon_{\mathrm{r}}+2} 3 \varepsilon_{0} \boldsymbol{E}_{0}
$$

（5）式和（2）式代入（3）式得

$$
\boldsymbol{E}_{\text {in }}=\frac{3}{\varepsilon_{\mathrm{r}}+2} \boldsymbol{E}_{0}
$$

介质球的电偶极矩

$$
\boldsymbol{p}=\boldsymbol{P} \cdot \frac{4}{3} \pi R^{3}=\frac{\varepsilon_{\mathrm{r}}-1}{\varepsilon_{\mathrm{r}}+2} 4 \pi \varepsilon_{0} R^{3} \boldsymbol{E}_{0}
$$

（2）
（i）恒定电场 $\boldsymbol{E}$ 中电子的动力学方程

$$
-e \boldsymbol{E}-\gamma m \boldsymbol{v}=m \dot{\boldsymbol{v}}
$$

稳态时有 $\dot{\boldsymbol{v}}=0$ ，代入（8）式得漂移速度

$$
v=-\frac{e}{\gamma m} \boldsymbol{E}
$$

导体内的电流密度

$$
\boldsymbol{j}=n(-e) v=\frac{n e^{2}}{\gamma m} \boldsymbol{E}=\sigma_{0} \boldsymbol{E}
$$

所以导体的电导率

$$
\sigma_{0}=\frac{n e^{2}}{\gamma m}
$$

（ii）交变电场 $\boldsymbol{E}(t)=\boldsymbol{E}_{\mathrm{m}} \cos \omega t$ 中电子的动力学方程

$$
-e \boldsymbol{E}_{\mathrm{m}} \cos \omega t-\gamma m v=m \dot{\boldsymbol{v}}
$$

可以写成复数形式

$$
-e \boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}-\gamma m \tilde{\boldsymbol{v}}=m \dot{\tilde{\boldsymbol{v}}}
$$

稳态时，设电子速度的稳态解为

$$
\tilde{\boldsymbol{v}}(t)=\tilde{\boldsymbol{v}}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}
$$

则 $\dot{\tilde{v}}=\mathrm{i} \omega \tilde{\boldsymbol{v}}$ ，代入（13）式得

$$
-e \boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}-\gamma m \tilde{\boldsymbol{v}}=\mathrm{i} \omega m \tilde{\boldsymbol{v}}
$$

解得

$$
\tilde{\boldsymbol{v}}=\frac{-e / m}{\gamma+\mathrm{i} \omega} \boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}=\frac{-e / m}{\gamma+\mathrm{i} \omega} \tilde{\boldsymbol{E}}
$$

电流密度

$$
\tilde{\boldsymbol{j}}=n(-e) \tilde{\boldsymbol{v}}=\frac{n e^{2} / m}{\gamma+\mathrm{i} \omega} \tilde{\boldsymbol{E}}=\tilde{\sigma} \tilde{\boldsymbol{E}}
$$

复电导率

$$
\tilde{\sigma}=\frac{n e^{2} / m}{\gamma+\mathrm{i} \omega}=\frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2}}{\gamma+\mathrm{i} \omega}=\frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2} \gamma}{\gamma^{2}+\omega^{2}}-\mathrm{i} \frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2} \omega}{\gamma^{2}+\omega^{2}}
$$

【注：当 $\omega=0$ 时，$\tilde{\sigma}=\frac{n e^{2}}{m \gamma}=\sigma_{0}$ 退回为静态时的结果】
（iii）由电子运动的速度 $\tilde{v}$ 可得位置

$$
\tilde{\boldsymbol{x}}=\frac{\tilde{\boldsymbol{v}}}{\mathrm{i} \omega}=\frac{e / m}{\omega^{2}-\mathrm{i} \gamma \omega} \boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}=\frac{e / m}{\omega^{2}-\mathrm{i} \gamma \omega} \tilde{\boldsymbol{E}}
$$

【或：交变电场 $\boldsymbol{E}(t)=\boldsymbol{E}_{\mathrm{m}} \cos \omega t$ 中电子的动力学方程

$$
-e \boldsymbol{E}_{\mathrm{m}} \cos \omega t-\gamma m \dot{\boldsymbol{x}}=m \ddot{\boldsymbol{x}}
$$

可以写成复数形式

$$
-e \boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}-\gamma m \dot{\tilde{\boldsymbol{x}}}=m \ddot{\tilde{\boldsymbol{x}}}
$$

稳态时，设电子位置的稳态解为

$$
\tilde{\boldsymbol{x}}(t)=\tilde{\boldsymbol{x}}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}
$$

则 $\dot{\tilde{\boldsymbol{x}}}=\mathrm{i} \omega \tilde{\boldsymbol{x}}, ~ \ddot{\tilde{\boldsymbol{x}}}=-\omega^{2} \tilde{\boldsymbol{x}}$ ，代入得

$$
-e \boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}-\mathrm{i} \omega \gamma m \tilde{\boldsymbol{x}}=-m \omega^{2} \tilde{\boldsymbol{x}}
$$

解得

$$
\tilde{\boldsymbol{x}}=\frac{e / m}{\omega^{2}-\mathrm{i} \gamma \omega} \boldsymbol{E}_{\mathrm{m}} \mathrm{e}^{\mathrm{i} \omega t}=\frac{e / m}{\omega^{2}-\mathrm{i} \gamma \omega} \tilde{\boldsymbol{E}}
$$

】
极化强度

$$
\tilde{\boldsymbol{P}}=n(-e) \tilde{\boldsymbol{x}}=-\frac{n e^{2} / m}{\omega^{2}-\mathrm{i} \gamma \omega} \tilde{\boldsymbol{E}}=\tilde{\chi} \varepsilon_{0} \tilde{\boldsymbol{E}}
$$

复极化率

$$
\tilde{\chi}=-\frac{n e^{2} / m \varepsilon_{0}}{\omega^{2}-\mathrm{i} \gamma \omega}=-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}-\mathrm{i} \gamma \omega}=-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}-\mathrm{i} \frac{\gamma}{\omega} \frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}
$$

复相对介电常数

$$
\tilde{\varepsilon}_{\mathrm{r}}(\omega)=1+\tilde{\chi}=1-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}-\mathrm{i} \gamma \omega}=\left(1-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}\right)+\mathrm{i}\left(-\frac{\gamma}{\omega} \frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}\right)
$$

【注：复电导率 $\tilde{\sigma}$ 和复相对介电常数 $\tilde{\varepsilon}_{\mathrm{r}}(\omega)$ 间满足 $\tilde{\varepsilon}_{\mathrm{r}}(\omega)=1+\frac{\tilde{\sigma}}{\mathrm{i} \omega \varepsilon_{0}}$ 】
（3）
（i）复数形式下金属球在交变电场中的极化可类比介质球在静电场中的极化，由（6）式，球内电场复振幅

$$
\tilde{E}_{\text {in }}(\omega)=\frac{3}{2+\tilde{\varepsilon}_{\mathrm{r}}(\omega)} E_{0}
$$

将（22）式代入，电场振幅大小为

$$
E_{\text {in }}(\omega)=\left|\tilde{E}_{\text {in }}(\omega)\right|=\frac{3}{\left|2+\tilde{\varepsilon}_{\mathrm{r}}(\omega)\right|} E_{0}=\frac{3}{\sqrt{\left(3-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}\right)^{2}+\left(\frac{\gamma}{\omega} \frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}\right)^{2}}} E_{0}
$$

在共振区附近，取 $\gamma \approx 0$

$$
\tilde{\varepsilon}_{\mathrm{r}}(\omega)=1-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}}
$$

此时电场振幅为

$$
E_{\text {in }}(\omega) \approx \frac{3}{3-\omega_{\mathrm{p}}^{2} / \omega^{2}} E_{0}
$$

当 $3-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}} \rightarrow 0$ 时 $E_{\mathrm{in}}$ 最大，发生共振，共振圆频率

$$
\omega_{\mathrm{r}}=\frac{\omega_{\mathrm{p}}}{\sqrt{3}}\left(=\sqrt{\frac{n e^{2}}{3 \varepsilon_{0} m}}\right)
$$

【注：由 $\frac{\mathrm{d} E_{\mathrm{in}}(\omega)}{\mathrm{d} \omega}=0$（即 $\frac{\mathrm{d}}{\mathrm{d} \omega}\left[\left(3-\frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}\right)^{2}+\left(\frac{\gamma}{\omega} \frac{\omega_{\mathrm{p}}^{2}}{\omega^{2}+\gamma^{2}}\right)^{2}\right]=0$ ）得

$$
\frac{12 \omega_{\mathrm{p}}^{2} \omega^{4}-4 \omega_{\mathrm{p}}^{4} \omega^{2}-2 \omega_{\mathrm{p}}^{4} \gamma^{2}}{\omega^{3}\left(\gamma^{2}+\omega^{2}\right)^{2}}=0
$$

解得

$$
\omega_{\mathrm{r}}=\sqrt{\frac{\omega_{\mathrm{p}}^{2}+\sqrt{\omega_{\mathrm{p}}^{2}\left(\omega_{\mathrm{p}}^{2}+6 \gamma^{2}\right)}}{6}} \approx \frac{\omega_{\mathrm{p}}}{\sqrt{3}}
$$

结果一致】
（ii）考虑到 $\gamma \ll \omega_{\mathrm{p}}$ ，当 $\omega=\omega_{\mathrm{r}}=\frac{\omega_{\mathrm{p}}}{\sqrt{3}}$ 时

$$
\tilde{\varepsilon}_{\mathrm{r}}\left(\omega_{\mathrm{r}}\right) \approx-2-\mathrm{i} 3 \sqrt{3} \frac{\gamma}{\omega_{\mathrm{p}}}
$$

共振时电场复振幅

$$
\tilde{E}_{\text {in }}\left(\omega_{\mathrm{r}}\right)=\frac{3}{\tilde{\varepsilon}_{\mathrm{r}}(\omega)+2} E_{0} \approx \mathrm{i} \frac{\omega_{\mathrm{p}}}{\sqrt{3} \gamma} E_{0}
$$

电场振幅大小

$$
E_{\mathrm{r}}=\frac{\omega_{\mathrm{p}}}{\sqrt{3} \gamma} E_{0} \gg E_{0}
$$

由（17）（18）式，球内电流密度复振幅

$$
\tilde{j}=\tilde{\sigma} E_{\mathrm{r}}=\frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2}}{\gamma+\mathrm{i} \omega} E_{\mathrm{r}}=\frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2}}{\gamma^{2}+\omega^{2}}(\gamma-\mathrm{i} \omega) E_{\mathrm{r}}=j \mathrm{e}^{\mathrm{i} \varphi_{j}}
$$

其中

$$
j=\frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2}}{\sqrt{\gamma^{2}+\omega^{2}}} E_{\mathrm{r}}, \quad \cos \varphi_{j}=\frac{\gamma}{\sqrt{\gamma^{2}+\omega^{2}}}
$$

平均热功率密度

$$
\bar{p}_{\mathrm{r}}=\overline{j(t) E_{\mathrm{r}}(t)}=\overline{j \cos \left(\omega t+\varphi_{j}\right) \cdot E_{\mathrm{r}} \cos \omega t}=\frac{1}{2} j E_{\mathrm{r}} \cos \varphi_{j}
$$

将（32）式和 $\omega=\omega_{\mathrm{r}}=\frac{\omega_{\mathrm{p}}}{\sqrt{3}} 、 E_{\mathrm{r}}=\frac{\omega_{\mathrm{p}}}{\sqrt{3} \gamma} E_{0}$ 代入，考虑到 $\gamma \ll \omega_{\mathrm{p}}$ ，得

$$
\bar{p}_{\mathrm{r}}=\frac{1}{2} \frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2} \gamma}{\gamma^{2}+\omega^{2}} E_{\mathrm{r}}^{2} \approx \frac{\varepsilon_{0} \omega_{\mathrm{p}}^{2} E_{0}^{2}}{2 \gamma}
$$

平均发热功率

$$
\bar{P}_{\mathrm{r}}=\bar{p}_{\mathrm{r}} \cdot \frac{4}{3} \pi R^{3}=\frac{2 \pi \varepsilon_{0} \omega_{\mathrm{p}}^{2} E_{0}^{2} R^{3}}{3 \gamma}
$$

评分参考：本题50分。
第（1）问10分，（1）（3）（4）（5）式各1分，（2）（6）（7）式各2分；
第（2）问20分，
第（i）问4分，（8）（9）（10）（11）式各1分；
第（ii）问8分，（12）式2分，（16）式4分，（18）式2分；
第（iii）问8分，（19）式4分，（20）（21）式各1分，（22）式2分；
第（3）问20分，
第（i）问6分，（23）式2分，（24）（26）式各1分，（27）式2分；
第（ii）问14分，（29）（30）（31）（32）（33）（34）（35）式各2分。
