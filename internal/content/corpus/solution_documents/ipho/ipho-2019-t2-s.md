---
id: solution-document-ipho-2019-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2019/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2019-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2019/T2_S.pdf."
---

Theory IPhO 2019                                                                       Q1-1
                                                                                        S2-1
The Physics of a Microwave Oven – Solution
Part A: The structure and operation of a magnetron
A.1. The frequency of an LC circuit is 𝑓 = 𝜔/2𝜋 = 1/(2𝜋√𝐿𝐶). If the total electric current
flowing along the boundary of the cavity is 𝐼, it generates a magnetic field whose magnitude (by
the assumptions of the question) is 0.6𝜇0 𝐼/ℎ, and a total magnetic flux equal to 𝜋𝑅 2 ×
0.6𝜇0 𝐼/ℎ, hence the inductance of the resonator is 𝐿 = 0.6𝜋𝜇0 𝑅 2 /ℎ. Approximating the
capacitor as a plate capacitor, its capacitance is 𝐶 = 𝜀0 𝑙ℎ/𝑑. Putting everything together, we
find

          1   1   1              h       d    1 c   d     1 3 108     1
 f est                                                                 2.0  109
         2   LC 2          0.6 R 0  0lh 2 R 0.6 l 2 7 10
                                   2                              3
                                                                     3.6
Hz
A.2. Denoting the electron velocity by ⃗𝑢(𝑡), in this case the total force applied on it is

                                    𝐹 = −𝑒(−𝐸0 𝑦̂ + ⃗𝑢(𝑡) × 𝐵0 𝑧̂ ).
Let us write ⃗𝑢(𝑡) = ⃗𝑢𝐷 + ⃗𝑢′ (𝑡), with ⃗𝑢𝐷 = (−𝐸0 /𝐵0 )𝑥̂̂ being the drift velocity of a charged
particle in the crossed electric and magnetic fields (the velocity at which the electric and
magnetic forces cancel each other exactly). Then 𝐹 = −𝑒𝑢         ⃗ ′ (𝑡) × 𝐵0 𝑧̂ . Thus, in a frame moving
at the drift velocity ⃗𝑢𝐷 , the electron trajectory is a circle with constant-magnitude velocity 𝑢′ =
 ⃗ ′ (𝑡)|, and radius 𝑟 = 𝑚𝑢′ /𝑒𝐵0. In the lab frame this circular motion is superimposed upon
|𝑢
the drift at the constant velocity ⃗𝑢𝐷 . Hence:

     1. For ⃗𝑢(0) = (3𝐸0 /𝐵0 )𝑥̂̂ we find 𝑢′ = 4𝐸0 /𝐵0 and 𝑟 = 4𝑚𝐸0 /𝑒𝐵02.
     2. For ⃗𝑢(0) = −(3𝐸0 /𝐵0 )𝑥̂̂ we find 𝑢′ = 2𝐸0 /𝐵0 and 𝑟 = 2𝑚𝐸0 /𝑒𝐵02 .
This information, together with the independence of the period of the circular motion on 𝑢′
allows us to plot the electron trajectory in both cases (green and red, for cases 1 and 2,
respectively):
     Theory IPhO 2019                                                                   Q1-1
                                                                                    S2-2
A.3. The velocity of the electron in a frame of reference where the motion is approximately
circular is u ' . From A.2 we get that uD  u '  vmax and uD  u '  vmin , hence
u '  (vmax  vmin ) / 2  vmax .

The radius of the circular motion of the electron in this frame is r  mu '/ eB0  mvmax / eB0 . The
                                                                     2
maximal velocity is that corresponding to a kinetic energy, 𝐾max = 𝑚𝑣max /2, of 800 eV.
                         m 2eV 1 2mV              1 2  9.1  1031  800
Substituting we find r                                          19
                                                                           3.18  104 m  0.3mm .
                        eB m         B     e     0.3      1.6  10
