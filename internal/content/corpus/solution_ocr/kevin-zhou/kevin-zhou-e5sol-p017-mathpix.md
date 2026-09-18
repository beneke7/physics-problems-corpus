---
id: solution-ocr-kevin-zhou-e5sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e5-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 17. Consider a toroidal solenoid with a rectangular cross section of height $h$ and width $w , N$ turns, and inner radius $R$.
    (a) Find the self-inductance by considering the magnetic flux.
    (b) Verify that the two formulas for energy given in idea 5 are consistent in this setup.
    (c) Now suppose the current increases at a constant rate $d I / d t$. Find the magnitude of the electric field at a height $z$ above the center of the solenoid, assuming $h , w \ll R \ll z$. (Hint: write down the divergence and curl of $\mathbf { E }$ in terms of $\dot { \mathbf { B } }$ in general, and notice the similarities to the equations for B in terms of J. This allows us to use the ideas of E3 by analogy.)

Solution. (a) Symmetry and Ampere's law imply that the field inside is $B = \frac { \mu _ { 0 } N I } { 2 \pi r }$ pointing in the $\hat { \boldsymbol { \phi } }$ direction. Hence the flux through a single loop is

$$
\Phi = \frac { \mu _ { 0 } N I h } { 2 \pi } \log \frac { R + w } { R } .
$$

The inductance is

$$
L = \frac { N \Phi } { I } = \frac { \mu _ { 0 } N ^ { 2 } h } { 2 \pi } \log \frac { R + w } { R } .
$$


(b) Let's compute the total energy of the magnetic field. The magnetic field outside the solenoid is zero, and the magnetic field inside is $B = \mu _ { 0 } N I / 2 \pi r$. Now consider cylindrical shells of radius $r$, thickness $d r$, and volume $d V = 2 \pi r h d r$. The field energy is
$$
U = \int \frac { B ^ { 2 } } { 2 \mu _ { 0 } } d V = \int _ { R } ^ { R + w } \frac { \left( \mu _ { 0 } N I \right) ^ { 2 } } { 2 \mu _ { 0 } ( 2 \pi r ) ^ { 2 } } ( 2 \pi r h d r ) = \frac { \mu _ { 0 } N ^ { 2 } I ^ { 2 } h } { 4 \pi } \int _ { R } ^ { R + w } \frac { d r } { r } = \frac { \mu _ { 0 } N ^ { 2 } I ^ { 2 } h } { 4 \pi } \log \frac { R + w } { R } .
$$
Referring to the result of part (a), the expression $U = L I ^ { 2 } / 2$ yields the same result.
(c) We know $\dot { \mathbf { B } }$ and want to find $\mathbf { E }$, which in this problem is determined by the equations
$$
\nabla \times \mathbf { E } = - \dot { \mathbf { B } } , \quad \nabla \cdot \mathbf { E } = 0 .
$$
But we already know how to solve problems of this form, because the equations that govern the magnetic field in magnetostatic situations are
$$
\nabla \times \mathbf { B } = \mu _ { 0 } \mathbf { J } , \quad \nabla \cdot \mathbf { B } = 0 .
$$
So if we formally define a current $\mathbf { J } ^ { \prime }$ by $- \dot { \mathbf { B } } = \mu _ { 0 } \mathbf { J } ^ { \prime }$, and use the Biot-Savart law to solve for the corresponding $\mathbf { B } ^ { \prime }$, then that quantity will be precisely the $\mathbf { E }$ we're looking for.
Now, $- \dot { \mathbf { B } }$ is localized within the toroid, so since we're assuming the toroid is thin, we can approximate $\mathbf { J } ^ { \prime }$ as a ring of current $I ^ { \prime } = ( \Phi / I ) \dot { I } / \mu _ { 0 }$. The resulting magnetic field is
$$
\mathbf { B } ^ { \prime } = \frac { \mu _ { 0 } I ^ { \prime } } { 2 } \frac { R ^ { 2 } } { \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 3 / 2 } } \hat { \mathbf { z } } = \frac { \dot { I } } { 2 } \left( \frac { \mu _ { 0 } N h } { 2 \pi } \log \frac { R + w } { R } \right) \frac { R ^ { 2 } } { \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 3 / 2 } } \hat { \mathbf { z } }
$$
and this is the electric field we're looking for. (The sign isn't determined since the problem didn't specify which way the current in the solenoid went, but this doesn't affect the magnitude.) We can use $w \ll R \ll z$ to simplify more, giving an answer of
$$
E \approx \frac { \mu _ { 0 } \dot { I } } { 4 \pi } \frac { N h w R } { z ^ { 3 } } .
$$

Remark
In electromagnetism, we often have issues with divergences when we take idealized point sources. For example, the voltage near a point charge can become arbitrarily high. Similarly, the magnetic field diverges as you approach an idealized, infinitely-thin wire, which causes the self-inductance of wire loops to diverge. Of course, the resolution is that you don't actually get an infinite magnetic field as you approach a wire. A real wire has finite thickness, and its magnetic field instead goes to zero as you approach its center. (We didn't run into this problem for solenoids, because we modeled their wires as a uniform sheet of current, whose magnetic field isn't singular at all.) If a problem does involve a wire loop, it'll often circumvent this messy issue by just giving the self-inductance from the start.

[2] Problem 18. A loop of wire is bent into a long "stadium" shape, with two parallel straight edges of approximate length $\ell / 2$ connected by semicircles of diameter $d \ll \ell$.
    (a) Write down an integral expression for the self-inductance, neglecting the curved parts, and show that it diverges.

(b) Find a rough estimate for the self-inductance by taking the wire to have radius $r \ll d$ and ignoring any flux through the wire itself.

Solution. (a) We see the flux to be

$$
\Phi = \int _ { 0 } ^ { d } \frac { \mu _ { 0 } I } { 2 \pi } \left( \frac { 1 } { x } + \frac { 1 } { d - x } \right) \frac { \ell } { 2 } d x
$$

which is infinite, because the integral of $1 / x$ is logarithmically divergent.

(b) We replace the flux integral with
$$
\Phi = \int _ { r } ^ { d - r } \frac { \mu _ { 0 } I } { 2 \pi } \left( \frac { 1 } { x } + \frac { 1 } { d - x } \right) \frac { \ell } { 2 } d x
$$
This gives an inductance of
$$
L = \frac { \Phi } { I } = \frac { \mu _ { 0 } \ell } { 2 \pi } \log \left( \frac { d - r } { r } \right) \approx \frac { \mu _ { 0 } \ell } { 2 \pi } \log ( d / r ) .
$$
This still diverges in the $r \rightarrow 0$ limit, as it should, but the presence of the logarithm means that the inductance doesn't depend that strongly on $d$, for realistic values. That's why we can often get away with not mentioning the details of the wire; you'll get a similar answer as long as it's thin.
