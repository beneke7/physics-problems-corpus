---
id: solution-document-ipho-2014-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2014/T2_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2014-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2014/T2_S.pdf."
---

Theoretical competition. Tuesday, 15 July 2014                                        1/3
                         Problem 2.Van der Waals equation of state
                                              Solution
                                Part А. Non-ideal gas equation of state
A1.If 𝑉 = 𝑏is substituted into the equation of state, then the gas pressure turns infinite. It is obvious that this
is the moment when all the molecules are tightly packed. Therefore, the parameter 𝑏 is approximately equal
to the volume of all molecules, i.e.
                               𝑏 = 𝑁𝐴 𝑑3                                                             (A1.1)
A2.In the most general case thevan der Waals equation of state can be rewritten as
                               𝑃𝑐 𝑉3 − 𝑅𝑇𝑐 + 𝑏𝑃𝑐 𝑉2 + 𝑎𝑉 − 𝑎𝑏 = 0                                    (A2.1).
        Since at the critical values of the gas parameters the straight line disappears, then, the solution of
(A2.1) must have one real triple root, i.e. it can be rewritten as follows
                               𝑃𝑐 (𝑉 − 𝑉𝑐 )3 = 0                                                     (A2.2).
        Comparing the coefficients of expression (A2.1) and (A2.2), the following set of equations is
obtained
                                3𝑃𝑐 𝑉𝑐 = 𝑅𝑇𝑐 + 𝑏𝑃𝑐
                                      3𝑃𝑐 𝑉2𝑐 = 𝑎                                            (A2.3).
                                          3
                                      𝑃𝑐 𝑉𝑐 = 𝑎𝑏
        Solution to the set (A2.3) is the following formulas for the van der Waals coefficients
                                       27𝑅 2 𝑇𝑐2
                               𝑎=                                                                    (A2.4),
                                        64𝑃𝑐
                                       𝑅𝑇𝑐
                               𝑏 = 8𝑃                                                                (A2.5).
                                           𝑐
         Alternative solution
         The critical parameters are achieved in the presence of an inflection point in the isotherm, at which
the first and second derivatives are both zero. Therefore, they are defined by thefollowingconditions
                                𝑑𝑃
                                𝑑𝑉
                                     =0                                                           (A2.6),
                                       𝑇
and
                                𝑑2 𝑃
                                               =0                                                    (A2.7).
                                𝑑𝑉2 𝑇
       Thus, the following set of equations is obtained
                                       𝑅𝑇      2𝑎
                                   − 𝑉 −𝑏𝑐 2 + 3 = 0
                                                  𝑐      𝑉𝑐
                                               2𝑅𝑇𝑐     6𝑎
                                               𝑉𝑐 −𝑏 3
                                                       − 4=0                                         (A2.8),
                                                        𝑉𝑐
                                                   𝑎
                                  𝑃𝑐 + 2                 𝑉𝑐 − 𝑏 = 𝑅𝑇𝑐
                                                   𝑉𝑐
which has the same solution (A2.4) and (A2.5).
A3.Numericalcalculationsforwaterproduce the following result
                                                        m6 ∙Pa
                               𝑎𝑤 = 0.56                                                             (A3.1).
                                          mole2
                                                m3
                               𝑏𝑤 = 3.1 ∙ 10−5 mole                                                  (A3.2).
A4.From equations (A1.4) and (A3.2) it is found that
                                                𝑏
                                                  = 3.7 ∙ 10−10 m ≈ 4 ∙ 10−10 m
                                           3
                               𝑑𝑤 =            𝑁𝐴
                                                                                                     (A4.1).


                                  Part B. Properties of gas and liquid
B1.Usingtheinequality𝑉𝐺 ≫ 𝑏, the van der Waals equation of state can be written as
                                               𝑎
                                𝑝0 + 2 𝑉𝐺 = 𝑅𝑇                                                       (B1.1),
                                           𝑉𝐺
which has the following solutions
                                           𝑅𝑇                    4𝑎𝑝
                               𝑉𝐺 = 2𝑝                  1 ± 1 − 2 02                                 (B1.2).
                                               0                 𝑅 𝑇


              Theoretical competition. Tuesday, 15 July 2014                                                             2/3
        Smaller root in (B1.2) gives the volume in an unstable state on the rising branch of thevan der Waals
isotherm. The volume of gas is given by the larger root, since at 𝑎 = 0an expression for the volume of an
ideal gasshould be obtained, i.e.
                                          𝑅𝑇                               4𝑎𝑝
                               𝑉𝐺 = 2𝑝                1 + 1 − 2 02                                                        (B1.3).
                                                  0                        𝑅 𝑇
                                                                                         𝑎𝑝
         For given values of the parameters the value 𝑅𝑇02 = 5.8 ∙ 10−3 . It can therefore be assumed
    𝑎𝑝
