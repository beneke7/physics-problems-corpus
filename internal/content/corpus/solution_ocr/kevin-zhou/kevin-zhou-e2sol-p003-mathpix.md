---
id: solution-ocr-kevin-zhou-e2sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e2-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 3. Suppose a point charge $q$ is a distance $b$ from the center of a spherical grounded conducting shell of radius $r$.

(a) Find the force on the charge, considering both the cases $b < r$ and $b > r$.
(b) In both cases, what is the total charge on the shell?

Solution. (a) In both cases, the image charge is a distance $b ^ { \prime } = r ^ { 2 } / b$ from the center of the shell, and its charge is $q ^ { \prime } = - q \sqrt { b ^ { \prime } / b } = - q r / b$. So the force on the charge has magnitude

$$
F = \frac { q q ^ { \prime } } { 4 \pi \epsilon _ { 0 } \left( b - b ^ { \prime } \right) ^ { 2 } } = \frac { q ^ { 2 } r b } { 4 \pi \epsilon _ { 0 } \left( b ^ { 2 } - r ^ { 2 } \right) ^ { 2 } } .
$$

It always points towards the nearest point on the surface of the sphere.

(b) For $b > r$ the answer is simply $q ^ { \prime }$, but the case $b < r$ is different. Since the conductor shields the details of the charges inside, the field outside the sphere must be spherically symmetric. But we also know the sphere is at zero potential, so the field outside must be exactly zero, so by using a spherical Gaussian surface, the total charge in and within the shell is zero.
Therefore, the total charge on the shell has to be $- q$. It is a combination of a total charge $q ^ { \prime }$ spread over the surface, corresponding to the image charge, and a charge $- q - q ^ { \prime }$ spread uniformly over the surface. This second contribution to the charge doesn't show up in the image charge argument, because it makes no electric field inside the shell.
