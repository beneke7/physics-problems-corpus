---
id: solution-ocr-rupho-x-2022-t2-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2022/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.10 }$ Выразите $\dot { v } _ { x }$ через $F _ { x }$ и $m$.

Из теоремы о движении центра масс

$$
F _ { x } = m \dot { v } _ { x }
$$

откуда

$$
\dot { v } _ { x } = \frac { F _ { x } } { m }
$$

Ответ:

$$
\dot { v } _ { x } = \frac { F _ { x } } { m }
$$

А2 ${ } ^ { 0.40 }$ Выразите $\dot { \omega }$ через $F _ { x } , N , L , \varphi$ и $m$.

Из уравнения динамики вращательного движения относительно центра масс

$$
I _ { O } \dot { \omega } = \frac { m L ^ { 2 } \dot { \omega } } { 3 } = N L \sin \varphi - F _ { x } L \cos \varphi
$$

откуда

$$
\dot { \omega } = \frac { 3 } { m L } \left( N \sin \varphi - F _ { x } \cos \varphi \right)
$$

Ответ:

$$
\dot { \omega } = \frac { 3 } { m L } \left( N \sin \varphi - F _ { x } \cos \varphi \right)
$$

А3 ${ } ^ { 0.10 }$ Выразите $v _ { A x }$ через $\omega , v _ { x } , \varphi$ и $L$.

Из теоремы о сложении скоростей

$$
\vec { v } _ { A } = \vec { v } _ { O } + \vec { v } _ { \text {отн } }
$$

откуда

$$
v _ { A _ { x } } = v _ { x } - \omega L \cos \varphi
$$

Ответ:

$$
v _ { A _ { x } } = v _ { x } - \omega L \cos \varphi
$$

A4 ${ } ^ { 0.40 }$ Докажите, что $v _ { A x } \leq 0$ при любых значениях $\mu$ и $\varphi$.

Если $v _ { A _ { x } } > 0$, то $F _ { x } = - \mu N$
Тогда

$$
\omega L = - \frac { 3 v _ { x } } { \mu } ( \sin \varphi + \mu \cos \varphi )
$$

или же

$$
v _ { A _ { x } } = v _ { x } \left( 1 + \frac { 3 \cos \varphi } { \mu } ( \sin \varphi + \mu \cos \varphi ) \right)
$$

Но при этом $v _ { x } < 0$, поэтому $v _ { A _ { x } } < 0$, что приводит к противоречию.


В данном случае $F _ { x } = \mu N$. Тогда

$$
\omega L = \frac { 3 v _ { x } } { \mu } ( \sin \varphi - \mu \cos \varphi )
$$

или же

$$
v _ { A _ { x } } = v _ { x } \left( 1 - \frac { 3 \cos \varphi } { \mu } ( \sin \varphi - \mu \cos \varphi ) \right)
$$

Ответ:

$$
v _ { A _ { x } } = v _ { x } \left( 1 - \frac { 3 \cos \varphi } { \mu } ( \sin \varphi - \mu \cos \varphi ) \right)
$$

А6 ${ } ^ { 0.60 }$ При каком минимально возможном значении $\mu _ { 0 }$ проскальзывание невозможно ни при каких значениях угла $\varphi$ ?

Учитывая, что

$$
\begin{aligned}
& \sin 2 \varphi = 2 \sin \varphi \cos \varphi \\
& \cos ^ { 2 } \varphi = \frac { 1 + \cos 2 \varphi } { 2 }
\end{aligned}
$$

после несложных преобразований

$$
v _ { A _ { x } } = - \frac { v _ { x } } { 2 \mu } ( 3 \sin 2 \varphi - 3 \mu \cos 2 \varphi - 5 \mu )
$$

Вводя переменную $\varphi _ { 0 } = \arctan \mu$

$$
v _ { A _ { x } } = - \frac { v _ { x } } { 2 \mu } \left( 3 \sqrt { 1 + \mu ^ { 2 } } \sin \left( 2 \varphi - \varphi _ { 0 } \right) - 5 \mu \right)
$$

