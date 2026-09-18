---
id: solution-ocr-rupho-y-2022-t2-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2022/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 1.00 }$ Найдите температуру воздуха $T _ { \mathrm { B } }$ на высоте $h$ над поверхностью Земли. Ответ выразите через $T _ { 0 } , g , \mu _ { \mathrm { B } } , R$ и показатель адиабаты $\gamma _ { \mathrm { B } }$.

Рассмотрим перемещение порции воздуха на высоту $h$ :

$$
P _ { 1 } d V _ { 1 } - P _ { 2 } d V _ { 2 } = \frac { C _ { V } d m } { \mu _ { \mathrm { B } } } \left( T - T _ { 0 } \right) + d m g h
$$

откуда:

Ответ:

$$
T = T _ { 0 } - \frac { \mu _ { \mathrm { B } } g h } { C _ { P } } = T _ { 0 } - \frac { \left( \gamma _ { \mathrm { B } } - 1 \right) \mu _ { \mathrm { B } } g h } { \gamma _ { \mathrm { B } } R }
$$

А2 ${ } ^ { 1.00 }$ Найдите зависимость давления водяных паров от температуры $p _ { п } ( T )$.
Ответ выразите через $\varphi _ { 0 } , p _ { \text {по } } , T _ { 0 } , \mu _ { \text {п } } , \mu _ { \text {B } } , \gamma _ { \text {B } }$ и $T$.

Из условия равновесия пара получим:

$$
d P _ { \Pi } = - \rho _ { \Pi } g d h
$$

откуда:

$$
\frac { d P _ { \Pi } } { P _ { \Pi } } = \frac { \mu _ { \Pi } \gamma _ { \mathrm { B } } } { \mu _ { \mathrm { B } } \left( \gamma _ { \mathrm { B } } - 1 \right) } \frac { d T } { T }
$$

Интегрируя, находим:

Ответ:

$$
P _ { \Pi } = \varphi _ { 0 } P _ { \Pi 0 } \left( \frac { T } { T _ { 0 } } \right) ^ { \frac { \mu _ { \mathrm { n } } \gamma _ { \mathrm { s } } } { \mu _ { \mathrm { s } } \left( \gamma _ { \mathrm { B } } - 1 \right) } }
$$

А3 ${ } ^ { 0.50 }$ Используя график зависимости $p _ { \text {н. } \Pi } ( T )$, найдите для $\varphi _ { 0 } = 65 \%$ и $T _ { 0 } = 287$ К высоту $h$ над поверхностью Земли, на которой пар становится насыщенным.

Решая уравнений графически, находим:

$$
T _ { \text {нас } } \approx 6,6 ^ { \circ } \mathrm { C }
$$

Тогда:

Ответ:

$$
h = \frac { \gamma _ { \mathrm { в } } R \left( T _ { 0 } - T _ { \text {нас } } \right) } { \left( \gamma _ { \mathrm { в } } - 1 \right) \mu _ { \mathrm { в } } g } \approx 757 \mathrm { м }
$$

В $1 ^ { 1.00 }$ Удельная теплота парообразования зависит от температуры $T$ следующим образом:

$$
\lambda ( T ) = \lambda _ { n } + k \left( T - T _ { n } \right)
$$

Найдите $k$. Ответ выразите через $c , R , \mu _ { \Pi }$ и показатель адиабаты $\gamma _ { \Pi }$.
Примечание: если вы не можете решить этот пункт, то в дальнейшем считайте, что $\lambda = \lambda _ { n } =$ const. К потере баллов это не приводит.

Количество теплоты, требуемое для испарения массы $m$ равняется:

$$
Q = U _ { п } - U _ { ж } + A
$$

Поскольку плотностью воды можно пренебречь:

$$
A = p V = \frac { m R T } { \mu }
$$


Поскольку жидкость слабо сжимаема, количество теплоты, необходимое для её нагревания в любом процессе, с хорошей точностью пропорционально изменению её внутренней энергии:

$$
U _ { ж } \left( T _ { 2 } \right) - U _ { ж } \left( T _ { 1 } \right) = c m \left( T _ { 2 } - T _ { 1 } \right)
$$

тогда

$$
U _ { \text {ж } } ( T ) = c m T + m C
$$

где $C$ - некоторая постоянная величина
Тогда:

$$
Q = m C + m \left( \frac { \gamma _ { \Pi } R } { \mu _ { \Pi } \left( \gamma _ { \Pi } - 1 \right) } - c \right) T = \lambda ( T ) m
$$

Определяя $C$ из начальных условий, находим:

$$
\lambda ( T ) = \lambda _ { n } + \left( c - \frac { \gamma _ { \Pi } R } { \left( \gamma _ { \Pi } - 1 \right) \mu _ { \Pi } } \right) \left( T _ { n } - T \right)
$$

Получим ответ:

Ответ:

$$
k = \frac { \gamma _ { п } R } { \left( \gamma _ { п } - 1 \right) \mu _ { п } } - c
$$

В2 ${ } ^ { 0.50 }$ Покажите, что при перемещении выделенной воздушной массы количество теплоты, полученное системой, заключённой в её объёме, можно представить так:

$$
\delta Q = m _ { \mathrm { B } } \left( \frac { \gamma _ { \mathrm { B } } R } { \mu _ { \mathrm { B } } \left( \gamma _ { \mathrm { B } } - 1 \right) } d T + g d z + \lambda d \alpha \right)
$$

Для подведённого к системе количества теплоты имеем:

$$
\delta Q = \frac { C _ { V } m _ { \mathrm { B } } } { \mu _ { \mathrm { B } } } + P _ { \mathrm { B } } d V _ { \mathrm { B } } + \lambda ( T ) d m _ { \Pi }
$$

или же

$$
\delta Q = \frac { C _ { P } m _ { \mathrm { B } } } { \mu _ { \mathrm { B } } } d T - V _ { \mathrm { B } } d P _ { \mathrm { B } } + \lambda ( T ) d m _ { \Pi }
$$

Из условия равновесия воздуха:

$$
d P _ { \mathrm { B } } = - \rho _ { \mathrm { B } } g d h
$$

откуда:

$$
\delta Q = m _ { \mathrm { B } } \left( \frac { \gamma _ { \mathrm { B } } R } { \mu _ { \mathrm { B } } \left( \gamma _ { \mathrm { B } } - 1 \right) } d T + g d z + \lambda ( T ) d \alpha \right)
$$

ВЗ ${ } ^ { 0.50 }$ Найдите $\frac { d \alpha } { d z }$. Ответ выразите через $\mu _ { \text {п } ^ { \prime } }$, $\mu _ { \mathrm { B } ^ { \prime } } , P _ { \mathrm { B } ^ { \prime } } , P _ { \text {Н.П } } , \frac { d P _ { \text {Н.П } } } { d T } , \frac { d T } { d z }$ и $\frac { d P _ { \text {В } } } { d z }$

Для $\alpha$ с учётом уравнения состояния имеем:

$$
\alpha = \frac { m _ { \Pi } } { m _ { \mathrm { B } } } = \frac { \mu _ { \Pi } } { \mu _ { \mathrm { B } } } \frac { P _ { \Pi } } { P _ { \mathrm { B } } }
$$

Дифференцируя:

$$
\frac { d \alpha } { d z } = \frac { \mu _ { \Pi } } { \mu _ { \mathrm { B } } } \left( \frac { 1 } { P _ { \mathrm { B } } } \frac { d P _ { \Pi } } { d z } - \frac { P _ { \Pi } } { P _ { \mathrm { B } } ^ { 2 } } \frac { d P _ { \mathrm { B } } } { d z } \right)
$$

Рассмотрим производную давления пара по высоте как производную сложной функции:


$$
\frac { d P _ { \Pi } } { d z } = \frac { d P _ { \Pi } } { d T } \frac { d T } { d z }
$$

откуда:

Ответ:

$$
\frac { d \alpha } { d z } = \frac { \mu _ { \Pi } } { \mu _ { \mathrm { B } } } \left( \frac { 1 } { P _ { \mathrm { B } } } \frac { d P _ { \Pi } } { d T } \frac { d T } { d z } - \frac { P _ { \Pi } } { P _ { \mathrm { B } } ^ { 2 } } \frac { d P _ { \mathrm { B } } } { d z } \right)
$$

В4 ${ } ^ { 1.00 }$ Найдите температурный градиент $\frac { d T } { d z }$. Ответ выразите через $\alpha , g , R , \gamma _ { \mathrm { B } } , T , \mu _ { \mathrm { B } } , \mu _ { \mathrm { I } } \curvearrowleft \lambda ( T )$.

Приравнивая $\delta Q$ к нулю, находим:

$$
\frac { d T } { d z } = - \frac { g - \lambda \frac { \mu _ { \Pi } } { \mu _ { \mathrm { B } } } \frac { P _ { \Pi } } { P _ { \mathrm { B } } ^ { 2 } } \frac { d P _ { \mathrm { B } } } { d z } } { \frac { \gamma _ { \mathrm { B } } R } { \mu _ { \mathrm { B } } \left( \gamma _ { \mathrm { B } } - 1 \right) } + \lambda \frac { \mu _ { \Pi } } { \mu _ { \mathrm { B } } } \frac { 1 } { P _ { \mathrm { B } } } \frac { d P _ { \Pi } } { d T } }
$$

