---
id: solution-ocr-rupho-y-2020-t3-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2020/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.50 }$ Система имеет одну степень свободы, угол $\varphi$, и положение маятника можно описать функцией этого угла. Выразите декартовы координаты тела $x ( t )$ и $y ( t )$ как функции угла $\varphi ( t )$ и времени.

Ответ:

$$
\begin{gathered}
x ( t ) = l \sin \varphi \\
y ( t ) = a \cos \omega t - l \cos \varphi
\end{gathered}
$$

А2 ${ } ^ { 0.50 }$ Найдите компоненты скорости $v _ { x }$ и $v _ { y }$ тела. Ответ выразите через угловую скорость $\frac { d \varphi } { d t }$ и время.

Ответ:

$$
\begin{gathered}
v _ { x } = \frac { d x } { d t } = l \cos \varphi \frac { d \varphi } { d t } \\
v _ { y } = \frac { d y } { d t } = l \sin \varphi \frac { d \varphi } { d t } - \omega a \sin \omega t
\end{gathered}
$$

A3 ${ } ^ { 0.50 }$ Найдите кинетическую и энергию тела. Ответ выразите через угол $\varphi$, угловую скорость $\frac { d \varphi } { d t }$ и время.

$$
E _ { k } = \frac { m } { 2 } \left( \left( \frac { d x } { d t } \right) ^ { 2 } + \left( \frac { d y } { d t } \right) ^ { 2 } \right)
$$

Ответ:

$$
E _ { k } = \frac { m } { 2 } \left( \left( l \frac { d \varphi } { d t } \right) ^ { 2 } + ( \omega a \sin \omega t ) ^ { 2 } - 2 \omega a l \sin \omega t \sin \varphi \frac { d \varphi } { d t } \right)
$$

А4 ${ } ^ { 1.00 }$ Получите выражение для мгновенной мощности $N$ силы, прикладываемой к точке подвеса маятника. Ответ выразите через $m , g , l , a , \omega , \varphi , \frac { d \varphi } { d t } , \frac { d ^ { 2 } \varphi } { d t ^ { 2 } }$ и время.

Обозначим точку подвеса маятника за $o$. Тогда выражение для мощности принимает вид

$$
N = \vec { F } _ { o } \vec { v } _ { o } = F _ { o y } \frac { d y _ { o } } { d t }
$$

Из закона изменения импульса для тела

$$
\begin{gathered}
F _ { o y } = m g + m \frac { d ^ { 2 } y } { d t ^ { 2 } } \\
\frac { d y _ { o } } { d t } = - \omega a \sin \omega t \\
\frac { d ^ { 2 } y } { d t ^ { 2 } } = - \omega ^ { 2 } a \cos \omega t + l \left( \sin \varphi \frac { d ^ { 2 } \varphi } { d t ^ { 2 } } + \cos \varphi \left( \frac { d \varphi } { d t } \right) ^ { 2 } \right)
\end{gathered}
$$

Окончательный ответ

Ответ:

$$
N = - m \omega a \sin \omega t \left( g - \omega ^ { 2 } a \cos \omega t + l \left( \sin \varphi \frac { d ^ { 2 } \varphi } { d t ^ { 2 } } + \cos \varphi \left( \frac { d \varphi } { d t } \right) ^ { 2 } \right) \right)
$$

$$
\frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = - \frac { 1 } { l } \left( g - a \omega ^ { 2 } \cos \omega t \right) \sin \varphi
$$


Наиболее простой способ показать справедливость данного соотношения связан с переходом в неинерциальную систему отсчёта, связанную с точкой подвеса . В ней на тело помимо силы реакции стержня и силы тяжести действует вертикальная сила инерции, равная $F _ { \text {и } y } = - m \frac { d ^ { 2 } y _ { 0 } } { d t ^ { 2 } } = m \omega ^ { 2 } a \cos \omega t$.

Из закона изменения момента импульса относительно точки подвеса имеем

$$
m l ^ { 2 } \frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = \left( F _ { \text {иу } } - m g \right) l \sin \varphi
$$

Из записанных уравнений получается требуемое соотношение

$$
\frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = - \frac { 1 } { l } \left( g - a \omega ^ { 2 } \cos \omega t \right) \sin \varphi
$$

Ответить на вопрос можно и более формально,продифференцировав закон изменения механической энергии тела в неподвижной системе отсчёта

$$
\begin{gathered}
N = \frac { d E } { d t } = m g l \sin \varphi \frac { d \varphi } { d t } + m \frac { d y } { d t } \frac { d ^ { 2 } y } { d t ^ { 2 } } + m \frac { d x } { d t } \frac { d ^ { 2 } x } { d t ^ { 2 } } \\
\frac { d ^ { 2 } x } { d t ^ { 2 } } = l \left( \cos \varphi \frac { d ^ { 2 } \varphi } { d t ^ { 2 } } - \sin \varphi \left( \frac { d \varphi } { d t } \right) ^ { 2 } \right)
\end{gathered}
$$

После постановки всех величин, полученных ранее, получаем требуемое соотношение.

