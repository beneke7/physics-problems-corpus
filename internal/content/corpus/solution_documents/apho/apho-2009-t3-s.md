---
id: solution-document-apho-2009-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2009/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2009/T3_S.pdf."
---

Theoretical competition                                                                      Solution: Question 3

26 April 2009                                                                                              Page 1 of 3
-------------------------------------------------------------------------------------------------------------------------

                                           The Leidenfrost Phenomenon
3.1)    As given in the problem

                                    d      ⎛ 1 dP ⎞
                                       v = ⎜      ⎟⋅ z                           …………… (i)
                                    dz     ⎝ η dr ⎠

         Integrating (i) with respect to z , we get

                                   ⎛ 1 dP ⎞ 2
                           v( z) = ⎜       ⎟⋅ z + C                              …………… (ii)                 (0.5 point)
                                   ⎝ 2η dr ⎠


                                      ⎛ 1 dP ⎞ ⎛ b ⎞
                                                                  2
                            ⎛b⎞
3.2)                       v⎜ ⎟ = 0 = ⎜       ⎟⋅⎜ ⎟ + C                          …………… (iii)
                            ⎝2⎠       ⎝ 2η dr ⎠ ⎝ 2 ⎠

                                     b 2 dP
        ∴                  C = −                                                                            (0.5 point)
                                     8η dr

                                                                            dP
         Note that C is not a real constant; its value depends on              which is a function of r .
                                                                            dr

3.3) Let Q be the volume rate of flow of the vapour through the cylindrical surface of 2π rb .


                  δ Q = v ( z ) ⋅ 2π rδ z where from (ii) and (iii):                                        (0.3 point)


                            ⎛ 1 dP ⎞ ⎡ 2 b 2 ⎤
                  v( z)   = ⎜       ⎟⋅ ⎢z − ⎥                           …………… (iv)
                            ⎝ 2η dr ⎠ ⎣    4⎦

                                       b                                    b
                                       2
                                                      ⎛ 2π r dP ⎞ ⎡ 2 b 2 ⎤ 2
        ∴                  Q = 2 ∫ v ( z ) ⋅ 2π rdz = ⎜         ⎟ ∫ ⎢ z − ⎥dz
                                z =0                  ⎝ η dr ⎠ z =0 ⎣    4⎦


                                 π rb3 dP
                           Q = −                                        ……………… (v)                          (0.7 point)
                                  6η dr

Theoretical competition                                                                      Solution: Question 3

26 April 2009                                                                                              Page 2 of 3
-------------------------------------------------------------------------------------------------------------------------
                                                                                                      π r 2K ΔT
3.4) The total rate of heat flow from the area π r of the hot surface to the drop is
                                                              2
                                                                                                                  . We
                                                                                                           b
       assume that this heat goes into vaporizing the drop.

                                       π r 2KΔT
       Hence            ρ QA =                        and using (v) we get
                                            b

                               dP    ⎛ 6η KΔT ⎞
                                  = −⎜       4 ⎟
                                                 ⋅r                       ………………… (vi)                      (0.4 point)
                               dr    ⎝ ρ V Ab ⎠

                                          ⎛ 3η KΔT ⎞ 2
       This gives              P (r ) = − ⎜       4 ⎟
                                                      ⋅r + B                                                (0.4 point)
                                          ⎝ ρ V Ab ⎠

       where B is an arbitrary constant whose value can be found by applying the boundary
       condition P ( R ) = Pa , the atmospheric pressure.


                                        ⎛ 3η KΔT ⎞ 2
       Hence                   B = Pa + ⎜       4 ⎟
                                                    ⋅R                    …………… (vii)                       (0.4 point)
                                        ⎝ ρ V Ab ⎠

                                              ⎛ 3η KΔT ⎞
                                                      4 ⎟ (
       and                     P ( r ) = Pa + ⎜          ⋅ R2 − r 2 )     …………… (viii)                      (0.8 point)
                                              ⎝ ρ V Ab ⎠

3.5) The net force due to pressure is in the upward direction and of magnitude

                                                           3πη KΔTR 4
                         R
                   f = ∫ ⎡⎣ P ( r ) − Pa ⎤⎦ 2π rdr =                             ………(ix)                    (1.0 point)
                        r =0
                                                             2 ρ V Ab 4


                                           2
         The weight of the drop is           π R 3 ρ0 g , where ρ0 is the density of liquid.
                                           3

                  2             3πη KΔTR 4
        ∴           π R3 ρ0 g =
                  3               2 ρ V Ab 4

                                           1
                      ⎛ 9η KRΔT ⎞ 4
                  b = ⎜              ⎟                                    ……………(x)
                      ⎝ 4 ρ 0 ρ V Ag ⎠

Theoretical competition                                                                      Solution: Question 3

26 April 2009                                                                                              Page 3 of 3
-------------------------------------------------------------------------------------------------------------------------
                            3η KΔT          4 ρ0 g
         Note that                      =                               ……………(xi)                           (1.0 point)
                             ρ V Ab 4
                                            3 R

3.6) Use equations (xi) and (viii) to obtain

                                             ⎛ 4 ρ0 g ⎞
                              P ( r ) = Pa + ⎜        ⎟⋅(R − r )
                                                          2   2
                                                                             ……………(xii)
                                             ⎝3 R ⎠

                              d             ⎛ 8 ρ0 g ⎞
                                 P (r ) = − ⎜        ⎟⋅r                     ……………(xiii)                    (0.8 point)
                              dr            ⎝3 R ⎠
         Then use (v) to calculate the total mass-rate of vaporization Q ρ V at r = R :

                                ⎛ 2π b3 R ⎞ ⎛ 8 ρ 0 g ⎞             ⎛ 4πρ V ρ 0 gR ⎞ 3
                  QρV         = ⎜         ⎟⎜          ⎟ RρV       = ⎜              ⎟b
                                ⎝ 12η ⎠ ⎝ 3 R ⎠                     ⎝    9η        ⎠
                                                                   3
                                ⎛ 4πρ V ρ 0 gR ⎞ ⎛ 9η KRΔT ⎞ 4
                              = ⎜              ⎟⎜               ⎟
                                ⎝    9η        ⎠ ⎝ 4 ρ 0 ρ V Ag ⎠
                                                              1
                                ⎛ 4π 4 K3 ρ V ρ0 g ( ΔT )3 ⎞ 4 7                7
                              = ⎜                          ⎟ ⋅ R4          = β R4   …… (xiv)       (1.2 points)
                                ⎜          9η A 3
                                                           ⎟
                                ⎝                          ⎠

3.7) The life-time (τ ) of the drop, is to be found from

                  d ⎛2        ⎞
                                                                   7

                     ⎜ π R ρ0 ⎟ = − QρV                 =   −βR
                          3                                        4
                  dt ⎝ 3      ⎠
                      1
                          d         β
                  R4         R = −
                          dt       2πρ 0
                                       τ
                  0       1
                                           β
                  ∫ R dR = − ∫ 2πρ dt
                  R
                          4

                                       0       0
                                                                                                   (1.0 point)

                                                                       1

                              8πρ0             8⎛     9ηρ A         ⎞
                                       5                    3 3        4  5
                  τ =              R   4
                                           =     ⎜ 3        0
                                                                    ⎟ ⋅ R 4
                                                                                                   (1.0 point)
                               5β                ⎜
                                               5 ⎝ 4K ρ V g ( ΔT ) ⎠
                                                                  3
                                                                    ⎟




                                                   *********************
