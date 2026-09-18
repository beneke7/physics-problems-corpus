---
id: solution-ocr-kevin-zhou-xrevsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
mapped_problems: []
verification_status: promoted
canonical_solution: false
provenance_note: "Mathpix PDF API Markdown conversion; promoted without manual proofreading."
---
## Special Topics Review

There is a total of 92 points.

## 1 Thermodynamics

[3] Problem 1. A photon of energy $E$ bounces between two mirrors separated by a distance $L$.

(a) If the mirrors are slowly moved together to a distance $L / 2$, find the final energy $E$ by considering the blueshift the photon experiences at every collision.
(b) Check this result agrees with the adiabatic theorem.
(c) Using your result, infer the value of $\gamma$ for a one-dimensional photon gas. Can you also infer the value of $\gamma$ for a $d$-dimensional photon gas?

Solution. (a) If the left mirror has speed $v$, then the Doppler shift factor on every reflection is $1 + 2 v / c$, so $\Delta E = ( 2 v / c ) E$ because $E = \hbar \omega$. We also have $\Delta x = - ( 2 x / c ) v$, which implies

$$
\frac { \Delta E } { \Delta x } = - \frac { E } { x } .
$$

Treating this as a differential equation $d E / d x = - E / x$ shows that $E x$ is conserved. (Note that the adiabatic theorem works fine in this case, because the photon is always moving quickly relative to the walls, so every collision has a small effect.)

Another valid, equivalent approach would be to note that the energy gets an overall Doppler shift of $( 1 + 2 v / c ) ^ { N }$ where $N$ is the number of collisions with the moving wall, and compute $N$ directly.

(b) The adiabatic invariant is
$$
\oint p d x = \frac { E } { c } ( 2 L ) \propto E x
$$
giving the same result, using $E = p c$.
(c) The pressure exerted by each photon is
$$
P = \frac { \Delta p } { \Delta t } = \frac { 2 E / c } { 2 L / c } = \frac { E } { x } .
$$
Therefore, $P x ^ { 2 }$ is constant which gives $\gamma = 2$. This is exactly as expected, since $C _ { v } = k _ { B }$.
In $d$ dimensions, much of the same reasoning holds. The quantity $E x$ is still invariant, where $x$ is the side length of, say, a cube. However, the pressure is now $P \propto E / V$. Then $P V x = P V ^ { 1 + 1 / d }$ is constant, so $\gamma = 1 + 1 / d$. For example, when $d = 3$ we have $\gamma = 4 / 3$, as we also found in T1 and T2 in different ways.
Note that the reasoning here works equally well if you don't know about photons, because electromagnetic waves redshift and blueshift in the same way. By using this reasoning, i.e. by thinking about how successive Doppler shifts change the frequency of light, Wien was able to derive the original form of Wien's displacement law.

[3] Problem 2. Let $n$ be the local density of a gas of particles. If this density is nonuniform, it will tend to be smoothed out by diffusion, which produces a particle current
$$
\mathbf { J } = - D \nabla n
$$
with units of particles per second per unit area. This is a continuity equation, as explained in T2, and $D$ is called the diffusion coefficient. In addition, we know from M7 and T1 that each particle in such a gas will experience a drag force from the others. As a result, when a constant force F is applied to one, its terminal velocity satisfies $\mathbf { F } = \mu \mathbf { v }$.
    (a) Suppose the particles are placed inside a potential $V ( \mathbf { r } )$. Write down the contribution to the particle current due to the resulting force, neglecting diffusion.
    (b) In thermal equilibrium, the particle current produced by the force, which pulls the particles to lower potential, balances the particle current produced by diffusion, which spreads them out. Assuming the temperature is $T$, find a relation between $D$ and $\mu$.

Solution. (a) The force is $\mathbf { F } = - \nabla V$, which means $\mathbf { v } = - ( \nabla V ) / \mu$. The particle current is

$$
\mathbf { J } = n \mathbf { v } = - \frac { n } { \mu } \nabla V .
$$


