---
id: nbpho-2016-fuel-consumption
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2016-fuel-consumption
solution_type: official
source_document: solution-document-nbpho-2016-s
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2016_S.pdf."
---

1. Fuel consumption If the car produces
a forward force F at a speed of v, then the work
done on a path length s is W = Fs. Since the ef-
ficiency is constant, this work is proportional to
the consumed fuel volume, W = ksf, where
f = f(t) denotes the fuel consumption rate
(volume per distance), and k is a proportional-
ity coefficient. Hence, F = kf(t), i.e. the fuel
consumption graph can be interpreted as a force
graph. The proportionality constant k can be
found from the fact that when the car is start-
ing from the rest, there is no air drag (air drag is
zero if speed is zero), and hence, all the driving
force goes to accelerating the car, F(0s) = ma0.
Keeping in mind that f(0s) = 33l/100km =
ma0/k = mg
2k , we obtain k
mg = 1.52km/l.
At v0 = 90km/h, there is air drag which we
need to consider, but since the speed is constant,
so is the force from the air drag and we can just
subtract F(16s) to get the force without the air
drag. Theincreasedfuelconsumptionwhengoing
uphill at an angle α comes from the component
of the gravitational force tangential to the road
F(t) − F(16s) = mg sin(α). The highest point
with sinα = 0 is reached when the fuel con-
sumption is again equal to that at 16s, which is
at 22s. The work done by the force pushing the
car W =
∫
[F(t) − F(16s)]ds =
∫
[F(t) −
F(16s)]v0dt = k
v0
∫22s
16s
[f(t) − f(16s)]dt goes
to the change of the potential energy mgh; here
the integral I ≡
∫22s
16s
[f(t) − f(16s)]dt ≈
0.38ls/km is found as a surface area from the
graph [the area between the graph and the line
f(t) = f(16s)]. Therefore, h = W/mg =
kI
v0mg ; with k
mg = 1.52km/l we obtain h ≈
14m.
The problem was graded as follows.
• Relating consumption rate C to F - 1.5p
• Determining the coeff. of proportionality
basedonC(0) = 33L/100kmanda(0) =
5m/s2
- 0.5p
• Noticing that max height is at 21s - 0.5p
• Noticing that due to friction, only the excess
consumption is related to mgh - 1p
• Relatingtheexcessareaunderthecurve(S)to
mgh - 1p
• Finding S - 0.3p
• Finding h - 0.2p
