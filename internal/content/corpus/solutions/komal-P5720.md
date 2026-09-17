---
id: komal-P5720
source: komal
language: hu
translated: false
problem: komal-P5720
figure_files: [komal-P5720-sol-fig1.gif, komal-P5720-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A négy $C$ kapacitású kondenzátor egyetlen, szintén $C$ kapacitású kondenzátorral helyettesíthető (hiszen két sorban kapcsolt kondenzátor eredője $C/2$, és ebből kettő van párhuzamosan kapcsolva), ahogy az 1. ábrán látható. 

 1. ábra 

 a) Az áramköri elemek közül csak az Ohmos ellenálláson fejlődik hő, csak annak van hasznos teljesítménye (így ebben a feladatrészben a kondenzátornak nincs szerepe). A sorba kapcsolt tekercs és Ohmos ellenállás eredő impedanciája: 
 $Z_{RL}=\sqrt{R^2+(L\omega)^2},$ 
 ahol $\omega=2\pi f=314\,\mathrm{s^{-1}}$. Az ágon átfolyó áramerősség: 
 $(1)$ $I_{RL}=\frac{U}{Z_{RL}},$ 
 és így az Ohmos ellenálláson disszipálódó hasznos teljesítmény: 
 $P_\mathrm{h}=RI_{RL}^2=\frac{RU^2}{R^2+(L\omega)^2}=44{,}5\,\mathrm{W}.$ 

 Megjegyzés. Alternatív megoldási lehetőség a feszültségosztó képlet használata: 
 $U_R=\frac{R}{Z_{RL}}U=\frac{R}{\sqrt{R^2+(L\omega)^2}}U,$ 
 amiből 
 $P_\mathrm{h}=\frac{U_R^2}{R}=\frac{RU^2}{R^2+(L\omega)^2},$ 
 az előző megoldással összhangban. 

 b) Az áramkör fázisviszonyait a 2. ábrán látható fazorábra mutatja. (A fazorok az egyes mennyiségek nagyságát és fázisát jelölő vektorok.) Az ellenállás $U_R$ feszültsége fázisban van az $RL$ ágon átfolyó $I_{RL}$ árammal, a tekercs $U_L$ feszültsége pedig $90^\circ$-kal siet hozzá képest. A két feszültség eredője az $U$ kapocsfeszültség, amely egyben a kondenzátor feszültsége is. A kondenzátor $I_C$ árama ehhez képest $90^\circ$-kal siet. Az egész áramkör $I$ eredő árama $I_{RL}$ és $I_C$ eredője. 

 2. ábra 

 A meddő teljesítmény akkor tűnik el, ha $I$ fázisban van $U$-val. Ez a feltétel meghatározza $I_C$ nagyságát, a 2. ábra alapján 
 $I_C=I_{RL}\sin\varphi,$ 
 ahol 
 $\sin\varphi=\frac{U_L}{U}=\frac{L\omega}{Z_{RL}}.$ 
 Az (1) kifejezés felhasználásával: 
 $I_C=\frac{U}{Z_{RL}}\,\frac{L\omega}{Z_{RL}}=\frac{L\omega}{Z_{RL}^2}U=\frac{L\omega}{R^2+(L\omega)^2}U.$ 
 Ebből a keresett $C'$ kapacitás: 
 $C'=\frac{I_C}{U\omega}=\frac{L}{R^2+(L\omega)^2}=9{,}2\,\mu\mathrm{F}.$ 
 Ekkora kapacitású kondenzátorra kellene cserélni az 1. ábrán látható kondenzátort, amivel egyenértékű, ha az eredeti áramkör mind a négy kondenzátorát ekkora kapacitásúra cseréljük. 

**II. megoldás.**
 Váltakozó áramú áramkörök kényelmesen leírhatók komplex jelölésmóddal (lásd Olosz Balázs: Komplex számok a fizikában, II. rész: Váltóáramú feladatok megoldása komplex számokkal cikket lapunk 2024. májusi számában). 
 Az áramkör komplex impedanciája: 
 $Z^\star=(R+L\omega i)\times\frac{1}{C\omega i}=\frac{R+L\omega i}{1-LC\omega^2+RC\omega i},$ 
 ebből a komplex teljesítmény: 
 $P^\star=\frac{U^2}{Z^\star}=\frac{1-LC\omega^2+RC\omega i}{R+L\omega i}U^2=\frac{R+\left(C\omega\left(R^2+(L\omega)^2\right)-L\omega\right)i}{R^2+(L\omega)^2}U^2.$ 
 a) A hasznos teljesítmény ennek a valós része: 
 $P_\mathrm{h}=\mathrm{Re}\,P^\star=\frac{R}{R^2+(L\omega)^2}U^2=44{,}5\,\mathrm{W}.$ 

 b) A meddő teljesítmény eltűnésének feltétele: 
 $P_\mathrm{m}=\mathrm{Im}\,P^\star=\frac{C'\omega\left(R^2+(L\omega)^2\right)-L\omega}{R^2+(L\omega)^2}U^2=0,$ 
 amiből 
 $C'=\frac{L}{R^2+(L\omega)^2}=9{,}2\,\mu\mathrm{F}.$

![solution figure](../../raw_html/komal_figures/komal-P5720-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5720-sol-fig2.gif)
