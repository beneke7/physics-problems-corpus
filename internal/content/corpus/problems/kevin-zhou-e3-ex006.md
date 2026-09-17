---
id: "kevin-zhou-e3-ex006"
source: "kevin-zhou"
native_id: "KZ-E3-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e3-ex006"
topic: [magnetostatics]
subtopic: [solenoids, ampere-law, magnetic-dipoles]
math_tools: [vector-calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 6

       Find the magnetic field of an infinite cylindrical solenoid, of radius R and n turns per unit
       length, carrying current I.




                                                      12
Kevin Zhou                                                              Physics Olympiad Handouts


  Solution
  Orient the solenoid along the vertical direction and use cylindrical coordinates. By symmetry,
  the field must be independent of z. Now consider the radial component of the magnetic field
  Br . Turning the solenoid upside-down is equivalent to reversing the current. But the former
  does not flip Br while the latter does, so we must have Br = 0.

  Now, by rotational symmetry, the tangential component Bϕ must be uniform. But then
  Ampere’s law on any circular loop gives Bϕ (2πr) = 0, so we must have Bϕ = 0 as well.

  The only thing left to consider is Bz . By applying Ampere’s law to small vertical rectangles, we
  see that Bz is constant unless that rectangle crosses the surface of the solenoid. Furthermore,
  Bz must be zero far from the solenoid, so it must be zero everywhere outside the solenoid.
  Now, for a rectangle of height h that does cross the surface, Ampere’s law gives
                                I
                                    B · ds = Bzin h = µ0 Ienc = µ0 nIh

  which tells us that Bzin = µ0 nI.

  Example 7

  Now suppose the solenoid has finite length L ≫ R. What do the fringe fields look like?

  Solution
  In principle we could solve for the exact fringe field by applying the Biot–Savart law to
  the solenoid wire, but that would be rather complicated. Instead, let’s approximate the
  solenoid as a stack of N = nL evenly spaced circular wire loops. Each one of these loops is a
  magnetic dipole µ = πR2 I, so the field of each loop well outside of it is just a dipole field.

  Summing up all of these dipole fields is still complicated, so let’s use idea 7. We can replace
  each wire loop with a pair of magnetic charges ±qm separated by d, with the same magnetic
  dipole moment µ = qm d. We can vary qm and d while keeping µ fixed, so for convenience
  let’s set d equal to the spacing 1/n between loops. Then the charges of adjacent dipoles
  cancel, leaving only charges qm = ±nµ = ±πR2 nI on the ends.

  Thus, the fringe field of a solenoid, at distances much greater than R, looks like the elec-
  tric field of two point charges! This is confirmed by a numeric calculation shown at left below.




                                                 13
Kevin Zhou                                                             Physics Olympiad Handouts




  This may come as a surprise to you if you’ve read basic, algebra-based introductory physics
  textbooks. Many of them contain hand-drawn diagrams like the one shown at right above,
  where all the magnetic flux comes neatly out the ends of the solenoids, in straight lines. In
  reality, the field sprays out almost spherically symmetrically from the end, with only half
  the flux actually going out through the end face, while the rest exits downward through the
  sides. (You will show this more directly with a slick argument in problem 23.)

  We can also be more quantitative. Suppose the solenoid is vertical and centered at z = 0.
  Then the field at a radius r from the solenoid axis, at z = 0, is
                                            
                                            1
                                                          r<R
                           B(r) = µ0 nIẑ × −2R /L 2   2   R≪r≪L
                                            
                                                2       3
                                             −R L/4r L ≪ r

  where the first line is the usual solenoid field, the second line is from applying Coulomb’s
  law to our dipole analogy (which is only valid when R ≪ r), and the third is from the dipole
  field of the two charges (only valid when L ≪ r). As expected, in the limit L ≫ R, the
  fringe field outside the solenoid is negligible. Another way of phrasing the result is that most
  of the upward flux through the solenoid returns through a downward field which mainly
  extends out to r ∼ L. You can see all of these features in the accurate drawing above.

  We can draw two lessons from this example. First, misleading diagrams are a common
  problem in introductory textbooks. A general rule is that the more basic a textbook is, the
  more pictures it’ll have, but the less useful they’ll be. Second, the analogy between Ampere
  and Gilbert dipoles is quite useful, and shows up frequently in tricky Olympiad problems.

  Remark: Real Solenoids
  Real solenoids are even more complicated. First, we didn’t account for the discreteness of
  the wires. We just treated them as forming a uniform current per length K = nI, which is
  how we wrote Ienc = nIh. This is valid when you don’t care about looking too closely, i.e. if
  your distance to any wire is much larger than the wire spacing 1/n.




                                                14
    Kevin Zhou                                                               Physics Olympiad Handouts



       Second, the fact that solenoids are made by winding real wires means there is another
       contribution to the current, even in the limit n → ∞. The wires are wound with a small
       slope, since a net current I still has to move along the solenoid. Another way of saying
       this is that the current per length along the solenoid surface is K = nI θ̂ + (I/2πR)ẑ. This
       causes a tangential magnetic field Bϕ = µ0 I/2πr outside the solenoid. Thus, in practice
       many solenoids are “counterwound”: half the wires are wound evenly spaced going up the
       axis, and the other half are wound evenly spaced going back down the axis, which closes the
       loop and cancels this unwanted field.
