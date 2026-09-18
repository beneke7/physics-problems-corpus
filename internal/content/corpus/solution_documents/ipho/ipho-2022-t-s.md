---
id: solution-document-ipho-2022-t-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2022_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2022-t1, ipho-2022-t2, ipho-2022-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2022_T_S.pdf."
---

IPhO 2022                                   Theoretical problems: solutions. Language: English

General rules                                                  force on the ring is F = Bp Iπd, where Bp is the mag-
                                                               netic field component lying in the plane of the ring at
Rule 1: Propagating errors are not punished except             its line element. From the given formula of dipole field,
(a) those cases when the (possibly intermediate) result is     |Bp | = 4πr
                                                                        µ0 m
                                                                            3 (2 cos θ sin θ + sin θ cos θ) =
                                                                                                              3µ0 m sin θ cos θ
                                                                                                                                . Sub-
                                                                                                                   4πr 3
clearly wrong and hence, the contestant has another op-        stituting tan θ = 2L with small angle approximation for
                                                                                      d
portunity to figure out that something must have gone                                                              2
                                                               sin θ ≈ θ and cos θ ≈ 1, one gets F = 3µ
                                                                                                      2πL4 .
                                                                                                        0m
wrong, and could start searching for the mistakes. Ex-
amples (not limited to): dimensionally wrong answer;                       a) m = π4 d2 hJ                         0.1 pts
obviously too large or too small numerical value; wrong                    b) I = Jh                               0.1 pts
sign of the effect;                                                                         sin θ cos θ
                                                                           c) |Bp | = 3µ0 m4πr                     0.1 pts
(b) for the calculation of numerical answers: marks
                                                                                               3
                                                                                     3µ0 m2
                                                                           d) F1 = 2πL4                            0.1 pts
(usually 0.1 pts) for the numerical values are given only
                                                                           e) small angle approx.
when the underlying formula is correct.
                                                                           or correct limiting behavior            0.1 pts
Rule 2: if a contestant writes down a final answer (for-                   Answer: 0.21 mN                         0.1 pts
mula) of a task, or an intermediate result needed to de-
rive the final result, the marks are not given even if the
formula is completely correct, unless it is judged that
that particular formula can be obtained from the basic
laws in a simple-enough-way so that could have been
done purely in mind, without using paper.


T1: Permanent magnets

Part A: Interaction of two magnets.
(A.1) Solution 1.
  For all questions, note that spurious rounding (e.g.
rounding 2.4kA to 2kA) will incur a penalty of 0.1 points
lost per incident. Although such rounding does techni-         (A.2) In the case of a homogeneous magnetization, the
cally adhere to rules about significant figures, IPhO is not   molecular currents in the bulk of the material cancel out,
meant to test one’s understanding of significant figures.      leaving only a surface current at the surfaces which are
Such rounding is both unreasonable and makes check-            not perpendicular to the magnetization vector. Hence,
ing solutions much more difficult. Since the distance be-      there is a surface current on the side surfaces of the
tween the magnets is big as compared to their size, we         cylinder. As the height of the surface is much smaller
can approximate each of them as a dipole of magnitude          than the radius, these currents can be approximated as a
                       π 2                                     ring current I; the dipole moment πd2 I/4 of the ring cur-
                 m=      d hJ = 0.75 A m2 .
                       4                                       rent must be equal to the total dipole moment πd2 hJ/4
                                                               of the magnet, hence I = Jh ≈ 2.4 kA.
Since the two dipoles are parallel to each other and to
the line connecting them, the interaction energy of one                a) current around edge of magnet                0.1 pts
of the magnets with the field of the other magnet is                   c) m = IA                                       0.1 pts
                                        2
                                                                       d) I = Jh                                       0.1 pts
                             µ0 m                                      Answer: 2.4 kA                                  0.1 pts
                  W = −B
                       ⃗·⃗
                         m=−      ,
                             2πL3
                                                                 Remark: Having established the analogy to an edge
and by taking a derivative we obtain
                                                               current, one could instead find I by evaluating the mag-
                     dW   3µ0 m2                               netic field at some point (e.g. far above the current loop)
              F1 =      =        ≈ 0.21 mN.                    and matching to the given dipole result. Biot-Savart at a
                     dL    2πL4
                                                               point on the ring axis at some distance z ≫ d above the
                a) m = π4 d2 hJ      0.2 pts                   loop gives
                b) W = −B  ⃗·⃗ m     0.1 pts                                              Z2π
                c) F1 = dW           0.1 pts                                        µ0          I(d/2)dθ d/2      µ0 Id2
                         dL 2                                            B = B ẑ =                          ẑ =        ẑ.      (1)
                d) F1 = 3µ 0m
                                     0.1 pts                                        4π             z3     z        8z 3
                          2πL4                                                            0
                Answer: 0.21 mN      0.1 pts
                                                               Matching this to the dipole result from the previous part
  Solution 2. The force between the magnets is found           gives I = Jh as above.
by converting one cylinder into a superconducting ring.        (A.3) Since the distance between the magnets is now sig-
The current in the ring is I = m                               nificantly smaller than their diameter, the force can be
                                  A = Jh. Consider a
small line element dl on the ring with a radial vector         approximately found as the force between two straight
joining from the dipole to the line element. The dipole        currents I of length πd at distance L:
moment is decomposed into radial and tangential com-                                   µ0 I 2      µ0 I 2 d
ponent. By rotational symmetry along the co-axis, the                           F2 =          πd =          ≈ 14 N.
                                                                                       2πL          2L


IPhO 2022                                     Theoretical problems: solutions. Language: English

        a) Consider as straight currents         0.3 pts                 a) Idea of magnetic charges       0.4 pts
        b)B = 2πL
               µ0 I
                                                 0.3 pts                 b)q = m/δ                         0.4 pts
        c) F2 = πdIB                             0.2 pts                 c) B = 4πr
                                                                                 µ0 q
                                                                                     2                     0.4 pts
                                                                                 Jµ0 δ 2
        d) F2 = µ02LI2d
                                                 0.1 pts                 d) B = 24r2                       0.3 pts
        Answer: 14 N                             0.1 pts
                                                               The same scheme applies for solutions which work with
(A.4) The chain will most likely break below the top-          electrical charges, with a proportionality constant relat-
most magnet because then the magnetic pull between             ing that field to the magnetic field of magnetic dipoles.
the magnets needs to compensate the largest possible           Then, the sub-score a) is given for the idea of calculating
weight. Let the number of magnets be N + 1, and the            the field of electrical dipoles (0.2 pts), with a correct pro-
mass of a single magnet M = π6 ρδ 3 ≈ 0.5 g; then the          portionality factor between the two fields, k = B/E =
weight of the magnets F = M N g is balanced by the mag-        µ0 ε0 = c−2 (0.2 pts).
netic force                                                       Solution 2. It is clear that from distances larger than
                                                               the diameter of a magnet, the shape of the magnets
                    3µ0 m2 X 1
                            N
                                   µ0 m2 π 3                   doesn’t matter; what matters is only the total dipole mo-
              F =                =           ,
                         4
                     2πδ n=1 n 4    60δ 4                      ment as this is what defines the magnitude of the field
                                                               at large distances. So, we can substitute the balls with
where m = π6 Jδ 3 ≈ 78 mA m2 and we have assumed that          cylinders of equal volume. Now, let us require the height
N ≫ 1 so that we can assume in the sum N = ∞. From             of these cylinders to be δ; then the neighbouring cylin-
the force balance we obtain                                    ders in the chain will be touching each other. As a re-
                                                               sult, instead of the chain of balls, we have a long homo-
                         µ 0 m2 π 3                            geneous cylinder. Equal volume means that the cross-
                    N=              ≈ 1320;
                         60M gδ 4                              sectional area of these cylinders A = π6 δ 2 . We know
                                                               from task A.2 that such a cylinder can be considered as a
hence, the total length of the chain is N δ = 6.6 m. Note
                                                               long solenoid carrying surface density of bound currents
that N = 1320 is indeed much bigger than 1.
                                                               equal to J. So, the magnetic field inside it B0 = µ0 J, and
                                                               therefore, it carries magnetic flux Φ = B0 A = π6 δ 2 µ0 J.
            a) It will break at the top       0.1 pts          We know that inside the solenoid, magnetic field is con-
            b)M = π6 ρδ 3                     0.1 pts          stant, and outside, the field is zero. However, this is
            c) F = M N g                      0.2 pts          valid only until the endpoints of the solenoid are far. All
                             2 PN
            d) F = 3µ   0m
                       2πδ 4
                                    1
                                n=1 n4        0.2 pts          that flux is released near each of the endpoints of the
            e) m = 6 Jδ
                      π    3
                                              0.2 pts          solenoid. The released flux needs to satisfy the Maxwell
                                                               equations: the B-field needs to have no sources and be
                        2 3
            f) l = µ60M
                     0m π
                         gδ 3                 0.1 pts
            Answer: 6.6m                      0.1 pts          potential. We know that the only solution in such a case
                                                               is a central isotropic field B    ⃗ = f (r)r̂, where r denotes
Remark: if the sum is substituted with a finite sum as an      the distance from the endpoint and r̂ — the correspond-
approximation, with two or three terms in it, full marks       ing unit vector. From the Gauss law we conclude that
                                                                                                               2
are given. If only one term is kept, subtract 0.1 from d) or   4πr2 f (r) = ´Φ = π6 δ 2 µ0 J, hence B = Jµ
                                                                                                         24r 2 .
                                                                                                            0δ


f). Remark 2: It’s possible to get a range of final answers
depending on the approximations used for g, mass, mag-
netic moment, etc. Answers that round to 1300 balls             a) Idea of substituting spheres with cylinders       0.4 pts
should definitely not be penalized, which corresponds           b)A = π6 δ 2                                         0.2 pts
to a distance range of 6.25 - 6.75m. 1260 balls (6.3m) is       c) Φ = π6 δ 2 µ0 J                                   0.4 pts
what you get with g=10 and mass = 0.5g; 1320 balls (6.6m)       d) B = Φ/4πr2                                        0.4 pts
                                                                               2
is what you get with g=9.8 and a mass of 0.49g (or, with-       e) B = Jµ   0δ
                                                                         24r 2                                       0.1 pts
out rounding the mass and magnetic moment and can-
celling out the volume).                                       Remark: for part a, give only 0.1 points if students make
(A.5) Solution 1. Each of the balls creates magnetic field     the cylinder replacement but then fail to make any real
of a dipole m; the magnetic dipole creates the same field      progress using it.
wich would be created by two magnetic charges, equal             Solution 3. This solution follows the solution 2 up to
by modulus to q and of opposite sign, at a distance s =        the point where we have a solenoid with surface cur-
m/q, assuming that this distance s is much smaller than        rent density J. After that we observe that at any point
the distance from the dipole to the observation point.         in space, the axial component of the magnetic field is
Here it is convenient to select s = δ (hence q = m/δ)
because in that case almost all the positive and nega-                                 B = µ0 J
                                                                                                  Ω
                                                                                                     ,
tive magnetic charges overlap and cancel out each other.                                          4π
The only ones which will not cancel out are the magnetic
                                                               where Ω denotes the solid angle under which we can
charges at the chain’s endpoints. One of these charges is
                                                               see the interior surface of the solenoid, minus the solid
very far so that the field at P is the field of a magnetic
                                                               angle under which we can see the outer surface. This
charge at O:
                                                               can be derived easily from the Biot-Savart law: dBz =
                                                               4πr 2 jdzdl × r̂ · ẑ, where hats denotes unit vectors, dl —
                                                                µ0       ⃗                                              ⃗
                    µ0 q     µ0 m    Jµ0 δ 2
               B=
                    4πr 2
                          =
                            4πδr 2
                                   =
                                      24r2
                                             .                 an infinitesimal vector parallel to the surface current,


IPhO 2022                                   Theoretical problems: solutions. Language: English

and ⃗r — a vector pointing from the observation point             Integration for Bz :
to a point on the solenoid. This can be rewritten as                   Z                  Z                               !
                                                                                  µ0 m ∞                       3r2 sin θ
                                                                                                                       2
                                                                                                     1
dBz = 4πr
        µ0
               z × dl⃗· r̂ = 4πr
           2 jd⃗
                              µ0
                                 2 JdA · r̂, where dA denotes the
                                     ⃗              ⃗             Bz = dBz =                    dz ′3 2 −
area of a surface element on the solenoid. To complete                             4πδ 0            r              r′2
                                                                                       Z ∞          h                             i
our proof, it suffices to notice that ⃗dA · r̂ is the apparent             µ0 m
                                                                     =                           du 2(u2 + 1)−3/2 − 3(u2 + 1)−5/2
area of the surface element, dΩ = ⃗dA · r̂/r2 .                         4πδr2 sin θ − cot θ
                                                                                  2
                                                                                                                      ∞
                                                                           µ0 m              2u           2u3 + 3u
   Now, at the point P , the outside and inside contribu-            =                   √            −
                                                                        4πδr2 sin θ
                                                                                  2
                                                                                            u2 + 1 (u2 + 1)3/2 − cot θ
tions to Ω cancel out everywhere except for the circu-
                                                                         µ0 m cos θ
lar opening of the solenoid. Thus, Ω = A cos θ/r2 so                 =−
                       2                                                   4πδr2
that Bz = Jµ      24r 2 cos θ. Finally, we can use the Gauss
                    0δ


law to obtain expression for the radial component BR Integration for BR :
                                                                            Z
(with R denoting the radius in cylindrical coordinates)
                                                                      BR = dBR
