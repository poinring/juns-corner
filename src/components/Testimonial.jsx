import { useState } from 'react';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "박민지",
      story: "처음에는 겁이 많았는데, 준코치님이 천천히 가르쳐주니까 자신감이 생겼어요. 지금은 일주일에 3번 빠지지 않고 와요.",
      role: "직장인",
      rating: 5
    },
    {
      id: 2,
      name: "이준혁",
      story: "다른 헬스장과 달라요. 여기선 정말 '재미'로 운동합니다. 기술도 배우고, 스트레스도 풀고, 새 친구들도 사귈 수 있어요.",
      role: "대학생",
      rating: 5
    },
    {
      id: 3,
      name: "김수진",
      story: "몸도 좋아지고 마음도 가벼워졌어요. 35분이 정말 딱 맞는 시간이라는 걸 이제야 알겠어요.",
      role: "프리랜서",
      rating: 4
    },
    {
      id: 4,
      name: "정민호",
      story: "포인링 코치의 섬세한 지도 덕분에 기술이 확실히 늘었습니다. 인생 운동이 따로 있다는 걸 이곳에서 배웠어요.",
      role: "금융인",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, testimonials.length - 2) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === Math.max(0, testimonials.length - 2) ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

  return (
    <section id="testimonial" className="py-24 md:py-32 bg-cream text-dark">
      <div className="px-6 md:px-10">
        <div className="max-w-[1920px] mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">함께 움직인 분들의 이야기</h2>
            <p className="text-lg md:text-xl leading-relaxed text-dark/80">
              먼저 경험한 분들의 솔직한 기록이에요. 어떤 성장이 있었는지 구경해 보세요.
            </p>
          </div>

          {/* 캐러셀 컨테이너 */}
          <div className="max-w-4xl mx-auto">
            {/* 후기 카드 그리드 (모바일: 1개, md이상: 2개) */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-8 border border-dark/10 rounded-2xl bg-dark/5"
                >
                  {/* 별점 */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-accent' : 'text-dark/20'}`}>
                        ★
                      </span>
                    ))}
                  </div>

                  {/* 후기 텍스트 */}
                  <blockquote className="mb-8">
                    <p className="text-base leading-relaxed text-dark italic font-serif-custom">
                      "{testimonial.story}"
                    </p>
                  </blockquote>

                  {/* 이름과 역할 */}
                  <div className="border-t border-dark/10 pt-6">
                    <p className="font-bold text-lg text-dark">{testimonial.name}</p>
                    <p className="text-dark/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 네비게이션 */}
            <div className="flex items-center justify-between gap-6">
              {/* 이전 버튼 */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-3 rounded-full border border-dark/20 hover:border-accent hover:bg-accent/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="이전 후기"
              >
                <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* 인디케이터 */}
              <div className="flex gap-2 justify-center flex-1">
                {[...Array(Math.max(1, testimonials.length - 1))].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`rounded-full transition-all ${
                      i === currentIndex 
                        ? 'bg-accent w-8 h-2' 
                        : 'bg-dark/30 w-2 h-2 hover:bg-dark/50'
                    }`}
                    aria-label={`${i + 1}그룹 후기`}
                  />
                ))}
              </div>

              {/* 다음 버튼 */}
              <button
                onClick={handleNext}
                disabled={currentIndex === Math.max(0, testimonials.length - 2)}
                className="p-3 rounded-full border border-dark/20 hover:border-accent hover:bg-accent/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="다음 후기"
              >
                <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* 진행 상황 텍스트 */}
            <p className="text-center text-dark/60 text-sm mt-6">
              {currentIndex + 1} ~ {Math.min(currentIndex + 2, testimonials.length)} / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
