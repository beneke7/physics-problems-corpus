---
id: kevin-zhou/ERev
source: Kevin Zhou Physics Olympiad Handouts
kind: handout
language: en
translated: false
bidirectional_links:
  hu: corpus/notes_hu/kevin-zhou/ERev.md
source_file: sources/kevin_zhou/text/handouts/ERev.txt
source_url: https://knzhou.github.io/handouts/ERev.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
verification_status: pending
includes_solution_pdf: false
provenance_note: Complete extracted English Kevin Zhou Physics Olympiad Handouts ERev; PDF headers and footers removed where present; solution PDFs excluded from this corpus note.
---

# Electromagnetism Review

There is a total of 94 points.

## 1 Electrostatics and DC Circuits

**[3] Problem 1.** One of the important achievements of the 19th century was the laying of undersea cables, which permitted the transmission of telegraph messages. In 1871, the 21 year old electrician Oliver Heaviside was tasked with locating a leak in the cable connecting England and Denmark. (Heaviside had been trained by his uncle-in-law Charles Wheatstone, who found many uses for the Wheatstone bridge. Heaviside later recast Maxwell's equations in the vector form we use today.)

The cable can be modeled as a uniform cylinder of known resistance $R_0$. That is, when the cable is operating properly, then grounding one end and applying a voltage $V$ to the other leads to a steady state current of $V/R_0$. The leak is located a fraction $\alpha$ of the way from the English side. Let the resistance between the leak point and the Earth, due to the current having to travel through the water, be $R_d$. The precise value of $R_d$ is also unknown. Your task, as was Heaviside's, is to find a way to measure $\alpha$ without having to dig the whole cable up.

**[3] Problem 2.** USAPhO 2006, problem A2.

**[2] Problem 3 (Kalda).** Not all circuits are made of only series and parallel combinations. The Y-Δ transform is the next simplest tool you can use. Consider the two sets of resistors shown below.

The two are equivalent provided that
$$R_A = \frac{R_{AB} R_{AC}}{R_{AB} + R_{AC} + R_{BC}}, \quad \frac{1}{R_{BC}} = \frac{1/R_B R_C}{1/R_A + 1/R_B + 1/R_C}$$
along with cyclic permutations. As an application, consider the circuit below.

Find the current through the battery using a Y-Δ transform.

**[2] Problem 4.** Two infinite parallel conducting plates are separated by a distance $d$. A particle of charge $q$ is placed midway between them, then displaced towards one plate by $\Delta z \ll d$. Find the force on the particle. You can give your answer in terms of the Riemann zeta function $\zeta(s) = \sum_{n=1}^{\infty} 1/n^s$.

**[3] Problem 5.** IZhO 2022, problem 1.3. A three-dimensional electrostatics problem.

**[5] Problem 6.** IPhO 2012, problem 2. A challenging electrostatics and fluids problem; some prior exposure to surface tension is helpful. (For more about the kinds of bubbles encountered in this problem, see section 5.9 of Physics of Continuous Matter by Lautrup.)

## 2 Charges in Fields

**[3] Problem 7 (BAUPC).** A particle with charge $q$ and mass $m$ is initially at the origin in a region with constant magnetic field $B\hat{z}$, and velocity $v_0 \hat{y}$. The particle experiences a frictional force $F = -\alpha v$. Find the final position of the particle.

**[3] Problem 8 (APhO 2006).** Two large, identical conducting plates $\alpha$ and $\beta$ with charges $-Q$ and $+q$ (where $Q > q > 0$) are parallel to each other and fixed in place. Another identical plate $\gamma$ with mass $m$ and charge $+Q$ is parallel to the original plates at distance $d$, as shown.

The plates have surface area $A$. The plate $\gamma$ is released from rest and bounces elastically off the plate $\beta$. Assume that charges have sufficient time to redistribute between the plates during the collision. When the plate $\gamma$ returns to its original position, what is its speed?

**[3] Problem 9.** USAPhO 2017, problem A3. A real-world application of magnetism, with great historical importance. For much more on the mechanism illustrated in this question, see this article.

**[3] Problem 10.** USAPhO 2023, problem A2.

**[3] Problem 11.** NBPhO 2010, problem 1. A contrived, but nice problem involving particles in fields.

**[3] Problem 12.** APhO 2003, problem 3. A short problem on a "plasma lens".

**[4] Problem 13.** APhO 2005, problem 2B. An elegant, tricky problem on focusing with magnetic fields. I recommend using Kai Wen Teo's modified version.

**[4] Problem 14.** IPhO 2011, problem 3. A problem on the interactions of charges and atoms.

**[3] Problem 15.** USAPhO 2017, problem B2. A series of short calculations for a real-world setup.

**[5] Problem 16.** IPhO 2021, problem 2. A comprehensive problem on E1 through E4.

**Remark**

You should almost never use a rotating frame to describe electromagnetic fields. Not only will you run into a more subtle version of the problems with field transformations, as described in E4, but basic calculus operations like the divergence, curl, and partial time derivative transform too. The result is that Maxwell's equations take on a completely different, and rather nasty form, as shown here. (It is easier to work with Maxwell's equations in general frames if you know how to express them in tensor form, as mentioned in R3. But in that case you usually wouldn't even be thinking in terms of electric and magnetic fields anyway, replacing them with the electromagnetic field strength tensor.)

**Idea 1**

A metal conductor is made of nuclei of positive charge, and electrons of compensating negative charge. Classically, the electrons are free to move, but the nuclei are fixed in place in the crystal lattice by strong electrostatic interactions.

**[3] Problem 17 (PPP 173).** A solid metal cylinder rotates with angular velocity $\omega$ about its axis of symmetry. The cylinder is in a homogeneous magnetic field $B$ parallel to its axis.

(a) Find the charge distribution inside the cylinder.

(b) Is there a nonzero angular velocity for which the charge distribution is everywhere zero?

**[3] Problem 18 (MPPP 173).** In 1917, T. D. Stewart and R. C. Tolman discovered that an electric current flows in any coil wound around, and attached to, a cylinder that is rotated axially with constant angular acceleration.

Consider a large number of rings of thin metallic wire, each with radius $r$ and resistance $R$. The rings have been glued in a uniform way onto a very long evacuated glass cylinder, with $n$ rings per unit length of the symmetry axis. The plane of each ring is perpendicular to that axis.

At some particular moment, the cylinder starts to accelerate around its symmetry axis with angular acceleration $\alpha$. After a certain length of time, there is a constant magnetic field $B$ at the centre of the cylinder. Find, in terms of the charge $e$ and mass $m$ of an electron, the magnitude of the field. (The matching experimental result showed that it was the electrons that were free to move in metals.)

**[5] Problem 19.** EuPhO 2023, problem 3. A neat and rather difficult question, in a setup where an eddy current can be computed exactly.

## 3 Induction

**[3] Problem 20 (IPhO 2000).** A thin copper wire of radius $r$ and resistivity $\rho$ is bent into a circular ring of radius $R$ of total mass $m$. It is suspended from the ceiling by a frictionless wire and set rotating with angular frequency $\omega$. The horizontal component of the local magnetic field of the Earth is $B$. Neglecting any self-induction effects and assuming that $B$ is small, find the time required for the angular frequency to halve. This is an example of "induction braking".

**[3] Problem 21.** USAPhO 2024, problem A1. How wires form a real LC circuit.

**[5] Problem 22.** IZhO 2020, problem 3. A nice problem on electromagnetism and mechanics.

**[5] Problem 23.** APhO 2021, problem 3. A challenging problem on time-dependent image charges.

## 4 Circuits

**[3] Problem 24.** USAPhO 2007, problem A4.

**[3] Problem 25.** NBPhO 2009, problem 8. A review problem for RC and RL circuits.

**[3] Problem 26 (Kalda).** An electrical transformer is connected as shown.

Both windings of the transformer have the same number of loops and the self-inductance of both coils is equal to $L$. There is no leakage of the magnetic field lines from the core, so that the mutual inductance is also equal to $L$.

(a) Suppose the coil windings are oriented so that if both coils have current flowing from left to right, then the magnetic fields in the transformer core cancel out. Find the currents in the resistors immediately after the switch is closed.

(b) Find the current in the left resistor as a function of time.

(c) Now suppose one of the coils is wound in reverse, relative to the specification of part (a). Find the current in the right resistor as a function of time.

## 5 Electrodynamics

**[3] Problem 27.** Consider two infinite parallel plates held at $z = h/2$ and $z = -h/2$, with uniform charge densities $\sigma$ and $-\sigma$ respectively, and negligible mass. The plates are initially at rest.

(a) Both plates are uniformly accelerated by $a = a\hat{y}$. During this process, find the electric field induced between the plates. Assume $a$ is small, so that radiation effects can be neglected, i.e. assume the magnetic field is always approximately magnetostatic.

(b) During this process, find the external force per unit area needed to accelerate the plates.

(c) The acceleration stops when the plates have speed $v_0$. Verify that the total work done is equal to the change in electromagnetic field energy.

**[3] Problem 28. [A]** Electromagnetism is symmetric under charge conjugation $C$, parity $P$, and time reversal $T$. Explicitly, this means the following: suppose there are charge and current densities $\rho(r, t)$ and $J(r, t)$, which then produce fields $E(r, t)$ and $B(r, t)$. A test charge $q$ is acted on by these fields, taking a path $x(t)$. Under one of these symmetry transformation, all of these quantities can be changed, but the new fields should still obey Maxwell's equations, and the path of the test charge should still obey Newton's second law, $ma = q(E + v \times B)$.

(a) Under charge conjugation, the signs of all charges are flipped. What are the new charge and current densities $\rho'(r, t)$ and $J'(r, t)$? What are the new fields $E'(r, t)$ and $B'(r, t)$? The path of the test charge is still $x'(t) = x(t)$. Verify it still obeys Newton's second law.

(b) Under time reversal, everything at time $t$ now occurs at time $-t$. For example, $\rho'(r, t) = \rho(r, -t)$. Verify the test charge's new path still obeys Newton's second law.

(c) Under parity, everything at position $x$ is mapped to $-x$. For example, the new path of the test charge is $x'(t) = -x(t)$. Verify its new path still obeys Newton's second law.

(d) The Poynting vector $S = (E \times B)/\mu_0$ describes the energy flow in the electromagnetic field. How does it transform under $C$, $P$, and $T$?

(e) In quantum field theory, one important but subtle quantity is the "theta term",
$$\int dt \int dr \, E(r, t) \cdot B(r, t)$$
where the integrals are over all time and all space. Does the theta term stay the same under $C$, or $P$, or $T$? How about the combined transformations $CP$ and $CPT$?

**Remark**

In E7, you learned that an accelerating particle emits electromagnetic radiation, and therefore loses energy. But under time reversal, an accelerating particle is still accelerating, so it still should lose energy. How can this be consistent with time reversal symmetry, which says the particle should instead gain energy?

The resolution is that when you apply time reversal, you need to time reverse everything. Suppose a particle accelerates at time $t = 0$ and emits a burst of radiation, which exists for $t > 0$. The time reverse of this process has radiation moving towards the particle at time $t < 0$, until at $t = 0$ it hits the particle and gets absorbed. The reason this seems unrealistic has nothing to do with the laws of electromagnetism, which treat both scenarios as equally valid, and everything to do with the second law of thermodynamics.
