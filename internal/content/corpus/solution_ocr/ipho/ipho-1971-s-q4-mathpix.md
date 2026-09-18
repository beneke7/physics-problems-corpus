---
id: solution-ocr-ipho-1971-s-q4
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1971_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1971-q4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 4.

In a small time interval $\Delta t$ the fish moves upward, from point $A$ to point $B$, at a small distance $d = v \Delta t$. Since the glass wall is very thin we can assume that the rays leaving the aquarium refract as if there was water - air interface. The divergent rays undergoing one single refraction, as show in Fig. 4.1, form the first, virtual, image of the fish. The corresponding vertical displacement $A _ { 1 } B _ { 1 }$ of that image is equal to the distance $d _ { 1 }$ between the optical axis $a$ and the ray $b _ { 1 }$, which leaves the aquarium parallel to $a$. Since distances $d$ and $d _ { 1 }$ are small compared to $R$ we can use the small-angle approximation: $\sin \alpha \approx \tan \alpha \approx \alpha ($ rad $)$. Thus we obtain:

$$
\begin{align*}
& d _ { 1 } \approx R \alpha ;  \tag{4.1}\\
& d \approx R \gamma ;  \tag{4.2}\\
& \alpha + \gamma = 2 \beta ;  \tag{4.3}\\
& \alpha \approx n \beta . \tag{4.4}
\end{align*}
$$


From equations (4.1) - (4.4) we find the vertical displacement of the first image in terms of $d$ :

$$
\begin{equation*}
d _ { 1 } = \frac { n } { 2 - n } d , \tag{4.5}
\end{equation*}
$$

and respectively its velocity $v _ { 1 }$ in terms of $v$ :

$$
\begin{equation*}
v _ { 1 } = \frac { n } { 2 - n } = 2 v . \tag{4.6}
\end{equation*}
$$

![](../../../figures/solution-ocr/153a18b0567fb67e197bd731.jpg)
Fig. 4.1

The rays, which are first reflected by the mirror, and then are refracted twice at the walls of the aquarium form the second, real image (see Fig. 4.2). It can be considered as originating from the mirror image of the fish, which move along the line $A ^ { \prime } B ^ { \prime }$ at exactly the same distance $d$ as the fish do.

![](../../../figures/solution-ocr/9b0c820d3fb5440456d3a757.jpg)
Fig. 4.2

The vertical displacement $A _ { 2 } B _ { 2 }$ of the second image is equal to the distance $d _ { 2 }$ between the optical axis $a$ and the ray $b _ { 2 }$, which is parallel to $a$. Again, using the small-angle approximation we have:

$$
\begin{align*}
& d ^ { \prime } \approx 4 R \delta - d ,  \tag{4.7}\\
& d _ { 2 } \approx R \alpha \tag{4.8}
\end{align*}
$$

Following the derivation of equation (4.5) we obtain:

$$
\begin{equation*}
d _ { 2 } = \frac { n } { 2 - n } d ^ { \prime } . \tag{4.9}
\end{equation*}
$$

Now using the exact geometric relations:


$$
\begin{equation*}
\delta = 2 \alpha - 2 \beta \tag{4.10}
\end{equation*}
$$

and the Snell's law (4.4) in a small-angle limit, we finally express $d _ { 2 }$ in terms of $d$ :

$$
\begin{equation*}
d _ { 2 } = \frac { n } { 9 n - 10 } d , \tag{4.11}
\end{equation*}
$$

and the velocity $v _ { 2 }$ of the second image in terms of $v$ :

$$
\begin{equation*}
v _ { 2 } = \frac { n } { 9 n - 10 } v = \frac { 2 } { 3 } v . \tag{4.12}
\end{equation*}
$$

The relative velocity of the two images is:

$$
\begin{equation*}
\mathbf { v } _ { \text {rel } } = \mathbf { v } _ { 1 } - \mathbf { v } _ { 2 } \tag{4.13}
\end{equation*}
$$

in a vector form. Since vectors $\mathbf { v } _ { 1 }$ and $\mathbf { v } _ { 2 }$ are oppositely directed (one of the images moves upward, the other, downward) the magnitude of the relative velocity is:

$$
\begin{equation*}
v _ { \mathrm { rel } } = v _ { 1 } + v _ { 2 } = \frac { 8 } { 3 } v . \tag{4.14}
\end{equation*}
$$

## Experimental problem

The circuit is given in the figure below:
![](../../../figures/solution-ocr/78c755b7fcb0cd07b0cc1218.jpg)
Sliding the contact along the rheostat sets the current $I$ supplied by the source. For each value of $I$ the voltage $U$ across the source terminals is recorded by the voltmeter. The power dissipated in the rheostat is:

$$
P = U I
$$

provided that the heat losses in the internal resistance of the ammeter are negligible.

1. A typical $P - I$ curve is shown below:
![](../../../figures/solution-ocr/55440befde9d35c71fdd0dc6.jpg)

If the current varies in a sufficiently large interval a maximum power $P _ { \text {max } }$ can be detected at a certain value, $I _ { 0 }$, of $I$. Theoretically, the $P ( I )$ dependence is given by:

$$
\begin{equation*}
P = E I - I ^ { 2 } r , \tag{5.1}
\end{equation*}
$$

where $E$ and $r$ are the EMF and the internal resistance of the dc source respectively. The maxim value of $P$ therefore is:

$$
\begin{equation*}
P _ { \max } = \frac { E ^ { 2 } } { 4 r } , \tag{5.2}
\end{equation*}
$$

and corresponds to a current:

$$
\begin{equation*}
I _ { 0 } = \frac { E } { 2 r } . \tag{5.3}
\end{equation*}
$$

2. The internal resistance is determined trough (5.2) and (5.3) by recording $P _ { \max }$ and $I _ { 0 }$ from the experimental plot:

$$
r = \frac { P _ { \max } } { I _ { 0 } ^ { 2 } } .
$$

3. Similarly, EMF is calculated as:

$$
E = \frac { 2 P _ { \max } } { I _ { 0 } } .
$$

4. The current depends on the resistance of the rheostat as:

$$
I = \frac { E } { R + r } .
$$

Therefore a value of $R$ can be calculated for each value of $I$ :

$$
\begin{equation*}
R = \frac { E } { I } - r . \tag{5.4}
\end{equation*}
$$

The power dissipated in the rheostat is given in terms of $R$ respectively by:
![](../../../figures/solution-ocr/9af3bd978eb411b56c132335.jpg)
The $P - R$ plot is given below:
![](../../../figures/solution-ocr/5b8997abedfcb75225ae2632.jpg)
Its maximum is obtained at $R = r$.
5. The total power supplied by the dc source is:
![](../../../figures/solution-ocr/1d4c56d0754fd8417b666a19.jpg)


6. The efficiency respectively is:

$$
\begin{equation*}
\eta = \frac { P } { P _ { t o t } } = \frac { R } { R + r } . \tag{5.7}
\end{equation*}
$$

![](../../../figures/solution-ocr/1b7ddf70e59b12641fc6642d.jpg)
