---
id: solution-ocr-rupho-x-2018-t7-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2018/T7_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Пусть лопасть повёрнута относительно вектора скорости $\vec { v }$ центра бумеранга на угол $\varphi$ в направлении против часовой стрелки, а $x$ - расстояние от центра бумеранга до точки $P$ лопасти. Тогда для перпендикулярной краю лопасти компоненты скорости точки $P$ имеем:

$$
v _ { \perp P } = \omega x - v \sin \varphi .
$$

Для силы $d F _ { л }$, действующей на элемент лопасти длиной $d x$, имеем:

$$
d F _ { л } = \gamma v _ { \perp P } ^ { 2 } \Delta A = \gamma v _ { \perp P } ^ { 2 } a d x = \gamma ( \omega x - v \sin \varphi ) ^ { 2 } a d x .
$$

Проинтегрируем полученное выражение:

$$
F _ { л } = \gamma a \int _ { 0 } ^ { R } \left( \omega ^ { 2 } x ^ { 2 } - 2 \omega v \sin \varphi x + v ^ { 2 } \sin ^ { 2 } \varphi \right) d x = \gamma a \left( \frac { \omega ^ { 2 } R ^ { 3 } } { 3 } - \omega v \sin \varphi R ^ { 2 } + v ^ { 2 } \sin ^ { 2 } \varphi R \right) .
$$

Поскольку угловая скорость является постоянной - усреднение по времени эквивалентно усреднению по углу $\varphi$ :

$$
\left\langle F _ { \pi } \right\rangle = \gamma a \left( \frac { \omega ^ { 2 } R ^ { 3 } } { 3 } - \omega v R ^ { 2 } \langle \sin \varphi \rangle + v ^ { 2 } R \left\langle \sin ^ { 2 } \varphi \right\rangle \right) .
$$

Проведём соответствующие усреднения:

$$
\begin{gathered}
\langle \sin \varphi \rangle = \frac { 1 } { 2 \pi } \int _ { 0 } ^ { 2 \pi } \sin \varphi d \varphi = 0 \\
\left\langle \sin ^ { 2 } \varphi \right\rangle = \frac { 1 } { 2 \pi } \int _ { 0 } ^ { 2 \pi } \sin ^ { 2 } \varphi d \varphi = \frac { 1 } { 2 \pi } \int _ { 0 } ^ { 2 \pi } \frac { 1 - \cos 2 \varphi } { 2 } d \varphi = \frac { 1 } { 2 }
\end{gathered}
$$

Таким образом:

$$
\left\langle F _ { л } \right\rangle = \gamma a R \left( \frac { \omega ^ { 2 } R ^ { 2 } } { 3 } + \frac { v ^ { 2 } } { 2 } \right) .
$$

Поскольку лопастей четыре и для каждой из них среднее значение силы одинаково:

$$
\langle F \rangle = 4 \left\langle F _ { л } \right\rangle .
$$

Таким образом:

Ответ:

$$
\langle F \rangle = \gamma a R \left( 2 v ^ { 2 } + \frac { 4 \omega ^ { 2 } R ^ { 2 } } { 3 } \right) .
$$

А2 ${ } ^ { 2.50 }$ Найдите суммарный момент гидродинамических сил $\langle \vec { \tau } \rangle$, действующих на бумеранг, относительно его центра. Момент нужно усреднить по времени за один оборот. Выразите ответ через $v , \omega , R , a$ и $\gamma$. Укажите, как направлен усреднённый момент относительно направления вектора скорости его центра.

Пусть $\vec { e } _ { r }$ и $\vec { e } _ { \varphi }$ - единичные векторы цилиндрической системы координат с началом в центре бумеранга. Тогда для элемента момента силы $d \vec { \tau }$ относительно центра бумеранга имеем:

$$
d \vec { \tau } _ { л } = \left[ \vec { r } \times d \vec { F } _ { л } \right] = \left[ \vec { e } _ { z } \times \vec { e } _ { r } \right] x d F _ { л } = \vec { e } _ { \varphi } x d F _ { л } = \vec { e } _ { \varphi } \gamma ( \omega x - v \sin \varphi ) ^ { 2 } a d x \cdot x .
$$

