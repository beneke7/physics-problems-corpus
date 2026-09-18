---
id: solution-ocr-kevin-zhou-e5sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e5-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7
Suppose the magnetic moment of an iron atom is due to a single unpaired electron, with angular momentum of order $\hbar$. The atoms are separated by a distance $d \sim 10 ^ { - 10 } \mathrm {~m}$. Estimate the maximum magnetic field an iron magnet can produce. How does this compare to the fields that can be produced in an electromagnet?


Solution
The answer doesn't scale significantly with the physical size of the iron magnet. To see this, think in terms of electric dipoles: if you have a giant cube of electric dipoles, it's equivalent to having a fixed surface charge density $\pm \sigma$ on two of the faces. The electric field produced by such a charge density near each face is of order $\sigma / \epsilon _ { 0 }$, independent of the size of the cube.

Therefore, the only things the magnetic field can depend on are $\mu _ { 0 }$, the magnetic dipole moment $\mu$ of a single atom, and $d$. By dimensional analysis,

$$
B \sim \mu _ { 0 } \frac { \mu } { d ^ { 3 } }
$$

which can also be thought of as $\mu _ { 0 } M$, where $M$ is the magnetization density. Taking $\mu \sim e \hbar / m _ { e }$ and plugging in the numbers gives $B \sim 10 \mathrm {~T}$, which is the right order of magnitude.

Now consider the case of an electromagnet, where the field is produced by moving electrons with typical speed $v$, moving in a loop with typical size $r$. In a metal, there's on the order of one free electron per atom, so $d$ is still the same. The difference is that the field made by each electron does scale with $r$, because each has magnetic moment

$$
\mu = I A \sim \frac { e v } { r } r ^ { 2 } .
$$

Compared to the previous result, this is larger by a factor of $m v r / \hbar$. The two are comparable, for $r \sim 1 \mathrm {~m}$, if the electrons travel at the agonizingly slow velocity $v \sim 10 ^ { - 4 } \mathrm {~m} / \mathrm { s }$.

Therefore, you would get a magnetic field much larger than 10 T if you could make the electrons go at a reasonable walking speed, but that's easier said than done. The largest steady magnetic fields made in the lab are only about 40 T. Such a field carries a pressure which would rip apart a solenoid made of coiled wire,

$$
P = \frac { ( 40 \mathrm {~T} ) ^ { 2 } } { 2 \mu _ { 0 } } = 0.6 \mathrm { GPa } .
$$

For an exercise involving these pressure forces, see USAPhO 2025, problem A3.
Instead, these fields are produced in Bitter electromagnets, which are solenoids made of thick metal plates, perforated with cooling channels to dissipate the enormous heat produced by resistance. It is possible to produce higher fields temporarily, but the results will be explosive.
[3] Problem 21. USAPhO 2021, problem A3. A simple classical model of an electron.
[3] Problem 22 (USAPhO 2007). This is a rewrite of USAPhO 2007, problem B2, which has several typos and ambiguities. In this problem, we will model diamagnetism in materials classically. For simplicity, we will assume that each atom consists of a single electron of charge - $e$ and mass $m _ { e }$, orbiting a single proton of charge $e$ and mass $m _ { p } \gg m _ { e }$ in a circle of radius $R$.

(a) Find the angular velocity $\omega _ { 0 }$ of the electron's orbit. For simplicity, you may use $\omega _ { 0 }$ and $R$ in all of your answers below.

(b) When we average over many orbits of the electron, it is effectively a small current loop, which produces the field of a magnetic dipole moment. Find the magnitude $m$ of this dipole moment.

We model a diamagnetic substance with $N$ atoms to have all atoms oriented in the $x y$ plane, with half of them orbiting clockwise and the other half orbiting counterclockwise when viewed looking down along the $z$-axis. In this state, the total magnetic moment cancels out. Next, an external magnetic field $B _ { 0 } \hat { \mathbf { z } }$ is slowly turned on over a long time $\Delta t$. You may assume that $B _ { 0 }$ is small.

(c) For counterclockwise orbits, find an approximate expression for the total work done on the electrons by the induced field during this process.
(d) For counterclockwise orbits, the final angular velocity is $\omega = \omega _ { 0 } + \Delta \omega$ and the final orbit radius is $R ^ { \prime } = R + \Delta R$. Find $\Delta \omega / \omega _ { 0 }$ and $\Delta R / R$ to first order in $B _ { 0 }$.
(e) To first order in $B _ { 0 }$, find the total magnetic moment of the material, and its direction.

