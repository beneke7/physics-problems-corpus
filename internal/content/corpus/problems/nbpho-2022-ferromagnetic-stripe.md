---
id: nbpho-2022-ferromagnetic-stripe
difficulty_level: 5
source: nbpho
native_id: "2022 P5 FERROMAGNETIC STRIPE"
year: 2022
language: en
translated: false
topic: [experimental-skills, electromagnetism]
subtopic: [magnetostatics, ferromagnetism, saturation-magnetisation, measurement]
math_tools: [calculus, vector-calculus]
format: experimental
points: 12
core_ideas: []
has_figure: false
figure_files: []
provenance_note: "NBPhO 2022 (Nordic-Baltic Physics Olympiad), Problem 5 (experimental), by Jaan Kalda and Eero Uustalu. Mathpix OCR of born-digital PDF (cache/phoxiv/nbpho/2022.pdf)."
verification_status: pending
---

**5. FERROMAGNETIC STRIPE (12 points)** — *Jaan Kalda, Eero Uustalu.*

**Tools:** A caliper, a ruler, graph papers, a resistive magnetic field sensor
connected to batteries in a battery holder, a multimeter with two wires, a magnet, a
stripe made from soft ferromagnetic material of thickness 0.25 mm — do not bend
excessively to avoid damaging.

**i)** *(0.5 points)* Connect the banana ends of the wires to the COM port and to the
V$\Omega$mA-port of the multimeter. Switch on the multimeter in the 20 volt (DC)
range, and touch the two metallic leads of the battery holder (which are next to the
points where the red and black wires come out from the holder) with the crocodile ends
of the wires. Record the voltage $\mathcal{E}$ on the output leads of the battery
holder. If the voltage is below 3.0 V, you may ask for replacement batteries.

For all your magnetic field measurements, keep in mind that if the battery voltage were
to be exactly 3 V, each millivolt in the reading would correspond to 10 microteslas of
the magnetic field strength. However, the reading in millivolts is proportional to both
the magnetic field and to the battery voltage.

Connect the crocodiles to the yellow and red wires of the magnetic sensor. Keep in mind
that (a) the sensor may have a non-zero offset: even if there is no magnetic field, the
multimeter reading $V_0$ might be non-zero; (b) there is always the magnetic field of
Earth. In what follows, avoid measuring magnetic fields which correspond to voltage
readings bigger than 500 mV — such strong fields may cause changes in the offset value
$V_0$. If you accidentally expose the sensor to such fields, determine and use the new
value of $V_0$.

The magnetic sensor has a small white dot marked on one of its edges. This points to
the direction of that magnetic field component which is being measured.

**ii)** *(1.5 points)* Determine the offset voltage $V_0$ and the magnitude of the
Earth's magnetic field $B_E \equiv |\vec{B}_E|$, and the angle between the vertical
direction and the direction of $\vec{B}_E$.

Now, attach the magnet to the ferromagnetic stripe so that its circular face is
touching the stripe's surface near one of its ends. Let us use a perpendicular system
of coordinates where the $x$–$y$-plane is the plane of the stripe, with the longest
symmetry axis of the stripe serving as the $x$-axis, and $x = 0$ being at the position
of the centre of the magnet.

The total magnetic field is the superposition of the field of the permanent magnet
$\vec{B}_m$, the field of the magnetised ferromagnetic stripe $\vec{B}$, and the
Earth's magnetic field $\vec{B}_E$. Below we are interested only in $\vec{B}$. Assume
that $\vec{B}_m$ depends only on the distance from the magnet and remains unchanged when
the magnet is detached from the stripe.

**iii)** *(2.5 points)* Measure the vertical field $B_z = B_z(L/2, y)$ caused by the
stripe with the magnet, as a function of $y$, for $-w/2 \leq y \leq w/2$, at $x = L/2$,
where $w$ denotes the width and $L$ the length of the stripe. Find the ratio
$\kappa = \langle B_z \rangle$ to $B_z(L/2, 0)$, where the average magnetic field
$$
\langle B_z \rangle \equiv \int_{-w/2}^{w/2} B_z(L/2, y)\,\mathrm{d}y .
$$
Assume that $\kappa$ remains constant along the stripe.

**iv)** *(3.5 points)* Measure $B_z(x, 0)$ near the surface of the stripe, as a
function of $x$, and plot the measurement results.

**v)** *(2.5 points)* Let $J_s$ denote the saturation magnetisation of the stripe
material; estimate the value of $J_s \mu_0$ (this is, roughly speaking, the strongest
magnetic B-field which the ferromagnet is able to carry).

**vi)** *(1.5 points)* Prove experimentally that for small values of $x$, the
magnetisation inside the stripe has reached saturation.
