---
id: nbpho-2010-power-supply
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2010-power-supply
solution_type: official
source_document: solution-document-nbpho-2010-s
source_pdf: cache/phoxiv/nbpho/2010_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2010_S.pdf."
---

Problem 9. Power supply (6 points)
i. (2 pts) When the key is closed, there is no current through
the diode, because it has reverse voltage applied. Mean-
while, the voltage applied to the inductance is Ui = L ˙ I,
hence I = I0 + Uit/L. Since there was initially no current,
I0 = 0, and I = Uit/L. So, the maximal current achieved is
Imax = Uiτc/L. The current through an inductance cannot
change instananuously; so, when the key is opened, all the cur-
rent is redirected to the diode. The diode receives a forward
current, hence it has no voltage drop. Thus, the inductance
obtains the voltage L ˙ I = Ui −Uo, (which is smaller than −Ui).
Hence, I = I0 − (U0 − Ui)t/L, where I0 is such as to match
the current Imax at the moment when the key is opened. Once
the current reaches zero, the diode is closed and no further
current ﬂows in the system. These ﬁndings allow us to sketch
the Figure above.
ii. (2 pts) For the ﬁrst cycle, we can use the result of the ques-
tion i. We notice that at the beginning of the second cycle, the
system is exactly at the same state as at the beginning of the
ﬁrst cycle. So, the process starts to behave periodically, see
Fig.
The average output current J is the surface area under
one period of the graph, divided by the period length. So,
J = 1
2Imaxτ1/(2τc), where τ = τc
Ui
U0−Ui
is the length of a time
segment when Io > 0. So,
J = Imax
1
4
Ui
U0 − Ui
=
τc
4L
U2
i
U0 − Ui
.
iii. (2 pts) Now, we can use the result of the question ii, be-
cause the situation is exactly the same as it was, except that
the output voltage will establish itself according to the value of
average current J. Note that average current to the capacitor
is 0 (because its upper plate is isolated from the lower one),
therefore, all the current J goes to the resistor. (The capacitor
works as a buﬀer, redistributing the strongly ﬂuctuating cur-
rent of the previous graph over time, so that the current to the
resistor is almost constant.) So, the output voltage Uo = JR,
where the expression for J can be found from the answer of the
question ii. It is convenient to designate Uo/Ui = κ. Then we
have
κ(κ − 1) =
τcR
4L
⇒ 2κ = 1 ±
√
1 +
τcR
L
.
We need κ ≥ 2, so the “–” sign can be excluded, and we arrive
at
Uo =
Ui
2
(
1 +
√
1 +
τcR
L
)
,
which is valid as long as τcR ≥ 8L. If this inequality is not sat-
isﬁed, the assumption Uo ≥ 2Ui will not be satisﬁed, so that
the expression for J will fail.
If Uo < 2Ui, the ascending branch of the Ii(t)-graph is
steeper than the descending one. So, the sawtooth proﬁle of
that graph starts “climbing up”. The higher it goes, the larger
will be J and hence the larger will be Uo. In its turn, larger Uo
results in a steeper the descending branch of the Ii(t) graph;
the process continues until reaching a state when the ascending
and descending branches are equally steep; this corresponds to
U0 = 2Ui. So,
U0 = 2Ui, if τcR < 8L.
