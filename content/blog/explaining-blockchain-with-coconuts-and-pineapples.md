---
title: "Explaining Blockchain With Coconuts and Pineapples"
date: "2017-12-10"
categories: ["Cryptography", "Blockchain"]
description: "Using a creative analogy to explain how blockchain technology prevents the double spending problem."
---

# Explaining Blockchain With Coconuts and Pineapples

Published: 2017/12/10
Published At: https://medium.com/swlh/explaining-blockchain-with-coconuts-and-pineapples-e44edcbe2e0f
Subtitle: In this sequel, we will see how a Blockchain, or a photo-chain, as described in the previous blog, solves the double spending problem.
Topics: Blockchain, Cryptography

In my previous blog, [Explaining Blockchain with Where’s Wally and a camera](https://medium.com/swlh/explaining-blockchain-with-wheres-wally-and-a-camera-79e860a05815), I gave a visual and easy-to-understand explanation of Blockchain technology (Where’s Waldo for those in the US). Reading my previous blog will help with understanding this one.

In this sequel, we will see how a Blockchain, or a photo-chain, as described in my previous blog, solves the *double spending problem*.

![Two financial systems](https://miro.medium.com/max/1400/1*GxpK2Ci4Ix04JnLfn0PVaQ.png)

Two financial systems

# **Reminder of the scenario**

So… what’s the double spending problem again? Let’s remind ourselves.

We are back in 2008.

The mysterious Satoshi doesn’t like banks and so he is designing a new financial system (which will become Bitcoin). He begins by taking the ledger of transactions from the bank and giving it to the users. But, when everyone in the network has a copy of the shared ledger, he runs into a problem.

How does such a system ensure that everyone’s ledgers are saying the same thing. How can such a system ensure that everyone’s ledgers are in *consensus*?

## **Example**

Let’s give an example of why this is a problem. Suppose a transaction happens on the decentralised network (the right-hand one in the picture above). For example, ‘Caroline pays Tim 10 coins’. This transaction is immediately broadcast across the network. Some users, upon receiving this transaction, add it to their versions of the ledger. However, a few users don’t receive this transaction due to connectivity issues.

In this case, there is an issue around how the network agrees on the “most correct” version of the shared ledger, because some people’s ledgers are saying one thing and other people’s ledger are saying another. And this leaves the door open to some unsavoury behaviour. A devious user can look to exploit this. They can *attack* the network and spend some of their digital coins twice. This problem is called the *double spending problem*.

To explain the double spending problem, I am going to give an example with some coconuts and pineapples.

![](https://miro.medium.com/max/1400/1*eqlluj0qhW3rxhl2DjZ4Rg.png)

# **Double spending**

Let’s suppose I am the devious user in the decentralised network and I have 10 digital coins in my account. I am going to try and spend these digital coins twice to buy coconuts and pineapples (I’m making piña coladas!).

Now, it is important that we don’t view these digital coins as physical objects because it would be impossible to spend any physical object twice. If I gave you a pound coin, there is no clever way of spending it again without just taking it back off you. However, with digital money, it becomes possible (just as we can duplicate a file on a computer so that two people can have a version of the same file on their own computers).

I have 10 digital coins in my account and the network is in consensus on this amount, i.e. everyone’s ledgers agree that I have 10 digital coins.

## **My routine**

I begin by visiting my friend Alice to buy some coconuts (this is Alice before she has started using photo-chain technology as described in the last blog). She is the best coconut vendor in town. I transfer her my 10 digital coins and she adds the transaction to her ledger. She gives me the coconuts.

But I know that Alice’s internet is slow, so I thank Alice, I make my goodbyes, and I quickly leave.

I immediately run down the street to my friend Bob’s house. Bob sells pineapples🍍(the best in town) and I want to buy some. They cost the same as the coconuts, the full 10 digital coins.

Now since I have been so quick in getting to Bob’s house, my coconut transaction to Alice has not yet reached Bob across the decentralised network, and so, when he looks at his version of the shared ledger, it appears to him that I still have 10 digital coins.

Therefore, Bob is happy to accept my transaction and we submit it on Bob’s computer. With my actual intentions hidden, I urge Bob to immediately send the pineapple transaction to everyone in the network so that the money is safely his. Fortunately, he has fibre optic internet and his message gets out to 99% of the network while my coconut transaction to Alice only gets out to a few people.

Since the majority (the blue ledgers in the picture below) believe Bob to be the rightful owner to my digital coins , they convince the rest of the network (the yellow ledgers in the picture below) of this, and Alice is sadly left out of pocket.

Now, in this case, Alice could just come and find me and demand her money back or at least her coconuts. But what if I am an anonymous online purchaser? Then Alice has simply been conned. In this way, I have attacked the system and spent the same 10 digital coins on coconuts and pineapples, and I’m making cocktails!

This is called a *double spending attack* in the literature.

![Double spending problem](https://miro.medium.com/max/1400/1*lpWOiah2P7l3KqykN9Nbaw.png)

Double spending problem

## **Summary of double spending problem**

When transactions are immediately added to different versions of the shared ledger, I can buy coconuts and pineapples with the same digital coins.

So we need a way to prevent a double spending attack. And Blockchain or photo-chain technology does just that.

# **Blockchain prevents double spending attacks**

*In the following, I will use the photo-chain terminology from my last [blog](https://medium.com/swlh/explaining-blockchain-with-wheres-wally-and-a-camera-79e860a05815). For the official terms, where it says Wally-searcher, think miner. Where it says photo, think block.*

Now suppose Alice and Bob are part of a decentralised network that uses a photo-chain to update and maintain their financial system’s shared ledger of transactions. Let’s see what this does to my same double spending routine.

## **My routine**

I begin just as before. I show up at Alice’s house. She kindly takes some time out from her Wally-searching to sell me some coconuts. However, she doesn’t immediately give the coconuts to me. She asks me to transfer her the 10 digital coins in a transaction on the photo-chain network. I send my transaction off to the network, and it hits the desks of many Wally-searchers across the network, all trying to solve their own Where’s Wally puzzles.

But instead of handing over the coconuts at this point, Alice waits. My transaction to her has not yet been published onto the ledger. She is waiting until she sees a photo broadcast with my transaction to her in it.

Alice doesn’t trust me… and rightly so! I have sneakily also bought the pineapples online from Bob, who has, in turn, sent that 10-coin transaction to the network.

I am starting to sweat now. Both Alice and Bob have broadcast transactions to the network, and I still haven’t received any fruit yet.

10 minute later, a photo hits Alice’s desk with my coconut transaction to her in it (see picture below). Someone in the network has solved their current puzzle and has included my coconut transaction in their photo. At this point, I know that most of the Wally-searchers will have validated this photo and will be moving onto a new Where’s Wally puzzle, ‘on top of’ this photo.

![First photo to hit Alice’s desk](https://miro.medium.com/max/1400/1*s_O2ubUDQVjl3MKCES55Aw.png)

First photo to hit Alice’s desk

So I impatiently ask if I can take the coconuts and leave, yet still Alice waits! She is a super cautious seller. She wants to be sure that there isn’t another solution to the previous photo out there which is being built on top of by some others in the network.

A few minutes later, she receives another photo from the network, and, inside this one, she sees, in the previous photo space, the photo with my coconut transaction to her in it. Finally, she is confident enough to hand over the coconuts, since my transaction to her has been embedded into the chain by another photo.

So I have got the coconuts but how can I get the pineapples too? At this point, to get Bob’s transaction, but not Alice’s, into the shared ledger, I need to start a different chain of photos which includes the pineapple transaction but does not include the coconut transaction.

## **So how can I do this?**

What I need to do, all by myself, is to find a solution to my own Where’s Wally puzzle ‘on top of’ the photo in the chain just before the one containing my coconut transaction to Alice (photo 346 in the picture below).

If I can solve this puzzle, then I can publish a photo which includes my pineapple transaction to Bob but not my coconut transaction to Alice, and this will start a rival chain (the top chain in the picture below). But the other Wally-searchers are trying to build onto the longest chain, because it is on the longest chain where they are most likely to win a competition that will end up in the photo-chain in the long run.

So I need to make my rival chain the longest chain in the network. To do so, I need to solve a second Where’s Wally puzzle on top of the first one I need to solve, and continue to solve puzzles until I have built a longer chain than the one which all the other Wally-searchers are competing on. If I can build a longer chain, then I can broadcast my longer chain to the network, at which point, the other Wally-searchers will start working on my chain because it is longer.

![The competing branches of the photo-chain](https://miro.medium.com/max/1400/1*yp2GQQowHMoaK_mrt64hDg.png)

The competing branches of the photo-chain

So it is me against all the other searchers, trying to find solutions to Where’s Wally puzzles. But there are no shortcuts with Where’s Wally and so the odds of me finding solutions faster than the rest of the network are very slim. Even if I can convince other Wally-searchers to join my mission to double spend and get me some pineapples, I will need over half of the searchers to have good odds on creating a new longest chain (this is called a *51% attack* in the literature).

## **What actually happened**

Unfortunately, since Alice was a super cautious salesperson, and she waited until my transaction had been cemented into the chain by another photo before she gave me the coconuts, Bob didn’t accept my transaction and I didn’t get any pineapples.

*In the Bitcoin network many vendors wait for 3 to 6 blocks to be placed on top of the one including the relevant transaction before they accept the transaction as valid.*

## **In Summary**

The hard work that Wally-searchers have to do in order to publish a photo makes it very difficult to alter the chain of photos that form the ledger. This means it is very hard to double spend, because there is a lot of Wally-searching to do in order to create a different longest chain of photos, starting from an earlier photo in the chain and trying to outgrow the current longest chain.

The further down the chain the photo containing a transaction is, the more unlikely it is that a different chain of photos starting from below that photo can become the longest chain. It is this reasoning, (and some probability theory) that justifies the argument against a double spending attack.

But remember that no transaction is safely executed until enough blocks have been placed on top of it!