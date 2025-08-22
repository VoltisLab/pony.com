import React from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import AppStoreButtons from '@/components/shared/Badge';

export default function MissionPage() {
  const toc = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'how-it-works', label: 'How PONY Works' },
    { id: 'difference', label: 'What Makes Us Different' },
    { id: 'community', label: 'Community & Safety' },
    { id: 'get-started', label: 'Get Started' },
  ];

  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">
              Mission
            </span>
          </h1>
          <p className="text-white/60 mt-3 text-sm sm:text-base">Interests first. Real conversations. Better connections.</p>
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

      {/* Visual hero band */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 pb-6">
        <div className="relative h-48 sm:h-64 lg:h-[20vw] rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/heroimage.png"
            alt="Discover connections through shared interests"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 70vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
                PONY helps people connect through substance—not small talk. We believe chemistry starts with shared interests, mutual curiosity, and the right prompt at the right time. Our mission is to make conversations easier, more natural, and genuinely enjoyable.
              </p>
              <div className="relative h-56 sm:h-72 lg:h-[22vw] rounded-2xl overflow-hidden border border-white/10">
                <Image src="/picnic.png" alt="People enjoying a picnic" fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="scroll-mt-28 py-10">
            <Header title="How PONY Works" />
            <div className="grid lg:grid-cols-3 gap-3">
              {[{src:'/v1.png',h:'Pick your interests',p:'Choose the topics, scenes, and vibes that feel most you.'},{src:'/v2.png',h:'Match by vibe',p:'We surface people who share your world—not just your location.'},{src:'/v3.png',h:'Start strong',p:'Smart prompts and context help you skip the awkward parts.'}].map((card) => (
                <div key={card.h} className="border border-white/10 rounded-xl overflow-hidden">
                  <div className="relative h-36 sm:h-48 lg:h-[16vw]">
                    <Image src={card.src} alt={card.h} fill className="object-cover" sizes="(min-width:1024px) 30vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1">{card.h}</h3>
                    <p className="text-white/80 text-sm">{card.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Difference */}
          <section id="difference" className="scroll-mt-28 py-10">
            <Header title="What Makes Us Different" />
            <ul className="grid sm:grid-cols-2 gap-6">
              {[{h:'Substance over swipe speed',p:'Quality interactions matter more than endless browsing.'},{h:'Conversation-first design',p:'Thoughtful prompts and shared context to make it easy.'},{h:'Respect for your time',p:'Tools that reduce friction and avoid noisy experiences.'},{h:'Safety & comfort',p:'Clear controls, reporting, and boundaries by design.'}].map((v) => (
                <li key={v.h} className="border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-1">{v.h}</h3>
                  <p className="text-white/80">{v.p}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Community & Safety */}
          <section id="community" className="scroll-mt-28 py-10">
            <Header title="Community & Safety" />
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="relative h-56 sm:h-72 lg:h-[22vw] rounded-2xl overflow-hidden border border-white/10 order-last lg:order-first">
                <Image src="/map.png" alt="Community across the world" fill className="object-contain" sizes="(min-width:1024px) 40vw, 100vw" />
              </div>
              <p className="text-white/80 leading-relaxed">
                We want people to feel comfortable expressing who they are. We invest in safety, privacy, and control—so you can set your pace, choose your audience, and report what doesn’t feel right. Our team listens and iterates with the community.
              </p>
            </div>
          </section>

          
          {/* <section id="get-started" className="scroll-mt-28 py-10">
            <Header title="Get Started" />
            <p className="text-white/80 leading-relaxed mb-6">
              Ready to find your vibe? Build a profile around what you love and meet people who get it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <Button variant="primary" size="md" className="rounded-full">Download</Button>
              <AppStoreButtons />
            </div>
          </section> */}
        </div>
      </section>
    </main>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="flex mb-4">
      {/* <span className="inline-block h-3 w-3 rounded-full bg-[#ED1B24]" /> */}
      <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}
