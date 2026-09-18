---
id: komal-P5387
source: komal
language: hu
translated: false
problem: komal-P5387
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az áramkörben
 $I=\frac{U_0}{R+R_{\rm b}}$
 erősségű áram folyik, így a külső, $R$ nagyságú ellenállásra jutó (ott disszipálódó) teljesítmény
 $P=I^2R=U_0^2\frac{R}{\left(R_{\rm b}+R\right)^2}.$
 Ez az egyenlet (adott $P$, $U_0$ és$R_{\rm b}$ esetén) $R$-re nézve másodfokú:
 $(1)$ $R^2+\left(2R_{\rm b}-\frac{U_0^2}P\right)R+R_{\rm b}^2=0.$
 $a)$ Az (1) egyenletnek akkor van valós megoldása, ha a diszkrimináns nemnegatív:
 $\left(2R_{\rm b}-\frac{U_0^2}P\right)^2\ge 4R_{\rm b}^2,$
 vagyis
 $P\le \frac{U_0^2}{4R_{\rm b}}=P_\text{max}.$
 Amennyiben $P=P_\text{max}$, az (1) egyenlet gyökei: $R_1=R_2=R_{\rm b}.$
 $b)$ Ha $P<P_\text{max},$ akkor a másodfokú egyenletnek két különböző gyöke van. A gyökök és együtthatók közötti összefüggésekből következik, hogy a gyökök összege
 $(2)$ $R_1+R_2= \frac{U_0^2}P-2R_{\rm b},$
 a szorzatuk pedig
 $(3)$ $R_1R_2=R_{\rm b}^2.$
 Ennek megfelelően az $R_1$ és $R_2$ számtani közepe
 $\frac{R_1+R_2}{2}=\frac{U_0^2}{2P}-R_{\rm b},$
 a mértani közepük pedig
 $\sqrt{R_1R_2}=R_{\rm b}.$
 $c)$ $R$ terhelő ellenállás esetén a kapocsfeszültség:
 $U =U_0-IR_{\rm b}=U_0\frac{R}{R+R_{\rm b}}.$
 Az (1) egyenlet két gyökéhez tartozó kapocsfeszültségek összege:
 $U_1+U_2=U_0\left(\frac{R_1}{R_1+R_{\rm b}}+\frac{R_2}{R_2+R_{\rm b}}\right)=
\frac{2R_1R_2+\left(R_1+R_2\right)R_{\rm b} }{R_1R_2+\left(R_1+R_2\right)R_{\rm b}+R_{\rm b}^2 }\,U_0=U_0.$
 Az utolsó lépésnél kihasználtuk (3)-at.
 $d)$ Az áramok összege:
 $I_1+I_2=\frac{U_0}{R_1+R_{\rm b}}+\frac{U_0}{R_2+R_{\rm b}}=U_0\frac{\left(R_1+R_2\right)+2R_{\rm b} }
{R_1R_2+\left(R_1+R_2\right)R_{\rm b}+R_{\rm b}^2 }
 =\frac{U_0}{R_{\rm b}}.$
 Az utolsó lépésben ismét kihasználtuk, hogy (3) szerint $R_1R_2=R_{\rm b}^2$.
 $e)$ A hatásfok $R$ terhelőellenállás esetén:
 $\eta=\frac{P_\text{hasznos}}{P_\text{összes}}=\frac{I^2R}{U_0I}=\frac{IR}{U_0}=\frac{R}{R+R_{\rm b}}.$
 A kétféle terheléshez tartozó hatásfokok összege:
 $\eta_1+\eta_2=\frac{R_1}{R_1+R_{\rm b}}+\frac{R_2}{R_2+R_{\rm b}}=
\frac { 2R_1R_2+\left(R_1+R_2\right)R_{\rm b} } {R_1R_2+\left(R_1+R_2\right)R_{\rm b}+R_{\rm b}^2 }=1.$

 Megjegyzés. Érdekes, hogy a $c)$, $d)$ és $e)$ kérdésekre adott válasz nem függ a $P$ teljesítmény nagyságától.
