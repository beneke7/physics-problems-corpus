---
id: rupho-y-2021-pe3
source: rupho-y
native_id: "PE3"
year: 2021
language: ru
translated: false
topic: [thermodynamics, experimental-skills]
subtopic: [calorimetry, temperature, heat-transfer, measurement, data-fitting]
difficulty: null
difficulty_norm: 3
math_tools: [numerical]
format: measurement
core_ideas: []
estimated_time_min: 60
points: null
has_solution: true
has_figure: true
figure_files: [rupho-y-2021-pe3-fig01.png]
provenance_note: "phoXiv Mathpix Markdown: cache/phoxiv/rupho-y/2021/PE3.mmd; figures require local harvest"
verification_status: pending
solution_language: ru
techniques: [conservation-laws, graphical-reduction, differential-element]
---

Теплоизолированная система состоит из двух сосудов, соединенных тонкой теплопроводящей трубкой. Собственной теплоемкостью трубки можно пренебречь, тепловое равновесие в каждом сосуде и вдоль трубки устанавливается гораздо быстрее, чем тепловое равновесие между сосудами.
![](../../figures/rupho-y/figures/rupho-y-2021-pe3-fig01.png)

Входные данные: $\mathrm{T}_{2}(0), \mathrm{t}$
Выходные данные: $\mathrm{T}_{2}$ (t)

Теплоемкость тела в сосуде №2 известна: $C_{2}=1$ кДж/°C. Вы можете задавать начальную температуру сосуда №2 ( $T_{20}$, между $0^{\circ} \mathrm{C}$ и $100^{\circ} \mathrm{C}$.) и время $t$ после соединения сосудов трубкой. Предложенная вам программа показывает температуру в сосуде №2 в момент времени $t$ (задается в минутах) после соединения сосудов трубкой ( $t=0$ ).

A1 ${ }^{0.40}$ Определите начальную температуру сосуда №1 $\left(T_{10}\right)$.
А2 ${ }^{3.60}$ Постройте график зависимости теплоемкости сосуда №1 от его температуры.
А3 ${ }^{3.00}$ За какое время температура сосуда №1 увеличится от $T_{10}$ до $T_{10}+20^{\circ} \mathrm{C}$, если вместо сосуда №2 присоединить трубку к сосуду с постоянной температурой 100°C?

Программа
exe Исполняемый файл под Windows опубликован на $\_\_\_\_$ гитхабе.