(b) By setting the sum of the two currents to zero,
$$
\frac { n } { \mu } \nabla V = - D \nabla n .
$$
Rearranging gives
$$
\frac { 1 } { \mu D } \nabla V = - \nabla ( \log n ) .
$$
On the other hand, we know that $n ( \mathbf { r } ) \propto e ^ { - V ( \mathbf { r } ) / k _ { B } T }$ because the steady state must obey the Boltzmann distribution. Then we have $\log n = - V / k _ { B } T +$ const , which means
$$
k _ { B } T = \mu D .
$$
This result is also derived in IPhO 2023, problem 1, which you can see for comparison.

Remark
The result of problem 2 is called the Einstein relation, and is one of the four major results Einstein derived in his "annus mirabilis" of 1905, the others being special relativity and $E = m c ^ { 2 }$, and explaining the photoelectric effect with photons. So why is this result so important? It's because at the time, it was not yet completely accepted that matter was made of atoms. As you saw in T1, the size of a single atom often drops out of kinetic theory calculations. At the time, many took this to mean that atoms were a fictitious calculational tool, like how one does integrals by summing over intervals of length $\Delta x$, then gets a result independent of this fiducial length by taking $\Delta x \rightarrow 0$.

But doesn't the number of atoms $N$ appear all the time in basic thermodynamics, like the ideal gas law? Yes, but always in the combination $n R = N k _ { B }$. Thus, information about the size of a single atom is equivalent to information about $k _ { B }$. Einstein's relation is useful


because it explicitly gives us $k _ { B }$ in terms of the separately directly measurable quantities $D$, $\mu$, and $T$. It was one of the first unique, quantitative predictions of kinetic theory.
[4] Problem 3 (Physics Cup 2018). Estimate the mean free path of a heavy black sphere of mass $m$ and radius $R$ in vacuum at temperature $T$. Here, we define the mean free path as the typical distance it takes for the velocity vector of the sphere to turn by an angle $\pi / 2$. Assume that $k _ { B } T R \gtrsim \hbar c$. (Hint: for a random walk where steps of size $a$ are taken per time $\tau$, the average overall displacement after time $t \gg \tau$ is approximately $a \sqrt { t / \tau }$.)
Solution. By the equipartition theorem, the typical speed $v _ { 0 }$ of the sphere satisfies
$$
m v _ { 0 } ^ { 2 } \sim k _ { B } T .
$$
The velocity vector is rotated by impulses from the photons, as they are absorbed or emitted by the sphere. Thus, we need to estimate the rate of collisions as well as the typical impulse of each one. The typical energy of a photon in blackbody radiation of temperature $T$ is $E \sim k _ { B } T$ by the equipartition theorem again, which means each absorption or emission changes the velocity of the sphere by
$$
\Delta v = \frac { \Delta p } { m } = \frac { E } { m c } \sim \frac { k _ { B } T } { m c } .
$$
On the other hand, we have
$$
v _ { 0 } \sim \sqrt { \frac { k _ { B } T } { m } }
$$
which is much larger than $\Delta v$ since we are assuming the sphere is heavy. Using the provided hint, the number of photons required to change the velocity significantly is order
$$
N \sim \left( \frac { v _ { 0 } } { \Delta v } \right) ^ { 2 } \sim \frac { m c ^ { 2 } } { k _ { B } T } .
$$
Now we need to find the rate at which photons are absorbed or emitted. In equilibrium, these two rates will be equal, so we can focus on emission, which is easier to handle. The power emitted from the sphere is
$$
P = 4 \pi R ^ { 2 } \sigma T ^ { 4 }
$$
and we already know the photons emitted have typical energy $k _ { B } T$, so the time per photon is
$$
\tau \sim \frac { k _ { B } T } { P } \sim \frac { k _ { B } } { \sigma R ^ { 2 } T ^ { 3 } } .
$$
Combining our results, the mean free path is
$$
\lambda \sim v _ { 0 } N \tau \sim \frac { k _ { B } ^ { 1 / 2 } m ^ { 1 / 2 } c ^ { 2 } } { \sigma R ^ { 2 } T ^ { 7 / 2 } } .
$$
Incidentally, you might wonder how we used the assumption $k _ { B } T R \gtrsim \hbar c$. This assumption is equivalent to saying that the wavelength of a typical photon is smaller than the size of the sphere itself. We used this implicitly by thinking of the photons as little bullets hitting the sphere. If it weren't true, then we would have to account for their wave nature.

