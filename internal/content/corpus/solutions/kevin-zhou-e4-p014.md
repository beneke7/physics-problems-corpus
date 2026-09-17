---
id: kevin-zhou-e4-p014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e4-p014
solution_type: author
source_document: solution-document-kevin-zhou-e4sol
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E4Sol.pdf."
---

[3] Problem 14. Consider a current loop I in the xy plane in a constant magnetic field B.
(a) Show that the net force on the loop is zero.
(b) Show that the torque is
τ = m × B
where the magnetic moment is
m = IAẑ
where A is the area of the loop. For simplicity, you can show this in the case where the current
loop is a square of side length L, whose sides are aligned with the x and y axes. (The proof
for a general loop shape requires some vector calculus, but you can attempt it for a challenge.
You’ll need the double cross product identity, a × (b × c) + b × (c × a) + c × (a × b) = 0.)
Solution. (a) We see that
F = I
I
ds × B = I
I
ds

× B = 0,
as desired.
(b) The magnetic moment of the square is
m = IL2
ẑ.
The torque on a side of the square is
τ =
Z
r × dF = I
Z
s × (ds × B).
In particular, it’s useful to pair the two sides parallel to the x axis. These have opposite
currents and differ only by a translation ∆r = Lŷ, so adding their contributions gives a torque
τ = −I
Z L
0
(Lŷ) × (x̂dx × B) = −IL(ŷ × (x̂ × B))
Z L
0
dx = −IL2
(ŷ × (x̂ × B)).
Similarly, the torques due to the other two sides add up to
τ = IL2
(x̂ × (ŷ × B)).
10
Kevin Zhou Physics Olympiad Handouts
Manually performing the cross products, we have
−ŷ × (x̂ × B) = −Byx̂, x̂ × (ŷ × B) = Bxŷ.
Adding these together gives exactly the desired result, τ = m × B.
For completeness, we display a fully general, vector calculus solution, valid for any loop shape.
We note that along the full, closed loop, the fundamental theorem of calculus implies
I
d(s × (s × B)) = 0
simply because the closed loop integral of d(anything) is the net change in (anything) along
the loop, which is zero. Expanding with the product rule gives
I
ds × (s × B) + s × (ds × B) = 0.
Using these results and the double cross product identity, the torque is
τ = I
I
s × (ds × B)
= −I
I
ds × (B × s) − I
I
B × (s × ds)
= −τ − IB ×
I
s × ds

.
Now, s × ds = 2dA, because as s moves a little along the loop it sweeps out a small triangle
of area. Thus we have 2τ = 2IA × B, giving the result.
Idea 3
The force on a small magnetic dipole m in a static magnetic field B is
F = ∇(m · B)
where the gradient acts only on B. As in problem 14, this can be shown relatively eas-
ily for a square loop, and requires some tricky vector calculus for a general current distribution.
From this, we can see that both the force and torque on a magnetic dipole can be found by
differentiating the potential energy
U = −m · B.
In addition, by a vector calculus identity, the force is equivalent to
F = (m · ∇)B + m × (∇ × B).
The second term vanishes if the situation is magnetostatic, and there are no currents right
on top of the dipole itself. This leaves the first term, which is relatively easy to evaluate.
All of these results also hold for electric dipoles in an electrostatic field, if we replace m with
p and B with E. In more general situations, things get much more subtle; we have to account
for the “hidden” momentum, to be discussed in R3.
11
Kevin Zhou Physics Olympiad Handouts
Remark
The expression for the potential energy above is notoriously subtle. Here’s the problem: we
know the Lorentz force on a charge is qv × B, which means magnetic fields never do work.
So how can they be associated with a nonzero potential energy?
There are two levels of explanation. First, suppose the magnetic dipole is made of charges
moving in a loop. When such a current loop is placed in a magnetic field, and moved
or rotated, mechanical work can be done on the loop. But at the same time, there will
be an induced emf in the loop, which speeds up or slows down the current. The work
done by these two effects perfectly cancels, so that the energy of the loop stays constant.
For this kind of dipole, the expression for U doesn’t indicate the total energy, but only
the “mechanical” potential energy, in the sense that differentiating it gives the right forces
and torques. (Some furtherdiscussion of this point is in chapterII-15 of the Feynman lectures.)
On the other hand, the magnetic dipole moment of a common bar magnet doesn’t come from
charges moving in a loop! Instead, it comes from the intrinsic magnetic dipole moments of
the unpaired electrons in the magnet. These kinds of dipole moments aren’t composed of
any moving subcomponents; they are an elementary and immutable property of the electron,
like its mass or charge. In these cases, U = −m · B really is the total energy, and the
magnetic field can do work. You won’t hear much about these elementary dipole moments in
introductory books, because they can only be properly understood by combining relativity
and quantum mechanics, but they’re responsible for most magnetic phenomena.
