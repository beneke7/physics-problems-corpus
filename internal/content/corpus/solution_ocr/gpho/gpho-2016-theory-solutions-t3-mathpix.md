---
id: solution-ocr-gpho-2016-theory-solutions-t3
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2016-t3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem T3. Magnetars (11 points)

i. (1.5 pts) If we change the frog's height by $\Delta h$, the change in potential energy needs to be smaller than the change in magnetic energy. (0.2 pts)
Note that for every point in frog, the change in magnetic energy is the same, thus we can express it as

$$
\Delta E = - V \frac { \Delta \left( B ^ { 2 } \right) \chi } { 2 \mu _ { 0 } } = V \frac { B _ { 0 } ^ { 2 } \chi \Delta h } { 2 h _ { 0 } \mu _ { 0 } }
$$

The change in potential energy is

$$
\Delta \Pi = V \rho g \Delta h
$$

Then

$$
\begin{gathered}
\Delta E + \Delta \Pi < 0 \\
V \frac { B _ { 0 } ^ { 2 } \chi \Delta h } { 2 h _ { 0 } \mu _ { 0 } } + V \rho g \Delta h < 0
\end{gathered}
$$

(0.2 pts)

This means that

$$
B _ { 0 } > \sqrt { - \frac { 2 h _ { 0 } \mu _ { 0 } \rho g } { \chi } }
$$

(0.1 pts)
and numerically

$$
B _ { 0 } = 5.32 \mathrm {~T} .
$$

(0.1 pts)
ii. (1 pt) Let us observe a piece of the star with a volume $V _ { 0 }$ before the collapse and volume $V _ { 1 }$ after the collapse. The mass before and after are same. This means that

$$
V _ { 0 } \rho _ { s } = V _ { 1 } \rho _ { n }
$$

(0.1 pts)

The radius of the star scales as $V ^ { 1 / 3 }$, (0.1 pts) and the cross-sectional area as $V ^ { 2 / 3 }$. (0.1 pts)
The total magnetic field through the volume is also the same before and after the collapse:

$$
B _ { s } V _ { 0 } ^ { \frac { 2 } { 3 } } = B _ { n } V _ { 1 } ^ { \frac { 2 } { 3 } }
$$

(0.4 pts)

Now we can express $B _ { n }$

$$
B _ { n } = B _ { s } \left( \frac { V _ { 0 } } { V _ { 1 } } \right) ^ { \frac { 2 } { 3 } } = B _ { s } \left( \frac { \rho _ { n } } { \rho _ { s } } \right) ^ { \frac { 2 } { 3 } }
$$

(0.2 pts)
and numerically

$$
B _ { n } = 5.0 \times 10 ^ { 5 } \mathrm {~T}
$$

iii. (1 pt) During the collapse there is no torque on the star, this means that the angular momentum remains constant. Thus

$$
\frac { 2 } { 5 } M R _ { s } ^ { 2 } \omega _ { s } = \frac { 2 } { 5 } M R _ { n } ^ { 2 } \omega _ { n }
$$

(0.6 pts)

Recall that $R _ { s }$ is inversely proportional to $\rho _ { s } ^ { 1 / 3 }$. (0.2 pts)
Now we can express $\omega _ { n }$

$$
\omega _ { n } = \omega _ { s } \frac { R _ { s } ^ { 2 } } { R _ { n } ^ { 2 } } = \omega _ { s } \left( \frac { \rho _ { n } } { \rho _ { s } } \right) ^ { \frac { 2 } { 3 } }
$$

(0.2 pts)
iv. (1.5 pts) After time $t$, the neutron star has turned by an angle $\beta = \omega _ { n } t$. (0.2 pts)
The magnetic fields pass any radial line from the centre of the neutron star on average $N = \frac { \beta } { 2 \pi } = \frac { \omega _ { n } t } { 2 \pi }$ times. (0.3 pts)
The total magnetic flux entering the outer shell remains constant, and thus is always equal to $\Phi = 2 \pi R _ { 0 } B _ { 0 }$, (0.3 pts) where $R _ { 0 }$ is the radius of the outer shell. This means that the flux through any radial line is $\Phi N$. (0.4 pts)
Then

$$
B R _ { 0 } = 2 \pi R _ { 0 } B _ { 0 } N = R _ { 0 } B _ { 0 } \omega _ { n } t
$$

(0.2 pts)

And finally

$$
B = B _ { 0 } \omega _ { n } t
$$

(0.1 pts)
v. (1 pt) We can find the gravitational energy by integrating: we imagine removing the material layers of thickness $\mathrm { d } x$ one by one, starting from the outermost one. The potential energy for a hollow sphere with a thickness $\mathrm { d } x$ in the gravity field of the matter inside it is

$$
\mathrm { d } \Pi = - G \frac { \left( 4 \pi x ^ { 2 } \mathrm {~d} x \rho _ { n } \right) \frac { 4 } { 3 } \pi x ^ { 3 } \rho _ { n } } { x } = - \frac { 16 \pi ^ { 2 } } { 3 } G \rho _ { n } ^ { 2 } x ^ { 4 } \mathrm {~d} x
$$

