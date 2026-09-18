---
id: solution-document-apho-2017-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2017/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2017-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2017/T3_S.pdf."
---

Space Debris
                                      APhO 2017

Introduction
In more than half a century of space operations quite a large number of man-made objects have
been amassed near Earth. The objects that do not serve any particular purpose are called space
debris. The most attention is usually paid to the larger debris objects, i.e. defunct satellites
and spent rocket upper stages, which stay in orbit after delivering their payload. Collisions
of such objects with each other may result in thousands of fragments endangering all current
space missions.
   There is a well-known hypothetical scenario, according to which certain collisions may cause a
cascade where each subsequent collision generates more space debris that increase the likelihood
of new collisions. Such a chain reaction, resulting in the loss of all near-Earth satellites and
making impossible further space programs, is called the Kessler syndrome.
   To prevent such undesirable outcome special missions are planned to remove large debris ob-
ject from their present orbits either by tugging them to the Earth’s atmosphere or to graveyard
orbits. To this end a specially designed spacecraft – a space tug – must capture a debris object.
However, before capturing an uncontrolled object it is important to understand its rotational
dynamics.
   We suggest you to take part in planning of such a mission and find out how the rotational
dynamics of a debris object changes in time under the influence of different factors.


Rocket Stage Schematic
The debris object to be considered is a “Kerbodyne 42” rocket upper stage, whose schematic
is shown in Fig. 1. The circle line in Fig. 1 marks the outline of a spherical fuel tank.

                                                    y



                                                                          x
                                                C



                            Figure 1: “Kerbodyne 42” upper stage

  We introduce a body-fixed reference frame 𝐶𝑥𝑦 with the origin in the center of mass 𝐶, 𝑥
being the symmetry axis of the stage, and 𝑦 perpendicular to 𝑥. The inertia moments with
respect to 𝑥 and 𝑦 axes are 𝐽𝑥 and 𝐽𝑦 (𝐽𝑥 < 𝐽𝑦 ).


A. Rotation
Consider an arbitrary initial rotation of the stage with angular momentum 𝐿 (Fig. 2), where
𝜃 is the angle between the symmetry axis and the direction of angular momentum. Fuel tank



                                               1

at this point is assumed to be empty. No forces or torques act upon the stage.


                                                              L
                                                                  ω


                                                        θ
                                              C



                                 Figure 2: Rocket stage rotation

  1.(0.2 pts) Find the projections 𝜔𝑥 and 𝜔𝑦 of angular velocity ⃗𝜔 on 𝑥 and 𝑦, given that
⃗
𝐿 = 𝐽𝑥 𝜔𝑥 𝑒⃗𝑥 + 𝐽𝑦 𝜔𝑦 𝑒⃗𝑦 for material symmetry axes 𝑥 and 𝑦 with unit vectors 𝑒⃗𝑥 and 𝑒⃗𝑦 . Provide
the answer in terms of 𝐿 = |𝐿|,  ⃗ angle 𝜃, and inertia moments 𝐽𝑥 , 𝐽𝑦 .


                                                  𝐿 cos 𝜃
                                           𝜔𝑥 =           ,                                (A1)
                                                    𝐽𝑥
   0.1 point



                                                  𝐿 sin 𝜃
                                           𝜔𝑦 =           .                                (A2)
                                                    𝐽𝑦

   0.1 point

   2.(0.4 pts) Find the rotational energy 𝐸𝑥 associated with rotation 𝜔𝑥 and 𝐸𝑦 associated
with rotation 𝜔𝑦 . Find total rotational kinetic energy 𝐸 = 𝐸𝑥 + 𝐸𝑦 of the stage as a function
of the angular momentum 𝐿 and cos 𝜃.

                                                𝐽𝑥 𝜔𝑥2
                                           𝐸𝑥 =        ,                                   (A3)
                                                  2
   0.1 points


                                                𝐽𝑦 𝜔𝑦2
                                           𝐸𝑦 =        ,                                   (A4)
                                                  2
   0.1 points




                                                  2

                       𝐽𝑥 𝜔𝑥2 𝐽𝑦 𝜔𝑦2   𝐿2𝑥   𝐿2𝑦   𝐿2    𝐿2
                                                                   (︂           )︂
                                                                        1   1
      𝐸(𝜃) = 𝐸𝑥 + 𝐸𝑦 =       +       =     +     =     +                  −          cos2 𝜃.   (A5)
                         2      2      2𝐽𝑥 2𝐽𝑦     2𝐽𝑦   2              𝐽𝑥 𝐽𝑦


   0.2 points

  In the following questions of Section A consider the stage’s free rotation with the initial
