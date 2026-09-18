---
id: solution-ocr-rupho-y-2026-t4-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2026/T4_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Рассмотрим изменение импульса системы. Пусть в какой-то момент масса ракеты $m$ и её скорость $\dot { y }$. Через малое время $d t$ масса ракеты стала меньше на $\mu d t$, а скорость ракеты увеличилась на $\ddot { y } d t$. При этом продукты сгорания в системе отсчёта Земли имеют скорость $u - \dot { y }$, направленную вниз. При этом на систему действуют две внешние силы: сопротивление воздуха и притяжение Земли, поэтому закон изменения импульса

$$
m \dot { y } - m g d t - k \dot { y } | \dot { y } | d t = ( m - \mu d t ) ( \dot { y } + \ddot { y } d t ) - \mu d t ( u - \dot { y } ) .
$$

Выразим $\ddot { y }$

$$
\begin{gathered}
- m g - k \dot { y } | \dot { y } | = m \ddot { y } - \mu u \\
\ddot { y } = \frac { \mu u } { m } - g - \frac { k \dot { y } | \dot { y } | } { m }
\end{gathered}
$$

Осталось выразить через требуемые величины.

Ответ:

$$
\ddot { y } = \frac { \mu u } { m _ { 0 } - \mu t } - g - \frac { k \dot { y } | \dot { y } | } { m _ { 0 } - \mu t }
$$

A2 ${ } ^ { 1.00 }$
Пренебрегая силой сопротивления, найдите скорость ракеты $v ( m )$ и координату $y ( m )$ в момент, когда её масса равна $m$. Выразите ответ через $m , g$, $u , \mu$ и $m _ { 0 }$ 。

Воспользуемся ответом из прошлого пункта и проинтегрируем дважды, пренебрегая силой сопротивления, подставляя $t = \frac { m _ { 0 } - m } { \mu }$

$$
\begin{gathered}
\ddot { y } d t = \frac { \mu u } { m } d t - g d t \\
\int _ { 0 } ^ { v } d \dot { y } = - \int _ { m _ { 0 } } ^ { m } u \frac { d m } { m } - \int _ { 0 } ^ { t } g d t
\end{gathered}
$$

Ответ:

$$
v = - u \ln \frac { m } { m _ { 0 } } - g \frac { m _ { 0 } - m } { \mu }
$$

Интегрируя выражение для скорости по времени

$$
\int _ { 0 } ^ { y } d y = - u \int _ { 0 } ^ { t } \ln \left( 1 - \frac { \mu t } { m _ { 0 } } \right) d t - \int _ { 0 } ^ { t } g t d t
$$

Для интеграла логарифма известно $\int \ln x d x = x \ln x - x + C$

$$
y = \frac { u m _ { 0 } } { \mu } \left( \left( 1 - \frac { \mu t } { m _ { 0 } } \right) \ln \left( 1 - \frac { \mu t } { m _ { 0 } } \right) - \left( 1 - \frac { \mu t } { m _ { 0 } } \right) + 1 \right) - \frac { g t ^ { 2 } } { 2 } ,
$$

Ответ:

$$
y = \frac { u m _ { 0 } } { \mu } \left( 1 - \frac { m } { m _ { 0 } } \ln \frac { m _ { 0 } } { m } - \frac { m } { m _ { 0 } } \right) - \frac { g } { 2 } \left( \frac { m _ { 0 } - m } { \mu } \right) ^ { 2 }
$$

A3 ${ } ^ { 0.80 }$
Используя результат прошлого пункта и считая, что $k$ слабо зависит от высоты, найдите численно, на какой высоте $H _ { c }$ будет находиться ракета в момент, когда сила сопротивления станет равна силе тяжести.

Запишем условие равенства силы тяжести и силы сопротивления

$$
\begin{gathered}
k v ^ { 2 } = m g \\
k \left( - u \ln \frac { m } { m _ { 0 } } - g \frac { m _ { 0 } - m } { \mu } \right) ^ { 2 } = m g .
\end{gathered}
$$

Решая численно уравнение относительно $m$, получаем $m = 209$ т. Подставим массу в формулу для высоты подъема $y$.


Ответ:

$$
H _ { c } = 124 \text { км }
$$

