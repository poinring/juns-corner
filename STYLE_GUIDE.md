# 스타일 가이드 — juns-corner

## 디자인 토큰

### 색상
- **Cream (바탕색):** `#F7F4EF`
- **Dark (텍스트):** `#1A1A1A`
- **Accent (강조):** `#00A36C` (초록)

색상은 [tailwind.config.js](tailwind.config.js#L7-L10)와 [src/index.css](src/index.css#L5-L8)에 정의되어 있습니다.

### 타이포그래피
- **영문 헤드라인 폰트:** Playfair Display (세리프/우아한 체) — 영문만 사용
- **기본 폰트 (한글 + 영문):** Pretendard (산스세리프/고딕) — 모든 한글은 반드시 이 폰트 사용
  - 헤드라인에도 한글이 포함되면 Pretendard 사용
  - 영문 전용 헤드라인만 Playfair Display 적용

폰트는 [src/index.css](src/index.css#L13-L14)에서 Google Fonts로 불러옵니다.

## Tailwind 클래스 (프로젝트 커스텀)

### 색상 유틸리티
- **배경:** `bg-cream`, `bg-dark`, `bg-accent`
- **텍스트:** `text-dark`, `text-dark/80` (투명도), `text-cream`
- **상태:** `hover:text-accent`, `hover:opacity-90`

사용 예시: [src/components/Header.jsx](src/components/Header.jsx#L1-L8)

### 폰트 클래스
- **기본 (고딕):** 별도 클래스 없음 (body의 기본값)
- **세리프 (영문 헤드라인):** `font-serif-custom` — [src/index.css](src/index.css#L20-L23)에 정의

### 투명도 & 보더
- `border-dark/10`, `text-dark/80` — 카드나 subtle 텍스트에 사용
- 예: [src/components/program.jsx](src/components/program.jsx#L15)의 카드

## 레이아웃 패턴

### 컨테이너 & 여백 (전체 너비 통일)
- **최대 너비:** `max-w-[1920px] mx-auto`
- **좌우 패딩:** `px-6 md:px-10` (모바일과 데스크톱 반응형)
- **수직 여백:** 섹션은 `py-24 md:py-32`, 헤더/푸터는 `py-6 md:py-8`
- **적용 위치:** 모든 상단 레이아웃 ([src/components/Header.jsx](src/components/Header.jsx#L1-L8), [src/App.jsx](src/App.jsx#L7-L8), 모든 섹션)
- **중요:** 헤더, 컨텐츠, 푸터 모두 동일한 너비와 패딩 사용으로 일관성 유지

### 헤더
- 전체 너비: `fixed top-0 left-0 w-full bg-cream z-50`
- **컨테이너 구조:**
  ```jsx
  <header className="fixed top-0 left-0 w-full bg-cream z-50">
    <div className="px-6 md:px-10 max-w-[1920px] mx-auto">
      <div className="flex justify-between items-center py-6 md:py-8">
        {/* 로고, 네비, 버튼 */}
      </div>
    </div>
  </header>
  ```
- 패딩: `py-6 md:py-8`
- 모바일 메뉴도 같은 좌우 패딩 `px-6` 사용

### 카드
```html
<div className="p-8 border border-dark/10 rounded-2xl hover:border-accent transition-colors">
```
- 안쪽 여백: `p-8`
- 보더: `border-dark/10`
- 호버: `hover:border-accent`

## 사용 예시

### 기본 페이지 배경 + 텍스트
```jsx
<div className="bg-cream text-dark">
  <p>모든 한글 텍스트</p>
</div>
```

### 영문 헤드라인 (세리프)
```jsx
<h1 className="font-serif-custom italic text-5xl md:text-8xl">
  Boxing, at your own pace.
</h1>
```

### 한글 헤드라인 (항상 고딕)
```jsx
<h2 className="text-4xl md:text-5xl font-bold">
  수업에 대하여
</h2>
```
→ Pretendard(고딕)가 자동 적용됨

### Accent 버튼
```jsx
<button className="bg-accent text-white px-6 py-2 rounded-full">
  시작하기
</button>
```

## 글로벌 스타일

### 텍스트 선택 (드래그)
모든 텍스트를 드래그할 때 초록색(accent) 배경으로 표시됩니다.
```css
::selection {
  background-color: #00A36C;
  color: #F7F4EF;
}
```

## 컨벤션

### 폰트 & 텍스트
- **한글 텍스트:** 항상 Pretendard 사용 (별도 클래스 불필요)
- **영문 헤드라인:** `font-serif-custom`으로 Playfair Display 적용 (이탤릭과 함께 사용)
- **투명도:** `text-dark/80`, `border-dark/10` 등으로 subtle 처리
- **색상 토큰:** 항상 `cream`, `dark`, `accent` 사용 (직접 hex 코드 입력 금지)

### CTA 버튼 규칙
- **배경:** 항상 `bg-accent` (#00A36C - 초록)
- **텍스트:** 항상 `text-white` (흰색으로 최대 대비도)
- **적용 여부:** 모든 행동 유도 버튼에 동일 스타일 적용
- **예시:** Hero 시작하기, Program 수업신청, YouTubeLog 영상보기, Footer 설문참여, SurveyForm 제출

### 너비 & 패딩 통일
- **모든 페이지/헤더:** `px-6 md:px-10 max-w-[1920px] mx-auto` 사용
- **의도:** 헤더, 컨텐츠, 푸터의 좌우 여백이 정확히 일치하도록 유지

