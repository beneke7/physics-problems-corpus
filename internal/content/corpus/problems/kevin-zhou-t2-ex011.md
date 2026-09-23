---
id: "kevin-zhou-t2-ex011"
difficulty_level: 2
source: "kevin-zhou"
native_id: "KZ-T2-EX011"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex011"
topic: [thermodynamics, electromagnetism]
subtopic: [blackbody-radiation, thermal-equilibrium, stefan-boltzmann-law]
math_tools: []
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T2-EX011

       Example 11

       Suppose a black sphere of radius r is placed inside a large container of arbitrary shape, whose
       walls are a blackbody with temperature T . In the steady state, what is the rate of power
       absorbed by the sphere from the walls?

       Solution
       Radiation is continually emitted from all points on the walls in all directions, so it would
       seem that we have to do a complicated integral to find how much hits the sphere, which
       would be hard even if we were given the container’s shape. But the problem is actually
       trivial due to the second law of thermodynamics!

       Let’s suppose the sphere itself is also at temperature T . Then it sends power (4πr2 )σT 4
       to the walls, since all radiation that exits the sphere hits the walls. But if the sphere and
       walls are at the same temperature, a temperature difference cannot spontaneously appear.
       Therefore, the power going from the walls to the sphere must also be (4πr2 )σT 4 . And
       since this quantity can also be expressed as a geometric integral, it can’t depend on the
       temperature of the sphere, so it must be true for any sphere temperature.

       This is a neat idea worth followups. First, if we had a more general shape than a sphere,
       when would the reasoning above still work? Second, for a tough problem which uses a variant
       of this idea, see NBPhO 2010, problem 2. An improved solution due to Stefan Ivanov is
       available here.