A4 ${ } ^ { 0.70 }$ Рассматривая вертикальный взлёт, численно оцените отношение $\beta _ { 1 }$ начальной к конечной массе ракеты, при котором ракета развивает скорость $v _ { a }$ (скорость движения по круговой орбите радиуса $a$ ).

Для движения по орбите радиусом $a$ имеем $v _ { a } = \sqrt { \frac { G M _ { e } } { a } }$, подставим выражение в формулу для скорости $v$ из пункта А2, получим численный ответ.

Ответ:

$$
\beta _ { 1 } = 8.03
$$

В1 ${ } ^ { 0.30 }$ Рассмотрим точку на прямой Земля - Луна между Землёй и Луной, в которой силы притяжения Земли и Луны равны по модулю. Найдите расстояние $r _ { c }$ от Луны до данной точки. Ответ выразите через $r _ { m } , M _ { e }$ и $M _ { m }$.

Равенство сил на расстоянии $r _ { c }$

$$
\frac { G M _ { m } } { r _ { c } ^ { 2 } } = \frac { G M _ { e } } { \left( r _ { m } - r _ { c } \right) ^ { 2 } }
$$

Преобразуя получаем

$$
r _ { c } = \frac { r _ { m } } { \sqrt { \frac { M _ { e } } { M _ { m } } } + 1 }
$$

Ответ:

$$
r _ { c } = \frac { r _ { m } } { 1 + \sqrt { \frac { M _ { e } } { M _ { m } } } } = 3.86 \cdot 10 ^ { 7 } \mathrm { M }
$$

В2 ${ } ^ { 0.50 }$ Рассматривая корабль в СО Луны, запишите выражение для удельного момента импульса $L _ { 0 } ^ { m }$ относительно центра Луны и скорости $v _ { 2 }$ в момент, когда расстояние до Луны равно $r _ { c }$. Ответ выразите через $s , s ^ { \prime } , c , v _ { 1 } , v _ { m }$ и $r _ { c }$.

Вектор $\overrightarrow { v _ { 2 } }$ получается из вектора скорости $\overrightarrow { v _ { 1 } }$ вычитанием вектора $\overrightarrow { v _ { m } }$, откуда можно составить треугольник скоростей.
Используя теорему косинусов

$$
v _ { 2 } = \sqrt { v _ { 1 } ^ { 2 } + v _ { m } ^ { 2 } - 2 v _ { m } v _ { 1 } \sin \alpha } .
$$

Ответ:

$$
v _ { 2 } = \sqrt { v _ { 1 } ^ { 2 } + v _ { m } ^ { 2 } - 2 v _ { m } v _ { 1 } s ^ { \prime } }
$$

Запишем удельный момент импульса по определению

$$
\overrightarrow { L _ { 0 } ^ { m } } = \left[ \vec { r } _ { c } , \vec { v } _ { 1 } - \vec { v } _ { m } \right] = \left[ \vec { r } _ { c } , \vec { v } _ { 1 } \right] - \left[ \vec { r } _ { c } , \vec { v } _ { m } \right] .
$$

Возьмем модуль выражения

$$
L _ { 0 } ^ { m } = r _ { c } \left( v _ { 1 } \sin ( \theta + \alpha ) - v _ { m } \cos \theta \right) .
$$

Ответ:

$$
L _ { 0 } ^ { m } = r _ { c } \left( v _ { 1 } s - v _ { m } c \right)
$$

Вз ${ } ^ { 1.20 }$ Записывая ЗСЭ в СО Луны для ближайшего к Луне положения корабля и положения сразу после входа в зону притяжения, получите и решите квадратное уравнение и получите точное выражение для $v _ { 1 } / v _ { m }$. Ответ выразите через $s , s ^ { \prime } , c , b / r _ { c }$ и $v _ { \text {II } } ^ { m } / v _ { m }$.
Примечание. Выбирать знак корня в этом пункте не нужно. Не забудьте, что в рамках используемой модели, взаимдействие с Землёй в этой области учитывать не нужно.


Пусть в ближайшей к Луне точке скорость корабля v. Тогда из закона сохранения импульса получаем:

$$
\begin{gathered}
v b = L _ { 0 } ^ { m } \\
v = \frac { r _ { c } } { b } \left( v _ { 1 } s - v _ { m } c \right)
\end{gathered}
$$

Закон сохранения энергии:

$$
\begin{gathered}
\frac { v ^ { 2 } } { 2 } - \frac { G M _ { m } } { b } = \frac { v _ { 2 } ^ { 2 } } { 2 } - \frac { G M _ { m } } { r _ { c } } . \\
\frac { r _ { c } ^ { 2 } } { b ^ { 2 } } \left( v _ { 1 } s - v _ { m } c \right) ^ { 2 } - \left( v _ { \text {II } } ^ { m } \right) ^ { 2 } = v _ { 1 } ^ { 2 } + v _ { m } ^ { 2 } - 2 v _ { m } v _ { 1 } s ^ { \prime } - \left( v _ { \text {II } } ^ { m } \right) ^ { 2 } \frac { b } { r _ { c } }
\end{gathered}
$$

Для удобства обозначим $Z = v _ { 1 } / v _ { m } , x = b / r _ { c } , y = v _ { \mathrm { II } } ^ { m } / v _ { m }$.

$$
\begin{gathered}
\frac { 1 } { x ^ { 2 } } ( Z s - c ) ^ { 2 } - y ^ { 2 } = Z ^ { 2 } + 1 - 2 Z s ^ { \prime } - y ^ { 2 } x \\
Z ^ { 2 } \left( s ^ { 2 } - x ^ { 2 } \right) - 2 Z \left( s c - x ^ { 2 } s ^ { \prime } \right) + c ^ { 2 } - x ^ { 2 } - y ^ { 2 } x ^ { 2 } ( 1 - x ) = 0 \\
Z = \frac { s c - x ^ { 2 } s ^ { \prime } \pm \sqrt { \left( s c - x ^ { 2 } s ^ { \prime } \right) ^ { 2 } - \left( s ^ { 2 } - x ^ { 2 } \right) \left( c ^ { 2 } - x ^ { 2 } - y ^ { 2 } x ^ { 2 } ( 1 - x ) \right) } } { s ^ { 2 } - x ^ { 2 } }
\end{gathered}
$$

Ответ:

$$
\frac { v _ { 1 } } { v _ { m } } = \frac { s c - \left( \frac { b } { r _ { c } } \right) ^ { 2 } s ^ { \prime } \pm \sqrt { \left( s c - \left( \frac { b } { r _ { c } } \right) ^ { 2 } s ^ { \prime } \right) ^ { 2 } - \left( s ^ { 2 } - \left( \frac { b } { r _ { c } } \right) ^ { 2 } \right) \left( c ^ { 2 } - \left( \frac { b } { r _ { c } } \right) ^ { 2 } - \left( \frac { v _ { I I } ^ { m } } { v _ { m } } \right) ^ { 2 } \left( \frac { b } { r _ { c } } \right) ^ { 2 } \left( 1 - \left( \frac { b } { r _ { c } } \right) \right) \right) } } { s ^ { 2 } - \left( \frac { b } { r _ { c } } \right) ^ { 2 } }
$$

В4 ${ } ^ { 1.00 }$ Покажите что выражение для $v _ { 1 }$, полученное в пункте B4, при разложении до первого порядка по степеням $b / r _ { c }$ приводится к виду:

$$
v _ { 1 } \approx \frac { v _ { m } c } { s } + B _ { 0 } \cdot \frac { b } { r _ { c } }
$$

Выразите $B _ { 0 }$ через $v _ { m } , v _ { \text {II } } ^ { m } , s , c$ и $s ^ { \prime }$. Выбирая знак корня, покажите, что $B _ { 0 } > 0$.

Будем раскладывать до первого порядка по $x$.

$$
Z = \frac { s c - x ^ { 2 } s ^ { \prime } \pm \sqrt { \left( s c - x ^ { 2 } s ^ { \prime } \right) ^ { 2 } - \left( s ^ { 2 } - x ^ { 2 } \right) \left( c ^ { 2 } - x ^ { 2 } - y ^ { 2 } x ^ { 2 } ( 1 - x ) \right) } } { s ^ { 2 } - x ^ { 2 } }
$$

Рассмотрим выражение под корнем с точностью до второго порядка (он может дать вклад порядка первого порядка, если под корнем нет слагаемых нулевого и первого порядка, что выполняется в данном случае):

$$
\begin{gathered}
\left( s c - x ^ { 2 } s ^ { \prime } \right) ^ { 2 } - \left( s ^ { 2 } - x ^ { 2 } \right) \left( c ^ { 2 } - x ^ { 2 } - y ^ { 2 } x ^ { 2 } ( 1 - x ) \right) \approx s ^ { 2 } c ^ { 2 } - 2 s c s ^ { \prime } x ^ { 2 } - \left( s ^ { 2 } c ^ { 2 } - x ^ { 2 } \left( c ^ { 2 } + s ^ { 2 } + y ^ { 2 } s ^ { 2 } \right) \right) = \\
= \left( c ^ { 2 } + s ^ { 2 } + y ^ { 2 } s ^ { 2 } - 2 s c s ^ { \prime } \right) x ^ { 2 }
\end{gathered}
$$

Выражение для $Z$ с точностью до первого порядка:

$$
\begin{gathered}
Z = \frac { s c \pm x \sqrt { c ^ { 2 } + s ^ { 2 } + y ^ { 2 } s ^ { 2 } - 2 s c s ^ { \prime } } } { s ^ { 2 } } . \\
v _ { 1 } = \frac { v _ { m } c } { s } \pm \frac { v _ { m } \sqrt { c ^ { 2 } + s ^ { 2 } + \left( \frac { v _ { \Pi } ^ { m } } { v _ { m } } \right) ^ { 2 } s ^ { 2 } - 2 s c s ^ { \prime } } } { s ^ { 2 } } \cdot \frac { b } { r _ { c } }
\end{gathered}
$$

Несложно заметить, что без второго слагаемого получаем скорость, при которой корабль летит точно в Луну. Знак "+" соответствует нужному полёту вокруг Луны, а знак "-" соответствует пролёту с другой стороны.

Таким образом, итоговое выражение для $v _ { 1 }$ имеет вид:

$$
v _ { 1 } = \frac { v _ { m } c } { s } + \frac { v _ { m } \sqrt { c ^ { 2 } + s ^ { 2 } + \left( \frac { v _ { \Pi } ^ { m } } { v _ { m } } \right) ^ { 2 } s ^ { 2 } - 2 s c s ^ { \prime } } } { s ^ { 2 } } \cdot \frac { b } { r _ { c } }
$$

Ответ:

$$
B _ { 0 } = \frac { v _ { m } \sqrt { c ^ { 2 } + s ^ { 2 } + \left( \frac { v _ { \Pi } ^ { m } } { v _ { m } } \right) ^ { 2 } s ^ { 2 } - 2 s c s ^ { \prime } } } { s ^ { 2 } }
$$


$$
v _ { 1 } \approx \frac { v _ { m } } { \operatorname { tg } \theta } + A \alpha + B \frac { b } { r _ { c } }
$$

Выразите $A$ и $B$ через $v _ { m } , v _ { \text {II } } ^ { m } , \theta$.

Заметим, что в ответе прошлого пункта можно разложить $B _ { 0 }$ до нулевого порядка, так как при учёте поправок будем получать слагаемые высокого порядка малости (как минимум второго вида $\alpha b / r _ { c }$ ).

$$
B _ { 0 } \approx \frac { v _ { m } \sqrt { \cos ^ { 2 } + \sin ^ { 2 } \theta + \left( \frac { v _ { I I } ^ { m } } { v _ { m } } \right) ^ { 2 } \sin ^ { 2 } \theta } } { \sin ^ { 2 } \theta } = \frac { v _ { m } \sqrt { 1 + \left( \frac { v _ { I I } ^ { m } } { v _ { m } } \right) ^ { 2 } \sin ^ { 2 } \theta } } { \sin ^ { 2 } \theta }
$$

Разложим $v _ { m } c / s$.

$$
\begin{gathered}
\frac { v _ { m } c } { s } = \frac { v _ { m } \cos \theta } { \sin ( \alpha + \theta ) } \approx \frac { v _ { m } \cos \theta } { \sin \theta + \alpha \cos \theta } \approx \frac { v _ { m } } { \operatorname { tg } \theta } \left( 1 - \frac { \alpha } { \operatorname { tg } \theta } \right) \\
v _ { 1 } = \frac { v _ { m } } { \operatorname { tg } \theta } - \frac { v _ { m } } { \operatorname { tg } ^ { 2 } \theta } \alpha + \frac { v _ { m } \sqrt { 1 + \left( \frac { v _ { I I } ^ { m } } { v _ { m } } \right) ^ { 2 } \sin ^ { 2 } \theta } } { \sin ^ { 2 } \theta } \cdot \frac { b } { r _ { c } }
\end{gathered}
$$

Ответ:

$$
\begin{gathered}
A = - \frac { v _ { m } } { \operatorname { tg } ^ { 2 } \theta } \\
B = \frac { v _ { m } \sqrt { 1 + \left( \frac { v _ { \Pi } ^ { m } } { v _ { m } } \right) ^ { 2 } \sin ^ { 2 } \theta } } { \sin ^ { 2 } \theta }
\end{gathered}
$$

В6 ${ } ^ { 0.60 }$ Вернёмся в систему отсчёта Земли, чтобы найти выражение для угла $\alpha$ между скоростью $v _ { 1 }$ и прямой Земля - Луна.
Найдите выражение для $\alpha$ между скоростью $v _ { 1 }$ и прямой Земля - Луна с точностью до первого порядка по степеням $r _ { c } / r _ { m }$ и $a / r _ { m }$. Ответ выразите через $a$, $r _ { c }$, $r _ { m } , v _ { 1 } , v _ { 0 }$ и $\theta$.

Примечание. Не забудьте, что в рамках используемой модели, взаимодействие с Луной в этой области учитывать не нужно.

Воспользуемся законом сохранения момента импульса относительно Земли. Рассмотрим проекции $\vec { v } _ { 1 }$ и радиус-вектора от Земли $\vec { r }$ :

$$
\begin{gathered}
\vec { v } _ { 1 } = \binom { v _ { 1 } \cos \alpha } { v _ { 1 } \sin \alpha } , \\
\vec { r } = \binom { r _ { m } - r _ { c } \cos \theta } { r _ { c } \sin \theta } .
\end{gathered}
$$

Закон сохранения импульса:

$$
\begin{gathered}
v _ { 0 } a = v _ { 1 } \sin \alpha \left( r _ { m } - r _ { c } \cos \theta \right) - v _ { 1 } r _ { c } \cos \alpha \sin \theta . \\
\frac { v _ { 0 } a } { v _ { 1 } \sqrt { r _ { m } ^ { 2 } - 2 r _ { m } r _ { c } \cos \theta + r _ { c } ^ { 2 } } } = \sin \left( \alpha - \operatorname { arctg } \left( \frac { r _ { c } \sin \theta } { r _ { m } - r _ { c } \cos \theta } \right) \right) \\
\alpha = \operatorname { arctg } \left( \frac { r _ { c } \sin \theta } { r _ { m } - r _ { c } \cos \theta } \right) + \arcsin \left( \frac { v _ { 0 } a } { v _ { 1 } \sqrt { r _ { m } ^ { 2 } - 2 r _ { m } r _ { c } \cos \theta + r _ { c } ^ { 2 } } } \right) \approx \frac { r _ { c } \sin \theta } { r _ { m } } + \frac { v _ { 0 } a } { v _ { 1 } r _ { m } }
\end{gathered}
$$

Ответ: с

В7 ${ } ^ { 0.40 }$ Записывая ЗСЭ в СО Земли и, пренебрегая слагаемыми порядка $a / r _ { m }$ и $r _ { c } / r _ { m }$, выразите скорость $v _ { 0 }$ через $v _ { 1 }$ и $v _ { \mathrm { II } } ^ { e }$.Примечание. Не забудьте, что в рамках используемой модели, взаимодействие с Луной в этой области учитывать не нужно.

Закон сохранения энергии:

$$
\frac { v _ { 0 } ^ { 2 } } { 2 } - \frac { G M _ { e } } { a } = \frac { v _ { 1 } ^ { 2 } } { 2 } .
$$

Заметим, что потенциальную энергию в правой части уравнения не учитываем, так как она имеет порядок $a / r _ { m }$.

$$
v _ { 0 } ^ { 2 } - \left( v _ { \mathrm { II } } ^ { e } \right) ^ { 2 } = v _ { 1 } ^ { 2 }
$$

Ответ:

$$
v _ { 0 } = \sqrt { \left( v _ { \mathrm { II } } ^ { e } \right) ^ { 2 } + v _ { 1 } ^ { 2 } }
$$


Запишем уравнение канонического сечение $r = \frac { p } { 1 + e \cos \varphi }$. Запишем это уравнение для точек, расстояние до которых $r _ { c }$ и $b$

