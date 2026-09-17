---
id: solution-document-kevin-zhou-p1sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-p1-ex001, kevin-zhou-p1-ex004, kevin-zhou-p1-ex005, kevin-zhou-p1-ex006, kevin-zhou-p1-ex007, kevin-zhou-p1-ex008, kevin-zhou-p1-ex009, kevin-zhou-p1-ex011, kevin-zhou-p1-ex012, kevin-zhou-p1-ex014, kevin-zhou-p1-ex016, kevin-zhou-p1-ex018, kevin-zhou-p1-ex019, kevin-zhou-p1-p003, kevin-zhou-p1-p004, kevin-zhou-p1-p006, kevin-zhou-p1-p007, kevin-zhou-p1-p009, kevin-zhou-p1-p010, kevin-zhou-p1-p011, kevin-zhou-p1-p015, kevin-zhou-p1-p016, kevin-zhou-p1-p017, kevin-zhou-p1-p018, kevin-zhou-p1-p019, kevin-zhou-p1-p020, kevin-zhou-p1-p022, kevin-zhou-p1-p028, kevin-zhou-p1-p029, kevin-zhou-p1-p031, kevin-zhou-p1-p033, kevin-zhou-p1-p035, kevin-zhou-p1-p036]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Problem Solving I: Mathematical Techniques
For the basics of dimensional analysis and limiting cases, see chapter 1 of Morin or chapter 2 of Order
of Magnitude Physics. Many more examples are featured in The Art of Insight; some particularly
relevant sections are 2.1, 5.5, 6.3, 8.2, and 8.3. Other sections will be mentioned throughout the
course. There is a total of 89 points.
1 Dimensional Analysis
Idea 1
Dimensional analysis is simply the statement that the dimensions of physical equations
should match on both sides. This simple idea can sometimes solve whole problems by itself.
Dimensional analysis is also a valuable consistency check. For example, if you’re trying
to derive the surface area of a sphere and find 4πr3, you can instantly know you made a
mistake. As another example, if a problem says the speed of an object is “small”, this
technically isn’t dimensionally correct unless we compare it to another speed. Thus, the
problem might really mean you should assume the speed is small compared to the speed of
light, v ≪ c, which tells you something important.
To be precise, we should distinguish dimensions and units. The dimensions of a physical
quantity determine what kind of quantity it is, while a unit is a measure of a dimension.
Thus, for example, somebody’s height h can be measured in units of feet or meters, but both
have dimensions of length; this can be written as [h] = [ft] = [m] = L, where the brackets
indicate dimensions. Another example is that angles are dimensionless, but can be measured
in units of degrees or radians. These distinctions are not that important for our purposes, so
we will be sloppy and conflate dimensions with units, writing the equivalent of [h] = m.
Example 1: F = ma 2018 B11
A circle of rope is spinning in outer space with an angular velocity ω0. Transverse waves on
the rope have speed v0, as measured in a rotating reference frame where the rope is at rest.
If the angular velocity of the rope is doubled, what is the new speed of transverse waves?
Solution
To solve this problem by dimensional analysis, we reason about what could possibly affect
the speed of transverse waves. The result could definitely depend on the rope’s length L,
mass per length λ, and angular velocity ω0. It could also depend on the tension, but since
the tension balances the centrifugal force, it is determined by the other quantities. Thus the
quantities we have are
[L] = m, [λ] = kg/m, [ω0] = 1/s.
Since λ is the only thing with dimensions of mass, it can’t affect the speed, because there is
nothing that could cancel out the mass dimension. So the only possible answer is
v0 ∼ Lω0
1Kevin Zhou Physics Olympiad Handouts
where the ∼ indicates equality up to a dimensionless constant, which cannot be found by
dimensional analysis alone. In practice, the constant usually won’t be too big or too small,
so Lω0 is a decent estimate of v0. But even if it isn’t, the dimensional analysis tells us the
scaling: if ω0 is doubled, the new speed is 2v0.
Example 2
Find the dimensions of the magnetic field.
Solution
To do this, we just think of some simple equation involving B, then solve for its dimensions.
For example, we know that F = q(v × B), so
[B] =
[F]
[q][v]
=
kg · m
s2
1
C
1
m/s
=
kg
C · s
.
[2] Problem 1. Find the dimensions of power, the gravitational constant G, the permittivity of free
space ϵ0, and the ideal gas constant R.
Solution. The dimensions are
[P] =
kgm2
s3
, [G] =
m3
kgs2
, [ϵ0] =
C2
s2
kgm3
, [R] =
J
molK
=
kgm2
molKs2
.
An easy method is to use formulas containing the desired quantity, such as P = Fv, F = GMm/r2,
F = q2/(4πϵ0r2), and PV = nRT, where the dimensions of the other quantities are already known.
[1] Problem 2. Derive Kepler’s third law for circular orbits, using only dimensional analysis. (Why
didn’t people figure out this argument 2000 years ago?)
Solution. The answer should only depend on G, M, and the radius r. By dimensional analysis,
we have the equality of dimensions
[r] = [(GM)1/3
T2/3
]
which implies we must have T2 ∝ r3. But of course, the dimensions of G follow from the inverse
square law for gravity, and you need to know which quantities are allowed in the dimensional analysis
in the first place. In other words, you need the whole structure of Newtonian mechanics to be set
up already to run this argument.
[2] Problem 3. Some questions about vibrations.
(a) The typical frequency f of a vibrating star depends only on its radius R, density ρ, and
the gravitational constant G. Use dimensional analysis to find an expression for f, up to a
dimensionless constant. Then estimate f for the Sun, looking up any numbers you need.
(b) The typical frequency f of a small water droplet freely vibrating in zero gravity could depend
on its radius R, density ρ, surface tension γ, and the gravitational constant G. This is too
many parameters for dimensional analysis to work, but if you think about it for a second,
you’ll see that one of them doesn’t actually matter. Using this, find an expression for f up to
a dimensionless constant.
2Kevin Zhou Physics Olympiad Handouts
Solution. (a) We just do the usual dimensional analysis,
[f] = s−1
[R] = m [ρ] = kg/m3
[G] =
m3
kg · s2
To cancel out the units of kg, we consider the product of G and ρ, which has units [ρG] = s−2.
Then to get [f] = s−1,
f ∼
p
Gρ ∼ 3 × 10−4
Hz
which is in the right range. These oscillations are measured in the field of helioseismology.
Another application of this result is that the time needed for a ball of gas of density ρ to
collapse is of order 1/
√
Gρ, called the free fall time. This timescale plays an important role
in structure formation in the early universe.
(b) In any nontrivial dimensional analysis problem, you will have too many parameters, and will
have to think about how to reduce them. The right ones to drop depend on the system.
Here, the gravitational forces of the small droplet on itself are completely negligible compared
to surface tension, so we can drop G. Performing dimensional analysis with R, ρ, and γ gives
f ∼
r
γ
ρR3
.
Of course, part (a) is equivalent to starting with the same set of four parameters and dropping
γ, which makes sense since the objects considered are huge.
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
3Kevin Zhou Physics Olympiad Handouts
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
4Kevin Zhou Physics Olympiad Handouts
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
[2] Problem 6. We are given the integral
Z ∞
−∞
e−x2
dx =
√
π.
For positive a, find the value of the integral
Z ∞
−∞
e−ax2+bx+c
dx
and verify that your answer makes dimensional sense.
5Kevin Zhou Physics Olympiad Handouts
Solution. We can simply factor out the dependence on c, and get rid of the a in the exponent by
taking u =
√
ax, to get
ec
√
a
Z ∞
−∞
e−u2+(b/
√
a)u
du.
To get rid of the pesky linear term in the exponent, we note that
−v2
= −

u −
b
2
√
a
2
= −u2
+
b
√
a
u −
b2
4a
so that we can “complete the square” in the exponent by working in terms of v, for
ec+b2/4a
√
a
Z ∞
−∞
e−v2
dv = ec+b2/4a
r
π
a
.
To check this makes sense, let’s again suppose that [x] = m, which implies [a] = m−2, [b] = m−1,
and [c] = 1. The overall integral must have dimensions of m, which it does, and the argument of
the exponent must be dimensionless, which it is.
Remark
Consider the value of the definite integral
Z x
−∞
e−x′2
dx′
.
You can try all day to compute the value of this integral, using all the integration tricks
you know, but nothing will work. The function e−x2
simply doesn’t have an antiderivative
in terms of the functions you already know, i.e. in terms of polynomials, exponents and
logarithms, and trigonometric functions (for more discussion, see here).
If you ask a computer algebra system like Mathematica, it’ll spit out something involv-
ing erf(x), which is defined by being an antiderivative of e−x2
. But is this really an
“analytic” solution? Isn’t that just saying “the integral of e−x2
is equal to the integral
of e−x2
”? Well, like many things in math, it depends on what the meaning of the word “is” is.
The fact is, the set of functions we regard as “elementary” is arbitrary; we just choose a set
that’s big enough to solve most of the problems we want, and small enough to attain fluency
with. (Back in the days before calculators, it just meant all the functions whose values were
tabulated in the references on hand.) If you’re uncomfortable with erf(x), note that a similar
thing would happen if a little kid asked you what the ratio of the opposite to adjacent sides
of a right triangle is. You’d say tan(x), but they could say it’s tautological, because the only
way to define tan(x) at their level is as the ratio of opposite to adjacent sides. Similarly,
1/x has no elementary antiderivative – unless you count log(x) as elementary, but ultimately
log(x) is simply defined to be such an antiderivative. It’s all tautology, but it’s still useful.
[2] Problem 7. In particle physics it is conventional to work in “natural units”, where the numeric
values of ℏ and c are equal to 1. For example, if we take the second as the unit of time, then we
can take the light-second as the unit of length, so that c = 1light-second/second. This is usually
6Kevin Zhou Physics Olympiad Handouts
sloppily written as “ℏ = c = 1” so that factors of ℏ and c can be suppressed. However, you can
always restore these factors by dimensional analysis.
According to standard references, the mass of the Higgs boson is about 125GeV, where 1eV is
the energy gained by an electron accelerated through a voltage difference of 1V. Fix the dimensions
of this statement and find the mass of the Higgs boson in kilograms.
Solution. One easy way to start out dimensional analysis is with famous equations: E = mc2, or
E = 1
2mv2 to get m ∼ E/c2. Thus the mass of the Higgs boson is m = 125GeV/c2 = 2.22×10−25 kg.
[3] Problem 8.  W 1 0USAPhO 2002, problem A3.
Example 4
The wavefunction ψ(x,y,z) of the electron in a hydrogen atom obeys the Schrodinger equation
−
ℏ2
2m

∂2
∂x2
+
∂2
∂y2
+
∂2
∂z2

