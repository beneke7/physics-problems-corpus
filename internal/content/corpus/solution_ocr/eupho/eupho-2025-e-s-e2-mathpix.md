---
id: solution-ocr-eupho-2025-e-s-e2
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2025_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2025-E2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## E2 - Hidden pattern (10 pts)

You are given a flat semi-transparent foil with a micro-pattern printed on its surface that is invisible to the naked eye. The pattern consists of a large number of identical sinusoids with amplitude $A$, running horizontally with spatial period $\Lambda$, and vertically shifted by distance $d$ relative to each other, as schematically shown in Fig. 10. Under a microscope, one can see that the printed pattern is composed of strictly horizontal line segments, each vertically displaced from its neighbours by a constant pitch $s$, as shown in Fig. 11.

![](../../../figures/solution-ocr/c259321dde26ae934651849b.jpg)
Figure 10: Pattern (not to scale)

![](../../../figures/solution-ocr/b185c4aeeaaf387c995a08d2.jpg)
Figure 11: Pattern as seen under microscope.

## Equipment (see also Fig. 12)

A Semi-transparent foil with a micro-pattern printed on its surface.
B Laser diode with wavelength $\lambda = ( 654 \pm 5 ) \mathrm { nm }$. The laser diode can be focused to the desired distance by rotating the end cap with a lens inside.
Warning: Do not completely unscrew the end cap! Inside, there is an oriented lens and a spring. No replacement laser will be given if damaged or disassembled.
C Two 90-degree L-shaped steel planks serving as stands for the foil and the laser diode. The foil can be fixed to one of the planks using the provided small clips. The laser diode can be mounted to the other plank with a larger coloured clip or with the provided rubber band.
D A sheet of paper with a printed goniometer - a polar coordinate frame with 1-mm radial steps and

![](../../../figures/solution-ocr/1039f127acc93534b2d4b10d.jpg)
Figure 12: Components A, B, C, H, and J arranged for the experiment.

angular divisions in degrees.

E A screen: the large surface of the box containing the experimental materials. Empty the box and place it on the desk with its large surface vertical.

F Ruler.

G Measuring tape.
H Adhesive tape attached to the ruler. Use pieces of the tape to fix the printed goniometer to the screen or to secure components to the table. You can ask for more tape if needed.
I Millimeter graph paper.
J An 80mm paper measuring scale with diagonal reference lines that allow you to measure fractions of the main scale divisions, accurate to ±0.1 mm.

Hint: In all of your measurements you are free to draw or put marks on the screen.
Important: Assume that the surface of the experimental desk is flat, and the screen is strictly perpendicular to the desk.

## Tasks (10.0 pts)

Determine as precisely as possible:

a The sinusoid period $\Lambda$. (2 pts)
b The vertical offset $d$ of the neighbouring sinusoids (2 pts)
c The sinusoid amplitude $A$ (3 pts)
d The step height $s$ (3 pts)

In all of the tasks you are expected to:

1. sketch a setup and/or rationalize a method for measuring the corresponding quantities;
2. report your measurements and calculations in a tabular form;
3. estimate the desired quantities and their uncertainties graphically, whenever reasonable.


## E2－Solution

Task a．
The light transmitted through the film forms a pri－ mary and secondary diffraction pattern as displayed in Fig． 13.

![](../../../figures/solution-ocr/466d40b5d0721d9ae6b0500b.jpg)
Figure 13：Photo of the diffraction pattern with the primary and secondary pattern marked．

The secondary diffraction pattern is only required for task d．For the primary diffraction pattern，a num－ ber of bright interference maxima lying on the same line is visible．This fact implies that locally，within the cross section of the laser spot，the printed lines on the film surface form a diffraction grating con－ sisting of a large number of practically linear par－ allel fringes．Therefore，the diffraction maxima are situated on a straight line，perpendicular to the tan－ gent to the illuminated sinusoids，like illustrated in Fig． 14.
By scanning the laser in a horizontal direction，the diffraction pattern will tilt according to the line slope in the illuminated spot．The pattern will be verti－ cal when the laser incidents on crests or valleys of the illuminated sinusoids．Therefore，the distance between two consecutive vertical positions of the diffraction pattern is $l = \Lambda / 2$ ，hence $\Lambda = 2 l$ ．
The experimental setup is designed as follows：As a first step，we fix the foil with two clips to the L－ shaped stand and align it carefully vertically．The goniometer is glued to the screen with the 0°－division pointing vertically．Next we fix the laser to another L－shaped stand and align it so that the beam hits the centre of the goniometer．We place the screen（go－ niometer）as far as possible from the foil to achieve larger displacements of the maxima and hence，a bet－ ter precision，also see Fig．15．The stand with the foil is being displaced in small steps across the laser beam，and the angle of inclination $\theta$ of the diffraction pattern is being measured as function of the distance $x$ between the laser spot and the edge of the film．
Further we put the ruler on the diagonal scale so

