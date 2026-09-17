---
id: izho-2015-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2015-t-q2
solution_type: official
source_document: solution-document-izho-2015-t-s
source_pdf: cache/phoxiv/izho/2015_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2015_T_S.pdf."
---

Problem 2. Vessel with water (7 points)
1. While pouring the water into the vessel the air is compressed and its pressure increases. At the
moment when the tube is completely filled with water the air pressure inside the vessel is equal to
𝑝 = 𝑝0 + 𝜌𝑔(𝐿 − 𝑥0). (1)
Since the vessel wall highly conducts heat, the temperature of the air inside the vessel does
not change, so the equations of state are
𝑝0𝑆ℎ = 𝑣𝑅𝑇0, (2)
𝑝𝑆(ℎ − 𝑥0) = 𝑣𝑅𝑇0, (3)
where 𝑆 is the cross section area of the vessel, 𝑣 is number of moles of the air inside the vessel.
From Eq. (1) - (3) the following quadratic equation is obtained:
𝜌𝑔𝑥0
2
− [𝑝0 + 𝜌𝑔(𝐿 + ℎ)]𝑥0 + 𝜌𝑔ℎ𝐿 = 0, (4)
which has the obvious solution:
𝑥0 =
1
2
[
𝑝0
𝜌𝑔
+ 𝐿 + ℎ ± √(
𝑝0
𝜌𝑔
+ 𝐿 + ℎ)
2
− 4ℎ𝐿]. (5)
Among two possible solutions (5), we should choose the one with the less value since it
should be 𝑥0 = ℎ at 𝑝0 = 0 or 𝑥0 = 0 at 𝐿 = 0, that is,
𝑥0 =
1
2
[
𝑝0
𝜌𝑔
+ 𝐿 + ℎ − √(
𝑝0
𝜌𝑔
+ 𝐿 + ℎ)
2
− 4ℎ𝐿]. (6)
Substituting the numerical values gives
𝑥0 = 7.86 ∙ 10−2
𝑚. (7)
2. The water is at equilibrium and, thus, the air pressure inside the vessel is found as a function of 𝑥
as follows
𝑝(𝑥) = 𝑝0 + 𝜌𝑔(𝐿 − 𝑥). (8)
3. Equation of state of an ideal gas for an arbitrary 𝑥 is given by
𝑝(𝑥)𝑆(ℎ − 𝑥) = 𝑣𝑅𝑇(𝑥), (9)
which, together with Eq.(1), yields
𝑇(𝑥) = 𝑇0 (1 −
𝑥
ℎ
)(1 +
𝜌𝑔(𝐿−𝑥)
𝑝0
). (10)
4. The temperature, at which the air displaces water out of the vessel, is determined by the
condition 𝑥 = 0, which, in accordance with (10), leads to
𝑇𝑚 = 𝑇0 (1 +
𝜌𝑔𝐿
𝑝0
), (11)
and the corresponding numerical value is evaluated as
𝑇𝑚 = 350 𝐾. (12)
5. The change of the internal energy of the air is obtained as
∆𝑈 =
5
2
𝑣𝑅(𝑇 − 𝑇0) =
5
2
𝜌𝑔𝐿𝑆ℎ, (13)
and the work done by the air to displace the water, is calculated as
𝐴 = ∫ 𝑝(𝑥)𝑆𝑑𝑥 =
1
2
𝑥0
0
𝑝0𝑆𝐿 (1 +
𝑝0
2𝜌𝑔𝐿
+
𝜌𝑔𝐿
2𝑝0
[1 +
2ℎ
𝐿
−
ℎ2
𝐿2
]) −,
−
1
4
𝑝0𝑆𝐿 (1 +
𝜌𝑔(𝐿−ℎ)
𝑝0
)√(1+
ℎ
𝐿
+
𝑝0
𝜌𝑔𝐿
)
2
−
4ℎ
𝐿
. (14)
According to the first law of thermodynamics, the heat given to the air is found as
𝑄 = ∆𝑈 + 𝐴, (15)
which, together with Eqs. (13) and (14), yields
𝑄 =
1
2
𝑝0𝑆𝐿 (1 +
𝑝0
2𝜌𝑔𝐿
+
𝜌𝑔𝐿
2𝑝0
[1 +
12ℎ
𝐿
−
ℎ2
𝐿2
]) −,
XI International Zhautykov Olympiad 2015 /Theoretical Competition/Solutions Page 5/11
−
1
4
𝑝0𝑆𝐿 (1 +
𝜌𝑔(𝐿−ℎ)
𝑝0
)√(1+
ℎ
𝐿
+
𝑝0
𝜌𝑔𝐿
)
2
−
4ℎ
𝐿
. (16)
Substituting the numerical values gives
𝑄 = 17.0 𝑘𝐽. (17)
Marking scheme
№ Content баллы
1 Formula (1) 𝑝 = 𝑝0 + 𝜌𝑔(𝐿 − 𝑥0) 0,25
2,0
Formula (2) 𝑝0𝑆ℎ = 𝑣𝑅𝑇0 0,25
Formula (3) 𝑝𝑆(ℎ − 𝑥0) = 𝑣𝑅𝑇0 0,25
Formula (4) 𝜌𝑔𝑥0
2
− [𝑝0 + 𝜌𝑔(𝐿 + ℎ)]𝑥0 + 𝜌𝑔ℎ𝐿 = 0 0,25
Formula (5) 𝑥0 =
1
2
[
𝑝0
𝜌𝑔
+ 𝐿 + ℎ ± √(
𝑝0
𝜌𝑔
+ 𝐿 + ℎ)
2
− 4ℎ𝐿] 0,25
Formula (6) 𝑥0 =
1
2
[
𝑝0
𝜌𝑔
+ 𝐿 + ℎ − √(
𝑝0
𝜌𝑔
+ 𝐿 + ℎ)
2
− 4ℎ𝐿] 0,5
Formula (7) 𝑥0 = 7,86 ∙ 10−2
𝑚 0,25
2 Formula (8) 𝑝(𝑥) = 𝑝0 + 𝜌𝑔(𝐿 − 𝑥) 0,5 0,5
3 Formula (9) 𝑝(𝑥)𝑆(ℎ − 𝑥) = 𝑣𝑅𝑇(𝑥) 0,5
1,0
Formula (10) 𝑇(𝑥) = 𝑇0 (1 −
𝑥
ℎ
)(1 +
𝜌𝑔(𝐿−𝑥)
𝑝0
) 0,5
4 Formula (11) 𝑇𝑚 = 𝑇0 (1 +
𝜌𝑔𝐿
𝑝0
) 0,5
1,0
Formula (12) 𝑇𝑚 = 350 𝐾 0,5
5 Formula (13) ∆𝑈 =
5
2
𝑣𝑅(𝑇 − 𝑇0) =
5
2
𝜌𝑔𝐿𝑆ℎ 0,5
2,5
Formula (14) 𝐴 =
1
2
𝑝0𝑆𝐿(1 +
𝑝0
2𝜌𝑔𝐿
+
𝜌𝑔𝐿
2𝑝0
[1 +
2ℎ
𝐿
−
ℎ2
𝐿2
]) −
−
1
4
𝑝0𝑆𝐿 (1 +
𝜌𝑔(𝐿−ℎ)
𝑝0
)√(1+
ℎ
𝐿
+
𝑝0
𝜌𝑔𝐿
)
2
−
4ℎ
𝐿
.
0,5
Formula (15) 𝑄 = ∆𝑈 + 𝐴 0,5
Formula (16) 𝑄 =
1
2
𝑝0𝑆𝐿(1 +
𝑝0
2𝜌𝑔𝐿
+
𝜌𝑔𝐿
2𝑝0
[1 +
12ℎ
𝐿
−
ℎ2
𝐿2
]) −
−
1
4
𝑝0𝑆𝐿 (1 +
𝜌𝑔(𝐿−ℎ)
𝑝0
)√(1+
ℎ
𝐿
+
𝑝0
𝜌𝑔𝐿
)
2
−
4ℎ
𝐿
.
0,5
Formula (17) 𝑄 = 17,0 𝑘𝐽 0,5
Total 7,0
