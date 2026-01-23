---
title: "Spark oversees 10x improvement in Filecoin retrievability"
date: "2024-10-03"
categories: ["Filecoin", "Spark", "Metrics"]
description: "Documenting the dramatic 10.5x improvement in Filecoin retrieval success rates measured by Spark, from 1.22% to 12.8% over six months."
---
> On April 18th 2024, the overall Filecoin retrieval success rate (RSR), as measured by Spark, was 1.22%. Many Storage Providers were simply not serving retrievals. On the 25th September 2024, Spark measured the overall Filecoin RSR at 12.8%, a 10.5x improvement.

This blog was first published on the Filecoin Station blog.
> 

## Where We Were In July

At Fil Dev Summit in Brussels in July 2024, the Space Meridian team announced that we’d seen a potential up-trend in the Filecoin retrieval success rate (RSR), as measured by Spark.

This uptick was caused by allocators using the Spark RSR scores to inform their datacap allocation decisions, and so Storage Providers (SPs) were suddenly incentivised to serve retrievals for public data they were storing, in order to win more datacap going forward.

The flow of datacap is a complex topic for the uninitiated, so we can simply say that there was suddenly an incentive for SPs to start serving retrievals from May 2024, and we began to measure an improvement shortly afterwards.

## Where We Are Now

The below chart shows the Filecoin retrieval success rate as measured by Spark between mid April and the end of September 2024. 

![The Filecoin overall RSR as measured by Spark.](/blog/spark-10x/spark-10x-rsr.avif)

The Filecoin overall RSR as measured by Spark.

Since we first noticed the improvement in Brussels in July, we are pleased to report that we’ve seen the up-trend continue, with an increasing number of SPs achieving a high Spark RSR.

On April 18th 2024, the overall Filecoin retrieval success rate (RSR) as measured by Spark was 1.22%. Many Storage Providers were simply not serving retrievals. On the 25th September 2024, Spark measured the overall Filecoin RSR at 12.8%, a 10.5x improvement. 🚀

The improvement by SPs can be visualised in another way in the following chart, which shows the number of Filecoin SPs whose Spark RSR score falls into certain buckets.

![Number of SPs by Spark RSR score buckets](/blog/spark-10x/sp-spark-10x.png)

In April 2024, Spark recorded zero SPs with a retrieval success rate above 90% over a weekly period, which we call “one nine retrievability”.

By the end of September 2024, there were over 70 SPs with one nine retrievability, and 13 SPs with two nines retrievability (>99%). There was even a few weeks where we recorded an SP with three nines retrievability (>99.9%). For comparison, AWS S3’s availability SLA is four nines, 99.99%.

## Where We Are Going

We would love to see this trend of improving retrievability continue. As we build more trust in the availability and retrievability of public data stored on Filecoin via the checks performed by the Spark protocol, Filecoin data clients will have more interest in the Filecoin network beyond just archival storage, thus improving the overall product market fit of the network.

- In Q4, we will ship Spark compatibility with DDO deals to keep Spark up to date with the latest developments in the way people are storing data on Filecoin.
- We are also researching how to incentivise Spark retrievals without the dependency on the FIL+ datacap program.
- There has also been increasing demand to use the Spark API, with Spark data populating an array of Filecoin related dashboards, like [Starboard](https://dashboard.starboard.ventures/capacity-services#retrieval-success-rate).
- We would also like to put Spark scores on chain so that they can be referenced in smart contracts.

Please reach out if you would like to learn more about Spark!

---
