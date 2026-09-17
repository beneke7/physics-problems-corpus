---
id: nbpho-2023-black-box
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2023-black-box
solution_type: official
source_document: solution-document-nbpho-2023-s
source_pdf: cache/phoxiv/nbpho/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2023_S.pdf."
---

4. BLACĸ BOX (12 points) — Solution by Jaan           10      636        70       341
                                                                                                                                         ductor current continuous).
Kalda, grading schemes by ....                        15      535        80       340                                                                                                          With the option (f), due to (V), the ca‐
                                                      20      468        90       339                                                        The first consideration is that there need    pacitor needs to be in the parallel section,
    Since there can be elements causing in‐           25      425       100       339                                                                                                      either (f1) as a single element, or (f2) paired
                                                                                                                                         to be two resistors because there are two dif‐
ertia — LR chains or RC chains, one has to            30      397       110       339                                                                                                      in series with a resistor, because of (I). In the
                                                                                                                                         ferent characteristic times (one resistor with
be patient when making measurements and               40      365       120       339                                                                                                      case of (f1), (III) tells us that battery must be
                                                                                                                                         two capacitors can produce still only one
wait for a long enough time to let the system                                                                                                                                              in the other parallel section (in series with
relax towards an equilibrium. There are two       These data are plotted as ln[(I − 339 μA)/μA]                                          characteristic time, because the capacitors,
                                                  versus time. One can see a fairly nice linear                                          either in parallel or in series, would com‐       a resistor), this is the circuit C. In the case
types of measurements which can be done.                                                                                                                                                   of (f2), combinatorics tells us that there are
                                                  plot which means that voltage is approach‐                                             bine effectively into one single capacitor).
1) After keeping the terminals short‐circuited    ing exponentially the limit value 339 μA. The                                          Next, the restriction (I): the battery and the    two positions for the battery — either as the
for a long enough time, release the short‐        characteristic time can be found as the re‐                                            capacitor cannot be in series, because they       single element in series which is the circuit
circuting wire and measure the voltage V as       ciprocal of the trend line (we discard the                                             would combine effectively into a single ca‐       (D), or in parallel with the capacitor‐resistor
a function of time:                               rightmost data points as there, the voltage                                            pacitor. Second, the restriction (II): the bat‐   series connection. The latter option, how‐
  V (mV) t (s) V (mV) t (s)                       changes are small, so the relative errors are                                          tery and the capacitor cannot be in paral‐        ever, means that the battery would always
     0       1073      90      2977               big), As a result we obtain τ1 = s.                                                    lel, either, because they would combine ef‐       maintain the same voltage on the capacitor‐
     5       1317     100      3049                                                                                                      fectively into a single battery. Then, restric‐   resistor series connection, i.e. the output
                                                          3
    10       1564     110      3073                                                                                                      tion (III): neither capacitor nor battery can     voltage and current would remain always
    15       1765     120      3091                                                                                                      be connected directly to the output terminals     constant.
    20       1950     130      3116                                                                                                      as in one case, the ammeter current would             Circuit (A):
    25       2109     149      3124                       2
                                                                                                                                         asymptotically approach zero when connec‐
    30       2248     159      3131                                                                                                      ted to the output, and in the other case,
    40       2465     160      3124                       ln(I/μA)
                                                                                                                                         the output voltage would be always constant.
    50       2629     170      3131                       1                                                                              This excludes automatically many possibilit‐
    60       2751     180      3135                                                                                                      ies, see below. Also, (IV): there should not be
    70       2850     210      3145                                                                                                      a direct path from one terminal to the other
    80       2921     400      3155                       0
                                                                                             t(s)
                                                                                                                                         going only through the capacitor and the bat‐
