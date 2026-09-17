---
id: komal-P5302
source: komal
language: hu
translated: false
problem: komal-P5302
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ A cső és a dugattyú az ütközés előtti pillanatban $v_0=\sqrt{2gh_0}$ sebességgel mozog. Az ütközéskor a cső hirtelen megáll, a dugattyú viszont $v_0$ kezdősebességgel mozog tovább. A csőben lévő levegő viszonylag gyorsan (nagyságrendileg tizedmásodperc alatt) nyomódik össze, a folyamat tehát tekinthető adiabatikusnak. Levegőre vonatkozó állapotegyenletek szerint 
 $pV^{1{,}4}=\text{állandó},\qquad\text{tehát}\qquad p\sim V^{-1{,}4}\qquad\text{és}\qquad T\sim pV\sim V^{-0{,}4}.$ 
 Jelöljük a dugattyú pillanatnyi megállásához tartozó csőhosszat $xL$-lel ($x<1$), a levegő maximális nyomását $p$-vel, legmagasabb hőmérsékletét pedig $T$-vel. Az adiabatikus egyenletek szerint 
 $p=p_0\,x^{-1{,}4}, \qquad E=\frac{5}{2}pAL=\frac{5}{2}p_0AL\,x^{-0{,}4}\qquad \text{és}\qquad T=T_0x^{-0{,}4}.$ 
 Írjuk fel az energiamegmaradás tételét az ütközés pillanatának és a dugattyú megállásának megfelelő állapotok között: 
 $\frac{1}{2}mv_0^2+mgL+\frac{5}{2}p_0AL+p_0AL(1-x)=mgxL+\frac{5}{2}p_0ALx^{-0{,}4}.$ 
 (A bal oldal utolsó tagja a $p_0$ nyomású légkör által a gázon végzett munkával egyenlő.) A fenti egyenletből $v_0=\sqrt{2gh_0}$ felhasználásával algebrai átrendezés után ezt kapjuk: 
 $\frac{mg}{Ap_0}\cdot\frac{h_0}{L}+\left(\frac{mg}{Ap_0}+1\right)(1-x)=\frac52\left(x^{-0{,}4}-1\right).$ 
 A megadott számadatok mellett 
 $\frac{mg}{Ap_0}=0{,}02 \qquad \text{és}\qquad \frac{h_0}{L}=0{,}75,$ 
 így a megoldandó egyenlet 
 $0{,}015+1{,}02\,(1-x)=2{,}5\,\left(x^{-0{,}4}-1\right).$ 
 Ennek numerikus megoldása $x=0{,}85$, a keresett maximális hőmérséklet tehát 
 $T=\frac{T_0}{0{,}85^{ 0{,}4}}\approx
320~\rm K.$ 

 Megjegyzés. A dugattyú $v_0\approx 3~$m/s sebességről $(1-x)L\approx 10$ cm út megtétele után áll meg. Ha egyenletesen lassult volna, akkor a megállásig kb. 0,1 s telt volna el. A változó gyorsulású mozgásnál is nagyságrendileg hasonló idő, tehát kb. tizedmásodperc telik csak el a dugattyú megállásáig. Ezalatt számottevő hőcsere nem alakul ki a dugattyú és a bezárt levegő között. Ez utólag megerősíti azt a feltevésünket, hogy a folyamat tekinthető adiabatikusnak. 

 $b)$ A szabadon eső csőben a dugattyú ,,súlytalan'', emiatt az ütközés pillanatában a csőben levő levegő nyomása még $p_0$. Amint a dugattyú belecsúszik a csőbe, a levegő nyomása megnő, tehát a dugattyú gyorsulása csökkenni kezd, valahol nullává válik, majd egyre nagyobb felfelé irányuló gyorsulásra tesz szert. 
 A legnagyobb gyorsulás a legnagyobb túlnyomás mellett alakul ki, vagyis amikor a dugattyú pillanatnyi sebessége éppen nulla. Ekkor a bezárt levelő nyomása: 
 $p_\text{max}=p_0 x^{-1{,}4}=1{,}255\,p_0.$ 
 A dugattyú mozgásegyenlete ebben az állapotban: 
 $\left(p_\text{max}-p_0\right)A-mg=ma,$ 
 ahonnan 
 $a=\left[(1{,}255-1)\left(\frac{p_0A}{mg}\right)-1\right]g=11{,}7\,g\approx115~\frac{\rm m}{\rm s^2}.$ 
 $c)$ Az energiamegmaradás tétele szerint a felfelé mozgó dugattyú $v_0=\sqrt{2gh_0}$ nagyságú sebességgel éri el a cső tetejét, majd onnan további $h_0$ magasságra emelkedik. Ez éppen az a helyzet, ahonnan elejtettük. A dugattyú szempontjából az ütközés rugalmas (ha a súrlódásra és a közegellenállásra tett feltevések teljesülnek), csak a cső mechanikai energiája csökken le a rugalmatlan ütközés során.
