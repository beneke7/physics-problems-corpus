---
id: solution-ocr-rupho-x-2024-t3-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2024/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.40 }$ Выразите компоненту скорости $\vec { u } _ { A }$ точки $A$ через компоненту скорости $\vec { u } _ { C }$ центра шара, его угловую скорость $\vec { \omega }$, а также радиус-вектор $\vec { r }$ в произвольный момент.
Получите также производную по времени $\dot { \vec { u } } _ { A }$ вектора $\vec { u } _ { A }$. Ответ выразите через $\dot { \vec { u } } _ { C } , \dot { \vec { \omega } }$ и $\vec { r }$.

Скорость точки $A$ задаётся выражением:

$$
\vec { v } _ { A } = \vec { v } _ { C } + [ \vec { \omega } \times \vec { r } ]
$$

Поскольку вектор $\vec { r }$ перпендикулярен плоскости стены, имеем:

Ответ:

$$
\vec { u } _ { A } = \vec { u } _ { C } + [ \vec { \omega } \times \vec { r } ] .
$$

Поскольку стена плоская - вектор $\vec { r }$ остаётся постоянным в процессе движения, поэтому после дифференцирования имеем:

Ответ:

$$
\dot { \vec { u } } _ { A } = \dot { \vec { u } } _ { C } + [ \dot { \vec { \omega } } \times \vec { r } ] .
$$

A2 ${ } ^ { 0.60 }$ Определите силу трения $\vec { F } _ { 0 }$, действующую на шар в начальный момент контакта со стеной. Ответ выразите через $\vec { e } _ { x } , \vec { e } _ { z } , \alpha , \mu$ и силу нормальной реакции стены $N _ { 0 }$ в начальный момент.

В начальный момент имеем:

$$
\vec { u } _ { C } ( 0 ) = v \sin \alpha \vec { e } _ { x } \quad [ \vec { \omega } ( 0 ) \times \vec { r } ] = - v \cos \alpha \vec { e } _ { z } \Rightarrow \vec { u } _ { A } ( 0 ) = v \left( \sin \alpha \vec { e } _ { x } - \cos \alpha \vec { e } _ { z } \right) .
$$

Обратим внимание, что вектор $\left( \sin \alpha \vec { e } _ { x } - \cos \alpha \vec { e } _ { z } \right)$ является единичным.
Сила трения $\vec { F }$ равна по модулю $\mu N$ и направлена противоположно компоненте скорости $\vec { u } _ { A }$, поэтому:

$$
\vec { F } = - \frac { \vec { u } _ { A } } { \left| \vec { u } _ { A } \right| } \cdot \mu N ,
$$

или же:

Ответ:

$$
\vec { F } = \mu N \left( \cos \alpha \vec { e } _ { z } - \sin \alpha \vec { e } _ { x } \right) .
$$

А3 ${ } ^ { 1.00 }$ Докажите, что производная по времени $\dot { \vec { u } } _ { A }$ компоненты скорости $\vec { u } _ { A }$ связана с силой трения $\vec { F }$ соотношением:

$$
\dot { \vec { u } } _ { A } = \frac { 7 \vec { F } } { 2 m } .
$$

Данный факт можно использовать далее, даже если вы не смогли его доказать.

Из теоремы о движении центра масс для шара следует:

$$
m \dot { \vec { u } } _ { C } = \vec { F } .
$$

Пусть $I = 2 m R ^ { 2 } / 5$ - момент инерции однородного шара относительно диаметра. Поскольку шар сферически симметричен, его момент импульса $\vec { L } _ { C }$ относительно центра масс составляет:

$$
\vec { L } _ { C } = I \vec { \omega } .
$$

Запишем основное уравнение динамики вращательного движения относительно центра масс шара:

$$
\frac { d \vec { L } _ { C } } { d t } = I \dot { \vec { \omega } } = \vec { M } = [ \vec { r } \times \vec { F } ]
$$

Умножая векторно слева на $\vec { r }$, получим:

$$
I [ \vec { r } \times \dot { \vec { \omega } } ] = [ \vec { r } \times [ \vec { r } \times \vec { F } ] ] = \vec { r } ( \vec { r } \cdot \vec { F } ) - r ^ { 2 } \vec { F } = - r ^ { 2 } \vec { F } \Rightarrow \vec { F } = \frac { I [ \dot { \vec { \omega } } \times \vec { r } ] } { r ^ { 2 } }
$$

