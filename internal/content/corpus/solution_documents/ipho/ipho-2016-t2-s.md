---
id: solution-document-ipho-2016-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2016/T2_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2016-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2016/T2_S.pdf."
---

Problem 2 : Solution/marking scheme – Nonlinear Dynamics in Electric Circuits
(10 points)
Part A. Stationary states and instabilities (3 points)
Solution A1: [0.4]
By looking at the I − V graph, we obtain
Roff = 10.0Ω, 0.1
Ron = 1.00Ω, 0.1
Rint = 2.00Ω, 0.1
I0 = 6.00A. 0.1
Note: No penalty for the number of digits in this question
Solution A2: [1]
Kirchoff law for the circuit (U is the voltage of the bistable element):
E = IR + U 0.1
This yields
I =
E − U
R
0.1
Hence, stationary states of the circuit are intersections of the line defined by this equation
and the I − V graph of X 0.2 .
For R = 3.00Ω, one always gets exactly one intersection. 0.2
For R = 1.00Ω, one gets 1, 2 or 3 intersections depending on the value of E. 0.4
The following table summarizes the number of points granted for possible answers to the
last subquestion with R = 1.00Ω:
Possible answer 1 2 3 1,3 1,2 2,3 1,2,3
Points 0 0 0.2 0.3 0 0.2 0.4
Solution A3: [0.6]
The stationary state is on the intermediate branch, one can thus use the corresponding
equation: 0.2
1Istationary =
E − RintI0
R − Rint
0.1
= 3.00A 0.1
Ustationary = Rint(I0 − I) 0.1
= 6.00V 0.1
Extra (non-physical) stationary states on the switched on and/or switched off branches
lead to a penalty of 0.2 point.
Solution A4: [1]
Any correct modeling such as the following: 0.5
The Kirchoff law for the circuit reads
E = IR + UX + L
dI
dt
= IR + (I0 − I)Rint + L
dI
dt
This implies
L
dI
dt
= E − I0Rint − (R − Rint)I
The separation between two cases is of importance, especially because of the relative sign
of dI/dt:
If I > Istationary, we have dI/dt < 0 and I decreases. 0.2
If I < Istationary, we have dI/dt > 0 and I increases. 0.2
Note: Formulas with time derivatives are not essential, any other correct justification is
accepted.
We conclude that the stationary state is stable. 0.1
Note: The checkbox gives 0.1 points if “stable” is checked, regardless of the previous rea-
soning (also if there is nothing). A wrong reasoning leading to check the “unstable” option
doesn’t however give any point for the checkbox.
Part B. Bistable non-linear elements in physics and engineering: radio transmitter (5 points)
Solution B1: [1.8]
A correctly drawn cycle gives 1.2 points, distributed as follows:
• Switched on branch is part of the cycle 0.2
• Switched off branch is part of the cycle 0.2
• Jumps are vertical (constant U) 0.2
• Jumps are positioned at Uh and Uth 0.2
• The system moves to the left on the switched on branch 0.2
2• The system moves to the right on the switched off branch 0.2
Each of the following observations individually gives up to 0.2 points, but their total
cannot exceed 0.6:
• U constant during jumps because the charge on the capacitor cannot change in-
stantaneously 0.2
• The intermediate branch cannot be part of the cycle because there is a stationary
state on it 0.2
• Jumps occur at corners of the IV graph because at those points the system has
nowhere else to go 0.2
• The system moves moves to the left on the switched on branch because it approaches
the stable stationary state (which is located outside the IV graph), or argument with
the Kirchoff law 0.2
• The system moves moves to the right on the switched off branch because it ap-
proaches the stable stationary state (which is located outside the IV graph), or
argument with the Kirchoff law 0.2
^ IIA )
"
:
oscillation
cycle
8
⇒ :
=stationary
I it
state
I
3
÷ l¥ In = ÷ = 0 2 3 45 6 7 85
: th
Solution B2: [1.9]
Since the non-linear element is oscillating between the switched on and switched
off branches we can put UX = Ron/offIX. On either of the branches, the circuit behaves
as a standard RC-circuit with conductance C and resistance Ron/offR/(Ron/off + R) (the
resistor and the element X being connected in parallel). 0.5 Another way to express it is to
3write the Kirchhoff law for the switched on and switched off branches
Ron/offRC
dIX
dt
= E − (Ron/off + R)IX
The time constant of the circuit is
Ron/offR
Ron/off + R
C.
If the branch in question (switched on or switched off) extended indefinitely, after a long
time the system would have landed in a stationary state with the voltage
Uon/off =
Ron/off
Ron/off + R
E.
Then, the time dependence of the voltage drop on the non-linear element is a sum of the
constant term Uon/off and of the exponentially decaying term:
UX(t) =
Ron/off
Ron/off + R
E +