ψ −
e2
4πϵ0r
ψ = Eψ.
Estimate the size of the hydrogen atom.
Solution
By solving this equation, we can find a discrete set of solutions ψ(x,y,z), which correspond
to a discrete set of allowed energies E. However, to estimate the typical size of the solutions,
we can just use dimensional analysis. The dimensionful input parameters in the equation
above are m, ℏ, and e2/4πϵ0, which have dimensions
[m] = kg, [ℏ] = J · s = kgm2
s−1
, [e2
/4πϵ0] = J · m = kgm3
s−2
.
Doing dimensional analysis, the only length scale is the Bohr radius,
a0 =
4πϵ0ℏ2
me2
∼ 10−10
m.
I’ve thrown in a 4π above because ϵ0 shows up in the combination 4πϵ0. The dimensional
analysis would be valid without this factor, but as you’ll see in problem 11, if you don’t
include it then annoying compensating factors of 4π will appear elsewhere.
Classically (i.e. without ℏ), there is no way to form a length, and hence there should be
no classically stable radius for the atom. (This was one of the arguments used by Bohr to
motivate quantum mechanics; it appears in the beginning of his paper introducing the Bohr
model.) Once we introduce ℏ, there are three dimensionful parameters in the problem, as
listed above. And there are exactly three fundamental dimensions. So there is only one way
to create a length, which we found above, one way to create a time, one way to create an
energy, and so on. This means that the solutions to the Schrodinger equation above look
qualitatively the same no matter what these parameters are; all that changes are the overall
length, time, and energy scales. In problem 11, you’ll investigate how this conclusion changes
when we add more dimensionful parameters.
7Kevin Zhou Physics Olympiad Handouts
Dimensional analysis is especially helpful with scaling relations. For example, a question might ask
you how the radius of the hydrogen atom would change in a world where the electron mass was
twice as large. You would solve this problem in the exact same way as the example above, using
dimensional analysis to show that a0 ∝ 1/m.
[3] Problem 9. In this problem we’ll continue the dimensional analysis of the Schrodinger equation.
(a) Estimate the typical energy scale of quantum states of the hydrogen atom, as well as the
typical “velocity” of the electron, using dimensional analysis.
(b) Do the same for one-electron helium, the system consisting of a helium nucleus (containing
two protons) and one electron.
(c) Estimate the electric field needed to rip the electron off the hydrogen atom.
Solution. (a) Recall the electrostatic potential energy formula, E = kq2/r. We have a length
scale, a0 to replace r. For velocity, we use E ∼ mv2, giving
E ∼
me4
(4πϵ0)2ℏ2
, v ∼
e2
4πϵ0ℏ
.
In fact, the binding energy of the hydrogen atom in its ground state is
E =
me4
2(4πϵ0)2ℏ2
= 13.6eV
which is a constant known as the Rydberg. So the dimensional argument (keeping the factors
of 4π) gets the answer right to a factor of 2.
(b) Adding the second proton would double the charge inside the nucleus, so the expressions for
energy and velocity should stay the same except e2 would be replaced with 2e2 (not 4, since
the electron charge stays the same) and thus the energy would be 4e4. In general, with Z as
the atomic number,
E ∼
mZ2e4
(4πϵ0)2ℏ2
, v ∼
Ze2
4πϵ0ℏ
.
(c) Physically, the work the electric field does by moving the electron across the radius of its orbit
should be enough to overcome its binding energy to the proton. This also tells us how to set
up the dimensional analysis; we have electric field
|E| ∼
E
ea0
∼
m2
ee5
(4πϵ0)3ℏ4
∼ 1012
V/m.
This is a tremendously large electric field!
All of the results above are not that accurate, but they become much more accurate if we re-
place ϵ0 with 4πϵ0. That in turn makes sense because these factors always appear together in
electromagnetism.
8Kevin Zhou Physics Olympiad Handouts
Idea 3: Buckingham Pi Theorem
Dimensional analysis can’t always pin down the form of the answer. If one has N quanti-
ties with D independent dimensions, then one can form N − D independent dimensionless
quantities. Dimensional analysis can’t say how the answer depends on them.
A familiar but somewhat trivial example is the pendulum: its period depends on L, g, and the
amplitude θ0, three quantities which contain two dimensions (length and time). Hence we can form
one dimensionless group, which is clearly just θ0 itself. The period of a pendulum is T = f(θ0)
p
L/g.
Example 5: F = ma 2014 12
A paper helicopter with rotor radius r and weight W is dropped from a height h in air with
a density of ρ. Assuming the helicopter quickly reaches terminal velocity, use dimensional
analysis to analyze the total flight time T.
Solution
The answer can only depend on the parameters r, W, h, and ρ. There are four quantities in
total, but three dimensions (mass, length, and time), so by the Buckingham Pi theorem we
can form one independent dimensionless quantity. In this case, it’s clearly r/h. Continuing
with routine dimensional analysis, we find
T = f(r/h)h2
r
ρ
W
.
The form of this expression is a bit arbitrary; for instance, we could also have written
f(r/h)r2 in front, or even f(r/h)r37h−35. These adjustments just correspond to pulling
factors of r/h out of f, not to changing the actual result.
This is as far as we can get with dimensional analysis alone, but we can go further using
physical reasoning. If the helicopter quickly reaches terminal velocity, then it travels at a
constant speed. So we must have T ∝ h, which means that f(x) ∝ x, and
T ∝ rh
r
ρ
W
.
Example 6
An hourglass is constructed with small sand grains of density ρ, and an orifice of diameter d.
When the sand level above the orifice is h, what is the mass flow rate µ?
Solution
The answer can only depend on ρ, d, h, and g. The Buckingham Pi theorem gives
µ = f(h/d)ρ
p
gd5.
That’s as far as we can get with dimensional analysis; to go further we need to know more
9Kevin Zhou Physics Olympiad Handouts
about sand. If we were dealing with an ideal fluid, then the flow speed would be v =
√
2gh by
Torricelli’s law, which means the flow rate has to be proportional to
√
h. Then f(x) ∝
√
x,
giving the result µ ∝ ρd2
√
gh. This is a good estimate as long as the orifice isn’t so small
that viscosity starts to dominate.
But this isn’t how sand works: measurements show that the pressure at the orifice doesn’t
actually depend on the height of the sand, an empirical result known as Janssen’s law. That’s
because sand is a granular material whose motion is dominated by the friction between sand
grains, and this friction prevents the additional pressure from propagating downward. The
resulting flow rate is independent of h, as can be confirmed by watching an hourglass run.
Then f(x) is a constant, giving µ ∝ ρ
p
gd5. This neat, experimentally verified result is called
Beverloo’s law, and it’s essential in industry to design grain hoppers and corn silos.
Remark
One has to be a little careful with the Buckingham Pi theorem. For example, if all we
had were 3 speeds vi, we can form two dimensionless quantities: v1/v2 and v1/v3. (The
quantity v2/v3 is not independent, since it is the quotient of these two.) But there are 3 quan-
tities with 2 dimensions (length and time), so we naively expect only 1 dimensionless quantity.
The problem is that the two dimensions really aren’t independent: for any quantity built
from the vi, a power of length always comes with an inverse power of time, so there’s only
one independent dimension. These considerations can be put on a more rigorous footing in
linear algebra, where the Buckingham Pi theorem is merely a special case of the rank-nullity
theorem. If you’re ever in doubt, you can just forget about the theorem and play with the
equations directly.
Remark
Dimensional analysis is an incredibly common tool in Olympiad physics because it lets you
say a lot even without much advanced knowledge. If a problem ever says to find some
quantity “up to a constant/dimensionless factor”, or how that quantity scales as another
quantity changes, or what that quantity is proportional to, it’s almost certainly asking you
to do dimensional analysis. Another giveaway is if the problem looks extremely technical and
advanced, because they can’t actually be.
[3] Problem 10 (Insight). In this problem we’ll do one of the most famous dimensional analyses of
all time: estimating the yield of the first atomic bomb blast. Such a blast will create a shock wave
of air, which reaches a radius R at time t after the blast. The air density is ρ, and we want to
estimate the blast energy E.
(a) Declassified photographs of the blast indicate that R ≈ 100m at time t ≈ 15ms. The density
of air is ρ ≈ 1kg/m3. Estimate the blast energy E.
(b) How much mass-energy (in grams) was used up in this blast?
(c) If we measure the entire function R(t), what general form would we expect it to have, if this
dimensional analysis argument is correct?
10Kevin Zhou Physics Olympiad Handouts
(d) Repeat part (c) for the case where the shock wave is cylindrical. (This would be relevant if
one detonated a long chain of explosives.)
Solution. (a) The only way to write an expression with the right dimensions is
E ∼
R5ρ
t2
.
Plugging in the numbers gives E ∼ 4 × 1013 J.
(b) The mass-energy equivalent is m = E/c2 ∼ 0.5g. This is quite reasonable, as fission can only
release a small fraction of the mass-energy (about 0.1%) of a sample, and a typical critical
mass is ∼ 10kg.
(c) Let’s do the dimensional analysis in reverse: we know E is fixed, so the only way to write an
expression with the right dimensions for R is
R ∼ (Et2
/ρ)1/5
∼ t2/5
.
This indeed matches observations of the initial blast.
(d) In this case, the dimensional analysis changes because the energy of an infinite cylindrical
shock wave is infinite; the meaningful quantity is the energy per length λ. Repeating the
dimensional analysis gives
R ∼ (λt2
/ρ)1/4
∼ t1/2
.
Remark
The British physicist G. I. Taylor performed the dimensional analysis in problem 10 upon
seeing a picture of the first atomic blast in a magazine. The result was so good that the
physicists at the Manhattan project thought their security had been breached!
During World War II, the value of the critical mass needed to set off a nuclear explosion was
important and nontrivial information. Some say the Nazi effort to make a bomb was stalled
by Werner Heisenberg’s huge overestimation of it, and after the war, the specific value was
kept a secret. But it couldn’t last. Already by 1947, the simple estimate was published in
the American Journal of Physics.
[5] Problem 11. We now consider the Schrodinger equation for the hydrogen atom in greater depth.
We begin by switching to dimensionless variables, which is useful for the same reason that writing
integrals in terms of dimensionless variables is: it highlights what is independent of unit choices.
(a) Define a dimensionless length variable r̃ = r/a0, where a0 is the length scale found in example 4.
In the Schrodinger equation, the ∇2 term is defined by
∇2
=
∂2
∂x2
+
∂2
∂y2
+
∂2
∂z2
.
When we use dimensionless variables, we also need to make sure the derivatives in the equation
are with respect to those variables. That is, we should use
˜ ∇2
=
∂2
∂x̃2
+
∂2
∂ỹ2
+
∂2
∂z̃2
.
Using the chain rule, show that
˜ ∇2
= a2
0∇2
.
11Kevin Zhou Physics Olympiad Handouts
(b) Similarly show that if we define a dimensionless energy Ẽ = E/E0, using the energy scale E0
found in problem 9, then the Schrodinger equation can be written in a form like
−˜ ∇2
ψ −
1
r̃
ψ = Ẽψ
Here I’ve suppressed all dimensionless constants, like factors of 2, because they depend on
how you choose to define E0 and don’t really matter at this level of precision.
The result of this part confirms what we concluded above: solutions to the Schrodinger
equation don’t qualitatively depend on the values of the parameters, because they all come
from scaling a solution to this one dimensionless equation appropriately.
(c) This is no longer true in relativity, where the total energy is
E =
p
p2c2 + m2c4.
Assuming p ≪ mc, perform a Taylor expansion to show that the next term is Ap4, and find
the coefficient A. (You’ll need the binomial theorem, described below.)
(d) In quantum mechanics, the momentum is represented by a gradient, p → −iℏ∇. (We will see
why in X1.) Show that the Schrodinger equation with the first relativistic correction is
−
ℏ2
2m
∇2
ψ −
e2
4πϵ0r
ψ + ℏ4
A∇4
ψ = Eψ.
(e) Since there is now one more dimensionful quantity in the game, it is possible to combine the
quantities to form a dimensionless one. Create a dimensionless quantity α that is proportional
to e2/(4πϵ0), then numerically evaluate it. This is called the fine structure constant. It serves
as an objective measure of the strength of the electromagnetic force, because it is dimensionless,
and hence its value doesn’t depend on an arbitrary unit system.
(f) As the number of protons in the nucleus increases, the relativistic correction becomes more
important. Estimate the atomic number Z where the correction becomes very important.
Solution. (a) For the first derivative,
dψ
dx̃
=
dψ
dx
dx
dx̃
.
With the length scale, dx/dx̃ = a0 which is a constant. The second derivative does the same,
which gives two factors of a0. This holds true for all the other dimensions, so
˜ ∇2
= a2
0∇2
.
(b) Ignoring all numerical factors and dividing by E0 = e2/ϵ0a0, we get
−
ℏ2ϵ0a0
me2

1
a2
0
˜ ∇2

