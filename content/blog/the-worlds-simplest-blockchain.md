---
title: "The World's Simplest Blockchain"
date: "2019-01-11"
categories: ["Blockchain", "Cryptography"]
description: "An introduction to blockchain fundamentals through a simplified explanation."
---

![Photo by [Roman Kraft](https://unsplash.com/photos/_Zua2hyvTBk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/newspaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://miro.medium.com/max/700/1*eO_LQbf_BcpKPgoibnTfvw.jpeg)
*Photo by [Roman Kraft](https://unsplash.com/photos/_Zua2hyvTBk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/newspaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

In early January 2009, the first *block* of the Bitcoin [Blockchain](https://hackernoon.com/tagged/blockchain) was mined. Hard-coded into the block was the following newspaper headline.

> “*The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.”*
> 

This headline provided a timestamp for the first block of Bitcoin, just like when hostages hold up the day’s newspaper in hostage videos to show they were still alive after a certain date.

The Bitcoin blockchain began by using the power of a newspaper to say with certainty, “this event happened **after** this moment in time”.

But this newspaper-inspired technique isn’t enough to completely timestamp an event or transaction. You also need to be able to prove the opposite, i.e. “this event happened **before** this moment in time”.

What’s more, if the event is a financial transaction, or the creation of a digital record, you also need to prove that the underlying data hasn’t changed at any point since the original event occurred (**immutability**).

There is no use time-stamping a transaction if you can change the details of the transaction at a later date.

Many blockchains are trying to do just this on a grand scale, especially the permissioned corporate ones. That is, blockchains are designed to guarantee the following three properties of a transaction:

1. **A transaction occurred after a moment in time,**
2. **A transaction occurred before a moment in time,**
3. **The details of the transaction haven’t changed since the transaction occurred (immutability).**

We’ve just seen how a humble newspaper can provide the first property. If a transaction contains the title of a certain day’s paper, then the transaction must have occurred after that paper was printed.

But can a newspaper provide Properties 2 and 3?

# **Quantum Ledgers**

In November 2018, AWS introduced a new product during the **re:Invent** conference called the QLDB (Quantum Ledger Database). It is an attempt to take most of the things people seem to want from a (corporate) blockchain solution, but offer it as a centrally managed database.

This may seem counter-intuitive when one of the main pillars of blockchain technology is **decentralisation**. But the decentralisation of databases (distributed ledgers) isn’t what blockchain pioneers want. They want to decentralise power and trust, and enable data privacy.

Distributed ledgers are very hard to work with and, in many use-cases, don’t offer much added value over well-thought-out centrally-managed alternatives.

**Is it possible to decentralise power and trust, without distributing the ledger?**

In the [launch video of QLDB](https://www.youtube.com/watch?v=7G9epn3BfqE), they talk about what **verifiability** (of a transaction) ****means (27:00). Essentially, it boils down to proving that a transaction on the ledger has occurred between two moments in time and is immutable. This is exactly the three properties we listed above.

The QLDB video offers an example where a car has been involved in a crime on August 2nd but it was sold from Alice to Bob on either August 1st or August 3rd. The question is:

**Is the database “immutable enough” to say when the car was really sold?**

If the transaction had been stored in a traditional database, then the database administrator (who, let’s imagine for this example, is in cahoots with Bob) could’ve simply changed the date column of the transaction from the 1st August to the 3rd August, and help convict Alice of the crime.

In an AWS Quantum ledger, this is apparently no longer possible. It is designed so that no transaction can be fiddled with after it is added to the ledger.

It works by creating a “hash-chain” of all the transactions in the database (which includes their timestamps).

This means, due to [the amazing properties of hash functions](https://medium.com/swlh/this-simple-yet-powerful-invention-is-changing-the-world-d04688c25f13), when someone comes along to audit the ledger and find out when the car was sold, they can be sure that no-one, not even those in cahoots with Bob, could have tweaked the database without the change having been written into the hash-chain.

# **What more does a corporate blockchain offer?**

Where this differs from a blockchain, or distributed ledger solution, is that there is still a possibility for the car sales company which controls the quantum ledger to act fraudulently.

For if the car sales company really wanted to make a change to the ledger in Bob’s favour, they can create a completely new ledger and new hash-chain out of all the transactions that have occurred on their ledger but with a tweak to Alice and Bob’s transaction.

Since the ledger is private, and timestamps are just strings in the database, there is no way for the auditor to know exactly when certain transactions were added to the ledger. (Or even if the ledger he is viewing is genuine at all!)

I.e the Quantum ledger satisfies Property 3, the immutability one, but not Properties 1 and 2, the time-stamping ones.

A whole chain of transactions claiming to cover many months of car sales could’ve been created before breakfast on the day of the trial.

On the other hand, with a blockchain solution, the ledger is distributed and so the transaction timestamps are fixed in time (so long as there is an honest node in the [network](https://hackernoon.com/tagged/network)). Therefore, any such rewinding, rewriting or fraudulent timestamping would be noticed by the other members of the network.

But blockchains are really hard to implement. Is there a way to ensure that the company with the car sales ledger **can’t** play around with timestamps, but **can** still have a centrally managed ledger?

# **Back to the newspaper!**

Here is a solution using once again the humble newspaper.

What if… the car sales company takes the final hash of the day from their Quantum ledger and hashes it with The Times’ morning headline. The company then sends it in to The Times to print in the newly created “Daily Hashes” page.

Placing such a hash in the Times would satisfy all three properties:

1. The morning’s headline is in the hash, so any transaction that contributed to this hash value must’ve occurred **after** that day’s paper was published.
2. The hash value appears in the next day’s paper, so any transaction that contributed to this hash value must’ve occurred **before** the hash appeared in the next day’s paper.
3. Since finding two strings that give the same hash is [impossible](https://medium.com/swlh/this-simple-yet-powerful-invention-is-changing-the-world-d04688c25f13), once a hash is in the paper, it is impossible to change the data that created the hash, and so any transaction that contributed to that hash value is **immutable.**

The Daily Hashes page could go in the middle of the paper, next to the deepest pages of the sports section. It wouldn’t make for great reading but it could help to effectively audit companies in which we place a lot of trust.

In fact, a company called [Surety](http://www.surety.com/solutions/digital-evidence-protection/absoluteproof-evidencesealer) offers such a service, but it is just that: a service. What if it was **compulsory** for banks and other institutions in which we place a lot of trust to release a daily hash of their ledger and have it printed in The Times?

## **Summary**

Both Newspapers and blockchains can provide the three key properties listed above.

But the paper-based blockchain is so much simpler. No sharding, forking, 51% attacks, Byzantine Generals, tokens, crypto bear markets, gas, secret keys, distributed ledgers, privacy issues etc. just to list a few!
