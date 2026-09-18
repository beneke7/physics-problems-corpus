---
id: solution-ocr-rupho-x-2026-t1-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2026/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
При фиксированной ориентации оси вращения относительно гантели для минимизации момента инерции можно использовать теорему Гюйгенса-Штейнера: для оси вращения, проходящей через произвольную точку P , момент инерции $J _ { \mathrm { P } }$ связан с моментом инерции $J _ { \mathrm { O } }$, где O - центр масс системы, как

$$
J _ { \mathrm { P } } = J _ { \mathrm { O } } + M \cdot \mathrm { OP } ^ { 2 } .
$$

Таким образом, в случае минимального $J _ { \mathrm { P } }$ верно $\mathrm { P } = \mathrm { O }$.
Для вычисления расстояния от края $m _ { 2 }$ используем определение центра масс:

Ответ:

$$
x _ { 2 } = \frac { m _ { 1 } } { m _ { 1 } + m _ { 2 } } l .
$$

А2 ${ } ^ { 0.20 }$ Найдите момент инерции $J$.

Найдём расстояние $x _ { 1 }$ от тяжелого конца гантели до её центра масс:

$$
x _ { 1 } = \frac { m _ { 2 } } { m _ { 1 } + m _ { 2 } } l .
$$

Воспользуемся определением момента инерции:

Ответ:

$$
J _ { \mathrm { O } } = m _ { 1 } x _ { 1 } ^ { 2 } + m _ { 2 } x _ { 2 } ^ { 2 } = \frac { m _ { 1 } m _ { 2 } } { m _ { 1 } + m _ { 2 } } l ^ { 2 }
$$

Далее для удобства введём приведённую массу $\mu = \frac { m _ { 1 } m _ { 2 } } { m _ { 1 } + m _ { 2 } }$. Тогда

$$
J _ { \mathrm { O } } = \mu l ^ { 2 } .
$$

А3 ${ } ^ { 0.30 }$ Вычислите угловое ускорение $\varepsilon$ гантели в момент времени $t = 0$.

В случае неподвижной оси вращения можно записать уравнение вращательного движения в виде

$$
J \vec { \varepsilon } = \sum _ { i } \vec { M } _ { i } .
$$

В случае плоского движения направления момента сил и углового ускорения очевидны, так что далее перепишем уравнение в скалярном виде.
Согласно условию, внешний вынуждающий момент постоянен и равен $M _ { \text {outer } } = F \cdot x _ { 1 }$, а при нулевой угловой скорости сила трения отсутствует. Подставляя выражение для $x _ { 1 }$, имеем

Ответ:

$$
\varepsilon = \frac { m _ { 2 } } { m _ { 1 } + m _ { 2 } } \frac { F l } { \mu l ^ { 2 } } = \frac { F } { m _ { 1 } l } .
$$

A4 ${ } ^ { 0.60 }$ Вычислите установившуюся угловую скорость $\omega _ { \lim }$ вращения гантели спустя длительное время.

Момент силы трения $M _ { \text {fric } }$ возникает из-за линейных скоростей $v _ { 1 } , v _ { 2 }$ двух точечных концов стержня:

$$
v _ { 1 } = \omega x _ { 1 } ; v _ { 2 } = \omega x _ { 2 } \Rightarrow f _ { 1 } = - \gamma \omega x _ { 1 } ; f _ { 2 } = - \gamma \omega x _ { 2 } .
$$

Очевидно, что момент направлен против вынуждающего постоянного момента. Запишем его:

$$
M _ { \text {fric } } = f _ { 1 } x _ { 1 } + f _ { 2 } x _ { 2 } = - \gamma \left( x _ { 1 } ^ { 2 } + x _ { 2 } ^ { 2 } \right) \omega .
$$

Теперь мы можем записать уравнение вращательного движения в произвольный момент времени:

$$
\mu l ^ { 2 } \varepsilon = \mu l ^ { 2 } \frac { \mathrm {~d} \omega } { \mathrm {~d} t } = F x _ { 1 } - \gamma \left( x _ { 1 } ^ { 2 } + x _ { 2 } ^ { 2 } \right) \omega \Leftrightarrow \mu l ^ { 2 } \frac { \mathrm {~d} \omega } { \mathrm {~d} t } + \gamma \left( x _ { 1 } ^ { 2 } + x _ { 2 } ^ { 2 } \right) \omega = F x _ { 1 } .
$$

