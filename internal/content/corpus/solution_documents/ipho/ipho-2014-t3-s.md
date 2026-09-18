---
id: solution-document-ipho-2014-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2014/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2014-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2014/T3_S.pdf."
---

Theoretical competition. Tuesday, 15 July 2014                                        1/3
                        Problem 3. Simplest model of gas discharge
                                                 Solution
                                 Part А. Non-self-sustained gas discharge
A1.Let us derive an equation describing the change of the electron number density with time. It is
determined by the two processes; the generation of ion pairs by external ionizer and the recombination of
electrons with ions. At ionization process electrons and ions are generated in pairs, and at recombination
processthey disappear in pairs as well.Thus, their concentrations are alwaysequal at any given time, i.e.
                        𝑛 𝑡 = 𝑛𝑒 𝑡 = 𝑛𝑖 (𝑡)                                                      (A1.1).
       Then the equation describing the numberdensityevolution of electrons and ions in time can be written
as
                        𝑑𝑛 (𝑡)
                               = 𝑍𝑒𝑥𝑡 − 𝑟𝑛(𝑡)2                                                   (A1.2).
                         𝑑𝑡
       It is easy to show that at𝑡 → 0 the function tanh 𝑏𝑡 → 0, therefore, by virtue of the initial condition
𝑛 0 = 0,one finds
                        𝑛0 = 0                                                                   (A1.3).
       Substituting 𝑛𝑒 𝑡 = 𝑎 tanh 𝑏𝑡 in (A1.2) and separating it in the independent functions (hyperbolic,
or 1 and𝑒 𝑥 ), one gets
                                𝑍𝑒𝑥𝑡
                      𝑎=                                                                         (A1.4),
                                  𝑟
                       𝑏 = 𝑟𝑍𝑒𝑥𝑡                                                              (A1.5).
A2.According to equation (A1.4) the number density of electronsat steady-state is expressed in terms of the
external ionizer activity as
                                   𝑍𝑒𝑥𝑡 1
                      𝑛𝑒1 =                                                                      (A2.1),
                                       𝑟
                                   𝑍𝑒𝑥𝑡 2
                      𝑛𝑒2 =                                                                      (A2.2),
                                       𝑟
                                  𝑍𝑒𝑥𝑡 1 +𝑍𝑒𝑥𝑡 2
                      𝑛𝑒 =                                                                       (A2.3).
                                           𝑟
       Thus,the following analogue of the Pythagorean theorem is obtained as
                                2     2
                       𝑛𝑒 = 𝑛𝑒1    + 𝑛𝑒2  = 20.0 ∙ 1010 cm−3 .                                    (A2.4)
A3.In the steady state, the balance equations of electrons and ions in the tube volume take the form
                                             𝐼
                       𝑍𝑒𝑥𝑡 𝑆𝐿 = 𝑟𝑛𝑒 𝑛𝑖 𝑆𝐿 + 𝑒                                                    (A3.1),
                                                       𝑒
                                                       𝐼𝑖
                      𝑍𝑒𝑥𝑡 𝑆𝐿 = 𝑟𝑛𝑒 𝑛𝑖 𝑆𝐿 + 𝑒                                                     (A3.2).
       It follows from equations (A3.1) and (A3.2) that the ion and electron currents are equal, i.e.
                      𝐼𝑒 = 𝐼𝑖                                                                     (A3.3).
       At the same time the total current in each tube section is the sum of the electron and ion currents
                      𝐼 = 𝐼𝑒 + 𝐼𝑖                                                                 (A3.4).
       By definition ofthe current density the following relations hold
                            𝐼
                      𝐼𝑒 = 2 = 𝑒𝑛𝑒 𝑣𝑆 = 𝑒𝛽𝑛𝑒 𝐸𝑆                                                   (A3.5),
                            𝐼
                      𝐼𝑖 = 2 = 𝑒𝑛𝑖 𝑣𝑆 = 𝑒𝛽𝑛𝑖 𝐸𝑆                                           (A3.6).
        Substituting (A3.5) and (A3.6) into (A3.1) and (A3.2), the following quadratic equation for the
