---
id: izho-2021-t-q3
source: izho
native_id: "Problem 3. Optical waveguide (10.0 points)"
year: 2021
language: en
translated: false
topic: [oscillations-and-waves, electromagnetism]
subtopic: [wave-equation, dispersion, standing-waves, em-waves, conductors]
difficulty: null
difficulty_norm: 4
math_tools: [geometry-trigonometry, calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 120
points: "\"10.0 points\""
has_solution: true
has_figure: true
figure_files: [izho-2021-t-q3-fig01.png, izho-2021-t-q3-fig02.png, izho-2021-t-q3-fig03.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/izho/2021_T.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [superposition, scaling-and-dimensional-analysis, smart-coordinates]
---

## Problem 3. Optical waveguide (10.0 points)

At present, various waveguides are widely used to transmit energy and information. The propagation of electromagnetic waves in waveguides differs significantly from the propagation of waves in free space, and in this problem you are asked to describe the propagation of electromagnetic waves in the simplest plane waveguide.

## Description of waves

A plane monochromatic electromagnetic wave propagating along the axis $O x$ is described by the formula

$$
\vec{E}(t, x)=\vec{E}_{0} \cos (\omega t-k x+\varphi) .
$$

Here $\vec{E}, \vec{E}_{0}$ denote the electric field strength of the wave and its amplitude, respectively, the magnitude of $k$ is called the wavenumber, $\omega$ refers to the circular wave frequency, $\varphi$ signifies the initial phase, and the expression in the cosine is called the wave phase.
3.1 Express the wavenumber $k$ in terms of the wavelength $\lambda$ and the period of oscillation $T$ in terms of the angular frequency $\omega$.
3.2 Express the velocity $c$ of wave propagation in terms of $k$ and $\omega$.

In a more general case, a monochromatic plane wave is described by the function

$$
\vec{E}(t, \vec{r})=\vec{E}_{0} \cos (\omega t-\vec{k} \cdot \vec{r}+\varphi) .
$$

In this expression, $\vec{r}$ stands for the radius vector of an arbitrary point in space, $\vec{k}$ designates the wave vector equal in magnitude to the wavenumber and pointing to the direction of wave propagation.

Let the wave vector $\vec{k}$ lie in the plane $O x y$ and be directed at an angle $\theta$ to the axis $O x$, as shown in the figure to the right.
![](izho-2021-t-q3-fig01.png)
3.3 Draw schematically a family of equidistant wave surfaces, which are surfaces of equal wave phases, for a plane wave described by function (2).
3.4 Write down explicitly the expression for the electric field strength of wave (2) as a function of coordinates $\vec{E}(t, x, y)$.

An ideal monochromatic wave is infinite in time and space, therefore, it cannot carry information. To transmit information, it is necessary to use either separate pulses (restricted in time) or variate the wave amplitude (wave modulation). In these cases, the wave ceases to be monochromatic, and can be represented as a sum (superposition) of monochromatic waves.

Consider a wave that is the sum of two waves propagating along the axis $O x$ : the first one having the angular frequency $\omega_{0}$ and wavenumber $k_{0}$; the second wave frequency is $\omega_{0}+\Delta \omega$, $\Delta \omega \square \omega_{0}$, with the wavenumber $k_{0}+\Delta k, \Delta k \square k_{0}$. Note that, in the general case, the wavenumber is a certain function of frequency $k(\omega)$.
![](izho-2021-t-q3-fig02.png)
3.5 Show that the sum of these two monochromatic waves is a modulated wave consisting of separate wave packets. Write down the formula describing the slow variation of the amplitude $A_{0}(x, t)$ of the resulting wave in space and time (it is called an envelope).
3.6 Determine the time duration of an individual wave packet $\tau$. Write down the relationship between the duration $\tau$ and the frequency difference $\Delta v=\Delta \omega / 2 \pi$.
3.7 Determine the spatial length of the wave packet $L$.

It turns out that the speed of the wave surface of constant phase $v_{p}$, which is called the phase velocity, differs from the speed of the wave packet $v_{g}$, which is called the group velocity. The speed of the envelope maximum can be considered a group velocity.
3.8 Find the phase velocity $v_{p}$ of the considered modulated wave and express it in terms of $\omega, k, \Delta \omega, \Delta k$.
3.9 Find the group velocity $v_{g}$ of the considered modulated wave and express it in terms of $\omega, k, \Delta \omega, \Delta k$.
3.10 Establish a relationship between phase $v_{p}$ and group $v_{g}$ velocities for electromagnetic waves in a vacuum.

## Plane waveguide

In this part, consider the propagation of electromagnetic waves in a plane waveguide. The waveguide is formed by two infinite parallel conductive plates located at a distance $a$ from each other. Assume a vacuum in between the plates.

Under investigation are electromagnetic waves, whose electric field strength vectors are directed parallel to the plates (they are called TE waves). Let us introduce a coordinate system, whose $O x$ axis lies in one of the plates, and whose $O y$ axis is directed perpendicular to the plates.

A wave propagating along the axis $O x$ in between the plates is described by the function

$$
E(t, x, y)=E_{0} \cos \left(\omega t-k_{x} x\right) \sin \left(k_{y} y\right),
$$

where $\omega$ is the known circular frequency of the wave. For this wave to propagate in the waveguide without energy losses, the electric field strength on the plates must be zero.
3.11 Find the values $k_{y}$ at which the wave can propagate in the waveguide without energy losses.

A set of possible values $k_{y}$ is discrete and characterized by some integer $m$. Waves corresponding to different values of this number are called modes (types of possible waves).
3.12 Show that the wave described by function (3) can be represented as a superposition of two plane waves $E_{1}(t, x, y)$ and $E_{2}(t, x, y)$ with the wave numbers $k_{0}$, propagating symmetrically at angles $\pm \theta$ to the plates, see figure below.
![](izho-2021-t-q3-fig03.png)
3.13 Express the values $k_{x}, k_{y}$ in terms of the wavenumber $k_{0}$ and angle $\theta$.
3.14 Determine the possible angles $\theta_{m}$ at which the wave can propagate in the waveguide without energy losses. Express the values of these angles in terms of the distance $a$ between the plates and the wavelength $\lambda$ in vacuum.
3.15 Determine the phase velocities $v_{p}$ of the waves of each mode. Express these velocities in terms of the wave frequency $\omega$ and the speed of light $c$ in a vacuum.

Short pulses with a carrier frequency $\omega_{0}$ are supplied to the waveguide input. Since these pulses have a finite time duration $\tau$, they cannot be treated as a monochromatic wave, but instead contain a set of monochromatic components in a certain frequency range $\Delta \omega \square \omega_{0}$. These input pulses form a set of pulses in each of the possible waveguide modes.
3.16 Determine the speed of the pulse propagation in the mode number $m$.
3.17 At what minimum distance $X$ from the waveguide input the number of pulses is to be doubled if $a / \lambda=1.2$. Express your answer in terms of the speed of light $c$ and the pulse duration $\tau$.

To avoid the appearance of "extra" pulses at the information transmission process, waveguides are used to operate in a single-mode regime, in which only one mode can propagate.
3.18 Find ratios $a / \lambda$ at which only one mode can propagate in the waveguide.

Mathematical hints for the theoretical problems
The following formulas may be useful:

$$
\begin{gathered}
\int x^{n} d x=\frac{x^{n+1}}{n+1}, \text { where } n \text { is an integer; } \\
(1+x)^{\gamma} \approx 1+\gamma x+\frac{\gamma(\gamma-1)}{2} x^{2}, \text { for } x \ll 1 \text { and any } \gamma .
\end{gathered}
$$
