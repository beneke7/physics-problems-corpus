---
id: kevin-zhou-e3-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e3-ex002
solution_type: author
source_document: solution-document-kevin-zhou-e3sol
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E3Sol.pdf."
---

Example 2
Consider some batteries connected in parallel, with emfs Ei and internal resistances Ri. What
is the Thevenin equivalent of this circuit?
Solution
The equivalent resistance is simply
Req =
X
i
1
Ri
!−1
.
To infer Veq, we just need one more V (I) value. The most convenient is to set V = 0, shorting
all of the batteries. Each battery alone would produce a current of Ei/Ri, so
0 = Veq −
X
i
Ei
Ri
!
Req.
Thus, we have
Veq =
X
i
Ei
Ri
!

X
j
1
Rj


−1
.
Remark
With ideal batteries, it’s easy to set up circuits that don’t make any sense.
i1 1A i2
1V 1Ω 1V
For example, in the above circuit, Kirchhoff’s rules don’t determine the currents; they only
say that i1 + i2 = 1A. If the emfs of the batteries were different, the situation would be
even worse: the equations would be contradictory, with no solution at all! In real life, this is
avoided because all batteries have some internal resistance. Adding such a resistance to each
battery, no matter how small, resolves the problem and gives a unique solution.
[2] Problem 1 (Purcell 4.12). Consider the circuit below.
3
Kevin Zhou Physics Olympiad Handouts
E
R
E
R
E
R
R
R
a b
(a) Find the potential difference between points a and b.
(b) Find the equivalent Thevenin resistance and emf between points a and b.
Solution. (a) We’ll use loop currents, with positive being clockwise. Let the loop currents be
I1,I2,I3, from top to bottom. We see that
E − E − 2RI1 + RI2 = 0
E − 3RI2 + RI3 + RI1 = 0
−E − 2RI3 + RI2 = 0,
or
I2 = 2I1
3I2 − I3 − I1 = E/R
I2 − 2I3 = E/R.
This can be solved to give I1 = E/8R, I2 = E/4R, and I3 = −3E/8R. We see that Vb − Va =
(I2 − I3)R = 5E/8 .
(b) We’ll do this in two ways for variety. First, note that we already found the voltage between a
and b in part (a), and this is precisely the Thevenin emf, Veff = 5E/8. The Thevenin resistance
is simply the equivalent resistance between a and b. By a straightforward application of the
series and parallel rules, this is Reff = 3R/8 .
Second, suppose we short points a and b with a wire. Then by Thevenin’s theorem, the current
flowing through that wire should be I = Veff/Reff. We already know Veff from part (a). To
compute the current, we just use Kirchhoff’s loop rules again; these are now as follows.
E − E − 2RI1 + RI2 = 0
E − 2RI2 + RI1 = 0
−E − RI3 = 0
Solving these equations gives I1 = E/3R, I2 = 2E/3R, and I3 = −E/R. The current through
the wire is now I2 − I3 = 5E/3R. Thus, Reff = (5E/8)/(5E/3R) = 3R/8.
4
Kevin Zhou Physics Olympiad Handouts
[2] Problem 2 (Wang). A circuit containing batteries and resistors has two terminals. When an ideal
ammeter is connected between them, the reading is I1. When a resistor R is connected between
them, the current through the resistor is I2, in the same direction. What would be the reading V
of an ideal voltmeter connected between them?
Solution. We consider the Thevenin equivalent, i.e. the function V (I). The first piece of information
tells us that when V = 0, I = I1. The second tells us that when V = −I2R, then I = I2. Thus,
0 = Veq + I1Req, −I2R = Veq + I2Req.
Solving this system of equations gives
Veq =
I1I2R
I2 − I1
, Req =
I2R
I1 − I2
.
When an ideal voltmeter is connected, we have I = 0, so
V = Veq =
I1I2R
I2 − I1
.
Note that your answer may differ by a harmless sign, which ultimately depends on your sign
conventions for I1 and I2 (i.e. which terminal is A and which terminal is B).
[3] Problem 3.  W 1 0USAPhO 2015, problem A2.
Now we give a few problems on current flow through continuous objects. Fundamentally, all one
needs for these problems is the definition J = σE, and superposition.
