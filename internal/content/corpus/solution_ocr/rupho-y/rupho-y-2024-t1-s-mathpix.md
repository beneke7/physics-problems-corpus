---
id: solution-ocr-rupho-y-2024-t1-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2024/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.50 }$ Определите дипольный момент гантели $\vec { p }$. Ответ выразите через $\vec { E } _ { 0 } , r , \varepsilon _ { 0 }$ и $\vec { l }$.

Поскольку шары и стержень являются металлическими - поверхность гантели является эквипотенциальной. Также, поскольку можно пренебречь наведёнными дипольными моментами шаров и стержня в силу $l \gg r$, можно считать, что заряды равномерно распределяются по поверхностям шаров 1 и 2. Данные заряды определяют дипольный момент $\vec { p }$ гантели. Отметим, что потенциалом электростатического поля одного из шаров на поверхности другого также можно пренебречь.
Поскольку гантель является электрически нейтральной:

$$
q _ { 2 } = - q _ { 1 } = q .
$$

Запишем условие эквипотенциальной поверхности гантели. Приравнивая разность потенциалах в центрах шаров 1 и 2 к нулю:

$$
\varphi _ { 2 } - \varphi _ { 1 } = \int _ { 1 } ^ { 2 } - \vec { E } d \vec { l } = - \left( \vec { E } _ { 0 } , \vec { l } \right) + \frac { q _ { 2 } } { 4 \pi \varepsilon _ { 0 } r } - \frac { q _ { 1 } } { 4 \pi \varepsilon _ { 0 } r } = 0
$$

откуда:

$$
q = 2 \pi \varepsilon _ { 0 } r \left( \vec { E } _ { 0 } , \vec { l } \right) .
$$

Поскольку $\vec { p } = q \vec { l }$, имеем:

Ответ:

$$
\vec { p } = 2 \pi \varepsilon _ { 0 } r \left( \vec { E } _ { 0 } , \vec { l } \right) \vec { l } .
$$

А2 ${ } ^ { 0.20 }$ Определите момент сил $\vec { M }$, действующих на гантель. Ответ выразите через $\vec { E } _ { 0 } , r , \varepsilon _ { 0 } , \vec { l }$.

Для момента сил $\vec { M }$ имеем:

$$
\vec { M } = \left[ \vec { p } \times \vec { E } _ { 0 } \right] ,
$$

откуда:

Ответ:

$$
\vec { M } = 2 \pi \varepsilon _ { 0 } r \left( \vec { E } _ { 0 } , \vec { l } \right) \left[ \vec { l } \times \vec { E } _ { 0 } \right] .
$$

A3 ${ } ^ { 0.20 }$ Найдите положения равновесия системы. В качестве ответа укажите значения углов $\alpha _ { 0 }$ между стержнем и направлением напряжённости электростатического поля $\vec { E } _ { 0 }$.

Положения равновесия гантели соответствуют равенству нулю момента сил $\vec { M }$, действующих на гантель со стороны электростатического поля. Момент сил $\vec { M }$ обнуляется в двух случаях: $\vec { l } \perp \vec { E } _ { 0 }$ и $\vec { l } \| \vec { E } _ { 0 }$. Это два положения равновесия системы.
Таким образом:

Ответ:

$$
\alpha _ { 0 } = 0 , \pi / 2 .
$$

A4 ${ } ^ { 0.50 }$ Какие из найденных вами в пункте A3 положения равновесия являются устойчивыми, а какие - неустойчивыми? Ответ обоснуйте. Найдите также периоды малых колебаний вблизи положений устойчивого равновесия. Ответы выразите через $l , R , m , E _ { 0 }$ и $\varepsilon _ { 0 }$.

Если $\alpha = \angle \vec { E } _ { 0 } , \vec { l }$, то выражение для момента сил примет вид:

$$
\vec { M } = - 2 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } \cos \alpha \sin \alpha \cdot \vec { n } .
$$

Для малых отклонений относительно $\alpha _ { 0 } = 0$ :

$$
\vec { M } ( \alpha ) = - 2 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } \alpha .
$$

Таким образом, положение равновесия $\alpha _ { 0 } = 0$ является устойчивым.
Для малых отклонений относительно $\alpha _ { 0 } = \pi / 2$ :