Since this maximal radius is much smaller than the distance between the anode and the
cathode, we may ignore the circular component of the electronic motion, and approximate it as
pure drift.
A.4. As just explained, we may approximate the electron motion as pure drift. In task A.2 we
have found that the direction of the drift
velocity ⃗𝑢𝐷 is in the direction of the vector ⃗𝐸 ×
⃗ . Since we are interested in radial component
𝐵
of the drift velocity, the only contribution is from
the azimuthal component of the electric field.
The static electric field has no azimuthal
component, hence the drift in the radial
direction results solely from the azimuthal                                        E
component of the alternating electric field.                        B    C
                                                                              D
What we have to check is if the azimuthal                            A
component points clockwise or
counterclockwise. From the direction of the field
lines it is easy to see (attached figure) that in
points A and B the azimuthal component
pointing clockwise therefore the electrons there drift towards the cathode, while for points C, D
and E the azimuthal component points counterclockwise and the electrons there drift toward
the anode.

          Point toward the           toward the cathode               perpendicular to the
                anode                                                               radius
              A                                             X
              B                                             X
         Theory IPhO 2019                                                                Q1-1
                                                                                     S2-3
                 C                     X
                 D                     X
                 E                     X


    A.5. In this task we need to consider the azimuthal component of the drift velocity, which
    results from the radial component of the electric field. Since all points are at the same distance
    from the anode, all electrons experience the same static electric field. Hence only the radial
    component of the alternating field determines whether the angle between the electrons’
    position vectors would increase or decrease: If the radial component of the alternating field
    points inwards (towards the cathode), the azimuthal drift velocity will be positive
    (counterclockwise) and vice versa. Hence the electrons at A, B and C drift closer to each other in
    terms of angles, while those at D, E and F drift away from each other.

points               angle decreases           angle increases                      indeterminate
              AB                            X
              BC                            X
              CA                            X
              DE                                                       X
              EF                                                       X
              DF                                                       X
    A.6. Spokes will be created only in the regions
    where focusing occurs. By the result of the
    previous task, there are four spokes, as indicated
    in the attached Figure.
    The electron drift sets the spokes in a
    counterclockwise rotation. The frequency of the
    alternating field is 𝑓 = 2.45 GHz. By the time the
    alternating field flipped its sign (half a period),
    each spoke moves to the next cavity,
    corresponding to an angle of 𝜋/4. Therefore, the
    angular velocity of each spoke is
         𝜋   𝑇   𝜋
    𝜔 = 4 / 2 = 2 𝑓 = 3.85 ⋅ 109 𝑟𝑎𝑑/𝑠. Each spoke
    performs a full rotation around the magnetron
    after four periods of the alternating field.
    Theory IPhO 2019                                                                               Q1-1
                                                                                               S2-4
A.7. The magnitude of the electric field in the region considered, 𝑟 = (𝑏 + 𝑎)/2, is the
magnitude of the static field, that is, 𝐸 = 𝑉0 /(𝑏 − 𝑎), giving rise to an azimuthal drift velocity of
magnitude 𝑢𝐷 = 𝐸/𝐵0 = 𝑉0 /[𝐵0 (𝑏 − 𝑎)]. Equating 𝑢𝐷 /𝑟 with the angular velocity found in the
previous task we find V0   fB0 (b 2  a 2 ) / 4

Part B: The interaction of microwave radiation with water molecules
B.1. The torque at time 𝑡 is given by 𝜏(𝑡) = −𝑞𝑑sin[𝜃(𝑡)]𝐸(𝑡) = −𝑝0 sin[𝜃(𝑡)]𝐸(𝑡), hence the
instantaneous power delivered to the dipole by the electric field is
                                                               d                          dp (t )
 H i (t )   (t ) (t )   p0 E (t )sin  (t ) (t )  E (t )  p0 cos  (t )   E (t ) x
                                                               dt                           dt