(0.2 pts)

Integrating from $x = 0$ to $x = R _ { n }$ we get

$$
\Pi = - \frac { 16 \pi ^ { 2 } } { 15 } G \rho _ { n } ^ { 2 } R _ { n } ^ { 5 } = - \frac { 3 } { 5 } \frac { G M _ { n } ^ { 2 } } { R _ { n } }
$$

(0.3 pts)

A partial credit of 0.2 pts is given is if integration is substituted by a simplifying product.
This potential energy is equal to the magnetic energy

$$
\Pi = \frac { 4 } { 3 } \pi R ^ { 3 } B _ { n } ^ { 2 } \frac { 1 } { 2 \mu _ { 0 } } = \frac { 3 } { 5 } \frac { G M _ { n } ^ { 2 } } { R _ { n } }
$$

(0.3 pts)


Solving for $B _ { n }$ we get

$$
\begin{equation*}
B _ { n } = 3 \frac { M } { R ^ { 2 } } \sqrt { \frac { \mu _ { 0 } G } { 10 \pi } } \tag{0.1pts}
\end{equation*}
$$

and numerically

$$
\begin{equation*}
B _ { n } = 1.18 \times 10 ^ { 14 } \mathrm {~T} \tag{0.1pts}
\end{equation*}
$$

vi. (1 pt) The electron orbit will get distorted when the Lorentz force becomes in the same order of magnitude as Coulomb force.
The Coulomb force is

$$
\begin{equation*}
F _ { 1 } = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { R _ { H } ^ { 2 } } \tag{0.2pts}
\end{equation*}
$$

On the other hand,

$$
\begin{equation*}
F _ { 1 } = \frac { m _ { e } v ^ { 2 } } { R _ { H } } \tag{0.2pts}
\end{equation*}
$$

We can express the velocity of electron

$$
\begin{equation*}
v = e \sqrt { \frac { 1 } { 4 \pi \epsilon _ { 0 } R _ { H } m _ { e } } } \tag{0.1pts}
\end{equation*}
$$

Then the Lorentz force is

$$
\begin{equation*}
F _ { 2 } \approx e v B \tag{0.2pts}
\end{equation*}
$$

Upon substituting $v$ we obtain

$$
F _ { 2 } = e ^ { 2 } \sqrt { \frac { 1 } { 4 \pi \epsilon _ { 0 } R _ { H } m _ { e } } }
$$

From the condition $F _ { 1 } \approx F _ { 2 }$ we can express the magnetic field strength

$$
\begin{equation*}
B = \sqrt { \frac { m _ { e } } { 4 \pi \epsilon _ { 0 } R _ { H } ^ { 3 } } } \tag{0.1pts}
\end{equation*}
$$

and numerically

$$
\begin{equation*}
B = 2.56 \times 10 ^ { 5 } \mathrm {~T} \tag{0.1pts}
\end{equation*}
$$

vii. (2 pts) Perpendicularly to the magnetic field, the Lorentz force is much larger than the Coulomb force since the magnetic field $B _ { n }$ is much larger than the magnetic field found in the previous question. This means that in the perpendicular plane, the electrons move along a circular cyclotron orbit. (0.2 pts) Then we can write

$$
\begin{equation*}
\frac { m _ { e } v ^ { 2 } } { R _ { 1 } } = e v B _ { n } , \tag{0.2pts}
\end{equation*}
$$

where $R _ { 1 } = d / 2$ is the orbit's radius. Now we apply the uncertainty principle. The uncertainty of the momentum is

$$
\begin{equation*}
\Delta p = 2 m _ { e } v \tag{0.3pts}
\end{equation*}
$$

and uncertainty of the coordinate

$$
\Delta x = 2 R _ { 1 }
$$

So we have

$$
\begin{equation*}
4 m _ { e } v R _ { 1 } \approx \hbar \tag{0.2pts}
\end{equation*}
$$

Substituting $m _ { e } v = \frac { \hbar } { 4 R _ { 1 } }$ to the first equation we get

$$
\begin{equation*}
\frac { \hbar } { R _ { 1 } ^ { 2 } } = 4 e B _ { n } \tag{0.1pts}
\end{equation*}
$$

Then

$$
\begin{equation*}
R _ { 1 } = \sqrt { \frac { \hbar } { 4 e B _ { n } } } \tag{0.1pts}
\end{equation*}
$$

The length of the cylinder will still remain in the order of magnitude of $R _ { H }$ because the Lorentz force doesn't act on the electron in that axis (parallel to the magnetic field). (0.5 pts) Then the ratio of the length and diameter is approximately

$$
\begin{equation*}
\kappa = \frac { R _ { H } } { R _ { 1 } } = 2 R _ { H } \sqrt { \frac { e B _ { n } } { \hbar } } \tag{0.1pts}
\end{equation*}
$$

and numerically

$$
\begin{equation*}
\kappa = 39 \approx 40 . \tag{0.1pts}
\end{equation*}
$$

Note that if we were to make calculations for magnetars with $B = 1 \times 10 ^ { 11 } \mathrm {~T}$, the orbital electrons would be ultrarelativistic.
