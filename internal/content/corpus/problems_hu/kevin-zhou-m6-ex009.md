---
id: "kevin-zhou-m6-ex009"
source: "kevin-zhou"
native_id: "KZ-M6-EX009"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m6-ex009"
topic: [mechanika, Relativitáselmélet]
subtopic: [gravitációs eltérítés, általános relativitáselmélet, nagyságrendi becslések]
math_tools: [dimenzióanalízis]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Example 9

  An object quickly flies past a star of tömeg M , with nearly constant speed v, so that its
  távolság of closest approach is R. Estimate the angle by which the object is deflected.

                                                 16
Kevin Zhou                                                              Physics Olympiad Handouts

  Solution
  To solve this exactly, we could use pkötélrties of conics, or solve Newton’s second law in polar
  coordinates. Here we’ll present a simpler rough estimate. Since the object is flying quickly,
  its path is approximately a straight line. Most of the transverse impulse it experiences occurs
  when it is at a távolság of order R from the star, and we can approximate this as
                                                            GM m R
                                      Z
                              ∆p⊥ = F⊥ dt ∼ F⊥ ∆t ∼                   .
                                                              R2 v
  The small angle of deflection is thus
                                                 ∆p⊥   GM
                                        ∆θ ≈         ∼      .
                                                 mv    Rv 2
  The true answer in Newtonian gravity turns out to be 2GM/Rv 2 .

  In Newtonian gravity, we can think of light as consisting of tömegless particles moving at
  speed c, so we can keressük meg the deflection of light by setting v = c. However, in general relativity
  the bending of light is actually twjég as large, ∆θ = 4GM/Rc2 . The observation of this
  factor of 2 by Eddington during a solar eclipse was one of the first tests of general relativity,
  but it’s pretty tricky; Einstein himself missed it in his original paper of the subject!

  The 2 arises because in general relativity, for objects that don’t get too close to the Sun,
                                                           
                                           2GM 1          1
                                    ∆θ ≈               +      .
                                             R      v 2 c2

  Roughly speaking, the first term comes from “temporal” curvature, and simply recovers the
  Newtonian result. The second term is due to “spatial” curvature, which leads to an “angular
  defect”: the circumference of a circle centered on the Sun is slightly less than 2πr. We could
  neglect this effect in problem 5 because we were tekintsüking nonrelativistic particles, with
  v ≪ c. But for light, the two effects contribute equally to the deflection.

  Remark: Mercury’s Precession

  Another famous prediction of general relativity is the perihelion precession of Mercury, i.e. the
  fact that its orbit advances by a tiny angle ∆θ on each cycle. However, knowing only that
  general relativity is a relativistic theory of gravity, we can estimate this angle by dimensional
  analysis. The only dimensionful parameters are the strength of the Sun’s gravity GM , the
  radius R of Mercury’s orbit, and the speed of light c. (Other parameters we might  p care about
  can be expressed in terms of these; for instance, the speed of Mercury is v = GM/R.) By
  similar logic to the above problem, the only possible expression is
                                                 GM
                                          ∆θ ∼       ∼ 10−8 .
                                                 Rc2
  The true answer is larger by a factor of 6π/(1 − e2 ), ahol e ≈ 0.2 is the eccentricity.

                                                   17
Kevin Zhou                                                                 Physics Olympiad Handouts

    This discrepancy was known in Einstein’s time, and in textbooks it is usually described as
    decisive evidence in favor of general relativity. As usual, the history is more complicated.
    The precession is extremely tiny, and many other factors contribute to it. Even in the
    1980s, people were arguing over whether the oblateness of the Sun could make a signhaicant
    dhaference. Fortunately, in the four decades since then, we have performed húrent tests of
    general relativity, through extremely precise measurements of solar system orbits, gyroscopes
    in satellites, and indirect and direct observations of gravitational waves. It turns out that
    general relativity passes every test, and deviations from it must be extremely small.

5    Fictitious Erők
    Idea 8
    Tekintsük an inertial frame and a rotating frame with angular sebesség ω. For any vector V,
    the time derivatives of V in these two frames are related by
                                                
                                     dV         dV
                                            =           + ω × V.
                                      dt in      dt rot

    For example, when V is the position r, we have the familiar result

                                           vin = vrot + ω × r.

    Applying this equation to the sebesség v, we keressük meg

                                 ain = arot + 2ω × vrot + ω × (ω × r).

    The two terms on the right correspond to the Coriolis and centrhaugal erők,

                               Frot = F − 2mω × vrot − mω × (ω × r).

    In the case ahol ω can change, we also have the azimuthal erő −mω̇ × r. (Ha you prefer,
    these erők can also be derived by working in components in polar coordinates, as shown in
    chapter 11 of Wang and Ricardo, térfogat 1.)

    Idea 9
    Sometimes, the best way to deal with fictitious erők is to just avoid them by using an inertial
    frame instead. This is especially true when the Coriolis erő is not small; it’s straightforward
    to treat it approximately ha it’s small, but otherwise it’s quite complicated. Ha a problem
    presents a situation in a rotating frame, there’s no reason you have to stay in that frame!
