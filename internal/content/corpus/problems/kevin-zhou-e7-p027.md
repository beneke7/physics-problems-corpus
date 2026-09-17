---
id: "kevin-zhou-e7-p027"
source: "kevin-zhou"
native_id: "KZ-E7-P027"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e7-p027"
topic: [electromagnetism]
subtopic: [transmission-lines, em-waves, ac-circuits]
math_tools: [complex-numbers, differential-equations]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E7.txt"
source_url: "sources/kevin_zhou/site/handouts/E7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

In this problem, we treat electromagnetic wave propagation through a transmission
    line using a “lumped element” approach, where the line is replaced with discrete capacitors and
    inductors, as shown. (This is an example of a network synthesis, mentioned in E6.)

      (a) Calculate the characteristic impedance Z0 (ω) of the entire network, as shown below.

                              L/2      L/2      L/2        L/2

                       V0              C                C         ···   = V0                Z0




                                                      15


 (b) The diagram below shows two adjacent sections of the ladder.
                                                      In       In+1


                           ···                 Vn                     Vn+1 · · ·


     Find the ratio of the complex voltage amplitudes Vn+1 /Vn .

 (c) The AC driving attempts to create electromagnetic waves which travel through the network,
     to the right. It turns out that above a certain critical angular frequency ωc , waves will not
     travel through the ladder network. Find ωc . (Hint: this can be done using either the result of
     part (a) or part (b).)

 (d) For angular frequencies ω ≪ ωc , waves travel through the ladder with a constant speed. Find
     this speed, assuming each segment of the ladder has physical length ℓ. (Hint: the speed of a
     wave obeys v = dω/dk.)

 (e) You should have found in one of the earlier parts that the impedance of this infinite network
     can be a real number, even though it’s made of parts which all have imaginary impedance.
     That sounds strange, but what’s even stranger is that we should be able to handle this infinite
     circuit by taking the limit of progressively larger finite circuits, just as we did for a similar
     network of resistors in E2. But for any finite LC network, the impedance will be imaginary,
     so the limit must be imaginary too! On one hand, we should trust the finite result because
     all real circuits are finite. On the other hand, the real impedance we get for the infinite result
     certainly can be measured in real life. So what’s going on?




                                                 16
