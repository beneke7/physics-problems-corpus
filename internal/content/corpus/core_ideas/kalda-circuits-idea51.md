---
id: kalda-circuits-idea51
source: kalda
handout: circuits
section: "Alternating current"
kind: idea
meta_technique: [cross-domain-analogy]
example_problems: [kalda-circuits-pr92]
status: stable
---

Mathematically, electrical oscillations are analogous to the mechanical ones, which are usually studied by writing down differential equations. Method of impedances allows us to bypass this step. Based on the resonance condition $Z(\omega)=0$, it is also possible to make a "reverse-engineering" and deduce the corresponding differential equation using a simple rule: a factor $\mathrm{i} \omega$ corresponds to a time derivative (hence, a factor $-\omega^{2}$ corresponds to a second derivative). The safest method for verifying the equivalence of a mechanical system with an electrical one is to write down the differential equations (or systems of differential equations, if appropriate) describing the both systems and verify that these two are mathematically equivalent. The matching scheme is usually as follows: a capacitor's charge or loop current's time integral corresponds to a coordinate of a point mass; an inductance - to a mass; a capacitance - to a spring's stiffness.
