---
id: solution-ocr-izho-2016-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2016_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2016-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Equilibrium in terms of potential energy ( $\mathbf { 1 0 . 0 }$ points)

## 1. Introduction (1.0 points)

1.1 [1.0 points] The change in the surface energy at the liquid-solid interface is found as

$$
\begin{equation*}
\Delta U _ { S } = - \left( \sigma _ { 2 } - \sigma _ { 1 } \right) \Delta S . \tag{1}
\end{equation*}
$$

Considering the small segment $\Delta l$ of the boundary of the drop one can write the condition of its balance

$$
\begin{equation*}
\left( \sigma _ { 2 } - \sigma _ { 1 } \right) \Delta l = \sigma _ { 0 } \Delta l \cos \theta . \tag{2}
\end{equation*}
$$

It follows from equations (1) and (2) that

$$
\begin{equation*}
\Delta U _ { s } = - \sigma _ { 0 } \cos \theta \Delta S . \tag{3}
\end{equation*}
$$

## 2. Water in a vertical cylindrical tube (2.0 points)

2.1 [0.5 points] The formula for the change in the surface energy of the system $\Delta U _ { s }$ that corresponds to an additional small rise of water level $\Delta h$ in the tube takes the form

$$
\begin{equation*}
\Delta U _ { S } = - \sigma _ { 0 } \cos \theta \cdot \Delta S = - \sigma _ { 0 } \cos \theta \cdot 2 \pi R \Delta h , \tag{4}
\end{equation*}
$$

where $\Delta S = 2 \pi R \Delta h$ is the change of the contact area between the liquid and the inner surface of the tube.
2.2 [0.5 points] The formula for the change in the potential energy $\Delta U _ { G }$ of the liquid in the gravitational field that corresponds to an additional small rise of water level $\Delta h$ in the tube takes the form

$$
\begin{equation*}
\Delta U _ { G } = \pi R ^ { 2 } \Delta h \rho g h . \tag{5}
\end{equation*}
$$

It is taken into account that the liquid of the mass $\Delta m = \pi R ^ { 2 } \Delta h \rho$
![](../../../figures/solution-ocr/b0d824a402f7da1f2dedc4bd.jpg)
has risen to the height $h$.


2.3 [1.0 points] If $\left| \Delta U _ { S } \right|$ exceeds $\Delta U _ { G }$, the energy of the system decreases when the liquid has risen, and hence the liquid will continue to rise, otherwise liquid level will go down. At the position of equilibrium, the total change in energy should be equal to zero, and, thus,

$$
\begin{equation*}
\sigma _ { 0 } \cos \theta \cdot 2 \pi R \Delta h = \pi R ^ { 2 } \Delta h \rho g h \Rightarrow h _ { 0 } = \frac { 2 \sigma _ { 0 } \cos \theta } { \rho g R } . \tag{6}
\end{equation*}
$$

Substitution of the numerical values leads to the following result

$$
\begin{equation*}
h _ { 0 } = \frac { 2 \sigma _ { 0 } \cos \theta } { \rho g R } = \frac { 2 \cdot 0,072 \cdot \cos 20 ^ { \circ } } { 1,0 \cdot 10 ^ { 3 } \cdot 9,8 \cdot 1,0 \cdot 10 ^ { - 3 } } = 1,4 \cdot 10 ^ { - 2 } \mathrm {~m} = 14 \mathrm {~mm} . \tag{7}
\end{equation*}
$$

## 3. Water in a vertical conical tube (4.0 points)

3.1 [0.5 points] The formula for the change in the surface energy of the system $\Delta U _ { S }$ that corresponds to an additional small rise of water level $\Delta h$ in the tube takes the form

$$
\begin{equation*}
\Delta U _ { S } = - \sigma _ { 0 } \cos \theta \cdot \Delta S = - \sigma _ { 0 } \cos \theta \cdot 2 \pi r \frac { \Delta h } { \cos \alpha } . \tag{8}
\end{equation*}
$$

Here $r = R - h \operatorname { tg } \alpha$ is the tube radius at the height $h$.
3.2 [0.5 points] The formula for the change in the potential energy $\Delta U _ { G }$ of the liquid in the gravitational field that corresponds to an additional small rise of water level $\Delta h$ in the tube takes the form

