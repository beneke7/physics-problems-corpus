---
id: kevin-zhou-notes-phy-ex095
source: kevin-zhou-notes
native_id: "phy Example 095"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex095
topic: [kvantumfizika]
subtopic: [időfüggő-perturbációelmélet, kvantumdinamika]
math_tools: [lineáris-algebra, differenciálegyenletek, perturbációelmélet]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13883-13936"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Tekintsünk egy háromállapotú rendszert, amelyben a második állapot „potenciálgát”:
                                                 
                                          0 ϵ 0
                                    H =  ϵ 1 ϵ  ℏω0
                                          0 ϵ 0

és az ϵ tagokat perturbációnak tekintjük. Ha a rendszert |0⟩ állapotban készítjük elő, akkor elsőrendű
perturbációelméletben semmi érdekes nem történik: |2⟩ együtthatója ebben a rendben nulla, míg |1⟩ együtthatója
gyorsan oszcillál, ϵ amplitúdóval. Másodrendben azonban az állapot „átalagutazhat” |1⟩-en keresztül |2⟩-be:
                                                   Z ′
                                      (ϵℏω0 )2 t ′ t ′′ −iω0 t′ iω0 t′′
                                              Z
                              (2)
                             c2 (t) =           dt     dt e    e        .
                                       (iℏ)2 0      0

Az integrálnak van egy olyan iránya, amely mentén nem oszcillál, ezért t/ω0 szerint skálázódik.
                                  (2)
Az együttható így c2 (t) ∼ ϵ2 ω0 t szerint nőhet, és jelentőssé válhat. A teljes perturbációs sor összegzése azt
mutatja, hogy az állapot 1/ϵ2 ω0 időskálán váltogat |0⟩ és |2⟩ között, miközben |1⟩ együtthatója mindig kicsi marad.
    Atomfizikában ezt a felállást sajnos gyakran úgy írják le, hogy „a rendszer egy virtuális átmeneten keresztül
|2⟩ állapotba kerül, miközben az energiamegmaradást megsértve felkapaszkodik a virtuális |1⟩ állapotba”. Természetesen
az energia a kvantummechanikában mindig pontosan megmarad. A perturbálatlan H0 Hamilton-operátor várható értéke nem marad
meg, de semmi okunk nincs arra számítani, hogy megmaradjon. Ennek a nyelvezetnek egy másik hibája, hogy azt sugallja:
a rendszer állapota valamely véletlen időpontban hirtelen ugrik, holott |2⟩ együtthatója valójában folyamatosan nő.
Ezt a megfogalmazást az motiválja, hogy a perturbációs sor integráljaiban H1 bizonyos időpontokban vett értékei szerepelnek;
mi azonban mindezeken a lehetséges időpontokon folytonosan integrálunk.

Megjegyzés. A parametrikus gerjesztés finomabb, mint a közönséges gerjesztés, mert ωd = nω0 esetén is rezonáns, de a fenti
HT -ben ez a hatás láthatatlannak tűnik, mivel HT nagyon hasonlít a közönséges gerjesztéséhez. Mi történik? A probléma az,
hogy a forgóhullám-közelítés nem megfelelő. Az egyszerűség kedvéért n = 2-t véve és az elhagyott tagokat visszaállítva

                                       ϵ0                          2
                   H = ℏω0 a† a + ℏω0 (e4iω0 t + e−4iω0 t )(a2 + a† + a† a + aa† ).
                                       8
                                                                              (1)
Elsőrendű perturbációelméletben nincs rezonanciahatás; minden ci gyorsan oszcillál, kis amplitúdóval. Másodrendben
néhány járulék jelenik meg, például az
                            2
(e4iω0 t a2 ) × (e−4iω0 t a† ),
tagből, de ezek nem változtatják meg a gerjesztési számot. A parametrikus rezonancia harmadrendben jelenik meg, például
az olyan tagokon keresztül, mint
                                                            2
                            (e−4iω0 t a† )2 × (e4iω0 t aa† ).
    Ez a kimerítő elemzés szemlélteti, miért kezelik az ilyen jelenségeket általában állapotok helyett operátorokkal.
Ahogy korábban láttuk, a gerjesztés viszonylag könnyen egzaktul kezelhető, mert csak két operátor játszik szerepet (x és p,
illetve ekvivalensen a és a† ), nem pedig végtelen sok állapot-együttható. A kvantumtérelméletben valóban szinte kizárólag
a Heisenberg-képet használják. Filozófiai szempontból akár azt is mondhatjuk, hogy ez a helyes választás, mert az operátorok
közvetlenül megfigyelhető mennyiségeket írnak le, márpedig a fizika erről szól. Az állapotok azonban nem haszontalanok;
egy kvantumszámítógép például nagyon nehezen lenne érthető állapotok bevezetése nélkül.
