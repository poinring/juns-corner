export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream text-dark">
      <div className="px-6 md:px-10">
        <div className="max-w-[1920px] mx-auto">
          {/* Testimonial 기준인 max-w-4xl로 본문 정렬 교정 */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              복싱을 처음 시작할 때의 마음
            </h2>

            <div className="text-lg md:text-xl leading-relaxed space-y-6 text-left break-keep">
              <p>
                실력만 쫓다 보니 문득 복싱이 재미없게 느껴지던 때가 있었어요. 다시 기본기로 돌아가니 그제야 운동하는 즐거움이 보이더군요.
              </p>
              <p>
                'JUN's Corner'는 그 발견을 나누는 곳이에요. 헤드코치 준코너와 서브코치 포인링이 함께합니다. 여러분의 속도에 맞춰, 함께 움직이고 성장하면 좋겠어요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}