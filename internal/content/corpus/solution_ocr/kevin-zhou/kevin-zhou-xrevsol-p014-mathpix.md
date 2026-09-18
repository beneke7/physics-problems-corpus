---
id: solution-ocr-kevin-zhou-xrevsol-p014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-xrev-p014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 14. In classical physics, light waves do not interact with each other, but they can due to quantum mechanical effects. Suppose two photons traveling in opposite directions scatter off each other. Initially the photons have wavelengths $\lambda _ { 1 }$ and $\lambda _ { 2 }$. One of the two outgoing photons exits at an angle $\theta$ to the first incoming photon. Find its wavelength $\lambda$ in terms of $\lambda _ { 1 } , \lambda _ { 2 }$, and $\theta$.
Solution. We aren't told anything about the other outgoing photon, so a direct solution would require introducing several variables to describe it, which is messy. We can avoid this using fourvectors. Let the incoming photons have four-momenta $p _ { 1 } ^ { \mu }$ and $p _ { 2 } ^ { \mu }$, and let the outgoing photons have four-momenta $p ^ { \mu }$ and $p ^ { \prime \mu }$. Then we can neatly eliminate $p ^ { \prime }$ using
$$
p ^ { \prime 2 } = 0 = \left( p _ { 1 } + p _ { 2 } - p \right) ^ { 2 } = 2 \left( p _ { 1 } \cdot p _ { 2 } - p _ { 1 } \cdot p - p _ { 2 } \cdot p \right)
$$
since photons are massless. Using $E = h / \lambda$ and plugging in the four-momenta, we have
$$
p _ { 1 } \cdot p _ { 2 } = \frac { 2 h ^ { 2 } } { \lambda _ { 1 } \lambda _ { 2 } } , \quad p \cdot \left( p _ { 1 } + p _ { 2 } \right) = \frac { h ^ { 2 } } { \lambda } \left( \frac { 1 - \cos \theta } { \lambda _ { 1 } } + \frac { 1 + \cos \theta } { \lambda _ { 2 } } \right)
$$
and solving for $\lambda$ yields
$$
\lambda = \frac { \lambda _ { 1 } ( 1 + \cos \theta ) + \lambda _ { 2 } ( 1 - \cos \theta ) } { 2 } .
$$
As a check, we get back $\lambda _ { 1 }$ when $\theta = 0$, corresponding to no collision.

