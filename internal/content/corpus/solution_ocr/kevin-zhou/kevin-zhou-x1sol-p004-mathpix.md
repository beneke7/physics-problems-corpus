---
id: solution-ocr-kevin-zhou-x1sol-p004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 4. Now consider a particle of mass $m$ in the potential $V ( x ) = k x ^ { 2 } / 2$. In this case, the particle turns around at a point where the potential energy gradually increases from below the particle's energy $E$ to above it. It can be shown that each of these "soft" boundaries contributes $\pi / 2$ to $\alpha$, so that for this potential we can take $\alpha = \pi$.

Show that the energy levels are

$$
E _ { n } = \hbar \omega _ { 0 } \left( n + \frac { 1 } { 2 } \right) , \quad \omega _ { 0 } = \sqrt { \frac { k } { m } } .
$$

This system is called the quantum harmonic oscillator, and remarkably, this is the exact answer, even though we used an approximation to get it. This result will be used in several problems below.

Solution. Here we have the quantization condition

$$
2 \int _ { - A } ^ { A } m \omega _ { 0 } \sqrt { A ^ { 2 } - x ^ { 2 } } d x = 2 \pi \hbar ( n + 1 / 2 ) .
$$

Note that the integral is just the area of a half-ellipse, so

$$
\pi A ^ { 2 } m \omega _ { 0 } = 2 \pi \hbar ( n + 1 / 2 ) ,
$$

so

$$
E = \frac { 1 } { 2 } m \omega _ { 0 } ^ { 2 } A ^ { 2 } = \hbar \sqrt { k / m } ( n + 1 / 2 ) = \hbar \omega _ { 0 } ( n + 1 / 2 )
$$

as desired. Note that this solution makes sense for $n \geq 0$.
[3] Problem 5. USAPhO 2015, problem A1. (The use of the WKB approximation in this problem is technically incorrect: the problem takes $\alpha = \pi$ when it actually should take $\alpha = 3 \pi / 2$. Often, people will apply the WKB approximation in a sloppy way because they're only after rough estimates at small $n$, or the limiting behavior at $n \gg 1$. In the previous problems, we treated $\alpha$ properly because doing so will give the exact correct answer in those cases.)
[5] Problem 6. IPhO 2006, problem 1. This is a neat problem which illustrates the effect of a gravitational field on quantum particles, as well as the basics of interferometry, a subject developed further in W2. Give this a try even if it looks tough; only the ideas introduced above are needed!


Idea 3: Bohr Quantization
In general, $p d x$ may be replaced by any generalized momentum/position pair. For example,

$$
\oint L d \theta = n h .
$$

When angular momentum is conserved, the left-hand side is simply $2 \pi L$, immediately giving

$$
L = n \hbar
$$

which is Bohr's quantization condition. In a system of particles rotating together, $L$ stands for the total angular momentum of the system.

Compared to back-and-forth linear motion, covered in idea 2, rotation is different because it's inherently periodic. For rotation, the integer $n$ can be positive or negative, representing a particle going clockwise or counterclockwise. Also, there is no analogue of the $\alpha$ phase factor because the particle just rotates all the way around; it never gets reflected.

Example 1
Find the energy levels and orbit radii of the electron in the hydrogen atom using Bohr quantization.

Solution
We postulate a circular orbit, and quantize the angular momentum. We have

$$
\frac { m v ^ { 2 } } { r } = \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 2 } } , \quad L = m v r = n \hbar .
$$

Solving the second equation for $v$ and plugging into the first gives

$$
r = \frac { 4 \pi \epsilon _ { 0 } \hbar ^ { 2 } } { m e ^ { 2 } } n ^ { 2 } = a _ { 0 } n ^ { 2 }
$$

where $a _ { 0 } = 5.3 \times 10 ^ { - 11 } \mathrm {~m}$ is called the Bohr radius; these are the allowed orbit radii. To get the energies, we use the standard result for circular motion with an inverse square force that the total energy is half the potential energy, so

$$
E = - \frac { e ^ { 2 } } { 8 \pi \epsilon _ { 0 } r } = - \frac { m e ^ { 4 } } { 2 \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } \frac { 1 } { n ^ { 2 } } .
$$

Evidently, they get more and more closely spaced together as $n$ increases. The big constant in front is called the Rydberg, and is equal to 13.6 eV.
[1] Problem 7. Find the energy levels of positronium, a bound state of a positron and electron.
Solution. You can do this through an explicit analysis very similar to the example. On the other hand, we can also use the idea of reduced mass introduced in M6. The reduced mass of positronium


is $m / 2$, so replacing $m$ with $m / 2$ in the example's answer gives
$$
E = - \frac { m e ^ { 4 } } { 4 \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } \frac { 1 } { n ^ { 2 } } .
$$
[2] Problem 8 (USAPhO 2004). Electrons are accelerated from rest through a potential $V$ into a cloud of cold atomic hydrogen. A series of plates with aligned holes select a beam of scattered electrons moving perpendicular to the plates. Immediately beyond the final plate, the electrons enter a uniform magnetic field $B$ perpendicular to the beam; they curve and strike a piece of film mounted on the final plate.
![](../../../figures/solution-ocr/4de848565602a70b8824833c.jpg)
![](../../../figures/solution-ocr/a31604f0517c440f93121dc0.jpg)
When the film is developed, a series of spots is observed. The distances between the hole and the two most distant spots are measured. You may assume that the film is large enough to have intercepted all of the electrons, i.e. that there are no spots farther from the hole than those shown. The number of spots shown is not necessarily accurate.
Make the approximation that the mass of the hydrogen atom is much larger than the mass of the electron. Assume that each electron scatters off only one atom, which is initially in the ground state (lowest energy state) and has negligible thermal velocity. Determine $B , V$, and the total number of spots on the film.
Solution. This is USAPhO 2004, problem B1, and you can check its official solutions.