![](../../../figures/solution-ocr/3217f67e47f9ae42c1e8ddbc.jpg)
Figure 14：Qualitative sketch of interference pat－ tern．

![](../../../figures/solution-ocr/5877ac45484322b4d9fd3f4e.jpg)
Figure 15：Setup with optimized usage of the table space for improved precision．

that one of its edges is aligned with the alignment line on the scale；we＇ll be sliding the L－shaped stand with the foil along the edge of the ruler．That way we can focus on observing how the diffraction max－ ima shift while we slide the stand，without a need for sharing our attention between the diffraction max－ ima and alignment of the stand．A sample data set is recorded in the first two columns of Table 7，while the corresponding graph of $\theta$ vs．$x$ is shown in Fig． 16.

In what follows we＇ll be outlining two possible ap－ proaches for achieving precise experimental results of the quantities asked in this problem：approach A：graphical；approach B：carefully scanning the diffraction pattern around critical configurations．

Approach A．Points $x _ { 1 }$ and $x _ { 2 }$ in Fig． 16 corre－ sponding to $\theta = 0 ^ { \circ }$ ，i．e．consecutive crest and valley of the sinusoid，can be obtained by linear fits of the


![](../../../figures/solution-ocr/cbe0c8385422bc09a9bf14b9.jpg)
Figure 16: Graph of $\theta$ vs. $x$.

four points nearest to the zero-crossing points:

$$
x _ { 1 } = ( 10.0 \pm 0.5 ) \mathrm { mm } \quad x _ { 2 } = ( 40.5 \pm 0.5 ) \mathrm { mm } .
$$

Therefore, $l = x _ { 2 } - x _ { 1 } = 30.5 \mathrm {~mm}$ with uncertainty $\delta l =$ $\sqrt { \delta x _ { 1 } ^ { 2 } + \delta x _ { 2 } ^ { 2 } } = 0.7 \mathrm {~mm}$, and

$$
\Lambda = ( 61.0 \pm 1.4 ) \mathrm { mm }
$$

Approach B. Alternatively, we move the stand with the foil so that the diffraction maxima align along a vertical line and take the reading $x _ { 1 }$ from the diagonal scale. Next we slide the stand along the rule to find the other position where the diffraction maxima align along a vertical line and take the corresponding reading $x _ { 2 }$. We can see that achieving a vertical alignment is not easy and incurs an uncertainty, so we need to repeat the measurements. The measurement data are shown in the table below.

| No | $x _ { 1 } / \mathrm { mm }$ | $x _ { 2 } / \mathrm { mm }$ |
| :--- | :--- | :--- |
| 1 | 77.8 | 47.3 |
| 2 | 78.0 | 47.4 |
| 3 | 77.7 | 47.5 |
| 4 | 77.6 | 47.3 |
| 5 | 77.7 | 47.4 |
| avg | 77.76 | 47.38 |

According to this we calculate

$$
\Lambda = 2 \left( x _ { 2 } - x _ { 1 } \right) = 60.8 \mathrm {~mm}
$$

and $\Delta \Lambda = 0.16 \mathrm {~mm}$

