import React from 'react';

export default function PrivacyPolicyPage() {
  const toc = [
    { id: 'intro', label: 'Introduction' },
    { id: 'data-we-collect', label: 'Data We Collect' },
    { id: 'how-we-use', label: 'How We Use Data' },
    { id: 'legal-basis', label: 'Legal Basis' },
    { id: 'sharing', label: 'Sharing & Disclosure' },
    { id: 'international', label: 'International Transfers' },
    { id: 'retention', label: 'Data Retention' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'children', label: "Children's Privacy" },
    { id: 'changes', label: 'Changes to this Policy' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">
              Privacy Policy
            </span>
          </h1>
          <p className="text-white/60 mt-3 text-sm sm:text-base">Last updated: 12 August 2025</p>
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
          {/* Introduction */}
          <section id="intro" className="scroll-mt-28 py-10 first:pt-0">
            <Header title="Introduction" />
            <p className="text-white/80 leading-relaxed">
              This Privacy Policy explains how PONY (operated by Voltis Labs LTD.) collects, uses, and safeguards your information when you use our application and services. We are committed to protecting your privacy and handling your data transparently and responsibly.
            </p>
          </section>

          {/* Data We Collect */}
          <section id="data-we-collect" className="scroll-mt-28 py-10">
            <Header title="Data We Collect" />
            <p className="text-white/80 leading-relaxed mb-4">Depending on how you use PONY, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>
                <span className="text-white">Account data:</span> name, email, date of birth, gender, preferences, and authentication identifiers.
              </li>
              <li>
                <span className="text-white">Profile data:</span> photos, interests, bio, location city/region (not precise GPS unless you opt-in), and preferences.
              </li>
              <li>
                <span className="text-white">Usage data:</span> app interactions, device information, log data, diagnostics, and performance analytics.
              </li>
              <li>
                <span className="text-white">Communications:</span> messages, support requests, and feedback you provide.
              </li>
              <li>
                <span className="text-white">Cookies & similar technologies:</span> see our{' '}
                <a href="/cookie-policy" className="text-[#ED1B24] hover:opacity-80 underline-offset-4 hover:underline">Cookie Policy</a> for details.
              </li>
            </ul>
          </section>

          {/* How We Use Data */}
          <section id="how-we-use" className="scroll-mt-28 py-10">
            <Header title="How We Use Data" />
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Provide and personalize the app experience, including interest-based matching.</li>
              <li>Maintain safety and integrity, including moderation and fraud prevention.</li>
              <li>Improve performance and features through analytics and research.</li>
              <li>Communicate updates, security alerts, and service-related messages.</li>
              <li>Comply with legal obligations and enforce our Terms of Use.</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section id="legal-basis" className="scroll-mt-28 py-10">
            <Header title="Legal Basis" />
            <p className="text-white/80 leading-relaxed">
              Where applicable (e.g., under UK/EU GDPR), we process your personal data based on one or more of the following: your consent, contract performance, legitimate interests (such as app safety and improvement), and legal obligations. You may withdraw consent at any time where processing is based on consent.
            </p>
          </section>

          {/* Sharing & Disclosure */}
          <section id="sharing" className="scroll-mt-28 py-10">
            <Header title="Sharing & Disclosure" />
            <p className="text-white/80 leading-relaxed mb-4">We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>
                <span className="text-white">Service providers</span> who support app functionality (hosting, analytics, moderation) under appropriate safeguards.
              </li>
              <li>
                <span className="text-white">Legal authorities</span> when required by law or to protect users and our services.
              </li>
              <li>
                <span className="text-white">Business transfers</span> in the event of a merger, acquisition, or asset sale, in which case users will be informed where required.
              </li>
            </ul>
          </section>

          {/* International Data Transfers */}
          <section id="international" className="scroll-mt-28 py-10">
            <Header title="International Data Transfers" />
            <p className="text-white/80 leading-relaxed">
              Your information may be processed in countries outside your place of residence. Where required, we implement appropriate safeguards (such as standard contractual clauses) to protect your data.
            </p>
          </section>

          {/* Data Retention */}
          <section id="retention" className="scroll-mt-28 py-10">
            <Header title="Data Retention" />
            <p className="text-white/80 leading-relaxed">
              We retain personal data only for as long as necessary to provide the service, comply with our legal obligations, resolve disputes, and enforce agreements. You may request deletion of your account data subject to certain exemptions.
            </p>
          </section>

          {/* Your Rights */}
          <section id="rights" className="scroll-mt-28 py-10">
            <Header title="Your Rights" />
            <p className="text-white/80 leading-relaxed mb-4">
              Depending on your jurisdiction, you may have rights to access, rectify, delete, restrict, or object to processing, and to data portability. You may also lodge a complaint with your data protection authority.
            </p>
            <p className="text-white/80 leading-relaxed">
              To exercise rights, please use the Contact section below. We may ask for verification information to protect your account.
            </p>
          </section>

          {/* Children's Privacy */}
          <section id="children" className="scroll-mt-28 py-10">
            <Header title="Children's Privacy" />
            <p className="text-white/80 leading-relaxed">
              PONY is intended for users aged 18 and over. We do not knowingly collect personal information from minors. If you believe a minor has provided us data, please contact us to request deletion.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" className="scroll-mt-28 py-10">
            <Header title="Changes to this Policy" />
            <p className="text-white/80 leading-relaxed">
              We may update this Privacy Policy to reflect changes to our practices or for legal, technical, or regulatory reasons. We will post the updated policy with a new “Last updated” date, and may provide additional notice where required.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-28 py-10 last:pb-0">
            <Header title="Contact" />
            <p className="text-white/80 leading-relaxed">
              Questions or requests about this Privacy Policy can be submitted via our{' '}
              <a href="/contact" className="text-[#ED1B24] hover:opacity-80 underline-offset-4 hover:underline">Contact Us</a> page.
            </p>
          </section>
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
