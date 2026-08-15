import Image from "next/image";
import { LinkMentionChip } from "@/components/link-mention";
import { RichText } from "@/components/rich-text";
import {
  aboutMe,
  blogMention,
  education,
  experience,
  githubMention,
  profile,
  projects,
  skills,
  activities,
} from "@/lib/resume-data";
import type { Rich } from "@/lib/segments";

function Divider() {
  return (
    <hr className="my-6 border-t border-[rgba(55,53,47,0.09)] dark:border-neutral-800 print:my-3" />
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-2 flex items-center gap-2 text-2xl font-bold text-[rgb(55,53,47)] dark:text-neutral-100 print:mb-2 print:mt-1 print:break-after-avoid print:text-lg">
      {children}
      <span className="size-2.5 shrink-0 rounded-full bg-[#d9730d] dark:bg-[#e8a55c] print:size-2" />
    </h2>
  );
}

function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-4 text-lg font-semibold text-[rgb(55,53,47)] dark:text-neutral-100 print:mb-1 print:mt-2 print:break-after-avoid print:text-sm">
      {children}
    </h3>
  );
}

function Bullets({
  items,
  ordered = false,
}: {
  items: Rich[];
  ordered?: boolean;
}) {
  return (
    <ul className="my-2 flex flex-col gap-1.5 print:my-1.5 print:block!">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-2.5 pl-1 text-sm leading-relaxed print:mb-1 print:break-inside-avoid print:text-xs">
          <span className="select-none text-[rgb(55,53,47)]/60 dark:text-neutral-500">
            {ordered ? `${i + 1}.` : "•"}
          </span>
          <span className="text-[rgb(55,53,47)] dark:text-neutral-300">
            <RichText segments={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-1.5 text-sm leading-relaxed text-[rgb(55,53,47)] dark:text-neutral-300 print:my-1 print:break-inside-avoid print:text-xs">
      {children}
    </p>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1 mt-7 font-medium text-[rgb(55,53,47)] dark:text-neutral-200 print:mb-1 print:mt-3 print:break-after-avoid print:text-sm">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-white px-4 py-12 dark:bg-neutral-950 sm:px-16 sm:py-20 print:p-[1cm]">
      <main className="w-full max-w-225 break-keep font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif]">
        {/* Page title */}
        <h1 className="mb-8 text-4xl font-bold text-[rgb(55,53,47)] dark:text-neutral-50 sm:text-5xl print:mb-3 print:text-2xl">
          {profile.pageTitle}
        </h1>

        {/* Contact | About Me */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[31fr_69fr] print:break-inside-avoid">
          <div className="flex flex-col gap-2 print:mb-3">
            <Image
              src="/images/profile.jpg"
              alt={profile.name}
              width={130}
              height={130}
              className="mb-2 size-32.5  object-cover object-[center_20%] print:size-24"
              priority
            />
            <SubHeader>Contact</SubHeader>
            <Paragraph>
              <strong className="font-semibold">📧 e-mail :</strong>{" "}
              {profile.email}
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">blog </strong>
              <LinkMentionChip mention={blogMention} />
            </Paragraph>
            <Paragraph>
              <strong className="font-semibold">github </strong>
              <LinkMentionChip mention={githubMention} />
            </Paragraph>
          </div>

          <div>
            <SectionHeader>About Me</SectionHeader>
            <div className="flex flex-col gap-5 print:block!">
              {aboutMe.map((item, i) => (
                <div key={i} className="print:mb-3 print:break-inside-avoid">
                  <SubHeader>
                    <RichText segments={item.subheading} />
                  </SubHeader>
                  {item.paragraph && (
                    <Paragraph>
                      <RichText segments={item.paragraph} />
                    </Paragraph>
                  )}
                  <Bullets items={item.bullets} ordered={item.orderedBullets} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* Projects */}
        <section>
          <SectionHeader>Projects</SectionHeader>
          <div className="flex flex-col print:block!">
            {projects.map((project, i) => (
              <div key={project.shortName}>
                {i > 0 && <Divider />}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[25fr_75fr] print:block!">
                  {/* Left: identity */}
                  <div className="flex flex-col gap-1.5 print:mb-1 print:break-inside-avoid">
                    <h3 className="text-lg font-semibold text-[rgb(55,53,47)] dark:text-neutral-100 print:text-sm">
                      {project.shortName}
                    </h3>
                    <div
                      className={
                        project.logo.dark
                          ? "my-1 inline-flex w-fit items-center rounded-lg bg-neutral-900 px-4 py-3 print:my-0 print:px-2 print:py-1"
                          : "my-1 print:my-0"
                      }>
                      <Image
                        src={project.logo.src}
                        alt={`${project.shortName} 로고`}
                        width={project.logo.width}
                        height={project.logo.height}
                        className="h-auto max-w-35 print:max-w-20"
                      />
                    </div>
                    <p className="print:text-xs">
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline decoration-neutral-400 underline-offset-2 hover:bg-[rgba(35,131,226,0.1)]">
                        사이트
                      </a>
                      <strong className="font-semibold"> | </strong>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline decoration-neutral-400 underline-offset-2 hover:bg-[rgba(35,131,226,0.1)]">
                        깃허브 바로가기
                      </a>
                    </p>
                    <p className="mt-1 text-[rgb(55,53,47)] dark:text-neutral-300 print:text-xs">
                      <RichText segments={project.type} />
                    </p>
                  </div>

                  {/* Right: detail */}
                  <div>
                    <SubHeader>{project.title}</SubHeader>
                    <p className="text-[rgb(55,53,47)] dark:text-neutral-300 print:text-xs">
                      {project.period}
                    </p>
                    <p className="mt-1 flex flex-wrap gap-x-1 print:mt-1">
                      {project.stack.map((s, si) => (
                        <span key={s}>
                          <code className="rounded-[3px] bg-[rgba(135,131,120,0.15)] px-[0.3em] py-[0.1em] font-mono text-[0.85em] text-[#eb5757] dark:bg-neutral-800 dark:text-[#ff8a8a]">
                            {s}
                          </code>
                          {si < project.stack.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <div className="print:mt-1.5 print:w-1/2 print:break-inside-avoid">
                      <Image
                        src={project.screenshot.src}
                        alt={`${project.shortName} 스크린샷`}
                        width={project.screenshot.width}
                        height={project.screenshot.height}
                        className="mt-3 w-full rounded-lg border border-[rgba(55,53,47,0.09)] dark:border-neutral-800 print:mt-0"
                      />
                    </div>

                    {project.projectGoals && (
                      <>
                        <Label>
                          {project.projectGoalsLabel ? (
                            <RichText segments={project.projectGoalsLabel} />
                          ) : (
                            "프로젝트 목표"
                          )}
                        </Label>
                        <Paragraph>
                          <RichText segments={project.projectGoals} />
                        </Paragraph>
                      </>
                    )}
                    <Label>
                      <RichText segments={project.achievementsLabel ?? []} />
                    </Label>
                    <Bullets items={project.achievements} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section>
          <SectionHeader>Experience</SectionHeader>
          <div className="flex flex-col gap-6 print:block!">
            {experience.map((exp, i) => (
              <div key={i} className="print:mb-2 print:break-inside-avoid">
                {exp.headingLevel === "h3" ? (
                  <h3 className="text-lg font-semibold text-[rgb(55,53,47)] dark:text-neutral-100 print:break-after-avoid print:text-sm">
                    <RichText segments={exp.heading} />
                  </h3>
                ) : (
                  <p className="text-[rgb(55,53,47)] dark:text-neutral-300 print:break-after-avoid print:text-xs">
                    <RichText segments={exp.heading} />
                  </p>
                )}
                {exp.period && (
                  <p className="mt-0.5 text-[rgb(55,53,47)] dark:text-neutral-300 print:text-xs">
                    {exp.period}
                  </p>
                )}
                <Bullets items={exp.bullets} />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        <section>
          <SectionHeader>Activities</SectionHeader>
          <div className="flex flex-col gap-6 print:block!">
            {activities.map((activity, i) => (
              <div key={i} className="print:mb-2 print:break-inside-avoid">
                {activity.headingLevel === "h3" ? (
                  <h3 className="text-lg font-semibold text-[rgb(55,53,47)] dark:text-neutral-100 print:break-after-avoid print:text-sm">
                    <RichText segments={activity.heading} />
                  </h3>
                ) : (
                  <p className="text-[rgb(55,53,47)] dark:text-neutral-300 print:break-after-avoid print:text-xs">
                    <RichText segments={activity.heading} />
                  </p>
                )}
                {activity.period && (
                  <p className="mt-0.5 text-[rgb(55,53,47)] dark:text-neutral-300 print:text-xs">
                    {activity.period}
                  </p>
                )}
                <Bullets items={activity.bullets} />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Skills */}
        <section className="print:break-inside-avoid">
          <SectionHeader>Skills</SectionHeader>
          <Bullets items={skills} />
        </section>

        <Divider />

        {/* Education */}
        <section className="print:break-inside-avoid">
          <SectionHeader>Education</SectionHeader>
          <Paragraph>{education}</Paragraph>
        </section>

        <Divider />

        <footer className="py-6 text-sm text-neutral-400 print:break-inside-avoid print:py-1 print:text-[10px]">
          <p>
            {profile.name} · {profile.email}
          </p>
        </footer>
      </main>
    </div>
  );
}
