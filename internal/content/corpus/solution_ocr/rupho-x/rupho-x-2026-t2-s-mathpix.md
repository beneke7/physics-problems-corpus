---
id: solution-ocr-rupho-x-2026-t2-s
source: rupho-x
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/rupho-x/2026/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
Из симметрии электрическое поле направлено радиально. Тогда его значение можно найти из теоремы Гаусса:

$$
E ( r ) = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } r } .
$$

Интегрируя, получим выражение для потенциала:

$$
\varphi ( r ) = - \int _ { a } ^ { r } E ( r ) d r = - \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \ln \frac { r } { a }
$$

Здесь $a$ - расстояние, от которого отсчитывается потецниал.

Ответ:

$$
\varphi ( r ) = - \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \ln \frac { r } { a }
$$

A2 ${ } ^ { 0.40 }$ Теперь добавим вторую нить с противоположной линейной плотностью заряда - $\kappa$, параллельную исходной, на очень малом расстоянии до нее. Дипольный момент единицы длины данной конструкции постоянен и равен $\vec { p }$. Определите зависимость электростатического потенциала этой дипольной линии $\varphi ( \vec { r } )$ во всем пространстве. Потенциал на большом расстоянии от дипольной линии стремится к нулю. Ответ выразите через $\varepsilon _ { 0 } , \vec { p } , \vec { r }$.

Пусть $\vec { a }$ - перпендикулярный нитям вектор, проведенный из точки отрицательно заряженной нити в точку положительно заряженной. Для определенности положим, что положительно заряженная нить расположена на прямой $\vec { r } = 0$. Если $r _ { + }$и $r _ { - }$- расстояния до положительно и отрицательно заряженных нитей соответственно, их суммарный потенциал:

$$
\varphi ( \vec { r } ) = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \ln \frac { r _ { - } } { r _ { + } } + C = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \ln \frac { | \vec { r } + \vec { a } | } { r } + C .
$$

В первом порядке по $\vec { a }$ расстояние

$$
r _ { - } = | \vec { r } + \vec { a } | \simeq r + \frac { \vec { a } \vec { r } } { r } ,
$$

тогда потенциал

$$
\varphi ( \vec { r } ) = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \ln \left( 1 + \frac { \vec { a } \vec { r } } { r ^ { 2 } } \right) \simeq \frac { \kappa ( \vec { a } \vec { r } ) } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } } = \frac { \vec { p } \vec { r } } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } }
$$

Здесь использовано $\vec { p } = \kappa \vec { a }$, а константа равна 0, поскольку на бесконечности это выражение стремится к 0.

Ответ:

$$
\varphi ( \vec { r } ) = \frac { \vec { r } \vec { p } } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } }
$$

А3 ${ } ^ { 0.60 }$ Дифференцируя выражение, полученное в предыдущем пункте, найдите электрическое поле $\vec { E } ( \vec { r } )$ во всем пространстве. Ответ выразите через $\varepsilon _ { 0 } , \vec { p }$, $\vec { r }$.

Сделаем в выражении для потенциала замену $\vec { r } \rightarrow \vec { r } + \vec { \delta }$ и найдем изменение потенциала в первом порядке по $\vec { \delta }$. Используем соотношения для расстояния

$$
\Delta \varphi = ( \vec { r } + \vec { \delta } ) ^ { 2 } \simeq r ^ { 2 } + 2 ( \vec { r } \vec { \delta } ) , \quad \frac { 1 } { ( \vec { r } + \vec { \delta } ) ^ { 2 } } \simeq \frac { 1 } { r ^ { 2 } } - \frac { 2 \vec { r } \vec { \delta } } { r ^ { 4 } }
$$

Тогда для разности потенциала получим

$$
\begin{aligned}
\varphi ( \vec { r } + \vec { \delta } ) - \varphi ( \vec { r } ) \simeq & \frac { \vec { p } ( \vec { r } + \vec { \delta } ) } { 2 \pi \varepsilon _ { 0 } ( \vec { r } + \vec { \delta } ) ^ { 2 } } - \frac { \vec { r } \vec { p } } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } } = \frac { \vec { p } } { 2 \pi \varepsilon _ { 0 } } \cdot \left( ( \vec { r } + \vec { \delta } ) \left( \frac { 1 } { r ^ { 2 } } - \frac { 2 \vec { r } \vec { \delta } } { r ^ { 4 } } \right) - \vec { r } r ^ { 2 } \right) = \\
& = \frac { \vec { p } } { 2 \pi \varepsilon _ { 0 } } \left( \frac { \vec { \delta } } { r ^ { 2 } } - \frac { 2 ( \vec { r } \vec { \delta } ) \vec { r } } { r ^ { 4 } } \right) = - \frac { 2 ( \vec { p } \vec { r } ) ( \vec { r } \vec { \delta } ) - ( \vec { p } \vec { \delta } ) } { 2 \pi \varepsilon r ^ { 4 } } .
\end{aligned}
$$

