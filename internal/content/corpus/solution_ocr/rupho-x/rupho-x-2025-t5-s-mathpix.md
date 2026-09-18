---
id: solution-ocr-rupho-x-2025-t5-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2025/T5_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
$$
\vec { E } ( x ) = E _ { 0 } \hat { x } e ^ { - x / \lambda }
$$

Величина $\lambda$ называется длиной экранирования Дебая. Выразите $\lambda$ через $n _ { i } , q _ { i } , \varepsilon , \varepsilon _ { 0 }$ и $k _ { B } T$.
Подсказка: согласно распределению Больцмана, при термодинамическом равновесии концентрация каждого из типов ионов $n _ { i }$ зависит от их потенциальной энергии этих ионов $U _ { i }$ по закону:

$$
n _ { i } = n _ { i 0 } \exp \left[ - \frac { V q _ { i } } { k _ { B } T } \right] .
$$

Примем потенциал на бесконечности нулевым. Тогда потенциал в точке $x$ :

$$
\varphi ( x ) = - \int _ { \infty } ^ { x } E _ { x } ( \xi ) \mathrm { d } \xi = E _ { 0 } \int _ { x } ^ { \infty } \exp [ - \xi / \lambda ] \mathrm { d } \xi = \lambda E _ { 0 } e ^ { - x / \lambda }
$$

Объёмная плотность заряда по теореме Гаусса:

$$
\rho ( x ) = \varepsilon \varepsilon _ { 0 } \frac { \mathrm {~d} E _ { x } } { \mathrm {~d} x } = - \varepsilon \varepsilon _ { 0 } \lambda E _ { 0 } e ^ { - x / \lambda } .
$$

Наконец, согласно распределению Больцмана:

$$
\begin{aligned}
& \rho ( x ) = \sum _ { i } n _ { i } ( x ) q _ { i } = \sum _ { i } n _ { i 0 } q _ { i } \exp \left[ - \frac { q _ { i } \varphi ( x ) } { k _ { B } T } \right] \approx \sum _ { i } n _ { i 0 } q _ { i } \left[ 1 - \frac { q _ { i } \varphi ( x ) } { k _ { B } T } \right] = \\
& \quad = - \sum _ { i } n _ { i 0 } q _ { i } \frac { q _ { i } \varphi ( x ) } { k _ { B } T } = - \frac { \lambda E _ { 0 } e ^ { - x / \lambda } } { k _ { B } T } \sum _ { i } n _ { i 0 } q _ { i } ^ { 2 } = - \varepsilon \varepsilon _ { 0 } \lambda E _ { 0 } e ^ { - x / \lambda } \Longrightarrow
\end{aligned}
$$

Ответ:

$$
\lambda = \sqrt { \frac { \varepsilon \varepsilon _ { 0 } k _ { B } T } { \sum _ { i } n _ { i 0 } q _ { i } ^ { 2 } } }
$$

А2 ${ } ^ { 0.30 }$ Предположим, что внеклеточный раствор представляет собой NaCl с концентрацией 440 ммоль/л. Относительная диэлектрическая проницаемость воды $\varepsilon = 81 , T = 310$ К. Вычислите $\lambda$ в нм и сравните свой ответ с толщиной клеточной мембраны $d \approx 5$ нм.

Поскольку ммоль $/ \mathrm { л } =$ моль $/ \mathrm { M } ^ { 3 }$, для пересчёта молярной концентрации в обычную необходимо умножить на постоянную Авогадро $N _ { A }$. Ионизированный раствор соли состоит из двух типов ионов одинаковой концентрации, для которых $q _ { i } ^ { 2 } = e ^ { 2 }$. Таким образом:

$$
\lambda = \sqrt { \frac { \varepsilon \varepsilon _ { 0 } k _ { B } T } { 2 N _ { A } c e ^ { 2 } } } \approx 0.47 \mathrm { HM } ,
$$

что намного меньше толщины клеточной мембраны.

Ответ:

$$
\lambda \approx 0.47 \text { нм } \ll d
$$

A3 ${ } ^ { 0.20 }$ Найдите заряд ионов раствора, приходящихся на единицу площади клеточной мембраны.