В $1 ^ { 1.00 }$ Покажите, что выражение для быстрой компоненты $- \beta = - \frac { a } { l } \sin \gamma \cos \omega t$ (для произвольного значения $\gamma$ ) является приближенным решением уравнения движения из пункта А5 при указанных выше условиях. Рассмотрите режим колебаний, в котором $g$ пренебрежимо мал по сравнению с $a \omega ^ { 2 }$, т.е. $a \omega ^ { 2 } \gg g$.

Поскольку $\beta$ - быстрая компонента

$$
\begin{gathered}
\frac { d ^ { 2 } \beta } { d t ^ { 2 } } = \frac { d ^ { 2 } \varphi } { d t ^ { 2 } } \\
\frac { d ^ { 2 } \beta } { d t ^ { 2 } } = - \frac { 1 } { l } \left( g - a \omega ^ { 2 } \cos \omega t \right) \sin ( \gamma + \beta )
\end{gathered}
$$

Поскольку $\beta \ll \gamma$ и $g \ll a \omega ^ { 2 }$, уравнение приобретает следующий вид:

$$
\frac { d ^ { 2 } \beta } { d t ^ { 2 } } = \frac { \omega ^ { 2 } a } { l } \sin \gamma \cos \omega t = - \omega ^ { 2 } A \cos ( \omega t )
$$

где

$$
A = - \frac { a } { l } \sin \gamma
$$

Из этого выражения для второй производной $\frac { d ^ { 2 } \beta } { d t ^ { 2 } }$ интегрированием получаем выражение для $\beta$ :

$$
\beta ( t ) = A \cos ( \omega t ) = - \frac { a } { l } \sin \gamma \cos \omega t
$$

В2 ${ } ^ { 2.50 }$ Комбинируя уравнение движения из пункта А5 с разложением $\varphi = \gamma + \beta$ и с выражением из предыдущего пункта, найдите выражение для $\frac { d ^ { 2 } \gamma } { d t ^ { 2 } }$, которое описывает динамику медленной компоненты $\gamma$ усредняя по большому количеству быстрых колебаний с частотой $\omega$, пренебрегая только членами порядка $a ^ { n }$, где $n > 2$. Выразите $\frac { d ^ { 2 } \gamma } { d t ^ { 2 } }$ через $g , a , \omega , l$ и $\gamma$. Упростите окончательное выражение, считая $l \omega ^ { 2 } \gg a \omega ^ { 2 } \gg g$.

Для усреднения по большому числу быстрых колебаний

$$
\begin{gathered}
\frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = \frac { d ^ { 2 } \gamma } { d t ^ { 2 } } \\
\frac { d ^ { 2 } \gamma } { d t ^ { 2 } } = - \frac { 1 } { l t } \int _ { 0 } ^ { t } \left( g - a \omega ^ { 2 } \cos \omega t \right) \sin \varphi ( \sin \gamma \cos \beta + \cos \gamma \sin \beta ) d t
\end{gathered}
$$

Для пренебрежения всеми членами порядка выше $a ^ { 2 }$ достаточно следующих разложений

$$
\sin \beta = \beta \text { и } \cos \beta = 1 - \frac { \beta ^ { 2 } } { 2 }
$$

Выражение после разложений и раскрытия скобок принимает вид


$$
\frac { d ^ { 2 } \gamma } { d t ^ { 2 } } = - \frac { 1 } { l t } \int _ { 0 } ^ { t } \left( g \sin \gamma \left( 1 - \frac { a ^ { 2 } \sin \gamma } { l ^ { 2 } } \cos ^ { 2 } \omega t \right) + a \omega ^ { 2 } \left( \frac { a ^ { 2 } \sin ^ { 2 } \gamma } { 2 l ^ { 2 } } \cos ^ { 3 } \omega t + \frac { a \sin 2 \gamma } { 2 l } \cos ^ { 2 } \omega t \right) d t \right.
$$

При интегрировании учтём малось $\frac { a ^ { 2 } } { l ^ { 2 } }$, а также что при большом времени усреднения средние значения тригонометрических функций в нечётных степенях равны нулю,это позволяет сразу отбросить большинство слагаемых.

$$
\left. \frac { d ^ { 2 } \gamma } { d t ^ { 2 } } = - \frac { 1 } { l t } \int _ { 0 } ^ { t } \left( g \sin \gamma + \frac { a ^ { 2 } \omega ^ { 2 } \sin 2 \gamma } { 4 l } ( 1 + \cos 2 \omega t ) \right) \right) d t
$$

Получаем ответ

Ответ:

$$
\frac { d ^ { 2 } \gamma } { d t ^ { 2 } } = - \frac { 1 } { l } \left( g \sin \gamma + \frac { a ^ { 2 } \omega ^ { 2 } \sin 2 \gamma } { 4 l } \right)
$$

Вз ${ } ^ { 0.70 }$ Получите выражение для усредненного по времени момента всех сил $M _ { O }$, действующих на маятник относительно точки подвеса. Ответ выразите через $m , g , l , a , \omega$ и $\gamma$.

