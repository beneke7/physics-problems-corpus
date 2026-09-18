---
id: solution-ocr-nbpho-2015-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2015_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2015-electric-field]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 8. ELECTRIC FIELD

i) By the Biot-Savart law, every piece of the ring with length and direction $\mathrm { d } \vec { l }$ creates a magnetic field $\mathrm { d } \vec { B } = \frac { \mu _ { 0 } I \mathrm { I } \overrightarrow { \mathrm { l } } \times \hat { a } } { 4 \pi a ^ { 2 } }$, where $\vec { a }$ is the displacement vector from the piece to the point where we are calculating $\vec { B }$, and $\hat { a } = \vec { a } / a$. By symmetry, the magnetic field on the $z$-axis adds up to being exactly along the $z$-axis, because the perpendicular components cancel out. $\mathrm { d } B _ { z }$ is proportional to $\mathrm { d } l$ and $\mathrm { d } \vec { l } \perp \hat { a }$. The vector $\mathrm { d } \vec { l } \times \hat { a }$ is at an angle $\alpha = \arctan \frac { r } { z }$ from the horizontal. Therefore we can add up the contributions and write $B ( z ) = \frac { \mu _ { 0 } I \times 2 \pi R \sin \alpha } { 4 \pi \left( z ^ { 2 } + R ^ { 2 } \right) } = \frac { \mu _ { 0 } I R ^ { 2 } } { 2 \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 3 / 2 } }$. The field is along the $z$-axis.
ii) The electric field measured by a charged observer must be in the same direction as the Lorentz force acting on the observer in the laboratory frame of reference. Therefore the electric fieldlines are circles around the $z$ axis. Now we may apply Faraday's induction law to such a circle, as it approaches the ring: the total electromotive force $E ( z , r ) \times 2 \pi r =$ $\dot { \Phi } = - \frac { \mathrm { d } \Phi } { \mathrm { d } z } v \approx - \frac { \mathrm { d } } { \mathrm { d } z } B ( z ) \times \pi r ^ { 2 } \times v \Longrightarrow E ( z , r ) =$ $- \frac { r v } { 2 } B ^ { \prime } ( z ) = \frac { 3 \mu _ { 0 } I r R ^ { 2 } v z } { 4 \left( z ^ { 2 } + R ^ { 2 } \right) ^ { 5 / 2 } }$.
