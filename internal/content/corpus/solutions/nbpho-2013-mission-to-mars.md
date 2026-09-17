---
id: nbpho-2013-mission-to-mars
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2013-mission-to-mars
solution_type: official
source_document: solution-document-nbpho-2013-s
source_pdf: cache/phoxiv/nbpho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2013_S.pdf."
---

## 3. MISSION TO MARS (7 points)

i) (1 point) We can find the orbital period of Mars from Kepler's third law $R_{a}{ }^{3} / R_{g}{ }^{3}=$ $T_{a}{ }^{2} / T_{g}{ }^{2}$, giving $t_{t} \approx 1.87 \mathrm{yr}$.
ii) (1.5 points) Again, we can use Kepler's third law to calculate half of the orbital period.

$$
t_{t}=\frac{T_{g}}{2} \frac{\left(R_{a}+R_{g}\right)^{3 / 2}}{\left(2 R_{g}\right)^{3 / 2}} \approx 0.707 \mathrm{yr} .
$$

iii) (1.5 points) Background. $\Delta v$ is important, because the sum of all $\Delta v$ determines how much fuel is needed for a given mission. The fuel needed is exponential of total $\Delta v$ and is described by Tsiolkovsky rocket equation.

Kinetic energy per unit mass of such a transfer orbit where it intersects the Earth's orbit is $-\frac{G M_{s}}{R_{g}+R_{a}}+\frac{G M_{s}}{R_{g}}$. Using the orbital angular speed of Earth we can substitute $G M_{s}=\frac{4 \pi^{2} R_{g}^{3}}{T_{g}}$. The speed at the beginning of the transfer orbit becomes

$$
v_{t_{0}}=\sqrt{2 G M_{s}\left(\frac{1}{R_{g}}-\frac{1}{R_{g}+R_{a}}\right)} \approx 32.7 \mathrm{~km} / \mathrm{s}
$$

The speed in Earth's inertial frame is $v_{t_{0}}^{\prime}=v_{t_{0}}-v_{g} \approx 2.94 \mathrm{~km} / \mathrm{h}$. To achive that, we first need to escape Earth's gravity, so

$$
\Delta v_{1}=\sqrt{2\left(\frac{v_{t_{0}}^{\prime 2}}{2}+\frac{G M_{g}}{r_{g}}\right)} .
$$

Using the surface gravity of Earth we can substitute $\frac{G M_{g}}{r_{g}}=g_{g} r_{g}$ so $\Delta v_{1} \approx 11.2 \mathrm{~km} / \mathrm{s}$.
iv) (1.5 points) We can calculate the speed of the transfer orbit where it intersects the orbit of Mars from Kepler's second law $v_{t_{1}}=$ $v_{t_{0}} / 1.52 \approx 21.5 \mathrm{~km} / \mathrm{s}$. The speed of the spacecraft relative to Mars is $v_{t_{1}}^{\prime} \approx 3.25 \mathrm{~km} / \mathrm{s}$. The speed of the spacecraft once near Mars surface is

$$
v_{t_{m}}=\sqrt{2\left(\frac{v_{t_{1}}^{\prime}}{2}+r_{a} g_{a}\right)} \approx 5.98 \mathrm{~km} / \mathrm{s}
$$

Since the speed of low Mars orbit is $v_{e_{a}}=$ $\sqrt{r_{a} g_{a}} \approx 3.55 \mathrm{~km} / \mathrm{s}$, we need to brake for $\Delta v_{2} \approx 2.43 \mathrm{~km} / \mathrm{s}$.
v) (1.5 points) The Earth-Sun-Mars angle $\alpha$ at the launch of the mission needs to be $\alpha=\pi-w_{a} t_{t} \approx 0.77$ for the spacecraft to reach Mars. Likewise for the return trip $\beta=\pi-w_{g} t_{t} \approx-1.301$. If we go to the corotating frame of referense with earth, we can see that the minimal time between those two angles is $\frac{2 \pi-\alpha+\beta}{w_{a}-w_{g}} \approx 1.96 \mathrm{yr}$. The minimal duration of the trip is therefore longer by $t_{t}$, giving 2.67 yr.
