---
id: kevin-zhou-x1-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-ex007
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

Example 7: Casimir Forces
Consider an infinite uniform string, on which waves propagate with speed v. The string is
held fixed by pins at two points separated by a distance L. When the string is in its ground
state, what is the resulting force between the pins?
Solution
Of course, in classical mechanics the ground state would just be y(x) = 0, and the force
would just be the tension T. But there is an additional quantum mechanical contribution,
which arises because each of the standing waves between the pins, with angular frequencies
ωn = nπv/L, carries a so-called “zero point” energy ℏωn.
As usual, force can be found by differentiating energy, F = −dE/dL. By summing up the
zero point energy in all of the standing waves, we naively get
E =
X
n
ℏωn
2
=
πℏv
2L
∞ X
n=1
n = E0
∞ X
n=1
n = ∞
27
Kevin Zhou Physics Olympiad Handouts
which is rather unhelpful. This result is off for two reasons. First, even when there aren’t
any pins, the string still has standing waves, and these waves also have a naively infinite
energy density. When we move the pins a bit, we change both the zero point energy outside
the pins and inside, by infinite amounts, but the net change is finite, giving a finite force.
Quantitatively, the energy in between the pins due to the standing waves is
Eplate = E0
∞ X
n=1
n = ∞
and the energy we would have had there if the pins didn’t exist is the “continuous” sum,
Evac = E0
Z ∞
0
xdx = ∞.
The difference should be finite, but we can’t just subtract infinity with infinity, which brings
us to the second problem: none of these quantities are actually infinite. Any real string
will have a finite maximum oscillation frequency – for instance, the wavelength certainly
can’t get smaller than the atomic spacing. Alternatively, even if we had an idealized string
where Evac was actually infinite, no real pin can perfectly block waves of all frequencies. For
sufficiently high frequencies the waves won’t be affected by the pins, so that the sum in
Eplate eventually behaves like the integral in Evac, leaving a finite difference between the two.
In other words, the difference between Eplate and Evac in reality comes from only low n and
x. Therefore, let’s “regulate” the two expressions above so that they’re unchanged in this
regime, but match each other at high n and x. The simplest way to do this is to take
Eplate = E0
∞ X
n=1
ne−ϵn
, Evac = E0
Z ∞
0
xe−ϵx
dx =
E0
ϵ2
for small ϵ. To handle the sum, let α = e−ϵ, so that
Eplate/E0 = α + 2α2
+ 3α3
+ ....
Now we use the usual trick for arithmetic-geometric series. Note that
αEplate/E0 = α2
+ 2α3
+ 3α4
+ ....
Subtracting, we find
(1 − α)Eplate/E0 = α + α2
+ α3
+ ... =
α
1 − α
.
We thus conclude that
Eplate =
e−ϵ
(1 − e−ϵ)2
E0 = Evac −
1
12
E0 + O(ϵ)
where we used a result from P1. Finally, when we take ϵ to zero, the difference is simply
E = Eplate − Evac = −
1
12
E0.
28
Kevin Zhou Physics Olympiad Handouts
Differentiating gives the force,
F = −
πℏv
24L2
where the negative sign indicates it is attractive. Not only is this finite, it’s right!
Experiments have measured this “Casimir force” precisely for light between two conductors,
where v = c, and confirmed the expected results.
You’re probably suspicious about this derivation because it depends on the arbitrary choice
of an exponential suppression. What if the sums and integrals were regulated at high n and
x in a different way? Shouldn’t the answer depend on the details of the string and pin?
Remarkably, the answer is no: the regulator doesn’t matter. If you try others, such as e−ϵn2
or 1/nϵ, you’ll get the same result; you can find a general proof in chapter 15 of Schwartz’s
Quantum Field Theory and the Standard Model. The reason is that the effect comes from
physics at low frequencies, so it doesn’t matter how you regulate the high frequencies.
It is for precisely this reason that you will sometimes see the mysterious equation
1 + 2 + 3 + ... = −
1
12
.
It’s not really true. Instead, what it physically means is that the difference between the
regulated sum and integral is −1/12 for any reasonable regulator.
29