$$
\begin{equation*}
\Delta U _ { G } = \pi r ^ { 2 } \Delta h \rho g h . \tag{9}
\end{equation*}
$$

3.3 [1.0 points] As above, the equilibrium position corresponds to the equality of the modules for the energy changes written here as

$$
\begin{equation*}
\sigma _ { 0 } \cos \theta \cdot 2 \pi r \frac { \Delta h } { \cos \alpha } = \pi r ^ { 2 } \Delta h \rho g h , \tag{10}
\end{equation*}
$$

Substituting the expression for the radius of the tube at the height $h$, one gets the equation

$$
\begin{equation*}
\frac { 2 \sigma _ { 0 } \cos \theta } { R - h \operatorname { tg } \alpha } = \rho g h \cos \alpha , \tag{11}
\end{equation*}
$$

in which the parameter $h _ { 0 }$ is easily introduced as

$$
\begin{equation*}
\frac { 2 \sigma _ { 0 } \cos \theta } { \rho g R \left( 1 - \frac { h } { R } \operatorname { tg } \alpha \right) } = h \cos \alpha \Rightarrow \frac { h _ { 0 } } { 1 - \frac { h } { R } \operatorname { tg } \alpha } = h \cos \alpha , \tag{12}
\end{equation*}
$$

3.4 [1.0 points] The resulting equation is square with respect to $h$. Therefore it is necessary to analyze its roots, or condition of their absence. Let us rewrite equation (12) in the form

$$
\begin{equation*}
h _ { 0 } = h \cos \alpha \left( 1 - \frac { h } { R } \operatorname { tg } \alpha \right) . \tag{13}
\end{equation*}
$$

The quadratic function on the right side of this equation has zeros at $h = 0$ and $h = \frac { R } { \operatorname { tg } \alpha }$,, and therefore, it reaches its maximum value of $\frac { R } { 4 \operatorname { tg } \alpha } \cos \alpha$ at $h = \frac { R } { 2 \operatorname { tg } \alpha }$ - Consequently, equation (12) has no real roots at $h _ { 0 } > \frac { R } { 4 \operatorname { tg } \alpha } \cos \alpha$. Otherwise, there are two roots. At the given parameters of the tube $\frac { R } { 4 \operatorname { tg } \alpha } \cos \alpha = 25 m m$, so
![](../../../figures/solution-ocr/888a97897846911dc82b0550.jpg) there are two root corresponding to the two equilibrium positions. It is easy to show that the smaller


root gives a stable equilibrium position, and the larger one is unstable and their numerical values are evaluated as

$$
h = \frac { \cos \alpha \pm \sqrt { \cos ^ { 2 } \alpha - 4 \frac { h _ { 0 } } { R } \sin \alpha } } { 2 \frac { \sin \alpha } { R } } \Rightarrow h _ { 1 } = 16,5 \mathrm {~mm} , h _ { 2 } = 83,5 \mathrm {~mm}
$$

Thus, when $H < h _ { 2 }$ the water level in the tube stops at the height $h _ { 1 }$ and if the initial water level exceeds $h _ { 2 }$ the water fills up the tube completely.
3.5 [1.0 points] The water fills up the tube at any initial value of $H$, if equation (12) has no roots at all. This condition is fulfilled when

$$
\begin{equation*}
h _ { 0 } > \frac { R } { 4 \operatorname { tg } \alpha } \cos \alpha , \tag{14}
\end{equation*}
$$

or

$$
\sin \alpha > \frac { R } { 4 h _ { 0 } } = 0,018 .
$$

## 4. Outflow of water ( $\mathbf { 3 . 0 }$ points)

4.1 [3.0 points] The water will start to pour out through the hole only if the water surface in the openings lose stability. This happens if the decrease of the potential energy in the gravitational field exceeds the increase in the absolute value of the surface energy. This condition is expressed by the inequality

$$
\begin{equation*}
2 \sigma _ { 0 } \pi h ^ { 2 } < 2 \frac { \pi R ^ { 2 } h ^ { 2 } } { 6 } \rho g , \tag{15}
\end{equation*}
$$

from which it follows that

$$
\begin{equation*}
R > \sqrt { \frac { 6 \sigma _ { 0 } } { \rho g } } = 6,6 \mathrm {~mm} \tag{16}
\end{equation*}
$$
