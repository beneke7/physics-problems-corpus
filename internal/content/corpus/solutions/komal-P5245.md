---
id: komal-P5245
source: komal
language: hu
translated: false
problem: komal-P5245
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük a repülőgép körpályájának sugarát (vagyis az Egyenlítő sugarának és a repülési magasságnak az összegét) $r$-rel, a test tényleges tömegét $m$-mel, a Föld forgási szögsebességét $\omega$-val, a repülőgép (Földhöz viszonyított) sebességét pedig $v$-vel.
 A repülőgéppel együtt mozgó test sebessége (az inerciarendszerből nézve) $r\omega\pm v$ (az előjel a repülés irányától függ). A test mozgásegyenlete:
 $\gamma\frac{Mm}{r^2}-G_1=m\frac{(r\omega +v)^2}{r},$
 illetve
 $\gamma\frac{Mm}{r^2}-G_2=m\frac{(r\omega- v)^2}{r},$
 ahol $G_1$ a kelet felé tartó repülőn, $G_2$ pedig a nyugat felé tartó repülőn a rugós mérleg által kifejtett erő, vagyis a test mért súlya. A fenti egyenleteket egymásból kivonva kapjuk, hogy
 $G_2-G_1=4mv\omega.$
 Ez az erő a Föld felszínén nyugvó, $\Delta m=1~\rm kg$ tömegű test súlyával egyezik meg, tehát a test tényleges tömege:
 $m= \frac{g}{4v\omega}\cdot (1~{\rm kg})=\frac{9{,}81}{4\cdot \frac{1000}{3{,}6} \cdot \frac{2\pi}{24\cdot 3600}}\,{\rm kg}\approx 120\,{\rm kg}.$
 A fenti képlet nem tartalmazza $r$-t, tehát a számolás tetszőleges magasságban mozgó szállítóeszközre, akár egy űrállomásra is érvényes lenne.

**II. megoldás.**
 Írjuk le a helyzetet a Földhöz rögzített, tehát forgó koordináta-rendszerből. Az $\boldsymbol \omega$ szögsebességgel forgó rendszerben $\boldsymbol v$ sebességgel mozgó, $m$ tömegű testre ,,tehetetlenségi erők'' is hatnak: a sebesség négyzetével arányos centrifugális erő és az
 $\boldsymbol F=2m\boldsymbol\omega\times \boldsymbol v$
 összefüggésből számítható Coriolis-erő . Ezek az erők hozzáadódnak a Föld által kifejtett gravitációs erőhöz és a Földhöz képest nem mozgó testre is ható centrifugális erőhöz. A kétféle mozgásirányhoz tartozó súlyok különbsége éppen a Coriolis-erő kétszerese. Mivel az Egyenlítő felett mozgó repülő esetében $\boldsymbol v$ és $\boldsymbol \omega$ egymásra merőleges vektorok, a súlykülönbség
 $G_2-G_1=2\vert \boldsymbol F \vert =4mv\omega=(1~{\rm kg})\cdot g,$
 ahonnan
 $m= \frac{g}{4v\omega}\cdot (1~{\rm kg})\approx 120\,{\rm kg}.$

 Megjegyzés. A feladatban leírt jelenséget Eötvös-effektusnak nevezik; lásd még Eötvös Loránd: Kísérleti kimutatása annak a nehézségi változásnak, amelyet valamely, a szabályos alakúnak felvett földfelületen keleti vagy nyugati irányban mozgó test e mozgás által szenved. Matematikai és Természettudományi Értesítő, XXXVII., 1., 1-28. 1920.
