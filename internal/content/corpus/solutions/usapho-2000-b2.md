---
id: usapho-2000-b2
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2000-b2
solution_type: official
source_document: solution-document-usapho-2000-s
source_pdf: cache/phoxiv/usapho/2000_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2000_S.pdf."
---

B2.a. For the wheel $I=\frac{1}{2} m R^{2}$ and $a=\alpha R$ since it is rolling without slipping. The wheel is turning clockwise. It's decelerating so the force producing the torque must be towards the front of the car. For the rotational motion of the rear wheel about its axis

Therefore

$$
\begin{gathered}
l \alpha=f_{R} R \\
\frac{1}{2} m R^{2} \frac{a}{R}=f_{R} R \\
f_{R}=\frac{1}{2} m a
\end{gathered}
$$

![](https://cdn.mathpix.com/cropped/a0c6b6b8-ef72-425a-a912-1d138685dc0f-07.jpg?height=257&width=315&top_left_y=1817&top_left_x=1600)
toward the front.
b. Now consider the translational deceleration of the rear wheel

$$
m a=E_{C R}-f_{R}
$$

where we
have chosen the acceleration direction to be positive. Therefore

$$
F_{C R}=m a+f_{R}=m a+\frac{1}{2} m a=\frac{3}{2} m a \quad \text { towards the rear. }
$$

![](https://cdn.mathpix.com/cropped/a0c6b6b8-ef72-425a-a912-1d138685dc0f-08.jpg?height=207&width=336&top_left_y=253&top_left_x=1506)
c. Consider the total external force acting on the car-wheel combination which has total mass $M+2 m$

$$
\begin{gathered}
f_{F}-f_{R}=(M+2 m) a \\
f_{F}=f_{R}+(M+2 m) a=\frac{1}{2} m a+(M+2 m) a=\left(M+\frac{5}{2} m\right) a \quad \text { towards rear. }
\end{gathered}
$$

d. Considering the rotational motion of the front wheel about its axis

$$
\begin{gathered}
l \alpha=\left(f_{B}-f_{F}\right) R \\
\frac{1}{2} m R^{2} \frac{a}{R}=\left(f_{B}-f_{F}\right) R
\end{gathered}
$$

Solving for $f_{A} \quad f_{B}=\frac{1}{2} m a+f_{F}=\frac{1}{2} m a+\left(M+\frac{5}{2} m\right) a=(M+3 m) a$
![](https://cdn.mathpix.com/cropped/a0c6b6b8-ef72-425a-a912-1d138685dc0f-08.jpg?height=282&width=373&top_left_y=831&top_left_x=1525)
towards the rear.
e. Consider the total external force acting on the front wheel

$$
\begin{gathered}
f_{F}+f_{B}-F_{C F}=m a \\
F_{C F}=f_{F}+f_{B}-m a=\left(M+\frac{5}{2} m\right) a+(M+3 m) a-m a=\left(2 M+\frac{9}{2} m\right) a
\end{gathered}
$$

![](https://cdn.mathpix.com/cropped/a0c6b6b8-ef72-425a-a912-1d138685dc0f-08.jpg?height=239&width=353&top_left_y=1185&top_left_x=1529)
towards the front.
f. We will first calculate the normal forces exerted by the axles on the carriage part of the car. Call these normal forces $N_{R}$ and $N_{F}$. Using Newton's third law to find the horizontal forces exerted on the carriage by the axles and the brake, we have the force diagram at the right. Consider the vertical forces acting on the block part of the car. There is no acceleration in the
![](https://cdn.mathpix.com/cropped/a0c6b6b8-ef72-425a-a912-1d138685dc0f-08.jpg?height=496&width=984&top_left_y=1628&top_left_x=971)
vertical direction, so these must sum to zero. Or

$$
N_{F}+N_{R}=M g
$$

Consider the torques acting on the block part of the car. It is not rotating, so the total torque about the center of mass must equal zero.

$$
F_{C R}\left(\frac{h}{2}+R\right)+f_{j} \frac{h}{2}+N_{F} \frac{l}{2}-F_{C V}\left(\frac{h}{2}+R\right)-N_{R} \frac{L}{2}=0
$$

Rearranging terms

$$
N_{F}-N_{R}=\frac{2}{L}\left[\left(F_{C F}-F_{C R}\right)\left(\frac{h}{2}+R\right)-f_{B} \frac{h}{2}\right]
$$

Substituting the known $F_{C F}, F_{C R}$, and $f_{A}$

$$
\begin{gathered}
N_{F}-N_{R}=\frac{2}{L}\left[\left(2 M+\frac{9}{2} m-\frac{3}{2} m\right)(t)\left(\frac{h}{2}+R\right)-(M+3 m) a \frac{h}{2}\right] \\
N_{F}-N_{R}=\frac{a}{L}[(2 M+3 m)(h+2 R)-(M+3 m) h]=\frac{a}{L}[h M+2 R(2 M+3 m)]
\end{gathered}
$$

Adding (B2.1) and (B2.2)

And for the rear axle

$$
\begin{gathered}
2 N_{F}=\frac{a}{L}[h M+2 R(2 M+3 m)]+M g \\
N_{F}=\frac{1}{2} M g+\frac{a h}{2 L} M+\frac{a R}{L}(2 M+3 m) \\
N_{R}=M g-N_{F}=\frac{1}{2} M g \quad \frac{a h}{2 L} M-\frac{a R}{L}(2 M+3 m)
\end{gathered}
$$

These are the upward forces exerted by the axles on the carriage. Consider now the vertical forces acting on the wheel, shown in the diagram at the right. Since there is no vertical acceleration these must sum to zero.

Finally

$$
\begin{gathered}
n_{F}-N_{F}-m g=0 \\
n_{F}=N_{F}+m g=\frac{1}{2}(M+2 m) g+\frac{a h}{2 l} M+\frac{a R}{t}(2 M+3 m)
\end{gathered}
$$

Similarly for the rear wheel

$$
n_{R}=\frac{1}{2}(M+2 m) g-\frac{u h}{2 L} M-\frac{u R}{L}(2 M+3 m)
$$

g. For each wheel the maximum frictional force corresponding to the maximum deceleration is $\mu n$. For the rear wheel

$$
f_{R}=\mu m_{R}
$$

Using the results of Part a and Part f.

$$
\frac{1}{2} m a=\mu\left[\frac{1}{2}(M+2 m) g-\frac{a h}{2 L} M-\frac{a R}{L}(2 M+3 m)\right]
$$

Solving for a

$$
a_{R \text { max }}=\frac{\mu(M+2 m) g L}{m L+\mu[M h+(2 M+3 m) 2 R]}
$$

For the front wheel

$$
f_{F}=\mu n_{F}
$$

$$
\begin{aligned}
\left(M+\frac{5}{2} m\right) a & =\mu\left[\frac{1}{2}(M+2 m) g+\frac{a h}{2 L} M+\frac{a R}{L}(2 M+3 m)\right] \\
a_{F \text { max }} & =\frac{\mu(M+2 m) g L}{(2 M+5 m) L-\mu[M h+(2 M+3 m) 2 R]}
\end{aligned}
$$

h. Putting the given values into (B2.5) and (B2.6) we have

$$
\begin{aligned}
& \qquad \begin{array}{c}
a_{R \text { max }}=\frac{0.6(6000 \mathrm{~kg}+2(200 \mathrm{~kg})) g(2.5 \mathrm{~m})}{(200 \mathrm{~kg})(2.5 \mathrm{~m})+0.6[(6000 \mathrm{~kg})(1.5 \mathrm{~m})+(2(6000 \mathrm{~kg})+3(200 \mathrm{~kg})) 2(0.3 \mathrm{~m})]} \\
a_{R \text { max }}=0.920 \mathrm{~g} \\
0.6(6000 \mathrm{~kg}+2(200 \mathrm{~kg})) g(2.5 \mathrm{~m})
\end{array} \\
& a_{f_{\text {max }}}=\frac{0.0 \mathrm{~kg}(2(6000 \mathrm{~kg})+5(200 \mathrm{~kg}))(2.5 \mathrm{~m})-0.6[(6000 \mathrm{~kg})(1.5 \mathrm{~m})+(2(6000 \mathrm{~kg})+3(200 \mathrm{~kg})) 2(0.3 \mathrm{~m})]}{\left(\begin{array}{l}
a_{\text {max }}=0.425 \mathrm{~g}
\end{array}\right.} \\
& \text { therefore the maximum deceleration the car can have is } \quad a_{\text {car max }}=0.425 \mathrm{~g}
\end{aligned}
$$

i. Forming the ratio and substituting in the given values

$$
\begin{gathered}
\frac{n_{F}}{n_{R}}=\frac{\frac{1}{2}(M+2 m) g+\frac{a h}{2 L} M+\frac{a R}{L}(2 M+3 m)}{\frac{1}{2}(M+2 m) g-\frac{a h}{2 L} M-\frac{a R}{L}(2 M+3 m)}=\frac{(M+2 m) g L+a h M+2 a R(2 M+3 m)}{(M+2 m) g L-a h M-2 a R(2 M+3 m)} \\
\frac{n_{F}}{n_{R}}=\frac{(6000 \mathrm{~kg}+2(200 \mathrm{~kg})) g(2.5 \mathrm{~m})+(0.425 g)(1.5 \mathrm{~m})(6000 \mathrm{~kg})+2(0425 g)(0.3 \mathrm{~m})(2(6000 \mathrm{~kg})+3(200 \mathrm{~kg}))}{(6000 \mathrm{~kg}+2(200 \mathrm{~kg})) g(2.5 \mathrm{~m})-(0.425 g)(1.5 \mathrm{~m})(6000 \mathrm{~kg})-2(0.425 g)(0.3 \mathrm{~m}))(2(6000 \mathrm{~kg})+3(200 \mathrm{~kg}))} \\
\frac{n_{F}}{n_{R}}=\frac{(6400 \mathrm{~kg})(2.5 \mathrm{~m})+(0.425)(1.5 \mathrm{~m})(6000 \mathrm{~kg})+2(0.425)(0.3 \mathrm{~m})(12600 \mathrm{~kg})}{(6400 \mathrm{~kg})(25 \mathrm{~m})-(0.425)(1.5 \mathrm{~m})(6000 \mathrm{~kg})-2(0.425)(0.3 \mathrm{~m})(12600 \mathrm{~kg})} \\
\frac{n_{F}}{n_{R}}=2.57
\end{gathered}
$$
