---
id: solution-ocr-kevin-zhou-m6sol-ex012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-ex012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 12

The Eotvos effect is the fact that the apparent weight of an object on Earth depends on its motion. How large is this effect at latitude $\phi$, and what directions of motion have an effect?

## Solution

The Eotvos effect is due to the Coriolis force. As we mentioned in the previous example, the angular velocity of the Earth points out of the north pole. For concreteness, let's suppose we're in the northern hemisphere, $\phi > 0$. Then a object moving east with speed $v$ will yield an outward Coriolis force $2 m \omega v$, making the apparent weight lighter, while a westward velocity will make the apparent weight heavier. (Moving north or south, or up and down, just deflects the object east or west.) Eotvos first measured this effect in the lab in the 1910s, by rotating a balance. It must be accounted for by surveys of $g$, which are used to find oil deposits.

## Example 13

Explain where the factor of 2 in the Coriolis force comes from, working in an inertial frame.

## Solution

For concreteness, consider a rotating cylindrical space station of radius $R$ with angular velocity $\omega$. An astronaut initially stands on its rim, then jumps upward, picking up an inward radial velocity $u$ in the space station's rotating frame. The Coriolis force implies that the astronaut will have tangential acceleration $2 \omega u$.

In an inertial frame, this 2 comes from the combination of two effects of equal magnitude. Let $v = \omega R$ be the initial tangential velocity of the astronaut in this frame. As the astronaut moves radially inward, angular momentum conservation implies that their tangential velocity increases, so that after a time $d t$ it is

$$
\omega R \frac { R } { R - u d t } = \omega R + \omega u d t .
$$

In addition, the tangential speed of the rotating frame at the astronaut decreases, to

$$
\omega ( R - u d t ) = \omega R - \omega u d t .
$$

The relative tangential acceleration is thus $2 \omega u$, giving the desired result.
