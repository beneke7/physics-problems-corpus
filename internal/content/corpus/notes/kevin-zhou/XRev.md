---
id: kevin-zhou/XRev
source: Kevin Zhou Physics Olympiad Handouts
kind: handout
language: en
translated: false
bidirectional_links:
  hu: corpus/notes_hu/kevin-zhou/XRev.md
source_file: sources/kevin_zhou/text/handouts/XRev.txt
source_url: https://knzhou.github.io/handouts/XRev.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
verification_status: pending
includes_solution_pdf: false
provenance_note: Complete extracted English Kevin Zhou Physics Olympiad Handouts XRev; PDF headers and footers removed where present; solution PDFs excluded from this corpus note.
---

# Special Topics Review

There is a total of 92 points.

## 1 Thermodynamics

**[3] Problem 1.** A photon of energy E bounces between two mirrors separated by a distance L.

(a) If the mirrors are slowly moved together to a distance L/2, find the final energy E by considering the blueshift the photon experiences at every collision.

(b) Check this result agrees with the adiabatic theorem.

(c) Using your result, infer the value of γ for a one-dimensional photon gas. Can you also infer the value of γ for a d-dimensional photon gas?

**[3] Problem 2.** Let n be the local density of a gas of particles. If this density is nonuniform, it will tend to be smoothed out by diffusion, which produces a particle current

$$J = -D \nabla n$$

with units of particles per second per unit area. This is a continuity equation, as explained in T2, and D is called the diffusion coefficient. In addition, we know from M7 and T1 that each particle in such a gas will experience a drag force from the others. As a result, when a constant force F is applied to one, its terminal velocity satisfies F = µv.

(a) Suppose the particles are placed inside a potential V(r). Write down the contribution to the particle current due to the resulting force, neglecting diffusion.

(b) In thermal equilibrium, the particle current produced by the force, which pulls the particles to lower potential, balances the particle current produced by diffusion, which spreads them out. Assuming the temperature is T, find a relation between D and µ.

**Remark**

The result of problem 2 is called the Einstein relation, and is one of the four major results Einstein derived in his "annus mirabilis" of 1905, the others being special relativity and E = mc², and explaining the photoelectric effect with photons. So why is this result so important? It's because at the time, it was not yet completely accepted that matter was made of atoms. As you saw in T1, the size of a single atom often drops out of kinetic theory calculations. At the time, many took this to mean that atoms were a fictitious calculational tool, like how one does integrals by summing over intervals of length Δx, then gets a result independent of this fiducial length by taking Δx → 0.

But doesn't the number of atoms N appear all the time in basic thermodynamics, like the ideal gas law? Yes, but always in the combination nR = NkB. Thus, information about the size of a single atom is equivalent to information about kB. Einstein's relation is useful because it explicitly gives us kB in terms of the separately directly measurable quantities D, µ, and T. It was one of the first unique, quantitative predictions of kinetic theory.

**[4] Problem 3** (Physics Cup 2018). Estimate the mean free path of a heavy black sphere of mass m and radius R in vacuum at temperature T. Here, we define the mean free path as the typical distance it takes for the velocity vector of the sphere to turn by an angle π/2. Assume that kB T R ≳ ℏc. (Hint: for a random walk where steps of size a are taken per time τ, the average overall displacement after time t ≫ τ is approximately $a\sqrt{t/\tau}$.)

**[3] Problem 4.** Consider a layer of the atmosphere with density ρ, pressure P, adiabatic index γ, and density and pressure gradients dρ/dz and dP/dz. Suppose that a small parcel of air in this layer acquires a small upward velocity. Under certain conditions, the parcel of air will begin oscillating in height, performing simple harmonic motion. Neglecting drag and heat transfer between the parcel of air and its surroundings, find the angular frequency ω of this motion. This is called the Brunt–Vaisala or buoyancy frequency.

**[3] Problem 5.** USAPhO 2021, problem B2. A conceptual problem on methods of heat transfer.