that 𝑅𝑇02 ≪ 1, then (B1.3)takes the form
                                          𝑅𝑇                   𝑎𝑝           𝑅𝑇       𝑎
                               𝑉𝐺 ≈ 𝑝                 1 − 2 02 = 𝑝 − 𝑅𝑇                                                   (B1.4).
                                              0                𝑅 𝑇           0
B2. For an ideal gas
                                              𝑅𝑇
                               𝑉𝐺0 = 𝑝                                                                                    (B2.1),
                                                  0
hence,
                                ∆𝑉𝐺                𝑉𝐺0 −𝑉𝐺  1                             4𝑎𝑝           𝑎𝑝0
                                          =                =2              1 − 1 − 2 02 ≈                     = 0.58%.    (B2.2)
                                𝑉𝐺0                  𝑉𝐺0                                  𝑅 𝑇       𝑅2 𝑇2
B3.Mechanical stability of a thermodynamic system is inpower provided that
                               𝑑𝑃
                               𝑑𝑉
                                   < 0.                                                                                   (B3.1)
                                      𝑇
       The minimum volume, in which the mattercan still exist in the gaseous state, corresponds to a point
in which
                                   𝑑𝑃
                         𝑉𝐺𝑚𝑖𝑛 → 𝑑𝑉 = 0                                                      (B3.2).
                                                            𝑇
         Using the van der Waals equation of state (B3.2) is written as
                               𝑑𝑃         𝑅𝑇      2𝑎
                               𝑑𝑉
                                    =−        2+ 3 = 0                                                                    (B3.3).
                                      𝑇                (𝑉−𝑏)           𝑉
         From (B3.2) and (B3.3), and with the help of𝑉𝐺𝑚𝑖𝑛 ≫ 𝑏, it is found that
                                      2𝑎
                             𝑉𝐺𝑚𝑖𝑛 = 𝑅𝑇                                                                                   (B3.4).
         Thus,
                                𝑉𝐺                𝑅2 𝑇2
                               𝑉𝐺𝑚𝑖𝑛
                                       = 2𝑎𝑝 = 86                                                                         (B3.5).
                                                       0
                                  2
B4. Usingtheinequality𝑃 ≪ 𝑎/𝑉 , the van der Waals equation of state is written as
                           𝑎
                            2 𝑉𝐿 − 𝑏 = 𝑅𝑇,                                                                                (B4.1)
                               𝑉𝐿
whose solution is
                                              𝑎                            4𝑏𝑅𝑇
                               𝑉𝐿 = 2𝑅𝑇 1 ± 1 −                              𝑎
                                                                                                                          (B4.2).
       In this case, the smaller root shouldbe taken, since at𝑇 → 0the liquid volume𝑉𝐿 = 𝑏 must be obtained
according to (B4.1), i.e.
                                              𝑎                            4𝑏𝑅𝑇                   𝑏𝑅𝑇
                               𝑉𝐿 = 2𝑅𝑇 1 − 1 −                              𝑎
                                                                                     ≈𝑏 1+ 𝑎 .                            (B4.3).
B5. Since (B4.3) givesthevolumeoftheonemoleofwaterits mass density is easily found as
                                 𝜇      𝜇      𝜇           2 kg
                            𝜌𝐿 = 𝑉 =     𝑏𝑅𝑇 ≈ 𝑏 = 5.8 ∙ 10 m3                                                            (B5.1).
                                          𝐿           𝑏 1+ 𝑎
B6. Inaccordancewith (B4.3) the volume thermal expansion coefficient is derived as
                                 1 ∆𝑉      𝑏𝑅    𝑏𝑅
                            𝛼 = 𝑉 ∆𝑇𝐿 = 𝑎+𝑏𝑅𝑇 ≈ 𝑎 = 4.6 ∙ 10−4 К−1                                                        (B6.1).
                                          𝐿
B7.The heat, required to convert the liquid to gas, is used to overcome the intermolecular forces that create
negative pressure 𝑎/𝑉 2 , therefore,
                                          𝑉 𝑎             1    1
                               𝐸 = 𝐿𝜇 ≈ 𝑉 𝐺 𝑉 2 𝑑𝑉 = 𝑎 𝑉 − 𝑉                                   (B7.1),
                                                           𝐿                         𝐿        𝐺
