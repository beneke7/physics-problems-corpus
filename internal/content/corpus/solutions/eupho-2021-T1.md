---
id: eupho-2021-T1
problem: eupho-2021-T1
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2021
verification_status: unverified
figure_files: []
---

## Solution

Let $p_1, V_1, T_1$ denote the (time-dependent) pressure, volume, and temperature in the upper chamber, and $p_2, V_2, T_2$ those in the lower one. Note that $V_1 \equiv V$ does not change.

Consider a parcel of volume $v$ below the diaphragm containing $n$ moles of helium. It is convenient to imagine it bounded by two fictitious free thin massless pistons. During slow perturbations the parcel undergoes an adiabatic process. The pressure and temperature for the parcel are actually the pressure and temperature for the entire lower chamber $p_2$ and $T_2$. The energy conservation for the parcel is

$$
0 = p_2\,dv + d\!\left(\tfrac{3}{2}nRT_2\right) = p_2\,dv + \tfrac{3}{2}v\,dp_2 + \tfrac{3}{2}p_2\,dv = \tfrac{5}{2}p_2\,dv + \tfrac{3}{2}v\,dp_2.
$$

This gives

$$
v^5 p_2^3 = \text{const},
\tag{1}
$$

$$
T_2^5 p_2^{-2} = \text{const}.
\tag{2}
$$

**Part (a).** The leak begins when the pressure below the diaphragm exceeds that in the upper chamber by

$$
\Delta p \equiv p_0 - p = \frac{mgH}{V} = px,
\quad\text{where}\quad
x = \frac{mgH}{pV}.
$$

Before the leak, $v = V_2$. Using equation (1):

$$
V^5 p^3 = V_0^5 (p + \Delta p)^3 = V_0^5 p^3(1+x)^3,
$$

$$
\boxed{V_0 = V(1+x)^{-3/5}.}
$$

**Part (b).** Energy conservation for the whole system during the quasi-static process after leaking begins:

$$
0 = p_1\,dV_1 + d\!\left(\tfrac{3}{2}n_1 R T_1\right) + p_2\,dV_2 + d\!\left(\tfrac{3}{2}n_2 R T_2\right)
= \tfrac{5}{2}(p_1\,dV_1 + p_2\,dV_2) + \tfrac{3}{2}(V_1\,dp_1 + V_2\,dp_2).
$$

Since the pressure difference $p_2 - p_1 = \Delta p$ remains constant throughout (the diaphragm is floating, always supported by the same $\Delta p$), we have $dp_1 = dp_2$, and also $dV_1 = 0$, $dV_2 = d(V + V_2)$. Thus

$$
\tfrac{5}{2}p_2\,d(V + V_2) + \tfrac{3}{2}(V + V_2)\,dp_2 = 0,
$$

which integrates to

$$
(V + V_2)^5 p_2^3 = \text{const}.
$$

When leaking starts, $V_2 = V_0 = V(1+x)^{-3/5}$ and $p_2 = p(1+x)$. When the piston touches the diaphragm, $V_2 \to 0$ so the total lower volume becomes $V$. Hence

$$
V^5 p_2^{\prime 3} = \bigl(V + V_0\bigr)^5 p_0^3
= V^5\!\left(1 + (1+x)^{-3/5}\right)^5 p^3(1+x)^3,
$$

$$
p_2' = p\!\left(1 + (1+x)^{3/5}\right)^{5/3}.
\tag{3}
$$

The upper chamber at this moment has pressure

$$
p_1' = p_2' - \Delta p = p\!\left[\left(1 + (1+x)^{3/5}\right)^{5/3} - x\right].
$$

Initially the upper chamber held $n$ moles ($pV = nRT$). When the piston touches the diaphragm all $2n$ moles are in the upper chamber (volume $V$), so

$$
p_1' V = 2nR T_1' = \frac{2p V}{T}\,T_1',
$$

$$
\boxed{T_1' = \frac{T}{2}\!\left[\left(1 + (1+x)^{3/5}\right)^{5/3} - x\right].}
$$

**Part (c).** The temperature in the lower chamber is related to its pressure by equation (2). At the start of leaking, $T_2 = T$ and $p_2 = p(1+x)$; substituting (3):

$$
T_2' = T\left(\frac{p_2'}{p_0}\right)^{2/5}
= T\left(\frac{p_2'}{p(1+x)}\right)^{2/5}
= T\!\left(\frac{\left(1+(1+x)^{3/5}\right)^{5/3}}{1+x}\right)^{2/5}.
$$

$$
\boxed{T_2' = T\!\left(1 + (1+x)^{3/5}\right)^{2/3},}
\quad x = \frac{mgH}{pV}.
$$
