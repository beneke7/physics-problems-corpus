---
id: komal-G803
source: komal
language: hu
translated: false
problem: komal-G803
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
. A megadott pályaszakaszon a test sebessége $v$-ről $(v/2)$-re csökken, mondjuk $t/2$ idő alatt. Ezen a szakaszon, melynek hossza legyen $s$, a test átlagsebessége $3v/4$. Képzeljük el, hogy a test egészen a megállásáig változatlan ütemben lassul. Ehhez még egyszer $t/2$ időre van szüksége, sebessége közben $(v/2)$-ről 0-ra csökken, vagyis a második szakaszon az átlagsebessége $v/4$. Harmadakkora átlagsebesség mellett és ugyanakkora idő alatt a test $s/3$ utat tesz meg, vagyis $v$-ről indulva a teljes megállásig az útja $4s/3$. 
 A példa lényegében a test sebességére kérdez az első pályaszakasz felezőpontjában, amikor a test által megtett út $s/2$. Fordítsuk meg a test mozgását. Induljon nyugalomból, és gyorsuljon fel $t$ idő alatt $v$ sebességre, miközben megtesz $4s/3$ utat. Fordított irányban a kérdéses pont a nyugalmi helyzettől $x=\tfrac{4s}{3}-\tfrac{s}{2}=\tfrac{5s}{6}$ távolságra van. Mivel a sebesség egyenesen arányos az idővel, így ha a kérdéses pontban a pillanatnyi sebesség $kv$, akkor az indulástól számított időt is ugyanazzal az 1-nél kisebb $k$ szorzófaktorral kell figyelembe vennünk, vagyis a $kv$ sebességhez tartozó idő $kt$. Ezekkel a mennyiségekkel a fenti $x=\tfrac{5s}{6}$ távolságot így fejezhetjük ki: $x=\tfrac{k^2vt}{2}=\tfrac{5s}{6}$. 
 Az utolsó képletben szereplő $vt$ szorzatot a megoldás elején leírt $3v/4$ átlagsebességből és a hozzá tartozó $t/2$ időből is megkaphatjuk: $\tfrac{3}{4}v\cdot\tfrac{t}{2}=s$, amiből $vt=\tfrac{8s}{3}$. Ha ezt beírjuk $x$ kifejezésébe, akkor megkaphatjuk $k$ értékét: 
 $x=\frac{k^2}{2}\cdot\frac{8s}{3}=\frac{5s}{6},$ 
 amiből $k^2=5/8$. Tehát a kérdéses pontban a test sebessége 
 $kv=\sqrt{5/8}\cdot v\approx0,79\,v,$ 
 vagyis az első pályaszakasz felezőpontjáig a test a sebességének 21%-át vesztette el. 

 Megjegyzés. Megoldhatjuk a feladatot ismert képletek nyers erővel történő alkalmazásával is: 
 $\frac{v_0^2}{4}-v_0^2=2as,$ 
 $v^2-v_0^2=2a\frac{s}{2}.$ 
 A két egyenletet elosztva egymással $v^2=(5/8)v_0^2$ adódik, amiből $v=\sqrt{5/8}\cdot v_0\approx0,79\,v_0$, megegyező módon a kizárólag átlagsebességekre alapozott fenti megoldással.