С учетом определения градиента

$$
\Delta \varphi = \vec { \nabla } \varphi \cdot \vec { \delta } , \quad \vec { \nabla } \varphi = - \frac { 2 ( \vec { p } \vec { r } ) \vec { r } - \vec { p } } { 2 \pi \varepsilon _ { 0 } r ^ { 4 } }
$$

Тогда электрическое поле

$$
\vec { E } ( \vec { r } ) = - \vec { \nabla } \varphi ( \vec { r } ) = \frac { 2 ( \vec { p } \vec { r } ) \vec { r } - \vec { p } } { 2 \pi \varepsilon _ { 0 } r ^ { 4 } }
$$


Производную можно найти и напрямую. Введем единичные векторы: $\vec { e } _ { r }$ - сонаправленный с радиус-вектором $\vec { r } , \vec { e } _ { \theta }$ - перпендикулярный ему и дипольным нитям, сонаправлен с положительным направлением отсчета $\theta$. Запишем выражение для электрического поля:

$$
\vec { E } = - \operatorname { grad } \varphi = - \frac { \partial \varphi } { \partial r } \vec { e } _ { r } - \frac { 1 } { r } \frac { \partial \varphi } { \partial \theta } \vec { e } _ { \theta } = \frac { ( \vec { p } , \vec { r } ) } { 2 \pi \varepsilon _ { 0 } r ^ { 3 } } \vec { e } _ { r } + \frac { p \sin \theta } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } } \vec { e } _ { \theta }
$$

Выразим $\vec { e } _ { \theta }$ :

$$
\frac { \vec { p } } { p } = \vec { e } _ { r } \frac { ( \vec { p } , \vec { r } ) } { p r } - \vec { e } _ { \theta } \sin \theta
$$

Запишем ответ:

Ответ:

$$
\vec { E } ( r ) = \frac { 1 } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } } \left( 2 \frac { \vec { r } ( \vec { r } \vec { p } ) } { r ^ { 2 } } - \vec { p } \right)
$$

Данный ответ также может быть получен при рассмотрении полей двух заряженных нитей. Для этого найдём в векторной форме поле 1 нити:

$$
\vec { E } = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \frac { \vec { r } } { r ^ { 2 } }
$$

И представим поле диполя в виде суперпозиции полей двух нитей:

$$
\begin{gathered}
\vec { E } ( \vec { r } ) = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \left( \frac { \vec { r } _ { + } } { r _ { + } ^ { 2 } } - \frac { \vec { r } _ { - } } { r _ { - } ^ { 2 } } \right) = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \left( \frac { \vec { r } } { r ^ { 2 } } - \frac { \vec { r } + \vec { a } } { ( \vec { r } + \vec { a } ) ^ { 2 } } \right) = \frac { \kappa } { 2 \pi \varepsilon _ { 0 } } \left( \frac { \vec { r } } { r ^ { 2 } } - \frac { \vec { r } + \vec { a } } { r ^ { 2 } + a ^ { 2 } + 2 ( \vec { r } , \vec { a } ) } \right) \approx \\
\approx \frac { \kappa } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } } \left( \vec { r } - ( \vec { r } + \vec { a } ) \left( 1 - 2 \frac { ( \vec { r } , \vec { a } ) } { r ^ { 2 } } \right) \right) \approx \frac { \kappa } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } } \left( 2 \frac { \vec { r } ( \vec { r } , \vec { a } ) } { r ^ { 2 } } - \vec { a } \right) = \\
= \frac { 1 } { 2 \pi \varepsilon _ { 0 } r ^ { 2 } } \left( 2 \frac { \vec { r } ( \vec { r } , \vec { p } ) } { r ^ { 2 } } - \vec { p } \right)
\end{gathered}
$$

A4 ${ } ^ { 0.60 }$ Покажите, что распределение поля в пространстве вне цилиндра равно суперпозиции однородного внешнего поля $\vec { E } _ { 0 }$ и поля дипольной линии с линейной плотностью дипольного момента $\vec { p }$. Используйте выражение для поля дипольной линии в вакууме. Определите $\vec { p }$. Ответ выразите через $\varepsilon _ { 1 } , \varepsilon _ { 2 } , \vec { E } _ { 0 } , \varepsilon _ { 0 }$ , $R$. Найденное вами значение $\vec { p }$ включает в себя как дипольный момент цилиндра, так и дипольный момент поляризационных зарядов среды.

Запишем условия для компонент электрического поля на границе среда-цилиндр:

