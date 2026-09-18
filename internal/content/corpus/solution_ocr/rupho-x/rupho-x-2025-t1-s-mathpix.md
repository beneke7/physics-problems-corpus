---
id: solution-ocr-rupho-x-2025-t1-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2025/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Скорость уменьшения высоты - вертикальная проекция скорости $v \sin \gamma$, скорость горизонтального перемещения $v \cos \gamma$ после проецирования на поверхность Земли уменьшается в $r / r _ { 0 }$ раз.

Ответ:

$$
\dot { h } = - v \sin \gamma , \quad \dot { s } = v \cos \gamma \cdot r _ { 0 } / r
$$

A2 ${ } ^ { 1.00 }$ Найдите производные модуля скорости $v$ и угла $\gamma$. Также в ответ могут входить подъемная сила $L$, сила сопротивления воздуха $D$, ускорение свободного падения на данной высоте $g$, масса космического корабля $m , v , \gamma , r$.

Второй закон Ньютона в проекции на оси вдоль и перпендикулярно скорости:

$$
m a _ { \tau } = - D + m g \sin \gamma , \quad m a _ { n } = - L + m g \cos \gamma .
$$

Касательное ускорение $a _ { \tau } = \dot { v }$, поэтому

$$
a _ { \tau } = - \frac { D } { m } + g \sin \gamma .
$$

Нормальное ускорение $a _ { n } = \omega v$, где $\omega$ - угловая скорость поворота вектора скорости, которую считаем положительной, если угловая скорость поворачивается вниз. Эта скорость не равна производной угла $\gamma$, поскольку направление горизонтали меняется от точки к точке с угловой скоростью $\omega _ { h } = v \cos \gamma / r$, тогда

$$
\omega = \dot { \gamma } + \frac { v \cos \gamma } { r } ,
$$

поэтому уравнение для нормального ускорения

$$
m v \left( \dot { \gamma } + \frac { v \cos \gamma } { r } \right) = - L + m g \cos \gamma ,
$$

откуда находим требуемую производную

Ответ:

$$
\dot { v } = - \frac { D } { m } + g \sin \gamma , \quad \dot { \gamma } = - \frac { L } { m v } + \frac { g } { v } \cos \gamma - \frac { v \cos \gamma } { r }
$$

В1 ${ } ^ { 0.40 }$ Получите выражение для производной $d v / d h$. Представьте ответ в виде

$$
\frac { d v } { d h } = A f ( v , h ) ,
$$

где $A$ - постоянная, которая может зависеть от всех постоянных, характеризующих космический корабль и атмосферу ( $m , S , C D , C L , \rho 0 , \beta , \gamma$ ), а $f$ - некоторая функция высоты и скорости. В дальнейшем используйте постоянную А для записи ответов.

Подставим выражение для силы сопротивления воздуха $D$ в уравнение движения и получим, пренебрегая гравитационным ускорением

$$
\dot { v } = - \frac { \rho _ { 0 } S C _ { D } } { 2 m } v ^ { 2 } e ^ { - \beta h } .
$$

С учетом формулы для $\dot { h } = - v \sin \gamma$ получим

$$
\frac { d v } { d h } = \frac { \dot { v } } { \dot { h } } = \frac { \rho _ { 0 } C _ { D } S } { 2 m \sin \gamma } \cdot v e ^ { - \beta h }
$$

Ответ:

$$
\frac { d v } { d h } = A v e ^ { - \beta h } , \quad A = \frac { \rho _ { 0 } C _ { D } S } { 2 m \sin \gamma }
$$

В2 ${ } ^ { 0.80 }$ Найдите зависимость скорости космического корабля от высоты. На начальной высоте $h _ { 0 }$ скорость была равна $v _ { 0 }$. Выразите ответ через $A$, $\beta$, $h$, $v _ { 0 }$, $h _ { 0 }$. Также получите приближенный ответ, считая, что на высоте $h _ { 0 }$ плотность атмосферы пренебрежимо мала (в этом случае в ответ не должна входить $h _ { 0 }$ ). Далее везде используйте приближенное выражение.

Разделим переменные, получим

$$
\frac { d v } { v } = A e ^ { - \beta h } d h ,
$$

проинтегрировав, получим


$$
\int _ { v _ { 0 } } ^ { v } \frac { d v } { v } = \int _ { h _ { 0 } } ^ { h } A e ^ { - \beta h } d h , \quad \ln \frac { v } { v _ { 0 } } = - \frac { A } { \beta } \left( e ^ { - \beta h } - e ^ { - \beta h _ { 0 } } \right)
$$

Отсюда найдем выражение для скорости