of the magnetic field. Someone not familiar with vec-
tor calculus can calculate the magnetic flux Φc through                                Z r cos θ                   r
                                                                            3µ0 m                     1 r                  r2
a circle of radius R0 = r sin θ. Then, the cylindri-                     =                       dz ′3 · ′ sin θ 1 − ′2 sin θ
                                                                                                                               2

cal coordinate R = z tan θ so that dR =R z cos θ dθ ,
                                    ′                     −2 ′  ′            4πδ        0            r     r              r
                                                                              Z ∞                          r                 !
and r12 = cos2 θ′ /z 2 . Therefore Φc =               2πRBz dR =                            1 r                   r2
                                                                                       dz ′3 · ′ sin θ 1 − ′2 sin θ
                                                                                                                         2
πJµ0 δ 2
         cos θ′ ´dθ′ = πJµ   0δ
                                2
                                  sin θ. We can see that this de-           −
   12                       12                                                 r cos θ    r       r               r
pends only the spherical coordinate θ; by considering                                          Z ∞
conical frusta with circular faces having the same polar                          3µ0 m                     udu
                                                                         =−
                                                                              4πδr sin θ cot θ
                                                                                           2
angle θ we can easily conclude that the magnetic field                              2                  (u 2 + 1)5/2
                                                  2                                            Z ∞
must be radial, i.e. B = Bz / cos θ = Jµ       0δ
                                             24r 2  .                    =−
                                                                                  3µ0 m
                                                                                                        dv(v + 1)−5/2 (v = u2 )
                                                                              8πδr sin θ cot θ
                                                                                    2      2
                                                                                                    2

                                                                              µ0 m sin θ
                                                                         =−
                                                                                4πδr2
 a) Idea of substituting spheres with cylinders         0.4 pts                a) writing correctly Bsz       0.2 pts
 b)A = π6 δ 2                                           0.2 pts                b) writing correctly BRz       0.2 pts
                 2                                                             c) dm = mdz/δ                  0.2 pts
 c) Bz = Jµ24r 2 cos θ
              0δ
                                                        0.4 pts                                2

                                                                                        24r 2 2cos θ
                                                                               c) Bz = Jµ                     0.4 pts
                                                                                           0δ
 d) B = Bz / cos θ                                      0.4 pts
 e) B = Jµ  0δ
               2
                                                        0.1 pts                d) BR = Jµ24r 2 sin θ
                                                                                            0δ
                                                                                                              0.4 pts
          24r 2                                                                        Jµ0 δ 2
                                                                               e) B = 24r2                    0.1 pts
                                                                 Remarks: for c) and d), a partial credit of 0.1 pts can
                                                                 be given for each of these integrals if the initial integral
   Solution 4. Finally, the solution could be obtained the- is written correctly, but the calculation of the integral
oretically also by summing over all the fields of individ- is not performed or there are many mistakes. If only
ual magnets. However, this is mathematically very de- few mistakes were made, subtract 0.1 for each mistake
manding, therefore full solution is not provided here. made. If initial integral is written incorrectly, no points
The first steps are as follows. (i) Writing the contribu- are given. Points for e) are given only if the final answer
tion Bsz and BsR of a single magnet at distance z from is completely correct.
the point O to the axial and radial (in cylindrical coordi- Another remark: in the integration of B , if the change
nates) components of the magnetic field; (ii) going from of sign (of the cosine) is ignored, the correct answer
                                                                                                                R

summation of individual contributions to integration by could still be obtained (because the extra parts cancel
assuming linear density of dipoles ρm = m/δ so that out), but the derivation would technically be wrong.
dm = mdz/δ; performing integration over z to find the
                                                                    Solution 5. It’s possible to perform the direct integra-
field components.
                                                                 tion of the previous solution more easily using angular
The mathematical derivation: A dipole at position z
                                                                 variables in place of z. Let s = r sin θ be the distance of
dm = m   δ dz generates a magnetic field (in Cartesian co- closest approach of the line to P for convenience and ϕ
ordinates):
                                                                 be the angle from a point on the line to P (such that ϕ = θ
                                                                 at the end near P , ϕ ≈ π at the other end). Then the addi-
                                     µ0 dm                       tional magnetic field from a small component given by
                                                         2 ′
    dBz = dBr′ cos θ − dBθ′ sin θ =          2  − 3 sin     θ    dϕ is
                                     4πr′3
                                                                         µ0 sin ϕ
                                     3µ0 dm                                     3
    dBR = dBr′ sin θ + dBθ′ cos θ =       ′3
                                             sin θ′ cos θ′          dB =           (2dm∥ − dm⊥ )
                                      4πr                                   4πs3
                                                                         µ0 sin ϕ
                                                                                3

               √                                                       =           dm×
                                                                            4πs3
Where r = r + z − 2rz cos θ and sin θ = r′ sin θ are
           ′     2    2                       ′      r
                                                                         (2 cos ϕ(cos ϕẑ − sin ϕr̂) − sin ϕ(sin ϕẑ + cos ϕr̂))
coordinates relative to the dipole dm. In order to sim-
                                                      cos θ
plify the integration, do substitution: u = z−r   r sin θ , then         µ0 sin ϕ dm
                                                                                3
             √                                                         =               dz((3 cos2 ϕ − 1)ẑ − cos ϕ sin ϕr̂).
r′ = r sin θ u2 + 1; dz = r sin θdu.                                        4πs3 dz


IPhO 2022                                       Theoretical problems: solutions. Language: English

Since s = −z tan ϕ and dm = mdz/δ, we have dm/dϕ =                      Remarks:
sm/(δ sin ϕ). Then
         2
                                                                        i) Subtract 0.1 both from b) and c) if the field line does
                                                                        not enter the plate perpendicularly;
             µ0 m
     dB =          ((3 cos2 ϕ − 1)ẑ sin ϕdϕ − sin ϕr̂ cos ϕdϕ)
                                                  2
                                                                        ii) Subtract 0.1 both from b) and c) if the field line does
            4πs2 δ                                                      not refract correctly;
and thus                                                                iii) Subtract 0.1 from (b) if its segment rightwards of the
                                                                        magnet is not shown (note that in the student answer
                 Z
                 ϕ=π
                                                                        sheet, the magnet is to the right of the plate, not on top
      µ0 m
  B=                (−(3 cos2 ϕ − 1)ẑd cos ϕ − sin ϕr̂d sin ϕ)
                                                   2
                                                                        of it as shown in the solution);
     4πs2 δ
                ϕ=θ                                                     iv) Subtract 0.1 both from a) and c) if the field line does
                                                                        not form a closed loop;
           µ0 m                    π            π
                   cos ϕ − cos ϕ ϕ=θ ẑ + sin ϕ
                                             3
     =−                3
                                                    r̂                  v) Subtract 0.1 from a) if the line touches or enters the
          4πs2 δ                                ϕ=θ
        µ0 m                                                            plate; 0.1 from b) if the line exits the plate; 0.1 from c) if
              (− cos θ sin θẑ + sin θr̂).
                          2          3
     =                                                                  the line reaches the other side of the plate.
       4πs2 δ
                                                                        (B.2) The problem can be solved by introducing an im-
Putting back in our expression for s, we have                           age magnet — a mirror reflection of the real magnet with
                         µ0 m                                           respect to the surface of the plate, with the dipole mo-
                  B=           (− cos θẑ + sin θr̂)              (2)   ment being both reflected and flipped. With this im-
                        4πr2 δ
                                                                        age magnet, the boundary condition above the plate is
which is the desired result.                                            satisfied: the field lines enter the plate perpendicularly.
                                                                        Hence, the force and torque exerted to the real magnet
              a) writing correctly dB/dϕ        0.5 pts
                                                                        are equal to the force and torque exerted by the image
              b) dm/dϕ = sm/(δ sin ϕ)           0.2 pts
                                      2
                                                                        magnet. The equilibrium is achieved when the dipole is
              c) |Bz | = µ0 m/(4πr2 δ)          0.4 pts                 parallel to the field created by the image magnet which
              d) B̂ = − cos θẑ + sin θr̂       0.4 pts                 is the case when the dipole moment is perpendicular to
                                                                        the plate. Hence, leftmost boxes of the first and second
Remark: for d, note that the coordinate system wasn’t                   row need to be marked with a tick. The force is almost
specified in the problem, so check what the student is us-              the same as what was already found in part A(d), with
ing; the point is to get the “radially outward” (or inward)             the only difference that now there is only the first term
idea.                                                                   in the sum:
                                                                                                  3µ0 m2
                                                                                             F =           = 5.9 N.
                                                                                                   2πδ 4
Part B: Interaction of magnets with ferro-
magnetic materials.
                                                                         a) Idea of magnetic image (even if J⃗ not flipped)      0.3 pts
(B.1) Due to the boundary condition at the surface of the                b) Correct direction of the image J⃗                    0.2 pts
                                                                                       2
ferromagnet, the field lines must enter the plates almost                c) F = 3µ 0m
                                                                                 2πδ 4                                           0.2 pts
perpendicularly. Indeed, as it follows from the Ampère’s                 d) F = 5.9 N                                            0.1 pts
circutal law, the tangential component of B/µ⃗ is continu-               e) each correct tick                                    0.1 pts
ous at the surface of a ferromagnet; similarly, the Gauss                f) each incorrect tick                                  -0.1 pts
law for the magnetic field implies that the normal com-
ponent of the B-field is continuous. From these two facts,              Remark: if e) + f) adds up to a negative number, replace
one can derive the “refraction law” for the field lines,                the total score for those two parts by 0.
tan α = µ tan β, where α and β are the angles between                   (B.3) Solution 1. As explained above, the magnetic field
the tangents of a field line and the surface normal, inside             lines are perpendicular to the surface of the ferromag-
and outside of the ferromagnetic, respectively. From the                netic plate. Since the gap is narrow as compared to its
fact that µ ≫ 1 we can deduce that as long as α is not                  width, the field lines are inside the gap almost straight.
small, β ≈ 0. Those field lines which enter the plate                   Due to the Ampère’s circulation theorem it also means
must exit it somewhere, this happens somewhere far-                     that the field in the gap is homogeneous. Due to the
ther away from the magnet, see the sketch below.                        Ampère’s circulation theorem, field outside the gap van-
                               2
                                                                        ishes as the gap’s width tends to 0, so in the limit all flux
                                                                        through the permanent magnet wraps around through
                                                                        the gap; see the sketch of magnetic field lines. Now, let
                                                                        us recall that the disc magnet is equivalent to a surface
                           1                                            current of density J along the curved surface of the disc.
                                                                        Hence we can write the circulation theorem along the
 3                                                                      loop defined by one of the field lines shown in the fig-
                                                                        ure:               I
 2
                                                                                      I= H    ⃗ · d⃗r ≈ (B1 + B2 )h/µ0 ,

                 a) Field line 1 correct     0.2 pts                    where B1 and B2 denote the flux density inside the per-
                 b) Field line 2 correct     0.4 pts                    manent magnet and outside the magnet (but still inside
                 c) Field line 3 correct     0.4 pts                    the slit), respectively. Here we have neglected the con-
                                                                        tribution of the magnetic field inside the ferromagnetic


IPhO 2022                                  Theoretical problems: solutions. Language: English

plate to the integral because µ is very big. Due to the           manent magnet in the magnetic field, ´
Gauss law, π4 d2 B1 = π4 (D2 − d2 )B2 ; with D = 2d this yields
B1 = 3B2 . Thus, B2 = Iµ0 /4h = Jµ0 /4 = 0.375 T and                                    π       3Iµ0
                                                                           Wm = −mB1 = − d2 I ·      = −2Wf ,
B1 = 1.125 T. In order to find the force exerted to one                                 4        4h
of the ferromagnetic plates, we can notice that the force         hence the total energy W = −Wf . Now we can find force
does not depend on what is creating the magnetic field                             dWf
                                                                  as F = − dW
                                                                            dh = dh , yielding the same result as before.
and, hence, we can substitute the disc magnet with the
                                                                  Notice that if we didn’t take into account the energy of
current I in a superconducting ring. Next we apply the
                                                                  the dipole then we would have obtained the correct an-
virtual displacement method and increase the distance
                                                                  swer by modulus, but with a wrong sign — we would
between the plates by dx. In the case of a superconduct-
                                                                  have had repulsion instead of attraction of the plates.
ing ring, the magnetic flux through the ring is conserved,
and therefore, the magnetic field strength inside the gap
will remain unchanged during the virtual displacement.               a) B⃗ in the slit is homogeneous            0.2 pts
With all this information we are ready to calculate the              b) B⃗ in the permanent magnet is homog.     0.2 pts
change of the magnetic field energy. The magnetic field              c) B in slit and in perm. magn. is normal
                                                                         ⃗                                       0.1 pts
energy inside the ferromagnet can be neglected because               e) I = (B1 + B2 )h/µ0                       0.1 pts
its density is ca µ times smaller than inside the gap. So,           f) π4 d2 B1 = π4 (D2 − d2 )B2               0.1 pts
the energy is changed only because the volume of the                 g) B2 = Iµ0 /4h                             0.1 pts
gap is changed:                                                      h) B1 = 3Iµ0 /4h                            0.1 pts
                                                                     i) Wf = 8µπ0 [d2 B12 + (D2 − d2 )B22 ]h     0.1 pts
            π 2 2                              3π 2 2                j) Wm = −Wf                                 0.2 pts
    dW =       [d B1 + (D − d )B2 ]dx =
                           2    2   2
                                                  B d dx
           8µ0                                 2µ0 2                 k) F = dW                                   0.1 pts
                                                                               dh
                                                                     l) 3π   2
                                                                        32 J µ0 d
                                                                                  2
                                                                                                                 0.1 pts