Проинтегрируем полученное выражение:

$$
\vec { \tau } _ { \pi } = \vec { e } _ { \varphi } \gamma a \int _ { 0 } ^ { R } \left( \omega ^ { 2 } x ^ { 2 } - 2 \omega v \sin \varphi x + v ^ { 2 } \sin ^ { 2 } \varphi \right) x d x = \vec { e } _ { \varphi } \gamma a R ^ { 2 } \left( \frac { \omega ^ { 2 } R ^ { 2 } } { 4 } - \frac { 2 \omega R v \sin \varphi } { 3 } + \frac { v ^ { 2 } \sin ^ { 2 } \varphi } { 2 } \right) .
$$

Теперь введём систему координат $x y$ таким образом, что ось $x$ направлена вдоль направления $\varphi = 0$, а ось $y$ - вдоль направления $\varphi = \pi / 2$. Тогда имеем:

$$
\tau _ { л x } = - \tau _ { \text {Л } } \sin \varphi \quad \tau _ { \text {лу } } = \tau _ { \text {л } } \cos \varphi .
$$

Проведём усреднения по времени.

$$
\left\langle \tau _ { \pi x } \right\rangle = - \frac { \gamma a R ^ { 2 } } { 2 \pi } \int _ { 0 } ^ { 2 \pi } \left( \frac { \omega ^ { 2 } R ^ { 2 } } { 4 } - \frac { 2 \omega R v \sin \varphi } { 3 } + \frac { v ^ { 2 } \sin ^ { 2 } \varphi } { 2 } \right) \sin \varphi d \varphi .
$$

Интегралы от тригонометрических функций в нечётных степенях обращаются в ноль, поскольку эти функции являются нечётными, интеграл от $\sin ^ { 2 } \varphi$ за период был вычислен в предыдущем пункте и равен $\pi$.
Таким образом:

$$
\left\langle \tau _ { \pi x } \right\rangle = \frac { \gamma a \omega v R ^ { 3 } } { 3 } .
$$


$$
\left\langle \tau _ { \pi y } \right\rangle = \frac { \gamma a R ^ { 2 } } { 2 \pi } \int _ { 0 } ^ { 2 \pi } \left( \frac { \omega ^ { 2 } R ^ { 2 } } { 4 } - \frac { 2 \omega R v \sin \varphi } { 3 } + \frac { v ^ { 2 } \sin ^ { 2 } \varphi } { 2 } \right) \cos \varphi d \varphi .
$$

Поскольку $\cos \varphi d \varphi = d \sin \varphi = d t$, данное выражение можно переписать следующим образом:

$$
\left\langle \tau _ { \text {лу } } \right\rangle = \frac { \gamma a R ^ { 2 } } { 2 \pi } \int _ { 0 } ^ { 0 } \left( \frac { \omega ^ { 2 } R ^ { 2 } } { 4 } - \frac { 2 \omega R v t } { 3 } + \frac { v ^ { 2 } \sin ^ { 2 } t ^ { 2 } } { 2 } \right) d t = 0
$$

Обратим внимание, что вектор $\vec { e } _ { x }$ направлен вдоль вектора скорости $\vec { v }$, поэтому:

$$
\left\langle \vec { \tau } _ { л } \right\rangle = \frac { \gamma a \omega R ^ { 3 } \vec { v } } { 3 } .
$$

Средний момент сил, действующий на одну лопасть, одинаков для каждой из них, и, поскольку их 4 :

$$
\langle \vec { \tau } \rangle = 4 \left\langle \vec { \tau } _ { л } \right\rangle .
$$

Таким образом:

Ответ:

$$
\langle \vec { \tau } \rangle = \frac { 4 \gamma a \omega R ^ { 3 } \vec { v } } { 3 } .
$$

А3 ${ } ^ { 3.00 }$ Чему должно быть равно отношение $v / ( \omega R )$ в момент броска бумеранга, чтобы в течение последующего движения центр бумеранга двигался по горизонтальной круговой траектории?
Считайте, что период вращения бумеранга $2 \pi / \omega$ много меньше периода кругового движения центра масс. Это позволяет использовать найденные ранее усреднённые по периоду величины $\langle F \rangle$ и $\langle \vec { \tau } \rangle$.

