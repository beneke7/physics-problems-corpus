---
id: izho-2016-t-q3
source: izho
language: ru
solution_language: ru
translated: false
problem: izho-2016-t-q3
solution_type: official
source_document: solution-document-izho-2016-t-s
source_pdf: cache/phoxiv/izho/2016_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/izho/2016_T_S.pdf."
---

Problem 3. Nonlinear capacitor (10,0 points)
1. [0.75 points] After a long period of time the electric current in the circuit turns zero and the
capacitor will be fully charged, i.e.
𝐼 = 0. (1)
The voltage provided by the source is thus drop on the capacitor whose capacitance at 𝑈0 =
5 V is obtained from the graph
𝐶 = 0,10 µ𝐹. (2)
The charge of the capacitor is therefore found as
𝑞 = 𝐶𝑈0 = 0.50 µ𝐶𝑙. (3)
2. [0.25 points] Since the electric current in the circuit is finite and charging the capacitor to the
voltage drop of 𝑈0 = 10 V requires an infinite charge, the corresponding time is obtained as.
𝑡 = ∞. (4)
3. [3.0 points] Let the capacitor be charged with the charge 𝑞 and its capacitance is equal to 𝐶,
then, since all elements are connected in series, one gets
𝑈0 =
𝑞
𝐶
+ 𝐼𝑅, (5)
where the electric current is obtained as
𝐼 =
𝑑𝑞
𝑑𝑡
. (6)
Substituting (6) into (5) yields
𝑑𝑡 =
𝑅
𝑈0−
𝑞
𝐶(𝑞)
𝑑𝑞 = 𝑓(𝑞)𝑑𝑞, (7)
where 𝑓(𝑞) = 𝑅/(𝑈0 −
𝑞
𝐶(𝑞)
) is a function of the charge of the capacitor.
The function 𝑓(𝑞) is easily retrieved from the provided graph of 𝐶 = 𝐶(𝑈) and turns out
linear as shown in the figure below.
XII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 6/8
The linear equation has the form
𝑓(𝑞) = 𝑎 + 𝑏𝑞, (8)
𝑎 = 0.10
ms
µCl
, (9)
𝑏 = 0.20
𝑚𝑠
(µCl)2
. (10)
The time needed for a capacitor to be charge to 𝑞 = 4 мкКл, is derived from equations (7)
and (8) as
𝑡 = 𝑎𝑞 +
1
2
𝑏𝑞2
= 2.0 𝑚𝑠 (11)
4. [0.5 points] The time interval ∆𝑡, needed for the capacitor to increase its charge from 𝑞0 = 4 µCl
till 𝑞 = 8 µCl is found as
𝑡 = (𝑞 − 𝑞0)(𝑎 +
1
2
𝑏(𝑞 + 𝑞0)) = 5.2𝑚𝑠. (12)
5. [0.5 points] Solving equation (11) one obtains that
𝑞1/2 =
−𝑎±√𝑎2+2𝑏𝑡
𝑏
. (13)
It is obvious that at the initial time moment 𝑞(0) = 0, that is why the plus sign must be taken in
formula (13) and one finally gets that
𝑞 =
√𝑎2+2𝑏𝑡−𝑎
𝑏
= 5,0 µCl. (14)
6. [0.5 points] For an ordinary capacitor its charge is proportional to the voltage drop across it, i.e.
𝑞 = 𝐶𝑈, (15)
and the electric current in the circuit is derived as
𝐼 =
𝑑𝑞
𝑑𝑡
= 𝐶
𝑑𝑈
𝑑𝑡
~
𝑑𝑈
𝑑𝑡
. (16)
Since the capacitor and the resistor are connected in a series, then the electric current
passing through them is the same, and, thus, the oscillation of voltage on the resistor is in phase
with the oscillation of the current. Substituting 𝑈~sin𝜔𝑡 gives rise to 𝐼~cos𝜔𝑡 = sin(𝜔𝑡 −
𝜋
2
),
i.e. the phase difference between the oscillations of the voltage across the capacitor and the resistor
is 𝜑 = −
𝜋
2
.
The circuit contains the nonlinear capacitor but the proportionality in equation (16) stays the
same, since the oscillation of the voltage is small compared with the constant voltage provided by
the source, i.e.
𝜑 = −
𝜋
2
. (17)
7. [4.0 points] The voltage drop has constant and alternating components. After a long period of
time the constant component of the voltage will be dropped across the capacitor only, i.e.
𝑈𝐶 = 5,000 𝑉, (18)
and the constant component of the voltage drop across the resistor will be equal to zero, i.e.
XII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 7/8
𝑈𝑅 = 0. (19)
In our case the capacitance is voltage dependent, that is why equation (16) is rewritten in the
form
𝐼 =
𝑑𝑞
𝑑𝑡
= 𝐶(𝑈)
𝑑𝑈
𝑑𝑡
+ 𝑈
𝑑𝐶(𝑈)
𝑑𝑈
𝑑𝑈
𝑑𝑡
= 𝐶eff
𝑑𝑈
𝑑𝑡
, (20)
where the effective capacitance is found as
𝐶eff = 𝐶(𝑈) + 𝑈
𝑑𝐶(𝑈)
𝑑𝑈
= 0.200 µ𝐹. (21)
It is well known that the reactive resistance of the capacitor is equal to
𝑋С =
1
𝜔𝐶eff
. (22)
To calculate the electric current for the resistor and the capacitor connected in a series let us
use the vector diagram shown in the figure below.
From this diagram the amplitude of the electric current is easily found as
𝐼 =
𝛿𝑈
√𝑅2+
1
𝜔2𝐶eff
2
= 44.7 µ𝐴. (23)
and the corresponding phase shift 𝛼 between the current and the voltage is obtained as
𝛼 = arctg(
𝑈𝐶
𝑈𝑅
) = arctg(
1
𝜔𝐶eff𝑅
) = 1,11 𝑟𝑎𝑑 = 63,4°. (24)
Finally, the dependence of the electric current on the time is derived as
𝐼(𝑡) = [44,7sin(2500𝑡 + 1,1)] µ𝐴. (25)
8. [0.5 points] The amplitude of the voltage oscillation on the capacitor is obtained from the vector
diagram as
𝑈𝐶 = 𝛿𝑈sin𝛼. (26)
Finally, taking into account the constant component of the voltage drop on the capacitor one
gets
𝑈С(𝑡) = 𝑈С + 𝛿𝑈sin𝛼sin(𝜔𝑡 −
𝜋
2
+ 𝛼) =
= [5,000 + 0,089sin(2500𝑡 − 0,464)] 𝑉. (27)
Grading scheme
№ Content points
1 Equation (1) 𝐼 = 0 0.25
0,75 Equation (2) 𝐶 = 0,10 µ𝐹 0.25
Equation (3) 𝑞 = 𝐶𝑈0 = 0.50 µ𝐶𝑙 0.25
2 Уравнение (4) 𝑡 = ∞. 0.25 0,25
3 Equation (5) 𝑈0 =
𝑞
𝐶
+ 𝐼𝑅 0.25
Equation (6) 𝐼 =
𝑑𝑞
𝑑𝑡
0.25
Equation (7) 𝑑𝑡 =
𝑅
𝑈0−
𝑞
𝐶(𝑞)
𝑑𝑞 = 𝑓(𝑞)𝑑𝑞 with the function 𝑓(𝑞) = 0.25
XII International Zhautykov Olympiad/Theoretical Competition/Solutions Page 8/8
𝑅/(𝑈0 −
𝑞
𝐶(𝑞)
) 3.0
Equation (8): it is found that 𝑓(𝑞) = 𝑎 + 𝑏𝑞 1.25
Equation (9) 𝑎 = 0.10
𝑚𝑠
µ𝐶𝑙
0.25
Equation (10) 𝑏 = 0.20
𝑚𝑠
(µ𝐶𝑙)2
0.25
Equation (11) 𝑡 = 𝑎𝑞 +
1
2
𝑏𝑞2 0.25
Numerical value in equation (11) 𝑡 = 2.0 мс 0.25
4
Equation (12) 𝑡 = (𝑞 − 𝑞0)(𝑎 +
1
2
𝑏(𝑞 + 𝑞0)) 0.25
0.5
Numerical value in equation (12) 0.25
5
Equation (14) 𝑞 =
√𝑎2+2𝑏𝑡−𝑎
𝑏
0.25
0.5
Numerical value in equation (14) 0.25
6 Equations (15), (16) or equivalent 0.25
0.5
Equation (17) 𝜑 = −
𝜋
2
0.25
7 Equation (18) 𝑈𝐶 = 5,000 В 0,25
4.0
Equation (20) 𝐼 =
𝑑𝑞
𝑑𝑡
= 𝐶(𝑈)
𝑑𝑈
𝑑𝑡
+ 𝑈
𝑑𝐶(𝑈)
𝑑𝑈
𝑑𝑈
𝑑𝑡
= 𝐶eff
𝑑𝑈
𝑑𝑡
1,5
Equation (21): correct numerical value 𝐶eff = 0.200 µ𝐹 0.25
Equation (22) 𝑋С =
1
𝜔𝐶eff
0,25
Correct vector diagram or impedances 0,5
Equation (23) 𝐼 =
𝛿𝑈
√𝑅2+
1
𝜔2𝐶eff
2
0,25
Equation (23): correct numerical value 𝐼 = 44.7 µ𝐴 0,25
Equation (24) 𝛼 = arctg(
1
𝜔𝐶eff𝑅
) 0,25
Equation (24): correct numerical value 𝛼 = 1,11 𝑟𝑎𝑑 = 63,4° 0,25
Equation (25) 𝐼(𝑡) = [44,7sin(2500𝑡 + 1,1)] µ𝐴 0,25
8 Equation (26) 𝑈𝐶 = 𝛿𝑈sin𝛼 0.25
0.5
Equation (27) 𝑈С(𝑡) = [5,000 + 0,089sin(2500𝑡 − 0,464)] 𝑉 0.25
Total 10,0
