# 조현돈 이력서 / 포트폴리오

원인을 보는 개발자, 조현돈의 이력서 사이트입니다. Notion으로 작성된 원본 이력서를 Next.js로 옮겨 제작했습니다.

- **배포**: https://resume-mu-bice.vercel.app
- **원본**: [Notion 이력서 템플릿](https://raspy-recorder-35e.notion.site/70d384f16ec3821c91f70171af2cd365)

## 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## 구조

```
src/
  app/            페이지, 레이아웃, 글로벌 스타일
  components/     RichText, LinkMentionChip 등 렌더링 컴포넌트
  lib/
    resume-data.ts   이력서 콘텐츠(경력, 프로젝트, 스킬 등)
    segments.ts       리치 텍스트(굵게/하이라이트/코드/링크) 헬퍼
public/images/    프로필 사진, 프로젝트 로고
```

## 로컬 실행

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 배포

Vercel에 연결되어 있으며, 아래 명령으로 프로덕션에 배포합니다.

```bash
vercel --prod
```
