---
id: komal-P5702
source: komal
language: hu
translated: false
problem: komal-P5702
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Először meghatározzuk a tekercsen átmenő fluxus változása miatt a tekercs környezetében kialakuló elektromos teret. Ha a tekercs árama $I(t)$, a hosszegységre jutó menetek száma $n=N/\ell$, a keresztmetszete pedig $A$ akkor a benne lévő mágneses indukció értéke:
 $B=\mu_0nI(t),$
 a fluxus pedig:
 $\Phi=\mu_0nI(t)A,$
 aminek a változási üteme:
 $\frac{\Delta\Phi}{\Delta t}=\mu_0n\dot{I}A.$
 Itt $\dot{I}=\Delta I/\Delta t$ az $I$ változási sebessége, ami a feladatunk szerint állandó. Ennek hatására az elrendezés henger-szimmetriája miatt olyan elektromos mező indukálódik, aminek az erővonalai a tekercs tengelyére merőleges síkokban fekvő koncentrikus körök, amelyek középpontja a tekercs tengelyére esik. Egy-egy ilyen kör mentén az elektromos térerősség állandó, és fennáll:
 $\sum E\Delta s=2\pi rE=-\frac{\Delta\Phi}{\Delta t},$
 amiből
 $E(r)=-\frac{\mu_0n\dot{I}A}{2\pi r}.$
 Itt a $-$ előjel arra utal, hogy ha a $B$ számára a fölfelé irányt tekintjük pozitívnak, és $\Phi$ nő, akkor az $E$ iránya az óramutató járásának megfelelő (ahogy azt a Lenz-törvény megkívánja).

 a) Ha a gyűrű alakú rézcsövet a szolenoid mellé helyezünk, akkor a cső falában az eredő elektromotoros erő nulla, mert a gyűrű nem vesz körbe változó mágneses fluxust, ennek megfelelően a cső falában nem folyhat áram. Ez úgy lehetséges, hogy a cső külső falán olyan vékony töltésréteg alakul ki, aminek a tere pont kompenzálja cső falában az indukált elektromos teret. Viszont ha az önmagába zárt cső falában nincs elektromos tér, külön odavitt töltés nélkül a belsejében sem lehet, tehát mind a cső falában, mind a cső belsejében az elektromos tér nulla.

 b) Ha a réz falú tóruszunkat a szolenoiddal koaxiálisan helyezzük el, mind a cső falában, mind pedig a belsejében mindenhol akkora a térerősség, amekkora a cső odahelyezése nélkül lenne. A különbség annyi, hogy most a csőfalban mindenhol az ott érvényes $E(r)$-nek megfelelő $j=\sigma E(r)$ áramsűrűségű áram folyik (ahol $\sigma$ a réz vezetőképessége). Nincs olyan erő, amely a cső falában bárhol az elektromos teret megváltoztató statikus töltésfelhalmozást tudna létrehozni, hisz az indukált elektromos tér mindenhol a cső aktuális érintője mentén hajtja az áramot.

 c) Ha a csövet elfűrészeljük valahol, akkor a cső falában nem folyhat áram. Most is a cső falának felületén (ami most a fűrészelésnél kialakult homlokfelületet és a cső belső felületét is jelenti) olyan töltésréteg alakul ki, amely a csőfal anyagában kompenzálja az eredeti elektromos teret, tehát magában a csőfalban a térerősség értéke nulla. Mivel ebben az esetben a külső tér és a cső belseje összefüggenek, a fűrészelés helyének a közelében a cső belsejében (nem a falában!) is kialakul egy szórt elektromos tér.

 Megjegyzés. Az a) és az c) esetben az a közös, hogy egyik esetben sem tudunk olyan, végig a cső falában (fém anyagában) futó zárt görbét kitűzni, amely a tekercs változó fluxusát körbefogná. Ennek megfelelően minden, a fémben futó zárt görbe mentén az eredő elektromotoros erő nulla:
 $\sum E\Delta s=0,$
 azaz az adott görbe mentén nem folyhat áram. Ebből következik, hogy a térerősségnek mindenhol nullának kell lennie, ahol ez nem teljesülne, olyan töltéselmozdulást hozna létre, ami ellene hatna. Ez ugyanaz a mechanizmus, ami miatt a statikus töltések tere leárnyékolódik a fémek belsejében.
