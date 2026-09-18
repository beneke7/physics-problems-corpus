---
id: solution-ocr-kevin-zhou-m7sol-ex017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-ex017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 17

Why can you see through both humid air and heavy rain, but not through fog or a cloud, which contains droplets of intermediate size?

## Solution

Let's consider a fixed number of water molecules in a fixed volume. When they're all separated, we have humid air. As the molecules join into small droplets the amount of electromagnetic radiation scattered by each droplet grows as $n ^ { 2 }$ because of constructive interference (as discussed in E7), which allows them to scatter a larger fraction of the light that passes through them.

But for the very large droplets found in rain, the trend turns around. These droplets are much larger than the wavelength of light, which means that we're in the geometric optics limit. They can scatter at most 100\% of the light that falls on them, which scales as their area. Since the volume goes as $n$, the area goes as $n ^ { 2 / 3 }$.

We therefore conclude that

$$
\frac { \text { scattering } } { \text { water molecule } } \sim \begin{cases} n & \text { small droplets in cloud/fog } \\ n ^ { - 1 / 3 } & \text { large droplets in rain } \end{cases}
$$

so that clouds occupy a sweet spot, scattering the most light for a given amount of water. The same applies for fog, which is simply a cloud that touches the ground.

## 6 Surface Tension

We now return to surface tension, first covered in M2, which we'll see yet again in T3.