These data are plotted as ln[(3155 mV −                       0   5        10   15   20     25      30    40   50   60         70   80
                                                                                                                                         tery as in that case, ammeter current would
V )/mV] versus time. One can see a fairly                                                                                                be very big, and the corresponding charac‐
nice linear plot which means that voltage             These data mean that inside, there should                                          teristic time would be very short. Finally,          Circuit (B):
is approaching exponentially the limit value      be a battery to maintain a voltage, a capa‐                                            (V): the capacitor can be only in a parallel
3155 mV. The characteristic time can be           citor to provide inertia — exponential decay                                           connection with something, because other‐
found as the reciprocal of the trend line (we     towards an equilibrium, and resistors. In                                              wise, there would be no capacitor current
discard the rightmost data points as there,       principle, one should consider also an op‐                                             when a voltmeter is connected to the output,
the voltage changes are small, so the relat‐      tion where there is an inductor instead of                                             hence, the voltage would remain constant.
ive errors are big), As a result we obtain τ1 =   the capacitor; however, it can be excluded
                                                  by various ways. First, it is not realistic to                                             Topologically, there are options (a) all in

                                                  remains unchanged, Ui = ER1 /(R1 + R2 ), so            after the recharging has begun; either
                                                  we can again check if everything fits: we ob‐          resistance of one of the resistors can be
                                                  tained R1 /(R1 + R2 ) = 0.347, and Ui /E =             found or the equation for both resistors
                                                  0.340; this is a fit within the uncertainties.         can be written (1 pts)
                                                      Now, τ1 = R2 C so that C = τ1 /R2 =             – R1 is found correctly (0.5 pts)
                                                  5.67 mF. Alternatively we can calculate the         – R2 is found correctly (0.5 pts)
                                                  same thing using τ2 = R1 R2 C/(R1 + R2 ),           Note: plausible resistance values are:
                                                  hence C = τ2 (R1 + R2 )/(R1 R2 ) = 5.84 mF.         9.31 kΩ, 4.94 kΩ, 3.23 kΩ, 6.08 kΩ.
   Circuit (C):                                   Again, there is a match of results within the     • The capacitance of the capacitor is found
                                                  uncertainties.                                      correctly:
                                                                                                      – Two tables of both voltage during the
                                                      Grading:                                           charging and current during the dis‐
                                                  • Black box circuit diagram is correct:                charge are present; give half, if only one
                                                    – The initial voltage U0 ̸= 0, which means           table is present (1.2 pts)
                                                       that the circuit contains battery of some      – The measurements of voltage or current
                                                       sort (0.5 pts)                                    are presented graphically (0.8 pts)
                                                    – The changing current suggests that the          – The method to find the capacitance is
                                                       circuit contains a capacitor or an in‐            found (0.8 pts)
   Circuit (D):                                                                                       – Correct capacitance C ≈ 2.5 mF or C ≈
                                                       ductor (0.3 pts)
                                                    – The use of an inductor is unrealistic for          5.7 mF is found (0.5 pts)
                                                       the provided black box, consequently             Note: the solution that uses a direct meas‐
                                                       the circuit must contain a capacitor         urement of resistance with a multimeter to
                                                       (0.2 pts)                                    be given 0, since the circuit contains a bat‐
                                                    – The discharging of the capacitor is not       tery; the solution that uses a direct measure‐
                                                       instantaneous, so there must be a res‐       ment of capacitance with a multimeter to be
                                                       istor between the capacitor and output       given 0.2, since the capacitance is outside of
                                                       terminals (1 pts)                            limits of the provided multimeter.
    In all four cases, the voltmeter reading,       – The recharging of the capacitor is not
when connected to the output, tends asymp‐             instantaneous, so must be a resistor
totically towards the electromotive force of           between the capacitor and the battery
the battery, so E = 3.155 V.                           (1 pts)
    For cases (A) and (D), the initial ammeter      – Correct circuit diagram is drawn (2 pts)
reading is I0 = E(R1−1 + R2−1 ) = 978 μA            – Additional notice: if the suggested cir‐
and the asymptotic ammeter reading is If =             cuit is such that one element would be
                                                       masked by another element (e.g. a ca‐
E/R2 = 339 μA; based on that we can cal‐               pacitor is parallel to a battery in which
culate R2 = E/If = 9.31 kΩ and R1 =                    case the capacitor would be always fully
(I0 /E − 1/R2 )−1 = 4.94 kΩ. For those cases,          charged and undetectable, or a capacitor
the initial voltage Ui = ER1 /(R1 + R2 ), so           is series with a battery in which case the
we can check if everything fits: we obtained           battery voltage would be compensated
R1 /(R1 +R2 ) = 0.347, and Ui /E = 0.340; this         by the capacitor and undetectable), the
is a fit within the uncertainties.                     marks for circuit will be reduced by 50%.
    For the very same cases, τ1 = (R1 + R2 )C     • Electromotive force of the battery is found
so that C = τ1 /(R1 + R2 ) = 2.42 mF. Altern‐       correctly based on the drawn circuit dia‐
atively we can calculate the same thing us‐         gram (1 pts)
ing τ2 = R1 C, hence C = τ2 /R1 = 2.50 mF.        • The resistance of both resistor is found cor‐
Again, there is a match of results within the       rectly (circuit diagram dependent):
uncertainties.                                      – When the capacitor is fully charged the
    Finally, for (B) and (C), the initial am‐          current doesn’t flow through it, or in
meter reading is I0 = E/R1 = 978 μA and the            other words RC = ∞; either sum of two
asymptotic ammeter reading is If = E/(R1 +             resistances or resistance of one of the
                                                       resistors can be found (1 pts)
R2 ) = 339 μA; based on that we can calculate       – Otherwise, when the capacitor is dis‐
R1 = E/I0 = 3.23 kΩ and R2 = (If /E − R1 =             charged RC = 0 in the first moments
