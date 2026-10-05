import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Program from './components/program';
import YouTubeLog from './components/YouTubeLog';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import SurveyForm from './components/SurveyForm';

// 1. 보내주신 오리지널 히어로 섹션과 컴포넌트 구조 그대로 랜딩페이지 분리
function LandingPage() {
  return (
    <>
      {/* Hero 섹션 - 원래 코드 그대로 완벽 보존 */}
      <div className="px-6 md:px-10 mb-24 md:mb-32">
        <div className="max-w-[1920px] mx-auto">
          {/* Testimonial 기준에 맞춰 max-w-4xl로 너비 유지 */}
          <div className="max-w-4xl mx-auto"> 
            <h1 className="text-5xl md:text-8xl font-medium mb-10 md:mb-14 leading-tight">
              {/* whitespace-nowrap 클래스로 한 줄 유지 보장 처리 그대로 유지 */}
              <span className="font-serif-custom italic block md:inline">Boxing, </span>
              <span className="font-serif-custom italic whitespace-nowrap">at your own pace.</span>
            </h1>
            <p className="text-xl md:text-3xl text-dark leading-relaxed md:leading-normal mb-10 md:mb-14">
              복싱이 처음이어도 괜찮아요. <br className="hidden md:block" /> 샌드백 두드리는 35분이면, 일상에 <br className="hidden md:block" /> 은은한 활력이 생기거든요.
            </p>
            <a
              href="/survey"
              className="inline-block bg-accent text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity text-lg"
            >
              시작하기
            </a>
          </div>
        </div>
      </div>

      <About />
      <Program />
      <YouTubeLog />
      <Testimonial />
    </>
  );
}

// 2. 오리지널 main 패딩(pt-28 md:pt-40) 안에서 라우팅 스위칭
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Header />
        
        {/* 원래 유지하시던 전역 main 레이아웃 패딩 완벽 고정 */}
        <main className="pt-28 md:pt-40 text-left">
          <Routes>
            {/* 홈 주소일 때는 오리지널 메인 랜딩페이지 전체 출력 */}
            <Route path="/" element={<LandingPage />} />
            
            {/* /survey 주소일 때는 우리가 정돈한 전용 설문지만 단독 출력 */}
            <Route path="/survey" element={<SurveyForm />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;