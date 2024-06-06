// pages/index.js
"use client";
import React from "react";
import Listings from "../components/listings/index.js";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center space-y-24 pb-24">
      <div className="relative w-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/about/banner-1-about-sm.png"
          />
          <Image
            className="w-full"
            src="/about/banner-1-about.jpg"
            alt="Banner"
            width={1920}
            height={275}
            layout="responsive"
          />
        </picture>

        <div className="absolute left-4 lg:left-10 xl:left-24 2xl:left-10 top-3 lg:top-4 xl:top-8 2xl:top-12 text-white space-y-2 w-1/2 xl:w-2/5">
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
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet="/about/banner-2-about-sm.png"
          />
          <Image
            className="w-full"
            src="/about/banner-2-about.jpg"
            alt="Banner"
            width={1920}
            height={150}
            layout="responsive"
          />
        </picture>
        {/*
        <div className="absolute top-0 xl:top-4 2xl:top-6 left-0 lg:left-16 xl:left-32 flex flex-col text-center w-1/3">
          <p className="text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-bold text-white">
            12 let
          </p>
          <p className="text-base xl:text-lg 2xl:text-xl text-white">
            máme dvanáctiletou zkušenost na trhu s ojetými vozy
          </p>
        </div>{" "}
        */}
        <div className="absolute top-8 sm:top-20 md:top-24 lg:top-6 xl:top-10 2xl:top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            priority
            src="/about/car.png"
            alt="Car"
            width={306.5}
            height={157.4}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 35vw, (max-width: 1023px) 40vw, (max-width: 1280px) 20vw, (max-width: 1536px) 20vw, 20vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <Listings />
      <div className="relative w-full">
        <picture>
          <source
            media="(max-width: 1280px)"
            srcSet="/about/testimonials-sm.png"
          />
          <Image
            className="w-full"
            src="/about/testimonials-1-about.jpg"
            alt="Car"
            width={1920}
            height={260}
            layout="responsive"
          />
        </picture>
        <div className="absolute inset-x-0 inset-y-0 xl:left-24 2xl:left-10 top-0 xl:top-3 text-white space-y-1 sm:space-y-2 md:space-y-4 xl:space-y-1 w-full xl:w-2/5 flex flex-col items-center justify-center text-center">
          <p className="text-lg md:text-2xl lg:text-4xl xl:text-lg 2xl:text-2xl">
            Roman
          </p>
          <p className="text-2xl lg:text-4xl xl:text-lg 2xl:text-2xl font-bold">
            Škoda Octavia IV Combi
          </p>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
              />
            </svg>
          </div>
          <div className="w-3/4 md:w-1/2 xl:w-3/4 text-base md:text-2xl lg:text-4xl xl:text-base">
            <p>
              Auto mi bylo osobně hezky prezentováno a čisté, bez známek většího
              opotřebení. Přátelský prodejce poskytl maximum užitečných
              informací.
            </p>
          </div>
        </div>
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