Условие $v _ { A _ { x } } < 0$ реализуется тогда когда выражение в скобках положительно. Поскольку $\sin \left( 2 \varphi - \varphi _ { 0 } \right) \leq 1$

$$
\frac { 5 \mu } { 3 \sqrt { 1 + \mu ^ { 2 } } } \leq 1
$$

или же

$$
\mu _ { 0 } = \frac { 3 } { 4 }
$$

второй способ

При наличии проскальзывания $F _ { x } = \mu N$. Тогда можем выразить $\mu$ через $\varphi$ как

$$
\mu = \frac { 3 \cos \varphi \sin \varphi } { 1 + 3 \cos ^ { 2 } \varphi }
$$

Найдём производную

$$
\frac { d \mu } { d \varphi } = \frac { 3 } { 1 + 3 \cos ^ { 2 } \varphi } \left( \left( \cos ^ { 2 } \varphi - \sin ^ { 2 } \varphi \right) \left( 1 + 3 \cos ^ { 2 } \varphi \right) + 6 \sin ^ { 2 } \varphi \cos ^ { 2 } \varphi \right)
$$

откуда найдём точку экстремума

$$
\varphi = \arctan ( 2 )
$$

и соответствующее максимальное значение

$$
\mu _ { 0 } = \frac { 3 } { 4 }
$$

Ответ:

$$
\mu _ { 0 } = \frac { 3 } { 4 }
$$


A7 ${ } ^ { 0.80 }$ Для $\mu < \mu _ { 0 }$ найдите все значения угла $\varphi$, при которых проскальзывание возможно. Границы диапазона углов выразите через $\mu$.

Условие положительной величины в скобках следующее

$$
\arcsin \frac { 5 \mu } { 3 \sqrt { 1 + \mu ^ { 2 } } } \leq 2 \varphi - \varphi _ { 0 } \leq \pi - \arcsin \frac { 5 \mu } { 3 \sqrt { 1 + \mu ^ { 2 } } }
$$

откуда

$$
\frac { \arcsin \frac { 5 \mu } { 3 \sqrt { 1 + \mu ^ { 2 } } } + \arctan \mu } { 2 } \leq \varphi \leq \frac { \pi - \arcsin \frac { 5 \mu } { 3 \sqrt { 1 + \mu ^ { 2 } } } + \arctan \mu } { 2 }
$$

второй способ

Решим уравнение

$$
\mu = \frac { 3 \cos \varphi \sin \varphi } { 1 + 3 \cos ^ { 2 } \varphi }
$$

в результате преобразования которого получим два корня

$$
\varphi _ { 1 } = \arctan \frac { 3 - \sqrt { 9 - 16 \mu ^ { 2 } } } { 2 \mu } , \varphi _ { 2 } = \arctan \frac { 3 + \sqrt { 9 - 16 \mu ^ { 2 } } } { 2 \mu }
$$

откуда

$$
\arctan \frac { 3 - \sqrt { 9 - 16 \mu ^ { 2 } } } { 2 \mu } \leq \varphi \leq \arctan \frac { 3 + \sqrt { 9 - 16 \mu ^ { 2 } } } { 2 \mu }
$$

что идентично ответу, полученному первым способом.

Ответ:

$$
\arctan \frac { 3 - \sqrt { 9 - 16 \mu ^ { 2 } } } { 2 \mu } \leq \varphi \leq \arctan \frac { 3 + \sqrt { 9 - 16 \mu ^ { 2 } } } { 2 \mu }
$$

В1 ${ } ^ { 0.20 }$ Выразите $v _ { x }$ через $\omega , L$ и $\varphi$.

В данном случае скорость точки $A$ направлена вертикально, поэтому

$$
v _ { x } = \omega L \cos \varphi
$$

Ответ:

$$
v _ { x } = \omega L \cos \varphi
$$

