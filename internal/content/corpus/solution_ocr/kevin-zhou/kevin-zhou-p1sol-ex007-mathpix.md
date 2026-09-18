---
id: solution-ocr-kevin-zhou-p1sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7
Estimate the Young's modulus for a material with interatomic separation $a$ and typical atomic bond energy $E _ { b }$. Use this to estimate the spring constant of a rod of area $A$ and length $L$, as well as the speed of sound, if each atom has mass $m$.


Solution
This example is to get you comfortable with the Young's modulus $Y$, which occasionally comes up. It is defined in terms of how much a material stretches as it is pulled apart,

$$
Y = \frac { \text { stress } } { \text { strain } } = \frac { \text { restoring force/cross-sectional area } } { \text { change in length/length } } .
$$

The Young's modulus is an intrinsic property of the material, which doesn't depend on its shape, unlike the spring constant. For example, putting two identical springs side-by-side doubles the spring constant, because they both contribute to the force. However, for a fixed strain, both the force and area double, so the stress remains unchanged. Similarly, putting two identical springs end-to-end halves the spring constant, because they both stretch. However, for a fixed stress, both the length and change in length double, so the strain remains unchanged. So you would quote a material's Young's modulus instead of its spring constant, for the same reason you would quote a material's resistivity instead of its resistance.

We note that $Y$ has the dimensions of energy per length cubed, so

$$
Y \sim \frac { E _ { b } } { a ^ { 3 } }
$$

solely by dimensional analysis. (Of course, for this dimensional analysis to work, one has to understand why $E _ { b }$ and $a$ are the only relevant quantities. It's because $Y$, or equivalently the spring constant $k$, determines the energy stored in a stretched spring. But microscopically this comes from the energy stored in interatomic bonds when they're stretched. So the relevant energy scale is the bond energy $E _ { b }$, and the relevant distance scale is $a$, because that determines how many bonds get stretched, and by how much.)

To relate $Y$ to the spring constant of a rod, note that

$$
Y = \frac { F / A } { \Delta L / L } = \frac { L } { A } \frac { F } { \Delta L } = k \frac { L } { A }
$$

for a rod, giving the estimate $k \sim A E _ { b } / L a ^ { 3 }$. This is correct to within an order of magnitude!
To relate $Y$ to the speed of sound, note that the sound speed, like most wave speeds, depends on the material's inertia and its restoring force against distortions. Since the speed of sound doesn't depend on the extrinsic features of a metal object, such as a length, both of these should be measured intrinsically. The intrinsic measure of inertia is the mass density $\rho \sim m / a ^ { 3 }$, while the intrinsic measure of restoring force is just $Y$. By dimensional analysis,

$$
v \sim \sqrt { \frac { Y } { \rho } } \sim \sqrt { \frac { E _ { b } / a ^ { 3 } } { m / a ^ { 3 } } } \sim \sqrt { \frac { E _ { b } } { m } } .
$$

This is also reasonably accurate. For example, in diamond, $E _ { b } \sim 1 \mathrm { eV }$ (a typical atomic energy scale), while a carbon nucleus contains 12 nucleons, so to the nearest order of magnitude, $m \sim 10 m _ { p }$, where a useful fact is $m _ { p } \sim 1 \mathrm { GeV } / \mathrm { c } ^ { 2 }$. Thus,

$$
v \sim \sqrt { \frac { 1 \mathrm { eV } } { 10 ^ { 10 } \mathrm { eV } } } c \sim 10 ^ { - 5 } c \sim 3 \mathrm {~km} / \mathrm { s }
$$


which is the right order of magnitude. (The true answer is 12 km/s.)
Amazingly, we can get an even rougher estimate of $v$ for any solid in terms of nothing besides fundamental constants. To be very rough, the binding energy is on the order of that of hydrogen. As you found in problem 9, this is, by dimensional analysis,

$$
E _ { b } \sim \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { a _ { 0 } } \sim m _ { e } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar } \right) ^ { 2 } .
$$

We take the nuclear mass to be very roughly the proton mass $m _ { p }$, which gives

$$
\frac { v } { c } \sim \sqrt { \frac { m _ { e } } { m _ { p } } \left( \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar c } \right) ^ { 2 } } \sim \alpha \sqrt { \frac { m _ { e } } { m _ { p } } }
$$

where $\alpha$ is as found in problem 11. This expresses the speed of sound in terms of the dimensionless strength of electromagnetism $\alpha$, the electron to proton mass ratio, and the speed of light. The approximations we have made have been so rough that now the answer is off by at least an order of magnitude, but now we know how the answer would change if the fundamental constants did.

Estimates as simple as these can be surprising to even seasoned physicists: in 2020, the simple estimate above was rediscovered and published in one of the top journals in science. If you want to learn how to do more of these estimates, this paper is a good starting point.

## Remark

A warning: from these examples, you could get the idea that dimensional analysis gives you nearly godlike powers, and the ability to write down the answer to most physics problems instantly. In reality, it only works if you're pretty sure your physical system depends on only about 3 or 4 variables - and the hard part is often finding which variables matter. For example, as we saw above, you can't get Kepler's third law for free because that requires knowing the dimensions of $G$, which require knowing that gravity is an inverse square law in the first place, a luxury Kepler didn't have. And as another example, we couldn't have figured out $E = m c ^ { 2 }$ long before Einstein, as who would have thought that the speed of light had anything to do with the energy of a lump of matter? Without the framework of relativity, it seems as irrelevant as the speed of sound or the speed of water waves.

Fortunately, carrying out dimensional analysis in practice is usually fairly straightforward. Often, on exams, you'll simply be told which variables matter. And in general, you should get into the habit of doing it constantly, to check your work.