$$
\left\{ \begin{array} { l }
E _ { \tau 2 } = E _ { \tau 2 } \\
\varepsilon _ { 1 } E _ { n 1 } = \varepsilon _ { 2 } E _ { n 2 }
\end{array} \right.
$$

Предполаная, что поле снаружи - суперпозиция внешнего однородного поля и поля диполя, а внутри - однорородное и сонаправленное с $\vec { E } _ { 0 }$, перепишем предыдущую систему уравнений:

$$
\left\{ \begin{array} { l }
E _ { i n } \sin \theta = E _ { 0 } \sin \theta - \frac { p \sin \theta } { 2 \pi \varepsilon _ { 0 } R ^ { 2 } } \\
\varepsilon _ { 1 } E _ { i n } \cos \theta = \varepsilon _ { 2 } \left( E _ { 0 } \cos \theta + \frac { p \cos \theta } { 2 \pi \varepsilon _ { 0 } R ^ { 2 } } \right)
\end{array} \right.
$$

При $\vec { p } = 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } R ^ { 2 } \frac { \varepsilon _ { 1 } - \varepsilon _ { 2 } } { \varepsilon _ { 1 } + \varepsilon _ { 2 } }$ записанные выше условия выполняются в каждой точке цилиндра, значит, по теореме о единственности, данное решение верно.

Ответ:

$$
\vec { p } = 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } R ^ { 2 } \frac { \varepsilon _ { 1 } - \varepsilon _ { 2 } } { \varepsilon _ { 1 } + \varepsilon _ { 2 } }
$$

А5 ${ } ^ { 0.30 }$ Определите зависимость электрического поля $\vec { E } ( \vec { r } )$ во всем пространстве. Ответ выразите через $\varepsilon _ { 1 } , \varepsilon _ { 2 } , \vec { E } _ { 0 } , \vec { r }$.

Подставим найденное значение $\vec { p }$, получим распределение поля во всем пространстве.

Ответ: Внутри цилиндра ( $r \leq R$ ):

$$
\vec { E } _ { 1 } = \frac { 2 \varepsilon _ { 2 } } { \varepsilon _ { 1 } + \varepsilon _ { 2 } } \vec { E } _ { 0 } ;
$$


снаружи цилиндра ( $r > R$ ):

$$
\vec { E } = \vec { E } _ { 0 } + \frac { \varepsilon _ { 1 } - \varepsilon _ { 2 } } { \varepsilon _ { 1 } + \varepsilon _ { 2 } } R ^ { 2 } \left( \frac { 2 \left( \vec { r } \vec { E } _ { 0 } \right) \vec { r } } { r ^ { 4 } } - \frac { \vec { E } _ { 0 } } { r ^ { 2 } } \right) .
$$

А6 ${ } ^ { 1.00 }$ Пусть проводимость и диэлектрическая проницаемость цилиндра $\lambda _ { 1 } , \varepsilon _ { 1 }$, а окружающей среды $\lambda _ { 2 } , \varepsilon _ { 2 }$. Электрическое поле на большом расстоянии от цилиндра $\vec { E } _ { 0 }$. Распределение тока полностью установилось. Известно, что поле снаружи цилиндра все еще равно суперпозиции внешнего поля и поля диполя, а поле внутри цилиндра однородно. Однако теперь на поверхности цилиндра возникает распределение свободных (не связанных с поляризацией) зарядов с плотностью $\sigma _ { f } ( \theta )$. Определите объемную плотность тока $\overrightarrow { j _ { 1 } }$ внутри цилиндра и поверхностную плотность заряда $\sigma _ { f } ( \theta )$ в зависимости от угла $\theta$. Направлению $\vec { E } _ { 0 }$ отвечает $\theta = 0$.
Примечание: в проводящей среде объемная плотность тока связана с электрическим полем соотношением $\vec { j } = \lambda \vec { E }$, где $\lambda$ - проводимость среды.
Примечание: граничные условия на нормальные компоненты электрического поля можно получить, рассматривая нормальные составляющие плотности тока на границе цилиндра и среды. По цилиндру не течет поверхностных токов.

Запишем новые граничные условия с учётом токов и зарядов
Условие на токи:

$$
\lambda _ { 1 } E _ { n 1 } = j _ { n 1 } = j _ { n 2 } = \lambda _ { 2 } E _ { n 2 }
$$

Условие на тангенциальные компоненты поля:

$$
E _ { \tau 1 } = E _ { \tau 2 }
$$

При близком рассмотрении участок границы можно считать плоским, а заряд на границе постоянным, тогда записав теорему Гаусса для вектора электростатической индукции получим:

$$
- \varepsilon _ { 0 } \varepsilon _ { 1 } E _ { n 1 } + \varepsilon _ { 0 } \varepsilon _ { 2 } E _ { n 2 } = \sigma _ { f }
$$

Подставив в первые два условия форму поля получим систему:

$$
\left\{ \begin{array} { l }
E _ { i n } \sin \theta = E _ { 0 } \sin \theta - \frac { p \sin \theta } { 2 \pi \varepsilon _ { 0 } R ^ { 2 } } \\
\varepsilon _ { 1 } E _ { i n } \cos \theta = \varepsilon _ { 2 } \left( E _ { 0 } \cos \theta + \frac { p \cos \theta } { 2 \pi \varepsilon _ { 0 } R ^ { 2 } } \right)
\end{array} \right.
$$

которая аналогична A4:

$$
\begin{gathered}
\vec { p } = 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } R ^ { 2 } \frac { \lambda _ { 1 } - \lambda _ { 2 } } { \lambda _ { 1 } + \lambda _ { 2 } } \\
\vec { E } _ { \text {in } } = \frac { 2 \lambda _ { 2 } } { \lambda _ { 1 } + \lambda _ { 2 } } \vec { E } _ { 0 }
\end{gathered}
$$

Подставим выражения в граничное условие на $\sigma _ { f }$ :

$$
\sigma _ { f } = - \varepsilon _ { 0 } \varepsilon _ { 1 } \frac { 2 \lambda _ { 2 } } { \lambda _ { 1 } + \lambda _ { 2 } } E _ { 0 } \cos \theta + \varepsilon _ { 0 } \varepsilon _ { 2 } \left( E _ { 0 } + E _ { 0 } \frac { \lambda _ { 1 } - \lambda _ { 2 } } { \lambda _ { 1 } + \lambda _ { 2 } } \right) \cos \theta
$$

Получим ответ:

Ответ:

$$
\begin{gathered}
\sigma _ { f } = 2 \varepsilon _ { 0 } E _ { 0 } \frac { \varepsilon _ { 2 } \lambda _ { 1 } - \varepsilon _ { 1 } \lambda _ { 2 } } { \lambda _ { 1 } + \lambda _ { 2 } } \cos \theta \\
\overrightarrow { j _ { 1 } } = \frac { 2 \lambda _ { 1 } \lambda _ { 2 } } { \lambda _ { 1 } + \lambda _ { 2 } } \vec { E } _ { 0 }
\end{gathered}
$$

А7 ${ } ^ { 0.70 }$ Пусть теперь цилиндр идеально проводящий, а проводимость окружающей его среды $\lambda _ { 2 }$, ее диэлектрическая проницаемость $\varepsilon _ { 2 }$. Внешнее электрическое поле отсутствует. Начальный заряд цилиндра равен $q _ { 0 }$. Найдите зависимость заряда цилиндра $q ( t )$ от времени. Получите выражение для времени $\tau _ { 2 }$, за которое заряд цилиндра уменьшается в 2 раза. Ответы выразите через $\lambda _ { 2 } , \varepsilon _ { 0 } , \varepsilon _ { 2 }$.
Т. к. $\vec { j } = \lambda _ { 2 } \vec { E }$, полный ток, стекающий с цилиндра, $I = \lambda _ { 2 } \Phi$. Получим:

$$
- \dot { q } = \lambda _ { 2 } \frac { q } { \varepsilon _ { 0 } \varepsilon _ { 2 } } \Rightarrow q = q _ { 0 } e ^ { - \frac { \lambda _ { 2 } t } { \varepsilon _ { 0 } \varepsilon _ { 2 } } }
$$

Получим ответ:


Ответ:

$$
\tau _ { 2 } = \frac { \varepsilon _ { 0 } \varepsilon _ { 2 } } { \lambda _ { 2 } } \ln ( 2 )
$$

В1 ${ } ^ { 0.10 }$ Запишите соотношение между касательными компонентами электрических полей на границе раздела среды и цилиндра.

Из условия потенциальности электрического поля:

Ответ:

$$
E _ { \tau 1 } = E _ { \tau 2 }
$$

В2 ${ } ^ { \mathbf { 0 . 5 0 } }$ При движении цилиндра свободные заряды на поверхности цилиндра вращаются вместе с ним. Поэтому на поверхности цилиндра возникает поверхностная плотность тока $i ( \theta )$. Выразите ее через $\omega , R$ и плотность свободных зарядов. Величина $i ( \theta )$ считается положительной, если ток направлен в сторону возрастания $\theta$.

Ответ:

$$
i ( \theta ) = R \omega \sigma _ { f } ( \theta )
$$

