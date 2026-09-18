---
id: "kevin-zhou-e3-p008"
source: "kevin-zhou"
native_id: "KZ-E3-P008"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e3-p008"
topic: [elektromágnesség]
subtopic: [egyenáramú áramkörök, ellenálláshálózatok, variációs elvek]
math_tools: [differenciálás, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[A] Ez a feladat csak szórakozás; az itt használt módszerek túl fejlettek ahhoz, hogy olimpiákon
    előforduljanak. Rayleigh monotonitási törvényét fogjuk bizonyítani, amely szerint egy
    ellenálláshálózat bármely részének ellenállását növelve nő bármely két pont közötti eredő
    ellenállás. Ez elsőre nyilvánvalónak tűnhet, de bizonyítása valójában trükkös. Az alábbi a
    legelegánsabb módszer.
      (a) Tekintsünk egy ellenállásokból álló gráfot, amelynek két csúcsára telepet kapcsolunk,
          rögzítve ezzel a feszültségüket. Írjuk fel a teljes disszipált teljesítményt, feltéve, hogy az
          egyes csúcsok feszültségei Vi, az ellenállások pedig Rij .
     (b) A többi csúcs Vi feszültségét Kirchhoff szabályai határozzák meg. Tegyük fel azonban,
         hogy ezt nem tudjuk, vagy nem akarjuk felírni ezeket az egyenleteket. Meglepő módon
         kiderül, hogy

                                                      6


Kevin Zhou                                                                     Fizikaolimpiai feladatgyűjtemény


     pontosan ugyanazt az eredményt kapjuk, ha a Vi feszültségeket szabadon változtathatónak
     tekintjük, és úgy választjuk meg őket, hogy a teljes disszipált teljesítmény minimális legyen!
     Mutassuk meg ezt az eredményt. (Ez egy variációs elv példája, hasonló a mechanikában a
     legkisebb hatás elvéhez.)

 (c) Tetszőleges ellenálláshálózatra mutassuk meg, hogy P = V 2 /R, ha V a két csúcsra kapcsolt
     telep feszültsége, R a közöttük mérhető eredő ellenállás, P pedig az ellenállásokban
     disszipált teljes teljesítmény. (Ez intuitív, de a következő rész kedvéért érdemes részletesen
     megmutatni.)

 (d) Eredményeinket egyesítve bizonyítsuk Rayleigh monotonitási törvényét.

 (e) Rayleigh monotonitási törvényét matematikai eredmények bizonyítására is használhatjuk.
     Tekintsük az alább látható ellenálláshálózatot, ahol a változók az ellenállásokat jelölik.
                                             a             P        b


                                             b             Q        a

     A P Q kapcsoló zárása előtti és utáni ellenállásokat összehasonlítva mutassuk meg, hogy két
     szám számtani közepe legalább akkora, mint a mértani közepük.

 (f) Tekintsük az alább látható ellenálláshálózatot.
                               a1                a2                            an
                                                                    ···

                               a2                a3                             a1
                                                                    ···
                                ..      ..        ..           ..         ..    ..
                                 .       .         .            .          .     .
                              an−1               an                            an−2
                                                                    ···
                               an                a1                            an−1
                                                                    ···

     Az összes kapcsoló zárásával mutassuk meg, hogy n szám számtani közepe legalább akkora,
     mint a harmonikus közepük.

  Megjegyzés
  Azt gondolhatnánk, hogy Rayleigh monotonitási törvénye annyira nyilvánvaló, hogy nem is
  kell bizonyítani: ha csökkentünk egy ellenállást, hogyan nőhetne az eredő ellenállás? Valójában
  ez a fajta nemmonotonitás igen gyakori! Braess-paradoxon például az, hogy több út hozzáadása
  lelassíthatja a forgalmat, még akkor is, ha az autók összlétszáma változatlan marad. Az amerikai
  fizikacsapat egyik edzője amellett érvelt, hogy több csapatstratégia engedélyezése csökkentheti
  egy kosárlabdacsapat pontszámát. Erről bővebben a Paradoxical behaviour of mechanical and
  electrical networks című tanulmányban vagy ebben a videóban olvashatunk.




                                                       7
    Kevin Zhou                                                                      Fizikaolimpiai feladatgyűjtemény


    Megjegyzés
    Az áramköri kérdések abszurd módon nehézzé válhatnak, egy bizonyos ponton azonban inkább
    matematikai trükkökről szólnak, mint fizikáról. Ezért itt nem szerepeltetek ilyen feladatokat;
    az USAPhO- és az IPhO-versenyeken, egyetemi fizikában, a való életben, sőt tulajdonképpen
    néhány verseny kivételével sehol sem szoktak előfordulni. Másrészt lehet, hogy szórakoztatónak
    találjuk az ilyen kérdéseket! Néhány példa a Physics Cup 2013.6, 2017.2, 2018.1 és
    2019.4 feladatai között található.