which means that the force
                                                                     m) F ≈ 210 N.                               0.1 pts
              dW   3π 2 2   3π 2
        F =      =    B d =    J µ0 d2 ≈ 210 N.
              dx   2µ0 2    32                              Remark: those who do not take into account the energy
                                                            of the dipole will be given zero points for j), k), l), and m).
    a) B⃗ in the slit is homogeneous            0.2 pts        Solution 3. There is a more intuitive way of finding
    b) B⃗ in the permanent magnet is homog. 0.2 pts         the field distribution. Using carefully the analogy be-
    c) B⃗ in slit and in perm. magn. is normal 0.1 pts      tween electric and magnetic dipole fields, one could con-
    e) I = (B1 + B2 )h/µ0                       0.1 pts     vert the problem into a permanent electric polarization
    f) π4 d2 B1 = π4 (D2 − d2 )B2               0.1 pts     inserted between two conducting plates. From similari-
    g) B2 = Iµ0 /4h                             0.1 pts     ties among Maxwell equations, it could be observed that
    h) B1 = 3Iµ0 /4h                            0.1 pts     E ≈ B, D ≈ H and P ≈ M , with some prefactors involv-
    i) dW = 8µπ0 [d2 B12 + (D2 − d2 )B22 ]dx    0.3 pts     ing permeabilities and permittivities. Consider putting
    j) F = dW                                   0.1 pts     the smaller capacitor inside the conductor plates, the
              dx
    k) 32 J µ0 d
        3π 2      2
                                                0.1 pts     charge would induce opposite charge that makes field
    l) F ≈ 210 N.                               0.1 pts     lines perpendicular to the conductor. In addition, there
                                                            should not be net charge on the metal plates upon in-
                                                            sertion of the smaller cylinder. Hence, there is again an
                                                            uniform charge density of opposite charge on the metal
                                                            plate spreading over the larger region. Effectively, for E
                                                            field, it is equivalent to spreading the original charge on
                                                            smaller plate onto the larger plate. Because the radii has
                                                            ratio of 2, E = 4SQ0 ϵ0 , D2 = 4S
                                                                                            Q
                                                                                              0
                                                                                                , and D1 = SQ0 (1 − 1/4) =
                                                            3D2 . This agrees with B2 , B1 in previous solutions. The
                                                            rest easily follows. (There are confusions about B or H
   Solution 2. The second solution follows mostly the first but most are due to the definition of polarization charge
one, and deviates only after the fields B1 and B2 have or current being considered free or not, a self-consistent
been found. Now we do not introduce the fictitious su- derivation would be sufficient.The close-to-centre part of
perconducting loop, and instead calculate carefully all the field of electric and magnetic dipole is opposite and
the changes to the magnetic field energy during virtual one should be careful about this effect inside polarisa-
displacements. Now the current around the perimeter of tion when utilizing the analogy.)
the permanent magnet is fixed to I as its magnetisation
is assumed to be constant. We can still use the previous
expressions for the magnetic field energy if we consider
the distance h between the plates to be a variable:

       πd2 h 2                      3Iµ0        3µ0 πd2 I 2
Wf =        [B1 +3B22 ], B1 = 3B2 =      ⇒ Wf =             .
       8µ0                           4h           32h
In addition to the change of the magnetic field energy,
we also need to take into account the energy of the per-


IPhO 2022                                   Theoretical problems: solutions. Language: English

       a) correct analogy arguments              0.2 pts       always pointing in the direction of x̂ which ensures the
       b) correct charge distributions           0.2 pts       rotational stability of the magnet. Attraction force be-
       c) E is uniform                           0.1 pts       tween two neighbouring rows is contributed only by the
       e) correct D expressions                  0.1 pts       vertical nearest-neighbour pairs of balls, so we can just
       f) correct conversion factor              0.1 pts       calculate only the interaction force between two such
       g) B2 = Iµ0 /4h                           0.1 pts       magnets. If two such balls were to be at distance y, the
       h) B1 = 3Iµ0 /4h                          0.1 pts                                                  2
                                                               interaction energy would be W = ± µ4πy    3 so that the y-
                                                                                                       0m

       i) Wf = 8µπ0 [d2 B12 + (D2 − d2 )B22 ]h   0.1 pts
                                                               directional force Fy = dW
                                                                                                     2

                                                                                        dy = ∓ 4πy 4 . This means that the
                                                                                               3µ0 m
       j) Wm = −Wf                               0.2 pts
       k) F = dW                                 0.1 pts       two balls attract if they are antiparallel and repel other-
                dh
       l) 3π  2     2
                                                 0.1 pts       wise. This brings us to the conclusion that the order must
          32 J µ0 d
       m) F ≈ 210 N.                             0.1 pts       be antiferromagnetic, shown below in the sketch.




                                                                  The work needed to pull out one of the magnets is eas-
                                                               ily found as its interaction energy with the four near-
  Solution 4. (Incorrect) A solution that has been submit-     est neighbours, with minus sign, i.e. W = B   m, where
                                                                                                          ⃗ ·⃗
                                                                                                   3µ0 m2
ted by a few students uses an infinite number of images        B = 2B1 + 2B2 = 2πδ3 x̂ so that W = 2πδ3 = 29 mJ.
                                                                ⃗    ⃗     ⃗     3µ0 m

of the permanent magnet. This forms an infinite rod,
which they assume gives the same magnetic field as a
normal magnetised rod would, 0 everywhere outside it.            a) Fig: left and right parallel magnets attract     0.1 pts
However, since the plates are finite, the magnetic field         b) Fig: top and bottom antipar. magn. attract       0.1 pts
outside would actually be non-zero, and would need to            c) B
                                                                    ⃗ from the 4 neighbours ∥ ⃗  m ⇒ no torque       0.1 pts
be calculated according to Solution 1. In this case, only        d) correctly marked 12 arrows                       0.1 pts
marks corresponding to a), b) and c) in the scheme of So-        e) antiferromagnetic                                0.1 pts
lution 1 should be awarded, i.e. 0.5 marks. If someone           f) W = B ⃗·⃗ m                                      0.1 pts
doesn’t assume the field outside to be 0, give marks for                  3µ0 m2
                                                                 g) W = 2πδ3                                         0.1 pts
the subsequent calculations according to solution 1.             h) W = 29mJ                                         0.1 pts

                                                                 Remarks: no marks for d) if any of the magnets has a
Part C: Model of ferromagnetic and anti- wrong direction or has no arrow. No marks for e) if the
ferromagnetic materials.                 score for d) is zero.
                                                                     Solution 2, It appears that there is another stable con-
(C.1) Solution 1, Since the task is about finding only one
                                                                  figuration, see figure below
configuration of dipoles, we can just try looking for con-
figurations satisfying the requirements. The simplest ap-
proach is to start construction with the chain of magnets
described in part A.4: if all the dipoles are directed par-
allel to each other and parallel to the chain, the system is
obviously in equilibrium. Now, two such chains can be
parallel to each other, and they can be also antiparallel.
In both cases, each of the balls is in a stable equilibrium
in terms of rotations. Indeed, each of the balls from the
left and from the right contribute the field B   ⃗ 1 = x̂ µ0 m3 ,
                                                          2πδ
while each of the balls from above and below contribute
         2 1 , where x̂ denotes a horizontal unit vector; ’+´
B⃗2 = ±1B ⃗
corresponds to antiparallel rows, and ’−´ — to parallel
rows. Since B2 < B1 , the sum of the four contributions is


IPhO 2022                                    Theoretical problems: solutions. Language: English

                                                                     (C.2) Now we need to repeat the steps done for the pre-
                                                                     vious question, with the only difference in the mutual
                                                                     placement of the magnets. Also, each of the magnets
                  B                                                  of the top row interacts now with two magnets of the
                                                                     bottom row with the three magnets forming a equilat-
                                                                     eral triangle. Since we’ll be going to use virtual displace-
                                                                     ment method, we consider the interaction of three mag-
                   A                                                 nets forming an isosceles triangle as shown in the figure;
   E                              C                                  while the base of the triangle remains fixed during vir-
                                                                     tual displacements, the length of the sides l will change.


                          D



   In order to show that this configuration is stable, too,
let us find the direction of the magnetic field at the po-
sition of one of the balls, the ball marked with A in the
                                                                     First we need an expression of the magnetic field caused
figure, due to its four neighbours. Using the formula for
                                                                     by the two bottom magnets at the centre of the topmost
the magnetic field of a dipole, we can see that the balls B
                                                                     magnet. Due to symmetry, this field must be horizontal;
and D create both field b(x̂ + 2ŷ), where x̂ and ŷ are hori-
                                                                     we can use the formula provided in the problem text for
zontal and vertical unit vectors. Meanwhile, both C and
                                                                     finding it. The dipole moment of the left-bottom magnet
E create field b(2x̂ + ŷ) so that the total field is 6b(x̂ + ŷ);
                                                                     needs to be divided into components parallel and per-
this is parallel to the dipole moment of the ball A which
                                                                     pendicular to the radius vector drawn from its centre
means that no torque is exerted on it. What is left to do
                                                                     to the centre of the topmost magnet, m∥ = m cos α and
is to calculate the interaction force between two neigh-
                                                                     m⊥ = m sin α. Hence, we can express the resultant x-
bouring balls, e.g. A and B. One way to do it is to decom-
                                                                     component of the magnetic field as
pose the both dipoles into vertical and horizontal com-
ponents: √⃗mA = m0 (x̂ + ŷ and ⃗   mB = m0 (−x̂ + ŷ, where                                             µ0 ⃗
                                                                                                           m
m0 = m/ 2. One can easily see that the pair of dipoles                ⃗ 3x = µ0 (2 ⃗
                                                                      B           m∥ cos α − ⃗
                                                                                             m⊥ sin α) =      (3 cos2 α − 1).
                                                                            4πl3                         4πl3
m0 x̂ and −m0 x̂ attract, and the same applies to the pair
m0 ŷ and −m0 ŷ. It is also easy to see that there is no hori-      The magnetic field due to both magnets is therefore
zontal component for the interaction force between the               2B3x x̂.
remaining pairs, m0 x̂ with m0 ŷ and m0 ŷ and −m0 x̂. A               As the first thing, we can now analyse the stability of a
little more efforts are needed to see that the horizontal            magnet with respect to rotations. As before, we assume
component of the interaction force is also zero. To that             that the magnets in one single row are parallel to each
end one can calculate first the torque TAB exerted by                other, and the magnets at the two neighbouring rows
dipole A to B with respect to the centre of the ball B, and          are either parallel or antiparallel to each other. In either
the torque TBA exerted by B to A with respect to the cen-            case, the rows at the top and at the bottom from a given
tre of the ball A; one can easily see from symmetry that             magnet are parallel to each other; let them be oriented
TAB = −TBA . Due to Newton’s third law, with respect to              along x̂. Then, each row contributes 2B3x x̂ to the total
the centre of the ball A, the sum of torques exerted by              field at the position of our magnet. The total field has
B to A and by A to B must be zero; it can be expressed               also contributions B   ⃗ 4x = ± µ0 3 from the left and right
as TAB + TBA + Fx δ = 0, where Fx denotes the horizon-                                                 2πδ
                                                                     magnets; here ‘+’ corresponds to the ferromagnetic or-
tal component of the force exerted by A to B. From this              der, and ‘−’ — to the antiferromagnetic order. Keeping
equality we can conclude that Fx = 0. So we found that               in mind that l = δ and cos α = 12 the total field is
each of the neighbouring balls attract each other, hence

the whole configuration is stable.
                                                                                B⃗ 5 = 4B
                                                                                        ⃗ 3x + 2B⃗ 4x = µ0 m − 1 ± 2 x̂.
                                                                                                        2πδ 3   2
 a) Showing: neighbouring magnets attract               0.2 pts      This is parallel to the given magnetic dipole for both ‘+’
 b) B⃗ from the 4 neighbours ∥ ⃗
                               m ⇒ no torque            0.1 pts      and ‘−’, which ensures stability in any case.
 c) correctly marked 12 arrows                          0.1 pts        With ⃗m = ±x̂m and y denoting the height of the isosce-
 d) antiferromagnetic                                   0.1 pts      les triangle, the vertical component of the interaction
 e) W = B ⃗·⃗ m                                         0.1 pts      force of a magnet with a magnet in the bottom row can
          3µ0 m2
 f) W = 2πδ3                                            0.1 pts      be found as
 g) W = 29mJ                                            0.1 pts
                                                                             d ⃗           dl d µ0 m2 3δ 2            dl 3µ0 m2
                                                                     F5y =     B3 · ⃗
                                                                                    m=±                       − 1  =∓           ;
  Remark: no marks for c) if any of the magnets has a                       dy             dy dl 4πl 3   4l 2         dy 16πδ 3
wrong direction or has no arrow. No marks for d) if the
score for c) is zero.                                                here we have used cos α = 2l    δ
                                                                                                       and upon taking deriva-
                                                                     tive, substituted l = δ. For this force to be attractive, we


IPhO 2022                               Theoretical problems: solutions. Language: English

need a minus sign which corresponds to the ferromag-
                                dl
netic order (keep in mind that dy  > 0). Now we are ready
to mark the direction of the dipoles on the sketch, see the
figure below.




  The work needed to pull out a magnet is found simi-
