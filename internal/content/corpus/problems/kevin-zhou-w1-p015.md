---
id: "kevin-zhou-w1-p015"
source: "kevin-zhou"
native_id: "KZ-W1-P015"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w1-p015"
topic: [oscillations-and-waves, mechanics]
subtopic: [standing-waves, normal-modes, dispersion]
math_tools: [differential-equations, series-complex, eigenvalue-problems]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W1.txt"
source_url: "sources/kevin_zhou/site/handouts/W1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[4] Problem 15. When sand is sprinkled on a vibrating metal plate, it forms Chladni patterns. Sup-
    pose we (unrealistically) model the plate as a square elastic membrane, as in problem 14, of side
    length L obeying the wave equation with wave speed v. Unlike in problem 14, we now assume the
    boundaries of the plate are free.

     (a) Do Chladni patterns form at the nodes or antinodes of a standing wave?
     (b) Find the general standing wave solutions z(x, y, t) and their angular frequencies.
      (c) The plate is also fixed in the middle by the support, so z = ∂z/∂x = ∂z/∂y = 0 there, which
          removes many of the standing wave solutions. Find the lowest and second-lowest angular
          frequencies of allowed standing waves.

                                                     9
Kevin Zhou                                                                Physics Olympiad Handouts

 (d) Sketch the Chladni pattern for the lowest standing wave frequency.
 (e) For the second-lowest standing wave frequency, there will be two independent standing waves
     with that frequency. What superpositions of them will yield Chladni patterns with 90◦
     rotational symmetry? (If you want to see these patterns, you’ll need a computer.)
  Remark: Plate Theory

  The treatment of problem 15 is inaccurate because the restoring force in a metal plate is
  rigidity, not tension. The waves actually satisfy the two-dimensional analogue of the fourth-
  order equation considered in problem 11, which is called the biharmonic equation,

                 ∂2z    4       2 2       2     2
                                                   2       2
                                                                   ∂4z      ∂4z      ∂4z
             −       ∝ ∇  z = ∇  ∇  z = ∂x  + ∂ y   ∂ x + ∂y    z =     + 2         +     .
                 ∂t2                                                ∂x4     ∂x2 ∂y 2 ∂y 4
  For more about this thrilling subject, see Plates, by Bhaskar and Varadan.

  Remark: Wavepackets

  Purely sinusoidal traveling waves of the form ei(kx−ωt) are unrealistic, because they have
  infinite spatial extent. A realistic alternative is a wavepacket, which looks like a sinusoid
  with wavenumber k but with a finite envelope, as shown below.

  To understand how sinusoids are constructed, consider the superposition of two traveling
  waves with wavenumbers k ± ∆k. The wavefunction is
             ei((k−∆k)x−(ω−∆ω)t) + ei((k+∆k)x−(ω+∆ω)t) = 2ei(kx−ωt) cos(∆k x − ∆ω t).
  This is simply a sinusoid of wavenumber k with a slowly varying envelope, whose character-
  istic size is 1/∆k, reflecting how the two component waves slowly move in and out of phase.
  The wave is still infinite in size, but this can be remedied by superposing infinitely many
  wavenumbers; in this case the component sinusoids never get back in phase again.

  If the wavenumbers occupy a region ∆k, then the size of the envelope is of order 1/∆k,
  because this is the distance required for the component waves to get out of phase with each
  other. This yields an “uncertainty principle” for waves,
                                              ∆x ∆k ≳ 1.
  In quantum mechanics, particles are described by waves with p = ℏk. Substituting this in
  immediately gives the Heisenberg uncertainty principle; it fundamentally holds because one
  cannot get a finite wave without superposing different wavenumbers.

  Alternatively, if we had worked with angular frequencies instead, we would have had
                                               ∆t ∆ω ≳ 1.
  This is an “acoustic uncertainty principle”, also important in digital signal processing, where
  it is called the Gabor limit. Upon using the de Broglie relations, one finds the energy-time
  uncertainty principle.

                                                   10
    Kevin Zhou                                                               Physics Olympiad Handouts

       Idea 6
       The dispersion relation of a system is the function ω(k) relating the angular frequency and
       wavenumber of sinusoidal waves. The phase and group velocity
                                                    ω             dω
                                             vp =     ,    vg =
                                                    k             dk
       describe the velocities of sinusoidal waves of wavenumber k and the envelopes of wavepackets
       built from sinusoids near wavenumber k, respectively. We can see the latter result from the
       remark above: the peak of the envelope is the point where the components are in phase, and
       this point travels at speed ∆ω/∆k ≈ dω/dk.

       For ideal waves, the dispersion relation is linear, the group and phase velocities are constant
       and equal, and waves travel while maintaining their shape. When the dispersion relation
       isn’t linear, the group and phase velocities depend on k, so wavepackets gradually fall apart
       (i.e. they disperse). For more discussion of these topics, see chapter 6 of Morin.

       Remark
       In R1, you learned that nothing can go faster than the speed of light. But the phase velocity
       can exceed it; for instance, in problem 16 you will find a phase velocity that can be infinite!
       This is compatible with relativity, because the phase velocity isn’t the speed of an actual
       object. It’s just a formal quantity, namely the rate of change of the position of points of
       constant phase in an infinite plane wave. To reinforce the point, suppose we arranged to
       stand at different places and clap at the same time. Then we could say “the clap moved
       from me to you at infinite speed”, but clearly nothing about this contradicts relativity.

       In some textbooks, you’ll read that while the phase velocity can be faster than light,
       the group velocity can’t be, because it’s the speed of an actual pulse. But that’s not
       quite true in general either, because that result follows from an approximation. For
       instance, in materials with really weird dispersion relations, a single pulse can split
       up into two, in which case the speed of “the” peak or “the” envelope isn’t even well-
       defined. Accordingly, in these cases the group velocity can be formally faster than light, but
       it doesn’t contradict relativity because the group velocity ceases to have its intuitive meaning.

       If you’re mathematically minded, you might be bothered by the argument that a superluminal
       phase velocity is okay because no “actual object” moves faster than light, since it seems hard
       to rigorously define the term “actual object”. Luckily, there’s a simple and perfectly rigorous
       definition of the light speed limit: the observable effects of an action must lie in the future
       light cone of the action. Suppose you change the value of a field at the origin, at time t = 0.
       Then at time t, the field at all points r > ct must be the same as if you didn’t make the