$$
v = v _ { 0 } \exp \left( - \frac { A } { \beta } \left( e ^ { - \beta h } - e ^ { - \beta h _ { 0 } } \right) \right)
$$

При достаточно большом значении $h _ { 0 }$ слагаемым $e ^ { - \beta h _ { 0 } } \ll e ^ { - \beta h }$ можно пренебречь

$$
v = v _ { 0 } \exp \left( - \frac { A } { \beta } e ^ { - \beta h } \right)
$$

Ответ:

$$
v = v _ { 0 } \exp \left( - \frac { A } { \beta } \left( e ^ { - \beta h } - e ^ { - \beta h _ { 0 } } \right) \right) , \quad v \approx v _ { 0 } \exp \left( - \frac { A } { \beta } e ^ { - \beta h } \right)
$$

Вз ${ } ^ { 0.30 }$ Найдите зависимость ускорения $a$ (то есть производной модуля скорости) космического корабля от высоты. Выразите ответ через $v _ { 0 } , A , \beta , h , \gamma$.

Подставим в уравнение для касательного ускорения формулу для скорости, получим

$$
a = \dot { v } = - \frac { D } { m } = - \frac { \rho _ { 0 } S C _ { D } } { 2 m } v ^ { 2 } e ^ { - \beta h } = - A v _ { 0 } ^ { 2 } \sin \gamma \exp \left( - \frac { 2 A } { \beta } e ^ { - \beta h } - \beta h \right)
$$

Ответ:

$$
a = - A v _ { 0 } ^ { 2 } \sin \gamma \exp \left( - \frac { 2 A } { \beta } e ^ { - \beta h } - \beta h \right)
$$

В4 ${ } ^ { 0.50 }$ Найдите высоту $h _ { c }$, на которой модуль ускорения максимален. Получите формулу для максимального значения модуля ускорения $a _ { \max }$ и скорости $v _ { \mathrm { c } }$ на высоте $h _ { \mathrm { c } }$. Выразите ответы через $A , \beta , \gamma , v _ { 0 }$.

Модуль ускорения максимален, при минимальном показателе экспоненты,

$$
\frac { d } { d h } \left( - \frac { 2 A } { \beta } e ^ { - \beta h } - \beta h \right) = 2 A e ^ { - \beta h } - \beta = 0 .
$$

Отсюда критическое значение высоты

$$
h _ { c } = \frac { 1 } { \beta } \ln \frac { 2 A } { \beta } .
$$

Подставляя это значение высоты в формулы для высоты и ускорения, получим

$$
\begin{gathered}
a _ { \max } = A v _ { 0 } ^ { 2 } \sin \gamma \exp \left( - \frac { 2 A } { \beta } e ^ { - \beta h _ { c } } - \beta h _ { c } \right) = \frac { \beta v _ { 0 } ^ { 2 } \sin \gamma } { 2 e } \\
v _ { c } = v _ { 0 } \exp \left( - \frac { A } { \beta } e ^ { - \beta h _ { c } } \right) = v _ { 0 } e ^ { - 1 / 2 }
\end{gathered}
$$

Ответ:

$$
h _ { c } = \frac { 1 } { \beta } \ln \frac { 2 A } { \beta } , \quad v _ { c } = v _ { 0 } e ^ { - 1 / 2 } , \quad a _ { \max } = \frac { \beta v _ { 0 } ^ { 2 } \sin \gamma } { 2 e }
$$

B5 ${ } ^ { 0.60 }$ Для приведенных численных данных найдите скорость (в км/с) и ускорение (в единицах $g _ { 0 }$ ) на высотах $h _ { 1 } = 80$ км, $h _ { 2 } = 60$ км, $h _ { 3 } = 40$ км.

Подставляя значения высоты в формулы для скорости и ускорения, получим

Ответ:

| $h$, км | $a / g _ { 0 }$ | $v$, км/с |
| :--- | :--- | :--- |
| 80 | -0.20 | 7.7 |


| 60 | -2.8 | 7.2 |
| :--- | :--- | :--- |
| 40 | -5.9 | 2.7 |

В6 ${ } ^ { 0.20 }$ Найдите максимальное ускорение (в единицах $g _ { 0 }$ ) и критическую высоту $h _ { c }$, при которой оно достигается.

Ответ:

$$
a _ { \max } = 8.6 g _ { 0 } , \quad h _ { c } = 45.5 \text { кМ }
$$

С1 ${ } ^ { 0.10 }$ Найдите первую космическую скорость $v _ { s }$ - скорость движения космического корабля по круговой орбите, радиус которой равен радиусу Земли. Выразите ответ через $r _ { 0 } , g _ { 0 }$.

