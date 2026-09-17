---
id: komal-P4948
source: komal
language: hu
translated: false
problem: komal-P4948
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az ütközési szám az ütköző testek relatív sebességének megváltozási arányszáma: 
 $k=\frac{v_1^\text{(ütközés után)}-v_2^\text{(ütközés után)}}{v_1^\text{(ütközés elött)}-v_2^\text{(ütközés elött)}}.$ 
 Ezt a kifejezést nemcsak a tömegközépponti koordináta-rendszerben, hanem tetszőlegesen mozgó vonatkoztatási rendszerben kiszámíthatjuk, mert a sebességek különbsége nem függ a koordináta-rendszer választásától. 
 Üljünk bele abba a koordináta-rendszerbe, amelyik a két rúd átlagsebességével, $(v_1+v_2)/2$-vel mozog. Innen szemlélve a két rúd sebessége 
 $v_1-\frac{v_1+v_2}{2}=\frac{v_1-v_2}{2}=v^*, \qquad \text{illetve}\qquad v_2-\frac{v_1+v_2}{2}=\frac{v_2-v_1}{2}=-v^*.$ 
 Irányítsuk a koordináta-rendszer pozitív tengelyét jobbra, és legyen a bal oldali rúd sebessége a nagyobb; ekkor $v^*>0$, és a rudak ténylegesen összeütköznek. Tegyük fel, hogy a bal oldali rúd a rövidebb ($\ell_1<\ell_2$). (A fordított helyzet hasonló módon tárgyalható.) 
 Az egyenlő nagyságú sebességgel mozgó rudak egymáshoz csapódnak, és az érinkező felületük megáll. Ez – a szimmetria miatt – nyilvánvaló lenne akkor, ha a rudak hossza megegyezne. De a különböző hosszúságú rudaknál is ennek kell bekövetkeznie, hiszen az ütközési felület környéke csak akkor szerez tudomást arról, hogy mekkora a rudak hossza, amikor a $c$ sebességgel terjedő sűrűsödési lökéshullám eléri a rudak túlsó végét, visszaverődik onnan, majd visszaérkezik az ütközési felülethez. 
 A rövidebb rúd válik el elsőként, az ütközés kezdete után $2\ell_1/c$ idő múlva az álló érintkezési felülettől, és elindul bal felé $-v^*$ sebességgel. Ugyanekkor a másik rúd – amelyben még vannak összenyomódott részek, és az egyik darabja még áll, más részei pedig már mozognak – valamekkora $u^*$ tömegközépponti sebességgel rendelkezik. Ez a sebesség a lendületmegmaradás törvénye segítségével határozható meg. Mivel a rudak keresztmetszete és sűrűsége is megegyezik, a tömegük a hosszukkal arányos. A lendületmegmaradás törvénye tehát így írható: 
 $\ell_1 v^*-\ell_2 v^*=\ell_1(- v^*)+\ell_2 u^*.$ 
 Innen 
 $u^*=\frac{2\ell_1-\ell_2}{\ell_2}v^*.$ 
 Az ütközési szám a relatív sebességek csökkenési arányszáma: 
 $k=\frac{u^*-(-v^*)}{v^*-(-v^*)}=\frac{\left(\frac{2\ell_1}{\ell_1}-1\right)v^*+v^*}{2v^*}=\frac{\ell_1}{\ell_2} \le 1.
$ 

 Megjegyzés. Szegedi Ervin légpárnás asztalon végzett mérései megerősítik a cikkben, illetve ebben a feladatban leírt közelítések jogosságát. Az ütközési együttható mért értékei jó közelítéssel a rudak hosszának arányával egyeztek meg, eltérést csak az $\ell_1=\ell_2$ esetben tapasztalt. Ez az eltérés érthető, hiszen az egyforma hosszú rudaknál az ütközés (a modell szerint) tökéletesen rugalmas kellett volna legyen, ami a mechanikai energia nulla veszteségét jelenti. A valóságban természetesen vannak egyéb, a modelben figyelmen kívül hagyott veszteségek, amik a ,,nulla'' mellett biztosan nem hanyagolhatók el. Amikor például két golyó ütközik, az érintkezési felületük nagyon kicsi, tehát az ütközés pillanataiban fellépő feszültségek nagyon nagyok lesznek. Ilyen körülmények között a deformáció és a feszültségek kapcsolata már nem lesz lineáris (nem marad érvényben a Hooke-törvény), és az energiadisszipáció (hőfejlődés) vélhetően már az ütközés kezdeti szakaszában is megjelenik.
