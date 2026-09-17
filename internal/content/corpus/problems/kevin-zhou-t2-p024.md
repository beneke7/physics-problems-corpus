---
id: "kevin-zhou-t2-p024"
source: "kevin-zhou"
native_id: "KZ-T2-P024"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p024"
topic: [thermodynamics, quantum-physics]
subtopic: [photon-gas, blackbody-radiation, carnot-cycle, entropy]
math_tools: [integration, partial-derivatives]
format: "open-ended"
kind: "problem"
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

# KZ-T2-P024

[3] Problem 24. In T1, we derived some properties of photon gases using basic kinetic theory.
    Here, we’ll derive some more properties, starting from Planck’s law and then sticking with pure
    thermodynamics. As in problem 23, we assume there is a photon gas at temperature T , with
    pressure P within a cavity of volume V , whose walls are perfect blackbodies. (Note that since
    photons can be absorbed and emitted by the walls, it doesn’t make sense to talk about N as for an
    ideal gas. Instead, N is determined by the other parameters. This actually makes things simpler,
    since there’s one less variable to worry about.)
     (a) It turns out that the pressure of the photon gas is P = AT 4 where A is a constant. Explain
         why the pressure depends only on the temperature. (Harder, optional task: explain why
         P ∝ T 4 starting from Planck’s law.)

     (b) Our next goal is to compute U (T, V ). Consider an infinitesimal Carnot cycle, shown below.




          By equating the efficiency of this cycle to the Carnot efficiency, find (∂U/∂V )|T .

      (c) By integrating this result, and using U (T, 0) = 0, find U (T, V ).

     (d) We can now use these results to find S(T, V ), just as we did for an ideal gas in problem 9,
         i.e. by considering the change of entropy during some infinitesimal process and then integrating
         the result. Do this in any way you like. Can the third law be satisfied?