Запишем уравнение движения для ускорения при движении по окружности

$$
\frac { v ^ { 2 } } { r _ { 0 } } = g _ { 0 } ,
$$

Ответ:

$$
v _ { s } = \sqrt { g _ { 0 } r _ { 0 } }
$$

С2 ${ } ^ { 0.40 }$ Определите скорость, с которой космический корабль должен двигаться на высоте $h$ при описанном во введении к этой части движении. Выразите ответ через $v _ { s } , \rho _ { 0 } , \beta , C _ { L } , S , m , r _ { 0 } , h$.

Запишем уравнение для нормального ускорения, с учетом того, что производная $\dot { \gamma }$ мала, а $\cos \gamma \approx 1$ и ей можно пренебречь

$$
- \frac { L } { m } + g _ { 0 } - \frac { v ^ { 2 } } { r _ { 0 } } = 0 .
$$

Подставив формулу для подъемной силы, а также для зависимости плотности воздуха от высоты, получим

$$
v ^ { 2 } \left( \frac { 1 } { r _ { 0 } } + \frac { C _ { L } S \rho _ { 0 } } { 2 m } e ^ { - \beta h } \right) = g _ { 0 } ,
$$

откуда найдем

$$
v ^ { 2 } = \frac { g _ { 0 } r _ { 0 } } { 1 + \frac { C _ { L } \rho _ { 0 } r _ { 0 } S } { 2 m } \cdot e ^ { - \beta h } }
$$

Ответ:

$$
v = \frac { v _ { s } } { \sqrt { 1 + \frac { C _ { L } \rho _ { 0 } r _ { 0 } S } { 2 m } \cdot e ^ { - \beta h } } }
$$

с3 ${ } ^ { 0.40 }$ Определите ускорение $a$ (производную модуля скорости), создаваемое силой сопротивления воздуха при таком движении. Выразите ответ через $v$, $C _ { L } , C _ { D } , r _ { 0 } , g _ { 0 }$.

Подъемная сила и сила сопротивления воздуха связаны соотношением

$$
\begin{gathered}
\frac { D } { L } = \frac { C _ { L } } { C _ { D } } \\
\dot { v } = - D / m = - \frac { C _ { D } } { C _ { L } m } \cdot L = - \frac { C _ { D } } { C _ { L } } \left( g _ { 0 } - \frac { v ^ { 2 } } { r _ { 0 } } \right)
\end{gathered}
$$

Ответ:


$$
a = - \frac { C _ { D } } { C _ { L } } \left( g _ { 0 } - \frac { v ^ { 2 } } { r _ { 0 } } \right)
$$

С4 ${ } ^ { 0.50 }$ Пусть начальная скорость космического корабля $v _ { 1 } < v _ { s }$, конечная скорость $v _ { 2 } < v _ { 1 }$. Найдите горизонтальное перемещение корабля $s$ за время движения. Считайте, что все изменение модуля скорости происходит за счет силы сопротивления воздуха. Выразите ответ через $r _ { 0 } , C _ { L } , C _ { D } , v _ { s } , v _ { 1 } , v _ { 2 }$.

Используя соотношения $a = d v / d t$ и $v = d s / d t$ (в приближении $\cos \gamma \approx 1$ ), получим связь перемещения и изменения скорости,

$$
\frac { d s } { d v } = \frac { v } { a } = - \frac { C _ { L } } { C _ { D } } \frac { v } { g _ { 0 } - v ^ { 2 } / r _ { 0 } } = - \frac { C _ { L } } { C _ { D } } r _ { 0 } \frac { v } { v _ { s } ^ { 2 } - v ^ { 2 } }
$$

Интегрируя, получаем

$$
s = - \frac { C _ { L } } { C _ { D } } r _ { 0 } \int _ { v _ { 1 } } ^ { v _ { 2 } } \frac { v d v } { v _ { s } ^ { 2 } - v ^ { 2 } } = - \frac { C _ { L } } { 2 C _ { D } } r _ { 0 } \int _ { v _ { 1 } } ^ { v _ { 2 } } d v \left( \frac { 1 } { v _ { s } - v } + \frac { 1 } { v _ { s } + v } \right) = \frac { C _ { L } } { 2 C _ { D } } r _ { 0 } \ln \frac { v _ { s } ^ { 2 } - v _ { 2 } ^ { 2 } } { v _ { s } ^ { 2 } - v _ { 1 } ^ { 2 } }
$$

Ответ:

$$
s = \frac { C _ { L } } { 2 C _ { D } } r _ { 0 } \ln \frac { v _ { s } ^ { 2 } - v _ { 2 } ^ { 2 } } { v _ { s } ^ { 2 } - v _ { 1 } ^ { 2 } }
$$