Из теоремы Гаусса, записанной для полупространства снаружи мембраны, сразу получаем:

Ответ:

$$
\sigma = - \varepsilon \varepsilon _ { 0 } E _ { 0 }
$$

В1 ${ } ^ { 0.40 }$ Пусть в равновесии концентрация ионов натрия внутри клетки равна $c _ { \mathrm { Na } ^ { + } }$, а снаружи $- c _ { \mathrm { Na } ^ { + } } ^ { 0 }$.

Используя распределение Больцмана, найдите потенциал Нернста $V _ { \mathrm { Na } ^ { + } } ^ { \text {Nernst } }$. В этом пункте считайте $| e V |$ величиной одного порядка с $k _ { B } T$.

Исходя из распределения Больцмана:

$$
c _ { \mathrm { Na } ^ { + } } = c _ { \mathrm { Na } ^ { + } } ^ { 0 } \exp \left[ - \frac { e V _ { \mathrm { Na } ^ { + } } ^ { \mathrm { Nernst } } } { k _ { B } T } \right] \Longrightarrow
$$


Ответ:

$$
V _ { \mathrm { Na } ^ { + } } ^ { \mathrm { Nernst } ^ { 2 } } = \frac { k _ { \mathrm { B } } T } { e } \ln \frac { c _ { \mathrm { Na } ^ { + } } ^ { 0 } } { c _ { \mathrm { Na } ^ { + } } }
$$

В2 ${ } ^ { 0.80 }$ Вычислите мембранный потенциал покоя $V$ в мВ и концентрации ионов внутри клетки $c _ { \mathrm { K } ^ { + } } , c _ { \mathrm { Na } ^ { + } }$и $c _ { \mathrm { Cl } ^ { - } }$.

В равновесии концентрации подчиняются распределению Больцмана:

$$
c _ { \mathrm { Na } ^ { + } } = c _ { \mathrm { Na } ^ { + } } ^ { 0 } \exp \left[ - \frac { e V } { k _ { B } T } \right] , \quad c _ { \mathrm { K } ^ { + } } = c _ { \mathrm { K } ^ { + } } ^ { 0 } \exp \left[ - \frac { e V } { k _ { B } T } \right] , \quad c _ { \mathrm { Cl } ^ { - } } = c _ { \mathrm { Cl } ^ { - } } ^ { 0 } \exp \left[ \frac { e V } { k _ { B } T } \right] .
$$

Условие равновесия раствора внутри клетки -- электронейтральность раствора:

$$
c _ { \mathrm { Na } ^ { + } } + c _ { \mathrm { K } ^ { + } } - c _ { \mathrm { Cl } ^ { - } } + \rho _ { \text {macro } } / N _ { A } e = 0 .
$$

Для удобства дальнейшей записи введём величину $\xi \equiv \exp \left[ - e V / k _ { B } T \right]$. Тогда численно:

$$
\begin{gathered}
460 \xi - 560 \xi ^ { - 1 } - 400 = 0 \\
23 \xi ^ { 2 } - 20 \xi - 28 = 0 \\
\xi \approx 1.62 \Longrightarrow \\
V = - \frac { k _ { B } T } { e } \ln 1.62 \approx - 12.9 \mathrm { MB } \\
c _ { \mathrm { Na } ^ { + } } = 440 \cdot 1.62 \text { ммоль } / л = 713 \text { ммоль } / \text { л } \\
c _ { \mathrm { K } ^ { + } } = 200 \cdot 1.62 \text { ммоль } / \text { л } = 32 \text { ммоль } / \text { л } \\
c _ { \mathrm { Cl } ^ { - } } = 560 / 1.62 \text { ммоль } / \text { л } = 346 \text { ммоль } / \text { л }
\end{gathered}
$$

Ответ:

$$
\begin{gathered}
V = - 12.9 \mathrm { mB } , \\
c _ { \mathrm { K } ^ { + } } = 32 \text { ммоль } / л , \quad c _ { \mathrm { Na } ^ { + } } = 713 \text { ммоль } / л , \quad c _ { \mathrm { Cl } ^ { - } } = 346 \text { ммоль } / \text { л }
\end{gathered}
$$