[3] Problem 15 (MPPP 195). The pion $\pi ^ { + }$is a subatomic particle with mass $m _ { \pi }$. In one of its possible decay modes, it decays into a positron $e ^ { + }$of mass $m _ { e }$ and an electron-neutrino $\nu _ { e }$ of negligible mass. What is the minimum speed of the pion if, following its decay, the positron and neutrino move at right angles to each other? How does it simplify in the limit $m _ { e } \ll m _ { \pi }$ ?
Solution. Let the pion have energy $E _ { \pi }$ and momentum $\mathbf { p } _ { \pi }$, with similar notation for the electron and neutrino. We know that
$$
m _ { \pi } ^ { 2 } = E _ { \pi } ^ { 2 } - p _ { \pi } ^ { 2 } .
$$
On the other hand, by energy and momentum conservation,
$$
E _ { \pi } = E _ { e } + E _ { \nu } , \quad \mathbf { p } _ { \pi } = \mathbf { p } _ { e } + \mathbf { p } _ { \nu }
$$
and plugging this in above gives
$$
m _ { \pi } ^ { 2 } = \left( E _ { e } + E _ { \nu } \right) ^ { 2 } - \left( \mathbf { p } _ { e } + \mathbf { p } _ { \nu } \right) \cdot \left( \mathbf { p } _ { e } + \mathbf { p } _ { \nu } \right) .
$$
Since the positron and neutrino move at right angles to each other, this simplifies to
$$
m _ { \pi } ^ { 2 } = E _ { e } ^ { 2 } + 2 E _ { e } E _ { \nu } + E _ { \nu } ^ { 2 } - p _ { e } ^ { 2 } - p _ { \nu } ^ { 2 } = m _ { e } ^ { 2 } + m _ { \nu } ^ { 2 } + 2 E _ { e } E _ { \nu } .
$$
Since the neutrino's mass is negligible,
$$
E _ { e } E _ { \nu } = \frac { m _ { \pi } ^ { 2 } - m _ { e } ^ { 2 } } { 2 } .
$$
Minimizing the speed of the pion is equivalent to minimizing its energy $E _ { \pi }$. On the other hand, the equation above states that the geometric mean of $E _ { e }$ and $E _ { \nu }$ is fixed. Thus, the minimum arithmetic mean occurs when they are equal, in which case
$$
E _ { \pi } = 2 \sqrt { E _ { e } E _ { \nu } } = \sqrt { 2 \left( m _ { \pi } ^ { 2 } - m _ { e } ^ { 2 } \right) } .
$$
We also know that
$$
E _ { \pi } = \frac { m _ { \pi } } { \sqrt { 1 - v ^ { 2 } } }
$$
so solving for $v$ gives
$$
v \geq \sqrt { \frac { m _ { \pi } ^ { 2 } - 2 m _ { e } ^ { 2 } } { 2 m _ { \pi } ^ { 2 } - 2 m _ { e } ^ { 2 } } } .
$$
In the limit $m _ { e } \ll m _ { \pi }$, this reduces to $v \geq c / \sqrt { 2 }$.
[3] Problem 16. USAPhO 2023, problem B3. A nice, qualitative problem on supernova neutrinos.
[2] Problem 17 (Purcell 6.68). Consider two electrons moving side-by-side with parallel velocities, with speed $v$ and separation $r$. We wish to compute the three-force between the electrons.
    (a) Compute this force by working in the electrons' rest frame and Lorentz transforming back to the lab frame.
    (b) Compute this force by using the electric and magnetic fields of a moving charge, and verify the answer agrees with that of part (a).
    (c) What happens to the three-force as $v \rightarrow c$ ?

