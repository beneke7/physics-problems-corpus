---
id: nbpho-2023-curling
source: nbpho
native_id: "2023 P1 Curling"
year: 2023
language: en
translated: false
topic: [mechanics]
subtopic: [friction, rotational-motion, drag-forces]
math_tools: [calculus, differential-equations, geometry-trigonometry]
format: open-ended
points: 8
core_ideas: [kalda-mechanics-idea39, kalda-mechanics-idea43, kalda-mechanics-idea45]
has_figure: true
figure_files: [nbpho-2023-curling-fig1.jpg]
provenance_note: "NBPhO 2023, Problem 1, by Oskar Vallhagen. Extracted from born-digital PDF (cache/phoxiv/nbpho/2023.pdf) via Mathpix OCR."
verification_status: pending
has_solution: false

---

**1. Curling (8 points)** — *Oskar Vallhagen.*

In the sport of curling, participants take turns sliding near-cylindrical stones across an ice court towards a target, trying to get their stones as close to the target as possible after using a set of stones. A vertical cross section of a stone is depicted below, showing that the stone is in contact with the ice on a thin ring of radius $r$. The full radius of the stone is $R$, the mass of the stone is $m$ and the coefficient of friction with the ice is $\mu$.

![Curling stone cross-section](sources/nbpho/figures/nbpho-2023-curling-fig1.jpg)

Consider the case when the stone is released at a speed $v_{0}$ with the aim of knocking out an opponent's stone at a distance $s$.

**i)** *(1 point)* Give an expression for the sliding speed $v_{s}$ as a function of the time $t$ since the stone was released until the stone hits the opponent's stone.

**ii)** *(1 point)* What is the sliding speed $v_{\text{hit}}$ just before the stone hits the opponent's stone?

Now the stone is given a small rotation at the initial angular speed $\omega_{0}$ (this can be done to alter the deflection angle of the stone when it hits the opponent's stone). Assume that the rotation speed $\omega$ remains small throughout the sliding motion: $\omega r \ll v_{s}$. Keep only the main non-vanishing terms in your calculations, i.e. among the terms with a factor $\left(\omega r / v_{s}\right)^{n}$, keep only the term with the smallest $n$. Depending on your approach you may use the following approximations for $x \ll 1$: $(1+x)^{\alpha} \approx 1+\alpha x+\frac{1}{2} \alpha(\alpha-1) x^{2}$, $\sin(\alpha+x) \approx \sin \alpha+x \cos \alpha$, $\cos x \approx 1-x^{2} / 2$. You may also need the integral $\int(a t+b)^{-1} d t=a^{-1} \ln \mid a t+b \mid+C$.

**iii)** *(2 points)* By how much does the friction force on the stone change due to its rotation? Express your answer in terms of the current angular speed $\omega$ and sliding speed $v_{s}$.

**iv)** *(2 points)* Give an expression for the torque $T$ exerted on the stone.

**v)** *(2 points)* What is the angular speed of the stone just before it hits the opponent's stone?
