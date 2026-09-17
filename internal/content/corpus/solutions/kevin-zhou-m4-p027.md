---
id: kevin-zhou-m4-p027
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p027
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[3] Problem 27. A block of mass m is bouncing back and forth in a box spanning 0 < x < L, with
initial speed v0. At time t = 0, the potential energy is slowly raised in part of the box, so that
V (x,t) =
(
V0 0 < x < ut
0 ut < x < L
where V0 > mv2
0/2, and the speed of the potential u is very small. At time t = L/u, when the
potential covers the entire box, what is the block’s speed?
Solution. This is a simplified version of Physics Cup 2021, problem 4. The key is to use the
adiabatic theorem. Initially, the box’s orbit in phase space is a rectangle with width ∆x = L and
∆px = 2mv0. As the potential barrier enters the box, it effectively makes it shorter. So, just as in
problem 26, the rectangle gets narrower while keeping its area the same.
The twist is that eventually, the block will gain enough energy to climb over the potential barrier;
at this point, the form of its orbit changes discontinuously, so we have to track exactly what’s going
on instead of blindly using the adiabatic theorem. Consider the moment when the block’s energy
becomes just enough to climb the potential barrier, and suppose that at this point, ut = x0. Then
the phase space orbit becomes the union of two rectangles:
1. The original, shrinking rectangle with width ∆x = L−x0 and height ∆px = 2mv0L/(L−x0).
2. A new rectangle with width ∆x = x0 and negligible height.
The added rectangle has negligible area, so the adiabatic invariant (the total phase space area)
doesn’t change! After this point, we can continue to apply the adiabatic theorem until the end
of the process. The first rectangle shrinks, until it reaches zero width, while the second rectangle
grows. At the end of the process, we are back to a single rectangle with width ∆x = L and the
same area as before, so the block ends up with the same speed as before.
In terms of Newton’s laws, what’s going on is that the moving potential barrier is initially like
a piston that does work on the block during each collision, but it also subtracts energy since the
block has to eventually climb on top of it. Evidently, these two effects perfectly cancel, thanks to
the adiabatic theorem.
[4] Problem 28 (F = ma, BAUPC). Two particles of mass m are connected by pulleys as shown.
The mass on the left is given a small horizontal velocity v, and oscillates back and forth.
(a) Without doing any calculation, which mass is higher after a long time?
(b) Compute the average tension in the leftward string over the first few cycles, where the left
mass has angular amplitude θ0 ≪ 1.
(c) Let the masses begin a distance L from the pulleys. Find the speed u of the mass which
eventually hits the pulley, at the moment it does, in terms of L and the initial amplitude θ0.
34
Kevin Zhou Physics Olympiad Handouts
Solution. (a) The mass on the right will be higher. If the masses didn’t move up or down, both
would have the same average y-component of tension. But the mass on the left also has
an x-component of tension, so its average magnitude of tension would be higher. This is a
contradiction; to make the tension constant throughout the rope the mass on the right must
rise.
(b) Let a be the acceleration of the string along its length, defined to be positive if the right mass
accelerates up. Then from considering the right and left masses, we have
ma = T − mg, ma −
mv2
r
= mg cosθ − T.
Combining these results, we have
T =
mv2
2r
+
mg(1 + cosθ)
2
where θ is the angle from the vertical. By energy conservation, the first term is mg(cosθ−cosθ0)
where θ0 is the amplitude, so
T =

1
2
+
3
2
cosθ − cosθ0

mg ≈

1 +
θ2
0
2
−
3
4
θ2

mg
where we used the small angle approximation in the second step. Since the motion is approxi-
mately simple harmonic, the average value of θ2 is θ2
0/2, so
T =

1 +
1
2
θ2
0 −
3
8
θ2
0

mg > mg
as expected.
(c) Of course, you can do this using energy conservation and the adiabatic invariant. But we can
also directly use the result of part (b) to solve it by considering forces.
As we’ve seen above,
T =

1 +
1
8
θ2

mg
where θ is the amplitude. Let x be the distance the right mass has risen. From the standpoint
of the left mass, it is simply a pendulum whose length is being adiabatically lengthened, so
by the result of problem 25, we have
Z
(T − mg)dx =
mg
8
Z 2L
L
L3/2
θ2
0
dx
x−3/2
=
mg
4
Lθ2
0

1 −
1
√
2

.
This is the net work done on the right mass, so setting this equal to mu2/2 gives
u =
θ0
2
q
(2 −
√
2)gL.
I thank Varun Rajkumar for correcting a factor of 2 in the original solution.
35
