---
id: solution-ocr-rupho-x-2024-t6-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2024/T6_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.60 }$ Пусть момент времени $t _ { 0 } = 0$ груз находится в начале координат, а проекция его скорости на ось $x$ равна $v _ { 0 }$. Определите зависимости координаты $x ( t )$ и скорости $v _ { x } ( t )$ груза от времени $t$. Ответ выразите через $v _ { 0 } , \gamma , \omega _ { 0 }$ и $t$.

Запишем уравнение движения груза:

$$
m \ddot { x } = - \beta \dot { x } - k x \Rightarrow \ddot { x } + \frac { \beta } { m } \dot { x } + \frac { k } { m } x = 0 .
$$

С учётом введённых обозначений:

$$
\ddot { x } + 2 \gamma \dot { x } + \omega _ { 0 } ^ { 2 } x = 0 .
$$

Будем искать решение в комплексной форме:

$$
x = \operatorname { Re } \left\{ A e ^ { \lambda t } \right\} ,
$$

где $A \neq 0$ и $\lambda$ - некоторые комплексные числа.
Тогда:

$$
A \left( \lambda ^ { 2 } + 2 \gamma \lambda + \omega _ { 0 } ^ { 2 } \right) = 0 \Rightarrow \lambda = - \gamma \pm i \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } .
$$

Решение представляет собой сумму решений, соответствующих разным значениям $\lambda$ :

$$
x ( t ) = e ^ { - \gamma t } \operatorname { Re } \left\{ A _ { 1 } e ^ { i \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } t } + A _ { 2 } e ^ { - i \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } t } \right\} = C e ^ { - \gamma t } \sin \left( \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } t + \varphi _ { 0 } \right) ,
$$

где $C$ и $\varphi _ { 0 }$ - действительные числа.
Дифференцируя:

$$
v _ { x } ( t ) = C e ^ { - \gamma t } \left( \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } \cos \left( \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } t + \varphi _ { 0 } \right) - \gamma \sin \left( \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } t + \varphi _ { 0 } \right) \right) .
$$

Для момента времени $t = 0$ имеем:

$$
\left\{ \begin{array} { l }
x ( 0 ) = C \sin \varphi _ { 0 } \\
v _ { x } ( 0 ) = C \left( \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } \cos \varphi _ { 0 } - \gamma \sin \varphi _ { 0 } \right)
\end{array} \right.
$$

С учётом начальных условий:

$$
\left\{ \begin{array} { l }
{ x ( 0 ) = 0 } \\
{ v _ { x } ( 0 ) = v _ { 0 } }
\end{array} \Rightarrow \left\{ \begin{array} { l }
\varphi _ { 0 } = 0 \\
C = \frac { v _ { 0 } } { \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } }
\end{array} \right. \right.
$$

Окончательно получим:

Ответ:

$$
x ( t ) = \frac { v _ { 0 } } { \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } e ^ { - \gamma t } \sin \left( \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } t \right) .
$$

Ответ:

$$
v _ { x } ( t ) = \frac { v _ { 0 } \omega _ { 0 } } { \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } e ^ { - \gamma t } \cos \left( \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } t + \arcsin \frac { \gamma } { \omega _ { 0 } } \right) .
$$

А2 ${ } ^ { 0.40 }$ Получите точное выражение для $Q$. Ответ выразите через $\omega _ { 0 }$ и $\gamma$.

Перепишем выражение для добротности в следующем виде:

$$
Q = \frac { 2 \pi } { 1 - \left( \frac { v _ { 1 } } { v _ { 0 } } \right) ^ { 2 } } ,
$$

где $v _ { 1 }$ - проекция скорости груза при повторном прохождении начала координат с тем же направлением скорости. Величина скорости $v _ { 1 }$ достигается через период $T$, равный:

$$
T = \frac { 2 \pi } { \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } .
$$

Тогда:

$$
\frac { v _ { 1 } } { v _ { 0 } } = e ^ { - \gamma T } = e ^ { - 2 \pi \gamma / \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } ,
$$


откуда получим:

Ответ:

$$
Q = \frac { 2 \pi } { 1 - e ^ { - 4 \pi \gamma / \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } }
$$

