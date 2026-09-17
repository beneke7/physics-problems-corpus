---
id: ipho-1986-t-q3
source: ipho
native_id: "Q3"
year: 1986
language: en
translated: false
topic: [oscillations-and-waves]
subtopic: [normal-modes, coupled-oscillators, oscillations-mechanical, standing-waves]
difficulty: null
difficulty_norm: 5
math_tools: [differential-equations, linear-algebra]
format: scaffolded
core_ideas: []
estimated_time_min: 50
points: null
has_solution: false
has_figure: true
figure_files: [ipho-1986-t-q3-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/ipho/1986_T.mmd; figures require local harvest"
verification_status: pending

---

Q3
Three particles, each of mass $m$, are in equilibrium and joined by unstretched massless springs, each with Hooke's Law spring constant $k$. They are constrained to move in a circular path as indicated in Figure 3.1.

Figure 3.1
![](ipho-1986-t-q3-fig01.png)

(i) If each mass is displaced from equilibrium by small displacements $u_{1}, u_{2}$ and $u_{3}$ respectively, write down the equation of motion for each mass.
(ii) Verify that the system has simple harmonic solutions of the form

$$
u_{n}=a_{n} \cos \omega t,
$$

with accelerations, $\left(-\omega^{2} u_{n}\right)$ where $a_{n}(n=1,2,3)$ are constant amplitudes, and $\omega$, the angular frequency, can have 3 possible values,

$$
\omega_{o} \sqrt{3}, \omega_{o} \sqrt{3} \text { and } 0 . \text { where } \omega_{o}^{2}=\frac{k}{m} .
$$

(iii) The system of alternate springs and masses is extended to $N$ particles, each mass $m$ is joined by springs to its neighbouring masses. Initially the springs are unstretched and in equilibrium. Write down the equation of motion of the $n$th mass $(n=1,2 \ldots N)$ in terms of its displacement and those of the adjacent masses when the particles are displaced from equilibrium.

$$
u_{n}(t)=a_{s} \sin \left(\frac{2 n s \pi}{N}+\phi\right) \cos \omega_{s} t,
$$

are oscillatory solutions where $s=1,2 \ldots N, n=1,2, \ldots N$ and where $\phi$ is an arbitrary phase, providing the angular frequencies are given by

$$
\omega_{s}=2 \omega_{o} \sin \left(\frac{s \pi}{N}\right),
$$

where $a_{s}(s=1, \ldots \ldots . N)$ are constant amplitudes independent of $n$.

State the range of possible frequencies for a chain containing an infinite number of masses.

(iv) Determine the ratio
$$
u_{n} / u_{n+1}
$$
for large $N$, in the two cases:
    (a) low frequency solutions
    (b) $\omega=\omega_{\text {max }}$, where $\omega_{\text {max }}$ is the maximum frequency solution.

Sketch typical graphs indicating the displacements of the particles against particle number along the chain at time $t$ for cases (a) and (b).
(v) If one of the masses is replaced by a mass $m^{\prime} \ll m$ estimate any major change one would expect to occur to the angular frequency distribution.

Describe qualitatively the form of the frequency spectrum one would predict for a diatomic chain with alternate masses $m$ and $m^{\prime}$ on the basis of the previous result.

Reminder

$$
\begin{aligned}
& \sin (A+B)=\sin A \cos B+\cos A \sin B \\
& \sin A+\sin B=2 \sin \left(\frac{A+B}{2}\right) \cos \left(\frac{A-B}{2}\right) \\
& 2 \sin ^{2} A=1-\cos 2 A
\end{aligned}
$$
