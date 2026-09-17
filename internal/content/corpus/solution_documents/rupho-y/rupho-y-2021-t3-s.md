---
id: solution-document-rupho-y-2021-t3-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2021/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [rupho-y-2021-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/rupho-y/2021/T3_S.pdf."
---

A1 1.00       Дано p , p , x , x . Найти молярные доли компонент смеси в газообразной фракции (y и y ).
                     A        B       A   B                                                                                                                                                                  A       B




По закону Рауля:
                                                                                                                    PA = p A x A

                                                                                                                    PB = p B x B




По закону Дальтона:
                                                                                                                        yA                      PA
                                                                                                                                    =
                                                                                                                        yB                      PB




Следовательно,
                                                                                                                    yA                      pA x A
                                                                                                                                =
                                                                                                                    yB                      pB x B




 A2 0.50Пусть для жидкости известны молярная теплота парообразования λ и температура кипения жидкости t при атмосферном давлении P . Найдите                                                                                             0


зависимость давления насыщенного пара чистой жидкости от температуры P (T ).

Уравнение Клапейрона-Клаузиуса (в случае идеального газа):
                                                                                                dP                                  λ                               λP
                                                                                                                    =                           =
                                                                                                                                                                                2
                                                                                                dT                          T Δv                                RT




После интегрирования, получим:
                                                                                                                                                    λ       1           1
                                                                                                                                                        (       −           )
                                                                                                    P (T ) = P0 e R                                         t           T




 A3 1.00Выразите p /p при температуре T через температуры кипения чистых жидкостей t и t (при атмосферном давлении), их молярные теплоты
                              A       B                                                                                                                                                             A            B


парообразования λ и λ .   A           B




                                                                                                                                                λ
                                                                                                                                                    A           1           1
                                                                                                                                                        (           −           )
                                                                                                                                                    R       t               T
                                                                                            pA (T ) = P0 e                                                      A



                                                                                                                                                λ
                                                                                                                                                    B           1           1
                                                                                                                                                        (           −           )
                                                                                                                                                    R       t               T
                                                                                            pB (T ) = P0 e                                                      B




                                                                                                                            λ                                       λ
                                                                                pA                                              A
                                                                                                                                    (
                                                                                                                                         1
                                                                                                                                                −
                                                                                                                                                    1
                                                                                                                                                        )−
                                                                                                                                                                        B
                                                                                                                                                                            (
                                                                                                                                                                                1
                                                                                                                                                                                        −
                                                                                                                                                                                                1
                                                                                                                                                                                                    )
                                                                                                                            R           t           T               R           t               T
                                                                                            (T ) = e                                        A                                       B


                                                                                pB




 A4 2.00       Считая λ   A
                              = λB = λ        , найдите температуру кипения двухкомпонентной смеси: T (λ, t , t , x ).                                                                              A        B       B




При температуре кипения смеси
                                                                                        P = p A x A + p B x B = P0




                                                                                                    λ                                                                   λ
                                                                                                        A       1           1                                               B               1       1
                                                                                                            (           −       )                                                   (           −       )
                                                                                                    R           t           T                                               R           t           T
                                                                            P0 = P0 e                               A
                                                                                                                                    x A + P0 e                                              B
                                                                                                                                                                                                            xB
                                                                                    λ                                                                                   λ
                                                                                        A       1               1                                                           B           1           1
                                                                                            (           −           )                                                               (           −       )
                                                                                    R           t               T                                                           R           t           T
                                                                            1 = e                   A
                                                                                                                        (1 − xB ) + e                                                       B
                                                                                                                                                                                                            xB




                                                                                                                                        λ                                                               λ
                                                                                    λ
                                                                                                        −1                          Rt                                                              Rt
                                                                            T =                 ln              (xB e                    B
                                                                                                                                                + (1 − xB )e                                             A
                                                                                                                                                                                                             )
                                                                                    R




 A5 1.50       Считая температуру двухкомпонентной системы T постоянной, изобразите на графиках зависимости P (x ), P (y ) и y (x ).                                                                                     B   B   B   B




По закону Рауля P (x ) линейно.
                              B


В граничных точках x = 0, y = 0, P = p или x
                                  B           B          A       B   = 1, yB = 1, P = pB                            .
При p > p :
      B         A



yB > x B   .
 A6 0.60   Какая x будет достигнута после первой конденсации (N = 1)?
                  B




                                                                  xB (N + 1) = yB (N )

                                                              1 − yB (N )          pA 1 − xB (N )
                                                                              =
                                                                yB (N )            pB           xB (N )




                                                                         xB (1) ≈ 0.02




 A7 1.40   Какая x будет достигнута после того как процедура повторится N = 10 раз, N = 10 ?
                  B
                                                                                                            6




                                                             1 − xB (N )           pA       N   1 − xB (0)
                                                                           = (          )
                                                              rxB (N )             pB             xB (0)




                                                                     xB (10) ≈ 0.91

                                                                               6
                                                                     xB (10 ) ≈ 1.00




 A8 2.00   Найдите, во сколько раз к этому моменту уменьшилось общее количество жидкости?


Рассмотрим уменьшение количества веществ A и B при удалении объема пара Δv:


                                                                              PA                   pA x A
                                                              dA = −Δv              = −Δv
                                                                            RT                      RT

                                                                              PB                   pB x B
                                                              dB = −Δv              = −Δv
                                                                            RT                      RT

                                                                         A = x A nL V

                                                                         B = x B nL V




nL   - молярная плотность жидкости.

Избавляемся от Δv:

                                                                         dA        pA x A
                                                                              =
                                                                         dB        pB x B




Подставляем
                                                                dA = dxA nL V + xA nL dV

                                                                dB = dxB nL V + xB nL dV
.

После упрощения:


                             dV        dxB         2dxB
                                  =            +
                              V         xB         1 − xB




Интегрируем:


                                       xB                   1 − xB
                   ln(V /V0 ) = ln(            ) − 2 ln(                )
                                      xB (0)               1 − xB (0)




                                      V ≈ 0.38V0