and using𝑉𝐺 ≫ 𝑉𝐿 , (B7.1) yields
                                   𝑎                            𝑎                𝑎                  J
                              𝐿 = 𝜇𝑉 =                           𝑏𝑅𝑇       ≈ 𝜇𝑏 = 1.0 ∙ 106 kg                            (B7.2).
                                              𝐿        𝜇𝑏      1+
                                                                  𝑎


            Theoretical competition. Tuesday, 15 July 2014                                   3/3
B8.Consider some water of volume𝑉. To make a monolayer of thickness 𝑑 out of it, the following work
must be done
                            𝐴 = 2𝜎𝑆                                                     (B8.1).
       Fabrication of the monomolecular layer may be interpreted as the evaporation of an equivalent
volume of water which requires the following amount of heat
                            𝑄 = 𝐿𝑚                                                      (B8.2),
where the mass is given by
                            𝑚 = 𝜌𝑆𝑑                                                     (B8.3).
       Using (A4.1a), (B5.1)and(B7.2), one finally gets
                                  𝑎                   N
                            𝜎 = 2𝑏 2 𝑑𝑤 = 0.12 ∙ 10−2 m                                 (B8.4).

                                         Part С. Liquid-gas systems
C1.At equilibrium, the pressure in the liquid and gas should be equalat all depths. The pressure𝑝in the fluid
at the depth ℎis related to the pressure of saturated vapor above the flat surface by
                                𝑝 = 𝑝0 + 𝜌𝐿 𝑔ℎ                                                 (C1.1).
        The surface tension creates additional pressure defined by the Laplace formula as
                                       2𝜎
                                ∆𝑝𝐿 = 𝑟                                                        (C1.2).
        The same pressure𝑝inthefluidatthedepthℎ depends on the vapor pressure 𝑝ℎ over the curved liquid
surface and its radiusofcurvature as
                                           2𝜎
                                𝑝 = 𝑝ℎ + 𝑟                                                     (C1.3).
        Furthermore, the vapor pressure at different heights are related by
                                𝑝ℎ = 𝑝0 + 𝜌𝑆 𝑔ℎ                                                (C1.4).
        Solving (C1.1)-(C1.4), it is found that
                                        2𝜎
                                ℎ = (𝜌 −𝜌 )𝑔𝑟                                                  (C1.5).
                                     𝐿           𝑆
       Hence,the pressure difference sought is obtained as
                                                        2𝜎 𝜌 𝑆   2𝜎 𝜌
                             ∆𝑝𝑇 = 𝑝ℎ − 𝑝0 = 𝜌𝑆 𝑔ℎ = 𝑟 𝜌 −𝜌    ≈ 𝑟 𝜌𝑆.                         (C1.6).
                                                                𝐿   𝑆   𝐿
         Note that the vapor pressure over the convex surface of the liquid is larger than the pressure above
the flat surface.
C2.Let 𝑃𝑒 be vapor pressure at a temperature 𝑇𝑒, and 𝑃𝑒 − ∆𝑃𝑒 be vapor pressure at a temperature 𝑇𝑒 − ∆𝑇𝑒.
In accordance with equation (3) from problem statement, whentheambient temperature falls by an amount of
∆𝑇𝑒 the saturated vapor pressure changes by an amount
                                         𝑎
                              ∆𝑃𝑒 = 𝑃𝑒 𝑏𝑅 𝑇 2 ∆𝑇𝑒                                                (C2.1).
                                                     𝑒
        In accordance with the Thomson formula obtained in part C1, the pressure of saturated vapor above
the droplet increases by the amountof ∆𝑝𝑇 . While a droplet is small in size, the vapor above its surface
remains unsaturated. Whena droplet hasgrownuptoacertainminimumsize, thevaporaboveitssurface turns
saturated.
        Since the pressure remains unchanged, the following condition must hold
                              𝑃𝑒 − ∆𝑃𝑒 + ∆𝑝𝑇 = 𝑃𝑒                                            (C2.2).
        Assuming the vapor is almost ideal gas, its density can be found as
                                   𝜇𝑃
                              𝜌𝑆 = 𝑅𝑇𝑒 ≪ 𝜌𝐿                                                  (C2.3).
                                         𝑒
       From equations (C2.1)-(C2.3), (B5.1) and (C1.6) one finds
                           2𝜎 𝜇𝑃𝑒        𝑎∆𝑇𝑒
                                 𝜇 = 𝑃𝑒      2                                                 (C2.4).
                            𝑟    𝑅𝑇𝑒 𝑏                   𝑏𝑅𝑇𝑒
       Thus, it is finally obtained that
                                   2𝜎𝑏 2 𝑇
                              𝑟 = 𝑎 ∆𝑇 𝑒 = 1.5 ∙ 10−8 m                                        (C2.5).
                                             𝑒
