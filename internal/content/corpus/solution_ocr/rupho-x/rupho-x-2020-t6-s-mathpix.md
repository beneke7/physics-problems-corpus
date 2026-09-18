---
id: solution-ocr-rupho-x-2020-t6-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2020/T6_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Зависимость магнитного поля диполя от $\vec { r }$ :

$$
\begin{aligned}
& \vec { B } ( \vec { r } ) = \frac { \mu _ { 0 } } { 4 \pi } \left( \frac { 3 \vec { r } ( \vec { m } \cdot \vec { r } ) } { r ^ { 5 } } - \frac { \vec { m } } { r ^ { 3 } } \right) , \vec { m } \cdot \vec { r } = m r \cos \theta \Rightarrow \\
& \vec { B } ( \vec { r } ) = \frac { m \mu _ { 0 } } { 4 \pi r ^ { 3 } } ( 3 \cos \theta \hat { r } - \hat { y } )
\end{aligned}
$$

Находить модуль этого вектора можно по-разному, например,
удобно ввести дополнительный единичный вектор:

$$
\hat { \theta } = - \sin \theta \cdot \hat { y } + \cos \theta \cdot \hat { x } , \hat { r } = \cos \theta \cdot \hat { y } + \sin \theta \cdot \hat { x }
$$

Или иначе:

$$
\begin{aligned}
& \hat { y } = \cos \theta \cdot \hat { r } - \sin \theta \cdot \hat { \theta } , \hat { x } = \sin \theta \cdot \hat { r } + \cos \theta \cdot \hat { \theta } \\
& 3 \cos \theta \hat { r } - \hat { y } = 3 \cos \theta \hat { r } - ( \cos \theta \cdot \hat { r } - \sin \theta \cdot \hat { \theta } ) \Rightarrow \\
& \vec { B } ( \vec { r } ) = \frac { \mu _ { 0 } m } { 4 \pi r ^ { 3 } } ( ( 2 \cos \theta ) \hat { r } + ( \sin \theta ) \hat { \theta } ) \Rightarrow B = \frac { \mu _ { 0 } m } { 4 \pi r ^ { 3 } } \sqrt { \left. ( 2 \cos \theta ) ^ { 2 } + ( \sin \theta ) ^ { 2 } \right) }
\end{aligned}
$$

В1 ${ } ^ { 1.50 }$ Выразите магнитное поле $B ( y )$ вдоль оси, перпендикулярной магниту, на расстоянии $y$ от центра.

Для нахождения ответа в этом пункте, разобьём магнит на бесконечно узкие кольца и проинтегрируем:
Получаем слеующее выражение:

$$
\vec { B } ( y ) = \frac { \mu _ { 0 } } { 4 \pi } \cdot \int _ { 0 } ^ { R } 2 \pi x \cdot d x \cdot \sigma \cdot \frac { 1 } { \left( x ^ { 2 } + y ^ { 2 } \right) ^ { \frac { 3 } { 2 } } } \cdot ( 2 \cos \theta \cdot \cos \theta \cdot \hat { y } + \sin \theta \cdot \sin \theta \cdot ( - \hat { y } ) )
$$

Для удобства перейдём к интегрированию по углу:

$$
R = y \cdot \tan \theta _ { \max } , x = y \cdot \tan \theta , d x = y \cdot \frac { d \theta } { \cos ^ { 2 } \theta } , \frac { y } { \cos \theta } = \sqrt { x ^ { 2 } + y ^ { 2 } }
$$

Тогда