ψ −
a0
r
ψ = (E/E0)ψ
which simplifies to
−˜ ∇2
ψ −
1
r̃
ψ = Ẽψ.
12Kevin Zhou Physics Olympiad Handouts
(c) Since
√
1 + x ≈ 1 + x/2 + (1/2)(−1/4)x2,
E = mc2
r
1 +
p2c2
m2c4
≈ mc2
+
p2
2m
−
1
8
p4c4
m3c6
which implies
A = −
1
8m3c2
.
(d) With p4 = ℏ4∇4, this is simply added to the left hand side of the equation as a correction of
the first order momentum term p2/2m = −ℏ2∇2/2m,
−
ℏ2
2m
∇2
ψ −
e2
4πϵ0r
ψ + ℏ4
A∇4
ψ = Eψ.
(e) Just like in part (b), divide both sides by E0. The dimensionless quantity in the added term
should be
ℏ4
m3c2a4
0
ϵ0a0
e2
=
e4
ℏ2c2ϵ2
0
.
To make it proportional to e2, take the square root to get
α =
e2
4πϵ0ℏc
≈
1
137
.
(f) The relativistic correction is important when the above term is of order 1, and since there’s
an electron charge e and a nucleus with charge +Ze, replace e2 with Ze2. It’s order one when
Zα ≈ 1.
So the atomic number when the correction becomes very important is around 137. Actually,
even for moderately heavy elements, the corrections are already noticeable and must be
accounted for. As a concrete example, if you don’t account for relativistic effects, you would
predict the color of gold to be silver instead. For more about the relativistic chemistry of gold,
see this paper.
You probably won’t see any differential equations as complex as the ones in the above problem
anywhere in Olympiad physics, but the key idea of using dimensionless quantities to simplify and
clarify the physics can be used everywhere.
[5] Problem 12.  h 1 0IPhO 2007, problem “blue”. This problem applies thermodynamics and dimen-
sional analysis in some exotic contexts.
Example 7
Estimate the Young’s modulus for a material with interatomic separation a and typical atomic
bond energy Eb. Use this to estimate the spring constant of a rod of area A and length L,
as well as the speed of sound, if each atom has mass m.
13Kevin Zhou Physics Olympiad Handouts
Solution
This example is to get you comfortable with the Young’s modulus Y , which occasionally
comes up. It is defined in terms of how much a material stretches as it is pulled apart,
Y =
stress
strain
=
restoring force/cross-sectional area
change in length/length
.
The Young’s modulus is an intrinsic property of the material, which doesn’t depend on its
shape, unlike the spring constant. For example, putting two identical springs side-by-side
doubles the spring constant, because they both contribute to the force. However, for a fixed
strain, both the force and area double, so the stress remains unchanged. Similarly, putting
two identical springs end-to-end halves the spring constant, because they both stretch.
However, for a fixed stress, both the length and change in length double, so the strain
remains unchanged. So you would quote a material’s Young’s modulus instead of its spring
constant, for the same reason you would quote a material’s resistivity instead of its resistance.
We note that Y has the dimensions of energy per length cubed, so
Y ∼
Eb
a3
solely by dimensional analysis. (Of course, for this dimensional analysis to work, one
has to understand why Eb and a are the only relevant quantities. It’s because Y , or
equivalently the spring constant k, determines the energy stored in a stretched spring.
But microscopically this comes from the energy stored in interatomic bonds when
they’re stretched. So the relevant energy scale is the bond energy Eb, and the relevant
distance scale is a, because that determines how many bonds get stretched, and by how much.)
To relate Y to the spring constant of a rod, note that
Y =
F/A
∆L/L
=
L
A
F
∆L
= k
L
A
for a rod, giving the estimate k ∼ AEb/La3. This is correct to within an order of magnitude!
To relate Y to the speed of sound, note that the sound speed, like most wave speeds, depends
on the material’s inertia and its restoring force against distortions. Since the speed of
sound doesn’t depend on the extrinsic features of a metal object, such as a length, both of
these should be measured intrinsically. The intrinsic measure of inertia is the mass density
ρ ∼ m/a3, while the intrinsic measure of restoring force is just Y . By dimensional analysis,
v ∼
s
Y
ρ
∼
s
Eb/a3
m/a3
∼
r
Eb
m
.
This is also reasonably accurate. For example, in diamond, Eb ∼ 1eV (a typical atomic energy
scale), while a carbon nucleus contains 12 nucleons, so to the nearest order of magnitude,
m ∼ 10mp, where a useful fact is mp ∼ 1GeV/c2. Thus,
v ∼
r
1eV
1010 eV
c ∼ 10−5
c ∼ 3km/s
14Kevin Zhou Physics Olympiad Handouts
which is the right order of magnitude. (The true answer is 12km/s.)
Amazingly, we can get an even rougher estimate of v for any solid in terms of nothing besides
fundamental constants. To be very rough, the binding energy is on the order of that of
hydrogen. As you found in problem 9, this is, by dimensional analysis,
Eb ∼
1
4πϵ0
e2
a0
∼ me

e2
4πϵ0ℏ
2
.
We take the nuclear mass to be very roughly the proton mass mp, which gives
v
c
∼
s
me
mp

e2
4πϵ0ℏc
2
∼ α
r
me
mp
where α is as found in problem 11. This expresses the speed of sound in terms of the
dimensionless strength of electromagnetism α, the electron to proton mass ratio, and the
speed of light. The approximations we have made have been so rough that now the answer
is off by at least an order of magnitude, but now we know how the answer would change if
the fundamental constants did.
Estimates as simple as these can be surprising to even seasoned physicists: in 2020, the
simple estimate above was rediscovered and published in one of the top journals in science.
If you want to learn how to do more of these estimates, this paper is a good starting point.
Remark
A warning: from these examples, you could get the idea that dimensional analysis gives you
nearly godlike powers, and the ability to write down the answer to most physics problems
instantly. In reality, it only works if you’re pretty sure your physical system depends on
only about 3 or 4 variables – and the hard part is often finding which variables matter.
For example, as we saw above, you can’t get Kepler’s third law for free because that
requires knowing the dimensions of G, which require knowing that gravity is an inverse
square law in the first place, a luxury Kepler didn’t have. And as another example, we
couldn’t have figured out E = mc2 long before Einstein, as who would have thought that
the speed of light had anything to do with the energy of a lump of matter? Without the
framework of relativity, it seems as irrelevant as the speed of sound or the speed of water waves.
Fortunately, carrying out dimensional analysis in practice is usually fairly straightforward.
Often, on exams, you’ll simply be told which variables matter. And in general, you should
get into the habit of doing it constantly, to check your work.
Example 8
Cutting-edge paleontological research has found that the famed T. Rex was essentially a
gigantic chicken. Suppose a T. Rex is about N = 20 times larger in scale than a chicken.
How much larger is its weight, cross-sectional area of bone, and walking speed?
15Kevin Zhou Physics Olympiad Handouts
Solution
These kinds of biological scaling arguments are fun to think about, though the reliability of
the results is somewhat questionable – the data is extremely noisy, and if any given scaling law
doesn’t quite match it, you can always think a bit more, and come up with a new argument
yielding a different scaling. But here are a few simple examples:
• Since the densities should match, the weight should scale with the volume, so as N3.
• Since the maximum compressive pressure that bone can take should be the same, the
bone area should scale with the weight, so also as N3. That is, the width of the bones
scales as N3/2, while their length L scales only as N. This is the reason small animals
are strong relative to their weight, while large ones need to be very bony to even stand.
The largest animals today are whales, as they don’t need to support their own weight.
• As a very crude model of walking, we can think of the legs as swinging like a free
pendulum. The length of one step is proportional to L, while the period of the steps is
proportional to
√
L. Thus, the walking speed scales as
√
L ∝
√
N.
There’s an entire literature on these arguments. For instance, this delightful paper discusses
how furry mammals shake to dry themselves off. This is an increasingly severe problem for
smaller mammals, since a relatively larger amount of water will cling to them after getting
wet, which can cause hypothermia. Using elementary fluid mechanics, the paper argues that
the optimal frequency the mammal will shake to dry itself off scales as f ∝ m−3/16.
Example 9
How does the maximum jump height of an animal depend on its length scale L? How about
the gravitational acceleration g?
Solution
The maximum jump height h satisfies E = mgh where E is the energy supplied by the
muscles. But both the total mass m and the animal’s muscle mass (which determines E)
scale as L3, so we have h ∝ L0. So the jump height doesn’t scale with size: a dinosaur
can’t jump much higher than a human – and indeed, we can’t jump much higher than fleas can!
The other half of the problem seems very simple: we must have h ∝ 1/g because neither
E or m depend on g. But this is completely wrong! In gravity 10g, a person wouldn’t be
able to jump at all; they’d be so crushed by their own weight that they wouldn’t even be
able to stand. Mathematically, the dimensional analysis argument fails here because the
answer depends on the detailed biomechanics of muscle and bone, which involve many more
dimensionful quantities. By contrast, the result h ∝ L0 works well because the animals
we were comparing all evolved so that their muscles would work reasonably well in Earth’s
gravity, releasing a decent fraction of their stored energy in the short time required for a
jump. So, as remarked above, you can’t solve every problem by just listing a few quantities
and doing dimensional analysis – you really have to understand the system each time.
16Kevin Zhou Physics Olympiad Handouts
2 Approximations
Idea 4: Taylor Series
For small x, a function f(x) may be approximated as
f(x) = f(0) + xf′
(0) +
x2
2
f′′
(0) + ... +
xn
n!
f(n)
(0) + O(xn+1
)
where we will write O(xn) for an error term that shrinks as x → 0 at least as fast as xn.
(This will be convenient, though it’s the opposite of the usage in computer science, where
“big-O” notation denotes how fast terms can grow as x → ∞.)
There are a few Taylor series that are essential to know. The most important are
exp(x) = 1 + x +
x2
2
+
x3
6
+ O(x4
), log(1 + x) = x −
x2
2
+
x3
3
− O(x4
)
and the small angle approximations
sinx = x −
x3
6
+ O(x5
), cosx = 1 −
x2
2
+ O(x4
).
Another Taylor series you learned long before calculus class is
1
1 − x
= 1 + x + x2
+ x3
+ O(x4
).
Usually you’ll only need the first one or two terms, but for practice we’ll do examples with
more. If any of these results aren’t familiar, you should rederive them!
Example 10
Find the Taylor series for tanx up to, and including the fourth order term.
Solution
By the fourth order term, we mean the term proportional to x4. (Not the fourth nonzero
term, which would be O(x7).) Of course, tanx is an odd function, so the O(x4) term is
zero, which means we only need to expand up to O(x3). That means we can neglect O(x4)
terms and higher everywhere in the computation, subject to some caveats we’ll point out later.
By definition, we have
tanx =
sinx
cosx
=
x − x3/6 + O(x5)
1 − x2/2 + O(x4)
.
However, it’s a little tricky because we have a Taylor series in a denominator. There are
two ways to deal with this. We could multiply both sides by cosx, and expand tanx in
a Taylor series with unknown coefficients. Then we would get a system of equations that
will allow us to solve for the coefficients recursively, a technique known as “reversion of series”.
17Kevin Zhou Physics Olympiad Handouts
A faster method is to use the Taylor series for 1/(1 − x). We have
1
1 − u
= 1 + u + O(u2
)
and substituting u = x2/2 − O(x4) gives
1
cosx
= 1 +
x2
2
+ O(x4
).
Therefore, we conclude
tanx = (x − x3
/6 + O(x5
))(1 + x2
/2 + O(x4
)) = x + x3
/3 + O(x5
).
Here I was fairly careful with writing out all the error terms and intermediate steps, but as
you get better at this process, you’ll be able to do it faster. (Of course, one could also have
done this example by just directly computing the Taylor series of tanx from its derivatives.
This is possible, but for more complicated situations it’s generally not a good idea, because
computing high derivatives of a complex expression tends to get very messy. It’s better to
just Taylor expand the individual pieces and combine the results, as we did here.)
Remark
Finding series up to a given order can be subtle. For example, if you want to compute an
O(x4) term, it is not always enough to expand everything up to O(x4), because powers of x
might cancel. To illustrate this, the last step here is wrong:
tanx =
x3 sinx
x3 cosx
=
x4 + O(x6)
x3 + O(x5)
̸= x + O(x5
).
[2] Problem 13. Find the Taylor series for 1/cosx up to and including the fourth order (O(x4)) term.
Solution. The derivatives of cos(x) at x = 0 are 0, −1, 0, 1, so
cosx = 1 −
x2
2
+
x4
4!
+ O(x6
).
To expand the inverse, note that
1
1 − u
= 1 + u + u2
+ O(u3
)
where in our case, u = x2/2 − x4/24. Plugging this in gives
1
cosx
= 1 + (x2
/2 − x4
/24) + (x2
/2 − x4
/24)2
+ O(x6
) = 1 +
x2
2
+
5x4
24
+ O(x6
).
[2] Problem 14. Extend the computation above to get the x5 term in the Taylor series for tanx.
Solution. From this point on we will start omitting the explicit O(xn) error terms. We have
(x − x3
/6 + x5
/120)(1 + x2
/2 + 5x4
/24) = x + x3
/2 + 5x5
/24 − x3
/6 − x5
/12 + x5
/120
giving the answer,
tan(x) = x +
x3
3
+
2x5
15
.
18Kevin Zhou Physics Olympiad Handouts
[3] Problem 15. For small x, approximate the quantity
x2ex
(ex − 1)2
− 1
to lowest nontrivial order. That is, find the first nonzero term in the Taylor series.
Solution. After some trial and error, you’ll find that the constant and linear terms vanish. Next,
we try the quadratic term. For this term, the ex in the numerator has to be expanded out to
quadratic order. However, the denominator itself is proportional to x2, cancelling with the power
of x2 in the numerator, which means that we have to expand the ex in the denominator to third
order. If we don’t do this, we’ll still get a quadratic term, but it won’t have the right prefactor.
Again suppressing the error terms, we have
x2(1 + x + x2/2)
(x + x2/2 + x3/6)2
− 1 =
1 + x + x2/2
1 + x + 7x2/12
− 1
= (1 + x + x2
/2)(1 − x + 5x2
/12) − 1
= −
x2
12
.
Note that we have been careful to keep the manipulations as simple as possible, e.g. by canceling
the x/x as early as possible. If you don’t do this, everything gets very messy and it’s unclear what is
contributing at what order, because of the subtlety pointed out in the above remark. Now, the factor
of −1/12 in the final answer is actually the same factor as in the classic result 1+2+3+... = −1/12.
The reason will be explained in an example in X1.
[3] Problem 16. The function cos−1(1 − x) does not have a Taylor series about x = 0. However, it
does have a series expansion about x = 0 in a different variable.
(a) What is this variable, and what’s the first term in the series?
(b) ⋆ What’s the next nontrivial term in the series?
Solution. (a) We have
d
dx
arccos(1 − x) =
1
p
1 − (1 − x)2
which is undefined at x = 0, so there is no Taylor series. But note that if we let y = cos−1(1−x)
and take the cosine of both sides, we have
cosy = 1 − x.
Now y does have a good Taylor series near y = 0, which corresponds to where x = 0. At
lowest order, we have
1 − y2
/2 ≈ 1 − x
which implies that
y ≈
√
2x.
More generally, the answer is a series in
√
x. Since cosine is even, the next term is O(x3/2).
19Kevin Zhou Physics Olympiad Handouts
(b) In order to get higher order terms, we can write
cos−1
(1 − x) = cos−1
(1 − u2
)
where u =
√
x, and directly compute a Taylor series in u, using the usual rule for a derivative
of an inverse function.
That approach is straightforward, but for variety we’ll show a slightly trickier but much faster
method. Write the answer as
y =
√
2x1/2
+ Ax3/2
+ O(x5/2
)
where A is to be determined. By the Taylor series for cosine, we know that
1 − x = cosy = 1 −
y2
2
+
y4
24
+ O(y6
)
which is equivalent to
x =
y2
2
−
y4
24
+ O(x3
)
since y6 = O(x3). We can now plug in our expression for y. Equating the term linear in x
just recovers the result of part (a), while equating the term quadratic in x (which vanishes
on the left-hand side) gives the coefficient A. Concretely, we have
y2
2
= x +
√
2Ax2
+ O(x3
)
and
y4
24
=
1
6
x2
+ O(x3
)
from which we conclude A = 1/(6
√
2), so that
cos−1
(1 − x) =
√
2x +
x3/2
6
√
2
+ O(x5/2
).
This technique is called “reversion of series”.
Idea 5: Binomial Theorem
When both x and xn are small, it is useful to use the binomial theorem,
(1 + x)n
= 1 + xn + O(x2
n2
).
It applies even when n is not an integer. In particular, n can be very large, very small, or
even negative. The extra terms will be small as long as xn is small. If desired, one can find
higher terms using binomial coefficients,
(1 + x)n
=
∞ X
m=0

