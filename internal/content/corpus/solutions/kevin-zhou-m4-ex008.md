---
id: kevin-zhou-m4-ex008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-ex008
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

Example 8
Three identical masses are connected by three identical springs, forming an equilateral triangle
in equilibrium. Describe the normal modes of the system.
Solution
Let the system be confined to the xy plane. Then there are three masses that each can move
in two dimensions, giving six degrees of freedom. Since we must be able to construct the
general solution by superposing normal modes, there should be six normal modes. They are:
• Uniform translation. This yields two independent normal modes, as you can superpose
motion in any two distinct directions (e.g. along the x and y axes) to get motion in any
direction. These modes have zero frequency, since sin(ωt) ∝ t in the limit ω → 0.
• Uniform rotation about the axis of symmetry.
23
Kevin Zhou Physics Olympiad Handouts
• A “breathing” motion where the whole triangle expands and contracts.
• A “scissoring” motion where one mass moves outward and the other two move inward.
You might think there are three scissoring normal modes, but they are redundant: just
like how the three sides of the equilateral triangle lie in a plane, these three normal modes
formally lie in a plane, in the sense that you can superpose any two of them to get the
third. So there are two independent scissoring modes.
Thus we have six normal modes, as expected. If the system can move in three-dimensional
space, we need three more; they are uniform translation in the z direction, and rotation
about the x and y axes.
[5] Problem 23 (Morin 4.12, IPhO 1986). N identical masses m are constrained to move on a
horizontal circular hoop connected by N identical springs with spring constant k. The setup for
N = 3 is shown below.
(a) Find the normal modes and their angular frequencies for N = 2.
(b) Do the same for N = 3.
(c) ⋆ Do the same for general N. (Hint: the normal modes you found in part (a) should have
each mass oscillating with unit amplitude, but a different phase. Try to write the normal
modes in part (b) in the same form, and then guess a pattern.)
(d) If one of the masses is replaced with a mass m′ ≪ m, qualitatively describe how the set of
frequencies changes.
(e) Now suppose the masses alternate between m and m′ ≪ m. Qualitatively describe the set of
frequencies.
Part (c) will be useful in X1, where we will quantize the normal modes found here.
Solution. (a) Let the positions of the masses along the circle be x1 and x2. Then
mẍ1 = −k(2x1 − 2x2), mẍ2 = −k(2x2 − 2x1).
Adding and subtracting these equations and letting ω0 =
p
k/m gives
ẍ1 + ẍ2 = 0, ẍ1 − ẍ2 = −4ω2
0(x1 − x2)
which tells us the normal mode angular frequencies are zero and 2ω0. These correspond to
the masses uniformly rotating around the circle together, and to the two moving oppositely.
24
Kevin Zhou Physics Olympiad Handouts
(b) Defining quantities analogously to part (a), we have
ẍ1 = −ω2
0(2x1 − x2 − x3), ẍ2 = −ω2
0(2x2 − x1 − x3), ẍ3 = −ω2
0(2x3 − x1 − x2).
If we subtract the first two equations, we get
ẍ1 − ẍ2 = −3ω2
0(x1 − x2)
which gives a normal mode with angular frequency
√
3ω0, where the first two masses move
oppositely and the third doesn’t move at all. The same happens if we subtract the first and
third equation, and second and third equation. Finally, if we add all three equations, we get
ẍ1 + ẍ2 + ẍ3 = 0
which gives a normal mode with zero frequency: all the masses translate uniformly. Therefore,
the normal mode angular frequencies are zero and
√
3ω0.
Strangely, it seems like we have four normal modes even though there are only three masses!
The reason is that the first three we found are redundant: if you sum any two of them, you
get the third. So there are two normal modes with angular frequency
√
3ω0.
(c) Following the hint, let’s try to express the normal modes in part (b) in a manifestly symmetric
way. We generalize the xi to complex numbers (with the real part standing for the physical
displacement) and impose symmetry by demanding that all of them have unit magnitude,
x1(t) = ei(ωt+φ1)
, x2(t) = ei(ωt+φ2)
, x3(t) = ei(ωt+φ3)
.
To fix these arbitrary phases, note that the equations of motion are symmetric under cyclically
shifting the masses, 1 → 2 → 3 → 1. So if the differences between adjacent phases are uniform,
φ3 − φ2 = φ2 − φ1 = φ1 − φ3 = ϕ
then if one equation is satisfied, all three are automatically satisfied. This is only possible if
3ϕ is a multiple of 2π, so that we have
ϕ ∈ {0,2π/3,4π/3}.
In the case ϕ = 0, the first equation becomes
ω2
= ω2
0(2 − 1 − 1) = 0
where we cancelled an overall, irrelevant factor of eiφ1. Of course, this is just the normal mode
where all the masses translate uniformly. For ϕ = 2π/3, we get
ω2
= ω2
0(2 − e2πi/3
− e4πi/3
) = 3ω2
0
and we find the same angular frequency for ϕ = 4π/3. These are the two other normal modes.
The pattern should now start to appear. For the general case, we have
ẍj = −ω2
0(2xj − xj−1 − xj+1), j = 1,2,...N
25
Kevin Zhou Physics Olympiad Handouts
and we may again guess uniform phase differences between adjacent masses,
xj = eiωt
eiϕj
, ϕ =
2πn
N
for an integer 0 ≤ n < N. Plugging this in, each equation of motion gives
ω2
= ω2
0(2 − e−iϕ
− eiϕ
)
which is equivalent to
ω = 2ω0 sin