А3 ${ } ^ { 0.20 }$ Получите приближённое выражение для добротности $Q$ при слабом затухании $\left( \gamma \ll \omega _ { 0 } \right)$. Ответ выразите через $m , k$ и $\beta$.

Разложение знаменателя при $\gamma \ll \omega _ { 0 }$ следующее:

$$
1 - e ^ { - 4 \pi \gamma / \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } \approx 1 - e ^ { - 4 \pi \gamma / \omega _ { 0 } } \approx 1 - \left( 1 - \frac { 4 \pi \gamma } { \omega _ { 0 } } \right) = \frac { 4 \pi \gamma } { \omega _ { 0 } } ,
$$

откуда получим приближение для добротности при слабом затухании $Q$ :

$$
Q \approx \frac { \omega _ { 0 } } { 2 \gamma } .
$$

Подставляя $\omega _ { 0 }$ и $\gamma$, получим:

Ответ:

$$
Q \approx \frac { \sqrt { m k } } { \beta ( H ) }
$$

В1 ${ } ^ { 0.60 }$ Отклонение $x$ груза от положения зависит от времени $t$ следующим образом:

$$
x ( t ) = A \sin \left( \Omega t + \varphi _ { 0 } \right)
$$

Найдите $A$ и $\varphi _ { 0 }$. Ответы выразите через $A _ { 0 } , \Omega , \omega _ { 0 }$ и $\gamma$.

Уравнение движения следующее:

$$
m \ddot { x } = k \left( A _ { 0 } \sin \Omega t - x \right) - \beta \dot { x } ,
$$

откуда:

$$
\ddot { x } + 2 \gamma \dot { x } + \omega _ { 0 } ^ { 2 } \Delta x = \omega _ { 0 } ^ { 2 } A _ { 0 } \sin \Omega t .
$$

Будем искать решение в виде:

$$
x = \operatorname { Re } \left\{ \hat { A } e ^ { i \Omega t } \right\} ,
$$

где $\hat { A } \neq 0$ - некоторое комплексное число.
Тогда:

$$
\hat { A } \left( \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) + 2 i \Omega \gamma \right) = \omega _ { 0 } ^ { 2 } A _ { 0 } e ^ { - i \pi / 2 } .
$$

Выразим $A$ :

$$
\hat { A } = \frac { \omega _ { 0 } ^ { 2 } A _ { 0 } \left( \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) - 2 i \Omega \gamma \right) e ^ { - i \pi / 2 } } { \left( \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) ^ { 2 } + 4 \gamma ^ { 2 } \Omega ^ { 2 } \right) } = \frac { A _ { 0 } \omega _ { 0 } ^ { 2 } e ^ { - i ( \pi / 2 - \varphi ) } } { \sqrt { \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) ^ { 2 } + 4 \gamma ^ { 2 } \omega _ { 0 } ^ { 2 } } } ,
$$

где $\varphi$ - аргумент комплексного числа $z = \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) - 2 i \Omega \gamma$.
Извлекая действительную часть, найдём:

$$
\Delta x ( t ) = \frac { A _ { 0 } \omega _ { 0 } ^ { 2 } } { \sqrt { \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) ^ { 2 } + 4 \gamma ^ { 2 } \Omega ^ { 2 } } } \sin ( \Omega t + \varphi ) .
$$

Таким образом:

$$
A = \frac { A _ { 0 } \omega _ { 0 } ^ { 2 } } { \sqrt { \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) ^ { 2 } + 4 \gamma ^ { 2 } \Omega ^ { 2 } } } \quad \varphi _ { 0 } = \varphi .
$$

При определении $\varphi$ есть три случая:


$$
\varphi = \left\{ \begin{array} { l }
- \arctan \frac { 2 \gamma \Omega } { \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } } \quad \text { при } \quad \Omega < \omega _ { 0 } \\
- \frac { \pi } { 2 } \quad \text { при } \quad \Omega = \omega _ { 0 } \\
- \pi - \arctan \frac { 2 \gamma \Omega } { \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } } \quad \text { при } \quad \Omega > \omega _ { 0 }
\end{array} \right.
$$

Таким образом:

Ответ:

$$
\begin{gathered}
A = \frac { A _ { 0 } \omega _ { 0 } ^ { 2 } } { \sqrt { \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) ^ { 2 } + 4 \gamma ^ { 2 } \Omega ^ { 2 } } } . \\
\varphi _ { 0 } = \left\{ \begin{array} { l }
- \arctan \frac { 2 \gamma \Omega } { \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } } \quad \text { при } \quad \Omega < \omega _ { 0 } \\
- \frac { \pi } { 2 } \quad \text { при } \quad \Omega = \omega _ { 0 } \\
- \pi - \arctan \frac { 2 \gamma \Omega } { \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } } \quad \text { при } \quad \Omega > \omega _ { 0 }
\end{array} \right.
\end{gathered}
$$

В2 ${ } ^ { 0.30 }$ Получите точные выражения для резонансной циклической частоты $\Omega _ { \text {рез } }$ и соответствующей ей амплитуды колебаний $A _ { \text {рез } }$. Ответы выразите через $\omega _ { 0 } , \gamma$ и $A _ { 0 }$. Считайте, что $\gamma \sqrt { 2 } < \omega _ { 0 }$.

Дифференцируя знаменатель по $\Omega ^ { 2 }$, получим:

$$
- 2 \left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) + 4 \gamma ^ { 2 } = 0 ,
$$

откуда:

Ответ:

$$
\Omega _ { \mathrm { pe } 3 } = \sqrt { \omega _ { 0 } ^ { 2 } - 2 \gamma ^ { 2 } } .
$$

Подставляя $\Omega _ { \text {рез } }$ в выражение для $A$, находим:

Ответ:

$$
A _ { \text {рез } } = \frac { A _ { 0 } \omega _ { 0 } ^ { 2 } } { 2 \gamma \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } .
$$

Вз ${ } ^ { 0.30 }$ Получите приближённые выражения для $\Omega _ { \text {рез } } , A _ { \text {рез } }$ и $\Delta \omega$ при слабом затухании $\left( \gamma \ll \omega _ { 0 } \right)$.
Ответы выразите через $A _ { 0 } , \omega _ { 0 }$ и $\gamma$.

Упрощённые выражения для $\Omega _ { \text {рез } }$ и $A _ { \text {рез } }$ получаются тривиально и принимают следующий вид:

Ответ:

$$
\Omega _ { \mathrm { pe } 3 } \approx \omega _ { 0 } \quad A _ { \mathrm { pe } 3 } \approx \frac { A _ { 0 } \omega _ { 0 } } { 2 \gamma } .
$$

Рассмотрим циклическую частоту $\Omega = \Omega _ { \text {рез } } + \Delta \Omega$, где $\Delta \Omega \ll \Omega _ { \text {рез } }$.
Величину $\Omega _ { \text {рез } }$ можно считать равной $\omega _ { 0 }$, поскольку:

$$
\Omega _ { \mathrm { pe } 3 } = \sqrt { \omega _ { 0 } ^ { 2 } - 2 \gamma ^ { 2 } } \approx \omega _ { 0 } - \frac { \gamma ^ { 2 } } { \omega _ { 0 } } .
$$

Отклонение $\Omega _ { \text {рез } }$ от $\omega _ { 0 }$ представляет собой величину второго порядка малости.
Тогда для подкоренного выражения получим:

$$
\left( \omega _ { 0 } ^ { 2 } - \Omega ^ { 2 } \right) ^ { 2 } + 4 \gamma ^ { 2 } \Omega ^ { 2 } \approx \left( \omega _ { 0 } ^ { 2 } - \left( \omega _ { 0 } + \Delta \Omega \right) \right) ^ { 2 } + 4 \gamma ^ { 2 } \left( \omega _ { 0 } + \Delta \Omega \right) ^ { 2 } \approx 4 \omega _ { 0 } ^ { 2 } \Delta \Omega ^ { 2 } + 4 \gamma ^ { 2 } \omega _ { 0 } ^ { 2 } .
$$

Величина $\Delta \Omega$ такова, что подкоренное выражение вдвое больше соответствующего резонансу. Отсюда:

$$
4 \Delta \Omega ^ { 2 } \omega _ { 0 } ^ { 2 } + 4 \gamma ^ { 2 } \omega _ { 0 } ^ { 2 } = 8 \gamma ^ { 2 } \omega _ { 0 } ^ { 2 } \Rightarrow \Delta \Omega _ { 1,2 } = \pm \gamma .
$$

