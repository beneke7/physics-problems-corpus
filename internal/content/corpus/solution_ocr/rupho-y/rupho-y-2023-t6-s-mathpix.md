---
id: solution-ocr-rupho-y-2023-t6-s
source: rupho-y
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-y/2023/T6_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
А1 ${ } ^ { 0.20 }$ Рассмотрим случай, когда лучи 1 и 2 параллельны оси $z$, а зеркало МЗ параллельно плоскости $x y$. Найдите разность оптических путей $\Delta _ { 12 }$ между лучами 1 и 2 , если они оба падают на экран в точке $O$.

На горизонтальных участках разность путей составляет $L _ { 1 } - L _ { 2 }$, ещё первый луч дважды проходит расстояние $L _ { 3 }$. Таким образом, суммарная разность:

$$
\Delta _ { 12 } = L _ { 1 } + 2 L _ { 3 } - L _ { 2 }
$$

Ответ:

$$
\Delta _ { 12 } = L _ { 1 } + 2 L _ { 3 } - L _ { 2 }
$$

А2 ${ } ^ { 1.40 }$ Рассмотрим случай, когда зеркало МЗ отклоняют на угол $\alpha$ от плоскости $x y$ путём вращения вокруг оси $x$ (см. рис. 1). Если луч 1' падает на экран в точке $O$, найдите разность оптических путей $\Delta _ { 1 ^ { \prime } 2 }$ между лучами 1' и 2. Покажите, что в первом приближении разность хода не зависит от $\alpha$ и упростите ваш ответ при $\alpha \ll 1$.

Заметим, что треугольник полученный из путей лучей 1 и 1' от зеркала M3 до точки $O$ равнобедренный. Ещё изменения горизонтального и вертикального путей из-за изменения точки падения луча компенсируют друг друга. Единственный параметр влияющий на путь, пройденный лучом 1 , это координата $z$ точки попадания на зеркало МЗ: она влияет на расстояние пройденное от НМ до МЗ. А оптический путь луча 2 никак не изменяется. Получаем:

$$
\Delta _ { 1 ^ { \prime } 2 } = \Delta _ { 12 } - \left( 2 \left( L _ { 3 } + L _ { 4 } \right) \sin \alpha \right) \cdot \sin \alpha = \Delta _ { 12 } - 2 \left( L _ { 3 } + L _ { 4 } \right) \sin ^ { 2 } \alpha
$$

Подставляя результат прошлого пункта:

$$
\Delta _ { 12 ^ { \prime } } = L _ { 1 } + 2 L _ { 3 } - L _ { 2 } - 2 \left( L _ { 3 } + L _ { 4 } \right) \sin ^ { 2 } \alpha \approx L _ { 1 } + 2 L _ { 3 } - L _ { 2 } - 2 \left( L _ { 3 } + L _ { 4 } \right) \alpha ^ { 2 }
$$

Ответ:

$$
\Delta _ { 1 ^ { \prime } 2 } = L _ { 1 } + 2 L _ { 3 } - L _ { 2 } - \left( L _ { 3 } + L _ { 4 } \right) \frac { \sin \alpha \sin 2 \alpha } { \cos \alpha } = L _ { 1 } + 2 L _ { 3 } - L _ { 2 } - 2 \left( L _ { 3 } + L _ { 4 } \right) \alpha ^ { 2 }
$$

В1 ${ } ^ { 0.80 }$ Пусть лучи 1 и 2 падают в фиксированные точки зеркал M1 и M2 соответственно. Покажите в листах решений, что в первом приближении оптические пути лучей 1 и 2 от точек отражения от зеркал M1 и M2 соответственно до экрана не зависят от углов $\theta$ и $\alpha$.

В2 ${ } ^ { 0.80 }$ Пусть углы $\alpha$ и $\theta$ зафиксированы, а положения точек падения лучей 1 и 2 на зеркала M1 и M2 соответственно могут изменяться. Покажите в листах решений, что оптические пути лучей 1 и 2 от пунктирной линии, соответствующей координате $z _ { п } = L _ { 3 } + L _ { 4 }$ (подразумеваются точки пересечения пунктирной линии с траекториями лучей 1 и 2 до падений на зеркала М1 и М2 соответственно), до экрана в первом приближении не зависят от углов $\theta$ и $\alpha$.

