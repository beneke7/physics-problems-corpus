---
id: kevin-zhou-m4-p026
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p026
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[4] Problem 26. A block of mass M and velocity v0 to the right approaches a stationary puck of
mass m ≪ M. There is a wall a distance L to the right of the puck.
(a) Assuming all collisions are elastic, find the minimum distance between the block and the wall
by explicitly analyzing each collision. (Note that it does not suffice to just use the adiabatic
theorem, because it applies to slow change, while the collisions are sharp. Nonetheless, you
should find a quantity that is approximately conserved after many collisions have occurred.)
(b) Approximately how many collisions occur before the block reaches this minimum distance?
(c) The adiabatic index γ is defined so that PV γ is conserved during an adiabatic process. In one
dimension, the volume V is simply the length, and P is the average force. Using the adiabatic
theorem, infer the value of γ for a one-dimensional monatomic gas.
Solution. (a) Let the speeds of the block and puck be v and w. Every collision, w increases by 2v.
If the block is a distance x from the wall, then a collision happens in time 2x/w. Therefore,
we have
∆w
∆x
=
2v
−2xv/w
= −
w
x
.
Because m ≪ M, many collisions happen. After many collisions have happened, w will be
very large, so in the next collision, ∆x will be small compared to x, and ∆w will be small
compared to w. In this case, we can approximate the finite differences with a derivative,
giving
dw
dx
≈ −
w
x
.
32
Kevin Zhou Physics Olympiad Handouts
Separating and integrating shows that wx is conserved. We could also have arrived at this by
the adiabatic theorem,
I =
I
pdx = mw(2x) ∝ wx.
However, in the earlier collisions (∆w)/w and (∆x)/x aren’t small, so this reasoning is invalid.
For instance, wx is zero before the first collision and nonzero right after it. Thus, we must
treat the first few collisions manually. Right before the second collision, we have
w ≈ 2v0, x ≈ L/3
by one-dimensional kinematics. Right before the third collision we have
w ≈ 4v0, x ≈ L/5
where for these early few collisions we are treating v as constant since m ≪ M. It is not hard
to show that right before collision n+1, we have w ≈ 2nv0 and x ≈ L/(2n+1), which means
that after many (but not too many collisions) we have wx ≈ Lv0. Then, for future collisions,
wx stays at this value.
The block turns around when the puck has all its energy, so
1
2
Mv2
0 =
1
2
mw2
.
Plugging in wx = Lv0 and solving for x gives the solution, x = L
p
m/M.
(b) At each collision we have ∆w = 2v, and energy conservation gives
v2
+
m
M
w2
= v2
0.
Therefore, the number of collisions is approximately
n ≈
Z v0
√
M/m
0
dw
2v
=
1
2
Z v0
√
M/m
0
dw
p
v2
0 − (m/M)w2
=
1
2
r
M
m
Z 1
0
dx
√
1 − x2
=
π
4
r
M
m
.
Note that we didn’t need to separate out the first few collisions here, even though the approx-
imation as an integral technically doesn’t work, because they’re just that not important for
calculating the total number of collisions, which is large. The appearance of π in this result
has a nice geometric interpretation, as explained here.
(c) The analogue of pressure in one dimension is just force. The average force exerted by the
puck, which we now think of as a gas molecule, is
F =
∆p
∆t
=
2mw
2x/w
=
mw2
x
.
Meanwhile, the analogue of volume is one dimension is simply x. Then the conservation of
wx says that Fx3 is conserved, which means γ = 3. This is exactly what we would expect for
a one-dimensional gas, where Cv = kB/2 and Cp = 3kB/2.
33
Kevin Zhou Physics Olympiad Handouts