Поскольку $\Delta \omega = \Delta \Omega _ { 1 } - \Delta \Omega _ { 2 }$, получим:


Ответ:

$$
\Delta \omega = 2 \gamma .
$$

С1 ${ } ^ { 0.30 }$ Найдите индукцию $B _ { x }$ магнитного поля кольца на его оси в точке с координатой $x$.
Ответ выразите через $x , R , I$ и магнитную постоянную $\mu _ { 0 }$.

Из закона Био-Савара-Лапласа:

$$
d \vec { B } = \frac { \mu _ { 0 } } { 4 \pi } \frac { [ \vec { r } \times d \vec { r } ] } { r ^ { 3 } } ,
$$

где $\vec { r }$ - радиус-вектор элемента кольца относительно точки с координатой $x$.
Для каждой точки кольца:

$$
r = \sqrt { R ^ { 2 } + x ^ { 2 } } .
$$

Интеграл по контуру от векторного произведения получим из его геометрического смысла:

$$
\oint _ { L } [ \vec { r } \times d \vec { r } ] = 2 \vec { S } = 2 \pi R ^ { 2 } \vec { e } _ { x }
$$

откуда:

Ответ:

$$
B _ { x } ( x ) = \frac { \mu _ { 0 } I R ^ { 2 } } { 2 \left( R ^ { 2 } + x ^ { 2 } \right) ^ { 3 / 2 } }
$$

C2 ${ } ^ { 1.00 }$ Определите магнитный момент $\vec { m }$ диска.
Ответ выразите через $\vec { e } _ { x } , r _ { 0 } , h , \rho$ и $\dot { B }$.

Из закона электромагнитной индукции Фарадея получим:

$$
\mathcal { E } _ { \text {инд } } = - \frac { d \Phi } { d t } = - \pi r ^ { 2 } \dot { B } = 2 \pi r E _ { \text {вихр } } ,
$$

откуда:

$$
E _ { \text {вихр } } = - \frac { \dot { B } r } { 2 } .
$$

Из закона Ома в дифференциальной форме:

$$
\vec { j } = \frac { \vec { E } } { \rho } ,
$$

откуда:

$$
j ( r ) = - \frac { \dot { B } r } { 2 \rho } .
$$

Момент кольцевого тока высотой $h$ и толщиной $d r$ равен:

$$
d m _ { x } = \pi r ^ { 2 } d I = \pi r ^ { 2 } j h d r = - \frac { \pi \dot { B } h } { 2 \rho } r ^ { 3 } d r
$$

откуда:

$$
m _ { x } = - \frac { \pi \dot { B } h } { 2 \rho } \int _ { 0 } ^ { r _ { 0 } } r ^ { 3 } d r
$$

Интегрируя, находим:

Ответ:

$$
\vec { m } = - \vec { e } _ { x } \cdot \frac { \pi r _ { 0 } ^ { 4 } h \dot { B } } { 8 \rho }
$$


Ответ выразите через $\vec { e } _ { x } , R _ { 0 } , \rho$ и $\dot { B }$.

Воспользуемся сферическими координатами (т.е будем отсчитывать угол $\theta$ от положительного направления оси $x$ ). Тогда для $r _ { 0 }$ и $h$ имеем:

$$
r _ { 0 } = R _ { 0 } \sin \theta \quad h = d \left( R _ { 0 } ( 1 - \cos \theta ) \right) = R _ { 0 } \sin \theta d \theta
$$

Тогда для элемента магнитного момента шара имеем:

$$
d m _ { x } = - \frac { \pi R _ { 0 } ^ { 5 } \dot { B } } { 8 \rho } \sin ^ { 5 } \theta d \theta
$$

откуда:

$$
m _ { x } = - \frac { \pi R _ { 0 } ^ { 5 } \dot { B } } { 8 \rho } \int _ { 0 } ^ { \pi } \sin ^ { 5 } \theta d \theta
$$

Проинтегрируем полученное выражение с помощью подстановки $x = \cos \theta$ :

$$
\int _ { 0 } ^ { \pi } \sin ^ { 5 } \theta d \theta = \int _ { - 1 } ^ { 1 } \left( 1 - x ^ { 2 } \right) ^ { 2 } d x = \int _ { - 1 } ^ { 1 } \left( 1 - 2 x ^ { 2 } + x ^ { 4 } \right) d x = \left. \left( x - \frac { 2 x ^ { 3 } } { 3 } + \frac { x ^ { 5 } } { 5 } \right) \right| _ { - 1 } ^ { 1 } = \frac { 16 } { 15 }
$$

