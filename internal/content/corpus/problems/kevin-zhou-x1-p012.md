---
id: "kevin-zhou-x1-p012"
source: "kevin-zhou"
native_id: "KZ-X1-P012"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-p012"
topic: [quantum-physics]
subtopic: [neutrino-oscillations, de-broglie, wkb]
math_tools: [small-parameter-approximation, calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X1.txt"
source_url: "sources/kevin_zhou/site/handouts/X1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[2] Problem 12. Neutrinos are quantum particles with extremely low masses. Because their masses
    are so low, they are almost always produced moving near the speed of light. In the Sun, neutrinos
    are produced in a superposition of two types, one with mass m1 and another with mass m2 .
      (a) Suppose the neutrino is produced with definite energy E. The part of the neutrino wave
          with mass m1 has wavenumber k1 , and the part with mass m2 has wavenumber k2 . Find an
          approximate expression for k1 − k2 in the ultrarelativistic limit E ≫ m1 , m2 .
      (b) Find the distance L that the neutrino travels so that the relative phase between these waves
          changes by 2π. This is the characteristic wavelength of “neutrino oscillations”. Evaluate it
          numerically assuming the typical values E = 10 keV, m1 c2 = 0.010 eV, and m2 c2 = 0.013 eV.

    2    Higher Dimensions
        Idea 4
        For a system with more than one degree of freedom, the WKB quantization condition holds
        for each individually,          I                αi
                                          pi dxi = ni +       h.
                                                         2π
        In this case, there can be multiple quantum states with a given energy, in which case we say
        that energy level is degenerate; the number of states with that energy is called the degeneracy.
