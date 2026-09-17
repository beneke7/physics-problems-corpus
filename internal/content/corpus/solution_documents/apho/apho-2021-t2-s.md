---
id: solution-document-apho-2021-t2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2021/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2021-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2021/T2_S.pdf."
---

Theoretical Question 2: Ray tracing and generation of entangled light


Part A. Light propagation in isotropic dielectric media
A.1 0.4 pt
Ans: √µ10 
Solution:
From ~k × E
          ~ = ωB       ~ and ~k × H
               ~ = ωµ0 H                D, one obtains ~k ×(~k × ~
                                  ~ = −ω ~                      E) = −ω 2 µ0 ~
                                                                            D. By using
                   ~ × (B
the given identity A    ~ × C)
                            ~ = B(
                                ~ A~ · C)
                                       ~ − C(
                                           ~ A    ~ one finds ~k × (~k × E)
                                              ~ · B),                    ~ = ~k(~k · E)
                                                                                     ~ − k 2 E.
                                                                                             ~

Since D~ · ~k = 0 and D   ~ = E,~ we find ~k × (~k × E)  ~ = −k 2 E     ~ and the relation
~k × (~k × E)
           ~ = −ω 2 µ0 D
                       ~ reduces to −k 2 E
                                         ~ = −ω 2 µ0 E.
                                                      ~
                                                        ~
Now the phase delocity is determined by d(k·~rdt−ωt) = 0, we find that the phase velocity
~vp = d~
       r
      dt
         = ωk k̂. Clearly, we have ωk = √µ10  . Hence vp = √µ10  .
A.2 0.2 pt
      √
Ans: c µ0 
Solution:
                                     √
From vp = √µ10  = nc , we find n = c µ0 
A.3 0.4 pt
Ans: k̂, vr = vp = √µ10 
Solution:
To find the speed of the ray, we first note that the direction of the energy flow, given by
                    ~=E
the Poynting vector S         ~ is in the same direction of ~k. The electromagnetic energy
                         ~ × H,
                                 ~ ·D
density u = ue + um with ue = 21 E   ~ and um = 1 B ~ · H.
                                                        ~
                                                  2

Now, from ~k × H
               ~ = −ω D,
                      ~ one has D  ~ = − 1 k̂ × H.
                                                ~ Hence ue = − 1 E
                                               vp
                                                                 ~ · k̂ × H
                                                                       2vp
                                                                          ~ =                1
                                                                                            2vp
                                                                                                     ~ × H.
                                                                                                k̂ · E   ~

Similarly, from ~k × E
                     ~ = ω~                    ~ · k̂ × E
                          B, we find um = 2v1p B        ~ = 1 k̂ · E
                                                            2vp
                                                                   ~×~                     ~×~
                                                                     H. Hence u = v1p k̂ · E B.
We find vr = S/u = vp = √µ10  .
Part B. Light propagation in in uniaxial dielectric media
B.1 1.5pt
Ans: n = no , B̂ = ±k̂ × ŷ = ±(− cos θ, 0, sin θ), D̂ = ±ŷ or n = √ 2            no ne
                                                                                                  , B̂ = ±ŷ,
                                                                             no sin2 θ+n2e cos2 θ
D̂ = ±ŷ × k̂ = ±(cos θ, 0, − sin θ). For θ = 0, there is only one permitted value for the
refractive index
Solution:
From ~k × E       ~ and ~k × H
          ~ = ωµ0 H                 ~ one obtains ~k × (~k × E)
                             ~ = −ω D,                       ~ = −ω 2 µ0 D.
                                                                         ~ Writing out

                                                    1
components and using ω = nc k, we find

                                                             n2
                               − cos2 θEx + cos θ sin θEz = − 2o Ex ,
                                                             n
                                                             n2
                                   − cos2 θEy − sin2 θEy = − 2o Ey ,
                                                             n
                                                             n2
                               − sin2 θEz + cos θ sin θEx = − 2e Ez .
                                                             n
