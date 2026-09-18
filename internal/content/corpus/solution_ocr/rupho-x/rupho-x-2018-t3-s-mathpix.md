---
id: solution-ocr-rupho-x-2018-t3-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2018/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.70 }$ Найдите возвращающую силу давления, действующую на малую площадь $d S$ поверхности пузырька, при адиабатическом изменении его радиуса от $R$ до $R + x , ( x \ll R )$.

Поскольку процесс для газа в пузырьке адиабиабатический, а изменение радиуса мало - выполняется уравнение Пуассона:

$$
p V ^ { \gamma } = p _ { 0 } V _ { 0 } ^ { \gamma } = \text { const } \quad \gamma = \frac { C _ { p } } { C _ { V } } = \frac { 7 } { 5 }
$$

Поскольку $V = 4 \pi ( R + x ) ^ { 3 } / 3$ - уравнение Пуассона можно переписать в следующем виде:

$$
p ( R + x ) ^ { 3 \gamma } = p _ { 0 } R ^ { 3 \gamma } = \mathrm { const } \Rightarrow d p R ^ { 3 \gamma } + 3 \gamma p R ^ { 3 \gamma - 1 } x = 0 \Rightarrow d p = - \frac { 3 \gamma p _ { 0 } x } { R }
$$

Для возвращающей силы получим:

$$
d F = \left( p _ { 0 } - p \right) d S \approx - d p d S
$$

или окончательно:

Ответ:

$$
d F = \frac { 3 \gamma p _ { 0 } x d S } { R } = \frac { 21 p _ { 0 } x d S } { 5 R }
$$

A2 ${ } ^ { 1.00 }$ Найдите энергию, необходимую для изменения $x$ от 0 до некоторого малого значения $x _ { 0 }$.

Первое решение: Для изменения $x$ от 0 до $x _ { 0 }$ над элементом поверхности пузырька необходимо совершить работу $\delta A$, равную:

$$
\delta A = \int _ { 0 } ^ { x _ { 0 } } d F d x = \frac { 3 \gamma p _ { 0 } d S } { R } \int _ { 0 } ^ { x _ { 0 } } x d x = \frac { 3 \gamma p _ { 0 } x _ { 0 } ^ { 2 } d S } { 2 R }
$$

Полная площадь $S$ пузырька равна $4 \pi R ^ { 2 }$, поэтому:

$$
A = 6 \pi \gamma p _ { 0 } R x ^ { 2 }
$$

Поскольку совершённая работа $A$ равна необходимой энергии, получим:

Ответ:

$$
W = 6 \pi \gamma p _ { 0 } R x ^ { 2 } = \frac { 42 \pi p _ { 0 } R x ^ { 2 } } { 5 }
$$

Второе решение: Изменение внутренней энергии пузырька складывается из необходимой энергии $W$ и работы, совершённой силой давления со стороны воды:

$$
\Delta U = W + p _ { 0 } \left( V _ { 0 } - V \right) \Rightarrow W = p _ { 0 } \left( V - V _ { 0 } \right) + \Delta U
$$

Найдём внутреннюю энергию $U$ газа в пузырьке как функцию его объёма:

$$
U = \frac { p V } { \gamma - 1 } = \frac { p _ { 0 } V _ { 0 } } { \gamma - 1 } \left( \frac { V } { V _ { 0 } } \right) ^ { 1 - \gamma }
$$

Таким образом:

$$
W = \frac { 4 \pi R ^ { 3 } p _ { 0 } } { 3 } \left( ( 1 + \alpha ) ^ { 3 } - 1 + \frac { ( 1 + \alpha ) ^ { 3 ( 1 - \gamma ) } - 1 } { \gamma - 1 } \right)
$$

где $\alpha = x / R$.
Разложим по формуле Тейлора до $\alpha ^ { 2 }$ функции $( 1 + \alpha ) ^ { 3 }$ и $( 1 + \alpha ) ^ { 3 ( 1 - \gamma ) }$ :

$$
\begin{gathered}
( 1 + \alpha ) ^ { 3 } = 1 + 3 \alpha + 3 \alpha ^ { 3 } + \alpha ^ { 3 } \approx 1 + 3 \alpha + 3 \alpha ^ { 2 } \\
( 1 + \alpha ) ^ { 3 ( 1 - \gamma ) } \approx 1 + \left( \frac { d ( 1 + \alpha ) ^ { 3 ( 1 - \gamma ) } } { d \alpha } \right) _ { 0 } \alpha + \left( \frac { d ^ { 2 } ( 1 + \alpha ) ^ { 3 ( 1 - \gamma ) } } { d \alpha ^ { 2 } } \right) _ { 0 } \frac { \alpha ^ { 2 } } { 2 }
\end{gathered}
$$

Вычисляя производные:

$$
( 1 + \alpha ) ^ { 3 ( 1 - \gamma ) } \approx 1 + 3 ( 1 - \gamma ) \alpha + \frac { 3 ( 1 - \gamma ) ( 2 - 3 \gamma ) \alpha ^ { 2 } } { 2 }
$$

Таким образом:

$$
W \approx \frac { 4 \pi R ^ { 3 } p _ { 0 } } { 3 } \left( 1 + 3 \alpha + 3 \alpha ^ { 2 } - 1 + \frac { 1 + 3 ( 1 - \gamma ) \alpha + \frac { 3 ( 1 - \gamma ) ( 2 - 3 \gamma ) \alpha ^ { 2 } } { 2 } - 1 } { \gamma - 1 } \right) = 6 \pi \gamma p _ { 0 } R ^ { 3 } \alpha ^ { 2 }
$$


Подставляя $\alpha$, получим:

Ответ:

$$
W = 6 \pi \gamma p _ { 0 } R x ^ { 2 } = \frac { 42 \pi p _ { 0 } R x ^ { 2 } } { 5 }
$$

А3 ${ } ^ { 1.00 }$ Радиальная скорость воды у поверхности пузырька равна $d x / d t$. Учитывая, что вода несжимаема, найдите радиальную скорость воды на расстоянии $r ( r > R )$ от центра пузырька.

Поскольку вода несжимаема - её масса в зазоре между концентрическими сферами радиусами $R$ и $r > R$ должна оставаться постоянной. Тогда объёмы воды, втекающие и вытекающие из данной области в единицу времени, должны быть равны:

$$
4 \pi R ^ { 2 } \frac { d x } { d t } = 4 \pi r ^ { 2 } v ( r )
$$

откуда:

Ответ:

$$
v ( r ) = \frac { R ^ { 2 } } { r ^ { 2 } } \frac { d x } { d t }
$$

A4 ${ } ^ { 1.00 }$ Найдите полную кинетическую энергию воды.

Кинетическая энергия воды, расположенной в зазоре между сферами радиусами $r$ и $r + d r$, равна:

$$
d E _ { k } = \frac { d m v ^ { 2 } ( r ) } { 2 } = \frac { 4 \pi \rho r ^ { 2 } d r \cdot v ^ { 2 } ( r ) } { 2 } = 2 \pi \rho R ^ { 4 } \left( \frac { d x } { d t } \right) ^ { 2 } \frac { d r } { r ^ { 2 } }
$$

Полная кинетическая энергия воды даётся выражением:

$$
E _ { k } = 2 \pi \rho R ^ { 4 } \left( \frac { d x } { d t } \right) ^ { 2 } \int _ { R } ^ { \infty } \frac { d r } { r ^ { 2 } }
$$

Вычисляя интеграл, получим:

Ответ:

$$
E _ { k } = 2 \pi \rho R ^ { 3 } \left( \frac { d x } { d t } \right) ^ { 2 }
$$

A5 ${ } ^ { 0.50 }$ Если пренебречь массой воздуха, кинетическая энергия, найденная в предыдущем пункте, и будет кинетической энергией колеблющегося пузырька. Найдите частоту колебаний.

Для кинетической и потенциальной энергий системы имеем:

$$
W _ { p } = A x ^ { 2 } = 6 \pi \gamma p _ { 0 } R x ^ { 2 } \quad E _ { k } = B \dot { x } ^ { 2 } = 2 \pi \rho R ^ { 3 } \dot { x } ^ { 2 }
$$

откуда:

$$
A = 6 \pi \gamma p _ { 0 } R \quad B = 2 \pi \rho R ^ { 3 }
$$

Для циклической частоты колебаний находим:

Ответ:

$$
\omega = \sqrt { \frac { 3 \gamma p _ { 0 } } { \rho R ^ { 2 } } } = \sqrt { \frac { 21 p _ { 0 } } { 5 \rho R ^ { 2 } } }
$$


Ответ:

$$
W _ { \sigma } = 4 \pi R ^ { 2 } \sigma
$$

В2 ${ } ^ { 1.60 }$ Найдите частоту колебаний пузыря, учтя влияние поверхностного натяжения воды. Давление снаружи пузырька считайте равным $p _ { 0 }$.

Обозначим за $p _ { 1 }$ давление внутри пузырька в состоянии равновесия и определим его из формула Лапласа:

$$
p _ { 1 } = p _ { 0 } + p _ { Л } = p _ { 0 } + \frac { 2 \sigma } { R }
$$

Запишем уравнение Пуассона для воздуха внутри пузырька:

$$
p ( R + x ) ^ { 3 \gamma } = p _ { 1 } R ^ { 3 \gamma }
$$

Далее вновь можно поступить двумя способами.
Первое решение: Продифференцируем уравнение Пуассона:

$$
d p R ^ { 3 \gamma } + 3 \gamma p _ { 1 } R ^ { 3 \gamma - 1 } x = 0 \Rightarrow d p = - \frac { 3 \gamma p _ { 1 } x } { R } = - \frac { 3 \gamma x } { R } \left( p _ { 0 } + \frac { 2 \sigma } { R } \right)
$$

Изменение Лапласова давления при этом составит:

$$
d p _ { Л } = - \frac { 2 \sigma x } { R ^ { 2 } }
$$

Тогда для возвращающей силы, действующей на малый элемент площади $d S$ поверхности пузыря, имеем:

$$
d F = \left( p _ { 0 } + p _ { Л } - p \right) d S = \left( - d p + d p _ { Л } \right) d S = \left( \frac { 3 \gamma p _ { 0 } } { R } + \frac { 2 \sigma ( 3 \gamma - 1 ) } { R ^ { 2 } } \right) x d S
$$

Аналогично пункту А2:

$$
d W = \left( \frac { 3 \gamma p _ { 0 } } { R } + \frac { 2 \sigma ( 3 \gamma - 1 ) } { R ^ { 2 } } \right) d S \int _ { 0 } ^ { x _ { 0 } } x d x = \left( \frac { 3 \gamma p _ { 0 } } { R } + \frac { 2 \sigma ( 3 \gamma - 1 ) } { R ^ { 2 } } \right) \frac { x _ { 0 } ^ { 2 } d S } { 2 }
$$

откуда:

$$
W = 2 \pi R ^ { 2 } \left( \frac { 3 \gamma p _ { 0 } } { R } + \frac { 2 \sigma ( 3 \gamma - 1 ) } { R ^ { 2 } } \right) x _ { 0 } ^ { 2 }
$$

Выражение для кинетической энергии при этом остаётся тем же, что и в части $A$ :

$$
E _ { k } = 2 \pi \rho R ^ { 3 } \dot { x } ^ { 2 }
$$

Таким образом:

Ответ:

$$
\omega = \sqrt { \frac { 3 \gamma p _ { 0 } } { \rho R ^ { 2 } } + \frac { 2 \sigma ( 3 \gamma - 1 ) } { \rho R ^ { 3 } } } = \sqrt { \frac { 21 p _ { 0 } } { 5 \rho R ^ { 2 } } + \frac { 32 \sigma } { 5 \rho R ^ { 3 } } }
$$

Второе решение: Аналогично пункту А2:

$$
W - p _ { 0 } \left( V - V _ { 0 } \right) = \Delta U + \Delta W _ { \sigma } \Rightarrow W = p _ { 0 } \left( V - V _ { 0 } \right) + \Delta U + \Delta W _ { \sigma }
$$

откуда:

$$
W = \frac { 4 \pi p _ { 0 } R ^ { 3 } } { 3 } \left( ( 1 + \alpha ) ^ { 3 } - 1 + \left( 1 + \frac { 2 \sigma } { p _ { 0 } R } \right) \frac { ( 1 + \alpha ) ^ { 3 ( 1 - \gamma ) } - 1 } { \gamma - 1 } \right) + 4 \pi R ^ { 2 } \sigma \left( ( 1 + \alpha ) ^ { 2 } - 1 \right)
$$

Используя разложения, полученные в пункте А2:

$$
W \approx \frac { 4 \pi p _ { 0 } R ^ { 3 } } { 3 } \left( 3 \alpha + 3 \alpha ^ { 2 } + \left( 1 + \frac { 2 \sigma } { p _ { 0 } R } \right) \left( - 3 \alpha + \frac { 3 ( 3 \gamma - 2 ) \alpha ^ { 2 } } { 2 } \right) \right) + 4 \pi R ^ { 2 } \sigma \left( 2 \alpha + \alpha ^ { 2 } \right)
$$

После преобразования имеем:

$$
W \approx 6 \pi \gamma p _ { 0 } R ^ { 3 } \alpha ^ { 2 } + 4 \pi ( 3 \gamma - 2 ) R ^ { 2 } \sigma \alpha ^ { 2 } = \left( 6 \pi \gamma p _ { 0 } R + 4 \pi ( 3 \gamma - 2 ) \sigma \right) x ^ { 2 }
$$

Выражение для кинетической энергии при этом остаётся тем же, что и в части $A$ :

$$
E _ { k } = 2 \pi \rho R ^ { 3 } \dot { x } ^ { 2 }
$$

Таким образом:


Ответ:

$$
\omega = \sqrt { \frac { 3 \gamma p _ { 0 } } { \rho R ^ { 2 } } + \frac { 2 \sigma ( 3 \gamma - 1 ) } { \rho R ^ { 3 } } } = \sqrt { \frac { 21 p _ { 0 } } { 5 \rho R ^ { 2 } } + \frac { 32 \sigma } { 5 \rho R ^ { 3 } } }
$$
