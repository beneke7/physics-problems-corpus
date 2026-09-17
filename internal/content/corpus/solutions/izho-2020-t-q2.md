---
id: izho-2020-t-q2
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2020-t-q2
solution_type: official
source_document: solution-document-izho-2020-t-s
source_pdf: cache/phoxiv/izho/2020_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2020_T_S.pdf."
---

Problem 2. Phase states and phase transitions (10,0 points)
Specific heat of phase transition
2.1 The work of steam against constant external pressure during evaporation of a unit water mass is
found as
𝐴𝐴 = 𝑃𝑃(𝑣𝑣2 − 𝑣𝑣1). (1)
Since 𝑣𝑣2 ≫ 𝑣𝑣1, we can neglect the specific volume of liquid 𝑣𝑣1 in comparison with the
specific volume of vapor 𝑣𝑣2. Then, considering water vapor as an ideal gas with the equation of state
𝑃𝑃𝑃𝑃 =
𝑅𝑅𝑅𝑅
𝜇𝜇𝑤𝑤
(2)
the work sought is obtained as
𝐴𝐴 = 𝑃𝑃(𝑣𝑣2 − 𝑣𝑣1) ≈
𝑅𝑅𝑇𝑇𝑏𝑏
𝜇𝜇𝑤𝑤
. (3)
XVI International Zhautykov Olympiad/Theoretical Competition Page 6/13
Thus, the ratio of work to the total heat of evaporation at 𝑇𝑇 = 373 К is determined by the
expression
𝐴𝐴
𝑟𝑟в
=
𝑅𝑅𝑇𝑇𝑏𝑏
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
, (4)
and the rest of the heat goes to the increase of the internal energy of the system ∆𝑢𝑢 = 𝑟𝑟𝑤𝑤 − 𝐴𝐴, i.e.
∆𝑢𝑢
𝑟𝑟𝑤𝑤
= 1 −
𝑅𝑅𝑇𝑇𝑏𝑏
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
= 92,4 %. (5)
2.2 The evaporation of one mole of water at a temperature 𝑇𝑇 consumes heat
𝜇𝜇𝑤𝑤𝑟𝑟(𝑇𝑇) = 𝑈𝑈2(𝑇𝑇) – 𝑈𝑈1(𝑇𝑇) + 𝑃𝑃𝑉𝑉2 = 𝑈𝑈2(𝑇𝑇) – 𝑈𝑈1(𝑇𝑇) + 𝑅𝑅𝑅𝑅. (6)
A similar expression for the temperature 𝑇𝑇𝑏𝑏 = 373 К has the form
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤 = 𝑈𝑈2(𝑇𝑇𝑏𝑏) – 𝑈𝑈1(𝑇𝑇𝑏𝑏) + 𝑅𝑅𝑇𝑇𝑏𝑏 . (7)
Subtracting equation (7) from equation (6), we obtain for the change in the molar heat of
evaporation
𝜇𝜇𝑤𝑤∆𝑟𝑟 = ∆𝑈𝑈2 – ∆𝑈𝑈1 + 𝑅𝑅∆𝑇𝑇 = С𝑃𝑃∆𝑇𝑇 − 𝜇𝜇𝑤𝑤𝑐𝑐𝑤𝑤∆𝑇𝑇 = 𝜇𝜇𝑤𝑤 �
С𝑃𝑃
𝜇𝜇𝑤𝑤
− 𝑐𝑐𝑤𝑤�∆𝑇𝑇, (8)
where ∆𝑇𝑇 = 𝑇𝑇 − 𝑇𝑇𝑏𝑏 and ∆𝑟𝑟 = 𝑟𝑟(𝑇𝑇) − 𝑟𝑟𝑤𝑤.
Given that for water vapor, the molar heat capacity at constant pressure is
𝐶𝐶𝑃𝑃 = 4𝑅𝑅, (9)
we obtain the specific heat of water evaporation
𝑟𝑟(𝑇𝑇) = 𝑟𝑟𝑤𝑤 − �𝑐𝑐𝑤𝑤 −
4𝑅𝑅
𝜇𝜇𝑤𝑤
�(𝑇𝑇 − 𝑇𝑇𝑏𝑏) = 2447 𝐽𝐽/𝑔𝑔. (10)
It is interesting to note that the heat of evaporation is increased by ∆𝑟𝑟/𝑟𝑟𝑤𝑤 ≈ 8 %.
The Clausius–Clapeyron relation
2.3 Neglecting the specific volume of water compared to the volume of vapor, we apply the
Clapeyron-Clausius equation to the vaporization in the form
𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑
=
𝑟𝑟
𝑇𝑇𝑇𝑇
=
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
𝑅𝑅𝑇𝑇2
𝑃𝑃 (11)
or
𝑑𝑑𝑑𝑑
𝑃𝑃
=
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤𝑑𝑑𝑑𝑑
𝑅𝑅𝑇𝑇2
. (12)
Integrating this expression at 𝑟𝑟 = 𝑟𝑟𝑤𝑤 = 𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐 gives rise to
𝑃𝑃 = 𝑃𝑃0 exp�
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
𝑅𝑅
�
1
𝑇𝑇𝑏𝑏
–
1
𝑇𝑇
��. (13)
2.4 As it follows from equation (13) the explicit dependence of the boiling point of water on external
pressure has the form
𝑇𝑇 =
𝑇𝑇𝑏𝑏
1−
𝑅𝑅𝑇𝑇𝑏𝑏
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
ln
𝑃𝑃
𝑃𝑃0
. (14)
According to the barometric formula for an isothermal atmosphere, we have
𝑃𝑃 = 𝑃𝑃0 exp�−
𝜇𝜇𝑎𝑎𝑎𝑎𝑎𝑎𝑔𝑔ℎ
𝑅𝑅𝑇𝑇0
�. (15)
Substituting this expression into formula (14), we obtain the dependence of the boiling
temperature on height and the numerical value of the boiling temperature of water at the altitude of
ℎ = 7 𝑘𝑘𝑘𝑘
𝑇𝑇 =
𝑇𝑇𝑏𝑏
1+
𝑇𝑇𝑏𝑏
𝑇𝑇0
𝜇𝜇𝑎𝑎𝑎𝑎𝑎𝑎
𝜇𝜇𝑤𝑤
𝑔𝑔ℎ
𝑟𝑟𝑤𝑤
= 349,6 К = 76,6 ℃. (16)
2.5 It follows from the Clapeyron-Clausius relation the following holds at the vicinity of 0 ℃
𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑
=
𝑟𝑟𝑤𝑤
𝑇𝑇0�
1
𝜌𝜌𝑤𝑤
−
1
𝜌𝜌𝑖𝑖
�
. (17)
Therefore, we obtain that in order to lower the melting temperature of ice by 10
С, the pressure
should be increased by
∆𝑃𝑃 =
𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑
∆𝑇𝑇 = 139 𝑎𝑎𝑎𝑎𝑎𝑎, (18)
so that the pressure should be equal to 𝑃𝑃 = 140 𝑎𝑎𝑎𝑎𝑎𝑎.
2.6 In order for ice crystals to break when walking, and not to melt under the influence of pressure
𝑃𝑃𝑐𝑐𝑐𝑐, the outdoor temperature should be lower than
XVI International Zhautykov Olympiad/Theoretical Competition Page 7/13
𝑡𝑡𝑚𝑚𝑚𝑚𝑚𝑚 =
𝑃𝑃𝑐𝑐𝑐𝑐
(𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑)
≈ −7,21 ℃ , (19)
in which the derivative (𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑) is determined by formula (17).
2.7 Since for one mole of vapor PV = RT, then
𝑑𝑑(𝑃𝑃𝑃𝑃) = 𝑃𝑃𝑃𝑃𝑃𝑃 + 𝑉𝑉𝑉𝑉𝑉𝑉 = 𝑅𝑅𝑅𝑅𝑅𝑅, (20)
thus, the elementary work of the vapor when changing its volume is derived as
𝑃𝑃𝑃𝑃𝑃𝑃 = 𝑅𝑅𝑅𝑅𝑅𝑅 – 𝑉𝑉𝑉𝑉𝑉𝑉. (21)
From the first law of thermodynamics it follows that the heat supplied to the vapor has the
form
𝛿𝛿𝛿𝛿 = 𝑑𝑑𝑑𝑑 + 𝛿𝛿𝛿𝛿 = 𝐶𝐶𝑉𝑉𝑑𝑑𝑑𝑑 + 𝑅𝑅𝑅𝑅𝑅𝑅 − 𝑉𝑉𝑉𝑉𝑉𝑉 = 𝐶𝐶𝑃𝑃𝑑𝑑𝑑𝑑 − 𝑉𝑉𝑉𝑉𝑉𝑉 . (22)
Given that from the Clapeyron-Clausius relation 𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑 = 𝑟𝑟𝑤𝑤𝜇𝜇𝑤𝑤/(𝑇𝑇𝑏𝑏𝑉𝑉),, we obtain the heat
capacity of the vapor
𝐶𝐶 =
𝛿𝛿𝛿𝛿
𝑑𝑑𝑑𝑑
= 𝐶𝐶𝑃𝑃 –
𝑉𝑉𝑉𝑉𝑉𝑉
𝑑𝑑𝑑𝑑
= 𝐶𝐶𝑃𝑃 –
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
𝑇𝑇𝑏𝑏
= − 75,7 𝐽𝐽/(𝐾𝐾 ∙ 𝑚𝑚𝑚𝑚𝑚𝑚). (23)
Thus, the heat from the vapor must be removed so that it does not overheat as a result of
expansion. It is interesting to note that the specific heat in this process turned out to be almost equal
to the specific heat of water with a minus sign 𝑐𝑐 = 𝐶𝐶𝑃𝑃/𝜇𝜇𝑤𝑤 – 𝑟𝑟𝑤𝑤/𝑇𝑇𝑏𝑏 = − 4,21 𝐽𝐽/(𝑔𝑔 ∙ 𝐾𝐾).
Border boiling
2.8 A liquid boils when bubbles are formed inside such that the pressure of its saturated vapor
reaches the atmospheric pressure P0. At the liquids border, the total vapor pressure in the bubbles
formed upon boiling is the sum of the partial pressures of the saturated vapor of carbon tetrachloride
and water at t*
𝑃𝑃0 = 𝑃𝑃(𝑡𝑡∗) + 𝑃𝑃 𝑤𝑤(𝑡𝑡∗
). (24)
It follows that the saturated vapor pressure of carbon tetrachloride at a boiling point is found
as
𝑃𝑃∗
= 𝑃𝑃(𝑡𝑡∗) = 𝑃𝑃0 − 𝑃𝑃 𝑤𝑤(𝑡𝑡∗). (25)
From the Clapeyron-Clausius relation for carbon tetrachloride it follows that
𝑑𝑑𝑑𝑑
𝑃𝑃
=
𝜇𝜇𝜇𝜇𝜇𝜇𝜇𝜇
𝑅𝑅𝑇𝑇2 . (26)
After integrating from the lower bound 𝑇𝑇 = 𝑡𝑡 + 273,15 = 349,8 𝐾𝐾 to the higher bound
𝑇𝑇∗
= 𝑡𝑡∗
+ 273,15 = 339,15 𝐾𝐾 results in the following formula
𝑙𝑙𝑙𝑙(𝑃𝑃0/𝑃𝑃∗
) = 𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟/𝑅𝑅𝑅𝑅𝑇𝑇∗
, (27)
which means the heat of vaporization of carbon tetrachloride is obtained as
𝑟𝑟 =
𝑅𝑅𝑅𝑅𝑇𝑇∗ ln(𝑃𝑃0/𝑃𝑃∗)
𝜇𝜇(𝑇𝑇−𝑇𝑇∗ )
≈ 180 J/g. (28)
For reference: the experimental value is 𝑟𝑟 = 195 𝐽𝐽/𝑔𝑔.
2.9 The ratio of evaporation rates from the border layer is obviously equal to the ratio of the masses
of vapor of tetrachlomethane and water in the bubbles formed during boiling, which, in turn, is equal
to the ratio of the densities of the vapors found as
𝑚𝑚
𝑚𝑚𝑤𝑤
=
𝜌𝜌
𝜌𝜌𝑤𝑤
=
𝑃𝑃∗𝜇𝜇
𝑃𝑃𝑤𝑤(𝑡𝑡∗)𝜇𝜇𝑤𝑤
≈ 25. (29)
Thus, carbon tetrachloride evaporates 25 times faster (by weight) than water. This means that
by the time of evaporation of carbon tetrachloride, the amount of water that finally evaporates is
written as
𝛥𝛥𝛥𝛥 =
𝜌𝜌𝜌𝜌
2
𝑚𝑚𝑤𝑤
𝑚𝑚
= 3,25 𝑔𝑔 . (30)
Accordingly, the amount of water remaining after evaporation of all carbon tetrachloride is
derived as
𝑀𝑀𝑤𝑤 = 𝜌𝜌𝑤𝑤𝑉𝑉/2 – 𝛥𝛥𝛥𝛥 = 46,7 𝑔𝑔. (31)
2.10 Let border boiling occur at a certain temperature 𝑡𝑡𝑥𝑥, then the saturated vapor pressure of
fluoroketone 𝑃𝑃 and the saturated vapor pressure of water 𝑃𝑃 𝑤𝑤 at this temperature should equal the
external atmospheric pressure, i.e.
𝑃𝑃0 = 𝑃𝑃(𝑡𝑡𝑥𝑥) + 𝑃𝑃 𝑤𝑤(𝑡𝑡𝑥𝑥). (32)
XVI International Zhautykov Olympiad/Theoretical Competition Page 8/13
Thus, the saturated vapor pressure of fluoroketone at the border boiling point decreases by the
value of the saturated vapor pressure of water at this temperature
𝑃𝑃(𝑡𝑡𝑥𝑥) = 𝑃𝑃0 − 𝑃𝑃𝑤𝑤(𝑡𝑡𝑥𝑥). (33)
From the Clapeyron – Clausius equation (in the approximation of small liquid volume and
vapor ideality) it follows that the slope of the phase equilibrium line P(T) at the volume boiling point
of fluoroketone reads as
α𝑓𝑓 =
d𝑃𝑃
d𝑇𝑇
=
𝑟𝑟𝑟𝑟𝑃𝑃0
𝑅𝑅𝑇𝑇𝑓𝑓
2 . (34)
For water at the same temperature, a similar derivative is more than 6 times less
αw =
d𝑃𝑃
d𝑇𝑇
=
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤𝑃𝑃w(𝑡𝑡𝑓𝑓)
𝑅𝑅𝑇𝑇𝑓𝑓
2 . (35)
Since α𝑓𝑓/αw ≈ 6,30, the decrease in pressure and, correspondingly, in the boiling point are
both small relative to the same values for fluoroketone, therefore, we can use the linear
approximation near tf
𝑃𝑃0 − 𝑃𝑃(𝑡𝑡𝑥𝑥) = α𝑓𝑓Δ𝑇𝑇 = 𝑃𝑃 w(𝑡𝑡𝑥𝑥) = 𝑃𝑃 w�𝑡𝑡𝑓𝑓�– αwΔ𝑇𝑇, (36)
where Δ𝑇𝑇 = 𝑇𝑇𝑓𝑓 − 𝑇𝑇𝑥𝑥, wherefrom the lowering of the boiling point is found as
Δ𝑇𝑇 =
𝑃𝑃w(t𝑓𝑓)
(α𝑓𝑓 + αw)
. (37)
Finally, the temperature for the border boiling is obtained as
𝑡𝑡𝑥𝑥 = 𝑡𝑡𝑓𝑓 – Δ𝑇𝑇 = 46,3 ℃P. (38)
For reference: the experimental value is 𝑡𝑡𝑥𝑥 = (46 ± 1) ℃.
Content Points
2.1
Formula (1): 𝐴𝐴 = 𝑃𝑃(𝑣𝑣2 − 𝑣𝑣1) 0,2
1,0
Formula (2): 𝑃𝑃𝑃𝑃 =
𝑅𝑅𝑅𝑅
𝜇𝜇𝑤𝑤
0,2
Formula (4):
𝐴𝐴
𝑟𝑟в
=
𝑅𝑅𝑇𝑇𝑏𝑏
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
0,2
Formula (5):
∆𝑢𝑢
𝑟𝑟𝑤𝑤
= 1 −
𝑅𝑅𝑇𝑇𝑏𝑏
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
0,2
Numerical value in formula (5): 92,4 % 0,2
2.2
Formula (6): 𝜇𝜇𝑤𝑤𝑟𝑟(𝑇𝑇) = 𝑈𝑈2 – 𝑈𝑈1 + 𝑃𝑃𝑉𝑉2 = 𝑈𝑈2 – 𝑈𝑈1 + 𝑅𝑅𝑅𝑅 0,2
1,0
Formula (7): 𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤 = 𝑈𝑈2(𝑇𝑇𝑏𝑏) – 𝑈𝑈1(𝑇𝑇𝑏𝑏) + 𝑅𝑅𝑇𝑇𝑏𝑏 0,2
Formula (9): 𝐶𝐶𝑃𝑃 = 4𝑅𝑅 0,2
Formula (10): 𝑟𝑟(𝑇𝑇) = 𝑟𝑟𝑤𝑤 − �𝑐𝑐𝑤𝑤 −
4𝑅𝑅
𝜇𝜇𝑤𝑤
�(𝑇𝑇 − 𝑇𝑇𝑏𝑏) 0,2
Numerical value in formula (10): 2447 𝐽𝐽/𝑔𝑔 0,2
2.3
Formula (11):
𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑
=
𝑟𝑟
𝑇𝑇𝑇𝑇
=
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
𝑅𝑅𝑇𝑇2
𝑃𝑃 0,2
0,4
Formula (13): 𝑃𝑃 = 𝑃𝑃0 exp�
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
𝑅𝑅
�
1
𝑇𝑇𝑏𝑏
–
1
𝑇𝑇
�� 0,2
2.4
Formula (14): 𝑇𝑇 =
𝑇𝑇𝑏𝑏
1−
𝑅𝑅𝑇𝑇𝑏𝑏
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
ln
𝑃𝑃
𝑃𝑃0
0,2
1,0
Formula (15): 𝑃𝑃 = 𝑃𝑃0 exp�−
𝜇𝜇𝑎𝑎𝑎𝑎𝑎𝑎𝑔𝑔ℎ
𝑅𝑅𝑇𝑇0
� 0,4
Formula (16): 𝑇𝑇 =
𝑇𝑇𝑏𝑏
1+
𝑇𝑇𝑏𝑏
𝑇𝑇0
𝜇𝜇𝑎𝑎𝑎𝑎𝑎𝑎
𝜇𝜇𝑤𝑤
𝑔𝑔ℎ
𝑟𝑟𝑤𝑤
0,2
Numerical value in formula (16): 76,6 ℃ 0,2
2.5 Formula (17):
𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑
=
𝑞𝑞𝑖𝑖
𝑇𝑇0�
1
𝜌𝜌𝑤𝑤
−
1
𝜌𝜌𝑖𝑖
� 0,2 0,6
XVI International Zhautykov Olympiad/Theoretical Competition Page 9/13
Formula (18): ∆𝑃𝑃 =
𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑
∆𝑇𝑇 0,2
Numerical value in formula (17): ∆𝑃𝑃 = 139 𝑎𝑎𝑎𝑎𝑎𝑎 or 𝑃𝑃 = 140 𝑎𝑎𝑎𝑎𝑎𝑎 0,2
2.6
Formula (19): 𝑡𝑡𝑚𝑚𝑚𝑚𝑚𝑚 =
𝑃𝑃𝑐𝑐𝑐𝑐
(𝑑𝑑𝑑𝑑/𝑑𝑑𝑑𝑑)
0,4
0,6
Numerical value in formula (19): 𝑡𝑡𝑚𝑚𝑚𝑚𝑚𝑚 ≈ −7,21 ℃ 0,2
2.7
Formula (21): 𝑃𝑃𝑃𝑃𝑃𝑃 = 𝑅𝑅𝑅𝑅𝑅𝑅 – 𝑉𝑉𝑉𝑉𝑉𝑉 0,2
1,0
Formula (22): 𝛿𝛿𝛿𝛿 = 𝑑𝑑𝑑𝑑 + 𝛿𝛿𝛿𝛿 = 𝐶𝐶𝑉𝑉𝑑𝑑𝑑𝑑 + 𝑅𝑅𝑅𝑅𝑅𝑅 − 𝑉𝑉𝑉𝑉𝑉𝑉 =
𝐶𝐶𝑃𝑃𝑑𝑑𝑑𝑑 − 𝑉𝑉𝑉𝑉𝑉𝑉
0,2
Formula (23): 𝐶𝐶 =
𝛿𝛿𝛿𝛿
𝑑𝑑𝑑𝑑
= 𝐶𝐶𝑃𝑃 –
𝑉𝑉𝑉𝑉𝑉𝑉
𝑑𝑑𝑑𝑑
= 𝐶𝐶𝑃𝑃 –
𝜇𝜇𝑤𝑤𝑟𝑟𝑤𝑤
𝑇𝑇𝑏𝑏
0,4
Numerical value in formula (23): 𝐶𝐶 = − 75,7 𝐽𝐽/(𝐾𝐾 ∙ 𝑚𝑚𝑚𝑚𝑚𝑚) 0,2
2.8
Formula (24): 𝑃𝑃0 = 𝑃𝑃(𝑡𝑡∗) + 𝑃𝑃 𝑤𝑤(𝑡𝑡∗
) 0,4
1,2
Formula (26):
𝑑𝑑𝑑𝑑
𝑃𝑃
=
𝜇𝜇𝜇𝜇𝜇𝜇𝜇𝜇
𝑅𝑅𝑇𝑇2
0,2
Formula (27): ln(𝑃𝑃0/𝑃𝑃∗
) = 𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟/𝑅𝑅𝑅𝑅𝑇𝑇∗
0,2
Formula (28): 𝑟𝑟 =
𝑅𝑅𝑅𝑅𝑇𝑇∗ ln(𝑃𝑃0/𝑃𝑃∗)
𝜇𝜇(𝑇𝑇−𝑇𝑇∗ )
0,2
Numerical value in formula (28): 𝑟𝑟 ≈ 180 𝐽𝐽/𝑔𝑔. 0,2
2.9
Formula (29):
𝑚𝑚
𝑚𝑚𝑤𝑤
=
𝜌𝜌
𝜌𝜌𝑤𝑤
=
𝑃𝑃∗𝜇𝜇
𝑃𝑃𝑤𝑤(𝑡𝑡∗)𝜇𝜇𝑤𝑤
0,4
1,0 Formula (30): 𝛥𝛥𝛥𝛥 =
𝜌𝜌𝜌𝜌
2
𝑚𝑚𝑤𝑤
𝑚𝑚
0,2
Formula (31): 𝑀𝑀𝑤𝑤 = 𝜌𝜌𝑤𝑤𝑉𝑉/2 – 𝛥𝛥𝛥𝛥 0,2
Numerical value in formula (31): 𝑀𝑀𝑤𝑤 = 46,7 𝑔𝑔 0,2
2.10
Formula (32): 𝑃𝑃0 = 𝑃𝑃(𝑡𝑡𝑥𝑥) + 𝑃𝑃 𝑤𝑤(𝑡𝑡𝑥𝑥) 0.2
2,2
Formula (34): α𝑓𝑓 =
d𝑃𝑃
d𝑇𝑇
=
𝑟𝑟𝑟𝑟𝑃𝑃0
𝑅𝑅𝑇𝑇𝑓𝑓
2 0,3
Formula (35): αw =
d𝑃𝑃
d𝑇𝑇
=
𝑟𝑟𝑤𝑤𝜇𝜇𝑤𝑤𝑃𝑃w(𝑡𝑡𝑓𝑓)
𝑅𝑅𝑇𝑇𝑓𝑓
2 0,3
Estimation: α𝑓𝑓/αw ≈ 6,30 0,3
Formula (36): 𝑃𝑃0 − 𝑃𝑃(𝑡𝑡𝑥𝑥) = α𝑓𝑓Δ𝑇𝑇 = 𝑃𝑃 w(𝑡𝑡𝑥𝑥) = 𝑃𝑃 w�𝑡𝑡𝑓𝑓�– αwΔ𝑇𝑇 0,3
Formula (37): Δ𝑇𝑇 =
𝑃𝑃w(t𝑓𝑓)
(α𝑓𝑓 + αw)
0,4
Formula (38): 𝑡𝑡𝑥𝑥 = 𝑡𝑡𝑓𝑓 – Δ𝑇𝑇 0,2
Numerical value in formula (38): 𝑡𝑡𝑥𝑥 = 46,3 ℃ 0,2
Total 10,0