|  | Task E2.a | Pts |
| :--- | :--- | :--- |
| A | Idea for linking the changing tilt of the primary diffraction pattern to phase of sinusoid. <br> Partial credit if full $\Lambda$ is measured between consecutive vertical positions of the diffraction pattern | 0.3 <br> 0.1 |
| B | Sketch of the correct setup (shifting the laser laterally to scan foil position and screen behind) <br> partial credit if $\Lambda / 2$ is measured between two "maximal" inclinations | 0.2 <br> 0.1 |
| C | Using the diagonal scale for measuring $x$ (data recorded with the precision of 0.1 mm) | 0.2 |
| D | If Approach A is chosen: <br> Usage of at least half the sinusoid period (30.5 mm) for variation of $x$ | 0.2 <br> Number of recorded points: <br> $\geq 6$ but < 10 points recorded |
| E! | If Approach B is chosen: <br> Number of measurements $n$ for both $x _ { 1 }$ and $x _ { 2 } : 0.1 ( n - 2 )$, in total up to |  |
| D! | Quality of data: standard deviation between individual measurements of $\mid x _ { 1 } - x _ { 2 }$ \| 0.2 mm <br> $\left\| x _ { 1 } - x _ { 2 } \right\| \leq 0.3 \mathrm {~mm}$ | 0.3 |
| F | Distance between the foil and the screen at least 60 cm |  |
| G | Partial points for value of $\Lambda$ between 58 mm and 64 mm <br> Partial points for value of $\Lambda$ between 59.5 mm and 62.5 mm <br> between 60 mm and 62 mm | 0.2 |
| H | Suitable error estimation <br> If the error estimation is based on a reasonable approach, but the numerical estimates of the direct measurement uncertainties are clearly under- or overestimated <br> If the error estimation method itself is flawed or not provided | 0.2 <br> 0.1 <br> 0 |
|  | Total on Task E2.a | 2.0 |

Task b.
Approach A. It can be easily deduced from Fig. 14 that the period of the diffraction grating, perpendicularly to the printed lines, is

$$
d ^ { \prime } = d \cos \theta .
$$

The angle to the $n$-th order diffraction maximum is:

$$
\varphi = \sin ^ { - 1 } \left( \frac { n \lambda } { d \cos \theta } \right) .
$$

The distance between the 0-th and the $n$-th maxima on the screen is

$$
\begin{equation*}
R _ { n } = L \tan \varphi \approx \frac { n \lambda L } { d \cos \theta } \tag{9}
\end{equation*}
$$


where $L = 74.6 \mathrm {~cm}$ is the distance between the film and the screen, and $\sin \varphi \approx \tan \varphi$ since involved angles are much smaller than 1 rad. Therefore, if we choose a specific order maximum and measure the distance $R$ at different points on the screen, i.e. for different angles $\theta$, the distance $d$ can be calculated as a sample average:

$$
d = n \lambda L \left\langle \frac { 1 } { R \cos \theta } \right\rangle
$$

While the uncertainty -as a sample standard deviation of $d$. Since the 0-th order could be slightly offset from the goniometer center, we measure the corresponding distances between the two symmetric, $n$-th and $- n$-th, maxima: $D _ { n } = R _ { n } + R _ { - n }$ and calculate

$$
d = 2 \lambda L \left\langle \frac { 1 } { D _ { n } \cos \theta } \right\rangle
$$

The last four columns of Table 7 summarize the measured distances and calculated value of $d$ for the 5-th maximum. By averaging the $d$ values, we obtain:

$$
d = ( 60.1 \pm 0.5 ) \mu \mathrm { m }
$$

However, we need to keep in mind the uncertainty of the laser wave length. Adding the relative errors of the measurement data and laser wavelength according to the Pythagorean rule (applicable for uncorrelated error sources), we obtain

$$
d = ( 60.1 \pm 0.7 ) \mu \mathrm { m } .
$$

We note that if we use the data at $\theta = 0 ^ { \circ }$, the diffraction maxima yield directly the line distance $d$ according to

$$
\begin{equation*}
d = 2 \lambda / \sin \alpha _ { n } = 2 \lambda \sqrt { L ^ { 2 } + D _ { n } ^ { 2 } / 4 } / D _ { n } . \tag{10}
\end{equation*}
$$

