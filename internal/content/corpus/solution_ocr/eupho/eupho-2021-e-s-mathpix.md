---
id: solution-ocr-eupho-2021-e-s
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2021_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2021-E1, eupho-2021-E2]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## E1: Hidden wire

## Theoretical background

As shown in Fig. 1, the horizontal projection $\vec { B } _ { \mathrm { h } }$ of the magnetic induction $\vec { B } _ { \mathrm { w } }$ of the wire has the same direction and is perpendicular to the wire in all points of the $x y$ plane. It is clear that $\vec { B } _ { \mathrm { h } }$ makes with North $( y )$ direction an angle $\psi = 180 ^ { \circ } - \theta$, where $\theta$ is the angle between the direction of the current and the positive $x$-direction. The magnetic needle points along the vector $\vec { B } = \vec { B } _ { \mathrm { h } } + \vec { B } _ { \mathrm { E } }$ of the total magnetic induction. As evident from the vector triangle on Fig. 1(a), the deflection angle $\varphi$ can be obtained through the sine-theorem:

$$
\begin{equation*}
\frac { B _ { \mathrm { h } } } { B _ { \mathrm { E } } } = \frac { \sin \varphi } { \sin ( \psi - \varphi ) } = \frac { \sin \varphi } { \sin ( \theta + \varphi ) } \tag{1}
\end{equation*}
$$

Consider a point on the surface at a distance $d$ from the wire projection onto $x y$ plane, and at a distance $r =$ $\sqrt { d ^ { 2 } + h ^ { 2 } }$ from the wire, as shown in Fig. 1(b). It follows from the Ampère's law that the magnitude of magnetic induction of the wire at that point is

$$
\begin{equation*}
B _ { \mathrm { w } } = \frac { \mu _ { 0 } I } { 2 \pi r } \tag{2}
\end{equation*}
$$

and the magnitude of its horizontal projection is

$$
\begin{equation*}
B _ { \mathrm { h } } = B _ { \mathrm { w } } \cos \alpha = \frac { \mu _ { 0 } I h } { 2 \pi \left( d ^ { 2 } + h ^ { 2 } \right) } . \tag{3}
\end{equation*}
$$

Equations (1) and (3) are sufficient to complete all tasks of the problem.

Figure 1: Notations used in the derivation of the basic equations.
![](../../../figures/solution-ocr/f73aca6a90dadfd19e75ebcd.jpg)

## Task (a): Determination of the horizontal position of the wire

As evident from the vector triangle (Fig. 1), the maximum absolute value of the deflection angle at a given current is met at $d = 0$ where $B _ { \mathrm { h } }$ is maximal, i.e. vertically above the wire. Therefore, the wire can be tracked by finding two or more points on the surface where $| \varphi |$ reaches a maximum. First, a coarse scan of the border with a step of, say, 10 mm, can be performed in order to locate intervals, where $| \varphi |$ goes through a maximum. In this way we establish that the wire projection crosses the West side $( x = 0 \mathrm {~mm} )$ at $y \in [ 60 \mathrm {~mm} , 90 \mathrm {~mm} ]$ and the East side $( x = 100 \mathrm {~mm} )$ at $y \in [ 10 \mathrm {~mm} , 30 \mathrm {~mm} ]$. A finer scan of

Table 1: Points, where $| \varphi |$ reaches a maximum of 143° at a current $I = + 5 \mathrm {~A}$.
| $x$ (mm) | $y ( \mathrm {~mm} )$ |
| :--- | :--- |
| 0 | 75 |
| 20 | 64 |
| 40 | 52 |
| 60 | 41 |
| 80 | 29 |
| 100 | 17 |


these intervals with a step of 1 mm allows to determine the approximate coordinates of the two crosspoints as $P _ { 1 } = ( 0.0 \pm 0.5,75 \pm 1 ) \mathrm { mm }$ and $P _ { 2 } = ( 100.0 \pm 0.5,17 \pm 1 ) \mathrm { mm }$. The uncertainty of the $y$ coordinate is 1 mm since near the maximum $| \varphi |$ changes slowly and takes the same rounded value at three consecutive points. Additional scans along vertical (horizontal) lines of intermediate $x$ (y) values could be done in order to find more points along the wire projection, and to determine the equation of the wire more precisely by means of a least-squares fit. A typical set of values is given in Table 1. The fitted equation of the wire is, respectively

