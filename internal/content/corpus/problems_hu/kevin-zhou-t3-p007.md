---
id: "kevin-zhou-t3-p007"
source: "kevin-zhou"
native_id: "KZ-T3-P007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t3-p007"
topic: [Hőtan]
subtopic: [fázisátalakulások, Clausius–Clapeyron-egyenlet, termodinamikai potenciálok]
math_tools: [parciális deriválás, differenciálszámítás]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T3.txt"
source_url: "sources/kevin_zhou/site/handouts/T3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T3-P007

[3] 7. feladat. [A] Ebben a feladatban a Clausius–
    Clapeyron-egyenlet gyorsabb, haladóbb levezetését találjuk.

     (a) A Gibbs-féle szabadenergia definíciója G = U + P V − T S. Mutassuk meg, hogy reverzibilis folyamatokra

                                                dG = V dP − S dT.

         Két fázis csak akkor lehet termodinamikai egyensúlyban, ha az egy molekulára jutó Gibbs-féle szabadenergiájuk
         azonos. Ellenkező esetben az egyik fázis másikká alakítása csökkentené a Gibbs-féle szabadenergiát,
         ami ekvivalensnek bizonyul az univerzum entrópiájának növekedésével. (Részletesebben
         lásd Blundell és Blundell 16.5. szakaszát.)

     (b) Tegyük fel, hogy két fázis egy molekulára jutó G/N Gibbs-féle szabadenergiája T0 hőmérsékleten
         és P0 nyomáson egyenlő. Vezessük le a Clausius–Clapeyron-egyenletet annak megkövetelésével, hogy ez
         T0 + dT hőmérsékleten és P0 + dP nyomáson is teljesüljön.


                                                      6
    Kevin Zhou                                                            Physics Olympiad Handouts


       Megjegyzés: Termodinamikai potenciálok

       A Clausius–Clapeyron-egyenletet néha a látens hő helyett az entalpiák különbségével, ∆H-val felírva láthatjuk.
       Az entalpia a H = U + P V állapotfüggvény, ezért

                                            dH = V dP + d̄Q.

       Ez hasznos, mert sok laboratóriumi kísérlet állandó nyomáson zajlik, dP = 0 mellett, így
       dH = d̄Q. Vagyis az entalpiát csak hő változtatja meg, ezért egy fázisátalakulás látens hője
       a két fázis entalpiájának különbsége, L = ∆H kell legyen. Ez azért is hasznos,
       mert az entalpia állapotfüggvény, így egy új fázisátalakulás esetén L meghatározható
       a két fázis entalpiaértékeinek táblázatból való kikeresésével.

       Ezzel áttekintettük az összes klasszikus „termodinamikai potenciált”. Amint láttuk, a
       H entalpia a hő könyvelésére hasznos. Ahogy a T2-ben láttuk, az F Helmholtz-féle szabadenergia
       termodinamikai egyensúlyban, állandó hőmérséklet és
       térfogat mellett minimális. (Ez annak az állításnak a megfelelője, hogy a rendszer U belső energiája
       egyensúlyban, állandó entrópia és térfogat mellett minimális; ez a
       mechanikai egyensúly szokásos megfogalmazása.) A fenti feladatban pedig azt láttuk, hogy a G Gibbs-féle
       szabadenergia termodinamikai egyensúlyban, állandó hőmérséklet és nyomás mellett minimális.

       Általánosabban arról van szó, hogy a használható potenciálok száma minden újabb „termodinamikailag konjugált
       változópár” hozzáadásakor megduplázódik. A termodinamika megismerése előtt
       csak U-val rendelkeztünk. Amikor megismertük a hőmérsékletet és az entrópiát,
       az F is fontossá vált. Most, a nyomás és a térfogat figyelembevételével
       H és G is rendelkezésünkre áll. Ha lenne még egy párunk, például a mágnesezettség és a külső mágneses tér,
       további 4 potenciált definiálhatnánk, amelyek mindegyike más-más helyzetben lenne hasznos.
