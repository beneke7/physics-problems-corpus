---
id: kevin-zhou-m3-p024
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m3-p024
solution_type: author
source_document: solution-document-kevin-zhou-m3sol
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M3Sol.pdf."
---

[2] Problem 24. A uniform half-disc of radius R is nailed to a wall at the center of its circle and
allowed to come to equilibrium. The half-disc is then rotated by an angle dθ. By calculating the
energy needed to do this in two different ways, find the distance from the pivot point to the center
of mass.
Solution. Refer to the diagram below.
Suppose the center of mass is at radius r. The energy required to turn the disc by dθ is
(1 − cos(dθ))mgx ≈
mgx
2
dθ2
.
However, when rotated, all that has changed is that there is a new sector of angle dθ above (sector
A), and one sector is now missing (sector B). A thin sector is approximately an isosceles triangle, so
its center of mass is at radius 2R/3. Thus, the total extra energy of A is (dm)g(2R/3)dθ/2, where
dm/m = dθ/π, so it’s mgR(1/3π)dθ2, and the extra energy due to the absence of B is the same,
so we have
2
3π
mgRdθ2
=
mgx
2
dθ2
which implies
x =
4
3π
R.
[4] Problem 25 (Morin 5.31). Assume that a cloud consists of tiny waterdroplets suspended (uniformly
distributed, and at rest) in air, and consider a raindrop falling through them. Assume the raindrop is
initially of negligible size, remains spherical at all times, and collides perfectly inelastically with the
droplets. It turns out that the raindrop accelerates uniformly; assuming this, find the acceleration.
Solution. Suppose the mass density in the cloud is λ and the mass density of the raindrop is ρ
(note ρ > λ), and suppose r is the radius of the drop, M the mass, and v the velocity. We see that
Ṁ = 4πr2
ṙρ = 3M
ṙ
r
and
Ṁ = πr2
vλ,
which combine to give
v =
4ρ
λ
ṙ.
25
Kevin Zhou Physics Olympiad Handouts
We see that Mg = Ṁv + Mv̇, so Newton’s second law is
Mg = M

3ṙ
r
4ρ
λ
ṙ +
4ρ
λ
r̈