$$
\begin{equation*}
y = a x + b = - 0.58 x + 75.3 \mathrm {~mm} \tag{4}
\end{equation*}
$$

with estimated parameter uncertainties of $\delta a \approx 0.01$ and $\delta b \approx 0.4 \mathrm {~mm}$. The parameter uncertainties scale as $1 / \sqrt { N }$, where $N$ is the number of experimental points. A graph of the wire projection in the $x y$-plane is shown in Fig. 2. Since $\varphi < 0$ at $I > 0$, the positive $I$ direction is from the West to the East border, as shown in the graph.

Figure 2: $x y$-projection of the wire with indicated positive $I$ direction.
![](../../../figures/solution-ocr/82072c44fe05e1bd65a01770.jpg)

## Task (b): Determination of $h$ and $B _ { \mathrm { E } }$

As follows from equations (1) and (3), the deflection angle $\varphi$ at a distance $d$ from the horizontal projection of the wire satisfies the equation

$$
\begin{equation*}
\frac { \sin \varphi } { \sin ( \theta + \varphi ) } = \frac { \mu _ { 0 } I h } { 2 \pi B _ { \mathrm { E } } \left( d ^ { 2 } + h ^ { 2 } \right) } . \tag{5}
\end{equation*}
$$

where the angle $\theta$ can be calculated from the slope coefficient $a$ of the wire:

$$
\begin{equation*}
\theta = \arctan ( a ) = - 30.1 ^ { \circ } \pm 0.4 ^ { \circ } \tag{6}
\end{equation*}
$$


Table 2: Experimental data for the deflection angle $\varphi$ vs. current $I$ at two different distances $d$.
| (0 mm,75 mm); |  |  | (20 mm,75 mm); |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $d _ { 1 } = 0 \mathrm {~mm}$ |  |  | $d _ { 2 } = 10 \mathrm {~mm}$ |  |  |
| $I$ (A) | $\varphi$ (deg) | $U$ | $I$ (A) | $\varphi$ (deg) | $U$ |
| -5.0 | 25 | -4.85 | -5.0 | 15 | -1.00 |
| -4.0 | 24 | -3.89 | -4.0 | 13 | -0.77 |
| -3.0 | 23 | -3.21 | -3.0 | 11 | -0.59 |
| -2.0 | 20 | -1.97 | -2.0 | 8 | -0.37 |
| -1.0 | 15 | -1.00 | -1.0 | 5 | -0.21 |
| 1.0 | -75 | 1.00 | 1.0 | -7 | 0.20 |
| 2.0 | -126 | 1.99 | 2.0 | -17 | 0.40 |
| 3.0 | -137 | 3.03 | 3.0 | -32 | 0.60 |
| 4.0 | -141 | 4.02 | 4.0 | -52 | 0.80 |
| 5.0 | -143 | 4.94 | 5.0 | -75 | 1.00 |
| $k _ { 1 } = 1.01 \pm 0.01 \mathrm {~A}$ |  |  | $k _ { 2 } = 5.04 \pm 0.03 \mathrm {~A}$ |  |  |


The distance $d$ between a point with coordinates $( x , y )$ and the wire projection can either be measured directly on the graph in Fig. 2, or calculated as:

$$
\begin{equation*}
d = | ( a x + b - y ) \cos \theta | \approx 0.865 | a x + b - y | \tag{7}
\end{equation*}
$$

It follows from equations (5)-(7) that the unknown $h$ and $B _ { \mathrm { E } }$ could be determined if the deflection angle $\varphi$ is measured in at least two points situated at different distances from the wire. However, due to the random error, associated with compass positioning and the rounding error of the angle reading, such a minimalist approach is quite inaccurate. Therefore, systematic measurements at several distances $d$ and/or different currents $I$, are necessary to obtain sufficiently precise estimate for $h$ and $B _ { \mathrm { E } }$. Two generic approaches could be followed, as well as a combination between them.

Method I. Varying the current at fixed distances. By defining a new dimensionless variable $U = \sin \varphi / \sin \left( \varphi - 30.1 ^ { \circ } \right)$, equation (5) is linearized as:

$$
\begin{equation*}
I = k U \tag{8}
\end{equation*}
$$

where the slope coefficient is:

$$
\begin{equation*}
k = \frac { 2 \pi B _ { \mathrm { E } } \left( d ^ { 2 } + h ^ { 2 } \right) } { \mu _ { 0 } h } \tag{9}
\end{equation*}
$$

