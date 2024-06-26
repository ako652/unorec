import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { Testimonial } from "@/components/Testimonial";
import logoBrightPath from "@/images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "@/images/clients/family-fund/logo-light.svg";
import logoGreenLife from "@/images/team/justice.jpeg";
import logoHomeWork from "@/images/clients/home-work/logo-light.svg";
import logoMailSmirk from "@/images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "@/images/clients/north-adventures/logo-light.svg";
import logoPhobiaDark from "@/images/team/training.jpeg";
import logoPhobiaLight from "@/images/clients/phobia/logo-light.svg";
import logoUnseal from "@/images/clients/unseal/logo-light.svg";
import imageLaptop from "@/images/laptop.jpg";
import { loadCaseStudies } from "@/lib/mdx";

const clients = [
  ["R.A.N ", logoPhobiaLight],
  ["Institute ", logoFamilyFund],
  ["Unseal", logoUnseal],
];

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="UNOREC Activity Report"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          UNOREC is dedicated to fostering professional growth and advocating
          for human rights through strategic partnerships with leading
          vocational training centers and human rights organizations. Our
          mission is to empower individuals and communities by providing access
          to high-quality education and resources. Below, we highlight some of
          our significant past projects that demonstrate our commitment and
          impact
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split("-")[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split("-")[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Activity Report</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
                <button className="bg-black bottom-1 text-white rounded-md w-40">
                  learn more
                </button>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our focus is equipping the community with the right tools and
          knowledge to effect meaningful change.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Community Development">
              As an integral approach to adult education encompassing the
              spheres of family,health,agriculture,crafts,trades and culture
            </ListItem>
            <ListItem title="Agriculture">
              Agriculture being the main stream of income ,our activities in
              this domain are concerntrated on both sustainable agriculture and
              environmental protection
            </ListItem>
            <ListItem title="computer education and research">
              We are aiming to reduce poverty by providing proper technology skills to thrive in todays digital age
            </ListItem>
            <ListItem title="Human rights and protection">
              We are providing the community with free legal advice and defending victims in critical condition. Improving the life of internally displaced persons with outreach and charity
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
}

export const metadata = {
  description:
    "We are a development studio working at the intersection of design and technology.",
};

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3);

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            NonProfit Charitable and Humanitarian Non Governmental Organisation.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            UNOREC is a registered Non profitable Organisation. we have long
            history of providing distance and oncampus vocational training
            education and development,with activities of reducing poverty and
            improving the standard of living of our community.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: "Institute of Life Changing Vocational Training",
          logo: logoPhobiaDark,
        }}
        client1={{
          name: "Institute of Life Changing Vocational Training",
          logo: logoGreenLife,
        }}
      >
        At UNOREC, we collaborate with top-tier training centers specializing in
        vocational education and prominent human rights centers. Our
        partnerships are founded on shared visions and a commitment to
        professionalism. Together, we leverage the expertise of great minds to
        drive forward our common goals.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  );
}
