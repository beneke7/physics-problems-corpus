---
id: solution-ocr-kevin-zhou-x1sol-p029
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p029]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 29. Here we continue the analysis in problem 20, to derive degeneracy pressure.

(a) Suppose $N \gg 1$ nonrelativistic neutrons are in the box. Neutrons are fermions. Neglecting interactions between the neutrons, estimate the minimum possible pressure on the walls. How does it scale with the number density $n = N / V$ ?
(b) Now suppose $n$ is so high that most of the neutrons are ultrarelativistic, $E \approx p c$. In this case, how does the pressure scale with $n$ ?

The degeneracy pressure of neutrons keeps neutron stars from collapsing, and the degeneracy pressure of electrons keeps white dwarfs from collapsing. We'll investigate them more in X3.

Solution. (a) It's cleanest to start from the end of part (c) of problem 20. Tracking the $n _ { i }$ dependence, we have

$$
E _ { \mathbf { n } } = \frac { \pi ^ { 2 } } { 2 } \frac { \hbar ^ { 2 } } { m V ^ { 2 / 3 } } n ^ { 2 } , \quad n ^ { 2 } = n _ { x } ^ { 2 } + n _ { y } ^ { 2 } + n _ { z } ^ { 2 }
$$

where we're treating the $n _ { i }$ like the components of a vector. This contributes a pressure

$$
P _ { \mathbf { n } } = \frac { \pi ^ { 2 } } { 3 } \frac { \hbar ^ { 2 } } { m V ^ { 5 / 3 } } n ^ { 2 } .
$$

Just as in example 2, an eighth of a sphere of $\mathbf { n }$ values is filled, where for $N$ particles in total, the radius $n _ { \text {max } }$ of the sphere obeys

$$
N = \frac { 1 } { 8 } \left( \frac { 4 } { 3 } \pi n _ { \max } ^ { 3 } \right)
$$

which tells us that

$$
n _ { \max } = \sqrt [ 3 ] { \frac { 6 N } { \pi } } .
$$


The total pressure can be found by summing over all the lattice points within this eighth of a sphere. Since $N$ is large, this sum can be approximated as an integral,
$$
P = \int _ { 0 } ^ { n _ { \max } } \frac { 4 \pi n ^ { 2 } d n } { 8 } P _ { \mathbf { n } } = \frac { \pi ^ { 3 } \hbar ^ { 2 } } { 6 m V ^ { 5 / 3 } } \int _ { 0 } ^ { n _ { \max } } n ^ { 4 } d n = \frac { \pi ^ { 3 } \hbar ^ { 2 } } { 30 m d ^ { 5 } } \left( \frac { 6 N } { \pi } \right) ^ { 5 / 3 } \sim \frac { \hbar ^ { 2 } n ^ { 5 / 3 } } { m } .
$$
Thus, the degeneracy pressure scales as $n ^ { 5 / 3 }$. Again, we could get the same result using periodic boundary conditions, or immediately from dimensional analysis.
(b) In the ultrarelativistic limit, the answer can depend on $c$ but not on $m$, so we must have $P \sim \hbar c n ^ { 4 / 3 }$ by dimensional analysis. Of course, you could also get this by repeating the analysis of part (a). The fact that the pressure now depends on $n ^ { 4 / 3 }$ rather than $n ^ { 5 / 3 }$ is a key factor governing the stability of white dwarfs.

[3] Problem 30 (MIT). [A] This is an advanced problem that is only placed here because the final result is neat. An integer $N$ can be partitioned by writing it as a sum of positive integers, and the partition function $p ( N )$ is the number of unique ways this can be done. For example,

$$
4 = 1 + 1 + 1 + 1 = 1 + 1 + 2 = 2 + 2 = 1 + 3 = 4
$$

which implies $p ( 4 ) = 5$. Counting the number of partitions of an integer is a very hard combinatorics problem, but we can get an estimate for large $N$ using string theory.

(a) Consider an ideal string with hard boundary conditions and fundamental angular frequency $\omega$. Show that the number of distinct quantum states with energy $N \hbar \omega$ is $p ( N )$.
(b) Now suppose the string is at temperature $T$, where $T$ is chosen so that the expected energy is $N \hbar \omega$. In the thermodynamic limit $N \gg 1$, find a relation between $N$ and $T$. You may use the result $\zeta ( 2 ) = \pi ^ { 2 } / 6$.
(c) By approximating the entropy as $S \approx k _ { B } \log p ( N )$, show that
$$
\frac { \hbar \omega } { k T } = \frac { d \log p ( N ) } { d N } .
$$
Combine this with your previous result to find an estimate for $p ( N )$.

To check your answer, the celebrated Hardy-Ramanujan formula (which is more accurate than the very rough treatment we give above) is

$$
p ( N ) \sim \frac { 1 } { 4 \sqrt { 3 } N } \exp \left( \pi \sqrt { \frac { 2 N } { 3 } } \right) .
$$

While we only considered a simple nonrelativistic string here, calculations of this sort show up in the thermodynamics of string theory. For further discussion, see chapter 22 of Zwiebach.

Solution. (a) The modes of the string have angular frequencies $m \omega$, which means that upon quantization, each quantum in mode $m$ will have energy $m \hbar \omega$. Thus, putting in quanta to reach total energy $N \hbar \omega$ is the same as building a partition of $N$ out of integers $m$. For example, $4 = 1 + 1 + 1 + 1$ corresponds to putting 4 quanta in the fundamental mode, while $4 = 4$ corresponds to putting 1 quantum in the fourth harmonic.


(b) By borrowing some results from previous problems, we have
$$
N = \sum _ { m } \frac { m } { e ^ { m \hbar \omega / k T } - 1 } \approx \int _ { 0 } ^ { \infty } \frac { m d m } { e ^ { m \hbar \omega / k T } - 1 }
$$
We have already done a similar integral in problem 25, and using the same trick of expanding the denominator in a Taylor series and integrating term by term gives
$$
N \approx \frac { \pi ^ { 2 } } { 6 } \left( \frac { k T } { \hbar \omega } \right) ^ { 2 } .
$$
(c) Using the definition of temperature,
$$
T = \frac { d E } { d S } = \frac { \hbar \omega } { k } \frac { d N } { d \log p ( N ) } .
$$
Rearranging slightly gives the desired result. Eliminating $T$ using the above result,
$$
\frac { d \log p } { d N } \approx \frac { \pi } { \sqrt { 6 N } } .
$$
Separating and integrating,
$$
\log p ( N ) \sim \int _ { 0 } ^ { N } \frac { \pi } { \sqrt { 6 N } } d N = \pi \sqrt { \frac { 2 N } { 3 } }
$$
which agrees with the Hardy-Ramanujan formula. (Of course, this only gets the leading term right, because we made approximations. The most severe approximation we did was taking $S \approx k _ { B } \log p ( N )$. In reality, the energy at a given temperature is not fixed, but rather has fluctuations, so we should have instead summed $p ( n )$ for a range of $n$ near $N$.)