n
m

xm
where the definition of the binomial coefficient is formally extended to arbitrary real n.
The binomial theorem is one of the most common approximations in physics. It’s really just taking
the first two terms in the Taylor series of (1 + x)n, but we give it a name because it’s so useful.
20Kevin Zhou Physics Olympiad Handouts
[1] Problem 17. Suppose the period of a pendulum is one second, and recall that
T = 2π
s
L
g
.
If the length is increased by 3% and g is increased by 1%, use the binomial theorem to estimate
how much the period changes. This kind of thinking is extremely useful when doing experimental
physics, and you should be able to do it in your head.
Solution. The change in L increases the period by 3%/2 = 1.5% and the change in g decreases
the period by 1%/2 = 0.5%. So the net change is an increase of 1%.
[1] Problem 18. Consider an electric charge q placed at x = 0 and a charge −q placed at x = d. For
x > d, the electric field along the x axis is
E(x) =
q
4πϵ0

1
x2
−
1
(x − d)2

.
For x ≫ d, use the binomial theorem to approximate the field.
Solution. Use the binomial theorem with d/x ≪ 1 to get
1
(x − d)2
=
1
x2

1 +
2d
x

.
Then
E(x) = −
2qd
4πϵ0x3
= −
qd
2πϵ0x3
.
This is the on-axis field of an electric dipole.
[3] Problem 19. Some exercises involving square roots.
(a) Manually find the Taylor series for
√
1 + x up to second order, and verify they agree with the
binomial theorem.
(b) Approximate
√
1 + 2x + x2 for small x using the binomial theorem. Does the result match
what you expect? If not, how can you correct it?
Solution. (a) The binomial theorem gives 1 + x/2. By differentiating, we get 1/(2
√
1 + x) and
−1/(4(1 + x)3/2). Then
√
1 + x = 1 +
1
2
x −
1
8
x2
+ O(x3
).
The first two terms agree with the usual form of the binomial theorem. For the third term,
note that the coefficient should be

1/2
2

=
(1/2)(−1/2)
2
= −
1
8
which is indeed what we find.
21Kevin Zhou Physics Olympiad Handouts
(b) Of course, the result is 1 + x, so we want the O(x2) term to vanish. On the other hand,
applying the binomial theorem gives
p
1 + 2x + x2 ≈ 1 +
1
2
(2x + x2
) = 1 + x +
x2
2
which is wrong! The reason is that the first order binomial theorem isn’t good enough, because
the second order term in the binomial theorem will also contribute a second order term to the
answer. Using the result of part (a),
p
1 + 2x + x2 = 1 +
1
2
(2x + x2
) −
1
8
(2x + x2
)2
+ O((2x + x2
)3
)
= 1 + x +
x2
2
−
1
8
(2x + x2
)2
+ O(x3
)
= 1 + x +
x2
2
−
1
8
(2x)2
+ O(x3
)
= 1 + x + O(x3
)
as desired.
Example 11: Birthday Paradox
If you have n people in a room, around how large does n have to be for there to be at least
a 50% chance of two people sharing the same birthday?
Solution
Imagine adding people one at a time. The second person has a 1/365 chance of sharing a
birthday with the first. If they don’t share a birthday, the third person has a 2/365 chance
of sharing a birthday with either, and so on. So a decent estimate for n is the n where

1 −
1
365

1 −
2
365

...

1 −
n − 1
365

≈
1
2
.
The surprising point of the birthday paradox is that n ≪ 365. So we can use the binomial
theorem in reverse, approximating the left-hand side as

1 −
1
365

1 −
1
365
2
...

1 −
1
365
n−1
=

1 −
1
365
n(n−1)/2
≈

1 −
1
365
n2/2
which is valid since n/365 is small. It’s tempting to use the binomial theorem again to write

1 −
1
365
n2/2
≈ 1 −
n2
2 · 365
=
1
2
which gives n = 19. However, this is a bad approximation, because the binomial theorem only
works if (n2/2)(1/365) is very small, but here we’ve set it to 1/2, which isn’t particularly small.
Since the series expansion variable is 1/2, each term in the series expansion is roughly 1/2 as
big as the last (ignoring numerical coefficients), so we expect to be off by about (1/2)2 = 25%.
The binomial theorem is an expansion for (1 + x)y which works when both x and xy are
small. Here xy isn’t small, and we instead want an approximation that works when only x is
22Kevin Zhou Physics Olympiad Handouts
small. One trick to dealing with an annoying exponent is to take the logarithm, since that
just turns it into a multiplicative factor. Note that
log((1 + x)y
) = y log(1 + x) ≈ yx
by Taylor series, which implies that
(1 + x)y
≈ eyx
when x is small, an important fact which you should remember. So we have

1 −
1
365
n2/2
≈ e−n2/(2·365)
=
1
2
and solving gives n = 22.5. We should round up since n is actually an integer, giving n = 23,
which is indeed the exact answer.
Remark
Precisely how accurate is the approximation (1+x)y ≈ eyx? Note that the only approximate
step used to derive it was taking log(1 + x) ≈ x, which means we can get the corrections by
expanding to higher order. If we take the next term, log(1 + x) ≈ x − x2/2, then we find
(1 + x)y
≈ eyx
e−x2y/2
.
Note that because we are approximating the logarithm of the quantity we want, the next
correction is multiplicative rather than additive. Our approximation has good fractional
precision as long as x2y ≪ 1. In the previous example, x2y/2 = (22.5/365)2/4 = 0.1%, so
our answer was quite accurate.
[2] Problem 20. Find a series approximation for xy, given that y is small and x positive, but neither
small nor exponentially huge. (Hint: to check if you have it right, you can try concrete numbers,
such as y = 0.01 and x = 10. The series expansion variable may look a bit unusual.)
Solution. Let’s write
xy
= ey log(x)
.
If y is small, then for any reasonable x (i.e. x not exponentially huge), y log(x) is also small. So we
can use the Taylor series for the exponential to get
xy
≈ 1 + y log(x) + O((y log(x))2
)
with further terms easily computed.
By the way, this shows you what logarithms really are: they are the limits of “zeroth” powers,
logx = lim
ϵ→0
xϵ − 1
ϵ
.
The power rule for integration,
R
xn dx = xn+1/(n+1)+C, breaks down for n = −1, where it would
give x0/0. Given the above result, it’s not surprising that in this case the integral is a logarithm.
23Kevin Zhou Physics Olympiad Handouts
Remark
As you can see, there are lots of different types of series approximations, and many more we
haven’t even mentioned at all. For example, Fourier series will be important in W1, and the
Pade approximant is a twist on a Taylor series which instead approximates a function with a
ratio of polynomials. The number of ways one can approximate things is truly incredible. For
a comprehensive overview, see Advanced Mathematical Methods for Scientists and Engineers
by Bender and Orszag. For another perspective which is more useful for discrete math, see
Concrete Mathematics by Graham, Knuth, and Patashnik.
Remark
Just for fun, here are some more examples of tough series expansions. First, in the “Lindhard”
theory of electrical shielding in metals, one has to perform the small x expansion
1
2
+
x2 − 1
4x
log

1 + x
1 − x

≈
x2
3
+ O(x4
).
Since there’s a 1/x in front of the second term, you have to expand the logarithm to third
order to get the right prefactor, like in problem 15, but the algebra’s a lot messier.
The Soviet mathematician V.I. Arnold used to say that math has gone downhill since Newton,
because people in that time could supposedly quickly evaluate the limit
lim
x→0
sin(tan(x)) − tan(sin(x))
arcsin(arctan(x)) − arctan(arcsin(x))
.
The first terms that don’t cancel are O(x7), giving
lim
x→0
−55x7
1008 + 107x7
5040 + O(x9)
−341x7
5040 + 173x7
5040 + O(x9)
= 1.
This amazingly simple answer can be found with a very tricky geometric argument, of the
style common in Newton’s Principia, though it’s hard to make it totally rigorous.
Finally, as we will see in E2, the capacitance of two spheres of radius a separated by r ≫ a
can be written as an infinite series in a/r. In his Treatise on Electricity and Magnetism (1891,
section 146), Maxwell manually evaluated this series out to order (a/r)22! I don’t even know
what the point of that was, but it illustrates why physicists took decades to fully comprehend
the implications of Maxwell’s Treatise. Today, we teach the conceptual essentials of Newton
and Maxwell’s physics, but the reason they’re giants is because they put their theories to
work, in tough calculations we barely hear about today.
Remark
When a problem says α ≪ 1, what does it mean? Does it mean we are allowed to set
α = 0? Or perhaps that we should always expand to first order in α? As you’ve seen
from the above questions, it depends on the context. The rule is always that you want
24Kevin Zhou Physics Olympiad Handouts
the simplest approximation that gives the essential physics for the problem you’re considering.
For example, let’s return to problem 18, where we consider an electric dipole with d/x ≪ 1.
If we just plugged in d = 0, we would get E(x) = 0 + O(d/x). That’s a mathematically
true statement which does have physical meaning (i.e. that the far fields of dipoles are much
smaller than those of individual charges), but in a problem it usually isn’t enough because
you want to use an expression for E(x) to do something else. So in the problem, we kept the
O(d/x) term. But if we had gone out to O(d2/x2), we would have found
E(x) = −
q
4πϵ0x2

2d
x
+
3d2
x2
+ O(d3
/x3
)

