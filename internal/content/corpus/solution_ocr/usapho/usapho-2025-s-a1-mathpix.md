---
id: solution-ocr-usapho-2025-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2025-qa1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem A1: Shake It

Most hairy mammals shake after getting wet; shaking the water off is energetically advantageous to waiting for it to dry on its own. In this problem, we investigate the mechanics of shaking off water. For simplicity, we will model animals as solid cylinders with the sides covered in fur. You may ignore gravity throughout the problem.

a. We can model the shaking by assuming that the angular position of the cylinder undergoes a sinusoidal oscillation: $\theta = A \cos ( \omega t )$. (The rotation is about the axis of rotational symmetry.) Letting the radius of the cylindrical animal be $R$, derive an expression for the magnitude of the acceleration of a point on the surface of the animal under such a motion.

## Solution

Since we're ignoring gravity, there's two components to the acceleration: radial, $R \dot { \theta } ^ { 2 }$, and tangential, $R \ddot { \theta }$. (Terms involving $\dot { R }$ vanish, since the radius is constant.) They add in quadrature, so the magnitude is

$$
R \sqrt { ( A \omega \sin ( \omega t ) ) ^ { 4 } + \left( A \omega ^ { 2 } \cos ( \omega t ) \right) ^ { 2 } } = A R \omega ^ { 2 } \sqrt { A ^ { 2 } \sin ^ { 4 } ( \omega t ) + \cos ^ { 2 } ( \omega t ) }
$$

b. For the rest of this problem, rather than modeling sinusoidal motion, we will assume that the cylindrical animal is simply spinning at constant angular speed $\omega$. Wet fur tends to separate into cylindrical clumps of radius $r \ll R$. A droplet of water on the end of a clump of fur will be separated from it if the centripetal force overcomes the forces due to surface tension. Derive an approximate relationship (valid up to scalar numerical constants) between the surface tension $\sigma$, the radius $r$ of the fur clump, the radius $R$ of the animal, the angular speed $\omega$, and the density $\rho$ of water. The diagram below show the cross-section of the animal, showing four clumps of fur with droplets on their end.
![](../../../figures/solution-ocr/42a2929413a9b609a79d3d1b.jpg)

## Solution

At first glance this doesn't look like a valid dimensional analysis problem, since there are two lengths involved ( $r$ and $R$ ). However, the surface tension force can depend only on $r$ and $\sigma$, while the centripetal force depends only on $R , \omega$, and the mass of the droplets $m \propto \rho r ^ { 3 }$. Since surface tension has units of force per linear distance, the two forces scale as $r \sigma$ and $\left( \rho r ^ { 3 } \right) \left( \omega ^ { 2 } R \right)$, and we write $\omega ^ { 2 } \sim \frac { \sigma r } { \rho r ^ { 3 } R }$.
Note that the surface tension term "should" be proportional to $2 \pi r \sigma$, since the circumference of the fur clump (rather than its radius) is the relevant linear dimension; but this doesn't


change the scaling behavior.

c. Experimentally, it is observed that all mammalian fur forms clumps of similar radius. Under the assumption that different animals all have the same density and are simply scaled copies of each other (i.e. larger animals are both longer and fatter), the relationship between an animal's mass $M$ and its angular velocity of shaking $\omega$ is of the form $\omega \sim M ^ { n }$ : find the value of $n$.

## Solution

Since $\sigma , \rho$, and $r$ are constant, we simply have $\omega \sim R ^ { - 1 / 2 }$. Since the animals are proportional cylinders, we have $M \sim R ^ { 3 }$, so $\omega \sim M ^ { - 1 / 6 }$.

d. Shaking requires energy, which we can crudely model as the rotational energy of the corresponding cylinder. An alternative strategy for the animal is to simply air-dry their fur, which requires energy to evaporate the water. Assume a wet animal has approximately 5\% of their body weight in water, and has to supply all the energy for evaporating the water. Our model predicts that for some animal sizes, it will be energetically advantageous to air dry themselves: estimate the range of animal masses for which this is true. You may use the following facts: a mouse weighs 20 g, has a radius of 1 cm, and shakes itself with angular velocity $\omega = 30$ rad/s. The latent heat of vaporization of water at room temperature is $\lambda = 2430 \mathrm {~J} / \mathrm { g }$.

## Solution

Since we found $\omega \sim M ^ { - 1 / 6 }$, the energy of shaking scales as $M R ^ { 2 } \omega ^ { 2 } \sim M ^ { 4 / 3 }$, while the energy of air-drying simply scales with the animal mass. So, for large enough animals, air drying should be energetically advantageous. However, constants are important!

For a cylindrical mouse, we find that the energy of shaking is

$$
E _ { \text {shaking, mouse } } = \frac { 1 } { 2 } \left( \frac { 1 } { 2 } M R ^ { 2 } \right) \omega ^ { 2 } = 0.00045 \mathrm {~J}
$$

and the energy of evaporating the water is

$$
E _ { \text {evaporation, mouse } } = 0.05 M \lambda = 2430 \mathrm {~J} .
$$

For an arbitrary cylindrical animal, we have

$$
E _ { \text {shaking } } = E _ { \text {shaking, mouse } } \cdot \left( M / M _ { \text {mouse } } \right) ^ { 4 / 3 }
$$

and

$$
E _ { \text {evaporation } } = E _ { \text {evaporation, mouse } } \cdot \left( M / M _ { \text {mouse } } \right)
$$

For these to become equal, we must have

$$
\frac { M } { M _ { \mathrm { mouse } } } \gtrsim \left( \frac { 2430 \mathrm {~J} } { 0.00045 \mathrm {~J} } \right) ^ { 3 } = 1.6 \times 10 ^ { 20 }
$$


or $M \gtrsim 3 \times 10 ^ { 18 } \mathrm {~kg}$. This is the right order of magnitude for the mass of an asteroid (and many orders of magnitude too heavy to be a land mammal), so it's not surprising that just about all mammals prefer to remove the water mechanically instead!

This analysis was based on the article Dickerson, Andrew K et al. "Wet mammals shake at tuned frequencies to dry." Journal of the Royal Society, Interface vol. 9,77 (2012): 3208-18, accessible online at https://pmc.ncbi.nlm.nih.gov/articles/PMC3481573/