С5 ${ } ^ { 0.60 }$ Пусть для космического корабля заданы следующие параметры:

- $m = 84 \times 10 ^ { 3 }$ кг
- $S = 250 \mathrm {~m} ^ { 2 }$
- $C _ { D } = 0.8$
- $C _ { L } = 0.9$

Найдите значения скорости (в км/с) и ускорения за счет сопротивления воздуха (в единицах $g _ { 0 }$ ) на высотах $h _ { 1 } = 80$ км, $h _ { 1 } = 60$ кМ, $h _ { 1 } = 40$ кМ.

Используя формулы для скорости и для ускорения, выраженного через скорость, получим

Ответ:

| $h$, км | $a / g _ { 0 }$ | $v$, км/c |
| :--- | :--- | :--- |
| 80 | -0.13 | 7.3 |
| 60 | -0.65 | 4.1 |
| 40 | -0.87 | 1.2 |

С6 ${ } ^ { 0.20 }$ В условиях предыдущего пункта рассчитайте дальность горизонтального перемещения космического корабля при опускании с высоты $h _ { 0 } = 90$ км до высоты $h _ { f } = 30$ км.

Вычислим начальную и конечную скорости космического корабля

$$
v _ { 1 } = v \left( h _ { 0 } \right) = 7.7 \text { кМ } / с , \quad v _ { 2 } = v \left( h _ { f } \right) = 0.61 \mathrm { км } / c ,
$$

тогда дальность перемещения

Ответ:

$$
s = 11.4 \cdot 10 ^ { 3 } \text { КМ }
$$

D1 ${ } ^ { 0,40 }$ Запишите выражения для энергии $E$ и момента импульса $L$. Выразите ответ через $G , m , a , e , M$.

Примечание: Может быть удобным записать ЗСЭ в точке апоцентра или перицентра.

Пусть расстояния от земли до корабля в перицентре (наиболее близкой точке) и апоцентре (наиболее удаленной точке) равны соответственно $r _ { 1 }$ и $r _ { 2 }$. Скорости корабля в этих точках равны соответственно $L / \left( m r _ { 1 } \right)$ и $L / \left( m r _ { 2 } \right)$. Тогда:


$$
E = \frac { L ^ { 2 } } { 2 m r _ { 1 } ^ { 2 } } - \frac { G M m } { r _ { 1 } } = \frac { L ^ { 2 } } { 2 m r _ { 2 } ^ { 2 } } - \frac { G M m } { r _ { 2 } } ,
$$

Выразим отсюда момент импульса $L$ :

$$
L ^ { 2 } = 2 m r _ { 1 } ^ { 2 } E _ { 1 } + 2 G M m ^ { 2 } r _ { 1 } = 2 m r _ { 2 } ^ { 2 } E _ { 2 } + 2 G M m ^ { 2 } r _ { 2 } .
$$

Отсюда выразим энергию

$$
E \left( r _ { 2 } ^ { 2 } - r _ { 1 } ^ { 2 } \right) = G M m ^ { 2 } \left( r _ { 1 } - r _ { 2 } \right) ,
$$

а значит

$$
E = - \frac { G M m } { r _ { 1 } + r _ { 2 } } = - \frac { G M m } { 2 a } .
$$

Таким же образом выразим момент импульса

$$
\frac { L ^ { 2 } } { 2 m } \left( \frac { 1 } { r _ { 1 } ^ { 2 } } - \frac { 1 } { r _ { 2 } ^ { 2 } } \right) = G M m \left( \frac { 1 } { r _ { 1 } } - \frac { 1 } { r _ { 2 } } \right) , \quad L ^ { 2 } = 2 G M m ^ { 2 } \frac { r _ { 1 } r _ { 2 } } { r _ { 1 } + r _ { 2 } } .
$$

Выражая расстояния через большую полуось и эксцентриситет $r _ { 1 } = a ( 1 - e ) , r _ { 2 } = a ( 1 + e )$ найдем

$$
L ^ { 2 } = G M m ^ { 2 } a \left( 1 - e ^ { 2 } \right) .
$$

Ответ:

$$
E = - \frac { G M m } { 2 a } , \quad L = \sqrt { G M m ^ { 2 } a \left( 1 - e ^ { 2 } \right) }
$$

D2 ${ } ^ { 0.20 }$ Запишите уравнение моментов и выражение для мощности силы трения $P$. Выразите ответ через $\vec { r } , \vec { v } , \alpha$.

Ответ:

$$
\begin{gathered}
\frac { d } { d t } \vec { L } = - \alpha [ \vec { r } , \vec { v } ] \\
P = - \alpha v ^ { 2 }
\end{gathered}
$$

