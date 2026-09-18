---
id: solution-ocr-nbpho-2007-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2007_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2007-coefficient-friction]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 4. Coefficient of friction (12 pts)

1) This is a straightforward question: we measure the tangent of the slope of the board, when the brick starts sliding, $\mu _ { 1 } = \tan \alpha _ { 1 }$, for the given setup, $\mu _ { 1 } \approx 0.24$.
2) We put the ball and brick together on the slope, the ball touching both the brick and board and being upwards on the slope. So, the ball pushes the brick down and the sliding is expected to take place for somewhat smaller sloping angles. For the given setup, that critical angle turns out to give $\tan \beta \approx 0.12$.

Now we need to express $\mu$ knowing $\mu _ { 2 } \approx 0.24$ and $\beta =$ arctan 0.12. First we write the torque balance for the ball with respect to the touching pint with the board: $m g R \sin \beta = \mu N R + N R$, where $N$ is the pressure force between the ball and the brick. Hence, $N = \frac { m g } { \mu + 1 } \sin \beta$.

Now, we use the normal (to the board) force balance for the brick, to find the pressure force between the board and the brick: $N _ { 2 } =$ $M g \cos \beta + \frac { \mu m g } { \mu + 1 } \sin \beta$. Finally, we have the tangential force balance for the brick:

$$
\frac { m g } { \mu + 1 } \sin \beta + M g \sin \beta = \mu _ { 2 } g \left( M \cos \beta + \frac { \mu m } { \mu + 1 } \sin \beta \right) .
$$

This equation can be simplified to

$$
\frac { m } { M } + \mu + 1 = \mu _ { 2 } \left[ ( \mu + 1 ) \cot \beta + \mu \frac { m } { M } \right] ,
$$

from where

$$
\mu = \frac { \frac { m } { M } + 1 - \mu _ { 2 } \cot \beta } { \mu _ { 2 } \left( \cot \beta + \frac { m } { M } \right) - 1 }
$$

Using the measured values we get $\mu \approx 0.2$.
