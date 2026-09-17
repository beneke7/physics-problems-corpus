---
id: kevin-zhou-notes-phy-ex040
source: kevin-zhou-notes
native_id: "phy Example 040"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex040
topic: [statistical-mechanics]
subtopic: [entropy, glasses]
math_tools: [thermodynamic-integration]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3603-3695"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Glasses are formed when liquids are cooled too fast to form the crystalline equilibrium
state. Generally, glasses occupy one of many metastable equilibrium states, leading to a “residual
entropy” (i.e. quenched disorder) at very low temperatures. To estimate this residual entropy, we
could start with a cold perfect crystal (which has approximately zero entropy), melt it, then cool it
into a glass. The residual entropy is then
                                           Z T =Tℓ           Z T =0
                                                     d̄Q              d̄Q
                                  Sres =                 +                .
                                            T =0      T       T =ℓ     T
69 3. Statistical Mechanics


In other words, the residual entropy is related to the amount of “missing heat”, which we transfer
in when melting the crystal, but don’t get back when turning it into a crystal.
   More concretely, consider a double well potential with energy difference δ and a much larger
barrier height. As the system is cooled to kB T ≲ δ, the system gets stuck in one of the valleys,
leading to a statistical entropy of kB log 2 ∼ kB . If the system gets stuck in the higher valley, then
there is a “missing” heat of δ, which one would have harvested at T ∼ δ/kB if the barrier were low,
so the system retains a thermodynamic entropy of δ/T ∼ kB . Hence both definitions of entropy
agree: there is a residual entropy of roughly kB times the number of such “choices” the system
must make as it cools.

 Note. Some people object that identifying subjective information with entropy is a category error;
 however, it really is true that “information is physical”. Suppose that memory is stored in a
 computer as follows: each bit is a box with a divider. For a bit value of 0/1, a single bouncing atom
 is present on the left/right side. Bit values can be flipped without energy cost; for instance, a 0 can
 be converted to a 1 by moving the left wall and the divider to the right simultaneously.
     One can harvest energy by forgetting the value of a bit, yielding Szilard’s engine. Concretely,
 one allows the divider to move out adiabatically under the pressure of the atom. Once the divider
 is at the wall, we insert a new divider at the original position. We have harvested a P dV work of
 kB T log 2, at the cost of no longer knowing the value of the bit. Thus, pure “information” can be
 used to turn heat into work.
     This reasoning also can be used to exorcise Maxwell’s demon. It is possible for a demon to
 measure the state of a previously unknown bit without any energy cost, and then to extract work
 from it. However, in the process, the entropy of the demon goes up – concretely, if the demon uses
 similar bits to perform the measurement, known values turn into unknown values.
     We would have a paradox if the demon were able to reset these unknown values to known ones
without consequence. But if the demon just tries to push pistons inward, then he increases the
 temperatures of the atoms, and thereby produces a heat of kB T log 2 per bit. That is, erasing pure
“information” can cause the demon to warm up. As such, there is nothing paradoxical, because the
 demon just behaves in every way like an ordinary cold reservoir.
     The result that kB T log 2 heat is produced upon erasing a bit is known as Landauer’s principle,
 and it applies quite generally, since the logic above also holds for any system obeying Liouville’s
 theorem. It also applies to computations that involve irreversible steps. For example, an AND
 gate fed with uniformly random inputs produces an output with a lower Shannon entropy, which
 means running the AND gate on such inputs must produce heat. Numerically, at room temperature,
we have kB T log 2 = 0.0175 eV. However, computation can be performed with no heat dissipation
 at all if one uses only reversible gates. During the computation one accumulates “garbage” bits
 that cannot be erased; at the end one can just copy the answer bits, then run the computation in
 reverse. Numerous concrete models of reversible computation have been proposed to demonstrate
 this point, as once it was thought that Landauer’s principle implied computation itself required
 energy dissipation.

Note. What is the temperature of a moving body in special relativity? This is a controversial
question, with different authors proposing T ′ = T /γ, T ′ = T , and T ′ = γT . A thorough review
of the literature is given here. My personal opinion is the following. Our first choice would be to
define the temperature as “whatever a thermometer measures”, but this doesn’t work. For example,
consider a thermometer immersed in blackbody radiation of temperature T . Different thermometers
could have different absorptivities a(f ), but the reading at equilibrium will be the same no matter
70 3. Statistical Mechanics


what a(f ) is, because of Kirchoff’s law of thermal radiation a(f ) = e(f ). But if we boost the
radiation, this is no longer true, because the radiation no longer has a blackbody spectrum in the
thermometer’s frame.
    This hints at a deeper problem with defining temperature. In general, thermodynamic quantities
like temperature, pressure, and chemical potential are set equal at equilibrium, because they reflect
the entropy cost of exchanging some conserved quantity, namely energy, volume, and particle number.
But once we consider moving bodies, there is another conserved quantity that can be exchanged,
namely momentum. The corresponding temperature-like quantity should combine with the usual
temperature in a four-vector. Explicitly, we may define
                                                     
                                                  ∂S
                                          βµ =
                                                  ∂pµ V,N

and the rest temperature of a body with four-velocity uµ is always (uµ βµ )−1 . Here, βµ is a covector
because the entropy is a Lorentz scalar, as it reflects the number of possible microstates. The
temperature measured by a thermometer moving with respect to the body generally depends on all
the components βµ , with the specific expression depending on the design of the thermometer. (We
don’t run into this subtlety with pressure or chemical potential, because it is fairly easy to build a
thermometer that exchanges energy but not volume or particle number. It is much harder to build
a thermometer that somehow exchanges energy but not momentum.)
   In the rest frame, we have βµ = (1/T, 0), which means in a general frame,
                                                γ γ v
                                          βµ =    ,      .
                                                 T T c
If one chooses to define the temperature in a general frame as 1/β0 , then this implies T ′ = T /γ.
However, such a definition isn’t that meaningful because what really matters is the whole four-vector.

3.4    Classical Gases
We first derive the partition function by taking the classical limit of a noninteracting quantum gas.