Вз ${ } ^ { 0.70 }$ Рассмотрим малый участок поверхности цилиндра, отвечающий интервалу углов $\left( \theta _ { 0 } , \theta _ { 0 } + d \theta \right)$ площади $d S = R L d \theta$. Через границы $\theta = \theta _ { 0 }$ в него втекает заряд за счет $i \left( \theta _ { 0 } \right)$, через границу при $\theta = \theta _ { 0 } + d \theta$ вытекает ток за счет $i \left( \theta _ { 0 } + d \theta \right)$. Также в него втекает нормальный ток с плотностью $j _ { 1 n }$ и вытекает нормальный ток с плотностью $j _ { 2 n }$. В установившемся режиме полный заряд рассматриваемой области не меняется. Запишите следующее из закона сохранения заряда соотношение между токами $i \left( \theta _ { 0 } \right) , i \left( \theta _ { 0 } + d \theta \right) , j _ { 1 n } , j _ { 2 n }$. В ответ также может входить $R$ и $d \theta$.

Из закона сохранения заряда получим соотношение:

$$
L i \left( \theta _ { 0 } \right) - L i \left( \theta _ { 0 } + d \theta \right) + d S j _ { 1 n } - d S j _ { 2 n } = 0
$$

Раскрыв $d S$, получим:

Ответ:

$$
i \left( \theta _ { 0 } \right) - i \left( \theta _ { 0 } + d \theta \right) + R \left( j _ { 1 n } - j _ { 2 n } \right) d \theta = 0
$$

В4 ${ } ^ { 0.50 }$ В соотношение из предыдущего пункта подставьте выражения для нормальных токов через нормальные компоненты электрического поля и поверхностных токов через плотность заряда. Получите связь между $E _ { 1 n } , E _ { 2 n } , \omega , \lambda _ { 1 } , \lambda _ { 2 } , \partial \sigma _ { f } / \partial \theta$.

Устремляя $d \theta$ к нулю, получим:

$$
- L \frac { \partial i } { \partial \theta } \left( \theta _ { 0 } \right) + R L \left( j _ { 1 n } - j _ { 2 n } \right) = 0
$$

Выведем ответ, раскрыв $i$ и учитывая, что $\vec { j } = \lambda \vec { E }$, получаем:

Ответ:

$$
- \omega \frac { \partial \sigma _ { f } } { \partial \theta } + \lambda _ { 1 } E _ { 1 n } - \lambda _ { 2 } E _ { 2 n } = 0
$$

B5 ${ } ^ { \mathbf { 0 . 4 0 } }$ Выразите плотность свободных зарядов $\sigma _ { f }$ через компоненты электрического поля вблизи границы. Используя результаты пункта В4, получите отсюда соотношение только между компонентами электрического поля $E _ { 1 n } , E _ { 2 n }$ и их производными по $\theta$. В ответ также могут входить $\varepsilon _ { 1 } , \lambda _ { 1 } , \varepsilon _ { 2 } , \lambda _ { 2 } , \omega$.

Из предыдущего пункта:

$$
- \omega \frac { \partial \sigma _ { f } } { \partial \theta } + \lambda _ { 1 } E _ { 1 n } - \lambda _ { 2 } E _ { 2 n } = 0
$$

Запишем граничное условие на вектор электростатической индукции:


$$
- \varepsilon _ { 0 } \varepsilon _ { 1 } E _ { n 1 } + \varepsilon _ { 0 } \varepsilon _ { 2 } E _ { n 2 } = \sigma _ { f }
$$

продифференцируем его и подставим $\frac { \partial \sigma _ { f } } { \partial \theta }$ :

Ответ:

$$
\left( \lambda _ { 1 } + \omega \varepsilon _ { 1 } \varepsilon _ { 0 } \frac { \partial } { \partial \theta } \right) E _ { 1 n } = \left( \lambda _ { 2 } + \omega \varepsilon _ { 2 } \varepsilon _ { 0 } \frac { \partial } { \partial \theta } \right) E _ { 2 n }
$$

В6 ${ } ^ { 0.50 }$ Покажите, что выражения для комплексных проницаемостей можно записать в виде

$$
\varepsilon _ { 1 } ^ { * } = \varepsilon _ { 1 } + \frac { i \lambda _ { 1 } } { \varepsilon _ { 0 } \omega } , \quad \varepsilon _ { 2 } ^ { * } = \varepsilon _ { 2 } + \frac { i \lambda _ { 2 } } { \varepsilon _ { 0 } \omega } .
$$

Далее эти формулы можно использовать без доказательства.
Примечание: Поскольку цилиндр вращается с угловой скоростью $\omega , d \theta / d t = + \omega$ и производную по углу $\theta$ можно выразить через производную по времени во вращающейся системе отсчета.

