---
id: solution-ocr-kevin-zhou-w2sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w2-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 6. The anti-reflection coating on your glasses consists of a thin layer of material whose index of refraction is between that of air $( n = 1 )$ and glass $( n = 1.5 )$. The coating is designed to eliminate the reflection of green light, $\lambda = 550 \mathrm {~nm}$.
    (a) Accounting for only the two most significant paths for the light, find the minimum possible thickness of the coating, and its index of refraction. (You'll need results for reflection and transmission coefficients from W1 or E8, and a computer to numerically solve an equation.)
    (b) Roughly how much does the next most significant path contribute to the reflected intensity?
Solution. (a) For a general interface, our results in $\mathbf { W 1 }$ for $r$ and $t$ were
$$
r = \frac { v _ { 2 } - v _ { 1 } } { v _ { 1 } + v _ { 2 } } , \quad t = \frac { 2 v _ { 2 } } { v _ { 1 } + v _ { 2 } }
$$
and using $v = c / n$, we have
$$
r = \frac { n _ { 1 } - n _ { 2 } } { n _ { 1 } + n _ { 2 } } , \quad t = \frac { 2 n _ { 1 } } { n _ { 1 } + n _ { 2 } } .
$$
You also derived these results in E8. From that more general derivation, you can see that this only holds if the magnetic permeabilities on both sides are the same, which is indeed an excellent approximation for everyday materials. (The analogous assumption made in the case of a string in $\mathbf { W 1 }$ is that the tension is the same on both sides.)
The two most significant paths are the path with an immediate reflection at the air-coating interface and the path with the only reflection at the coating-glass interface. To eliminate green light, we must arrange for the amplitudes of these paths to be equal, and for their phases to be opposite. For the former, if we let the indices of refraction for air, the coating, and glass be $n _ { a } = 1 , n$, and $n _ { g } = 1.5$ respectively, then we must have
$$
\frac { n _ { a } - n } { n _ { a } + n } = \frac { 2 n _ { a } } { n _ { a } + n } \frac { n - n _ { g } } { n + n _ { g } } \frac { 2 n } { n + n _ { a } } .
$$
Clearing denominators, we have
$$
\left( n ^ { 2 } - n _ { a } ^ { 2 } \right) \left( n + n _ { g } \right) = 4 n \left( n _ { g } - n \right)
$$
and plugging in values and expanding gives
$$
2 n ^ { 3 } + 11 n ^ { 2 } - 14 n - 3 = 0 .
$$
We can solve this numerically to get $n = 1.22$.
Now let's find the thickness $\ell$. Both reflections are at hard boundaries (low to high indices of refraction), so the same $\pi$ shift is applied to both paths. The geometric path length difference is then $2 \ell$, so destructive interference for the lowest possible $\ell$ occurs when
$$
\ell = \frac { \lambda } { 4 n } = 113 \mathrm {~nm} .
$$

(b) The next most significant path has 3 reflections and 2 transmissions, so its amplitude is
$$
A = \frac { 2 n _ { a } } { n _ { a } + n } \frac { n - n _ { g } } { n + n _ { g } } \frac { n - n _ { a } } { n + n _ { a } } \frac { n - n _ { g } } { n + n _ { g } } \frac { 2 n } { n _ { a } + n }
$$
and the numerical value, using our previous answer, is $A _ { 3 } \approx 0.001$, which is the portion of the original amplitude reflected. Thus, the intensity is reduced by a factor of $10 ^ { - 6 }$.
[2] Problem 7 (NBPhO 2004). A thick glass plate is coated by a thin transparent film. The emission spectrum of the system at normal incidence is as shown.
![](../../../figures/solution-ocr/03215a1925bae7e3ad37248c.jpg)
The refractive index of the film is $n = 1.3$. Find the thickness of the film.
