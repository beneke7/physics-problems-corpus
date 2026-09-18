---
id: solution-ocr-usapho-2024-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2024-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A2
Stellar Stability
A star in hydrostatic equilibrium has inward gravitational forces balanced by pressure gradients. Though the material in a star is not simply an ideal gas, in many cases its pressure $P$ and density $\rho$ are simply related by $P = K \rho ^ { \gamma }$ for constants $K$ and $\gamma$. Throughout this problem, assume the star is spherically symmetric, its mass is conserved, and relativistic effects can be neglected.

a. A thin shell of the star at radius $r _ { 0 }$ has density $\rho _ { 0 }$ and thickness $\Delta r$, and experiences an inward gravitational field of magnitude $g _ { 0 }$.
    i. What is the pressure difference $\Delta P _ { 0 }$ across the shell in equilibrium?

Solution
The mass of the shell is $m = \rho _ { 0 } A _ { 0 } \Delta r$, where $A _ { 0 } = 4 \pi r _ { 0 } ^ { 2 }$ is its surface area. The total inward gravitational force is $g _ { 0 } m$, and the total outward pressure force is $A _ { 0 } \Delta P _ { 0 }$. Equating them yields

$$
\Delta P _ { 0 } = g _ { 0 } \rho _ { 0 } \Delta r .
$$

ii. Suppose the entire star expands uniformly by a factor $1 + x$, so that the shell now has radius $r = r _ { 0 } ( 1 + x )$. In terms of $\Delta P _ { 0 } , x$, and $\gamma$, what is the new pressure difference across it?

Solution
The density scales as $\rho \propto 1 / ( 1 + x ) ^ { 3 }$, so the pressure everywhere in the star is scaled by the factor $\rho ^ { \gamma } \propto 1 / ( 1 + x ) ^ { 3 \gamma }$. Thus, the new pressure difference is $\Delta P _ { 0 } / ( 1 + x ) ^ { 3 \gamma }$.

iii. By considering the forces on the shell, write an expression for $d ^ { 2 } r / d t ^ { 2 }$ valid when $x$ is small, in terms of $g _ { 0 } , \gamma$, and $x$. For what values of $\gamma$ will the star be stable?

Solution
The radial form of Newton's second law for the shell is

$$
m \frac { d ^ { 2 } r } { d t ^ { 2 } } = F _ { \mathrm { pr } } - F _ { \mathrm { gr } }
$$

where the outward pressure force is

$$
F _ { \mathrm { pr } } = A \Delta P = A _ { 0 } \Delta P _ { 0 } \frac { ( 1 + x ) ^ { 2 } } { ( 1 + x ) ^ { 3 \gamma } }
$$

since area is proportional to $r ^ { 2 }$, and the inward gravitational force is

$$
F _ { \mathrm { gr } } = g m = \frac { g _ { 0 } m } { ( 1 + x ) ^ { 2 } }
$$


since gravity obeys an inverse-square law. Applying part 1(a) and simplifying gives
$$
\frac { d ^ { 2 } r } { d t ^ { 2 } } = g _ { 0 } \left( \frac { ( 1 + x ) ^ { 2 } } { ( 1 + x ) ^ { 3 \gamma } } - \frac { 1 } { ( 1 + x ) ^ { 2 } } \right) \approx g _ { 0 } ( 4 - 3 \gamma ) x .
$$
The star is stable when this is a restoring force, which requires $\gamma > 4 / 3$.

Next, we consider some simple models of stars, where $\gamma$ can be computed.

b. In a giant star, the pressure is $P = P _ { \text {gas } } + P _ { \text {rad } }$, where $P _ { \text {gas } }$ is due to the gas, which obeys the ideal gas law, and $P _ { \text {rad } } \propto T ^ { 4 }$ is due to blackbody radiation. In the star's "radiation zone", $P _ { \text {rad } }$ is much larger than $P _ { \text {gas } }$, but the two have a constant ratio. In this case, what is the value of $\gamma$ ?

## Solution

The density $\rho$ of the star is due to the gas, and the ideal gas law states that $P _ { \text {gas } } \propto \rho T$. On the other hand, if the two pressure contributions have a fixed ratio, then $P _ { \text {gas } } \propto P _ { \text {rad } } \propto T ^ { 4 }$. Combining these results gives $\rho \propto T ^ { 3 }$ and $P \propto T ^ { 4 }$, so that $\gamma = 4 / 3$.

c. A white dwarf is composed of electrons and nuclei. The electrons provide the outward pressure, while the nuclei cancel the electrons' charge, and are responsible for most of the mass density. Consider a region of a white dwarf where the number density of electrons is $n _ { e }$.
    i. The electrons obey the Heisenberg uncertainty principle, $\Delta p \Delta x \gtrsim \hbar$, where $\Delta x$ is the spacing between them, and $\Delta p$ is the typical momentum that quantum mechanics implies they must have. Find a rough estimate for $\Delta p$ in terms of $n _ { e }$ and $\hbar$.

## Solution

The spacing between electrons is $\Delta x \sim n _ { e } ^ { - 1 / 3 }$, so $\Delta p \sim \hbar n _ { e } ^ { 1 / 3 }$.


ii. Using this result, find $\gamma$ for a white dwarf.

## Solution

Since the white dwarf is electrically neutral, the density of nuclei is proportional to the density of electrons, so the mass density $\rho$ is proportional to $n _ { e }$. As for the pressure, basic kinetic theory shows that it scales as the product of the number density $n _ { e }$, the momentum $\Delta p \sim n _ { e } ^ { 1 / 3 }$, and the typical speed $\Delta v \sim \Delta p / m \sim n _ { e } ^ { 1 / 3 }$. Thus, $P \propto n _ { e } ^ { 5 / 3 }$, so $\gamma = 5 / 3$.

iii. A white dwarf has total mass $M$, radius $R$, and a relatively uniform density of order $\rho \sim M / R ^ { 3 }$. The radius is related to the mass by $R \propto M ^ { n }$ for a constant $n$. Find the value of $n$.

## Solution

The pressure at the center is proportional to $G$ and otherwise depends only on $M$ and $R$. Thus, by dimensional analysis, $P \sim G M ^ { 2 } / R ^ { 4 }$. (This argument assumes the density is relatively uniform. By contrast, a typical star has a very large, low-density


envelope surrounding a dense core of radius $R _ { \text {core } } \ll R$, so the correct estimate would be $P \sim G M ^ { 2 } / R _ { \text {core } } ^ { 4 }$. That is, the assumption of relatively uniform density just means that in the dimensional analysis, the only relevant length is the total radius $R$.)
We just showed that the electrons provide pressure $P \propto \rho ^ { 5 / 3 } \sim M ^ { 5 / 3 } / R ^ { 5 }$. Equating these two yields $R \propto M ^ { - 1 / 3 }$, so $n = - 1 / 3$. Perhaps surprisingly, more massive white dwarfs are smaller.
