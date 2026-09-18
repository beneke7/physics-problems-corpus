---
id: solution-ocr-usapho-2017-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2017-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A4
Relativistic particles obey the mass energy relation

$$
E ^ { 2 } = ( p c ) ^ { 2 } + \left( m c ^ { 2 } \right) ^ { 2 }
$$

where $E$ is the relativistic energy of the particle, $p$ is the relativistic momentum, $m$ is the mass, and $c$ is the speed of light.

A proton with mass $m _ { p }$ and energy $E _ { p }$ collides head on with a photon which is massless and has energy $E _ { b }$. The two combine and form a new particle with mass $m _ { \Delta }$ called $\Delta$, or "delta". It is a one dimensional collision that conserves both relativistic energy and relativistic momentum.
a. Determine $E _ { p }$ in terms of $m _ { p } , m _ { \Delta }$, and $E _ { b }$. You may assume that $E _ { b }$ is small.

## Solution

Solution 1. We can solve the problem exactly, approximating only in the last step. This certainly isn't necessary; we do this to illustrate a useful technique. We set $c = 1$ throughout, and transform to an inertial frame where the proton is initially at rest. Before the collision,

$$
E _ { p } = m _ { p } , \quad E _ { \gamma } = \left| p _ { \gamma } \right| .
$$

For the $\Delta$ particle, we have the usual relativistic relation

$$
E _ { \Delta } ^ { 2 } = p _ { \Delta } ^ { 2 } + m _ { \Delta } ^ { 2 } .
$$

By energy-momentum conservation,

$$
E _ { p } + E _ { \gamma } = E _ { \Delta } , \quad p _ { \gamma } = p _ { \Delta } .
$$

Combining these results gives

$$
\left( m _ { p } + E _ { \gamma } \right) ^ { 2 } = E _ { \gamma } ^ { 2 } + m _ { \Delta } ^ { 2 } \quad \Rightarrow \quad E _ { \gamma } = \frac { m _ { \Delta } ^ { 2 } - m _ { p } ^ { 2 } } { 2 m _ { p } } .
$$

Now we need to transform back to the original frame, where the energy of the photon is $E _ { b }$. We can use the Lorentz transformation for this, but it's a little easier to realize that $E = h f$ for photons, and apply the Doppler shift. Then

$$
\alpha \equiv \frac { E _ { b } } { E _ { \gamma } } = \sqrt { \frac { 1 - \beta } { 1 + \beta } }
$$

where $\beta$ is the velocity parameter of the proton in the inertial frame where the photon has energy $E _ { b }$. Solving for $\beta$ in terms of the energy ratio $\alpha$,

$$
\beta = \frac { 1 - \alpha ^ { 2 } } { 1 + \alpha ^ { 2 } } .
$$

To calculate the proton energy, we need the Lorentz factor,

$$
\gamma = \frac { 1 } { \sqrt { 1 - \beta ^ { 2 } } } = \frac { 1 + \alpha ^ { 2 } } { 2 \alpha }
$$


Then the proton energy in the original frame is

$$
E _ { p } = \gamma m _ { p } = \frac { m _ { p } } { 2 } \left( \alpha + \frac { 1 } { \alpha } \right) = \frac { m _ { p } } { 2 } \left( \frac { 2 m _ { p } E _ { b } } { m _ { \Delta } ^ { 2 } - m _ { p } ^ { 2 } } + \frac { m _ { \Delta } ^ { 2 } - m _ { p } ^ { 2 } } { 2 m _ { p } E _ { b } } \right)
$$

which is the exact answer.
At this point, we can approximate. The second term is much larger than the first, so

$$
E _ { p } \approx \frac { m _ { \Delta } ^ { 2 } - m _ { p } ^ { 2 } } { 4 E _ { b } }
$$

which was the required answer for this problem.

Solution 2. We now show another method that approximates throughout. We'll do everything in the lab frame, so the symbols in this solution don't mean the same things they did in solution 1. In the lab frame, energy-momentum conservation gives

$$
p _ { p } - p _ { b } = p _ { \Delta } , \quad E _ { p } + E _ { b } = E _ { \Delta } .
$$

Squaring both expressions and dropping $E _ { b } ^ { 2 }$ terms, since $E _ { b }$ is small,

$$
p _ { p } ^ { 2 } - 2 p _ { p } p _ { b } \approx p _ { \Delta } ^ { 2 } , \quad E _ { p } ^ { 2 } + 2 E _ { p } E _ { b } \approx E _ { \Delta } ^ { 2 }
$$

Subtracting these equations gives

$$
m _ { p } ^ { 2 } + 2 E _ { p } E _ { b } + 2 p _ { p } E _ { b } = m _ { \Delta } ^ { 2 } \Rightarrow E _ { p } + p _ { p } = \frac { m _ { \Delta } ^ { 2 } - m _ { p } ^ { 2 } } { 2 E _ { b } } .
$$

Since $E _ { b }$ is small, this quantity must be large. But this means the protons are ultrarelativistic, so $E _ { p } \approx p _ { p }$, giving

$$
E _ { p } \approx \frac { m _ { \Delta } ^ { 2 } - m _ { p } ^ { 2 } } { 4 E _ { b } }
$$

as desired.

b. In this case, the photon energy $E _ { b }$ is that of the cosmic background radiation, which is an EM wave with wavelength 1.06 mm. Determine the energy of the photons, writing your answer in electron volts.

## Solution

Plugging in the numbers gives

$$
E = \frac { h c } { \lambda } = 0.00112 \mathrm { eV } .
$$

c. Assuming this value for $E _ { b }$, what is the energy of the proton, in electron volts, that will allow the above reaction? This sets an upper limit on the energy of cosmic rays. The mass of the Copyright ©2017 American Association of Physics Teachers

proton is given by $m _ { p } c ^ { 2 } = 938 \mathrm { MeV }$ and the mass of the $\Delta$ is given by $m _ { \Delta } c ^ { 2 } = 1232 \mathrm { MeV }$.

## Solution

Restoring the factors of $c$ and plugging in the numbers gives

$$
E _ { p } = 1.4 \times 10 ^ { 20 } \mathrm { eV } .
$$

This is known as the GZK bound for cosmic rays.

The following relationships may be useful in solving this problem:

$$
\begin{array} { l l }
\text { velocity parameter } & \beta = \frac { v } { c } \\
\text { Lorentz factor } & \gamma = \frac { 1 } { \sqrt { 1 - \beta ^ { 2 } } } \\
\text { relativistic momentum } & p = \gamma \beta m c \\
\text { relativistic energy } & E = \gamma m c ^ { 2 } \\
\text { relativistic doppler shift } & \frac { f } { f _ { 0 } } = \sqrt { \frac { 1 - \beta } { 1 + \beta } }
\end{array}
$$


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