**[3] Problem 6.** USAPhO 2019, problem B2. A useful problem for getting comfortable with numbers and estimates in astronomy.

**[3] Problem 7.** USAPhO 2022, problem B1. A data analysis problem about a nonideal gas.

**[3] Problem 8.** USAPhO 2024, problem B2. Two exercises on the heat capacity of solids.

**[3] Problem 9.** INPhO 2019, problem 6. A thermodynamic cycle with a nonideal gas.

**[5] Problem 10.** IPhO 2011, problem 2. A problem on an electrified soap bubble, which combines electrostatics, thermodynamics, and surface tension.

## 2 Relativity

**[4] Problem 11.** IPhO 1998, problem 3. A great problem on a real controversy in physics, which also gives you practice working with real data.

**[4] Problem 12.** EuPhO 2024, problem 2. A problem on visual perception in special relativity. Note that in part (b), when the problem asks about what Alice "sees", it means what she sees from light reaching her eyes.

**[4] Problem 13** (Physics Cup 2018). A spaceship travels with a constant proper acceleration g along a straight line. At a certain moment, it launches two missiles in the direction of its motion, with speeds v and 2v. Find the proper time interval in the spaceship between catching up to the first and to the second missile.

**[2] Problem 14.** In classical physics, light waves do not interact with each other, but they can due to quantum mechanical effects. Suppose two photons traveling in opposite directions scatter off each other. Initially the photons have wavelengths λ₁ and λ₂. One of the two outgoing photons exits at an angle θ to the first incoming photon. Find its wavelength λ in terms of λ₁, λ₂, and θ.

**[3] Problem 15** (MPPP 195). The pion π⁺ is a subatomic particle with mass mπ. In one of its possible decay modes, it decays into a positron e⁺ of mass mₑ and an electron-neutrino νₑ of negligible mass. What is the minimum speed of the pion if, following its decay, the positron and neutrino move at right angles to each other? How does it simplify in the limit mₑ ≪ mπ?

**[3] Problem 16.** USAPhO 2023, problem B3. A nice, qualitative problem on supernova neutrinos.

**[2] Problem 17** (Purcell 6.68). Consider two electrons moving side-by-side with parallel velocities, with speed v and separation r. We wish to compute the three-force between the electrons.

(a) Compute this force by working in the electrons' rest frame and Lorentz transforming back to the lab frame.

(b) Compute this force by using the electric and magnetic fields of a moving charge, and verify the answer agrees with that of part (a).

(c) What happens to the three-force as v → c?

## 3 Waves

**[2] Problem 18** (OPhO 2024). A string of length L is attached at its endpoints to walls, with a fixed tension. Initially, it is vibrating at its fundamental frequency with a small amplitude A. A frictionless finger, initially at the right wall, slowly slides towards the left, flattening the oscillation as it goes. When the vibrating part of the string has length L/2, find the final amplitude.

**[3] Problem 19.** NBPhO 2015, problem 2. A very nice combined interference and optics problem.

**[2] Problem 20** (Crawford 4.15). Consider a jug with a large volume V, along with a thin neck of length ℓ and area A. The lowest frequency standing wave can be excited by blowing across the neck. Such a system is called a Helmholtz resonator. Naively, the corresponding wavelength would be four times the length of the jug, but it is observed to be much larger. (Try it at home!)

Since the jug has a neck, the standing wave profile looks very different from a standard profile. Most of the air motion is within the neck; the body of the jug serves as a large air reservoir that acts as a spring pushing back against this motion. The frequency can be quite low, because this reservoir is large.

(a) Show that if the air in the neck moves by a distance x, the restoring force is

$$F = -\frac{\gamma P_0 A^2 x}{V}$$

where P₀ is the original pressure in the jug, and γ is the adiabatic index.

(b) Show that this mode has an angular frequency of

$$\omega = \sqrt{\frac{V_{\text{neck}}}{V}} \cdot v, \quad V_{\text{neck}} = A\ell$$

