import React from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';

export default function AboutPage() {
  const toc = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'values', label: 'Our Values' },
    { id: 'team', label: 'Team' },
  ];

  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/70 to-[#ED1B24] bg-clip-text text-transparent">
              About PONY
            </span>
          </h1>
          <p className="text-white/60 mt-3 text-sm sm:text-base">Interests make connections. Start with substance.</p>
        </div>
      </section>

      {/* On this page (chips) */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-4">
        <div className="flex flex-wrap gap-2">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-24">
        <div className="divide-y divide-white/10">
          {/* Mission */}
          <section id="mission" className="scroll-mt-28 py-10 first:pt-0">
            <Header title="Our Mission" />
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <p className="text-white/80 leading-relaxed">
                We believe great relationships begin with meaningful interests. PONY helps you connect beyond the small talk by putting substance first—showing who you are and what you care about.
              </p>
              <div className="relative h-56 sm:h-72 lg:h-[22vw] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/cafe.png"
                  alt="People connecting over coffee"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section id="what-we-do" className="scroll-mt-28 py-10">
            <Header title="What We Do" />
            <p className="text-white/80 leading-relaxed mb-4">
              We design an experience that turns awkward intros into effortless conversations. From curated prompts to interest-forward discovery, PONY reduces friction and amplifies real chemistry.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Interest-first profiles and discovery.</li>
              <li>Thoughtful nudges that inspire better conversations.</li>
              <li>Tools that respect your time, intent, and safety.</li>
            </ul>

            {/* Mosaic visuals */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['/v1.png', '/v2.png', '/v3.png'].map((src, i) => (
                <div key={src} className="relative h-36 sm:h-48 lg:h-[16vw] rounded-xl overflow-hidden border border-white/10">
                  <Image src={src} alt={`In-app experience ${i + 1}`} fill className="object-cover" sizes="(min-width:1024px) 30vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section id="values" className="scroll-mt-28 py-10">
            <Header title="Our Values" />
            <ul className="grid sm:grid-cols-2 gap-6">
              {[
                { h: 'Substance First', p: 'Conversations that matter begin with what matters to you.' },
                { h: 'Respect & Safety', p: 'Comfort, control, and clear boundaries are non-negotiable.' },
                { h: 'Thoughtful Design', p: 'Every detail is intentional—useful, elegant, and human.' },
                { h: 'Continuous Improvement', p: 'We listen, iterate, and evolve with our community.' },
              ].map((v) => (
                <li key={v.h} className="border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-1">{v.h}</h3>
                  <p className="text-white/80">{v.p}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Team */}
          <section id="team" className="scroll-mt-28 py-10">
            <Header title="Team" />
            <p className="text-white/80 leading-relaxed mb-6">
              PONY is built by a small, focused team at Voltis Labs LTD.—designers and engineers who care about connection, craft, and community.
            </p>
            <div className="relative h-56 sm:h-72 lg:h-[18vw] rounded-2xl overflow-hidden border border-white/10 mb-6">
              <Image
                src="/picnic.png"
                alt="Our team enjoying time outdoors"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="md" className="rounded-full">Download</Button>
              <a href="/contact" className="inline-flex">
                <Button variant="outline" size="md" className="rounded-full">Contact Us</Button>
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block h-3 w-3 rounded-full bg-[#ED1B24]" />
      <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}

