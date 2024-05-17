// pages/index.js
"use client";
import React from "react";
import Listings from "@/components/listings";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center space-y-24">
      <div className="relative w-full">
        <img
          className="w-full"
          srcSet="/about/banner-1-about-sm.png 768w, /about/banner-1-about.jpg 1920w"
          sizes="(max-width: 767px) 100vw, 1920px"
          src="/banner-1-about.jpg"
          alt="Banner"
          width="1920"
          height="275"
        />
        <div className="absolute left-4 lg:left-10 xl:left-24 2xl:left-10 top-3 lg:top-6 xl:top-12 text-white space-y-2 w-1/2 xl:w-2/5">
          <p className="text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
            UDĚLEJTE SI RADOST NOVÝM AUTOMOBILEM
          </p>
          <p className="text-xs md:text-base xl:text-lg">
            Jsme prodejce ojetých vozů s českým původem, doloženou servisní
            historií a osobním přístupem.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-2xl font-bold text-center">Dobrý den,</p>
        <p className="text-lg text-center">
          jsme prodejce prověřených vozů, kterým věnujeme maximální péči.
          <br />
          Najdete u nás především kvalitní vozidla s českým původem a
          pravidelným servisem.
        </p>
      </div>
      <div className="mx-4 md:mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="flex flex-col text-center space-y-4">
          <Image
            className="self-center mt-3"
            src="/about/about-1.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <p className="text-xl font-bold">Oblíbené vozy</p>
          <p className="text-lg">
            nabízíme prodej a výkup nejen oblíbených koncernových vozů
          </p>
        </div>
        <div className="flex flex-col text-center space-y-4">
          <Image
            className="self-center"
            src="/about/about-2.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <p className="text-xl font-bold">Ověřená historie</p>
          <p className="text-lg">
            vozidla zakoupená jako nová v ČR se snadno dohledatelnou historií
          </p>
        </div>
        <div className="flex flex-col text-center space-y-4">
          <Image
            className="self-center"
            src="/about/about-3.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <p className="text-xl font-bold">Možnost financování</p>
          <p className="text-lg">
            zajistíme vám výhodné financování i pojištění
          </p>
        </div>
        <div className="flex flex-col text-center space-y-4">
          <Image
            className="self-center"
            src="/about/about-4.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <p className="text-xl font-bold">Ověření CEBIA</p>
          <p className="text-lg">
            všechna naše vozidla prošla kontrolou v databázi od společnosti
            CEBIA
          </p>
        </div>
        <div className="flex flex-col text-center space-y-4">
          <Image
            className="self-center"
            src="/about/about-5.svg"
            width={80}
            height={80}
            alt="icon"
          />
          <p className="text-xl font-bold">Pohodový výběr</p>
          <p className="text-lg">
            osobní přístup, profesionální komunikace a vystupování
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <img
          className="w-full"
          srcSet="/about/banner-2-about-sm.png 768w, /about/banner-2-about.jpg 1920w"
          sizes="(max-width: 767px) 100vw, 1920px"
          src="/about/banner-2-about.jpg"
          alt="Banner"
          width="1920"
          height="150"
        />
        {/*
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            priority
            src="/about/car.png"
            width={306.5}
            height={157.4}
            alt="Car"
          />
        </div>
        */}
      </div>
      <Listings />
      <div>
        <Image
          priority
          src="/about/testimonials-1-about.jpg"
          width={1920}
          height={260}
          alt="Car"
        />
      </div>
      <div className="space-y-16">
        <div>
          <p className="text-2xl font-bold text-center">Naše další služby</p>
          <p className="text-lg text-center">
            Není to pro nás jen o prodeji auta...
          </p>
        </div>
        <div className="mx-4 md:mx-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="relative w-full flex justify-center">
              <div className="relative">
                <Image
                  src="/circle-bg.svg"
                  width={120}
                  height={120}
                  alt="icon"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-bold z-10 text-white">
                    Výkup vozu
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg">
              Vykoupíme váš vůz, případně individuálně zajistíme zprostředkování
              prodeje jinou formou.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="relative w-full flex justify-center">
              <div className="relative">
                <Image
                  src="/circle-bg.svg"
                  width={120}
                  height={120}
                  alt="icon"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-bold z-10 text-white">
                    Kontrola vozu
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg">
              Máme dlouholeté zkušenosti s výkupem vozů, a proto vám rádi
              pomůžeme s výběrem a fyzickou kontrolou vámi vyhlídnutého auta
              mimo naši nabídku.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="relative w-full flex justify-center">
              <div className="relative">
                <Image
                  src="/circle-bg.svg"
                  width={120}
                  height={120}
                  alt="icon"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-bold z-10 text-white">
                    Rozleštění laku
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg">
              Navrátíme lesk vašemu vozu s použitím profesionálních přípravků a
              provedeme i drobné retuše pro zakrytí nedokonalostí.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="relative w-full flex justify-center">
              <div className="relative">
                <Image
                  src="/circle-bg.svg"
                  width={120}
                  height={120}
                  alt="icon"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-bold z-10 text-white">
                    Čištění interiéru
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg">
              Provádíme precizní čištění interiéru auta, tepování čalounění a
              ošetření plastových částí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
