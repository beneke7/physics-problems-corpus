---
id: inpho-2016-a3
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2016-a3
solution_type: official
source_document: solution-document-inpho-2016-s
source_pdf: cache/phoxiv/inpho/2016_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2016_S.pdf."
---

3. This problem is designed to illustrate the advantage that can be obtained by the use
of multiple-staged instead of single-staged rockets as launching vehicles. Suppose that
the payload (e.g., a space capsule) has mass m and is mounted on a two-stage rocket
(see figure). The total mass (both rockets fully fuelled, plus the payload) is Nm.
m
nm
Nm
Pay
load
2nd Stage 1st Stage
The mass of the second-stage rocket plus the
payload, after first-stage burnout and sepa-
ration, is nm. In each stage the ratio of con-
tainer mass to initial mass (container plus
fuel) is r, and the exhaust speed is V , con-
stant relative to the engine. Note that at the
end of each state when the fuel is completely
exhausted, the container drops off immedi-
ately without affecting the velocity of rocket.
Ignore gravity.
(a) [21 / 2] Obtain the velocity v of the rocket gained from the first-stage burn, starting from
rest in terms of {V,N,n,r}.
Solution: Variable mass equation gives
m
d~ v
dt
= ~ Fexternal +~ vrelative
dm
dt
No gravity hence ~ Fexternal = 0, |~ vrelative| = v. Solving rocket equation
v = V ln
mi
mf
(1)
Page 3
H B C 1 6
INPhO - 2016 - Final Solutions
Here
initial mass mi = Nm (2)
final mass mf = [Nr + n(1 − r)]m (3)
Answers are written in terms of speed. Answer written in terms
of velocity with proper sign (-ve) are also acceptable.
(b) [1] Obtain a corresponding expression for the additional velocity u gained from the
second stage burn.
Solution: Now mi = nm,mf = m(nr + 1 − r). Equation (1) yields
u = V ln
n
nr + 1 − r
(4)
or
~ u = ~ V ln
n
nr + 1 − r
(5)
(c) [21 / 2] Adding v and u, you have the payload velocity w in terms of N, n, and r. Taking
N and r as constants, find the value of n for which w is a maximum. For this
maximum condition obtain u/v.
Solution: From Eqs. (3 and 5)
w = V ln
Nn
[Nr + n(1 − r)][nr + 1 − r]
= V lnf(n)
Maximizing w is equivalent to maximizing f(n). Differentiating and setting
equal to zero, we obtain
n =
√
N ⇒
u
v
=
ln[
√
N/{r
√
N + (1 − r)}]
ln[N/{Nr +
√
N(1 − r)}]
= 1 (6)
where we have used Eqs. (1 and 5).
(d) [2] Find an expression for the payload velocity ws of a single-stage rocket with the
same values of N, r, and V .
Solution: Here mi = Nm and mf = m + r(Nm − m). Using Eq. (1)
ws = V ln
N
Nr + 1 − r
(e) [2] Suppose that it is desired to obtain a payload velocity of 10km/s, using rockets
for which V = 2.5km/s and r = 0.1. Using the maximum condition of part (c)
obtain the value of N if the job is to be done with a two-stage rocket.
Page 4
H B C 1 6
INPhO - 2016 - Final Solutions
Solution: Payload velocity
w = u + v = 2V ln
√
N
r
√
N + 1 − r
For the desired value of w, N = 649.4 (645 < N < 655 accepted.)
