---
id: solution-ocr-kevin-zhou-xrevsol-p024
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-xrev-p024]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 24. Consider a typical small LC circuit, with $L = 10 ^ { - 7 } \mathrm { H }$ and $C = 10 ^ { - 11 } \mathrm {~F}$.
    (a) If the circuit is at zero temperature, estimate the voltage uncertainty across the capacitor.
    (b) Do the same if the circuit is at room temperature.

Today, some of the leading quantum computing hardware is based on such circuits. Because thermal fluctuations would ruin the desired quantum mechanical effects, the circuit must be cooled so that $k _ { B } T \ll \hbar \omega$, which corresponds to a small fraction of a degree. When you see pictures of quantum computers, most of what you're looking at is the fridge!

Solution. (a) In this problem, it's not clear how to use Heisenberg's uncertainty principle, because we don't know what the "position" and "momentum" for an LC circuit are. (It turns out the position variable is the flux through the inductor and the momentum variable is the charge on the capacitor, but this is hard to guess with high school knowledge.) But we do know that an LC circuit behaves just like a harmonic oscillator, so when it is quantized, it has energy $\hbar \omega / 2$ in the ground state. This must manifest in terms of voltage and current uncertainties,

$$
\hbar \omega \sim C ( \Delta V ) ^ { 2 } + L ( \Delta I ) ^ { 2 }
$$

where we drop all constants for brevity. We know from an example in X1 that for the harmonic oscillator, these two contributions are equal. Therefore, by order of magnitude we have

$$
\Delta V \sim \sqrt { \frac { \hbar \omega } { C } } , \quad \omega = \frac { 1 } { \sqrt { L C } } .
$$

If you didn't manage to do the steps above, this final result can also be found by pure dimensional analysis. Plugging in the numbers gives $\Delta V \sim 10 ^ { - 7 } \mathrm {~V}$, which is surprisingly high!

(b) At zero temperature, the energy in the circuit is of order $\hbar \omega$, while at room temperature, it's $k _ { B } T$ by the equipartition theorem. Plugging in the numbers, we have
$$
\frac { k _ { B } T } { \hbar \omega } = 4 \times 10 ^ { 4 } .
$$
Since energy is proportional to $V ^ { 2 }$, the voltage uncertainty is 200 times higher,
$$
\Delta V \sim 2 \times 10 ^ { - 5 } \mathrm {~V} .
$$
This is the typical noise you expect to see on a good oscilloscope. In electrical engineering, this kind of thermal noise is called "Johnson noise".
[2] Problem 25. INPhO 2013, problem 2. A short problem on X-ray diffraction.

To finish up, here are three neat questions that each cover a broad range of topics.

[5] Problem 26. IPhO 2009, problem 3. Estimating the size of a star from scratch.
[5] Problem 27. IPhO 2021, problem 3. Molecular fluorescence and optical lattices.
[5] Problem 28. USA Team Selection Test 2021, problem 2. A full analysis of a real dark matter detector.


## Remark

Problem 26 estimates the size of a star using a rough treatment of the nuclear physics we know applies at its core. When you think about it, it's amazing that this is possible at all. There is essentially no way to directly probe what's going on inside any star. We can basically only measure the size of the star, its rough age, and the temperature of its surface. But the models work! This was the result of generations of painstaking effort, which stimulated progress in both nuclear and particle physics. To learn the history of solar modeling, see this article for the early days and this article for the eventual triumph. For more estimates of the sizes of astronomical objects, see this article.

It is even more remarkable when you realize that this sort of story applies to essentially all of the dozens of known types of astronomical objects. For most of these, astronomers can directly measure only the electromagnetic spectrum and its variation over time, but that little is enough to develop and test detailed physical models. Most people think astronomy is very concrete, because they constantly see stars in the night sky, and flashy "artist's impression" graphics on the internet. But the field is actually extremely theoretical, with every insight won through extensive calculation.
