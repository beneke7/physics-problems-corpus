---
id: komal-P5630
source: komal
language: hu
translated: false
problem: komal-P5630
figure_files: [komal-P5630-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A gáz két összetevőjére: 

 A gázkeverék belső energiája, tömege és a mólok száma: 
$$\begin{gather*}
E=E_\mathrm{N_2}+E_\mathrm{Ar}=\frac{5}{2}n_\mathrm{N_2}RT+\frac{3}{2}n_\mathrm{Ar}RT,\\
m=m_\mathrm{N_2}+m_\mathrm{Ar}=27\,\mathrm{g}=0{,}027\,\mathrm{kg},\\
n=n_\mathrm{N_2}+n_\mathrm{Ar}=0{,}75\,\mathrm{mol}.
\end{gather*}$$
 Izochor folyamat esetén $W=0$ és így $Q=\Delta E$, amiből 
 $c_V=\frac{Q}{m\Delta T}=\frac{\Delta E}{m\Delta T}=\frac{\left(\frac{5}{2}n_\mathrm{N_2}+\frac{3}{2}n_\mathrm{Ar}\right)R\Delta T}{m\Delta T}=50{,}9\,\mathrm{\frac{mol}{kg}}\cdot R=423\,\mathrm{\frac{J}{kg\,K}}.$ 

 Izobar folyamat esetén $Q=\Delta E+W$, ahol 
 $W=p\Delta V=nR\Delta T=\left(n_\mathrm{N_2}+n_\mathrm{Ar}\right)R\Delta T,$ 
 és így 
 $c_p=\frac{Q}{m\Delta T}=\frac{\Delta E+W}{m\Delta T}=\frac{\left(\frac{7}{2}n_\mathrm{N_2}+\frac{5}{2}n_\mathrm{Ar}\right)R\Delta T}{m\Delta T}=78{,}7\,\mathrm{\frac{mol}{kg}}\cdot R=654\,\mathrm{\frac{J}{kg\,K}}.$ 

 Megjegyzések. 1. $c_p$-t úgyis megkaphatjuk $c_V$-ből, ha felhasználjuk a 
 $c_p-c_V=\frac{R}{M}$ 
 Robert–Mayer-egyenletet. A gázkeverék átlagos moláris tömege: 
 $M_\textrm{átl}=\frac{m}{n}=36\,\mathrm{\frac{g}{mol}}=0{,}036\,\mathrm{\frac{kg}{mol}},$ 
 amiből 
 $c_p=c_V+\frac{R}{M_\textrm{átl}}=\left(50{,}9\,\mathrm{\frac{mol}{kg}}+27{,}8\,\mathrm{\frac{mol}{kg}}\right)\cdot R=423\,\mathrm{\frac{J}{kg\,K}}+231\,\mathrm{\frac{J}{kg\,K}}=654\,\mathrm{\frac{J}{kg\,K}}.$ 
 2. A fajhőket úgy is megkaphatjuk, ha külön kiszámítjuk a nitrogén és az argon fajhőit, és azokat a tömegekkel súlyozva átlagoljuk: 
 $$\begin{gather*}
c_{V,\mathrm{N_2}}=\frac{5}{2}\frac{R}{M_\mathrm{N_2}}=742\,\mathrm{\frac{J}{kg\,K}},\\
c_{V,\mathrm{Ar}}=\frac{3}{2}\frac{R}{M_\mathrm{Ar}}=312\,\mathrm{\frac{J}{kg\,K}},\\
c_V=\frac{m_\mathrm{N_2}c_{V,\mathrm{N_2}}+m_\mathrm{Ar}c_{V,\mathrm{Ar}}}{m}=423\,\mathrm{\frac{J}{kg\,K}},
\end{gather*}$$
 illetve 
 $$\begin{gather*}
c_{p,\mathrm{N_2}}=\frac{7}{2}\frac{R}{M_\mathrm{N_2}}=1039\,\mathrm{\frac{J}{kg\,K}},\\
c_{p,\mathrm{Ar}}=\frac{5}{2}\frac{R}{M_\mathrm{Ar}}=520\,\mathrm{\frac{J}{kg\,K}},\\
c_p=\frac{m_\mathrm{N_2}c_{p,\mathrm{N_2}}+m_\mathrm{Ar}c_{p,\mathrm{Ar}}}{m}=654\,\mathrm{\frac{J}{kg\,K}}.
\end{gather*}$$

![solution figure](../../raw_html/komal_figures/komal-P5630-sol-fig1.png)