В3 ${ } ^ { 1.00 }$ Вычислите мембранный потенциал покоя $V$ в мВ и концентрации ионов внутри клетки $c _ { \mathrm { K } ^ { + } } , c _ { \mathrm { Na } ^ { + } }$и $c _ { \mathrm { Cl } ^ { - } }$с учётом работы натрий-калиевых насосов.

Из-за влияния активных каналов транспорта концентрации ионов натрия и калия больше не будут удовлетворять распределению Больцмана. Для ионов хлора при этом всё ещё имеет место:

$$
c _ { \mathrm { Cl } ^ { - } } = c _ { \mathrm { Cl } ^ { - } } ^ { 0 } \exp \left[ \frac { e V } { k _ { B } T } \right] .
$$

Активные токи ионов натрия и калия выражаются через $J _ { \text {pump } }$ как:

$$
J _ { \text {pump } , \mathrm { K } ^ { + } } = - 2 J _ { \text {pump } } , \quad J _ { \text {pump } , \mathrm { Na } ^ { + } } = 3 J _ { \text {pump } } .
$$

Условие равновесия для ионов натрия и калия:

$$
\begin{gathered}
J _ { \text {pump } , \mathrm { Na } ^ { + } } + g _ { \mathrm { Na } ^ { + } } \left( V - V _ { \mathrm { Na } ^ { + } } ^ { \mathrm { Nernst } } \right) = 0 , \quad J _ { \text {pump } , \mathrm { K } ^ { + } } + g _ { \mathrm { K } ^ { + } } \left( V - V _ { \mathrm { K } ^ { + } } ^ { \mathrm { Nernst } } \right) = 0 \\
3 J _ { \text {pump } } + g _ { \mathrm { Na } ^ { + } } \left( V - \frac { k _ { \mathrm { B } } T } { e } \ln \frac { c _ { \mathrm { Na } ^ { + } } ^ { 0 } } { c _ { \mathrm { Na } ^ { + } } } \right) = 0 , \quad - J _ { \text {pump } } + g _ { \mathrm { K } ^ { + } } \left( V - \frac { k _ { \mathrm { B } } T } { e } \ln \frac { c _ { \mathrm { K } ^ { + } } ^ { 0 } } { c _ { \mathrm { K } ^ { + } } } \right) = 0 \\
c _ { \mathrm { Na } ^ { + } } = c _ { \mathrm { Na } ^ { + } } ^ { 0 } \exp \left[ - \frac { 3 e J _ { \text {pump } } } { k _ { B } T g _ { \mathrm { Na } ^ { + } } } \right] \exp \left[ - \frac { e V } { k _ { B } T } \right] \\
c _ { \mathrm { K } ^ { + } } = c _ { \mathrm { K } ^ { + } } ^ { 0 } \exp \left[ \frac { 2 e J _ { \text {pump } } } { k _ { B } T g _ { \mathrm { K } ^ { + } } } \right] \exp \left[ - \frac { e V } { k _ { B } T } \right] .
\end{gathered}
$$

Далее вновь для удобства введём $\xi$, тогда условие электронейтральности раствора внутри клетки запишется в виде:

$$
\left( c _ { \mathrm { Na } ^ { + } } ^ { 0 } \exp \left[ - \frac { 3 e J _ { \mathrm { pump } } } { k _ { B } T g _ { \mathrm { Na } ^ { + } } } \right] + c _ { \mathrm { K } ^ { + } } ^ { 0 } \exp \left[ \frac { 2 e J _ { \text {pump } } } { k _ { B } T g _ { \mathrm { K } ^ { + } } } \right] \right) \xi - c _ { \mathrm { Cl } ^ { - } } ^ { 0 } \xi ^ { - 1 } + \rho _ { \text {macro } } / N _ { A } e = 0 .
$$

Аналогично решаем квадратное уравнение и после подстановок получаем ответ:

Ответ:

$$
\begin{gathered}
V = - 70.0 \mathrm { mB } , \\
c _ { \mathrm { K } ^ { + } } = 568 \text { ммоль } / л , \quad c _ { \mathrm { Na } ^ { + } } = 36 \text { ммоль } / л , \quad c _ { \mathrm { Cl } ^ { - } } = 204 \text { ммоль } / \text { л }
\end{gathered}
$$


