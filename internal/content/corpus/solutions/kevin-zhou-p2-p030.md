---
id: kevin-zhou-p2-p030
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p030
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[4] Problem 30. Some questions about energy.
(a) Estimate the digestible energy content of a stick of butter. (A Calorie is about 4000J, and is
also the energy needed to raise the temperature of a kilogram of water by 1K.)
20
Kevin Zhou Physics Olympiad Handouts
(b) Estimate the rate at which your body burns energy when at rest.
(c) Estimate the rate at which a human being radiates energy. (The Stefan–Boltzmann law states
that the radiation powerperunit area from a blackbody is σT4, where σ = 5.7×10−8 W/m2K4.)
Is radiation a significant source of energy loss for a human being, or is it negligible?
(d) A human being develops mild hypothermia, with their core body temperature dropping by
5◦F. Neglecting any heat transfer with the environment, estimate the number of calories
required to raise their temperature back to normal.
Now let’s verify the energy content of the butter microscopically. This will be a very rough estimate,
so expect answers to be only within two orders of magnitude.
(e) A chemical bond typically involves two electrons, and a characteristic atomic separation
distance of one angstrom, r ∼ 10−10 m. Estimate the binding energy of one chemical bond.
(f) The fats in butter are digested by inputting energy to break the bonds in the molecules, then
harvesting energy by combining the atoms into CO2 and H2O, which have somewhat more
stable bonds.
Estimate the energy content of a kilogram of butter. How close is this to the true result?
Solution. (a) A typical diet is 2000 Calories per day, where the “Calorie” used to describe
nutritional facts is actually a kilocalorie, which is about 4000J. A stick of butter has about
800 Calories, giving an energy of 3 × 106 J.
(b) The power is
(2000Cal)(4000J/Cal)
86400s
≈ 100W.
This is used to maintain homeostasis in your body, and is eventually dissipated as heat.
(c) A rough estimate for the surface area of the human body is A ≈ 1m2. Human skin is on the
order of 300 K, so P ∼ AσT4 ≈ 500 W.
This is wrong, because it can’t be higher than (b). The point is that the radiation output by
the human body is almost completely cancelled by the radiation input by the environment,
which is at almost the same temperature (in absolute terms). For example, in typical indoor
conditions, the environment is at 70◦ F and human skin is at 90◦ F, for a difference of about
10 K. So the power is smaller by a factor of 1 − (290/300)4 = 0.13, giving a reasonable 65
W. It’s still a significant contribution, but not unreasonably large. Of course, in practice it’s
further reduced by wearing clothes, which trap a layer of insulating air and cloth near you.
(d) 5◦F is 5 × 5/9◦C ≈ 3◦C. Now we use Q = mc∆T, and since humans are mostly water, we’ll
approximate the specific heat to be the same as water. We take a human mass of 70 kg. Since
the “Calorie” used to describe food is actually a kilocalorie (amount of energy needed to raise
1 kg by 1◦ C), we just need ∼ 200 Calories to raise our temperature back to normal.
21
Kevin Zhou Physics Olympiad Handouts
A cute, related estimate is the caloric cost of drinking ice-cold water. If you drink eight cups
of water a day, that’s 2kg of water. Warming it from 0◦ C to ∼ 35◦ C takes ∼ 70 Calories.
(e) A basic estimate for the binding energy is
E ∼
e2
4πϵ0r
∼ 2 × 10−18
J.
As a check, this is about 10eV, and the binding energy of hydrogen is about 13.6eV (one of
those classic numbers you should remember), so this is in the right ballpark. Of course, the
energy is actually negative, even though electrons repel, because it’s due to how the electrons
are attracted to the nuclei. We can, however, very roughly estimate this negative energy using
the positive energy of repulsion e2/4πϵ0r because all energy scales in the problem should be
roughly similar.
Actually, in reality the answer should be about an order of magnitude lower, for two reasons.
The first is simply that atomic separations are a bit bigger, but this is cancelled by the fact
that the nuclei have charge Zi > 1. The main issue is that covalent bonds are a bit more
subtle.
Naively, you could say that a covalent bond is attractive because the electrons in one atom are
attracted to the nuclei of the other. But this is too naive, because at least parametrically, it’s
cancelled out by the repulsion of the nuclei with each other, and the repulsion of the electrons
with each other, as all four of these terms are of order ±e2/4πϵ0r. Covalent bonds are stable
because the electron orbitals can deform a bit, so that the negative contributions end up a
bit bigger than the positive ones. So e2/4πϵ0r isn’t really an estimate for the binding energy,
but for the sizes of terms which mostly cancel out to give the binding energy, which is why
the real answer is about 10 times smaller.
(f) Fats are mostly carbon. As a very rough estimate let’s say that the carbon atoms end up in
bonds that are twice as stable as before, so the energy released per carbon atom is on the
order of magnitude of what we found in part (e). Then
energy
kilogram
=
energy
C atom
C atoms
mole

kilograms
mole
 −1
∼ (2 × 10−18
J)NA

12g
mole
 −1
= 108
J/kg.
For comparison, the energy of one gram of fat is 9 calories, so the true answer is
(9)(4000)(1000)
J
kg
= 3.6 × 107
J/kg
which is not too far off!
[2] Problem 31 (Povey). When human beings lose weight, most of it is by exhalation of carbon.
About 20% of the air in the atmosphere is oxygen. When we breathe in and then out, about 25%
of the oxygen is converted to carbon dioxide.
(a) Estimate the mass of air contained in a single breath.
(b) Estimate the amount of weight we lose every day by breathing alone.
22
Kevin Zhou Physics Olympiad Handouts
Solution. (a) If you don’t take a deep breath, you can barely blow up a crushed plastic water
bottle with volume 0.5L, so we can take this to be the volume of a breath.
From the ideal gas law V/n = RT/P, a mole of gas takes up 22.4L of volume at atmospheric
pressure and T = 273K, and we round this up to 25L since body temperature is a bit warmer.
Air is mostly nitrogen (N2) with molecular mass 28 g/mol. Then one breath should have a
mass of (0.5L)/(25L/mol)(28g/mol) ≈ 0.6g.
(b) Humans breathe around 10 to 15 times a minute, so let’s use 12.5, giving around 20,000
breaths in a day, corresponding to 12kg of air.
In each breath, 20% of the air is oxygen, and 25% of the oxygen is converted to carbon dioxide,
for a net fraction of 5%. Carbon dioxide (CO2) has a molecular mass of 44 g/mol, and oxygen
is 32 g/mol. Thus we lose a proportion of (44/32 − 1) = 0.375 of the mass of the air we
breathe in every day, corresponding to (0.375)(0.05)(12kg) = 0.2 kg. Most of the (non-water)
mass of the food we eat leaves this way.
[2] Problem 32. How long a line can you write with a pencil?
Solution. Pencil lead is made of graphite, a form of carbon. The spacing between the carbon
atoms is d ∼ 10−10 m, the length of the lead is L ∼ 10cm, and the radius of the lead is r ∼ 1mm.
So if the pencil deposited a layer of carbon one atom thick, we would get a length
r2L
rd
∼ 106
m.
This is clearly an overestimate, but how should we estimate the thickness of the carbon layer?
One way is to note that graphene, a single layer of carbon atoms in a hexagonal lattice, can
famously be made by peeling Scotch tape off graphite. So each layer of tape only contains a few
layers of atoms. If you peel tape off a mark made by a pencil, it won’t immediately remove it, but
there will be noticeable progress after several rounds. So we can guess there is a layer of ∼ 100
carbon atoms, leading to a total length ∼ 104 m.
23
