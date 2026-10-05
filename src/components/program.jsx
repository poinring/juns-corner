export default function Program() {
  const programs = [
    { 
      title: "초중급 유산소 다이어트 수업", 
      tags: ["쉐도우", "서킷 트레이닝", "드릴", "샌드백"],
      desc: "복싱의 기초 동작을 십분 활용해 지루할 틈 없이 지방을 태우는 시간이에요. 쉐도우부터 샌드백, 서킷 트레이닝까지 재미있게 움직이다 보면 어느새 땀이 비 오듯 흐를 거예요." 
    },
    { 
      title: "중고급 실력 향상 수업", 
      tags: ["쉐도우", "드릴", "샌드백", "지도 스파링"],
      desc: "정체기를 깨고 나의 움직임을 한 단계 더 깊이 이해하고 싶은 분들을 위해 준비했어요. 정교한 콤비네이션 훈련과 안전한 지도 스파링을 통해 진짜 실력이 늘어나는 재미를 느껴보세요." 
    },
    { 
      title: "일일 야외 로드웍 수업", 
      tags: ["달리기", "쉐도우 복싱", "지구력 증진"],
      desc: "실내를 벗어나 싱그러운 맑은 공기를 마시며 달리는 기분 전환의 시간이에요. 준코너만의 특별한 야외 로드웍과 쉐도우 복싱으로 일상의 스트레스를 풀고 지구력까지 든든하게 채워가세요." 
    },
    { 
      title: "1:1 고강도 디테일 수업 (남성 전용)", 
      tags: ["미트 트레이닝", "자세 교정", "지도 스파링(선택)"],
      desc: "오직 나에게만 집중되는 고강도 미트 트레이닝 중심의 전용 수업입니다. 밀착 피드백을 통한 즉각적인 자세 교정은 물론, 선택형 지도 스파링으로 복싱의 진수를 확실하게 가져가실 수 있습니다." 
    }
  ];

  return (
    <section id="program" className="py-24 md:py-32 bg-cream text-dark">
      <div className="px-6 md:px-10">
        <div className="max-w-[1920px] mx-auto">
          {/* 전체 콘텐츠 레이아웃 폭을 max-w-4xl로 통합 통일 */}
          <div className="max-w-4xl mx-auto">
            
            {/* 타이틀 및 서브문구 */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                수업에 대하여
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-dark/80">
                준코너와 포인링이 고민한 방식들이에요. 모두가 즐겁게 움직일 수 있도록 아래 원칙을 지키며 운영해요.
              </p>
            </div>
           
            {/* 프로그램 카드 - 2x2 그리드 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {programs.map((p, i) => (
                <div key={i} className="p-8 border border-dark/10 rounded-2xl hover:border-accent transition-colors flex flex-col justify-between bg-white/40">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-dark">{p.title}</h3>
                    
                    {/* 핵심 키워드/훈련 방식 포인트 태그 영역 */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-dark/80 leading-relaxed text-base break-keep">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 운영 원칙 섹션 */}
            <div className="mb-16 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">운영 원칙</h3>
                
                <div className="mb-8 p-6 border border-dark/10 rounded-lg bg-dark/5">
                  <h4 className="text-lg font-bold mb-3">수업 진행 방식</h4>
                  <p className="text-dark/80 leading-relaxed break-keep">
                    준코너의 수업은 <strong className="text-accent font-bold">기본적으로 그룹 수업</strong>으로 진행되며, 성별 구분 없이 <strong className="text-dark font-bold">3명 이상</strong> 모이면 언제든 즐겁게 출발합니다. 다만, 밀도 높은 고강도 밀착 훈련에 집중하는 <strong className="text-dark font-bold">1:1 개인 수업</strong>은 프로그램 특성상 <strong className="text-dark font-bold">남성 전용</strong>으로만 특별 운영하고 있습니다.
                  </p>
                </div>

                <div className="p-6 border border-dark/10 rounded-lg bg-dark/5">
                  <h4 className="text-lg font-bold mb-3">35분 타임라인</h4>
                  <p className="text-dark/80 leading-relaxed font-mono">
                    <span className="text-accent font-bold">1R</span> 몸 풀기(워밍업) → <span className="text-accent font-bold">5R</span> 동작 집중(메인) → <span className="text-accent font-bold">2R</span> 체력(샌드백/체력) → <span className="text-accent font-bold">1R</span> 호흡 정리(쿨다운)
                  </p>
                </div>
              </div>
            </div>

            {/* 가격 안내 섹션 (정리된 용어 및 순서 반영) */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">가격 안내</h3>
              <p className="text-dark/80 leading-relaxed mb-6">
                더 쾌적한 훈련 환경을 위해 외부 대관 공간을 활용하고 있어요. 장소에 따라 비용이 달라질 수 있어 미리 대략적인 기준을 안내해 드립니다. 목적과 컨디션에 맞춰 가장 효율적인 과정은 상담을 통해 제안해 드릴게요.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-dark/10 px-4 py-3 text-left font-bold">프로그램</th>
                      <th className="border border-dark/10 px-4 py-3 text-left font-bold">예상 비용 (1회 기준)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-dark/10 px-4 py-3 font-medium">실내 그룹 수업</td>
                      <td className="border border-dark/10 px-4 py-3 text-accent font-bold">5만 원 선 ~</td>
                    </tr>
                    <tr className="bg-dark/5">
                      <td className="border border-dark/10 px-4 py-3 font-medium">야외 그룹 수업 (로드웍)</td>
                      <td className="border border-dark/10 px-4 py-3 text-accent font-bold">2~3만 원 선 ~</td>
                    </tr>
                    <tr>
                      <td className="border border-dark/10 px-4 py-3 font-medium">1:1 개인 수업 (남성 전용)</td>
                      <td className="border border-dark/10 px-4 py-3 text-accent font-bold">7만 원 선 ~</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-dark/60 italic">
                공간 대관비에 따라 최종 비용이 상이할 수 있으니, 편하게 상담 문의해주세요!
              </p>
            </div>

            {/* CTA 버튼 */}
            <div>
              <a
                href="/survey"
                className="inline-block bg-accent text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity text-lg"
              >
                상담 신청하기
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}