---
id: kevin-zhou-t2-ex011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex011
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 11
Suppose a black sphere of radius r is placed inside a large container of arbitrary shape, whose
walls are a blackbody with temperature T. In the steady state, what is the rate of power
absorbed by the sphere from the walls?
Solution
Radiation is continually emitted from all points on the walls in all directions, so it would
seem that we have to do a complicated integral to find how much hits the sphere, which
would be hard even if we were given the container’s shape. But the problem is actually
trivial due to the second law of thermodynamics!
Let’s suppose the sphere itself is also at temperature T. Then it sends power (4πr2)σT4
to the walls, since all radiation that exits the sphere hits the walls. But if the sphere and
walls are at the same temperature, a temperature difference cannot spontaneously appear.
Therefore, the power going from the walls to the sphere must also be (4πr2)σT4. And
26
Kevin Zhou Physics Olympiad Handouts
since this quantity can also be expressed as a geometric integral, it can’t depend on the
temperature of the sphere, so it must be true for any sphere temperature.
This is a neat idea worth followups. First, if we had a more general shape than a sphere,
when would the reasoning above still work? Second, for a tough problem which uses a variant
of this idea, see NBPhO 2010, problem 2. An improved solution due to Stefan Ivanov is
available here.
[2] Problem 20.   W 1 0USAPhO 2011, problem A3.
[3] Problem 21.   m 1 0USAPhO 2006, problem B2. The graphs are hard to read, but do your best!
[3] Problem 22.   ^ 1 0USAPhO 2019, problem A2. An elegant, tricky radiation problem. (This is
essentially the same problem as Physics Cup 2022, problem 5.)