D3 ${ } ^ { 0.20 }$ Получите выражение для зависимости $\vec { L }$ от $t$, если в момент времени $t = 0 \quad \vec { L } = \vec { L } _ { 0 }$. Выразите ответ через $\alpha , m , \vec { L } _ { 0 }$.

Воспользуемся определением для $\vec { L }$, запишем уравнение моментов в виде

$$
\frac { d } { d t } \vec { L } = - \frac { \alpha } { m } \vec { L } ,
$$

Ответ:

$$
\vec { L } = \vec { L } _ { 0 } \exp \left( - \frac { \alpha } { m } t \right)
$$

D4 ${ } ^ { 0.30 }$ Покажите что:

$$
[ \vec { a } , \vec { L } ] = \beta \frac { d } { d t } \vec { e } _ { i }
$$

Где $\vec { a }$ - ускорение ракеты, $\vec { e } _ { i }$ - некоторый единичный вектор полярных координат с началом в центре Земли. Найдите $\vec { e } _ { i }$ и $\beta$.

Примечание: Может быть удобным использовать выражение $\vec { L } = m r ^ { 2 } \vec { \omega }$.

Второй закон Ньютона имеет вид

$$
m \vec { a } = - \frac { G m M } { r ^ { 2 } } \vec { e } _ { r } .
$$

Подставим ускорение в векторное произведение:

$$
[ \vec { a } , \vec { L } ] = - \left[ \frac { G M } { r ^ { 2 } } \vec { e } _ { r } , \vec { L } \right] = - G M \left[ \frac { 1 } { r ^ { 2 } } \vec { e } _ { r } , m r ^ { 2 } \vec { \omega } \right] = G m M \left[ \vec { \omega } , \vec { e } _ { r } \right] = G m M \frac { d } { d t } \vec { e } _ { r } .
$$


Ответ:

$$
\beta = G M m , \quad \vec { e } _ { i } = \vec { e } _ { r }
$$

D5 ${ } ^ { 0.30 }$ Домножая выражение (1) на $\vec { r }$ скалярно и используя результаты пункта D4, получите зависимость модуля радиус-вектора $\vec { r }$ от $\varphi$ - угла между векторами $\vec { A }$ и $\vec { e } _ { r }$. Выразите ответ через $L , m , G , e , \varphi , M$.

Домножим выражение на $\vec { r }$, получим

$$
( \vec { r } , [ \vec { v } , \vec { L } ] ) = G M m r + \vec { A } \cdot \vec { r } .
$$

В левой части переставим множители, используя свойства смешанного произведения:

$$
( \vec { r } , [ \vec { v } , \vec { L } ] ) = ( \vec { L } , [ \vec { r } , \vec { v } ] ) = \frac { L ^ { 2 } } { m } .
$$

Тогда получим

$$
\frac { L ^ { 2 } } { m } = G m M r ( 1 + e \cos \varphi ) ,
$$

откуда находим

Ответ:

$$
r = \frac { L ^ { 2 } / G M m ^ { 2 } } { 1 + e \cos \varphi }
$$

D6 ${ } ^ { 0.50 }$ Используя выражение (1) и результаты пункта D4, получите зависимость квадрата скорости $v ^ { 2 }$ от $\varphi$. Выразите ответ через $L , G , m , e , \varphi , M$.

Возведем выражение (1) в квадрат:

$$
[ \vec { v } , \vec { L } ] ^ { 2 } = v ^ { 2 } L ^ { 2 } = ( G m M ) ^ { 2 } + 2 G m M \vec { e } _ { r } \cdot \vec { A } + A ^ { 2 } = ( G m M ) ^ { 2 } \left( 1 + 2 e \cos \varphi + e ^ { 2 } \right) ,
$$

Ответ:

$$
v ^ { 2 } = \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } } \left( 1 + e ^ { 2 } + 2 e \cos \varphi \right)
$$

D7 ${ } ^ { 0.40 }$ Получите выражение для среднего по времени квадрата скорости $\left\langle v ^ { 2 } \right\rangle$ в виде интеграла по углу $\varphi$. Выразите ответ через $L , m , e , M , G , a , \varphi , \tau$ -период обращения ракеты.

Примечание: Может быть удобным выразить квадрат средней скорости из усредненного 3СЭ ( $\langle T + U \rangle = \langle E \rangle$, где $T$ - кинетическая энергия, $U$ -потенциальная).

Метод 1:

По определению средний квадрат скорости выражается через интеграл как ( $\tau$ - период движения)

