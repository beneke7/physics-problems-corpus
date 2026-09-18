---
id: solution-ocr-rupho-w-2023-t2-s
source: rupho-w
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-w/2023/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Закон Снеллиуса для точки $P$ :

$$
n _ { l } \cos \theta _ { l } = n _ { l + 1 } \cos \theta _ { l + 1 } .
$$

Переходя к пределу, получаем закон Снеллиуса для непрерывной среды:

$$
n ( h ) \cos \theta ( h ) = n _ { S } \cos \theta _ { S }
$$

откуда окончательно получаем:

$$
\theta ( h ) = \arccos \left( \frac { n _ { S } \cos \theta _ { S } } { n ( h ) } \right) .
$$

Ответ:

$$
\begin{gathered}
n _ { l } \cos \theta _ { l } = n _ { l + 1 } \cos \theta _ { l + 1 } \\
\theta ( h ) = \arccos \left( \frac { n _ { S } \cos \theta _ { S } } { n ( h ) } \right)
\end{gathered}
$$

А2 ${ } ^ { 0.50 }$ Пользуясь этим результатом, найдите, как зависит показатель преломления $n ( h )$ атмосферы от высоты. Выразите ответ через $n _ { \mathrm { S } } = n ( 0 )$ и $n _ { \mathrm { H } } = n ( H )$.

Выразим концентрации воздуха на высотах $h = 0$ и $h = H$ :

$$
N _ { S } = \frac { 1 } { \alpha } \left[ n _ { S } ^ { 2 } - 1 \right] , \quad N _ { H } = \frac { 1 } { \alpha } \left[ n _ { H } ^ { 2 } - 1 \right] .
$$

Подставив их в закон зависимости показателя преломления, имеем:

$$
n ( h ) = \sqrt { n _ { S } ^ { 2 } - \left( n _ { S } ^ { 2 } - n _ { H } ^ { 2 } \right) \frac { h } { H } } .
$$

Ответ:

$$
n ( h ) = \sqrt { n _ { S } ^ { 2 } - \left( n _ { S } ^ { 2 } - n _ { H } ^ { 2 } \right) \frac { h } { H } }
$$

А3 ${ } ^ { 0.50 }$ Выразите показатель преломления $n _ { \mathrm { m } } \equiv n \left( h _ { \mathrm { m } } \right)$ в верхней точке траектории луча через $n _ { \mathrm { S } }$ и $\theta _ { \mathrm { S } }$.

Пишем закон Снеллиуса, учитывая, что в вершине траектории $\theta = 0$ :

$$
n _ { S } \cos \theta _ { S } = n _ { \mathrm { m } } \cos 0 = n _ { \mathrm { m } } .
$$

Отсюда и из результатов предыдущего пункта имеем:

$$
h _ { \mathrm { m } } = \frac { n _ { S } ^ { 2 } \sin ^ { 2 } \theta _ { S } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } H .
$$

Ответ:

$$
\begin{gathered}
n _ { \mathrm { m } } = n _ { S } \cos \theta _ { S } \\
h _ { \mathrm { m } } = \frac { n _ { S } ^ { 2 } \sin ^ { 2 } \theta _ { S } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } H
\end{gathered}
$$

A4 ${ } ^ { 1.00 }$ Выразите $a _ { \mathrm { m } }$ и $b$ через $h _ { \mathrm { m } } , n _ { \mathrm { H } } , n _ { \mathrm { S } }$ и $n _ { \mathrm { m } }$.

Подставляем непосредственно:


$$
\begin{aligned}
\frac { \mathrm { d } h } { \mathrm {~d} x } & = \sqrt { \frac { 1 } { \cos ^ { 2 } \theta } - 1 } = \sqrt { \frac { n ^ { 2 } } { n _ { \mathrm { m } } ^ { 2 } } - 1 } = \sqrt { \left( \frac { n _ { S } ^ { 2 } } { n _ { \mathrm { m } } ^ { 2 } } - 1 \right) \left( 1 - \frac { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { \mathrm { m } } ^ { 2 } } \frac { h } { H } \right) } = \\
& = \sqrt { \frac { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } { n _ { \mathrm { m } } ^ { 2 } } \frac { h _ { \mathrm { m } } } { H } \left( 1 - \frac { h } { h _ { \mathrm { m } } } \right) } \Longrightarrow a _ { \mathrm { m } } = \frac { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } { n _ { \mathrm { m } } ^ { 2 } } , \quad b = h _ { \mathrm { m } }
\end{aligned}
$$