Approach B. Alternatively to using many data points for different $\theta$, we can choose the positions $x = x _ { 1 }$ or $x = x _ { 2 }$ found in the previous task since they are the lateraly points offering the highest precision. Analogously to approach A, we determine the distance between the symmetric diffraction maxima of highest observable order, $n = 6$, to achieve the highest possible precision. The best way to determine the distance $D _ { n }$ is by marking dots onto the screen at the positions of the maxima, and measure the distance between the dots by ruler (to keep the goniometer clean, one can attach another sheet of paper to the stand). Since a single measurement will be very precise if done carefully, repeated measurements are not required for this task. The result of the measurement is $D _ { 6 } = 105.5 \mathrm {~mm}$ with $L = 810 \mathrm {~mm}$, resulting in $d = 59.7 \mu \mathrm {~m}$. Estimated error is $\pm 0.7 \mu \mathrm {~m}$.

|  | Task E2.b | Pts |
| :--- | :--- | :--- |
| A | Understanding that the primary diffraction pattern is created by the distance of the sinusoids to each other | 0.2 |
| B | Using $\geq 5 , \geq 7 , \geq 10 \left( \theta , D _ { n } \right)$ data points to receive 0.1, 0.2, 0.4 pts. (approach $A )$ or chossing to record data at $x = x _ { 1 }$ or $x = x _ { 2 }$ (approach $B$ ) if vertical interference pattern is used without an explanation (approach $B$ ) | 0.4 |
| C | Expression equivalent to Eq. 10 simplified Eq. 10 (without Pythagorean correction) | 0.3 0.2 |
| D | Usage of at least a total span of $6 + 6 = 12$ diffraction orders for measurement of $\phi$ Total span from 9 to 11 diffraction orders for measurement of $\phi$ Total span from 6 to 8 diffraction orders for measurement of $\phi$ If measurement data is not consistent with real experiment | 0.3 0.2 0.1 0 |
| E | Distance to the screen at least $L \geq 70 \mathrm {~cm}$ Partial credit for $L$ between 40 cm and 70 cm $L$ between 20 cm and 40 cm | 0.3 0.2 0.1 |
| F | Partial points for value of $d$ between $58 \mu \mathrm {~m}$ and $62 \mu \mathrm {~m}$ between $58.5 \mu \mathrm {~m}$ and $61.5 \mu \mathrm {~m}$ Full points for value of $d$ between $59 \mu \mathrm {~m}$ and $61 \mu \mathrm {~m}$ | 0.1 0.2 0.3 |
| G | Suitable error estimation If the error estimation is based on a reasonable approach, but the numerical estimates of the direct measurement uncertainties are clearly under- or overestimated If the error estimation method itself is flawed or not provided | 0.2 0.1 0 |
|  | Total on Task E2.b | 2.0 |

Task c.

Approach A: The point where a sinusoid crosses the $x$-axis corresponds to a maximum angle of inclination of the diffraction pattern $\theta = ( 27 \pm 1 ) ^ { \circ }$ and can be obtained as:

$$
x _ { 0 } = \frac { x _ { 1 } + x _ { 2 } } { 2 } = ( 25.3 \pm 0.7 ) \mathrm { mm } .
$$

The sinusoid equation can be written as

$$
y = A \sin \left( k \left( x - x _ { 0 } \right) \right)
$$

where:

$$
k = \frac { 2 \pi } { \Lambda } = ( 0.103 \pm 0.002 ) \mathrm { mm } ^ { - 1 }
$$

is the sinusoid wavevector. Since $\tan \theta = \mathrm { d } y / \mathrm { d } x$, we obtain:

$$
\tan \theta = k A \cos \left( k \left( x - x _ { 0 } \right) \right) .
$$

Therefore, the auxiliary variables $z = \cos \left( k \left( x - x _ { 0 } \right) \right)$ and $t = \tan \theta$ are related by a linear dependence

$$
\begin{equation*}
t = k A z \equiv m z \tag{11}
\end{equation*}
$$


and the amplitude of the sinusoid can be calculated by determining the slope coefficient $m$ ：

$$
A = \frac { m } { k } .
$$

Calculated values of $t$ and $z$ are shown in the third and fourth column of Table 7，and the corresponding graph is shown in Fig． 17.

![](../../../figures/solution-ocr/51cf1305bca03d9adda23686.jpg)
Figure 17：Graph of $\tan \theta$ vs． $\cos \left( k \left( x - x _ { 0 } \right) \right)$ ．

The slope coefficient is

$$
m = ( 0.52 \pm 0.01 ) .
$$

