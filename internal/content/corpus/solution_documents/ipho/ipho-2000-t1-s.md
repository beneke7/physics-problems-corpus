---
id: solution-document-ipho-2000-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2000/T1_S.pdf
extraction_method: cached-mmd
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2000/T1_S.pdf."
---

## Question 1

## A Bungee Jumper

(a) The jumper comes to rest when
lost gravitational potential energy == stored strain energy

$$
\begin{gathered}
m g y=\frac{1}{2} k(y-L)^{2} \\
k y^{2}-2 y(k L+m g)+k L^{2}=0
\end{gathered}
$$

This is solved as a quadratic.

$$
\begin{aligned}
y= & \frac{2(k L+m g) \pm \sqrt{4(k L+m g)^{2}-4 k^{2} L^{2}}}{2 k} \\
& =\frac{k L+m g \pm \sqrt{2 m g k L+m^{2} g^{2}}}{k}
\end{aligned}
$$

Need positive root; lower position of rest (other root after initial rise).
(b) The maximum speed is attained when the acceleration is zero and forces balance; i.e. when $m g=k x$

Also kinetic energy = lost potential energy - strain energy within elastic rope

$$
\begin{gathered}
\frac{1}{2} m v^{2}=m g(L+x)-\frac{1}{2} k x^{2} \\
x=\frac{m g}{k} \\
v^{2}=2 g\left(L+\frac{m g}{k}\right)-\frac{m g^{2}}{k} \\
v=\sqrt{2 g L+\frac{m g^{2}}{k}}
\end{gathered}
$$

(c) Time to come to rest == time in free fall + time in SHM of rope to stop stretching

$$
\begin{aligned}
\text { Length of free fall } & =L=\frac{1}{2} g t_{\mathrm{f}}^{2} \\
\text { Therefore } t_{\mathrm{f}} & =\sqrt{\frac{2 L}{g}}
\end{aligned}
$$

The jumper enters the SHM with free fall velocity $:=g t_{\mathrm{f}}=\sqrt{2 g L}=v_{\tau}$

$$
\text { Period of SHM }=2 \pi \sqrt{\frac{m}{k}}=T
$$