В последнем переходе мы учли, что $\vec { r } \perp \vec { F }$.
Воспользуемся результатом пункта А1:

$$
\dot { \vec { u } } _ { A } = \dot { \vec { u } } _ { C } + [ \dot { \vec { \omega } } \times \vec { r } ] = \frac { \vec { F } } { m } + \frac { \vec { F } r ^ { 2 } } { I } = \frac { 7 \vec { F } } { 2 m } .
$$


А4 ${ } ^ { 0.50 }$ Определите компоненту скорости $\vec { u } _ { A \kappa }$ сразу после соударения, считая, что шар проскальзывает по стенке в течение всего времени соударения. Ответ выразите через $v , \alpha , \mu , \vec { e } _ { x }$ и $\vec { e } _ { z }$.
При каком максимальном значении коэффициента трения $\mu _ { \text {max } }$ проскальзывание не прекращается в течение всего времени соударения? Ответ выразите через $\alpha$.

Вектор силы трения $\vec { F }$ направлен против компоненты скорости $\vec { u } _ { A }$ и сонаправлен с производной компоненты скорости $\dot { \vec { u } } _ { A }$. Из этого следует, что направления $\vec { u } _ { A }$ и $\vec { F }$ сохраняются в процессе соударения. Тогда из пункта А3 имеем:

$$
\frac { d u _ { A } } { d t } = - \frac { 7 F } { 2 m } = - \frac { 7 \mu N } { 2 m } \Rightarrow u _ { A \kappa } - u _ { A } ( 0 ) = u _ { A \kappa } - v = - \frac { 7 \mu } { 2 m } \int _ { 0 } ^ { t } N d t .
$$

До соударения компонента скорости центра шара $v _ { C y } ( 0 )$ равна $- v \cos \alpha$. Поскольку удар упругий, сразу после соударения компонента скорости центра шара $v _ { C y }$ равна $v \cos \alpha$. Тогда для импульса силы реакции $N$ имеем:

$$
\int _ { 0 } ^ { t } N d t = \Delta p _ { y } = 2 m v \cos \alpha
$$

Таким образом:

$$
u _ { A \kappa } = v ( 1 - 7 \mu \cos \alpha ) ,
$$

Проскальзывание не прекращается, если $u _ { A \kappa } \geq 0$, что приводит к следующему ограничению на $\mu$ :

$$
\mu \leq \frac { 1 } { 7 \cos \alpha } .
$$

Если же $\mu \geq 1 / ( 7 \cos \alpha )$, то $u _ { \text {Ак } } = 0$.
Окончательно:

Ответ:

$$
\vec { u } _ { A \kappa } = \left\{ \begin{array} { l }
v ( 1 - 7 \mu \cos \alpha ) \left( \sin \alpha \vec { e } _ { x } - \cos \alpha \vec { e } _ { z } \right) \quad \text { при } \quad \mu \leq \frac { 1 } { 7 \cos \alpha } \\
0 \quad \text { при } \quad \mu \geq \frac { 1 } { 7 \cos \alpha }
\end{array} \right.
$$

А5 ${ } ^ { 0.60 }$ При $\mu < \mu _ { \text {max } }$ определите скорость центра шара $\vec { v } _ { C ^ { \prime } }$ а также под каким углом $\beta$ к горизонту она направлена сразу после соударения. Ответы выразите через $v , \alpha , \mu , \vec { e } _ { x } , \vec { e } _ { y }$ и $\vec { e } _ { z }$.

Для угла $\beta$ имеем:

$$
\beta = \operatorname { arctg } \frac { v _ { C z } } { \sqrt { v _ { C x } ^ { 2 } + v _ { C y } ^ { 2 } } } .
$$

После удара вектор скорости центра шара составляет:

$$
\vec { v } _ { C } = v \cos \alpha \vec { e } _ { y } + \vec { u } _ { C } .
$$

Для $\vec { u } _ { C }$ имеем:

$$
\vec { u } _ { C } = \vec { u } _ { C } ( 0 ) + \int _ { 0 } ^ { t } \frac { \vec { F } d t } { m } = v \sin \alpha \vec { e } _ { x } + \frac { 2 \left( \vec { u } _ { A } - \vec { u } _ { A } ( 0 ) \right) } { 7 }
$$

При $\mu \leq 1 / ( 7 \cos \alpha )$ имеем:

$$
\vec { u } _ { C } = v \sin \alpha \vec { e } _ { x } - \frac { 2 } { 7 } \cdot 7 \mu v \cos \alpha \left( \sin \alpha \vec { e } _ { x } - \cos \alpha \vec { e } _ { z } \right) = v \sin \alpha ( 1 - 2 \mu \cos \alpha ) \vec { e } _ { x } + 2 \mu v \cos ^ { 2 } \alpha \vec { e } _ { z } .
$$

Таким образом:

$$
\vec { v } _ { C } = v \sin \alpha ( 1 - 2 \mu \cos \alpha ) \vec { e } _ { x } + v \cos \alpha \vec { e } _ { y } + 2 \mu v \cos ^ { 2 } \alpha \vec { e } _ { z } ,
$$

или же:

$$
\beta = \operatorname { arctg } \frac { 2 \mu \cos ^ { 2 } \alpha } { \sqrt { \cos ^ { 2 } \alpha + \sin ^ { 2 } \alpha ( 1 - 2 \mu \cos \alpha ) ^ { 2 } } } .
$$

Если же $\mu \geq 1 / ( 7 \cos \alpha ) - \vec { u } _ { A } = 0$. Тогда:

$$
\vec { u } _ { C } = v \sin \alpha \vec { e } _ { x } - \frac { 2 v \left( \sin \alpha \vec { e } _ { x } - \cos \alpha \vec { e } _ { z } \right) } { 7 } = \frac { 5 v \sin \alpha \vec { e } _ { x } } { 7 } + \frac { 2 v \cos \alpha \vec { e } _ { z } } { 7 } .
$$

Таким образом:

$$
\vec { v } _ { C } = \frac { 5 v \sin \alpha \vec { e } _ { x } } { 7 } + v \cos \alpha \vec { e } _ { y } + \frac { 2 v \cos \alpha \vec { e } _ { z } } { 7 } ,
$$


или же:

$$
\beta = \operatorname { arctg } \frac { 2 \cos \alpha } { \sqrt { ( 5 \sin \alpha ) ^ { 2 } + ( 7 \cos \alpha ) ^ { 2 } } }
$$

Окончательно:

Ответ:

$$
\beta = \left\{ \begin{array} { c l }
\operatorname { arctg } \frac { 2 \mu \cos ^ { 2 } \alpha } { \sqrt { \cos ^ { 2 } \alpha + \sin ^ { 2 } \alpha ( 1 - 2 \mu \cos \alpha ) ^ { 2 } } } & \text { при } \quad \mu \leq \frac { 1 } { 7 \cos \alpha } \\
\operatorname { arctg } \frac { 2 \cos \alpha } { \sqrt { ( 5 \sin \alpha ) ^ { 2 } + ( 7 \cos \alpha ) ^ { 2 } } } \quad \text { при } \quad \mu \geq \frac { 1 } { 7 \cos \alpha }
\end{array} \right.
$$

А6 ${ } ^ { 0.40 }$ При $\mu < \mu _ { \text {max } }$ определите координаты $x _ { C } , y _ { C }$ центра шара в момент его падения на стол. Ответы выразите через $v , g , \mu$ и $\alpha$.

Шар упадёт на поверхность стола через время $t$, равное:

$$
t = \frac { 2 v _ { C z } } { g }
$$

Тогда для координат $x _ { C }$ и $y _ { C }$ имеем:

$$
x _ { C } = v _ { C x } t = \frac { 2 v _ { C x } v _ { C z } } { g } \quad y _ { C } = v _ { C y } t = \frac { 2 v _ { C y } v _ { C z } } { g } .
$$

Подставляя $v _ { C x } , v _ { C y }$ и $v _ { C z }$ при разных значениях $\mu$, получим:

Ответ:

$$
x _ { C } = \left\{ \begin{array} { l }
\frac { 4 \mu v ^ { 2 } \cos ^ { 2 } \alpha \sin \alpha ( 1 - 2 \mu \cos \alpha ) } { g } \quad \text { при } \quad \mu \leq \frac { 1 } { 7 \cos \alpha } \\
\frac { 10 v ^ { 2 } \sin 2 \alpha } { 49 g } \quad \text { при } \quad \mu \geq \frac { 1 } { 7 \cos \alpha }
\end{array} \right.
$$

Ответ:

$$
y _ { C } = \left\{ \begin{array} { c c c }
\frac { 4 \mu v ^ { 2 } \cos ^ { 3 } \alpha } { g } & \text { при } & \mu \leq \frac { 1 } { 7 \cos \alpha } \\
\frac { 4 v ^ { 2 } \cos ^ { 2 } \alpha } { 7 g } & \text { при } & \mu \geq \frac { 1 } { 7 \cos \alpha }
\end{array} \right.
$$

А7 ${ } ^ { 1.00 }$ При произвольных значениях $\mu$ определите количество теплоты $Q$, выделившееся в процессе соударения шара со стенкой. Ответ выразите через $m$, $v , \mu$ и $\alpha$.
Примечание: явное вычисление работы силы трения существенно упростит решение задачи.

Для мощности $P _ { F }$ силы трения имеем:

$$
P _ { F } = \vec { F } \cdot \vec { u } _ { A } = \frac { 2 m \vec { u } _ { A } \cdot \dot { \vec { u } } _ { A } } { 7 } .
$$

Тогда для количества теплоты $Q$ имеем:

$$
Q = - \int _ { 0 } ^ { t } P _ { F } d t = \int _ { u _ { A \kappa } } ^ { u _ { A } ( 0 ) } \frac { 2 m u _ { A } \dot { u } _ { A } } { 7 } = \frac { m \left( u _ { A } ^ { 2 } ( 0 ) - u _ { A \kappa } ^ { 2 } \right) } { 7 } .
$$

Учитывая, что $u _ { A } ( 0 ) = v$, а также выражение для $u _ { A \kappa } ( \mu )$, получим:

Ответ:

$$
Q = \left\{ \begin{array} { l }
m v ^ { 2 } \left( 2 \mu \cos \alpha - 7 \mu ^ { 2 } \cos ^ { 2 } \alpha \right) \quad \text { при } \quad \mu \leq \frac { 1 } { 7 \cos \alpha } \\
\frac { m v ^ { 2 } } { 7 } \quad \text { при } \quad \mu \geq \frac { 1 } { 7 \cos \alpha }
\end{array} \right.
$$


Радиус-вектор $\vec { r } _ { C }$ центра шара можно представить в следующей форме:

$$
\vec { r } _ { C } = r \vec { e } _ { r } + z \vec { e } _ { z } .
$$

Дифференцируя:

$$
\vec { v } _ { C } = \frac { d \vec { r } _ { C } } { d t } = r \dot { \vec { e } } _ { r } + \dot { z } \vec { e } _ { z } = r \dot { \varphi } \vec { e } _ { \varphi } + \dot { z } \vec { e } _ { z }
$$

Таким образом:

Ответ:

$$
v _ { \varphi } = r \dot { \varphi } \quad v _ { z } = \dot { z } .
$$

В2 ${ } ^ { 0.30 }$ Определите компоненты вектора ускорения центра шара $a _ { r } , a _ { \varphi }$ и $a _ { z }$ в цилиндрической системе координат. Ответы выразите через $r , v _ { \varphi } , \dot { v } _ { \varphi }$ и $\dot { v } _ { z }$.

Продифференцируем вектор скорости по времени:

$$
\vec { a } _ { C } = \frac { d \vec { v } _ { C } } { d t } = v _ { \varphi } \dot { \vec { e } } _ { \varphi } + \dot { v } _ { \varphi } \vec { e } _ { \varphi } + \dot { v } _ { z } \vec { e } _ { z } = - v _ { \varphi } \dot { \varphi } \vec { e } _ { r } + \dot { v } _ { \varphi } \vec { e } _ { \varphi } + \dot { v } _ { z } \vec { e } _ { z } .
$$

Учитывая, что $v _ { \varphi } = r \dot { \varphi }$, получим:

Ответ:

$$
a _ { r } = - \frac { v _ { \varphi } ^ { 2 } } { r } \quad a _ { \varphi } = \dot { v } _ { \varphi } \quad a _ { z } = \dot { v } _ { z } .
$$

В3 ${ } ^ { 0.40 }$ Из условия отсутствия проскальзывания определите компоненты угловой скорости шара $\omega _ { \varphi }$ и $\omega _ { z }$ в цилиндрической системе координат. Ответы выразите через $r , v _ { \varphi }$ и $v _ { z }$.

Для скорости точки $A$ шара, в которой он контактирует с краем стола, имеем:

$$
\vec { v } _ { A } = \vec { v } _ { C } + [ \vec { \omega } \times \overrightarrow { C A } ]
$$

где $\overrightarrow { C A }$ - вектор, проведённый от центра $C$ шара в точку $A$.
Запишем условие равенства нулю скорости точки $A$ шара, в которой он контактирует с краем стола:

$$
v _ { A \varphi } = v _ { \varphi } - \omega _ { z } r \quad v _ { A z } = v _ { z } + \omega _ { \varphi } r
$$

Таким образом:

Ответ:

$$
\omega _ { z } = \frac { v _ { \varphi } } { r } \quad \omega _ { \varphi } = - \frac { v _ { z } } { r } .
$$

С1 ${ } ^ { 0.80 }$ Определите компоненту силу трения $F _ { \varphi } ( \varphi )$, действующую на шар, а также компоненту ускорения $a _ { \varphi } ( \varphi )$ его центра. Ответы выразите через массу шара $m , g$ и $\varphi$.

Запишем теорему о движении центра масс для шара в проекции на ось, направленную вдоль вектора $e _ { \varphi }$ :

$$
m a _ { \varphi } = F _ { \varphi } + m g \sin \varphi .
$$

Запишем уравнение динамики вращательного движения относительно оси $z$, проходящей через центр шара:

$$
I _ { C } \varepsilon _ { z } = I _ { C } \dot { \omega } _ { z } = - r F _ { \varphi } .
$$

Поскольку $\dot { \omega } _ { z } = \dot { v } _ { \varphi } / r = a _ { \varphi } / r$, после деления уравнений получим:

$$
\frac { m r ^ { 2 } } { I _ { C } } = - \frac { F _ { \varphi } + m g \sin \varphi } { F _ { \varphi } } ,
$$

откуда:


Ответ:

$$
F _ { \varphi } = - \frac { m g \sin \varphi } { 1 + m r ^ { 2 } / I _ { C } } = - \frac { 2 m g \sin \varphi } { 7 } .
$$

Исключая $F _ { \varphi }$, получим:

Ответ:

$$
a _ { \varphi } = \frac { m g r ^ { 2 } \sin \varphi } { I _ { C } + m r ^ { 2 } } = \frac { 5 g \sin \varphi } { 7 } .
$$

С2 ${ } ^ { 0.50 }$ Получите зависимость $v _ { \varphi } ( \varphi )$. Ответ выразите через $v , g , r , \alpha$ и $\varphi$.

Умножая выражение для $v _ { \varphi }$ и учитывая, что $v _ { \varphi } = r \dot { \varphi }$, получим:

$$
a _ { \varphi } v _ { \varphi } = v _ { \varphi } \dot { v } _ { \varphi } = \frac { 5 g v _ { \varphi } \sin \varphi } { 7 } = \frac { 5 g r \sin \varphi \dot { \varphi } } { 7 } .
$$

Проинтегрируем полученное выражение по времени:

$$
\int _ { v \cos \alpha } ^ { v _ { \varphi } ( \varphi ) } v _ { \varphi } d v _ { \varphi } = \int _ { 0 } ^ { \varphi } \frac { 5 g r \sin \varphi d \varphi } { 7 } \Rightarrow \frac { v _ { \varphi } ^ { 2 } - v ^ { 2 } \cos ^ { 2 } \alpha } { 2 } = \frac { 5 g r ( 1 - \cos \varphi ) } { 7 } .
$$

Таким образом:

Ответ:

$$
v _ { \varphi } = \sqrt { v ^ { 2 } \cos ^ { 2 } \alpha + \frac { 10 g r ( 1 - \cos \varphi ) } { 7 } } .
$$

C3 ${ } ^ { 0.20 }$ При каком условии шар не отрывается от стола в момент, когда нижняя точка шара достигает его края? Запишите это условие через $v , g , r$ и $\alpha$. Во всех дальнейших пунктах считайте, что это условие выполняется.

Для силы реакции $N$ в момент, когда нижняя точка шара достигает края стола, для силы реакции $N$ имеем:

$$
N = m g - \frac { m v ^ { 2 } \cos ^ { 2 } \alpha } { r } .
$$

Отрыва нет при условии $N \geq 0$, поэтому:

Ответ:

$$
v \cos \alpha \leq \sqrt { g r } .
$$

C4 ${ } ^ { 0.50 }$ Определите угол $\varphi _ { 1 }$ в момент отрыва шара от стола. Ответ выразите через $v , g , r$ и $\alpha$.

В момент отрыва шара от стола $N = 0$, поэтому имеем:

$$
N = m g \cos \varphi _ { 1 } - \frac { m v _ { \varphi _ { 1 } } ^ { 2 } } { r } .
$$

Приравняем два выражения для $v _ { \varphi } ^ { 2 }$ :

$$
v _ { \varphi _ { 1 } } ^ { 2 } = g r \cos \varphi _ { 1 } = v ^ { 2 } \cos ^ { 2 } \alpha + \frac { 10 g r \left( 1 - \cos \varphi _ { 1 } \right) } { 7 } .
$$

Таким образом:

$$
\cos \varphi _ { 1 } = \frac { 10 g r + 7 v ^ { 2 } \cos ^ { 2 } \alpha } { 17 g r } ,
$$

откуда для $\varphi _ { 1 }$ находим:


Ответ:

$$
\varphi _ { 1 } = \arccos \left( \frac { 10 } { 17 } + \frac { 7 v ^ { 2 } \cos ^ { 2 } \alpha } { 17 g r } \right) .
$$

D1 ${ } ^ { 0.50 }$ Выразите кинетическую энергию шара $E _ { k }$ через $m , v _ { \varphi } , v _ { z } , \omega _ { r } и r$.

Воспользуемся теоремой Кёнига:

$$
E _ { k } = \frac { m v _ { C } ^ { 2 } } { 2 } + \frac { I _ { C } \omega ^ { 2 } } { 2 } = \frac { m v _ { \varphi } ^ { 2 } } { 2 } + \frac { m v _ { z } ^ { 2 } } { 2 } + \frac { I _ { C } \omega _ { r } ^ { 2 } } { 2 } + \frac { I _ { C } \omega _ { \varphi } ^ { 2 } } { 2 } + \frac { I _ { C } \omega _ { z } ^ { 2 } } { 2 } .
$$

Подставляя $\omega _ { \varphi }$ и $\omega _ { z }$, получим:

Ответ:

$$
E _ { k } = \left( m + \frac { I _ { C } } { r ^ { 2 } } \right) \frac { v _ { \varphi } ^ { 2 } } { 2 } + \left( m + \frac { I _ { C } } { r ^ { 2 } } \right) \frac { v _ { z } ^ { 2 } } { 2 } + \frac { I _ { C } \omega _ { r } ^ { 2 } } { 2 } = \frac { 7 m \left( v _ { \varphi } ^ { 2 } + v _ { z } ^ { 2 } \right) } { 10 } + \frac { m r ^ { 2 } \omega _ { r } ^ { 2 } } { 5 } .
$$

D2 ${ } ^ { 0.60 }$ Запишите для шара закон сохранения механической энергии. Комбинируя его с результатом пункта C2, покажите, что величины $\omega _ { r }$ и $v _ { z }$ связаны соотношением:

$$
1 = \frac { \omega _ { r } ^ { 2 } } { A ^ { 2 } } + \frac { v _ { z } ^ { 2 } } { B ^ { 2 } } ,
$$

где $A , B > 0$ - постоянные коэффициенты.
Определите $A$ и $B$. Ответы выразите через $v , r$ и $\alpha$.

Закон сохранения энергии выглядит следующим образом:

$$
E _ { k } = \frac { 7 m \left( v _ { \varphi } ^ { 2 } + v _ { z } ^ { 2 } \right) } { 10 } + \frac { m r ^ { 2 } \omega _ { r } ^ { 2 } } { 5 } = E _ { k 0 } + A _ { \text {тяж } } = \frac { 7 m v ^ { 2 } } { 10 } + m g r ( 1 - \cos \varphi ) .
$$

откуда:

$$
v _ { \varphi } ^ { 2 } = v ^ { 2 } + \frac { 10 g r ( 1 - \cos \varphi ) } { 7 } - v _ { z } ^ { 2 } - \frac { 2 \omega _ { r } ^ { 2 } r ^ { 2 } } { 7 } .
$$

Подставляя зависимость $v _ { \varphi } ^ { 2 } ( \varphi )$, получим:

$$
v ^ { 2 } \cos ^ { 2 } \alpha + \frac { 10 g r ( 1 - \cos \varphi ) } { 7 } = v ^ { 2 } + \frac { 10 g r ( 1 - \cos \varphi ) } { 7 } - v _ { z } ^ { 2 } - \frac { 2 \omega _ { r } ^ { 2 } r ^ { 2 } } { 7 } ,
$$

откуда:

$$
v _ { z } ^ { 2 } + \frac { 2 \omega _ { r } ^ { 2 } r ^ { 2 } } { 7 } = v ^ { 2 } \sin ^ { 2 } \alpha \Rightarrow 1 = \frac { v _ { z } ^ { 2 } } { v ^ { 2 } \sin ^ { 2 } \alpha } + \frac { 2 \omega _ { r } ^ { 2 } r ^ { 2 } } { 7 v ^ { 2 } \sin ^ { 2 } \alpha } .
$$

Для $A$ и $B$ имеем:

Ответ:

$$
A = \sqrt { \frac { 7 } { 2 } } \frac { v \sin \alpha } { r } \quad B = v \sin \alpha
$$

D3 ${ } ^ { 0.50 }$ Вектор углового ускорения $\vec { \varepsilon }$ шара может быть представлен в виде:

$$
\vec { \varepsilon } = \varepsilon _ { r } \vec { e } _ { r } + \varepsilon _ { \varphi } \vec { e } _ { \varphi } + \varepsilon _ { z } \vec { e } _ { z } .
$$

Используя уравнение динамики вращательного движения относительно центра шара, покажите, что $\varepsilon _ { r } = 0$. Используя полученное равенство, выразите $\dot { \omega } _ { r }$ через $\dot { \varphi } _ { , } v _ { z }$ и $r$.

Из уравнения динамики вращательного движения относительно центра шара имеем:

$$
\frac { d \vec { L } _ { C } } { d t } = I \vec { \varepsilon } = [ \overrightarrow { C A } \times ( \vec { F } + \vec { N } ) ]
$$


Поскольку $\vec { N } \| \overrightarrow { C A }$, имеем:

$$
I \vec { \varepsilon } = [ \overrightarrow { C A } \times \vec { F } ]
$$

Ответ: Поскольку $\vec { \varepsilon } \perp \overrightarrow { C A }$, компонента углового ускорения $\varepsilon _ { r } = 0$.

Воспользуемся выражением для углового ускорения в цилиндрической системе координат:

$$
\varepsilon _ { r } = \dot { \omega } _ { r } - \dot { \varphi } \omega _ { \varphi } = 0
$$

откуда:

Ответ:

$$
\dot { \omega } _ { r } = - \frac { \dot { \varphi } v _ { z } } { r } .
$$

D4 ${ } ^ { 1.20 }$ Комбинируя результаты пунктов D 2 и D 3 , получите зависимости $\omega _ { r } ( \varphi )$ и $v _ { z } ( \varphi )$. Ответы выразите через $v , \alpha , r$ и $\varphi$.

Воспользуемся результатом пункта B4:

$$
\dot { \omega } _ { r } = - \frac { \dot { \varphi } v _ { z } } { r } .
$$

Выражая $v _ { z }$ и подставляя в уравнение, полученное в предыдущем пункте, находим:

$$
1 = \frac { \omega _ { r } ^ { 2 } } { A ^ { 2 } } + \frac { r ^ { 2 } \dot { \omega } _ { r } ^ { 2 } } { B ^ { 2 } \dot { \varphi } ^ { 2 } }
$$

Обратим внимание, что это уравнение с разделяющимися переменными $\omega _ { r }$ и $\varphi$ :

$$
d \varphi = - \frac { r } { B } \frac { d \omega _ { r } } { \sqrt { 1 - \frac { \omega _ { r } ^ { 2 } } { A ^ { 2 } } } } .
$$

Здесь мы учли, что $\dot { \omega } _ { r } < 0$, а значит и $\omega _ { r } < 0$.
Вводя переменную $t = \omega _ { r } / A$ и интегрируя, находим:

$$
\varphi = - \frac { r A } { B } \int _ { 0 } ^ { t ( \varphi ) } \frac { d t } { \sqrt { 1 - t ^ { 2 } } } = - \left. \frac { r A } { B } \arcsin t \right| _ { 0 } ^ { t ( \varphi ) } \Rightarrow t ( \varphi ) = - \sin \left( \frac { B \varphi } { r A } \right)
$$

или же:

$$
\omega _ { r } ( \varphi ) = - A \sin \left( \frac { B \varphi } { r A } \right) .
$$

Подставляя $t ( \varphi )$ в уравнение, связывающее $v _ { z }$ и $\omega _ { r }$, находим:

$$
\frac { v _ { z } ^ { 2 } } { B ^ { 2 } } = 1 - t ^ { 2 } = \cos ^ { 2 } \left( \frac { B \varphi } { r A } \right)
$$

или же:

$$
v _ { z } = B \cos \left( \frac { B \varphi } { r A } \right) ,
$$

поскольку $v _ { z } ( 0 ) > 0$.
Окончательно:

Ответ:

$$
\omega _ { r } ( \varphi ) = - \sqrt { \frac { 7 } { 2 } } \frac { v \sin \alpha } { r } \sin \left( \sqrt { \frac { \overline { 2 } } { 7 } \varphi } \right) \quad v _ { z } = v \sin \alpha \cos \left( \sqrt { \frac { \overline { 2 } } { 7 } \varphi } \right) .
$$

D5 ${ } ^ { 0,80 }$ Рассмотрим предельный переход, когда угол $\alpha \rightarrow \pi / 2$, т.е движение шара до контакта с краем стола происходит практически параллельно ему. Определите проекцию скорости $v _ { z }$ центра шара, а также проекцию его угловой скорости $\omega _ { y }$ на ось $y$, направленную вертикально вниз, в момент отрыва шара от стола. Ответы выразите через $v$ и $r$. Все численные коэффициенты в ответе должны быть аналитическими, а не приближёнными!

При $\alpha = \pi / 2$ для $\varphi _ { 1 }$ имеем:


$$
\varphi _ { 1 } = \arccos \left( \frac { 10 } { 17 } \right) .
$$

Ответ: Тогда для скорости $v _ { z }$ находим:

$$
v _ { z } = v \cos \left( \sqrt { \frac { 2 } { 7 } } \arccos \left( \frac { 10 } { 17 } \right) \right) .
$$

Проекция угловой скорости шара на ось $y$, направленную вертикально вниз, равна:

$$
\omega _ { y } = \omega _ { \varphi } \sin \varphi _ { 1 } - \omega _ { r } \cos \varphi _ { 1 } .
$$

Подставляя $\omega _ { r } , \omega _ { \varphi }$, получим:

$$
\omega _ { y } = \frac { v } { r } \left( \sqrt { \frac { 7 } { 2 } } \cos \varphi _ { 1 } \sin \left( \sqrt { \frac { \overline { 2 } } { 7 } } \varphi _ { 1 } \right) - \sin \varphi _ { 1 } \cos \left( \sqrt { \frac { \overline { 2 } } { 7 } \varphi _ { 1 } } \right) \right) .
$$

После подстановки $\varphi _ { 1 }$ находим:

Ответ:

$$
\omega _ { y } = \frac { v } { r } \left( \sqrt { \frac { 7 } { 2 } } \frac { 10 } { 17 } \sin \left( \sqrt { \frac { 2 } { 7 } } \arccos \left( \frac { 10 } { 17 } \right) \right) - \frac { \sqrt { 189 } } { 17 } \cos \left( \sqrt { \frac { 2 } { 7 } } \arccos \left( \frac { 10 } { 17 } \right) \right) \right) .
$$