В2 ${ } ^ { 0.60 }$ Выразите $v _ { y }$ через $v _ { 0 } , \omega , L$ и $\varphi$.

Момент импульса стержня относительно точки $A$ при ударе сохраняется. Выражение для него

$$
\vec { L } _ { A } = \vec { L } _ { O } + m \left[ \overrightarrow { A O } \times \vec { v } _ { O } \right] = \frac { m L ^ { 2 } \vec { \omega } } { 3 } + m \left[ \overrightarrow { A O } \times \vec { v } _ { O } \right]
$$

Таким образом

$$
m L v _ { 0 } \sin \varphi = m L v _ { y } \sin \varphi + m L v _ { x } \cos \varphi + \frac { m L ^ { 2 } \omega } { 3 }
$$

Учитывая связь $v _ { x }$ и $\omega$, найденную в предыдущем пункте

$$
v _ { y } = v _ { 0 } - \frac { \omega L \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 3 \sin \varphi }
$$


Ответ:

$$
v _ { y } = v _ { 0 } - \frac { \omega L \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 3 \sin \varphi }
$$

Вз ${ } ^ { 0.80 }$ Найдите максимальную энергию $W$, ушедшую на деформацию поверхности. Ответ выразите через $m , v _ { 0 }$ и $\varphi$.

Для $v _ { A y }$ имеем

$$
v _ { A y } = v _ { y } - \omega L \sin \varphi = v _ { 0 } - \frac { 4 \omega L } { 3 \sin \varphi }
$$

Для энергии деформации поверхности $E _ { N }$ имеем

$$
E _ { N } = \int N v _ { A y } d t
$$

Но из теоремы о движении центра масс и пункта $B 2$ имеем

$$
N = - m \dot { v } _ { y } = \frac { m \dot { \omega } L \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 3 \sin \varphi }
$$

Тогда

$$
E _ { N } ( \omega ) = \int _ { 0 } ^ { \omega } \frac { m \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 3 \sin \varphi } \left( v _ { 0 } - \frac { 4 \omega L } { 3 \sin \varphi } \right) L \dot { \omega } d t = \frac { m \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 3 \sin \varphi } \left( v _ { 0 } \omega L - \frac { 2 \omega ^ { 2 } L ^ { 2 } } { 3 \sin \varphi } \right)
$$

Максимальное значение $W$ достигается при $v _ { A _ { y } } = 0$, т.е в этот момент

$$
\omega L = \frac { 3 v _ { 0 } \sin \varphi } { 4 }
$$

откуда

$$
W = \frac { m v _ { 0 } ^ { 2 } \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 8 }
$$

второй способ

Максимум энергии, ушедшей на деформацию достигается при $v _ { A } = 0$. Тогда из закона сохранения момента импульса

$$
m v _ { 0 } L \sin \varphi = \frac { 4 m L ^ { 2 } \omega } { 3 }
$$

откуда

$$
\omega = \frac { 3 v _ { 0 } \sin \varphi } { 4 }
$$

Из закона сохранения энергии

$$
\frac { m v _ { 0 } ^ { 2 } } { 2 } = \frac { 2 m L ^ { 2 } \omega ^ { 2 } } { 3 } + W
$$

Откуда

$$
W = \frac { m v _ { 0 } ^ { 2 } } { 2 } - \frac { 3 m v _ { 0 } ^ { 2 } \sin ^ { 2 } \varphi } { 8 } = \frac { m v _ { 0 } ^ { 2 } \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 8 }
$$

Ответ:

$$
W = \frac { m v _ { 0 } ^ { 2 } \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 8 }
$$


$$
E _ { N } = E _ { \text {деф } } = W ( 1 - k ) = \frac { m v _ { 0 } ^ { 2 } \left( 1 + 3 \cos ^ { 2 } \varphi \right) ( 1 - k ) } { 8 }
$$

откуда