We represent a full SHM cycle by
![](https://cdn.mathpix.com/cropped/4473e65a-f35d-4044-a18b-cfba61753f3a-02.jpg?height=714&width=1751&top_left_y=502&top_left_x=207)

The jumper enters the SHM at time $\tau$ given by

$$
\tau=\frac{1}{\omega} \sin ^{-1} \frac{v_{\tau}}{v}=\frac{1}{\omega} \sin ^{-1} \frac{\sqrt{2 g L}}{v}
$$

Jumper comes to rest at one half cycle of the SHM at total time given by

$$
\begin{aligned}
& =t_{\mathrm{f}}+(T / 2-\tau) \\
& =\sqrt{\frac{2 L}{g}}+\pi \sqrt{\frac{m}{k}}-\frac{1}{\omega} \sin ^{-1} \frac{\sqrt{2 g L}}{v} \\
& =\sqrt{\frac{2 L}{g}}+\pi \sqrt{\frac{m}{k}}-\frac{1}{\omega} \sin ^{-1} \frac{\sqrt{2 g L}}{\sqrt{2 g L+m g^{2} / k}} \\
& =\sqrt{\frac{2 L}{g}}+\sqrt{\frac{m}{k}}\left\{\pi-\sin ^{-1} \frac{\sqrt{2 g L}}{\sqrt{2 g L+m g^{2} / k}}\right\}
\end{aligned}
$$

This is the same as

$$
\begin{aligned}
& =\sqrt{\frac{2 L}{g}}+\sqrt{\frac{m}{k}}\left\{\frac{\pi}{2}+\cos ^{-1} \frac{\sqrt{2 g L}}{\sqrt{2 g L+m g^{2} / k}}\right\} \\
& =\sqrt{\frac{2 L}{g}}+\sqrt{\frac{m}{k}} \tan ^{-1}\left\{-\sqrt{\frac{2 k L}{m g}}\right\}
\end{aligned}
$$

## B Heat Engine Question

![](https://cdn.mathpix.com/cropped/4473e65a-f35d-4044-a18b-cfba61753f3a-03.jpg?height=1184&width=559&top_left_y=337&top_left_x=465)

In calculating work obtainable, we assume no loss (friction etc.) in engine working.

$$
\begin{aligned}
\Delta Q_{1} & =\text { energy from body } \mathrm{A} \\
& =-m s \Delta T_{1} \quad\left(\Delta T_{1}-\mathrm{ve}\right) \\
\Delta Q_{2} & =m s \Delta T_{2} \quad\left(\Delta T_{2}+\mathrm{ve}\right)
\end{aligned}
$$

## (a) For maximum amount of mechanical energy assume Carnot engine

$$
\frac{\Delta Q_{1}}{T_{1}}=\frac{\Delta Q_{2}}{T_{2}} \text { throughout operation (second law) }
$$

But $\Delta Q_{1}=-m s \Delta T_{1}$ and $\Delta Q_{2}=m s \Delta T_{2}$

$$
\begin{gathered}
-m s \int_{l_{\mathrm{A}}}^{T_{0}} \frac{d T_{1}}{T_{1}}=m s \int_{T_{\mathrm{B}}}^{T_{10}} \frac{d T_{2}}{T_{2}} \\
\ln \frac{T_{\mathrm{A}}}{T_{0}}=\ln \frac{T_{0}}{T_{\mathrm{B}}} \\
T_{0}^{2}=T_{\mathrm{A}} T_{\mathrm{B}} \\
T_{0}=\sqrt{T_{\mathrm{A}} T_{\mathrm{B}}}
\end{gathered}
$$

$$
\begin{aligned}
& Q_{1}=-m s \int_{T_{A}}^{T_{0}} \mathrm{~d} T_{1}=m s\left(T_{A}-T_{0}\right) \\
& Q_{2}=m s \int_{T_{A}}^{T_{0}} \mathrm{~d} T_{2}=m s\left(T_{0}-T_{B}\right) \\
& W=Q_{1}-Q_{2}
\end{aligned}
$$

$$
W=m s\left(T_{\mathrm{A}}-T_{0}-T_{0}+T_{\mathrm{B}}\right)=m s\left(T_{\mathrm{A}}+T_{\mathrm{B}}-2 T_{0}\right)=m s\left(T_{\mathrm{A}}+T_{\mathrm{B}}-2 \sqrt{T_{A} T_{B}}\right)
$$

or $m s\left(\sqrt{T_{\mathrm{A}}}-\sqrt{T_{\mathrm{B}}}\right)^{2}$
(d) Numerical example:

Mass $=$ volume × density

$$
\begin{aligned}
\mathrm{W} & =2.50 \times 1.00 \times 10^{3} \times 4.19 \times 10^{3} \times(350+300-2 \sqrt{350 \times 300}) \mathrm{J} \\
& =20 \times 10^{6} \mathrm{~J} \\
& =20 \mathrm{MJ}
\end{aligned}
$$

(a) $\quad N=N_{0} \mathrm{e}^{-i} \quad N_{0}=$ original number

$$
n=N_{0}\left(1-\mathrm{e}^{\cdot \lambda r}\right)
$$

Therefore $n=N \mathrm{e}^{k}\left(1-\mathrm{e}^{-\lambda t}\right)=N\left(\mathrm{e}^{21}-1\right)$
So $n=N\left(2^{\prime \prime}-1\right)$ where $r$ is half-life
or as $\lambda=\frac{\ln 2}{T}=\frac{0.6931}{T}, \mathrm{n}=\mathrm{N}\left(e^{\frac{0.6931 t}{T}}-1\right)$
${ }^{206} n={ }^{238} N\left(2^{t / 450}-1\right)$ or ${ }^{206} n={ }^{238} N\left(e^{0.1540 t}-1\right)$ where time $t$ is in $10^{9}$ years
(b) $\quad{ }^{207} n={ }^{234} N\left(2^{10710}-1\right)$ or ${ }^{207} n={ }^{235} N\left(e^{0.9762 t}-1\right)$
(c) In mixed uranium (i.e. containing Pb of both natural and radioactive origin)

| $204: 206: 207$ have proportions | $1.00: 29.6: 22.6$ |
| :--- | :--- |
| In pure lead (no radioactivity) | $1.00: 17.9: 15.5$ |

Therefore for radioactively produced lead by subtraction

| 204: $206: 207$ have proportions | $1.00: 29.6: 22.6$ |
| :--- | :--- |
| In pure lead (no radioactivity) | $1.00: 17.9: 15.5$ |

Therefore for radioactivity produced lead by subtraction

$$
206: 207 \quad 11.7: 7.1
$$

Dividing equations from (a) and (b) gives

$$
\begin{gathered}
\frac{206 n}{207}=\frac{210 N}{235} N\left\{\frac{2^{\prime 1450}-1}{2^{\prime 10710}-1}\right\} \text { or } \frac{206}{207}=\frac{238}{235} N\left\{\frac{e^{0.13401}-1}{e^{0.97621}-1}\right\} \\
\frac{11.7}{7.1}=137\left\{\frac{2^{T / 450}-1}{2^{T / 0.710}-1}\right\} \text { or } \frac{11.7}{7.1}=137\left\{\frac{e^{01540 T}-1}{e^{0.9762 T}-1}\right\} \\
0.0120\left\{2^{\text {ro.710 }}-1\right\}=\left\{2^{\text {T845 }}-1\right\} \\
\text { or } 0.0120\left\{e^{0.97027}-1\right\}=\left\{e^{0.15407}-1\right\}
\end{gathered}
$$

(d) Assume $T \gg 4.50 \times 10^{9}$ and ignore 1 in both brackets:

$$
\begin{gathered}
0.0120\left\{2^{7 / 0.710}\right\}=\left\{2^{7 / 4.50}\right\} \text { or } 0.0120\left\{\mathrm{e}^{0.97627}\right\}=\left\{\mathrm{e}^{0.15407}\right\} \\
0.0120=\left\{2^{7 / 450-7 / 0.710}\right\}=2^{7(0.222-1.4084)}=2^{-1.18627} \\
T=-\frac{\log 0.0120}{\log 2 \times 1.1862}=5.38 \\
T=5.38 \times 10^{9} \text { years } \\
\text { or } 0.0120=\mathrm{e}^{-0.8222 \mathrm{~T}} \quad \mathrm{~T}=\frac{\ln 0.0120}{-0.8222}=\frac{-4.4228}{-0.8222}=5.38 \\
T=5.38 \times 10^{9} \text { years }
\end{gathered}
$$

(e) $T$ is not $\gg 4.50 \times 10^{9}$ years but is $>0.71 \times 10^{9}$ years

We can insert the approximate value for $T$ (call it $T^{*}=5.38 \times 10^{\prime}$ years) in the $2^{7 / 4.50}$ term and obtain a better value by iteration in the rapidly changing $2^{7 / 0.710}$ term). We now leave in the -1 's, although the -1 on the right-hand side has little effect and may be omitted).

Either

$$
\begin{gathered}
0.0120\left(\left(2^{T / 0.710}-1\right)=2^{T * / 4.50}-1\right. \\
2^{T / 0.710}-1=\frac{2^{1.1956}-1}{0.0120}=\frac{2.2904-1}{0.0120}=107.5 \\
T=0.710 \frac{\log 108.5}{\log 2}=4.80(0)
\end{gathered}
$$

Put T* $=4.80(0) \times 10^{9}$ years

$$
\begin{aligned}
& 2^{T 0.710}=\frac{2^{10688}-1}{0.0120}=\frac{2.0948-1}{0.0120}=91.2 \\
& T=0.710=\frac{\log 91.2}{\log 2}=4.62(3)
\end{aligned}
$$

Further iteration gives 4.52

So more accurate answer for T to be in range $4.6 \times 10^{9}$ years to $4.5 \times 10^{9}$ years (either acceptable).

## D Spherical charge

(a) Charge density $=\rho=\frac{Q}{\frac{4}{3} \pi R^{3}}$ within sphere
$x \leq R$ Field at distance $x$ :
$E=\frac{\frac{4}{3} \pi x^{3} \rho}{4 \pi \varepsilon_{0} x^{2}}=\frac{Q x}{4 \pi \varepsilon_{0} R^{3}}$
$x>R \quad$ Field at distance x from the centre: $E=\frac{Q}{4 \pi \varepsilon_{0} x^{2}}$

## (b) Method 1

Energy density is $\frac{1}{2} \varepsilon_{0} E^{2}$.
$x \leq R$
Energy in a thin shell of thickness $\delta x$ at radius $x$ is given by
$=\frac{1}{2} \varepsilon_{0} E^{2} 4 \pi x^{2} \delta x=\frac{1}{2} 4 \pi \varepsilon_{0} \frac{Q^{2} x^{2}}{\left(4 \pi \varepsilon_{0}\right)^{2} R^{6}} x^{2} d x$
Energy within the spherical volume $=\frac{1}{2} \frac{Q^{2}}{\left(4 \pi \varepsilon_{0}\right) R^{6}} \int_{x=0}^{x=R} x^{4} \mathrm{~d} x=\frac{1}{40} \frac{Q^{2}}{\pi \varepsilon_{0}} \frac{1}{R}$
$x>R$
Energy within spherical shell $=\frac{1}{2} \varepsilon_{0} E^{2} 4 \pi x^{2} \delta x=\frac{1}{2} 4 \pi \varepsilon_{0} \frac{Q^{2}}{\left(4 \pi \varepsilon_{0}\right)^{2} x^{4}} x^{2} \delta \mathrm{r}$
Fnergy within the spherical volume for $x>R$
$=\frac{1}{2} \frac{Q^{2}}{\left(4 \pi \varepsilon_{0}\right)} \int_{\lambda=R}^{x=\infty} \frac{1}{x^{2}} \mathrm{dx}=\frac{1}{8} \frac{Q^{2}}{\pi \varepsilon_{0}} \frac{1}{R}$

Total energy associated with the charge distribution $=\frac{1}{40} \frac{Q^{2}}{\pi \varepsilon_{0}} \frac{1}{R}$
$+\frac{1}{8} \frac{Q^{2}}{\pi \varepsilon_{0}} \frac{1}{R}$

$$
=\frac{3}{20} \frac{Q^{2}}{\pi \varepsilon_{0}} \frac{1}{R}
$$

## Method 2

A shell with charge $4 \pi x^{2} \delta x \rho$ moves from $\infty$ to the surface of a sphere radius $x$ where the electric potential is

$$
\frac{\frac{4}{3} \pi x^{3} \rho}{4 \pi \varepsilon_{0} x}=\frac{x^{2} \rho}{3 \varepsilon_{0}}
$$

and will therefore gain electrical potential energy $\left(\frac{x^{2} \rho}{3 \varepsilon_{0}}\right)\left(4 \pi^{2} \rho\right) \delta x$

Total energy of complete sphere $=\int_{x=0}^{x=R} \frac{4 \pi \rho^{2} x^{4}}{3 \varepsilon_{0}} d x=\frac{4}{15} \frac{\pi \rho^{2} R^{5}}{\varepsilon_{0}}$

$$
\text { Putting } \mathrm{Q}=\text { charge on sphere }=\frac{4}{3} \pi R^{3} \rho, \rho=\frac{3 Q}{4 \pi R^{3}}
$$

(c) Binding energy $E_{\text {binding }}=E_{\text {electric }}-E_{\text {nuclear }}$

## Binding energy is a negative energy

Therefore $\quad-8.768=E_{\text {electric }}-10.980 \mathrm{MeV}$ per nucleon
$E_{\text {electric }}=2.212 \mathrm{MeV}$ per nucleon

Radius of cobalt nucleus is given by $R=\frac{3}{20} \frac{Q^{2}}{\pi \varepsilon_{0} E_{\text {clectric }}^{\text {total }}}$

$$
\begin{aligned}
& =\frac{3 \times 27^{2} \times\left(1.60 \times 10^{-19}\right)^{2}}{20 \times \pi \times 8.85 \times 10^{-12} \times 2.212 \times 10^{6} \times 57 \times 1.60 \times 10^{-19}} \mathrm{~m} \\
& =5.0 \times 10^{-15} \mathrm{~m}
\end{aligned}
$$

$$
\begin{aligned}
T=\frac{4 \rho d \ln 2}{B^{2}}= & \frac{4 \times 1.70 \times 10^{-8} \times 8.90 \times 10^{3} \times 0.6931}{\left(44.5 \times 10^{-6} \times 0.4384\right)^{2}} \mathrm{~s} \\
& =1.10(2) \times 10^{6} \mathrm{~s}(=306 \mathrm{hr}=12 \text { days } 18 \mathrm{hr})
\end{aligned}
$$

## Method 1 Equating energy

Horizontal component of magnetic field $B$ inducing emf in ring:
$B=44.5 \times 10^{-6} \cos 64^{\circ}$
Magnetic flux through ring at angle $\theta=B \pi a^{2} \sin \theta$
where $a=$ radius of ring

$$
\begin{aligned}
\text { Instantaneous emf } & =\frac{\mathrm{d} \phi}{\mathrm{~d} t}=B \pi a^{2} \frac{\mathrm{~d} \sin \omega \pi}{\mathrm{~d} t} \text { where } \omega=\text { angular velocity } \\
& =B \pi a^{2} \omega \cos \omega t=B \pi a^{2} \omega \cos \theta
\end{aligned}
$$

R.m.s. emf over 1 revolution $=\frac{B \pi a^{2} \omega}{\sqrt{2}}$

Average resistive heating of ring $=\frac{B^{2} y^{2} a^{4} \omega^{2}}{2 R}$
Moment of ineria $=\frac{1}{2} m a^{2}$
Rotational energy $=\frac{1}{4} m a^{2} \omega^{2}$ where $m=$ mass of ring
Power producing change in $\omega=\frac{\mathrm{d}}{\mathrm{d} t}\left\{\frac{1}{4} m a^{2} \omega^{2}\right\}=$
$\frac{1}{4} m a^{2} 2 \omega \frac{\mathrm{~d} \omega}{\mathrm{~d} t}$
Equating: $\quad \frac{1}{2} m a^{2} \omega \frac{\mathrm{~d} \omega}{\mathrm{~d} t}=-\frac{B^{2} \tilde{0}^{2} a^{4} \omega^{2}}{2 R}$

$$
\frac{\mathrm{d} \omega}{\omega}=-\frac{B^{2} \pi^{2} a^{2}}{m R} \mathrm{~d} t
$$

If $T$ is time for angular velocity to halve,

$$
\begin{aligned}
& \int_{\omega}^{\omega / 2} \frac{\mathrm{~d} \omega}{\omega}=-\int_{0}^{T} \frac{B^{2} \pi^{2} a^{2}}{m R} \mathrm{~d} t \\
& \ln 2=\frac{B^{2} \tilde{\partial}^{2} a^{2}}{m R} T
\end{aligned}
$$

But $\mathrm{R}=\frac{20 a \rho}{\mathrm{~A}}$ where A is cross-sectional area of copper ring $m=2 \pi a d A \quad(d=$ density $)$

$$
\begin{gathered}
\ln 2=\frac{B^{2} \delta^{2} a^{2} T}{\frac{20 a \rho}{A} 20 a d A}=\frac{B^{2} T}{4 \rho d} \\
T=\frac{4 \rho d \ln 2}{B^{2}}=\frac{4 \times 1.70 \times 10^{-8} \times 8.90 \times 10^{3} \times 0.6931}{\left(44.5 \times 10^{-6} \times 0.4384\right)^{2}} \mathrm{~s} \\
=1.10(2) \times 10^{6} \mathrm{~s}(=306 \mathrm{hr}=12 \text { days } 18 \mathrm{hr})
\end{gathered}
$$

## Method 2 Back Torque

Horizontal component of magnetic field $==B=44.5 \times 10^{-6} \cos 64^{\circ}$
Cross-section of area of ring is $A$
Radius of ring $=a$
Density of ring $=d$
Resistivity $=\rho$
$\omega=$ angular velocity ( $\omega$ positive when clockwise)
Resistance $R=\rho \frac{2 \pi a}{A}$
Mass of ring $\mathrm{m}=2 \pi \mathrm{a} \mathrm{Ad}$
Moment of inertia $=M=\frac{1}{2} m a^{2}$
Magnetic flux through ring at angle $\theta=B \pi a^{2} \sin \theta$
Instantaneous emf $=\frac{\mathrm{d} \phi}{\mathrm{d} t}=B \pi \alpha^{2} \frac{\mathrm{~d} \sin \omega t}{\mathrm{~d} t}=B \pi \alpha^{2} \omega \cos \omega t=B \pi a^{2} \omega \cos \theta$
Induced current $=1=B \pi a^{2} \cos \theta / R$
Torque opposing motion $=\left(B \pi a^{2} \cos \theta\right) I=\frac{1}{R}\left(B \pi a^{2}\right)^{2} \omega \cos ^{2} \theta$
Work done in small $\delta \theta=\frac{1}{R}\left(B \pi a^{2}\right)^{2} \omega \frac{1}{2}(\cos 2 \theta+1) \delta \theta$
Average torque $=($ work done in $2 \pi$ revolution $) / 2 \pi$

$$
=\frac{1}{2 \pi R}\left(B \pi \pi^{2}\right)^{2} \omega \frac{1}{2} 2 \pi=\frac{1}{2 R}\left(B \pi \pi^{2}\right)^{2} \omega
$$

This equals $M \frac{\mathrm{~d} \omega}{\mathrm{~d} t}$ so that $\quad M \frac{\mathrm{~d} \omega}{\mathrm{~d} t}=-\frac{B\left(\pi a^{2}\right) B\left(\pi a^{2}\right)^{1} 2}{(\rho / A)(2 \pi a)} \omega$

$$
\begin{gathered}
\frac{1}{2}(2 \pi a A d) a^{2} \frac{\mathrm{~d} \omega}{\mathrm{~d} t}=-\frac{B^{2}\left(\pi a^{2}\right)^{2} A}{4 \rho \pi a} \omega \\
\frac{\mathrm{~d} \omega}{\mathrm{~d} t}=-\frac{B^{2}}{4 \rho d} \omega
\end{gathered}
$$

$$
\begin{aligned}
\int_{\omega}^{\omega / 2} \frac{\mathrm{~d} \omega}{\omega} & =\int_{0}^{T} \frac{B^{2}}{4 \rho d} \mathrm{~d} t \\
\ln 2 & =\frac{B^{2} T}{4 \rho d}
\end{aligned}
$$

$$
\begin{aligned}
T=\frac{4 p d \ln 2}{B^{2}}= & \frac{4 \times 1.70 \times 10^{-8} \times 8.90 \times 10^{3} \times 0.6931}{\left(44.5 \times 10^{-6} \times 0.4384\right)^{2}} \mathrm{~s} \\
& =1.10(2) \times 10^{6} \mathrm{~s}=306 \mathrm{hr}=12 \text { days } 18 \mathrm{hr}
\end{aligned}
$$
