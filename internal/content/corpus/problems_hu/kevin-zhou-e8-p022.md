---
id: "kevin-zhou-e8-p022"
source: "kevin-zhou"
native_id: "KZ-E8-P022"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e8-p022"
topic: [elektromágnesség, rezgések és hullámok]
subtopic: [elektromágneses hullámok, visszaverődés és törés, Fresnel-képletek]
math_tools: [vektorszámítás, geometria és trigonometria]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E8.txt"
source_url: "sources/kevin_zhou/site/handouts/E8.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Tegyük fel, hogy az x < 0 és az x > 0 tartományt ϵ1, illetve ϵ2 permittivitású anyag tölti ki,
    amelyeknek permeabilitása egyaránt µ0. (Amint fentebb említettük, ez a legtöbb anyagra jellemző.)




                                                        14


Balról egy Ei ei(ki ·r−ωi t) elektromos térerősségű beeső hullámot küldünk be. A hullám a
határfelületen részben továbbhalad, részben visszaverődik, ezért a teljes elektromos tér
                                (
                                  Ei ei(ki ·r−ωi t) + Er ei(kr ·r−ωr t) x < 0,
                           E=
                                  Et ei(kt ·r−ωt t)                     x > 0.

Az ábrán látható módon a normálissal bezárt szögek θi, θr és θt. Mivel a fény transzverzális
hullám, a fenti elektromos térerősség-amplitúdók mindegyike merőleges a hozzá tartozó
hullámvektorra.




 (a) Minden teret felbonthatunk a határfelületre merőleges (vagyis csak az x-komponenst
     tartalmazó), illetve a határfelülettel párhuzamos (a többi komponenst tartalmazó) részre.
     Maxwell egyenletei alapján indokoljuk meg, hogy a határfelületen E∥ és B ⊥ folytonos kell
     legyen. Mutassuk meg azt is, hogy ebben az elrendezésben B∥ is folytonos.

 (b) Indokoljuk meg, hogy E∥ határfelületi folytonossága miatt

                                                    ωi = ωr = ωt .

                            ∥    ∥     ∥
 (c) További indoklással mutassuk meg, hogy ki = kr = kt , és vezessük le a visszaverődés és
     törés törvényét:

                                       θ i = θr ,     n1 sin θi = n2 sin θt .

      Ez az eredmény nagyon általános, és mindenféle hullámra érvényes, ha ni ∝ 1/vi módon
      definiáljuk ni-t.

 (d) Tegyük fel most, hogy az Ei, Er és Et elektromos terek a lap síkjára merőlegesen
     polarizáltak. Ekkor E∥ folytonossága alapján
                                               Ei + Er = Et .
      B∥ folytonosságát felhasználva mutassuk meg, hogy
                          Er   n1 cos θi − n2 cos θt         Et        2n1 cos θi
                             =                       ,          =                       .
                          Ei   n1 cos θi + n2 cos θt         Ei   n1 cos θi + n2 cos θt
      Ezek a síkra merőlegesen polarizált fény Fresnel-egyenletei; ezt a fényt „s-polarizált”
      fénynek is nevezik.




                                                      15


     (e) Ha n1 > n2, akkor teljes visszaverődés következik be, ha
                                                              n2
                                                   sin θi >
                                                              n1
          és a hullám teljesen visszaverődik. Ennek ellenére Et ebben a tartományban nem nulla.
          Ennek értelmezéséhez mutassuk meg, hogy kt x-komponense ebben az esetben képzetes,
          ami azt jelzi, hogy a „továbbhaladó” hullám nem terjed az x > 0 tartományban, hanem
          exponenciálisan lecseng.