Therefore：

$$
A = ( 5.0 \pm 0.2 ) \mathrm { mm } .
$$

Approach B．The amplitude of the sinusoids on the foil can be determined if we know the maximal slope the printed lines $\max _ { x } \frac { \mathrm {~d} y } { \mathrm {~d} x } = A k$ as we already know the wave vector $k = 2 \pi / \Lambda$ ．We notice that the diffrac－ tion maxima lay on a line perpendicular to the lines on the foil at the point where the laser beam passes it，hence we can find the maximal slope of the lines as the maximal angle $\theta$ that the array of diffraction maxima form with the vertical axis，

$$
\begin{equation*}
\max _ { x } \frac { \mathrm {~d} y } { \mathrm {~d} x } = \max \tan \theta = \tan \theta _ { \max } \tag{12}
\end{equation*}
$$

This is done easily by using the same setup as in part A，by sliding the stand of the foil along the edge of the ruler and observing how the maxima move on the screen．As a result we obtain $\theta _ { \text {max } } = ( 27.5 \pm 0.3 ) ^ { \circ }$ ，cor－ responding to

$$
A = \Lambda \tan \theta _ { \max } / 2 \pi = ( 5.05 \pm 0.06 ) \mathrm { mm } .
$$

|  | Task E2．c | Pts |
| :--- | :--- | :--- |
| A | Recognition that the slope of the si－ nusoid is perpendicular to the primary diffraction pattern | 0.3 |
| B | Idea to use that the first derivative of the sinusoid is $\tan \theta$ | 0.3 |
| C | Correct linearization equivalent to Eq． 11 （approach A）or deriving Eq．（12） （approach B） | 0.5 |
| D <br> E | If approach A has been chosen |  |
|  | Computing the auxiliary（linearized） value－pairs（ $z$ and $t$ ）for |  |
|  | $\leq 5$ points | 0.0 |
|  | 6－9 points | 0.2 |
|  | $\geq 10$ points | 0.4 |
|  | Plot for $t$ versus $z$ |  |
|  | Suitable graphical evaluation to find $A$ （approach A） | 0.2 |
| E！ | If approach B has been chosen | 0.2 |
|  |  |  |
|  | Obtaining $\theta _ { \text {max } }$ |  |
|  | Partial points within $\theta _ { \text {max } } = ( 27.5 \pm 1.0 ) ^ { \circ }$ | 0.2 |
|  | Full points within $\theta _ { \text {max } } = ( 27.5 \pm 0.5 ) ^ { \circ }$ | 0.4 |
| F | Distance to the screen at least $L \geq 70 \mathrm {~cm}$ | 0.3 |
|  | Partial credit for $L$ between 40 cm and 70 cm | 0.2 |
|  | $L$ between 20 cm and 40 cm | 0.1 |
| G | Partial points for value of $A$ between | 0.2 |
|  | Partial points for value of $A$ between 4.7 mm and 5.3 mm | 0.5 |
|  | Full points for value of $A$ between 4.8 mm and 5.2 mm | 0.8 |
| H | Suitable error estimation | 0.2 |
|  | If the error estimation is based on a reasonable approach，but the numer－ ical estimates of the direct measure－ ment uncertainties are clearly under－or overestimated | 0 |
|  |  |  |
|  | Total on Task E2．c | 3.0 |

## Task d．

The vertical slabs that come from the printing tech－ nique lead to the secondary diffraction pattern as can be seen from the photo in Fig．13．In this task， there also exist two different approaches that differ in the way the diffraction vectors are modelled but lead to the same and valid result．

Approach A：In the model of Huygen＇s elementary waves，the elementary wave sources along each of the vertical edges，as shown in thick red dotted lines in Fig．18，will create wavefronts that propagate to－ wards the screen and create interference pattern．
These edges have a regular distance $g$ of each other that depends on $\theta$ ，specifically：

$$
g = \frac { s } { \tan \theta } .
$$


![](../../../figures/solution-ocr/4ba89c274cf616885cd4dbc3.jpg)
Figure 18: Sketch for explanation of the relevant quantities for secondary diffraction pattern

