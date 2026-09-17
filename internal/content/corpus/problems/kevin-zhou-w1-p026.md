---
id: "kevin-zhou-w1-p026"
source: "kevin-zhou"
native_id: "KZ-W1-P026"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-w1-p026"
topic: [relativity, oscillations-and-waves]
subtopic: [sagnac-effect, interference, rotating-frames]
math_tools: [algebra]
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

[3] Problem 26. The Sagnac effect is a phase shift observed when an interferometer rotates. Originally
    it was used as a test of special relativity, and today it is used to make sensitive gyroscopes.
       To illustrate the effect, consider a thin ring of radius R, rotating uniformly about its axis of
    symmetry with a small angular velocity Ω. Light of angular frequency ω is inserted at a point P
    on the ring, and travels both clockwise and counterclockwise along it. When the two light beams
    arrive at point P again, after a full revolution, their phase is compared.

                                                      17
Kevin Zhou                                                               Physics Olympiad Handouts

 (a) If the ring is hollow, what is the phase difference between the beams when they meet?

 (b) What if the ring contains a material with index of refraction n?

To solve this problem, you will need prior exposure to R1.

   Remark: Interference and Energy Conservation

   People sometimes get the impression that interference violates energy conservation, but it
   doesn’t. For instance, in the double slit experiment, you get destructive interference in some
   places, and constructive interference in other places, so that the total energy stays the same.

   A natural followup question is: what if you could engineer waves to have destructive
   interference everywhere? Wouldn’t that unambiguously violate energy conservation?
   Actually, it still won’t, but the reason is a bit subtle and depends on the details.

   For simplicity, suppose we start with a long string at rest. You hold one end, and your friend
   holds the string some distance away. You wiggle your hand, using energy E, to produce a
   wave pulse traveling towards your friend. Then you ask your friend to wiggle their hand in
   the exact “opposite” way when the wave passes by them, which should also require energy
   E, but which should create a wave which perfectly destructively interferes with yours. So
   doesn’t an energy 2E just vanish into nowhere?

   The subtlety is that your friend will be trying to move the string at the precise moment that
   your wave pulse is passing by them. There are two simple limiting cases we can consider.

     • If you created the wave by exerting a vertical force profile F (t), then your friend exerts
       a force −F (t). But in this case, your friend will be doing negative work on the string,
       because it’ll be moving opposite the force they exert. They’re just absorbing the pulse
       you put in, so conservation of energy is satisfied because E − E = 0.

     • If you created the wave by displacing the rope vertically by y(t), then your friend displaces
       it (relative to the wave) by −y(t). But in this case, the net displacement of the rope
       at your friend’s hand will just be zero, because their displacement cancels with the
       displacement of your wave pulse passing by. In this case, your friend is actually just
       holding the rope in place. They don’t do any work, since their hand doesn’t move. The
       forward-moving pulse is indeed completely destroyed, but it is replaced with a reflected
       pulse of equal energy, so conservation of energy is still satisfied because E + 0 = E.

   We can also try to route around this issue. For example, suppose you and your friend tied
   together some strings into a Y shape, and you each held one of the prongs of the Y, and
   made opposite pulses at the same time. Now there’s no issue like the one above, and once
   the pulses meet at the vertex, they’ll perfectly destructively interfere, leaving no energy in
   the “neck” of the Y. But the waves will also reflect off the vertex, and transmit from one
   prong to the other. If you carry out the analysis, you’ll find that all the energy will get
   redirected into waves going back up the prongs. Similar arguments hold for electromagnetic
   waves encountering optical elements, like beam splitters.

                                                  18
Kevin Zhou                                                          Physics Olympiad Handouts

  All of this is not surprising, because interference comes from wave equations, which in turn
  are derived from Newton’s laws or Maxwell’s equations, which obey energy conservation.

                                              19