$$
2 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } \Delta \alpha
$$

Таким образом, положение равновесия $\alpha _ { 0 } = \pi / 2$ является неустойчивым.

Ответ: Положение равновесия $\alpha _ { 0 } = 0$ является устойчивым, а $\alpha _ { 0 } = \pi / 2$ - неустойчивым.


Для определения периода малых колебаний в положении устойчивого равновесия запишем основное уравнение динамики вращательного движения относительно центра стержня. Момент инерции гантели относительно оси, проходящей перпендикулярно стержню через его центр, равен $I = 2 \cdot m l ^ { 2 } / 4 = m l ^ { 2 } / 2$, поэтому:

$$
- 2 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } \alpha = \frac { m l ^ { 2 } \ddot { \alpha } } { 2 } \Rightarrow \omega _ { 0 } ^ { 2 } = \frac { 4 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } } { m } .
$$

Окончательно:

Ответ:

$$
T = 2 \pi \sqrt { \frac { m } { 4 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } } } .
$$

A5 ${ } ^ { 0.60 }$ В устойчивом положении равновесия стержню мгновенно придали угловую скорость $\vec { \omega } _ { 0 }$ перпендикулярную электрическому полю. При какой минимальной начальной угловой скорости $\omega _ { \min }$ гантель сможет совершить полный оборот? Ответ выразите через $l , r , m , E _ { 0 }$ и $\varepsilon _ { 0 }$.

Первое решение:
Гантель является упругим диполем, поэтому её потенциальная энергия в электростатическом поле составляет:

$$
W _ { p } = - \frac { \left( \vec { p } , \vec { E } _ { 0 } \right) } { 2 } = - \pi \varepsilon _ { 0 } r \left( \vec { E } _ { 0 } , \vec { l } \right) ^ { 2 } .
$$

Максимальное значение потенциальной энергии достигается в положении неустойчивого равновесия, поэтому условием оборота является прохождение положения неустойчивого равновесия.
Из закона сохранения энергии имеем:

$$
E _ { k } = \frac { I \omega _ { \min } ^ { 2 } } { 2 } = \frac { m l ^ { 2 } \omega _ { \min } ^ { 2 } } { 4 } = - \Delta W _ { p } = \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } ,
$$

откуда:

Ответ:

$$
\omega _ { \min } = \sqrt { \frac { 4 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } } { m } } .
$$

Второе решение:
Из теоремы об изменении кинетической энергии получим:

$$
\frac { I \omega ^ { 2 } } { 2 } - \frac { I \omega _ { 0 } ^ { 2 } } { 2 } = \frac { m l ^ { 2 } \left( \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } \right) } { 4 } = A _ { E } ,
$$

где $A _ { E }$ - работа, совершённая над гантелью со стороны электростатического поля, для которой имеем:

$$
A _ { E } = \int _ { 0 } ^ { \alpha } M ( \alpha ) d \alpha = - 2 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } \int _ { 0 } ^ { \alpha } \sin \alpha \cos \alpha d \alpha = - \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } \sin ^ { 2 } \alpha
$$

Минимальное значение угловой скорости соответствует $\alpha = \pi / 2$, поэтому для полного оборота достаточно пройти положение неустойчивого равновесия. Имеем:

$$
\frac { m l ^ { 2 } \omega _ { \min } ^ { 2 } } { 4 } = \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } l ^ { 2 } ,
$$

откуда:

Ответ:

$$
\omega _ { \min } = \sqrt { \frac { 4 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } } { m } } .
$$

В1 ${ } ^ { 0.90 }$ Запишите уравнение, определяющее силу тока $I$ в стержне. Покажите, что сила тока в нашей системе равна силе тока в некотором $R L C$ контуре, подключенном к генератору переменного гармонического напряжения $\mathcal { E } ( t )$.
Используя полученное уравнение, определите параметры эквивалентной схемы: зависимость от времени ЭДС эквивалентного генератора $\mathcal { E } _ { e f f } ( t )$, индуктивность $L _ { \text {eff } }$, ёмкость $C _ { \text {eff } }$ и сопротивление $R _ { \text {eff } }$. Ответы выразите через $E _ { 0 } , l , r , R , \varepsilon _ { 0 } , \omega , \theta$ и $t$.

