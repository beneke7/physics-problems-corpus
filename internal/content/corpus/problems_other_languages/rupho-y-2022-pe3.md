---
id: rupho-y-2022-pe3
source: rupho-y
native_id: "PE3"
year: 2022
language: ru
translated: false
topic: [electromagnetism]
subtopic: [ac-circuits, impedance, measurement]
difficulty: null
difficulty_norm: 2
math_tools: [numerical]
format: measurement
core_ideas: []
estimated_time_min: 30
points: null
has_solution: true
has_figure: true
figure_files: [rupho-y-2022-pe3-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/rupho-y/2022/PE3.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [model-reduction, graphical-reduction, limiting-and-special-cases]
---

В этой задаче погрешности оценивать не нужно! Этой задаче отвечает программа РЕ3.
В этой задаче вам предлагается изучить серый ящик с четырьмя выводами. Внутри ящика находится известная схема (см. рис.). На выходы AB подается синусоидальное напряжение амплитуды 1 В и регулируемой частоты $\omega$. Можно измерять амплитуды полного тока $I$ через цепь (между выходами AB) и напряжения $U$ на участке $C D$. Кроме этого, вы можете задавать значение сопротивления переменного резистора $R_{1}$. Программа выводит графики зависимости $I$ (в амперах) и $U$ (в вольтах) в выбранном диапазоне частот.

Программа принимает на вход диапазон частот $\omega\left(\mathrm{c}^{-1}\right)$ и сопротивление $R_{1}$ (Ом). Для задания диапазона нужно указать минимальную частоту, максимальную частоту и шаг, который используется для построения графика. Все частоты должны быть положительными, максимальная больше минимальной! Целая часть отделяется от дробной точкой.
![](rupho-y-2022-pe3-fig01.png)
