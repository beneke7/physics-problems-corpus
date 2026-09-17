---
id: kevin-zhou-p1-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p004
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 4. Some questions about the speed of waves, to be covered in greater detail in W3. For
all estimates, you can look up any numbers you need.
(a) The speed of sound in an ideal gas depends on its pressure p and density ρ. Explain why we
don’t have to use the temperature T or ideal gas constant R in the dimensional analysis, and
then estimate the speed of sound in air.
(b) The speed of sound in a fluid depends only on its density ρ and bulk modulus B = −V dP/dV .
Estimate the speed of sound in water, which has B = 2.1GPa.
The speed of waves on top of the surface of water can depend on the water depth h, the wavelength
λ, the density ρ, the surface tension γ, and the gravitational acceleration g.
(c) Find the speed of capillary waves, i.e. water waves of very short wavelength, up to a dimen-
sionless constant.
(d) Find the speed of long-wavelength waves in very deep water, up to a dimensionless constant.
Solution. (a) We don’t have to use R or T because all that matters is the restoring force,
determined by p, and the inertia, determined by ρ. So we have
[p] =
kg
ms2
, [ρ] =
kg
m3
and a routine dimensional analysis gives
v ∼
r
p
ρ
∼
s
105 Pa
1kg/m3
∼ 300m/s
which is reasonably close. (Actually, the exact answer is v =
p
γp/ρ, as we’ll derive in T3
and W3, so thermodynamics actually does play a role through the dimensionless constant.)
3
Kevin Zhou Physics Olympiad Handouts
(b) We have
[B] =
kg
m · s2
[ρ] =
kg
m3
.
A routine dimensional analysis gives
v ∼
s
B
ρ
∼ 1500m/s.
This is actually very close to the true answer; here there is no dimensionless constant.
(c) In this case, the surface tension force dominates, just as it did for a small water droplet in a
previous problem, which also means that g doesn’t matter. The wavelength is so short that
the waves can’t “see” the depth of the water, so h doesn’t matter. Doing dimensional analysis
with the remaining three parameters gives
v ∼
r
γ
ρλ
.
(d) In this case, the wave is big enough for surface tension not to matter; the restoring force is
gravity, so we keep g and toss out γ. Since the water is even deeper than the wavelength, we
again toss out h. Doing dimensional analysis with the remaining parameters gives
v ∼
p
gλ.
We will derive this in W3. The fact that ρ also dropped out makes sense: when gravity is
the only force, ρ usually doesn’t matter because scaling it up scales all the forces and all the
masses up the same way, keeping accelerations the same.
[3] Problem 5 (Morin 1.5). A particle with mass m and initial speed v is subject to a velocity-
dependent damping force of the form bvn.
(a) For n = 0,1,2,..., find how the stopping time and stopping distance depend on m, v, and b.
(b) Check that these results actually make sense as m, v, and b are changed, for a few values of n.
You should find something puzzling going on. (Hint: to resolve the problem, it may be useful
to find the stopping time explicitly in a few examples.)
Solution. (a) The dimensions of b can be found with [b] = [F/vn] = kg · m1−n · s−2+n. To get a
stopping time or distance, the mass term must be canceled out. So we’re working with

b
m

= m1−n
s−2+n
[v] =
m
s
The stopping time t can be found by canceling out the length dimension. If t ∝ (b/m)αvβ,
then:
α(1 − n) + β = 0 α(−2 + n) − β = 1
Solving yields
α = −1 β = 1 − n, t ∝
mv1−n
b
.
The distance x traveled has dimensions of vt, so
x ∝
mv2−n
b
.
4
Kevin Zhou Physics Olympiad Handouts
(b) The results don’t seem to make sense. At n = 1, it appears that the time it takes to stop
no longer depends on v, which doesn’t seem correct since the stopping time should always
increase with velocity. And for n > 1, the stopping time decreases with velocity, which is even
worse. Similar issues happen for the stopping distance for n ≥ 2.
The resolution is that in these cases, the stopping time/distance are actually infinite, as you
can check explicitly. In other words, dimensional analysis worked, but the hidden dimensionless
prefactor was infinity.
Idea 2
Dimensional analysis applies everywhere. The argument of any function that is not a mono-
mial, such as sinx, must have no dimensions. The derivative d/dx has the opposite dimensions
to x, and the dx in an integral has the same dimensions as x. When you perform an integral,
your first step should usually be to “nondimensionalize” it, i.e. to separate out dimensionful
factors to leave a dimensionless integral.
Example 3
Evaluate the integral
I =
Z a
0
dx
bx2 + c
where b and c are both positive.
Solution
This isn’t a hard integral by any means, but it’s a simple way to demonstrate what we mean
by “nondimensionalizing”. If you do the integral directly, you’ll get lots of intermediate
expressions with a, b, and c in them, which produces clutter and more opportunities for error.
Instead, start by substituting u =
p
b/cx, to get
I =
1
√
bc
Z u0
0
du
u2 + 1
=
1
√
bc
tan−1
(u0), u0 = a
p
b/c.
We can now check this by dimensional analysis. Let’s suppose this integral arose from a
problem where x had dimensions of length, [x] = m, and b was dimensionless. Then we must
have [a] = m, [c] = m2. Our answer makes sense if [I] = m−1 and [u0] = 1, which both hold.
