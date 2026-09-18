---
id: solution-ocr-nbpho-2011-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2011-capacitor]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Capacitor (6 points)
i) The energy is $W = C U ^ { 2 } / 2 = \frac { 1 } { 2 } \varepsilon _ { 0 } \frac { A } { d } E ^ { 2 } d ^ { 2 } = \frac { 1 } { 2 } \varepsilon _ { 0 } A d E ^ { 2 }$; hence, the energy density $w = W / A d = \frac { 1 } { 2 } \varepsilon _ { 0 } E ^ { 2 }$.
ii) There are two ways to calculate the force. First, we notice that the innermost charges $q$ at the capacitor plates are affected by the electric field E, therefore there is a force $q E$ acting upon these. The outermost charges, however, have no electric field around them (because outside the inter-plate space, there is no electric field). ⇒ Due to the Gauss law, the electric field decreases linearly with the net charge left below the level of the current point (i.e. towards the inter-plate space). Therefore, the electric field averaged over the charges is just half of the maximal value $E : \langle E \rangle = \frac { 1 } { 2 } E$, and the net force acting on the plate is $F = Q \langle E \rangle = C E d \langle E \rangle =$ $\frac { 1 } { 2 } \varepsilon _ { 0 } A E ^ { 2 }$.

The second way includes writing the energy balance for a small displacement of a plate: $F \cdot \delta d = \delta \left( Q ^ { 2 } / 2 C \right) = \frac { Q ^ { 2 } } { 2 \varepsilon _ { 0 } A } \delta d =$ $\frac { 1 } { 2 } C ^ { 2 } E ^ { 2 } d . \delta d \Rightarrow F = \frac { 1 } { 2 } \varepsilon _ { 0 } A E ^ { 2 }$. iii) Let us push away part of the water from the inter-plate space so that there will be a small region of plate area $d A$, where there is no water between the plates (here, $\Delta p$ is the pressure difference between the inter-plate space and the outside regions). By doing so, we perform work $d \cdot \delta A \cdot \Delta p$, and increase the capacitor's energy:

$$
\delta W = \delta \left( Q ^ { 2 } / 2 C \right) = \frac { Q ^ { 2 } d } { 2 \varepsilon _ { 0 } } \left[ \frac { 1 } { \varepsilon A } - \frac { 1 } { \varepsilon ( A - \delta A ) + \delta A } \right] .
$$

So,

$$
\delta W = \frac { Q ^ { 2 } d ( \varepsilon - 1 ) \cdot \delta A } { 2 \varepsilon _ { 0 } \varepsilon ^ { 2 } A ^ { 2 } } = \frac { 1 } { 2 } \varepsilon _ { 0 } E ^ { 2 } d ( \varepsilon - 1 ) \cdot \delta A ;
$$

comparing this with the pressure work $d \cdot \delta A \cdot \Delta p$ we conclude that

$$
\Delta p = \frac { 1 } { 2 } \varepsilon _ { 0 } E ^ { 2 } ( \varepsilon - 1 ) \Rightarrow p = p _ { 0 } + \frac { 1 } { 2 } \varepsilon _ { 0 } E ^ { 2 } ( \varepsilon - 1 ) .
$$
