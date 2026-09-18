---
id: solution-ocr-rupho-y-2024-t3-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2024/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Будем решать данную задачу с использованием быстроты $\theta$, определяемой выражением:

$$
\beta = \frac { v } { c } = \tanh \theta .
$$

С учётом этого Лоренц-фактор $\gamma$, а также энергия $E$ и импульс $p$ частицы массой $m$ могут быть записаны следующим образом:

$$
\gamma = \frac { 1 } { \sqrt { 1 - \beta ^ { 2 } } } = \cosh \theta \quad E = \gamma m c ^ { 2 } = m c ^ { 2 } \cosh \theta \quad p = \gamma \beta m c = m c \sinh \theta
$$

Пусть частица движется вдоль оси $x$ со скоростью $v$, а скорость инерциальной системы отсчёта $S ^ { \prime }$ направлена вдоль оси $x$ и равна $V$. Тогда скорость частицы $v _ { \text {отн } }$ относительно системы отсчёта $S ^ { \prime }$ составляет:

$$
v _ { \text {отн } } = \frac { v - V } { 1 - \frac { v V } { c ^ { 2 } } } .
$$

Пусть $v _ { \text {отн } } / c = \tanh \theta _ { \text {отн } }$, а $V / c = \tanh \theta _ { V }$. Тогда имеем:

$$
\tanh \theta _ { \text {ОТН } } = \frac { \tanh \theta - \tanh \theta _ { V } } { 1 - \tanh \theta \tanh \theta _ { V } } = \tanh \left( \theta - \theta _ { V } \right) ,
$$

откуда:

$$
\theta _ { \text {отн } } + \theta _ { V } = \theta .
$$

Таким образом, быстрота частицы $\theta$ в лабораторной системе отсчёта является суммой быстрот $\theta _ { V }$ и $\theta _ { \text {отн, } }$ характеризующих движение системы отсчёта $S ^ { \prime }$ и движение частицы относительно неё соответственно. Из этого также следует, что изменения быстрот частицы относительно всех инерциальных систем отсчёта, движущихся вдоль оси $x$, должны быть одинаковы. Далее мы будем использовать доказанное утверждение.

Рассмотрим движение ракеты из сопутствующей ей инерциальной системы отсчёта, называющейся собственной. Для изменения скорости ракеты имеем:

$$
d v _ { \text {OTH } } = c d \tanh \theta _ { \text {ОТН } } = \frac { c } { \cosh ^ { 2 } \theta _ { \text {ОТН } } } d \theta _ { \text {ОТН. } }
$$

Поскольку $\theta _ { \text {отн } } = 0$, имеем:

$$
d v _ { \text {отн } } = c d \theta _ { \text {отн } } = c d \theta
$$

где $\theta$ - быстрота ракеты в лабораторной системе отсчёта.

Рассмотрим динамику ускорения ракеты в собственной системе отсчёта. Пусть $d E _ { \text {г } }$ - энергия вылетающего из ракеты горючего, а $d E _ { \text {p } }$ - изменение энергии ракеты. Тогда из закона сохранения энергии:

$$
d E _ { \Gamma } = - d E _ { \mathrm { p } } .
$$

При этом для ракеты имеем:

$$
E = \gamma _ { \text {отH } } m c ^ { 2 } = m c ^ { 2 } \cosh \theta _ { \text {ОТН } } \Rightarrow d E = c ^ { 2 } \left( \cosh \theta _ { \text {ОТН } } d m + m \sinh { } _ { \text {ОТН } } d \theta _ { \text {ОТН } } \right) .
$$

Поскольку $\theta _ { \text {отн } } = 0$ :

$$
d E _ { \mathrm { p } } = c ^ { 2 } d m \Rightarrow d E _ { \Gamma } = - c ^ { 2 } d m .
$$

Для импульса топлива имеем:

$$
d p _ { \Gamma } = \frac { u d E _ { \Gamma } } { c ^ { 2 } } = - u d m
$$

