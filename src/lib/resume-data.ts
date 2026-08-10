import { b, code, hl, link, t, type LinkMention, type Rich } from "./segments";

export const profile = {
  name: "조현돈",
  pageTitle: "기록하며 성장하는 개발자, 조현돈입니다.",
  email: "hyundon12@gmail.com",
};

export const blogMention: LinkMention = {
  label: "blog",
  href: "https://gse06044.tistory.com/",
  title: "도니 House",
  iconUrl:
    "https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico",
};

export const githubMention: LinkMention = {
  label: "github",
  href: "https://github.com/chohyundon",
  title: "chohyundon - Overview",
  iconUrl: "https://github.com/fluidicon.png",
};

export const aboutMe: {
  subheading: Rich;
  paragraph?: Rich;
  bullets: Rich[];
}[] = [
  {
    subheading: [
      b("배운 내용과 시행착오를 "),
      hl("기록하고 공유"),
      b("합니다."),
    ],
    bullets: [
      [
        t(
          "IT 동아리에서 브랜치 전략과 커밋 컨벤션을 어려워하는 신입 부원들을 보고, 같은 문제를 겪었던 경험이 있어 직접 세션을 준비했습니다. 내용을 정리하며 설명하기 위해서는 먼저 정확히 이해해야 한다는 것을 알게 되었고,",
        ),
        hl("새로 배우는 내용은 기록하는 습관"),
        t("을 들이며 현재까지 블로그 글 120+, 유튜브 쇼츠 8편을 제작했습니다."),
      ],
    ],
  },

  {
    subheading: [
      t("AI 작업 결과를 "),
      hl("단계별로 검토한 뒤 반영"),
      t("합니다."),
    ],
    bullets: [
      [
        t(
          "AI가 제시한 구현 계획과 변경 범위를 직접 검토, 승인한 뒤 개발을 진행해, 의도하지 않은 범위까지 수정되는 것을 방지합니다.",
        ),
      ],
      [
        t(
          "PR에 작업 목적, 영향 범위, 변경 전후 UI를 함께 기록해, 팀원이 AI가 수행한 UI 변경을 코드만 보지 않고도 빠르게 파악할 수 있게 합니다.",
        ),
      ],
      [
        t(
          "Supabase MCP로 테이블 구조와 데이터 관계를 직접 조회해 반복 탐색을 줄이고, 생성된 쿼리는 반영 전 직접 검증합니다.",
        ),
      ],
      [
        t(
          "Figma MCP로 색상, 간격, 타이포그래피 값을 직접 조회해 코드에 반영하고, 디자이너에게 재확인받는 과정을 줄여 작업 속도를 높였습니다.",
        ),
      ],
    ],
  },
];

