---
id: kevin-zhou-notes-phy-ex034
source: kevin-zhou-notes
native_id: "phy Example 034"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex034
topic: [statistical-mechanics]
subtopic: [thermodynamic-potentials]
math_tools: [differentials, legendre-transforms]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3347-3401"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. We define the enthalpy, Helmholtz free energy, and Gibbs free energy as

                        H = U + P V,     F = U − T S,    G = U + P V − T S.

Then we have

                 dH = T dS + V dp,     dF = −S dT − p dV,      dG = −S dT + V dp.

From these differentials, we can read off the natural variables of these functions. Also, to convert
between the quantities, we can use the Gibbs–Helmholtz equations
                                                                     
                                 2 ∂(F/T )                  2 ∂(G/T )
                         U = −T                  , H = −T
                                       ∂T      V                   ∂T     p

which follow straightforwardly from the product rule.

Note. The potentials defined above have direct physical interpretations. Consider a system with
d̄W = −p dV + d̄W ′ , where d̄W ′ contains other types of work, such as electrical work supplied by a
battery. Since d̄Q ≤ T dS, the First Law gives

                                    −p dV + d̄W ′ ≥ dU − T dS.

If the process is carried out at constant volume, then dF = dU − T dS, so d̄W ′ ≥ dF . Then the
Helmholtz free energy represents the maximum amount of work that can be extracted at fixed
temperature. If instead we fix the pressure, then d̄W ′ ≥ dG, so the Gibbs free energy represents
the maximum amount of non-p dV work that can be extracted.
    The interpretation of enthalpy is different; at constant pressure, we have dH = T dS = d̄Qrev ,
so changes in enthalpy tell us whether a chemical reaction is endothermic or exothermic.

Note. Deriving the Maxwell relations. Recall that area in the T S plane is heat and area in the pV
plane is work. In a closed cycle, the change in U is zero, so the heat and work are equal,
                                        Z          Z
                                          dp dV = dT dS.

Since the cycle is arbitrary, we have the equality of differential 2-forms

                                         dp ∧ dV = dT ∧ dS.

In terms of calculus, this means the Jacobian for changing variables from (p, V ) to (T, S) is one.
This equality can be used to derive all the Maxwell relations. For example, suppose we write
T = T (S, V ) and P = P (S, V ). Expanding the differentials and using dS ∧ dS = dV ∧ dV = 0,
                                                     
                                 ∂T                  ∂P
                                       dV ∧ dS =             dS ∧ dV
                                 ∂V S                ∂S V

from which we read off a Maxwell relation. The other three can be derived the same way, so
physically the Maxwell relations simply express energy conservation. (Maxwell originally derived
them in a similar way, but using the language of Euclidean geometry!)

We now give some examples of problems using the Maxwell relations and partial derivative rules.
65 3. Statistical Mechanics


