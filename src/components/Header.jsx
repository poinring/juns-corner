import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 현재 브라우저의 주소창 경로 확인 (서브페이지 네비게이션 분기용)
  const { pathname } = useLocation();
  const isSurveyPage = pathname === '/survey';

  return (
    <header className="fixed top-0 left-0 w-full bg-cream z-50 border-b border-dark/5">
      {/* 본문 콘텐츠 레이아웃(max-w-4xl)과 좌우 정렬선을 일치시키는 헤더 랩퍼 */}
      <div className="px-6 md:px-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-6 md:py-8">
          
          {/* 로고 클릭 시 메인 홈("/")으로 이동 */}
          <a href="#/" className="font-body text-2xl md:text-3xl font-bold cursor-pointer text-dark hover:opacity-80 transition-opacity">
            JUN's Corner
          </a>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex gap-10 text-sm font-medium items-center">
            {isSurveyPage ? (
              // 설문 페이지일 때는 이탈을 막고 홈 복귀만 단순하게 제공
              <a href="#/" className="text-dark/60 hover:text-dark transition-colors font-medium">
                ← 메인 홈으로 돌아가기
              </a>
            ) : (
              // 기존 메인 홈 전용 섹션 링크 완벽 보존
              <>
                <a href="#about" className="text-dark/80 hover:text-accent transition-colors">
                  About
                </a>
                <a href="#program" className="text-dark/80 hover:text-accent transition-colors">
                  Program
                </a>
                <a href="#/survey" className="bg-dark text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  시작하기
                </a>
              </>
            )}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* 모바일 전체화면 메뉴 */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-dark text-cream px-6 flex flex-col gap-10 text-2xl font-body font-medium transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ paddingTop: '6rem' }}
      >
        {isSurveyPage ? (
          <a href="#/" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors text-xl">
            ← 메인 홈으로 돌아가기
          </a>
        ) : (
          <>
            {/* 다른 페이지에서 복귀 시 오동작하지 않게 절대 경로(/#)로 정교화 */}
            <a href="#/" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#/" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">
              Program
            </a>
            <a
              href="#/survey"
              onClick={() => setIsMenuOpen(false)}
              className="bg-accent text-white text-center py-3 rounded-full hover:opacity-90 transition-opacity mt-4 text-xl font-bold"
            >
              시작하기
            </a>
          </>
        )}
      </div>
    </header>
  );
}