---
id: "kevin-zhou-m7-ex017"
source: "kevin-zhou"
native_id: "KZ-M7-EX017"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-ex017"
topic: [optics]
subtopic: [scattering, geometrical-optics, atmospheric-optics]
math_tools: []
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 17

    Why can you see through both humid air and heavy rain, but not through fog or a cloud,
    which contains droplets of intermediate size?

    Solution
    Let’s consider a fixed number of water molecules in a fixed volume. When they’re all
    separated, we have humid air. As the molecules join into small droplets the amount of
    electromagnetic radiation scattered by each droplet grows as n2 because of constructive
    interference (as discussed in E7), which allows them to scatter a larger fraction of the light
    that passes through them.

    But for the very large droplets found in rain, the trend turns around. These droplets are
    much larger than the wavelength of light, which means that we’re in the geometric optics
    limit. They can scatter at most 100% of the light that falls on them, which scales as their
    area. Since the volume goes as n, the area goes as n2/3 .

    We therefore conclude that
                                          (
                         scattering        n        small droplets in cloud/fog
                                      ∼
                       water molecule      n−1/3    large droplets in rain

    so that clouds occupy a sweet spot, scattering the most light for a given amount of water.
    The same applies for fog, which is simply a cloud that touches the ground.

6    Surface Tension
We now return to surface tension, first covered in M2, which we’ll see yet again in T3.
