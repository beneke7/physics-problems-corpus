---
id: solution-ocr-rupho-w-2025-t2-s
source: rupho-w
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-w/2025/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Для идеального газа имеем

$$
\begin{gathered}
\gamma = \frac { C _ { P } } { C _ { V } } \\
C _ { P } - C _ { V } = R
\end{gathered}
$$

Ответ:

$$
\begin{aligned}
C _ { V } & = \frac { R } { \gamma - 1 } \\
C _ { P } & = \frac { \gamma R } { \gamma - 1 }
\end{aligned}
$$

А2 ${ } ^ { 0.50 }$ Выразите отношения $p _ { 2 } / p _ { 1 }$ и $V _ { 2 } / V _ { 1 }$ (обозначения рис. 1) через $T , t _ { 1 }$ и $t$.

Так как процесс совершается над фиксированным количеством идеального газа, то из уравнения состояния:

$$
\frac { p _ { 1 } V _ { 1 } } { T - t } = \frac { p _ { 1 } V _ { 2 } } { T - t _ { 1 } } = \frac { p _ { 2 } V _ { 2 } } { T } = \nu R
$$

Отсюда получим:

Ответ:

$$
\begin{aligned}
& \frac { p _ { 2 } } { p _ { 1 } } = \frac { T } { T - t _ { 1 } } \\
& \frac { V _ { 2 } } { V _ { 1 } } = \frac { T - t _ { 1 } } { T - t }
\end{aligned}
$$

А3 ${ } ^ { 1.00 }$ Выразите работу $A _ { г }$ через $\nu , R , T , t _ { 1 }$ и $t$.

Работа газа за один цикл численно равна площади цикла в координатах $P V$. Используя результаты А2:

$$
A _ { \Gamma } = \left( p _ { 2 } - p _ { 1 } \right) \left( V _ { 2 } - V _ { 1 } \right) = p _ { 1 } V _ { 1 } \left( \frac { p _ { 2 } } { p _ { 1 } } - 1 \right) \left( \frac { V _ { 2 } } { V _ { 1 } } - 1 \right) = \frac { \nu R t _ { 1 } \left( t - t _ { 1 } \right) } { T - t _ { 1 } }
$$

Ответ:

$$
A _ { \Gamma } = \frac { \nu R t _ { 1 } \left( t - t _ { 1 } \right) } { T - t _ { 1 } }
$$

A4 ${ } ^ { 0.50 }$ Определите $\chi$ в момент, когда температура газа равна $T - \tau$. Ответ выразите через $\tau , T$.

Для тепловой машины, работающей по циклу Карно, известно соотношение:

$$
\frac { Q _ { - } } { Q _ { + } } = \frac { T _ { - } } { T _ { + } }
$$

В случае обратного цикла Карно $Q _ { - }$- теплота, полученная от холодильника температурой $T _ { - } , Q _ { + }$- теплота, отданная нагревателю температурой $T _ { + }$.

В данной задаче газ в исследуемом цикле холоднее окружающей среды, поэтому он является холодильником, а окружающая среда - нагревателем. Таким образом, $T _ { - } = T - \tau , T _ { + } = T$

Помимо этого, в силу первого начала термодинамики:

$$
Q _ { + } = Q _ { - } + A _ { \mathrm { XM } }
$$

Отсюда для холодильного коэффициента имеем

$$
\chi = \frac { Q _ { - } } { Q _ { + } - Q _ { - } } = \frac { T _ { - } } { T _ { + } - T _ { - } } = \frac { T - \tau } { \tau }
$$


Ответ:

$$
\chi = \frac { T - \tau } { \tau }
$$

A5 ${ } ^ { 1.50 }$ Определите $A _ { \text {XM } }$. Ответ выразите через $\nu , R , \gamma , T , t _ { 1 } n t$.

По условию изменением температуры газа за один цикл Карно можно пренебречь, поэтому для одного цикла Карно имеем:

$$
\delta A _ { \mathrm { xM } } = \frac { \delta Q _ { - } } { \chi } = \frac { \tau } { T - \tau } \delta Q _ { - }
$$

где температура газа равна $T - \tau$.
В исследуемом цикле тепло от газа отводится при изохорном и изобарном охлаждении. В случае изохорного охлаждения:

$$
\begin{gathered}
\delta Q _ { - } ^ { \prime } = \nu C _ { V } \mathrm {~d} \tau \\
\delta A _ { \text {xM } } ^ { \prime } = \nu C _ { V } \frac { \tau \mathrm {~d} \tau } { T - \tau } \\
A _ { \text {XM } } ^ { \prime } = \nu C _ { V } \int _ { 0 } ^ { t _ { 1 } } \frac { \tau \mathrm {~d} \tau } { T - \tau } = \nu C _ { V } \left( T \int _ { 0 } ^ { t _ { 1 } } \frac { \mathrm {~d} \tau } { T - \tau } - \int _ { 0 } ^ { t _ { 1 } } \mathrm {~d} \tau \right) = \nu C _ { V } \left( T \ln \left( \frac { T } { T - t _ { 1 } } \right) - t _ { 1 } \right)
\end{gathered}
$$