откуда:

Ответ:

$$
\vec { m } = - \vec { e } _ { x } \cdot \frac { 2 \pi R _ { 0 } ^ { 5 } \dot { B } } { 15 \rho }
$$

С4 ${ } ^ { 0.40 }$ Получите производную по времени индукции магнитного поля кольца в центре шара $d B _ { x } / d t$, эквивалентную величине $\dot { B }$. Ответ выразите через $v , I , R , x$ и магнитную постоянную $\mu _ { 0 }$.

При движении шара индукция магнитного поля $B _ { x } ( x ) = B _ { x } ( x ( t ) )$, т.е является сложной функцией времени, поэтому имеем:

$$
\dot { B } _ { x } = \frac { d B _ { x } } { d t } = \frac { d B _ { x } } { d x } \frac { d x } { d t } = v \frac { d B _ { x } } { d x }
$$

Найдём производную $d B _ { x } / d x$ :

$$
\frac { d B _ { x } } { d x } = - \frac { 3 \mu _ { 0 } I R ^ { 2 } x } { 2 \left( R ^ { 2 } + x ^ { 2 } \right) ^ { \frac { 5 } { 2 } } } ,
$$

откуда:

Ответ:

$$
\dot { B } = - \frac { 3 \mu _ { 0 } I R ^ { 2 } x v } { 2 \left( R ^ { 2 } + x ^ { 2 } \right) ^ { \frac { 5 } { 2 } } } .
$$

С5 ${ } ^ { 0.50 }$ Найдите коэффициент пропорциональности $\beta ( x )$.
Ответ выразите через $I , R , x , R _ { 0 } , \rho$ и магнитную постоянную $\mu _ { 0 }$.

Поскольку шар движется вдоль оси $x$ :

$$
\vec { F } = m _ { x } \cdot \frac { \partial \vec { B } } { \partial x } = \vec { e } _ { x } \cdot m _ { x } \frac { d B _ { x } } { d x }
$$

Для магнитного момента $m _ { x }$ имеем:

$$
m _ { x } = - \frac { 2 \pi R _ { 0 } ^ { 5 } v } { 15 \rho } \cdot \frac { d B _ { x } } { d x } ,
$$

откуда:

$$
F _ { x } = - \frac { 2 \pi R _ { 0 } ^ { 5 } } { 15 \rho } \left( \frac { d B _ { x } } { d x } \right) ^ { 2 } v .
$$

Подставляя $d B _ { x } / d x$, находим:


Ответ:

$$
\beta ( x ) = \frac { 3 \pi \mu _ { 0 } ^ { 2 } I ^ { 2 } R ^ { 4 } R _ { 0 } ^ { 5 } x ^ { 2 } } { 10 \rho \left( R ^ { 2 } + x ^ { 2 } \right) ^ { 5 } } .
$$

C6 ${ } ^ { 0.80 }$ Определите удельное сопротивление $\rho$ шара, используемого в первом эксперименте.
Ответ выразите через $m , k , R _ { 0 } , R , H , I$ и магнитную постоянную $\mu _ { 0 }$.

Первый пик достигается при значении $\Delta x \approx 47$ у.е, а 12-ый - при $\Delta x \approx 6$ y.е.
Отсюда:

$$
\frac { \gamma } { \sqrt { \omega _ { 0 } ^ { 2 } - \gamma ^ { 2 } } } \approx \frac { \ln \left( \frac { 47 } { 6 } \right) } { 11 \cdot 2 \pi } \approx 0,0297 \Rightarrow \frac { \gamma } { \omega _ { 0 } } \approx 0.03 \ll 1 .
$$

При этом имеем:

$$
\frac { \omega _ { 0 } } { 2 \gamma } = \frac { \sqrt { m k } } { \beta ( H ) } ,
$$

откуда:

$$
\beta ( H ) \approx \frac { 2 \gamma \sqrt { m k } } { \omega _ { 0 } } ,
$$

и окончательно

Ответ:

$$
\rho = 15.7 \cdot \frac { \mu _ { 0 } ^ { 2 } I ^ { 2 } R _ { 0 } ^ { 5 } R ^ { 4 } H ^ { 2 } } { \sqrt { m k } \left( R ^ { 2 } + H ^ { 2 } \right) ^ { 5 } }
$$

С7 ${ } ^ { 0.70 }$ Определите удельное сопротивление $\rho$ шара, используемого во втором эксперименте.
Ответ выразите через $m , k , R _ { 0 } , R , H , I$ и магнитную постоянную $\mu _ { 0 }$.

Из выражения для резонансной амплитуды найдём:

$$
Q = \frac { A _ { \text {рез } } } { A _ { 0 } } = \frac { \sqrt { m k } } { \beta ( H ) } \approx 25
$$

откуда окончательно:

Ответ:

$$
\rho = 23.6 \frac { \mu _ { 0 } ^ { 2 } I ^ { 2 } R _ { 0 } ^ { 5 } R ^ { 4 } H ^ { 2 } } { \sqrt { m k } \left( R ^ { 2 } + H ^ { 2 } \right) ^ { 5 } }
$$

D1 ${ } ^ { 0.60 }$ Определите индукцию $B _ { z }$ магнитного поля соленоида, а также её производную $d B _ { z } / d z$ в точке с координатой $z$. Ответ выразите через $\mu _ { 0 } , n , I , R$ и $z$.

Из теоремы о телесном угле для магнитного поля имеем:

$$
B _ { z } = \frac { \mu _ { 0 } i \Omega _ { \text {бок } } } { 4 \pi } ,
$$

где $i = I n$ - линейная плотность токов соленоида, а $\Omega _ { \text {бок } }$ - телесный угол, под которым видна его боковая поверхность.
Телесный угол, под которым видна боковая поверхность соленоида, равен телесному углу, под которым видно его основание из точки с координатой $z$, поэтому имеем:

$$
\Omega _ { \text {бок } } = 2 \pi ( 1 - \cos \alpha ) = 2 \pi \left( 1 - \frac { z } { \sqrt { z ^ { 2 } + R ^ { 2 } } } \right) .
$$

Таким образом:


Ответ:

$$
B _ { z } = \frac { \mu _ { 0 } n I } { 2 } \left( 1 - \frac { z } { \sqrt { z ^ { 2 } + R ^ { 2 } } } \right) .
$$

Дифференцируя, находим:

Ответ:

$$
\frac { d B _ { z } } { d z } = - \frac { \mu _ { 0 } n I R ^ { 2 } } { 2 \left( R ^ { 2 } + z ^ { 2 } \right) ^ { 3 / 2 } }
$$

D2 ${ } ^ { 1.00 }$ Определите линейную плотность тока $i$ на поверхности цилиндра в точке с координатой $z$. Ответ выразите через $\mu _ { 0 } , x$ и $d B _ { z } ( z ) / d z$.

Поскольку снаружи цилиндра индукцию магнитного поля можно считать равной индукции магнитного поля соленоида, имеем:

$$
B _ { z ( \text { in } ) } = B _ { z } ( z - x ) \quad B _ { z ( \text { out } ) } = B ( z ) .
$$

Из теоремы о циркуляции для индукции магнитного поля получим:

$$
\left( B _ { z ( i n ) } - B _ { z ( o u t ) } \right) \approx - x \frac { d B _ { z } } { d z } = \mu _ { 0 } i x
$$

откуда:

Ответ:

$$
i ( z ) = - \frac { x } { \mu _ { 0 } } \frac { d B _ { z } } { d z }
$$

D3 ${ } ^ { 1.50 }$ Определите силу $F _ { x }$, действующую на цилиндр со стороны магнитного поля соленоида. Ответ выразите через $\mu _ { 0 } , r , R , n , I$ и $x$.

Магнитный момент бесконечно малого участка цилиндра составляет:

$$
d m _ { z } = i ( z ) \pi r ^ { 2 } d z .
$$

Для действующей на него силы $d F _ { x }$ имеем:

$$
d F _ { x } = d m _ { z } \frac { d B _ { z } } { d z } .
$$

Подставляя выражение для $i$, получим:

$$
d F _ { x } = - \frac { \pi r ^ { 2 } x } { \mu _ { 0 } } \left( \frac { d B _ { z } } { d z } \right) ^ { 2 } d z .
$$