[3] Problem 4. Consider a layer of the atmosphere with density $\rho$, pressure $P$, adiabatic index $\gamma$, and density and pressure gradients $d \rho / d z$ and $d P / d z$. Suppose that a small parcel of air in this layer acquires a small upward velocity. Under certain conditions, the parcel of air will begin oscillating in height, performing simple harmonic motion. Neglecting drag and heat transfer between the parcel of air and its surroundings, find the angular frequency $\omega$ of this motion. This is called the Brunt-Vaisala or buoyancy frequency.
Solution. Let the parcel have fixed mass $m$. At its initial position, the parcel has volume $V$ and density $\rho _ { p }$, which is equal to the local atmospheric density $\rho$. After the parcel moves up by $\Delta z$, it has volume $V ^ { \prime }$ and density $\rho _ { p } ^ { \prime }$, and the local atmospheric density is $\rho ^ { \prime }$. Then the net force on the parcel is the buoyant force minus the weight,
$$
F = \left( \rho ^ { \prime } - \rho _ { p } ^ { \prime } \right) g V ^ { \prime }
$$
and we have $m = \rho _ { p } ^ { \prime } V ^ { \prime }$. Thus, the acceleration is
$$
a = \left( \frac { \rho ^ { \prime } } { \rho _ { p } ^ { \prime } } - 1 \right) g .
$$
For small displacements, we have
$$
\rho ^ { \prime } \approx \rho + \frac { d \rho } { d z } \Delta z , \quad \rho _ { p } ^ { \prime } \approx \rho + \frac { d \rho _ { p } } { d z } \Delta z
$$
so that at first order in $\Delta z$, the acceleration is
$$
a = \frac { g } { \rho } \left( \frac { d \rho } { d z } - \frac { d \rho _ { p } } { d z } \right) \Delta z .
$$
To calculate $d \rho _ { p } / d z$, note that since the parcel expands and contracts adiabatically, $P _ { p } \propto \rho _ { p } ^ { \gamma }$. Moreover, the pressure of the parcel is always equal to that of the surrounding atmosphere, so
$$
P \propto \rho _ { p } ^ { \gamma }
$$
which for small displacements means
$$
\frac { 1 } { P } \frac { d P } { d z } = \gamma \frac { 1 } { \rho } \frac { d \rho _ { p } } { d z } .
$$
Plugging this into the acceleration equation gives
$$
a = g \left( \frac { 1 } { \rho } \frac { d \rho } { d z } - \frac { 1 } { \gamma P } \frac { d P } { d z } \right) \Delta z
$$
which implies
$$
\omega = \sqrt { g \left( \frac { 1 } { \gamma P } \frac { d P } { d z } - \frac { 1 } { \rho } \frac { d \rho } { d z } \right) } = \sqrt { g \frac { d \log \left( P ^ { 1 / \gamma } / \rho \right) } { d z } } .
$$
When the argument of the square root becomes negative, there is no frequency of oscillation; instead, the parcel just keeps on going. That describes an atmosphere unstable against convection. As a check, marginal stability occurs for an adiabatic atmosphere, where $P \propto \rho ^ { \gamma }$. In realistic atmospheres, you wouldn't expect to see these kinds of oscillations because of damping effects, but they provide a characteristic timescale for dynamic processes.

[3] Problem 5. USAPhO 2021, problem B2. A conceptual problem on methods of heat transfer.
[3] Problem 6. USAPhO 2019, problem B2. A useful problem for getting comfortable with numbers and estimates in astronomy.
[3] Problem 7. USAPhO 2022, problem B1. A data analysis problem about a nonideal gas.
[3] Problem 8. USAPhO 2024, problem B2. Two exercises on the heat capacity of solids.
[3] Problem 9. INPhO 2019, problem 6. A thermodynamic cycle with a nonideal gas.
[5] Problem 10. IPhO 2011, problem 2. A problem on an electrified soap bubble, which combines electrostatics, thermodynamics, and surface tension.

## 2 Relativity

