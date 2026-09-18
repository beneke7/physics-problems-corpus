---
id: solution-ocr-kevin-zhou-x1sol-p014
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p014]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 14. Consider a particle of mass $m$ in the potential $V ( x , y ) = k r ^ { 2 } / 2$. This is the twodimensional analogue of problem 4. It is also the potential experienced by an electron in the obsolete "plum pudding" model of the atom, where they are embedded in a ball of uniform charge density.
    (a) By working in Cartesian coordinates, find all of the energy levels, as well as the number of states within each energy level, called the degeneracy.
    (b) [A] Now repeat the exercise in polar coordinates. In this case the integrals
$$
\oint p _ { r } d r , \quad \oint L d \theta
$$
are quantized. Find the energy levels and their degeneracies. Note that for the radial motion, you will have to use the effective potential, as covered in M6. You will run into a difficult integral, so you may use the fact that
$$
\int _ { C - \sqrt { C ^ { 2 } - D ^ { 2 } } } ^ { C + \sqrt { C ^ { 2 } - D ^ { 2 } } } d x \sqrt { \frac { 2 C } { x } - \frac { D ^ { 2 } } { x ^ { 2 } } - 1 } = ( C - | D | ) \pi
$$
valid for $| D | \leq C$. How does your answer compare to that of part (a)?

Solution. (a) Let $\omega = \sqrt { k / m }$. As always, each direction contributes energy $\hbar \omega ( n + 1 / 2 )$, so the total energy is $\hbar \omega \left( n _ { x } + n _ { y } + 1 \right)$. The number of states with energy $\hbar \omega n$ is the number of solutions to $n _ { x } + n _ { y } = n - 1$, which is simply $n$.

(b) By conservation of energy and angular momentum, we have
$$
E = \frac { 1 } { 2 } k r ^ { 2 } + \frac { 1 } { 2 } m \left( \dot { r } ^ { 2 } + v _ { \theta } ^ { 2 } \right) = \frac { 1 } { 2 } k r ^ { 2 } + \frac { L ^ { 2 } } { 2 m r ^ { 2 } } + \frac { p _ { r } ^ { 2 } } { 2 m } .
$$
Quantizing the angular motion gives
$$
\oint L d \theta = 2 \pi L = n _ { \theta } h
$$
which means $L = n _ { \theta } \hbar$ as usual. Let $a \leq r \leq b$ where $\dot { r } = 0$ at $r = a$ or $r = b$. Then quantizing the radial motion (accounting for two "soft" boundaries) gives
$$
\left( n _ { r } + 1 / 2 \right) h = 2 \int _ { a } ^ { b } d r \sqrt { 2 m E - \frac { n _ { \theta } ^ { 2 } \hbar ^ { 2 } } { r ^ { 2 } } - \omega ^ { 2 } m ^ { 2 } r ^ { 2 } }
$$
To clean this up a bit, let's set $\hbar = k = m = 1$ for now and put them back by dimensional analysis at the end. Then the equation reduces to
$$
2 \pi \left( n _ { r } + 1 / 2 \right) = 2 \int _ { a } ^ { b } d r \sqrt { 2 E - \frac { n _ { \theta } ^ { 2 } } { r ^ { 2 } } - r ^ { 2 } }
$$
By substituting $u = r ^ { 2 }$ we find
$$
2 \pi \left( n _ { r } + 1 / 2 \right) = 2 \int _ { a ^ { \prime } } ^ { b ^ { \prime } } \frac { d u } { 2 \sqrt { u } } \sqrt { 2 E - \frac { n _ { \theta } ^ { 2 } } { u } - u } = \int _ { a ^ { \prime } } ^ { b ^ { \prime } } d u \sqrt { \frac { 2 E } { u } - \frac { n _ { \theta } ^ { 2 } } { u ^ { 2 } } - 1 }
$$
where $a ^ { \prime }$ and $b ^ { \prime }$ are the zeroes of the quantity inside the square root,
$$
a ^ { \prime } = E - \sqrt { E ^ { 2 } - n _ { \theta } ^ { 2 } } , \quad b ^ { \prime } = E + \sqrt { E ^ { 2 } - n _ { \theta } ^ { 2 } } .
$$
This incidentally shows that we need $\left| n _ { \theta } \right| \leq E$ for the result to make sense. Using the provided integral, we find
$$
2 \pi \left( n _ { r } + 1 / 2 \right) = \left( E - \left| n _ { \theta } \right| \right) \pi .
$$
The constraint $\left| n _ { \theta } \right| \leq E$ then translates to $n _ { r } \geq 0$, which makes sense. Solving for $E$ gives the final result,
$$
E = 2 n _ { r } + \left| n _ { \theta } \right| + 1 .
$$
By dimensional analysis, the right-hand side needs a factor of $\hbar \omega$ to become an energy, so
$$
E = \hbar \omega \left( 2 n _ { r } + \left| n _ { \theta } \right| + 1 \right) .
$$
The result is identical to that of part (a). The lowest energy level is $E = \hbar \omega$, corresponding to $\left( n _ { r } , n _ { \theta } \right) = ( 0,0 )$. The next is $E = 2 \hbar \omega$, corresponding to $\left( n _ { r } , n _ { \theta } \right) = ( 0 , \pm 1 )$. The next is $E = 3 \hbar \omega$, corresponding to $\left( n _ { r } , n _ { \theta } \right) = ( 1,0 )$ or (0, ±2), and so on.

