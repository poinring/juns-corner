export default function Footer() {
  return (
    <footer className="py-24 bg-dark text-cream">
      <div className="px-6 md:px-10">
        <div className="max-w-[1920px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          여러분에 맞는 35분을 준비하고 싶어요. <br className="hidden md:block" />
          아래 질문에 편하게 답해주시면, 더 알찬 시간을 만들 수 있어요.
        </p>
        <a
          href="/survey"
          className="inline-block bg-accent text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity text-lg"
        >
          사전 설문 참여하기
        </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
