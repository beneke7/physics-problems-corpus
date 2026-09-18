---
id: solution-ocr-rupho-w-2021-t7-s
source: rupho-w
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-w/2021/T7_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.20 }$ Выразите $L$ через $R$ и $\alpha$ при $h = 0$.

Солнечные лучи можно считать параллельными. При нулевом уровне жидкости в сосуде дно крайними не освещающими дно являются лучи, касающиеся шара. Проводя их продолжения до пересечения с дном

$$
L = \frac { 2 R } { \cos ( \alpha ) }
$$

А2 ${ } ^ { 0.30 }$ Выразите $L$ через $R , \alpha , \beta , l$ и $h$ при $0 < h < h _ { 1 }$.

Лучи преломляются и остаются параллельны друг другу. Поскольку поверхность жидкости параллельна основанию сосуда, преломление лучей, касающихся шара, не влияет на длину тени. Таким образом

$$
L = \frac { 2 R } { \cos ( \alpha ) }
$$

А3 ${ } ^ { 1.00 }$ Выразите $h _ { 1 }$ через $l , R , \alpha$ и $\beta$.

Излом графика наступает тогда, когда один из крайних лучей не может коснуться шара до преломления в жидкости. Таким образом, в момент, когда на графике начинается излом, касательная к шару направлена под углом $\alpha$ к вертикали. Отсюда получаем ответ

$$
h _ { 1 } = l + R ( 1 - \sin ( \alpha ) )
$$

В1 ${ } ^ { 2.50 }$ При $h _ { 1 } < h < h _ { 2 }$ получите зависимость длины тени от $l , R , \alpha , \beta$ и $h$.

Поскольку $\beta < \alpha$, пока касательная к шару не станет образовывать угол $\beta$ с вертикалью, все лучи после преломления не будут пересекать шар. Тогда границей тени является луч, преломляющийся в точке контакта шара с поверхностью жидкости. Пусть $H$ - высота центра шара над поверхностью жидкости. Тогда найдём длину тени

$$
L = \frac { R } { \cos ( \alpha ) } + H \operatorname { tg } ( \alpha ) + \sqrt { R ^ { 2 } - H ^ { 2 } }
$$

Выражение для $H$ следующее

$$
H = l + R - h
$$

Откуда

$$
L = \frac { R } { \cos ( \alpha ) } + ( l + R - h ) \operatorname { tg } ( \alpha ) + \sqrt { R ^ { 2 } - ( l + R - h ) ^ { 2 } }
$$

В2 ${ } ^ { 1.00 }$ Выразите $h _ { 2 }$ через $l , R , \alpha , \beta$.

Как мы уже знаем, пока касательная к шару составляет с вертикалью угол больший, чем $\beta$, границей тени является луч, преломленный в точке контакта шара с поверхностью. Отсюда

$$
h _ { 2 } = l + R ( 1 - \sin ( \beta ) )
$$

С1 ${ } ^ { 1.30 }$ Поскольку участок линейный, зависимость $L ( h )$ имеет вид $L = L _ { 0 } - k h$. Выразите $L _ { 0 }$ и $k$ через $l , R$, $\alpha$ и $\beta$.

Если касательная к шару в точке контакта с поверхностью жидкости составляет с вертикалью угол меньший чем $\beta$, один из лучей после преломления касается шара уже внутри жидкости и уже является границей тени. Сохраним обозначение $H$, введённое при решении пункта $B 1$. Тогда

$$
L = \frac { R } { \cos ( \alpha ) } + H \operatorname { tg } ( \alpha ) + \frac { R } { \cos ( \beta ) } - H \operatorname { tg } ( \beta )
$$

Подставляя выражение для $H$, получим

$$
L = \frac { R } { \cos ( \alpha ) } + \frac { R } { \cos ( \beta ) } + ( l + R ) ( \operatorname { tg } ( \alpha ) - \operatorname { tg } ( \beta ) ) - ( \operatorname { tg } ( \alpha ) - \operatorname { tg } ( \beta ) ) h
$$

Откуда

