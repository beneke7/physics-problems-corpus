---
id: rupho-x-2021-t1
source: rupho-x
language: ru
solution_language: ru
translated: false
problem: rupho-x-2021-t1
solution_type: official
source_document: solution-document-rupho-x-2021-t1-s
source_pdf: cache/phoxiv/rupho-x/2021/T1_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/rupho-x/2021/T1_S.pdf."
---

T1
Th
T2
Tc
(Tend = T1 = T2)
Tend = √ThTc ≈ 432K
A2 Какую работу совершит тепловая машина за время своей работы?
Так как система изолирована, работу легко найти из закона сохранения энергии:
Ответ:
1.00
A = W0 − W = C(Th + Tc) − C(T1 + T2)
Aend = C (Th + Tc − 2√ThTc)
Aend = C(√Th − √Tc)
2
≈ 29, 9 кДж
A3 Через какое время развиваемая тепловой машиной мощность уменьшится вдвое?
Найдём коэффициент , выразив работу как функцию от времени:
Ответ:
1.00
k
A(τ) =
τ
∫
0
P (t)dt = (1 − e
−kτ
)
Aend =
= P0 e
−kτ1/2
⇒ τ1/2
=
P0
k
P0
k
P0
2
ln 2
k
τ1/2
= ln 2 ≈ 21, 6с
Aend
P0
A4 Через какое время КПД тепловой машины уменьшится вдвое?
Выразим из формулы для работы время как функцию и :
Температуры и найдём из системы и двух уравнений:
где первое уравнение выведено в , а второе следует из условия данного пункта. Из второго ответа
Из чего получаем выражение для температур:
1.00
A(t) t (T1, T2) T1 T2
t(T1, T2) = − ln (1 − ) = − ln ( ) =
= − ln ( (T1 + T2 − 2√Th
Tc))
1
k
A
Aend
Aend
P0
Aend − A
Aend
Aend
P0
C
Aend
T1 T2
{
T1
T2
= Th
Tc
η1/2
= (1 − ) = (1 − ) ,
1
2
Tc
Th
T2
T1
A1 −
ξ
2
≡ = (1 + )
T2
T1
1
2
Tc
Th
Остаётся подставить значения и в выражение для .
Ответ:
где
T1 = =



⎷
≈ 502K
T2 = Tend ξ =



⎷ ≈ 371K
Tend
ξ
2ThTc
1 +
Tc
Th
ThTc (1 + )
Tc
Th
2
T1 T2 t(T1, T2)
t = − ln
⎛
⎝
(√ξ − )
2
⎞
⎠
≈ 56, 0с,
Aend
P0
C Tend
Aend
1
√ξ
ξ = √ (1 + )
1
2
Tc
Th
A5 Через какое время разность температур между тепловыми резервуарами уменьшится вдвое?
Аналогично получаем систему уравнений:
В данном случае получается квадратное уравнение на :
Подставив в , полученное в предыдущем пункте, получаем ответ.
Ответ:
где
1.00
A4
{
T1 T2 = Th Tc
T1 − T2 = (Th − Tc)
1
2
T1
T
2
1
− T1
− Th
Tc
= 0
D = + 4ThTc
T1 = ( + √D)
T1 + T2 = 2T1 − = √D
(Th
− Tc
)
2
(Th
− Tc
)
2
4
1
2
(Th − Tc)
2
(Th − Tc)
2
(T1 + T2) t(T1, T2)
t = − ln ( (√D − 2√ThTc)) ≈ 41, 6с,
Aend
P0
C
Aend
D = + 4ThTc
(Th − Tc)
2
4