Применяя закон сохранения импульса, получим:

$$
d p _ { \mathrm { p } } = d p _ { \Gamma } = - u d m
$$

где $d p _ { \mathrm { p } }$ - изменение импульса ракеты, для которого имеем:

$$
d p _ { \mathrm { p } } = d \left( \gamma _ { \text {OTH } } M v _ { \text {OTH } } \right) = d \left( m c \sinh \theta _ { \text {OTH } } \right) = c \left( m \cosh \theta _ { \text {OTH } } d \theta _ { \text {OTH } } + \sinh \theta _ { \text {OTH } } d M \right) = m c d \theta .
$$

Таким образом:

$$
m c d \theta = - u d m .
$$

Интегрируя, получим:

$$
\theta = \frac { u } { c } \ln \frac { M } { m } .
$$

Окончательно:


Ответ:

$$
v = c \tanh \left( \frac { u } { c } \ln \frac { M } { m } \right) = c \frac { \left( \frac { M } { m } \right) ^ { 2 u / c } - 1 } { \left( \frac { M } { m } \right) ^ { 2 u / c } + 1 }
$$

A2 ${ } ^ { 0.30 }$ Определите массу $m$ ракеты к моменту прекращения работы двигателя. Ответ выразите через $M , a , u , c$ и $\tau$.

Воспользуемся результатом решения пункта А1:

$$
a = \frac { d v _ { \text {отн } } } { d \tau } = c \frac { d \theta } { d \tau } \Rightarrow \theta = \frac { a \tau } { c } .
$$

Поскольку для $M ( \theta )$ имеем:

$$
m = M e ^ { - \theta c / u } ,
$$

для $M ( \tau )$ находим:

Ответ:

$$
m = M e ^ { - a \tau / c } .
$$

А3 ${ } ^ { 0.30 }$ Найдите перемещение $S$ ракеты к моменту прекращения работы двигателя. Ответ выразите через $c , u , a$ и $\tau$.

За время $d \tau$ в собственной системе отсчёта в лабораторной системе отсчёта успевает пройти время $d t$, равное:

$$
d t = \gamma d \tau = \cosh \theta d \tau .
$$

Для перемещения ракеты $d S$ за время $d t$ имеем:

$$
d S = v d t = c \tanh \theta \cosh \theta d \tau = c \sinh \theta d \tau .
$$

Поскольку $d \tau = c d \theta / a$, получим:

$$
d S = \frac { c ^ { 2 } \sinh \theta d \theta } { a } \Rightarrow S ( \theta ) = \frac { c ^ { 2 } ( \cosh \theta - 1 ) } { a } .
$$

Подставляя $\theta ( \tau )$, находим:

Ответ:

$$
S = \frac { c ^ { 2 } \left( \cosh \frac { a \tau } { c } - 1 \right) } { a }
$$

A4 ${ } ^ { 1.50 }$ Как можно точнее определите перемещение $S$ ракеты в лабораторной системе отсчёта к моменту прекращения работы двигателя. Ответ выразите через $с$ и $\tau _ { 0 }$. Приведите необходимые численные значения в таблице в листах ответов. При необходимости вы можете использовать миллиметровую бумагу в листах ответов для построения графиков.

Для перемещения ракеты $d S$ имеем:

$$
d S = c \sinh \theta d \tau .
$$

Подставляя $\theta ( M )$, получим:

$$
d S = c \sinh \left( \frac { u } { c } \ln \frac { M } { m } \right) d \tau = c \tau _ { 0 } \cdot \sinh \left( \frac { u } { c } \ln \frac { 1 } { y } \right) d x .
$$

Для перемещения $S$ к моменту прекращения работы двигателей получим:

$$
S = c \tau _ { 0 } \int _ { 0 } ^ { 1 } \sinh \left( \frac { u } { c } \ln \frac { 1 } { y } \right) d x
$$