larly to the part (C.1):
                                    2
                ⃗ 5 · mx̂ = 3µ0 m = 15 mJ.
             W =B
                             4πδ 3

        a) B       4πl3 (3 cos α − 1)
           ⃗ 3x = µ0 ⃗m         2
                                           0.2 pts
        b) B4x = ± 2πδ3
           ⃗          µ0
                                           0.1 pts
        c) B
           ⃗ 5 = 4B⃗ 3x + 2B ⃗ 4x          0.1pts

        d) B
           ⃗ 5 = 0 3 − ± 2 x̂.
                  µ
                 2πδ
                    m      1
                           2               0.1 pts
                  d ⃗
        e)F5y = dy  B3 · ⃗m                0.1 pts
                    dl 3µ0 m
                           2
        f) F5y = ∓ dy    16πδ 3            0.1 pts
        g) F5y attractive                  0.1 pts
        h) correctly marked 12 arrows      0.1 pts
        i) ferromagnetic                   0.1 pts
                       2
        j) W = 3µ 0m
                 4πδ 3                     0.1 pts
        k) W = 15mJ                        0.1 pts

  Remark: ± signs are not required as long as the correct
sign corresponding to the ferromagnetic order are used:
meaning, + sign in f) and - sign in d). No marks for e) if
the score for d) is zero.


IPhO 2022                               Theoretical problems: solutions. Language: English

T2: James Webb Space Telescope (12 pts)                         The ratio of diameter do for an object at a distance
                                                                Do ≫ f and an image diameter di is given by
Updated July 15, 12:30 PM China Time
                                                                                             di   f
   Changes since July 13, 4:30 PM China Time are high-                                          =    ,                (3)
lighted in red, unless those changes are only correcting                                     do   Do
minor typos that don’t affect marking scheme. You are           so the diameter of the image is
particularly urged to pay attention to any red changes
in the marking scheme, as some of these may have oc-                                  (1.7 × 1011 m)(130m)
curred after papers were initially marked.                       di   =
                                                                           (89 ly)(3 × 108 m/s)(365 d/y)(86, 400 s/d)
                                                                                                                      =
   Some general notes for entire Theory 2 marking                     =   2.6 × 10−5 m = 26 µ m.
   An equation which is dimensionally correct, but miss-
ing a multiplicative factor or having a single transcrip-       Marking scheme:
tion error from a previous equation, will receive a de-
duction of -0.1 pts.                                                           correct formula Eq 3       0.2 pts
   An equation which is dimensionally incorrect or one                         di = (26 ± 1) µ m          0.2 pts
which has more than two transcription errors will re-                          sum                        0.4pts
ceive no points.
   Follow on errors are not transcription errors; the only      Units must be shown for a numerical result to get
penalty will be in the first occurrence of a mistake, ex-       points; writing the correct answer without showing
cept in the case of a dimensionally incorrect equation,         work also receives full marks for this problem.
which still receives no points, even if a follow on error.
                                                              2. Diameter of central maximum
   There are two follow on caveats below.
                                                                The angular radius of the central maximum is
   If an error in an equation trivializes the remainder of
the problem, then no additional points after that should                                             λ
be awarded. For example, if a student is computing                                     θmin = 1.22                    (4)
                                                                                                     D
counts, and they arrive at the incorrect answer of zero,
then they should not get future points that compute in-         λ = 800nm is given in the problem
tensity, density, uncertainty, as these would all become
                                                                D is the aperture size, which is the primary mirror,
trivial.
                                                                or π4 D2 = 25 m2 , so
   If an error in an equation makes the remainder of a
problem physically unrealistic, then they should get no                                  D = 5.6m
points for any requested numerical results, but they can
continue to get points for theoretical equations. For ex-       The diameter of the central maximum is then
ample, if a student has an extra factor of 100, they can
get points for derivations, but if asked to find a temper-                 dd = 2θmin f = 2.44
                                                                                                  λ
                                                                                                    f = 1.22 p
                                                                                                              λf
                                                                                                                      (5)
ature they will not get points for reporting 100 times the                                        D           A/π
actual temperature. They will also not get points for re-
porting the correct actual temperature, because it will         The numerical value is
not be consistent with their theory.
                                                                                             (8 × 10−7 m)
   If an equation can be implied to have been used, then                  dd   =   2(1.22)                (130 m) =
the assumption is that it did exist and would get points.                                       (5.6 m)
For example, writing Eq. 7 without explicitly writing                          =   4.5 × 10−5 m = 45 µ m.
Eq. 6 would get points for both equations, subject to er-
ror rules above.                                                dd = 37µm is also acceptable (omitting the factor of
   In places on the mark scheme there are a range of ac-        1.22 is okay).
ceptable answers, and in places the range is divided into       Marking scheme:
two possible ranges, a close range for full points, and a
larger range for partial points. This might appear like                    correct formula Eq 5             0.1 pts
this:                                                                      Aperture D = (5.6 ± 0.2)m        0.1 pts
                                                                           35µm ≤ dd ≤ 47µm                 0.2 pts
             35µm ≤ dd ≤ 47µm      0.2 pts
                                                                           sum                              0.4pts
             20µm ≤ dd ≤ 90µm      0.1/0.2 pts

which means that they get 0.2 pts if they are within the        No penalty for ignoring factor of 1.22, so check their
narrow range, but only 0.1 pts if they are outside the nar-     math. Units must be shown for a numerical result to
row range but still within the larger range. They would         get points; writing the correct answer without show-
never get 0.3 pts in this scheme, so don’t double count!        ing work also receives full marks for this problem.
                                                              3. Equilibrium temperature of the detector at the loca-
                                                                 tion of the image?
Part A: Imaging a Star (1.8 pt)
                                                                The radiant power from the star is
 1. Diameter of image
                                                                                      Pg = 4πro 2 σTg 4               (6)


IPhO 2022                                                Theoretical problems: solutions. Language: English

   The intensity at the location of the scope is                               Part B: Counting Photons (1.8 pt)
                                                     2
                         Pg                   ro                                1. Temperature of source
                  Ig =        =                          σTg 4           (7)
                       4πDo 2                 Do                                  We are interested in the slope of the graph, which is

   This is collected onto the mirror with area A and fo-                                                   (3) − (−1)
                                                                                         slope =                           = −100 K
   cused on a single spot of radius ri , so that the power                                           (0.111/K) − (0.151/K)
   incident is
                          2             2                                         Since this is a characteristic temperature, it is at least
             Pi = A
                      ro       4
                            σTg = A
                                        ri
                                              σTg 4     (8)                       a partial answer to the problem.
                      Do                 f
                                                                                  The value of
   But at the image we have an equilibrium tempera-                                                ∆Eg
                                                                                               |       | = ln 10 × 100 K = 230K
   ture of                                                                                         6kB
                      Pi = aσTp 4 ,
                                                                                  So the value of
   where a = πri2 , so
                                               2                                                    ∆Eg
                                        ri                                                              = 6 × 230K = 1380K
                        aσTp =4
                                                   AσTg   4                                         kB
                                        f
                                                                                  Marking scheme:
   or, ignoring diffraction,
                                         14                                                  slope of graph = −100K           0.2 pts
                   Tp =
                                 A
                                              Tg ≈ 530 K                 (9)                 Tgraph = 230K                    0.1 pts
                                πf 2                                                         Tsource = 1380K                  0.1 pts
                                                                                             sum                              0.4 pt
   When considering diffraction the actual area of the
   stars’ image is larger,                                                        Writing either temperature correctly implies they
                                           2                                      found the slope of graph, and would get the +0.2 pts.
                    ′         di + dd                                             Just writing Tsource = 1380K gets full marks, as it re-
                   a =                         a ≈ 7.46a                (10)
                                 di                                               ally is possible to solve this in one’s head.
                                                                                  Order of magnitude T = 103 K will get full marks, and
   where the actual ratio depends on answers above.
                                                                                  no work needs to be shown.
   This means the actual pixel temperature will be
                                                                                  As this is order of magnitude, the following final an-
                                                  14                              swers will get full marks: T = 600K, T = 1000K,
                                    A
             Tp,correct =                              Tg ≈ 320K.       (11)      T = (1380 ± 10)K, T = 1500K. Other numbers in
                                (7.46)πf 2                                        the range 500 ≤ T ≤ 1500 that are more precise
                                                                                  than these answers ought have a problem score of
   Marking scheme:                                                                no more that 0.2 pts, and must show working that
                                                                                  supports their answers!
            power of source, Eq 6                             0.2 pts
            intensity at mirror, Eq 7                         0.2 pts           2. Write an expression for the total count uncertainty
            power of image, Eq 8                              0.2 pts              σt
            correct for diffraction Eq. 10                    0.1 pts             The three uncertainties are
            Either Eq. 9 or Eq. 11                            0.1 pts
            numerical result                                  0.2 pts                                           σr
            sum                                               1.0 pt
                                                                                  and                              √
   Units must be shown for a numerical result to get                                                        σd =       id τ
   points; the answer T ≈ (320 ± 10)K for including                               and
   diffraction or T ≈ (530 ± 10)K for ignoring diffrac-                                                            √
                                                                                                            σp =       pτ
   tion must be consistent with their approach. Check
   the number, since the ratio in Eq 10 depends on their                          and then
   answer to A.2                                                                                      σt 2 = σr 2 + (id + p) τ
   Students must present a symbolic equation in their                             Marking scheme:
   solution.
   Writing Eq. 11 without showing any other work re-                                     correct error for dark current          0.1 pts
   ceives 0.8 pts; Writing Eq. 9 without showing any                                     correct read photon                     0.1 pts
   other work receives 0.7 pts.                                                          added in quadrature                     0.2 pts
                                                                                         sum                                     0.4 pt


IPhO 2022                                          Theoretical problems: solutions. Language: English

   Writing                                                                  Eλ = (2 ± 0.1) × 10−20 J    0.3 pts
                                  √            √
                      σt = σr +       id τ +       pτ                       Forgetting ln 10 factor     -0.1 pts
                                                                            I = (1.8 ± 0.2) × 10−22 W   0.2 pts
   only gets +0.1, instead of the quadrature +0.2
                                                                            sum                         0.5 pt
   Forgetting the read error term is a -0.1 pt deduction.
   Correct dark current and photon count errors in fi-             If they forget factor ln 10, then the correct intensity
   nal answer are acceptable evidence for those points;            would be (7.8 ± 0.2) × 10−23 W. They only get the ln 10
   it is not necessary for the student to explicitly state         penalty once!
   what is what.
 3. Determine the photon count for a signal to noise ra-
    tio of S/N = 10.
   At a temperature of T = 7.5K, the dark current is id =
   5 electrons/second. This gives a total dark current
   count of
                       id τ = 5 × 104

   Answers in the range id = 5 ± 1 will be accepted for
   full marks.
   Let P be the photon count. Then

                            P = 10σt

   so
                     P 2 = 100 σr2 + id τ + P               (12)
   with solution P ≈ 2290, and a rate of p = 0.229 pho-
   tons per second.
   Marking scheme:

                  id = (5 ± 1) e/s       0.2 pts
                  1 ≤ id ≤ 10            0.1/0.2 pts
                  Eq 12                  0.1 pts
                  0.206 ≤ p ≤ 0.25       0.2 pts
                  0.10 ≤ p ≤ 0.33        0.1/0.2 pts
                  sum                    0.5 pt

   They only get the points for p, the count rate, if it
   agrees with their assumption for id , so check the
   math!
   Writing only the absolute counts P instead of the
   rate p would get 0.1 pts for 2060 < P < 2500 and no
   points if outside this range.
   Ignoring σr does not incur a penalty, as it is relatively
   small.
 4. What is intensity of source?
   The near-infrared photons have an energy of Eg =
   2.3 × 6kB T , so

        Eλ = (1380 K)(1.38 × 10−23 J/K) = 1.9 × 10−20 J

   This is not an order of magnitude question like B.1
   The energy received every second is

             E = (0.23)(1.9 × 10−20 J) = 4.4 × 10−20 J

   and the incident intensity on the primary mirror is
   then
             E/t   (4.4 × 10−20 J/s)
        I=       =                   = 1.8 × 10−22 W/m2
              A         (25 m2 )

   Marking scheme:


IPhO 2022                                        Theoretical problems: solutions. Language: English