Решение этого уравнения даётся следующей формулой:

$$
\omega ( t ) = \frac { F x _ { 1 } } { \gamma \left( x _ { 1 } ^ { 2 } + x _ { 2 } ^ { 2 } \right) } \left( 1 - e ^ { - \frac { \gamma \left( x _ { 1 } ^ { 2 } + x _ { 2 } ^ { 2 } \right) } { \mu l ^ { 2 } } t } \right) = \frac { F } { \gamma } \frac { m _ { 2 } \left( m _ { 1 } + m _ { 2 } \right) } { \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) l } \left( 1 - e ^ { - \frac { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } { \left( m _ { 1 } + m _ { 2 } \right) m _ { 1 } m _ { 2 } } t } \right) .
$$

Далее найдём $\omega _ { \lim }$ как предел $\omega ( t )$ при $t \rightarrow \infty$, либо из дифференциального уравнения с условием $\dot { \omega } = 0$.


Ответ:

$$
\omega _ { \lim } = \lim _ { t \rightarrow \infty } \omega ( t ) = \frac { m _ { 2 } \left( m _ { 1 } + m _ { 2 } \right) } { m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } } \frac { F } { \gamma l } .
$$

A5 ${ } ^ { 0.50 }$ Найдите момент времени $\tau$, в который угловая скорость равна $\omega _ { \text {lim } } / 2$.

Согласно явной формуле $\omega ( t )$, полученной при решении предыдущего пункта, мы имеем ответ для характерного времени $\tau$ (того времени, за которое экспонента значительно изменит своё значение).

Ответ:

$$
\tau = \frac { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } } { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } \ln ( 2 ) .
$$

В1 ${ } ^ { 0.20 }$ Вычислите угловое ускорение $\varepsilon$ гантели в момент времени $t = 0$.

Уравнение вращательного движения системы с массой $m$ для оси, движущейся поступательно, выглядит как

$$
J \vec { \varepsilon } = \vec { M } _ { \mathrm { outer } } + m \left[ \vec { v } _ { c } , \vec { v } _ { \mathrm { P } } \right]
$$

где $\vec { v } _ { \mathrm { P } }$ - (поступательная) скорость оси, а $\vec { v } _ { c }$ - скорость центра масс. Таким образом, для движущейся оси, совпадающей с центром масс, уравнение движения так же принимает вид

$$
J \vec { \varepsilon } = \vec { M } _ { \text {outer } }
$$

а ответ для углового ускорения предыдущей части задачи остаётся справедливым.

Ответ:

$$
\varepsilon = \frac { F } { m _ { 1 } l } .
$$

В2 ${ } ^ { 0.20 }$ Какое время $T _ { n }$ займёт $n$-ый оборот гантели?

В этой части задачи трение отсутствует, так что внешний момент всегда равен вынуждающему, поэтому он постоянен. Вращение гантели происходит равноускоренно из положения с нулевой начальной угловой скоростью. Зависимость $\omega ( t )$ даётся равенством

$$
\omega ( t ) = \varepsilon t ,
$$

а угол поворота от начального положения, естественно,

$$
\varphi = \frac { \varepsilon t ^ { 2 } } { 2 } .
$$

Гантель совершит $n$ полных оборотов за время $t _ { n }$ такое, что

$$
2 \pi n = \frac { \varepsilon t _ { n } ^ { 2 } } { 2 } \Rightarrow t _ { n } = 2 \sqrt { \frac { \pi n } { \varepsilon } } .
$$

Ясно тогда, что время $n$-ого оборота может быть получено равенством

$$
T _ { n } = t _ { n } - t _ { n - 1 }
$$

Ответ:

$$
T _ { n } = 2 \sqrt { \frac { \pi m _ { 1 } l } { F } } ( \sqrt { n } - \sqrt { n - 1 } ) = 2 \sqrt { \frac { \pi m _ { 1 } l } { F } } \frac { 1 } { \sqrt { n } + \sqrt { n - 1 } } \approx \sqrt { \frac { \pi } { n } \frac { m _ { 1 } l } { F } } .
$$