Данный интеграл лучше всего вычислить, предварительно построив график зависимости от $x$ подынтегральной функции, однако можно обойтись и методом трапеций. Имеем:


$$
\int _ { 0 } ^ { 1 } \sinh \left( \frac { u } { c } \ln \frac { 1 } { y } \right) d x = 0.146 \pm 0.004
$$

Таким образом:

Ответ:

$$
S = ( 0.146 \pm 0.04 ) c \tau _ { 0 } .
$$

В $1 ^ { 0.70 }$ Пусть масса ракеты уменьшилась до значения $m$. Найдите массы $m _ { 1 }$ и $m _ { 2 }$ вылетевших из ракеты горючих веществ 1 и 2 соответственно. Ответ выразите через $m$ и известные величины.

Воспользуемся законом сохранения энергии в системе отсчёта, сопутствующей движению ракеты:

$$
d E _ { 1 } + d E _ { 2 } = \gamma _ { 1 } c ^ { 2 } d m _ { 1 } + \gamma _ { 2 } c ^ { 2 } d m _ { 2 } = - d E _ { \mathrm { p } } = - c ^ { 2 } d M ,
$$

где $\gamma _ { 1 }$ и $\gamma _ { 2 }$ - релятивистские гамма-факторы, соответствующие скоростям $u _ { 1 }$ и $u _ { 2 }$.
Поскольку $\gamma _ { 1 }$ и $\gamma _ { 2 }$ являются постоянными величинами:

$$
\gamma _ { 1 } m _ { 1 } + \gamma _ { 2 } m _ { 2 } = M - m .
$$

Учитывая, что $m _ { 2 } / m _ { 1 } = \alpha$, получим:

$$
m _ { 1 } = \frac { M - m } { \gamma _ { 1 } + \alpha \gamma _ { 2 } } \quad m _ { 2 } = \frac { \alpha ( M - m ) } { \gamma _ { 1 } + \alpha \gamma _ { 2 } } ,
$$

или же:

Ответ:

$$
m _ { 1 } = \frac { M - m } { \frac { 1 } { \sqrt { 1 - u _ { 1 } ^ { 2 } / c ^ { 2 } } } + \frac { \alpha } { \sqrt { 1 - u _ { 2 } ^ { 2 } / c ^ { 2 } } } } \quad m _ { 2 } = \frac { \alpha ( M - m ) } { \frac { 1 } { \sqrt { 1 - u _ { 1 } ^ { 2 } / c ^ { 2 } } } + \frac { \alpha } { \sqrt { 1 - u _ { 2 } ^ { 2 } / c ^ { 2 } } } }
$$

В2 ${ } ^ { 0.70 }$ Найдите скорость $v$ ракеты в момент, когда её масса уменьшилась до значения $m$. Ответ выразите через $m$ и известные величины.

Запишем уравнение движения ракеты:

$$
\frac { d p _ { \mathrm { p } } } { d \tau } = m c \frac { d \theta } { d \tau } = \frac { d p _ { \Gamma } } { d \tau } = \gamma _ { 1 } u _ { 1 } \frac { d m _ { 1 } } { d \tau } + \gamma _ { 2 } u _ { 2 } \frac { d m _ { 2 } } { d \tau } .
$$

Отсюда:

$$
d \theta = - \frac { d m } { m } \frac { \gamma _ { 1 } u _ { 1 } + \alpha \gamma _ { 2 } u _ { 2 } } { c \left( \gamma _ { 1 } + \alpha \gamma _ { 2 } \right) } \Rightarrow \theta = \frac { \gamma _ { 1 } u _ { 1 } + \alpha \gamma _ { 2 } u _ { 2 } } { c \left( \gamma _ { 1 } + \alpha \gamma _ { 2 } \right) } \ln \frac { M } { m } .
$$

Поскольку $v = c \tanh \theta$, получим:

Ответ:

$$
v = c \tanh \left( \frac { \frac { u _ { 1 } } { \sqrt { 1 - u _ { 1 } ^ { 2 } / c ^ { 2 } } } + \frac { \alpha u _ { 2 } } { \sqrt { 1 - u _ { 2 } ^ { 2 } / c ^ { 2 } } } } { c \left( \frac { 1 } { \sqrt { 1 - u _ { 1 } ^ { 2 } / c ^ { 2 } } } + \frac { \alpha } { \sqrt { 1 - u _ { 2 } ^ { 2 } / c ^ { 2 } } } \right) } \ln \frac { M } { m } \right) .
$$

С1 ${ } ^ { 0.50 }$ Пусть двигатель ракеты выключен, а ракета движется со скоростью $v$. С какой скоростью $d m / d \tau$ по часам ракеты изменяется её масса? Ответ выразите через $v$ и известные величины.

В лабораторной системе отсчёта в единицу времени в ракету попадает масса вещества, равная:

$$
\frac { d m _ { \mathrm { B } } } { d t } = \rho S v .
$$

Тогда в системе отсчёта, сопутствующей движению ракеты:


$$
\mu _ { \mathrm { B } } = \frac { d m _ { \mathrm { B } } } { d \tau } = \frac { d m _ { \mathrm { B } } } { d t } \frac { d t } { d \tau } = \gamma \rho S v .
$$

Энергия вещества $d E _ { \mathrm { B } }$, попавшего в ракету, трансформируется в энергию ракеты $d E _ { \mathrm { p } }$, поэтому:

$$
d E _ { \mathrm { p } } = c ^ { 2 } d m = d E _ { \mathrm { B } } = \gamma c ^ { 2 } d m _ { \mathrm { B } } = \gamma ^ { 2 } c ^ { 2 } \rho S v d \tau .
$$

Окончательно

Ответ:

$$
\frac { d m } { d \tau } = \frac { \rho S v } { 1 - v ^ { 2 } / c ^ { 2 } } .
$$

С2 ${ } ^ { 0.50 }$ Пусть двигатель ракеты работает таким образом, что масса движущейся в вакууме ракеты изменяется со скоростью $d m _ { 0 } / d \tau$ по часам ракеты в момент времени $\tau$.
С какой скоростью $d m / d \tau$ по часам ракеты изменяется её масса в момент времени $\tau$, если ракета движется со скоростью $v$, а двигатель ракеты работает так же, как и при движении в вакууме (т.е в в момент времени $\tau$ в единицу времени из ракеты вылетает та же масса горючего с той же скоростью)? Ответ выразите через $d m _ { 0 } / d \tau , v$ и известные величины.

Воспользуемся законом сохранения энергии в системе отсчёта, сопутствующей движению ракеты:

$$
\frac { d E _ { \mathrm { p } } } { d \tau } = c ^ { 2 } \frac { d m } { d \tau } = \frac { d E _ { \mathrm { B } } } { d \tau } - \frac { d E _ { \mathrm { F } } } { d \tau } = \gamma ^ { 2 } \rho S c ^ { 2 } v - \frac { d E _ { \mathrm { F } } } { d \tau } .
$$

Когда ракета расположена неподвижно:

$$
\frac { d E _ { \Gamma } } { d \tau } = - c ^ { 2 } \frac { d m _ { 0 } } { d \tau } .
$$

Таким образом:

$$
\frac { d m } { d \tau } = \frac { d m _ { 0 } } { d \tau } + \gamma ^ { 2 } \rho S v ,
$$

или же:

Ответ:

$$
\frac { d m } { d \tau } = \frac { d m _ { 0 } } { d \tau } + \frac { \rho S v } { 1 - v ^ { 2 } / c ^ { 2 } } .
$$