export const experience: {
  heading: Rich;
  headingLevel: "h3" | "plain";
  period?: string;
  bullets: Rich[];
}[] = [
  {
    heading: [t("멋쟁이사자처럼 인턴십 17기")],
    headingLevel: "h3",
    period: "2026.02 – 2026.03",
    bullets: [
      [
        b("BlogAI를 "),
        b("기획부터 디자인, 프론트엔드, 벡엔드 개발까지 단독으로 진행"),
        t("하며 서비스 전반을 책임졌습니다."),
      ],
      [
        t("중간 QA에서 발견된 "),
        b("사용 흐름과 UI 문제를 우선순위에 따라 개선"),
        t(
          "하며, 기능 구현 이후에도 사용성을 검증하고 보완하는 과정을 경험했습니다.",
        ),
      ],
    ],
  },
  {
    heading: [t("스위프 웹 11")],
    headingLevel: "h3",
    period: "2026.01 – 2026.03",
    bullets: [
      [
        t("PM, 디자이너, 백엔드 개발자와 문서 번역 웹서비스를 개발하며, "),
        b("요구사항과 구현 범위, 화면 상태와 API 응답 형식을 직군 간 조율"),
        t("했습니다."),
      ],
      [
        t(
          "로그인 연동 중 발생한 CORS 오류를 백엔드 개발자와 함께 네트워크 요청과 서버 설정까지 점검하며, ",
        ),
        b("문제 상황과 확인 결과를 공유해 원인을 해결"),
        t("했습니다."),
      ],
    ],
  },
  {
    heading: [b("GDGoC | Core Member, Frontend Lead")],
    headingLevel: "h3",
    period: "2025.08 – 2026.07",
    bullets: [
      [
        t(
          "코어 멤버와 프론트엔드 리드로 활동하며 매주 운영 회의에서 동아리 운영 방향을 논의하고, ",
        ),
        b(
          "부원들의 개발 진행 상황과 어려움을 확인해 필요한 내용을 설명하거나 자료를 공유",
        ),
        t("했습니다."),
      ],
      [
        t(
          "직접 협업하며 겪은 시행착오를 바탕으로 Git Flow와 GitHub Flow를 비교하고, ",
        ),
        b("소규모 프로젝트에서 활용할 브랜치 PR 방식을 정리해 세션을 진행"),
        t("했습니다."),
      ],
    ],
  },
  {
    heading: [t("멋쟁이 사자처럼 8기 프론트엔드 스쿨")],
    headingLevel: "h3",
    period: "2024.08 – 2025.03",
    bullets: [
      [
        t(
          "HTML, CSS, JavaScript부터 React, TypeScript까지 학습하며 프론트엔드 개발의 기초를 익혔습니다.",
        ),
      ],
      [
        t("팀 프로젝트를 통해 "),
        b(
          "Git 기반 협업과 컴포넌트 설계, API 연동, 배포까지 웹서비스 개발의 전체 흐름",
        ),
        t("을 경험했습니다."),
      ],
    ],
  },
  {
    heading: [b("블레이버스 해커톤")],
    headingLevel: "h3",
    bullets: [
      [
        t("디자이너, 백엔드 개발자와 협업해 "),
        b("3D 공학 데이터를 웹에서 확인할 수 있는 서비스"),
        t("를 일주일 안에 개발하여, 예선을 통과해 본선에 진출했습니다."),
      ],
      [
        t(
          "제한된 일정에 맞춰 핵심 기능의 우선순위를 정하고 3D 화면과 주요 사용자 흐름을 먼저 완성하며, 짧은 개발 기간에는 구현 범위를 명확히 조율하는 것이 중요하다는 점을 배웠습니다.",
        ),
      ],
    ],
  },
  {
    heading: [b("Build with AI Seoul 2026, GDGoC 해커톤 "), b("행사 스태프")],
    headingLevel: "h3",
    bullets: [
      [
        t(
          "참가자 안내와 세션 운영을 지원하며, 대규모 AI 개발자 행사의 현장 운영과 커뮤니케이션을 경험했습니다.",
        ),
      ],
    ],
  },
];

export type Project = {
  shortName: string;
  logo: { src: string; width: number; height: number; dark?: boolean };
  screenshot: { src: string; width: number; height: number };
  site: string;
  github: string;
  type: Rich;
  period: string;
  title: string;
  stack: string[];
  description: string;
  achievementsLabel?: string;
  achievementsIntro?: Rich;
  projectGoals?: Rich;
  projectGoalsLabel?: Rich;
  achievements: Rich[];
  aiWorkflowLabel: Rich;
  aiWorkflow: Rich[];
};

