---
id: nbpho-2011-heat-sink
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2011-heat-sink
solution_type: official
source_document: solution-document-nbpho-2011-s
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2011_S.pdf."
---

8. Heatsink(6points)
i)WhentheaveragetemperatureisstableatT0,allthepowerdis-
sipated at the electronic component iseventually given to the air:
theairisbeingheatedwithpowerP. Astheheatfluxdependslin-
early on the temperature difference between a point on the plate
and the air, the average heat flux and therefore the net power dis-
sipatedintotheairdependslinearlyontheaveragetemperatureof
theplate. Theaveragetemperaturedeterminestheradiatedpower.
Now consider the situation after the heating has ended. The
average temperature is initially the same, so the radiated heat
power is initially still P. By the definition of heat capacity, an
infinitesimal heat amount given to the surroundings is dQ =
−C dTavg withtheminussignencoding thedirection oftheheat
flow. Thus, at the first moment, P = dQ
dt
= −CdTavg
dt
. Assum-
ingthat during τ theaveragetemperature dependsapproximately
linearly on time (because T0 − T1 = 1◦
C is much lessthan the
usual ambient temperature),
dTavg
dt
≈ T1−T0
τ
and C ≈ Pτ
T0−T1
=
350J/◦
C. ActuallythegraphofTavg(t)isslightlycurveddown-
wards(asitisanexponentialeventually stabilizing attheambient
temperature)andinitially somewhatsteeper,soC isabit smaller.
ii)Theaveragetemperatureoftheheatsinkfallsoffexponentially,
therefore, if the “tail” of the given graph turns out to be expo-
nential, we can presumethe “tail” depicts the situation where the
sensor is sensing the average temperature and the initial “bump”
in thetemperature distribution hasevened out. Extrapolating the
exponentialtot = 0wegettheinitial averagetemperatureTavg,0
(immediately after the Q has been dissipated into the sink) and,
by Q = C(Tavg,0 − Tamb), the heat Q. The ambient temper-
ature Tamb can be read off fromthe beginning of the given graph
where the sensor’s surroundings have not yet heated up. This is
furthermorea check forthe assumptionT0 − T1 ≪ Tamb made
in the first partofthe solution. Fromthe table, Tamb = 20.0◦
C.
Letusanalysethe(yethypothetical)exponentialTavg−Tamb
ought to obey, so that eventually we expect T ∼ Tavg =
Tamb +Tce− t
tc whereTc andtc are,respectively,acharacteristic
temperatureandacharacteristictime. (The“∼”means“isasymp-
toticalto”or“approaches”.) Weplotln(T −Tamb)usingthedata
from the table. Then approximate the “tail” linearly (valuing the
end of it most) to get ln[(T − Tamb)/◦
C] ∼ 4.89 − t
300 s
.
Therefore Tc ≈ e4.89 ◦
C ≈ 133◦
C. On the other hand,
plugging t = 0 into our exponential function shows that
Tavg,0 − Tamb = Tc and,finally, Q = CTc ≈ 46700J.
Actually, quite a good result can be obtained without re-
plotting anything, by just considering the last three datapoints
of the table. Denote ∆Ti ≡ Ti − Tamb. If the times t3 −
t2 = t2 − t1, then with an exponential we should observe
that ∆T3/∆T2 = ∆T2/∆T1. The last three timepoints are
good indeed, so we check ∆T1 = 4.4◦
C, ∆T2 = 2.3◦
C
and ∆T3 = 1.2◦
C. Their ratios are ∆T3/∆T2 ≈ 0.522 and
∆T2/∆T1 ≈ 0.523, a splendid match. This confirms the ex-
ponential “tail”. As in every equal time interval the ∆T is mul-
tiplied by the same number (that is the essence of exponentials),
Tc = ∆Tavg,0 = ∆T3 ×

∆T2
∆T3
 t3
t3−t2
≈ 114◦
C. From this,
Q ≈ 39900J. This is discrepant from our previous calculation,
butnottoomuch: Tc isexponentially sensitivetotheT-intercept
of the straight line fitted to the “tail” (its crossing point with the
T-axis)on the logarithmicplot. Thebumphasstillnot yetdisap-
pearedcompletelyenough.