.
If you then used this expression, in a problem that expects you to use only the O(d/x) term,
you would probably get annoyingly complicated expressions. So does that mean you should
always throw out quadratic terms? Of course not; sometimes they matter. For instance,
the quadratic term above would be the leading effect if we cared about the deviation of
the field of a finite-sized dipole from an ideal one. It is the “quadrupolar” part of the potential.
Students often desire a single magic rule they can apply mechanically, but in physics, you
really have to think through each case. However, if this sounds overwhelming, don’t worry.
90% of approximations on the USAPhO and IPhO are pretty simple, and just boil down to
sinx ≈ x, cosx ≈ 1 − x2
/2, (1 + x)n
≈ 1 + xn, ex
≈ 1 + x, log(1 + x) ≈ x.
These are the only results that you have to know by heart.
3 Numeric Solutions
Idea 6
In Olympiads, you may have to find numeric solutions for equations that can’t be solved
analytically. A simple but reliable method is to “guess and check”, starting with a reasonable
first guess (e.g. derived by solving an approximated version of the equation, or sketching the
graphs of both sides), plugging it into both sides, then proceeding with binary search.
[3] Problem 21. Sometimes, you can get an accurate numeric answer very quickly on a basic calculator
by using the method of iteration, which solves equations of the form x = f(x).
(a) Take a scientific calculator (in radians), put in any number, and press the “cos” button many
times. Convince yourself that the final number you get is the unique solution to x = cosx.
(b) What are the key features of the graphs of x and cosx that made this work? For example, why
doesn’t pressing cos−1 repeatedly give the same result? As another example, since x = sinx
has a unique solution, why does repeatedly pressing sin not work so well?
(c) Find a nonzero solution for x = tan(x/2).
(d) Find a nonzero solution for ex − 1 = 2x.
25Kevin Zhou Physics Olympiad Handouts
(e) ⋆ Find a single iteration that can solve x = r(1 − x)2 for both r = 1/2 and r = 1.
Solution. (a) Well, just try it!
(b) What makes cosx work and arccosx fail is that at the solution to x = cosx, the magnitude
of the slope of cos(x) is less than 1, while that of arccos(x) is greater than 1.
Specifically, suppose x0 is a solution to x = f(x), and we start at x = x0 + ϵ for some small ϵ.
Under the tangent line approximation, iterating a function f will take us to x0 + f′(x0)ϵ. If
|f′(x0)| < 1, then we get closer to the answer, while if |f′(x0)| > 1, then we get further away.
Therefore, iterating cosx will let us converge to the answer exponentially.
Another, more global reason that cosx works so well is that it’s bounded. So whatever your
initial guess is, at the next stage it’ll be mapped to within [−1,1], and from then on it’ll
close in on the answer. Once you get close enough, the preceding paragraph kicks in and
convergence is exponential. But for many other functions, you’ll have to choose your initial
guess sufficiently close, or else you might get the wrong solution, or diverge to infinity.
The equation sinx = x has a unique solution x = 0, sinx is bounded, and the slope of sinx is
never greater than 1. So in principle iteration should work. However, near zero, the slope of
sine gets closer and closer to 1, which makes convergence very slow! If you play around a bit
with series, you can show that after n iterations, your answer starts shrinking as 1/
√
n, which
is much worse than the exponential convergence. This is an exotic case though; you probably
won’t see it in practice.
In general, iteration can “go wrong” in far weirder ways. For example, suppose you tried to
iterate x → rx(1 − x) for a constant r. This is called the logistic map, and it turns out that
if r is in the right range, the result is chaotic! The result bounces around in an unpredictable
way, never repeating itself, and you get a completely different result after a few iterations if
you start with a very slightly different number.
(c) Note that iterating x → tan(x/2) will lead to x = 0. In this case, the solution x = 0 is stable,
while the solution we actually want is unstable. To get the other solution, we use the inverse:
x → 2arctan(x). Concretely, type in a reasonable guess in your calculator like 3, and then
enter 2arctan(Ans), and keep pressing the “=” button. Eventually you’ll get x = 2.331 or
x = −2.331, depending on your initial guess.
(d) Iterating x → (ex − 1)/2 will also yield x = 0, so iterate x → ln(1 + 2x). That is, type in a
guess like 2, and type in ln(1 + 2Ans). Eventually you’ll get to x = 1.256.
By the way, here I’m writing ln because that’s what the button for natural logarithm says on
most calculators, but in the future, I’ll always denote the natural logarithm with log, which
is the standard for all advanced physics courses.
(e) Of course, you can just solve this quadratic exactly, but I include it here as an illustrative
example. Iterating x → r(1−x)2 will work for r = 1/2, but it’s unstable for r = 1. That also
means that using the inverse iteration x → 1 −
p
x/r won’t work, because it’ll be stable for
r = 1 but unstable for r = 1/2.
Instead, we need to play around with the expression. It turns out another possible iteration
is x → (2+1/r −x)−1, and this is stable for both r = 1/2 and r = 1, and in fact for all r > 0.
26Kevin Zhou Physics Olympiad Handouts
[2] Problem 22. [A] Newton’s method is a more sophisticated method for solving equations, which
converges substantially faster than binary search. Suppose we want to solve the equation f(x) = 0.
Starting with a nearby guess x0, we evaluate f(x0) and f′(x0), then find our next guess by applying
the tangent line approximation at this point,
x1 = x0 −
f(x0)
f′(x0)
.
The process repeats until we get a suitably accurate answer.
(a) Use Newton’s method to solve x = cosx.
(b) Newton’s method converges quadratically, in the sense that for typical functions, if your
current guess is ϵ away from the answer, the next guess will be O(ϵ2) away. (This implies that
the number of correct digits in the answer roughly doubles with each iteration!) Explain why,
and then find an example where Newton’s method doesn’t converge this fast.
Newton’s method is very important in general, but it’s not that useful on Olympiads. It takes a
while to set up, especially if the derivative f′ is complicated, and you usually don’t need that many
significant figures in your answer anyway. (There are alternatives to Newton’s method, such as
Halley’s method, that converge even faster, but the tradeoff is the same: each iteration takes more
effort to calculate, as higher derivatives of f must be computed.)
Solution. (a) We want to solve f(x) = cosx − x = 0, which means we iterate
x +
cosx − x
sinx + 1
.
Starting from a reasonable guess x0 = 0.5, we find
x1 = 0.755222, x2 = 0.739142, x3 = 0.739085.
The next iteration gives the same thing for the first six decimal places, so after just three
iterations, we already have six significant digits in the answer.
(b) If the tangent line approximation was exact, then Newton’s method would converge to the
answer in one iteration, f(x1) = 0. So if you’re already close to the answer, the leading
source of inaccuracy is the second-order term in the Taylor expansion of f, giving f(x1) ≈
ϵ2f′′(x0)/2. Applying the tangent line approximation again, this implies we are roughly a
distance ϵ2f′′(x0)/2f′(x1) ∝ ϵ2 from the answer.
Convergence will be slower if f′(x1) happens to be small. For example, for finding roots of
polynomials, this will occur for double roots, as the first derivative vanishes at the root itself.
In this case f′(x1) ∝ ϵ, so the error after an iteration is still order ϵ, not ϵ2.
The simplest example where this happens is f(x) = x2, where
x1 = x0 −
x2
0
2x0
=
x0
2
.
This is no longer quadratically convergent; instead the error goes down by the same factor in
each iteration, so the number of significant figures correct goes up linearly.
27Kevin Zhou Physics Olympiad Handouts
It’s interesting to compare this to iteration. When the method of iteration works, we typically
have exponential convergence, which means the number of significant figures goes up linearly.
However, in cases like f(x) = x2 where f′(x) vanishes at the solution, the error is squared in
each iteration, so the method of iteration instead converges quadratically! In other words, for
these exceptional cases, the convergence rates of iteration and Newton’s method swap.
Remark
You’ve seen several numeric methods above, and going forward, you should feel free to use
whichever looks best in each situation. However, if you’re solving problems using the same
calculator you use for schoolwork, you should make sure to not rely on its more advanced
features. In Olympiads, you’re generally only allowed to use an extremely basic scientific
calculator, with a tiny display and no memory except for the “Ans” key.
Example 12
In units where c = 1, the Lorentz factor is defined as
γ =
1
√
1 − v2
.
Suppose that a particle traveling very close to the speed of light has γ = 1010. Numerically
find the fractional difference ∆v between its speed and the speed of light.
Solution
This problem looks easy; by some trivial algebra we find
∆v = 1 −
p
1 − 1/γ2.
But when you plug this into a calculator, or even Python, you get zero. The problem is that
we are trying to find a small quantity ∆v by subtracting two nearby, much larger quantities.
But machines have limited precision, and they end up rounding 1 − 1/γ2 = 1 − 10−20 up to
1, giving a completely wrong answer!
Instead, we can apply the binomial theorem to find
∆v =
1
2γ2
+ O(1/γ4
) ≈ 0.5 × 10−20
.
This is no longer the exact answer, but it’s a great approximation, because the error term is
around 1/γ2 ∼ 10−20 times as small as the answer, and it’s easy for a calculator to evaluate.
The lesson, which we’ll see over and over again in later handouts, is that an exact theoretical
expression can often be less intuitive, less useful, and less accurate than a well-chosen
approximate one. The art of physics is knowing how to make such approximations.
[1] Problem 23. Find the solutions of the equation x2 − 1020x + 1 = 0 to reasonable accuracy.
28Kevin Zhou Physics Olympiad Handouts
Solution. Applying the quadratic formula, the solutions are
x =
1020 ±
√
1040 − 4
2
.
Of course you can’t just plug this into a calculator and expect a reasonable result. Instead, we need
to approximate. For the larger root, an excellent approximation is
x ≈
1020 +
√
1040
2
= 1020
.
Then by Vieta’s formula, an excellent approximation for the other root is 10−20.
[4] Problem 24. [A] Consider the equation ϵx3 − x2 + 1 = 0, where ϵ is small. Find approximate
expressions for all three roots of this equation, up to and including terms of order ϵ.
Solution. If we set ϵ = 0, then the roots of the resulting quadratic equation are ±1. Thus, two
of the roots should be near ±1. To calculate the O(ϵ) correction, let x = 1 + Aϵ + O(ϵ2). Then
plugging this into the equation gives
ϵ(1 + Aϵ)3
− (1 + Aϵ)2
+ 1 = ϵ − 2Aϵ + O(ϵ2
) = 0.
Thus, we find A = 1/2. A similar calculation can be done for the root near x = −1, giving roots
x = 1 +
ϵ
2
+ O(ϵ2
), x = −1 +
ϵ
2
+ O(ϵ2
).
However, the third root is nowhere to be found in this analysis, because the quadratic only has two
roots. Upon graphing the function, you can see that the third root is at very large x, once the cubic
term catches up in size to the quadratic term. This happens when x ≈ 1/ϵ. This appearance of an
inverse power of ϵ makes this a “singular perturbation series”.
Here’s a general way to conceptualize what’s going on here. The equation in this problem has
three terms, and it’s easy to find a root if any one of the terms is negligible compared to the others.
For example, for the first two roots, we assumed the ϵx3 term was negligible, and then found x = ±1.
Then, adding on the ϵx3 term produces O(ϵ) and higher corrections to the left-hand side, which
can be used to compute O(ϵ) and higher corrections to the root itself. Now, this third root we’ve
just found occurs when the 1 term is negligible. In this case, both of the first two terms are of order
1/ϵ2, and the 1 creates small corrections to the root (relative to its huge size).
Since 1 is two orders in ϵ smaller than 1/ϵ2, we expect these terms only appear two orders down
in the root. That is, we expect the root has the form
x =
1
ϵ
1 + Aϵ2
+ O(ϵ3
)

with no O(ϵ) term in parentheses. (If you don’t believe this, check this term vanishes for yourself!)
Plugging this into the equation gives
1
ϵ2
(1 + Aϵ2
+ O(ϵ3
))3
−
1
ϵ2
(1 + Aϵ2
+ O(ϵ3
))2
+ 1 = 0
which is equivalent to
3A − 2A + 1 + O(ϵ) = 0
29Kevin Zhou Physics Olympiad Handouts
from which we conclude A = −1, and hence the third root is
x =
1
ϵ
− ϵ + O(ϵ2
).
Finally, you might be wondering what happens if the x2 term is the negligible one. However, this
never happens. If we assume it’s negligible, then we need x ≈ −ϵ−1/3, so that both the other terms
are about 1. But then the x2 term is 1/ϵ2/3 ≫ 1. So we can’t assume the x2 term is negligible
self-consistently, so it doesn’t give any new roots. The idea used above, of supposing two of the
terms are large, using that to solve a simpler equation, and then checking for consistency, is known
as the method of dominant balance.
4 Limiting Cases
Idea 7
Limiting cases can be used to infer how the answer to a physical problem depends on its
parameters. It is primarily useful for remembering the forms of formulas, but can also be
powerful enough to solve multiple choice questions by itself.
Example 13
What is the horizontal range of a rock thrown with speed v at an angle θ to the horizontal?
Solution
This result is easy to derive, but dimensional analysis and extreme cases can be used to
recover the answer too. It can only depend on v, g, and θ, so by dimensional analysis it is
proportional to v2/g. This is sensible, since the range increases with v and decreases with g.
Now, the range is zero in the extreme cases θ = 0 and θ = π/2, but not anywhere in between,
so if we remember the range contains a simple trigonometric function, it must be sin(2θ), so
R ∝
v2
g
sin(2θ).
We can also get the prefactor by a simple limiting case, the case θ ≪ 1. In this case, by the
small angle approximation,
vx ≈ v, vy ≈ vθ.
The time taken is t = 2vy/g, so the range is
R ≈ vxt =
2v2
g
θ.
Thus there is no proportionality constant; the answer is
R =
v2
g
sin(2θ).
In reality, it’s probably faster to go through the full derivation than all of this reasoning, but
if you’re just not sure about whether it’s a sine or a cosine, or what the prefactor is, then
limiting cases can be quickly used to recover that piece. Also note that the approximations
we used above are frequently useful for evaluating limiting cases.
30Kevin Zhou Physics Olympiad Handouts
Example 14
Consider an Atwood’s machine, i.e. an ideal pulley with masses m and M hung on each end
of the string. Find the tension in the string.
Solution
Since the equations involved are all linear equations, we expect the answer should also
be simple. It can only depend on g, m, and M, so by dimensional analysis, it must be
proportional to g. By dimensional analysis, this must be multiplied by something with one
net power of mass. Since the answer remains the same if we switch the masses, it should be
symmetric in m and M.
Given all of this, the simplest possible answer would be
T ∝ g(M + m).
To test this, we consider some limiting cases. If M ≫ m, the mass M is essentially in free fall,
so the mass m accelerates upward with acceleration g. Then the tension is approximately
2mg. Similarly, in the case M ≪ m, the tension is approximately 2Mg. These can’t be
satisfied by the form above.
The next simplest option is a quadratic divided by a linear expression. Both of these must
be symmetric, so the most general possibility is
T = g
A(m2 + M2) + BmM
M + m
.
Then the limiting cases can be satisfied if A = 0 and B = 2, giving
T =
2gmM
M + m
.
[1] Problem 25. Use similar reasoning to guess the acceleration of the masses in an Atwood’s machine.
(We will show an even easier way to do this, using “generalized coordinates”, in M4.)
Solution. We know from dimensional analysis that the acceleration is gf(m,M) where f(m,M)
is dimensionless. Thus it should be a fraction.
If either of the masses is much greater than the other mass, then the acceleration should be ±g.
Thus the coefficients of m and M should be ±1. If the masses are equal, then the acceleration
should be zero, so the numerator should be proportional to M − m. Since the denominator should
be different but still have factors of ±1, a simple reasonable guess is
a =
M − m
M + m
g.
which is indeed the real answer.
[1] Problem 26. Find the perimeter of a regular N-gon, if L is the distance from the center to any
of the vertices. By considering a limiting case, use this to derive the circumference of a circle.
31Kevin Zhou Physics Olympiad Handouts
Solution. By basic trigonometry, the perimeter is 2NLsin(π/N). Then the circumference of a
circle is
lim
N→∞
2NLsin(π/N) = lim
N→∞
2NL
π
N
= 2πL
as expected. We can see that the limit of N sin(π/N) is π through the small angle approximation.
If you want more rigor, you could also say that this is an indeterminate form ∞ × 0, and use
l’Hospital’s rule.
[2] Problem 27 (Morin 1.6). A person throws a ball (at an angle of her choosing, to achieve the
maximum distance) with speed v from the edge of a cliff of height h. Which of the below could be
an expression for the maximal range?
gh2
v2
,
v2
g
,
s
v2h
g
,
v2
g
r
1 +
2gh
v2
,
v2
g

