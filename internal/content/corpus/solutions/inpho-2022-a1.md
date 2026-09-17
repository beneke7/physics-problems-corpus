---
id: inpho-2022-a1
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2022-a1
solution_type: official
source_document: solution-document-inpho-2022-s
source_pdf: cache/phoxiv/inpho/2022_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2022_S.pdf."
---

1. A block of mass m = 0.1kg is attached to a spring (one end ﬁxed to the wall) with spring constant
k = 50Nm−1. The block slides on a rough horizontal table along the x-axis. Assume that both
the coeﬃcients of kinetic (µk) and static friction (µs) are same and constant (µk = µs = µ = 0.25).
The block is initially displaced to x0 = 0.1m from the unstretched position (normal length of the
spring, x = 0) of the spring and released from rest as shown below. Neglect any air resistance.
Take the acceleration g due to gravity to be 10m/s2.
x0
unstretched position
(a) [3 marks] How many times (n) will the block cross the unstretched position before coming
to rest permanently?
Solution:
x0
unstretched position
x1
x2
x3
mẍ = −kx ± µmg (1.1)
where the ± sign is used so that the friction is opposite to the direction of the velocity
of the block. Lets deﬁne the ratio of the frictional force to the maximum restoring force
to be α i.e. α = µmg/kx0. During the ﬁrst half cycle of the motion, the loss of potential
energy is equal to the work done against friction
kx2
0
2
−
kx2
1
2
= µmg(x0 − x1) (1.2)
where x1 is the displacement after one half cycle. This gives
x1 = −x0 + 2αx0 (1.3)
x2 = −x1 − 2αx0 (1.4)
Thus
xj = −xj−1 − (−1)j
2αx0 (1.5)
xj = (−1)j
(1 − 2αj)x0 (1.6)
Page 3 Code 65 Questions
The block will come to rest permanently at xn when
|xn| ≤ αx0 < |xn−1| (1.7)
1 − α
2α
≤ n <
1 + α
2α
(1.8)
For the given values of µ,m,k and x0, α = 0.05. Thus 9.5 ≤ n < 10.5. The block will
cross the unstretched position 9 times and then comes to the rest at the unstretched
position.
(b) [1 marks] Determine the total distance D covered by the block before coming to rest.
Solution: Total distance
D = x0 +
n−1 ∑
j=1
xj + xn (1.9)
= x0 +
n−1 ∑
j=1
(−1)j
(1 − 2αj)x0 + 0.1 (1.10)
= 2n(1 − αn)x0 + 0.1 = 1.00m (1.11)
(c) [6 marks] Let us divide one complete oscillation of the block, starting from a fully stretched
condition of the spring, into four distinct sections, requiring the following times in order:
(i) t1: time taken for the block to move from fully stretched to the unstretched position,
(ii) t2: time taken for the block to move from the unstretched position to fully compressed
position,
(iii) t3: time taken for the block to move from fully compressed to the unstretched position,
(iv) t4: time taken for the block to move from the unstretched position to fully stretched
position.
Let the distance covered during the above intervals be d1, d2, d3, and d4, respectively.
Also, let T1 and T2 be the time taken to complete the ﬁrst and the second oscillations,
respectively, starting from the initial displacement, x0.
Compare the above times and distances by inserting an appropriate sign (from among <, >,
or = only) between the given quantities in each of the boxes below. Note that you will be
penalised for 0.5 marks for giving each incorrect answer in this part. You need not to justify
your answer.
t1 t2 t2 t3 t1 t3
d1 d2 d2 d4 T1 T2
Solution:
t1 > t2 t2 < t3 t1 < t3
d1 > d2 d2 > d4 T1 = T2
(d) [2 marks] Qualitatively plot the displacement x from the unstretched position vs the time
t.
Page 4 Code 65 Questions Last six digits of Roll No.:
Solution: Equations of motion are
mẍ = −kx + µmg (ẋ < 0) (1.12)
mẍ = −kx − µmg (ẋ > 0) (1.13)
The general solution to the above equation is simply the solution for the SHO and an
additive constant.
x = Acosωt + C (ẋ < 0) (1.14)
x = Acosωt − C (ẋ > 0) (1.15)
and velocity and the acceleration are
ẋ = −Aω sinωt (1.16)
ẍ = Aω2
cosωt (1.17)
Using the above equations in Eqs. (1.12) and (1.13)
x(t) = Acosωt + αx0 (ẋ < 0) (1.18)
x(t) = Acosωt − αx0 (ẋ > 0) (1.19)
For the given value of µ, α = 0.05. Every half swing exhibits simple harmonic motion.
Turning points are regularly spaced in time at every π/ω intervals. The initial position
at each turning point (or the end position of the previous half turn) determines the
amplitude and phase for the following half turn. During the time interval between the
turning point tj and tj+1
xj(t) = Aj cosωt − αx0(−1)j
(1.20)
Note, for the compression of the spring, ẋ < 0 and j = 1,3,5.... Comparing Eqs. (1.20)
and (1.6)
(−1)j
(1 − 2αj)x0 = Aj(−1)j
− αx0(−1)j
(1.21)
Aj = x0(1 − α(2j − 1)) (1.22)
To summarize the results, the motion of each half swing is essentially the motion of a
simple harmonic oscillator centered about either αx0 or −αx0. At each turning point
(t = jπ/ω), the amplitude of the oscillator decreases by 2αx0. Before j = n, given by the
Eq. (1.8), the mass moves according to
xj(t) = x0
[
{1 − α(2j − 1)}cosωt − (−1)j
α
]
(1.23)
The plot of x vs t for the given value of α is shown below. The displacement lies within
a pair of straight lines (shown by the dotted lines) with slopes ±2αx0/(π/ω).
0 0.2 0.4 0.6 0.8 1 1.2 1.4
−0.1
−5 · 10−2
0
5 · 10−2
0.1
t (s)
x (m)
Page 5 Code 65 Questions