$$
\begin{aligned}
& B = \frac { \mu _ { 0 } \sigma } { 2 } \cdot \int _ { 0 } ^ { \theta _ { \max } } y \cdot \tan \theta \cdot y \cdot \frac { d \theta } { \cos ^ { 2 } \theta } \cdot \frac { \cos ^ { 3 } \theta } { y ^ { 3 } } \cdot \hat { y } \cdot \left( 2 \cos ^ { 2 } \theta - \sin ^ { 2 } \theta \right) \\
& = \frac { \mu _ { 0 } \sigma \cdot \hat { y } } { 2 y } \cdot \int _ { 0 } ^ { \theta _ { \max } } d \theta \cdot \left( 2 \cos ^ { 2 } \theta \sin \theta - \sin ^ { 3 } \theta \right) \\
& = \frac { \mu _ { 0 } \sigma \cdot \hat { y } } { 2 y } \cdot \int _ { 0 } ^ { \theta _ { \max } } d \theta \cdot \left( 3 \cos ^ { 2 } \theta \sin \theta - \sin \theta \right) \\
& = \left. \frac { \mu _ { 0 } \sigma \cdot \hat { y } } { 2 y } \cdot \left[ - \cos ^ { 3 } \theta + \cos \theta \right] \right| _ { 0 } ^ { \theta _ { \max } } = \frac { \mu _ { 0 } \sigma \cdot \hat { y } } { 2 y } \cdot \left[ \cos \theta _ { \max } - \cos ^ { 3 } \theta _ { \max } \right] \\
& \cos \theta _ { \max } = \frac { y } { \sqrt { R ^ { 2 } + y ^ { 2 } } }
\end{aligned}
$$

Упрощая, получаем итоговый результат:

$$
B ( y ) = \frac { \mu _ { 0 } \sigma } { 2 } \cdot \frac { R ^ { 2 } } { \left( R ^ { 2 } + y ^ { 2 } \right) ^ { \frac { 3 } { 2 } } }
$$

В2 ${ } ^ { 0.50 }$ Оцените величину магнитного поля вблизи поверхности магнита. Ответ выразите через величины $t , D , \rho , \mu _ { 0 }$.

Поскольку выполняется соотношение $t \ll D$, магнит можно считать плоским и пренебрегать его толщиной при нахождении поля у поверхности:

$$
\begin{aligned}
& \sigma = \rho \cdot t , B ( y ) = \frac { \mu _ { 0 } \sigma } { 2 } \cdot \frac { R ^ { 2 } } { \left( R ^ { 2 } + y ^ { 2 } \right) ^ { \frac { 3 } { 2 } } } , y = 0 \Rightarrow B _ { 0 } = \frac { \mu _ { 0 } \rho t } { D } \\
& \frac { \mu _ { 0 } \rho t } { D } = 0.13 \text { Тл }
\end{aligned}
$$

В3 ${ } ^ { 0.50 }$ Получите выражение и численное значение силы взаимодействия $F _ { 0 }$ между дверью и прижатым к ней магнитом, также вычислите давление $P _ { 0 }$ магнита на дверь.

ВЗ) По условию, объемная плотность энергии магнитного поля составляет:

$$
\frac { E } { V } = \frac { 1 } { 2 \mu _ { 0 } } \cdot B ^ { 2 }
$$

При отрыве магнита от двери на небольшое расстояние $y$ :


$$
\begin{aligned}
& \Delta E = \pi ( D / 2 ) ^ { 2 } \cdot y \cdot \frac { 1 } { 2 \mu _ { 0 } } \cdot B _ { 0 } ^ { 2 } \\
& F = \frac { \Delta E } { y } = \pi ( D / 2 ) ^ { 2 } \cdot \frac { 1 } { 2 \mu _ { 0 } } \cdot B _ { 0 } ^ { 2 } = 2.2 H
\end{aligned}
$$

Зная силу и площадь соприкосновения, легко выразить давление:

$$
P = \frac { F } { S } = \frac { B _ { 0 } ^ { 2 } } { 2 \mu _ { 0 } } = 6.9 \cdot 10 ^ { 3 } \text { Па }
$$

С1 ${ } ^ { 2.00 }$ Запишите выражение для поля $\vec { B } \left( \vec { r } _ { 0 } , y \right)$ которое создает ряд магнитов. (Для удобства поле выражается и через $\vec { r } _ { 0 }$, и через $y$, хотя технически $y = \left( \vec { r } _ { 0 } \right) _ { y }$.)

По схеме ниже:

$$
\begin{aligned}
& r _ { 0 } = \frac { y } { \cos \alpha } , x = y \tan \alpha , \overrightarrow { r _ { 0 } } = y \hat { y } + x \hat { x } \Rightarrow r _ { 0 } = \hat { y } \cdot \cos \alpha + \hat { x } \cdot \sin \alpha \\
& \frac { r _ { 0 } } { r } = \cos \theta , z = r _ { 0 } \tan \theta \Rightarrow d z = \frac { r _ { 0 } d \theta } { \cos ^ { 2 } \theta } \\
& \vec { r } = x \hat { x } + y \hat { y } + ( - z ) \hat { z } \\
& \vec { B } \left( \overrightarrow { r _ { 0 } } , y \right) = \frac { \mu _ { 0 } } { 4 \pi } \cdot \int _ { - \infty } ^ { \infty } d z \cdot \rho _ { L } \cdot \left[ \frac { 3 } { r ^ { 4 } } \left( \frac { y \cdot \cos \theta } { r _ { 0 } } \right) \cdot \left( \overrightarrow { r _ { 0 } } - z \hat { z } \right) - \frac { \hat { y } } { r ^ { 3 } } \right] = \\
& \frac { \mu _ { 0 } \cdot \rho _ { L } } { 4 \pi } \cdot \int _ { - \pi / 2 } ^ { \pi / 2 } d \theta \cdot \frac { r _ { 0 } } { \cos ^ { 2 } \theta } \cdot \left[ \frac { 3 y } { r _ { 0 } ^ { 5 } } \cdot \cos ^ { 5 } \theta \cdot \overrightarrow { r _ { 0 } } - \frac { \hat { y } } { r _ { 0 } ^ { 3 } } \cdot \cos ^ { 3 } \theta \right] = \\
& \frac { \mu _ { 0 } \cdot \rho _ { L } } { 4 \pi r _ { 0 } ^ { 2 } } \cdot \int _ { - \pi / 2 } ^ { \pi / 2 } d \theta \cdot \left[ \frac { 3 y \cdot \vec { r } _ { 0 } } { r _ { 0 } ^ { 2 } } \cdot \cos ^ { 3 } \theta - \hat { y } \cdot \cos \theta \right] = \\
& \left. \frac { \mu _ { 0 } \cdot \rho _ { L } } { 4 \pi r _ { 0 } ^ { 2 } } \cdot \left[ \frac { 3 y \cdot \vec { r } _ { 0 } } { r _ { 0 } ^ { 2 } } \cdot \left( \sin \theta - \frac { 1 } { 3 } \sin ^ { 3 } \theta \right) - \hat { y } \cdot \sin \theta \right] \right| _ { - \pi / 2 } ^ { \pi / 2 } = \\
& \frac { \mu _ { 0 } \cdot \rho _ { L } } { 4 \pi r _ { 0 } ^ { 2 } } \cdot \left[ \frac { 4 y \cdot \vec { r } _ { 0 } } { r _ { 0 } ^ { 2 } } - 2 \hat { y } \right]
\end{aligned}
$$

С2 ${ } ^ { 1.00 }$ Найдите магнитного поля с двух сторон от сборки. Ответ дать в виде некоторого интеграла.

По схеме ниже:

$$
\begin{aligned}
& r _ { 0 } = \frac { y _ { 0 } } { \cos \alpha } = \frac { y } { \cos ( \beta + \alpha ) } \Rightarrow y = y _ { 0 } \cdot \frac { \cos ( \beta + \alpha ) } { \cos \alpha } \\
& \hat { y } = \cos \beta \cdot \hat { y _ { 0 } } + \sin \beta \cdot \hat { x } , \hat { r _ { 0 } } = \cos \alpha \cdot \hat { y _ { 0 } } - \sin \alpha \cdot \hat { x } \\
& \vec { B } = \int _ { - \infty } ^ { \infty } d x \cdot \frac { \mu _ { 0 } \sigma } { 4 \pi y _ { 0 } ^ { 2 } } \cdot \cos ^ { 2 } \alpha \cdot \left[ 4 \cos ( \beta + \alpha ) \left[ \cos \alpha \cdot \hat { y _ { 0 } } - \sin \alpha \cdot \hat { x } \right] - 2 \left[ \cos \beta \cdot \hat { y _ { 0 } } + \sin \beta \cdot \hat { x } \right] \right]
\end{aligned}
$$