$$
\begin{gathered}
L _ { 0 } = \frac { R } { \cos ( \alpha ) } + \frac { R } { \cos ( \beta ) } + ( l + R ) ( \operatorname { tg } ( \alpha ) - \operatorname { tg } ( \beta ) ) \\
k = \operatorname { tg } ( \alpha ) - \operatorname { tg } ( \beta )
\end{gathered}
$$


C2 ${ } ^ { 0.20 }$ Выразите минимальную длину тени через $l , R , \alpha$ и $\beta$.

В некоторый момент уровень поднимется так высоко, что верхний касающийся шара луч будет касаться его и после преломления. В дальнейшем именно верхний луч, касающийся шара после преломления, определяет длину его тени. Она остаётся постоянной и равна

$$
L = \frac { 2 R } { \cos ( \beta ) }
$$

С3 ${ } ^ { 0.50 }$ Выразите $h _ { 3 }$ через $l , R , \alpha$ и $\beta$.

Используем результат предыдущего пункта

$$
\frac { 2 R } { \cos ( \beta ) } = \frac { R } { \cos ( \alpha ) } + \frac { R } { \cos ( \beta ) } + ( l + R ) ( \operatorname { tg } ( \alpha ) - \operatorname { tg } ( \beta ) ) - ( \operatorname { tg } ( \alpha ) - \operatorname { tg } ( \beta ) ) h _ { 3 }
$$

Откуда

$$
h _ { 3 } = l + R \left( 1 + \frac { \cos ( \beta ) - \cos ( \alpha ) } { \sin ( \alpha - \beta ) } \right)
$$

D1 ${ } ^ { 1.50 }$ Найдите численные значения $\cos \alpha$ и $\cos \beta$.

Из графика получим, что

$$
\frac { L _ { \max } } { L _ { \min } } = \frac { \cos ( \beta ) } { \cos ( \alpha ) } = \frac { 4 } { 3 }
$$

Найдём угловой коэффициент линейного участка графика

$$
k = \operatorname { tg } ( \alpha ) - \operatorname { tg } ( \beta ) = \frac { 7 } { 12 }
$$

Используя известное выражение

$$
\frac { 1 } { \cos ^ { 2 } ( \alpha ) } = 1 + t g ^ { 2 } ( \alpha )
$$

получаем

$$
\operatorname { tg } ( \alpha ) - \sqrt { \frac { 9 } { 16 } \left( 1 + \operatorname { tg } ^ { 2 } ( \alpha ) \right) - 1 } = \frac { 7 } { 12 }
$$

Получаем квадратное уравнение относительно $\operatorname { tg } ( \alpha )$

$$
\operatorname { tg } ^ { 2 } ( \alpha ) - \frac { 8 \operatorname { tg } ( \alpha ) } { 3 } + \frac { 16 } { 9 } = 0
$$

Его решение

$$
\operatorname { tg } ( \alpha ) = \frac { 4 } { 3 }
$$

Получим ответы на вопросы

$$
\cos ( \alpha ) = \frac { 3 } { 5 } ; \cos ( \beta ) = \frac { 4 } { 5 }
$$

D2 ${ } ^ { 0.50 }$ Найдите радиус шарика $R$.

Максимальная длина тени равна

$$
L _ { \max } = \frac { 2 R } { \cos ( \alpha ) } = 14 \mathrm {~cm}
$$

откуда

$$
R = \frac { L _ { \max } \cos ( \alpha ) } { 2 } = 4,2 \mathrm {~cm}
$$


D3 ${ } ^ { 0.50 }$ Найдите показатель преломления жидкости $n$.

$$
n = \frac { \sin ( \alpha ) } { \sin ( \beta ) } = \frac { 4 } { 3 }
$$

D4 ${ } ^ { 0.50 }$ Найдите длину нити $l$.

Наиболее точно $l$ можно измерить по точке $h _ { 3 }$

$$
l = h _ { 3 } - R \left( 1 + \frac { \cos ( \beta ) - \cos ( \alpha ) } { \sin ( \alpha - \beta ) } \right) = h _ { 3 } - \frac { 12 } { 7 } R = 5,3 \mathrm {~cm}
$$