Пусть $\varphi _ { 1 }$ и $\varphi _ { 2 }$ - потенциалы в центрах шаров 1 и 2 соответственно. Падение напряжения на стержне равно их разности, поэтому из закона Ома имеем:


$$
\varphi _ { 1 } - \varphi _ { 2 } = I R
$$

С другой стороны, мы можем воспользоваться результатом пункта A1:

$$
\varphi _ { 1 } - \varphi _ { 2 } = \int _ { 1 } ^ { 2 } \vec { E } d \vec { l } = \left( \vec { E } _ { 0 } , \vec { l } \right) - \frac { q } { 2 \pi \varepsilon _ { 0 } r }
$$

Приравнивая, получим:

Ответ:

$$
\left( \vec { E } _ { 0 } , \vec { l } \right) = I R + \frac { q } { 2 \pi \varepsilon _ { 0 } r }
$$

Уравнение, описывающее силу тока в колебательном $R L C$ контуре, записывается следующим образом:

$$
\mathcal { E } ( t ) = L _ { e f f } \dot { I } + I R _ { e f f } + \frac { q } { C _ { e f f } }
$$

Сопоставляя коэффициенты, для $L _ { \text {eff } } , R _ { \text {eff } }$ и $C _ { \text {eff } }$ находим:

Ответ:

$$
L _ { e f f } = 0 , \quad R _ { e f f } = R , \quad C _ { e f f } = 2 \pi \varepsilon _ { 0 } r .
$$

Проекция напряжённости электростатического поля на плоскость вращения стержня равна $E _ { 0 } \cos \theta$. Тогда если $\varphi$ - угол поворота стержня от начального положения, то для величины $\left( \vec { E } _ { 0 } , \vec { l } \right) ( \varphi )$ имеем:

$$
\left( \vec { E } _ { 0 } , \vec { l } \right) ( \varphi ) = E _ { 0 } l \cos \theta \cos \varphi .
$$

Поскольку стержень вращается с постоянной угловой скоростью $\omega$ :

$$
\varphi = \omega t \Rightarrow \left( \vec { E } _ { 0 } , \vec { l } \right) ( t ) = E _ { 0 } l \cos \theta \cos \omega t .
$$

Тогда для $\mathcal { E } _ { e f f }$ и $\omega _ { e f f }$ получим:

Ответ:

$$
\mathcal { E } _ { e f f } = E _ { 0 } l \cos \theta \cos \omega t \quad f _ { e f f } = \frac { \omega } { 2 \pi } .
$$

В2 ${ } ^ { 0.50 }$ Получите зависимость от времени $t$ проекции $p _ { l } ( t )$ дипольного момента гантели на ось, направленную вдоль вектора $\vec { l }$. Ответ выразите через $E _ { 0 } , l$, $r , R , \varepsilon _ { 0 } , \omega , \theta \backsim t$.

Величина $p _ { l } ( t )$ описывается выражением:

$$
p _ { l } = q ( t ) l ,
$$

где $q ( t )$ - заряд шара 2 как функция времени.
Уравнение, описывающее зависимость заряда шара 2 от времени, выглядит следующим образом:

$$
E _ { 0 } l \cos \theta \cos \omega t = R \dot { q } + \frac { q } { 2 \pi \varepsilon _ { 0 } r } .
$$

Воспользуемся методом комплексных амплитуд. Пусть $q ( t ) = \Re \left( \hat { q } _ { 0 } e ^ { i \omega t } \right)$. Тогда:

$$
E _ { 0 } l \cos \theta = \hat { q } _ { 0 } \left( \frac { 1 } { 2 \pi \varepsilon _ { 0 } r } + i \omega R \right) \Rightarrow \hat { q } _ { 0 } = \frac { 2 \pi \varepsilon _ { 0 } r E _ { 0 } l \cos \theta e ^ { i \varphi _ { 0 } } } { \sqrt { 1 + \left( 2 \pi \varepsilon _ { 0 } r R \omega \right) ^ { 2 } } } ,
$$

