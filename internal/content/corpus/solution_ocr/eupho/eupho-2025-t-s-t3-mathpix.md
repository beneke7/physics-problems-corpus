---
id: solution-ocr-eupho-2025-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2025_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2025-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T3: Crossed Wires (10 pts)

Part a) In the absence of an externally imposed magnetic field, an infinite, straight, thin wire creates a magnetic field whose field lines are closed circular loops. These loops lie in the plane perpendicular to the wire and are centered on the wire (red circle in the figure).
Now, consider the effect of introducing the externally imposed magnetic field. At any point, the total magnetic field is the vector sum of the magnetic field of the wire and the externally imposed magnetic field. The total magnetic field now has a component parallel to the wire. This means the magnetic field lines do not remain in a plane perpendicular to the wire. They do not form closed loops any more. Instead, they will spiral around the wire, tracing out a helix (blue curve in the figure).
![](../../../figures/solution-ocr/9500281833b3a29faaaf27e3.jpg)

Part b) It is a standard result that the magnetic field around an infinite, straight, thin wire carrying a current $I$ has magnitude $\mu _ { 0 } I / 2 \pi \rho$, where $\rho$ is the perpendicular distance to the wire. This magnetic field strength increases as $r$ decreases. Before considering the wire configuration of part b, it will be useful to discuss what happens in part a if the helical field line is very close to the wire. By 'close', we mean values of $\rho$ small enough that the magnetic field of the wire is much greater than the externally applied magnetic field. Then, the field lines cannot deviate much from the circular loops they would trace out if the externally applied field were not present. This means the helix would be wound very tightly.
Now we move on to discuss the wire configuration of part b. Let the magnetic field due to wire $X$ be $\vec { B } _ { X }$ and the magnetic field due to wire $Y$ be $\vec { B } _ { Y }$. At any point in space, the magnetic field is the vector sum of $\vec { B } _ { X }$ and $\vec { B } _ { Y }$. At points that are close to wire $X$ (distances $\rho \ll a$ ), we have $\left| \vec { B } _ { X } \right| \gg \left| \vec { B } _ { Y } \right|$. Therefore, as in part a, the field lines near wire $X$ will not deviate very much from circular loops centered on wire $X$. However, $\vec { B } _ { Y }$ has a component along wire $X$, so the field lines do not perfectly close on themselves. Instead, they will trace out a tightly wound spiral around wire $X$, as shown in the figure for the previous part. Unlike there, the spiral is not necessarily a perfect helix: as the field lines spiral to larger or smaller $x$, the radius $\rho ( x )$ of the spiral might change. To find the distance of closest approach of a field line to wire $X$, we must find the minimal value of $\rho ( x )$ as $x$ varies.
The spiraling field line shown in the figure below seems to trace out a surface, $S$, surrounding wire $X$. A more precise definition of $S$ is as follows. Let $C$ be the circle of radius $r$, centered on wire $X$, in the plane $x = 3 a$. Through every point on $C$, we can draw a magnetic field line. The set of field lines passing through points of $C$ traces out a surface; this is the surface we define as $S$. Each field line in this set spirals around wire $X$ as described above, so $S$ looks like a 'funnel' whose cross section, at any fixed $x$, is nearly circular. The cross section is nearly circular as long as the condition $\rho \ll \sqrt { a ^ { 2 } + x ^ { 2 } }$ is satisfied, because this means the magnetic field is perturbed only slightly by wire $Y$ and the field lines do not deviate much from the circular loops that they would trace if wire $Y$ were not present. Near point P, $\rho \ll \sqrt { a ^ { 2 } + x ^ { 2 } }$ is satisfied because $r \ll a$. We will verify a posteriori that the magnetic field line never reaches values of $\rho$ that violate the condition $\rho \ll \sqrt { a ^ { 2 } + x ^ { 2 } }$.
![](../../../figures/solution-ocr/394cfcaabe353dcd5066dc30.jpg)

The key idea is that the magnetic flux through the middle of the 'funnel' $S$ is conserved. No magnetic flux exits through the sides of the funnel becauseby construction-the magnetic field is tangent to $S$ at every point. For this reason, the region bounded by $S$ is called a 'flux tube'. The flux through the flux tube is entirely due to $\vec { B } _ { Y }$, which is approximately uniform over the circular cross section at each $x$.
![](../../../figures/solution-ocr/a842257e92cb7be62e199b28.jpg)

The component of $\vec { B } _ { Y }$ directed along the wire is $B _ { \| } = \left| \vec { B } _ { Y } \right| \cos ( \theta ) = \left( \mu _ { 0 } I / 2 \pi \right) \left( a / \left( a ^ { 2 } + x ^ { 2 } \right) \right)$ (see figure above). Therefore, the conserved flux is $\frac { 1 } { 2 } \mu _ { 0 } I a \rho ^ { 2 } / \left( a ^ { 2 } + x ^ { 2 } \right)$. The equation of $S$ is then $\rho ^ { 2 } / \left( a ^ { 2 } + x ^ { 2 } \right) =$ const. $= r ^ { 2 } / 10 a ^ { 2 }$, using the fact that $S$ passes through P. We can now see that $\rho$ never grows so large that $\rho \ll \sqrt { a ^ { 2 } + x ^ { 2 } }$ fails, so our equation for $S$ remains valid for all $x$. Then, the minimal value of $\rho ( x )$ is $\rho ( 0 ) = d = r / \sqrt { 10 }$.

Part c) Let the point of closest approach be Q. We need to calculate the length of the spiraling field line between points P and Q. Due to the tight winding of