and writing everything in terms of r gives
rgλ/ρ = 12ṙ2
+ 4rr̈.
This is a nonlinear second-order differential equation; there is no general method to solve these
equations. Certainly an exponential won’t work, because you won’t get the same exponential on
the left and right-hand sides. However, we can use the hint, which indicates that v is linear in time.
This implies that r is a quadratic, so guessing r = At2 gives
At2
gλ/ρ = 4A2
(12t2
+ 2t2
).
This implies that we indeed have a solution, as long as
A = (gλ/ρ)/56.
Using our relation between v and ṙ, we finally have
v̇ =
4ρ
λ
r̈ =
g
7
which is the acceleration.
As you can see from this problem and an earlier one, nonlinear second-order differential equations
are actually quite common in physics. Trying a pure power Atn is a decent first guess, because
monomials remain monomials under both differentiation and multiplication; for the same reason,
an exponential AeBt can also work. However, in practice, the vast majority of such differential
equations don’t have analytic solutions at all, or only have solutions in terms of exotic special
functions. Problems for Olympiads and undergraduate textbooks are generally chosen precisely to
avoid these complications, since they draw attention away from the essential physics.
This raindrop problem is a classic, invented (with a slightly different mass accretion rule) for a
Cambridge exam in 1853. (In that era, the exam writers were some of the world’s top physicists
and mathematicians, and they had a lot of great ideas. For example, Stokes wrote the famous 1854
Cambridge Smith’s Prize exam, where one of the problems was what we now call Stokes’ theorem.)
For more discussion of this problem, see this paper by Krane, who is the K in HRK.
[3] Problem 26. There’s a hidden subtlety in the first half of problem 16. Let’s suppose that, instead
of the rope initially being fed through a small hole, we instead had a tiny part of it initially hanging
off the edge of the table. Energy is still conserved, so one might expect the problem is identical.
But if you actually try this in real life, the rope will start thrashing back and forth during its fall.
Why does this happen, and how much of the rope is still on the table when this motion begins?
Solution. A sizable force is needed to turn each piece of the rope around when it reaches the
corner, to go from moving horizontally to vertically. At a certain critical velocity, tension will no
longer be enough to do this, and the rope will jump off the corner. This will lead to the hanging
part whipping back and forth.
To see when this happens, consider the vertical forces on the rope. As we saw with a similar
but static problem in M2, the normal force on the horizontal part of the table has to cancel the
26
Kevin Zhou Physics Olympiad Handouts
force of gravity acting on the part of the rope on the table. This is because otherwise a piece of the
horizontal part of the rope would have an unbalanced vertical force, and would have to go into the
table or jump off it, neither of which make sense.
Thus, considering the vertical forces just gives
dpy
dt
=
x
ℓ
Mg − Nc,y
where we take the downward direction as positive for convenience, and Nc,y is the vertical part of
the normal force acting at the corner of the table. (Recall from M2 that this is significant even
when the corner is small.) Since the rope is flexible, the process is elastic, so energy is conserved.
The rope jumps off the corner when Nc,y becomes zero.
Thus, we need to find dpy/dt. In part (b) of problem 16, we found that
v =
r
g
ℓ
x, a =
g
ℓ
x.
This implies that
dpy
dt
=
M
ℓ
d
dt
(xv) =
M
ℓ
(xa + v2
) =
2x2
ℓ2
Mg.
Setting Nc,y to zero gives x = ℓ/2, i.e. the rope jumps when it’s halfway off the table. For further
discussion and a photo of what actually happens afterward, see appendix A here. We avoided this
subtlety in problem 16 by using a small hole, which guides the rope in the vertical direction.
You might have noticed that the jump occurs precisely when the rope’s speed is equal to the
wave speed v =
p
T/(M/L) at the corner; the explanation for this will be found in W1.
[4] Problem 27 (BAUPC 2002). A small ball is attached to a massless string of length L, the other
end of which is attached to a very thin pole. The ball is thrown so that it initially travels in a
horizontal circle, with the string making an angle θ0 with the vertical. As time goes on, the string
wraps itself around the pole. Assume that (1) the pole is thin enough so that the length of string in
the air decreases very slowly, and (2) the pole has enough friction so that the string does not slide
on the pole, once it touches it. Show that the ratio of the ball’s final speed (right before it hits the
pole) to initial speed is sinθ0.
Solution. You can see the official solution as usual, but it’s a lot longer because it also solves for
the evolution of the height of the ball; in this shorter version of the problem, we only want the final
speed, which is a lot easier to find.
In this problem, energy is conserved because the string doesn’t slide, but angular momentum isn’t
conserved. Now note that if θ were constant, the ball would move at a constant height. Changes in θ
as the string winds up change the ball’s height, which then changes its speed by energy conservation.
By doing some geometry, you can show
mv dv = −mgℓsinθdθ.
The radial F = ma equation is
mg tanθ =
mv2
ℓsinθ
.
Substituting this into the equation above gives
−mg
mv2
mg tanθ
dθ = mv dv
27
Kevin Zhou Physics Olympiad Handouts
which upon separation gives the simple result
−
Z θf
θ0
cotθdθ =
Z vf
v0
dv
v
.
Therefore, we have
sinθ0
sinθf
=
vf
v0
.
Now we just need to know the final angle θf. If we substitute this back into the radial F = ma
equation, then at the end of the motion we have tanθf ∝ v2
f/(ℓsinθf) ∝ 1/(ℓsin3
θf) with ℓ → 0.
Since sinθf is finite, this is only possible if tanθf diverges, so θf = π/2. We therefore conclude the
desired result, vf/v0 = sinθ0.
When dealing with an extended system whose parts all move in different ways, conservation of
energy is occasionally useless. However, the somewhat obscure idea of “center of mass energy” may
become useful instead. For more about this concept, see section 13.5 of Halliday and Resnick.
Idea 7: Center of Mass Energy
The work done on a part of a system is
dW = F dx
where F is the force on that specific part of the system, and dx is its displacement. Then
dW = dE where E is the total energy of the system.
Similarly, the “center of mass work” done on a system is
dWcm = F dxcm
where F is the total force on the system and dxcm is the displacement of the center of mass.
Then dWcm = dEcm where the “center of mass energy” is defined as Ecm = Mv2
cm/2.
It should be noted that, like regular energy and work, center of mass energy and work depend
on the reference frame you’re using.