Therefore, the unknown $B _ { \mathrm { E } }$ and $h$ can be estimated after obtaining $k$ for at least two different distances $d$ from the wire. Table 2 summarizes the results of measurements at $d _ { 1 } = 0 \mathrm {~mm}$ (vertically above the wire) and at $d _ { 2 } = 10 \mathrm {~mm}$ in a point with coordinates $x = 20 \mathrm {~mm}$ and $y = 75 \mathrm {~mm}$. Figure 3 shows the corresponding U-I graphs, and the estimated values of the slope coefficients are also listed in the table 2.

It follows from equation (8) that:

$$
\begin{equation*}
\frac { B _ { \mathrm { E } } } { h } = \frac { \mu _ { 0 } \left( k _ { 2 } - k _ { 1 } \right) } { 2 \pi \left( d _ { 2 } ^ { 2 } - d _ { 1 } ^ { 2 } \right) } = 8.06 \times 10 ^ { - 6 } \mathrm {~T} / \mathrm { mm } \tag{10}
\end{equation*}
$$

and

$$
\begin{equation*}
B _ { \mathrm { E } } h = \frac { \mu _ { 0 } \left( d _ { 2 } ^ { 2 } k _ { 1 } - d _ { 1 } ^ { 2 } k _ { 2 } \right) } { 2 \pi \left( d _ { 2 } ^ { 2 } - d _ { 1 } ^ { 2 } \right) } = 1.98 \times 10 ^ { - 4 } \mathrm {~T} \cdot \mathrm {~mm} \tag{11}
\end{equation*}
$$

Figure 3: U-I graphs for two different distances $d$ from the wire, and the corresponding linear fits.
![](../../../figures/solution-ocr/c948ac772677e1db928fafe8.jpg)

Alternatively, one can also use

$$
\begin{equation*}
h = \sqrt { \frac { d _ { 2 } ^ { 2 } k _ { 1 } - d _ { 1 } ^ { 2 } k _ { 2 } } { k _ { 2 } - k _ { 1 } } } = 5.0 \mathrm {~mm} . \tag{12}
\end{equation*}
$$

Finally, we obtain for the horizontal component of the Earth's magnetic induction:

$$
\begin{equation*}
B _ { \mathrm { E } } = 4.0 \times 10 ^ { - 5 } \mathrm {~T} \tag{13}
\end{equation*}
$$

and for the depth of the wire:

$$
\begin{equation*}
h = 5.0 \mathrm {~mm} \tag{14}
\end{equation*}
$$

These estimates of $h$ and $B _ { \mathrm { E } }$ coincide with accuracy of two significant digits with the values preset in the simulation program.

Method II. Fixed current, varying the distance. Equation (5) can be rewritten in the form:

$$
\begin{equation*}
\frac { \sin ( \theta + \varphi ) } { \sin \varphi } = \frac { 2 \pi B _ { \mathrm { E } } } { \mu _ { 0 } I h } d ^ { 2 } + \frac { 2 \pi B _ { \mathrm { E } } h } { \mu _ { 0 } I } \tag{15}
\end{equation*}
$$

which can be linearized by setting new auxiliary variables: $U = d ^ { 2 }$ and $V = \sin \left( \varphi - 30.1 ^ { \circ } \right) / \sin \varphi$. A typical data set for this method is given in table 3, while the linearized U-V plot is shown in Fig. 4.

Table 3: Experimental data for the deflection angle $\varphi$ vs. distance $d$ at a fixed current $I = 5.0 \mathrm {~A}$.
| $x$ (mm) | $y$ (mm) | $d$ (mm) | $\varphi$ (deg) | $U \left( \mathrm {~mm} ^ { 2 } \right)$ | $V$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 75 | 0 | -143 | 0 | 0.203 |
| 2 | 75 | 1 | -142 | 1 | 0.226 |
| 4 | 75 | 2 | -142 | 4 | 0.226 |
| 6 | 75 | 3 | -139 | 9 | 0.291 |
| 8 | 75 | 4 | -138 | 16 | 0.311 |
| 10 | 75 | 5 | -132 | 25 | 0.416 |
| 12 | 75 | 6 | -128 | 36 | 0.475 |
| 14 | 75 | 7 | -123 | 49 | 0.541 |
| 16 | 75 | 8 | -111 | 64 | 0.674 |
| 18 | 75 | 9 | -98 | 81 | 0.796 |
| 20 | 75 | 10 | -79 | 100 | 0.963 |