В3 ${ } ^ { 1.00 }$ Выразите $b$ и $\delta _ { O }$ через $\lambda , L _ { 1 } , L _ { 2 } , L _ { 3 } , L _ { 4 }$.
$\delta _ { O }$ можно найти, используя прошлую часть задачи, так как это значение разности фаз для $\theta = 0$. Заметим, что разность фаз возникает не только из-за разности оптических путей, но и из-за отражений: луч 1 отражается на один раз больше, поэтому он дополнительно смещён на $\pi$.

$$
\delta _ { O } = \frac { 2 \pi } { \lambda } \left( L _ { 1 } + 2 L _ { 3 } - L _ { 2 } \right) + \pi
$$

Можно заметить, что в силу утверждений, доказанных в В1 и В2 при изменении угла $\theta$ разность фаз возникает только из-за изменения путей до пересечения с пунктирной линией $z _ { п } = L _ { 3 } + L _ { 4 }$, то есть:

$$
\begin{gathered}
\frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } \right) \theta = \frac { 2 \pi } { \lambda } b \theta \\
b = L _ { 1 } + L _ { 2 }
\end{gathered}
$$

Ответ:

$$
\begin{gathered}
b = L _ { 1 } + L _ { 2 } \\
\delta _ { O } = \frac { 2 \pi } { \lambda } \left[ L _ { 1 } + 2 L _ { 3 } - L _ { 2 } \right] + \pi
\end{gathered}
$$

$$
\delta _ { y } = \delta _ { O } - \frac { 2 \pi } { \lambda } \cdot 2 \alpha y
$$


Примечание: Далее во всех пунктах задачи можно пользоваться утверждениями пунктов В1-В4, даже если они не доказаны.

Рассмотрим два луча 1, которые приходят в точки на экране, расположенные на расстоянии $y$. В силу малости $\alpha$ расстояние между точками отражения этих лучей от МЗ тоже равно $y$. Заметим, что разность оптических путей между ними возникает только из-за из-за разных координат $z$ точек отражения от МЗ: сокращается путь от НМ до М3 и от М3 до экрана.

$$
\begin{gathered}
\Delta L = - 2 y \alpha \\
\delta _ { y } = \delta _ { O } - \frac { 2 \pi } { \lambda } \cdot 2 \alpha y
\end{gathered}
$$

Ответ:

$$
\delta _ { y } = \frac { 2 \pi } { \lambda } \left[ L _ { 1 } + 2 L _ { 3 } - L _ { 2 } - 2 \alpha y \right] + \pi
$$

В5 ${ } ^ { 0.60 }$ Таким образом, на экране возникнет интерференционная картина. Найдите расстояние $y _ { 1 }$ до ближайшего к точке $O$ интерференционного максимума. Найдите также расстояние $\Delta y _ { m }$ между двумя соседними интерференционными максимумами. Приведите численные ответы в случае $L _ { 1 } = 0.50$ м, $L _ { 2 } = 1.50 \mathrm { м } , L _ { 3 } = 0.50 \mathrm { м } , L _ { 4 } = 1.00 \mathrm { м } , \alpha = 10 ^ { - 4 } , \theta = 10 ^ { - 5 } , \lambda = 500$ нм .

Подставляя численные значения, получаем:

$$
\delta = 81 \pi - 800 \frac { \pi } { 1 \mathrm { M } } \cdot y
$$

Максимум соответсвует $\delta = 2 \pi n$. В точке $O$ находится минимум.

$$
\begin{gathered}
y _ { 1 } = \frac { \lambda } { 4 \alpha } = 1.25 \mathrm {~mm} \\
\Delta y _ { m } = \frac { \lambda } { 2 \alpha } = 2.5 \mathrm {~mm}
\end{gathered}
$$

Ответ:

$$
\begin{aligned}
y _ { 1 } & = 1.25 \cdot 10 ^ { - 3 } \mathrm { M } \\
\Delta y _ { m } & = \frac { \lambda } { 2 \alpha } = 2.5 \mathrm { MM }
\end{aligned}
$$

В6 ${ } ^ { 0.90 }$ Найдите, как интенсивность $I ( y )$ на экране зависит от координаты $y$, если её максимальное значение равно $I _ { 0 }$, подставив сюда численные значения из предыдущего пункта. Учтите влияние светоделителя на интенсивность прошедшего света.

Амплитуда поля в луче 1 в $\sqrt { 2 }$ раз меньше, чем во втором. Тогда интенсивность, пропорциональная квадрату амплитуды:

$$
\begin{gathered}
I \sim 1 + 2 + 2 \sqrt { 2 } \cos \delta \\
I ( y ) = I _ { 0 } \frac { 3 - 2 \sqrt { 2 } \cos \left[ 80 \pi \left( 1 - 10 \frac { y } { 1 \mathrm { M } } \right) \right] } { 3 + 2 \sqrt { 2 } }
\end{gathered}
$$

Ответ:

$$
I ( y ) = I _ { 0 } \frac { 3 - 2 \sqrt { 2 } \cos \left[ 80 \pi \left( 1 - 10 \frac { y } { 1 \mathrm { M } } \right) \right] } { 3 + 2 \sqrt { 2 } }
$$

С1 ${ } ^ { 0,40 }$ Выразите волновой вектор $\vec { k }$ падающих лучей через $\theta _ { x } , \theta _ { y }$, модуль волнового вектора $k = 2 \pi / \lambda$ и единичные орты координатных осей.

В силу малости углов $\theta _ { x }$ и $\theta _ { y }$ :

$$
\begin{aligned}
k _ { z } & = - k \\
k _ { x } & = - k \theta _ { x } \\
k _ { y } & = - k \theta _ { y }
\end{aligned}
$$


Ответ:

$$
\vec { k } = - k \left( \theta _ { x } \hat { x } + \theta _ { y } \hat { y } + \hat { z } \right)
$$

С2 ${ } ^ { 0.60 }$ Выразите разность фаз между лучами 1" и 2" через $\lambda , L _ { 1 } , L _ { 2 } , L _ { 3 } , L _ { 4 } , \theta _ { x } , \theta _ { y } , \alpha , y$.

Заметим, что начальное смещение по оси $x$ лучей, попадающих в одну точку на экране, величина порядка $L _ { 3 } \theta _ { x }$, разность оптических путей соответсвенно пропорциональна $\theta _ { x } ^ { 2 }$, поэтому вклад $\theta _ { x }$ можно не учитывать. Ответ аналогичен прошлой части задачи:

$$
\delta _ { 1 ^ { \prime \prime } 2 ^ { \prime \prime } } = \frac { 2 \pi } { \lambda } \left( \left( L _ { 1 } + L _ { 2 } \right) \theta _ { y } + \left( L _ { 1 } + 2 L _ { 3 } - L _ { 2 } \right) - 2 \alpha y \right) + \pi
$$

Ответ:

$$
\delta _ { 1 ^ { \prime \prime } 2 ^ { \prime \prime } } = \frac { 2 \pi } { \lambda } \left( \left( L _ { 1 } + L _ { 2 } \right) \theta _ { y } + \left( L _ { 1 } + 2 L _ { 3 } - L _ { 2 } \right) - 2 \alpha y \right) + \pi
$$

D1 ${ } ^ { 1.80 }$ Запишите $V$ в виде интеграла по одной переменной. Явно производить интегрирование при этом необязательно.
Подсказка: интеграл некоторой функции $f \left( \theta _ { y } \right)$, зависящей только от $\theta _ { y }$, по поверхности диска радиусом $\theta _ { R }$ можно представить в виде:

$$
I = \int _ { - \theta _ { R } } ^ { \theta _ { R } } \mathrm {~d} \theta _ { y } \int _ { - \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } } ^ { \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } } \mathrm {~d} \theta _ { x } f \left( \theta _ { y } \right) = \int _ { - \theta _ { R } } ^ { \theta _ { R } } \mathrm {~d} \theta _ { y } \cdot 2 \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } f \left( \theta _ { y } \right)
$$

Части звезды излучают независимо, поэтому интенсивности от них можно складывать.

$$
d I = J d \theta _ { x } d \theta _ { y } \left( 3 - 2 \sqrt { 2 } \cos \left( \frac { 2 \pi } { \lambda } \left( L _ { 1 } + 2 L _ { 3 } - L _ { 2 } - 2 \alpha y \right) + \frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } + d \right) \theta _ { y } \right) \right)
$$

Обозначим $\varphi _ { 0 } = \frac { 2 \pi } { \lambda } \left( L _ { 1 } + 2 L _ { 3 } - L _ { 2 } \right)$.

$$
I = \int _ { - \theta _ { R } } ^ { \theta _ { R } } J \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } \left( 3 - 2 \sqrt { 2 } \cos \left( - \frac { 4 \pi } { \lambda } \alpha y + \frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } + d \right) \theta _ { y } + \varphi _ { 0 } \right) \right) d \theta _ { y }
$$

