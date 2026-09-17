---
id: usapho-2022-b3
source: usapho
native_id: "Question B3"
year: 2022
language: en
translated: false
topic: [quantum-physics, electromagnetism]
subtopic: [solid-state, electric-field, current]
difficulty: null
difficulty_norm: 4
math_tools: [calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 45
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/usapho/2022.mmd"
verification_status: pending
---

## Question B3

## Time Crystal

The kinetic energy $E$, momentum $p$, and velocity $v$ of a particle moving in one dimension satisfy

$$
F=\frac{d p}{d t}=\frac{d E}{d x}, \quad v=\frac{d E}{d p}
$$

where $F$ is the external force. For a free particle, the momentum and energy are related by $E=p^{2} / 2 m$. However, when an electron moves inside a metal, its interactions with the crystal lattice of positively charged ions lead to a different relationship between momentum and energy. All of the above identities still apply, but now suppose that

$$
E(p)=V(1-\cos (p b))
$$

where $V$ and $b$ are constants that depend on the metal. This result is inherently quantum mechanical in origin, and as we will see, it leads to some rather strange behavior.

a. First, we investigate the motion of the electron in general.
    i. Find the velocity as a function of $p$.
    ii. The effective mass $m_{*}$ of the electron is defined so that it satisfies $F=m_{*} a$. Find the effective mass as a function of $p$.
b. Now suppose a metal rod of infinite length, aligned with the $x$-axis, contains conducting electrons of charge $-e$, initially with zero momentum. At time $t=0$, an electric field $\mathbf{E}=E_{0} \hat{\mathbf{x}}$ is turned on, and is experienced by every electron in the rod. Ignore the interactions of the electrons with each other.
    i. For an electron that starts at $x=0$ at time $t=0$, find its position $x(t)$.
    ii. If the number of conducting electrons per unit volume is $n$, and the cross-sectional area of the rod is $A$, find the average current in the rod over a long time.
    iii. Now suppose that every time $\tau$, each electron suffers a collision with the crystal lattice, causing its momentum to reset to zero. In the limit of frequent collisions, $e E_{0} b \tau \ll 1$, find the average current in the rod over a long time.
    iv. If $\tau$ can be freely adjusted, estimate the maximum possible average current in the rod, up to a dimensionless constant.