After a bit rearrangement, we obtain
                                                                 n2
                                                                      
                                                              1 − 2o       Ey = 0
                                                                 n
                                2           
                                 no        2
                                     − cos θ Ex + cos θ sin θEz = 0
                                 n2
                                                2        
                                                no      2
                               cos θ sin θEx +     − sin θ Ez = 0.
                                                n2
The vanishing of the determinant yields
                                        n2e
                          2
                     n2o
                                                                
                            no      2           2        2     2
                 1− 2      ( 2 − cos θ)( 2 − sin θ) − sin θ cos θ = 0.                                    (1)
                     n      n           n
Clearly, for a general θ, we have two solutions for n:
(1) n = no
                           ~ is parallel to the y axis. From ~k × E
In this case, Ex = Ez = 0. E                                           ~ and ~k × (µ0 ~
                                                                  ~ = ωB              B) =
    ~ we obtain the directions of B
−ω D,                               ~ and D  ~ as B̂ = ±k̂ × ŷ = ±(− cos θ, 0, sin θ) and

D̂ = −k̂ × B̂ = ±(0, 1, 0) = ±ŷ.
       2              2
(2) ( nno2 − cos2 θ)( nne2 − sin2 θ) − sin2 θ cos2 θ = 0.
After rearrangement, we find n = √ 2              no ne
                                                                 .   Clearly, at θ = 0, n = no , there is only
                                            no sin2 θ+n2e cos2 θ
one refractive index. This is the direction of the optic axis.
In this case, Ey = 0. Hence E ~ lies in the xz plane. Hence the relation ~k × E
                                                                              ~ = ωB
                                                                                   ~ implies

B̂ = ±ŷ. The relation ~k × (µ0 B)
                                ~ = −ω D
                                       ~ implies D̂ = ±ŷ × k̂.

B.2 0.8 pt
Ans: (1) when n = no , Ê = ±ŷ and this is an ordinary ray. tan α = 0.
(2) when n = √ 2       no ne
                                       , Ê = ± √ 4 2 1 4 2 (−n2e cos θ, 0, n2o sin θ) and this is an
                 no sin2 θ+n2e cos2 θ              ne cos θ+no sin θ
                                 (n2o −n2e ) tan θ
extraordinary ray. tan α = n2 +n2 tan2 θ .
                                   e     o

Solution:
                      ~ and D
(1) For n = no , both E     ~ are parallel to the y axis. This is an ordinary ray with

tan α = 0.

                                                      2
(2) For n = √ 2     no ne
                                   , n 6= no , Ey = 0. By substituting n back into the equations of
              no sin2 θ+n2e cos2 θ
                                2
Ex and Ez , we find that nno2 sin θEx + cos θEz = 0. Hence the electric field lies in xz plane
                                e

with Ê = ± √ 4          1                                         ~ points in ∓y direction.).
                                      (−n2e cos θ, 0, n2o sin θ) ( B                                     Therefore,
                 ne cos2 θ+n4o sin2 θ
~ is not perpendicular to ~k and lies in the xz plan in together with D
E                                                                     ~ and ~k. This is the

extraordinary ray.
Since ~k × H
           ~ = −ω ~D, ~                                                              ~ = ŷ,
                      D is perpendicular to k̂. Hence D̂ = ±(− cos θ, 0, sin θ). Let B
                            ~ and D
the relative orientation of E     ~ for a given θ are shown in the following figure for the

case when ne < no .


                                          z
                                                           !
                                                           𝑘
                                               𝜃                            $
                                                                         𝐷 ⊥𝑘


                                 B
                                          X                     x
                                                   𝛼
                                                            𝐷
                                                   𝐸

                                                  ~ and ~
Let the angle relative to x axis be θ1 and θ2 for E     D. We have tan θ2 = − tan θ and
             2                                                                             2   2
                                                                            o −ne ) tan θ