1 +
2gh
v2

,
v2/g
1 − 2gh/v2
.
If desired, try Morin problems 1.13, 1.14, and 1.15 for additional practice.
Solution. First check if they’re all dimensionally correct (they are). When h = 0, the maximum
range as found above with sin(2θ) = 1 is v2/g. Also the maximum range obviously depends on the
height of the edge of the cliff, and there shouldn’t be a case of a finite height or velocity where the
range becomes infinite. This leaves 2 options:
v2
g
r
1 +
2gh
v2
,
v2
g

1 +
2gh
v2

When h is small, the extra distance at the end of the trajectory from dipping down a vertical
distance h can be found with binomial theorem: h, and 2h respectively. Since the trajectory is
symmetric, when h ≈ 0 (to be more concise, h ≪ v2/g) the optimal launch angle is 45 deg, so by
geometry the extra distance should also be h. Thus the correct formula is
v2
g
r
1 +
2gh
v2
.
[2] Problem 28. Consider a triangle with side lengths a, b, and c. It turns out the area of its incircle
can be expressed purely by multiplying and dividing combinations of these lengths. Moreover,
the answer is the simplest possible one consistent with limiting cases, dimensional analysis, and
symmetry. Guess it!
Solution. In the limiting case a = b + c, the triangle collapses and the area must be zero, which
means the answer must be proportional to b + c − a. But the answer should also be symmetric
between exchanging a, b, and c, so it must be proportional to (b + c − a)(c + a − b)(a + b − c). The
dimension of this quantity is one too high, so we need to divide by a length, and the only possibility
consistent with symmetry is a + b + c. Finally, the overall constant can be fixed using the special
case of an equilateral triangle, giving the result
A =
π
4
(a + b − c)(b + c − a)(c + a − b)
a + b + c
.
Incidentally, the area of the circumcircle is π(abc)2/((a + b + c)(a + b − c)(b + c − a)(c + a − b)).
While most of the denominator makes sense from limiting cases, the overall expression is certainly
32Kevin Zhou Physics Olympiad Handouts
harder to guess, since powers of abc and a+b+c could cancel while preserving all the limiting cases
and symmetry. That just goes to show that limiting cases can only get you so far. In some sense,
“real” math starts once all the easy information accessible to methods like these has been accounted
for.
While we won’t have more questions that are explicitly about dimensional analysis or limiting
cases, these are not techniques but ways of life. For all future problems you solve, you should be
constantly checking the dimensions and limiting cases to make sure everything makes sense.
5 Manipulating Differentials
You might have been taught in math class that manipulating differentials like they’re just small,
finite quantities, and treating derivatives like fractions is “illegal”. But it’s also very useful.
Idea 8
Derivatives can be treated like fractions, if all functions have a single argument.
The reason is simply the chain rule. The motion of a single particle only depends on a single
parameter, so the chain rule is just the same as fraction cancellation. For example,
dv
dt
=
d
dt
v(x(t)) =
dv
dx
dx
dt
which shows that “canceling a dx” is valid. Similarly, you can show that
dy
dx
dx
dy
= 1
by considering the derivative with respect to x of the function x(y(x)) = x.
As a warning, for functions of multiple arguments, the idea above breaks down. For example,
for a function f(x(t),y(t)), the chain rule says
df
dt
=
∂f
∂x
dx
dt
+
∂f
∂y
dy
dt
where there are two terms, representing the change in f from changes only in x, and only
in y. Therefore, when we start studying thermodynamics, where multivariable functions are
common, we will treat differentials more carefully. But for now the basic rules will do.
Remark: Rigorous Notation
Math students tend to get extremely upset about the above idea: they say we shouldn’t use
convenient notation if it hides what’s “really” going on. And they’re right, if your goal is
to put calculus on a rigorous footing. But in physics we have no time to luxuriate in such
rigor, because we want to figure out how specific things work. The point of notation is to
help us do that by suppressing mathematical clutter. A good notation suppresses as much
as possible while still giving correct results in the context it’s used.
33Kevin Zhou Physics Olympiad Handouts
To illustrate the point, note that elementary school arithmetic is itself an “unrigorous” nota-
tion that hides implementation details. If we wanted to be rigorous about, say, defining the
number 2, we would write it as S(1) where S is the successor function, obeying properties
specified by the Peano axioms. And 4 is just a shorthand for S(S(S(1))), so 2+2 = 4 means
S(1) + S(1) = S(S(S(1))).
Even this is not “rigorous”, because the Peano axioms don’t specify how the numbers or
the successor function are defined, just what properties they have to obey. To go deeper,
we could define the integers as sets, and operations like + in terms of set operations. For
example, in one formulation, we start with nothing but the empty set ∅ and define
4 = S(S(S(1))) = {∅,{∅},{∅,{∅}},{∅,{∅},{∅,{∅}}}.
People have seriously advocated for 1st grade math to be taught this way, which has always
struck me as insane. You can always add more arbitrary layers of structure underneath the
current foundation, so such layers should only be added when absolutely necessary.
Here’s another example, inspired by the physics education research literature. For uniformly
accelerated motion starting from rest, v(t) = at, what is v(x)? Physics students would say
that v(x) =
√
2ax by the kinematic equations, while math students would say v(x) = ax
by the definition of a function. Who is correct? The point is that basic physics and math
courses use functions differently. In introductory physics, we often denote several distinct
mathematical functions with the same symbol, if they all represent the same physical
quantity. (Otherwise, the simplest projectile motion problem would need half the alphabet.)
By contrast, basic math courses carefully distinguish functions, but then denote distinct
physical quantities with the same symbol: 1m, 1cm, and 1s are all written as 1.
The crucial point is that nobody is wrong. There is no One True Definition of notation, which
is ultimately just squiggly marks people make by dragging graphite cylinders against sheets
of wood pulp. Every community makes its own notation for its own needs. And any notation
system has to forget about something, or else it would be too clunky to do anything.
Remark: Advanced Notation
As an addendum to the previous remark, it turns out that as you get deeper into math and
physics, notation tends to converge. For example:
• The physicist’s “wrong” use of v(t) and v(x) can be formalized by differential geometry:
here v is a scalar field defined on the particle’s path, which is a one-dimensional manifold,
and v(t) and v(x) are parametrizations of it in different coordinate charts.
• In math classes, vectors are anything you can take linear combinations of, but in physics
classes we also require that they specify a direction in physical space, which math students
often criticize as wrong, or meaningless. But the physicist is actually using more advanced
math, which the math student doesn’t know yet: the physicist’s vector is an element of
a vector space carrying the fundamental representation of SO(3).
34Kevin Zhou Physics Olympiad Handouts
• Most vectors flip sign under an inversion of space, r → −r and p → −p, but “axial vectors”
such as L = r×p don’t. This also strikes many math students as a blatant inconsistency,
but the reality is again that an axial vector is just a more advanced mathematical object
they haven’t met yet, specifically a rank 2 differential form, as discussed in M8.
• More generally, the “unrigorous” manipulations of differentials above, which we showed
give you the right answer anyway, gain a rigorous footing in terms of differential forms.
In fact, they become the preferred way to denote integration on general manifolds.
Arguments about notation are mostly raised by beginning students, who see the one way
they know as the only possible way. Professionals know it both ways, and adjust as needed.
Example 15
Derive the work-kinetic energy theorem, dW = F dx.
Solution
Canceling the mass from both sides, we wish to show
1
2
d(v2
) = adx.
To do this, note that
1
2
d(v2
) = v dv =
dx
dt
dv =
dv
dt
dx = adx
as desired. If you’re not satisfied with this derivation, because of the bare differentials floating
around, we can equivalently prove that F = dW/dx, by noting
dW
dx
= mv
dv
dx
= mv
dv
dt
dt
dx
= m
dv
dt
= F.
[2] Problem 29. Some more about power.
(a) Use similar reasoning to derive P = Fv.
(b) An electric train has a power line that can deliver power P(x), where x is the distance along
the track. If the train starts at rest at x = 0, find its speed at point x0 in terms of an integral
of P(x). (Hint: try to get rid of the dt’s to avoid having to think about the time dependence.)
Solution. (a) First, let’s use differentials. Since P = dW/dt, we have
dW = Fv dt.
Using the same reasoning as before, dW = md(v2)/2 = mv dv, so
mv dv = mav dt.
Canceling on both sides, this simplifies to dv = adt, which is clearly true. Alternatively, we
can use derivatives directly. We have
P =
dW
dt
= mv
dv
dt
= mva = Fv
35Kevin Zhou Physics Olympiad Handouts
as desired.
(b) We note that
dW = mv dv
but we also have
dW = P dt = P
dt
dx
dx =
P
v
dx
where we introduced a factor of v to convert dt (which we don’t want to deal with) to dx.
Doing some rearrangement, Z
mv2
dv =
Z
P dx.
Performing the integral, we have
v(x0) =

3
m
Z x0
0
P(x)dx
1/3
.
In the context of drag car racing, this is called Huntington’s rule.
If P is constant, we must have F ∝ 1/v. But how can such a force arise? A car engine (or
your legs, on a bicycle) turns an axle at angular velocity ω with torque τ with P = τω. The
engine works best at a restricted range of ω. So when a modern car increases its speed, the
gear is automatically changed to keep ω near the optimal range. At maximum power, P is
fixed, so τ is roughly fixed as well, but the higher gear reduces the torque acting on the wheels,
and hence the force accelerating the car.
Example 16
Suppose a planet instantly stopped, at a distance r0 from a star of mass M. Write the time
it would take the planet to collide with the star, as a single integral.
Solution
If the planet has mass m, then conservation of energy gives
1
2
mv2
−
GMm
r
= −
GMm
r0
so that its radial velocity is
dr
dt
= −
s
2GM

1
r
−
1
r0

.
We can write the time taken to collide as
T =
Z
dt =
Z 0
r0
dr
dt
dr
=
1
√
2GM
Z r0
0
dr
p
1/r − 1/r0
.
It’s good practice to write the integral in dimensionless form, so that the dependence of the
answer on the dimensionful quantities is manifest. To do this, substitute x = r/r0 to get
T =
r
r3
0
2GM
Z 1
0
r
x
1 − x
dx.
36Kevin Zhou Physics Olympiad Handouts
This lets us read off T2 ∝ r3
0, in accordance with Kepler’s third law, and required by dimen-
sional analysis as shown in problem 2. In case you’re wondering, the value of the remaining
integral is π/2, as can be shown by substituting x = sin2
θ.
[2] Problem 30 (Kalda). The deceleration of a boat in water due to drag is given by a function a(v).
Given an initial velocity v0, write the total distance the boat travels as a single integral.
Solution. We have Z
dx =
Z
dv
dx
dv
=
Z
dv
dx
dt
dt
dv
= −
Z
v dv
a(v)
which is a single integral in terms of the function a(v), as desired. Putting the bounds in,
∆x = −
Z 0
v0
v dv
a(v)
=
Z v0
0
v dv
a(v)
.
[5] Problem 31. A particle in a potential well.
(a) Consider a particle of mass m and energy E with potential energy V (x), which performs
periodic motion. Write the period of the motion in terms of a single integral over x.
(b) Suppose the potential well has the form V (x) = V0(x/a)n for even n > 0. If the period of
the motion is T0 when it has amplitude A0, find the period when the amplitude is A, by
considering how the integral you found in part (a) scales with A.
(c) Find a special case where you can check your answer to part (b). (In fact, there are two more
special cases you can check, one which requires negative n and negative V0, and one which
requires V (x) to be replaced with its absolute value.)
(d) Using a similar method to part (a), write down an integral over θ giving the period of a
pendulum with length L in gravity g, without the small angle approximation. Using this,
compute the period of the pendulum with amplitude θ0, up to order θ2
0. (This result was first
published by Bernoulli, in 1749.)
(e) ⋆ Part (d) is the kind of involved computation you might see in a graduate mechanics course.
But if you think you’re really tough, you can go one step further. Consider a mass m oscillating
on a spring of spring constant k with amplitude A. Calculate its period of oscillation up to
order A2, accounting for special relativity. (Concretely, assume that the spring force doesn’t
change the rest mass m, and has a potential U = kx2/2. In relativity, the force F = −dU/dx
still obeys F = dp/dt, but now E = γmc2 and p = γmv, where γ = 1/
p
1 − v2/c2.)
Solution. (a) The statement of conservation of energy is
E =
1
2
mv2
+ V (x), v =
r
2(E − V (x))
m
.
Therefore, the period is
T =
Z
dt =
Z
dt
dx
dx =
Z
dx
p
2(E − V (x))/m
.
37Kevin Zhou Physics Olympiad Handouts
To be more precise, we should put the bounds of integration back in. If the lowest and highest
values of x are xmin and xmax, then
T = 2
Z xmax
xmin
dx
p
2(E − V (x))/m
where the factor of two is because this is just half of the oscillation.
(b) The particle can perform periodic motion if at x = ±A, v = 0 so V0(A/a)n = E. Thus
T = 2
Z A
−A
dx
p
2(V0(A/a)n − V0(x/a)n)/m
∝
Z A
−A
dx
√
An − xn
By dimensional analysis, the integral (a function of A) is proportional to A1−n/2, so
T = T0

A
A0
1−n/2
Incidentally, you can also do this problem by dimensional analysis directly on the parameters.
At first glance, this is impossible because there are too many dimensionful quantities: E, m, a,
V0, and T, which permit 5−3 = 2 dimensionless groups. (Recall from an earlier problem that
one can usually get a scaling relation only if there’s only 1 dimensionless group.) However, V0
and a only appear in the combination V0/an. So there are only 4 independent dimensionful
parameters, and a standard dimensional analysis yields the same result.
(c) The three analytically tractable examples are:
• For n = 2 we have simple harmonic motion, and indeed here the period is independent
of amplitude. (Incidentally, can you think of any potentials that aren’t simple harmonic,
but also have this property?)
• For n = −1 we have an inverse square force and T ∝ A3/2. This makes sense, because it
matches the form of Kepler’s third law, which gives the general scaling of orbits in inverse
square forces. (Here we’re considering the degenerate case of a straight-line orbit.)
• For n = 1 we have a constant force, which doesn’t yield oscillations. But the scaling
argument of part (b) would still work if we used the potential V (x) = V0|x/a|, which does
have oscillations. In this case we predict T ∝
√
A, which makes sense; it corresponds to
the usual time-dependence ∆x = gt2/2 ∝ t2 of uniformly accelerated motion.
That’s as far as you can go with the functions you learn in high school and college. There are
analytic solutions for other n involving exotic “special functions”. For instance, for n = 4 the
solutions can be written in terms of Jacobi elliptic functions, as you can see here. These days
most people encounter such functions by solving integrals with computer programs.
(d) Conservation of energy states
1
2
Iω2
= mgL(cosθ − cosθ0), I = mL2
which means
T = 4
Z θ0
0
dθ
ω
= 4
Z θ0
0
dθ
p
(2g/L)(cosθ − cosθ0)
.
38Kevin Zhou Physics Olympiad Handouts
This form is a bit annoying, because the cosines are both extremely close to 1. To fix this
issue, we use the half-angle formula (1 − cosθ)/2 = sin2
(θ/2), to get
T = 2
s
L
g
Z θ0
0
dθ
p
sin2
(θ0/2) − sin2
(θ/2)
.
This newer form still has the problem that as θ0 goes to zero, the integration range goes to
zero while the integrand can get large, making it hard to see how big the result is. To fix this,
change variables from θ to ϕ, where sinϕ = sin(θ/2)/sin(θ0/2), which gives
T = 4
s
L
g
Z π/2
0
dϕ
p
1 − sin2
ϕsin2
(θ0/2)
.
This is the easiest form to handle, because it makes the θ0 → 0 limit obvious, and it makes it
manifest that the first correction is of order θ2
0. To extract that term, we expand the sine to
first order, giving
T = 4
s
L
g
Z π/2
0
dϕ

1 +
θ2
0
8
sin2
ϕ

= 2π
s
L
g

1 +
θ2
0
16

.
There are many other ways to get this, but our route is probably the best if you’re interested
in even higher-order terms. For instance, the coefficient of the θ4
0 term is 11/3072.
(e) This is a taste of the kind of problem you’ll see in R2. It can get quite messy, but it’s not
too bad if you work in the right variables. First, note that since F = −dU/dx, we still have
energy conservation, but with the relativistic energy expression,
γmc2
+
1
2
mω2
0x2
= mc2
+
1
2
mω2
0A2
where ω2
0 = k/m as usual. Solving for γ, we find
γ = 1 +
ω2
0
2c2
(A2
− x2
).
Next, using the definition of γ, we have
T = 4
Z A
0
dx
v
=
4
c
Z A
0
γ
p
γ2 − 1
dx.
At this point we can perform a quick check to make sure we’re on the right track. Note that
in the ultrarelativistic limit, where the spring is so strong that the mass is always moving
at nearly the speed of light, we have γ → ∞, so that the integrand just reduces to 1. Then
T ≈ 4A/c, which is exactly as expected.
Anyway, in this problem we’re considering small relativistic corrections, γ−1 ≪ 1. The easiest
way to make this manifest is to eliminate γ in favor of A, using our result above. There we
found that γ − 1 = O((ω0A/c)2), so we can expand in the small quantity ω0A/c, giving
T =
4
c
Z A
0
c
ω0
1
√
A2 − x2
+
3
8
ω0
c
p
A2 − x2 + O((ω0A/c)4
)dx.
39Kevin Zhou Physics Olympiad Handouts
The first term simply recovers the nonrelativistic result T = 2π/ω0, and the second term is
straightforward to integrate, yielding
T =
2π
ω0

1 +
3
16
ω2
0A2
c2
+ O((ω0A/c)4
)

.
Since the peak speed v0 is approximately ω0A in the nonrelativistic limit, this result is therefore
accurate up to corrections of order (v0/c)4.
6 Multiple Integrals
It’s also useful to know how to set up multiple integrals. This is fairly straightforward, though
technically an “advanced” topic, so we’ll demonstrate it by example. For further examples, see
chapter 2 of Wang and Ricardo, volume 1, or MIT OCW 18.02, lectures 16, 17, 25, and 26.
Idea 9
In most Olympiad problems, multiple integrals can be reduced to single integrals by symmetry.
Example 17
Calculate the area of a circle of radius R.
Solution
The area A is the integral of dA, i.e. the sum of the infinitesimal areas of pieces we break the
circle into. As a first example, let’s consider using Cartesian coordinates. Then the pieces
will be the rectangular regions centered at (x,y) with sides (dx,dy), which have area dxdy.
The area is thus
A =
Z
dA =
Z
dx
Z
dy.
The only tricky thing about setting up the integral is writing down the bounds. The inner
integral is done first, so its bounds depend on the value of x. Since the boundary of the circle
is x2 + y2 = R2, the bounds are y = ±
√
R2 − x2. Thus we have
A =
Z R
−R
dx
Z √
R2−x2
−
√
R2−x2
dy.
We then just do the integrals one at a time, from the inside out, like regular integrals,
A =
Z R
−R
2
p
R2 − x2 dx = 2R2
Z 1
−1
p
1 − u2 du = 2R2
Z π/2
−π/2
cos2
θdθ = πR2
where we nondimensionalized the integral by letting u = x/R, and then did the trigonometric
substitution u = sinθ. (To do the final integral trivially, notice that the average value of
cos2 θ along any of its periods is 1/2.)
We can also use polar coordinates. We break the circle into regions bounded by radii r and
r + dr, and angles θ and θ + dθ. These regions are rectangular, with side lengths of dr and
40Kevin Zhou Physics Olympiad Handouts
rdθ, so the area element is dA = rdrdθ. Then we have
A =
Z R
0
rdr
Z 2π
0
dθ = 2π
Z R
0
rdr = πR2
which is quite a bit easier. In fact, it’s so much easier that we didn’t even need to use double
integrals at all. We could have decomposed the circle into a bunch of thin circular shells,
argued that each shell contributed area (2πr)dr, then integrated over them,
A =
Z R
0
2πrdr = πR2
.
In Olympiad physics, there’s usually a method like this, that allows you to get the answer
without explicitly writing down any multiple integrals.
Example 18
Calculate the moment of inertia of the circle above, about the y axis, if it has total mass M
and uniform density.
Solution
The moment of inertia of a small piece of the circle is
dI = x2
dm = x2
σ dA =
x2M
πR2
dA
where x2 appears because x is the distance to the rotation axis, and σ is the mass density
per unit area. Using Cartesian coordinates, we have
I =
M
πR2
Z R
−R
dx
Z √
R2−x2
−
√
R2−x2
x2
dy.
The inner integral is still trivial; the x2 doesn’t change anything, because from the perspective
of the dy integral, x is just some constant. However, the remaining integral becomes a bit
nasty. In general, when this happens, we can try flipping the order of integration, giving
I =
M
πR2
Z R
−R
dy
Z √
R2−y2
−
√
R2−y2
x2
dx.
Unfortunately, this is equally difficult. Both of these integrals can be done with trigonometric
substitutions, as you’ll check below, but there’s also a clever symmetry argument.
Notice that I is also equal to the moment of inertia about the x axis, by symmetry. So if we
add them together, we get
2I =
Z
x2
+ y2
dm =
Z
r2
dm.
41Kevin Zhou Physics Olympiad Handouts
The r2 factor has no dependence on θ at all, so the angular integral in polar coordinates is
trivial. We end up with
2I =
M
πR2
Z R
0
2πrr2
dr =
1
2
MR2
which gives an answer of I = MR2/4, as expected.
[2] Problem 32. Calculate I in the previous example by explicitly performing either Cartesian integral.
Solution. Starting from the second expression in the example,
I =
M
πR2
Z R
−R
dy
Z √
R2−y2
−
√
R2−y2
x2
dx =
M
3πR2
Z R
−R
2(R2
− y2
)3/2
dy.
Let y = Rsinθ. Then we have
I =
2MR2
3π
Z π/2
−π/2
cos4
θdθ.
This integral can be done by repeatedly using the double angle formula,
Z π/2
−π/2
cos4
θdθ =
Z π/2
−π/2

1 + cos(2θ)
2
2
dθ =
Z π/2
−π/2

1
4
+
1
2
cos(2θ) +
1
8
+
1
8
cos(4θ)

dθ =
3π
8
.
Personally, I can never remember all the trigonometric formulas, and I usually just expand everything
in complex exponentials. Here that method gives a slick solution, as
Z π/2
−π/2
cos4
θdθ =
1
16
Z π/2
−π/2
(eiθ
+ e−iθ
)4
dθ.
Now note that expanding with the binomial theorem gives terms of the form e2inθ for integers n,
which integrate to zero unless n = 0. So the only term that matters gives
Z π/2
−π/2
cos4
θdθ =
1
16
Z π/2
−π/2

4
2

dθ =
3π
8
.
Whichever method you used, we conclude the answer is I = MR2/4, as expected.
[3] Problem 33. In this problem we’ll generalize some of the ideas above to three dimensions, where
we need triple integrals. Consider a ball of radius R.
(a) In Cartesian coordinates, the volume element is dV = dxdy dz. Set up an appropriate triple
integral for the volume.
(b) The inner two integrals might look a bit nasty, but we already have essentially done them.
Using the result we already know, perform the inner two integrals in a single step, and then
perform the remaining integral to derive the volume of a sphere.
(c) In cylindrical coordinates, the volume element is dV = rdrdθdz. Set up a triple integral for
the volume, and perform it. (Hint: this can either be hard, or a trivial extension of part (b),
depending on what order of integration you choose.)
42Kevin Zhou Physics Olympiad Handouts
(d) In spherical coordinates, the volume element is dV = r2 dr sinϕdϕdθ. Set up a triple integral
for the volume, and perform it.
(e) Let the ball have uniform density and total mass M. Compute its moment of inertia about
the z-axis. (Hint: this can be reduced to a single integral if you use an appropriate trick.)
Solution. (a) By analogy to the two-dimensional case,
V =
Z R
−R
dx
Z √
R2−x2
−
√
R2−x2
dy
Z √
R2−x2−y2
−
√
R2−x2−y2
dz.
(b) The inner two integrals just represent the area of a circle, formed by slicing the ball along a
plane of constant x. Thus, the answer has to be πr2 where r is the radius of that circle (as
we derived explicitly in the example), and in this case r2 = R2 − x2. Thus, we have
V =
Z R
−R
π(R2
− x2
)dx = πR3
Z 1
−1
1 − x2
dx =
4
3
πR3
.
(c) By analogy to the two-dimensional case,
V =
Z R
−R
dz
Z √
R2−z2
0
rdr
Z 2π
0
dθ.
Again, the inner two integrals look a bit nasty, but they represent nothing more than the area
of a circle of radius r, leaving
V =
Z R
−R
π(R2
− z2
)dz
upon which the solution continues just as in part (b).
(d) The triple integral immediately turns into three independent integrals,
V =
Z R
0
r2
dr
Z π
0
sinϕdϕ
Z 2π
0
dθ = 4π
Z R
0
r2
dr =
4
3
πR3
.
(e) We are looking for
I =
Z
x2
+ y2
dm.
By spherical symmetry, the integrals of x2 dm, y2 dm, and z2 dm are all equal. Thus,
I =
2
3
Z
x2
+ y2
+ z2
dm
but this integral is now easy to do because it has spherical symmetry. We have
I =
2
3
M
4
3πR3
Z R
0
4πr2
r2
dr =
2
5
MR2
as expected. The same trick can be used to show that the moment of inertia of a spherical
shell is (2/3)MR2.
43Kevin Zhou Physics Olympiad Handouts
[2] Problem 34. Consider a spherical cap that is formed by slicing a sphere of radius R by a plane,
so that the altitude from the vertex to the base is h. Find the area of its curved surface using an
appropriate integral.
Solution. This is a double integral, where it’s best to use spherical coordinates. Recall that the
volume element in spherical coordinates was dV = r2 dr sinϕdϕdθ. Thus, the area element for a
part of this sphere is dA = R2 sinϕdϕdθ. The area integral is
A = R2
Z cos−1((R−h)/R)
0
sinϕdϕ
Z 2π
0
dθ = 2πhR.
After doing the trivial inner integral, this approach is just slicing the surface by dϕ. You can also
equivalently solve it by slicing it in dz. In that case the integrand is a bit more complicated, but
the bounds are simpler.
7 Approximating Integrals
[3] Problem 35. As you learned in calculus class, we may approximate the area under a function
using a lot of rectangles, and in the limit where the rectangles become very thin, we recover the
true area. This is how integration is defined. However, you can also use the reasoning in reverse: a
sum over many elements of a slowly varying function can be approximated with an integral.
(a) For n ≫ 1, find both an underestimate and an overestimate for
Pn
k=1 k by replacing it with
appropriate integrals. How does the fractional error of your approximations scale with n?
(b) For n ≫ 1, find a reasonable way to approximately evaluate
Pn
k=1 logk. How does the
fractional error of your approximation scale with n? How good of a result can you get?
We’ll use these kinds of approximations in several later problem sets.
Solution. (a) We can think of this sum as a discrete Riemann sum approximating the area under
the function f(x) = x, where each rectangle has width ∆k = 1. If we take the rectangle
heights to be set by the value of the function at their right edges, we get
n X
k=1
k =
n X
k=1
k∆k ≈
Z n
0
xdx =
n2
2
.
Since the function is monotonically increasing, this guarantees that our approximation is an
underestimate.
To get an overestimate, we could have instead used a leftward Riemann sum, giving
n X
k=1
k ≈
Z n+1
1
xdx =
n2 + 2n
2
.
The exact answer is n(n + 1)/2, so the fractional error of these approximations scales as 1/n.
Incidentally, if we had taken a centered Riemann sum, integrating from 1/2 to n + 1/2, we
would have gotten the exact correct answer. That’s just because the linear function we’re
considering here is particularly simple. But in general, you expect a centered Riemann sum
to do better, the trapezoidal rule to do better than that, and Simpson’s rule to do better still.
44Kevin Zhou Physics Olympiad Handouts
If you’re mathematically inclined, you might be wondering if there’s a rigorous way to deter-
mine the error in this approximation. That’s given by the Euler–Maclaurin formula, which
states that the difference between the sum and integral is equal to a series involving derivatives
of the integrand at the endpoints. Using the trapezoidal rule automatically takes care of the
first term in that series, and Simpson’s rule takes care of the first two.
(b) Here we have to be careful, because while logx is slowly varying over most of the range, it
blows up as x → 0. We shouldn’t include this violent region in the integral, because it doesn’t
affect the sum at all. One reasonable option is to take the same prescription we used in part
(a), but drop the k = 1 term since log1 = 0, giving
n X
k=1
logk =
n X
k=2
logk ≈
Z n
1
logxdx = nlogn − n + 1.
Generically, we expect the fractional error of a Riemann sum to scale as 1/n. To show that
rigorously here, we can use the fact that this is a rightward Riemann sum of an increasing
function, so that our approximation is guaranteed to be an underestimate. The analogous
leftward Riemann sum, which is guaranteed to be an overestimate, gives
n X
k=1
logk ≈
Z n+1
1
logxdx = (n + 1)log(n + 1) − (n + 1) + 1.
The answer is between these two quantities, and the biggest part of the difference between
them scales as logn. That corresponds to a fractional error of order 1/n as expected.
We can summarize the content of the above two approximations as
n X
k=1
logk = nlogn − n + O(logn).
In fact, it can be proven that
n X
k=1
logk = nlogn − n +
1
2
logn + log(
√
2π) + O(1/n).
This result is called Stirling’s approximation, and we’ll put it to use in P2 and T2.
It turns out we can get the order logn term right by either using a centered Riemann sum
(i.e. taking n + 1/2 for the upper range of integration), or by using the trapezoidal rule, as
described here. But there’s no way to get the order-one term right using any variation of
these methods, because the bins themselves have a width of 1. The integral is smooth, while
the sum itself is inherently chunky. So deriving Stirling’s approximation requires a different
method, which is described here. (That derivation is quite short in modern notation, but it’s
subtle. According to the book Concrete Mathematics, it took Stirling several years to get the
order-one piece right, back in the 1700s!)
45Kevin Zhou Physics Olympiad Handouts
Example 19
For ϵ ≪ 1, find a rough estimate for the leading term in the definite integral
I =
Z π/4
0
dθ
ϵ2 + sin2
θ
.
Solution
The integrand has a sharp peak near θ = 0 of height ∼ 1/ϵ2 and width θ ∼ ϵ, so I ∼ 1/ϵ.
If we also want to get the prefactor, we can approximate the integral by keeping only the
contribution from the peak. On the peak, we can use the small angle approximation,
I ≈
Z π/4
0
dθ
ϵ2 + θ2
≈
Z ∞
0
dθ
ϵ2 + θ2
=
π
2ϵ
where the second step followed because the integrand falls rapidly for θ ≳ ϵ.
Remark
The estimate above is right, but you might worry we’ve missed some important contribu-
tions, e.g. from the integration range away from the peak, or from applying the small angle
approximation within the integral. A more careful method is to split the integration range,
I =
Z δ
0
dθ
ϵ2 + sin2
θ
+
Z π/4
δ
dθ
ϵ2 + sin2
θ
= I1 + I2
where ϵ ≪ δ ≪ 1. Then we can apply approximations within I1 and I2 separately. First,
I1 =
Z δ
0
dθ
ϵ2 + θ2
+ O
Z δ
0
θ4 dθ
(ϵ2 + θ2)2

=
1
ϵ
tan−1 δ
ϵ
+ O(δ)
where we accounted for the leading correction to the small angle approximation, and expanded
the integrand with the binomial theorem. Similarly, in the second case, expanding the
denominator for small ϵ gives
I2 =
Z π/4
δ
dθ
sin2
θ
+ O
Z π/4
δ
ϵ2
sin4
θ
!
= (cotδ − 1) + O(ϵ2
/δ3
).
We now can explicitly see how big the error terms are. To finish, we should check that we can
choose δ so that the error terms are reasonably small, and that the answer is independent of
the precise value of δ. Here, we take δ ∼
√
ϵ. Taylor expanding the arctangent and cotangent,
I1 =
π
2ϵ
−
1
δ
+ O(
√
ϵ), I2 =
1
δ
− 1 + O(
√
ϵ).
We thus conclude I = π/(2ϵ) − 1 + O(
√
ϵ), which is more accurate than the rough treatment
above, and has an estimate on the error. You probably won’t ever have to do anything this
intricate for an Olympiad, but this is the kind of reasoning you might informally do (much
more roughly than what’s written above) to check that your initial estimate is right.
46Kevin Zhou Physics Olympiad Handouts
[3] Problem 36. [A] Estimating some integrals with sharp peaks. For all cases, you only need to find
an estimate for the leading contribution in the limit ϵ → 0, and you can drop numeric prefactors.
(a) To warm up, find a rough estimate for
I1 =
Z ∞
0
dx
(ϵ + x)2 (1 + x)
.
(b) Find a rough estimate for
I2 =
Z ∞
0
dx
√
ϵ + x(1 + x)
.
(c) Find a rough estimate for
I3 =
Z ∞
0
dx
(ϵ + x)(1 + x)
.
Solution. (a) There’s a sharp peak near x = 0, of width ϵ and height 1/ϵ2, so we estimate
I1 ∼ 1/ϵ.
(b) There’s a sharp peak near x = 0, of width ϵ and height 1/
√
ϵ, so the peak contributes ∼
√
ϵ.
But wait! That’s actually a small quantity in the limit ϵ → 0. In this case, the peak
simply isn’t very high, and the dominant contribution actually comes from the rest of the
integral. A very rough estimate can be found by neglecting the smaller part of each term in
the denominator in each part of the integration range,
I2 ∼
Z ϵ
0
dx
√
ϵ
+
Z 1
ϵ
dx
√
x
+
Z ∞
1
dx
x3/2
= O(
√
ϵ) + O(1) + O(1) = O(1).
That is, the integral is an order-one number, independent of ϵ.
(c) This is in between the previous two cases, so let’s apply a similar rough approximation,
I3 ∼
Z ϵ
0
dx
ϵ
+
Z 1
ϵ
dx
x
+
Z ∞
1
dx
x2
= O(1) + O(log(1/ϵ)) + O(1) = O(log(1/ϵ)).
That is, the integral is only logarithmically divergent in ϵ, and most of the contribution comes
from the region away from the peak but before the falloff at infinity, ϵ ≪ x ≪ 1. This kind of
behavior is more common than you might think, especially in more advanced physics.
Of course, if you’re not sure about any of these steps, you can explicitly split the integration
range up (e.g. into 0 < x < δ1, δ1 < x < δ2, and x > δ2, with ϵ ≲ δ1 ≪ δ2 ≲ 1) and
approximate within each region, to get the same result.
Remark
In Olympiad physics, you need to understand how to set up integrals, but you almost
never have to perform a nontrivial integral. There will almost always be a way to solve the
problem without doing explicit integration at all, or an approximation you can do to render
the integral trivial, or the integral will be given to you in the problem statement. This
is because physics competitions are generally written to make students think hard about
physical systems, and the integrals are just viewed as baggage.
47Kevin Zhou Physics Olympiad Handouts
Even introductory calculus has harder integrals than Olympiad physics. For example, consider
Z
secxdx = log|secx + tanx| + C.
When I first saw this, I was shocked by how the trick for doing this integral came out of
nowhere; it seemed much harder than anything else in the class. And it is! Historically,
it arose in 1569 from Mercator’s projection, where it gives the vertical distance on the
map from the equator to a given latitude. For decades, cartographers simply looked up
the numeric value of the integral in tables, where the Riemann sums had been done by
hand. (They had no chance of solving it analytically anyway, since Napier only invented
logarithms in 1614.) Gradually, tabulated values of the logarithms of trigonometric functions
became available, and in 1645, Bond conjectured the correct result by noticing the close
agreement of tabulated values of each side of the equation. Finally, Gregory proved the
result in 1668, using what Halley called “a long train of Consequences and Complications of
Proportions.” So it took almost a hundred years for this integral to be solved! (Though to
their credit, they had the handicap of not knowing about differentiation or the fundamental
theorem of calculus; they were finding the area under the curve with just Euclidean geometry.)
Even though Olympiad physics tries to avoid tough integrals, doing more advanced physics
tends to produce them, so physicists often get quite good at integration. By contrast,
Spivak’s calculus textbook for math majors only covers integration techniques in a single
chapter towards the end of the book. He justifies the inclusion of this material by saying:
Every once in a while you might actually need to evaluate an integral [...] For
example, you might take a physics course [...] Even if you intend to forget how to
integrate (and you probably will forget some details the first time through), you
must never forget the basic methods.
That attitude is why physics students frequently win the MIT Integration Bee.
48
