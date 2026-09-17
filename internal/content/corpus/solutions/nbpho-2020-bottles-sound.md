---
id: nbpho-2020-bottles-sound
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2020-bottles-sound
solution_type: official
source_document: solution-document-nbpho-2020-s
source_pdf: cache/phoxiv/nbpho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2020_S.pdf."
---

5. BOTTLEʼS SOUND (8 points) — Solution by
Jaan Kalda, marking schemes by Eero Uustalu
(task i), Topi Löytäinen, and Miha Marttinen
(tasks ii, iii).
i) (4 points) The following frequencies can
be obtained for 1-litre bottle, measured fre-
quency of sound is tabulated versus the
volume of water in the bottle.
V (ml) 0 100 200 310 400
f (Hz) 144 151 163 175 185
V (ml) 500 600 700 800 880 930
f (Hz) 205 230 260 325 420 520
Grading: The measurement data give evid-
ence that volumes have been measured cor-
rectly: 0.2 pts (for instance, if a portion of
water was added without making a notice of
it, all the subsequent volumes are offset by a
certain amount, and in that case, this 0.2 pts
is not awarded)
There is at least one measurement with
empty bottle (V =0) 0.2 pts.
There is at least one measurement with less
than 10% of the bottleʼs volume being empty
0.2 pts.
There is at least one measurement in each
of the volume ranges: 0 < V/V0 ≤ 20%;
20 < V/V0 ≤ 40%; 40 < V/V0 ≤ 60%;
60 < V/V0 ≤ 70%; 70 < V/V0 ≤ 80%;
80<V/V0 ≤90%; 0.2 pts.
Quality of measurements: in f−2
versus
V graph, the data should lie on a strait line.
Everypoint(upto10thpoint)whichis“good”,
i.e. lies on a line — 0.2pts. If an outlier point
corresponds to the second harmonic, 0.1 pts
is given instead of 0.2 pts.
Volume of the bottle measured: 0.2 pts.
If volume is not measured but read from the
label — 0.1 pts.
If instead of the volume of water, the
volume of air is used, the total score for task
i is multiplied by 0.8 and rounded up to the
first decimal digit. The same applies if fre-
quency is not recorded in Herz, but musical
notes.
If only a graph is built with no tabulated
data, subtract 10% from the final result of
this subtask.
ii) (1.5 points)We can consider the air in the
regionofthebottleʼsneckofvolume v¿V0 =
1l as a mass m = ρav (ρa denotes the dens-
ity of air) which can move back and forth
while the air inside the bulk of the bottle
serves as a spring. If the air inside the neck
moves by distance x, the volume inside the
bottleischangedby Ax, where A denotesthe
cross-section area of the neck. The process
is fast, characteristic time is around few mil-
liseconds, so we can consider it to be adia-
batic(characteristictimeofthermalizationis
on the order of a second). From pWγ
=const
(where W =V0 −V denotes the air volume in-
side the bottle) we obtain lnp+γlnW =const,
hence ∆p
p +γ∆W
W =0, i.e.
∆p =−γp
∆W
W
=γp
Ax
W
.
Now we can write the equation of motion for
the air inside the neck as
ρavẍ=−∆pA =−xγp
A2
W
,
hence the frequency
f =
1
2π
s
γ
pA2
ρavW
=
1
2π
s
γ
RT
µ
A2
v(V0 −V)
.
Grading:
• 1.5p: If f ∝1/
p
V0 −V [or f ∝(V0−V)−n
with n ≈ 0.5] either based on data ana-
lysis or adiabatic oscillation approach.
• 0.5p: Data analysis leading to unphys-
ical (linear, quadratic, exponential,...)
dependence.
• 1p: Standing wave approach or data
analysis leading to 1/V dependence.
iii)(3points)Basedonourpreviousresult,we
can see that the squared period
T2
=4π2 µ
RT
v(V0 −V)
A2
is a linear function of the volume of water.
Usingthemeasurementdatawecalculatethe
squared period (ms2
).
V (ml) 0 100 200 310 400
T2 (ms2) 48.2 43.9 37.6 32.7 29.2
V (ml) 500 600 700 800 880 930
T2 (ms2) 23.8 18.9 14.8 9.5 5.7 3.7
These data are plotted below.
0
10
20
30
40
50
60
0 100 200 300 400 500 600 700 800 900 1000
The linear fit of these data yields
T2
=48ms2
−V ·48ms2
/l,
so that
f =
¡
48ms2
−V ·48ms2
/l
¢−1/2
.
Grading:
• 1p: For graph (labels, units)
• 1p: Linearization or comparison to
model prediction.
• 1p: For parameterization consider-
ation either theoretical or physical
(heuristic) justification