Figure 4: U-V graph obtained at a fixed current $I = 5.0 \mathrm {~A}$.
![](../../../figures/solution-ocr/6da6756ef5fda4c0a5fc7c06.jpg)

From the fitting line we obtain:

$$
\begin{equation*}
V = 7.37 \times 10 ^ { - 3 } \mathrm {~mm} ^ { - 2 } U + 0.208 \tag{16}
\end{equation*}
$$

which means $2 \pi B _ { \mathrm { E } } h / \left( \mu _ { 0 } I \right) = 0.208$ and $2 \pi B _ { \mathrm { E } } / \left( \mu _ { 0 } I h \right) =$ $7.37 \times 10 ^ { - 3 } \mathrm {~mm} ^ { - 2 }$. Thus, we obtain:

$$
\begin{equation*}
B _ { \mathrm { E } } = 3.9 \times 10 ^ { - 5 } \mathrm {~T} \tag{17}
\end{equation*}
$$

for the horizontal component of Earth's magnetic induction, and

$$
\begin{equation*}
h = 5.3 \mathrm {~mm} \tag{18}
\end{equation*}
$$

for the depth of the wire. These estimates are close to, but less accurate than the values obtained by Method I. The reason is that at small $d$, there is a large relative error associated with wire positioning, i.e. with variable $U$. At large $d$, however, the deflection angle is small, and there is significant relative error, associated with the compass reading, i.e. with $V$ parameter.

## Marking scheme

The basic equations could be stated in a separate section of the solution, or spread over different parts of the solution.

| Theoretical background |  | Points |
| :--- | :--- | :--- |
| T1 | States explicitly or shows on a clear graph that the magnetic needle points along the total magnetic induction. | 0.1 |
| T2 | Derives eq. (1) or equivalent. | 0.3 |
| T3 | Writes down the Ampere's law (2). | 0.2 |
| T4 | Derives eq. (3) or equivalent. | 0.4 |
| Total on Theory |  | 1.0 |

In tasks A and B points for obtaining final results are given on an additive basis. If a given quantity, say $a$ parameter of the line, falls into the widest interval, a minimum number of points is given. If the value, however, belongs to the subsequent narrower interval, annotated points are added to the points for the previous interval, and so on, down to the narrowest interval.

| Task A: Horizontal position of the wire |  | Points |
| :--- | :--- | :--- |
| A1 | State or use that the wire is located where $\| \varphi \|$ is maximal. | 0.2 |
|  | (state alternative method which allows to find only $a$ ); | (0.1) |
| A2 | Find points on the wire at most 2mm away from both cross points with the border. | 0.2 |
| A3 | Find $n$ points along the wire projection: |  |
|  | $n = 3$ or 4 ; | 0.3 |
|  | $n \geq 5$. | 0.5 |
| A4 | Draw wire projection on the graph: plot all measured points or at least | 0.2 |
|  | 5; |  |
|  | if a point drawn incorrectly; | -0.1 |
|  | line through the points; | 0.2 |
|  | axes labels and units; | 0.1 |
|  | axes tick marks with values; | 0.1 |
|  | correctly indicated positive $I$ direction. | 0.3 |
| A5 | Equation of the line: |  |
|  | $a$ within [-0.61;-0.55]; | 0.1 |
|  | $a$ within [-0.60;-0.56]; | +0.1 |
|  | $a$ within [-0.59;-0.57]; | +0.3 |
|  | $b$ within [73.6;77.0] mm; | 0.1 |
|  | $b$ within [74.6;76.0] mm; | +0.1 |
|  | $b$ within [74.9;75.7] mm . | +0.3 |
|  | Correctly estimated uncertainties of $a$ and $b$. | 0.2 |
| Total on Task A |  | 3.0 |

Since there are several approaches to the solution of Task B, the subsequent marking scheme is unified in order to fit all methods of solution. The data point is defined as a single measurement of $\varphi$ at given $I , x$, and $y$. The data point weight $W$ is defined as a mark related to the way, in which the measured data are presented and treated numerically:

| $I , x , y$, and the corresponding $\varphi$ are documented in a table with appropriate number of digits. | 0.1 |
| :--- | :--- |
| The value of the distance $d$ to the wire, and the values of the auxiliary linearizing variables (if required by the solution) are calculated correctly and documented in the table. | 0.1 |
| Maximum $W$ | 0.2 |

The total mark for data recording and treatment (B2, see the table below) scales linearly with the number of data points $N$ for up to $N = 8$. All data points after 8-th do not contribute to the total mark on B2. Data points measured in part A only count towards the mark of B2 if it is stated in part B that they can be used for this part as well, or if they are used implicitly.


| Task B: Finding $B _ { \mathrm { E } }$ and $h$ |  | Points |
| :--- | :--- | :--- |
| B1 | Makes appropriate choice of auxiliary variables, which linearize eq. (3) OR derives explicit expressions for $B _ { \mathrm { E } }$ and $h$ in terms of two measured angles $\varphi$ at two different distances $d$ (minimalist approach). | 0.6 |
| B2 | Data recording and treatment: $\min ( N , 8 ) \times W$ | 1.6 |
| B3 | Organization of data in table(s): |  |
|  | Column titles | 0.2 |
|  | Units | 0.2 |
| B4 | Extracting parameters |  |
|  | Graphical method: |  |
|  | For plotting $n$ points $m = \min ( n , 8 )$ | $0.1 m$ |
|  | Coverage of at least 75\% of the graph window | 0.2 |
|  | Titles on axes | 0.2 |
|  | Units on axes | 0.2 |
|  | Tick marks with annotated values | 0.2 |
|  | Fitting line(s) is (are) drawn on the graph(s) | 0.5 |
|  | Fitting line parameters are extracted and explicitly stated | 0.5 |
|  | Linear regression without graph: using $n$ points $m = \min ( n , 8 )$ | 0.1m |
|  | correct fit | 1.8 |
|  | Averaging over $n$ two-point measurements: $m = \min ( n , 13 )$ | $0.2 m$ |
|  | Final values of $B _ { \mathrm { E } }$ and $h$ are calculated from the line parameters or calculated from the results of a twopoint measurement (minimalist approach): |  |
|  | $B _ { \mathrm { E } } \in [ 3.7 ; 4.3 ] \times 10 ^ { - 5 } \mathrm {~T}$ | 0.1 |
|  | $B _ { \mathrm { E } } \in [ 3.8 ; 4.2 ] \times 10 ^ { - 5 } \mathrm {~T}$ | +0.1 |
|  | $B _ { \mathrm { E } } \in [ 3.9 ; 4.1 ] \times 10 ^ { - 5 } \mathrm {~T}$ | +0.2 |
|  | $h \in [ 4.5 ; 5.5 ] \mathrm { mm }$ | 0.1 |
|  | $h \in [ 4.7 ; 5.3 ] \mathrm { mm }$ | +0.1 |
|  | $h \in [ 4.9 ; 5.1 ] \mathrm { mm }$ | +0.2 |
| Total on Task B |  | 6.0 |

e

## E2: Hot Cylinder

Start the experiment with the heater on full for 300 Watts and the thermostats located evenly across the length of the rod and display the results every 100 seconds. Then plan out the remainder of the experiment while waiting, or do the other experiment. The rod reaches steady state at about 600 seconds. Find the average temperature at the five thermostats by considering the last five measurements; you will use this later.

The most accessible approach is then to study the steady state behavior, the uniform temperature behavior, the low temperature behavior, and the high temperature behavior. Separating the low and high temperature behaviors is useful because blackbody radiation dominates at higher temperatures while convective loss is most significant at near room temperature.

Finding the heat capacity is done by heating the rod at a low enough rate for a short enough time so that heat loss is as small as possible.

One possibility is to give a total of 1500 J of heat, but at various power settings and various times, while keeping the temperature as low as possible.

The average temperature of the rod is computed from the five equally spaced points by applying Simpson's rule,

$$
T _ { a v g } = \frac { T _ { 1 } + 4 T _ { 2 } + 2 T _ { 3 } + 4 T _ { 4 } + T _ { 5 } } { 12 }
$$

Computing instead a direct average yields a +5\% error.
It is found that the average temperature for heating times less than 50 seconds is $55.4 \pm 0.5 ^ { \circ } \mathrm { C }$, yielding specific heat capacity of $c = 114 \pm 1 \mathrm {~J} / \mathrm { kg }$ K.

Heat the rod full power for 600 seconds, and then allow to cool.

