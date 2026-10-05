export default function YouTubeLog() {
  return (
    <section id="youtube" className="py-24 md:py-32 bg-dark text-cream">
      <div className="px-6 md:px-10">
        <div className="max-w-[1920px] mx-auto">
          {/* 전체 정렬 기준폭을 max-w-4xl로 단일 축 통일 */}
          <div className="max-w-4xl mx-auto">
            
            {/* 복싱로그 타이틀과 서브문구 */}
            <div className="mb-12">
              {/* 폰트 스타일을 가이드라인에 맞게 Pretendard 고딕(font-body font-bold)으로 변경 */}
              <h2 className="text-4xl md:text-5xl font-body font-bold mb-6">Boxing Log</h2>
              <p className="text-lg md:text-xl leading-relaxed text-cream/80">
                영상으로 확인하는 JUN&POINRING의 움직임이에요. 수업 전 미리 보고 오시면 도움이 될 거예요.
              </p>
            </div>

            {/* YouTube 재생목록 임베드 */}
            <div className="mb-12">
              <div className="relative w-full bg-dark/50 rounded-2xl overflow-hidden border border-cream/10" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?si=QQUKOAtA4nWU3QOv&list=PLek2QZCNTsZxlueVOdkHCBBdudl9DPuSS"
                  title="JUN's Corner - Boxing Log"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div>
              <a
                href="https://youtube.com/playlist?list=PLek2QZCNTsZxlueVOdkHCBBdudl9DPuSS&si=XrfOYCYX3fh7i0zI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity text-lg"
              >
                영상 더 보기
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}