Величину $\frac { d P _ { \mathrm { n } } } { d T }$ найдём из уравнения Клапейрона - Клаузиуса:

$$
\frac { d P _ { \Pi } } { d T } = \frac { \mu _ { \Pi } \lambda ( T ) P _ { \Pi } } { R T ^ { 2 } }
$$

После подстановки которой получим:

Ответ:

$$
\frac { d T } { d z } = - \frac { \left( \gamma _ { \mathrm { B } } - 1 \right) \mu _ { \mathrm { B } } g } { \gamma _ { \mathrm { B } } R } \frac { \left( 1 + \frac { \lambda ( T ) \mu _ { \mathrm { B } } \alpha } { R T } \right) } { \left( 1 + \frac { \lambda ( T ) \mu _ { \mathrm { H } } \alpha } { R T } \frac { \left( \gamma _ { \mathrm { B } } - 1 \right) \lambda ( T ) \mu _ { \mathrm { B } } } { \gamma _ { \mathrm { B } } R T } \right) }
$$

В5 ${ } ^ { 1.80 }$ Найдите температуру $T _ { 0 }$ на поверхности Земли.

Рассмотрим точку излома на графике. В этой точке $\alpha = \alpha _ { 1 }$.
Причиной излома является начало процесса конденсирования, в связи с чем для градиента температур слева от точки излома применима формула из части $A 1$ , а справа - формула из части $B 4$. Тогда значение $\alpha _ { 1 }$ можно найти из отношения угловых коэффициентов в точке излома:

$$
k = - \left( \frac { d T } { d z } \right) _ { T \rightarrow T _ { 1 } - 0 } \frac { \gamma _ { \mathrm { B } } R } { \left( \gamma _ { \mathrm { B } } - 1 \right) \mu _ { \mathrm { B } } g }
$$

откуда:

$$
\alpha _ { 1 } = \frac { 1 - k } { \frac { \lambda \left( T _ { 1 } \right) \mu _ { \Pi } } { R T _ { 1 } } \left( k \frac { \left( \gamma _ { \mathrm { B } } - 1 \right) \mu _ { \mathrm { B } } g } { \gamma _ { \mathrm { B } } R } \frac { \lambda \left( T _ { 1 } \right) } { g T _ { 1 } } - \frac { \mu _ { \mathrm { B } } } { \mu _ { \Pi } } \right) } \approx 1,01 \cdot 10 ^ { - 2 }
$$

Далее:

$$
\alpha _ { 1 } = \frac { \mu _ { \mathrm { I } } p _ { \mathrm { H } \cdot \mathrm { II } } \left( T _ { 1 } \right) } { \mu _ { \mathrm { B } } p _ { \mathrm { B } } }
$$

Из уравнения адиабаты для сухого воздуха имеем:

$$
p _ { \mathrm { B } } = p _ { 0 } \left( \frac { T _ { 1 } } { T _ { 0 } } \right) ^ { \frac { \gamma _ { \mathrm { B } } } { \gamma _ { \mathrm { B } } - 1 } }
$$

Тогда получим:


Ответ:

$$
T _ { 0 } = T _ { 1 } \left( \frac { \alpha _ { 1 } \mu _ { \mathrm { B } } p _ { 0 } } { \mu _ { \Pi } p _ { \mathrm { H } \cdot \mathrm { П } } \left( T _ { 1 } \right) } \right) ^ { \frac { \gamma _ { \mathrm { B } } - 1 } { \gamma _ { \mathrm { B } } } } \approx 309,2 \mathrm { К }
$$

В6 ${ } ^ { 0.70 }$ Оцените, на какой высоте $h _ { 2 }$ начинает выпадать снег.

Из углового коэффициента первого участка графика находим высоту $h _ { 1 }$, соответствующую излому на графике:

$$
h _ { 1 } = \frac { \gamma _ { \mathrm { B } } R \left( T _ { 0 } - T _ { 1 } \right) } { \left( \gamma _ { \mathrm { B } } - 1 \right) \mu _ { \mathrm { B } } g } \approx 2680 \mathrm { M }
$$

Проведя прямую, соответствующую температуре $T _ { \text {пл } } = 273$ К, находим:

Ответ:

$$
h _ { 2 } \approx 4,69 \text { км }
$$