Uon/off −
Ron/off
Ron/off + R
E

e
−
Ron/off+R
Ron/offRC
t
There are 0.5 points distributed as follow for UX(t):
• Correct exponential 0.2
• Correct constant term (t → ∞) 0.1
• Correct coefficient in front of the exponential 0.1
• Correct equation for UX(t) 0.1
Time spent by the system on the switched on branch during one cycle:
ton =
RonR
Ron + R
C log

Uth − Uon
Uh − Uon

= 2.41 · 10−6
s, 0.4
Time spent by the system on the switched off branch during one cycle:
toff =
RoffR
Roff + R
C log

Uoff − Uh
Uoff − Uth

= 3.71 · 10−6
s. 0.4
The total period of oscillations:
T = ton + toff = 6.12 · 10−6
s 0.1
Note: Correct final answers give full points. One may earn points for intermediate steps
(see above) for partial answers.
Solution B3: [0.7]
Neglect the energy consumed on the switched off branch. The energy consumed
4on the switched on branch during the cycle is estimated by
E =
1
Ron

Uh + Uth
2
2
ton = 1.18 · 10−4
J. 0.4
For the power, this gives an estimate of
P ∼
E
T
= 19.3W. 0.3
Note:
• Formula + answer inside 5W ≤ P ≤ 50W give full points
• Formula + answer outside the range above but inside 1W ≤ P ≤ 100W give 0.5
points
• answer outside range but good formula gives 0.4 points
Also, the proposed formula is only an example, any other reasonable approximation of the
integral of the upper branch should be accepted.
Solution B4: [0.6]
The wave length of the radio signal is given by λ = cT = 1.82 · 103 m. 0.2
The optimal length of the antenna is λ/4 (or 3λ/4,5λ/4 etc.) 0.3
The only choice which is below 1km is s = λ/4 = 459m. 0.1
Note: The correct answer s = λ/4 = 459m gives full points, and the mistake s = λ/2 =
918m only 0.4 pts.
Part C. Bistable non-linear elements in biology: neuristor (2 points)
Solution C1: [1.2]
For Ẽ = 12.0V, the steady state of the system is located on the switched off
branch:
Ũ =
Roff
R + Roff
Ẽ = 9.23V.
When the voltage is increased to E = 15.0V, the system starts moving to the right along
the switched off branch (in the same way it did in task B).
If the voltage drops again before the system reaches the threshold voltage, it will simply
return to the stationary state.
If system reaches the threshold voltage, it will jump to the switched on branch, and it
will make one oscillations (since τ < T) before the voltage drops again and it returns to
the stationary state.
5^ I
x
T <
to
0 return to the
original stationary
state
osier :h÷
:# .
⇐ ÷ >
to tote
t
1. Approach to the new stationary state 0.2
2. Return to the old stationary state 0.2
' '
T -
X
5 evolution on
Ji
f upper
branch
T >
Tent
4
jump
to i
upper
branch
\
6
jump
to
, lower branch
:
,
) apprach
i L 7 return to
3 new state ,
:
Stationary
¥ ,
(
state
. -
'
✓
.
!# . i I
)
to tot T t
3. Approach to the new stationary state 0.1
4. Jump to the upper branche before t0 + τ 0.2
5. Evolution on the upper branch 0.2
6. Jump to the lower branche below the old stationary state 0.1
7. Return to the old stationary state (from below) 0.2
6Solution C2: [0.6]
The time needed to reach the threshold voltage is given by
τcrit =
RoffR
Roff + R
C log
Uoff − Ũ
Uoff − Uth
!
= 9.36 · 10−7
s.
Note: This is the same formula as for toff in task B2, with Uh replaced by Ũ.
• Correct time constant 0.2
• Correct choice of voltages 0.2
• Correct final formula 0.1
• Correct numerical value 0.1
Note: Correct final answers give full points. One may earn points for intermediate steps
(see above) for partial answers.
Solution C3: [0.2]
Since τ > τcrit, the system will make one oscillation. We conclude that the sys-
tem is a neuristor. 0.2
Note: 0.2 are given only if “Yes” is checked, regardless of the development of the other
tasks.
7
