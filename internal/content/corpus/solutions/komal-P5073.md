---
id: komal-P5073
source: komal
language: hu
translated: false
problem: komal-P5073
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A szigetelőszál körül az elektromos térerősség ,,radiális'', és a nagysága a száltól $r$ távolságban (az elektrosztatikai Gauss-törvény szerint)
 $E(r)=\frac{2k\lambda}{r}.$
 Ez a térerősség az
 $U(r)=- 2k\lambda \ln \frac{r}{r_0} $
 potenciálnak felel meg, amint az integrálszámítással, vagy a hőtani analógia alapján (az izotermikus munkavégzés képlete alapján) látható be. A potenciál nullpontját önkényesen választott $r_0$ távolsághoz illesztettük, ez a távolság lehet például a fonál függőleges helyzetének megfelelő $d_0$ érték.
 Jelöljük a fonál függőlegessel bezárt szögét $x$-szel, és alkalmazzuk az energiamegmaradás tételét! Mivel a szigetelőszáltól mért távolság
 $d=d_0+\ell\sin x,$
 fennáll
 $\frac{1}{2}mv^2+mg\ell(1-\cos x)-2kq\lambda \ln \frac{d}{d_0}=0,$
 vagyis
 $f(x)\equiv v^2(x)=\frac{4kq\lambda}{m}\, \ln\left( 1+\frac{\ell}{d_0}\sin x\right)-2g\ell(1-\cos x).$
 A megadott mennyiségeket behelyettesítve (SI-egységrendszerben számolva)
 $f(x)=\ln\left( 1+2\sin x\right)-1{,}96\,(1-\cos x).$
 $a)$ A fémgolyó legnagyobb eltávolodását, vagyis a megállását jellemző szöget az $f(x)=0$ egyenlet $(x>0)$ gyöke adja meg. Grafikus ábrázolással, vagy pl. a http://www.wolframalpha.com segítségével megkaphatjuk, hogy $x\approx 1{,}05
$ rad, azaz kb. $60^\circ$. Ennek megfelelően a fémgömb legfeljebb 13,7 cm-re távolodik el a szigetelőszáltól.
 $b)$ Ugyancsak az $f(x)$ függvény vizsgálatával, a maximumának megkeresésével kapjuk meg a sebesség legnagyobb értékét. Ez $x\approx 0{,}49$ radiánnál, azaz $28^\circ$-nál található, és $v_\text{max}=0{,}66~$m/s.
 $c)$ A legnagyobb sebességnél a fonalat feszítő erő (Newton mozgástörvénye alapján):
 $F=mg\cos x+\frac{mv_\text{max}^2}{\ell}+\frac{2k\lambda q}{d_0+\ell\sin x}\sin x
\approx 0{,}03~\rm N.$