Поле в системе отсчета цилиндра вращается с угловой скоростью $- \omega$. Поэтому $\frac { \partial } { \partial \theta } = \frac { 1 } { \omega } \frac { \partial } { \partial t } = \frac { - i \omega } { \omega } = - i$.
Граничное условие:

$$
\left( \lambda _ { 1 } - i \omega \varepsilon _ { 1 } \varepsilon _ { 0 } \right) E _ { 1 n } = \left( \lambda _ { 2 } - i \omega \varepsilon _ { 2 } \varepsilon _ { 0 } \right) E _ { 2 n }
$$

Отсюда:

Ответ:

$$
\begin{aligned}
& \varepsilon _ { 1 } ^ { * } = \varepsilon _ { 1 } + \frac { i \lambda _ { 1 } } { \omega \varepsilon _ { 0 } } \\
& \varepsilon _ { 2 } ^ { * } = \varepsilon _ { 2 } + \frac { i \lambda _ { 2 } } { \omega \varepsilon _ { 0 } }
\end{aligned}
$$

В7 ${ } ^ { 0.50 }$ Определите комплексную амплитуду линейной плотности дипольного момента цилиндра $\vec { p } ^ { * }$. Ответ выразите через $\varepsilon _ { 1 } , \lambda _ { 1 } , \varepsilon _ { 2 } , \lambda _ { 2 } , \omega , \varepsilon _ { 0 } , R , \vec { E } _ { 0 } ^ { * }$.

Аналогично электростатическому случаю из части A, мы можем записать ответ, подставив комплексные диэлектрические проницаемости. Отсюда имеем:

$$
\vec { p } ^ { * } = 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } ^ { * } R ^ { 2 } \frac { \varepsilon _ { 1 } ^ { * } - \varepsilon _ { 2 } ^ { * } } { \varepsilon _ { 1 } ^ { * } + \varepsilon _ { 2 } ^ { * } } = 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } ^ { * } R ^ { 2 } \frac { \varepsilon _ { 1 } - \varepsilon _ { 2 } + \frac { i \left( \lambda _ { 1 } - \lambda _ { 2 } \right) } { \omega \varepsilon _ { 0 } } } { \varepsilon _ { 1 } + \varepsilon _ { 2 } + \frac { i \left( \lambda _ { 1 } + \lambda _ { 2 } \right) } { \omega \varepsilon _ { 0 } } }
$$

Ответ:

$$
\vec { p } ^ { * } = 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } ^ { * } R ^ { 2 } \frac { \varepsilon _ { 1 } - \varepsilon _ { 2 } + \frac { i \left( \lambda _ { 1 } - \lambda _ { 2 } \right) } { \omega \varepsilon _ { 0 } } } { \varepsilon _ { 1 } + \varepsilon _ { 2 } + \frac { i \left( \lambda _ { 1 } + \lambda _ { 2 } \right) } { \omega \varepsilon _ { 0 } } }
$$

В8 ${ } ^ { 0.80 }$ Определите проекции на оси $x$ и $y$ вектора $\vec { p }$ в лабораторной системе отсчета.

Выразим $p _ { x }$ :

$$
p _ { x } = \operatorname { Re } \left( \vec { p } ^ { * } , \vec { e } _ { x } \right)
$$

Выражение для $p _ { y }$ аналогично:

$$
p _ { y } = \operatorname { Re } \left( \vec { p } ^ { * } , \vec { e } _ { y } \right)
$$

Используем, что $\vec { E } _ { 0 } ^ { * } = E _ { 0 } \left( \vec { e } _ { x } - i \vec { e } _ { y } \right)$. Преобразуем выражение из предыдущего пункта:


$$
\begin{gathered}
\vec { p } ^ { * } = 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } ^ { * } R ^ { 2 } \frac { \left( \varepsilon _ { 1 } - \varepsilon _ { 2 } + \frac { i \left( \lambda _ { 1 } - \lambda _ { 2 } \right) } { \omega \varepsilon _ { 0 } } \right) \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } - \frac { i \left( \lambda _ { 1 } + \lambda _ { 2 } \right) } { \omega \varepsilon _ { 0 } } \right) } { \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } \right) ^ { 2 } + \frac { \left( \lambda _ { 1 } + \lambda _ { 2 } \right) ^ { 2 } } { \omega ^ { 2 } \varepsilon _ { 0 } ^ { 2 } } } = \\
= 2 \pi \varepsilon _ { 0 } \vec { E } _ { 0 } ^ { * } R ^ { 2 } \frac { \varepsilon _ { 1 } ^ { 2 } - \varepsilon _ { 2 } ^ { 2 } + \frac { \left( \lambda _ { 1 } ^ { 2 } - \lambda _ { 2 } ^ { 2 } \right) } { \omega ^ { 2 } \varepsilon _ { 0 } ^ { 2 } } + 2 i \frac { \lambda _ { 1 } \varepsilon _ { 2 } - \lambda _ { 2 } \varepsilon _ { 1 } } { \omega \varepsilon _ { 0 } } } { \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } \right) ^ { 2 } + \frac { \left( \lambda _ { 1 } + \lambda _ { 2 } \right) ^ { 2 } } { \omega ^ { 2 } \varepsilon _ { 0 } ^ { 2 } } }
\end{gathered}
$$

и получим ответы:

Ответ:

$$
\begin{gathered}
p _ { x } = 2 \pi R ^ { 2 } \varepsilon _ { 0 } E _ { 0 } \frac { \omega ^ { 2 } \varepsilon _ { 0 } ^ { 2 } \left( \varepsilon _ { 1 } ^ { 2 } - \varepsilon _ { 2 } ^ { 2 } \right) + \lambda _ { 1 } ^ { 2 } - \lambda _ { 2 } ^ { 2 } } { \left( \sigma _ { 1 } + \sigma _ { 2 } \right) ^ { 2 } + \left( \omega \varepsilon _ { 0 } \right) ^ { 2 } \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } \right) ^ { 2 } } , \\
p _ { y } = - 4 \pi \omega R ^ { 2 } \varepsilon _ { 0 } ^ { 2 } E _ { 0 } \frac { \left( \varepsilon _ { 1 } \lambda _ { 2 } - \varepsilon _ { 2 } \lambda _ { 1 } \right) } { \left( \lambda _ { 1 } + \lambda _ { 2 } \right) ^ { 2 } + \left( \omega \varepsilon _ { 0 } \right) ^ { 2 } \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } \right) ^ { 2 } }
\end{gathered}
$$

В9 ${ } ^ { 0.60 }$ Определите проекцию момента сил $M _ { E }$, действующего на цилиндр (с окружающими его поляризационными зарядами среды) со стороны внешнего электрического поля, на ось $z$. Ответ выразите через $E _ { 0 } , \varepsilon _ { 0 } , \omega , \varepsilon _ { 1 } , \lambda _ { 1 } , \varepsilon _ { 2 } , \lambda _ { 2 } , R , L$.

Полный эффективный дипольный момент цилиндра равен $\vec { p } L$, тогда:

$$
\vec { M } = \left[ \vec { p } , \vec { E } _ { 0 } \right] L
$$

Выразим $M _ { z }$ :

$$
M _ { z } = - p _ { y } E _ { 0 } L = 4 \pi \omega L R ^ { 2 } \varepsilon _ { 0 } ^ { 2 } E _ { 0 } ^ { 2 } \frac { \left( \varepsilon _ { 1 } \lambda _ { 2 } - \varepsilon _ { 2 } \lambda _ { 1 } \right) } { \left( \lambda _ { 1 } + \lambda _ { 2 } \right) ^ { 2 } + \left( \omega \varepsilon _ { 0 } \right) ^ { 2 } \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } \right) ^ { 2 } }
$$

Ответ:

$$
M _ { z } = 4 \pi \omega L R ^ { 2 } \varepsilon _ { 0 } ^ { 2 } E _ { 0 } ^ { 2 } \frac { \left( \varepsilon _ { 1 } \lambda _ { 2 } - \varepsilon _ { 2 } \lambda _ { 1 } \right) } { \left( \lambda _ { 1 } + \lambda _ { 2 } \right) ^ { 2 } + \left( \omega \varepsilon _ { 0 } \right) ^ { 2 } \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } \right) ^ { 2 } }
$$

В10 ${ } ^ { 0.40 }$ При определенном соотношении между параметрами системы полученный выше момент сил вызывает дальнейшее увеличение угловой скорости цилиндра. Укажите соотношение между параметрами, при котором это возможно.

Вращение возможно при $M _ { z } > 0$, это соответствует соотношению:

$$
\varepsilon _ { 2 } / \lambda _ { 2 } < \varepsilon _ { 1 } / \lambda _ { 1 }
$$

Обратим внимание, что данное выражение не случайно: его физический смысл: характерное время разрядки среды меньше характерного времени разрядки цилиндра, поэтому может возникать явление запаздывания переполяризации, что и является причиной вращения.

Ответ:

$$
\varepsilon _ { 2 } / \lambda _ { 2 } < \varepsilon _ { 1 } / \lambda _ { 1 }
$$

С1 ${ } ^ { 0.70 }$ Момент сил можно записать в виде $M _ { \eta } = - \alpha \eta ^ { a } \omega ^ { b } R ^ { c } L ^ { d }$, где $\alpha$ - безразмерная постоянная. Используя метод размерностей и физические соображения, определите показатели степени $a , b , c , d$.

Движения жидкости вдоль оси $z$ нет, значит движение элементов жидкости никак не зависит от $z$ из симметрии. Площадь боковой поверхности цилиндра пропорциональна $L$, расстояние от точки приложения силы до оси не зависит от $L$, следовательно:

Ответ:

$$
d = 1
$$

Для нахождения остальных степеней воспользуемся методом размерностей:

$$
\mathrm { H } \cdot \mathrm { M } = \left( \mathrm { H } \cdot \mathrm { M } ^ { - 2 } \cdot \mathrm { c } \right) ^ { a } \cdot c ^ { - b } \cdot \mathrm { M } ^ { c } \cdot \mathrm { M }
$$


Приравнивая коэффициенты перед Ньютонами, получаем:

Ответ:

$$
a = 1
$$

Приравнивая коэффициенты перед секундами, получаем:

Ответ:

$$
b = 1
$$

Приравнивая коэффициенты перед метрами, получаем:

Ответ:

$$
c = 2
$$

С2 ${ } ^ { 0.30 }$ Найдите момент сил вязкого трения $M$, действующий на внешнюю сторону цилиндрического слоя жидкости радиуса $r$, где $r > R$. Выразите ответ через $\eta , r , L , \frac { \partial \omega } { \partial r }$.

Момент сил, действующий на малый цилиндрического слой жидкости:

$$
M = \tau _ { \theta z } \cdot S \cdot r = 2 \pi \eta r ^ { 3 } L \frac { \partial \omega } { \partial r }
$$

Ответ:

$$
M = \tau _ { \theta z } \cdot S \cdot r = 2 \pi \eta r ^ { 3 } L \frac { \partial \omega } { \partial r }
$$

с3 ${ } ^ { 1.20 }$ Определите коэффициент $\alpha$ в формуле для момента сил $M _ { \eta }$.

Так как каждый элемент жидкости вращается равномерно, то момент действующий на внешнюю сторону слоя жидкости, будет равен моменту, с которым этот слой жидкости действует на слой под ним. Т. е. $M = M _ { \eta } =$ const .

Разделим переменные и проинтегрируем данное уравнение:

$$
\frac { M _ { \eta } } { 2 \pi \eta L } \frac { d r } { r ^ { 3 } } = d \omega
$$

Так как $\omega ( r \rightarrow \infty ) = 0$, и $\omega ( R ) = \omega _ { 0 }$, то:

$$
\frac { M _ { \eta } } { 2 \pi \eta L } \int _ { \infty } ^ { R } \frac { d r } { r ^ { 3 } } = \omega _ { 0 }
$$

Запишем итоговое выражение:

Ответ:

$$
M _ { \eta } = - 4 \pi \omega _ { 0 } \eta L R ^ { 2 }
$$

с4 ${ } ^ { 0.30 }$ Сообщим цилиндру маленькую угловую скорость $\delta \omega$. Если внешнее электрическое поле больше некоторого критического значения $E _ { 0 } > E _ { c r }$, угловая скорость будет возрастать. Выразите критическое поле $E _ { c r }$ через $\varepsilon _ { 1 } , \varepsilon _ { 2 } \varepsilon _ { 0 } , \eta _ { 1 } , \lambda _ { 1 } , \lambda _ { 2 } , \alpha$.

Условие минимума - $\omega _ { 0 } = 0$. Пренебрегая слагаемым с $\omega ^ { 2 }$ в знаменателе, получим:

Ответ:

$$
E _ { c r } = \sqrt { \frac { \alpha \eta } { 4 \pi \varepsilon _ { 0 } ^ { 2 } } \frac { \left( \lambda _ { 1 } + \lambda _ { 2 } \right) ^ { 2 } } { \left( \varepsilon _ { 1 } \lambda _ { 2 } - \varepsilon _ { 2 } \lambda _ { 1 } \right) } }
$$


Ответ выразите через $E _ { 0 } , E _ { c r } , \varepsilon _ { 0 } , \varepsilon _ { 1 } , \lambda _ { 1 } , \varepsilon _ { 2 } , \lambda _ { 2 }$.

Условие установления скорости:

$$
M _ { z } + M _ { \eta } = 0
$$

Отсюда получаем:

Ответ:

$$
\omega _ { 0 } = \frac { \sqrt { \frac { \left( \varepsilon _ { 1 } \lambda _ { 2 } - \varepsilon _ { 2 } \lambda _ { 1 } \right) \varepsilon _ { 0 } ^ { 2 } E _ { 0 } ^ { 2 } } { \eta } - \left( \lambda _ { 1 } + \lambda _ { 2 } \right) ^ { 2 } } } { \varepsilon _ { 0 } \left( \varepsilon _ { 1 } + \varepsilon _ { 2 } \right) }
$$
