---
id: "kevin-zhou-m3-p024"
source: "kevin-zhou"
native_id: "KZ-M3-P024"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m3-p024"
topic: [mechanika]
subtopic: [munka és energia, tömegközéppont mozgása, súrlódás, megmaradási törvények]
math_tools: [analízis, algebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M3.txt"
source_url: "sources/kevin_zhou/site/handouts/M3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

amelynek a vége egy nagyon vékony rúdhoz van erősítve. A golyót úgy hajítjuk el, hogy kezdetben vízszintes körpályán
    mozogjon, miközben a fonál θ0 szöget zár be a függőlegessel. Az idő múlásával a fonál a rúd köré tekeredik. Tegyük
    fel, hogy (1) a rúd elég vékony ahhoz, hogy a levegőben lévő fonál hossza nagyon lassan csökkenjen, és (2) a rúd
    súrlódása elegendő ahhoz, hogy a fonál ne csússzon el rajta, miután hozzáér. Mutassuk meg, hogy a golyó
    végsebességének (közvetlenül a rúdnak ütközés előtt) és kezdeti sebességének aránya sin θ0 .
    Kiterjedt rendszer vizsgálatakor, amelynek részei mind különböző módon mozognak, az energiamegmaradás időnként
    használhatatlan. Ugyanakkor a kevésbé ismert „tömegközépponti energia” fogalma hasznosnak bizonyulhat. Erről
    bővebben a Halliday és Resnick könyv 13.5. fejezetében olvashatunk.

        7. gondolat: Tömegközépponti energia

        A rendszer egy részén végzett munka
                                                   dW = F dx
        ahol F a rendszer adott részére ható erő, dx pedig ennek az elmozdulása. Ekkor dW = dE, ahol E a rendszer teljes
        energiája.

        Hasonlóképpen, a rendszeren végzett „tömegközépponti munka”
                                                 dWcm = F dxcm
        ahol F a rendszerre ható teljes erő, dxcm pedig a tömegközéppont elmozdulása. Ekkor dWcm = dEcm, ahol a
        „tömegközépponti energiát” Ecm = M vcm   2 /2 módon definiáljuk.


        Megjegyzendő, hogy a szokásos energiához és munkához hasonlóan a tömegközépponti energia és munka is az
        alkalmazott vonatkoztatási rendszertől függ.



                                                        15


    Kevin Zhou                                                            Fizikaolimpiai feladatgyűjtemény


       11. példa

       Tekintsünk egy kerékpárost, aki pedálozással gyorsítja a kerékpárját. A kerekek csúszásmentesen gördülnek a
       talajon. A kerékpáros d távolságot tesz meg, miközben a kerékpárra a talaj felől állandó f súrlódási erő hat.
       Elemezzük a helyzetet mind az energia, mind a tömegközépponti energia segítségével.

       Megoldás
       Mivel a kerekek csúszás nélkül gördülnek, a talajjal érintkező pontjuk sebessége mindig nulla, ezért a súrlódási erő
       pontosan nulla munkát végez. Így a kerékpáros/kerékpár rendszer teljes energiája megmarad. A kerékpáros/kerékpár
       többlet mozgási energiája a kerékpáros kémiai energiájából származik, amelyet végső soron az elfogyasztott
       táplálékból nyert. Tehát az energiamegmaradás helyes, de egyáltalán nem mond semmi hasznosat.

       Most vizsgáljuk a tömegközépponti energiát. A kerékpáros/kerékpár rendszert tekintve a tömegközépponti
                                              2 /2. Ez lehetővé teszi, hogy kiszámítsuk a sebesség változását
       a munka f d, ami a kerékpáros/kerékpár M vcm
       megváltozása.

       12. példa

       Tekintsük az előző példában szereplő elrendezést, de most a kerékpáros erősen fékez. A kerekek megcsúsznak a
       talajon, és −f súrlódási erő hat rájuk, miközben a kerékpáros d távolságot tesz meg. Elemezzük a helyzetet mind az
       energia, mind a tömegközépponti energia segítségével.

       Megoldás
       A tömegközépponti munka egyenlete a kerékpáros/kerékpár egészének lassulásáról tájékoztat, ugyanúgy, mint az
       előző példában.

       Másfelől a súrlódási erő által végzett munka meghatározatlan! Nulla és −f d közötti bármely értéket felvehet. Ha
       nulla, akkor a kerékpáros/kerékpár rendszer teljes energiája ismét megmarad, ami azt jelenti, hogy az elvesztett
       teljes mozgási energia magában a kerékpárban alakul hővé. Ha −f d, akkor az elvesztett teljes mozgási energia a
       talajban alakul hővé, így energia távozik a kerékpáros/kerékpár rendszerből. Általában a munka egy köztes érték,
       vagyis mind a talaj, mind a kerékpár felmelegszik, de mikroszkopikus modell nélkül nem tudjuk kiszámítani, hogy
       pontosan mekkora. Ez például attól függ, hogy milyen könnyen deformálódik a talaj és a kerékpár gumiabroncsának
       felülete.
