---
id: solution-ocr-rupho-x-2018-t2-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2018/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Полная сила, с которой воздух действует на парус, направлена перпендикулярно его плоскости. Для неё имеем:

$$
F = \frac { d m } { d t } u _ { n } = \rho S _ { n } u \cdot u _ { n }
$$

где $d m / d t$ - масса воздуха, налетающая на парус в единицу времени, $\rho$ - плотность воздуха, $S _ { n }$ - площадь поперечного сечения потока воздуха, попадающего на парус, а $u _ { n }$ - компонента скорости воздуха, перпендикулярная поверхности паруса.
Пусть $S$ - площадь паруса, а $u$ - скорость ветра. Тогда:

$$
S _ { n } = S \cos \beta \quad u _ { n } = u \cos \beta
$$

откуда:

$$
F = \rho S u ^ { 2 } \cos ^ { 2 } \beta
$$

Запишем условие равновесия для парусника:

$$
F _ { \tau } = k v
$$

где $v$ - скорость движения парусника, а $k$ - коэффициент пропорциональности между силой сопротивления воды и скоростью парусника.
Для $F _ { \tau }$ имеем:

$$
F _ { \tau } = F \cos ( \pi / 2 - \beta + \alpha ) = F \sin ( \beta - \alpha )
$$

Таким образом:

$$
\rho S u ^ { 2 } \cos ^ { 2 } \beta \sin ( \beta - \alpha ) = k v
$$

Для дрейфовой компоненты скорости парусника имеем:

$$
v _ { \text {д } } = v \sin \alpha = \frac { \rho S u ^ { 2 } } { k } \cos ^ { 2 } \beta \sin ( \beta - \alpha ) \sin \alpha
$$

Чтобы двигаться против ветра зигзагами, необходимо периодически изменять углы $\alpha$ и $\beta$ на противоположные, что сохранит значение полученной функции. Тогда для решения задачи необходимо исследовать на экстремум функцию $f ( \alpha , \beta )$, равную:

$$
f ( \alpha , \beta ) = \cos ^ { 2 } \beta \sin ( \beta - \alpha ) \sin \alpha
$$

Воспользуемся тригонометрическим тождеством:

$$
\sin x \sin y = \frac { \cos ( x - y ) - \cos ( x + y ) } { 2 }
$$

Тогда для $f ( \alpha , \beta )$ имеем:

$$
f ( \alpha , \beta ) = \frac { \cos ^ { 2 } \beta ( \cos ( \beta - 2 \alpha ) - \cos \beta ) } { 2 }
$$

При любом фиксированном значении $\beta$ максимальное значение функции достигается при $\alpha = \beta / 2$, поскольку $\cos ( \beta - 2 \alpha ) \leq 1$. Тогда задача сводится к исследованию функции одной переменной $x = \beta$ :

$$
f ( x ) = \frac { x ^ { 2 } - x ^ { 3 } } { 2 }
$$

Продифференцируем $f ( x )$ :

$$
\frac { d f } { d x } = x - \frac { 3 x ^ { 2 } } { 2 } = 0 \Rightarrow x = 0 , \frac { 2 } { 3 }
$$

Значение $x = 0$ соответствует покою парусника, а $x = 2 / 3$ - движению с максимальной дрейфовой скоростью. Таким образом:

Ответ:

$$
\alpha = \frac { \arccos ( 2 / 3 ) } { 2 } \approx 24.1 ^ { \circ } \quad \beta = \arccos ( 2 / 3 ) \approx 48.2 ^ { \circ }
$$

Также углы парусника, соответствующие максимальной скорости дрейфа, могут быть найдены из условий:

$$
\frac { \partial f ( \alpha , \beta ) } { \partial \alpha } = 0 \quad \frac { \partial f ( \alpha , \beta ) } { \partial \beta } = 0
$$

Рассмотрим дифференцирование по $\alpha$ :

$$
\frac { \partial f ( \alpha , \beta ) } { \partial \alpha } = \cos ^ { 2 } \beta ( \cos \alpha \sin ( \beta - \alpha ) - \sin \alpha \cos ( \beta - \alpha ) ) = 0 \Rightarrow \operatorname { tg } \alpha = \operatorname { tg } ( \beta - \alpha ) \Rightarrow \beta = 2 \alpha
$$

Рассмотрим дифференцирование по $\beta$ :

$$
\frac { \partial f ( \alpha , \beta ) } { \partial \beta } = - \sin 2 \beta \sin ( \beta - \alpha ) + \cos ^ { 2 } \beta \cos ( \beta - \alpha ) = 0 \Rightarrow \operatorname { tg } \beta \operatorname { tg } ( \beta - \alpha ) = \frac { 1 } { 2 }
$$

Подставляя $\alpha = \beta / 2$ :


$$
\operatorname { tg } \beta \operatorname { tg } ( \beta / 2 ) = \frac { 1 } { 2 } \Rightarrow 4 \sin ^ { 2 } ( \beta / 2 ) \cos ( \beta / 2 ) = \cos \beta \cos ( \beta / 2 ) \Rightarrow 2 - 2 \cos \beta = \cos \beta
$$

Таким образом:

Ответ:

$$
\alpha = \frac { \arccos ( 2 / 3 ) } { 2 } \approx 24.1 ^ { \circ } \quad \beta = \arccos ( 2 / 3 ) \approx 48.2 ^ { \circ }
$$
