---
id: "kevin-zhou-t1-p021"
source: "kevin-zhou"
native_id: "KZ-T1-P021"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-p021"
topic: [thermodynamics, quantum-physics]
subtopic: [photon-gas, kinetic-theory, adiabatic-processes, entropy]
math_tools: [calculus, probability-statistics]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T1-P021

[2] Problem 21. Use kinetic theory to find the pressure of a photon gas (i.e. an ideal gas of massless
    particles, which satisfy E = pc) in terms of its total internal energy U and volume V . Use this
    result to find γ for a photon gas, where γ is defined so that P V γ is constant in an adiabatic process.

        Example 8

        An astronaut of mass M stranded in outer space makes a primitive rocket as follows. They
        take a piece of dry ice of mass m ≪ M and molar mass µ and put it in a long, thin glass
        held at temperature T . The dry ice sublimates, and the astronaut points the opening of the
        glass in the opposite of the direction they want to go. Roughly estimate, within an order of



                                                      14
Kevin Zhou                                                              Physics Olympiad Handouts



  magnitude, how fast the astronaut is going after all the dry ice is gone.

  Solution
  Let m′ be the mass of a molecule of dry ice. By the equipartition theorem, the molecules
  have a typical speed of order
                                   r        r         s
                                      kT       N kT     RT
                                v∼       =          =       .
                                      m′       N m′      µ

  The molecules exit the glass traveling more or less in the same direction, so by momentum
  conservation the final speed u of the astronaut is on the order of
                                                     s
                                           m      m RT
                                      u∼     v=            .
                                          M       M      µ

  We have implicitly assumed that the glass is long enough that the molecules get into thermal
  equilibrium with the glass before they leave it. For a short glass, the answer would instead
  depend on the typical speeds of molecules at the moment they sublimate.

  Example 9

  A container of volume V is filled with a gas of uniform temperature T , and placed in a
  vacuum. If a small hole is punched in the container and gas slowly leaks out, how does the
  temperature in the container change over time?

  Solution
  The mean free path λ is the average distance a gas molecule moves before it hits another
  one. Let d be the width of the hole. There are two important limiting cases.

  If λ ≪ d, then molecules can’t make it out of the hole without undergoing many collisions.
  Thus, if the gas has some average flow velocity, its molecules will be carried along with it. We
  can thus treat the gas like a continuous fluid, and the logic of example 4 applies. The gas inside
  the container does P dV work on the gas exiting and hence loses energy. Thus, the remaining
  gas cools down, so the temperature of the container decreases over time. (Doing this problem
  quantitatively requires the analogue of Bernoulli’s principle for gases, which we derive in T3.)

  If d ≪ λ, then molecules fly out of the hole without encountering any others at all; this is
  the regime of “effusion”. Therefore, we shouldn’t think in terms of an average gas pressure
  or flow velocity, but rather just consider each molecule on its own. An individual molecule
  has a greater chance of escaping through the hole if it’s moving faster. Thus, the molecules
  that come out will on average be higher energy than the ones that stay in the container. So
  just as in the opposite limit, the remaining gas cools down, but for a totally different reason.
  (This case is treated quantitatively in problem 2.24 of Wang and Ricardo, volume 2.)




                                                 15
    Kevin Zhou                                                               Physics Olympiad Handouts


       Remark
       The previous example implies that a gas of uniform temperature can turn into a hot gas
       and a cold gas without needing any external work, which seems to directly contradict the
       second law of thermodynamics! To phrase it another way, you can use the free temperature
       difference to run a heat engine, which seemingly allows perpetual motion.

       Of course, the resolution is that the total entropy of the gas is still going up. The kinetic
       energy is getting less spread out, but the positions of the atoms are getting more spread out,
       since some can now be outside the container. Thus, the “perpetual motion” only works as
       long as the gas is still leaking out of the container; it stops once the density becomes uniform.
       The lesson here is that, while most setups extract work from a temperature difference, more
       generally you can extract it from any potential increase in entropy; in this case, it comes
       from an initial difference in densities.