current is derived
                                                   𝐼   2      𝐼
                      𝑍𝑒𝑥𝑡 𝑆𝐿 = 𝑟𝑆𝐿 2𝑒𝛽𝐸𝑆                   + 2𝑒                                 (A3.7).
       The electric field strength in the gas is equal to
                            𝑈
                       𝐸=𝐿                                                                       (A3.8).
and solution to the quadratic equation (A3.7) takes the form
                           𝑒𝛽 2 𝑈 2 𝑆                       4𝑟𝑍𝑒𝑥𝑡 𝐿4
                      𝐼=                   −1 ± 1 +                                              (A3.9).
                                𝑟𝐿 3                          𝛽 2𝑈2


                      Theoretical competition. Tuesday, 15 July 2014                                       2/3
       It is obvious that only positive root does make sense, i.e.
                           𝑒𝛽 2 𝑈 2 𝑆                   4𝑟𝑍𝑒𝑥𝑡 𝐿4
                      𝐼=                        1+                  −1                           (A3.10).
                             𝑟𝐿 3                        𝛽 2𝑈2
A4.At low voltages (A3.10) simplifies and gives the following expression
                                        𝑍𝑒𝑥𝑡 𝑆
                      𝐼 = 2𝑈𝑒𝛽                      .                                            (A4.1)
                                            𝑟   𝐿
which is actually the Ohm law.
       Using the well-known relation
                           𝑈
                       𝑅=𝐼                                                                       (A4.2)
together with
                             𝐿
                       𝑅 = 𝜌𝑆                                                                    (A4.3),
one gets
                             1          𝑟
                      𝜌 = 2𝑒𝛽                                                                    (A4.4).
                                    𝑍𝑒𝑥𝑡

                                    Part B. Self-sustained gas discharge
B1.Consider a gas layer located between 𝑥and𝑥 + 𝑑𝑥.The rate of change in the electron number inside the
layer due to the electric current is givenfor a small time interval 𝑑𝑡 by
                                 𝐼 𝑥 +𝑑𝑥 −𝐼 (𝑥)                     1 𝑑𝐼 𝑥
                       𝑑𝑁𝑒𝐼 = 𝑒             𝑒
                                               𝑑𝑡 = 𝑒 𝑑𝑥 𝑒
                                                             𝑑𝑥𝑑𝑡.                                (B1.1).
                                        𝑒
       This change is due to the effect of the external ionization and the electron avalanche formation.
       The external ionizer creates the following number of electrons in the volume𝑆𝑑𝑥
                       𝑑𝑁𝑒𝑒𝑥𝑡 = 𝑍𝑒𝑥𝑡 𝑆𝑑𝑥𝑑𝑡                                                        (B1.2).
whereas the electron avalanche produces the number of electrons found as
                                                            𝐼 (𝑥)
                       𝑑𝑁𝑒𝑎 = 𝛼𝑁𝑒 𝑑𝑙 = 𝑛𝑒 𝑆𝑑𝑥𝑣𝑑𝑡 = 𝛼 𝑒 𝑒 𝑑𝑥𝑑𝑡                                     (B1.3).
       The balance equationfor the number of electrons is written as
                       𝑑𝑁𝑒𝐼 = 𝑑𝑁𝑒𝑒𝑥𝑡 + 𝑑𝑁𝑒𝑎                                                       (B1.4),
whichresults in the following differential equation for the electron current
                       𝑑𝐼𝑒 (𝑥)
                               = 𝑒𝑍𝑒𝑥𝑡 𝑆 + 𝛼𝐼𝑒 (𝑥)                                                (B1.5).
                         𝑑𝑥
                                       𝐴1 𝑥
       On substituting𝐼𝑒 𝑥 = 𝐶1 𝑒           + 𝐴2 ,one derives
                       𝐴1 = 𝛼                                                                     (B1.6),
                                 𝑒𝑍𝑒𝑥𝑡 𝑆
                       𝐴2 = −                                                                     (B1.7).
                                   𝛼
