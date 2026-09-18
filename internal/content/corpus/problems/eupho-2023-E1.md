---
id: eupho-2023-E1
source: eupho
native_id: "EuPhO 2023 Experimental Problem 1"
name: "EuPhO 2023 – Experimental E1: Magnetic Pendulum"
origin: European-Physics-Olympiad-2023
author: European Physics Olympiad
year: 2023
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2023
figure_files: [eupho-2023-E1-1.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [measurement, mechanics, electromagnetism, oscillations-and-waves]
subtopic: [pendulum, magnetic-dipole, frequency-shift, nonlinear-oscillations]
math_tools: [calculus, probability-statistics, numerical]
format: open-ended
difficulty_norm: 5
core_ideas: [kalda-mechanics-idea20]
techniques: [scaling-and-dimensional-analysis, limiting-and-special-cases, graphical-reduction]
has_solution: true
verification_status: pending
---
**E1 - Magnetic Pendulum (10 pts)**

The oscillation frequency of a pendulum can be modified by magnetic forces between the pendulum and its support. In this experiment you will study pendulum motion in a combined potential from gravitational and magnetic interaction terms, using the setup shown in Fig. 3.

**Equipment (see also Fig. 3)**

A Pendulum body with point-like supports and mirror for angle measurement

B Pendulum tower with hard points to support the pendulum, and laser module for angle measurement

C Rails to support external magnets

D 2 small dipole magnets to be attached to pendulum body (may be **green**, **red**, **white** or **yellow**)

E 2 identical external dipole magnets (**black**)

F 2 unknown external magnets F1, F2 (**blue**, F2 is marked with **white** dots at its ends)

G Screen for laser spot for angle measurement

H Stopwatch

I Masking tape, e.g. to fasten pendulum tower to table

J Pencil and ruler

> The magnets are quite strong. Be careful not to hurt yourself or damage the magnets.
> Do not look directly into the laser beam, and turn the laser off when not needed.
> When experimenting with the pendulum, make sure the supporting screws are resting in the grooves on the pendulum tower.
> Feel free to mark the pendulum with your pencil if needed.

**Task E1.1 - Masses (1.0 pts)**

The total mass of the pendulum body with attached small dipole magnets is $M_\mathrm{pen} + M_\mathrm{mag} = (52.3 \pm 0.2)\,\mathrm{g}$.

Determine both $M_\mathrm{pen}$ and $M_\mathrm{mag}$ as accurately as possible.

**Task E1.2 - Magnetic dipole moments (4.0 pts)**

With external magnets nearby, the magnetic pendulum moves in a combined potential formed by gravity and magnetic interaction. The resulting pendulum frequency $\omega$ can be written as a function of natural frequency $\omega_1$ and "magnetic frequency shift" $\omega_\mathrm{mag}$:

$$\omega^2 = \omega_1^2 \pm \omega_\mathrm{mag}^2 \tag{1}$$

For the case of two black external dipole magnets, symmetrically placed at a distance $d$ around the pendulum equilibrium position (see Fig. 1), and small amplitude oscillations the magnetic frequency shift is:

$$\omega_\mathrm{mag}^2 = \frac{6\mu_0}{I\pi} \cdot j_1 \cdot j_2 \cdot \frac{\ell^2}{d^5}, \tag{2}$$

where $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{N/A^2}$ is the permeability of vacuum, $I$ is the moment of inertia of the magnetic pendulum around the axis of rotation, $j_1$ is the combined magnetic moment of the pendulum magnets, $j_2$ is the magnetic moment of each external dipole, and $\ell$ is the distance of the pendulum magnet to the rotation axis. For the relative strength of the dipole moments you may assume $j_2 = 2.4 \cdot j_1$. Local gravity is $g = 9.81\,\mathrm{m/s^2}$.

![figure](../../../../../sources/eupho/figures/eupho-2023-E1-1.png)

*Figure 1: Frequency shifting using external dipole magnets (top view). $d$ denotes the distance between magnet centers. Note that the orientation of the external magnets may be reversed.*

a) Measure the pendulum frequencies for different magnet distances $d$, using very small amplitudes. Make sure to cover the whole accessible frequency range.

b) Determine the "average magnetization" (magnetic moment per unit mass) of the material of pendulum magnets and external dipole magnets. Create a relevant graph for your analysis. Auxiliary measurements may be necessary to determine all unknowns. You may neglect the mass and thickness of the non-magnetic coating of the magnets.

> Precise alignment of the rails is important. Make sure that, with the pendulum in its equilibrium position, the centers of all magnets are on a single line.
> Make sure to use symmetric configurations to cancel the force on the pendulum magnets along the direction of the rails.

**Task E1.3 - Unknown external magnets (3.0 pts)**

The two **blue** unknown external magnets (F1, F2) each contain several magnetic dipoles. The dipoles inside F1 are reversed with respect to those inside F2. The magnetic frequency shift in a setup analogous to Fig. 1 also follows a power law:

$$\omega_\mathrm{mag,F}^2 \propto d^\alpha. \tag{3}$$

a) Measure the pendulum frequencies for different distances $d$, using very small amplitudes. Choose settings that allow finding the magnetic frequency shift as accurately as possible.

b) Determine the power law exponent $\alpha$.

c) Sketch a possible configuration of magnetic dipoles inside F1 and F2 and justify your choice.

**Task E1.4 - Nonlinear pendulum (2.0 pts)**

Return the setup to the configuration used in Task E1.2, with black external dipole magnets arranged as in Fig. 1. Following Eqn. 1, the small-amplitude pendulum frequency can be fully cancelled, $\omega \to 0$.

a) Determine as accurately as possible the magnet separation $d$ required for this full cancellation.

b) Investigate the dependence of pendulum period on its amplitude when tuned to the best cancellation you were able to obtain. Suggest a functional dependence and validate it with your data. Discuss the origin of any possible mismatch.

*European Physics Olympiad 2023, Experimental Problem 1. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. The setup/equipment photographs (Figs. 3 and 4 in the source) are lab equipment reference photos and are not reproduced here.*