Воспользуемся выражением для $d B _ { z } / d z$ :

$$
d F _ { x } = - \frac { \mu _ { 0 } \pi r ^ { 2 } n ^ { 2 } I ^ { 2 } x R ^ { 4 } d z } { 4 \left( R ^ { 2 } + z ^ { 2 } \right) ^ { 3 } }
$$

откуда с учётом большого удаление концов цилиндра от оснований соленоида:

$$
F _ { x } \approx - \frac { \mu _ { 0 } \pi r ^ { 2 } n ^ { 2 } I ^ { 2 } R ^ { 4 } x } { 4 } \int _ { - \infty } ^ { \infty } \frac { d z } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { 3 } }
$$

Воспользуемся заменой переменной $z = R \operatorname { tg } \varphi$ и получим:

$$
F _ { x } = \frac { \mu _ { 0 } \pi r ^ { 2 } n ^ { 2 } I ^ { 2 } R ^ { 4 } x } { 4 } \int _ { - \infty } ^ { \infty } \frac { d z } { \left( R ^ { 2 } + z ^ { 2 } \right) ^ { 3 } } = \frac { \mu _ { 0 } \pi r ^ { 2 } n ^ { 2 } I ^ { 2 } x } { 4 R } \int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \varphi d \varphi .
$$

Вычислим последний интеграл:

$$
\begin{aligned}
& \int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \varphi d \varphi = \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 1 + \cos 2 \varphi } { 2 } \right) ^ { 2 } d \varphi = \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 1 } { 4 } + \frac { \cos 2 \varphi } { 2 } + \frac { \cos ^ { 2 } 2 \varphi } { 4 } \right) d \varphi = \\
= & \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 1 } { 4 } + \frac { \cos 2 \varphi } { 2 } + \frac { 1 } { 4 } \left( \frac { 1 + \cos 4 \varphi } { 2 } \right) \right) d \varphi = \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 3 } { 8 } + \frac { \cos 2 \varphi } { 2 } + \frac { \cos 4 \varphi } { 8 } \right) d \varphi =
\end{aligned}
$$


$$
= \left. \left( \frac { 3 \varphi } { 8 } + \frac { \sin 2 \varphi } { 4 } + \frac { \sin 4 \varphi } { 32 } \right) \right| _ { - \pi / 2 } ^ { \pi / 2 } = \frac { 3 \pi } { 8 } .
$$

Таким образом:

Ответ:

$$
F _ { x } = - \frac { 3 \pi ^ { 2 } \mu _ { 0 } \pi r ^ { 2 } n ^ { 2 } I ^ { 2 } } { 32 R } x
$$

D4 ${ } ^ { 0.30 }$ Получите зависимость перемещения стержня $x$ от времени $t$. Ответ выразите через $\mu _ { 0 } , r , R , n , I$ и $m$.

Запишем уравнение движения цилиндра:

$$
m \ddot { x } = - \frac { 3 \mu _ { 0 } \pi ^ { 2 } r ^ { 2 } n ^ { 2 } I ^ { 2 } } { 32 R } x \Rightarrow \omega _ { 0 } ^ { 2 } = \frac { 3 \mu _ { 0 } \pi ^ { 2 } r ^ { 2 } n ^ { 2 } I ^ { 2 } } { 32 m R } \Rightarrow x ( t ) = A \sin \omega _ { 0 } t + B \cos \omega _ { 0 } t .
$$

Определим константы $A$ и $B$ из начальных условий:

$$
\left\{ \begin{array} { l }
x ( 0 ) = B = 0 \\
v _ { x } ( 0 ) = \omega _ { 0 } A = v _ { 0 }
\end{array} \Rightarrow A = \frac { v _ { 0 } } { \omega _ { 0 } } \right.
$$

Таким образом:

Ответ:

$$
x ( t ) = v _ { 0 } \sqrt { \frac { 32 m R } { 3 \mu _ { 0 } \pi ^ { 2 } r ^ { 2 } n ^ { 2 } I ^ { 2 } } } \sin \sqrt { \frac { 3 \mu _ { 0 } \pi ^ { 2 } r ^ { 2 } n ^ { 2 } I ^ { 2 } } { 32 m R } } t .
$$
