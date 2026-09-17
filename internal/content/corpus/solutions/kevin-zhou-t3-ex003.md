---
id: kevin-zhou-t3-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t3-ex003
solution_type: author
source_document: solution-document-kevin-zhou-t3sol
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

Example 3
Fill a dish with water, and sprinkle something small over it, such as ground pepper. If you
place a drop of detergent in the middle of the dish, then the pepper will “flee” away to the
edges. Why does this happen?
Solution
Detergent is a surfactant, meaning that it decreases the surface tension of water. When one
places the detergent in the middle of the dish, it diffuses outward, making the surface tension
temporarily higher near edges of the dish. This leads to an unbalanced surface tension force
on the pepper grains, pulling them to the edges.
5
Kevin Zhou Physics Olympiad Handouts
This phenomenon is called the Marangoni effect. Of course, the force vanishes once the
detergent becomes uniformly distributed, and the surface tension is uniform again.
Remark
Here’s a neat fact: the number of atoms that fit into a drop of water is comparable to the
number of drops of water that fit inside the tallest mountains. We can show this using rough
estimates, in the style of P1. Let Eb be the energy of a typical chemical bond, let m be the
mass of an atom, and let d be the typical distance between atoms.
The size ℓ of a droplet of water, such as one that drips from a leaky ceiling, is the size where
surface tension forces balance gravitational ones. By dimensional analysis, we must have
ℓ ∼
p
γ/ρg
as we showed in M7. Now, ρ ∼ m/d3, and the logic of problem 1 implies γ ∼ Eb/d2, so
ℓ ∼
p
Ebd/mg.
Now consider the height H of the tallest mountains. The height of mountains is limited by
the rigidity of rock; if the pressure is too great, then the rock underneath the mountain will
deform, causing it to sink into the ground. Let’s consider an atom-thick column of this rock.
If it sunk down by a distance d, then the gravitational potential energy harvested would be
mgH. However, the atom at the bottom would have to break its chemical bonds with its
horizontal neighbors, which takes energy Eb. Balancing these gives a maximum height
H ∼ Eb/mg.
We have therefore shown that
ℓ ∼
√
Hd
which implies the original statement, within a few orders of magnitude.
2 Melting, Freezing, Boiling, Evaporation, and Condensation
Idea 3
A phase transition is a sudden, dramatic change in a system as thermodynamic variables
such as the temperature are varied. Most of the ones you’ll see have a latent heat
Q = mL.
For example, if ice is heated up, its temperature will gradually increase until it hits 0◦C. At
that point, the temperature will remain constant until all of the ice is melted, i.e. when the
full latent heat has been supplied.
6
Kevin Zhou Physics Olympiad Handouts
Remark
We can roughly estimate the latent heats of melting and evaporation. In general, the latent
heat can go into either in breaking molecular bonds, or increasing the entropy.
When a solid melts into a liquid, the molecules stay right next to each other, so changing
bond energy isn’t the dominant effect. Instead, it’s the increase in entropy as the liquid
molecules become free to move and rotate. Let’s suppose that the molecules, each of mass
mmol, each gain a few extra possible quantum states. This corresponds to an entropy increase
per molecule ∆S ∼ kB, which means a latent heat per mass of
L =
T∆S
mmol
∼
kBT
mmol
=
RT
µ
where µ is the molar mass, or equivalently a latent heat per mole L ∼ RT. For water, we
get L ∼ 105 J/kg, which is of the same order of magnitude as the true value 3.3 × 105 J/kg.
When a liquid becomes a gas, the dominant effect is typically the huge increase in entropy
kB log(Vgas/Vliq) per molecule because they get much more space to move. The ratio inside
the logarithm is huge, which means that while the volumes per molecule Vgas and Vliq vary by
order-one amounts between phase transitions, the logarithm of their ratio is always around
the same value, which turns out to be about 10. This gives a latent heat per mass of
L ∼
10kBT
mmol
=
10RT
µ
.
This result is called Trouton’s rule, and it is surprisingly accurate for most liquids. However,
the latent heat of vaporization for water is noticeably higher, L = 2.26 × 106 J/kg. This is
because of the extra energy needed to break hydrogen bonds.