Путём несложных математических преобразований получаем:

$$
\frac { \mu _ { 0 } \sigma } { 2 \pi y _ { 0 } } \cdot \int _ { - \pi / 2 } ^ { \pi / 2 } d \alpha \cdot \left[ \hat { y _ { 0 } } \cdot \cos ( \beta + 2 \alpha ) - \hat { x } \cdot \sin ( \beta + 2 \alpha ) \right]
$$

Подставим зависимость для $\beta$ :

$$
\beta = \beta _ { 0 } + k x _ { 0 } + k y _ { 0 } \cdot \tan \alpha
$$

Получаем:

$$
\frac { \mu _ { 0 } \sigma } { 2 \pi y _ { 0 } } \cdot \int _ { - \pi / 2 } ^ { \pi / 2 } d \alpha \cdot \left[ \hat { y _ { 0 } } \cdot \cos \left( \beta _ { 0 } + k x _ { 0 } + k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) - \hat { x } \cdot \sin \left( \beta _ { 0 } + k x _ { 0 } + k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) \right]
$$

с3 ${ } ^ { 1.00 }$ Покажите, что с одной стороны идеальной сборки магнитное поле стремится к нулю.

Посмотрим внимательно на полученное выражение:

$$
\begin{aligned}
& \cos \left( \beta _ { 0 } + k x _ { 0 } + k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) \\
& = \cos \left( k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) - \sin \left( \beta _ { 0 } + k x _ { 0 } \right) \sin \left( k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) \\
& \cos \left( k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) = \cos \left( k y _ { 0 } \cdot \tan \alpha \right) \cos ( 2 \alpha ) - \sin \left( k y _ { 0 } \cdot \tan \alpha \right) \sin ( 2 \alpha )
\end{aligned}
$$

По условию,

$$
\int _ { - \pi / 2 } ^ { \pi / 2 } d x \cdot \cos ( 2 x ) \cos ( c \cdot \tan x ) = \frac { c \cdot \pi } { e ^ { c } } = \int _ { - \pi / 2 } ^ { \pi / 2 } d x \cdot \sin ( 2 x ) \cdot \sin ( c \cdot \tan x )
$$

Несложно заметить, что это и есть наш интеграл, если взять в качестве $c$ величину $k y _ { 0 }$.


При переходе к другой стороне сборки, некоторые знаки в уравнении меняются на противоположные:

$$
\vec { B } = - \frac { \mu _ { 0 } \sigma } { 2 \pi y _ { 0 } } \cdot \int _ { - \pi / 2 } ^ { \pi / 2 } d \alpha \cdot \left[ \hat { y _ { 0 } } \cdot \left[ \cos \left( \beta _ { 0 } + k x _ { 0 } \right) \cdot \cos \left( - k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) - \sin " \ldots " \sin " \ldots " \right] - \hat { x } \cdot \left[ \sin \left( \beta _ { 0 } + k x _ { 0 } \right) \cos \left( - k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) + \cos " \ldots " \sin " \ldots " \right] \right]
$$

Интегралы от нечётных функций будут зануляться из-за соображений симметрии, чётные функции остаются.

