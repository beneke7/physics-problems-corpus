---
id: nbpho-2014-dc-dc-converter
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2014-dc-dc-converter
solution_type: official
source_document: solution-document-nbpho-2014-s
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2014_S.pdf."
---

1. DC-DC converter
1) (1 pt) From the Kircho 's voltage law for
the loop consisting of L and E, E = LdI
dt
, hence
I = Et/L. From I0 = EτL/L we obtain
τL = LI0/E.
2) (1 pts) Once the current I0 is reached, the key
is opened; the current trough L cannot change
instantaneously and therefore is forced to
ow
through the resistor R. Since the characteristic
time of this current loop (consisting of L and R
is very short (L/R
 τK), the current decays
very fast and becomes essentially equal to zero
while the key is still open. Now there is no cur-
rent through the inductor, so that the key will
close again and the process will start repeating
from the beginning. As a result we'll have a
periodic graph as shown in
gure.
I
I0
t
3) (1 pt) The voltage through the resistor is
maximal when the current is maximal, which
happens immediately after the switch is opened;
the maximal current is I0 so that Vmax = RI0.
4) (2 pts) Due to Vmax
 V0, we can neglect
the e ect of the diode; so we have the Kircho 's
voltage law LdI
dt
= RI = Rdq
dt
(here we ex-
pressed the current via the charge q which
ows
through the resistor). Integration over a single
cycle (when the inductor current drops from I0
down to 0) yields LI0 = R∆q, hence the charge

own through the resistor (and through the di-
ode) ∆q = I0L/R. During that cycle, the diode
had a constant voltage V0, so the electric
eld
performed work A = V0∆q which was released
as heat in the diode. So, the average power dis-
sipation
P =
A
τL
=
V0I0L
RτL
=
V0E
R
.
5) (2 pts) Now, since the characteristic time of
the RC-loop is very large, the capacitor main-
tains its charge (and voltage) during that period
of time when the diode is closed. Once the key
K1 opens, the diode will open, and the capacitor
is connected to the inductor so that a LC-loop is
formed. That loop admits oscillations of period
TLC = 2π
√
LC and as the current to the resistor
can be neglected (since RC
 TLC), we can neg-
lect the presence of the resistor. During the time
interval when the diode is open, we can also neg-
lect the presence of the diode since V0
 Vmax .
Hence, the current i in the LC-loop changes in
time sinusoidally, starting from i = I0 and end-
ing when i = 0 (then the diode will close discon-
necting the LC-loop). During that process, the
magnetic energy of the inductor
1
2
LI2
0 is conver-
ted into the electric
eld energy of the capacitor,
which is later released as heat on the resistor.
When the stationary regime is achieved, the en-
ergy lost by the capacitor during one period (of
duration τL) as the heat dissipation on the res-
istor Q = V 2
avτL/R must be equal to the energy
received from the inductor; so,
V 2
avτL
R
=
1
2
LI2
0 ⇒ Vav = I0
r
LR
2τL
=
r
EI0R
2
.
6) (1 pt) The charge which
ows away from
the capacitor when the diode is closed can be
found as qC = τLVav/R (owing to RC
 τLC,
the relative change of the capacitor's voltage
is small). Hence, the voltage drop is found as
∆V = qC/C = τLVav/(RC). The amplitude is
half of the di erence between the minimal and
maximal values, so that the amplitude
U0 =
∆V
2
=
τLVav
2RC
=
I0L
2C
r
I0
2RE
.