$$
\frac { m \left( 1 + 3 \cos ^ { 2 } \varphi \right) } { 3 \sin \varphi } \left( v _ { 0 } \omega L - \frac { 2 \omega ^ { 2 } L ^ { 2 } } { 3 \sin \varphi } \right) = \frac { m v _ { 0 } ^ { 2 } \left( 1 + 3 \cos ^ { 2 } \varphi \right) ( 1 - k ) } { 8 }
$$

или

$$
\omega ^ { 2 } L ^ { 2 } - \frac { 3 v _ { 0 } \omega L \sin \varphi } { 2 } + \frac { 9 v _ { 0 } ^ { 2 } \sin ^ { 2 } \varphi ( 1 - k ) } { 16 }
$$

Решая квадратное уравнение

$$
\omega = \frac { 3 v _ { 0 } \sin \varphi ( 1 \pm \sqrt { k } ) } { 4 L }
$$

Необходимо выбрать больший из корней. Таким образом

$$
\omega _ { \kappa } = \frac { 3 v _ { 0 } \sin \varphi ( 1 + \sqrt { k } ) } { 4 L }
$$

Ответ:

$$
\omega _ { \mathrm { K } } = \frac { 3 v _ { 0 } \sin \varphi ( 1 + \sqrt { k } ) } { 4 L }
$$

В5 ${ } ^ { 0.30 }$ Найдите скорость точки $A$ стержня $v _ { A \kappa }$ сразу после удара. Ответ выразите через $v _ { 0 } , \varphi$ и $k$.

$$
v _ { A y } = v _ { 0 } - \frac { 4 \omega _ { \kappa } L } { 3 \sin \varphi } = - v _ { 0 } \sqrt { k }
$$

или

$$
v _ { A \kappa } = v _ { 0 } \sqrt { k }
$$

Ответ:

$$
v _ { A \kappa } = v _ { 0 } \sqrt { k }
$$

В6 ${ } ^ { 0.40 }$ На каком расстоянии $L _ { A C }$ от точки $A$ находится точка $C$ стержня, скорость которой сразу после удара минимальна? Ответ выразите через $L , \varphi$ и $k$.

Найдём точку, не имеющую компоненту скорости, направленную перпендикулярно стержню, её скорость будет минимальна

$$
L _ { A C } = \frac { v _ { A \kappa } \sin \varphi } { \omega _ { \kappa } } = L \frac { 4 \sqrt { k } } { 3 ( 1 + \sqrt { k } ) }
$$

Ответ:

$$
L _ { A C } = L \frac { 4 \sqrt { k } } { 3 ( 1 + \sqrt { k } ) }
$$

С1 ${ } ^ { 0.40 }$ Выразите $\omega$ и $v _ { y }$ через $v _ { x } , v _ { 0 } , L , \mu$ и $\varphi$.
$\omega$ была найдена ранее

$$
\omega = \frac { 3 v _ { x } } { \mu L } ( \sin \varphi - \mu \cos \varphi )
$$

Из теоремы о движении центра масс

$$
m \dot { v } _ { y } = - N
$$


откуда

$$
v _ { y } = v _ { 0 } - \frac { v _ { x } } { \mu }
$$

Ответ:

$$
\begin{gathered}
\omega = \frac { 3 v _ { x } } { \mu L } ( \sin \varphi - \mu \cos \varphi ) \\
v _ { y } = v _ { 0 } - \frac { v _ { x } } { \mu }
\end{gathered}
$$

C2 ${ } ^ { 1.20 }$
Найдите максимальную энергию $W$, ушедшую на деформацию поверхности. Ответ выразите через $m , v _ { 0 } , \mu$ и $\varphi$.

Для $v _ { A y }$ имеем

$$
v _ { A y } = v _ { y } - \omega L \sin \varphi = v _ { 0 } - \frac { v _ { x } } { \mu } - \frac { 3 v _ { x } \sin \varphi } { \mu } ( \sin \varphi - \mu \cos \varphi )
$$

и также

$$
N = \frac { m \dot { v } _ { x } } { \mu }
$$

откуда

