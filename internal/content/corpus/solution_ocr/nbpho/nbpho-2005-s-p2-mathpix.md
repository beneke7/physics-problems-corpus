---
id: solution-ocr-nbpho-2005-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2005-magnetic-break]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2. Magnetic brake

1) Sleeper is a simple cylindrical conductor:

$$
R = \frac { \rho h } { \left( \frac { \delta } { 2 } \right) ^ { 2 } \pi } \approx 5.59 m \Omega
$$

2) Length of the railway element is $\alpha R$, hence the resistance is $R _ { 2 } =$ $\alpha R$. Main ideas: first - we can imagine that railway is infinite; second - the resistance $\left( R _ { R } \right)$ of this infinit array remain same even if we cut of one periodic element. Hence,

$$
R _ { R } = \frac { R \left( 2 R _ { 2 } + R _ { R } \right) } { 2 R _ { 2 } + R _ { R } + R } .
$$

After solving the equation

$$
R _ { R } = - R _ { 2 } \pm \sqrt { R _ { 2 } ^ { 2 } + 2 R _ { 2 } R } = \sqrt { R _ { 2 } ^ { 2 } + 2 R _ { 2 } R } - R _ { 2 }
$$

and noting that the negative solution of the equation has to be dropped (it does not have physical meaning), we arrive at

$$
R _ { R } = R ( \sqrt { \alpha ( \alpha + 2 ) } - \alpha ) .
$$

3) Important ideas:
- electromotive force is generated when conductors move in magnetic field;
- There is always two sleepers moving between magnets (in magnetic field);
- Those sleepers act as a sources of electromotive force (like a battery);
- those sleepers also have internal resistance $R$.

Notice also that we can take account symmetry and connect points with equal potential; this allows us later to simplify cyclic railway to previously solved infinite (actually, very long) railway. We can also see that there is no current between the two sleepers residing in the magnetic field (there is no potential difference), hence we can disconnect them. So, we can obtain two indipendent (almost) infinite railways and both have their own source of elecromotive force.
![](../../../figures/solution-ocr/6a8d6dc8fec090998d73b34d.jpg)
4) Electromotive force in the sleeper is $\mathcal { E } = B v h$. Energy is dissipated into heat $P = \frac { \mathcal { E } ^ { 2 } } { R _ { \text {circuit } } }$. where $R _ { \text {circuit } } = \frac { 1 } { 2 } \left( R _ { R } + 2 \alpha R + R \right)$,

$$
R _ { \text {circuit } } = \frac { 1 } { 2 } R ( \sqrt { \alpha ( 2 + \alpha ) } + \alpha + 1 ) .
$$

Consequently

$$
P = \frac { 2 B ^ { 2 } \omega ^ { 2 } r ^ { 2 } h ^ { 2 } } { R ( \sqrt { \alpha ( 2 + \alpha ) } + \alpha + 1 ) }
$$

Eventually,

$$
k = \frac { 2 r ^ { 2 } h ^ { 2 } } { \sqrt { \alpha ( 2 + \alpha ) } + \alpha + 1 } \approx 2.12 \times 10 ^ { - 6 } .
$$

5) Since the power equls to $M \omega = P$, the torqe can be found as

$$
M = \frac { P } { \omega } = \frac { 2 B ^ { 2 } \omega r ^ { 2 } h ^ { 2 } } { R ( \sqrt { \alpha ( 2 + \alpha ) } + \alpha + 1 ) } \approx 0.39 \mathrm { mNm } .
$$

6) Disc has a momentum of inertia eual to $I = \frac { 1 } { 2 } m r ^ { 2 }$; the angular acceleration $\varepsilon = \frac { M } { I } = \frac { d \omega } { d t }$. Consequently (using decelerating M),

$$
\frac { k B ^ { 2 } \omega } { I R } = - \frac { d \omega } { d t } .
$$

If we group the variables $I$ and $t$ into different side of the equation, we obtain

$$
\frac { k B ^ { 2 } } { I R } d t = \frac { d \omega } { \omega } .
$$

Integrating the both sides of the equation yields

$$
\int _ { 0 } ^ { t } \frac { k B ^ { 2 } } { I R } d t = - \int _ { \omega _ { 0 } } ^ { \omega } \frac { d \omega } { \omega } \Rightarrow \frac { k B ^ { 2 } } { I R } t = - \ln \frac { \omega } { \omega _ { 0 } }
$$

$\omega = \omega _ { 0 } e ^ { - \frac { k B ^ { 2 } } { 1 R } } t$, and finally $\tau = \frac { I R } { k B ^ { 2 } } \approx 2.9 s$.