Part C: The Passive Cooling                                                 A student will need to consider energy balance
                                                                            across any one sheet:
 1. Find expressions for the temperatures of first and                                                          ′
    fifth sheet                                                                              qi−1,i = qi,i+1 + qi,i+1               (23)

   This is a cleaned up version of an “ideal” solu-                         basically stating that the net flow into sheet i from
   tion                                                                     sheet i − 1 must equal the net flow out of sheet i to
                                                                            either sheet i + 1 or into space.
   Let Qi represent heat flow off of a surface, and Qij
   represent the heat flow difference off of two sur-                       Substitute in Qij ,
   faces that are facing each other.                                                      αQi−1,i = αQi,i+1 + βQi,i+1
   The student needs to consider the three types of dif-
                                                                            or
   ferences below:                                                                                         α+β
                                                                                            Qi−1,i =                 Qi,i+1         (24)
   Between sun and first sheet:                                                                             α

                              I0                                            The relation for sheet 1 is a little different:
                 Q01 = ϵAσ       − T14                             (13)
                              σ
                                                                                          q0,1 = Q0,1 = αQ1,2 + βQ1,2               (25)
   which is the net heat flow into sheet 1 from the sun-                    and so is the relation for sheet 5:
   side.
                                                                                                   q4,5 = Q5,6                      (26)
   Between any two adjacent sheets:
                                                                            What will eventually matter most is
                        Qij = ϵAσ Ti4 − Tj4 ,                      (14)
                                                                                                          α4
   which is not the net heat flow between the sheets, it                                      Q5,6 =            Q0,1                (27)
                                                                                                       (α + β)4
   is merely a convenient expression to use later.
   Between last sheet and the cold, cruel vacuum of                         Now use the recursion of Eq. 24 to sum up the six Qij
   space:                                                                   terms in Eq. 22:

                    Q56 = ϵAσ T54 ,             (15)                                              kQ0,1 = ϵAI0 ,                    (28)
   which is the net heat flow out of the far side of the                    with the constant k defined as
   last sheet.
                                                                                       1      α       α2      α3      α4
   From the problem text, the flux emitted by one sheet                     k = 1+        +         +       +       +
                                                                                     α + β (α + β) (α + β) (α + β) (α + β)4
                                                                                                  2       3       4
   and absorbed by an adjacent sheet is                                                                                (29)
                                                                            Substitute the expression for Q0,1 back into Eq. 13
                                qi = αQi
                                                                            and get
   so that the net heat flow flux out of one sheet ab-                                     s            r
                                                                                           4 I0     1      4 I0
   sorbed by the adjacent sheet is                                                   T1 =       1−      =       (k − 1)    (30)
                                                                                             σ      k        kσ
                               qij = αQij
                                                                            and the into Eq. 27 and Eq. 15 to get
                                                                                                         r
   and the flux ejected into space between two sheets                                                α 4 I0
   is                                                                                         T5 =                                  (31)
                         ′
                                                                                                   α + β kσ
                        qij = βQij
                                                                            which can also be written elegantly as
   This doesn’t affect the marking, but the approximation being                                      r
   made here is that β is the same for all four pairs of adjacent sheets.                        α 4 1
                                                                                          T5 =               T1 .
   This makes the math solvable, and was the explicit assumption                               α+β k−1
   that the students were told to make.

   A student will need to recognize that                                    Marking scheme:
                                                                                 Net flow into sheet 1 Eq 13                  0.2 pts
                                I0
                 Q01 = ϵAσ         − T1
                                      4
                                                                   (16)          “Net” flow sheet i → j Eq 14                 0.2 pts
                                σ
                                                                                 Net flow out of sheet 5 Eq 15                0.2 pts
                 Q12 = ϵAσ T14 − T24                               (17)          Sum to eliminate sheet temps Eq 22           0.2 pts

                 Q23 = ϵAσ T24 − T34                               (18)          Generic Energy flow Eq 23                    0.2 pts
                                                                                 Recursion for Qij Eq 24                      0.2 pts
                 Q34 = ϵAσ T34 − T44                               (19)
                                                                                 Sheet 1 Energy flow Eq 25                    0.2 pts
                 Q45 = ϵAσ T44 − T54                               (20)          Sheet 5 Energy flow Eq 26                    0.2 pts

                 Q56 = ϵAσ T54                                     (21)          Simplify sum Eq 28                           0.2 pts
                                                                                 Find k Eq 29                                 0.2 pts
   can be summed to give                                                         Final Expression for T1 , Eq 30              0.2 pts
                                                                                 Final Expression for T5 , Eq 31              0.2 pts
       Q01 + Q12 + Q23 + Q34 + Q45 + Q56 = ϵAI0                    (22)          sum                                          2.4 pt


IPhO 2022                                 Theoretical problems: solutions. Language: English

   • In most cases a single mistake in an equation that          variations of what students can cook up while trying
     is still dimensional correct will get 0.1 pts for the       to reconcile difficult physics can be numerous, all of
     equation. Making the same mistake multiple times            the possible results are not presented here, as they
     is not a follow on error, and would be penalized            depend on what assumptions the students opted to
     every time.                                                 make.
   • Any equivalent to Eq 14 would get the 0.2 pts.              It does not affect the approach to C.2 or the scoring
   • Any attempt to balance energy flow on a generic             of numerical bounds on C.3
     sheet like Eq 23 that is dimensionally correct and
     reasonable given their presentation would get the           Additional Marking Guidance:
     0.2 pts                                                     • A generic energy flow expression like Eq. 23
   • Since sheet 1 and sheet 5 have a different en-                that is consistent with what the student has pre-
     ergy balance approach, they must show those sep-              sented will get 0.2 pts. The energy flow expres-
     arately to get those points.                                  sion can have one reasonable simplifying assump-
   • It is possible to arrive at Eq 28 based on dimen-             tion/approximation, so long as it does not make it
     sional analysis alone. A student who writes some              trivial, for no penalty.
     form of Eq 28 without clear justification would get         • A recursion relation like Eq. 24 that is consistent
     points for Eq 22 and Eq 28. They could get full               with what the student has presented will get 0.2
     marks for final sheet temperatures if it is consis-           pts. The recursion relation can have one reason-
     tent; if they did, then they would probably also get          able simplifying assumption/approximation, so
     at least partial points for Eq 13 and/or Eq 15. They          long as it does not make it trivial, for no penalty.
     would need to introduce one more unknown con-                 This likely means that the student introduced a
     stant to have defined Q56 = k ′ Q01 . The maximum             few constants to keep it clean. That’s okay. Er-
     points I would expect with this approach is 1.2 pts.          rors in the recursion relation that are unsup-
   • k in Eq 29 is allowed a single error for 0.1 pts. Two         ported by statements of approximation or reason-
     errors is no points.                                          able physics, or are just plain bad math, would
   • Failing to include the back flux of Eq 14 is only a           have a penalty of -0.1 pts.
     penalty on that equation but would be zero points,          • Equations 13 and 15 must be consistent with the
     as it is a serious error. That means writing the              student’s statement of Eq. 23, or they would get a
     equivalent of Qij = ϵATi4 is zero points! The work            penalty of -0.1 pts. In short, pick specific approach.
     after this would have a follow on error that would          • Eq. 29 must be consistent with the student’s ap-
     need to be traced.                                            proach; similarly, the final expressions for T1 and
   Corrections to some of the above formula                        T5
                                                                 • Attempting to write this problem as a matrix but
   Andres Poldaru, leader from Estonia, pointed out                not being able to solve it is equivalent to writing a
   an inconsistency in part of the Eq. 23 above deriva-            recursion relation for 0.2 pts and simplifying the
   tion. The above equation does reflect the simplified            sum for 0.2 pts; in theory they have already gotten
   schematic diagram of energy flow and loss on the                much or most of the points above that. Not solving
   question paper, but does not properly reflect the en-           the matrix, however, will have a maximum score
   ergy balance on an individual sheet. It should read,            of 2.2 pts, assuming everything else is there.
   for sheets 2, 3, and 4, as                                    • As a reminder, don’t mix and match grading
                                                                   schemes; follow an approach that is self consis-
                    qi−1,i = qi,i+1 + 2BQi
                                                                   tent, and if more than one scoring approach is
   where B is the physical fraction of energy lost to              valid, select the one that gives the higher score.
   space from one side of a sheet, and Qi = ϵAσTi4 . A           Original Solution
   similar correction would exist for sheet 1 and 5, ex-
                                                                 Don’t use this, eh?
   cept that the factor of 2 in front of B would be 1, as
                                                                 Start with a statement of net energy flow q01 into the first sheet
                                                                 from the sun:
            Q01 = q12 + BQ1 and q45 = Q56 + BQ5                                                 (
                                                                                       q01 = ϵA I0 − σT14
                                                                                                          )
                                                                                                                               (32)
                                                                 where A is the area of the sheet, ϵ is the emissivity, σ is the Stefan-
   The factor of 2 isn’t the problem, it is instead that it is   Boltzman constant, and T1 is the temperature of the first sheet.
   now difficult to align the expression for energy loss
                                                                 Now consider the space between two sheets i and j. Each sheet
   to space between sheets with the energy lost to space         radiates an energy flow
   of a specific sheet. As such, this approach creates a                                    ϵAσT 4
   much messier solution.                                        toward the other sheet, but a fraction β is ejected into space out
                                                                 the gap.
   There is no convenient way to solve these corrected
   five equations without iterating, which is the moti-          We have defined α as the fraction emitted from one sheet that is
                                                                 absorbed by the other sheet, so the net energy flow from sheet i
   vation for some of our substitutions and approxima-           into sheet j is                 (          )
   tions above, or by creating a five by five matrix and                             qij = αϵAσ Ti 4 − Tj 4                 (33)
   diagonalizing. At least some students attempted to
                                                                 There is also a lost fraction emitted into space from between the
   do it this way.                                               sheets, given by
   It does not change Eq. 28, it does change the expres-                            ′
                                                                                             (           ) β
                                                                                       = βϵAσ Ti 4 − Tj 4 = qij                    (34)
   sion for the convenient constant in Eq. 29. It also                             qij
                                                                                                           α
   changes the fifth sheet heat flow, Eq. 27. Because the


IPhO 2022                                                       Theoretical problems: solutions. Language: English

   Don’t make the mistake of assuming that α+β = 1, as some of the                so                            (      )4
   energy emitted from a sheet could be reabsorbed by that sheet.                                                 α       ϵAI0
                                                                                                     AϵσT54 =
   Finally, write an expression for the net thermal radiant energy                                              α+β         k
   flow into space, with an ambient temperature of Tspace = 0, from               or                                 √
   the far side of the fifth sheet.                                                                              α 4 I0
                                                                                                         T5 =                                  (43)
                               (         )                                                                     α+β      kσ
                     q5s = ϵA σT54 − σTs4 = AϵσT54              (35)              which can also be written elegantly as
                                                                                                                  √
   Write each of the Eq. 33, above in the form                                                                α 4      1
                                                                                                     T5 =                  T1 .
                              1                                                                             α+β     k−1
                                qij = Aϵσ(Ti4 − Tj4 ),                   (36)
                              α
                                                                                  As this part of the question is complex, with multiple ways to go
   and then sum up the terms from Eq. 32, the four from Eqs. 36, and              wrong, and many opportunities for approximations, the marking
   Eq. 35:                                                                        scheme will be necessarily convoluted.
                      1                                                           Some expected mistakes:
              q01 +     (q12 + q23 + q34 + q45 ) + q5s = ϵAI0            (37)
                      α
                                                                                    (a) Failing to account for the back flux of energy. This would
   as all of the Ti terms cancel out on the right!                                      be
   Now consider a schematic of the energy flow below                                                             I0 = 2σT14
                                                                                        and then
                                                                                                              ασT14 = 2σT24 ,
                                                                                        and so on, concluding with
                                                                                                                      ( )4
                                                                                                                       2
                                                                                                             I0 = σ        T5
                                                                                                                       α
                                                                                        or                               α
                                                                                                                T5 =       T1
                                                                                                                         2
                                                                                    (b) Inconsistent treatment of emissivity
                                                                                        The most likely error is of the form
   From energy conservation, the net flow into sheet one from the
                                                                                                                ϵI0 = σT14
   sun and the net flow out of sheet one toward sheet two or ejected
   from gap is                                                                      (c) Incorrectly resolving β and α.
                                          ′
                            q01 = q12 + q12 ,                   (38)
   where q12
          ′ is the part emitted into space from the gap.
                                                                                2. Find α and β
   Combine with Eq. 34 and                                                        Assuming students grab the hint about effective ab-
                        (     )
                            β         α+β                                         sorptive areas, then expect
                  q01 = 1 +     q12 =     q12                            (39)
                            α          α
                                                                                  Area of gap:                       p
   Similarly, for the remaining pairs of sheets,                                                        Agap = 4h     Asheet                   (44)
                                      (       )2
                    q23 =
                            α
                               q12 =
                                          α
                                                 q01 ,                            Area of one sheet A
                          α+β           α+β
                                                                                  Assume that the probability of being absorbed by a
   and
                               α
                                               (
                                                    α
                                                            )3                    sheet is the ratio of effective areas
                      q34 =       q23 =                          q01 ,
                              α+β                  α+β                                                          ϵAsheet
   and                                         (            )4
                                                                                                      α=                                       (45)
                             α                      α                                                       2ϵAsheet + Agap
                      q45 =     q34 =                            q01 ,
                            α+β                    α+β
                                                                                  This result yields α = 0.3.
   Finally, for the fifth (last) sheet all of the net energy flow in from
   the fourth sheet must be completely ejected into space on the dark             Assume the probability of ejection is a ratio of effec-
   side.                              (         )4                                tive areas
                                           α                                                               Agap
                                                                      (40)
                         q5s = q45 =
                                         α+β
                                                   q01 .
                                                                                                 β=                                  (46)
                                                                                                     2ϵAsheet + Agap
   The sum on the left side of Eq. 37 can then be written as
                                                                                  This result yields β = 0.4.
                                    kq01 = ϵAI0                          (41)
   where
                                                                                  Marking Scheme:
                                  α2          α3          α4
     k=1 +
              1
                 +
                      α
                           2
                             +         3
                                         +         4
                                                     +                                 Gap area Eq 44                                0.2 pts
                                                       (α + β)4
                                                                                       Estimating α Eq 45                            0.2 pts
             α+β   (α + β)     (α + β)     (α + β)
   is a convenient constant.                                                           Estimating β Eq 46                            0.2 pts
   Combining Eq. 32 with Eq. 41,                                                       Factor of 2 for A in both                     0.2 pts
                              ϵAI0     (          )                                    Weighting A by emissivity in both             0.2 pts
                                   = ϵA I0 − σT14                                      Finding α                                     0.1 pts
                               k
   so                     √                                                            0.25 ≤ α ≤ 0.35                               0.1 pts
                                    (          )       √
                               I0          1               I0                          Finding β                                     0.1 pts
                                                                         (42)
                                                       4
                  T1 =    4
                                        1−         =          (k − 1)
                               σ           k               kσ                          0.3 ≤ β ≤ 0.83                                0.1 pts
                                                                                       subtotal                                      1.4 pt
   From above,
                                        (
                                             α
                                                   )4                                  Find a better β                               0.2 pts
                              q5s =
                                            α+β
                                                        q01 .                          sum                                           1.6 pt