angular momentum 𝐿 and 𝜃(0) = 𝜃0 .
  3. (1.2 pts) Let us denote by 𝑥0 the initial orientation of the stage’s symmetry axis 𝐶𝑥
with respect to the inertial reference frame. Using conservation laws find the maximum angle
𝜓, which the stages symmetry axis 𝐶𝑥 makes with 𝑥0 during the stage’s free rotation.
  Note: Since there are no external torques acting upon the stage, the angular momentum
vector remains constant.
   Both kinetic energy and angular momentum are conserved, and cos2 𝜃 can be obtained
   from equation A5.
   Consequently, the set of values that 𝜃 can take is discrete (one value in each quadrant for
   every value of cos2 𝜃), and in the process of continuous motion 𝜃 cannot change its initial
   value. Therefore the stage’s axis of symmetry moves around 𝐿     ⃗ making a conic surface
   with aperture 2𝜃0 . Consequently

                                            𝜓 = 2𝜃0 .                                          (A6)


   1.2 points for the correct answer for 𝜓.
   If the correct answer is not provided 1.0 point is given for the proof that 𝜃(𝑡) = 𝜃0 and
   does not change in time.
   If this is not done:

      ∙ 0.2 points for the formula expressing the angular momentum conservation,

      ∙ 0.2 points for the formula expressing the energy conservation,

      ∙ 0.2 points for the formula expressing 𝜃 through any given constant parameters of
        the problem




                                               3

                                               y1

                                          L

                                         Ω

                                                θ
                                                                         x1
                                           C




                                           Figure 3:

   Let us now introduce the reference frame 𝐶𝑥1 𝑦1 𝑧1 with 𝑦1 along the constant angular mo-
mentum vector 𝐿 ⃗ (Fig. 3). This reference frame rotates about 𝑦1 in such a way, that the stage’s
symmetry axis always belongs to the 𝐶𝑥1 𝑦1 plane.
   4. (2.0 pts) Given 𝐿, 𝜃(0) = 𝜃0 and inertia moments 𝐽𝑥 , 𝐽𝑦 , find the angular velocity Ω(𝑡)
of the reference frame 𝐶𝑥1 𝑦1 about 𝑦1 and direction (i.e. angle 𝛾𝑠 (𝑡) that ⃗𝜔𝑠 (𝑡) makes with
the symmetry axis 𝐶𝑥) and absolute value of angular velocity of the stage ⃗𝜔𝑠 (𝑡) relative to the
reference frame 𝐶𝑥1 𝑦1 as functions of time.
                                                                ⃗ + ⃗𝜔𝑠 .
   Note: angular velocity vectors are additive ⃗𝜔 = ⃗𝜔𝑥 + ⃗𝜔𝑦 = Ω

   The symmetry axis is at rest with respect to the rotating reference frame, because 𝜃(𝑡) =
   𝜃0 and the symmetry axis always belongs to the 𝐶𝑥1 𝑦1 plane. Hence, ⃗𝜔𝑠 must be collinear
   to the symmetry axis at all times. Thus

                                           𝛾𝑠 (𝑡) = 0.



   0.5 points


                      ⃗ + ⃗𝜔𝑠 onto 𝐶𝑥 and 𝐶𝑦 yields for any 𝑡:
   Projecting the sum Ω

                                                      𝐿 cos 𝜃
                                  𝜔𝑠 + Ω cos 𝜃 = 𝜔𝑥 =         ,                          (A7)
                                                        𝐽𝑥
                                                      𝐿 sin 𝜃
                                       Ω sin 𝜃 = 𝜔𝑦 =         .                          (A8)
                                                        𝐽𝑦


   0.25 points for each of the equations A7 and A8




                                               4

   Whence
                                                       𝐿
                                                Ω=        .                                 (A9)
                                                       𝐽𝑦
   Thus Ω does not depend on time.

   1.0 points


   Taking into account that 𝜃(𝑡) = 𝜃0 :
                                           (︂            )︂
                                                1   1
                                    𝜔𝑠 =          −           𝐿 cos 𝜃0 .                   (A10)
                                                𝐽𝑥 𝐽𝑦

   And 𝜔𝑠 also does not depend on time.

   0.5 points


   NB:
   1.0 points is given for the correct answer for Ω.
   For 𝜔𝑠 0.5 points is given for the direction of 𝜔⃗𝑠 (along 𝐶𝑥)
   0.5 points is given for A10

   Alternatively:
   0.25 points is given for any of the A7, A8 equations



B. Transient Process
Most of the propellant is used during the ascent, however, after the payload has been separated
from the stage, there still remains some fuel in its tank. Mass 𝑚 of residual fuel is negligible in
comparison to the stage’s mass 𝑀 . Sloshing of the liquid fuel and viscous friction forces in the
fuel tank result in energy losses, and after a transient process of irregular dynamics the energy
reaches its minimum.
   1.(0.6 pts) Find the value 𝜃2 of angle 𝜃 after the transient process, for arbitrary initial values
of 𝐿 and 𝜃(0) = 𝜃1 ∈ (0, 𝜋/2) .

   Interaction of the residual fuel with the fuel tank walls can be considered an internal
   force. Hence, as before, no external forces or torques act upon the system, and the
   angular momentum is conserved.
   For the given initial value of 𝜃 and knowing that 𝐽𝑥 < 𝐽𝑦 , it is easily shown from A5 that
   𝐸(cos 𝜃) reaches its minimum for 𝜃 = 𝜋/2.
   Thus
                                                  𝜋
                                            𝜃2 = .                                       (B1)
                                                  2


   0.6 points




                                                   5

  2.(0.6 pts) Calculate the value 𝜔2 of angular velocity 𝜔 after the transient process, given
that initial angular velocity 𝜔(0) = 𝜔1 = 1 𝑟𝑎𝑑/𝑠 makes an angle of 𝛾(0) = 𝛾1 = 30∘ with the
stage’s symmetry axis. The moments of inertia are 𝐽𝑥 = 4200 𝑘𝑔 · 𝑚2 and 𝐽𝑦 = 15 000 𝑘𝑔 · 𝑚2 .

   B1 implies that after the transient process the stage rotates about the axis perpendicular
   to its symmetry axis.

   0.2 points


   Final angular velocity value 𝜔2 can be obtained from the angular momentum conservation
   law:                                  √︁
                                    𝐿       𝐽𝑥2 cos2 𝛾1 + 𝐽𝑦2 sin2 𝛾1
                             𝜔2 =     =                               𝜔1            (B2)
                                   𝐽𝑦                 𝐽𝑦


   0.2 points


                                        𝜔2 ≈ 0.56 𝑟𝑎𝑑/𝑠.                                  (B3)



   0.2 points



C. Magnetic Field
Another important factor in rotational dynamics of a debris rocket stage, which is orbiting
the Earth, is its interaction with the Earth’s magnetic field. Let us first consider an auxiliary
problem.

Torque due to Eddy Currents
Let us place a thin-walled nonmagnetic spherical shell with wall thickness 𝐷 and radius 𝑅 in
a uniform magnetic field ⃗
                         𝐵, which slowly changes so that its derivative 𝐵 ⃗˙ is a constant vector
                                     ⃗ (Fig. 4). Electrical resistivity of the shell’s material is
making angle 𝛼 with the direction of 𝐵
𝜌.




                                                6

                                    B
                                    α           B
                                                                    R

                                        y



                                                       x
                                z


                          Figure 4: Spherical shell in magnetic field

  1. (1.0 pts) Find the induced magnetic moment ⃗𝜇 of the shell, neglecting its self-inductance.