The rod temperature becomes uniform at about 700 seconds. Average the five points to obtain an average rod temperature.

Linear cooling predicts a straight line graph for $\ln \left( T - T _ { 0 } \right)$ versus $t$

The convective heat loss rate is then given by $A \alpha ( T -$ $T _ { 0 }$ ), where $A$ is the surface area of the rod. Do not forget the end caps!

The radiative heat loss rate is $\beta \sigma \left( T ^ { 4 } - T _ { 0 } ^ { 4 } \right)$ where $\sigma =$ $5.67 \times 10 ^ { - 8 } \mathrm {~W} / \left( \mathrm { m } ^ { 2 } \mathrm {~K} ^ { 4 } \right)$. The radiative heat loss rate is then given by $A \beta \sigma \left( T ^ { 4 } - T _ { 0 } ^ { 4 } \right)$.

Note that at temperatures close to $T _ { 0 }$ the radiative expression can be written as

$$
A \beta \sigma \left( T ^ { 4 } - T _ { 0 } ^ { 4 } \right) \approx A \beta \sigma 4 \left( T - T _ { 0 } \right) T _ { 0 } ^ { 3 }
$$

This means that the linear heat loss rate at temperatures close to $T _ { 0 }$ is

$$
A \left( \alpha + \beta \sigma 4 T _ { 0 } ^ { 3 } \right) \left( T - T _ { 0 } \right)
$$

For the uniform, low temperature cooling rod,

$$
m c \frac { \mathrm {~d} T } { \mathrm {~d} t } = - A \left( \alpha + \beta \sigma 4 T _ { 0 } ^ { 3 } \right) \left( T - T _ { 0 } \right)
$$


The solution is of the form

$$
T - T _ { 0 } = C e ^ { - B t }
$$

where

$$
B = A \frac { \alpha + \beta \sigma 4 T _ { 0 } ^ { 3 } } { m c }
$$

On a log plot of $\ln \left( T - T _ { 0 } \right)$ as a function of time $t$, the plot should be linear, with a slope given by

$$
- A \frac { \alpha + \beta \sigma 4 T _ { 0 } ^ { 3 } } { m c }
$$

It is also possible to plot $\mathrm { d } T / \mathrm { d } t$ as a function of $T - T _ { 0 }$, and the plot will be linear, with a slope also given by

$$
- A \frac { \alpha + \beta \sigma 4 T _ { 0 } ^ { 3 } } { m c }
$$

The slope in either case is found to be $- 1.78 \times 10 ^ { - 3 } / \mathrm { s }$.

Uniform Cooling
![](../../../figures/solution-ocr/784e46c4a262c5d1ded7f962.jpg)

Note that only the last points (in red) were used to determine the linear cooling line. It is clearly a good fit from $t = 2000 \mathrm {~s}$ on, which corresponds to rod temperatures of $T < 45 \mathrm { C }$.

To find the blackbody behavior we want to heat the rod as much as possible such that the blackbody heating becomes the dominant form of heat loss. Since the hot rod is in steady state, the heat radiated must be equal to 300 W. Use the results from the beginning.

The average temperature of the rod is computed from the five equally spaced points by

$$
T _ { a v g } = \frac { T _ { 1 } + 4 T _ { 2 } + 2 T _ { 3 } + 4 T _ { 4 } + T _ { 5 } } { 12 } = 662 ^ { \circ } \mathrm { C } .
$$

Computing a direct average yields a +1.5\% error.
The average of $T ^ { 4 }$ is found from

$$
T _ { \mathrm { avg } } ^ { 4 } = \frac { T _ { 1 } { } ^ { 4 } + 4 T _ { 2 } { } ^ { 4 } + 2 T _ { 3 } { } ^ { 4 } + 4 T _ { 4 } { } ^ { 4 } + T _ { 5 } { } ^ { 4 } } { 12 } = 7.95 \times 10 ^ { 11 } \mathrm {~K} ^ { 4 }
$$

Computing a direct average yields a +6.3\% error.
The rate of linear temperature heat loss is found from above to be

$$
\left( - 1.78 \times 10 ^ { - 3 } / \mathrm { s } \right) m c \Delta T = 59 \mathrm {~W}
$$

The blackbody remainder term is then

$$
300 - 59 = 241 \mathrm {~W} ,
$$

and necessarily equals

