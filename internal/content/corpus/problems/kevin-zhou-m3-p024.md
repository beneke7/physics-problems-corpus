---
id: "kevin-zhou-m3-p024"
source: "kevin-zhou"
native_id: "KZ-M3-P024"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m3-p024"
topic: [mechanics]
subtopic: [work-energy, center-of-mass-motion, friction, conservation-laws]
math_tools: [calculus, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M3.txt"
source_url: "sources/kevin_zhou/site/handouts/M3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

end of which is attached to a very thin pole. The ball is thrown so that it initially travels in a
    horizontal circle, with the string making an angle θ0 with the vertical. As time goes on, the string
    wraps itself around the pole. Assume that (1) the pole is thin enough so that the length of string in
    the air decreases very slowly, and (2) the pole has enough friction so that the string does not slide
    on the pole, once it touches it. Show that the ratio of the ball’s final speed (right before it hits the
    pole) to initial speed is sin θ0 .
    When dealing with an extended system whose parts all move in different ways, conservation of
    energy is occasionally useless. However, the somewhat obscure idea of “center of mass energy” may
    become useful instead. For more about this concept, see section 13.5 of Halliday and Resnick.

        Idea 7: Center of Mass Energy

        The work done on a part of a system is
                                                   dW = F dx
        where F is the force on that specific part of the system, and dx is its displacement. Then
        dW = dE where E is the total energy of the system.

        Similarly, the “center of mass work” done on a system is
                                                 dWcm = F dxcm
        where F is the total force on the system and dxcm is the displacement of the center of mass.
        Then dWcm = dEcm where the “center of mass energy” is defined as Ecm = M vcm   2 /2.


        It should be noted that, like regular energy and work, center of mass energy and work depend
        on the reference frame you’re using.



                                                        15


    Kevin Zhou                                                            Physics Olympiad Handouts


       Example 11

       Consider a cyclist who pedals their bike to accelerate. The wheels roll without slipping on
       the ground. The cyclist moves a distance d, with the bike experiencing a constant friction
       force f from the ground. Analyze the situation using both energy and center of mass energy.

       Solution
       Since the wheels roll without slipping, their contact point with the ground is always zero,
       so the friction force does exactly zero work. Thus the net energy of the cyclist/bike system
       is conserved. The additional kinetic energy of the cyclist/bike comes from the chemical
       energy of the cyclist, which ultimately came from what they ate. So conservation of energy
       is correct, but it doesn’t tell us anything useful at all.

       Now consider center of mass energy. Considering the cyclist/bike system, the center of mass
                                              2 /2. This allows us to compute the change in velocity
       work is f d, which is the change in M vcm
       of the cyclist/bike.

       Example 12

       Consider the same setup as in the previous example, but now the cyclist brakes hard. The
       wheels slip on the ground, and experience a friction force −f while the cyclist moves a
       distance d. Analyze the situation using both energy and center of mass energy.

       Solution
       The center of mass work equation tells us about the overall deceleration of the cyclist/bike,
       just as in the previous example.

       On the other hand, the work done by the friction force is indeterminate! It can be any
       quantity between zero and −f d. When it is zero, the total energy of the cyclist/bike system
       is again conserved, which means all the kinetic energy lost is dissipated as heat inside the
       bike itself. When it is −f d, all the kinetic energy lost is dissipated as heat in the ground,
       and hence energy is removed from the cyclist/bike system. In general, the work will be
       an intermediate value, meaning that both the ground and the bike heat up, but we can’t
       calculate what it is without a microscopic model of how the friction works. It depends on,
       e.g. how easily the ground and bike tire surface deform.