Ответ:

$$
\begin{gathered}
a _ { \mathrm { m } } = \frac { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } { n _ { \mathrm { m } } ^ { 2 } } \\
b = h _ { \mathrm { m } }
\end{gathered}
$$

А5 ${ } ^ { 0.50 }$ Выразите коэффициенты $c$ и $d$ через $a$ и $b$.

Подставляем непосредственно:

$$
\begin{aligned}
& \frac { \mathrm { d } } { \mathrm {~d} x } \left[ c x + d x ^ { 2 } \right] = c + 2 d x = \sqrt { a \left( 1 - \frac { c x + d x ^ { 2 } } { b } \right) } \Longrightarrow \\
& \Longrightarrow c ^ { 2 } = a , \quad 4 c d = - \frac { a c } { b } \Longrightarrow c = \sqrt { a } , \quad d = - \frac { a } { 4 b }
\end{aligned}
$$

Ответ:

$$
\begin{gathered}
c = \sqrt { a } \\
d = - \frac { a } { 4 b }
\end{gathered}
$$

А6 ${ } ^ { 1.60 }$ Выразите $h _ { \mathrm { g } }$ как функцию расстояния $L$ от наблюдателя до острова. Выше или ниже остальных виден самый дальний из наблюдаемых островов?

Несложно заметить, что:

$$
\begin{gathered}
L = - \frac { c } { d } = \frac { 4 b } { \sqrt { a } } = 4 \sqrt { h _ { \mathrm { m } } \left( \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } - h _ { \mathrm { m } } \right) } \Longrightarrow \\
\Longrightarrow h _ { \mathrm { m } } ^ { 2 } - \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } h _ { \mathrm { m } } + \frac { L ^ { 2 } } { 16 } = 0 \Longrightarrow \\
\Longrightarrow h _ { \mathrm { m } } = \frac { H } { 2 } \left[ \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } \pm \sqrt { \left( \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } \right) ^ { 2 } - \frac { L ^ { 2 } } { 4 H ^ { 2 } } } \right] .
\end{gathered}
$$

Так как $L \rightarrow 0 \left( h _ { \mathrm { m } } \rightarrow 0 \right)$, то следует выбрать корень со знаком "-". Из геометрических свойств параболической траектории

$$
h _ { \mathrm { g } } = 4 h _ { \mathrm { m } } ,
$$

поэтому

$$
h _ { \mathrm { g } } = 2 H \left[ \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } - \sqrt { \left( \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } \right) ^ { 2 } - \frac { L ^ { 2 } } { 4 H ^ { 2 } } } \right] .
$$

Из этой формулы ясно, что самый дальний из островов будет виден выше остальных.

Ответ: Самый дальний остров виден выше остальных.

$$
h _ { \mathrm { g } } = 2 H \left[ \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } - \sqrt { \left( \frac { n _ { S } ^ { 2 } } { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } \right) ^ { 2 } - \frac { L ^ { 2 } } { 4 H ^ { 2 } } } \right]
$$

А7 ${ } ^ { 0,80 }$ Выразите через $n _ { S } , n _ { H }$ и $H$ максимальное расстояние $L _ { \max }$ до острова, который ещё может видеть наблюдатель. Чему при этом равен угол $\theta _ { S \max }$ ?

Ясно, что максимальному расстоянию соответствует случай $h _ { \mathrm { m } } = H$, откуда, подставляя в одно из выражений предыдущего пункта,


$$
L _ { \max } = \frac { 4 H n _ { H } } { \sqrt { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } } .
$$

Из закона Снеллиуса:

$$
\theta _ { S \max } = \arccos \frac { n _ { H } } { n _ { S } } .
$$

Ответ:

$$
\begin{aligned}
& L _ { \max } = \frac { 4 H n _ { H } } { \sqrt { n _ { S } ^ { 2 } - n _ { H } ^ { 2 } } } \\
& \theta _ { S \max } = \arccos \frac { n _ { H } } { n _ { S } }
\end{aligned}
$$

А8 ${ } ^ { 0.50 }$ Вычислите $L _ { \text {max } }$ и $\theta _ { \mathrm { S } }$ с точностью до двух значащих цифр.

Найдём для нормальных условий:

$$
\begin{gathered}
\frac { p _ { 0 } \alpha } { k _ { \mathrm { в } } } = \frac { n _ { 0 } ^ { 2 } - 1 } { T _ { 0 } } \Longrightarrow \\
\Longrightarrow n _ { S } ^ { 2 } = 1 + \left( n _ { 0 } ^ { 2 } - 1 \right) \frac { T _ { 0 } } { T _ { S } } , \quad n _ { H } ^ { 2 } = 1 + \left( n _ { 0 } ^ { 2 } - 1 \right) \frac { T _ { 0 } } { T _ { H } } \Longrightarrow \\
\Longrightarrow L _ { \max } = 14.4 \text { км, } \quad \theta _ { S } = 0.31 ^ { \circ } .
\end{gathered}
$$

Ответ:

$$
\begin{aligned}
L _ { \max } & = 14.4 \mathrm { KM } \\
\theta _ { S } & = 0.45 ^ { \circ }
\end{aligned}
$$

В1 ${ } ^ { \text {0.80 } }$ Найдите зависимость $N ( h )$, если концентрация у поверхности земли $N ( 0 ) = N _ { 0 }$.

Рассматривая баланс сил, действующих на участок атмосферы на высоте от $h$ до $h + \mathrm { d } h$, получим:

$$
\frac { \mathrm { d } p } { \mathrm {~d} h } = - \rho g .
$$

Поскольку воздух можно считать идеальным газом, то из уравнения Менделеева-Клапейрона:

$$
\rho = \frac { m p } { k _ { \mathrm { B } } T } ,
$$

откуда

$$
\frac { \mathrm { d } p } { \mathrm {~d} h } = - \frac { m g } { k _ { \mathrm { B } } T } p \Longrightarrow \frac { p ( h ) } { p ( 0 ) } = e ^ { - \frac { m g h } { k _ { \mathrm { B } } T } } \Longrightarrow N ( h ) = N _ { 0 } e ^ { - \frac { m g h } { R T } } .
$$

Ответ:

$$
N ( h ) = N _ { 0 } e ^ { - \frac { m g h } { R T } }
$$

В2 ${ } ^ { 1.00 }$ Выразите $\frac { 1 } { R }$ через $\theta ( h )$ и $\frac { \mathrm { d } \theta } { \mathrm { d } h }$.

Для элемента длины траектории луча $\mathrm { d } l$, с одной стороны,

$$
\mathrm { d } l = \frac { \mathrm { d } h } { \sin \theta } ,
$$

а с другой стороны,

$$
\mathrm { d } l = - R \mathrm {~d} \theta ,
$$

откуда

$$
\frac { 1 } { R } = - \sin \theta \frac { \mathrm { d } \theta } { \mathrm {~d} h } .
$$


Ответ:

$$
\frac { 1 } { R } = - \sin \theta \frac { \mathrm { d } \theta } { \mathrm {~d} h }
$$

Вз ${ } ^ { \mathbf { 0 . 5 0 } }$ Преобразуйте полученное в B2 выражение с помощью закона Снеллиуса из A1 так, чтобы оно содержало только $n , n _ { S }$ и $\theta _ { S }$.

Из закона Снеллиуса

$$
\cos \theta = \frac { n _ { S } \cos \theta _ { S } } { n } ,
$$

тогда