ϕ
2

= 2ω0 sin
 πn
N

.
For n = 0,...,N − 1, these are the normal mode angular frequencies.
As an aside, for N ≫ 1 we can visualize the normal modes as waves propagating around the
circle. As we’ll discuss further in W1, the wavenumber k is the rate at which the phase varies
around the circle, so it is proportional to ϕ. Note that for n ≪ N, we have ω ∝ ϕ as well.
This indicates that waves built out of only normal modes with n ≪ N travel with constant
velocity v = ω/k, and hence satisfy the ideal wave equation. In general, systems that satisfy
the ideal wave equation often appear in the low n/N limit of a system with many discrete
parts. We’ll see these points in more detail in W1.
You might be wondering why the guess xj = eiωt eiϕj works. As we’ve discussed above, guessing
a complex exponential eiωt is the general technique when dealing with linear equations with
time translation symmetry. Similarly, in this problem we considered linear equations with a
discrete spatial translational symmetry, i.e. the equations stay the same upon substituting
j → j+1. So by the same logic, the general technique must be to guess a complex exponential
in j, which is precisely the eiϕj factor.
(d) When we add the one light mass, it adds a new normal mode with angular frequency
p
2k/m′,
where the light mass oscillates back and forth and nothing else moves. The band of angular
frequencies from zero to 2ω0 barely changes.
(e) Naively, if we turn half the masses into light masses, we get N/2 modes with angular frequency p
2k/m′, consisting of each light mass oscillating independently. But this isn’t right, because
we must take sinusoidal combinations of these modes to get normal modes, by the same logic
as we used in the previous parts. This broadens the normal mode angular frequencies into a
band centered around
p
2k/m′. Meanwhile, for the low-frequency modes, the heavy masses
can’t even see the light masses, so it’s as if every spring has been doubled in length. We hence
have a second band of normal modes with angular frequencies centered on
p
k/2m, which is
nonoverlapping if m′ ≪ m.
This idea of normal mode frequencies filling dense but separated bands is crucial in solid state
physics. The result of part (d) shows how “defects” in a solid can lead to isolated energy
levels, outside the bands. For further discussion, see this paper.
[4] Problem 24. [A] In this problem, you will analyze the normal modes of the double pendulum,
which consists of a pendulum of length ℓ and mass m attached to the bottom of another pendulum,
of length ℓ and mass m. To solve this problem directly, one has to compute the tension forces in
the two strings, which are quite complicated. A much easier method is to use energy.
26
Kevin Zhou Physics Olympiad Handouts
(a) Parametrize the position of the pendulum in terms of the angle θ1 the top string makes with
the vertical, and the angle θ2 the bottom string makes with the vertical. Write out the kinetic
energy K and the potential energy V to second order in the θi and ˙ θi.
(b) The Euler–Lagrange equations for the system are
d
dt
∂K
∂ ˙ θi
= −
∂V
∂θi
.
Using the results of part (a), write these equations in the form

