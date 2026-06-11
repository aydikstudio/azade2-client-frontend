export const metadata = {
  title: "О бренде",
  description: "AZADE — ювелирный бренд, основанный в 2020 году.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mt-4 font-playfair text-5xl font-semibold text-stone-950 md:text-7xl">
          О бренде
        </h1>

        <div className="mt-12 space-y-7 font-manrope text-base leading-8 text-stone-600 md:text-lg">
          <p>AZADE — бренд ювелирных украшений, основанный в 2020 году.</p>

          <p>
            Мы верим, что настоящая красота заключается в деталях. Поэтому в
            основе нашего подхода — внимание к качеству, эстетике и изделиям,
            которые остаются актуальными вне времени.
          </p>

          <p>
            Наша цель — предлагать украшения, способные стать частью важных
            моментов жизни и гармонично дополнять образ каждый день.
          </p>

          <p>
            AZADE — это современный взгляд на ювелирное искусство, в котором
            ценятся лаконичность, элегантность и внимание к каждой детали.
          </p>
        </div>
      </section>
    </main>
  );
}