Solution. (a) The answer in the rest frame is $k e / r ^ { 2 }$, so transforming back gives $k e / \gamma r ^ { 2 }$. (For transformations of three-forces, it's helpful to remember that the force is always largest in the rest frame of the particle.)

(b) In this frame, the fields of one charge at the other are $E = \gamma k e / r ^ { 2 }$ and $B = v E / c ^ { 2 }$. Then
$$
F = e E - e v B = \frac { e E } { \gamma ^ { 2 } } = \frac { 1 } { \gamma } \frac { k e } { r ^ { 2 } } ,
$$
which matches the result of part (a).
(c) In this limit, the force goes to zero. The electric and magnetic forces balance, as you saw in a question in E4.

## 3 Waves

[2] Problem 18 (OPhO 2024). A string of length $L$ is attached at its endpoints to walls, with a fixed tension. Initially, it is vibrating at its fundamental frequency with a small amplitude $A$. A frictionless finger, initially at the right wall, slowly slides towards the left, flattening the oscillation as it goes. When the vibrating part of the string has length $L / 2$, find the final amplitude.

Solution. This is an application of the adiabatic invariant, mentioned in M4. Imagine the string is actually rotating like a jump rope, and apply conservation of angular momentum. The angular momentum is proportional to $m \omega A ^ { 2 }$, where $\omega$ is the angular frequency of the oscillation, and $m$ is the amount of mass oscillating. Since the tension is fixed, the wave speed is fixed, so $\omega \propto 1 / L$. On the other hand, since the mass density is fixed, $m \propto L$. Then $m \omega$ is independent of $L$, so $A$ is as well. The final amplitude is therefore equal to the initial amplitude.
[3] Problem 19. NBPhO 2015, problem 2. A very nice combined interference and optics problem.
[2] Problem 20 (Crawford 4.15). Consider a jug with a large volume $V$, along with a thin neck of length $\ell$ and area $A$. The lowest frequency standing wave can be excited by blowing across the neck. Such a system is called a Helmholtz resonator. Naively, the corresponding wavelength would be four times the length of the jug, but it is observed to be much larger. (Try it at home!)

Since the jug has a neck, the standing wave profile looks very different from a standard profile. Most of the air motion is within the neck; the body of the jug serves as a large air reservoir that acts as a spring pushing back against this motion. The frequency can be quite low, because this reservoir is large.

(a) Show that if the air in the neck moves by a distance $x$, the restoring force is
$$
F = - \frac { \gamma P _ { 0 } A ^ { 2 } x } { V }
$$
where $P _ { 0 }$ is the original pressure in the jug, and $\gamma$ is the adiabatic index.
(b) Show that this mode has an angular frequency of
$$
\omega = \frac { v } { \ell } \sqrt { \frac { V _ { \text {neck } } } { V } } , \quad V _ { \text {neck } } = A \ell
$$
where $v$ is the speed of sound of air. It is significantly lower than the naive answer $\omega \sim v / \ell$ one would get by considering standing waves in a cylinder shaped like the jug.

(c) See if this is roughly consistent with a real jug (e.g. a 1 liter soda bottle). Does the frequency vary as you'd expect as you add water to the jug? If you feel musically inclined, can you find how to excite higher frequencies?

Solution. (a) Since $P V ^ { \gamma }$ is constant, $\Delta P / P = - \gamma \Delta V / V$. Since $\Delta V = A x$, we have

$$
F = - A \Delta P = \frac { \gamma P _ { 0 } A ^ { 2 } x } { V } ,
$$

as desired.

(b) Consider the air originally in the neck. It oscillates back and forth, feeling an "effective spring constant" $k _ { \text {eff } } = \gamma P _ { 0 } A ^ { 2 } / V$ by the result of part (a), and it has mass $m = \rho A \ell$. Thus,
$$
\omega = \sqrt { \frac { k _ { \mathrm { eff } } } { m } } = \sqrt { \frac { \gamma P _ { 0 } A } { \rho V \ell } } = \frac { 1 } { \ell } \sqrt { \frac { \gamma P _ { 0 } } { \rho } } \sqrt { \frac { A \ell } { V } }
$$
which matches the desired result.
(c) Just try it yourself! In my personal experience, this does match pretty well with real jugs. I can barely manage to excite the fundamental, but wind instrument players might do better.

Remark
The results of problem 20 can also be used to describe window buffeting, the annoying "whuppa, whuppa, whuppa" sound you get when you slightly open one window of a rapidly moving car. Suppose the opening has area $A$ and the car has volume $V$. Then the incoming air moves quickly up to a depth $\ell \sim \sqrt { A }$ in your car, and this region functions as the "neck". The resonant frequency is therefore $f \sim v A ^ { 1 / 4 } / V ^ { 1 / 2 }$. You can stop the buffeting by opening the window more, increasing $A$ so the frequency is too high to be efficiently driven by the air.

Remark
The udu is a Nigerian musical instrument which can be modeled as a Helmholtz resonator with two holes. The holes have different sizes, so you get a frequency $f _ { 1 }$ if you cover one hole, and $f _ { 2 }$ if you cover the other.

You can get a third frequency by hitting the instrument with both holes open. To find that third frequency, note that a Helmholtz resonator is like a spring-mass system, where the "spring" is the air in the instrument, and the "mass" $m _ { i }$ is the air near hole $i$, which moves back and forth. When both holes are open, we effectively have a spring with masses attached at both ends, which oscillates according to the reduced mass $1 / \mu = 1 / m _ { 1 } + 1 / m _ { 2 }$. Since $f _ { i } \propto 1 / \sqrt { m _ { i } }$, the third frequency is $\sqrt { f _ { 1 } ^ { 2 } + f _ { 2 } ^ { 2 } }$.

[3] Problem 21. USAPhO 2008, problem A4. A neat Doppler shift problem that also tests your data analysis skills.
[4] Problem 22. INPhO 2020, problem 4. A nice and tricky problem on the two-dimensional Doppler effect. (It is essentially a translation of a problem on the 2013 Russian Physics Olympiad.)
[3] Problem 23. USAPhO 2022, problem A3. A great problem on the rainbow caustic. After you finish the problem, see here and here for some brilliant visualizations.


## 4 Modern