$$
\left\langle v ^ { 2 } \right\rangle = \frac { 1 } { \tau } \int _ { 0 } ^ { \tau } v ^ { 2 } d t
$$

Дифференциалы времени и угла $\varphi$ можно связать с помощью момента импульса:

$$
L = m r ^ { 2 } \frac { d \varphi } { d t } .
$$

Перейдем к интегрированию по углу

$$
\left\langle v ^ { 2 } \right\rangle = \frac { 1 } { \tau } \int _ { 0 } ^ { \tau } v ^ { 2 } \frac { d t } { d \varphi } d \varphi = \frac { m } { \tau L } \int _ { 0 } ^ { 2 \pi } v ^ { 2 } r ^ { 2 } d \varphi
$$

Подставив выражения из D5, D6, получим


$$
\left\langle v ^ { 2 } \right\rangle = \frac { L } { m \tau } \int _ { 0 } ^ { 2 \pi } \frac { 1 + e ^ { 2 } + 2 e \cos \varphi } { ( 1 + e \cos \varphi ) ^ { 2 } } d \varphi
$$

Метод 2:
Из усредненного ЗСЭ получим:

$$
\langle T \rangle = \frac { m } { 2 } \left\langle v ^ { 2 } \right\rangle = \langle E \rangle - \langle U \rangle = E + \left\langle \frac { G M m } { r } \right\rangle
$$

Запишем выражение для среднего по времени $1 / r$ в виде интеграла по углу:

$$
\left\langle \frac { 1 } { r } \right\rangle = \frac { 1 } { \tau } \int _ { 0 } ^ { \tau } \frac { 1 } { r } d t = \frac { 1 } { \tau } \int _ { 0 } ^ { \tau } \frac { 1 } { r } d t \frac { d t } { d \varphi } d \varphi = \frac { m } { \tau L } \int _ { 0 } ^ { 2 \pi } r d \varphi
$$

Подставим все в выражение для $\left\langle v ^ { 2 } \right\rangle$ :

$$
\left\langle v ^ { 2 } \right\rangle = \frac { 2 } { m } \left( E + \frac { L } { \tau } \int _ { 0 } ^ { 2 \pi } \frac { d \varphi } { 1 + e \cos \varphi } \right)
$$

Ответ:

$$
\left\langle v ^ { 2 } \right\rangle = \frac { L } { m \tau } \int _ { 0 } ^ { 2 \pi } \frac { 1 + e ^ { 2 } + 2 e \cos \varphi } { ( 1 + e \cos \varphi ) ^ { 2 } } d \varphi
$$

D8 ${ } ^ { 1.00 }$ Получите выражение для $\langle \dot { E } \rangle$. Выразите ответ через $G , m , a , e , M$.

Метод 1:

$$
\left\langle v ^ { 2 } \right\rangle = \frac { L } { m \tau } \int _ { 0 } ^ { 2 \pi } \frac { 1 + e ^ { 2 } + 2 e \cos \varphi } { ( 1 + e \cos \varphi ) ^ { 2 } } d \varphi
$$

Воспользуемся универсальной тригонометрической подстановкой:

$$
\begin{aligned}
& \int _ { 0 } ^ { 2 \pi } \frac { 1 + e ^ { 2 } + 2 e \cos \varphi } { ( 1 + e \cos \varphi ) ^ { 2 } } d \varphi = 2 \int _ { 0 } ^ { + \infty } \frac { 1 + e ^ { 2 } + 2 e \left( 1 - t ^ { 2 } \right) / \left( 1 + t ^ { 2 } \right) } { \left( 1 + e \left( 1 - t ^ { 2 } \right) / \left( 1 + t ^ { 2 } \right) \right) ^ { 2 } } \frac { 2 d t } { 1 + t ^ { 2 } } = \\
& = 4 \int _ { 0 } ^ { + \infty } \frac { \left( 1 + e ^ { 2 } \right) \left( 1 + t ^ { 2 } \right) + 2 e \left( 1 - t ^ { 2 } \right) } { \left( 1 + t ^ { 2 } + e \left( 1 - t ^ { 2 } \right) \right) ^ { 2 } } d t = 4 \int _ { 0 } ^ { + \infty } \frac { ( 1 + e ) ^ { 2 } + t ^ { 2 } ( 1 - e ) ^ { 2 } } { \left( 1 + e + t ^ { 2 } ( 1 - e ) \right) ^ { 2 } } d t = \\
& = 4 \int _ { 0 } ^ { + \infty } \frac { ( 1 + e ) ^ { 2 } + t ^ { 2 } ( 1 - e ) ^ { 2 } } { \left( 1 + e + t ^ { 2 } ( 1 - e ) \right) ^ { 2 } } d t = 4 \int _ { 0 } ^ { + \infty } \frac { 1 + t ^ { 2 } ( 1 - e ) ^ { 2 } / ( 1 + e ) ^ { 2 } } { \left( 1 + t ^ { 2 } ( 1 - e ) / ( 1 + e ) \right) ^ { 2 } } d t
\end{aligned}
$$