Provide the answer for ⃗𝜇 in the form of projections on 𝑥𝑦𝑧 (see Fig. 4).

                                                  ⃗˙ is perpendicular to their planes and
   Let us cut the sphere into ring slices so that 𝐵
   introduce angle 𝜙 as shown in Fig. 5.




                                            B
                                                                φ

                                        y



                                                       x
                                z


                                                    Figure 5:


   According to Faraday’s law the absolute value of eddy current EMF, induced in such a
   slice by the varying magnetic field is

                                    ℰ = Φ̇ = 𝑆 𝐵˙ = 𝜋𝑅2 sin2 𝜙𝐵˙                        (C1)



   0.2 points




                                                        7

   The ring slice resistance is
                                               2𝜋𝜌𝑅 sin 𝜙
                                        𝑑𝑟 =              .                           (C2)
                                                 𝐷𝑅𝑑𝜙


   0.2 points


   Current in the ring slice
                                                 1
                                  𝑑𝐼 = ℰ/𝑑𝑟 =      𝐷𝑅2 𝐵˙ sin 𝜙𝑑𝜙                     (C3)
                                                2𝜌


   0.1 points


   And, finally, magnetic moment:
                                         𝜋                    1 ˙
                           𝑑𝜇 = 𝑆𝑑𝐼 =       𝐷𝑅4 𝐵˙ sin3 𝜙𝑑𝜙 = 𝐵𝑑𝐽,                    (C4)
                                         2𝜌                  4𝜌
   where 𝑑𝐽 is the moment of inertia for a slice ring of unit density with respect to the
   central axis, which is parallel to 𝑦.

   0.2 points


   Thus
                                          1 ˙    2𝜋     ˙
                                    𝜇=      𝐽𝐵 =    𝐷𝑅4 𝐵,                            (C5)
                                         4𝜌      3𝜌
   where 𝐽 is the moment of inertia of the sphere with respect to the axis, passing through
   its center. Taking into account the direction:

                                            𝜇𝑥 = 0,                                   (C6)
                                               2𝜋    ˙
                                        𝜇𝑦 = − 𝐷𝑅4 𝐵,                                 (C7)
                                               3𝜌
                                             𝜇𝑧 = 0.                                  (C8)



   0.1 points for each ⃗𝜇 component

  2. (0.3 pts) Find the torque 𝑀 ⃗ acting on the spherical shell. Provide the answer for 𝑀
                                                                                         ⃗ in
the form of projections on 𝑥𝑦𝑧 (see Fig. 4).




                                                 8

                          ⃗ = [⃗𝜇, ⃗
   The torque is given by 𝑀        𝐵]. It is directed along the 𝑧 axis and equals
                                                   2𝜋
                              𝑀𝑧 = 𝜇𝐵 sin 𝛼 =         𝐷𝑅4 𝐵 𝐵˙ sin 𝛼.                    (C9)
                                                   3𝜌


                       ⃗ component
   0.1 points for each 𝑀


   NB: Alternatively, if the task of the previous assignment (find ⃗𝜇) is not completed, but
   the answer for 𝑀⃗ is, nevertheless, provided, the points for intermediate steps from the
   previous assignment (except 0.3 points for ⃗𝜇 components) are redistributed for the actions
           ⃗.
   to find 𝑀


Attitude Motion Evolution in the Earth’s Magnetic Field
Let us find out how the rotation changes for a rocket stage, which moves in a circular polar
orbit with orbital period 𝑇 = 100 𝑚𝑖𝑛 (Fig. 6). It transpires that the characteristic times of
dynamics due to interaction with the geomagnetic field are much greater than the duration of
the transient process. We will now study what happens to the rocket stage after the transient
process has completed. To start our analysis consider the stage rotating with angular velocity
𝜔2 about the axis perpendicular to the orbital plane.

                                                     Y



                                                         ω




                                                         u
                          Z                   μE


                                                                        X




                                      Figure 6: The orbit

  1.(0.4 pts) The Earth’s magnetic field 𝐵  ⃗ 𝐸 can be modeled as the magnetic field of a point
dipole in the Earth’s center. Its dipole moment ⃗𝜇𝐸 is directed opposite to 𝑌 axis. The absolute
value of the Earth’s magnetic field 𝐵 at the point where the orbit crosses the equatorial plane



                                               9

𝑋𝑍 is 𝐵0 = 20 𝜇𝑇 . Find 𝐵   ⃗ 𝐸 (𝑢) at a current position of the stage in the orbit defined by
the angle 𝑢 as shown in Fig. 6. The positive direction of 𝑢 is along with the orbital motion.
Provide the answer in the form of the projections of 𝐵   ⃗ 𝐸 (𝑢) on 𝑋𝑌 𝑍 axes.
  Note: Magnetic field of a dipole at point ⃗𝑟 is given by
                                          (︂                    )︂
                                  ⃗    𝜇0 3 (⃗𝜇 · ⃗𝑟) ⃗𝑟     ⃗𝜇
                                  𝐵=                     − 3 .
                                       4𝜋        𝑟5         𝑟
                                                                     ⃗ 𝐸 (𝑢) are given as functions
   Note: It may facilitate subsequent calculations if projections of 𝐵
