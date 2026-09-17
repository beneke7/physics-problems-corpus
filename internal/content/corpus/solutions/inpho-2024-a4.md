---
id: inpho-2024-a4
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2024-a4
solution_type: official
source_document: solution-document-inpho-2024-s
source_pdf: cache/phoxiv/inpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2024_S.pdf."
---

4. Mag-Grav Tussle
A rectangular conducting loop of mass m, width w, length h, and self inductance L is held in
the vertical x-y plane with its bottom edge along the y-axis (see ﬁgure on the left below). In
this problem take the resistance of the loop to be zero. A uniform magnetic ﬁeld ⃗ B is applied
horizontally as shown in the ﬁgure such that
⃗ B = Bk̂ for x ≤ 0
= 0 for x > 0
The loop is released from rest at time t = 0 and descends under gravity (see the ﬁgure to the right
below). The acceleration due to gravity g is in +x direction.
w
h
x = 0 x = 0
(a) (b)
x
y
x x
h − x
⃗ B
⃗ B
(a) [5 marks] Obtain x(t), the position of the bottom edge of the loop at time t, in terms of
relevant variables.
H B C S E
Page 16 INPhO 2024 Questions Last four digits of Roll No.:
Solution:
mẍ = mg − BIw (4.1)
ϕ = Bw(h − x) + LI (4.2)
−IR = ϕ̇ = −Bwẋ + L ˙ I (4.3)
Since R = 0 Implies
˙ I =
Bwẋ
L
(4.4)
Diﬀerentiating equation of motion with respect to t
mv̈ = −Bw ˙ I (4.5)
v̈ =
−B2w2ẋ
mL
(4.6)
= −ω2
0v (4.7)
where
ω2
0 =
B2w2
mL
(4.8)
The solution to v is
v = Acosω0t + Dsinω0t (4.9)
v̇ = −Aω0 sinω0t + Dω0 cosω0t (4.10)
v̈ = −Aω2
0 cosω0t + Dω2
0 sinω0t (4.11)
Applying boundary conditions at t = 0, v̇ = g, v = 0 which implies that
D =
g
ω0
(4.12)
A = 0 (4.13)
Hence,
v =
g
ω0
sinω0t (4.14)
x = −
g
ω2
0
cosω0t + C (4.15)
at t = 0, x = 0, which implies that C =
g
ω2
0
Hence,
x =
g
ω2
0
(1 − cosω0t) (4.16)
(b) [6 marks] Imagine diﬀerent possible scenarios for the nature of motion of the loop and plot
x(t) for each.
Solution: We found that
x =
g
ω2
0
(1 − cosω0t) (4.17)
The frequency of the oscillation is inversely proportional to m, and the amplitude increases
H B C S E
Page 17 INPhO 2024 Questions
with m. When the loop oscillates, the amplitude is
xm = 2
g
ω2
0
= 2
gmL
B2w2
(4.18)
We can take three limiting cases, m > m0, and m < m0, where m0 = hB2w2/2gL.
For m < m0, the loop oscillates. For m > m0, the loop will come out of the magnetic
ﬁeld quicker it falls under gravity. Similarly, any suitable inequality involving g, L, h, B,
m, and w, which distinguishes the above two cases correctly, will be considered.