Сила $\vec { F }$, действующая на бумеранг, направлена перпендикулярно его плоскости, поэтому при движении по круговой траектории модуль скорости бумеранга остаётся постоянным. Значит, постоянной остаётся и угловая скорость $\vec { \Omega }$ перемещения центра бумеранга по круговой траектории.
Важно отметить, что поскольку сила всегда направлена перпендикулярна плоскости бумеранга, его плоскость также должна вращаться с постоянной угловой скоростью $\vec { \Omega }$. Определим модуль угловой скорости $\Omega$ :

$$
M \langle \dot { \vec { v } } \rangle = \langle \vec { F } \rangle \Rightarrow M \Omega v = \langle F \rangle = \gamma a R \left( 2 v ^ { 2 } + \frac { 4 \omega ^ { 2 } R ^ { 2 } } { 3 } \right) \Rightarrow \Omega = \frac { \gamma a R } { M v } \left( 2 v ^ { 2 } + \frac { 4 \omega ^ { 2 } R ^ { 2 } } { 3 } \right) .
$$

Поскольку средний момент сил $\langle \vec { \tau } \rangle$ направлен вдоль скорости центра бумеранга, а угловая скорость вращения плоскости бумеранга должна оставаться постоянной и равной $\vec { \Omega }$ - момент сил $\vec { \tau }$ перпендикулярен моменту импульса $\vec { L }$ бумеранга относительно его центра, который вращается под действием данного момента сил с той же угловой скоростью $\vec { \Omega }$.
Таким образом, закон изменения момента импульса относительно центра бумеранга выглядит следующим образом:

$$
\langle \vec { \tau } \rangle = \langle \dot { \vec { L } } \rangle = [ \vec { \Omega } \times \vec { L } ] = \Omega L _ { z } \vec { e } _ { v } = I _ { z } \omega \Omega \vec { e } _ { v } ,
$$

или же:

$$
\Omega = \frac { \langle \tau \rangle } { I _ { z } \omega } .
$$

Момент инерции бумеранга относительно оси $z$ равен $I _ { z } = M R ^ { 2 } / 3$, поскольку бумеранг образован четырьмя стержнями длиной $R$ с общей точкой в центре бумеранга, откуда:

$$
\Omega = \frac { 4 \gamma a v R } { M } .
$$

Приравнивая выражения для $\Omega$, получим:

$$
4 v ^ { 2 } = 2 v ^ { 2 } + \frac { 4 \omega ^ { 2 } R ^ { 2 } } { 3 } ,
$$

откуда:

Ответ:

$$
\frac { v } { \omega R } = \sqrt { \frac { 2 } { 3 } } .
$$


$$
r = \frac { v } { \Omega }
$$

Используя выражение для $\Omega$, полученное из уравнения динамики вращательного движения, находим:

Ответ:

$$
r = \frac { M } { 4 \gamma a R } .
$$

A5 ${ } ^ { \mathbf { 0 . 5 0 } }$ Предположим, что мы сделали два похожих бумеранга из одинакового материала, таких, что каждый размер одного из них в два раза меньше соответствующего размера второго. Чему равно отношение радиусов $r _ { 2 } / r _ { 1 }$ их круговых траекторий?

Для отношения радиусов $r _ { 2 } / r _ { 1 }$ имеем:

$$
\frac { r _ { 2 } } { r _ { 1 } } = \frac { M _ { 2 } } { M _ { 1 } } \frac { a _ { 1 } R _ { 1 } } { a _ { 2 } R _ { 2 } } .
$$

Поскольку $M \sim R ^ { 3 }$ и $a \sim R$, имеем:

$$
\frac { r _ { 2 } } { r _ { 1 } } = \frac { R _ { 2 } } { R _ { 1 } } ,
$$

или же

Ответ:

$$
\frac { r _ { 2 } } { r _ { 1 } } = \frac { 1 } { 2 }
$$
