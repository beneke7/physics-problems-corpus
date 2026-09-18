---
id: solution-ocr-kevin-zhou-p2sol-p005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 5. If two random variables $X _ { 1 }$ and $X _ { 2 }$ are independent, then

$$
\left\langle X _ { 1 } X _ { 2 } \right\rangle = \left\langle X _ { 1 } \right\rangle \left\langle X _ { 2 } \right\rangle .
$$

Use this result to show that

$$
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right)
$$

which implies that the standard deviation "adds in quadrature",

$$
\sigma _ { X _ { 1 } + X _ { 2 } } = \sqrt { \sigma _ { X _ { 1 } } ^ { 2 } + \sigma _ { X _ { 2 } } ^ { 2 } } .
$$

This is an important result we'll use many times below.
Solution. By definition, we have

$$
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \left\langle \left( X _ { 1 } + X _ { 2 } \right) ^ { 2 } \right\rangle - \left\langle X _ { 1 } + X _ { 2 } \right\rangle ^ { 2 }
$$

Using the properties listed in problem 3,

$$
\begin{aligned}
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) & = \left\langle X _ { 1 } ^ { 2 } \right\rangle + 2 \left\langle X _ { 1 } X _ { 2 } \right\rangle + \left\langle X _ { 2 } ^ { 2 } \right\rangle - \left\langle X _ { 1 } \right\rangle ^ { 2 } - 2 \left\langle X _ { 1 } \right\rangle \left\langle X _ { 2 } \right\rangle - \left\langle X _ { 2 } \right\rangle ^ { 2 } \\
& = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right) + 2 \left( \left\langle X _ { 1 } X _ { 2 } \right\rangle - \left\langle X _ { 1 } \right\rangle \left\langle X _ { 2 } \right\rangle \right)
\end{aligned}
$$

When $X _ { 1 }$ and $X _ { 2 }$ are independent, the last term vanishes, giving

$$
\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right) .
$$

## 2 Uncertainty Propagation

Idea 2
When a physical quantity is measured in an experiment and reported as $x \pm \Delta x$, it is uncertain what the true value of the quantity is. If the quantity has a probability distribution $p ( x )$, then the reported uncertainty $\Delta x$ is essentially the standard deviation of $p ( x )$.

Remark
You can use intuition and experience to assign uncertainties to real measurements. For example, if you're using a clock that times only to the nearest second, you might take $\Delta t = 0.5 \mathrm {~s}$. If you're using a good ruler, which has millimeter markings, you might take


$\Delta x = 0.5 \mathrm {~mm}$. Of course, the ultimate test is the results: if you assigned the uncertainties right, your final uncertainty should encompass the true result most (but not all) of the time.
