---
id: nbpho-2022-brightness-of-planets
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2022-brightness-of-planets
figure_files: [nbpho-2022-solution-p7.png, nbpho-2022-solution-p8.png]
provenance_note: "Official NBPhO 2022 solution, Planets. Mathpix OCR of the cached solutions PDF (cache/phoxiv/nbpho/2022_S.mmd), with planet symbols corrected against the statement. Solution diagrams are preserved as local rendered source pages."
---

**i)** A waxing crescent Moon can be seen immediately after sunset, when the Moon is
between the Sun and Earth in the appropriate orbital configuration. The answer is A.

![solution page](../../sources/nbpho/figures/nbpho-2022-solution-p7.png)

**ii)** The zenith in Tallinn forms an angle $\varphi=59.5^{\circ}$ with the celestial
equator. At winter solstice the Sun is $\varepsilon=23.5^{\circ}$ below the celestial
equator, so the full Moon is $\varepsilon$ above it. Its maximum altitude is therefore

$$
90^{\circ}-\varphi+\varepsilon=54.0^{\circ}.
$$

**iii)** Mars is closest to and farthest from Earth when it lies on the Earth--Sun
line. In both positions it is at full phase, and its distance from the Sun is
$R_{\mathrm{M}}$. Thus

$$
d_{-}=R_{\mathrm{M}}-R_{\oplus},
\qquad
d_{+}=R_{\mathrm{M}}+R_{\oplus},
$$

and the inverse-square law gives

$$
\frac{I_{\max}}{I_{\min}}
=\left(\frac{R_{\mathrm{M}}+R_{\oplus}}
{R_{\mathrm{M}}-R_{\oplus}}\right)^2=25.
$$

**iv)** The relative angular speed is

$$
\Delta\omega=\frac{2\pi}{T_{\oplus}}-\frac{2\pi}{T_{\mathrm{M}}}.
$$

Kepler's third law gives

$$
T_{\mathrm{M}}=T_{\oplus}\left(\frac{R_{\mathrm{M}}}{R_{\oplus}}\right)^{3/2}.
$$

The relative angular separation must change by $\pi$, so

$$
t=\frac{\pi}{\Delta\omega}
=\frac{T_{\oplus}}{2}
\frac{1}{1-(R_{\oplus}/R_{\mathrm{M}})^{3/2}}
=1.1\ \mathrm{yr}.
$$

**v)** The greatest angular separation of Venus from the Sun occurs when the
Earth--Venus ray is tangent to Venus's orbit. Hence

$$
\alpha=\arcsin\left(\frac{R_{\mathrm{V}}}{R_{\oplus}}\right)=46.1^{\circ}.
$$

The corresponding duration after sunset is

$$
1\ \mathrm{day}\,\frac{\alpha}{2\pi}=11050\ \mathrm{s}
=3\ \mathrm{h}\ 4\ \mathrm{min}.
$$

**vi)** Let $\beta$ be the angle at Venus between the Sun and Earth. The visible
illuminated fraction is $(1+\cos\beta)/2$, so, up to the arbitrary normalization
$I_0$,

$$
\frac{I}{I_0}=\frac{1+\cos\beta}{L^2}.
$$

The cosine law gives

$$
R_{\oplus}^{2}=R_{\mathrm{V}}^{2}+L^{2}
-2R_{\mathrm{V}}L\cos\beta.
$$

Consequently, with $x=L^{-1}$,

$$
\frac{I}{I_0}
=\frac{R_{\mathrm{V}}^{2}-R_{\oplus}^{2}}{2R_{\mathrm{V}}}x^3
+x^2+\frac{1}{2R_{\mathrm{V}}}x
=-\frac{R_{\oplus}^{2}-R_{\mathrm{V}}^{2}}{2R_{\mathrm{V}}}x^3
+x^2+\frac{1}{2R_{\mathrm{V}}}x.
$$

**vii)** Set the derivative of the cubic to zero:

$$
-3\frac{R_{\oplus}^{2}-R_{\mathrm{V}}^{2}}{2R_{\mathrm{V}}}x^2
+2x+\frac{1}{2R_{\mathrm{V}}}=0.
$$

The positive root is the maximum. Written in terms of $L_0=1/x$, it is

$$
L_0=-2R_{\mathrm{V}}+\sqrt{3R_{\oplus}^{2}+R_{\mathrm{V}}^{2}}
=0.436\ \mathrm{AU}.
$$

This lies in the physical interval. The corresponding angular separation is

$$
\alpha_0=\arccos\left(
\frac{R_{\oplus}^{2}+L_0^{2}-R_{\mathrm{V}}^{2}}
{2L_0R_{\oplus}}\right)=39.6^{\circ}.
$$
