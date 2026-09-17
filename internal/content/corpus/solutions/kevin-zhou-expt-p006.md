---
id: kevin-zhou-expt-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-expt-p006
solution_type: author
source_document: solution-document-kevin-zhou-exptsol
source_pdf: sources/kevin_zhou/site/handouts/ExptSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/ExptSol.pdf."
---

[2] Problem 6. You are given a small light bulb, a filter which lets only red light pass through, and
a light meter which measures the total light intensity on it. How can you accurately measure the
intensity of the red light given off by the bulb in a given direction, at a given distance?
Solution. Obviously, you have to fix the locations of the bulb and light meter, put the filter between
them, and point the light meter directly at the bulb. But some other things impact the accuracy of
the result.
4
Kevin Zhou Physics Olympiad Handouts
• Of course, you should first turn off all of the other lights that you can, and keep them off.
• You should ensure the result isn’t affected by reflections. The best way to do this would be to
put the bulb and light meter underneath a black box. If one isn’t available, the next best thing
is to remove highly reflective objects, such as pieces of paper lying on your desk.
• You should also measure what the meter reads when the light bulb is turned off. Your answer
is the difference of what you measure with the light bulb on, and this background value.
• For all measurements, you should place the filter next to the light meter, not next to the bulb. If
the filter is next to the bulb, it might partially scatter the bulb’s light, throwing off the angular
distribution. Also, if the filter is covering the light meter, then it will also filter out non-red
background light. This significantly lowers the background, allowing a more precise result.
[2] Problem 7.  ^ 1 0AuPhO 2012, problem 14. Another question about practical measurements.
Now for some brief advice for more subtle experiments.
Idea 2
In trickier experiments, it might not be obvious how to perform a measurement. Sometimes,
it’s because the experiment contains strong noise sources, so that an accurate result can only
be extracted by a clever choice of procedure. Other times, it’s because the experimental
apparatus itself might behave in an unpredictable way; for instance, it might contain a
nonlinear circuit element whose general behavior you won’t be told. (As an extreme case,
some experiments are “black boxes” where you have to figure out what’s inside.) Finally,
in some cases there are several adjustable input variables which are related to the output
variables in a complicated way, so that you won’t be able to solve for the parameter if you
just take arbitrary data points.
Doing these experiments requires two stages. The first is exploration. Before settling on
a strategy, you should figure out everything the experiment can do. Figure out all the
ways that the pieces of the experimental apparatus can be combined. For every adjustable
parameter, quickly sweep over its full range, and observe what happens to the outputs. (For
example, the output might just change linearly, or it might not change at all, or peak, or
qualitatively change at some point.) Figure out why each part of the experiment kit is included.
Second, you have to settle on a strategy. Usually, this involves setting up the experiment in a
particular configuration, varying one parameter over a well-chosen range, and fixing all other
parameters to appropriate values (e.g. minimum, maximum, or intermediate ones, depending
on what works best). It’s hard to say more about this process without getting into specific
examples, but doing simulation labs is a fantastic way to practice it, since it’s essentially
those labs’ only source of difficulty. A variety of good simulation labs are listed at the end of
this problem set.
5
Kevin Zhou Physics Olympiad Handouts
4 Analyzing Data
Idea 3
The zeroth step of data analysis is to neatly organize your work.
• Always make an organized data table, with a row for each data point. For each column,
specify the physical quantity calculated, and give its units. If your data points have
uncertainties, indicate them on the table.
• Draw neat graphs using a ruler and graph paper. Always label the axes with the corre-
sponding quantities, and their units.
• Set the axis scale so that the graphed data points cover almost the entire page. To
achieve this, it can help to start the x and/or y axes at a nonzero value, though you
should let the x-axis include x = 0 if you need to find a y-intercept.
• It’s usually not allowed to use a calculator to find best-fit slopes and intercepts. Instead,
you should eyeball the best-fit line, draw it with a ruler, compute the slope using two
distant points on it, and show this computation explicitly.
• Sometimes, you’ll need to extract both the slope and intercept. Anothercommon situation
is that the slope matters, while the intercept absorbs some background quantity you
don’t care about, such as a constant shift. In other situations, you will be guaranteed
that the intercept vanishes to great precision. In those cases, you can be slightly more
efficient, but slightly less robust to systematics, by forcing the best fit line to pass through
the origin. (Unfortunately, opinions differ on when you should do this; I’ve seen people
penalized for either doing it or not doing it.)
• Often, you’ll have to transform your data points before plotting, e.g. by raising them to a
power, or applying a trigonometric function. You should learn how to do this as quickly
and efficiently as possible with your calculator. It also helps to avoid keeping too many
insignificant figures; your data points should never have more than 2 uncertain digits.
These are all small things, but they really do help get reliable results, and many rubrics
include explicit penalties if they aren’t done.
Idea 4
How much data is required for full credit on a given task? It’s tempting to give a rule of
thumb, like “always take X data points for a line”, but the real answer is that it depends on
the context. Generally, rubrics expect the student to spend the entire 5 hours making their
results as accurate as possible. This means that you should stop taking data once the result
won’t get much better, or when it’s not reasonable in the time given.
To gauge how much time is reasonable, note that a 5 hour experimental exam contains 20
points, so 1 point should take 15 minutes. Usually, you’ll spend a bit less than half your time
collecting data. (But in some experiments, you’ll have to collect data “passively”, waiting
6
Kevin Zhou Physics Olympiad Handouts
several minutes for each data point. In these cases, you should collect data for most of the
time, doing your thinking and data analysis while waiting.)
To plot a completely generic line, it’s reasonable to take 5 to 8 data points. But there are
plenty of exceptions, depending on the context.
• Sometimes, it takes an extremely long time to get each data point, or the equipment
might only support a limited number of types of measurement. In these cases, fewer than
5 data points might be acceptable.
• Sometimes, the data has a lot of noise, and/or is very fast to collect. (For example, you
might be trying to measure a very small displacement or voltage, or the lab might be a
simulation that instantly gives results.) In this case, you should take more measurements,
to reduce the uncertainty. This can be done by repeating the same measurement several
times and averaging the results, which helps save time making adjustments.
• Sometimes, the trend isn’t a single line, but has features like peaks or transitions between
different regimes. In these cases, you should take enough data to cleanly identify each
feature, e.g. at least a few around each peak or transition region. In fact, this is the
fundamental reason that an ordinary linear relation usually needs 5 to 8 data points:
that’s how you show it’s linear in the first place.
Idea 5
If you’re plotting a line to extract a slope and intercept, there are a few important rules of
thumb for collecting the data.
• Ensure your data encompasses the widest possible valid range of parameters. The wider
the range, the longer your “lever” is for getting an accurate result.
• If you’re plotting a transformed quantity (such as T2, where you measure T), then you
should arrange your measurements so that the plotted data points are relatively evenly
spaced. Otherwise, they may pile up in one end of the graph, making them less useful.
• If the measurements in the experiment are tricky to make, then it’s quite likely that
you’ll make a few mistakes, leading to data points that are far, far off the best fit line.
So, when you see such an outlier, you should measure it again to see if it’s a real feature,
or if you simply made a mistake.
It should be noted that not all data analysis requires drawing lines. Sometimes it suffices to
take the same data point several times and average the results. In addition, sometimes you
may have to sketch more general curves through data points, such as resonance curves, and
eyeball minima, maxima, or transition points.
7
Kevin Zhou Physics Olympiad Handouts
Remark
If you’re unusually scrupulous, you might object to the point about outliers above:
isn’t throwing out data a kind of scientific fraud? Well, in social science it’s a huge
problem, because it’s one of the methods used for “p-hacking”, endlessly tweaking
the data analysis to argue that a nonexistent effect is “significant”. That’s why there’s
a movement in social science to preregister data analyses, fixing all the procedures in advance.
By contrast, physics is inherently reproducible. In an Olympiad experiment, a measure-
ment will give the same result (within uncertainty) every time you perform it correctly.
And the relevant physical laws are quantitatively true, making reliable and concrete
predictions. As a result, there’s just no way you can fake a result by retaking and replac-
ing mistaken data points. Doing this will get you closer to the truth, rather than further away.
Now, if you’re unusually unscrupulous, you might be wondering if you can just make up a
bunch of data points. Students try this occasionally, but it’s an awful idea for many reasons.
First, this actually is scientific fraud, because it can be used to justify false results as well as
true ones. Second, it’s against the rules, often easily detectable, and grounds for immediate
disqualification. Third, it doesn’t actually help you get good results. As mentioned above,
rubrics generally demand you take the number of data points that gets you the most accurate
result in the time available. Real data points make your answer more accurate, while fake
data points don’t. So if the rubric wants at least 7, and you take 2 and fake 10 more, then
the most likely result is that your final answer will be outside the window that gets credit.
[2] Problem 8.  Y 1 0AuPhO 2016, problem 14. A simple question about plotting data. You’ll also
need the accompanying answer sheets.
Idea 6
Generally, students do too much formal error analysis, and not enough informal error analysis.
Formal error analysis refers to applying the formulas in P2 for error propagation. If you’re
spending a lot of time on it, then you’re probably doing something wrong, because:
• About half of IPhO experiments don’t ask for any error analysis at all!
• Even when you have to do error analysis, one source of error will often dominate, so that
you can neglect the rest. If you’re unlucky and two are comparable in importance, you
should add them in quadrature, but adding them “directly” is also acceptable. I’ve never
seen a case where three sources of error are simultaneously significant.
• Error bars are rarely expected when graphing lines. To perform error analysis for best
fit lines, you should just plot the points directly, then draw the steepest and shallowest
allowed lines by eyeballing the data points. (For example, the steepest line should pass
above most of the points on the right, and below most of the points on the left.) The
resulting range of slopes and intercepts gives the uncertainty on those parameters.
• Most errors can be assigned by rules of thumb. As discussed above, for a ruler you should
take ∆x = 0.5mm. If a voltmeter stably shows 16.2V, you should take ∆V = 0.05V. If
a voltmeter is fluctuating between 0.73V and 0.77V, you should take ∆V = 0.02V.
8
Kevin Zhou Physics Olympiad Handouts
The reason the requirements are so loose is that there’s not a widespread agreement on
what an error bar even means, at the high school level. To a statistician, it should mean
a standard deviation. But at the introductory level, it often is construed to mean “the
range which almost certainly encompasses the true value”, which is more like two standard
deviations, and motivates “direct” addition of uncertainty. Because of this mismatch, error
analysis at Olympiads is always ambiguous by roughly a factor of 2, and the exact result
you arrive at doesn’t matter too much, as long as it’s reasonable.
What is important is that you figure out how to get accurate experimental results, and
that requires constantly performing informal error analysis, whether the question asked for
it or not. If your experimental method depends on extracting a parameter by finding a
small difference between two large measurements, your result probably isn’t going to be very
accurate. If you think you need to do extremely precise measurements, of lengths smaller
than 0.5mm or of voltages on the mV scale, or it’s hard to see the physical effect because of
an enormous spread in your data points, then there’s probably a better way.
5 Simulation Labs
