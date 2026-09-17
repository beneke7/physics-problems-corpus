---
id: nbpho-2010-black-box
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2010-black-box
solution_type: official
source_document: solution-document-nbpho-2010-s
source_pdf: cache/phoxiv/nbpho/2010_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2010_S.pdf."
---

Problem 11. Black box (10 points) There are several
measurements, which can be made.
i. (2 pts) We can measure the voltage of the battery E ≈ 3.2V.
ii. (2 pts) Then, we can connect battery to the outlets of the
box via ammeter and measure the current. It appears that at
the ﬁrst moment, Ic0 ≈ 1.3mA; however, the current starts to
decrease (decreasing twice during τ1 ≈ 12s) and achieves at
the long-time limit the ﬁnal value Ic∞ ≈ 0.35mA.
iii. (2 pts) Further, we can measure voltage at the outlet after
disconnecting the battery. At the ﬁrst moment, Vd ≈ 2.35V;
it decreases twice per τ2 ≈ 25s and vanishes at the long-time
limit.
iv. (4 pts) Finally, we can connect the ammeter to the outlet
immediately after disconnecting the battery, and measure the
current. Initially, it has value Id ≈ 1.0mA, and vanishes at the
long-time limit.
From iii and ii we can conclude that the box must contain a
capacitor C (if there were an inductance , the current Ic would
increase in time). Because of self-discharge (voltage vanishes
for iii), there must be a resistance R1 parallel to the capacitor.
Because of a prolonged charging (for ii, τ1 > 0), there must
be also a resistor R2 in serial connection to the capacitor. So,
there are two possible schemes, Fig (a) and Fig (b).
In case (a):
Ic0 = E/R2, Ic∞ = E/(R1 + R2),
Id = ER1/R2(R1 + R2), Ud = ER1/(R1 + R2).
In case (b),
Ic0 = E(R−1
2 + R−1
1 ), Ic∞ = E/R1,
Id = E/R2, Ud = ER1/(R1 + R2).
In both cases, we have two unknown quantities (R1 and R2),
and four equations. It appears (follows from these equations)
that in both cases, two equalities should hold between the
measured quantities: Ud = EIc∞/Ic0, and Ic0 = Ic∞ + Id.
So, the eﬀective (independent) number of equations is reduced
by two, which still leaves two — just suﬃcient for ﬁnding R1
and R2, but not enough to distinguish between the cases (a)
and (b). In fact, it can be shown that these two cases cannot be
distinguished even if we study the time-dependences of voltage
and currents. So, we can say that we have either scheme (a)
with R2 = E/Ic0 ≈ 2.5kΩ and R1 = E/Ic∞ − R2 ≈ 6.9kΩ,
or scheme (b) with R1 = E/Ic∞ ≈ 9.1kΩ and R2 = E/Id ≈
3.2kΩ.
The value of the capacitor can be estimated from charac-
teristic current decay times. For instance, using the charac-
teristic time τ2, in the case (a) we have τ2 = ln2R1C, hence
C = τ2/ln2R1 ≈ 5.2mF. In the case (b), τ2 = ln2(R1 +R2)C,
hence C = τ2/ln2(R1 + R2) ≈ 2.9mF.