Заметим, что:

$$
\begin{aligned}
I _ { \max } & = \int _ { - \theta _ { R } } ^ { \theta _ { R } } J \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } \left( 3 + 2 \sqrt { 2 } \cos \left( \frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } + d \right) \theta _ { y } \right) \right) d \theta _ { y } \\
I _ { \min } & = \int _ { - \theta _ { R } } ^ { \theta _ { R } } J \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } \left( 3 - 2 \sqrt { 2 } \cos \left( \frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } + d \right) \theta _ { y } \right) \right) d \theta _ { y }
\end{aligned}
$$

Тогда видность:

$$
V = \frac { 2 \sqrt { 2 } \int _ { - \theta _ { R } } ^ { \theta _ { R } } \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } \cos \left( \frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } + d \right) \theta _ { y } \right) d \theta _ { y } } { 3 \int _ { - \theta _ { R } } ^ { \theta _ { R } } \sqrt { \theta _ { R } ^ { 2 } - \theta _ { y } ^ { 2 } } d \theta _ { y } }
$$

Обозначим $\omega = \frac { \theta _ { y } } { \theta _ { R } }$.

$$
V = \frac { 2 \sqrt { 2 } \int _ { - 1 } ^ { 1 } \sqrt { 1 - \omega ^ { 2 } } \cos \left( \frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } + d \right) \theta _ { R } \omega \right) d \omega } { 3 \int _ { - 1 } ^ { 1 } \sqrt { 1 - \omega ^ { 2 } } d \omega }
$$

Интеграл в знаменателе равен площади половины окружности единичного радиуса, то есть $\frac { \pi } { 2 }$. Обозначим $\eta = \frac { 2 \pi } { \lambda } \left( L _ { 1 } + L _ { 2 } + d \right) \theta _ { R }$.

$$
V = \frac { 4 \sqrt { 2 } } { 3 \pi } \int _ { - 1 } ^ { 1 } \mathrm {~d} w \sqrt { 1 - w ^ { 2 } } \cos ( \eta w )
$$

Заметим, что интегрируемая функция чётная, поэтому:


$$
V = \frac { 8 \sqrt { 2 } } { 3 \pi } \int _ { 0 } ^ { 1 } \mathrm {~d} w \sqrt { 1 - w ^ { 2 } } \cos ( \eta w )
$$

Ответ:

$$
V = \frac { 8 \sqrt { 2 } } { 3 \pi } \int _ { 0 } ^ { 1 } \mathrm {~d} w \sqrt { 1 - w ^ { 2 } } \cos ( \eta w )
$$

D2 ${ } ^ { 0.90 }$ Найдите угловой радиус Бетельгейзе $\theta _ { R }$. Найдите её радиус $R$, если расстояние до неё $h = 6.079 \cdot 10 ^ { 15 }$ км. Подсказка: Первые два нуля интеграла

$$
F _ { n } = \int _ { 0 } ^ { 1 } \left( 1 - w ^ { 2 } \right) ^ { n } \cos ( \eta w ) \mathrm { d } w
$$

как функции $\eta$ приведены в таблице ниже.

Первые обнуления видности соответствуют $\eta _ { 1 }$ и $\eta _ { 2 }$ для $n = 0.5$. Таким образом:

$$
\begin{gathered}
\eta _ { 2 } - \eta _ { 1 } = \frac { 2 \pi } { \lambda } \left( d _ { 2 } - d _ { 1 } \right) \theta _ { R } \\
\theta _ { R } = \frac { \left( \eta _ { 2 } - \eta _ { 1 } \right) \lambda } { 2 \pi \left( d _ { 2 } - d _ { 1 } \right) } = 1.18 \cdot 10 ^ { - 7 } \\
R = \theta _ { R } h = 7.16 \cdot 10 ^ { 8 } \mathrm { KM }
\end{gathered}
$$

Ответ:

$$
\begin{gathered}
\theta _ { R } = \frac { \left( \eta _ { 2 } - \eta _ { 1 } \right) \lambda } { 2 \pi \left( d _ { 2 } - d _ { 1 } \right) } = 1.18 \cdot 10 ^ { - 7 } \\
R = \theta _ { R } h = 7.16 \cdot 10 ^ { 8 } \mathrm { KM }
\end{gathered}
$$
