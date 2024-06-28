import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageEmmaDorsey from '@/images/team/agriculture-specialist.jpeg'
import imageJeffreyWebb from '@/images/team/Director-affairs.jpeg'
import imageKathrynMurphy from '@/images/team/people-culture-specialist.jpeg'
import imageLeonardKrasner from '@/images/team/project-manager.jpeg'
import imageWhitneyFrancis from '@/images/team/communication-officer.jpeg'
import lawyer from '@/images/team/lawyer.jpeg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team put trust and transparency at core of every Activity.
          </GridListItem>
          <GridListItem title="passion" invert>
            We beleive in ourselve and how much we can change world .
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what people are going through  unless you reach out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Angela Emefile',
        role: 'Director of Social Affairs',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Rita Njitone Sume',
        role: 'Project Manager',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Alice Betek Tabe',
        role: 'People and culture manager',
        image: { src: imageKathrynMurphy },
      },
      
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Njitone Laura Nkongeh',
        role: 'Communication Specialist',
        image: { src: imageWhitneyFrancis },
      },
     
      {
        name: 'Hellen Tabe',
        role: 'Agriculture Specialist',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Ngobia Remind Amougou',
        role: 'Protection Lawyer',
        image: { src: lawyer },
      },
      
    
     
      
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          UNOREC is a registered Non profit, Charitable and Humanitarian Non-Governmental Organisation for non-formal, extensive, distance and vocational education and development, with concerntration on activities to promote community development, Agriculture, education/research and charity/welfare in southwest province in particular and the nation cameroon as  whole
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            It is a service organisation for grassroots education and development and daily concerntration is on services to serve a group of less represented,unprivileged,miserable,poor individuals, families and communitiesin the country.We are dedicated to serve these target groups in both rural and urban communities and renders services mainly on nonprofit.
          </p>
          <p>
            In addition, UNOREC is serving as a support organisation in the development, charitable and Humanitarian assistance processes of our local and less represented group
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Projects" />
          <StatListItem value="10" label="Executed" />
          <StatListItem value="62%" label="Success rate" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="We can help"
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