Solution. (a) By equating the electrostatic force to the centripetal force, we have

$$
\omega _ { 0 } = \sqrt { \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } m _ { e } R ^ { 3 } } } .
$$

(b) The effective current loop carries an average current $e / \left( 2 \pi / \omega _ { 0 } \right)$, and has an area of $\pi R ^ { 2 }$. Thus, we have
$$
m = \frac { e \omega _ { 0 } R ^ { 2 } } { 2 } .
$$
(c) The induced electric field at the radius of the orbit is
$$
E = \frac { 1 } { 2 \pi R } \frac { d \Phi } { d t } = \frac { B _ { 0 } R } { 2 \Delta t }
$$
so that the work done on the electrons is approximately
$$
W \approx e E \left( \omega _ { 0 } R \right) \Delta t = \frac { e \omega _ { 0 } B _ { 0 } R ^ { 2 } } { 2 } .
$$
Here we have approximated $\omega _ { 0 }$ and $R$ as constant during the process. Of course, they might change a bit, but this would give a higher-order correction, and we're considering small $B _ { 0 }$.
(d) Since the magnetic field changes slowly, the orbit stays circular. We thus have
$$
m _ { e } \omega ^ { 2 } R ^ { \prime } = \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } R ^ { \prime 2 } } + e R ^ { \prime } \omega B _ { 0 } .
$$
This result can be rewritten as
$$
\omega ^ { 2 } R ^ { \prime } - \frac { \omega _ { 0 } ^ { 2 } R ^ { 3 } } { R ^ { \prime 2 } } = \frac { e R ^ { \prime } \omega B _ { 0 } } { m _ { e } } .
$$
Now, we're working to first order in $B _ { 0 }$, and the right-hand side is already proportional to $B _ { 0 }$. We can thus approximate $R ^ { \prime } \approx R$ and $\omega \approx \omega _ { 0 }$ there, and then divide through by $\omega _ { 0 } ^ { 2 } R$, giving
$$
\frac { \omega ^ { 2 } } { \omega _ { 0 } ^ { 2 } } \frac { R ^ { \prime } } { R } - \frac { R ^ { 2 } } { R ^ { \prime 2 } } \approx \frac { e B _ { 0 } } { m _ { e } \omega _ { 0 } } .
$$

Expanding the left-hand side to first order in small changes gives, by the binomial theorem,

$$
2 \frac { \Delta \omega } { \omega _ { 0 } } + 3 \frac { \Delta R } { R } \approx \frac { e B _ { 0 } } { m _ { e } \omega _ { 0 } } .
$$

Next, let's consider the work done. Equating it to the change in energy gives

$$
W = - \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } R ^ { \prime } } + \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } R } + \frac { 1 } { 2 } m _ { e } R ^ { \prime 2 } \omega ^ { 2 } - \frac { 1 } { 2 } m _ { e } R ^ { 2 } \omega _ { 0 } ^ { 2 }
$$

which, by our earlier expression for $\omega _ { 0 }$, is equivalent to

$$
W = - \frac { m _ { e } \omega _ { 0 } ^ { 2 } R ^ { 3 } } { R ^ { \prime } } + \frac { 1 } { 2 } m _ { e } R ^ { 2 } \omega _ { 0 } ^ { 2 } + \frac { 1 } { 2 } m _ { e } R ^ { \prime 2 } \omega ^ { 2 } .
$$

Using our result from part (c) and dividing through by $m R ^ { 2 } \omega _ { 0 } ^ { 2 }$ gives

$$
\frac { e B _ { 0 } } { 2 m _ { e } \omega _ { 0 } } \approx - \frac { R } { R ^ { \prime } } + \frac { 1 } { 2 } + \frac { 1 } { 2 } \frac { R ^ { \prime 2 } \omega ^ { 2 } } { R ^ { 2 } \omega _ { 0 } ^ { 2 } } \approx 2 \frac { \Delta R } { R } + \frac { \Delta \omega } { \omega _ { 0 } } .
$$

Comparing this to our other equation, we conclude that to first order,

$$
\frac { \Delta R } { R } \approx 0 , \quad \frac { \Delta \omega } { \omega _ { 0 } } \approx \frac { e B _ { 0 } } { 2 m _ { e } \omega _ { 0 } } .
$$

This is a bit harder than the original USAPhO problem, where you are simply told to assume $\Delta R = 0$. As you can see, that fact can actually be derived directly.

