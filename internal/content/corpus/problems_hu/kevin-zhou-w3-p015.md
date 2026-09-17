---
id: "kevin-zhou-w3-p015"
source: "kevin-zhou"
native_id: "KZ-W3-P015"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-w3-p015"
topic: [hullámfizika, folyadékmechanika]
subtopic: [mélyvízi hullámok, fázis- és csoportsebesség, diszperzió, fénytörés]
math_tools: [analízis, energiamódszerek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/W3.txt"
source_url: "sources/kevin_zhou/site/handouts/W3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

## Feladat szövege

[2] Problem 15 (Japan). In the above problem, we considered shallow water waves, D ≪ λ, in which
    case the motion of the water is approximately horizontal. But in general, it turns out that the
    motion of the water will depend on height, and also that the individual water molecules move in
    ellipses. (This happens even when the wave has small amplitude, which we will always assume; the
    motion for large amplitude is even more complicated.) In the limit of deep water waves, D ≫ λ,
    the water molecules move in circles. Using this fact, we can quickly derive the wave speed.
        Assume the water molecules at the surface of the wave move in uniform circular motion with
    radius a and angular velocity ω, as shown.

     (a) Consider the frame of reference moving to the right with velocity v. In this frame, the surface
         of the water is completely stationary, while molecules travel along the surface. Consider a
         small parcel of water which travels from a valley to a peak. By applying conservation of
         energy, derive a relationship between v, ω, and g.

     (b) Find the phase and group velocity of the wave, in terms of g and the wavenumber k. In
         addition, find the condition on a and k for this derivation to make sense.

    Showing that circular motion actually occurs takes more work, and involves solving partial differential
    equations; you can find a complete derivation here or in the first chapter here.

    As you can see, water waves are quite complex. A diagram of the speeds of nine different limiting
    cases of water waves can be found in section 8.4 of The Art of Insight.

    4    Reflection and Refraction
    Now we’ll introduce reflection and refraction with some real-world applications.

        Idea 4
        If a wave hits an interface, while traveling at an angle θ1 to the normal to the interface, then
        it will generically both reflect and refract. The angle of the reflected ray is also θ1 , and the
        angle θ2 of the refracted ray obeys n1 sin θ1 = n2 sin θ2 . If there is no solution for θ2 in the
        latter equation, then only reflection occurs.

                                                       8
    Kevin Zhou                                                            Physics Olympiad Handouts

       These results follow directly from Huygens’ principle, so they are very general, applying to
       light waves, sound waves, water waves, and so on, as long as the index of refraction ni is
       always defined to be inversely proportional to the wave speed in each medium.
