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
  orderedBullets?: boolean;
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
          "IT 동아리 신입 부원을 대상으로 Git 브랜치 전략과 커밋 컨벤션 세션을 준비하면서, 브랜치 전략과 커밋 컨벤션을 사용하고 있었지만, 각각의 기준과 이유를 설명하는 데 어려움이 있었습니다. 이를 계기로 배운 내용과 문제를 해결한 과정을 기록하기 시작했고, 기술 블로그 120편 이상을 작성하고 유튜브 쇼츠 8편을 제작했습니다.",
        ),
      ],
    ],
  },

  {
    subheading: [
      t("반복을 줄여 "),
      hl("생산성을 높이기"),
      t(" 위해 AI를 활용합니다."),
    ],
    paragraph: [
      t(
        "AI를 코드 생성만 사용하지 않고, 계획 → 구현 → 검증 과정에서 결과를 확인할 수 있는 도구로 활용합니다.",
      ),
    ],
    orderedBullets: true,
    bullets: [
      [
        t(
          "FSD 구조에서 계층 간 import와 Public API 규칙 위반을 반복해서 확인하는 반복 작업을, Claude Code 기반 검증 도구를 만들어 자동으로 검사했습니다. GitHub Actions에 E2E 테스트와 아키텍처 검증을 연동해 PR마다 규칙 위반과 주요 기능 동작을 확인했습니다.",
        ),
      ],
      [
        t(
          "사부작사부작에서 AI로 코드를 수정할 때 예상하지 않은 파일까지 변경되는 경우를 줄이기 위해 Plan-First Workflow를 적용했습니다. Playwright MCP로 주요 사용자 흐름을 확인해 테스트 시나리오를 정리하고 E2E 테스트 30건을 구축했습니다.",
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
        b("기획, UI 설계부터 프론트엔드, 백엔드 개발, 배포까지 단독으로 진행"),
        t("했습니다."),
      ],
      [
        t("중간 QA에서 발견한 "),
        b("사용자 흐름과 UI 문제를 우선순위에 따라 개선"),
        t("하며, 기능 구현 이후에도 사용성을 검증했습니다."),
      ],
    ],
  },
  {
    heading: [t("SWYP Web 11")],
    headingLevel: "h3",
    period: "2026.01 – 2026.03",
    bullets: [
      [
        t("PM, 디자이너, 백엔드 개발자와 문서 번역 서비스를 개발하며 "),
        b("요구사항, 구현 범위, 화면 상태, API 응답 형식을 조율"),
        t("했습니다."),
      ],
      [
        t(
          "로그인 연동 중 발생한 CORS 오류를 네트워크 요청과 서버 설정까지 함께 점검해 ",
        ),
        b("원인을 해결"),
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
];

export const activities: {
  heading: Rich;
  headingLevel: "h3" | "plain";
  period?: string;
  bullets: Rich[];
}[] = [
  {
    heading: [t("GDG on Campus | Core Member, Frontend Lead")],
    headingLevel: "h3",
    period: "2025.08 – 2026.07",
    bullets: [
      [
        t(
          "프론트엔드 리드로 부원들의 개발 진행을 지원하고, Git Flow와 GitHub Flow를 비교한 브랜치 PR 전략 세션을 진행했습니다. ",
        ),
      ],
    ],
  },
  {
    heading: [t("Blaybus Hackathon")],
    headingLevel: "h3",
    period: "2026.01 – 2026.02",
    bullets: [
      [
        t(
          "React와 Three.js를 활용해 3D 공학 데이터를 웹에서 시각화하는 핵심 화면과 사용자 흐름을 구현했으며, 일주일 내 MVP를 완성해 예선을 통과하고 본선에 진출했습니다. ",
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
  achievementsLabel?: Rich;
  achievementsIntro?: Rich;
  projectGoals?: Rich;
  projectGoalsLabel?: Rich;
  achievements: Rich[];
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
      "블로그 글 120편을 작성하며 반복적으로 글 구조를 설계하는 불편을 줄이기 위해 만든 AI 기술 블로그 작성 서비스입니다. 기획, 설계, 개발, 배포까지 단독으로 진행했습니다.",
    achievementsLabel: [b("주요 개선")],
    projectGoalsLabel: [b("프로젝트 개요 및 개발 중점")],
    projectGoals: [
      t(
        "블로그 글 120편을 작성하며 반복적으로 글 구조를 설계하는 불편을 줄이기 위해 만든 AI 기술 블로그 작성 서비스입니다. 기획 설계 개발 배포까지 단독으로 진행했으며, 생성 과정의 상태 유지와 체감 응답 속도, 서비스가 커져도 유지할 수 있는 구조를 중점적으로 개선했습니다.",
      ),
    ],
    achievements: [
      [
        t("useSyncExternalStore로 sessionStorage 기반 생성 상태를 동기화해 "),
        hl("SSR/CSR 하이드레이션 불일치를 해결"),
        t("하고, 페이지 이동 후에도 생성 상태를 유지하도록 개선했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/Next.js-%ED%95%98%EC%9D%B4%EB%93%9C%EB%A0%88%EC%9D%B4%EC%85%98-%EC%97%90%EB%9F%AC-%EC%9A%B0%EC%95%84%ED%95%98%EA%B2%8C-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0",
        ),
        t(")"),
      ],
      [
        t("React 19 useOptimistic을 적용해 "),
        hl("글 삭제 UI 반영 시간을 2.4초 → 0.3초로 단축"),
        t("했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/%EB%82%99%EA%B4%80%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%EC%97%90-%EB%8C%80%ED%95%B4",
        ),
        t(")"),
      ],
      [
        t("폰트 서브셋과 favicon을 경량화해 "),
        hl("폰트 리소스 4,090KB → 1,048KB, favicon 로딩 27초 → 168ms로 개선"),
        t("했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/Next.js-font%EC%99%80-icon-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%8B%9C%EC%BC%9C%EB%B3%B4%EA%B8%B0",
        ),
        t(")"),
      ],
      [
        t("FSD 검증과 GitHub Actions CI를 구축해 "),
        hl("cross-import 위반 6건 → 0건, Public API 커버리지 9.5% → 100%"),
        t(
          "로 개선하고, PR마다 빌드 E2E 아키텍처 규칙을 자동 검증하도록 구성했습니다.",
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
      "사회초년생이 커뮤니티와 청년정책, 금융, 직업 정보를 한곳에서 확인할 수 있는 서비스입니다. 디자이너 2명, 백엔드 개발자 1명과 협업해 프론트엔드를 담당했습니다.",
    achievementsLabel: [b("주요 개선")],
    achievementsIntro: [
      hl(
        "외부 API와 대량 데이터에 의존하는 화면일수록 응답 지연이 누적되기 쉽다",
      ),
      t(
        "고 판단해, 데이터를 가져오는 방식과 사용자 액션에 대한 반응 속도를 함께 점검했습니다.",
      ),
    ],
    projectGoalsLabel: [b("프로젝트 개요 및 개발 중점")],
    projectGoals: [
      t(
        "사회초년생이 커뮤니티와 청년정책,금융, 직업 정보를 한곳에서 확인할 수 있는 서비스입니다. 디자이너 2명, 백엔드 개발자 1명과 협업해 프론트엔드를 담당했으며, 외부 API와 대량 데이터를 사용하는 기능의 응답 시간과 사용자 액션의 체감 지연을 줄이는 데 중점을 두었습니다.",
      ),
    ],
    achievements: [
      [
        t(
          "금융교육, 직업정보 위젯에 Next.js fetch 캐싱(revalidate: 3600)을 적용해 ",
        ),
        hl("캐시 히트 시 약 2,400ms의 외부 API 요청을 생략"),
        t("했습니다. ("),
        link(
          "Link",
          "https://velog.io/@gse06044/Next.js-fetch-%EC%BA%90%EC%8B%B1%EC%9C%BC%EB%A1%9C-%EA%B3%B5%EA%B3%B5-API-%EC%9D%91%EB%8B%B5-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0",
        ),
        t(")"),
      ],
      [
        t(
          "청년정책 2,000건 전체 조회 구조를 Supabase DB 동기화와 서버 페이지네이션(9건/페이지)으로 전환해 ",
        ),
        hl("응답 시간을 2,448ms → 68ms로 97% 단축"),
        t("했습니다."),
      ],
      [
        t("useOptimistic, startTransition을 적용해 댓글 수정, 삭제의 "),
        hl("1~2초 UI 반응 지연을 제거"),
        t("하고 요청 실패 시 이전 상태로 롤백하도록 구현했습니다."),
      ],
      [
        t("Playwright MCP 기반 테스트 생성 검증 흐름을 구축해 "),
        hl("홈 화면 주요 사용자 흐름에 대한 E2E 테스트 30건을 확보"),
        t("했습니다."),
      ],
    ],
  },
];

export const skills: Rich[] = [
  [b("Language: "), t("JavaScript, TypeScript")],
  [b("Framework: "), t("React, Next.js (App Router)")],
  [b("State/Data: "), t("TanStack Query, Zustand")],
  [b("Styling: "), t("Tailwind CSS, styled-components")],
  [b("Backend/Infra: "), t("Supabase, Vercel")],
  [b("Tools: "), t("Git, GitHub Actions, Playwright, Claude Code, Cursor")],
];

export const education =
  "대진대학교 | 경제학 전공, 컴퓨터공학 복수전공 (2018.03 ~ 2025.08)";

export const certificates = ["컴퓨터활용 능력 2급 (2020.05)"];