export const projects: Project[] = [
  {
    shortName: "BlogAi",
    logo: {
      src: "/images/blogai-logo.svg",
      width: 520,
      height: 160,
      dark: true,
    },
    screenshot: {
      src: "/images/blogai-screenshot.png",
      width: 3186,
      height: 2010,
    },
    site: "https://www.blogai.store/",
    github: "https://github.com/chohyundon/BlogAi",
    type: [t("개인프로젝트")],
    period: "2026.01 ~ 2026.06",
    title: "BlogAi - AI 기술 블로그 작성 플랫폼",
    stack: ["Next.js 16", "TypeScript", "Supabase", "FSD"],
    description:
      "블로그 글 120편을 쓰며 TIL, 트러블슈팅, 딥다이브 형식에 맞춰 매번 글 구조를 새로 고민하는 데 시간이 드는 걸 느껴, 주제와 키워드를 입력하면 이 3가지 형식의 기술 블로그 포스트를 AI가 자동 생성하는 Next.js 풀스택 서비스를 만들었습니다. 기획, 설계, 개발, 배포까지 단독으로 진행했습니다.",
    achievementsLabel: "주요 개선",
    projectGoalsLabel: [b("개발 중점")],
    projectGoals: [
      t("AI 결과를 생성하는 기능 자체보다, 생성 과정에서 "),
      hl("사용자가 상태를 잃거나 응답을 기다리며 느끼는 불편을 줄이는 데"),
      t(" 중점을 두었습니다. 이를 위해 "),
      hl("생성 상태 동기화, Optimistic UI, 리소스 최적화"),
      t(
        "를 진행했으며, 기능이 늘어나도 구조가 무너지지 않도록 아키텍처와 테스트 자동화까지 함께 개선했습니다.",
      ),
    ],
    achievements: [
      [
        t(
          "useSyncExternalStore로 sessionStorage 기반 생성 상태를 동기화하여 SSR/CSR 하이드레이션 불일치 해결, 페이지 이탈 후에도 생성 상태를 유지해 ",
        ),
        hl("요청당 약 2,000 토큰 낭비를 방지"),
        t("했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/Next.js-%ED%95%98%EC%9D%B4%EB%93%9C%EB%A0%88%EC%9D%B4%EC%85%98-%EC%97%90%EB%9F%AC-%EC%9A%B0%EC%95%84%ED%95%98%EA%B2%8C-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0",
        ),
        t(")"),
      ],
      [
        t("React 19 useOptimistic으로 "),
        hl("글 삭제 UI 반영 지연을 2.4초에서 0.3초로 단축"),
        t("했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/%EB%82%99%EA%B4%80%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%EC%97%90-%EB%8C%80%ED%95%B4",
        ),
        t(")"),
      ],
      [
        t("폰트 서브셋 분리와 "),
        hl(
          "favicon 경량화로 폰트 용량 4,090KB → 1,048KB, favicon 로딩 27초 → 168ms로 개선",
        ),
        t("했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/Next.js-font%EC%99%80-icon-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%8B%9C%EC%BC%9C%EB%B3%B4%EA%B8%B0",
        ),
        t(")"),
      ],
    ],
    aiWorkflowLabel: [t("AI 워크플로우 설계("), code("Claude Code"), t(")")],
    aiWorkflow: [
      [
        t(
          "FSD 아키텍처 검증, 수정 제안하는 Claude Code 스킬(fsd-check)을 설계해 cross-import 위반 6건→0건, Public API 커버리지 9.5%→100%를 달성했습니다.",
        ),
      ],
      [
        t(
          "GitHub Actions CI에 Playwright E2E와 아키텍처 검증 스크립트를 연동해 PR마다 빌드/E2E/FSD 규칙 자동 검증 체계를 구축했습니다.",
        ),
      ],
    ],
  },
  {
    shortName: "사부작사부작",
    logo: {
      src: "/images/sabujak-logo.svg",
      width: 112,
      height: 40,
      dark: true,
    },
    screenshot: {
      src: "/images/sabujak-screenshot.png",
      width: 3182,
      height: 2010,
    },
    site: "https://waffle-hyungdonless-front-end.vercel.app/",
    github: "https://github.com/chohyundon/waffle-hyungdonless-frontEnd",
    type: [t("팀프로젝트 (백엔드1, 디자이너2) 프론트엔드 담당")],
    period: "2025.01 ~ 2025.04",
    title: "사부작사부작 - 사회초년생 커뮤니티 플랫폼",
    stack: ["Next.js 16", "TypeScript", "Supabase"],
    description:
      "사회초년생을 위한 커뮤니티 '사부작사부작'입니다. 게시글,댓글,좋아요, 청년정책 검색 필터, 개인 캘린더, 알림 등 사용자 화면을 구현했으며, 디자이너 백엔드와 협업해 프론트엔드를 담당했습니다.",
    achievementsLabel: "주요 개선",
    achievementsIntro: [
      hl(
        "외부 API와 대량 데이터에 의존하는 화면일수록 응답 지연이 누적되기 쉽다",
      ),
      t(
        "고 판단해, 데이터를 가져오는 방식과 사용자 액션에 대한 반응 속도를 함께 점검했습니다.",
      ),
    ],
    projectGoalsLabel: [b("개발 중점")],
    projectGoals: [
      t("외부 API와 대량 데이터를 사용하는 기능이 많은 만큼, "),
      hl(
        "사용자가 정보를 불러오거나 액션을 수행할 때 느끼는 대기 시간을 줄이는 데",
      ),
      t(" 중점을 두었습니다. 이를 위해 "),
      hl("캐싱, 서버 페이지네이션, Optimistic UI"),
      t("를 적용해 반복 요청과 대량 데이터 호출 구조를 개선했습니다."),
    ],
    achievements: [
      [
        t(
          "홈 화면 금융교육, 직업정보 위젯에 Next.js fetch 캐싱(revalidate: 3600)을 적용해, ",
        ),
        hl("캐시 히트 시 외부 API 왕복(약 2,400ms)을 생략"),
        t("했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/Next.js-fetch-%EC%BA%90%EC%8B%B1%EC%9C%BC%EB%A1%9C-%EA%B3%B5%EA%B3%B5-API-%EC%9D%91%EB%8B%B5-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0",
        ),
        t(")"),
      ],
      [
        t(
          "청년정책 API 2,000건 전체 호출 구조를 Supabase DB 동기화와 서버사이드 페이지네이션(9건/페이지)으로 전환해, ",
        ),
        hl("응답 시간을 2,448ms → 68ms(97% 단축)로 개선"),
        t("했습니다."),
      ],
      [
        t(
          "React 19 useOptimistic·startTransition으로 댓글 삭제/수정 시 UI를 즉시 반영해, ",
        ),
        hl("1~2초의 반응 지연을 제거"),
        t("하고 실패 시 자동 롤백을 구현했습니다."),
      ],
    ],
    aiWorkflowLabel: [t("AI 워크플로우 설계 ("), code("Claude Code"), t(")")],
    aiWorkflow: [
      [
        t(
          "Playwright MCP 기반 2단계 커스텀 슬래시 커맨드(/find-e2e.test, /create-e2e.test)를 설계해, 페이지 탐색→명세화→테스트 코드 생성 및 자동 반복 개선까지 자동화, 홈 화면 E2E 테스트 30건을 확보했습니다.",
        ),
      ],
      [
        t(
          '코드 변경 전 계획 제시, 승인 후 실행을 강제하는 "Plan-First Workflow" 규칙을 설계해 Claude Code, Cursor 양쪽에 적용, AI의 범위 밖 임의 수정을 차단했습니다.',
        ),
      ],
    ],
  },
];

export const skills: Rich[] = [
  [b("Frontend: "), t("JavaScript, TypeScript, React, Next.js (App Router)")],
  [b("State & Data: "), t("TanStack Query, Zustand, Supabase")],
  [b("Testing & CI: "), t("Playwright, GitHub Actions")],
  [b("Styling: "), t("Tailwind CSS, styled-components")],
  [b("Tools: "), t("Git, Vercel")],
];

export const education =
  "대진대학교 | 경제학 전공, 컴퓨터공학 복수전공 (2018.03 ~ 2025.08)";

export const certificates = ["컴퓨터활용 능력 2급 (2020.05)"];
