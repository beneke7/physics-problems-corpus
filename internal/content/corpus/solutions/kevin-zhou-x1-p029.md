---
id: kevin-zhou-x1-p029
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p029
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

[3] Problem 29. Here we continue the analysis in problem 20, to derive degeneracy pressure.
(a) Suppose N ≫ 1 nonrelativistic neutrons are in the box. Neutrons are fermions. Neglecting
interactions between the neutrons, estimate the minimum possible pressure on the walls. How
does it scale with the number density n = N/V ?
(b) Now suppose n is so high that most of the neutrons are ultrarelativistic, E ≈ pc. In this case,
how does the pressure scale with n?
The degeneracy pressure of neutrons keeps neutron stars from collapsing, and the degeneracy
pressure of electrons keeps white dwarfs from collapsing. We’ll investigate them more in X3.
Solution. (a) It’s cleanest to start from the end of part (c) of problem 20. Tracking the ni
dependence, we have
En =
π2
2
ℏ2
mV 2/3
n2
, n2
= n2
x + n2
y + n2
z
where we’re treating the ni like the components of a vector. This contributes a pressure
Pn =
π2
3
ℏ2
mV 5/3
n2
.
Just as in example 2, an eighth of a sphere of n values is filled, where for N particles in total,
the radius nmax of the sphere obeys
N =
1
8

4
3
πn3
max

which tells us that
nmax =
3
r
6N
π
.
25
Kevin Zhou Physics Olympiad Handouts
The total pressure can be found by summing over all the lattice points within this eighth of a
sphere. Since N is large, this sum can be approximated as an integral,
P =
Z nmax
0
4πn2 dn
8
Pn =
π3ℏ2
6mV 5/3
Z nmax
0
n4
dn =
π3ℏ2
30md5

6N
π
 5/3
∼
ℏ2n5/3
m
.
Thus, the degeneracy pressure scales as n5/3. Again, we could get the same result using
periodic boundary conditions, or immediately from dimensional analysis.
(b) In the ultrarelativistic limit, the answer can depend on c but not on m, so we must have
P ∼ ℏcn4/3 by dimensional analysis. Of course, you could also get this by repeating the
analysis of part (a). The fact that the pressure now depends on n4/3 rather than n5/3 is a key
factor governing the stability of white dwarfs.
[3] Problem 30 (MIT). [A] This is an advanced problem that is only placed here because the final
result is neat. An integer N can be partitioned by writing it as a sum of positive integers, and the
partition function p(N) is the number of unique ways this can be done. For example,
4 = 1 + 1 + 1 + 1 = 1 + 1 + 2 = 2 + 2 = 1 + 3 = 4
which implies p(4) = 5. Counting the number of partitions of an integer is a very hard combinatorics
problem, but we can get an estimate for large N using string theory.
(a) Consider an ideal string with hard boundary conditions and fundamental angular frequency
ω. Show that the number of distinct quantum states with energy Nℏω is p(N).
(b) Now suppose the string is at temperature T, where T is chosen so that the expected energy
is Nℏω. In the thermodynamic limit N ≫ 1, find a relation between N and T. You may use
the result ζ(2) = π2/6.
(c) By approximating the entropy as S ≈ kB logp(N), show that
ℏω
kT
=
dlogp(N)
dN
.
Combine this with your previous result to find an estimate for p(N).
To check your answer, the celebrated Hardy–Ramanujan formula (which is more accurate than the
very rough treatment we give above) is
p(N) ∼
1
4
√
3N
exp π
r
2N
3
!
.
While we only considered a simple nonrelativistic string here, calculations of this sort show up in
the thermodynamics of string theory. For further discussion, see chapter 22 of Zwiebach.
Solution. (a) The modes of the string have angular frequencies mω, which means that upon
quantization, each quantum in mode m will have energy mℏω. Thus, putting in quanta to
reach total energy Nℏω is the same as building a partition of N out of integers m. For
example, 4 = 1 + 1 + 1 + 1 corresponds to putting 4 quanta in the fundamental mode, while
4 = 4 corresponds to putting 1 quantum in the fourth harmonic.
26
Kevin Zhou Physics Olympiad Handouts
(b) By borrowing some results from previous problems, we have
N =
X
m
m
emℏω/kT − 1
≈
Z ∞
0
mdm
emℏω/kT − 1
.
We have already done a similar integral in problem 25, and using the same trick of expanding
the denominator in a Taylor series and integrating term by term gives
N ≈
π2
6

kT
ℏω
 2
.
(c) Using the definition of temperature,
T =
dE
dS
=
ℏω
k
dN
dlogp(N)
.
Rearranging slightly gives the desired result. Eliminating T using the above result,
dlogp
dN
≈
π
√
6N
.
Separating and integrating,
logp(N) ∼
Z N
0
π
√
6N
dN = π
r
2N
3
which agrees with the Hardy–Ramanujan formula. (Of course, this only gets the leading term
right, because we made approximations. The most severe approximation we did was taking
S ≈ kB logp(N). In reality, the energy at a given temperature is not fixed, but rather has
fluctuations, so we should have instead summed p(n) for a range of n near N.)
