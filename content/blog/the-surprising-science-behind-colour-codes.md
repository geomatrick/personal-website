---
title: "The Surprising Science Behind Colour Codes"
date: "2018-05-02"
categories: ["Design", "Physics"]
description: "Exploring how colors are scientifically encoded and standardized across different mediums."
---
![](https://miro.medium.com/max/700/1*iaUsGARj6tfzSCRGhysKyw.png)

Coca-Cola Red, Tiffany’s Blue, British Racing Green, Macdonald’s Yellow.

We are all used to seeing these famous colours and identifying them by their names. But how are these colours actually encoded so that others can use exactly the same colour on the other side of the world?

# **How does a Coca-Cola label in the Philippines have exactly the same colour as one in Canada?**

This may seem like a relatively trivial question in today’s world, but 200 years ago we didn’t even understand what colours really were.

The same can be said about sounds — 200 years ago we had no way to record and recreate music. Now we can all listen to the same song anywhere in the world.

Perhaps, in 200 years time, it will seem trivial to encode and recreate smells the far side of the world!

# **Encoding Colours**

A lot of work has gone into defining colours scientifically. As a result, many different formats are available to describe exact colours, each suitable for different use cases.

For example, a different colour format is required depending on whether you are looking at a colour on a screen or a piece of paper.

We are going to look at some science behind 5 commonly used colour codes in Design. **RGB**, **Hex** and **HSL** (web formats), and **CMYK** and **Pantone** (print formats).

# **WEB FORMATS**

Let’s begin with the three web formats.

# **RGB**

![RGB colours](https://miro.medium.com/max/700/1*7FqBvAT7Fc6CamjACq4Pqw.png)

RGB colours

**RGB** stands for **R**ed, **G**reen, **B**lue.

These three “primary” colours of RGB are the building blocks for all other colours in the RGB format. Each primary colour is given a number between 0 and 255.

If all three primary colours are set to 0, we get Black. If all three are set to 255, we get White.

RGB is an *additive* colour method.

## **What do we mean by additive?**

Every RGB colour is formed by adding a certain amount of each of the three primary RGB colours onto a black background.

Since we start with a black background and we *add* colour, RGB is called an additive colour format.

This is opposed to *subtractive* colour.

## **Subtractive colour**

When light enters the human eye after reflecting off a surface (e.g. a piece of paper, a book or a palette of paints), the colour we see depends on which wavelengths of light are absorbed by the surface and which wavelengths are reflected by the surface into our eye.

If all wavelengths of light are reflected by a surface, the surface appears white. The more wavelengths that are absorbed (or *subtracted*) by the surface, the darker the surface appears.

We all learnt at school that the three primary colours are Red, Yellow and Blue, where Yellow + Blue = Green.

However, in RGB, it turns out that Green + Red = Yellow. This is because the light from a computer is additive not subtractive.

Since your computer emits light (rather than reflecting light from another source), the additive RGB colour system displays green and red light to create the *illusion of yellow light.*

The human eye cannot distinguish between natural yellow light and the mixing of green and red light from a computer.

However, it is important to realise that the computer isn’t actually creating yellow light. The computer is just creating an illusion of yellow light which is good enough to trick the human eye.

![Both the screen and the paper appear yellow](https://miro.medium.com/max/700/1*X-xrVUkAFO1C84y8sBa8vA.png)

Both the screen and the paper appear yellow

**Fun Fact**: James Clerk Maxwell, the most influential 19th Century Physicist, the man who pioneered electromagnetism, one of Einstein’s three heroes alongside Faraday and Newton, is credited for being the Father of the additive colour method. His studies on this concept led to the first-ever colour photograph!

# **Hex**

![Hex](https://miro.medium.com/max/700/1*N9TsA0c2I3z24BDO1UcqTQ.png)

Hex

**Hex**

is the most widely used colour format in web design. It is essentially exactly the same is RGB, except each colour’s three numbers are displayed more concisely.

Instead of using a number between 0 and 255 for the amount of each primary colour, we use the ***hex**adecimal representation* of that number.

## **Hexadecimal numbers**

Hexadecimal is just another way to represent numbers, just like binary and decimal.

Binary numbers represent numbers using just 1s and 0s.

Decimal numbers, which we are all used to, represent numbers with ten characters, 0 up to 9. Larger numbers can be expressed using combinations of these ten digits.

Hexadecimal numbers represent numbers using sixteen characters. 0 up to 9 and then A up to F. After we reach F, we use combinations of these sixteen characters to express larger numbers.

For example, the number seventeen is 10001 in binary, 17 in decimal and 11 in hexadecimal.

In the above picture, we have Mint Green with a Hex code of #6BBDB9.

In the RGB picture, it has an RGB code of (107, 189, 185). If we convert these three decimal numbers into hexadecimal numbers we get (6B, BD, B9), which matches the Hex code!

# **HSL**

![HSL](https://miro.medium.com/max/700/1*waHzhkK0U-eqYuoZJycusA.png)

HSL

**HSL** stands for **H**ue, **S**aturation, **L**ightness. This approach to encoding colours came around in an attempt to avoid some of the unintuitive results of manipulating colours in the RGB “gamut”. (A gamut is the space of all colours available when using a colour scheme such as RGB).

The problem was that, in the RGB model, in order to get a darker or lighter shade of, say, the above Mint Green, one has to vary each of the red, the green and the blue values of the RGB code.

The creators of HSL thought this change should be possible by changing just one dial, namely, the brightness.

So **HSL** was invented to provide a more intuitive approach to colour transformations.

**Hue:** This ****is essentially the root colour in the colour spectrum. It takes as its value a degree between 0 degrees and 360 degrees, where Red is at 0 (and 360) degrees, Green is at 120 degrees, and Blue is at 240 degrees with the other colours fitting in-between.

**Saturation:** Given as a percentage value, this is the ratio of *Colourfulness* to Brightness where Colourfulness is [defined](https://en.wikipedia.org/wiki/HSL_and_HSV) as the “attribute of a visual sensation according to which the perceived colour of an area appears to be more or less chromatic”.

Basically, how colourful is the colour?

**Lightness:** Also given as a percentage value, this ****is just like Brightness but relative to a chosen white point (whereas Brightness is an absolute measure).

This all sounds quite technical and perhaps the best way to describe HSL is with a picture.

![HSL. Source: [Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)](https://miro.medium.com/max/700/1*4xF1bcVFM4tMf467WPqCWQ.png)

HSL. Source: [Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)

# **PRINT FORMATS**

Now let’s look at the print formats, CMYK and Pantone.

# **CMYK**

![CMYK](https://miro.medium.com/max/700/1*pnxUdMQ4KSrK8imD1tsGxA.png)

CMYK

**CMYK** stands for **C**yan, **M**agenta, **Y**ellow and either **K**ey or Blac**K**.

This is a print format and, as we have seen, since printed objects reflect light but do not emit light, we need to use a *subtractive* colour format. We start with a white piece of paper, or background, and we subtract wavelengths from the white light it is reflecting.

## **How does CMYK subtract from white light?**

> *“Cyan is the complement of red, meaning that the cyan serves as a filter that absorbs red. The amount of cyan applied to a white sheet of paper controls how much of the red in white light will be reflected back from the paper.”*
> 

In the same way, Magenta and Yellow, as the complements of Green and Blue respectively, control the amount of Green and Blue light reflected back from the paper.

The origin of the **K** in **CMYK** is disputed. Some say it comes from the last letter of Blac**k**, with the last letter chosen instead of the first because **B** would mislead people to think it stood for **B**lue. Others say it stands for the first letter of **K**ey as in the key plate in a printer.

The majority of printing is undertaken using the **CMYK** format.

# **Pantone**

![Pantone](https://miro.medium.com/max/700/1*ijVsYvhAVr_T68dvf6Ivvw.png)

Pantone

**Pantone** is the only one of our colour formats that is also a company!

Pantone offer a whole bunch of print colours outside of the CMYK gamut.

Their colours are often used by brand and design agencies and they have built up quite the brand of their own which culminates in their colour of the year declaration, a choice of one of their colours to reflect the mood of the times.

Since so many of the Pantone colours are not in the gamuts of the other colour formats, there is limited automated colour conversion available between Pantone and the other formats.

This results in designers going around with expensive Pantone colour Rolodex’s to ensure that the web colours match the print colours in their client work.

Pantone’s colour codes start with “PMS” which stands for **P**antone **M**atching **S**ystem. Then it gives each colour a number (like 7472 for the above Mint Green), which can be followed by C or U, which stands for **C**oated and **U**ncoated.