IPhO 2022                                   Theoretical problems: solutions. Language: English

   • “in both” means that to get the points they must         Any who correctly does this gets those 0.2 pts. If they
     have used the factor of two and the emissivity both      make a single mistake, but still end up with
     times; if it is missing from one, they get 0.1 pts for
     the equation it is present in.                                                     1 − α > β > 1 − 2α
   • Find α and β means that it is consistent with own
     work.                                                    they can still get 0.2 pts. If they make two or three
   • Assuming 2α + β ≈ 1 with proof would mean they           mistakes, but still end up with
     only need to find either α or β, and they would get
                                                                                        1 − α > β > 1 − 2α
     all of the points upon finding the other one. The
     highest possible subtotal score in the case would        they can still get 0.1 pts. They only get these points
     be 1.4 pts. Proof can be simple, however, like say-      for an effort to deal with our odd definition, and rec-
     ing “two sheets, equal probability of being trans-       ognizing that the back flux is positive for ejection
     mitted or absorbed into the other.”                      from the gap. Just writing a different β without jus-
   • Assuming 2α + β ≈ 1 without proof would mean             tification doesn’t get these “special” points.
     they only need to find either α or β, and they
     would get 2/3 of the points upon finding the other       In the event that a student derives
     one. The highest possible subtotal score in the case                                    5 ′  5 10
     would be 1.2 pts.                                                                  β=     β = − α
                                                                                             3    3  3
   • Assuming α + β ≈ 1 stating a “reasonable” proof
     would mean they only need to find either α or β,         Then their minimum score for C.3 should be 0.8
     and they would get 2/3 of the points upon finding        pts, then subtract off 0.1 pt for every error in their
     the other one. The highest possible subtotal score       derivation if their answer is close. After that, look
     in the case would be 1.2 pts. Stating “energy con-       back at their work on estimating α or β alone, and
     servation” is reasonable, though incomplete.             add on half points for any success, up to 1.4 pts (or
   • Assuming α + β ≈ 1 without any proof would               1.6 pts, if no mistakes). The score they get for C.3
     mean they only need to find either α or β, and they      would be the larger of the two scoring approaches.
     would get 1/2 of the points upon finding the other       Original Solution
     one. The highest possible subtotal score in the case
                                                              These might still apply in some cases; the first path
     would be 1.1 pts.
                                                              was rewritten above, so not included, and the sec-
   • Finding α and β means that it is consistent with
                                                              ond path assumed reflective sheets at angles, so was
     own work.
                                                              deleted. Choice C is a variation that can yield a cor-
   • Read the special note about finding a better β be-
                                                              rect value for β, but it would need to be combined
     low to understand the last 0.2 pts.
                                                              with some other approach to find α.
   Special note                                               Choice C: Estimate the radiant flux from the gap
   Our assumption is that the rejected heat can be writ-      Assuming that the enclosed volume is a black body in equilib-
   ten as
                                                              rium, which it isn’t, at a temperature equal to a quartic averaging
                                                              of the two temperatures: 12 (Ti4 + Tj4 ). Then the energy is radiated
                 qij = βϵσA Ti4 − Tj4
                                                              out of the area according to

   This is certainly true, but β would be infinite in the                                      1
                                                                                    qlost = σAg (Ti4 + Tj4 )
   case of Ti = Tj . It would have been better to write                                        2

                                                              where Ag is the area of the gap, given by
                     qij = β ′ ϵσA Ti4 + Tj4                                                     √
                                                                                        Ag = 4h A

   which would follow the energy conservation rule            But energy was entering the region at the rate
   2α + β ′ = 1 if ϵ ≪ 1.
                                                                                        qin = ϵσA(Ti4 + Tj4 ),
   In fact, β is really what the student is finding in the
            ′

   approach above.                                            so the fraction lost is
                                                                                             Ag    2h
   Assuming that the temperatures of adjacent sheets                                    β=      = √ = 0.7
                                                                                             2A   ϵ A
   are related by
                       Tj = γTi                               Marking Scheme:

   then                                                                     Estimating flux out of gap           0.2 pts
                                        4                                   Exact flux into volume               0.2 pts
                               ′1 + γ
                        β=β                                                 Correct estimate of gap area         0.2 pts
                               1 − γ4                                       Finding β                            0.1 pts
   In our case,                                                             0.65 ≤ β ≤ 0.75                      0.1 pts
                               (100K)                                       sum                                  0.8 pt
                        γ4 ≈
                               (400K)                         The bounds on allowed values for β are smaller in this approach,
                                                              because there really is only one reasonable answer.
   which means
                                                              Look back at the full solution to see how to score estimates for α
                       5    5 10                              based on this β.
                    β = β′ = − α                              Note that this approach has fewer possible points, as the expres-
                       3    3  3
                                                              sion for the flux out of gap makes an assumption that is based on
   is the best estimate; in our case, we expect β = 0.67.     unchecked physics.
                                                              Choice D: Another Approach?


IPhO 2022                                       Theoretical problems: solutions. Language: English

   Surely there will be some creative students who show other ap-         The grade depends on self consistency with the pre-
   proaches. We will try and expand the marking scheme to recog-          vious work, so the numbers must be checked!
   nise these approaches as soon as they occur. A rough guide for
   an incomplete approach is                                              Note that here is a case where follow on errors could
   Tentative Marking Scheme:                                              be penalized twice; students should recognize that
                                                                          an answer is not reasonable, as T1 should be on the
           Relevant correct physics equation, each      0.2 pts
                                                                          order of the temperature of the Earth, and that T5
           Reasonable approximation, each               0.1 pts
                                                                          ought to have shown significant, but not incredible,
   The maximum possible is still 1.6 pts.                                 cooling.
   An equation is only relevant if it can be argued that it would lead
   to an answer to the question within the bounds of the approach
   that they are following. For example, don’t award points for both
   counting bounces and effective surfaces, unless each equation
   contributes to a unified approach that would lead to the answer.
   Find the most rewarding approach, and award points for that line
   of reasoning.
   If a student only finds one of α or β, then they get 0.2 pts for the
   first. The marking scheme assumed they would look for α first,
   but they might have looked for β, and only found that.
   Be very careful with mixing and matching approaches!
   A student will not get half the points for one approach plus half
   the points for another approach if they attempt, but don’t suc-
   ceed, with both approaches. They will be awarded the higher of
   the two scores, not the sum.

 3. Numerically determine the temperature of sheet 1
    and the temperature of sheet 5.
   The solar intensity is I0 = 1360 W/m2 , the back-
   ground temperature of space is Tb = 20 K and is neg-
   ligible.
   Assuming a student does C.1 correctly, and uses 2α +
   β = 1, then

                    β       α      T1 (K)     T5 (K)
                   0.3     0.35     383        120
                   0.4     0.3      380        102
                   0.5     0.25     376        83
                   0.6     0.2      373        65
                   0.7     0.15     369        48

   The other bound is α + β = 1, in that case:

                     β      α      T1 (K)    T5 (K)
                    0.3    0.7      370       189
                    0.4    0.6      368       165
                    0.5    0.5      365       140
                    0.6    0.4      363       114
                    0.7    0.3      361        87

   The numbers agree well with the theoretical perfor-
   mance of 320 K and 90 K. Some of the major differ-
   ences are explained by different coatings on differ-
   ent surfaces, a temperature and wavelength depen-
   dence on emissivity that is designed to reflect visible
   light from the sun while radiating infrared on the
   sunside of sheet 1, and the sheets are not uniform
   temperature.
   Marking Scheme:

          T1 consistent with own formula               0.1 pts
          250K ≤ T1 ≤ 400K                             0.1 pts
          T5 consistent with own formula               0.1 pts
          45K ≤ T5 ≤ 200K                              0.1 pts
          sum                                          0.4 pt


IPhO 2022                                Theoretical problems: solutions. Language: English

Part D: The Cryo-Cooler                                                                           Gas Parcel

 1. What state variables change?

     (a) In order to force the gas through the plug,
         which offers up considerable viscous friction,                               Porous Plug
         P1 > P2 ; it is this pressure difference that is the
         source of the force.
    (b) Viscous friction is dissipative, and the energy         The work that the surrounding gas in region 1 does
        of moving through the plug is not allowed to            on the gas pushing it into the plug is
        go anywhere else, so the internal energy of the
                                                                                       W 1 = P1 V 1
        gas must increase as it moves through the plug,
        and then U1 < U2 .                                      because the pressure is constant, and the effective
     (c) Though no heat is gained or lost, this is not a        change of volume is V1 . Similarly, when the gas en-
         constant entropy process; that can be seen be-         ters region 2 it must displace a volume V2 of gas that
         cause it is an irreversible process. As such, S1 <     was already there, so
         S2
                                                                                      W2 = −P2 V2
    (d) Since the process of moving across a pressure
        gradient imparts kinetic energy to an object, it        The net work is then
        is expected that the fluid velocity on the right
        will be higher than the left; in fact, we are told                       Wnet = P1 V1 − P2 V2                (47)
        this is marginally true. Since mass is conserved,
        the volume of a mole of gas on the right must           Since there is no heat exchanged,
        also be higher than the volume of a mole on the
        left, and V1 < V2 .                                         U2 − U1 = ∆U = Q + Wnet = P1 V1 − P2 V2          (48)
     (e) The correct answer is T1 ?T2 . If this were an
         ideal gas, one might expect T1 ≤ T2 since U ∝ T .      which implies
         But this is not an ideal gas, and U will be a func-
                                                                            ∆U = U2 − U1 = P1 V1 − P2 V2 .
         tion of temperature and density. As such, it
         is not possible to know the comparative rela-          Upon rearranging
         tion between T1 and T2 . That’s the whole point
         of this problem, and the challenge of trying to                        U 2 + P2 V 2 = U 1 + P 1 V 1
         make liquid helium.
                                                                and therefore
    Marking scheme:                                                                      U + PV

            For each correct response       +0.2 pts            is a conserved quantity.
            sum                             1.0 pt              Marking scheme:

    Explanations by the students are not needed.                         Compute correct W1                0.1 pts
                                                                         Compute correct W2                0.1 pts
 2. A mole of gas at P1 , V1 , T1 , U1 enters the porous plug            Write energy law, Eq 48           0.2 pts
    from the left, and that mole of gas exits the porous                 Show U + P V conserved            0.2 pts
    plug on the other side at P2 , V2 , T2 , U2 .                        sum                               0.6 pt
    Consider first a control volume approach
                                                                Consider instead a differential approach
    The figure below shows the motion of a mole of gas
    through the plug; the mole is shown in pink. Gas to         Another way to look at this problem is to focus on
    the left of the mole pushes the mole through the plug       a differential sample of gas as it moves through the
    with a constant force P1 A through a volume V1 .            plug.
                                                                The figure below illustrates this
                    Gas Parcel                                  The total energy of parcel of molar size δm has two
                                                                relevant energy terms: the internal energy δU and
                                                                the bulk kinetic energy δK. It has a volume δV .
                                                                These four quantities are extrinsic, but to simplify
                                                                notation, we will drop the δ. It’s still there, just in-
                         Porous Plug                            visible.
                                                                For simplicity’s sake, assume a cylindrical shape to
    The mole of gas moves through the plug to the right         the parcel, with an end cap area δA and a length
    hand side, in the process pushing on the air to the         dx. Once again, we will drop the δ. There are three
    right of the mole with a constant force P2 A, through       forces that act on the shape, one associated with
    a volume V2 .                                               pressure on the left end, one associated with pres-
                                                                sure on the right end, and frictional force associated
                                                                with viscosity against the walls of the container.


