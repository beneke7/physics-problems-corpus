---
id: usapho-2025-qb3
source: usapho
native_id: "Problem B3: Locked and Moded"
year: 2025
language: en
translated: false
topic: [optics, oscillations-and-waves]
subtopic: [standing-waves, resonance, interference, wave-equation]
difficulty: null
difficulty_norm: 4
math_tools: [geometry-trigonometry, series-complex]
format: scaffolded
core_ideas: []
estimated_time_min: 45
points: null
has_solution: false
has_figure: false
figure_files: []
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/usapho/2025.mmd"
verification_status: pending
---

## Problem B3: Locked and Moded

a. Consider two mirrors facing each other separated by a distance $L$ (a Fabry-Pérot resonator). The cavity (the space between the two mirrors) is in vacuum (index of refraction $n=1$, no dispersion), and the mirrors have high reflectivities so that the main resonance condition is that an integer multiple of half-wavelengths fit into the cavity. A light pulse containing multiple different frequencies travels between the mirrors and interferes with itself.
    i. State the condition for resonance in terms of $L$ and wavelength $\lambda$.
    ii. Write down an expression for the resonant angular frequencies $\omega_{m}$, with $m$ counting each of the possible resonances.
    iii. What is the angular frequency spacing $\Delta \omega \equiv \omega_{m+1}-\omega_{m}$ between adjacent angular frequencies?
b. The electric field at the antinodes of the standing waves in the resonator is a superposition of oscillations at the resonant angular frequencies and is given by:
$$
E_{\text {before }}(t)=\sum_{k=-\infty}^{+\infty} E_{k} \cos [(k \Delta \omega) t] .
$$
Now suppose we introduce a gain medium (such as a doped crystal) into the laser cavity. The gain medium completely absorbs incoming light and re-emits it over a finite range of $N$ angular frequencies centered around some angular frequency $\omega_{0}$, which coincides with one of the $\omega_{m}$ values determined above. Within this bandwidth, the gain medium amplifies and supports oscillations at all $\omega_{m}$ that fall within the range. (Assume $N$ is an odd number.)
Assume that each of these $N$ angular frequencies-also referred to as modes-has the same amplitude $E_{0}$, and that their phases are locked such that there is zero relative phase between them at $t=0$. This condition is known as mode locking. Set their common phase so that all electric fields are expressed as cosine functions, consistent with the form of $E_{\text {before }}(t)$.
    i. Write an expression for the total electric field $E_{\text {after }}(t)$ as the sum of these $N$ equally spaced angular frequencies (with zero relative phase).
    ii. Show that in the limit of many angular frequencies $\left(\Delta \omega \ll \omega_{0}, N \gg 1\right)$, the time-dependent electric field approximately takes the following form:
$$
E_{\mathrm{after}}(t) \approx E_{0} f\left(\omega_{0}, t\right) \frac{\sin \left(\frac{N(\Delta \omega) t}{2}\right)}{\sin \left(\frac{(\Delta \omega) t}{2}\right)}
$$
and determine the function $f\left(\omega_{0}, t\right)$.
c. To answer the next part of the problem, assume $N$ is odd and find the following limit when $a=\pi m$, where $m$ is an integer:
$$
\lim _{x \rightarrow a} \frac{\sin (N x)}{\sin x}
$$
d. Mode locking can dramatically increase the peak intensity $I$ of the laser output. Use the expression $I=\gamma E^{2}$, where $\gamma$ is a known constant, to answer the following questions.
    i. Determine to the total instantaneous intensity $I_{\text {after }}(t)$ of the electric field.

ii. What is the maximum possible intensity of the total field, and at what time(s) is this achieved?
e. The uncertainty principle states $\Delta x \Delta p \geq \frac{\hbar}{2}$. In optics, we are more commonly interested in the duration of the pulse rather than its spatial extent; the two are related via $\Delta x=c \Delta t$.Consider the problem of setting up a very short laser pulse. Use the uncertainty principle to estimate the required bandwidth (range of frequencies). Compare that to the relationship between pulse duration and gain bandwidth that we're achieving in this problem.
