---
id: kevin-zhou-p1-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex007
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 7
Estimate the Young’s modulus for a material with interatomic separation a and typical atomic
bond energy Eb. Use this to estimate the spring constant of a rod of area A and length L,
as well as the speed of sound, if each atom has mass m.
13
Kevin Zhou Physics Olympiad Handouts
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
14
Kevin Zhou Physics Olympiad Handouts
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

e2
4πϵ0ℏ
 2
.
We take the nuclear mass to be very roughly the proton mass mp, which gives
v
c
∼
s
me
mp

e2
4πϵ0ℏc
 2
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