Вз ${ } ^ { 1.00 }$ Спустя длительное время скорость центра масс гантели устанавливается практически постоянной. Найдите вектор $\vec { u }$ установившейся скорости центра масс. В ответ запишите $x$ - и $y$-компоненты скорости $\vec { u }$.

Ясно, что


$$
u _ { x } = \int _ { 0 } ^ { \infty } \dot { v } _ { x } \mathrm {~d} t = \frac { F } { m } \int _ { 0 } ^ { \infty } - \sin \left( \frac { \varepsilon t ^ { 2 } } { 2 } \right) \mathrm { d } t = - \frac { F } { m } \sqrt { \frac { 2 } { \varepsilon } } \int _ { 0 } ^ { \infty } \sin \left( \xi ^ { 2 } \right) \mathrm { d } \xi = - \frac { F } { m } \sqrt { \frac { 2 } { \varepsilon } } \sqrt { \frac { \pi } { 8 } }
$$

То есть

$$
u _ { x } = - \frac { F } { 2 m } \sqrt { \frac { \pi } { \varepsilon } } .
$$

Аналогично,

$$
u _ { y } = \frac { F } { 2 m } \sqrt { \frac { \pi } { \varepsilon } } .
$$

Ответ:

$$
\vec { u } = \frac { \sqrt { \pi m _ { 1 } F l } } { 2 \left( m _ { 1 } + m _ { 2 } \right) } \binom { - 1 } { 1 } .
$$

С1 ${ } ^ { 1.50 }$ Определите итоговый вектор перемещения $\vec { s }$ центра масс гантели после её остановки. Ответ должен быть представлен в виде компонент в изображённой на данном рисунке системе координат.

Начнём отсчёт угла отклонения $\varphi$ от вертикали в сторону минимального возмущения гантели.
Запишем теорему о движении центра масс в координатном виде:

$$
\left\{ \begin{array} { l }
m \dot { v } _ { x } = - 2 \gamma \dot { x } + 2 \gamma \Delta \cos ( \varphi ) \omega ; \\
m \dot { v } _ { y } = - 2 \gamma \dot { y } - 2 \gamma \Delta \sin ( \varphi ) \omega .
\end{array} \right.
$$

А теперь заметим, что в данной системе можно избавиться от производной по времени и связать изменения скоростей, координат и угла поворота:

$$
\left\{ \begin{array} { l }
{ \frac { m } { \gamma } \mathrm { d } v _ { x } = - 2 \mathrm { d } x + 2 \Delta \operatorname { c o s } ( \varphi ) \mathrm { d } \varphi ; } \\
{ \frac { m } { \gamma } \mathrm { d } v _ { y } = - 2 \mathrm { d } y - 2 \Delta \operatorname { s i n } ( \varphi ) \mathrm { d } \varphi . }
\end{array} \Rightarrow \left\{ \begin{array} { l }
\frac { m } { \gamma } \left( v _ { x } - v _ { x _ { 0 } } \right) = - 2 \left( x - x _ { 0 } \right) + 2 \Delta \left( \sin ( \varphi ) - \sin \left( \varphi _ { 0 } \right) \right) ; \\
\frac { m } { \gamma } \left( v _ { y } - v _ { y _ { 0 } } \right) = - 2 \left( y - y _ { 0 } \right) + 2 \Delta \left( \cos ( \varphi ) - \cos \left( \varphi _ { 0 } \right) \right) .
\end{array} \right. \right.
$$

Учтём начальные условия для для нашего движения:

$$
\left\{ \begin{array} { l }
v _ { x _ { 0 } } = 0 ; \\
v _ { y _ { 0 } } = 0 ; \\
x _ { 0 } = 0 ; \\
y _ { 0 } = 0 ; \\
\varphi _ { 0 } = 0 ;
\end{array} \right.
$$

и <<конечные условия>>:

$$
\left\{ \begin{array} { l }
\varphi = \pi ; \\
v _ { x } = 0 ; \\
v _ { y } = 0 .
\end{array} \right.
$$

Подставляя их в систему, имеем

$$
\left\{ \begin{array} { l }
0 = - 2 x + 0 ; \\
0 = - 2 y + 2 \Delta ( - 1 - 1 ) .
\end{array} \right.
$$

Отсюда

Ответ:

$$
\vec { s } = \binom { 0 } { - 2 \Delta }
$$

Воспользуемся законом сохранения энергии и свяжем работу потенциальных сил (сила тяжести и сила Архимеда) и рассеянную энергию $Q$ :

$$
\left( m _ { 1 } + m _ { 2 } \right) g \cdot 2 \Delta + F _ { a } \cdot 0 = Q .
$$


Ответ:

$$
Q = \left( m _ { 1 } - m _ { 2 } \right) g l .
$$

D1 ${ } ^ { 0.60 }$ В произвольный момент времени запишите полный момент $\vec { M } _ { \text {out } }$ внешних сил относительно центра масс гантели. Выразите его через скорость центра масс $\vec { v }$, угловую скорость $\vec { \omega } , \vec { \Delta } , \vec { g }$ и параметры системы.

Запишем полный момент сил $\vec { M } _ { \text {out } }$ для гантели относительно её центра масс:

$$
\vec { M } _ { \text {out } } = - \gamma \cdot \left[ \left( \vec { r } _ { 1 } + \vec { r } _ { 2 } \right) \times \vec { v } \right] + \left[ \vec { \Delta } \times \vec { F } _ { a } \right] - \gamma \cdot \left[ \vec { r } _ { 1 } \times \left[ \vec { \omega } \times \vec { r } _ { 1 } \right] \right] - \gamma \cdot \left[ \overrightarrow { r _ { 2 } } \times \left[ \vec { \omega } \times \overrightarrow { r _ { 2 } } \right] \right]
$$

Получим ответ, преобразовав векторные произведения с учётом $\overrightarrow { r _ { 1 } } + \overrightarrow { r _ { 2 } } = 2 \vec { \Delta }$ :

$$
\vec { M } _ { \mathrm { out } } = - 2 \gamma \cdot [ \vec { \Delta } \times \vec { v } ] + \left[ \vec { \Delta } \times \vec { F } _ { a } \right] - \gamma \cdot \vec { \omega } \cdot \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) .
$$

Ответ:

$$
\vec { M } _ { \mathrm { out } } = - 2 \gamma \cdot [ \vec { \Delta } \times \vec { v } ] + \left[ \vec { \Delta } \times \vec { F } _ { a } \right] - \gamma \cdot \vec { \omega } \cdot \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) .
$$

D2 ${ } ^ { 0.20 }$ Покажите, что при условиях малости затухания и $\varphi _ { 0 } \ll 1$ в записи уравнения вращательного движения можно пренебречь моментом, вызванным поступательным движением центра масс.

Запишем теорему о движении центра масс для гантели:

$$
\left( m _ { 1 } + m _ { 2 } \right) \cdot \dot { \vec { v } } = - 2 \gamma \vec { v } - 2 \gamma \cdot [ \vec { \omega } \times \vec { \Delta } ] .
$$

Проинтегрируем его по времени:

$$
\left( m _ { 1 } + m _ { 2 } \right) \vec { v } = - 2 \gamma \vec { S } - 2 \gamma \cdot \int _ { 0 } ^ { t } [ \vec { \omega } \times \vec { \Delta } ] d t
$$

Первое слагаемое в теореме о движении центра масс всегда направлено против $\vec { v }$, поэтому оценим значение $v$ сверху:

$$
v < \frac { 2 \gamma } { m _ { 1 } + m _ { 2 } } \cdot \Delta \varphi ,
$$

Откуда в силу малости затухания, первое слагаемое в записанном выше полном моменте сил, оказывается порядка $\gamma ^ { 2 }$, а третье - порядка $\gamma \Rightarrow$ моментом, вызванном поступательным движением центра масс, можно пренебречь.

D3 ${ } ^ { \mathbf { 0 . 5 0 } }$ Запишите уравнение вращательного движения. С учётом малости затухания и условия $\varphi _ { 0 } \ll 1$ и получите уравнение затухающих колебаний угла, образованного гантелью с вертикалью:

$$
\ddot { \varphi } + A \dot { \varphi } + B \varphi = 0 .
$$

Определите коэффициенты $A$ и $B$.

Из результатов пунктов $D 1$ и $D 2$ запишем уравнение вращательного движения для гантели относительно её центра масс:

$$
I \vec { \varepsilon } = \left[ \vec { \Delta } \times \vec { F } _ { a } \right] - \gamma \cdot \vec { \omega } \cdot \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right)
$$

Подставим в данное уравнение геометрические параметры из части $A , \varepsilon = \ddot { \varphi } , \omega = \dot { \varphi }$ и спроецируем его на ось, перпендикулярную плоскости рисунка:

$$
\ddot { \varphi } + \frac { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } } \dot { \varphi } + \frac { \Delta \left( m _ { 1 } + m _ { 2 } \right) ^ { 2 } g } { m _ { 1 } m _ { 2 } l ^ { 2 } } \varphi = 0
$$

Получаем итоговый ответ:

$$
\begin{gathered}
A = \frac { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } } \\
B = \frac { \Delta \left( m _ { 1 } + m _ { 2 } \right) ^ { 2 } g } { m _ { 1 } m _ { 2 } l ^ { 2 } }
\end{gathered}
$$

Ответ:

$$
A = \frac { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } }
$$


