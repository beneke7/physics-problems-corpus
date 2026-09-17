---
id: inpho-2022-a2
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2022-a2
solution_type: official
source_document: solution-document-inpho-2022-s
source_pdf: cache/phoxiv/inpho/2022_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2022_S.pdf."
---

2. The ﬁrst explosion of an atomic bomb was the Trinity test in New Mexico in 1945. This explosion
released a very large amount of energy E which created an expanding ﬁreball (known as the Trinity
ﬁreball). A snapshot of this ﬁreball taken 0.025s after the explosion is shown in the photograph
below.
A scientist, Prof. Geoﬀrey Taylor, could make an estimate of the energy released by the bomb
from an analysis of such photographs. Here we try to follow in his footsteps, with some suitable
simpliﬁcations.
To begin, we assume that the ﬁreball is spherical in nature. Its radius (R) increases with time (t)
depending on the explosion energy E and the density ρ of the surrounding air (which is taken as
constant and uniform).
We are also given a graph of the data obtained by Prof. Taylor, as shown below. However, the
axes labels of the graph are missing.
16
32
64
128
0.00025 0.00125 0.00625 0.03125
Given data:
1 kiloton (kt) of TNT = 4.2 × 1012 J
Density ρ of air outside the ﬁreball =1.22kg/m3.
(a) [3 marks] What are the quantities represented by the axes of the graph? Also state the
respective units in which they are expressed. In the detailed answer sheet, justify your
answer.
Page 6 Code 65 Questions Last six digits of Roll No.:
Solution: It is clear that this graph is on a log-log scale. Physical quantities which are
involved: E,R,ρ,V and time t. Here E and ρ are constant. Possible answers can be R
vs t, V vs t, or V vs R. We can get a relation between R and t and then verify from
the slope of the straight line. Also, from the time and length scale given in the explosion
picture tells us that at t = 25ms, R is in between 100-200m.
Thus, it is a R (m) vs t (s) plot on a log-log scale.
(b) [4 marks] Find the slope (s) of the best ﬁt line shown in the graph. What are the dimensions
of the quantity s?
Solution: We take two random points (x1,y1),(x2,y2) on the line passing through the
grid. Then the slope of the graph is
s =
log(y2) − log(y1)
log(x2) − log(x1)
(2.1)
=
log(32 × 20.6) − log(16 × 20.2)
log(0.00125 × 50.2) − log(0.00005 × 50.8)
(2.2)
= 0.43 (2.3)
The slope is dimensionless.
(c) [3 marks] From a dimensional analysis based on the above simpliﬁed model, make an esti-
mate of the energy E released (in kt of TNT) in the Trinity test.
Solution: Using the dimensional analysis, E can be expressed as [E] = ραtβRγ. Using
the dimensions of the quantities involved,
E =
R5ρ
t2
(2.4)
R = E
t2/5
ρ1/5
(2.5)
According to the above equation, a plot of R vs t on a log-log scale will have a slope of
0.4. This we have already found in the previous part.
From (x2,y2), E ≈ 26ktTNT.
The yield of the Trinity test was oﬃcially estimated as 21ktTNT.
Page 7 Code 65 Questions
