---
id: solution-ocr-rupho-x-2021-t7-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2021/T7_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Воспользуемся заданными в условии формулами

$$
\left\{ \begin{array} { l }
c _ { P } - c _ { V } = r \\
c _ { P } / c _ { V } = \gamma
\end{array} \right.
$$

Ответ:

$$
c _ { P } = \frac { \gamma r } { \gamma - 1 } = \frac { 7 } { 2 } r \approx 1005 \frac { \text { Дж } } { \kappa \Gamma \cdot К }
$$

Ответ:

$$
c _ { V } = \frac { r } { \gamma - 1 } = \frac { 5 } { 2 } r \approx 718 \frac { \text { Дж } } { \text { кг.К } }
$$

A2 ${ } ^ { 0.50 }$
Как зависит отношение давления в цилиндрической полости к атмосферному $P _ { 0 } / P _ { \text {atm } }$ от веса платформы и геометрических параметров системы?

Из условия равновесия платформы получим

$$
\left( P _ { 0 } - P _ { a t m } \right) \frac { \pi D ^ { 2 } } { 4 } = W ,
$$

откуда:

Ответ:

$$
\frac { P _ { 0 } } { P _ { a t m } } = 1 + \frac { 4 W } { P _ { a t m } \pi D ^ { 2 } } \approx 7,18
$$

B1 ${ } ^ { 0.50 }$
Выразите скорость движения возмущенной области газа $v$ через $с , \rho$ и $\rho _ { 0 }$.

Выделим мысленно область, ограниченную двумя положениями волнового фронта: в моменты времени $t$ и $t + \Delta t$. Рассмотрим изменение массы газа в рассматриваемой области:

$$
\begin{gathered}
m ( t ) = \rho _ { 0 } A c \Delta t \\
m ( t + \Delta t ) = \rho A c \Delta t
\end{gathered}
$$

С другой стороны, суммарный поток массы (втекающий) через обе грани равен

$$
\frac { d m } { d t } = \rho v A
$$

откуда

$$
\begin{gathered}
m ( t + \Delta t ) - m ( t ) = \frac { d m } { d t } \Delta t \\
\left( \rho - \rho _ { 0 } \right) c = \rho v
\end{gathered}
$$

Ответ:

$$
v = c \left( 1 - \frac { \rho _ { 0 } } { \rho } \right)
$$

B2 ${ } ^ { 1.00 }$
Выразите разность давлений $P - P _ { 0 }$ через $\rho , \rho _ { 0 }$, и $c$.

Из закона изменения импульса невозмущённой части газа получим

$$
\left( P - P _ { 0 } \right) A = \frac { d p } { d t } = v \frac { d m } { d t } = \rho _ { 0 } A c v
$$

Подставляя выражение для $v$ из предыдущего пункта, получим


Ответ:

$$
\left( P - P _ { 0 } \right) = \left( 1 - \frac { \rho _ { 0 } } { \rho } \right) \rho _ { 0 } c ^ { 2 }
$$

В3 ${ } ^ { 0.50 }$ Выразите $c$ через $\gamma , r , T$.

$$
c ^ { 2 } = \frac { \rho } { \rho _ { 0 } } \frac { P - P _ { 0 } } { \rho - \rho _ { 0 } }
$$

Поскольку давление газа должно изменяться непрерывно

$$
c ^ { 2 } = \frac { d P } { d \rho }
$$

Течение газа считается адиабатическим, поэтому

$$
P \rho ^ { - \gamma } = \text { const }
$$

дифференцируя данное соотношение, получим

$$
\frac { d P } { d \rho } = \gamma \frac { P } { \rho } = \gamma r T
$$

и окончательно

Ответ:

$$
c = \sqrt { \gamma r T }
$$

В4 ${ } ^ { 0.50 }$ Рассчитайте скорость звука в воздухе при заданной температуре $T _ { 0 }$ окружающей среды.

Ответ:

$$
c _ { 0 } = \sqrt { \gamma r T _ { 0 } } \approx 347 \mathrm {~m} / \mathrm { c }
$$

В5 ${ } ^ { 1.00 }$ Выразите массовый расход $d m / d t$ через $M , \gamma , T / T _ { 0 }$ и соотношение $P _ { 0 } A \gamma / c _ { 0 }$, где $c _ { 0 }$ - скорость звука при температуре $T _ { 0 }$.

Выражение для массового расхода принимает вид

$$
\frac { d m } { d t } = \rho A c M
$$

Выразим $\rho$ из уравнения Менделеева-Клапейрона

$$
\frac { d m } { d t } = \frac { P A c M } { r T }
$$

Комбинируя последнее выражение с результатом предыдущего пункта

$$
\frac { d m } { d t } = \frac { \gamma A M P } { c _ { 0 } } \sqrt { \frac { T _ { 0 } } { T } }
$$

Поскольку процесс протекает адиабатически

$$
T ^ { \gamma } P ^ { 1 - \gamma } = \mathrm { const }
$$

Откуда

$$
P = P _ { 0 } \left( \frac { T } { T _ { 0 } } \right) ^ { \frac { \gamma } { \gamma - 1 } }
$$

Подставим данное соотношение в выражение для $\frac { d m } { d t }$ :


Ответ:

$$
\frac { d m } { d t } = \frac { P _ { 0 } A \gamma } { c _ { 0 } } M \left( \frac { T } { T _ { 0 } } \right) ^ { \frac { \gamma + 1 } { 2 ( \gamma - 1 ) } }
$$

В6 ${ } ^ { 0.50 }$ Выразите скорость газа $v$ через $M , T , r \backsim \gamma$.

Ответ:

$$
v = M c = M \sqrt { \gamma r T }
$$

В7 ${ } ^ { 1.50 }$ Используя уравнение Бернулли для сжимаемого газа в виде $\frac { v ^ { 2 } } { 2 } + c _ { P } T =$ const, найдите отношение температур $T / T _ { 0 }$ через $M$ и $\gamma$.

Подставляя полученные ранее выражения для $v$ и $c _ { P }$

$$
r T \left( \frac { \gamma M ^ { 2 } } { 2 } + \frac { \gamma } { \gamma - 1 } \right) = \mathrm { const }
$$

или же

$$
T \left( ( \gamma - 1 ) M ^ { 2 } + 2 \right) = \text { const }
$$

откуда

Ответ:

$$
\frac { T } { T _ { 0 } } = \frac { 2 } { 2 + ( \gamma - 1 ) M ^ { 2 } }
$$

С1 ${ } ^ { 1.00 }$ Выразите $d m / d t$ через $M , \gamma$ и $P _ { 0 } A \gamma / c _ { 0 }$, и схематично нарисуйте эту зависимость от $M$ для $M \in [ 0 ; 1 ]$. Найдите такое значение $M$, для которого поток достигает своего максимального значения (этот режим называется критическим).

Комбинируя результаты пунктов $B 5$ и $B 7$

$$
\frac { d m } { d t } = \frac { P _ { 0 } A \gamma } { c _ { 0 } } M \left( 1 + \frac { \gamma - 1 } { 2 } M ^ { 2 } \right) ^ { - \frac { \gamma + 1 } { 2 ( \gamma - 1 ) } }
$$

дифференцируя по $M$

$$
1 + \frac { \gamma - 1 } { 2 } M ^ { 2 } + \frac { M ( \gamma + 1 ) } { 2 ( 1 - \gamma ) } \cdot M ( \gamma - 1 ) = 0
$$

откуда

Ответ:

$$
M = 1
$$

С2 ${ } ^ { 1.00 }$ Пусть компрессор выдает поток $5.0 \mathrm {~m} ^ { 3 }$ /мин. Рассчитайте значения $\varepsilon , T , P , v$ и $\rho$ выходного потока в критическом режиме.

Для критического режима

Ответ:

$$
T = \frac { 2 T _ { 0 } } { 1 + \gamma } = 250 \mathrm {~K}
$$


Теперь найдём значения давления и плотности из уравнения Пуассона:

$$
\begin{gathered}
P ^ { 1 - \gamma } T ^ { \gamma } = \text { const } \\
P \propto T ^ { \frac { \gamma } { \gamma - 1 } }
\end{gathered}
$$

Ответ:

$$
P = P _ { 0 } \left( \frac { 2 } { 1 + \gamma } \right) ^ { \frac { \gamma } { \gamma - 1 } } = 7,22 \cdot 10 ^ { 5 } \Pi \mathrm { a }
$$

Плотность входящего воздуха

$$
\rho _ { 0 } = \frac { P _ { 0 } } { r T _ { 0 } }
$$

откуда также из уравнения Пуассона

Ответ:

$$
\rho = \frac { P _ { 0 } } { r T _ { 0 } } \left( \frac { 2 } { 1 + \gamma } \right) ^ { \frac { 1 } { \gamma - 1 } } = 5,34 \text { кг } / \mathrm { м } ^ { 3 }
$$

Поскольку $M = 1$, с учётом найденной температуры

Ответ:

$$
v = \sqrt { \frac { 2 \gamma r T _ { 0 } } { \gamma + 1 } } = 317 \mathrm {~m} / \mathrm { c }
$$

Найдём $\varepsilon$. Подставим температуру $T$ в выражение для массового расхода

$$
\frac { d m } { d t } = I \frac { P _ { a t m } } { r T _ { 0 } } = \frac { \gamma P _ { 0 } A } { c _ { 0 } } \left( \frac { 2 } { 1 + \gamma } \right) ^ { \frac { \gamma + 1 } { 2 ( \gamma - 1 ) } }
$$

где

$$
A = \pi D \varepsilon
$$

откуда

Ответ:

$$
\varepsilon = \frac { I } { c _ { 0 } \pi D } \frac { P _ { a t m } } { P _ { 0 } } \left( \frac { 1 + \gamma } { 2 } \right) ^ { \frac { \gamma + 1 } { 2 ( \gamma - 1 ) } } = 0,047 \mathrm { mM }
$$

D1 ${ } ^ { 1.50 }$ Рассчитайте значения $M , T , P , v$ и $\rho$ вытекающего газа при $\varepsilon = 0.5$ мм и $d m / d t = 0.1$ кг/с.

Идея решения данного пункта схожа с пунктом $C 2$, но за тем исключением, что для начала необходимо определить число Маха $M$. Получим выражение для массового расхода как функцию $M$

$$
\frac { d m } { d t } = \frac { P _ { 0 } A \gamma } { c _ { 0 } } M \left( \frac { T } { T _ { 0 } } \right) ^ { \frac { \gamma + 1 } { 2 ( \gamma - 1 ) } } = \frac { P _ { 0 } \pi \varepsilon D \gamma } { c _ { 0 } } M \left( 1 + \frac { ( \gamma - 1 ) M ^ { 2 } } { 2 } \right) ^ { \frac { \gamma + 1 } { 2 ( 1 - \gamma ) } }
$$

Решая данное уравнение на калькуляторе, получим

Ответ:

$$
M = 0,055
$$

Найдя $M$, по ранее полученным формулам находим

Ответ:

$$
T = 297 K
$$


Ответ:

$$
P = 6,98 \cdot 10 ^ { 5 } \Pi a
$$

Ответ:

$$
\rho = 8,20 \text { кг } / \mathrm { м } ^ { 3 }
$$

Ответ:

$$
v = 18,8 \mathrm { M } / c
$$
