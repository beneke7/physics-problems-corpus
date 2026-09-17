---
id: nbpho-2018-air-submarine
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2018-air-submarine
solution_type: official
source_document: solution-document-nbpho-2018-s
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2018_S.pdf."
---

8. AIR IN A SUBMARINE
i) We are supposed to calculate the volume
rate (in m3
s ) at which the water ﬂows in. We
know A = 10cm2
. We apply Bernoulli’s equa-
tion, where the initial point is in the sea and the
ﬁnal point is in the hole:
Pi +
1
2
ρv2
i
| {z }
=0
= Pf +
1
2
ρv2
f (5)
from which we get:
vf =
√
2
∆P
ρ
≈
√
2gh=76.72m/s. (6)
Here vf is the speed at which the water ﬂows
in. This we can insert into the equation for the
volume rate:
Q = Avf =0.153
m3
s
≈150
litres
s
. (7)
ii) Atmospheric air consists mainly of diatomic
nitrogen and oxygen gas. At the temperatures
involved these molecules have f = 5 degrees of
freedom: 3 translational and 2 rotational. The
adiabatic constant γ is γ =(f +2)/f =7/5. One
can also obtain this result from γ=(cV +R)/cV .
For adiabatic compression we have
piV
γ
i
= pf V
γ
f
. (8)
The ﬁnal pressure is the pressure from the sea,
which is approximately p0+ρgh=(105
+1000·
9.8·300)Pa≈3MPa. This gives
Vf =Vi
(
pi
pf
)5
7
≈0.9m3
(9)
Note: The ﬁnal temperature is only about 2.6
times the initial temperature, such that the vi-
brational degrees of freedom of the molecules
does not have to be considered.
iii) The work W done on the system (consist-
ing of the whole submarine) by the surrounding
water is W = Pc∆V, where Pc is the constant
pressure of the surrounding water. There is no
heat exchange, so this work must be equal to the
change in internal energy of the system:
W =∆Ugas +∆Uwater = cV n∆T +Kturb (10)
where Kturb is the quantity that we are after and
get:
Kturb = Pc∆V −cV n∆T. (11)
We need the value of n (NB. you can also ﬁgure
it out from the ideal gas law):
n=
m
M
(12)
where m = 1.23
kg
m3 ·10m3
= 12.3kg and M =
0.02897
kg
mol. Plugging in the values we get n ≈
424mol. The ﬁnal temperature can be calcu-
lated from the initial temperature by using that
p1−γ
Tγ
is conserved.
By plugging in all the other values we get:
Kturb ≈2.2×107
J. (13)
Alternative solution: Alternatively, one can
look at the gas and the water (inside the submar-
ine) as separate subsystems. The work done on
the gas is equal to the change in internal energy
of the gas:
∫
Pg dV = cV n∆T. (14)
The work done on the water inside the submar-
ine by the water outside the submarine is Pc∆V.
The water inside the submarine also does work
on the gas given by
∫
Pg dV. The change in in-
ternal energy of the water in the submarine is
then
Kturb = Pc∆V −
∫
Pg dV = Pc∆V −cV n∆T
(15)
where the last equality follows from eqn (??).
From here one proceeds as already written
above.
