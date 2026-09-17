---
id: rupho-w-2026-t2
source: rupho-w
native_id: "T2"
year: 2026
language: ru
translated: false
topic: [mechanics]
subtopic: [non-inertial-frames, centrifugal, coriolis, circular-motion]
difficulty: null
difficulty_norm: 5
math_tools: [differential-equations, vector-calculus]
format: scaffolded
core_ideas: []
estimated_time_min: 90
points: null
has_solution: true
has_figure: true
figure_files: [rupho-w-2026-t2-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/rupho-w/2026/T2.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [choose-reference-frame, differential-element, stability-analysis]
---

## Road to IPhO

## Вращающаяся среда (11 баллов)

Большинство физических систем не являются консервативными из-за наличия диссипативных сил. Примером таких сил может быть трение. В этой задаче мы рассмотрим примеры таких систем с простейшим случаем вязкого трения.

## Часть А. Неподвижная среда (4 балла)

Пусть частица массой $m$ движется в неподвижной среде, в которой на неё действует сила вязкого трения $\vec{F}_{\text {тр }}=-\varepsilon m \vec{v}$, где $\vec{v}$ - скорость частицы. Ускорение свободного падения $\vec{g}$, изначально частица находилась в начале координат и имела скорость $\vec{v}_{0}$.

A1 Найдите траекторию движения $\vec{r}(t)$ для этой частицы. Выразите ответ в векторном виде через $\vec{v}_{0}, \vec{g}, \varepsilon$ или выразите зависимости компонент вектора $\vec{r}(t)$ в декартовой системе координат через компоненты векторов $\vec{v}_{0}, \vec{g}$.

А2 Как зависит от времени мощность потерь энергии $P(t)$, которая уходит в тепло? Выразите ответ через $\vec{v}_{0}$, $\vec{g}, \varepsilon, t, m$.

Рассмотрим теперь движение частицы в отсутствии силы тяжести, но теперь на неё действует постоянная по модулю вращающаяся сила $F_{x}=F_{0} \cos (\omega t), F_{y}=F_{0} \sin (\omega t)$.

А3 Найдите мощность потерь $P$, которая уходит в тепло, через большое время после включения силы $t \gg 1 / \varepsilon$. 2.0 Выразите ответ через $F_{0}, \varepsilon, m, \omega$.

## Часть В. Вращающаяся среда (7 баллов)

Частица массой $m$ находится в среде, вращающейся с угловой скоростью $\omega$ вокруг вертикальной оси $z$, ускорение свободного падения $\vec{g}=-g \vec{e}_{z}$, сила трения $\vec{F}=-\varepsilon m \vec{v}_{\text {отн }}$, где $\vec{v}_{\text {отн }}$ - скорость частицы относительно среды. В начальный момент частица неподвижна и находится в точке с координатами $\left(x_{0}, y_{0}, z_{0}\right)=\left(r_{0}, 0,0\right)$.
![](rupho-w-2026-t2-fig01.png)

B1 Найдите зависимость $z(t)$. Выразите ответ через $r_{0}, \varepsilon, g$. 0.5

B2 Выразите $\ddot{x}$ и $\ddot{y}$ через $x, y, \dot{x}, \dot{y}, \varepsilon$ и $\omega$. 1.0

Известно, что у полученных вами уравнений есть решение вида

$$
(x(t), y(t))=\left(A e^{a t} \cos \left(\Omega t+\varphi_{0}\right), A e^{a t} \sin \left(\Omega t+\varphi_{0}\right)\right) .
$$

Эти функции являются решениями при произвольных значениях $\varphi_{0}$, в частности при $\varphi_{0}=0$ и $\varphi_{0}=\pi / 2$ получим

$$
\begin{gathered}
\left(x_{1}(t), y_{1}(t)\right)=\left(A e^{a t} \cos (\Omega t), A e^{a t} \sin (\Omega t)\right) \\
\left(x_{2}(t), y_{2}(t)\right)=\left(-A e^{a t} \sin (\Omega t), A e^{a t} \cos (\Omega t)\right)
\end{gathered}
$$

При этом существует две пары возможных значений параметров $(a, \Omega)$.
B3 Используя решение $\left(x_{1}, y_{1}\right)$, получите систему уравнений, из которой можно определить возможные зна- чения постоянных $a$ и $\Omega$. В ответ также могут входить $\varepsilon, \omega$.

## Road to IPhO

B4 Решите полученную систему уравнений и найдите подходящие пары значений ( $a_{1}, \Omega_{1}$ ) и ( $a_{2}, \Omega_{2}$ ), если $\mathbf{1 . 0}$ $a_{2}>a_{1}$. Выразите ответ через $\varepsilon, \omega$.

| B5 | Найдите приближённые значения этих величин в случаях $\varepsilon \ll \omega$ и $\varepsilon \gg \omega$. | 0.5 |
| :--- | :--- | :--- |

В дальнейшем будем использовать обозначения

$$
A \vec{r}_{1 i}=\left(A e^{a_{i} t} \cos \left(\Omega_{i} t\right), A e^{a_{i} t} \sin \left(\Omega_{i} t\right)\right), A \vec{r}_{2 i}=\left(-A e^{a_{i} t} \sin \left(\Omega_{i} t\right), A e^{a_{i} t} \cos \left(\Omega_{i} t\right)\right) .
$$

Здесь индекс $i$ может принимать два значения 1,2 , отвечающие двум возможным значениям $(a, \Omega)$.

| B6 | Произвольное решение системы уравнений имеет вид $(x(t), y(t))=A \vec{r}_{11}+B \vec{r}_{12}+C \vec{r}_{21}+D \vec{r}_{22} .$ | 1.5 |
| :--- | :--- | :--- |
|  | Используя начальные условия, приведенные во введении к части, выразите $A, B, C$ и $D$ через $r_{0}, a_{1}, a_{2}, \Omega_{1}$ и $\Omega_{2}$. |  |
| B7 | Нарисуйте качественно траекторию движения частицы в плоскости $x y$ для случаев $\varepsilon \ll \omega$ и $\varepsilon \gg \omega$. | 0.5 |

В8 Найдите мощность потерь энергии $P$, которая уходит в тепло, в момент, когда частица находится в точке 1.0 с координатами $\vec{r}=(x, y, z)$ и движется со скоростью $\vec{v}=\left(v_{x}, v_{y}, v_{z}\right)$.