where v is the speed of sound of air. It is significantly lower than the naive answer ω ∼ v/ℓ one would get by considering standing waves in a cylinder shaped like the jug.

(c) See if this is roughly consistent with a real jug (e.g. a 1 liter soda bottle). Does the frequency vary as you'd expect as you add water to the jug? If you feel musically inclined, can you find how to excite higher frequencies?

**Remark**

The results of problem 20 can also be used to describe window buffeting, the annoying "whuppa, whuppa, whuppa" sound you get when you slightly open one window of a rapidly moving car. Suppose the opening has area A and the car has volume V. Then the incoming air moves quickly up to a depth ℓ ∼ √A in your car, and this region functions as the "neck". The resonant frequency is therefore $f \sim \frac{vA^{1/4}}{V^{1/2}}$. You can stop the buffeting by opening the window more, increasing A so the frequency is too high to be efficiently driven by the air.

**Remark**

The udu is a Nigerian musical instrument which can be modeled as a Helmholtz resonator with two holes. The holes have different sizes, so you get a frequency f₁ if you cover one hole, and f₂ if you cover the other.

You can get a third frequency by hitting the instrument with both holes open. To find that third frequency, note that a Helmholtz resonator is like a spring-mass system, where the "spring" is the air in the instrument, and the "mass" mᵢ is the air near hole i, which moves back and forth. When both holes are open, we effectively have a spring with masses attached at both ends, which oscillates according to the reduced mass $1/\mu = 1/m_1 + 1/m_2$. Since $f_i \propto 1/\sqrt{m_i}$, the third frequency is $\sqrt{f_1^2 + f_2^2}$.

**[3] Problem 21.** USAPhO 2008, problem A4. A neat Doppler shift problem that also tests your data analysis skills.

**[4] Problem 22.** INPhO 2020, problem 4. A nice and tricky problem on the two-dimensional Doppler effect. (It is essentially a translation of a problem on the 2013 Russian Physics Olympiad.)

**[3] Problem 23.** USAPhO 2022, problem A3. A great problem on the rainbow caustic.

## 4 Modern

**[3] Problem 24.** Consider a typical small LC circuit, with L = 10⁻⁷ H and C = 10⁻¹¹ F.

(a) If the circuit is at zero temperature, estimate the voltage uncertainty across the capacitor.

(b) Do the same if the circuit is at room temperature.

Today, some of the leading quantum computing hardware is based on such circuits. Because thermal fluctuations would ruin the desired quantum mechanical effects, the circuit must be cooled so that kB T ≪ ℏω, which corresponds to a small fraction of a degree. When you see pictures of quantum computers, most of what you're looking at is the fridge!

**[2] Problem 25.** INPhO 2013, problem 2. A short problem on X-ray diffraction.

To finish up, here are three neat questions that each cover a broad range of topics.

**[5] Problem 26.** IPhO 2009, problem 3. Estimating the size of a star from scratch.

**[5] Problem 27.** IPhO 2021, problem 3. Molecular fluorescence and optical lattices.

**[5] Problem 28.** USA Team Selection Test 2021, problem 2. A full analysis of a real dark matter detector.

**Remark**

Problem 26 estimates the size of a star using a rough treatment of the nuclear physics we know applies at its core. When you think about it, it's amazing that this is possible at all. There is essentially no way to directly probe what's going on inside any star. We can basically only measure the size of the star, its rough age, and the temperature of its surface. But the models work! This was the result of generations of painstaking effort, which stimulated progress in both nuclear and particle physics. To learn the history of solar modeling, see this article for the early days and this article for the eventual triumph. For more estimates of the sizes of astronomical objects, see this article.

It is even more remarkable when you realize that this sort of story applies to essentially all of the dozens of known types of astronomical objects. For most of these, astronomers can directly measure only the electromagnetic spectrum and its variation over time, but that little is enough to develop and test detailed physical models. Most people think astronomy is very concrete, because they constantly see stars in the night sky, and flashy "artist's impression" graphics on the internet. But the field is actually extremely theoretical, with every insight won through extensive calculation.