IPhO 2022                                  Theoretical problems: solutions. Language: English

   Since this is a parcel of differential length dx, the       3. One can find pressure on this graph by applying
   net force associated with the pressure difference be-
   tween the ends is                                                               dU = T dS − P dV

                         Fends = −V
                                      dP                         and then requiring constant entropy so that dS = 0,
                                      dx                         and then
                                                                                           ∂U
   where V is again the volume of the cylinder.                                    P =−                         (50)
                                                                                           ∂V S
   But this force is (mostly) balanced by the viscous
   frictional force Fwalls with the walls of the sponge;         which are the negative slopes of the constant en-
   these two forces effectively add to zero. In fact, it is      tropy curves on a U − V graph.
   the viscous forces with the wall that cause the pres-         Another approach to find pressure is to consider a
   sure gradient across the sponge.                              line of constant U , then
   The bulk kinetic energy of the parcel does not
                                                                                       P     ∂S
   change significantly as it moves through the sponge.                                  =
   This is seen in that the bulk speed of the gas doesn’t                              T     ∂V U
   change significantly as it moves through the sponge.
   The problem with this approach is that the system             Then
   is not in thermodynamic equilibrium; the process is                                                 ∂U
                                                                               U + PV = U −                          V
   not reversible, so it is not possible to attach well de-                                            ∂V        S
   fined state variables. This means that                        is the conserved quantity.
                        dU = T dS − P dV                (49)     Now −(∂U /∂V )S is measured only at the point V1 , U1 ,
                                                                 and is the slope of the tangent line to the constant
   is not a function that can be integrated; in fact, dS ̸=      entropy curve. Following that tangent line back a
   0 from the previous part of the problem. Arguing              distance V takes it to an intercept with the U axis,
   that V dP = −T dS is rather handwavy, and resolving           and that intercept is then the conserved quantity.
   this actually requires considering a control volume
                                                                 More mathematically, define a function H
   approach.
   Still, the energy conservation ideas still hold true,                              H = U + PV
   even if thermodynamically poorly defined, so
                                                                 then
                     dU = −P dV − V dP                                               U = H 2 − P2 V
   since the part associated with −V dP doesn’t change           is the equation of a line,
   the bulk kinetic energy, and instead dissipates into
   internal energy of the gas.                                                   U = H2 +
                                                                                                  ∂U
                                                                                                                 V       (51)
   The result is that                                                                             ∂V       S 2


                         dU = −d(P V )                           with the U intercept equal to the conserved H2 .
                                                                 An estimate can be made visually, but it is difficult to
   or                                                            be accurate. Try constructing a line from the point
                            U + PV                               V2 = 0.120, T2 = 7.5 that is tangent to the local isen-
   is a constant                                                 trope, and the result will intercept the U axis. This
   Marking scheme:                                               result is somewhere around 40. This is shown in
                                                                 green below.
            Traditional δW = −P dV         0.1 pts
            Bulk kinetic δK = −V dP        0.1 pts
            Explain where δK goes          0.1 pts
            Differential Eq 49             0.1 pts
            integrate U + P V constant     0.1 pts
            sum                            0.5/0.6 pt

   Because of the many subtle traps, this approach will
   not get the same number of points as the control vol-
   ume approach.
   Writing dU = −P dV and integrating to find U + P V
   is constant gets only 0.2 pts. This is because there
   are several errors: the differential is poorly defined
   within the sponge; because the state variables are
   poorly defined; P is not a constant; so you can’t ac-
   tually integrate it; and the work done in this case is        Now to improve the result.
   not correctly computed. Four wrongs don’t make a              Draw a line out from 39 that is tangent to the near-
   right.                                                        est isentrope to V2 = 0.100, T2 = 7.5; draw another


IPhO 2022                               Theoretical problems: solutions. Language: English

   line out from 41 that is also tangent to the nearest
   isentrope to V2 = 0.100, T2 = 7.5. These are shown in
   purple below.

   Measuring the distance with a ruler, find the frac-
   tional distance between the two purple lines to the
   point V2 = 0.100, T2 = 7.5 along the highlighted green
   line. It is about 75% the way from the bottom purple
   line. This means that the conserved quantity ought
   be 75% the way up on the highlighted blue section
   on the graph. A line connecting the two is shown in
   green.

   This point is about 41 kJ/kg. The actual value for the
   conserved quantity is U + P V = 40.7 kJ/kg.
                                                                Students don’t need to draw every line, as with a
                                                                straight edge one can find the tangent that maxi-
                                                                mizes the temperature T1 by shifting it around vi-
                                                                sually.


                                                                  Line starts from student’s H                           0.2 pts
                                                                  Line intercepts an isentrope                           0.2 pts
                                                                  The isentrope matches max T1                           0.2 pts
                                                                  Stated T1 within 0.5K of student’s construction        0.1 pts
                                                                  10K ≤ T1 ≤ 12K                                         0.1 pts
                                                                  sum                                                    0.8 pt

                                                              5. Using the slope of the line from the conserved quan-
                                                                 tity to the maximum temperature point, compute
                                                                 the pressure.
   Marking scheme:
                                                                Using the results from above,

                                                                                      (41) − (10)
        Pressure formula stated, Eq 50     0.2 pts                         P1 = −                  = 1.8 MPa
                                                                                    (0) − (0.0170)
        Tangent intercept concept          0.4 pts
        A first estimate for H             0.2 pts
                                                                If they didn’t know to use slope by this point, they
        Upper bound for estimate set       0.2 pts
                                                                can’t generate an answer. As such, they would al-
        Lower bound for estimate set       0.2 pts
                                                                ready have received points for the pressure for-
        Interpolated estimate set          0.2 pts
                                                                mula, and we only consider the numerical result
        40.5 < H < 41.0                    0.2/0.2 pts
        40.2 < H < 41.2                    0.1/0.2 pts
                                                                    P agrees with the slope of the graph       0.1 pts
        sum                                1.4 pt
                                                                    1.6 MPa ≤ P1 ≤ 2.4 MPa                     0.1 pts
                                                                    sum                                        0.2 pt
   As the task asks for a graphical construction, and it
   is not possible to construct an accurate tangent to
   the isentrope at T2 = 7.5K based on a single line, stu-
   dents must do something to improve or verify the
   result, even if it is correct on the first guess. Hence
   the upper and lower bound approach and interpo-
   lation, or something equivalent.


 4. Draw a series of radial lines out from the conserved
    point that are tangent to lines of constant entropy.
    Mark the tangent point. Connect with a smooth
    curve; this curve is the set of points U1 as a function
    of V1 that has the conserved quantity. Look for the
    maximum temperature intercept.

   This happens at about T1 = 11K. If T1 is higher than
   this, it would not be possible to cool down to T2 =
   7.5K.


IPhO 2022                                          Theoretical problems: solutions. Language: English

T3: Scaling laws (8 pts)                                       There are two processes binding the sand grains to-
                                                               gether. The first one is the force due to the surface ten-
Note: A correct numerical answer provided with at least sion, F1 = γl, where γ denotes the surface tension coef-
two significant figures receives full marks. Inappropri- ficient, and l — the perimeter of the “neck”; with l ∼ rg ,
ate use of equality will lead to a penalty of 0.1 pts for each where rg denotes the length scale of a single grain, we ob-
part of the question.                                          tain Fs ∼ γr. The second one is the pressure force caused
                                                               by the negative capillary pressure in the neck, Fp = ∆pA,
                                                               where A is the cross-sectional area of the “neck”, and
Task A: Spaghetti (2 pts)                                      ∆p ∼ γ/r. With A ∼ r2 we obtain F2 ∼ γr. Thus, the both
                                                               components are of the same order of magnitude and us-
This is section 2.2.2 (Statics) of the syllabus.               ing either of them will lead to the correct scaling law.
  Consider only the left half of the spaghetti straw.          These forces press the grains against each other, hence
  Torque balance at its right endpoint implies that the the normal force and friction force between the grains is
torque applied to its right endpoint must balance out the also on the order of Fs and Fp .
torque due to gravity: τ ∝ ml ∝ d2 l2 . This torque arises        Solution 1:
from the gradient in the horizontal stress. If the typical        Based on what has been said above, the typical force
horizontal stress is σ, then the typical force is F ∝ σd2 , needed to delocate a grain of sand is Fg ∝ rg . The force
so the torque is τ ∝ F d ∝ σd3 . Hence, we obtain              needed to delocate an entire horizontal layer of sand is
                                        √                      then ∝ Fg Nl , where Nl ∼ A/rg2 is the number of grains in
                   σd ∝ d l =⇒ l ∝ d,
                      3    2 2
                                                               a layer. The force of cylinder destruction F thus satisfies

so                 r                                                        F ∝ Fg Nl ∝ rg /rg2 = rg−1 ∝ Vg−1/3 ,
                       d′        √
            l′ =            l=       10 · 50 cm = 158 cm.       so
                       d
                                                                              Ff g = (1/10)−1/3 · Fcg = 21.5 N.
  Marking scheme:
                                                                  Marking scheme:
                   τ ∝ d2 l 2                 0.4 pts
                   F ∝ σd2                    0.5 pts                      a) Fs ∝ rg and Fp ∝ rg         0.5 pts
                   τ ∝√σd3                    0.5 pts                         one of the two missing      -0.1 pts
                   l∝ d                       0.4 pts                      b) Fg ∝ rg                     0.5 pts
                   Answer: 158 cm             0.2 pts                      c) F ∝ Fg Nl                   0.5 pts
                                                                           d) F ∝ rg−1                    0.3 pts
                                                                           Answer: 21.5 N                 0.2 pts
Task B: Sand castle (2 pts)
                                                                Notes: If the student only qualitatively explains the
This is Section 2.2.2 (statics) and 2.2.5 (hydrodynamics) of    mechanism by which the grains of sand are held to-
the syllabus                                                    gether, a maximum of 0.5 pts are given. Points b)-c) are
   Due to wetting of the surfaces of the sand grains and        given only if derived from a).
its large surface tension water acts like a glue for sand.         Solution 2:
This means that all the grains need to be bound together           We have seen above that grains to one side of a ficti-
by air-water interface. To achieve this there needs to be       tious surface exert force per cross-sectional area on the
neither too little nor too much water: if there is too little   order of magnitude as the capillary pressure ∆p ∼ γ/rg .
water, most of the grains are dry with no surface ten-          In order to get the grains moving, a pressure of the same
sion binding them, and if there is too much water, al-          order of magnitude needs to be applied externally. For
most all the grains are immersed into water, and again,         both cylinders, the surface area where the force is ap-
there is no surface tension binding the grains. So, the         plied is the same, hence the force scales as the capillary
overall strength of the buildings from wet sand depends         pressure, F ∝ 1/rg ∝ V −1/3 .
on the water content; we assume that for the both types            Marking scheme:
of sand, the water content is optimal, and the shape of
the grains is statistically similar. Let us consider two         The applied pressure must be ∼ ∆p                   0.6 pts
neighbouring grains connected by a water meniscus —              The curvature radius of the interface is ∼ rg       0.6 pts
or “neck”, as we shall be referring to it henceforth. Note       Capillary pressure ∆p ∼ γ/rg                        0.6 pts
that the “neck” may extend perpendicularly to the fig-           Answer: 21.5 N                                      0.2 pts
ure plane far away; so, more specifically, what the word
“neck” will refer to is that part of the water-air interface    Note: If the contribution of surface tension is neglected,
for which the closest two grains are the ones under con-        0.1 pts are subtracted.
sideration.
                                                                  Solution 3:
                                                                  The compression force serves to break the surface ten-
                                                                sion bonds between sand grains.
                                                                  Consider the energy E required to push a single layer
                                                                of sand into the layer beneath it. E ∝ F rg , where F is the


IPhO 2022                                 Theoretical problems: solutions. Language: English

force required and rg is the typical height of a layer (i.e.,                       d ∝ gt2         0.2 pts
the typical length scale of a grain).                                               Answer: 1.5     0.1 pts
  On the other hand, E = γ∆A, where γ is the surface
tension of water and ∆A is the total amount by which          Solution 1:
the surface of the water in the layer stretches before all    One way to approach the problem is to notice that con-
the “water bonds” between the sand grains are broken.      stant acceleration in spaceship’s frame means a constant
  Here, ∆A is proportional to the area A of a layer and is force in the Earth’s frame. This follows directly from the
thus a constant between the two cylinders. Hence, E ∝      Lorentz transform for the electromagnetic field, more
                                                           specifically from the fact that when going to a frame
F rg is a constant between the two cylinders, i.e., F ∝ rg−1 .
                                                           moving parallel to the x-axis, the x-directional electric
  Marking scheme:
                                                           field Ex remains unchanged. Hence, on the one hand,
                  E ∝ F rg             0.5 pts             the force Fx = eEx exerted on an accelerating particle of
                  E ∝ γ∆A              0.5 pts             rest mass m0 and carrying a charge e remains constant
                  ∆A ∝ A               0.5 pts             in the lab frame. On the other hand, the acceleration of
                  F ∝ rg−1             0.3 pts             that particle in an inertial frame moving with velocity v,
                  Answer: 21.5 N 0.2 pts                   where v denotes the particle’s velocity at a certain mo-
                                                           ment of time t, is always equal to eEx /m0 , regardless of
Note: If the student only qualitatively explains the mech- the value of t, i.e. constant in time.
anism by which the grains of sand are held together, a
                                                              Those who are not familiar with the Lorenz transform
maximum of 0.5 pts are given.
                                                           for electromagnetic field can derive the above described
  Solution 4:                                              property from the Lorenz transform for momentum and
  First of all, the force F should be proportional to the coordinates. We use again (i) the lab frame, and (ii) an in-
cylinder’s base area A. The force required to destroy a ertial frame moving with velocity v, where v denotes the
cylinder with base area A = nA0 is equal to the force spaceship’s velocity at a certain moment of time which
required to destroy n cylinders each with base area A0 . will be used as the origin, t = t′ = 0; let primes denote
As a result, F ∝ n ∝ A.                                    quantities in the second frame. Assuming a very short
  In addition, F depends on the grain’s length scale rg time period t, we can neglect terms quadratic in time so
and the water’s surface tension γ. Dimensional analysis that in the frame (ii), the momentum, coordinate and the
thus gives                                                 relativistic mass can be expressed as p′ = F ′ t′ , x′ = 0,
                       F ∝
                            Aγ
                                  ∝ rg−1                   m′ = m0 , respectively; applying the Lorenz transform
                             rg                            yields t = γt′ and p = γ(F ′ t′ + m0 v) = tF ′ + γm0 v. On the
for fixed A and γ.                                         other hand, in the frame (i), p = γm0 v + F t; comparing
  Marking scheme:                                          this with the previous result yields F = F ′ .
                                                              It appears that in either case, the spaceship’s speed will
                  F ∝A                 0.6 pts             reach almost c much faster than the travel time. Hence,
                  F = F (A, rg , γ) 0.6 pts                using for convenience the system of units where c = 1,
                  F ∝ Aγ
                       rg              0.6 pts             the travel distance x equals with a very good precision
                  Answer: 21.5 N 0.2 pts                   the travel time t, x = t.