$$
\begin{gathered}
b = \frac { p } { 1 + e } \\
r _ { c } = \frac { p } { 1 - e \cos \varphi }
\end{gathered}
$$

Выражая из уравнений эксцентриситет и приравнивая получаем

$$
\frac { p } { b } - 1 = \left( 1 - \frac { p } { r _ { c } } \right) \cdot \frac { 1 } { \cos \theta }
$$

Подставим $p$ по формуле

$$
p = \frac { \left( L _ { 0 } ^ { m } m \right) ^ { 2 } } { G M _ { m } m ^ { 2 } } = \frac { \left( v _ { 1 } \sin ( \alpha + \theta ) - v _ { m } \cos \theta \right) ^ { 2 } r _ { c } ^ { 2 } } { G M _ { m } }
$$

Ответ:

$$
\frac { \left( v _ { 1 } \sin ( \alpha + \theta ) - v _ { m } \cos \theta \right) ^ { 2 } r _ { c } ^ { 2 } } { G M _ { m } b } - 1 = \left( 1 - \frac { \left( v _ { 1 } \sin ( \alpha + \theta ) - v _ { m } \cos \theta \right) ^ { 2 } r _ { c } } { G M _ { m } } \right) \cdot \frac { 1 } { \cos \theta }
$$

В9 ${ } ^ { 0,40 }$ Найдите $\beta _ { 2 }$ - отношение начальной массы ракеты к конечной при разгоне от скорости $v _ { a }$ - орбитальной скорости при движении по круговой орбите радиуса $a$ до скорости $v _ { 0 }$. Ответ выразите через $u , v _ { \mathrm { II } } ^ { e }$ и $v _ { a }$.
Рассчитайте численное значение $\beta _ { 2 }$, необходимые для расчётов величины возьмите из части A.

Запишем дифференциальное уравнение из пункта А1 без учета силы притяжения и силы сопротивления:

$$
\begin{gathered}
m d v + u d m = 0 \\
\int _ { v _ { a } } ^ { v _ { I I } ^ { e } } \frac { d v } { u } = - \int _ { m _ { 0 } } ^ { m } \frac { d m } { m } \\
\frac { v _ { I I } ^ { e } - v _ { a } } { u } = - \ln \frac { m } { m _ { 0 } } \\
\beta _ { 2 } = \exp \left( \frac { v _ { I I } ^ { e } - v _ { a } } { u } \right)
\end{gathered}
$$

Ответ:

$$
\beta _ { 2 } = \exp \left( \frac { \sqrt { 2 } - 1 } { u } \cdot \sqrt { \frac { G M _ { e } } { a } } \right) = 2.05
$$

С1 ${ } ^ { 0.50 }$ Считая $v _ { 2 } = 1.5 \mathrm { км } / \mathrm { c }$ (остальные необходимые величины возьмите из прошлых частей задачи), расчитайте численно, во сколько раз уменьшится масса ракеты в процессе прилунения $\beta _ { 3 }$.

Запишем ЗСЭ для перемещения ракеты от начала зоны притяжения луны до точки, в который мы выходим на орбиту, близкую к луне

$$
\begin{gathered}
\frac { m v _ { 2 } ^ { 2 } } { 2 } - \frac { G M _ { m } m } { r _ { c } } = \frac { m v ^ { 2 } } { 2 } - \frac { G M _ { m } m } { b } \\
v = \sqrt { v _ { 2 } ^ { 2 } - 2 G M _ { m } \left( \frac { 1 } { r _ { c } } - \frac { 1 } { b } \right) }
\end{gathered}
$$

Запишем формулу Циолковского, полученную в пункте В9 с заменой знака скорости истечения газов

$$
\frac { v } { u } = \ln \frac { m _ { 0 } } { m _ { 3 } }
$$

Ответ:


$$
\beta _ { 3 } = \exp \left( \frac { \sqrt { v _ { 2 } ^ { 2 } - 2 G M _ { m } \left( \frac { 1 } { r _ { c } } - \frac { 1 } { b } \right) } } { u } \right) = 1.83
$$

C2 ${ } ^ { 0.50 }$ Рассчитайте численно какую начальную массу $m$ должна иметь ракета для доставки на Луну груза весом 40 т.

Ответ:

$$
m = \beta _ { 1 } \beta _ { 2 } \beta _ { 3 } m _ { \text {груз } } \approx 2300 \text { т }
$$