Remark
Sommerfeld applied an analysis like that of part (b) of problem 14 to the Bohr model, yielding the semiclassical orbits which are ellipses with the nucleus at the focus. (In fact, if you're so inclined, you can do this too, using the same provided integral.) This accounted for the quantum numbers $n$ and $\ell$ in hydrogen. The quantum number $m$ comes from additionally quantizing $L _ { z }$, which implies that the elliptical orbits can only occur in certain planes, an idea known as "space quantization". Sommerfeld even managed to compute relativistic corrections to the energy levels.

With all this included, the Bohr theory provides a complete description of the energy levels of hydrogen, except that (1) the $\ell = 0$ orbitals are missing, since they would have to go straight through the nucleus, (2) space quantization seems artificial and breaks rotational symmetry, and (3) the number of states isn't quite right, a deficiency that would later be fixed by including spin. Many complicated attempts were made to patch these problems, or to extend the theory to multi-electron atoms, but they were forgotten after the modern theory of quantum mechanics (in terms of the Schrodinger equation) appeared.

However, what you've learned above is not completely irrelevant today. The correspondence principle is the idea that quantum results should smoothly transition to classical ones in the limit $\hbar \rightarrow 0$, which in this context means sending the quantum numbers to infinity. And that's exactly what happens. For high quantum numbers, you can superpose atomic orbitals of nearby energy to create a sharply peaked wavefunction, just like how we could create wavepackets from plane waves in $\mathbf { W 1 }$. These peaks act like localized classical particles, following the Bohr model's orbits. Thus, the Bohr model is still useful for studying Rydberg atoms, which are hydrogen-like atoms excited to very high energy levels. For some more discussion of Sommerfeld's results, see this paper.

[3] Problem 15 (Cahn). A crude model of an electron bound to an atom is a particle of mass $m$ attached to a one-dimensional spring, with spring constant $k$ and hence angular frequency $\omega = \sqrt { k / m }$. Consider two such atoms.
    (a) Write down the energy levels of the system, assuming the atoms are completely independent. How many states correspond to each energy?
    (b) Let the electrons have positions $x _ { i }$ relative to their respective equilibrium positions. Now suppose the atoms are brought close together, causing the electrons to repel. For simplicity, we represent this in terms of an extra potential energy term $k ^ { \prime } x _ { 1 } x _ { 2 }$, where $k ^ { \prime }$ is small. Find the new energy levels of the system exactly. (Hint: this can be done with a clever change of variables. However, you have to be careful because changing to new coordinates $x _ { i } ^ { \prime }$ also requires changing the momenta; after all, if we didn't, then the quantization condition of idea 2 would change, leading to different energy levels! If $K$ is the kinetic energy, and you are using position variables $x _ { i }$, then the momenta should be defined as $p _ { i } = \partial K / \partial \dot { x } _ { i }$.)
    (c) Your answer should not make sense for large $k ^ { \prime }$. Physically, what is going on?

Part (b) gives a simple example of how energy levels "split" in the presence of interactions.


Solution. (a) This is just two copies of an ordinary harmonic oscillator, so $E _ { n , m } = \hbar \omega ( n + m + 1 )$ for $n , m \geq 0$. The lowest energy has one corresponding state $( n = m = 0 )$, the next one has two $( ( n , m ) = ( 1,0 )$ or $( 0,1 ) )$, the next has three, and so on.

(b) The energy of the system has the form
$$
E = \frac { p _ { 1 } ^ { 2 } } { 2 m } + \frac { p _ { 2 } ^ { 2 } } { 2 m } + \frac { 1 } { 2 } k x _ { 1 } ^ { 2 } + \frac { 1 } { 2 } k x _ { 2 } ^ { 2 } + k ^ { \prime } x _ { 1 } x _ { 2 } .
$$
This can be brought into a simplified form by expanding in normal modes, just as you saw in M4. Specifically, we define
$$
y _ { 1 } = \frac { x _ { 1 } + x _ { 2 } } { \sqrt { 2 } } , \quad y _ { 2 } = \frac { x _ { 1 } - x _ { 2 } } { \sqrt { 2 } } .
$$
The corresponding momenta, defined as suggested in the hint, are
$$
p _ { 1 } ^ { \prime } = \frac { p _ { 1 } + p _ { 2 } } { \sqrt { 2 } } , \quad p _ { 2 } ^ { \prime } = \frac { p _ { 1 } - p _ { 2 } } { \sqrt { 2 } } .
$$
In terms of these new variables, we have
$$
E = \frac { { p _ { 1 } ^ { \prime } } ^ { 2 } } { 2 m } + \frac { { p _ { 2 } ^ { \prime } } ^ { 2 } } { 2 m } + \frac { 1 } { 2 } \left( k + k ^ { \prime } \right) y _ { 1 } ^ { 2 } + \frac { 1 } { 2 } \left( k - k ^ { \prime } \right) y _ { 2 } ^ { 2 } .
$$
But this is just the form of two independent harmonic oscillators, with resonant angular frequencies $\sqrt { \left( k \pm k ^ { \prime } \right) / m }$. So the energy levels are
$$
E _ { n , m } = \frac { \hbar } { \sqrt { m } } \left( ( n + 1 / 2 ) \sqrt { k + k ^ { \prime } } + ( m + 1 / 2 ) \sqrt { k - k ^ { \prime } } \right) .
$$
This can be written a bit more simply by Taylor expanding, which gives
$$
E _ { n , m } \approx \hbar \omega \left( n \left( 1 + \frac { k ^ { \prime } } { 2 k } \right) + m \left( 1 - \frac { k ^ { \prime } } { 2 k } \right) + 1 \right) = \hbar \omega \left( ( n + m + 1 ) + ( n - m ) \frac { k ^ { \prime } } { 2 k } \right) .
$$
In other words, an energy level that contains $N$ states splits into $N$ separate, closely spaced energy levels. This behavior is ubiquitous in quantum mechanics. This trick of turning everything into a bunch of independent quantum harmonic oscillators by using normal modes is also very important; it'll basically be the bedrock of many graduate physics courses.
(c) For $k ^ { \prime } > k$, the energy becomes an imaginary number. When $k ^ { \prime }$ is this big, the repulsion between the electrons is so strong that they both just shoot off to infinity in opposite directions. That is, the energy is not bounded below; the energy can be lowered to negative infinity by increasing the separation. That means the electrons are not bound at all, so there aren't discrete energy levels.