Наибольшие энергозатраты в цикле - перенос трёх ионов натрия, для которого необходима энергия:

$$
3 e V = 3 \frac { e V } { k _ { B } T } k _ { B } T \approx 7.3 k _ { B } T < 19 k _ { B } T \Longrightarrow
$$

достаточно одной молекулы АТФ!

Ответ:

$$
N _ { \mathrm { AT } \Phi } = 1
$$

С1 ${ } ^ { 1.00 }$ Пусть в точке $x = 0$ в клетку подаётся ток $I _ { 0 }$. Найдите равновесное распределение динамического мембранного потенциала $v ( x )$.

Динамический потенциал $v$ создаёт дополнительный ток наружу из аксона, который на единицу его длины равен:

$$
J _ { \mathrm { out } } = 2 \pi a g _ { \mathrm { tot } } v .
$$

Запишем закон сохранения заряда для небольшого участка аксона:

$$
\pi a ^ { 2 } \frac { \mathrm {~d} j } { \mathrm {~d} x } + J _ { \text {out } } = 0
$$

где $j$-- плотность тока вдоль оси $x$. Закон Ома в дифференциальной форме:

$$
j = \sigma E = - \sigma \frac { \mathrm { d } v } { \mathrm {~d} x } .
$$

Объединяем в одно уравнение:

$$
- a \sigma \frac { \mathrm {~d} ^ { 2 } v } { \mathrm {~d} x ^ { 2 } } + 2 g _ { \mathrm { tot } } v = 0
$$

Поскольку ток втекает в точке $x = 0$, в этой точке производная потенциала терпит разрыв. При этом зависимость $v ( x )$ симметрична и на бесконечности должна обращаться в ноль. Таким образом, решение должно иметь вид:

$$
v ( x ) = v _ { 0 } \exp \left[ - | x | / \sqrt { \frac { a \sigma } { 2 g _ { \mathrm { tot } } } } \right] .
$$

Из закона Ома следует, что скачок производной $v ( x )$ в нуле должен быть равен:

$$
2 \cdot \pi a ^ { 2 } \sigma \cdot v _ { 0 } \sqrt { \frac { 2 g _ { \mathrm { tot } } } { a \sigma } } = I _ { 0 } \Longrightarrow v _ { 0 } = \frac { I _ { 0 } } { 2 \pi a \sqrt { 2 a \sigma g _ { \mathrm { tot } } } } \Longrightarrow
$$

Ответ:

$$
v ( x ) = \frac { I _ { 0 } } { 2 \pi a \sqrt { 2 a \sigma g _ { \mathrm { tot } } } } \exp \left[ - | x | \sqrt { \frac { 2 g _ { \mathrm { tot } } } { a \sigma } } \right]
$$

С2 ${ } ^ { 0.40 }$ В неравновесном случае зависимость $v ( x , t )$ удовлетворяет уравнению:

$$
\frac { \partial v } { \partial t } = \alpha \frac { \partial ^ { 2 } v } { \partial x ^ { 2 } } - \beta v .
$$

Запишите выражения для коэффициентов $\alpha$ и $\beta$.

Если на участке аксона длиной $\mathrm { d } x$ скапливается дополнительный заряд $\mathrm { d } q$, это приводит к увеличению динамического мембранного потенциала на величину $\frac { \mathrm { d } q } { C \mathrm {~d} x }$. Скапливающий заряд можно записать в виде:

$$
\begin{aligned}
\mathrm { d } q & = \left( - \pi a ^ { 2 } \frac { \mathrm {~d} j } { \mathrm {~d} x } - 2 \pi a g _ { \mathrm { tot } } v \right) \mathrm { d } x \mathrm {~d} t = C \mathrm {~d} x \mathrm {~d} v \Longrightarrow \\
\frac { \partial v } { \partial t } & = - \frac { \pi a ^ { 2 } } { C } \frac { \partial j } { \partial x } - \frac { 2 \pi a g _ { \mathrm { tot } } } { C } v = \frac { \pi a ^ { 2 } \sigma } { C } \frac { \partial ^ { 2 } v } { \partial x ^ { 2 } } - \frac { 2 \pi a g _ { \mathrm { tot } } } { C } v
\end{aligned}
$$