the field lines, this length is much larger than $r$ or $a$. Therefore, the precise position of point Q around the loop closest to $x = 0$ (for example, whether it is on the side closer to wire $Y$ or on the side further from wire $Y$ ) is unimportant. To leading order, $L$ equals the length along the field line from P to the point on the field line with $x = 0$.

Consider two points on the field line whose $x$ coordinates differ by a small amount $\mathrm { d } x$. The length $\mathrm { d } L$ of the short segment of field line joining these points is given by $\mathrm { d } x \approx \left( B _ { \| } / B _ { \perp } \right) \mathrm { d } L$. Here, we have decomposed the magnetic field vector into a component $B _ { \| }$along wire $X$ and a component $B _ { \perp }$ perpendicular to wire $X$. In the previous part, we found $B _ { \| } = \left( \mu _ { 0 } I / 2 \pi \right) \left( a / \left( a ^ { 2 } + x ^ { 2 } \right) \right)$. The field of wire $X$ gives the dominant contribution to $B _ { \perp }$, so $B _ { \perp } = \mu _ { 0 } I / 2 \pi \rho$. These expressions are approximate and ignore corrections of order $r / a$. Since $r / a \approx 1 / 100$, ignoring these corrections is acceptable for the required accuracy of 20\%. The total length is obtained by integration:

$$
L = \int _ { Q } ^ { P } \mathrm {~d} L = \int _ { 0 } ^ { 3 a } \frac { a ^ { 2 } + x ^ { 2 } } { a \rho } \mathrm {~d} x
$$

Now, we use the equation for $\rho ( x )$ derived in part b: $\rho ( x ) ^ { 2 } / \left( a ^ { 2 } + x ^ { 2 } \right) = r ^ { 2 } / \left( 10 a ^ { 2 } \right)$. The result is

$$
L = \int _ { 0 } ^ { 3 a } \frac { \sqrt { 10 } } { r } \sqrt { a ^ { 2 } + x ^ { 2 } } \mathrm {~d} x = \frac { \sqrt { 10 } a ^ { 2 } } { r } \int _ { 0 } ^ { 3 } \sqrt { 1 + u ^ { 2 } } \mathrm {~d} u .
$$

This expression must be numerically evaluated to within 20\% relative error. To obtain a numerical value for the integral, we could use the trapezium rule or we could draw the curve $y = \sqrt { 1 + x ^ { 2 } }$ between $x = 0$ and $x = 3$ on graph paper and count the number of squares beneath the curve. In fact, a crude estimate using a single trapezium is sufficient for the required accuracy: $\int _ { 0 } ^ { 3 } \sqrt { 1 + u ^ { 2 } } \mathrm {~d} u \approx \int _ { 0 } ^ { 3 } [ 1 +$ $( \sqrt { 10 } - 1 ) ( u / 3 ) ] \mathrm { d } u = 3 + ( 3 / 2 ) ( \sqrt { 10 } - 1 ) \approx 6.24$, resulting in a length of $L \approx 19.7 a ^ { 2 } / r \approx 197 \mathrm {~m}$. The exact result is $L \approx 17.9 a ^ { 2 } / r \approx 179 \mathrm {~m}$.

Although not necessary for full credit, it is possible to evaluate the integral exactly. Substituting $u = \sinh ( \beta )$ with $\mathrm { d } u = \cosh ( \beta ) \mathrm { d } \beta$ and using $\cosh ^ { 2 } ( \beta ) - \sinh ^ { 2 } ( \beta ) = 1$ gives

$$
\int _ { 0 } ^ { 3 } \sqrt { 1 + u ^ { 2 } } \mathrm {~d} u = \int _ { 0 } ^ { \sinh ^ { - 1 } ( 3 ) } \cosh ^ { 2 } ( \beta ) \mathrm { d } \beta
$$

Now, we use $\cosh ^ { 2 } ( \beta ) = \left( e ^ { 2 \beta } + 2 + e ^ { - 2 \beta } \right) / 4 = ( \cosh ( 2 \beta ) + 1 ) / 2$ to obtain

$$
\begin{aligned}
\int _ { 0 } ^ { 3 } \sqrt { 1 + u ^ { 2 } } \mathrm {~d} u & = \frac { 1 } { 2 } \int _ { 0 } ^ { \sinh ^ { - 1 } ( 3 ) } [ \cosh ( 2 \beta ) + 1 ] \mathrm { d } \beta \\
& = \frac { 1 } { 4 } [ \sinh ( 2 \beta ) + 2 \beta ] _ { 0 } ^ { \sinh ^ { - 1 } ( 3 ) }
\end{aligned}
$$

Finally, we use $\sinh ( 2 \beta ) = \left( e ^ { 2 \beta } - e ^ { - 2 \beta } \right) / 2 =$ $2 \sinh ( \beta ) \cosh ( \beta )$ and $\cosh \left( \sinh ^ { - 1 } ( 3 ) \right)$ =

$$
\begin{aligned}
& \sqrt { 1 + \sinh \left( \sinh ^ { - 1 } ( 3 ) \right) ^ { 2 } } = \sqrt { 10 } \text { to find } \\
& \qquad \begin{aligned}
\int _ { 0 } ^ { 3 } \sqrt { 1 + u ^ { 2 } } \mathrm {~d} u & = \frac { 1 } { 2 } \left[ 3 \sqrt { 10 } + \sinh ^ { - 1 } ( 3 ) \right] \\
& = \frac { 1 } { 2 } [ 3 \sqrt { 10 } + \ln ( 3 + \sqrt { 10 } ) ] \\
& \approx 5.65 .
\end{aligned}
\end{aligned}
$$

This gives $L \approx 17.9 a ^ { 2 } / r \approx 179 \mathrm {~m}$, as stated above.
