---
id: solution-ocr-nbpho-2015-s-p5
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2015-radiator]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 5. RADIATOR

We wind the wire around one end of the aluminium profile and supply current to it for heating. In most cases it was OK to supply up to 5A (the maximum possible) through the wire, only when it was wound very compact it could get too hot. This should give us good $100 ^ { \circ } \mathrm { C }$ to measure on the profile, but the experiment also worked if smaller currents/temperatures were used. Now we wait until the temperature in the profile stabilises, this takes about five to ten minutes and we can check if it has stabilised with the thermometer.

When the temperature has stabilised we measure and write down the temperature values along the part of the profile that is not covered with wire using a reasonable distance interval. We can see that that the other end of the profile is still at room temperature (the difference is below or near the resolution of this thermometer). This means that in the given solution for Helmholtz equation,

$$
T ( x ) = T _ { 0 } + C _ { 1 } e ^ { x \sqrt { \frac { h } { k A } } } + C _ { 2 } e ^ { - x \sqrt { \frac { h } { k A } } } ,
$$

the integration constant $C _ { 1 } = 0$.
Now one way is to use $T ( 0 )$ to express $C _ { 2 } = T ( 0 ) - T _ { 0 }$ and use any other temperature measurement to calculate $h$. A better way is to plot the temperature difference in a logarithmic scale: $\log \left( T ( x ) - T _ { 0 } \right) = - \sqrt { \frac { h } { k A } } x + C _ { 2 }$, and use the slope of the graph $a = - \sqrt { \frac { h } { k A } }$ to calculate $h$. This gives a more accurate value for $h$ and allows us to better estimate the uncertainty by finding the range of slopes that can reasonably be drawn on the graph.

The correct answer is in the range $h =$ $0.3 \mathrm {~W} / \mathrm { K } \cdot \mathrm { m }$ to $h = 0.5 \mathrm {~W} / \mathrm { K } \cdot \mathrm { m }$, it depends slightly on how the profile is placed on the table. The heat transfer coefficient is higher when the profile is on the edge of the table or slightly raised due to the wiring.
