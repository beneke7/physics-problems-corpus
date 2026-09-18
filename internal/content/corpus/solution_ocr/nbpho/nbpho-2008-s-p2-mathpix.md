---
id: solution-ocr-nbpho-2008-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2008-microcalorimeter]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Microcalorimeter (9 points)
1) Every bridge has thermal resistance $L / \kappa S$; so, the overall resistance is $R = L / 4 \kappa S$.
2) The power dissipation $P$ results in an heat flux through the bridges, $\Phi = \Delta T / R$, and in the change of the heat contained in the microcalorimeter, $\dot { Q } = C \dot { T } = C \Delta \dot { T }$ (here, dot denotes the time derivative). So,

$$
P _ { 0 } \cos ( \omega t ) = C \Delta \dot { T } + \Delta T / R .
$$

Now, we can search the solution as $\Delta T = A \cos ( \omega t + \phi )$, and denote $\psi = \arcsin \left( C \omega / \sqrt { C ^ { 2 } \omega ^ { 2 } + R ^ { - 2 } } \right)$. Then,

$$
P _ { 0 } \cos ( \omega t ) = A \sqrt { C ^ { 2 } \omega ^ { 2 } + R ^ { - 2 } } \cos ( \omega t + \phi - \psi ) .
$$

So, we must have $\phi = \psi$ and $A = P _ { 0 } / \sqrt { C ^ { 2 } \omega ^ { 2 } + R ^ { - 2 } }$, i.e.

$$
T = T _ { 0 } + \frac { P _ { 0 } \cos \left( \omega t + \arcsin \left( C \omega / \sqrt { C ^ { 2 } \omega ^ { 2 } + R ^ { - 2 } } \right) \right) } { \sqrt { C ^ { 2 } \omega ^ { 2 } + R ^ { - 2 } } } .
$$

3) The amplitude of the oscillations is $A = \frac { P _ { 0 } } { \sqrt { C ^ { 2 } \omega ^ { 2 } + R ^ { - 2 } } }$; it must be as sensitive with respect to the small changes of $C$, i.e. $d A / d C$ must be maximal by modulus. $d A / d C = P _ { 0 } \left( C ^ { 2 } \omega ^ { 2 } + \right.$ $\left. R ^ { - 2 } \right) ^ { - 3 / 2 } C \omega ^ { 2 }$; if we denote $x = ( C \omega ) ^ { 2 }$, we need to minimize the following function of $x$ :

$$
\ln \left[ ( d C / d A ) ^ { 2 } \right] = 3 \ln \left( x + R ^ { - 2 } \right) - \ln x + \ln C .
$$

Upon taking derivative and putting it equal to 0, we obtain $3 x = x + R ^ { - 2 }$, from where $x = R ^ { - 2 } / 2$, i.e.

$$
\omega = 1 / \sqrt { 2 } C R .
$$

4) The heat contained in the bridge must be comparable with the heat, which flows through it during one half-period (if it is much smaller, the stationary linear profile will develop very soon). So, $A c \rho S L \approx A \kappa S / \left( L \omega _ { c } \right)$; hence,

$$
\omega _ { c } \approx \kappa / c \rho L ^ { 2 } .
$$