B2.Given the fact that the ions flow in the direction opposite to the electron motion,the balance equationfor
the number of ionsis written as
                       𝑑𝑁𝑖𝐼 = 𝑑𝑁𝑖𝑒𝑥𝑡 + 𝑑𝑁𝑖𝑎                                                       (B2.1),
where
                                 𝐼 𝑥 −𝐼 (𝑥+𝑑𝑥 )                      1 𝑑𝐼 𝑥
                        𝑑𝑁𝑖𝐼 = 𝑖         𝑖               𝑖
                                               𝑑𝑡 = − 𝑒 𝑑𝑥   𝑑𝑥𝑑𝑡                              (B2.2).
                                         𝑒
                            𝑒𝑥𝑡
                        𝑑𝑁𝑖 = 𝑍𝑒𝑥𝑡 𝑆𝑑𝑥𝑑𝑡                                                       (B2.3).
                            𝑎       𝐼𝑒 (𝑥)
                        𝑑𝑁𝑖 = 𝛼 𝑒 𝑑𝑥𝑑𝑡                                                         (B2.4).
         Hence, the following differential equation for the ion current is obtained
                           𝑑𝐼𝑖 (𝑥)
                        − 𝑑𝑥       = 𝑒𝑍𝑒𝑥𝑡 𝑆 + 𝛼𝐼𝑒 (𝑥).                                        (B2.5)
         Onsubstituting the previouslyfound electron current together with the ion current,𝐼𝑖 𝑥 = 𝐶2 +
    𝐵2 𝑥
𝐵1 𝑒 ,yields
                        𝐵1 = −𝐶1                                                               (B2.6),
                        𝐵2 = 𝛼                                                                 (B2.7).
B3.Sincetheionsstartstomovefrom the anode located at𝑥 = 𝐿, the following condition holds
                        𝐼𝑖 𝐿 = 0                                                               (B3.1).
B4.By definition of secondary electron emission coefficient the following condition should be imposed
                        𝐼𝑒 0 = 𝛾𝐼𝑖 0                                                           (B4.1).


                        Theoretical competition. Tuesday, 15 July 2014                                  3/3
B5.Total current in each tube section is the sum of the electron and ion currents:
                                             𝑒𝑍 𝑆
                       𝐼 = 𝐼𝑒 + 𝐼𝑖 = 𝐶2 − 𝑒𝑥𝑡                                                 (B5.1).
                                               𝛼
Aftersubstituting the boundary conditions (B3.1) and (B4.1):
                       𝐶2 − 𝐶1 𝑒 𝛼𝐿 = 0                                                       (B5.2)
and
                            𝑒𝑍 𝑆
                       𝐶1 − 𝑒𝑥𝑡    = 𝛾(𝐶2 − 𝐶1 )                                              (B5.3).
                               𝛼
Solving (B5.2) and (B5.3) one can obtain:
                             𝑒𝑍 𝑆          1
                       𝐶2 = 𝑒𝑥𝑡       −𝛼𝐿
                                                                                              (B5.4).
                               𝛼    𝑒     (1+𝛾)−𝛾
So the total current:
                             𝑒𝑍𝑒𝑥𝑡 𝑆        1
                        𝐼=                             −1                                     (B5.5).
                               𝛼       𝑒 −𝛼𝐿 (1+𝛾)−𝛾
B6.When the discharge gap length is increased, the denominator in formula (B5.1) decreases. At that
moment, when it turns zero, the electric current in the gas becomes self-sustaining and external ionizer can
be turned off. Thus,
                           1          1
                     𝐿𝑐𝑟 = 𝛼 ln 1 + 𝛾                                                          (B6.1).