Возвращаясь к пункту A5

$$
m l ^ { 2 } \frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = M
$$

Учитывая,что при усреднении за большой промежуток времени

$$
\frac { d ^ { 2 } \varphi } { d t ^ { 2 } } = \frac { d ^ { 2 } \gamma } { d t ^ { 2 } }
$$

среднее по времени значение момента всех сил

Ответ:

$$
M _ { o } = - m l \left( g \sin \gamma + \frac { a ^ { 2 } \omega ^ { 2 } \sin 2 \gamma } { 4 l } \right)
$$

В4 ${ } ^ { 0.70 }$ Назовем эффективным потенциалом скалярную функцию $V ( \gamma )$, производная которой по углу $\gamma$ равняется усредненному моменту сил из предыдущего пункта, взятому со знаком минус. Получите выражение для эффективного потенциала $V ( \gamma )$ с точностью до произвольной постоянной. Ответ выразите через $m , g , l , a , \omega \backsim \gamma$.

Проинтегрируем средний момент $M _ { o }$ по углу $\gamma$

$$
V ( \gamma ) = m l \int \left( g \sin \gamma + \frac { a ^ { 2 } \omega ^ { 2 } \sin 2 \gamma } { 4 l } \right) d \gamma
$$

Ответ:

$$
V ( \gamma ) = - m g l \cos \gamma - \frac { m a ^ { 2 } \omega ^ { 2 } \cos ^ { 2 } \gamma } { 4 } + C
$$

В5 ${ } ^ { 1.00 }$ Покажите, что для $( a \omega ) ^ { 2 } > 2 g l$ этот потенциал имеет несколько минимумов: минимум при $\gamma = 0$, который появляется в случае свободных колебаний маятника; дополнительный минимум $\gamma = \pi$. Покажите, что оба положения удовлетворяют условиям устойчивого равновесия.

Полученная зависимость представляет собой параболу относительно $\cos \gamma$,максимум которой достигается при

$$
\cos \gamma = - \frac { b } { 2 a } = - \frac { 2 g l } { ( a \omega ) ^ { 2 } }
$$

Существование двух корней возможно лишь в случае,если $\cos \gamma > - 1$ в вершине параболы,откуда сразу вытекает требуемое неравенство

$$
( a \omega ) ^ { 2 } > 2 g l
$$

Условиями устойчивого равновесия являются

$$
\text { 1) } \frac { d V } { d \gamma } = M _ { o } = 0
$$


2) $\frac { d ^ { 2 } V } { d \gamma ^ { 2 } } > 0$

Найдём первую производную

$$
\frac { d V } { d \gamma } = m l \left( g \sin \gamma + \frac { a ^ { 2 } \omega ^ { 2 } \sin 2 \gamma } { 4 l } \right)
$$

При $\gamma = 0 ; \pi \frac { d V } { d \gamma }$ равна нулю

Найдём вторую производную

$$
\frac { d ^ { 2 } V } { d \gamma ^ { 2 } } = m l \left( g \cos \gamma + \frac { a ^ { 2 } \omega ^ { 2 } \cos 2 \gamma } { 2 l } \right)
$$

При $\gamma = 0$

$$
\frac { d ^ { 2 } V } { d \gamma ^ { 2 } } = m l \left( g + \frac { a ^ { 2 } \omega ^ { 2 } } { 2 l } \right)
$$

При $\gamma = \pi$

$$
\frac { d ^ { 2 } V } { d \gamma ^ { 2 } } = m l \left( - g + \frac { a ^ { 2 } \omega ^ { 2 } } { 2 l } \right)
$$

Последнее выражение положительно при условии,которое мы доказали в начале пункта. Таким образом,оба положения удовлетворяют условиям устойчивого равновесия.

B6 ${ } ^ { 0.60 }$ Найдите периоды колебаний $T _ { 0 }$ и $T _ { \pi }$ величины $\gamma$, соответствующие положениям из пункта B5.

Уравнение колебаний для $\gamma = 0$

$$
\frac { d ^ { 2 } \gamma } { d t ^ { 2 } } = - \frac { \gamma } { l } \left( g + \frac { a ^ { 2 } \omega ^ { 2 } } { 2 l } \right)
$$

Уравнение колебаний для $\gamma = \pi$

$$
\frac { d ^ { 2 } \gamma } { d t ^ { 2 } } = - \frac { ( \gamma - \pi ) } { l } \left( - g + \frac { a ^ { 2 } \omega ^ { 2 } } { 2 l } \right)
$$

Ответ:

$$
\begin{aligned}
T _ { o } & = \frac { 2 \pi } { \sqrt { \frac { g } { l } + \frac { a ^ { 2 } \omega ^ { 2 } } { 2 l ^ { 2 } } } } \\
T _ { \pi } & = \frac { 2 \pi } { \sqrt { - \frac { g } { l } + \frac { a ^ { 2 } \omega ^ { 2 } } { 2 l ^ { 2 } } } }
\end{aligned}
$$