$$
B = \frac { \Delta \left( m _ { 1 } + m _ { 2 } \right) ^ { 2 } g } { m _ { 1 } m _ { 2 } l ^ { 2 } } .
$$

D4 ${ } ^ { 0.20 }$ Определите период $T$ колебаний гантели.

В предыдущем пункте мы получили уравнение затухающих колебаний, для него период вычисляется по формуле:

$$
T = \frac { 2 \pi } { \sqrt { B - A ^ { 2 } / 4 } } = \frac { 2 \pi } { \sqrt { \frac { \Delta \left( m _ { 1 } + m _ { 2 } \right) ^ { 2 } g } { m _ { 1 } m _ { 2 } l ^ { 2 } } - \frac { 1 } { 4 } \cdot \left( \frac { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } } \right) ^ { 2 } } } .
$$

Ответ:

$$
T = \frac { 2 \pi } { \sqrt { \frac { \Delta \left( m _ { 1 } + m _ { 2 } \right) ^ { 2 } g } { m _ { 1 } m _ { 2 } l ^ { 2 } } - \frac { 1 } { 4 } \cdot \left( \frac { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } } \right) ^ { 2 } } }
$$

D5 ${ } ^ { 0.20 }$ Оцените характерное время $\tau$ затухания колебаний гантели.

Характерное время затухания колебаний порядка $\tau = \frac { 1 } { A }$ :

$$
\tau = \frac { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } } { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } .
$$

Ответ:

$$
\tau = \frac { \left( m _ { 1 } + m _ { 2 } \right) \cdot m _ { 1 } m _ { 2 } } { \gamma \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) } \text {. }
$$

D6 ${ } ^ { 0.20 }$ Определите добротность Q такой колебательной системы.

Добротность $Q$ данной системы найдём по известному соотношению:

$$
Q = \frac { \sqrt { B } } { A } = \sqrt { \frac { \Delta g } { m _ { 1 } m _ { 2 } l ^ { 2 } } } \frac { \left( m _ { 1 } + m _ { 2 } \right) ^ { 2 } m _ { 1 } m _ { 2 } } { \gamma \cdot \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) }
$$

Ответ:

$$
Q = \sqrt { \frac { \Delta g } { m _ { 1 } m _ { 2 } l ^ { 2 } } } \frac { \left( m _ { 1 } + m _ { 2 } \right) ^ { 2 } m _ { 1 } m _ { 2 } } { \gamma \cdot \left( m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } \right) }
$$

E1 ${ } ^ { 0.10 }$ Вычислите момент инерции $I$ стержня гантели относительно его оси.

Как известно, момент инерции однородного сплошного цилиндра относительно его оси симметрии равен

$$
I = m R ^ { 2 } / 2 .
$$

E2 ${ } ^ { 0.20 }$ Запишите закон изменения момента импульса гантели относительно точки её крепления.

Производная момента импульса твёрдого тела по времени выражается через полный момент внешних сил:

$$
\dot { \vec { L } } = \vec { M } _ { \mathrm { out } } .
$$