| $\theta$ | $\tan ( \theta )$ | $R _ { + 1 } + R _ { - 1 }$ (cm) | S $( \mu m )$ |
| :--- | :--- | :--- | :--- |
| 27.8 | 0.527 | 4.75 | $1.08 \mathrm { E } - 05$ |
| 25.7 | 0.481 | 4.65 | $1.01 \mathrm { E } - 05$ |
| 24.5 | 0.456 | 4.50 | 9.88E-06 |
| 24.7 | 0.460 | 4.60 | 9.76E-06 |
| 21.8 | 0.400 | 3.90 | $1.00 \mathrm { E } - 05$ |
| 18.1 | 0.327 | 3.00 | $1.06 \mathrm { E } - 05$ |

Table 6: Measurements of the secondary diffraction order distances for different angles $\theta$

From the diffraction angle $\omega$ of the maxima of the secondary diffraction pattern, $g$ can be expressed via:

$$
\frac { \lambda } { g } = \sin \omega \approx \omega .
$$

Experimentally, we can obtain $\omega$ via

$$
\omega \approx \tan \omega = \frac { R _ { + } + R _ { - } } { 2 L } ,
$$

where $R _ { + } + R _ { - }$is the distance between the two diffraction orders visible (left and right from the centre) in the secondary pattern. We can combine this knowledge to obtain $g$ :

$$
g = \frac { 2 L \lambda } { R _ { + } + R _ { - } }
$$

Thus, we get $s$ via the trigonometric relation

$$
\begin{equation*}
s = g \tan \theta = \frac { 2 L \lambda \tan \theta } { R _ { + } + R _ { - } } \tag{13}
\end{equation*}
$$

It is important to notice that the secondary pattern can only be observed distinctly for large $\theta$ since only in these regions, the slope of the sinusoid barely changes, which in turn means that $\theta$ and the resulting diffraction angle $\omega$ is rather constant. In Tab. 6, the recorded measurement points for the same $L = 74.6 \mathrm {~cm}$ is shown.

A graphical evaluation has no benefit over computing the average of the point-wise results here, so we use the average of $s$ as the result and its standard deviation as the error estimate. Thus, we get:

$$
s \approx ( 10.2 \pm 0.4 ) \mu \mathrm { m }
$$

triangle shown in Fig. 18, which is $h = s / \sin \theta$. Subsequently, the diffraction angle is

$$
\omega \approx \sin \omega = \frac { \lambda } { h } = \frac { \tilde { R _ { + } } + \tilde { R _ { - } } } { 2 L } ,
$$

Where $\tilde { R _ { + } }$and $\tilde { R _ { - } }$are the positions of the secondary diffraction pattern orthogonal to the primary pattern. Thus, the formula for s becomes

$$
\begin{equation*}
s = \frac { 2 L \lambda \sin \theta } { \tilde { R _ { + } } + \tilde { R _ { - } } } , \tag{14}
\end{equation*}
$$

which leads to the same outcome as in approach A since $\tilde { R _ { + } } = \cos \theta R _ { + }$and $\tilde { R _ { - } } = \cos \theta R _ { - }$.

|  | Task E2.d | Pts |
| :--- | :--- | :--- |
| A | Linking the horizontal line segments of the discrete printer resolution to the secondary diffraction pattern | 0.3 |
| B | Understanding that the diffraction angle $\omega$ depends on $\theta$ | 0.3 |
| C | Deriving the final formula to compute $s$ as in Eq. 13, or, alternatively Eq. 14 | 0.4 |
| D | Sketching or describing a suitable setup and procedure to measure the relevant quantities to determine $s$ | 0.3 |
| E | Using both the plus and minus diffraction order for improved measurement precision | 0.2 |
| F | Method of measuring $R _ { + }$and $R _ { - }$: Marking the secondary diffraction maxima with pen on screen and linear regression - evidence either via screen paper that shows this method or concise description of this | 0.3 |
|  |  |  |
| G | Distance to the screen at least $L \geq 70 \mathrm {~cm}$ | 0.3 |
|  | Partial credit for $L$ between 40 cm and 70 cm | 0.2 |
|  | $L$ between 20 cm and 40 cm | 0.1 |
| H | Choosing $\theta > 27 ^ { \circ }$ | 0.2 |
|  | partial credit for $\theta > 25 ^ { \circ }$ | 0.1 |
| I | Partial points for value of $s$ between | 0.1 |
|  | Partial points for value of $s$ between $9 \mu \mathrm {~m}$ and $11 \mu \mathrm {~m}$ | 0.3 |
|  | Full points for value of $s$ between $9.4 \mu \mathrm {~m}$ and $10.6 \mu \mathrm {~m}$ | 0.5 |
| J | Suitable error estimation | 0.2 |
|  | If the error estimation is based on a reasonable approach, but the numerical estimates of the direct measurement uncertainties are clearly under- or overestimated | 0.1 |
|  | If the error estimation method itself is flawed or not provided | 0 |
|  | Total on Task E2.d | 3.0 |