$$
A \beta \sigma \left( T ^ { 4 } - T _ { 0 } ^ { 4 } \right) - A \beta \sigma 4 T _ { 0 } ^ { 3 } \left( T - T _ { 0 } \right) ,
$$

where the second term reflects the fact that we had considered part of the blackbody behavior as being linear.

Solving, $\beta = 0.304 \pm 0.004$.
Failing to subtract the second term would yield $\beta =$ 0.28.

We are now in a position to find $\alpha$, from

$$
- A \frac { \alpha + \beta \sigma 4 T _ { 0 } ^ { 3 } } { m c } = - 1.78 \times 10 ^ { - 3 } / \mathrm { s }
$$

which yields $\alpha = 2.93$
Alternatively, for the uniform, high temperature cooling rod,

$$
m c \frac { \mathrm {~d} T } { \mathrm {~d} t } \approx - A \beta \sigma \left( T ^ { 4 } - T _ { 0 } ^ { 4 } \right)
$$

as the radiative cooling effect will dominate.
On a plot of $\mathrm { d } T / \mathrm { d } t$ as a function of $T ^ { 4 } - T _ { 0 } ^ { 4 }$, the plot should be linear, with a slope given by

$$
- \frac { A \beta \sigma } { m c }
$$

The slope is found to be $- 7.8 \times 10 ^ { - 12 } \mathrm {~K} ^ { 3 } / \mathrm { s }$
This means $\beta / c = 3.25 \times 10 ^ { - 3 } \mathrm {~kg} \mathrm {~K} / \mathrm { J }$; this gives $\beta = 0.36$, which is too high; ignoring the linear loss effects was significant; as was previously seen, almost 20\% of the heat loss is from convection in this temperature range.

We can use the high temperature behavior to find the heat flux through the center of the rod. The average of $T$ and $T ^ { 4 }$ on the non-heated half of the rod is 599 C and $5.8 \times 10 ^ { 4 } \mathrm {~K} ^ { 4 }$, yielding a heat loss at 112 W. That heat necessarily came from the other side of the rod.

The temperature gradient is -898 K/m, so $k =$ 397 W/mK. Don't forget that the formula provided gave the rate of heat flux, which means that we needed to consider the cross sectional area of the wire.

## Marking scheme

Finding $c , 2.5$ pt total
|  | Task | Pts |
| :--- | :--- | :--- |
| 2.1 | Idea of heating the rod by a fixed $Q$. | 0.6 |
| 2.2 | Obtaining an equation relating the inserted heat with the temperature change and $c$. | 0.4 |
| 2.2 | Heating the rod for a short duration for mitigating the effects of heat loss: heating for less than 60 seconds. | 0.2 |
| 2.3 | Averaging the temperature of the rod: averaging over one to three points; | 0.1 |
|  | Use Simpson rule (or equivalent) | 0.3 |
|  | averaging over four or more points; | 0.2 |
| 2.4 | Checking more than one time value | 0.2 |
| 2.5 | Numerical value of $c$ : c within [103;123] J/(K kg); | 0.3 |
|  | $c$ within [108;118] J/(K kg). | 0.2 |


Finding the linear heat loss, 2.0 pt total
|  | Task | Pts |
| :--- | :--- | :--- |
| 3.1 | Idea of looking at how the rod cools down at the low temperature limit (with no heating). | 0.2 |
| 3.2 | Obtaining an equation for $T$ as a function of $t$ in terms of $\alpha , \beta$, and $c$ : |  |
|  | linearize radiative loss around $T _ { 0 }$; | 0.3 |
|  | obtaining a differential equation for $T ( t )$; | 0.1 |
|  | solving the differential equation to get $T ( t )$. | 0.2 |
| 3.3 | Finding the average temperature at $t$ : averaging over one to three points; | 0.1 |
|  | Use Simpson rule (or equivalent) | 0.3 |
|  | averaging over four or more points; | 0.1 |
| 3.4 | Graphically finding the slope (which is a function of $\alpha , \beta$, and $c$ ): |  |
|  | Plot 2 to 4 points in range $T < 50 \mathrm { C }$; | 0.1 |
|  | Plotting 5 or more points in range $T < 50 \mathrm { C }$; | 0.1 |
|  | axes labels and units; | 0.1 |
|  | axes tickmarks with values. | 0.1 |
| 3.5 | Numerical value of the slope: |  |
|  | slope within $\left[ - 1.58 \times 10 ^ { - 3 } , - 1.98 \times 10 ^ { - 3 } \right]$; | 0.2 |
|  | slope within $\left[ - 1.68 \times 10 ^ { - 3 } , - 1.88 \times 10 ^ { - 3 } \right]$; | 0.1 |


