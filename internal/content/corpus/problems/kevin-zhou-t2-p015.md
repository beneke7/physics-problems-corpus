---
id: "kevin-zhou-t2-p015"
source: "kevin-zhou"
native_id: "KZ-T2-P015"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p015"
topic: [thermodynamics, statistical-mechanics]
subtopic: [entropy, helmholtz-free-energy, entropic-force, polymers]
math_tools: [combinatorics, probability-statistics, optimization]
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

# KZ-T2-P015

[5] Problem 15. This long problem illustrates some important features of free energy. A rubber
    molecule can be modeled in one dimension as a chain consisting of a series of N = N+ + N− ≫ 1
    links of length a, where N+ point in the +z direction and N− point in the −z direction. The
    orientations of each of the links are independent, and it costs no energy to rotate a link. Thus
    all configurations are equally likely at any temperature. Define L = (N− − N+ )a to be the total
    downward extension of the chain.

     (a) Using the approximation mentioned in problem 14 and assuming L ≪ N a, show that

                                                           L2

                                       S = N kB log 2 −
                                                         2N 2 a2
         and hence show that the entropy decreases as L increases. This model is very basic; for
         instance, it tells us nothing about the tension in the chain, but the sign here is correct. (Hint:
         notice that the changes in entropy are of order L2 /N , and hence are very small. You will have
         to be careful with your approximations to avoid dropping an important contribution.)

     (b) Note that the entropy doesn’t depend on temperature, because all configurations have the
         same energy. In a more realistic model, the total entropy of the molecule would be the sum
         of the entropy computed above, plus the entropy due to additional thermal motions, such as
         vibrations of the links. Given this, if a rubber band is quickly stretched, does it feel warm or
         cold to the touch? (You can check your answer experimentally!)

     (c) Now suppose a mass m is hung from the bottom of the chain. Find the average length of the
         chain at temperature T , using the Boltzmann distribution. Do not assume L ≪ N a. (The
         force that raises this mass is another example of an entropic force.)

     (d) It turns out that you can also arrive at this answer by maximizing the entropy of the entire
         universe Suniv . Argue in general that Suniv is maximized when the Helmholtz free energy

                                                   F = U − TS

         is minimized, where U is the total energy of the rubber band and mass, and T is the tem-
         perature of the system and its surroundings. (Hint: use the expression for dSuniv , along with
         conservation of energy.)

     (e) Show that in the limit L ≪ N a, F is indeed minimized at the equilibrium length.

       Remark: Heat vs. Work
       What is the difference between work and heat? If we have a gas in a cylinder with a piston,
       moving the piston counts as work. Clearly, if we split the piston into two halves and moved
       them independently, this would still be work. But we can keep splitting the piston until
       we are down to individual atoms of the piston. These can transfer energy to gas particles
       because they can slam into them as the gas particles are bouncing off, like a batter hitting a


                                                     12


Kevin Zhou                                                             Physics Olympiad Handouts



  baseball. But as mentioned in T1, this is precisely how a hot wall transfers energy to a gas!
  So when did we transition from doing work to supplying heat?

  The point is that there is no sharp distinction. There’s just energy transfer; work is the
  subset of energy transfers that we keep track of in detail, and heat is the subset we don’t.
  Entropy quantifies our ignorance of the precise state a system is in. That’s why supplying
  heat changes the entropy and doing work doesn’t.

  Remark: Is Entropy Subjective?

  Our definition of entropy involved the number of states the system “could” be in, but of
  course in reality the system is actually in just one state. We really mean the number of
  states the system could be in given the information you know. For example, for an ideal gas
  we usually know the temperature, pressure, and volume.

  You might find this disturbing because it implies the entropy is subjective, depending on
  what each person personally knows. But the entropy determines things like F , and hence
  the amount of work that can be extracted from the system, so how could it differ?

  In fact, there is no contradiction between these two things. For example, suppose that
  besides the usual properties, particles in an ideal gas can be slightly bigger or smaller. If
  you happen to somehow know that all of the big particles are on the left side of a box and
  all the small particles are on the right side, then the entropy you assign to the box is lower
  than somebody who doesn’t know about this, and accordingly you can extract more work
  from the box. For instance, you can put a filter that only allows small particles through in
  the middle, then collect energy as small particles move from right to left.

  On the other hand, if you are hit on the head and forget that the particles are sorted by size,
  your entropy for the gas goes up. And accordingly, you can now extract less work, because
  you wouldn’t know it made sense to put in such a filter in the first place!

  While this example may seem contrived, it’s actually exactly the same as our earlier mixing
  entropy example! If you don’t have any equipment that can distinguish between oxygen and
  nitrogen molecules, then the “unmixed” state already has just as much entropy as the mixed
  state. In this case, the entropy doesn’t change at all when you allow the gases to mix.

  What this example shows is that you don’t have to know everything about a system to use
  thermodynamics. Even if you are wrong about how the system behaves microscopically, you
  can still use the theory to describe what you can do with the system, using your knowledge.
  That’s the core reason for the longevity of thermodynamics. As a recent paper put it:
       If physical theories were people, thermodynamics would be the village witch. Over
       the course of three centuries, she smiled quietly as other theories rose and withered,
       surviving major revolutions in physics, like the advent of general relativity and
       quantum mechanics. The other theories find her somewhat odd, somehow different
       in nature from the rest, yet everyone comes to her for advice, and no one dares


                                                13


   Kevin Zhou                                                                 Physics Olympiad Handouts



             to contradict her.

       For more about this perspective, see the insightful articles by E.T. Jaynes, The Gibbs Paradox
       and Information Theory and Statistical Mechanics. (But don’t read too much of his later
       work, since he got pretty cranky with age.)


   4    Blackbody Radiation
       Idea 9: Planck’s Law
       As we will show in X1, the radiation power per unit area from an object at temperature T
       at frequency f , per unit frequency, is given by Planck’s law,

                                                2πhf 3         1
                                      I(f ) =      2     hf /k   T −1
                                                                      e(f )
                                                  c    e       B


       where e(f ) is called the emissivity. For an ideal blackbody, e(f ) = 1. By integrating over all
       frequencies, one finds that the total power per unit area from an ideal blackbody is
                                        Z ∞
                                                                   2π 5 kB
                                                                         4
                                   J=        I(f ) df = σT 4 , σ =         .
                                          0                        15c2 h3

       This is the Stefan–Boltzmann law, which can also be derived with dimensional analysis. It’s
       a compact and useful result, which means it comes up quite often in Olympiads.