Table 7: Measurement data for experiment "hidden pattern"
| $x$ (mm) | $\theta \left( ^ { \circ } \right)$ | $z$ | $t$ | $R _ { 5 } ( \mathrm {~cm} )$ | $R _ { - 5 } ( \mathrm {~cm} )$ | $D _ { 5 } ( \mathrm {~cm} )$ | $d$ (cm) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | -23 | -0.86 | -0.42447 | 4.4 | 4.4 | 8.8 | 0.00602 |
| 2 | -20 | -0.74 | -0.36397 | 4.4 | 4.3 | 8.7 | 0.00597 |
| 4 | -16 | -0.58 | -0.28675 | 4.2 | 4.2 | 8.4 | 0.00604 |
| 6 | -11 | -0.41 | -0.19438 | 4.1 | 4.1 | 8.2 | 0.00606 |
| 8 | -7 | -0.21 | -0.12278 | 4.1 | 4.1 | 8.2 | 0.00599 |
| 10 | -1 | -0.01 | -0.01746 | 4.1 | 4.1 | 8.2 | 0.00595 |
| 12 | 6 | 0.20 | 0.105104 | 4.1 | 4.1 | 8.2 | 0.00598 |
| 14 | 13 | 0.40 | 0.230868 | 4.2 | 4.2 | 8.4 | 0.00596 |
| 16 | 17 | 0.58 | 0.305731 | 4.3 | 4.3 | 8.6 | 0.00593 |
| 18 | 21 | 0.73 | 0.383864 | 4.3 | 4.3 | 8.6 | 0.00608 |
| 20 | 25 | 0.85 | 0.466308 | 4.4 | 4.4 | 8.8 | 0.00612 |
| 22 | 26 | 0.94 | 0.487733 | 4.5 | 4.6 | 9.1 | 0.00597 |
| 24 | 27 | 0.99 | 0.509525 | 4.6 | 4.5 | 9.1 | 0.00602 |
| 26 | 27 | 1.00 | 0.509525 | 4.6 | 4.5 | 9.1 | 0.00602 |
| 28 | 26 | 0.96 | 0.487733 | 4.5 | 4.6 | 9.1 | 0.00597 |
| 30 | 23 | 0.89 | 0.424475 | 4.4 | 4.4 | 8.8 | 0.00602 |
| 32 | 18 | 0.77 | 0.32492 | 4.2 | 4.2 | 8.4 | 0.00611 |
| 34 | 16 | 0.62 | 0.286745 | 4.2 | 4.3 | 8.5 | 0.00597 |
| 36 | 12 | 0.45 | 0.212557 | 4.1 | 4.1 | 8.2 | 0.00608 |
| 38 | 6 | 0.26 | 0.105104 | 4.1 | 4.1 | 8.2 | 0.00598 |
| 40 | -1 | 0.06 | -0.01746 | 4.1 | 4.1 | 8.2 | 0.00595 |
| 42 | -8 | -0.15 | -0.14054 | 4.1 | 4.1 | 8.2 | 0.00601 |
| 44 | -12 | -0.35 | -0.21256 | 4.2 | 4.1 | 8.3 | 0.00601 |
| 46 | -21 | -0.53 | -0.38386 | 4.4 | 4.4 | 8.8 | 0.00594 |
| 48 | -22 | -0.69 | -0.40403 | 4.4 | 4.4 | 8.8 | 0.00598 |
| 50 | -24 | -0.83 | -0.44523 | 4.4 | 4.4 | 8.8 | 0.00607 |