tan θ1 = − nno2 tan θ. Hence tan α = tan(θ2 − θ1 ) = 1+tan
                                                      tan θ2 −tan θ1
                                                             θ1 tan θ2
                                                                       = (n
                                                                         n2 +n2 tan2 θ
                                                                                          . The same
             e                                                                            e    o

result remains when ne > no except that tan α < 0, indicating that the relative orientation
   ~ and D
of E      ~ is reversed.

B.3 0.6 pt
              ~ = ±k̂ × ẑ/ sin θ and this is an ordinary ray.
Ans: n = no , E
                                                            2      2       2   2    2
when n = √ 2        no ne
                    2     2  2
                                , Ê = ± √ 4 2 1 4 2 −ne cos θk̂+(nosinsinθ θ−ne cos θ)ẑ           and this is an
              no sin θ+ne cos θ           ne cos θ+no sin θ
extraordinary ray.
Solution: The problem has an axial symmetry so that in the plane formed by the z
axis and k̂, one can write ~k = kz ẑ + k⊥ k̂⊥ and E
                                                   ~ = Ez ẑ + E⊥ k̂⊥ , where k̂⊥ is perpen-

dicular to ẑ. Clearly, we kz = k cos θ, k⊥ = k sin θ, Ez = E cos θ, and E⊥ = E sin θ.
Writing out the components for the equation: ~k × (~k × E) ~ = −ω 2 µ0 D,~ we get ex-

actly the same equations except that Ex is replaced by E⊥ .                            Hence all of the solu-
tions are the same except x̂ is replaced by k̂⊥ . Since k̂⊥ sin θ = k̂ − cos θẑ, we obtain
that when n = √ 2           no ne
                                           ,   Ê = ± √ 4      1
                                                                            [−n2e cos θ (k̂−cos
                                                                                            sin θ
                                                                                                 θẑ)
                                                                                                      + n2o sin θẑ]   =
                      no sin2 θ+n2e cos2 θ             ne cos2 θ+n4o sin2 θ


                                                       3
                           −n2e cos θk̂+(n2o sin2 θ−n2e cos2 θ)ẑ
±√ 4       1
                                           sin θ
                                                                  .
    ne cos2 θ+n4o sin2 θ
B.4 0.8 pt
Ans: (1) n = no , tan αr = 0, vr = nco , Ŝ = (sin θ, 0, cos θ)
                                                              q 4 2 4 2
                                   (n2o −n2e ) tan θ
(2) n = √
          2
             no ne
             2     2  2
                        , tan αr = n2 +n2 tan2 θ , vr = no ne nne2 cos
                                                           c            θ+no sin θ
                                                                   cos2 θ+n2 sin2 θ
                                                                                    .
           no sin θ+ne cos θ      e  o                                           e            o

Ŝ = √ 4 2 4 2 (no sin θ, 0, ne cos θ)
             1             2  2
      ne cos θ+no sin θ
        q
(3) ns = (Ŝ · x̂)2 n2e + (Ŝ · ẑ)2 n2o
Solution:
                                                                  ~=E
The direction of the energy flow is given by the Poynting vector, S ~×~
                                                                      H. Let the energy
density of EM wave be u and the ray velocity be vr . Then vr = Su . Here u = ue + um with
       ~ ·D
ue = 1 E   ~ and um = 1 B
                        ~ · H.
                            ~ There are two cases:
      2                            2
            ~ = (0, E, 0), D
(i)n = no , E                   ~ ~k × E
                           ~ = E,             ~ ~k × H
                                       ~ = ωµ0 H,     ~ = −ω D.
                                                             ~
    ~ and H
k̂, E        ~ are mutually perpendicular to each other. Hence S~ is parallel to k̂, i.e.,

Ŝ = (sin θ, 0, cos θ) and tan αr = 0.
Now from ~k × H  ~ = −ω D,~ one has D             ~ Hence ue = − 1 E
                                     ~ = − 1 k̂ × H.
                                                               vp
                                                                   ~ · k̂ × H
                                                                            ~ =
                                                                                        2vp
                                                                                                   1
                                                                                                  2vp
                                                                                                           ~ × H.
                                                                                                      k̂ · E   ~
                             ~ · k̂ × E
Similarly, we find um = 2v1p H        ~ = 1 k̂ · E
                                                 ~ × H.
                                                     ~ Hence u = 1 k̂ · E
                                                                        ~ × H.
                                                                            ~ Since Ŝ = k̂,
                                          2vp                    vp

we find u = vSp . Hence vr = Su = vp = ωk = nco .
(ii) n = √ 2         no ne                                     ~ = (0, B, 0) (negative y direction works
                                    . In this case, we can tak B
               no sin2 θ+n2e cos2 θ
          ~ E
as well). D, ~ and k̂ are in the xz plane and D~ is perpendicular to k̂. Therefore, the angle

between S ~ = 1E~ ×B ~ and k̂ is equal to the angle between ~D and ~E, i.e., αr = α. This is
                  µ0

shown in the following figure when ne < no (for ne > no , both α and αr are negative, the
                        ~ and D
relative orientation of E     ~ is reversed and ordering of Ŝ and k̂ are switched).



                                            z
                                                                    𝑘!
                                                             𝛼!           S!   𝐸 ⊥ 𝑆%
                                                 𝜃                                  (
                                                                               𝐷⊥𝑘

                                             X                            x
                                            B
                                                        𝛼       𝐷
                                                          𝐸



                                                                      4
                                                                                             2   2
                                                                o −ne ) tan θ
   Therefore, from problem (d) (ii), we get tan αr = tan α = (n
                                                             n2e +n2o tan2 θ
                                                                              . Now, because
           ~ ×H
              ~ = 1 |E
                     ~ × H|                            v
                         ~ cos α, we obtain vr = S = p . Hence the phase speed vp and
u = 1 k̂ · E
       vp                        vp                                    u        cos α
                                                                                                            2    2   2   2
the ray speed are related by vp = vr cos α. From tan α, one finds cos α = √ne 4cos 2θ+no 4sin 2θ .
                                                                            ne cos θ+no sin θ
                          q 4 2 4 2
              c        c   ne cos θ+no sin θ
Hence vr = n cos α = no ne n2 cos2 θ+n2 sin2 θ .
                                             e        o
                                                                                         2   2
Clearly, Ŝ = (sin(θ + α), cos(θ + α)).                        Since sin α = √(no4−ne2) sin θ4cos θ2            and cos α =
                                                                                        ne cos θ+no sin θ
   2        2      2   2
√ne c cos θ+no sin 2θ , we find Ŝ = √             1
                                                                  (n2o sin θ, 0, n2e cos θ).
  n4e c cos2 θ+n4o sin θ                 n4e c cos2 θ+n4o sin2 θ
                 2                 2 θ+n2 sin2 θ         2
                                2                                θ)2 n2e +(n2e cos θ)n2o
From n2s = vcr = n2o n2e nne4 cos         o
                                  cos2 θ+n4 sin2 θ
                                                     = (no nsin4 cos2 θ+n4 sin2 θ        , we find ns = (Ŝ · x̂)2 n2e + (Ŝ ·
                                         e        o                e       o

ẑ)2 n2o .
B.5 1.1 pt
Ans: Ā = P1 (n2 sin2 θ1 − P1 ), B̄ = −2P3 (n2 sin2 θ1 − P1 ), C̄ = P2 n2 sin2 θ1 − P32 .
φ = 0, tan θ2 =                 √nne sin θ1 2 .
                  no −n sin θ1
                           no     2    2

φ = π/2, tan θ2 = √nn2o sin2 θ1 2 .
                 ne ne −n sin θ1
Solution:
Let the distance along z axis between A and B be d and the point of the interface that
the ray passes be the origin O. The coordinates of B and A points can be expressed as
                                                                          p
(h2 , 0, z) and (h1 , 0, d − z). The distances are then given by AO ≡ d1 = h21 + (d − z)2 and
               p
OB ≡ d2 = h22 + z 2 . The propagation time from A to B is determined by the ray speed
vr as (d1 ns1 + d2 ns2 )/c, where nsi are ray indices for medium i. According to the Fermat’s
principle, we need to minimize the optical path length defined by ∆ ≡ d1 ns1 + d2 ns2 . Ac-
                                                          −
                                                          −→                   −
                                                                               −→
                                         OB
cording to problem (e), we have n2s2 = ( OB · x̂2 )2 n2e + ( OB
                                                             OB
                                                                · ẑ2 )2 n2o . For an isotropic medium,
the ray index is simply the refractive index, i.e., ns1 = n. Using the following relations
                           −−→
                           OB                         h2        z
                               · x̂2 = cos(φ − θ2 ) =    cos φ + sin φ,
                           OB                         d2        d2
                           −−→
                           OB              π                            z         h2
                               · ẑ2 = cos( + φ − θ2 ) = sin(θ2 − φ) =    cos φ −    sin φ,
                           OB              2                           d2         d2

we find
                     q                p
                ∆ = n h21 + (d − z)2 + (h2 cos φ + z sin φ)2 n2e + (−h2 sin φ + z cos φ)2 n2o .

The minimum occurs when d∆
                        dz
                           = 0. We obtain

                       z−d    (h2 sin φ cos φ(n2e − n2o ) + z(n2e sin2 φ + n2o cos2 φ)
             np 2            +p                                                        = 0.
               h1 + (d − z)2    (h2 cos φ + z sin φ)2 n2e + (−h2 sin φ + z cos φ)2 n2o

                                                               5
Recognizing √ 2d−z            = sin θ1 , moving the second term to the left and taking square of
                 h1 +(d−z)2
the equation, we obtain
                                                  (P3 − P1 tan θ2 )2
                              n2 sin2 θ1 =                                ,
                                             P1 tan2 θ2 − 2P3 tan θ2 + P2
where P1 = n2o cos2 φ + n2e sin2 φ, P2 = n2o sin2 φ + n2e cos2 φ, and P3 = (n2o − n2e ) sin φ cos φ.
By expanding the above equation out, we find

      P1 (n2 sin2 θ1 − P1 ) tan2 θ2 − 2P3 (n2 sin2 θ1 − P1 ) tan θ1 + P2 n2 sin2 θ1 − P32 = 0.

Hence Ā = P1 (n2 sin2 θ1 − P1 ), B̄ = −2P3 (n2 sin2 θ1 − P1 ), and C̄ = P2 n2 sin2 θ1 − P32 .
For φ = 0, we have P3 = 0, P1 = n2o , and P2 = n2e . We find n2o (n2 sin2 θ1 − n2o ) tan2 θ2 +
n2e n2 sin2 θ1 = 0. Hence tan θ2 =         √nne sin θ1 2 .
                                      no     2    2
                                             no −n sin θ1
For φ     =    π/2, we have P3               =    0, P1      =   n2e , and P2         =       n2o .   We find
n2e (n2 sin2 θ1 − n2e ) tan2 θ2 + n2o n2 sin2 θ1 = 0. Hence tan θ2 =         √nno sin θ1 2 .
                                                                        ne     2    2
                                                                               ne −n sin θ1



Part C. Entanglement of light
C.1 0.8 pt
Ans:(1) ω = ω1 ± ω2 , ~k = ~k1 ± ~k2
(2) ~ω = ~ω1 ± ~ω2 , ~~k = ~~k1 ± ~~k2 represents the energy conservation and momentum
conservation of photons.
 (3) Splitting of photon: Energy conservation ω = ω1 + ω2 , momentum conservation: ~k =
~k1 + ~k2 .

Solution:
For a light wave with frequency ω and ~k, the corresponding polarization density and the
electric field are in the form of A ~ cos(ωt − ~k · ~r), which can be rewritten as A~ (ei(ωt−~k·~r) +
                                                                                    2
 −i(ωt−~k·~
          r)                                                         NL
                                                                           P P (2)
e            ). By substituting the above form into the equation Pi = j k χijk Ej Ek and
equating the relevant exponents, we find all possible relations are

                                       ω = ω1 + ω2 , ~k = ~k1 + ~k2 .
                                    or ω = ω1 − ω2 , ~k = ~k1 − ~k2 ,

where we have made use of the fact that the frequency is positive. The meaning for the these
relations is clear if one recall that the energy and momentum of a photon is given by ~ω and
~~k. The relation of ~ω = ~ω1 + ~ω2 , ~~k = ~~k1 + ~~k2 represents the energy and momentum

                                                     6
 conservations when a photon with (ω, ~k) is annihilated and split into two photons with (ω1 ,
~k1 ) and (ω2 , ~k2 ), while the relation of ~ω = ~ω1 − ~ω2 , ~~k = ~~k1 − ~~k2 represents the energy

and momentum conservations when a photon with (ω1 , ~k1 ) is annihilated and split into two
photons with (ω, ~k) and (ω2 , ~k2 ).
C.2 0.8 pt
Ans: o → o + o, e → e + e
Solution:
                                                                                              nj (ω1 )ω1
For the collinear case, the phase matching conditions become ω = ω1 +ω2 , ni (ω)ω
                                                                              c
                                                                                  =                c
                                                                                                         +
nk (ω2 )ω2
     c
           , where i, j, and k are indices of either o or e. Assuming that ω1 ≥ ω2 , one can solve
ω1 as ω1 = ω − ω2 . We obtain

                                                   ω2
                             ni (ω) − nj (ω1 ) =      [nk (ω2 ) − nj (ω1 )] .
                                                   ω
                                                                                                      (2)

Clearly, because ω > ω1 ≥ ω2 , if i = j = k, ni (ω) − nj (ω1 ) > 0 and nk (ω2 ) − nj (ω1 ) ≤ 0, the
above equation cannot be satisfied. For other cases, because there is no relation between no
and ne , the phase matching conditions can be satisfied. Hence only o → o + o and e → e + e
are not possible.
C.3 1.5 pt
                                                                                                 2
Ans: (1) M = Ko [1−Ne 2K
                      (Ωe ,θ) cot θ]+Ke
                         e Ko
                                                                                        Ne
                                        , E = −Ne /2M and F = −(Ω − Ωe )( u1o − u1e ) + 4M
(2) the angle between the axis of the cone and z 0 is N/Ko = − Ko [1−Ne (Ω2Ke Ne
                                                                            e ,θ) cot θ]+Ke
                              √
                                L/M                                 2
(3) the angle of cone is about Ko = − (Ω−Ω   e)
                                          M Ko
                                                ( u1o − u1e ) + 4MN2eKo .
Solution:
To satisfy the phase matching condition, we expand the angular frequencies ω1 and ω2 into
ω1 = Ωe + ν and ω2 = Ωo + ν 0 . Clearly, because Ωe + Ωo = Ωp , to satisfy ω1 + ω2 = ω,
ν 0 = −ν. Similarly, the conditions for the wavevectors, ~k = ~k1 + ~k2 , can be written as
kz = k = Kp = k1z + k2z and ~k2⊥ = −~k1⊥ ≡ q~⊥ . For the o light ray, we have k2⊥ 2     2
                                                                                     + k2z = k22
                                                              k2
with k2 = no (ωc2 )ω2 . One finds that k2z = k22 − k2⊥
                                            p
                                                    2
                                                       = k2 − 2k2⊥2 . Expanding the dependence
of ω2 in k2 to ν, we obtain

                           no (ω2 )ω2   no (Ωo )Ωo dk2                   ν
                    k2 =              =           +     (ω2 − Ωo ) = Ko − ,
                                c            c      dω2                  uo

where uo is the group velocity for the ordinary ray. Hence to the second order of corrections,


                                                    7
we get
                                                                    ν   q2
                                               k2z = Ko −             − ⊥ .
                                                                    uo 2Ko
                                         2
Similarly, for the e light ray, we have k1⊥    2
                                            + k1z = k12 with k1 = ne (ω1c,θp )ω1 . One finds that
      p
                2           k2
k1z = k12 − k1⊥    = k1 − 2k1⊥1 . The expansion of k1 is different from that for k2 due to its
angle dependence. Let the spherical angles for ~k1 be θ1 and φ1 . We have
          ne (ω1 , θ1 )ω1   ne (Ωe , θ)Ωe dk1 (Ωe , θ)              Ωe dne (Ωe , θ)
  k1 =                    =              +             (ω1 − Ωe ) +                 (θ1 − θ) + · · ·
                c                c           dΩe                    c      dθ

Here ne (Ωec,θ)Ωe = Ke , dk1dΩ
                            (Ωe ,θ)
                              e
                                    is 1/ue with ue being the group velocity for the extraordinary
ray and is given by
                                 dk1 (Ωe , θ)   ne (Ωe , θ) Ωe dne (Ωe , θ)
                                              =            +                .
                                    dΩe             c        c    dΩe
               dne (Ωe ,θ)      no ne (n2e −n2o ) sin θ cos θ
Because             dθ
                           =    (n2o sin2 θ+n2e cos2 θ)3/2
                                                                = ne (Ωe , θ)Ne (Ωe , θ), we find Ne (Ωe , θ) =
   2    2
(ne −no ) sin θ cos θ
n2o sin2 θ+n2e cos2 θ
                      . Note   that for ne < no , Ne (Ωe , θ) < 0. To find δθ = θ1 − θ, we note
that for any ~kα , one has (cf. Fig. 2(a))

                        k̂α · OA
                              d = cos θα = cos θ cos ψα + sin θ sin ψα cos φα .
                                                                             p
Since sin ψ1 = |~k⊥,1 |/|~k1 | = q⊥ /k1  1 and cos ψ1 =                      1 − sin2 ψ1 = 1 − 1/2 sin2 ψ1 + · · · , to
the second order, we can replace k1 by Ke and obtain
                                           2
                                                                       
                                       1 q ⊥                   q ⊥
          k̂1 · OA
                d = cos θ1 = cos θ 1 −       + · · · + sin θ       + · · · cos φ1 .
                                       2 Ke2                   Ke

On the other hand, cos θ1 = cos θ + d cos
                                       dθ
                                          θ
                                            (θ1 −θ)+· · · = cos θ −sin θ(θ1 −θ)+· · · . Comparing
this equation to the equaton for k̂1 · OA,
                                       d we obtain
                                   2                               2
                                1 q⊥          q⊥                1 q⊥          q x0
                   θ1 − θ =         2
                                      cot θ −    cos φ1 · · · =     2
                                                                      cot θ +      + ···
                                2 Ke          Ke                2 Ke          Ke
Putting all together, we find
                          1                               q2
           k1z = Ke +        (Ω − Ωe ) + Ne (Ωe , θ)qx0 + ⊥ [Ne (Ωe , θ) cot θ − 1] + · · · .
                          ue                             2Ke
The above equation when combined with the equation of k1z and the relation Kp = k1z +k2z ,
we find
                                                                                                         
                  1  1                     2                            Ko [Ne (Ωe , θ) cot θ − 1] − Ke
        (Ω − Ωe )( − ) + Ne (Ωe , θ)qx0 + q⊥                                                                  = 0.
                  ue uo                                                             2Ke Ko

                                                                8
Because ne < no , Ne (Ωe , θ) < 0. The above equation can be rewritten in the form
                                 2
                                                                    N2
                    
                              Ne                          1   1
                 M q x0 −           + M qy20 = −(Ω − Ωe )( − ) + e .
                             2D                           uo ue     4M
          Ko [1−Ne (Ωe ,θ) cot θ]+Ke
Here D =           2Ke Ko
                                         > 0.     Hence E = −Ne /2M > 0 (Ne < 0) and
                                 Ne2
L = −(Ω − Ωe )( uo − u1e ) + 4M
                1
                                     .   Clearly, the cone axis formed by ~k2 is characterized by
q~⊥ . We find that the angle between the axis of the cone and z 0 is tan−1 (N/k1z ), which
                                      2Ke Ne
is about N/k1z ≈ N/Ko = − Ko [1−Ne (Ω    e ,θ) cot θ]+Ke
                                                         . The angle of the cone is given by
     √       √
       L/M     L/M                                 2
sin−1 k2 ≈ Ko = − (Ω−Ω  e)
                     M Ko
                           ( u1o − u1e ) + 4MN2eKo .
C.4 0.8pt
Ans: P (α, β) = 12 sin2 (α + β), P (α, β⊥ ) = 21 cos2 (α + β), P (α⊥ , β) = 12 cos2 (α + β),
P (α⊥ , β⊥ ) = 21 sin2 (α + β)
Solution:
For a-photon, let the electric field along the polarizer and perpendicular to the polarization
represented by |αx i and |αy i. Here αx and αx are essentially the electric field amplitudes in
appropriate units. The electric fields (the states) along x̂0 and ŷ 0 can be written as

                                   |x̂0a i = cos α|αx i − sin α|αy i,

                                    |ŷa0 i = sin α|αx i + cos α|αy i.

Similarly, for b-photon, we have

                                    |x̂0b i = cos β|βx i − sin β|βy i,

                                    |ŷb0 i = sin β|βx i + cos β|βy i.

Hence we obtain

                   |x̂0a i|ŷb0 i = (cos α|αx i − sin α|αy i)(sin β|βx i + cos β|βy i),
                   |ŷa0 i|x̂0b i = (sin α|αx i + cos α|αy i)(cos β|βx i − sin β|βy i).

The state of the entangled photon pair can be written as
              1
             √ (|x̂0a i|ŷb0 i + |ŷa0 i|x̂0b i)
               2
              1
           = √ [(cos α sin β + sin α cos β)(|αx i|βx i − |αy i|βy i)
               2
           + (cos α cos β − sin α sin β)(|αx i|βy i − |αy i|βx i)]
              1
           = √ [sin(α + β)(|αx i|βx i − |αy i|βy i) + cos(α + β)(|αx i|βy i − |αy i|βx i)]
               2

                                                    9
From the above equation, we obtain

                                                   1 2
                                      P (α, β) =     sin (α + β),
                                                   2
                                                       1
                                      P (α⊥ , β⊥ ) = sin2 (α + β),
                                                       2
                                                     1
                                      P (α, β⊥ ) = cos2 (α + β),
                                                     2
                                                     1
                                      P (α⊥ , β) = cos2 (α + β).
                                                     2

C.5 0.5pt
Ans: S = | cos 2(α − β) − cos 2(α − β 0 )| + | cos 2(α0 − β) + cos 2(α0 − β 0 )|
     √
S = 2 2. S > 2 indicates that it is not consistent with classical theories.
Solution:
One first realizes that E(α, β) = PP (α,β)+P (α⊥ ,β⊥ )−P (α,β⊥ )−P (α⊥ ,β)
                                     (α,β)+P (α⊥ ,β⊥ )+P (α,β⊥ )+P (α⊥ ,β)
                                                                           . Using expressions for P , we
find

                     E(α, β) = sin2 (α + β) − cos2 (α + β)
                 = (sin α cos β + cos α sin β)2 − (cos α cos β − sin α sin β)2
                 = −(cos2 α − sin2 α)(cos2 β − sin2 β) + 4 sin α sin β cos α cos β

                 = sin(2α) sin(2β) − cos(2α) cos(2β) = − cos 2(α − β).

Hence S = | cos 2(α − β) − cos 2(α − β 0 )| + | cos 2(α0 − β) + cos 2(α0 − β 0 )|. For α = π4 , α0 = 0,
                                                                     √
β = − π8 , β 0 = π8 , we find S = | − √12 − √12 | + | √12 + √12 | = 2 2 > 2. Hence classical theories
do not apply.




                                                   10
