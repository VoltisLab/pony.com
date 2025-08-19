import React from 'react';

export default function TermsOfUsePage() {
  const toc = [
    { id: 'acceptance', label: 'Acceptance of Terms' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'accounts', label: 'Accounts & Security' },
    { id: 'user-content', label: 'User Content & Licenses' },
    { id: 'conduct', label: 'Prohibited Conduct' },
    { id: 'safety', label: 'Safety & Reporting' },
    { id: 'purchases', label: 'Subscriptions & Purchases' },
    { id: 'termination', label: 'Termination' },
    { id: 'disclaimers', label: 'Disclaimers' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'law', label: 'Governing Law' },
    { id: 'changes', label: 'Changes to these Terms' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <main className="w-full bg-black">
      {/* Header */}
      <section className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-white/70 to-[#ED1B24] bg-clip-text text-transparent">
              Terms of Use
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
          {/* Acceptance */}
          <section id="acceptance" className="scroll-mt-28 py-10 first:pt-0">
            <Header title="Acceptance of Terms" />
            <p className="text-white/80 leading-relaxed">
              These Terms of Use (&quot;Terms&quot;) govern your access to and use of PONY, operated by Voltis Labs LTD. By creating an account, accessing, or using the app or website, you agree to be bound by these Terms and our Privacy Policy and Cookie Policy. If you do not agree, do not use PONY.
            </p>
          </section>

          {/* Eligibility */}
          <section id="eligibility" className="scroll-mt-28 py-10">
            <Header title="Eligibility" />
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>You must be at least 18 years old to use PONY.</li>
              <li>You affirm that you have the capacity to enter into a binding agreement and that you will comply with these Terms and all applicable laws.</li>
            </ul>
          </section>

          {/* Accounts */}
          <section id="accounts" className="scroll-mt-28 py-10">
            <Header title="Accounts & Security" />
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</li>
              <li>You agree to provide accurate, current, and complete information and to keep it updated.</li>
              <li>We may suspend or terminate your account if we suspect unauthorized or abusive activity.</li>
            </ul>
          </section>

          {/* User Content */}
          <section id="user-content" className="scroll-mt-28 py-10">
            <Header title="User Content & Licenses" />
            <p className="text-white/80 leading-relaxed mb-4">
              You may submit content such as photos, text, and other materials (&quot;User Content&quot;). You retain ownership of your User Content. By submitting User Content, you grant PONY a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to use, host, store, reproduce, adapt, publish, display, and distribute such content in connection with operating, promoting, and improving the service.
            </p>
            <p className="text-white/80 leading-relaxed">
              You represent and warrant that you have all rights necessary to submit the User Content and that it does not infringe or violate any third-party rights or laws.
            </p>
          </section>

          {/* Prohibited Conduct */}
          <section id="conduct" className="scroll-mt-28 py-10">
            <Header title="Prohibited Conduct" />
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Harassment, threats, hate speech, or content that is abusive or illegal.</li>
              <li>Impersonation or misrepresentation of your identity.</li>
              <li>Uploading viruses, malware, or engaging in malicious or fraudulent activity.</li>
              <li>Data scraping, reverse engineering, or accessing the service via unauthorized means.</li>
              <li>Commercial solicitation or advertising without prior written consent.</li>
            </ul>
          </section>

          {/* Safety */}
          <section id="safety" className="scroll-mt-28 py-10">
            <Header title="Safety & Reporting" />
            <p className="text-white/80 leading-relaxed">
              PONY is committed to user safety. We may moderate content and take action on reports that violate these Terms. If you believe someone is in immediate danger, contact local authorities. You can report concerns through the in-app tools or our Contact page.
            </p>
          </section>

          {/* Subscriptions */}
          <section id="purchases" className="scroll-mt-28 py-10">
            <Header title="Subscriptions & Purchases" />
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Some features may require payment or a subscription. Pricing, billing cycles, and renewal terms will be disclosed at purchase.</li>
              <li>Payments are processed by app stores or third-party providers. Their terms and refund policies may apply.</li>
              <li>Where required, you may have statutory rights which are not affected by these Terms.</li>
            </ul>
          </section>

          {/* Termination */}
          <section id="termination" className="scroll-mt-28 py-10">
            <Header title="Termination" />
            <p className="text-white/80 leading-relaxed">
              We may suspend or terminate your access at any time for breach of these Terms, harmful or unlawful behavior, or to protect the service or other users. You may stop using the service at any time. Certain provisions survive termination, including ownership, disclaimers, and limitations of liability.
            </p>
          </section>

          {/* Disclaimers */}
          <section id="disclaimers" className="scroll-mt-28 py-10">
            <Header title="Disclaimers" />
            <p className="text-white/80 leading-relaxed">
              The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis to the fullest extent permitted by law. We do not warrant that the service will be uninterrupted, secure, or error-free, or that any content will be accurate or reliable.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section id="liability" className="scroll-mt-28 py-10">
            <Header title="Limitation of Liability" />
            <p className="text-white/80 leading-relaxed">
              To the maximum extent permitted by law, PONY and Voltis Labs LTD. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          {/* Indemnification */}
          <section id="indemnification" className="scroll-mt-28 py-10">
            <Header title="Indemnification" />
            <p className="text-white/80 leading-relaxed">
              You agree to defend, indemnify, and hold harmless PONY, Voltis Labs LTD., and our affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the service, or your violation of these Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section id="law" className="scroll-mt-28 py-10">
            <Header title="Governing Law" />
            <p className="text-white/80 leading-relaxed">
              These Terms and any dispute or claim arising out of or in connection with them are governed by the laws of England and Wales, without regard to conflict of law principles. Where applicable, mandatory consumer protection laws of your country of residence may also apply.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" className="scroll-mt-28 py-10">
            <Header title="Changes to these Terms" />
            <p className="text-white/80 leading-relaxed">
              We may update these Terms from time to time. When we do, we will revise the &quot;Last updated&quot; date above and, where required, provide additional notice. Continued use of the service after changes become effective constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-28 py-10 last:pb-0">
            <Header title="Contact" />
            <p className="text-white/80 leading-relaxed">
              Questions about these Terms can be submitted via our{' '}
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
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block h-3 w-3 rounded-full bg-[#ED1B24]" />
      <h2 className="text-xl sm:text-2xl font-semibold text-white">{title}</h2>
    </div>
  );
}
