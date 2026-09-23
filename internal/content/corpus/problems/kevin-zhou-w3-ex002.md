---
id: "kevin-zhou-w3-ex002"
difficulty_level: 3
source: "kevin-zhou"
native_id: "KZ-W3-EX002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w3-ex002"
topic: [oscillations-and-waves, mechanics]
subtopic: [sound-waves, doppler-effect, damping]
math_tools: []
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W3.txt"
source_url: "sources/kevin_zhou/site/handouts/W3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[2] Problem 3. A rubber rope with unstretched length L0 is stretched to length L > L0 .
     (a) Find the ratio of the speeds of transverse and longitudinal waves.

     (b) Experimentally, it is found that the longitudinal waves are much more strongly damped. (You
         can check this at home, by making such a rope by tying together cut rubber bands.) Can you
         explain why, by considering the molecular structure of rubber?

       Idea 1: Doppler Effect

       Working in one dimension with speed of sound c, if a source of sound at frequency f0 travels
       at velocity vs while an observer to their right travels at velocity vo , the observed frequency is
                                                     c − vo
                                                f=          f0 .
                                                     c − vs

       Example 1

       A speaker is between two perfectly reflective walls and emits a sound of frequency f0 . If you
       carry the speaker and walk with small speed v towards one of the walls, what do you hear?

       Solution
       Walking is slow, so we work to lowest order in v/c. The wall you’re walking toward
       experiences a sound of frequency f0 (1 + v/c) by the Doppler effect, and this is the frequency

                                                       2


    Kevin Zhou                                                             Physics Olympiad Handouts

       it reflects. Since you’re walking towards the wall, a second Doppler effect occurs, caus-
       ing you to hear frequency f0 (1 + 2v/c). (We also saw this “double Doppler shift” back in R1.)

       By similar reasoning, you hear sound of frequency f0 (1 − 2v/c) from the wall behind you.
       And of course, you also hear f0 from the speaker itself. Thus, in total you hear beats of
       frequency 2vf0 /c, as well as a weaker beat of frequency 4vf0 /c from the two reflected waves.

       Example 2

       In my former college at Oxford, there is a long staircase that is said to “quack” when one
       claps at it. What is the explanation of this phenomenon?

       Solution
       A diagram of the staircase is given below, courtesy of Felix Flicker, fellow of New College.

       The key is that each clap reflects off a stair individually. When the echoes arrive back at the
       listener, they arrive quickly enough to be heard as a pitch.

       The width and height of the steps are w = 30 cm and h = 16 cm. Suppose one claps at a
       distance L ≫ w, h. The path length differences for reflections off the bottom few steps are
       approximately 2w, giving the frequency
                                                    v
                                              f=      = 570 Hz
                                                   2w
       where we used v = 343 m/s. The quack then continues, due to reflections off higher and
       higher stairs. Once the stairs are much further
                                                 √     away than L, path length differences for
       subsequent reflections are approximately 2 w + h2 , giving frequency
                                                   2

                                               v
                                          f= √        = 500 Hz.
                                            2 w2 + h2
       Hence the quack consists of a pitch that starts high and then falls slightly lower as it fades
       away. For further discussion, see the article How the Mound got its Quack .