[4] Problem 11. 3 IPhO 1998, problem 3. A great problem on a real controversy in physics, which also gives you practice working with real data.
[4] Problem 12. EuPhO 2024, problem 2. A problem on visual perception in special relativity. Note that in part (b), when the problem asks about what Alice "sees", it means what she sees from light reaching her eyes.
[4] Problem 13 (Physics Cup 2018). A spaceship travels with a constant proper acceleration $g$ along a straight line. At a certain moment, it launches two missiles in the direction of its motion, with speeds $v$ and $2 v$. Find the proper time interval in the spaceship between catching up to the first and to the second missile.
Solution. See the official solutions here.
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

[3] Problem 24. Consider a typical small LC circuit, with $L = 10 ^ { - 7 } \mathrm { H }$ and $C = 10 ^ { - 11 } \mathrm {~F}$.
    (a) If the circuit is at zero temperature, estimate the voltage uncertainty across the capacitor.
    (b) Do the same if the circuit is at room temperature.

Today, some of the leading quantum computing hardware is based on such circuits. Because thermal fluctuations would ruin the desired quantum mechanical effects, the circuit must be cooled so that $k _ { B } T \ll \hbar \omega$, which corresponds to a small fraction of a degree. When you see pictures of quantum computers, most of what you're looking at is the fridge!

Solution. (a) In this problem, it's not clear how to use Heisenberg's uncertainty principle, because we don't know what the "position" and "momentum" for an LC circuit are. (It turns out the position variable is the flux through the inductor and the momentum variable is the charge on the capacitor, but this is hard to guess with high school knowledge.) But we do know that an LC circuit behaves just like a harmonic oscillator, so when it is quantized, it has energy $\hbar \omega / 2$ in the ground state. This must manifest in terms of voltage and current uncertainties,

$$
\hbar \omega \sim C ( \Delta V ) ^ { 2 } + L ( \Delta I ) ^ { 2 }
$$

where we drop all constants for brevity. We know from an example in X1 that for the harmonic oscillator, these two contributions are equal. Therefore, by order of magnitude we have

$$
\Delta V \sim \sqrt { \frac { \hbar \omega } { C } } , \quad \omega = \frac { 1 } { \sqrt { L C } } .
$$

If you didn't manage to do the steps above, this final result can also be found by pure dimensional analysis. Plugging in the numbers gives $\Delta V \sim 10 ^ { - 7 } \mathrm {~V}$, which is surprisingly high!

(b) At zero temperature, the energy in the circuit is of order $\hbar \omega$, while at room temperature, it's $k _ { B } T$ by the equipartition theorem. Plugging in the numbers, we have
$$
\frac { k _ { B } T } { \hbar \omega } = 4 \times 10 ^ { 4 } .
$$
Since energy is proportional to $V ^ { 2 }$, the voltage uncertainty is 200 times higher,
$$
\Delta V \sim 2 \times 10 ^ { - 5 } \mathrm {~V} .
$$
This is the typical noise you expect to see on a good oscilloscope. In electrical engineering, this kind of thermal noise is called "Johnson noise".
[2] Problem 25. INPhO 2013, problem 2. A short problem on X-ray diffraction.

To finish up, here are three neat questions that each cover a broad range of topics.

[5] Problem 26. IPhO 2009, problem 3. Estimating the size of a star from scratch.
[5] Problem 27. IPhO 2021, problem 3. Molecular fluorescence and optical lattices.
[5] Problem 28. USA Team Selection Test 2021, problem 2. A full analysis of a real dark matter detector.


## Remark

Problem 26 estimates the size of a star using a rough treatment of the nuclear physics we know applies at its core. When you think about it, it's amazing that this is possible at all. There is essentially no way to directly probe what's going on inside any star. We can basically only measure the size of the star, its rough age, and the temperature of its surface. But the models work! This was the result of generations of painstaking effort, which stimulated progress in both nuclear and particle physics. To learn the history of solar modeling, see this article for the early days and this article for the eventual triumph. For more estimates of the sizes of astronomical objects, see this article.

It is even more remarkable when you realize that this sort of story applies to essentially all of the dozens of known types of astronomical objects. For most of these, astronomers can directly measure only the electromagnetic spectrum and its variation over time, but that little is enough to develop and test detailed physical models. Most people think astronomy is very concrete, because they constantly see stars in the night sky, and flashy "artist's impression" graphics on the internet. But the field is actually extremely theoretical, with every insight won through extensive calculation.
