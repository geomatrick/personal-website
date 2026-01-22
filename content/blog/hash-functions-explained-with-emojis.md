---
title: "Hash Functions Explained with Emojis"
date: "2018-02-19"
categories: ["Cryptography", "Mathematics"]
description: "Using an emoji-based metaphor to demystify hash functions."
---

# Hash Functions Explained with Emojis

Published: 2018/02/19
Published At: https://medium.com/swlh/this-simple-yet-powerful-invention-is-changing-the-world-d04688c25f13
Subtitle: The Blockchain story has essentially been a ten-year love affair between technologists and hash functions.
Topics: Cryptography, Mathematics

![](https://miro.medium.com/max/700/1*rONjogTs70KIuLyAO_oy_g.png)

The **Blockchain** story has essentially been a ten-year love affair between technologists and hash functions.

In fact, if you understand hash functions, then understanding **mining and immutability on the Blockchain** is a walk-in-the-park! (More on this at the end)

**Git**, the version-control code repository system that enabled the open source revolution, which is used by almost all developers, is hugely dependant on hash functions.

**Docusign**, the eSignature software, is based on hash functions.

Hash functions are used every time you enter your **password into a website**.

A hash function’s purpose is very simple, but its properties are so powerful that it is ubiquitous in all software to do with **versioning, security and authenticity**.

# **What’s a hash function?**

Hash functions have been so important to recent progress in technology. I feel like we should all have at least a basic understanding of what they are and how they work.

Hash functions may not be your cup of tea so my aim here is to explain just why they are so powerful without going into too much detail… so stick with me!

There are lots of explanations of hash functions online that describe them in a matter-of-fact way, which are either intimidating or boring… or both. So here I explain them using **emojis** to bring some colour and life into the habitually black-and-white world of cryptography. (It may be more confusing to explain them this way but hey!)

# **Hash functions**

We can imagine a hash function as an emoji factory that takes in lines of emojis, but the only emojis it accepts are the Kiwi, Pineapple, Aubergine, Pepper, Carrot and Corn.

![The 6 emojis accepted and output by the factory](https://miro.medium.com/max/700/1*R5XiJRUH3kplC0JQjoQ2YA.png)

The 6 emojis accepted and output by the factory

This factory also only outputs lines of the above emojis once it has processed the input.

And this emoji factory is special for a number of reasons:

# **1. This factory returns as an output fewer emojis than it accepts as an input**

In any one go, the factory takes in a line of 8 emojis chosen from the above 6 choices (it can take more than one of each). It processes them and it returns a line of 3 emojis, again taken from the above 6 choices.

Importantly, it outputs fewer emojis than it takes in (8 becomes 3).

![Emoji hash factory](https://miro.medium.com/max/700/1*vHsZ1aaV9Y7TqV3wEFhLbA.gif)

Emoji hash factory

# **2. The factory always returns the same output for the same input**

If you put the same 8 emojis in the same order into the factory twice, then it will return the same 3 emojis, in the same order, both times.

i.e. the factory is *deterministic.*

In the above gif, you can see the factory returning the same output for the same input every time.

# **3. This emoji factory is a one-way street**

If you put 8 emojis in a line into the factory, the factory will immediately give you an output. Simple!

However, if I gave you a 3-emoji output from the factory, but I didn’t tell you what the input was, you wouldn’t be able to work it out by analysing the factory and the output. In fact, trial and error would be the quickest way to work out what the input was.

In other words, the quickest way to find out what the input was for some output, is to blindly try out different lines of emojis as inputs until you find the right one.

And what’s more, you can even walk around the factory and see exactly how it works, but you still can’t work out or “reverse-engineer” an input from its output! It’s a strictly ***one-way* factory**.

Now I know this sounds a little bit strange so here is an analogy that may help.

## **It’s like baking a cake!**

If I gave you the exact quantities of ingredients for a cake and an exact recipe, and you carried out the exact recipe on these ingredients, then the cake would be ready in no time at all.

And if I asked you to do it again with the same exact ingredients and the same exact recipe, then you would produce an identical cake in no time at all. **Baking is *deterministic*** (in theory!).

But… if I gave you the cake and the recipe (the recipe here does not include the quantities of the ingredients, only the mixing and cooking steps), then it would be really difficult to work out the exact quantities of ingredients that went into the cake.

And perhaps baking cakes using trial and error with different ingredient quantities would be your best approach. (Professional chefs may disagree with me on this one!)

Back to the properties of the emoji factory.

# **4. Changing the input by even one emoji will give a completely different output**

In the above baking analogy, you might get closer and closer to the right quantities of ingredients over time. But in the emoji factory, the smallest change to the input (even changing one emoji) will result in a **completely unrelated output**!

For example, swapping the first aubergine in the above gif’s input for a carrot would result in a completely different 3-emoji output.

This means you can’t get “closer” to finding the right input for a given output. You just have to keep blindly trying different lines of emojis until you stumble across the right one.

*Mining on the Blockchain is essentially computers using trial and error to find inputs to an emoji factory that return outputs with a particular property, for example, outputs that begins with two aubergines.*

# **5. The quickest way to find two inputs that give the same output is by trial and error**

Now I’m sure you are already thinking…

# **“Hang on, if the outputs are shorter than the inputs, surely there is more than one input for each output?”**

…and you would be correct. If you put 8 emojis into the factory and you only get 3 emojis back, then more than one input must result in the same output.

However, this emoji factory is so well designed that even if you know of one input for a given output, trial and error is unfortunately still the quickest way to work out any of the other inputs that give the same output.

In other words, the quickest way to find two inputs that give the same output is by once again by using trial and error until you find a “**collision**”.

It is now about time to recap all of the amazing properties of this emoji factory!

# **Recap**

1. The factory accepts 8 emojis and returns 3 emojis. (*shortening*)
2. A given input will always return the same output. (*deterministic*)
3. Changing the input slightly will result in a completely different output. (*diffusing*)
4. Given an output, trial and error is the quickest way to work out any of its corresponding inputs. (*one-way*)
5. Trial and error is the quickest way to find two inputs that give the same output. (*collision resistant*)

# **These properties are all very interesting but why are they so important?**

Well, now let’s see how this factory can be used in practice.

Imagine that your password is given by a line of 8 emojis. And every time you put your password into a website, the website doesn’t store your password. Instead, it stores a “hash” of your password (the 3-emoji output of your password after it has been through the emoji factory).

In this way, if there is a data breach and someone gets hold of the website’s personal data, then all they have a bunch of hashes, but no actual passwords!

And since the factory is *one-way*, the only way for the criminal to work out your actual password from its hash is by trial and error.

Now, this may not take very long for the criminal when your password is made up of a line of 8 emojis (chosen from only 6 different emojis).

But in real life, you choose your password from a much larger set of possible characters and therefore the number of different possible inputs is so much bigger. Also the outputs of a real life hash factory/function are much much longer than a line of just 3.

Therefore, in reality, it would take many many years for the criminal to actually work out your password from its *hash*!

And meanwhile, despite the data breach, as-and-when you want to innocently log back into the website, since you know your password, you can simply type it in.

At which point, it immediately gets put through a hash factory giving your password hash. And the website can immediately check whether or not it matches the hash they have stored against your name, since the hash factory always returns the same output (*deterministic*), and they log you in accordingly.

# **But passwords are not always 8 emojis long, what if I want to hash a longer line of emojis?**

Well you can! Amazingly, using a very simple technique due to two cryptographers, Ralph Merkle and Ivan Damgård, we can “hash” emoji lines of any length into a hash of 3 emojis.

![Merkle-Damgård construction](https://miro.medium.com/max/700/1*1Ul2mA3V88iDmQScH7jc1w.gif)

Merkle-Damgård construction

## **How can we do this?**

Well, given a longer line of emojis, we actually create a **line of factories** to process it. Here’s what we do.

1. We chop up the longer line of emojis into an initial chunk of 8 emojis, followed by chunks of 5 emojis. (If the last chunk is not exactly 5 emojis then we can pad it with some extra emojis, but this additional step is a bit more technical. So let’s just assume we have a nice number of emojis in the line!)
2. We put the chunk of 8 emojis through the first factory.
3. We take the outputted 3 emojis and place them in a line with the first chunk of 5 emojis and we put them together through the second factory.
4. We repeat this process until we have put the whole line of emojis through a factory.
5. We return the output from the last factory.

So now we can hash much longer lines of emojis into just 3 emojis!

# **Hang on…**

**Now that the inputs can be much longer, surely we can find two lines that create the same output (a collision) much more easily?**

Intuitively, you might think so. But amazingly, this is just as hard as finding a “*collision*” in one factory and the reasoning is as follows.

## **Reasoning**

Suppose you were able to find two longer lines of emojis that created the same output (a *collision*) using some method other than trial and error.

Then, at some factory during the Merkle-Damgård process, you would be inputting two different lines of emojis and that particular factory would return the same output for both lines.

But this means that you have found a collision at one factory using some method other than trial and error, and this is a contradiction since we assumed each factory was collision resistant!

# **And so…**

…with some extra factories and some mathematical reasoning, we have created a way to hash lines of emojis of any length into just three emojis.

What’s more, anyone who has access to a three-emoji output can’t work out any corresponding inputs of any length quicker than just trial and error. And with the number of different combinations used in real life hashing, trial and error could take many years!

With this simple trick, your emoji password can now be of any length and still be safe, on the assumption that a single emoji factory is collision resistant.

# **What about Blockchain?**

Imagine that you have a document (full of emojis), perhaps the document is describing a financial transaction. And you want to prove to people that this document was in an exact state (down the the last emoji) at an exact moment in time.

Well then you can put the whole document through the hash factory using the Merkle-Damgård construction, and then email the output to 100 people.

These people can’t work out what the document originally said since the factory is one-way. And if someone tries to claim in the future that your document is a fraud or that you have changed it, then you can prove without doubt that the document was in an exact state, down to the last emoji (or letter) on the page, at the exact moment when you sent it to a decentralised network of people.

And since the hash factory is collision resistant, they will believe you are not a fraud!

![](https://miro.medium.com/max/700/1*arxMXPoCAU8LxMZVbwpJ3A.png)

# **In summary**

The one-way and collision resistant properties of a hash function are so powerful that they are changing the landscape of technology and science.

# **But what actually happens inside the emoji factory/hash function?**

This all gets quite technical and, actually, if you are confident that the above properties hold, then the inner workings of the factory are irrelevant. The properties of hash functions are much more interesting than their internal workings (unless you are a mathematician/cryptographer!).

Actual hash functions accept **hexadecimal strings** (not sixemojical strings). Hexadecimal strings are those consisting only of the characters “0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f”. They take inputs of any length and return 64 hexadecimal characters (or 128 characters for extra safety).

A commonly-used hash function is the SHA-256. If you have any thoughts on this blog, please send me an email, if you can work out my email address from its hash! (hint: there may be a smarter approach than trial and error in this case!)

Hash of my email address: 8d935def1f9e0353b0f19f3c765bdeec151862a199084ae4f4b417ca42608914