Note: If the student only qualitatively explains the mech-    What is left to do is to relate t to the proper time τ ,
anism by which the grains of sand are held together, a                            dt             m0
maximum of 0.5 pts are given.                                              dτ =      = dt p 2               ;
                                                                                  γ         m0 + m20 g 2 t2

Task C: Interstellar travel (2 pts)                              upon integration we obtain

This is Section 2.5 (Relativity) of the syllabus                    τ = asinh(gt)/g ⇒ x ≈ t = sinh(gτ )/g ≈ exp(gτ )/2g.
   Let T = 50 yrs be the astronauts’ total travel time.          So we conclude that the ratio of the travel distances is
For maximal travel distance, the spaceship accelerates
at constant proper acceleration a = g for proper time                 d2     g                    2
                                                                         =      exp(1.5gτ − gτ ) = exp(gT /8) ≈ 480.
T /4, during which a distance of d is traveled. The space-            d1   1.5g                   3
ship then decelerates at a = −g for proper time T /4 to
come to a rest, during which another distance d is trav-           Note that an exact relationship between x and t could
eled. The spaceship then returns to Earth using the same         have been obtained by expressing the energy of the
procedure.                                                       spaceship as m = m0 + m0 gx, and the momentum as
   Notes: Formula relating acceleration to proper ac-            p = m0 gt. Then the Lorenz invariant (m0 + m0 gx)2 −
                                                                 (m0 gt)2 = m20 yields x(x + 2/g) = t2 = sinh (gτ )/g 2 , hence
                                                                                                             2
celeration is not considered as a basic SR formula and
therefore if the formula is written without motivation,          x = [cosh(gτ ) − 1]/g.
0.2 pts are subtracted.
   Solution 0: (incorrect)
   If we ignore relativity, then d ∝ 21 gt2 ∝ g, which gives
an answer of 1.5.
   Marking scheme:


IPhO 2022                                       Theoretical problems: solutions. Language: English

                Fx is Lorentz invariant        0.4 pts              Palermo 21, 129–175 (1906)] of depicting things in x − it-
                x≈t                            0.4 pts              diagram. The benefit of using this diagram is that the
                dτ = dtγ                       0.2 pts              relativistic invariant x2 − t2 transforms into Euclidean
                γ −1 =pm0 /m                   0.2 pts              squared distance x2 + θ2 with θ = it. This means that
                m = m20 + p2                   0.2 pts              in that diagram, we can use the knowledge of Euclidean
                p = m0 gt                      0.2 pts              geometry. In particular, the Lorentz transform is now
                t = sinh(gτ )/g                0.2 pts              the rotation of the Euclidean x − it-space by an angle
                Answer: 480                    0.2 pts              α = arctan ic v
                                                                                    . Now, consider the trajectory of the space
                                                                    ship; its infinitesimal arc length is icdτ , where dτ is the
Remark: if integration boundaries for distance or proper            differential of the proper time, and the infintesimal rota-
time are wrong by a factor of 0.5, 2, 4, etc., -0.1 pts.            tion angle of its tangent is dα = arctan(dv/ic) = dv/ic =
                                                                    gdτ /ic. Therefore, the curvature radius R = icdτ /dα =
  Solution 2:
                                                                    −c2 /g is constant, i.e. the trajectory is a circle of radius
  Let w be the rapidity of the spaceship, defined as w ≡            R. Now we can easily relate the travel distance x to the
    −1
tanh (β), where β is the spaceship’s velocity. Then β =             arc length icτ :
tanh w, the Lorentz factor γ = cosh w, and its momentum
p = m0 sinh w.                                                                                        icτ     c2        gτ
                                                                     x = R(1 − cos α) = R 1 − cos           =      cosh    −1 .
  As shown by Solution 1, a spaceship experiencing a                                                   R      g          c
constant proper acceleration g experiences a constant
three-force                                                           Marking scheme:

                                                                              R = const in x-ict-diag.              0.5 pts
                   dp             dw    dw     g                              R = −g 2 /c                           0.5 pts
   F = m0 g =         = m0 cosh w    =⇒    =        .                            missing ‘−’                        -0.2 pts
                   dt             dt    dt   cosh w
                                                                                 partial credit for R = icτ
                                                                                                        dα          0.2 pts
Meanwhile, time dilation relates t to the spaceship’s                         x = R(1 − cos α)                      0.5 pts

proper time τ as
                                                                               g cosh c − 1                         0.3 pts
                                                                              c2        gτ

                                                                              Answer: 480                           0.2 pts
           dt                 dw   dw dt
              = γ = cosh w =⇒    =       = g.
           dτ                 dτ   dt dτ                              Solution 4: The problem can be solved by using the ve-
Integrating yields w = gτ . Recalling that dt = γdτ , we get        locity addition formula. Let v = βc be the speed of the
the following as the total distance traveled over a quar-           spaceship in the lab frame, t be the lab time, and τ —
ter of the spaceship’s trip:                                        the proper time. Also, we consider a frame which moves
                                                                    with constant speed v in which the spaceship accelerates
      Z T /4             Z T /4                                     from rest:
 d=            βγ dτ =            tanh w cosh w dτ
       0                  0                                                               β + gdτ           gdτ
                         Z T /4                                               β + dβ =         c
                                                                                                     =β+        (1 − β 2 ).
                                              1                                          1 + βgdτ            c
                    =             sinh gτ dτ = (cosh(gT /4) − 1).                              c
                          0                   g
                                                                    Thus,
The answer is thus                                                                 dβ     gdτ            gτ
                                                                                        =     ⇒ β = tanh( ).
                                                                                 1 − β2    c              c
           g1 cosh(g2 T /4c) − 1   10 cosh(19.72) − 1
           g2 cosh(g1 T /4c) − 1
                                 =
                                   15 cosh(13.15) − 1               From relativistic time dilation formula we obtain
                                   2                                                         dτ                  gτ
                                 ≈ e19.72−13.15 = 480.                             dt = p              = cosh(      )dτ
                                   3                                                        1 − β2                c

  Marking scheme:                                                   so that the travel distance
                                                                          Z         Z T /4
               d
                                                0.5 pts                                                c2
               dt (m0 sinh w) = m0 g
                                                                      d                         gτ                gT
                                                                        = vdt = c          sinh( )dτ =      cosh     −1
               dw       g
               dt = cosh w                      0.1 pts               2               0          c     g          4c
               dt
               dτ = cosh w                      0.4 pts             which leads to the same answer as before.
               dw
               dτ = g                           0.1 pts
               w = gτ                           0.1 pts                         a) β + dβ =
                                                                                              β+ gdτ
                                                                                                                   0.3 pts
                   R T /4
                                                                                                  c
                                                                                                1+ βgdτ
               d
               2 = R0     βγ dτ                 0.3 pts                               dβ
                                                                                                     c
                                                                                b) 1−β 2 = c gdτ
                                                                                                                   0.2 pts
                          tanh w cosh w dτ      0.2 pts
               d     T /4
                 =
               2    0                                                           c) β = tanh( gτ  c )               0.2 pts
               d
                 = 1
                     (cosh(gT   /4) − 1)        0.1 pts
               2   g                                                            d) dt = √ dτ 2                     0.3 pts
               Answer: 480                      0.2 pts                                     1−β
                                                                                e) dt =Rcosh( gτ  c )dτ            0.2 pts
Remark: if integration boundaries for distance or proper                        f) d2 = vdt                        0.2 pts
                                                                                          R T /4
time are wrong by a factor of 0.5, 2, 4, etc., -0.1 pts.                        g) d2 = c 0h sinh(       gτ
                                                                                                                   0.2 pts
                                                                                                       c )dτ i
   Solution 3: The problem can be also solved by using the                      h) 2 = g cosh 4c − 1
                                                                                    d    c2            gT
                                                                                                                   0.2 pts
trick introduced in 1905 by Henri Poincaré [Poincaré,
                                                                                i) Answer: 480                     0.2 pts
M.H. Sur la dynamique de l’ électron. Rend. Circ. Matem.


IPhO 2022                                 Theoretical problems: solutions. Language: English
                                                                            p
  Remark: if integration in f) is done over proper time,          a) ω0 ∝ g/r                                     0.4 pts
no points are given for f). If integration boundaries for            stated without justification                 -0.2 pts
distance or proper time are wrong by a factor of 0.5, 2, 4,          effective mass ∝ r3                          0.2 pts
etc., -0.1 pts.                                                         just the mass of the ball considered      -0.1 pts
                                                                     effective
                                                                           p returning force ∝ r
                                                                                                    2
                                                                                                                  0.1 pts
                                                                     ω0 ∝ g/r                                     0.1 pts
Task D: That sinking feeling (2 pts)                              b) Fd ∝ ηrv                                     0.6 pts
                                                                     no justification                             -0.3 pts
(This is Sections 2.2.5 (Hydrodynamics) and 2.4.1 (Single            Stokes without constant K                    -0.1 pts
oscillator) of the syllabus                                       c) β ∝ 1/r2                                     0.3 pts
                                                                        2
  Solution 1: The oscillation of the half-sunk sphere is          d) ωβ 2 = 1 − ω
                                                                                ω2
                                                                                  2                               0.4 pts
                                                                       0         0
driven by gravity. The non-damped angular frequency                    2
                                                                  e) ωβ 2 ∝ r13                                   0.2 pts
depends on the gravitational acceleration and a charac-                 0
                                                                  f) Answer: 0.271                                0.1 pts
teristic length, which is, for a sphere, its radius r, so
                               p                                 Solution 2: The oscillation of the half-sunk sphere is
                        ω0 ∝       g/r                         driven by the change in buoyancy force, which is pro-
                                                               portional to the change in displaced water volume. Thus,
is the only dimensionally correct possible function.           the restoring force Fr ∝ r2 x, where x is the displacement
  The drag force Fd depends on the sphere’s speed v            of the sphere.
[m/s], its size r [m], and viscosity of the liquid η [Pa·s].     As discussed in Solution 1, the drag force Fd ∝ rv = rẋ.
Dimensional analysis thus gives Fd ∝ ηrv. The damping          The effective mass of the oscillation m ∝ r3 . This leads
factor is thus                                                 to the equation of motion
                            Fd    ηr
                       β=       ∝    .
                           2mv     m                                             k1 r2 ẍ + k2 ẋ + k3 rx = 0,
Since the mass scales with r3 , we have
                                                               where k1 , k2 and k3 are constant. In the case with no
                              1                                viscous drag, k2 = 0, the motion is at frequency
                          β ∝ 2.
                             r                                                              r
                                                                                              k3
                                                                                       ω0 =        .
  Then the relation                                                                           k1 r
                       β2    ω2                                With viscous drag, we can get the frequency ω by sub-
                          =1− 2
                        2
                       ω0    ω0                                stituting trial solution x = eαt and using ω = Imα. This
                                                               leads to                   s
scales as                                                                                        k2
                         β2   1                                                      ω = ω02 − 22 4 ,
                          2 ∝ 3                                                                 4k1 r
                         ω0  r
                                                                                        k2                 k22
  Oscillations only occur if β/ω0 < 1, so solve                       ω 2 = ω02 1 − 2 24 2 = ω02 1 −                .
                                                                                     4k1 r ω0           4k1 k3 r3
                r    p
                   = 3 1 − (0.99)2 = 0.271                       At r = rmin , ω = 0, so
                r0
                                                                                         k22      3
                                                                                               = rmin ,
  Notes:                                                                                4k1 k3
                     √                                         and
 1. To obtain ω0 ∝ 1/ r without dimensional analysis,
                                                                                                  r3
    note that a small displacement y changes the sub-                                ω 2 = ω02 1 − min   ,
    merged volume of the ball by ∆V ∝ r2 y, so the                                                 r03
    change
    p      inpbuoyant pforce F ∝ r2 y, which gives ω0 =        giving rmin
                                                                       r0 = 0.271.
      k/m ∝ r /r = 1/r.
                2 3
                                                                 Marking scheme:
 2. To obtain Fd ∝ ηrv without dimensional analysis,
                                                                     a) effective mass ∝ r3                      0.2 pts
    note that the typical length scale l in the variations
                                                                        just the mass of the ball considered     -0.1 pts
    in the velocity field of the water is proportional to r.
                                                                     b) effective
                                                                                p returning force ∝ r
                                                                                                      2
                                                                                                                 0.1 pts
    Thus, the viscous shear σ ∝ ηv/l ∝ ηv/r. The total
                                                                     c) ω0 ∝ 1/r                                 0.1 pts
    drag force is thus Fd ∼ Aσ ∝ ηrv, where A is ball’s
                                                                     d) Fd ∝ rv                                  0.6 pts
    area of contact with the water.
                                                                        no justification                         -0.3 pts
 3. Alternatively, to obtain Fd ∝ ηrv, make use of the                  Stokes without constant K                -0.1 pts
    Stokes drag relation Fd = 6πηKrv, where K is a di-               e) k1 r2 ẍ + k2 ẋ + k3 rx = 0             0.3 pts
    mensionless constant that takes into account that                f) ω in terms of r and ω0                   0.6 pts
    the ball is not in infinite homogeneous fluid.                      if not expressed in terms of ω0          -0.3 pts
                                                                     g) Answer: 0.271                            0.1 pts
  Marking scheme:
