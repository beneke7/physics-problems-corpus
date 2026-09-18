---
id: solution-ocr-usapho-2009-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2009-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

A mixture of ${ } ^ { 32 } \mathrm { P }$ and ${ } ^ { 35 } \mathrm {~S}$ (two beta emitters widely used in biochemical research) is placed next to a detector and allowed to decay, resulting in the data below. The detector has equal sensitivity to the beta particles emitted by each isotope, and both isotopes decay into stable daughters.

You should analyze the data graphically. Error estimates are not required.

| Day | Activity | Day | Activity | Day | Activity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 64557 | 40 | 12441 | 200 | 1121 |
| 5 | 51714 | 60 | 6385 | 250 | 673 |
| 10 | 41444 | 80 | 3855 | 300 | 467 |
| 20 | 27020 | 100 | 2734 |  |  |
| 30 | 18003 | 150 | 1626 |  |  |

a. Determine the half-life of each isotope. ${ } ^ { 35 } \mathrm {~S}$ has a significantly longer half-life than ${ } ^ { 32 } \mathrm { P }$.
b. Determine the ratio of the number of ${ } ^ { 32 } \mathrm { P }$ atoms to the number of ${ } ^ { 35 } \mathrm {~S}$ atoms in the original sample.

## Solution


a. The number of each isotope decays exponentially, $N ( t ) = N _ { S , 0 } 2 ^ { - t / t _ { S } } + N _ { P , 0 } 2 ^ { - t / t _ { P } }$ where $t _ { S }$ and $t _ { P }$ are the half-lives, and $N _ { S , 0 }$ and $N _ { P , 0 }$ are the initial abundances. Because the detector is equally likely to detect any beta particle emitted in a decay, the total activity is proportional to the decay rate,

$$
A ( t ) \propto - \frac { d N } { d t } \propto \frac { N _ { S , 0 } } { t _ { S } } 2 ^ { - t / t _ { S } } + \frac { N _ { P , 0 } } { t _ { P } } 2 ^ { - t / t _ { P } } .
$$

We know that $t _ { S } \gg t _ { P }$, which implies that after a long time, decays of ${ } ^ { 35 } \mathrm {~S}$ will dominate, since by then almost all the ${ } ^ { 32 } \mathrm { P }$ has decayed away. On the other hand, the decay rate of ${ } ^ { 35 } \mathrm {~S}$ is suppressed by a factor of $t _ { S }$, which means that at early times, decays of ${ } ^ { 32 } \mathrm { P }$ dominate.

Therefore, we can find the individual half-lives by fitting a single decaying exponential to the data, at both early and late times, which is equivalent to fitting a line to a plot of $\ln A ( t )$ versus $t$. For the early times, we choose the first five data points; for the late times, we choose the last five data points. The results are shown below.
![](../../../figures/solution-ocr/27ad02ff526d774e123c6b27.jpg)
![](../../../figures/solution-ocr/18bd428f134a39abcf70e3f6.jpg)
The slopes of these lines, in the units used in the plots, are -0.043 and -0.0088, and they should be equal to $- ( \ln 2 ) / t _ { P }$ and $- ( \ln 2 ) / t _ { S }$, respectively. This gives half-lives $t _ { P } = 16$ days and $t _ { S } = 78$ days. Any answer within 10\% of these values is reasonably good.

b. Because the activity is dominated by ${ } ^ { 32 } \mathrm { P }$ at the beginning and ${ } ^ { 35 } \mathrm {~S}$ at the end,
$$
\frac { A ( 300 \text { days } ) } { A ( 0 \text { days } ) } = \frac { N _ { S , 0 } 2 ^ { - ( 300 \text { days } ) / t _ { S } } / t _ { S } } { N _ { P , 0 } / t _ { P } }
$$
which means that
$$
\frac { N _ { P , 0 } } { N _ { S , 0 } } = \frac { A ( 0 \text { days } ) } { A ( 300 \text { days } ) } \frac { t _ { P } } { t _ { S } } 2 ^ { - ( 300 \text { days } ) / t _ { S } } = 2.0 .
$$
Since this final result depends sensitively on your values of $t _ { P }$ and $t _ { S }$, any answer within 25\% is acceptable.
