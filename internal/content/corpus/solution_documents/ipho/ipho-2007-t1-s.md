---
id: solution-document-ipho-2007-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2007/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2007-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2007/T1_S.pdf."
---

1.1) One may use any reasonable equation to obtain the dimension of the questioned
quantities.

I) The Planck relation is hν = E ⇒ [h][ν ] = [ E ] ⇒ [h] = [ E ][ν ]−1 = ML2T −1
(0.2)
II) [c] = LT −1                                                                (0.2)
           Gmm
III) F =          ⇒ [G ] = [ F ][r 2 ][m]−2 = M −1 L3T −2                      (0.2)
            r2
IV) E = K Bθ ⇒ [ K B ] = [θ ]−1[ E ] = ML2T −2 K −1                            (0.2)



1.2) Using the Stefan-Boltzmann's law,
 Power
         = σ θ 4 , or any equivalent relation, one obtains:
  Area
        (0.3)
[σ ]K = [ E ]L−2T −1 ⇒ [σ ] = MT −3 K −4 .
      4
                                                                                                           (0.2)



1.3) The Stefan-Boltzmann's constant, up to a numerical coefficient, equals
σ = hα c β G γ k B δ , where α , β , γ , δ can be determined by dimensional analysis. Indeed,
[σ ] = [h]α [c]β [G ]γ [k B ]δ , where e.g. [σ ] = MT −3 K −4 .



             (
MT − 3 K − 4 = ML2T −1   ) (LT ) (M L T ) (ML T K ) = M
                         α   −1 β   −1 3   −2 γ   2   −2   −1 δ   α −γ +δ
                                                                            L2α + β + 3γ + 2δ T −α − β − 2γ − 2δ K −δ ,
                                                                                               (0.2)
The above equality is satisfied if,

  α − γ + δ = 1,                                             α = −3,
  2α + β + 3γ + 2δ = 0,                                      β = −2,
                                                             
⇒                                  (Each one (0.1))         ⇒        (Each one (0.1))
  − α − β − 2γ − 2δ = −3,                                     γ = 0,
  − δ = −4,                                                 δ = 4.
               4
            kB
⇒      σ = 2 3.
            ch



2.1) Since A , the area of the event horizon, is to be calculated in terms of m from a
classical theory of relativistic gravity, e.g. the General Relativity, it is a combination of
c , characteristic of special relativity, and G characteristic of gravity. Especially, it is


independent of the Planck constant h which is characteristic of quantum mechanical
phenomena.

A = G α c β mγ

Exploiting dimensional analysis,
⇒ [ A] = [G ]α [c]β [m]γ ⇒ L2 = M −1L3T − 2    (              ) (LT ) M = M
                                                              α       −1 β    γ         −α + γ
                                                                                                 L3α + β T − 2α − β
                                                                                                                      (0.2)
The above equality is satisfied if,

   − α + γ = 0,                                                   α = 2,
                                                                 
⇒  3α + β = 2, (Each one (0.1))                       ⇒          β = −4,        (Each one (0.1)) ⇒
  − 2α − β = 0,                                                   γ = 2,
                                                                 
                 m 2G 2
           A=           .
                  c4


2.2)

                                                   dQ
From the definition of entropy dS =                     , one obtains [ S ] = [ E ][θ ]−1 = ML2T −2 K −1 (0.2)
                                                   θ


2.3) Noting η = S A , one verifies that,

[η ] = [ S ][ A]−1 = MT −2 K −1 ,

                                                                                                                     (0.2)
            α    β   γ     δ      −α + β +δ 3α + 2 β +γ + 2δ − 2α − β −γ − 2δ
[η ] = [G ] [h] [c] [k B ] = M             L                T                 K −δ ,
Using the same scheme as above,

           − α + β + δ = 1,                                                   α = −1,
           3α + 2β + γ + 2δ = 0,                                              β = −1,
                                                                              
          ⇒                          (Each one (0.1))                        ⇒                        (Each one (0.1))
            − 2α  − β − γ − 2δ = −2,                                          γ = 3,
           δ = 1,                                                            δ = 1,
                c3k B
thus,     η=          .                                                                                               (0.1)
                Gh

3.1)


The first law of thermodynamics is dE = dQ + dW . By assumption, d W = 0 . Using the
                            dQ