(e) If you repeat the reasoning for the clockwise orbits, everything stays the same except that $\Delta \omega$ has opposite sign, which means that for both sets of orbits, $\Delta m$ has the same sign. As a result, the total magnetic moment becomes
$$
m _ { \mathrm { tot } } = N \frac { e ^ { 2 } R ^ { 2 } B _ { 0 } } { 4 m _ { e } } .
$$
It is directed against the applied field.
You might have some residual objections to this derivation. For instance, why are the electrons orbiting in circles, with angular velocity oriented with and against the field? For the electrons orbiting with m aligned with B, why don't they simply flip over to lower their energy? These are legitimate questions, and the truth is that any "classical" derivation of magnetic phenomena doesn't really work; you fundamentally need quantum mechanics. At best, our classical argument can give us a rough estimate of the size of the effect. For more discussion, see E8, and for an alternative derivation which uses some quantum mechanics, see R3.
[5] Problem 23. APhO 2013, problem 3. A solid question involving classical magnetic moments, which gives some intuition for the quantum behavior.

## 5 Superconductors

There are many tough Olympiad problems involving superconductors. Superconductors can be a bit intimidating at first, but they actually obey simple rules.


Idea 7
An ideal conductor has zero resistivity, which implies that the magnetic flux through any loop in the conductor is constant: attempting to change the flux instantly produces currents that cancel out the change. However, the flux can be nonzero.

A superconductor is an ideal conductor with the additional property that the magnetic field in the body of the superconductor is exactly zero, no matter what the initial conditions are; once an object becomes superconducting it forces all the existing flux out. This is known as the Meissner effect. It further implies that all the current in a superconductor is confined to its surface, and that the normal component of the magnetic field $B _ { \perp }$ is zero on the surface. Many problems involving superconductors don't even use the Meissner effect, so they would also work for ideal conductors.

Example 8: PPP 153
A superconducting uniform spring has $N$ turns of radius $R$, relaxed length $x _ { 0 }$, and spring constant $k$. The two ends of the spring are connected by a wire, and a small, steady current $I$ is made to flow through the spring. At equilibrium, what is the change in its length?

Solution
This question really is about ideal conductors, not just superconductors. The additional superconductivity property would tell us about the field inside the wires themselves (not the loops that the wires form), and thereby about some small screening currents on the surfaces of the wires. This is not important because the wires are thin compared to the spring as a whole.

In order to find the equilibrium length $x _ { \text {eq } }$, we can use the principle of virtual work. We compute how the energy changes if we slightly perturb the system. At equilibrium, this change in energy should be zero.

We have $B = \mu _ { 0 } N I / x$, so the magnetic field energy is

$$
U = \frac { B ^ { 2 } } { 2 \mu _ { 0 } } V = \frac { A I ^ { 2 } } { x } , \quad A = \frac { \mu _ { 0 } \pi R ^ { 2 } N ^ { 2 } } { 2 } .
$$

Naively, this means the magnetic field energy decreases as $x$ increases, so the spring would like to stretch. But this makes no sense, because we know that parallel currents attract, squeezing the spring. We have to recall that the spring is an ideal conductor, so when it is stretched or squeezed, the current changes to keep the flux the same. The flux is

$$
\Phi _ { B } = N \left( \pi R ^ { 2 } \right) B \propto \frac { I } { x }
$$

so we have

$$
I ( x ) = I \frac { x } { x _ { \mathrm { eq } } } , \quad U ( x ) = \frac { A I ^ { 2 } } { x _ { \mathrm { eq } } ^ { 2 } } x .
$$


The other energy contribution is $k \left( x - x _ { 0 } \right) ^ { 2 } / 2$, so setting the derivative of energy to zero,

$$
\frac { A I ^ { 2 } } { x _ { \mathrm { eq } } ^ { 2 } } = k \left( x _ { 0 } - x _ { \mathrm { eq } } \right) .
$$

Since the current is small, $x _ { 0 } \approx x _ { \mathrm { eq } }$, so we can replace $x _ { \mathrm { eq } }$ with $x _ { 0 }$ on the left-hand side, giving the answer,

$$
x _ { \mathrm { eq } } = x _ { 0 } - \frac { A I ^ { 2 } } { x _ { 0 } ^ { 2 } k } .
$$

As a sidenote, the original formulation of this question involved an external voltage source forcing the current $I$ to be constant. However, in this case using energy conservation is more subtle because one has to account for the work done by the voltage source. Here we used a superconductor, which keeps the flux constant, so that the spring can be thought of as an isolated system. The final answers are the same, since in both cases we have the same magnetic forces, which determine the spring's compression.
