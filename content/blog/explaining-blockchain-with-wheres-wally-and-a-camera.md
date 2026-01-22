---
title: "Explaining Blockchain with Where's Wally and a Camera"
date: "2017-11-23"
categories: ["Cryptography", "Blockchain"]
description: "Demystifying blockchain technology by comparing it to a Where's Wally puzzle competition."
---

# Explaining Blockchain with Where’s Wally and a camera 📸

Published: 2017/11/23
Published At: https://medium.com/swlh/explaining-blockchain-with-wheres-wally-and-a-camera-79e860a05815
Subtitle: A blog for beginners, looking for a visual and easy-to-understand explanation of Blockchain technology.
Topics: Blockchain, Cryptography

![Wally image from [http://waldo.wikia.com/wiki/File:Character.Waldo.jpg](http://waldo.wikia.com/wiki/File:Character.Waldo.jpg)](https://miro.medium.com/max/1400/1*4YXMRbhIWNxUbekOMPz1KQ.png)

Wally image from [http://waldo.wikia.com/wiki/File:Character.Waldo.jpg](http://waldo.wikia.com/wiki/File:Character.Waldo.jpg)

# **Background**

The story of Blockchain began in 2008, when a mysterious person named Satoshi Nakamoto released a paper called

> *‘Bitcoin: a peer-to-peer electronic cash system’.*
> 

## **So who is the mysterious Satoshi Nakamoto?**

Like Spartacus, Zorro and Banksy before, many have claimed to be the great Satoshi, yet no one knows who he or she really is. He has remained anonymous throughout the rise of Bitcoin and the subsequent rise of Blockchain technology.

There have been many attempts to find Satoshi through analysing his posts and his correspondences, but no conclusive evidence has been found.

What we do know about Satoshi is that, in 2008, he was familiar with recent research in cryptography, and he didn’t like banks.

In early January 2009, the first *block* of the Bitcoin Blockchain was created (*mined*). It included the message

> *“The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.”*
> 

This newspaper headline provided a timestamp for the first block, just like when hostages hold up the day’s newspaper in hostage videos to show they were still alive on a certain date.

This message was also specially chosen to highlight the problem Bitcoin is aiming to solve.

# **So this message was in the first block…but what is a block and why is there a chain of them?**

To answer this, we must first discuss Satoshi’s fundamental reason for creating Bitcoin. Essentially, it is to remove “trusted third parties” from financial transactions. And, by trusted third parties, we mean banks.

## **The current banking system**

For clarity, let’s simplify the current “centralised” banking system to a basic system with just one bank which everyone uses. The role of this bank is simply to record all the transactions between payers and payees.

A transaction might read something like ‘Alice pays Bob 10 pounds’.

However, every transaction we make online doesn’t just go from the payer to the payee. It goes from the payer to the bank and then to the payee.

![Financial systems](https://miro.medium.com/max/1400/1*GxpK2Ci4Ix04JnLfn0PVaQ.png)

Financial systems

The bank enables and records every financial transaction we make and it, therefore, has complete control over our finances. The bank also takes a cut of many transactions.

Controlling this list of transactions, called the *ledger,* gives the bank power over the finances of the users. If the bank decides to alter the ledger, who can stop them?

Based on this, Satoshi’s initial aim was to create a financial system without a bank.

# **A financial system without a bank**

The first step towards removing the bank from our simplified financial system is to take the **ledger of transactions from the bank and make it public.

So let’s give the ledger to the users of the system… but to how many of the users?

Well, the ledger must be given to anyone who wants it, because how else do we remove a trusted third party from the system? Thinking about it, if half of the users control the ledger but the other half do not, then the first half are in a position of power.

In order to completely remove a trusted third party of any sort, the only solution is to allow every user of the financial system to maintain and update the ledger.

Ok …but that seems like a lot of copies of the ledger if everyone has one…. let’s roll with it for now.

Is this going to work? hmm…we immediately come across a problem.

**If everyone has a copy of the ledger, how do we ensure that everyone’s ledgers are always saying the same thing, i.e. that they are all in *consensus*?**

Suppose a transaction happens, say ‘Naomi pays John 10 coins’, and it is broadcast across the network. Some users, upon receiving this transaction, add it to their ledger. However, a few users don’t receive this transaction due to connectivity issues.

In this case, there needs to be some way to agree upon the “most correct” version of the ledger, but this causes a lot of problems.

One such problem is called the *double spending problem,* where **a crook can exploit differences between the many copies of the ledger and spend some of their digital coins twice!

To understand more about the double spending problem, please read my [blog](https://medium.com/swlh/explaining-blockchain-with-coconuts-and-pineapples-e44edcbe2e0f) on it (coming soon!).

Aside from these “consensus-reaching” problems, there is also another issue. Why would people bother to look after this distributed shared ledger in the first place? It seems like a nice idea, but updating and maintaining it is hard work. It costs a lot of time and money (on electricity). For many people, their dislike of banks only goes so far.

Users need to be incentivised to maintain the shared ledger correctly. Otherwise, they will just go back to using the old centralised banking system.

To recap, we have some problems with this *decentralised* shared ledger idea.

1. **Lots of copies of the ledger.**
2. **Double spending problem ([blog](https://medium.com/swlh/explaining-blockchain-with-coconuts-and-pineapples-e44edcbe2e0f)).**
3. **How can we incentivise the users of the network to maintain the ledger?**

It is at this point we need a bright idea, and Satoshi provided just that. In his Bitcoin white-paper, he came up with a revolutionary idea to solve problems 2 and 3 at the same time. This idea is called a Blockchain.

# **Blockchain**

To explain Blockchain technology, we are going to have a chat with Alice who uses a much more visual and simplified blockchain to manage her finances with her 99 other friends. Her network’s Blockchain is called a “photo-chain” and it is based on Where’s Wally and a camera 📸 !

**PW:** Hi Alice, please tell me about how you and your 99 friends manage your payments to each other.

**A:** Hi, so yeah, I am part of a financial network of 100 people and there is no bank involved! Our network uses photo-chain technology instead of a bank to manage our finances.

**PW:** Cool, can you explain what you mean by that?

**A:** Sure, so the other users of the network and I each have a copy of the shared ledger of our transactions to each other.

**PW:** So what do you do when a new transaction is broadcast across the network?

**A:** A new transaction has just arrived into my inbox. Can you see it says ‘Matilda pays Bob 10 digital coins’.

However, instead of simply adding it to my copy of the ledger, I wait. In our photo-chain, transactions are only added to the ledger in sets. And **I** **want to be the person who wins the competition to publish the next set of transactions onto the shared ledger.**

**PW:** Oh right… why?

**A:** Our photo-chain is essentially a competition. I compete against the other 99 users to be the next person to publish a set of transactions onto the ledger, and I bother to compete because, like all good competitions, the winner gets a prize.

The winner of this competition earns some digital coins.

**PW:** Cool, so what is the competition?

**A:** So my network’s competition is slightly different from Bitcoin’s competition, but it is essentially the same.

See this book here. It is a Where’s Wally book that all 100 of us in the network have. Now, Where’s Wally puzzles ****are very difficult to solve. Also, there are no shortcuts or clever tricks for solving Where’s Wally puzzles. You just have to start looking and find Wally by systematically checking the whole picture (in the literature, this is called a *brute force search)*.

Let’s open the book and check out the current puzzle.

So here is the puzzle and I scan the puzzle for Wally, hoping to be the first to find him and, therefore, the first to broadcast a solution to the network.

We call ourselves Wally-searchers, and we are equivalent to what other Blockchains call *miners.*

Now while I am searching, have a look at my inbox and notice how the most recent transactions from the network are coming in, making a list of transactions.

![Where’s Wally?](https://miro.medium.com/max/1400/1*B5valAhQ6SWA0ZC98DVsQQ.png)

Where’s Wally?

**PW:** Oh yeah, I can see. Victor has just paid Sam 7…

**A:** …there he is, there’s Wally! He’s there, I am sure of it!

**PW:** Oh yeah, that looks like him, well done! Let’s tell the network! We, I mean you, could win some coins!

**A:** Exactly, Now I have a bit of admin to do. I need to persuade the other Wally-searchers in the network that I have found a solution, and this is what I do.

I write down Wally’s coordinates as proof that I know where he is (*proof of work*). I then print out a list of all the transactions that have come into my inbox since I started looking for Wally in this puzzle. I also add another (very important) transaction to the list. It is one that creates some coins for me (*generation transaction*). This is my reward for being the first to solve the current puzzle and the reason why I participate in the first place. In fact, I also receive a small fee for each transaction I put in my photo!

I then arrange the puzzle, the coordinates of Wally and the list of transactions and I grab my camera 📸. Can you pass the camera? It is just behind you.

**PW:** Sure, here it is.

**A:** Arghh! I have forgotten one last thing. The previous photograph!

**PW:** What do you mean?

**A:** Well, I’m not the first person to have solved a puzzle. The Wally-searcher who solved the previous Where’s Wally puzzle took a photo of the previous puzzle, the previous coordinates of Wally, the previous set of transactions, and the previous-previous photo and distributed it around, just as I am doing now. I must include this photo in my photo so that a *chain* of photos is established. (*Might be worth reading this paragraph again!*)

In this way, every single transaction since the very first transactions in the first photo in the photo-chain is included in this photo… if you think about it!

**PW:** Wow, yeah, I see what you mean.

**A:** So let me quickly put the previous photo in the shot, take my photo 📸 and distribute it to the network… done!

![Alice’s photo](https://miro.medium.com/max/1400/1*KiGWYwSJmoYL9beeWkgV6w.png)

Alice’s photo

**PW:** So…your photo has been distributed… but will the others accept your photo as valid?

**A:** Good question. The other Wally-searchers check that all the transactions I printed out are valid, meaning that everyone has enough money in their accounts to make these transactions. Then they check that the previous photo is in my photo, and that Wally’s coordinates (my *proof of work*) are correct.

Fortunately, it is very quick to validate whether or not I have found Wally. The other Wally-searchers just need to check whether the coordinates reveal Wally’s location. If so, they accept the photo and they start working on the next Where’s Wally puzzle. And the whole competition starts all over again.

The transactions that I included in my photo are now part of the photo-chain.

And that is it. The competition just keeps on going, photo after photo, and new transactions are added to the ledger in photos.

**PW:** Wow, thanks Alice. I have one more question. How did you know which puzzle in your book to solve?

**A:** Well, our Where’s Wally book is actually very special. My current puzzle is unique to me and the exact puzzle I am trying to solve depends on many things.

It depends on my account number in the network, the solution to the last puzzle in the chain and even the transactions that come into my inbox while I’m trying to solve it!

**PW:** Wow! That is starting to sound pretty complicated but perhaps I can come back another time to find out more about that. Quite a lot to digest in one go. See you soon! Thanks!

**A:** My pleasure. See you soon Patrick.

# **Linking it all back to Blockchain**

Alice’s photo-chain is an interesting idea, but how does it relate to a real Blockchain?

In the Bitcoin world, Wally-searchers are called *miners*. Whereas Wally-searchers search for Wally, Bitcoin miners are searching for *outputs to a hash function less than a certain threshold*.

Here I have related Alice’s terms to those used in the Bitcoin Blockchain…

1. Wally-searchers: *miners*
2. Wally’s coordinates: *nonce ( or proof of work)*
3. Where’s Wally book: *pricing function based on hash function*
4. Camera: *Hash function*
5. Photo: *block (or hash digest)*
6. Photo-chain: *blockchain*

# **How does such a competition solve the problems we identified?**

So Alice and the others Wally-searchers can win some digital coins, and so they are incentivised to participate. In the Bitcoin world, miners have made *millions of dollars* mining bitcoin and solving the equivalent puzzles on the Bitcoin network. But does a Blockchain-style competition really solve the systemic problems we identified earlier? (We are now talking more generally about Blockchain, not just Alice’s photo-chain).

**Lots of copies of the ledger.** No. We still have many copies of the ledger.

**Double spending problem?** Yes. To see how this type of competition solves the double spending problem, see my [blog](https://medium.com/swlh/explaining-blockchain-with-coconuts-and-pineapples-e44edcbe2e0f) on double spending.

What’s more, Blockchain does more than just solve the double spending problem, it creates a ledger that is *immutable*. To fully understand why a Blockchain is immutable takes a more in-depth look at how they are set up, but it is easy to imagine how it might work from the following observations.

1. In each block (or photo), you have a remnant of every single transaction that has ever occurred in the chain up to that block.
2. Each puzzle uniquely depends on the searcher’s account number, the solution to the previous block and all the transactions received since the last block was mined. This means changing even a single transaction in the Blockchain changes every subsequent puzzle!
3. Puzzles take time to solve.

**Users are incentivised?** Yes. (Already covered this).
