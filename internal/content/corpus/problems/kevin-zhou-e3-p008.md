---
id: "kevin-zhou-e3-p008"
difficulty_level: 5
source: "kevin-zhou"
native_id: "KZ-E3-P008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e3-p008"
topic: [electromagnetism]
subtopic: [dc-circuits, resistor-networks, variational-principles]
math_tools: [calculus, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[A] This problem is just for fun; the techniques used here are too advanced to appear on
    Olympiads. We will prove Rayleigh’s monotonicity law, which states that increasing the resistance
    of any part of a resistor network increases the equivalent resistance between any two points. This
    may seem obvious, but it’s actually tricky to prove. The following is the slickest way.
      (a) Consider a graph of resistors, where a battery is attached across two of the vertices, fixing
          their voltages. Write an expression for the total power dissipated, assuming the voltages at
          each vertex are Vi and the resistances are Rij .
     (b) The voltages Vi at all the other vertices are determined by Kirchhoff’s rules. But suppose you
         didn’t know that, or didn’t want to set up those equations. Remarkably, it turns out that

                                                      6


Kevin Zhou                                                                     Physics Olympiad Handouts


     you can derive the exact same results by simply treating the voltages Vi as free to vary, and
     setting them to minimize the total power dissipated! Show this result. (This is an example of
     a variational principle, like the principle of least action in mechanics.)

 (c) For any network of resistors, show that P = V 2 /R when V is the battery voltage applied
     across two vertices, R is the equivalent resistance between them, and P is the total power
     dissipated in the resistors. (This is intuitive, but it’s worth showing in detail to assist with
     the next part.)

 (d) By combining all of these results, prove Rayleigh’s monotonicity law.

 (e) We can use Rayleigh’s monotonicity law to prove some mathematical results. Consider the
     resistor network shown below, where the variables label the resistances.
                                             a             P        b


                                             b             Q        a

     By considering the resistances before and after closing the switch P Q, show that the arithmetic
     mean of two numbers is at least the geometric mean.

 (f) Consider the resistor network shown below.
                               a1                a2                            an
                                                                    ···

                               a2                a3                             a1
                                                                    ···
                                ..      ..        ..           ..         ..    ..
                                 .       .         .            .          .     .
                              an−1               an                            an−2
                                                                    ···
                               an                a1                            an−1
                                                                    ···

     By closing all the switches, show that the arithmetic mean of n numbers is at least the
     harmonic mean.

  Remark
  You might think that Rayleigh’s monotonicity law is too obvious to require a proof; if you
  decrease a resistance, how could the net resistance possibly go up? In fact, this kind of
  non-monotonicity occurs very often! For example, Braess’s paradox is the fact that adding
  more roads can slow down traffic, even when the total number of cars stays the same. A U.S.
  Physics Team coach has argued that allowing more team strategies can make a basketball
  team score less. For more on this subject, see the paper Paradoxical behaviour of mechanical
  and electrical networks or this video.




                                                       7


Kevin Zhou                                                                      Physics Olympiad Handouts


    Remark
    Circuit questions can get absurdly hard, but at some point they start being more about
    mathematical tricks than physics. As a result, I haven’t included any such problems here;
    they tend not to appear on the USAPhO or IPhO, or in college physics, or in real life, or really
    anywhere besides a few competitions. On the other hand, you might find such questions fun!
    For some examples, see the Physics Cup problems 2013.6, 2017.2, 2018.1, and 2019.4.