$$
E _ { N } = \int N v _ { A y } d t = \int _ { 0 } ^ { v _ { x } } \frac { m } { \mu ^ { 2 } } \left( \mu v _ { 0 } - v _ { x } ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) d v _ { x } \right.
$$

или

$$
E _ { N } = \frac { m } { \mu ^ { 2 } } \left( \mu v _ { 0 } v _ { x } - \frac { v _ { x } ^ { 2 } ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) } { 2 } \right)
$$

Максимальное значение $W$ достигается при $v _ { A _ { y } } = 0$, т.е в этот момент

$$
v _ { x } = \frac { \mu v _ { 0 } } { 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) }
$$

откуда

$$
W = \frac { m v _ { 0 } ^ { 2 } } { 2 ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) }
$$

Ответ:

$$
W = \frac { m v _ { 0 } ^ { 2 } } { 2 ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) }
$$

с3 ${ } ^ { 1.40 }$ Найдите $v _ { x \mathrm {~K} }$ после удара. Ответ выразите через $v _ { 0 } , \mu , \varphi$ и $k$.

В конце удара

$$
E _ { N } = E _ { \text {деф } } = W ( 1 - k ) = \frac { m v _ { 0 } ^ { 2 } ( 1 - k ) } { 2 ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) }
$$

откуда

$$
\frac { m } { \mu ^ { 2 } } \left( \mu v _ { 0 } v _ { x } - \frac { v _ { x } ^ { 2 } ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) } { 2 } \right) = \frac { m v _ { 0 } ^ { 2 } ( 1 - k ) } { 2 ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) }
$$

или

$$
v _ { x } ^ { 2 } - \frac { 2 \mu v _ { 0 } v _ { x } } { 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) } + \frac { \mu ^ { 2 } v _ { 0 } ^ { 2 } ( 1 - k ) } { ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) ^ { 2 } } = 0
$$

Решая квадратное уравнение


$$
v _ { x } = \frac { \mu v _ { 0 } ( 1 \pm \sqrt { k } ) } { ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) }
$$

Необходимо выбрать больший из корней. Таким образом

$$
v _ { x \mathrm {~K} } = \frac { \mu v _ { 0 } ( 1 + \sqrt { k } ) } { ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) }
$$

Ответ:

$$
v _ { x \mathrm {~K} } = \frac { \mu v _ { 0 } ( 1 + \sqrt { k } ) } { ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) }
$$

С4 ${ } ^ { 1.00 }$ Найдите работу силы трения $A _ { \text {тр } }$ в процессе удара. Ответ выразите через $m , v _ { 0 } , \mu , \varphi n k$.

Для работы силы трения имеем

$$
A _ { \mathrm { Tp } } = \int F _ { x } v _ { A x } d t = \int _ { 0 } ^ { v _ { x } } m v _ { x } \left( 1 - \frac { 3 \cos \varphi } { \mu } ( \sin \varphi - \mu \cos \varphi ) \right) d v _ { x }
$$

или

$$
A _ { \text {тр } } = \frac { m v _ { x } ^ { 2 } } { 2 } \left( 1 - \frac { 3 \cos \varphi } { \mu } ( \sin \varphi - \mu \cos \varphi ) \right)
$$

Подставляя найденное значение $v _ { x }$

$$
A _ { \text {тр } } = \frac { \mu m v _ { 0 } ^ { 2 } ( 1 + \sqrt { k } ) ^ { 2 } ( \mu - 3 \cos \varphi ( \sin \varphi - \mu \cos \varphi ) ) } { 2 ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) ^ { 2 } }
$$

Ответ:

$$
A _ { \text {тр } } = \frac { \mu m v _ { 0 } ^ { 2 } ( 1 + \sqrt { k } ) ^ { 2 } ( \mu - 3 \cos \varphi ( \sin \varphi - \mu \cos \varphi ) ) } { 2 ( 1 + 3 \sin \varphi ( \sin \varphi - \mu \cos \varphi ) ) ^ { 2 } }
$$