¨ θ1
¨ θ2

= −
g
ℓ
A

θ1
θ2

where A is a 2 × 2 matrix. This is a generalization of θ̈ = −gθ/ℓ for a single pendulum.
(c) Find the normal modes and their angular frequencies, using the general method in section 4.5
of Morin.
For larger deviations, the double pendulum can become chaotic. For a beautiful visualization of
both the chaotic behavior and the “islands of stability” within, see this video.
Solution. (a) To second order, the horizontal displacements of the masses are
x1 = ℓθ1, x2 = ℓ(θ1 + θ2)
which gives a kinetic energy of
K =
mℓ2
2
(( ˙ θ1)2
+ ( ˙ θ1 + ˙ θ2)2
).
The vertical displacements are
y1 = ℓ(1 − cos(θ1)), y2 = ℓ(2 − cos(θ1) − cos(θ2))
and expanding the cosines to second order gives
y1 =
ℓ
2
θ2
1, y2 =
ℓ
2
(θ2
1 + θ2
2)
which gives a potential energy of
V =
mgℓ
2
(2θ2
1 + θ2
2).
(b) The resulting Euler–Lagrange equations are
2 ¨ θ1 + ¨ θ2 = −
2g
ℓ
θ1, ¨ θ1 + ¨ θ2 = −
g
ℓ
θ2.
Solving the system, we find
A =

2 −1
−2 2

straightforwardly.
27
Kevin Zhou Physics Olympiad Handouts
(c) We must find the eigenvalues of the matrix, which obey the equation
(2 − λ)2
− 2 = 0
which implies λ = 2 ±
√
2. The normal mode amplitudes are
high frequency :

1
−
√
2

, low frequency :

1 √
2

and the angular frequencies are ω2
± = (g/ℓ)(2 ±
√
2).
Remark
We mostly considered examples with two or three masses, but the techniques above work for
systems with arbitrarily many degrees of freedom. However, this quickly becomes intractable
unless the setup is highly symmetric, as in problem 23. Without such symmetry, a computer
is generally necessary, so this sort of question won’t appear on standard Olympiads. However,
if you’re curious, see ITPO 2016, problem 1 and Physics Cup 2021, problem 3 for examples.
5 [A] Adiabatic Change
Idea 5
When a problem contains two widely separate timescales, such as a fast oscillation superposed
on a slow overall motion, one can solve for the fast motion while neglecting the slow motion,
then solve for the slow motion by replacing the fast motion with an appropriate average.
Example 9: MPPP 21
A small smooth pearl is threaded onto a rigid, smooth, vertical rod, which is pivoted at
its base. Initially, the pearl rests on a small circular disc that is concentric with the rod,
and attached to it a distance d from the rotational axis. The rod starts executing simple
harmonic motion around its original position with small angular amplitude θ0.
What angular frequency of oscillation is required for the pearl to leave the rod?
28
Kevin Zhou Physics Olympiad Handouts
Solution
The reason the pearl leaves the rod is that the normal force rapidly varies in direction, with
an average upward component. If this average upward force is greater than gravity, the pearl
accelerates upward and leaves the rod.
In this case, the fast motion is the oscillation of the rod, while the slow motion is the rate of
change of the pearl’s distance from the pivot, which can be neglected during one oscillation.
The pearl has horizontal displacement and acceleration
x(t) = −dsinθ ≈ −dθ(t) = −θ0dsinωt, ax(t) = θ0ω2
dsinωt.
This is supplied by the horizontal component of the normal force. The vertical component is
Ny = Nx tanθ(t) ≈ max(t)θ(t) = mθ2
0ω2
dsin2
ωt.
Now we average over the fast motion to understand the slow motion. Since the average value
of sin2
(ωt) is 1/2, the condition for the pearl to go up is
1
2
mθ2
0ω2
d > mg
which gives
ω >
1
θ0
r
2g
d
.
