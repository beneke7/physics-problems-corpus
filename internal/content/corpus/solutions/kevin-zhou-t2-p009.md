---
id: kevin-zhou-t2-p009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-p009
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

[4] Problem 9. We can find an expression for entropy of an ideal gas using pure thermodynamics.
Consider n moles of an ideal gas with adiabatic index γ, initially at pressure P and volume V .
(a) Suppose the gas is heated at constant volume to pressure P′. Compute the change in entropy.
(b) Suppose the gas is instead expanded at constant pressure to volume V ′. Compute the change
in entropy.
(c) By combining your two results, show that the entropy S(P,V ) of the ideal gas is
S = nCV log(PV γ
) + constant
when n is constant. The constant can’t be found using classical thermodynamics alone, since
it only can determine changes in entropy.
(d) Now consider the case where the ideal gas is allowed to freely expand into a vacuum, reaching
a final volume V ′. This is an example of a nonequilibrium process that changes the entropy,
despite no work or heat transfer. Find the resulting change in entropy.
11
Kevin Zhou Physics Olympiad Handouts
(e) So far, we don’t know anything about how S depends on n, because we only considered
processes that kept n constant. However, the entropy should be extensive, meaning that if the
pressure and temperature are kept the same, then S is proportional to n. Thus, if in general
S/n = CV log(PV γ
f(n)) + constant
then the right-hand side must be independent of n. Using this, find f(n).
Solution. (a) For heating at constant volume, we have
∆S =
Z
d̄Q
T
= nCV log
T′
T
= nCV log
P′
P
.
(b) For heating at constant pressure, we have
∆S =
Z
d̄Q
T
= nCP log
T′
T
= nCP log
V ′
V
.
(c) Suppose we start at some fixed pressure and volume P0 and V0, and use the above two steps
to get to pressure and volume P and V . Then
S(P,V ) = S(P0,V0) + nCV log
P′
P
+ nCP log
V ′
V
= S(P0,V0) + nCV log
P′
P
+ nCV log
V ′γ
V γ
.
Since P0 and V0 and S(P0,V0) are all fixed constants, we hence have
S(P,V ) = nCV log(PV γ
) + constant
as desired.
(d) Since no work or heat transfer occurred, the internal energy must stay the same. Thus the
temperature stayed the same. Using our previously obtained result, we get
∆S = nCV log

TV ′γ−1
TV γ−1

= nRlog

V ′
V

.
This can also be found by considering an isothermal process to get to the final state and
finding the entropy change using dS = dQ/T. Since entropy is a state function, the final
changes in entropy are equivalent.
(e) Use the ideal gas law to substitute V = nRT/P, giving
S/n = CV log

P
nγRγTγ
Pγ
f(n)

+ constant.
For constant P and T, the argument of the logarithm is independent of n when
f(n) = n−γ
.
The resulting general expression for the entropy of an ideal gas, up to the remaining constant
(which can’t be found without using quantum statistical mechanics) is called the Sackur–
Tetrode equation.
[3] Problem 10.  W 1 0USAPhO 2014, problem A2.
[3] Problem 11.  W 1 0USAPhO 2017, problem A2. A simple but tricky problem. (For a more involved
problem based on the same fundamental idea, see Physics Cup 2019, problem 2.)
[3] Problem 12.  ^ 1 0USAPhO 2020, problem B3. An advanced problem which shows you how to
compute corrections for a slightly nonideal gas. (Note that you can use the quantity T in any of
the parts, not just (e) and (f).)
12
Kevin Zhou Physics Olympiad Handouts
3 Quantum Statistical Mechanics and the Third Law
So far, everything we have discussed only tells us about changes in entropy, while the absolute value
is undetermined. This is fixed by the following fact.
Idea 7: Third Law
The entropy of any thermodynamic system approaches zero as the temperature goes to zero.
The third law of thermodynamics is a bit of a black sheep. Unlike the other laws, it is inherently
quantum mechanical, and comes from the statistical definition of entropy, as described below.
