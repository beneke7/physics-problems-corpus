---
id: komal-P5731
source: komal
language: hu
translated: false
problem: komal-P5731
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 a) Relativisztikusan kell számolni. A gamma-foton energiája akkor minimális, ha a keletkező $2n+1$ részecske egy kupacban repül a párkeltést kiváltó foton eredeti mozgásának irányában. Írjuk fel az impulzus- és az energiamegmaradási egyenleteket:
 $p=(2n+1)p_\mathrm{e}\qquad\textrm{és}\qquad pc+mc^2=\sqrt{((2n+1)p_\mathrm{e}c)^2+((2n+1)mc^2)^2},$
 ahol $p$ a gamma-foton impulzusa, $m$ az elektron vagy a pozitron tömege, $p_\mathrm{e}$ pedig ezeknek az együtt mozgó részecskéknek az impulzusa. Az impulzusegyenletet felhasználva, továbbá az energiaegyenletet négyzetre emelve ezt kapjuk:
 $(pc+mc^2)^2=(pc)^2+\left((2n+1)mc^2\right)^2,$
 amiből
 $pc=hf=2n(n+1)mc^2.$
 A párkeltést kiváltó gamma-foton minimális energiája ennek megfelelően egyetlen elektron-pozitron pár esetén $4mc^2$, két pár esetén $12mc^2$, három pár esetén $24mc^2$ és így tovább. Láthatjuk, hogy a minimálisan szükséges energia a párok számával erősen növekszik. A foton energiája egyenesen arányos az impulzusával, és így a nagyobb energiához nagyobb impulzus is tartozik, amit a keletkező kupacnak kell elvinni.

 b) A $2n+1$ részecskéből álló kupac sebessége így kapható meg:
 $hf+mc^2=pc+mc^2=2n(n+1)mc^2+mc^2=\frac{(2n+1)mc^2}{\sqrt{1-\frac{v^2}{c^2}}},$
 amiből
 $v=\frac{2n(n+1)c}{2n(n+1)+1}.$
 Ennek megfelelően a keletkező kupac minimális sebessége egyetlen elektron-pozitron pár esetén $\tfrac{4}{5}c$, két pár esetén $\tfrac{12}{13}c$, három pár esetén $\tfrac{24}{25}c$ és így tovább. A kupac sebessége a párok számának növekedtével erősen tart a $c$ fénysebességhez.

**II. megoldás.**
 Relativisztikus részecskefizikában kényelmes, ha nem SI, hanem $\hbar=c=1$ egységrendszerben számolunk. Ebben a rendszerben egy $f$ frekvenciájú foton energiája is és az impulzusa is $\omega$ nagyságú (ahol $\omega=2\pi f$. Az energiát és az impulzust érdemes egy vektor (az energia-impulzus vektor) két komponensének tekinteni: $P_\textrm{foton}=(\omega,\,\omega)$. Ugyanezek a mennyiségek egy álló elektronra $P_\textrm{elektron}=(m,\,0)$, az $n+1$ elektronból és $n$ pozitronból álló ,,kupacra'' pedig $P_\textrm{kupac}=(E,\,p)$. ($m=510\,\mathrm{keV}$ az elektron tömege, ami megegyezik a pozitron tömegével.)
 Az energia és az impulzus megmaradási törvénye szerint
 $P_\textrm{foton}+P_\textrm{elektron}=P_\textrm{kupac},$
 vagyis $E=\omega+m$ és $p=\omega$.
 Egy részecske tömegének négyzete az energia négyzetének és az impulzus négyzetének különbségével egyenlő. Fotonra $m_\textrm{foton}^2=\omega^2-\omega^2=0$, álló elektronra $m_\textrm{elektron}^2=m^2-0$, a együtt mozgó kupacra pedig $m_\textrm{kupac}^2=(2n+1)^2m^2$. Ennek megfelelően
 $(\omega+m)^2-\omega^2=(2n+1)^2m^2,$
 vagyis a gamma-foton szükséges legkisebb energiája
 $\omega=2n(n+1)m\approx n(n+1)\,\mathrm{MeV}.$
 Az egy kupacban mozgó (tehát egyetlen részecskének tekinthető) ,,nyaláb'' sebessége
 $v=\frac{p}{E}=\frac{\omega}{\omega+m}=\frac{2n^2+2n}{2n^2+2n+1}.$