Ответ:

$$
\alpha = \frac { \pi a ^ { 2 } \sigma } { C } , \quad \beta = \frac { 2 \pi a g _ { \mathrm { tot } } } { C }
$$


$$
v ( x , 0 ) = v _ { 0 } \exp \left[ - \frac { x ^ { 2 } } { b ^ { 2 } } \right] .
$$

Найдите выражение для $v ( x , t )$ при $t > 0$.
Примечание: решение удобно искать в виде

$$
v ( x , t ) = \frac { v _ { 0 } b } { \sqrt { f ( t ) } } \exp \left[ - \frac { x ^ { 2 } } { f ( t ) } \right] \exp \left[ - \frac { t } { \tau } \right]
$$

где $f ( t )$ - линейная по $t$ функция, $\tau$ - некоторая константа.
Учитывая начальное условие, $f ( t = 0 ) = b ^ { 2 }$, то есть $f ( t )$ надо искать в виде:

$$
f ( t ) = b ^ { 2 } + \gamma t .
$$

Найдём частные производные $v ( x , t )$ :

$$
\begin{aligned}
& \frac { \partial v } { \partial t } = \frac { v _ { 0 } b } { \sqrt { b ^ { 2 } + \gamma t } } \exp \left[ - \frac { x ^ { 2 } } { b ^ { 2 } + \gamma t } \right] \exp \left[ - \frac { t } { \tau } \right] \left( - \frac { \gamma } { 2 \left( b ^ { 2 } + \gamma t \right) } + \frac { \gamma x ^ { 2 } } { \left( b ^ { 2 } + \gamma t \right) ^ { 2 } } - \frac { 1 } { \tau } \right) \\
& \frac { \partial v } { \partial x } = \frac { v _ { 0 } b } { \sqrt { b ^ { 2 } + \gamma t } } \exp \left[ - \frac { x ^ { 2 } } { b ^ { 2 } + \gamma t } \right] \exp \left[ - \frac { t } { \tau } \right] \left( - \frac { 2 x } { b ^ { 2 } + \gamma t } \right) \\
& \frac { \partial ^ { 2 } v } { \partial x ^ { 2 } } = \frac { v _ { 0 } b } { \sqrt { b ^ { 2 } + \gamma t } } \exp \left[ - \frac { x ^ { 2 } } { b ^ { 2 } + \gamma t } \right] \exp \left[ - \frac { t } { \tau } \right] \left( - \frac { 2 } { b ^ { 2 } + \gamma t } + \frac { 4 x ^ { 2 } } { \left( b ^ { 2 } + \gamma t \right) ^ { 2 } } \right)
\end{aligned}
$$

Подставим в уравнение и сократим общие множители:

$$
\begin{gathered}
- \frac { \gamma } { 2 \left( b ^ { 2 } + \gamma t \right) } + \frac { \gamma x ^ { 2 } } { \left( b ^ { 2 } + \gamma t \right) ^ { 2 } } - \frac { 1 } { \tau } = \alpha \left( - \frac { 2 } { b ^ { 2 } + \gamma t } + \frac { 4 x ^ { 2 } } { \left( b ^ { 2 } + \gamma t \right) ^ { 2 } } \right) - \beta \\
\tau = \frac { 1 } { \beta } , \quad \gamma = 4 \alpha
\end{gathered}
$$

Наконец, подставляя $\alpha$ и $\beta$ из предыдущего пункта, получаем ответ:

Ответ:

$$
v ( x , t ) = \frac { v _ { 0 } b } { \sqrt { b ^ { 2 } + 4 \pi a ^ { 2 } \sigma t / C } } \exp \left[ - \frac { x ^ { 2 } } { b ^ { 2 } + 4 \pi a ^ { 2 } \sigma t / C } - \frac { 2 \pi a g _ { \text {tot } } t } { C } \right]
$$