где $\varphi _ { 0 } = - \operatorname { arctg } \left( 2 \pi \varepsilon _ { 0 } r R \omega \right)$.
Таким образом:

Ответ:

$$
p _ { l } ( t ) = \frac { 2 \pi \varepsilon _ { 0 } r E _ { 0 } l ^ { 2 } \cos \theta } { \sqrt { 1 + \left( 2 \pi \varepsilon _ { 0 } r R \omega \right) ^ { 2 } } } \cos \left( \omega t - \operatorname { arctg } \left( 2 \pi \varepsilon _ { 0 } r R \omega \right) \right) .
$$


Поскольку напряжение на резисторе всегда много меньше амплитуды эффективного напряжения источника, можно считать, что $2 \pi \varepsilon _ { 0 } r R \omega \ll 1$. Отсюда:

Ответ:

$$
p _ { l } ( t ) \approx 2 \pi \varepsilon _ { 0 } r E _ { 0 } l ^ { 2 } \cos \theta \cos \left( \omega t - 2 \pi \varepsilon _ { 0 } r R \omega \right) \approx 2 \pi \varepsilon _ { 0 } r E _ { 0 } l ^ { 2 } \cos \theta \left( \cos \omega t + 2 \pi \varepsilon _ { 0 } r R \omega \sin \omega t \right) .
$$

B4 ${ } ^ { 1.00 }$ Определите средние за большое время компоненты дипольного момент $\left\langle p _ { x } \right\rangle , \left\langle p _ { y } \right\rangle$ и $\left\langle p _ { z } \right\rangle$ гантели. Ответы выразите через $E _ { 0 } , l , r , R , \varepsilon _ { 0 } , \omega$ и $\theta$.

Определим проекции на координатные оси дипольного момента $\vec { p }$. В плоскости $x z$ вектор $\vec { l }$ описывает эллипс с полуосями $a _ { x } = l$ и $a _ { z } = l \cos \theta$, а в плоскости $x y$ - эллипс с полуосями $a _ { x } = l$ и $a _ { y } = l \sin \theta$. Отсюда получим:

$$
p _ { x } ( t ) = p _ { l } ( t ) \sin \theta \cos \omega t \quad p _ { y } ( t ) = p _ { l } ( t ) \sin \omega t \quad p _ { z } ( t ) = p _ { l } ( t ) \cos \theta \cos \omega t .
$$

Учтём, что $\left\langle \sin ^ { 2 } \omega t \right\rangle = \left\langle \cos ^ { 2 } \omega t \right\rangle = 1 / 2$ и $\langle \sin \omega t \cos \omega t \rangle = 0$. Отсюда для $\left\langle p _ { x } \right\rangle$ получим:

$$
\left\langle p _ { x } \right\rangle = 2 \pi \varepsilon _ { 0 } \sin \theta \cos \theta r E _ { 0 } l ^ { 2 } \left\langle \cos ^ { 2 } \omega t + 2 \pi \varepsilon _ { 0 } r R \omega \sin \omega t \cos \omega t \right\rangle ,
$$

откуда:

Ответ:

$$
\left\langle p _ { x } \right\rangle = \pi \varepsilon _ { 0 } \sin \theta \cos \theta r E _ { 0 } l ^ { 2 } .
$$

Аналогично для $\left\langle p _ { z } \right\rangle$ :

Ответ:

$$
\left\langle p _ { z } \right\rangle = \pi \varepsilon _ { 0 } \cos ^ { 2 } \theta r E _ { 0 } l ^ { 2 } .
$$

Для $\left\langle p _ { y } \right\rangle$ имеем:

$$
\left\langle p _ { x } \right\rangle = 2 \pi \varepsilon _ { 0 } \cos \theta r E _ { 0 } l ^ { 2 } \left\langle \sin \omega t \cos \omega t + 2 \pi \varepsilon _ { 0 } r R \omega \sin ^ { 2 } \omega t \right\rangle ,
$$

или же:

Ответ:

$$
\left\langle p _ { y } \right\rangle = 2 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } \cos \theta r ^ { 2 } E _ { 0 } l ^ { 2 } \omega R .
$$

