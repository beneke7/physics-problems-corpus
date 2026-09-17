---
id: physicscup-2019-p4
source: physicscup
native_id: "2019 Problem 4"
name: "Physics Cup – TalTech 2019 – Problem 4: Grid of resistors"
origin: Physics-Cup-TalTech-2019
author: Jaan Kalda
year: 2019
language: en
translated: false
url: https://physicscup.ee/archive/physics-cup-taltech-2019/physics-cup-2019-problem-4/
figure_files: []
topic: [electromagnetism]
subtopic: [resistor-networks, lattice-green-function, perturbation]
math_tools: [series-complex, linear-algebra]
format: open-ended
difficulty_norm: 5
core_ideas: []
techniques: [exploit-symmetry, superposition, limiting-and-special-cases]
has_solution: false
verification_status: unverified
---
Physics Cup – TalTech 2019 – Problem 4. March 10, 2019

Consider an infinite square grid of resistors. Let us introduce coordinates $x$ and $y$ so that all the nodes are at integer coordinates $(n, m)$, with $n, m \in \mathbb{Z}$. For this grid of resistors, all the horizontal resistors, i.e. the resistors between node pairs $[(n, m), (n + 1, m)]$, have the same resistance $R$; all the vertical resistors, i.e. the resistors between node pairs $[(n, m), (n, m + 1)]$ have the same resistance $r$. It appears that for such a grid, the effective resistance $R_{nn}$ between the nodes $(0, 0)$ and $(n, n)$ equals to

$$R_{nn} = \frac{2\sqrt{Rr}}{\pi} \sum_{k=1}^{n} \frac{1}{2k - 1};$$

this formula can be used in your solution. By how much will change the effective resistance between the nodes $(0, 0)$ and $(1, 1)$ when the nodes $(n, n)$ and $(n + 1, n + 1)$ are connected with a piece of wire of negligibly small resistance? In other words, determine $R_{11}' - R_{11}$, where $R_{11}'$ is the new effective resistance between the nodes $(0, 0)$ and $(1, 1)$ after short-circuiting the nodes $(n, n)$ and $(n + 1, n + 1)$. Assume that $n > 1$.

*Physics Cup TalTech 2019 Problem 4 by Jaan Kalda. Transcribed faithfully from the born-digital LaTeX source.*
