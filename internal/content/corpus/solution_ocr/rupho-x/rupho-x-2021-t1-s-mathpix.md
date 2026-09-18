---
id: solution-ocr-rupho-x-2021-t1-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2021/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Пусть $T _ { 1 }$ и $T _ { 2 }$ - температуры горячего и холодного тел в некоторый момент времени.
В силу идеальности тепловой машины изменение энтропии системы в любой момент будет равно нулю:

$$
\Delta S = C \ln \frac { T _ { 1 } } { T _ { h } } + C \ln \frac { T _ { 2 } } { T _ { c } } = 0 \quad \Rightarrow \quad T _ { 1 } T _ { 2 } = T _ { h } T _ { c }
$$

Машина прекратит работу, когда температуры резервуаров сравняются ( $T _ { \text {end } } = T _ { 1 } = T _ { 2 }$ ).

Ответ:

$$
T _ { e n d } = \sqrt { T _ { h } T _ { c } } \approx 432 K
$$

А2 ${ } ^ { 1.00 }$ Какую работу совершит тепловая машина за время своей работы?

Так как система изолирована, работу легко найти из закона сохранения энергии:

$$
\begin{gathered}
A = W _ { 0 } - W = C \left( T _ { h } + T _ { c } \right) - C \left( T _ { 1 } + T _ { 2 } \right) \\
A _ { \text {end } } = C \left( T _ { h } + T _ { c } - 2 \sqrt { T _ { h } T _ { c } } \right)
\end{gathered}
$$

Ответ:

$$
A _ { e n d } = C \left( \sqrt { T _ { h } } - \sqrt { T _ { c } } \right) ^ { 2 } \approx 29,9 \text { кДж }
$$

А3 ${ } ^ { 1.00 }$ Через какое время развиваемая тепловой машиной мощность уменьшится вдвое?

Найдём коэффициент $k$, выразив работу как функцию от времени:

$$
\begin{aligned}
A ( \tau ) = \int _ { 0 } ^ { \tau } P ( t ) d t & = \frac { P _ { 0 } } { k } \left( 1 - e ^ { - k \tau } \right) \\
A _ { \text {end } } & = \frac { P _ { 0 } } { k } \\
\frac { P _ { 0 } } { 2 } = P _ { 0 } e ^ { - k \tau _ { 1 / 2 } } & \Rightarrow \tau _ { 1 / 2 } = \frac { \ln 2 } { k }
\end{aligned}
$$

Ответ:

$$
\tau _ { 1 / 2 } = \frac { A _ { e n d } } { P _ { 0 } } \ln 2 \approx 21,6 \text { с }
$$

A4 ${ } ^ { 1.00 }$ Через какое время КПД тепловой машины уменьшится вдвое?

Выразим из формулы для работы $A ( t )$ время $t \left( T _ { 1 } , T _ { 2 } \right)$ как функцию $T _ { 1 }$ и $T _ { 2 }$ :

$$
\begin{aligned}
t \left( T _ { 1 } , T _ { 2 } \right) & = - \frac { 1 } { k } \ln \left( 1 - \frac { A } { A _ { \text {end } } } \right) = - \frac { A _ { \text {end } } } { P _ { 0 } } \ln \left( \frac { A _ { \text {end } } - A } { A _ { \text {end } } } \right) = \\
& = - \frac { A _ { \text {end } } } { P _ { 0 } } \ln \left( \frac { C } { A _ { \text {end } } } \left( T _ { 1 } + T _ { 2 } - 2 \sqrt { T _ { h } T _ { c } } \right) \right)
\end{aligned}
$$

Температуры $T _ { 1 }$ и $T _ { 2 }$ найдём из системы и двух уравнений:

$$
\left\{ \begin{array} { l }
T _ { 1 } T _ { 2 } = T _ { h } T _ { c } \\
\eta _ { 1 / 2 } = \frac { 1 } { 2 } \left( 1 - \frac { T _ { c } } { T _ { h } } \right) = \left( 1 - \frac { T _ { 2 } } { T _ { 1 } } \right) ,
\end{array} \right.
$$

где первое уравнение выведено в $A _ { 1 }$, а второе - следует из условия данного пункта. Из второго ответа

$$
\xi ^ { 2 } \equiv \frac { T _ { 2 } } { T _ { 1 } } = \frac { 1 } { 2 } \left( 1 + \frac { T _ { c } } { T _ { h } } \right)
$$

Из чего получаем выражение для температур:


$$
\begin{gathered}
T _ { 1 } = \frac { T _ { e n d } } { \xi } = \sqrt { \frac { 2 T _ { h } T _ { c } } { 1 + \frac { T _ { c } } { T _ { h } } } } \approx 502 K \\
T _ { 2 } = T _ { e n d } \xi = \sqrt { \frac { T _ { h } T _ { c } \left( 1 + \frac { T _ { c } } { T _ { h } } \right) } { 2 } } \approx 371 K
\end{gathered}
$$

Остаётся подставить значения $T _ { 1 }$ и $T _ { 2 }$ в выражение для $t \left( T _ { 1 } , T _ { 2 } \right)$.

Ответ:

$$
t = - \frac { A _ { e n d } } { P _ { 0 } } \ln \left( \frac { C T _ { e n d } } { A _ { e n d } } \left( \sqrt { \xi } - \frac { 1 } { \sqrt { \xi } } \right) ^ { 2 } \right) \approx 56,0 \mathrm { c } ,
$$

где

$$
\xi = \sqrt { \frac { 1 } { 2 } \left( 1 + \frac { T _ { c } } { T _ { h } } \right) }
$$

A5 ${ } ^ { 1.00 }$ Через какое время разность температур между тепловыми резервуарами уменьшится вдвое?

Аналогично $A _ { 4 }$ получаем систему уравнений:

$$
\left\{ \begin{array} { l }
T _ { 1 } T _ { 2 } = T _ { h } T _ { c } \\
T _ { 1 } - T _ { 2 } = \frac { 1 } { 2 } \left( T _ { h } - T _ { c } \right)
\end{array} \right.
$$

В данном случае получается квадратное уравнение на $T _ { 1 }$ :

$$
\begin{gathered}
T _ { 1 } ^ { 2 } - \frac { \left( T _ { h } - T _ { c } \right) } { 2 } T _ { 1 } - T _ { h } T _ { c } = 0 \\
D = \frac { \left( T _ { h } - T _ { c } \right) ^ { 2 } } { 4 } + 4 T _ { h } T _ { c } \\
T _ { 1 } = \frac { 1 } { 2 } \left( \frac { \left( T _ { h } - T _ { c } \right) } { 2 } + \sqrt { D } \right) \\
T _ { 1 } + T _ { 2 } = 2 T _ { 1 } - \frac { \left( T _ { h } - T _ { c } \right) } { 2 } = \sqrt { D }
\end{gathered}
$$

Подставив $\left( T _ { 1 } + T _ { 2 } \right)$ в $t \left( T _ { 1 } , T _ { 2 } \right)$, полученное в предыдущем пункте, получаем ответ.

Ответ:

$$
t = - \frac { A _ { e n d } } { P _ { 0 } } \ln \left( \frac { C } { A _ { e n d } } \left( \sqrt { D } - 2 \sqrt { T _ { h } T _ { c } } \right) \right) \approx 41,6 \mathrm { c }
$$

где

$$
D = \frac { \left( T _ { h } - T _ { c } \right) ^ { 2 } } { 4 } + 4 T _ { h } T _ { c }
$$