Finding $\beta$, 2.5 pt total
|  | Task | Pts |
| :--- | :--- | :--- |
| 4.1 | Idea of looking at the steady state at the high temperature limit. | 0.2 |
| 4.2 | Writing down the heat balance: accounting for the area of the end caps; accounting for the linear contribution to the heat loss by removing the $\alpha$ dependence from the previously found slope; final expression for $\beta$ in terms of mean value of $T$ and $T ^ { 4 }$ of the steady state. Making a mistake in the previous parts shouldn't be penalised here. | 0.1 0.2 0.2 |
| 4.3 | Measurements: Heating power sufficiently big such that the steady state temperature is bigger than 500 °C; Waiting for at least 300s to reach the steady state Waiting for at least 600s to reach the steady state | 0.1 0.1 0.1 |
| 4.4 | Finding the average temperature: averaging over one to three points; Use Simpson rule (or equivalent) averaging over four or more points; | 0.1 0.3 0.1 |
| 4.5 | Finding the average $T ^ { 4 }$ (for calculating average radiative loss): averaging over one to three points; Use Simpson rule (or equivalent) averaging over four or more points; | 0.1 0.3 0.1 |
| 4.6 | Numerical value of $\beta$ : $\beta$ within [0.25;0.35]; $\beta$ within [0.28;0.32]. | 0.3 0.2 |


Finding $k$, 2.5 pt total
|  | Task | Pts |
| :--- | :--- | :--- |
| 6.1 | Idea of looking at the flux from part of the rod to the other | 0.4 |
| 6.2 | Theory: Expressing heat flux in terms of $k$ and the temperature gradient; | 0.2 |
|  | Expressing heat flux in terms of the average $T , T ^ { 4 }$, and the heating power of one of the halves of the rod; accounting for the area of the end caps. | 0.4 |
| 6.3 | Finding the average temperature of one of the halves: |  |
|  | averaging over one to three points; | 0.1 |
|  | averaging over four or more points. No marks if points not equally spaced and average doesn't account for the unevenness; | 0.1 |
| 6.4 | Finding the average $T ^ { 4 }$ (for calculating average radiative loss): |  |
|  | averaging over one to three points; | 0.1 |
|  | averaging over four or more points; | 0.1 |
| 6.5 | Finding the temperature gradient: Using at least two points for the gradient calculation; | 0.1 |
|  | Using $( f ( x + h ) - f ( x - h ) ) / 2 h$ for numerical derivative; | 0.2 |
|  | Having the range of points used for gradient calculations not farther apart than 5 cm; | 0.1 |
|  | Having the range of points used for gradient calculations not closer than 1 cm; | 0.1 |
| 6.5 | Numerical value of $k$ : |  |
|  | $k$ within [328;488]W/(m K); | 0.3 |
|  | $k$ within [378;438]W/(m K). | 0.2 |


Some grading notes:

- Failure to record and report the location of the sensors will result in a penalty of -1.0 pt for each occurrence!. It is acceptable to clearly state the location of the sensors in one part of the report, and then mentioning that they are not moved during the experiment.
- When computing spatial averages, if the spacing between thermometers is not uniform, the averaging techniques must use appropriate weighting, or there is a penalty of -0.1 pt for each occurrence!
- When computing spatial averages, if the rod is not mostly uniform in temperature, a Simpson's Rule technique or equivalent must be used to obtain the 0.3 pts. If instead all of the temperatures are within two error limits, then Simpson is not required to obtain the 0.3 pt.
- Any numerical derivatives must use the symmetric form
$$
f ^ { \prime } ( x ) \approx ( f ( x + h ) - f ( x - h ) ) / 2 h
$$
or some equivalent, or better, method.

Finding $\alpha$, 0.5 pt total
|  | Task | Pts |
| :--- | :--- | :--- |
| 5.1 | Obtaining an expression for $\alpha$ in terms of the slope $\gamma$. | 0.1 |
| 5.2 | Numerical value of $\alpha$ : | 0.2 |
|  |  |  |
|  | $\alpha$ within [2.53;3.03]W/(m² K). | 0.2 |