С3 ${ } ^ { 0.80 }$ Пусть двигатель ракеты включен, но работает неизвестным образом. Наблюдатель, находящийся на ракете, выяснил, что в некоторый момент времени масса ракеты равнялась $m$, скорость изменения массы ракеты по часам ракеты равнялась $d m / d \tau$, а ракета двигалась со скоростью $v$ относительно лабораторной системы отсчёта. Какое ускорение свободного падения $a$ испытывал в рассматриваемый момент пассажир? Ответ выразите через $v , m , d m / d \tau$ и известные величины.

В системе отсчёта, сопутствующей движению ракеты, закон сохранения энергии выглядит следующим образом:

$$
d E _ { \Gamma } + d E _ { \mathrm { p } } = d E _ { \mathrm { в } } \Rightarrow d E _ { \Gamma } = \gamma ^ { 2 } c ^ { 2 } \rho S v d \tau - c ^ { 2 } d m .
$$

Воспользуемся законом сохранения импульса:

$$
\frac { d p _ { \mathrm { p } } } { d \tau } = m a = \frac { d p _ { \mathrm { \Gamma } } } { d \tau } - \frac { d p _ { \mathrm { B } } } { d \tau } = \frac { u } { c ^ { 2 } } \frac { d E _ { \mathrm { \Gamma } } } { d \tau } - \gamma v \frac { d m _ { \mathrm { B } } } { d \tau } .
$$

Подставляя найденные величины, получим:

Ответ:

$$
a = \frac { \gamma ^ { 2 } \rho S v ( u - v ) } { m } - \frac { u } { m } \frac { d m } { d \tau } .
$$

D1 ${ } ^ { 0.50 }$ Пусть ракета массой $m$ движется со скоростью $v$. Определите ускорение свободного падения $a$, испытываемое пассажирами ракеты. Ответ выразите через $m , v$ и известные величины.

С учётом того, что массы аннигилирующих вещества и топлива ракеты одинаковы, можно записать:


$$
\frac { d m } { d \tau } = - \gamma \rho S v .
$$

Тогда для ускорения ракеты с учётом $u = c$ получим:

$$
a = \frac { \gamma \rho S v } { m } ( c ( \gamma + 1 ) - \gamma v ) ,
$$

или же:

Ответ:

$$
a = \frac { \rho S v } { m \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \left( c \left( 1 + \frac { 1 } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \right) - \frac { v } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \right) .
$$

D2 ${ } ^ { 0.70 }$ Какой скорости $v$ достигнет ракета к моменту, когда её масса уменьшится до значения $m$ ? Ответ выразите $m$ и известные величины.

Перейдём к быстроте:

$$
a = c \frac { d \theta } { d \tau } = \frac { \rho S c ^ { 2 } \sinh \theta } { m } ( 1 + \cosh \theta - \sinh \theta ) .
$$

При этом:

$$
\frac { d m } { d \tau } = - \rho S c \sinh \theta
$$

Таким образом:

$$
\frac { d \theta } { 1 + \cosh \theta - \sinh \theta } = \frac { 1 } { 1 + e ^ { - \theta } } = - \frac { d m } { m } .
$$

Проинтегрируем полученное выражение:

$$
\int _ { 0 } ^ { \theta } \frac { d \theta } { 1 + e ^ { - \theta } } = \int _ { 0 } ^ { e ^ { \theta } } \frac { d x } { 1 + x } = \ln \frac { 1 + e ^ { \theta } } { 2 } = - \int _ { M } ^ { m } \frac { d m } { m } = \ln \frac { M } { m }
$$

откуда:

$$
e ^ { \theta } = \frac { 2 M } { m } - 1 .
$$

Для скорости $v$ имеем:

$$
v = c \tanh \theta = c \frac { e ^ { 2 \theta } - 1 } { e ^ { 2 \theta } + 1 } ,
$$

откуда находим:

Ответ:

$$
v = c \frac { \left( \frac { 2 M } { m } - 1 \right) ^ { 2 } - 1 } { \left( \frac { 2 M } { m } - 1 \right) ^ { 2 } + 1 }
$$

D3 ${ } ^ { \mathbf { 0 . 3 0 } }$ Найдите перемещение $L$ ракеты к моменту, когда её скорость достигает значения $v$. Ответ выразите через $v$ и известные величины.

Изменение массы ракеты равно массе попавшего в неё вещества:

$$
m _ { \mathrm { в } } = ( M - m ) = \rho S L .
$$

При этом:

$$
m = \frac { 2 M } { 1 + e ^ { \theta } } .
$$

Найдём $e ^ { \theta } ( v )$ :

$$
\frac { v } { c } = \frac { e ^ { 2 \theta } - 1 } { e ^ { 2 \theta } + 1 } \Rightarrow e ^ { \theta } = \sqrt { \frac { 1 + v / c } { 1 - v / c } } .
$$

Таким образом:


Ответ:

$$
L = \frac { M } { \rho S } \left( 1 - \frac { 2 } { 1 + \sqrt { \frac { 1 + v / c } { 1 - v / c } } } \right) .
$$

Е1 ${ } ^ { 0.50 }$ Получите зависимость $\delta m ( \tau )$. Ответ выразите через $\tau$ и известные величины.

Различие масс обусловлено попаданием вещества в ракету. Поскольку двигатель настроен на движение ракеты в вакууме:

$$
\frac { d E _ { \text {вещ } } } { d \tau } = - c ^ { 2 } \frac { d m _ { 0 } } { d \tau } .
$$

Тогда из закона сохранения энергии имеем:

$$
\frac { d m } { d \tau } - \frac { d m _ { 0 } } { d \tau } = \frac { d ( \delta m ) } { d \tau } = \gamma ^ { 2 } \rho S v = \rho S c \sinh \theta \cosh \theta
$$

Обратим внимание, что поправка к скорости движения ракеты, вызванная попаданием в неё вещества, является малой. Тогда $\tau = c \theta / a$. Таким образом:

$$
\delta m ( \theta ) = \frac { \rho S c ^ { 2 } } { a } \int _ { 0 } ^ { \theta } \sinh \theta \cosh \theta d \theta = \frac { \rho S c ^ { 2 } \sinh ^ { 2 } \theta } { 2 a }
$$

Подставляя $\theta$, получим:

Ответ:

$$
\delta m ( \tau ) = \frac { \rho S c ^ { 2 } \sinh ^ { 2 } ( a \tau / c ) } { 2 a }
$$

E2 ${ } ^ { 0.20 }$ На какую величину $\delta m _ { 1 }$ отличаются массы ракет, движущихся в вакууме и веществе к моменту окончания работы двигателей? Ответ выразите через $v _ { 1 }$ и известные величины.

Поскольку $v / c = \tanh \theta$ :

$$
\delta m ( v ) = \frac { \rho S v ^ { 2 } } { 2 a \left( 1 - v ^ { 2 } / c ^ { 2 } \right) }
$$

Таким образом:

Ответ:

$$
\delta m _ { 1 } = \frac { \rho S v _ { 1 } ^ { 2 } } { 2 a \left( 1 - v _ { 1 } ^ { 2 } / c ^ { 2 } \right) }
$$

E3 ${ } ^ { 1.50 }$ Получите зависимость $\delta v ( \tau )$. Ответ выразите через $\tau$ и известные величины.

Уравнение движения ракеты в вакууме выглядит следующим образом::

$$
m _ { 0 } a = - u \frac { d m _ { 0 } } { d \tau } .
$$

Движение ракеты в веществе выглядит следующим образом:

$$
m a = \gamma ^ { 2 } \rho S v ( u - v ) - u \frac { d m } { d \tau }
$$

Перепишем последнее соотношение с учётом малости $\delta v / v _ { 0 }$ и $\delta m / m _ { 0 }$ :

$$
a \delta m + m _ { 0 } c \frac { d ( \delta \theta ) } { d \tau } = \gamma ^ { 2 } \rho S v ( u - v ) - u \frac { d ( \delta m ) } { d \tau } .
$$

Подставляя $m _ { 0 } , \delta m$ и $d ( \delta m ) / d \tau$, получим:


$$
\frac { \rho S c ^ { 2 } \sinh ^ { 2 } \theta } { 2 } + \frac { M a e ^ { - \theta c / u } } { c } \frac { d ( \delta \theta ) } { d \theta } = - \gamma ^ { 2 } \rho S v ^ { 2 } = - \rho S c ^ { 2 } \sinh ^ { 2 } \theta
$$

Таким образом:

$$
\frac { d ( \delta \theta ) } { d \theta } = - \frac { 3 \rho S c ^ { 2 } e ^ { \theta c / u } \sinh ^ { 2 } \theta } { 2 M a } .
$$

Таким образом:

$$
\begin{gathered}
\delta \theta = - \frac { 3 \rho S c ^ { 2 } } { 2 M a } \int _ { 0 } ^ { \theta } \sinh ^ { 2 } \theta e ^ { \theta c / u } d \theta = - \frac { 3 \rho S c ^ { 3 } } { 8 M a } \int _ { 0 } ^ { \theta } \left( e ^ { \theta ( 2 + c / u ) } - 2 e ^ { \theta c / u } + e ^ { \theta ( c / u - 2 ) } \right) d \theta = \\
= - - \frac { 3 \rho S c ^ { 2 } } { 8 M a } \left( \frac { e ^ { \theta ( 2 + c / u ) } - 1 } { 2 + c / u } - 2 \frac { e ^ { \theta c / u } - 1 } { c / u } + \frac { e ^ { \theta ( c / u - 2 ) } - 1 } { c / u - 2 } \right)
\end{gathered}
$$

При этом:

$$
\delta v = c \delta \tanh \theta = \frac { c \delta \theta } { \cosh ^ { 2 } \theta }
$$

Таким образом:

Ответ:

$$
\delta v ( \tau ) = - \frac { 3 \rho S c ^ { 3 } } { 8 M a \cosh ^ { 2 } ( a \tau / c ) } \left( \frac { e ^ { ( 2 + c / u ) a \tau / c } - 1 } { 2 + c / u } - 2 \frac { e ^ { a \tau / u } - 1 } { c / u } + \frac { e ^ { ( c / u - 2 ) a \tau / c } - 1 } { c / u - 2 } \right) .
$$

E4 ${ } ^ { 0.30 }$ На какую величину $\delta v _ { 1 }$ отличаются скорости ракет, движущихся в вакууме и веществе к моменту окончания работы двигателей? Ответ выразите через $v _ { 1 }$ и известные величины.

Выразим $e ^ { \theta }$ через скорость $v$ :

$$
v / c = \tanh \theta = \frac { e ^ { 2 \theta } - 1 } { e ^ { 2 \theta } + 1 } \Rightarrow e ^ { \theta } = \sqrt { \frac { 1 + v / c } { 1 - v / c } } .
$$

Подставляя в выражение для $\delta v ( \theta )$, получим:

Ответ:

$$
\delta v _ { 1 } = - \frac { \rho S c ^ { 3 } \left( 1 - v _ { 1 } ^ { 2 } / c ^ { 2 } \right) } { 8 M a } \left( \frac { \left( \frac { 1 + v _ { 1 } / c } { 1 - v _ { 1 } / c } \right) ^ { 1 + c / ( 2 u ) } - 1 } { 2 + c / u } - 2 \frac { \left( \frac { 1 + v _ { 1 } / c } { 1 - v _ { 1 } / c } \right) ^ { c / ( 2 u ) } - 1 } { c / u } + \frac { \left( \frac { 1 + v _ { 1 } / c } { 1 - v _ { 1 } / c } \right) ^ { c / ( 2 u ) - 1 } - 1 } { c / u - 2 } \right) .
$$
