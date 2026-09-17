---
id: nbpho-2025-black-box
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2025-black-box
solution_type: official
source_document: solution-document-nbpho-2025-s
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2025_S.pdf."
---

4. BLACĸ BOX (12 points) — Eero Uustalu.
First we need to assemble a simple circuit al‐
lowing us to measure the V − I curve of the
black box: voltmeter in parallel to the box,
and ammeter in series. The measurement
resultsareshowninthetablebelow, bothfor
forward current (blue) and for reverse cur‐
rent (red) (the headers of the reverse current
data has minus sign).
0 1 2 3 4 5
0
2
4
6
8
Voltage [V]
Current [mA]
1mA
V3
V1
V2+IR
Voltage and Current Measurements
V (V) I (mA) ‐V (V) ‐I (mA)
4.59 7.66 3.491 7.98
4.55 6.53 3.458 6.98
4.50 5.52 3.423 6.00
4.46 4.53 3.379 4.94
4.43 3.964 3.324 3.868
4.41 3.665 3.279 3.178
4.40 3.51 3.219 2.468
4.36 3.08 3.180 2.088
4.32 2.756 3.121 1.637
4.25 2.54 3.044 1.186
4.14 2.391 2.993 0.958
3.98 2.23 2.956 0.817
3.871 2.115 2.922 0.711
3.656 1.897 2.880 0.595
3.539 1.781 2.784 0.403
3.436 1.67 2.713 0.2931
3.282 1.519 2.607 0.1847
3.079 1.314 2.423 0.0801
2.923 1.159 2.156 0.0219
2.762 0.998 1.807 0.0037
2.625 0.862 1.451 0.0006
2.498 0.736 0 0
2.351 0.593
2.246 0.491
2.143 0.398
2.036 0.2932
1.931 0.1989
1.815 0.1037
1.732 0.0486
1.670 0.021
1.617 0.0087
1.526 0.0016
1.467 0.0005
These data will be used for all the tasks.
i) (4 points)
Based on these data, we can determine
that there is a single diode allowing negative
currents to flow, with no other components
in that branch, as the V ‐I curve shows the
classical exponential dependence character‐
istic of a diode.
The situation is more complex for pos‐
itive currents: there must be two parallel
branches allowing current to flow. One
branch must contain a diode with a lower
threshold voltage in series with a resistor,
which explains why the initial exponential
curve transitions into a linear relationship
characteristic of resistive behaviour. The
second branch must contain a diode with
a higher threshold voltage (approximately
4.3V) that only conducts when this voltage
is exceeded.
This second branch could be either in
parallel with just a resistor, or in parallel
with the series combination of the resistor
and first diode. These two configurations
cannot be distinguished based solely on the
V ‐I curves, and both will be considered cor‐
rect interpretations of the data. The two pos‐
sible circuits are shown below.
A
B
D1
D2
R
D3
Lower
threshold
diode
Higher
threshold
diode
A
B
D1
D2
R D3
Note that faulty measurements give no
points in regard to data sufficiency (for ex‐
ample if the voltage was read from the power
source without any corrections made)
Eachplot(forwardandreversecurrent)gives
1.2 points:
Grading: (preliminary)
• Drawing and labeling a graph’s axes 0.2pts
• Collecting sufficient data for the graph that
shows both linear and non‐linear charac‐
teristics of the circuit 0.5pts
• Plotting the data to the graph 0.5pts
In total, the forward and reverse direction
plots give 2.4 points. Drawing the circuit
used in each the measurement gives 0.3p
each for a total of 0.6p.
For drawing a possible circuit diagram
(Refer to diagrams for option 1 and 2):
Grading: (preliminary)
• Placing the reverse diode D1 correctly
0.3pts
• Placing the forward diodes D2, D3 and the
resistor correctly, i.e. as described in the
previous paragraphs 0.7pts
ii) (2 points) The resistor’s resistance is the
inverse of the slope in the linear section of
the curve. To ensure accuracy, the most lin‐
ear segment should be selected for this cal‐
culation. The fit line is shown in purple in
the figure above, yielding a resistance of R =
1008Ω.
Grading: (preliminary)
• Method for getting R1 1pts
• Reaching a close enough ( ±10%) value for
the resistance 1pts
iii) (6 points) The accepted uncertainty of
all subsequent results is ±10% of the values
presented here. The opening voltage V1 of
diode D1 can be found at the point where
the red curve intersects the 1mA value. For
greater precision, additional measurements
could be performed by gradually adjusting
the voltage until exactly 1mA current is
reached. Based on our current measure‐
ments, the result is 3.004V.
The value of V2 can be found at the point
where the blue curve reaches 1mA, from
which we must subtract the resistor’s voltage
dropIR. ThiscalculationgivesV2 = 1.757V.
To determine the opening voltage of di‐
ode D3, we must first subtract the current
through the resistor. This can be accom‐
plishedgraphicallybydrawingalineparallel
to the linear segment’s fit line, at a 1mA dis‐
tance, as illustrated in the figure. For option
1, this procedure directly yields V3 = 4.47V.
For option 2 (the actual configuration inside
thebox),weneedtosubtractvoltageV2. Con‐
sequently, V3 = 2.71V for option 2.
Grading: (preliminary)
• Reaching a close enough value for the
opening voltage V1 1pts
Getting value for V2:
• ReadingthevalueofV2 +IR at1mA0.5pts
• Subtracting IR based on the inverse of the
slope at the linear section 0.5pts
• Getting the value to within 10% 1pts
Calculating the value for V3 depends on
the schematic that was used. This schema
is written for option 2. Valid solution for
option 1 still gives the same max points.
• Reading the total voltage where 1mA is go‐
ing through D3 0.5pts
• Subtracting V2 from the total 1.5pts
• Reaching a close enough ( ±10%) value for
V3 = 2.71 V 1pts
