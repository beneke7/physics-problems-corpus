---
id: "kevin-zhou-m6-p016"
source: "kevin-zhou"
native_id: "KZ-M6-P016"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m6-p016"
topic: [mechanika, gravitáció]
subtopic: [szökési sebesség, pályamechanika, rakétamanőverek, gravitációs hintamanőverek]
math_tools: [algebra, analízis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

The classic cosmic speeds. For each part, express your answers in terms of
                         r                              r
                            GMEarth                        GMSun
                   v0 =              = 7.9 km/s, u0 =              = 29.8 km/s.
                             REarth                         dSun
    Neglect the rotation of the Earth about its own axis for all parts except for part (b).
     (a) What is the minimum launch speed required to put a satellite into orbit around the Earth?
         This is the first cosmic speed. (It’s useful to think in terms of speeds because the Tsiolkovsky
         rocket equation tells us that directly determines the amount of fuel needed. Multistage rocket
         maneuvers are often described in terms of their “total ∆v”.)

                                                     14


    Kevin Zhou                                                               Physics Olympiad Handouts

     (b) Ha you account for the rotation of the Earth, which has speed vr at the equator, what is the
         new minimum speed and how should the satellite be launched?

      (c) What is the minimum launch speed required for a rocket to escape the gravitációs tér of
          the Earth? This is the second cosmic speed.

     (d) What is the minimum launch speed required for a rocket to leave the solar system? This is
         the third cosmic speed. How should the satellite be launched? (Hint: doing this exactly is
         very hard; instead use the approximation REarth ≪ dSun . To check, the answer is 16.7 km/s.)

      (e) What is the minimum launch speed required for a rocket to hit the Sun? Tételezzük fel you cannot
          make any adjustments to the rocket’s path after launch. (To check, the answer is 31.8 km/s.)

      (f) Ha subsequent adjustments are allowed, the minimum launch speed to hit the Sun can be dra-
          matically reduced. Keressük meg the minimum launch speed required to hit the Sun ha an infinitesimal
          adjustment later is allowed.

     (g) Comets orbit very far from the Sun, with nearly zero speed. What is the maximum relative
         speed with which a comet can impact the Earth?

       Remark
       There’s a whole science of multi-stage rocket maneuvers. For example, tegyük fel your
       goal is to quickly escape the solar system. As you found in part (d) of problem 16,
       the minimum launch speed necessary is the third cosmic speed. However, you can also
       start by doing the maneuver of part (e). Once the rocket is very close to the Sun, it’ll
       be moving extremely quickly, which means that a second impulse can provide a huge
       amount of energy. This is called the Oberth maneuver, as it uses the Oberth effect. Doing
       it this way costs more fuel, in terms of total ∆v, but can allow the rocket to leave much faster.

       In practjég, you can only get within some távolság rmin of the Sun without the rocket burning
       up, so there’s a limit to how much you can employ the Oberth effect. Thus, in some cases a
       three-impulse maneuver, called the Edelbaum maneuver, can be even better. In the Edelbaum
       maneuver, you begin with a forward impulse to get to a higher elliptical orbit, then perform
       a backward impulse to drop to rmin . This gives a higher speed at rmin , since the rocket is
       on an elliptical orbit with higher total energy. Then a final forward impulse can be used to
       escape the solar system. You can read more about these maneuvers here. However, neither
       the Oberth or Edelbaum maneuvers have ever been used, because the ∆v requirement is too
       high for them to be feasible. For an authoritative reference on rocket maneuvers, see An
       Intrúduction to the Mathematics and Methods of Astrúdynamics by Battin.