Для изобарного охлаждения:

$$
\begin{gathered}
\delta A _ { \mathrm { xM } } ^ { \prime \prime } = \nu C _ { P } \frac { \tau \mathrm {~d} \tau } { T - \tau } \\
A _ { \mathrm { xM } } ^ { \prime \prime } = \nu C _ { p } \int _ { t _ { 1 } } ^ { t } \frac { \tau \mathrm {~d} \tau } { T - \tau } = \nu C _ { P } \left( T \ln \left( \frac { T - t _ { 1 } } { T - t } \right) - \left( t - t _ { 1 } \right) \right)
\end{gathered}
$$

Подставив $C _ { V } , C _ { P }$ :

Ответ:

$$
A _ { \mathrm { xM } } = \frac { \nu R } { \gamma - 1 } \left( \gamma T \ln \left( \frac { T - t _ { 1 } } { T - t } \right) - \gamma \left( t - t _ { 1 } \right) + T \ln \left( \frac { T } { T - t _ { 1 } } \right) - t _ { 1 } \right)
$$

А6 ${ } ^ { 1.00 }$ Выразите $\eta$ для описанной системы через $x , \gamma$ и $y$. Вычислите его значение для $\gamma = 5 / 3 , x = 0.5 , y = 0.5$.

Ответ:

$$
\eta = \frac { x y ^ { 2 } ( 1 - x ) ( \gamma - 1 ) } { ( 1 - x y ) \left( \gamma \ln \left( \frac { 1 - x y } { 1 - y } \right) - \gamma y ( 1 - x ) + \ln \left( \frac { 1 } { 1 - x y } \right) - x y \right) } \approx 0.187
$$

А7 ${ } ^ { 1.00 }$ Найдите зависимость $\eta ( x )$ при $y \ll 1$. Ответ выразите через $\gamma$ и $x$.
При необходимости вы можете использовать формулу: $\ln ( 1 + \xi ) \approx \xi - \xi ^ { 2 } / 2$ при $\xi \ll 1$.

Разложим логарифмы в знаменателе до второго порядка:

$$
\begin{gathered}
\ln \left( \frac { 1 - x y } { 1 - y } \right) = \ln ( 1 - x y ) - \ln ( 1 - y ) \approx - x y - \frac { x ^ { 2 } y ^ { 2 } } { 2 } + y + \frac { y ^ { 2 } } { 2 } \\
\ln \left( \frac { 1 } { 1 - x y } \right) = - \ln ( 1 - x y ) \approx x y + \frac { x ^ { 2 } y ^ { 2 } } { 2 }
\end{gathered}
$$

Приводя подобные и сокращая на $y ^ { 2 }$ :

$$
\eta \approx \frac { 2 x ( 1 - x ) ( \gamma - 1 ) } { ( 1 - x y ) \left( \gamma - x ^ { 2 } ( \gamma - 1 ) \right) }
$$

Слагаемое $x y$ в знаменателе можно отбросить в силу $y \ll 1$


Ответ:

$$
\eta ( x ) = \frac { 2 x ( 1 - x ) ( \gamma - 1 ) } { \gamma - x ^ { 2 } ( \gamma - 1 ) }
$$

А8 ${ } ^ { 1.00 }$ Определите, при каком $x$ эффективность $\eta$ будет максимальна. Ответ выразите через $\gamma$.

Приравнивая производную к нулю, получаем:

$$
( 1 - 2 x ) \left( \gamma - x ^ { 2 } ( \gamma - 1 ) \right) = 2 x ^ { 2 } ( 1 - x ) ( 1 - \gamma )
$$

Приводя подобные:

$$
x ^ { 2 } ( \gamma - 1 ) - 2 \gamma x + \gamma = 0
$$

Корень со знаком «+» приводит к $x > 1$, что соответствует отрицательной температуре газа. Поэтому:

Ответ:

$$
x = \frac { \gamma - \sqrt { \gamma } } { \gamma - 1 } \approx 0.56
$$

А9 ${ } ^ { 1.00 }$ Найдите максимально возможную эффективность $\eta _ { \max }$. Ответ выразите через $\gamma$. Вычислите ее значение для $\gamma = 5 / 3$.

Подставив найденный в пункте А8 $x$ и приводя подобные:

Ответ:

$$
\eta _ { \max } = 1 - \frac { 1 } { \sqrt { \gamma } } \approx 0.225
$$