Ез ${ } ^ { 0.50 }$ Вычислите угловую скорость $\vec { \Omega }$ регулярной прецессии гантели.


$$
\vec { L } = I \vec { \omega } ;
$$

и в данном случае

$$
\dot { \vec { L } } = I \dot { \vec { \omega } } .
$$

Заметим, что момент силы тяжести равен $\vec { M } _ { \text {out } } = \frac { m } { 2 } [ \vec { l } , \vec { g } ]$ и всегда направлен перпендикулярно $\vec { \omega }$ в горизонтальной плоскотси. Таким образом он вызывает вращение вектора $\vec { \omega }$ вокруг вертикали.

Изменение момента импульса за промежуток времени $\Delta t$ :

$$
| \Delta \vec { L } | = L \sin ( \theta ) \Delta \varphi = M _ { \mathrm { out } } \Delta t .
$$

Отсюда получаем

$$
\Omega = \frac { M _ { \mathrm { out } } } { L \sin ( \theta ) } = \frac { m g l } { 2 L } .
$$

Ответ:

$$
\Omega = \frac { g l } { \omega R ^ { 2 } } = \frac { m g l } { 2 I \omega } .
$$

F1 ${ } ^ { 0.30 }$ Вычислите зависимость модуля момента импульса гантели от времени.

Заметим, что на изменение модуля момента импульса гантели влияет только момент $\vec { M } _ { \text {fric } }$, так как все остальные моменты внешних сил направлены всегда перпендикулярно $\vec { L }$.

$$
\dot { L } = - \alpha \omega = - \frac { \alpha } { I } L \Rightarrow L = L _ { 0 } e ^ { - \frac { \alpha } { I } t } .
$$

Ответ:

$$
L = L _ { 0 } e ^ { - \frac { \alpha } { I } t } .
$$

F2 ${ } ^ { 0.60 }$ Получите дифференциальное уравнение, описывающее изменение угла гантели с вертикалью с течением времени.

Заметим, что момент, вызванный силой вязкого трения на конец $m _ { 2 }$ направлен перпендикулярно гантели вниз и вызывает опускание её оси. То есть он обуславливает увеличение угла $\theta$.

Вычислим этот момент:

$$
M _ { 2 } = l \cdot \gamma \Omega l \sin ( \theta ) .
$$

Свяжем поворот момента импульса гантели с моментом $M _ { 2 }$ :

$$
L \Delta \theta = M _ { 2 } \Delta t = \gamma \Omega l ^ { 2 } \sin ( \theta ) \Delta t .
$$

Остаётся подставить сюда выражение для $\Omega$ :

$$
\dot { \theta } = \frac { \gamma l ^ { 2 } } { L } \frac { m g l } { 2 L } = \frac { \gamma m g l ^ { 3 } } { 2 L ^ { 2 } } .
$$

Ответ:

$$
\frac { \dot { \theta } } { \sin ( \theta ) } = \frac { \gamma m g l ^ { 3 } } { 2 L _ { 0 } ^ { 2 } } e ^ { \frac { 2 \alpha } { I } t } .
$$


Ответ:

$$
\dot { \theta } = \frac { \gamma m g l ^ { 2 } \sin \left( \theta _ { 0 } \right) } { 2 L _ { 0 } ^ { 2 } }
$$

F4 ${ } ^ { 0.80 }$ С начальным условием из предыдущего пункта получите явную зависимость $\theta ( t )$.

Неопределённый интеграл слева равен $\ln | \operatorname { tg } ( \theta / 2 ) | + C$, а справа $\frac { \gamma m g l ^ { 2 } I } { 2 \alpha L _ { 0 } ^ { 2 } } \left( e ^ { \frac { 2 \alpha } { I } t - 1 } \right) + C$.

Пределы интегрирования: $\theta _ { 0 } \rightarrow \theta , 0 \rightarrow t$.

Ответ:

$$
\theta = 2 \operatorname { arctg } \left( \operatorname { tg } \left( \frac { \theta _ { 0 } } { 2 } \right) e ^ { \frac { \gamma m g l ^ { 3 } I } { 4 \alpha L _ { 0 } ^ { 2 } } \left( e ^ { \frac { 2 \alpha } { I } } t - 1 \right) } \right)
$$
