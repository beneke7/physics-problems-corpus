---
id: komal-P5525
source: komal
language: hu
translated: false
problem: komal-P5525
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Tekintsük az $\ell$ hosszúságú vezetéknek $x$ sugarú belső magját ($0<x<r$), és számítsuk ki, mennyi hő fejlődik egységnyi idő alatt ebben a térrészben. Az áramerősség ebben a belső magban:
 $I(x)=I\frac{x^2}{r^2},$
 az ellenállása pedig
 $R(x)=\varrho\frac{\ell}{x^2\pi}.$
 A hőtermelés teljesítménye:
 $P(x)=I(x)^2\cdot R(x)=\cfrac{I^2x^2\varrho\ell}{r^4\pi}.$
 Ezt a hőteljesítményt – a Newton-féle hővezetési törvény szerint – a felületén keresztül áramlik kifelé:
 $P(x)=-2\pi x\ell\lambda\cdot \frac{\Delta T}{\Delta x}.$
 A fenti két egyenletből azt kapjuk, hogy az $x$ sugarú henger felületénél a hőmérsékletgradiens
 $\frac{\Delta T}{\Delta x}=
 \frac{-I^2\varrho}{2\pi^2 r^4\lambda}\cdot x.$
 Látjuk, hogy a hőmérsékletgradiens az $x$ távolság lineárisan változó függvénye, ezért számolhatunk úgy, mintha az egy állandó,
 $\left(\frac{\Delta T}{\Delta x}\right)_\text{átlag}=\frac12\left(\frac{\Delta T}{\Delta x}\right)_\text{max}=\frac{-I^2\varrho}{4\pi^2 r^3\lambda}
$
 lenne. Ennek megfelelően
 $\frac{I^2\varrho}{4\pi^2 r^3\lambda}=\frac{T-T_0}{r},$
 vagyis a szimmetriatengelyen a hőmérséklet:
 $T=T_0 + \frac{I^2\varrho}{4\pi^2 r^2\lambda}.$