definition of entropy, dS =    , one obtains,
                              θ
               dE = θ H dS + 0,                      (0.2) + (0.1), for setting d W = 0 .
            G kB 2
       S =         m ,
Using,       ch        [(0.1) for S]
        E = mc 2 ,
       
                                  −1            −1
                     dE  dS    2  dS 
one obtains, θ H =     =     =c                                  (0.2)
                     dS  dE       dm 
                 1 c h 1
                         3
Therefore, θ H =           .                               (0.1)+(0.1) (for the coefficient)
                  2  GkB m

3.2) The Stefan-Boltzmann's law gives the rate of energy radiation per unit area. Noting
that E = mc 2 we have:

dE / dt = −σθ H 4 A,            (0.2)
          4
       kB
σ = c 2 h 3 ,
                                                              4
                                           k B  c 3 h 1  m 2G 2
                                              4
                                2 dm
                         ⇒c           = − 2 3              4
                                                                  , (0.2)
 A =   m 2 2
           G                      d t     c  h   2G k B m   c
        c4
 
  E = mc 2,
          dm        1 c4h 1
⇒               =−            . (0.1) (for simplification) + (0.2) (for the minus sign)
           dt      16 G 2 m 2

3.3)
By integration:
dm       1 c4h 1                             c 4h
     =−            .     ⇒ ∫ m 2 dm = − ∫         dt (0.3)
 dt     16 G 2 m 2                          16G 2
                       3c 4 h
⇒ m3 (t ) − m3 (0) = −        t , (0.2) + (0.2) (Integration and correct boundary values)
                       16G 2
At t = t * the black hole evaporates completely:
                                  16G 2
m(t * ) = 0 (0.1)        ⇒ t * = 4 m3 (0.2)+(0.1) (for the coefficient)
                                  3c h


3.4) CV measures the change in E with respect to variation of θ .


       dE          (0.2)
CV = dθ ,
                                                  2G k B 2
  E = mc ,
           2        (0.2)          ⇒       CV = −         m . 0.1)+(0.1) (for the coefficient)
        3
                                                     ch
 θ = c h 1
     2G k B m


4.1)      Again the Stefan-Boltzmann's law gives the rate of energy loss per unit area of the
          black hole. A similar relation can be used to obtain the energy gained by the black
          hole due to the background radiation. To justify it, note that in the thermal
          equilibrium, the total change in the energy is vanishing. The blackbody radiation
          is given by the Stefan-Boltzmann's law. Therefore the rate of energy gain is given
          by the same formula.

                         (0.1) + (0.4) (For the first and the second terms respectively)
dE                  4
    = −σθ 4 A + σθ B A                    dm     hc 4 1    G2
 dt                                 ⇒        =−      2 2
                                                          +  8 3
                                                                 (kB θ B )4 m 2            (0.3)
 E = mc 2 ,                              dt    16G m      ch


4.2)
          dm
Setting         = 0 , we have:
          dt
    hc 4 1          G2              2
                 + 8 3 (k B θ B ) m* = 0
                                 4
 −      2      2
                                                                  (0.2)
   16G m     *     ch
and consequently,
        c3h 1
m* =                                                                               (0.2)
      2G k B θ B

4.3)
      c 3h 1                dm     hc 4 1        m4 
θB =                 ⇒         =−             1−                                         (0.2)
     2G k B m*              dt    16G 2 m 2  m* 4 

4.4) Use the solution to 4.2,
   *   c 3h 1                                         *  c 3h 1
 m =                (0.2) and 3.1 to obtain,        θ =           =θ B     (0.2)
      2G k B θ B                                        2G k B m*
One may also argue that m* corresponds to thermal equilibrium. Thus for m = m* the
black hole temperature equals θ B .

Or one may set
               dE
                dt
                            4
                             (      4
                                       )
                    = −σ θ * − θ B A = 0 to get θ * = θ B .


4.5) Considering the solution to 4.3, one verifies that it will go away from the
equilibrium.                                                    (0.6)
                                                     dm
                                  m > m*     ⇒            >0
  dm         4
          hc 1       m 4
                                                     dt
      = − 2 2 1 − * 4  ⇒ 
   dt     G m  m              m < m*               dm
                                            ⇒            <0
                                                       dt