Перейдем к переменной $\tan u = t \sqrt { \frac { 1 - e } { 1 + e } } \Rightarrow \frac { d u } { \cos ^ { 2 } u } = d t \sqrt { \frac { 1 - e } { 1 + e } }$

$$
\begin{gathered}
4 \int _ { 0 } ^ { + \infty } \frac { 1 + t ^ { 2 } ( 1 - e ) ^ { 2 } / ( 1 + e ) ^ { 2 } } { \left( 1 + t ^ { 2 } ( 1 - e ) / ( 1 + e ) \right) ^ { 2 } } d t = 4 \sqrt { \frac { 1 + e } { 1 - e } } \int _ { 0 } ^ { + \pi / 2 } \frac { 1 + \tan ^ { 2 } u ( 1 - e ) / ( 1 + e ) } { \left( 1 + \tan ^ { 2 } u \right) ^ { 2 } } \frac { d u } { \cos ^ { 2 } u } = \\
= \frac { 4 } { \sqrt { 1 - e ^ { 2 } } } \int _ { 0 } ^ { + \pi / 2 } \left( ( 1 + e ) \cos ^ { 2 } u + \sin ^ { 2 } u ( 1 - e ) \right) d u = \frac { 4 } { \sqrt { 1 - e ^ { 2 } } } \int _ { 0 } ^ { + \pi / 2 } d u ( 1 + e \cos 2 u ) = \frac { 2 \pi } { \sqrt { 1 - e ^ { 2 } } }
\end{gathered}
$$

Подставим в выражение для среднего:


$$
\left\langle v ^ { 2 } \right\rangle = \frac { L } { m \tau } \frac { 2 \pi } { \sqrt { 1 - e ^ { 2 } } } = \sqrt { G M a } \cdot \sqrt { \frac { G M } { a ^ { 3 } } } = \frac { G M } { a }
$$

Метод 2:

$$
\left\langle v ^ { 2 } \right\rangle = \int _ { 0 } ^ { \tau } \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } \tau } \left( 1 + e ^ { 2 } + 2 e \cos \varphi \right) d t
$$

Усреднение константы даст саму константу, а из результата предыдущего пункта ясно, что переход к переменной $\varphi$ даст множитель $1 / ( 1 + e \cos \varphi ) ^ { 2 }$, соберем в числителе $( 1 + e \cos \varphi )$ :

$$
\begin{gathered}
= \left\langle v ^ { 2 } \right\rangle = \int _ { 0 } ^ { \tau } \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } \tau } \left( e ^ { 2 } - 1 + 2 ( 1 + e \cos \varphi ) \right) d t = \\
= \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } } \left( e ^ { 2 } - 1 \right) + \int _ { 0 } ^ { \tau } \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } \tau } ( 2 ( 1 + e \cos \varphi ) ) d t = \\
= \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } } \left( e ^ { 2 } - 1 \right) + \int _ { 0 } ^ { \tau } \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } \tau } ( 1 + e \cos \varphi ) d t =
\end{gathered}
$$

Возьмем получившийся интеграл при помощи универсальной тригонометрической подстановки:

$$
\begin{gathered}
\frac { ( G M m ) ^ { 2 } } { L ^ { 2 } \tau } \int _ { 0 } ^ { \tau } ( 1 + e \cos \varphi ) d t = \frac { 2 L } { m \tau } \int _ { 0 } ^ { 2 \pi } \frac { d \varphi } { 1 + e \cos \varphi } = \frac { 4 L } { m \tau } \int _ { 0 } ^ { + \infty } \frac { 1 } { 1 + e \left( 1 - t ^ { 2 } \right) / \left( 1 + t ^ { 2 } \right) } \frac { 2 d t } { 1 + t ^ { 2 } } = \\
= \frac { 8 L } { m \tau } \int _ { 0 } ^ { + \infty } \frac { 1 } { 1 + t ^ { 2 } + e \left( 1 - t ^ { 2 } \right) } d t = \frac { 8 L } { m \tau } \int _ { 0 } ^ { + \infty } \frac { d t } { 1 + e + t ^ { 2 } ( 1 - e ) } = \frac { 8 L } { m \tau } \frac { \pi / 2 } { \sqrt { 1 - e ^ { 2 } } }
\end{gathered}
$$

Подставим в выражение для средней скорости:

$$
\left\langle v ^ { 2 } \right\rangle = \frac { ( G M m ) ^ { 2 } } { L ^ { 2 } } \left( e ^ { 2 } - 1 \right) + \frac { 4 \pi } { m \tau } \frac { L } { \sqrt { 1 - e ^ { 2 } } } = - \frac { G M } { a } + 2 \sqrt { G M a } \cdot \sqrt { \frac { G M } { a ^ { 3 } } } = - \frac { G M } { a } + 2 \frac { G M } { a } = \frac { G M } { a }
$$

Метод 3:

$$
\left\langle v ^ { 2 } \right\rangle = \frac { 2 } { m } \left( E + \frac { L } { \tau } \int _ { 0 } ^ { 2 \pi } \frac { d \varphi } { 1 + e \cos \varphi } \right)
$$

Возьмем получившийся интеграл при помощи универсальной тригонометрической подстановки:

$$
\frac { 2 L } { m \tau } \int _ { 0 } ^ { 2 \pi } \frac { d \varphi } { 1 + e \cos \varphi } = \frac { 4 L } { m \tau } \int _ { 0 } ^ { + \infty } \frac { 1 } { 1 + e \left( 1 - t ^ { 2 } \right) / \left( 1 + t ^ { 2 } \right) } \frac { 2 d t } { 1 + t ^ { 2 } } =
$$

$$
= \frac { 8 L } { m \tau } \int _ { 0 } ^ { + \infty } \frac { 1 } { 1 + t ^ { 2 } + e \left( 1 - t ^ { 2 } \right) } d t = \frac { 8 L } { m \tau } \int _ { 0 } ^ { + \infty } \frac { d t } { 1 + e + t ^ { 2 } ( 1 - e ) } = \frac { 8 L } { m \tau } \frac { \pi / 2 } { \sqrt { 1 - e ^ { 2 } } }
$$

Подставим в выражение для средней скорости:

$$
\left\langle v ^ { 2 } \right\rangle = \frac { 2 E } { m } + \frac { 4 \pi } { m \tau } \frac { L } { \sqrt { 1 - e ^ { 2 } } } = - \frac { G M } { a } + 2 \sqrt { G M a } \cdot \sqrt { \frac { G M } { a ^ { 3 } } } = - \frac { G M } { a } + 2 \frac { G M } { a } = \frac { G M } { a }
$$


$$
\langle \dot { E } \rangle = - \frac { \alpha G M } { a }
$$

Ответ:

$$
\langle \dot { E } \rangle = - \frac { \alpha G M } { a }
$$

$$
\langle \dot { E } \rangle = - \frac { \alpha G M } { a }
$$

D9 ${ } ^ { 0.40 }$ Используя результаты пунктов D1, D3, D8, получите зависимости $a$ и $e$ от $t$, если в момент времени $t = 0 a = a _ { 0 } , e = e _ { 0 }$.

Из результата предыдущего пункта:

$$
\begin{gathered}
\dot { E } = - \frac { \alpha G M } { a } \Rightarrow \frac { d } { d t } \left( \frac { 1 } { a } \right) = \frac { 2 \alpha } { m } \frac { 1 } { a } \\
a = a _ { 0 } e ^ { - 2 \alpha t / m }
\end{gathered}
$$

Подставим выражение для полуоси в зависимость момента импульса от времени:

$$
\begin{gathered}
L = m \sqrt { G M a \left( 1 - e ^ { 2 } \right) } \Rightarrow \sqrt { a \left( 1 - e ^ { 2 } \right) } = \sqrt { a _ { 0 } \left( 1 - e _ { 0 } ^ { 2 } \right) } e ^ { - \alpha t / m } \\
\sqrt { 1 - e ^ { 2 } } = \sqrt { 1 - e _ { 0 } ^ { 2 } } \Rightarrow e = e _ { 0 }
\end{gathered}
$$

Ответ:

$$
\begin{gathered}
a = a _ { 0 } e ^ { - 2 \alpha t / m } \\
e = e _ { 0 }
\end{gathered}
$$

D10 ${ } ^ { 0.10 }$ Найдите время снижения орбиты $T$ с высоты $h _ { 0 } = 408$ км до высоты $h = 400$ км, если параметр $\alpha = 7.17 \cdot 10 ^ { - 5 }$ кг/с, масса $m = 420$ т, $r _ { 0 } = 6378$ км. Выразите ответ в сутках.

Из результата предыдущего пункта:

$$
T = \frac { m } { 2 \alpha } \ln \frac { r _ { 0 } + h _ { 0 } } { r _ { 0 } + h }
$$

Ответ:

$$
T = 40 \text { суток }
$$