$$
\begin{aligned}
& \vec { B } = - \frac { \mu _ { 0 } \sigma } { 2 \pi y _ { 0 } } \cdot \int _ { - \pi / 2 } ^ { \pi / 2 } d \alpha \cdot \left[ \hat { y _ { 0 } } \cdot \left[ \cos \left( \beta _ { 0 } + k x _ { 0 } - k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) \right] - \hat { x } \cdot \left[ \sin \left( \beta _ { 0 } + k x _ { 0 } \right) \cos \left( - k y _ { 0 } \cdot \tan \alpha + 2 \alpha \right) + \cos " \ldots " \sin " \ldots " \right] \right] \\
& \left. = - \frac { \mu _ { 0 } \sigma } { 2 \pi y _ { 0 } } \cdot \int _ { - \pi / 2 } ^ { \pi / 2 } d \alpha \cdot \left[ \hat { y _ { 0 } } \cdot \cos \left( \beta _ { 0 } + k x _ { 0 } \right) \cdot \left( \cos ( 2 \alpha ) \cos \left( k y _ { 0 } \cdot \tan \alpha \right) + \sin " \ldots " \sin " \ldots " \right) \right] - \hat { x } \cdot \left[ \sin \left( \beta _ { 0 } + k x _ { 0 } \right) \cdot " \ldots " \right] \right] \\
& = - \frac { \mu _ { 0 } \sigma } { 2 \pi y _ { 0 } } \cdot \left[ \hat { y _ { 0 } } \cdot \cos \left( \beta _ { 0 } + k x _ { 0 } \right) - \hat { x } \cdot \sin \left( \beta _ { 0 } + k x _ { 0 } \right) \right] \cdot 2 \cdot \frac { k y _ { 0 } \pi } { e ^ { k y _ { 0 } } } \\
& = - \mu _ { 0 } \sigma k \cdot e ^ { - k y _ { 0 } } \cdot \left[ \hat { y _ { 0 } } \cdot \cos \left( \beta _ { 0 } + k x _ { 0 } \right) - \hat { x } \cdot \sin \left( \beta _ { 0 } + k x _ { 0 } \right) \right]
\end{aligned}
$$

С5 ${ } ^ { 1.50 }$ На основании выражения поля найдите среднее давление Р такого магнита на дверь холодильника. Возьмите следующие параметры: толщина $t = 0.5 \mathrm {~m}$, объемная плотность магнитного диполя $\rho = 2 \cdot 10 ^ { 5 } \frac { \text { Тл.м } } { \Gamma \text { н } }$, шаг сборки $\lambda = 5$ мМ.

Сила и давление находятся так же, как и в пункте В3:

$$
\begin{aligned}
& y _ { 0 } \rightarrow 0 \Rightarrow \vec { B } = - \mu _ { 0 } \sigma k \cdot \left[ \hat { y _ { 0 } } \cdot \cos \left( \beta _ { 0 } + k x _ { 0 } \right) - \hat { x } \cdot \sin \left( \beta _ { 0 } + k x _ { 0 } \right) \right] \Rightarrow \\
& B ^ { 2 } = \left( \mu _ { 0 } \sigma k \right) ^ { 2 } , P = \frac { 1 } { 2 \mu _ { 0 } } \cdot B ^ { 2 } , \sigma = \rho t \Rightarrow \\
& B = \left( 1.257 \cdot 10 ^ { - 6 } \Gamma \mathrm { H } / \mathrm { M } \right) \cdot \left( 2 \cdot 10 ^ { 5 } Т л \cdot \mathrm { M } / Г \mathrm { H } \right) \cdot \left( 5 \cdot 10 ^ { - 4 } \mathrm { м } \right) \cdot \frac { 2 \cdot 3.14 } { 5 \cdot 10 ^ { - 3 } \mathrm { м } } = 0.16 \text { Тл } \\
& P = \frac { 1 } { 2 \mu _ { 0 } } \cdot B ^ { 2 } = \frac { 1 } { 2 \cdot 1.257 \cdot 10 ^ { - 6 } \Gamma _ { \mathrm { H } / \mathrm { м } } } \cdot \left( 0.16 \mathrm {~T} л ^ { 2 } \right) = 10 \text { кПа }
\end{aligned}
$$

С6 ${ } ^ { 0.50 }$ Найдите соотношение между давлением, которое создает магнитная сборка Халбаха и давлением, которое создает обычный магнит из того же материала, с теми же радиусом и толщиной. Здесь тоже следует пренебречь эффектами на периметре кружка и и толщиной магнита.

По формулам, полученным ранее:

$$
\eta = \frac { P } { P _ { 0 } } = \left( \frac { B } { B _ { 0 } } \right) ^ { 2 } \left( \frac { \mu _ { 0 } \rho t k } { \mu _ { 0 } \rho t / 2 R } \right) ^ { 2 } = \left( \frac { 4 \pi R } { \lambda } \right) ^ { 2 }
$$
