import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>Our team is deeply involved with the community to identify and address cases that genuinely require our services. We collaborate closely with local residents, organizations, and authorities to understand the specific needs and challenges faced by individuals and families. In addition to community engagement, we conduct our own rigorous investigations. We monitor various sources such as media reports, social media platforms, hospitals, and prisons to identify vulnerable individuals and situations requiring urgent humanitarian intervention. This proactive approach enables us to swiftly respond to crises and provide timely support where it is most needed, ensuring that our humanitarian efforts are effective and impactful. </p>
        <p>At the core of our mission is a commitment to reaching out to those who are most in need of assistance. By combining community insights with our investigative efforts, we ensure that no vulnerable individual or group is overlooked. Our goal is to uphold the principles of compassion and justice, advocating for and delivering humanitarian services that make a meaningful difference in the lives of those facing hardship and adversity. Through these collaborative and proactive measures, we strive to foster a supportive environment where every person receives the care and support they deserve.</p>

      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>investigaions</TagListItem>
        <TagListItem>Public organisations</TagListItem>
        <TagListItem>Media </TagListItem>
        
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on our initial assessment phase, we create a detailed plan tailored to address your specific needs and challenges. Our team collaborates closely with you and our partners to establish clear objectives and break them down into manageable tasks. This approach ensures that we can efficiently achieve success based on the unique circumstances of each case we encounter.

        </p>
        <p>
          By setting clear goals and working collaboratively with our partners, we maximize the effectiveness of our efforts. This structured approach allows us to adapt quickly and deliver meaningful results that meet your needs. Our commitment to practical, achievable steps ensures that we make tangible progress in resolving your challenges and achieving our shared objectives.

        </p>
        
      </div>

     
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
                We extend our outreach globally to individuals and organizations who share our common vision. Whether you bring us your challenges or need specific equipment for your reintegration, we are here to help. Each project we undertake is meticulously documented and shared across social media platforms to reach a broader audience in need of assistance.

          
        </p>
        <p>

By connecting with like-minded people around the world, we aim to amplify our impact and support those facing difficulties. Whether its through providing necessary resources or sharing success stories, our goal is to inspire and empower others to join us in making a positive difference. Through transparent communication and widespread dissemination of our projects, we strive to foster a community of support and collaboration, ensuring that help reaches as many individuals as possible who are in need of assistance.
        </p>
       
      </div>

    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We are committed to helping those truly in need of assistance, ensuring we reach out to the right people.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We are committed to helping those truly in need of assistance, ensuring we reach out to the right people.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