С4 ${ } ^ { 0.40 }$ Для рассматриваемого нейрона $a = 20$ мкм, $g _ { \text {tot } } = 5$ Ом $^ { - 1 } \cdot$ м $^ { - 2 }$, толщина и диэлектрическая проницаемость клеточной мембраны $d = 5$ нм и $\varepsilon = 7$ , проводимость $\sigma = 3 \mathrm { OM } ^ { - 1 } \cdot \mathrm {~m} ^ { - 1 }$. Оцените масштабы расстояния и времени, на которых распространяется нейронный сигнал.

Масштаб времени, на котором распространяется сигнал:

$$
\tau \sim \frac { C } { 2 \pi a g _ { \mathrm { tot } } } .
$$

Ёмкость на единицу длины:

$$
C \mathrm {~d} x = \frac { \varepsilon \varepsilon _ { 0 } 2 \pi a \mathrm {~d} x } { d } \Longrightarrow C = \frac { 2 \pi \varepsilon \varepsilon _ { 0 } a } { d } .
$$

Таким образом:

$$
\tau \sim \frac { \varepsilon \varepsilon _ { 0 } } { d g _ { \mathrm { tot } } } = 2.5 \mathrm { мс }
$$

Масштаб расстояния, на котором распространяется сигнал:

$$
\frac { x ^ { 2 } } { 4 \pi a ^ { 2 } \sigma \tau / C } \sim 1 \Longrightarrow x \sim \sqrt { \frac { 4 \pi a ^ { 2 } \sigma \tau } { C } } = \sqrt { \frac { 2 a \sigma } { g _ { \mathrm { tot } } } } = 5 \mathrm { mM }
$$

Ответ:

$$
\tau \sim 2.5 \mathrm { мс } , \quad x \sim 5 \mathrm { мм }
$$

С5 ${ } ^ { 0.60 }$ График зависимости плотности тока через клеточную мембрану от мембранного потенциала, $J ( v )$, показана на рис. 56. Этот график пересекает ось абсцисс в трёх точках: $0 , v _ { 1 }$ и $v _ { 2 }$. Найдите $v _ { 1 }$ и $v _ { 2 }$.

В отсутствие слагаемого $B v ^ { 2 }$ дополнительный ток через каналы составил бы:

$$
J _ { \text {plain } } ( v ) = g _ { \text {tot } } v .
$$

Из-за дополнительной добавки $B v ^ { 2 }$ в проводимость возникает ток:


$$
J _ { \text {nonlinear } } ( v ) = B v ^ { 2 } \left( V - V _ { \mathrm { Na } ^ { + } } ^ { \mathrm { Nernst } } \right) = B v ^ { 2 } \left( V - V _ { 0 } - H \right) = B v ^ { 2 } ( v - H ) .
$$

Таким образом, полный ток:

$$
J ( v ) = g _ { \mathrm { tot } } v + B v ^ { 2 } ( v - H ) .
$$

Условие пересечения нуля:

$$
\begin{gathered}
J ( v ) = 0 \Longrightarrow \\
g _ { \mathrm { tot } } + B v ( v - H ) = 0 \\
B v ^ { 2 } - B H v + g _ { \mathrm { tot } } = 0 \\
v _ { 2,1 } = \frac { B H \pm \sqrt { B ^ { 2 } H ^ { 2 } - 4 B g _ { \mathrm { tot } } } } { 2 B }
\end{gathered}
$$

Ответ:

$$
v _ { 1,2 } = \frac { H } { 2 } \left[ 1 \mp \sqrt { 1 - \frac { 4 g _ { \mathrm { tot } } } { B H ^ { 2 } } } \right]
$$

C6 ${ } ^ { 0.30 }$ Если увеличить динамический мембранный потенциал до некоторого порогового значения $v _ { \mathrm { c } }$, то клеточная мембрана в этой области больше не вернётся к мембранному потенциалу покоя. Найдите $v _ { c }$.

Динамический потенциал возвращается к своему равновесному значению, поскольку через стенку аксона вытекает ток. Если ток будет противоположного знака с динамическим потенциалом, это приведёт к накоплению заряда и увеличению $v$. Таким образом,

Ответ:

$$
v _ { \mathrm { c } } = v _ { 1 }
$$
