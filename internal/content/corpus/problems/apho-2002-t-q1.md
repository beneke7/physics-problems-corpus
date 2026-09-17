---
id: apho-2002-t-q1
source: apho
native_id: "Theoretical Question 1 (vibrations of a linear crystal lattice)"
year: 2002
language: en
translated: false
topic: [oscillations-and-waves, quantum-physics]
subtopic: [normal-modes, coupled-oscillators, wave-equation, specific-heat]
difficulty: null
difficulty_norm: 5
math_tools: [calculus, differential-equations]
format: scaffolded
core_ideas: []
estimated_time_min: 90
points: "\"0.7 points\""
has_solution: true
has_figure: true
figure_files: [apho-2002-t-q1-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/apho/2002_T.mmd; figures require local harvest"
verification_status: pending
solution_language: en
techniques: [differential-element, graphical-reduction]
---

Theoretical Question 1 (vibrations of a linear crystal lattice)
A very large number N of movable identical point particles $(N \gg 1)$, each with mass $m$, are set in a straight chain with $N+1$ identical massless springs, each with stiffness (spring constant) $S$, linking them to each other and the ends attached to two additional immovable particles. See figure. This chain will serve as a model of the vibration modes of a onedimensional crystal. When the chain is set in motion, the longitudinal vibrations of the chain can be looked upon as a superposition of simple oscillations (called modes) each with its own characteristic mode frequency.
![](apho-2002-t-q1-fig01.png)
(a) Write down the equation of motion of the $n^{\text {th }}$ particle. [0.7 marks]
(b) To attempt to solve the equation of motion of part (a) use the trial solution

$$
X_{n}(\omega)=A \sin n k a \cos (\omega t+\alpha),
$$

where $X_{n}(\omega)$ is the displacement of the $n^{\text {th }}$ particle from equilibrium, $\omega$ the angular frequency of the vibration mode and $A, k$ and $\alpha$ are constants; $k$ and $\omega$ are the wave numbers and mode frequencies respectively. For each $k$, there will be a corresponding frequency $\omega$. Find the dependence of $\omega$ on $k$, the allowed values of $k$, and the maximum value of $\omega$. The chain's vibration is thus a superposition of all these vibration modes. Useful formulas:
$(\mathrm{d} / \mathrm{d} x) \cos \alpha x=-\alpha \sin \alpha x, \quad(\mathrm{~d} / \mathrm{d} x) \sin \alpha x=\alpha \cos \alpha x, \alpha=$ constant .

$$
\sin (A+B)=\sin A \cos B+\cos A \sin B, \quad \cos (A+B)=\cos A \cos B-\sin A \sin B
$$

[2.2 marks]
According to Planck the energy of a photon with a frequency of $\omega$ is $\hbar \omega$, where $\hbar$ is the Planck constant divided by $2 \pi$. Einstein made a leap from this by assuming that a given crystal vibration mode with frequency $\omega$ also has this energy. Note that a vibration mode is not a particle, but a simple oscillation configuration of the entire chain. This vibration mode is analogous to the photon and is called a phonon. We will follow up the consequences of this idea in the rest of the problem. Suppose a crystal is made up of a very large $\left(\sim 10^{23}\right)$ number of particles in a straight chain.

(c) For a given allowed $\omega$ (or $k$ ) there may be no phonons; or there may be one; or two; or any number of phonons. Hence it makes sense to try to calculate the average energy $\langle E(\omega)\rangle$ of a particular mode with a frequency $\omega$. Let $P_{p}(\omega)$ represent the probability that there are $p$ phonons with this frequency $\omega$. Then the required average is
$$
\langle E(\omega)\rangle=\frac{\sum_{p=0}^{\infty} p \hbar \omega P_{p}(\omega)}{\sum_{p=0}^{\infty} P_{p}(\omega)} .
$$
Although the phonons are discrete, the fact that there are so many of them (and the $P_{p}$ becomes tiny for large $p$ ) allows us to extend the sum to $p=\infty$, with negligible error. Now the probability $P_{p}$ is given by Boltzmann's formula
$$
P_{p}(\omega) \propto \exp \left(-p \hbar \omega / k_{\mathrm{B}} T\right),
$$
where $k_{\mathrm{B}}$ is Boltzmann's constant and $T$ is the absolute temperature of the crystal, assumed constant. The constant of proportionality does not depend on $p$. Calculate the average energy for phonons of frequency $\omega$. Possibly useful formula: $(\mathrm{d} / \mathrm{d} x) e^{f(x)}=(\mathrm{d} f / \mathrm{d} x) e^{f(x)}$.
[2 marks]
(d) We would like next to compute the total energy $E_{\mathrm{T}}$ of the crystal. In part (c) we found the average energy $\langle E(\omega)\rangle$ for the vibration mode $\omega$. To find $E_{\mathrm{T}}$ we must multiply $\langle E(\omega)\rangle$ by the number of modes of the crystal per unit of frequency $\omega$ and then sum up all these for the entire range from $\omega=0$ to $\omega_{\text {max }}$. Take an interval $\Delta k$ in the range of wave numbers. For very large $N$ and for $\Delta k$ much larger than the spacing between successive (allowed) $k$ values, how many modes can be found in the interval $\Delta k$ ?
[1 mark]
(e) To make use of the results of (a) and (b), approximate $\Delta k$ by $(d k / d \omega) d \omega$ and replace any sum by an integral over $\omega$. (It is more convenient to use the variable $\omega$ in place of $k$ at this point.) State the total number of modes of the crystal in this approximation. Also derive an expression $E_{\mathrm{T}}$ but do not evaluate it. The following integral may be useful: $\int_{0}^{1} d x / \sqrt{1-x^{2}}=\pi / 2$.
[2.2 marks]
(f) The molar heat capacity $C_{V}$ of a crystal at constant volume is experimentally accessible: $C_{V}=\mathrm{d} E_{\mathrm{T}} / \mathrm{d} T$ ( $T=$ absolute temperature). For the crystal under discussion determine the dependence of $C_{V}$ on T for very large and very low temperatures (i.e., is it constant, linear or power dependent for an interval of the temperature?). Sketch a qualitative graph of $C_{V}$ versus $T$, indicating the trends predicted for very low and very high $T$.