of 2𝑢 instead of 𝑢.
   Let 𝑅𝑂 be the orbit radius. The dipole field formula at point ⃗𝑟 = (𝑅𝑂 cos 𝑢, 𝑅𝑂 sin 𝑢, 0)
   and ⃗𝜇 = (0, −⃗𝜇𝐸 , 0) yield
                                           3 𝜇0 𝜇𝐸
                                     𝐵𝑋 = −       3
                                                     sin 2𝑢,                             (C10)
                                           2 4𝜋𝑅𝑂
                                                    )︀ 𝜇0 𝜇𝐸
                                   𝐵𝑌 = 1 − 3 sin2 𝑢
                                       (︀
                                                            3
                                                              ,                          (C11)
                                                       4𝜋𝑅𝑂
                                          𝐵𝑍 = 0.                                        (C12)



                 ⃗ component, if no final answer (see below) is obtained.
   0.05 for each 𝐵


   At point, where the orbit passes through the equatorial plane (𝑢 = 0) the magnetic field
   is

                                               𝐵𝑋 = 0,                                   (C13)
                                                  𝜇0 𝜇𝐸
                                             𝐵𝑌 =      3
                                                         ,                               (C14)
                                                  4𝜋𝑅𝑂
                                               𝐵𝑍 = 0.                                   (C15)
             𝜇0 𝜇𝐸
   Thus 𝐵0 = 4𝜋𝑅 3 .
                  𝑂


   0.1 points for 𝐵0


   Finally, the Earth’s magnetic field is:
                                                3
                                     𝐵𝑋 (𝑢) = − 𝐵0 sin 2𝑢,                               (C16)
                                                2
                                          1
                                 𝐵𝑌 (𝑢) = (3 cos(2𝑢) − 1) 𝐵0 ,                           (C17)
                                          2
                                          𝐵𝑍 (𝑢) = 0.                                    (C18)



                                    ⃗
   0.1 points for each component of 𝐵

  The “Kerbodyne 42” rocket upper stage is mostly made of wood, and the only conductive



                                                  10

material is used for its cryogenic fuel tank. We, therefore, consider the stage’s interaction with
the geomagnetic field as that of the spherical shell with wall thickness 𝐷 = 2 𝑚𝑚, radius
𝑅 = 4 𝑚 and resistivity 𝜌 = 2.7 · 10−8 Ω · 𝑚.
  2.(1.3 pts) Find the torque 𝑀   ⃗ (𝑢) acting on the stage, as it rotates with angular velocity 𝜔
collinear to 𝑍. Provide the answer for 𝑀  ⃗ (𝑢) in the form of projections on 𝑋𝑌 𝑍.

   Using C9 requires us to find the magnetic field derivative in the body frame.
   Consider a body frame 𝑥𝑦𝑧, whose axis 𝑧 is collinear to 𝑍 and plane 𝑥𝑦 is rotated by
   angle 𝛽 with respect to 𝑋𝑌 . Magnetic field in this reference frame is

                                    𝐵𝑥 = 𝐵𝑋 cos 𝛽 + 𝐵𝑌 sin 𝛽,                           (C19)
                                   𝐵𝑦 = −𝐵𝑋 sin 𝛽 + 𝐵𝑌 cos 𝛽,                           (C20)
                                         𝐵𝑧 = 𝐵𝑍 = 0.                                   (C21)



   0.1 point for any idea that provides understanding that there are two processes in
   which 𝐵 changes with respect to body-frames – orbital motion and rotational dynamics.
   The same 0.1 point is given for any approach overcoming this issue.


   The derivative of magnetic field is therefore

               𝐵˙ 𝑥 =𝐵˙ 𝑋 cos 𝛽 + 𝐵˙ 𝑌 sin 𝛽 + (−𝐵𝑋 sin 𝛽 + 𝐵𝑌 cos 𝛽) 𝛽˙ =
                        ′
                    = (𝐵𝑋                                                          ˙
                           (𝑢) cos 𝛽 + 𝐵𝑌′ (𝑢) sin 𝛽) 𝑢˙ + (−𝐵ℎ𝑋 sin 𝛽 + 𝐵𝑌 cos 𝛽) 𝛽,
               𝐵˙ 𝑦 = − 𝐵˙ 𝑋 sin 𝛽 + 𝐵˙ 𝑌 cos 𝛽 + (−𝐵𝑋 cos 𝛽 − 𝐵𝑌 sin 𝛽) 𝛽˙ =
                       ′
                  = (−𝐵𝑋                                                        ˙
                         (𝑢) sin 𝛽 + 𝐵𝑌′ (𝑢) cos 𝛽) 𝑢˙ + (−𝐵𝑋 cos 𝛽 − 𝐵𝑌 sin 𝛽) 𝛽,
               𝐵˙ 𝑧 =0.



   0.1 points for each component of 𝐵   ⃗˙ related to the orbital motion
   0.1 points for each component of 𝐵   ⃗˙ related to the rotational dynamics
                                 ⃗˙ is found in the vector form
   Full points are also given if 𝐵


   Substituting 𝑢˙ = 2𝜋/𝑇 and 𝛽˙ = 𝜔 and using the expressions C9, C16, and C17, we obtain
   that the torque is directed along 𝑧 and equals
                                  (︂                                 )︂
                       2𝜋     2 4    3𝜋               𝜔
                 𝑀𝑧 =      𝐷𝐵0 𝑅        (3 − cos 2𝑢) − (5 − 3 cos 2𝑢) = 𝑀𝑍 .         (C22)
                        3𝜌           𝑇                2


   0.1 points for 𝑀𝑥 and 𝑀𝑦 ,
   0.5 points for 𝑀𝑧 (for complicated calculations)

  3. (1.0)Find the absolute value of angular velocity 𝜔(𝑡) as a function of time, given that the
change in the stage’s angular velocity over one orbital period is negligibly small.



                                                11

   We will average 𝑀𝑍 over 𝑢 and use the obtained expression instead of 𝑀𝑍 . This helps
   getting rid of the members, containing cos 2𝑢:
                                                  (︂       )︂
                                       2𝜋     2 4    9𝜋 5𝜔
                              ⟨𝑀𝑍 ⟩ =     𝐷𝐵0 𝑅        −      .                  (C23)
                                       3𝜌            𝑇   2


   0.25 points for the explicit idea to average 𝑀𝑍 over 𝑢
   0.25 for the correct expression for ⟨𝑀𝑍 ⟩


   As the torque is directed along with the rotation axis, it does not change the axis’ direc-
   tion, which means that the obtained formula always holds for the rocket stage rotational
   dynamics. As we consider the transient process to have completed. It follows from B1
   that the rocket stage rotates about the axis, which is perpendicular to its symmetry axis.
   Thus the angular momentum of the stage is

                                           𝐿𝑍 = 𝐽𝑦 𝜔.                                   (C24)



   0.25 for the correct equation with the correct inertia moment


   As 𝐿˙ 𝑍 = 𝑀𝑍 is the governing equation for the angular velocity:
                                                 (︂        )︂
                                     2𝜋      2 4    9𝜋 5𝜔
                               𝜔˙ =       𝐷𝐵0 𝑅       −       .                         (C25)
                                    3𝐽𝑦 𝜌           𝑇    2

   Its solution is:                          (︂       )︂
                                        18𝜋        18𝜋 −𝛿𝑡
                                 𝜔(𝑡) =     + 𝜔2 −       𝑒 ,                            (C26)
                                        5𝑇         5𝑇
   where 𝛿 = 3𝐽5𝜋𝑦 𝜌 𝐷𝐵02 𝑅4 .

   0.25 points for the correct solution of the differential equation for 𝜔
   Alternatively 0.15 for the exponential dependence of 𝜔 from 𝑡.

  4. (1.0) Find the ratio of the orbital period 𝑇 and the rocket stage’s rotation period 𝑇𝑠 in
the steady-state regime, which sets in after a long time.

   From C26 it follows that the angular velocity asymptotically tends to 18𝜋/2𝑇 . Thus the
   ratio of the two periods
                                   𝑇     𝑇 𝜔(∞)
                                       =          = 9/5 = 1.8.                      (C27)
                                𝑇𝑠 (∞)      2𝜋


   1.0 for the correct result.




                                                12
