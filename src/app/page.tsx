import Image from "next/image";
import { LinkMentionChip } from "@/components/link-mention";
import { RichText } from "@/components/rich-text";
import {
  aboutMe,
  blogMention,
  certificates,
  education,
  experience,
  githubMention,
  profile,
  projects,
  skills,
} from "@/lib/resume-data";
import type { Rich } from "@/lib/segments";

function Divider() {
  return (
    <hr className="my-6 border-t border-[rgba(55,53,47,0.09)] dark:border-neutral-800" />
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-2 flex items-center gap-2 text-2xl font-bold text-[rgb(55,53,47)] dark:text-neutral-100">
      {children}
      <span className="size-2.5 shrink-0 rounded-full bg-[#d9730d] dark:bg-[#e8a55c]" />
    </h2>
  );
}

function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-4 text-lg font-semibold text-[rgb(55,53,47)] dark:text-neutral-100">
      {children}
    </h3>
  );
}

function Bullets({ items }: { items: Rich[] }) {
  return (
    <ul className="my-2 flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 pl-1 leading-relaxed">
          <span className="select-none text-[rgb(55,53,47)]/60 dark:text-neutral-500">
            •
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
    <p className="my-1.5 leading-relaxed text-[rgb(55,53,47)] dark:text-neutral-300">
      {children}
    </p>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1 mt-7 font-medium text-[rgb(55,53,47)] dark:text-neutral-200">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-white px-4 py-12 dark:bg-neutral-950 sm:px-16 sm:py-20">
      <main className="w-full max-w-225 break-keep font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif]">
        {/* Page title */}
        <h1 className="mb-8 text-4xl font-bold text-[rgb(55,53,47)] dark:text-neutral-50 sm:text-5xl">
          {profile.pageTitle}
        </h1>

        {/* Contact | About Me */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[31%_69%]">
          <div className="flex flex-col gap-2">
            <Image
              src="/images/profile.jpg"
              alt={profile.name}
              width={130}
              height={130}
              className="mb-2 size-32.5 rounded-full object-cover"
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
              <LinkMentionChip mention={githubMention} />
            </Paragraph>
          </div>

          <div>
            <SectionHeader>About Me</SectionHeader>
            <div className="flex flex-col gap-5">
              {aboutMe.map((item, i) => (
                <div key={i}>
                  <SubHeader>
                    <RichText segments={item.subheading} />
                  </SubHeader>
                  {item.paragraph && (
                    <Paragraph>
                      <RichText segments={item.paragraph} />
                    </Paragraph>
                  )}
                  <Bullets items={item.bullets} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* Experience */}
        <section>
          <SectionHeader>Experience</SectionHeader>
          <div className="flex flex-col gap-6">
            {experience.map((exp, i) => (
              <div key={i}>
                {exp.headingLevel === "h3" ? (
                  <h3 className="text-lg font-semibold text-[rgb(55,53,47)] dark:text-neutral-100">
                    <RichText segments={exp.heading} />
                  </h3>
                ) : (
                  <p className="text-[rgb(55,53,47)] dark:text-neutral-300">
                    <RichText segments={exp.heading} />
                  </p>
                )}
                {exp.period && (
                  <p className="mt-0.5 text-[rgb(55,53,47)] dark:text-neutral-300">
                    {exp.period}
                  </p>
                )}
                <Bullets items={exp.bullets} />
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Projects */}
        <section>
          <SectionHeader>Projects</SectionHeader>
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <div key={project.shortName}>
                {i > 0 && <Divider />}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[25%_75%]">
                  {/* Left: identity */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold text-[rgb(55,53,47)] dark:text-neutral-100">
                      {project.shortName}
                    </h3>
                    <div
                      className={
                        project.logo.dark
                          ? "my-1 inline-flex w-fit items-center rounded-lg bg-neutral-900 px-4 py-3"
                          : "my-1"
                      }>
                      <Image
                        src={project.logo.src}
                        alt={`${project.shortName} 로고`}
                        width={project.logo.width}
                        height={project.logo.height}
                        className="h-auto max-w-35"
                      />
                    </div>
                    <p>
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
                    <p className="mt-1 text-[rgb(55,53,47)] dark:text-neutral-300">
                      <RichText segments={project.type} />
                    </p>
                    <p className="text-[rgb(55,53,47)] dark:text-neutral-300">
                      {project.period}
                    </p>
                  </div>

                  {/* Right: detail */}
                  <div>
                    <SubHeader>{project.title}</SubHeader>
                    <p className="text-[rgb(55,53,47)] dark:text-neutral-300">
                      {project.period}
                    </p>
                    <p className="mt-1 flex flex-wrap gap-x-1">
                      {project.stack.map((s, si) => (
                        <span key={s}>
                          <code className="rounded-[3px] bg-[rgba(135,131,120,0.15)] px-[0.3em] py-[0.1em] font-mono text-[0.85em] text-[#eb5757] dark:bg-neutral-800 dark:text-[#ff8a8a]">
                            {s}
                          </code>
                          {si < project.stack.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <Label>프로젝트 소개</Label>
                    <Paragraph>{project.description}</Paragraph>
                    <Label>{project.achievementsLabel ?? "성과"}</Label>
                    {project.achievementsIntro && (
                      <Paragraph>
                        <RichText segments={project.achievementsIntro} />
                      </Paragraph>
                    )}
                    <Bullets items={project.achievements} />
                    <Label>
                      <RichText segments={project.aiWorkflowLabel} />
                    </Label>
                    <Bullets items={project.aiWorkflow} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Skills */}
        <section>
          <SectionHeader>Skills</SectionHeader>
          <Bullets items={skills} />
        </section>

        <Divider />

        {/* Education */}
        <section>
          <SectionHeader>Education</SectionHeader>
          <Paragraph>{education}</Paragraph>
        </section>

        <Divider />

        {/* Certificate */}
        <section>
          <SectionHeader>Certificate</SectionHeader>
          <Bullets items={certificates.map((c) => [{ text: c }])} />
        </section>

        <Divider />

        <footer className="py-6 text-sm text-neutral-400">
          <p>
            {profile.name} · {profile.email}
          </p>
        </footer>
      </main>
    </div>
  );
}
