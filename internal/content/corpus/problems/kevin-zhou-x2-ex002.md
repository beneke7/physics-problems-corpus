---
id: "kevin-zhou-x2-ex002"
source: "kevin-zhou"
native_id: "KZ-X2-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x2-ex002"
topic: [nuclear-physics]
subtopic: [radioactive-decay, nuclear-fission, critical-mass]
math_tools: [differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X2.txt"
source_url: "sources/kevin_zhou/site/handouts/X2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[3] Problem 8 (PPP 190). Part of the series of isotopes produced by the decay of 232 Th, along with
    the corresponding half-lives, is given below:

              232   1.4×1010 y 228 5.7 y 228  6.1 h       1.9 y 224  3.6 d       56 s
              90 Th −−−−−−→ 88 Ra −−−→ 89 Ac −−−→ 228     −−→ 88 Ra −−−→ 220
                                                    90 Th −                86 Rn −−→ . . . .
    232 Th and 228 Th in equilibrium are extracted from an ore and purified by a chemical process. Sketch

    the form of the variation in the number of atoms of 220 Rn you would expect to be present in this
    material over a (logarithmic) range from 10−3 to 103 years.

    2    Nuclear Processes
        Example 2: PTD 45

        Heavy nuclei can decay if struck by a neutron, releasing lighter nuclei and several more
        neutrons in the process. If each decay event causes, on average, more than one other decay
        event, then a runaway chain reaction occurs, causing a nuclear explosion. This happens
        in samples of mass greater than a given “critical mass”. If the sample can be compressed,
        roughly how does the critical mass depend on density?

        Solution
        Let the sample have radius r, and let the cross-section of collision between neutrons and
        heavy nuclei be σ. Then for small r, the probability that a produced neutron will collide

                                                         5


    Kevin Zhou                                                           Physics Olympiad Handouts

       with another nucleus before exiting the sample is

                                                    p ∼ nσr

       where n is the number density of nuclei. Critical mass is achieved when this reaches some
       fixed threshold value, which means rcrit ∝ 1/n ∝ 1/ρ. The critical mass is thus
                                                     3
                                           mcrit ∝ ρrcrit ∝ 1/ρ2 .

       Early nuclear weapons worked on the so-called implosion method, where a conventional
       explosive was used to compress a sphere of radioactive material.