B.2. Since the average dipole density (hence the average of each molecular dipole) is parallel to
the field, the absorbed power density is (angular brackets, 〈⋯ 〉, denote average over time)

                                E0 sin( f t )   0 E0 sin( f t   )  
                           dPx                 d
 H (t )  E0 sin( f t )
                            dt                 dt
E02  0 f sin( f t ) cos( f t   )  0.5E02  0 f sin   sin(2 f t   )  0.5E02  0 f sin 

B.3. The energy density of the electromagnetic field at penetration depth 𝑧, which is twice the
electric energy density, is 2 × 𝜀𝑟 𝜀0 〈𝐸 2 (𝑧, 𝑡)〉/2 = 𝜀𝑟 𝜀0 𝐸02 (𝑧)〈sin2(𝜔𝑡)〉 = 𝜀𝑟 𝜀0 𝐸02 (𝑧)/2.
Therefore, the time-averaged flux density at depth 𝑧 is:
                                         1                𝑐 1
                                𝐼(𝑧) =     𝜀𝑟 𝜀0 𝐸02 (𝑧) × = √𝜀𝑟 𝜀0 𝑐𝐸02 (𝑧),
                                         2                𝑛 2
where 𝑐 is the speed of light in vacuum. 𝐼 decreases with 𝑧 due to the absorbed power
calculated in the previous task we find
                             𝑑𝐼(𝑧)    1                     𝛽𝜔sin𝛿
                                   = − 𝛽𝜀0 𝜔𝐸02 (𝑧)sin𝛿 = −        𝐼(𝑧),
                              𝑑𝑧      2                      𝑐 √𝜀𝑟
hence 𝐼(𝑧) = 𝐼(0) exp[−𝑧𝛽𝜔sin𝛿/(𝑐√𝜀𝑟 )].
B.4. Similarly to the previous task, the energy flux corresponding to the given field is
                                                         1
                        𝐼(𝑧) = √𝜀𝑟 𝜀0 𝑐〈𝐸 2 (𝑧, 𝑡)〉 =      √𝜀 𝜀 𝑐𝐸 2 𝑒 −𝑧𝜔√𝜀𝑟 tan 𝛿/𝑐 .
                                                         2 𝑟 0 0
Equating the argument of the exponent in the last expression with the result of the previous
task, and using the given approximation tan 𝛿 ≈ sin 𝛿 leads to 𝛽 = 𝜀𝑟 .
       Theory IPhO 2019                                                               Q1-1
                                                                                  S2-5
B.5.
1. Using previous results, the radiation power per unit area is reduced to half of its 𝑧 = 0 value
at 𝑧1/2 = 𝑐 ln 2 /(𝜔√𝜀𝑟 tan 𝛿) = 𝑐 √𝜀𝑟 ln 2 /(𝜔𝜀𝑙 ). From the given graph, at the given
frequency 𝜀𝑟 ≈ 78 and 𝜀𝑙 ≈ 10, hence 𝑧1/2 ≈ 12 mm.

We have just found that the penetration depth is proportional to √𝜀𝑟 /𝜀𝑙 . From the given graph
we thus find that:
2. Heating up pure water (continuous lines) decreases 𝜀𝑙 much more significantly than the
corresponding decrease of √𝜀𝑟 at the given frequency. Thus, the penetration depth of pure
water increases with temperature, allowing deeper penetration of the microwave radiation and
heating up the water inner regions.
3. On the contrary, for a soup (dilute salt solution, dashed lines) 𝜀𝑙 at the given frequency
increases with temperature while 𝜀𝑟 decreases. Thus, the absorption rate increases with
temperature, the penetration depth decreases, and less microwave radiation reaches its inner
regions.

 material              𝑧1/2 increases with        𝑧1/2 decreases with          𝑧1/2remains the same
                       temp.                      temp.
 water                 X
 soup                                             X
