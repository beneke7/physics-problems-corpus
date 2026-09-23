---
id: "kevin-zhou-e4-ex005"
difficulty_level: 2
source: "kevin-zhou"
native_id: "KZ-E4-EX005"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e4-ex005"
topic: [magnetostatics]
subtopic: [magnetic-dipoles, magnetic-energy, induction]
math_tools: []
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E4.txt"
source_url: "sources/kevin_zhou/site/handouts/E4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 5

  If a magnet is held over a table, it can pick up a paper clip. If the paper clip is removed, it
  can pick up another paper clip just as well, and this process can seemingly continue forever
  without any effect on the magnet. Since the magnet does work on each paper clip, doesn’t
  this mean a permanent magnet is an infinite energy source?

  Solution
  This is the kind of question that makes magnets feel so mysterious. They’re basically the
  only everyday example of a long range force besides gravity (in fact, Kepler once thought
  the Sun acted on the planets like a giant magnet), and as such they’ve inspired countless
  attempts at perpetual motion machines. For centuries, many people have spent years of
  their lives trying to get elaborations of this example to work.

  To see why this doesn’t work for a bar magnet, just replace the word “magnet” with “charge”.
  It’s true that a positive charge can attract a negative charge to it. And if the negative
  charge is then removed, the positive charge can then attract another negative charge to
  it. But conservation of energy isn’t violated, because the force from the positive charge
  is conservative: the work it does on the negative charge to draw it close is precisely the
  opposite of the work an external agent needs to do to pull it away. The force of a magnet on
  a paper clip is also conservative.

  It’s also interesting to consider a slightly different case. Unlike a bar magnet, an electromagnet
  (i.e. a magnet created by moving current in a loop) can be turned on and off with the flick
  of a switch. Therefore, we might suspect that the following is a perpetual motion machine:

     1. Turn on the electromagnet, which costs energy E0 .

     2. Use it to lift a paper clip, increasing its potential energy by mgh.

     3. Turn off the electromagnet, which costs energy E0 , while holding the paper clip.


                                                  8


    Kevin Zhou                                                              Physics Olympiad Handouts



          4. Move the paper clip away; we’ve managed to raise it higher for free.

       To see the problem, note that the attractive force between the magnet and paper clip arises
       because the magnet induces a magnetic dipole moment in the paper clip, leading to a (m·∇)B
       force. As the paper clip moves toward the magnet, its own dipole moment causes a changing
       magnetic flux through the electromagnet, and thus an emf against the current. Therefore, it
       costs extra energy to keep the current in the electromagnet steady. Since the qv × B Lorentz
       force doesn’t do work, that energy must be precisely mgh, so nothing comes for free.

       Remark
       A compass needle is essentially a small magnetic dipole, whose dipole moment points towards
       the end painted red. We can also approximate the Earth’s magnetic field as a dipole field.




       Since the tangential component of this dipole field points north, the red end of the compass
       points towards the geographic north pole, which is the Earth’s magnetic south pole.

       By the way, a cheap compass calibrated to work in America or Europe won’t work well in
       Australia. The reason is that the Earth’s magnetic field also has a radial component, which
       acts to tip the compass needle up or down. The needle needs to be appropriately weighted
       to stay horizontal, so that it can freely rotate, but the side that needs to be weighted differs
       between the hemispheres.