С1 ${ } ^ { 0.50 }$ Найдите зависимость от времени $t$ угловой скорости стержня $\omega ( t )$, считая, что $\omega ( t ) \gg \omega _ { \text {min } }$ в любой момент времени, $\mathrm { a } t \gg 2 \pi / \omega _ { 0 }$. Ответ выразите через $\omega _ { 0 } , E _ { 0 } , l , r , R , \varepsilon _ { 0 }$ и $t$.

Поскольку $\omega \gg \omega _ { \text {min } }$, угловую скорость в течение одного периода можно считать постоянной и равной средней по периоду.
Движение гантели будет являться плоским, поскольку момент сил $\vec { M }$ в любой момент перпендикулярен плоскости, содержащей стержень и направление напряжённости электростатического поля $\vec { E } _ { 0 }$, а угол $\theta = 0$.
Из основного уравнения динамики вращательного движения относительно центра стержня получим:

$$
\left\langle \frac { d L _ { x } } { d t } \right\rangle = - \frac { m l ^ { 2 } } { 2 } \left\langle \frac { d \omega } { d t } \right\rangle = \frac { m l ^ { 2 } } { 2 } \frac { d \omega } { d t } = \left\langle M _ { x } \right\rangle = \left\langle p _ { y } \right\rangle E _ { 0 } = 2 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } l ^ { 2 } \omega R .
$$

Отсюда:

$$
\frac { d \omega } { \omega } = - \frac { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R d t } { m } .
$$

Интегрируя, получим:

Ответ:

$$
\omega ( t ) = \omega _ { 0 } \exp \left( - \frac { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R t } { m } \right)
$$


Стержень перестанет делать полные обороты, когда угловая скорость стержня $\omega$ уменьшится до $\omega _ { \text {min } }$. По порядку величины время $\tau$ можно оценить с помощью зависимости для $\omega ( t )$ из пункта C1.
Считая, что $\omega ( \tau ) = \omega _ { m i n }$, получим:

$$
\tau \approx \frac { m } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R } \ln \frac { \omega _ { 0 } } { \omega _ { \min } } ,
$$

или же:

Ответ:

$$
\tau \approx \frac { m } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R } \ln \left( \omega _ { 0 } \sqrt { \frac { m } { 4 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } } } \right) .
$$

D1 ${ } ^ { 0.50 }$ Получите точное выражение для момента импульса $\vec { L }$ гантели в режиме регулярно прецессии. Ответ выразите через $m , l , \vec { \omega } ^ { \prime }$ и $\vec { \Omega }$. Упростите ваш ответ с учётом $\Omega _ { z } \ll \omega ^ { \prime }$.

Введём декартову систему координат $x ^ { \prime } y ^ { \prime } z ^ { \prime }$ таким образом, что координатные оси $x ^ { \prime }$ и $y ^ { \prime }$ направлены перпендикулярно стержню, а ось $z ^ { \prime }$ направлена вдоль стержня.
Выбранные координатные оси являются главными осями инерции для гантели, где $I _ { x ^ { \prime } } = I _ { y ^ { \prime } } = m l ^ { 2 } / 2$, а $I _ { z ^ { \prime } } = 0$, поэтому момент импульса $\vec { L }$ гантели относительно её центра записывается следующим образом:

$$
\vec { L } = \frac { m l ^ { 2 } \left( \omega _ { x ^ { \prime } } \vec { e } _ { x ^ { \prime } } + \omega _ { y ^ { \prime } } \vec { e } _ { y ^ { \prime } } \right) } { 2 } = \frac { m l ^ { 2 } \vec { \omega } _ { \perp } } { 2 } .
$$

Здесь индекс ⟂ означает "перпендикулярно стержню".
Для $\vec { \omega } _ { \perp }$ с учётом того, что $\vec { \omega } ^ { \prime }$ перпендикулярна стержню, а угол $\theta =$ const, имеем:

$$
\vec { \omega } _ { \perp } = \vec { \omega } ^ { \prime } \left( 1 + \frac { \left( \vec { \omega } ^ { \prime } , \vec { \Omega } \right) } { \omega ^ { \prime 2 } } \right) .
$$

Таким образом:

Ответ:

$$
\vec { L } = \frac { m l ^ { 2 } \vec { \omega } ^ { \prime } } { 2 } \left( 1 + \frac { \left( \vec { \omega } ^ { \prime } , \vec { \Omega } \right) } { \omega ^ { \prime 2 } } \right) .
$$

С учётом $\Omega _ { z } \ll \omega ^ { \prime }$ имеем:

Ответ:

$$
\vec { L } \approx \frac { m l ^ { 2 } \vec { \omega } ^ { \prime } } { 2 } .
$$

D2 ${ } ^ { 1.50 }$ Покажите, что возможен такой режим движения гантели, при котором она в среднем испытывает регулярную прецессию вокруг оси $z$. Приведите все соответствующие уравнения движения, на основании которых вы производите доказательство.
Определите для данного режима движения среднюю угловую скорость прецессии плоскости движения стержня $\Omega _ { z }$. Ответ выразите через $E _ { 0 } , \varepsilon _ { 0 } , m , l , r , R , \omega ^ { \prime }$ и $\theta$. Также выразите ответ через $\omega _ { \text {min } } , \omega ^ { \prime }$ и $\theta$ и убедитесь, что $\Omega _ { z } \ll \omega ^ { \prime }$.

Если в процессе движения гантели угол $\theta$ в среднем остаётся постоянным, то вектор угловой скорости вращения гантели в каждый момент можно считать направленным в плоскости $x z$. Тогда и момент импульса $\vec { L }$ гантели относительно центра стержня может быть направлен только в плоскости $x z$.
Компоненты момента сил, действующих на гантель со стороны электростатического поля, составляют:

$$
M _ { x } = p _ { y } E _ { 0 } \quad M _ { y } = - p _ { x } E _ { 0 } \quad M _ { z } = 0 ,
$$

поскольку $\vec { E } _ { 0 } \| \vec { e } _ { z }$.
Проводя усреднение по времени, получим:

$$
\left\langle M _ { x } \right\rangle = \left\langle p _ { y } \right\rangle E _ { 0 } = 0 ,
$$

поскольку для металлического стержня $R = 0$, а значит и $\left\langle p _ { y } \right\rangle = 0$.
Для $\left\langle M _ { y } \right\rangle$ имеем:

$$
\left\langle M _ { y } \right\rangle = - \left\langle p _ { x } \right\rangle E _ { 0 } = - \pi \varepsilon _ { 0 } r \sin \theta \cos \theta E _ { 0 } ^ { 2 } l ^ { 2 } .
$$

Таким образом, в любой момент времени $\langle \vec { M } \rangle \perp \vec { L }$, откуда следует, что величина момента импульса $L$ будет оставаться постоянной.
Также, поскольку $M _ { z } = 0$ в любой момент времени, проекция $L _ { z }$ момента импульса на ось $z$ также остаётся постоянной. Из условий $L =$ const и $L _ { z } =$ const в сочетании с тем, что $L _ { y } = 0$, следует, что $L _ { x } =$ const.
Запишем основное уравнение динамики вращательного движения для стержня в проекции на ось $y$ :


$$
\left\langle \left( \frac { d \vec { L } } { d t } \right) _ { y } \right\rangle = \Omega _ { z } L _ { x } = \left\langle M _ { y } \right\rangle = - \pi \varepsilon _ { 0 } r \sin \theta \cos \theta E _ { 0 } ^ { 2 } l ^ { 2 }
$$

Поскольку величины $\theta$ и $L _ { x }$ являются постоянными - величина $\Omega _ { z }$ также является постоянной.
Определим проекцию момента импульса $L _ { x }$ на ось $x$ :

$$
L _ { x } = \frac { m l ^ { 2 } \omega _ { x } ^ { \prime } } { 2 } = - \frac { m l ^ { 2 } \omega ^ { \prime } \cos \theta } { 2 } .
$$

Подставляя в основное уравнение динамики вращательного движения в проекции на ось $y$, получим:

$$
- \frac { m l ^ { 2 } \Omega _ { z } \omega ^ { \prime } \cos \theta } { 2 } = - \pi \varepsilon _ { 0 } r \sin \theta \cos \theta E _ { 0 } ^ { 2 } l ^ { 2 }
$$

Таким образом:

Ответ:

$$
\Omega _ { z } = \frac { 2 \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } \sin \theta } { m \omega ^ { \prime } } = \frac { \omega _ { \min } ^ { 2 } \sin \theta } { 2 \omega ^ { \prime } } .
$$

Ответ: Поскольку $\omega _ { \text {min } } \ll \omega ^ { \prime }$, условие $\Omega _ { z } \ll \omega ^ { \prime }$ также является выполненным.

D3 ${ } ^ { 0.50 }$ Чему равна установившаяся угловая скорость вращения стержня $\omega _ { \infty }$ спустя большой промежуток времени? Ответ выразите через $\omega _ { 0 }$ и $\theta _ { 0 }$.

Из-за наличия в системе диссипации энергии гантель спустя большое время будет двигаться таким образом, чтобы в стержне перестал течь электрический ток. Это возможно, если гантель будет двигаться в положении, соответствующем $\theta = \pi / 2$.
При этом в переходном процессе компонента момента импульса $L _ { z }$ остаётся постоянной. В момент запуска гантели имеем:

$$
L _ { z } = \frac { m l ^ { 2 } \omega _ { 0 } \sin \theta _ { 0 } } { 2 } .
$$

Поскольку в установившемся режиме $\theta = \pi / 2 =$ const, имеем:

$$
L _ { z } = \frac { m l ^ { 2 } \omega _ { \infty } } { 2 } .
$$

Таким образом:

Ответ:

$$
\omega _ { \infty } = \omega _ { 0 } \sin \theta _ { 0 } .
$$

D4 ${ } ^ { 0.50 }$ Получите зависимость средней угловой прецессии $\Omega _ { z }$ от угла $\theta$. Ответ выразите через $\omega _ { \text {min } } , \omega _ { 0 } , \theta _ { 0 }$ и $\theta$.

При наличии сопротивления $R$ стержня средний за один оборот момент сил $\langle \vec { M } \rangle$ имеет следующие компоненты:

$$
\left\langle M _ { x } \right\rangle = \left\langle p _ { y } \right\rangle E _ { 0 } = 2 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } \cos \theta r ^ { 2 } E _ { 0 } ^ { 2 } l ^ { 2 } \omega R \quad \left\langle M _ { y } \right\rangle = - \pi \varepsilon _ { 0 } \cos ^ { 2 } \theta r E _ { 0 } ^ { 2 } l ^ { 2 } \quad \left\langle M _ { z } \right\rangle = 0 .
$$

Запишем уравнение динамики вращательного движения в проекции на ось $y$ :

$$
L _ { x } \Omega _ { z } + \frac { m l ^ { 2 } \ddot { \theta } } { 2 } = \left\langle M _ { y } \right\rangle .
$$

Из приближений, описанных в условии задачи, следует, что величина $\ddot { \theta } \approx 0$, поскольку в течение одного периода вращения стержня в своей плоскости величина $\dot { \theta }$ может считаться постоянной.
Таким образом:

$$
\Omega _ { z } = \frac { \left\langle M _ { y } \right\rangle } { L _ { x } } = \frac { \omega _ { \min } ^ { 2 } \sin \theta } { 2 \omega ^ { \prime } }
$$

В процессе движения величина $\omega _ { z } ^ { \prime }$ остаётся постоянной и равной:

$$
\omega _ { z } ^ { \prime } = \omega \sin \theta = \omega _ { 0 } \sin \theta _ { 0 } .
$$

Таким образом:

$$
\omega ^ { \prime } ( \theta ) = \frac { \omega _ { 0 } \sin \theta _ { 0 } } { \sin \theta } ,
$$

откуда:


Ответ:

$$
\Omega _ { z } ( \theta ) = \frac { \omega _ { m i n } ^ { 2 } \sin ^ { 2 } \theta } { 2 \omega _ { 0 } \sin \theta _ { 0 } }
$$

D5 ${ } ^ { 1.00 }$ Получите зависимость от времени $t$ величины $\theta$ при $t \gg 2 \pi / \omega _ { 0 }$. Ответ выразите через $\theta _ { 0 } , E _ { 0 } , m , r , R , \varepsilon _ { 0 }$ и $t$.

