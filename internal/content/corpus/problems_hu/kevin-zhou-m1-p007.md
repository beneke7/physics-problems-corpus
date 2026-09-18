---
id: "kevin-zhou-m1-p007"
source: "kevin-zhou"
native_id: "KZ-M1-P007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m1-p007"
topic: [Matematikai módszerek]
subtopic: [lineáris differenciálegyenletek, többszörös gyökök, normálmódusok]
math_tools: [differenciálegyenletek, komplex számok]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M1.txt"
source_url: "sources/kevin_zhou/site/handouts/M1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[3] 7. feladat. Fentebb említettük, hogy az exponenciális függvényre való tippelés szinte mindig működik. Ennek oka, hogy végül
    az exponenciális kiesik, és egy ω-ban vett polinom marad, amelynek éppen megfelelő számú gyöke van. Ha azonban többszörös
    gyökök vannak, ω-nek kevesebb különböző megoldása adódik, így nincs elegendő megoldás.
      (a) Írjunk fel egy másodrendű differenciálegyenletet, amelynek ω egy kettős gyöke, és határozzuk meg az általános megoldását.
          (Tipp: hogy segítsen megfelelő próbafüggvényt találni, tekintsük az egyszerű d2 x/dt2 = 0 esetet, ahol ω = 0 a kettős
          gyök. Ezután általánosítsuk a feltevést nem zérus ω-ra, és ellenőrizzük, hogy működik.)
      (b) Azt kell tapasztalnunk, hogy a megoldás minőségileg megváltozik, ha pontos kettős gyökünk van. Ha azonban két gyök nagyon
          közel van egymáshoz, ω ± ∆ω, ahol ∆ω ≪ ω, akkor közelítőleg ugyanazt a megoldást kell kapnunk. Mutassuk meg ezt
          kifejezetten. Mikor célszerű az egyik, illetve a másik alakot használni?
      (c) [A] Tekintsük a legáltalánosabb n-edrendű, lineáris, homogén, időeltolás-invariáns differenciálegyenletet:
                                    dn          dn−1

                                                                d
                                 an n + an−1 n−1 + . . . + a1 + a0 x = 0.
                                    dt          dt              dt
          Milyen alakú az általános megoldás?
       Megjegyzés
       Lehet, hogy azon tűnődünk, hogyan oldhatók meg általánosabb differenciálegyenletek. Az M4-ben a fenti módszerek három
       kiterjesztését vizsgáljuk. A normálmódusok ötletét használjuk ilyen differenciálegyenlet-rendszerek megoldására, gerjesztő
       erőket adunk hozzá, hogy az egyenletek inhomogénné váljanak, és az adiabatikus tételt használjuk olyan, nem időeltolás-
       invariáns egyenletek közelítő megoldására, amelyek együtthatói lassan változnak az időben.

       Ez természetesen csak a tárgy felszínét érinti, az általánosabb differenciálegyenletek megoldása nagyságrendekkel nehezebb is
       lehet. Nem próbálunk nemlineáris differenciálegyenleteket megoldani, mivel erre nincs általános módszer, és a megoldás
       gyakran valamilyen nehezen kezelhető speciális függvény. (Az ilyen egyenletek azonban későbbi feladatokban időnként
       előkerülnek.) Ezzel szemben az általános időfüggésű lineáris differenciálegyenletek kezelhetőbbek, és a következő feladat a
       megoldásuk legalapvetőbb módszerét szemlélteti.
