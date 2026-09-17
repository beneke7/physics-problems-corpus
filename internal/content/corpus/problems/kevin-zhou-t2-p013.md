---
id: "kevin-zhou-t2-p013"
source: "kevin-zhou"
native_id: "KZ-T2-P013"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p013"
topic: [thermodynamics, quantum-physics]
subtopic: [third-law, statistical-mechanics, entropy, osmotic-pressure]
math_tools: [probability-statistics, calculus]
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

# KZ-T2-P013

[2] Problem 13. Show that the third law requires the specific heat C to approach zero as the temper-
    ature approaches zero. (Since this isn’t true for a classical ideal gas, the ideal gas law must break
    down in quantum mechanics, at low temperatures. You can also see this from your result for the
    entropy in problem 9, which diverges at low temperatures; there’s no way to add a constant to it
    to make it go to zero at zero temperature.)

         Idea 8: Microcanonical Ensemble
         If a large isolated system in thermodynamic equilibrium is in one of Ω quantum states, then
         we assume all of the states are equally likely, and the entropy is

                                                     S = kB log Ω.

         This is the fundamental definition of entropy; in fact the equation dS = d̄Q/T does not
         define entropy, but rather defines temperature! The third law follows from this result because
         at temperature T = 0, all systems settle into their ground state, so Ω = 1 and S = 0.



                                                             8
Kevin Zhou                                                           Physics Olympiad Handouts



  The entropy describes how much information is required to specify the true state of the
  system. The factor of kB is due to historical convention. The logarithm makes sense because
  if we have two independent systems, which could be in Ω1 or Ω2 different states, then we
  want the entropy to add, log(Ω1 Ω2 ) = log(Ω1 ) + log(Ω2 ).

  Remark
  The assumption that all states are equally likely may sound a bit confusing, because in T1
  we used the Boltzmann distribution, which stated that higher-energy states were less likely to
  be occupied. The difference is that for the Boltzmann distribution, we assumed the system
  was inside an environment at temperature T . In fact, all quantum states of the system and
  environment together remain equally likely in this context, but lower-energy states of the
  system correspond to more energy in the environment, and hence (usually) more possible
  environment states. Thus, accounting for the number of possible environment states, lower-
  energy states of the system are more likely. You will make all this precise in problem 14,
  where you will use it to derive the Boltzmann distribution.

  Example 5: Mixing Entropy

  Repeat example 4 using statistical mechanics.

  Solution
  In statistical mechanics, we can compute S directly using S = kB log Ω. Focusing on a
  single oxygen or nitrogen molecule, let Ωi be the initial number of possible states. When the
  partition is removed, the possible position space for the particle doubles, and since quantum
  states all have the same volume in phase space, the number of states available doubles. So
  for one particle,
                          ∆Spart = kB log(2Ωi ) − kB log Ωi = kB log 2.
  Since the 2N particles are independent,

                                 ∆S = 2N ∆Spart = 2N kB log 2

  in agreement with the result from thermodynamics.

  Example 6: Osmotic Pressure

  A water-filled tube is divided by a membrane which only allows water molecules through.
  When a substance is dissolved in one half of the tube, forming N ions, the water level on
  that side is observed to go up, as shown.




                                                9
Kevin Zhou                                                            Physics Olympiad Handouts




  Explain why, and calculate the height difference, neglecting interactions between different
  ions, and between the ions and the water.

  Solution
  Osmotic pressure is an example of an entropic force. Suppose the water level on one side of
  the tube goes up. The water is otherwise unchanged, since it’s just translated along the tube,
  so its entropy has not changed. But its energy is higher, and this energy must have come via
  heat transfer from the environment. Hence the entropy of the environment has decreased.

  If there were no dissolved ions, this would show why water levels don’t spontaneously go up:
  it is forbidden by the second law. But here, increasing the water in the section with the ions
  increases the ions’ entropy, since they now have more positions they could be in. Since the
  number of available quantum states is proportional to the available volume, we have

                                       Sion = N kB log V

  up to an additive constant, which means that
                                                  N kB
                                        dSion =        dV.
                                                   V
  In equilibrium, let there be an osmotic pressure difference P across the membrane. Then
  moving a volume dV of water across it costs energy P dV , so
                                                d̄Q    P
                                    dSenv = −       = − dV.
                                                 T     T
  In thermodynamic equilibrium the total entropy is maximized, giving

                                       dSion + dSenv = 0.

  Solving for the osmotic pressure gives

                                           P V = N kB T.

  The height difference is simply found using hydrostatic pressure,
                                             P    N kB T
                                       h=       =        .
                                             ρg    ρV g


                                                10
    Kevin Zhou                                                               Physics Olympiad Handouts



       The appearance of a pressure here in response to an opportunity for decreasing entropy is
       generally called an “entropic force”. In fact, you might have already seen this result in
       chemistry class, but in rather different notation. In chemistry textbooks, you’ll typically see

                                                  Π = iM RT

       where Π is the osmotic pressure, M is the molarity of solute, and the van ’t Hoff factor i is
       the number of moles of ions per mole of solute. This is perfectly equivalent to what we found.

       Remark
       Why does the expression for osmotic pressure bear a suspicious resemblance to the ideal
       gas law? The reason is that, by completely neglecting interactions between the solute and
       solvent, we have effectively treated the solute ions like an ideal gas, from the standpoint of
       entropy. This gives an additional contribution to the pressure, which can be derived just like
       the pressure of an ideal gas is in T1. (Using this reasoning backwards, one can conclude
       that the pressure of an ideal gas can also be described as an entropic force, using the same
       reasoning as above.)

       The reason that this kinetic theory connection to the ideal gas law is not emphasized in
       chemistry classes is that the solute particles don’t actually behave like an ideal gas at all.
       They are part of a liquid, and hence are constantly bumping into the solvent particles. The
       thermodynamic reasoning we used above is more general, because it only requires that
       the interaction between the solvent and solute doesn’t significantly change the solute’s entropy.

       Entropic forces can sound mysterious, but they’re simply ordinary forces, whose value we can
       calculate most easily using the tool of entropy. In the end, there are no forces at play except
       for the ordinary forces you’re familiar with. Here the specific force at play is the interaction
       between the membrane and the ions. Since the membrane makes the ions bounce off, rather
       than pass through, it exerts a repulsive force on them which is transmitted to the water.
