---
id: "kevin-zhou-t1-ex004"
source: "kevin-zhou"
native_id: "KZ-T1-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-ex004"
topic: [thermodynamics]
subtopic: [ideal-gas, first-law, entropy, irreversible-processes]
math_tools: [algebra]
format: "explanation"
kind: "example"
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

# KZ-T1-EX004

  Example 4

  A thermally insulated chamber contains a vacuum; it is connected to the outside by a small
  valve. The valve is opened until the air inside the chamber reaches atmospheric pressure, then
  closed. The temperature of the air outside the chamber is T0 . Treating the air as diatomic,
  what is the temperature T of the air inside the chamber?

  Solution
  Let the chamber have a volume V , and let the atmospheric pressure be p0 . As our system,
  consider the set of all air that eventually makes it inside the chamber, and suppose this air
  has volume V0 before it enters the chamber. The work done on this air by the entire rest of
  the atmosphere, as it enters the chamber, is p0 V0 . The final internal energy of the air is
                                     5              7
                                  E = nRT0 + p0 V0 = nRT0 .
                                     2              2
  On the other hand, we also have E = nCV T = (5/2)nRT , which gives
                                                7
                                             T = T0 .
                                                5
  At that point, the flow stops because the pressure is equalized, even though the temperature
  isn’t. This is an example of mechanical equilibrium being attained before thermal equilibrium.
  (In the long run, the temperature will equalize too, by heat transfer through the walls.)

  You might suspect this violates energy conservation. Where does the extra thermal energy
  of the gas come from? It’s taken from the air behind it pushing it into the chamber. But on
  a deeper level, the energy is ultimately gravitational: the entire atmosphere shrinks down
  toward the Earth a bit once the volume V0 of air is removed from it, and this decrease in
  gravitational potential energy is the same as the increase in thermal energy of this system.

  You might also suspect this violates the second law of thermodynamics. We started with
  everything at temperature T0 , and got a part of the system to a higher temperature than the
  rest. Using this temperature difference, you could then run a heat engine, which apparently
  allows you to get work for free. The problem with this reasoning is that heating isn’t the only


                                                 6
    Kevin Zhou                                                               Physics Olympiad Handouts



       thing that happens; the initially empty chamber also gets filled up. After running the heat
       engine, you would have to pump the air out to reset the system to its original state, which
       takes work. Another way of thinking about it is that the entropy actually doesn’t decrease
       when the air goes into the chamber. The thermal energy is less evenly distributed, decreasing
       entropy, but the air now has more volume to occupy, increasing entropy by more.