$$
\frac { 1 } { R } = - \sin \theta \frac { \mathrm { d } \theta } { \mathrm {~d} h } = \frac { \mathrm { d } ( \cos \theta ) } { \mathrm { d } h } = n _ { S } \cos \theta _ { S } \frac { \mathrm {~d} } { \mathrm {~d} h } \left[ \frac { 1 } { n } \right] = - \frac { n _ { S } \cos \theta _ { S } } { n ^ { 2 } } \frac { \mathrm {~d} n } { \mathrm {~d} h } .
$$

Ответ:

$$
\frac { 1 } { R } = - \frac { n _ { S } \cos \theta _ { S } } { n ^ { 2 } } \frac { \mathrm {~d} n } { \mathrm {~d} h }
$$

В4 ${ } ^ { 0.90 }$ Найдите, чему равен вблизи земной поверхности радиус кривизны $R$ траектории луча, распространяющегося под малым углом к горизонту. Выразите ответ через $m , g , n _ { \mathrm { S } } , T$ и $k _ { \text {В } }$.

Находим непосредственно:

$$
\begin{gathered}
\frac { 1 } { R } = - \frac { 1 } { n _ { E } } \frac { \mathrm {~d} n } { \mathrm {~d} h } = - \left. \frac { n _ { E } ^ { 2 } - 1 } { 2 n _ { E } ^ { 2 } } \frac { \mathrm {~d} } { \mathrm {~d} h } \left[ e ^ { - \frac { m g h } { k _ { \mathrm { B } } T } } \right] \right| _ { h = 0 } = \left( 1 - n _ { E } ^ { - 2 } \right) \frac { m g } { 2 k _ { \mathrm { B } } T } \Longrightarrow \\
\Longrightarrow R = \frac { 2 k _ { \mathrm { B } } T } { \left( 1 - n _ { E } ^ { - 2 } \right) m g } .
\end{gathered}
$$

Ответ:

$$
R = \frac { 2 k _ { \mathrm { B } } T } { \left( 1 - n _ { E } ^ { - 2 } \right) m g }
$$

В5 ${ } ^ { 0.50 }$ Найдите численно радиус кривизны траектории луча $R _ { E ^ { \prime } } ^ { l r }$, исходящего горизонтально из некоторой точки на поверхности земли. Увеличивается ли в дальнейшем высота луча над поверхностью?

Подставляем численные значения:

$$
R _ { E } ^ { l r } = \frac { 2 k _ { \mathrm { в } } T } { \left( 1 - n _ { E } ^ { - 2 } \right) m g } = 31.4 \cdot 10 ^ { 3 } \text { км. }
$$

Высота луча над поверхностью увеличивается, поскольку $R _ { E } ^ { l r } > R _ { E }$.

Ответ: Высота луча над поверхностью увеличивается.

$$
R _ { E } ^ { l r } = 31.4 \cdot 10 ^ { 3 } \text { км }
$$

В6 ${ } ^ { 0.50 }$ Найдите численно радиус кривизны траектории луча $R _ { V ^ { \prime } } ^ { l r }$, исходящего горизонтально из некоторой точки непосредственно над поверхности планеты. Увеличивается ли в дальнейшем высота луча над поверхностью?

Найдём сначала показатель преломления $n _ { V }$ на поверхности Венеры:

$$
n _ { V } ^ { 2 } = 1 + \frac { 4 \pi a _ { C } ^ { 3 } p _ { V } } { k _ { \mathrm { B } } T _ { V } } = 1.0314 ,
$$

тогда по уже известной формуле


$$
R _ { V } ^ { l r } = \frac { 2 k _ { \mathrm { B } } T _ { V } } { \left( 1 - n _ { V } ^ { - 2 } \right) m _ { \mathrm { C } } g _ { V } } = 1.00 \cdot 10 ^ { 3 } \text { км. }
$$

Высота луча над поверхностью уменьшается, поскольку $R _ { V } ^ { l r } < R _ { V }$.

Ответ: Высота луча над поверхностью уменьшается.

$$
R _ { V } ^ { l r } = 1.00 \cdot 10 ^ { 3 } \text { кМ }
$$
