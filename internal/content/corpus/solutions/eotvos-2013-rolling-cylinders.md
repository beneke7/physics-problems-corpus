---
id: eotvos-2013-rolling-cylinders
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2013-rolling-cylinders
figure_files: []
provenance_note: "Official Eötvös Competition 2013 solution, Problem 1, by Honyek Gyula. Structured from Mathpix OCR of the cached solutions PDF (cache/phoxiv/eotvos/mmd/2013_S.mmd)."
---

**Megoldás.**

Jelöljük a tehetetlenségi nyomatékot $\Theta=k mR^2$ alakban. A tiszta gördülés
feltétele $v=R\omega$, ezért a lejtőn:

$$
mgh=\frac12mv^2+\frac12\Theta\omega^2
     =\frac12mv^2(1+k),
\qquad
h=\frac{v^2}{2g}(1+k).
$$

A tömör alumíniumhengerre $k_{\mathrm{Al}}=1/2$, tehát $v=1\ \mathrm{m/s}$ esetén

$$
h_{\mathrm{Al}}=\frac{3v^2}{4g}=7{,}6\ \mathrm{cm}.
$$

A rézcső tömege és külső sugara megegyezik az alumíniumhengerével. Ha $R$ a külső,
$r$ a belső sugár, akkor

$$
r^2=\frac{\varrho_{\mathrm{Cu}}-\varrho_{\mathrm{Al}}}
              {\varrho_{\mathrm{Cu}}}R^2,
$$

így a rézcső tehetetlenségi nyomatékából

$$
k_{\mathrm{Cu}}=\frac{2\varrho_{\mathrm{Cu}}-\varrho_{\mathrm{Al}}}
                       {2\varrho_{\mathrm{Cu}}}=0{,}85.
$$

Ezért

$$
h_{\mathrm{Cu}}=\frac{2(1+k_{\mathrm{Cu}})}{3}h_{\mathrm{Al}}
               =9{,}4\ \mathrm{cm}.
$$

A vízszintes szakaszon jelölje $x$ a megállásig megtett utat, $d$ pedig a felület
által kifejtett eredő erő függőleges komponensének erőkarját a henger középpontjához
képest. Az alumíniumhengerre $a=v^2/(2x_{\mathrm{Al}})$, és a haladó- és forgómozgás
egyenleteiből:

$$
d=\frac{3v^2}{4g x_{\mathrm{Al}}}R.
$$

A rézcsőre ugyanígy

$$
d=\frac{(1+k_{\mathrm{Cu}})v^2}{2g x_{\mathrm{Cu}}}R.
$$

Mivel a támadáspont mindkét esetben ugyanott van, a két kifejezés egyenlő. Innen

$$
x_{\mathrm{Cu}}=\frac{2(1+k_{\mathrm{Cu}})}{3}x_{\mathrm{Al}}
                =2{,}46\ \mathrm{m}.
$$