Запишем уравнение динамики вращательного движения в проекции на ось $x$ :

$$
\left\langle M _ { x } \right\rangle = \dot { L } _ { x } - \Omega _ { z } L _ { y } .
$$

Поскольку величина $\Omega _ { z }$ на два порядка меньше величины $\omega$ - вклад второго слагаемого является пренебрежимо малым. Таким образом:

$$
\left\langle M _ { x } \right\rangle = 2 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } l ^ { 2 } R \omega \cos \theta = - 2 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } l ^ { 2 } R \omega _ { x } = \frac { m l ^ { 2 } \dot { \omega } _ { x } } { 2 } .
$$

Интегрируя полученное выражение, получим:

$$
\omega _ { x } ( t ) = - \omega _ { 0 } \cos \theta _ { 0 } \exp \left( - \frac { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R t } { m } \right)
$$

При этом:

$$
\omega _ { x } = - \omega ^ { \prime } \cos \theta = - \frac { \omega _ { 0 } \sin \theta _ { 0 } } { \operatorname { tg } \theta } ,
$$

откуда после подстановки $\omega _ { x } ( t )$ имеем:

$$
\operatorname { tg } \theta = \operatorname { tg } \theta _ { 0 } \exp \left( \frac { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R t } { m } \right) .
$$

Окончательно для $\theta ( t )$ находим:

Ответ:

$$
\theta ( t ) = \operatorname { arctg } \left( \operatorname { tg } \theta _ { 0 } \exp \left( \frac { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R t } { m } \right) \right) .
$$

D6 ${ } ^ { 0.40 }$ Определите максимальное значение величины $\dot { \theta }$. Ответ выразите через $\theta _ { 0 } , E _ { 0 } , m , r , R$ и $\varepsilon _ { 0 }$. Убедитесь, что $\dot { \theta } _ { \text {тах } } \ll \omega _ { 0 }$.

Представим $\operatorname { tg } \theta ( t )$ в следующей форме:

$$
\operatorname { tg } \theta ( t ) = \operatorname { tg } \theta _ { 0 } e ^ { A t } \quad A = \frac { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R } { m } .
$$

Дифференцируя по времени:

$$
\dot { \theta } = \frac { A \operatorname { tg } \theta _ { 0 } e ^ { A t } } { 1 + \operatorname { tg } ^ { 2 } \theta _ { 0 } e ^ { 2 A t } } .
$$

Максимум данного выражения достигается при $\operatorname { tg } \theta _ { 0 } e ^ { A t } = 1$. Однако, если $\theta _ { 0 } > \pi / 4$, условию максимума соответствует $t < 0$, что невозможно. Тогда максимальная величина $\dot { \theta }$ достигается при $\theta = \theta _ { 0 }$.
Таким образом:

Ответ:

$$
\dot { \theta } _ { \max } = \left\{ \begin{array} { l }
\frac { 2 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R } { m } \quad \text { при } \quad \theta _ { 0 } \leq \pi / 4 \\
\frac { 2 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R \sin 2 \theta _ { 0 } } { m } \quad \text { при } \quad \theta _ { 0 } > \pi / 4
\end{array} \right.
$$

Ответ: Величина $\dot { \theta } _ { \text {max } } \sim r ^ { 2 } R$, т.е. является крайне малой по сравнению с $\omega$.


Перепишем выражение для $\Omega _ { z } ( \theta )$ :

$$
\Omega _ { z } ( \theta ) = \frac { \omega _ { \min } ^ { 2 } \operatorname { tg } ^ { 2 } \theta } { 2 \omega _ { 0 } \sin \theta _ { 0 } \left( 1 + \operatorname { tg } ^ { 2 } \theta \right) }
$$

Подставляя зависимость $\operatorname { tg } \theta ( t )$, находим:

Ответ:

$$
\Omega _ { z } ( t ) = \frac { \pi \varepsilon _ { 0 } r E _ { 0 } ^ { 2 } \sin 2 \theta _ { 0 } } { m \omega _ { 0 } \left( \operatorname { tg } ^ { 2 } \theta _ { 0 } + \exp \left( - \frac { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 2 } E _ { 0 } ^ { 2 } R t } { m } \right) \right) }
$$
