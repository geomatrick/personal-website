---
title: "The King's Conundrum: How Today's Problem Can Be Tomorrow's Success"
date: "2018-02-06"
categories: ["Mathematics"]
description: "A problem-solving parable illustrating how fresh perspectives reveal elegant solutions."
---

# The King’s conundrum: how today’s problem can be tomorrow’s success

Published: 2018/02/06
Published At: https://medium.com/swlh/the-kings-conundrum-a-reminder-that-there-s-always-a-smarter-way-to-face-our-problems-f73479be5140
Subtitle: The following story always reminds me that however bad it may seem, there could be a better path forward, hidden in plain sight, which will present itself if you look at the problem from all different angles.
Topics: Mathematics

![The King’s conundrum](https://miro.medium.com/max/700/1*sfzJkMrrA1lQ_MiFjpVSlA.png)

The King’s conundrum

We all face dilemmas at work and at home, where a positive resolution seems impossible.

Whichever way we look, it seems the only forward paths lead to trouble.

But perhaps not…

The following story always reminds me that however bad it may seem, **there could be a better path forward, hidden in plain sight**, which will present itself if you look at the problem from all different angles.

*It was the solution to the following problem that sparked an interest in Combinatorics for me, some years ago. Combinatorics is an amazing branch of Mathematics where problems viewed from a different angle can often yield beautifully simple and elegant solutions.*

# **The King’s Conundrum**

Many years ago, the king of the largest kingdom on Earth was having an enormous banquet for his coronation. He had invited all the most important people in the kingdom to come and celebrate with him.

But two hours before the banquet was to start, disaster struck! One of his squires ran to him from the wine cellar, where he had been on guard. He was shouting…

**Squire:** “Your Highness, your Highness, something terrible has happened!”

**King:** “What is it, Squire, what has happened?”

The squire caught his breath and continued.

**Squire:** “Your wicked brother, sir, I have just caught him poisoning one of the flagons of wine.”

**King:** “Bother, that sounds exactly like the kind of irritating thing my brother would do. Now, tell me Squire, did you see which flagon was poisoned?”

**Squire:** “Well I did, your Highness, but then your brother saw me, so he started swapping the flagons around. I lost track of which one had been poisoned.”

The king was a calm and fair man and responded thus.

**King:** “Don’t worry, Squire. We will just have to get rid of all that wine and start again. Tell me, how many flagons were laid out in the hall?”

**Squire:** “1000 flagons Sire and that’s the lot! There is no more wine in the cellar. This is the biggest party we’ve had in decades.”

**King:** “Squire, this doesn’t look good, we can’t have a party without wine, and the party must go on. All my enemies are here tonight. They will pounce on us at the smallest sign of weakness.”

The king paused in thought, and then continued.

**King:** “What do you know about the poison itself, Squire?”

**Squire:** “I found the flask in which it came — your brother must’ve dropped it as he ran — and I know this type of poison well, Sir. A glass of it will kill its drinker outright and yet strangely a thimble-full will only make their hair stand up on end. Oh, and one final thing: it takes 20 minutes after drinking before any symptoms show.”

The King, in all his rationality, gathered his thoughts and repeated how he saw the situation to his servant.

# **Recap**

**King:** So the situation is thus. We have two hours until the party starts, 1000 flagons of wine, one of which is poisoned, it takes 20 minutes for the poison to take effect, a full glass will kill someone outright, but a thimble-full will simply make their hair stand up on end.”

**Squire:** “Exactly, sir.”

The King and his Squire thought hard about how they could possibly work out which flagon was poisoned. He knew that if he had 1000 servants assembled, he could get them all to try a thimble-full from one flagon and, in just over 20 minutes, he would know which one was poisoned, since the hair of the corresponding servant would stand on end. But he didn’t have 1000 servants. Could he work out which one was contaminated with fewer people?

The king finally spoke.

**King:** “How many servants do we have available right now, Squire?”

**Squire:** “At most 30, your Highness. All the others are out preparing the banquet hall.”

**King:** “Only 30! Well then Squire, I am out of ideas. If there is no wine, I face rebellion. If I serve the wine, I may kill friends and family tonight. Do you have any ideas of how we can sort this?”

The King and the Squire sat in silence for a few moments before the King suddenly had an idea.

**King:** “I know, let me call the court mathematician and explain our dilemma, she might have an answer!”

And so he called for his court mathematician, Tafi. She arrived a few minutes later and he explained the entire situation.

**Tafi:** “And how many servants do you have at your disposal, Sir?”

**King:** “At most 30, Tafi. The situation is dire.”

Tafi went silent for a few minutes to think. Eventually, she spoke.

**Tafi:** “Your Highness, I have a solution. We can determine exactly which of these flagons contains the poison in the next two hours… with only ten of your servants.”

*At this point, if you would like to work it out for yourself, stop reading.*

# **The Solution**

**King:** “Tafi, you are a genius! Please explain how we can possibly do such a thing!”

**Tafi:** “Well, Sir, your ten servants will have to try a thimble-full from many of the flagons of wine in the next hour but, so long as only one flagon of wine is poisoned, they will only have at most one thimble-full of the poisoned wine.

**King:** “Do go on, Tafi.”

**Tafi:** “For each flagon, we can create different combinations of servants to drink from it so that it has a unique “signature” of drinkers. In this way, we will be able to determine exactly which flagon contains the poison.

“This is what we shall do. We shall line out the flagons in one long line, and number them one to one thousand. We shall then label each flagon with its corresponding binary number.

“This is when you describe a number using only 0’s and 1’s. In binary, the numbers up to ten are 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010.

“And the number twelve in binary is 1100, and the number nine hundred and ninety-nine is 1111100111.

“Now notice how this last binary number has ten digits. In fact, we can express every number up to one thousand using exactly ten digits, since we can write two as 0000000010 and twelve as 0000001100.

“Now we assign a servant to each one of these ten digits, and what each servant must do is go along the line of flagons and drink a thimble-full from every flagon where their digit of the binary number is 1 and leave each flagon alone where their digit is 0.

“For example, for the twelfth flagon, only the seventh and eighth servant will drink. For the nine hundred and ninety-ninth only the sixth and seventh servant will not drink.

“In this way, we will be able to determine exactly which flagon has been poisoned by noting which combination of servants’ hair stands up on end!”

![](https://miro.medium.com/max/700/1*LwSEgSshXw9VZrG93-WkXA.png)

The tenth servant will drink from flagon 687 and 689 but not from 688, since the final digit is 1 then 0 then 1.

The King was amazed, but he acted quickly. He immediately set his ten servants to work.

It took them an hour and a half to work out all the binary numbers and go along the whole line drinking the relevant thimble-fulls.

With ten minutes to go until the start of the dinner, the poison started to take effect. The King and Tafi watched as the hair of the fourth, fifth and eighth (incredibly drunk) servants stood up on end. It had worked!

![The 4th, 5th and 8th servant tasted the poison](https://miro.medium.com/max/700/1*9sCS4LX29RCZKaLTMcd1kw.png)

The 4th, 5th and 8th servant tasted the poison

They wrote down the binary number that this revealed: 0001100100 and they converted it back to normal numbers, which meant that the 356th flagon must be contaminated. They removed it from the line and service went out on time, all thanks to the work of Tafi the mathematician!

# **And so…**

…the King who thought he had no options left was able to find a resolution (via Tafi) by thinking about the problem in a different way.

I believe that often in life we can all do the same, perhaps not with combinatorics, but by simply viewing our problems and situations from different angles.

Today’s dilemma can become tomorrow’s success!