import { useState } from 'react';

export default function SurveyForm() {
  // 1. 기획한 데이터 구조에 맞춘 State 선언
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    experience: '',       // 처음이에요 / 조금 해봤어요 / 기본기는 알아요
    interestedClasses: [], // 카드 명칭에 맞춘 복수 선택 배열
    preferredStyle: '',    // 즐겁게 / 체계적으로 / 고강도
    injuryOrBody: '',      // 주관식 (선택)
    message: ''            // 주관식 (선택)
  });

  // 현재 설문 단계를 관리하는 State (총 5단계)
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // 일반 인풋 및 라디오 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 관심 수업 (체크박스 복수 선택) 변경 핸들러
  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const { interestedClasses } = prev;
      if (interestedClasses.includes(value)) {
        return {
          ...prev,
          interestedClasses: interestedClasses.filter((item) => item !== value)
        };
      } else {
        return {
          ...prev,
          interestedClasses: [...interestedClasses, value]
        };
      }
    });
  };

  // 유효성 검사 (1단계 필수 정보 입력 확인)
  const isFirstStepValid = formData.name.trim() !== '' && formData.phone.trim() !== '';

  // 다음 단계 이동
  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1 && !isFirstStepValid) {
      alert('성함과 연락처를 입력해 주세요!');
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // 이전 단계 이동
  const handlePrev = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // 최종 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`설문해 주셔서 감사합니다, ${formData.name}님! 준코너가 확인 후 곧 연락드릴게요. 🔥`);
  };

  // 프로그레스 바 백분율 계산
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    // [수정 포인트] 상단 패딩을 pt-0으로 완전히 리셋하여 App.jsx의 main 패딩과 칼같이 맞물리게 합니다.
    <div className="w-full bg-cream text-dark flex flex-col pt-0 pb-12 font-body">
      
      {/* 불필요한 중앙 정렬 여백을 제외하고 자연스럽게 흐르도록 설정 */}
      <div className="px-6 md:px-10 max-w-[1920px] mx-auto w-full flex-grow">
        
        {/* App.jsx 패딩 덕분에 별도의 상단 마진 없이도 헤더와 겹치지 않고 쾌적하게 배치됩니다. */}
        <div className="max-w-xl mx-auto w-full bg-white/40 border border-dark/5 rounded-2xl p-8 md:p-10 shadow-sm">
          
          {/* 상단 프로그레스 바 및 단계 표시 */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2 text-xs font-semibold text-dark/40 uppercase tracking-wider">
              <span>사전 안내 설문</span>
              <span>{currentStep} / {totalSteps} Step</span>
            </div>
            <div className="w-full h-1.5 bg-dark/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* 설문 메인 폼 */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* [STEP 1] 기본 정보 (필수) */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 break-keep">성함과 연락처를 알려주세요.</h2>
                  <p className="text-dark/60 text-sm mb-6">여러분에게 알맞은 상담 진행 및 예약 확인을 위해 필요한 최소한의 정보입니다.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-dark/60">이름</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      autoComplete="name"
                      maxLength={50}
                      required
                      className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:border-accent outline-none transition text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-2 text-dark/60">연락처</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="010-1234-5678"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={20}
                      required
                      className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:border-accent outline-none transition text-base"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* [STEP 2] 경험 여부 */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 break-keep">복싱을 접해보신 적이 있나요?</h2>
                  <p className="text-dark/60 text-sm mb-6">여러분의 경험 상태에 맞추어 눈높이 설명을 준비할게요.</p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { id: 'exp1', value: '완벽히 처음이에요! 설렙니다.', label: '완벽히 처음이에요! 설렙니다.' },
                    { id: 'exp2', value: '맛보기로 아주 조금만 해봤어요.', label: '맛보기로 아주 조금만 해봤어요.' },
                    { id: 'exp3', value: '꽤 오래 다녀서 기본기는 알아요.', label: '꽤 오래 다녀서 기본기는 알아요.' }
                  ].map((item) => (
                    <label 
                      key={item.id} 
                      className={`flex items-center gap-4 px-5 py-4 border rounded-xl cursor-pointer transition-all ${
                        formData.experience === item.value 
                          ? 'border-accent bg-accent/5 font-medium text-accent' 
                          : 'border-dark/10 bg-white hover:border-dark/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="experience"
                        value={item.value}
                        checked={formData.experience === item.value}
                        onChange={handleChange}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-base">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* [STEP 3] 관심 수업 선택 */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 break-keep">관심이 가거나 참여해보고 싶은 수업은 무엇인가요?</h2>
                  <p className="text-dark/60 text-sm mb-6">중복 선택이 가능해요. 편하게 골라주세요!</p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { value: '초중급 유산소 다이어트 수업', label: '초중급 유산소 다이어트 수업', desc: '복싱의 리듬을 배우는 가장 편한 방법' },
                    { value: '중고급 실력 향상 수업', label: '중고급 실력 향상 수업', desc: '나의 움직임을 더 깊이 이해하고 싶은 분들을 위한 구성' },
                    { value: '일일 야외 로드웍 수업', label: '일일 야외 로드웍 수업', desc: '실내를 벗어나 맑은 공기와 함께 움직이는 리프레시' },
                    { value: '1:1 고강도 디테일 수업 (남성 전용)', label: '1:1 고강도 디테일 수업 (남성 전용)', desc: '정교한 미트 트레이닝과 체계적인 지도 스파링 밀착 코칭' }
                  ].map((item) => {
                    const isChecked = formData.interestedClasses.includes(item.value);
                    return (
                      <label 
                        key={item.value} 
                        className={`flex items-start gap-4 px-5 py-4 border rounded-xl cursor-pointer transition-all ${
                          isChecked 
                            ? 'border-accent bg-accent/5 font-medium' 
                            : 'border-dark/10 bg-white hover:border-dark/30'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(item.value)}
                          className="w-4 h-4 mt-1 accent-accent rounded"
                        />
                        <div className="flex flex-col">
                          <span className={`text-base ${isChecked ? 'text-accent font-bold' : 'text-dark'}`}>{item.label}</span>
                          <span className="text-xs text-dark/50 mt-0.5">{item.desc}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* [STEP 4] 선호 스타일 선택 */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 break-keep">어떤 분위기에서 운동할 때 에너지가 나시나요?</h2>
                  <p className="text-dark/60 text-sm mb-6">마음이 이끄는 가장 편안한 환경을 골라주세요.</p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { value: '하하호호 웃으면서 즐겁게!', label: '하하호호 웃으면서 즐겁게!' },
                    { value: '차분하고 디테일하게, 체계적으로!', label: '차분하고 디테일하게, 체계적으로!' },
                    { value: '잡생각 안 나게 땀 뻘뻘 흘리는 고강도로!', label: '잡생각 안 나게 땀 뻘뻘 흘리는 고강도로!' }
                  ].map((item) => (
                    <label 
                      key={item.value} 
                      className={`flex items-center gap-4 px-5 py-4 border rounded-xl cursor-pointer transition-all ${
                        formData.preferredStyle === item.value 
                          ? 'border-accent bg-accent/5 font-medium text-accent' 
                          : 'border-dark/10 bg-white hover:border-dark/30'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredStyle"
                        value={item.value}
                        checked={formData.preferredStyle === item.value}
                        onChange={handleChange}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-base">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* [STEP 5] 신체 상태 및 메모 (주관식) */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 break-keep">마지막 단계예요!</h2>
                  <p className="text-dark/60 text-sm mb-6">부담스러운 질문은 작성하지 않고 바로 제출하셔도 괜찮아요.</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-dark/80">
                      주의해야 할 신체 부위나 부상이 있으신가요? (선택)
                    </label>
                    <textarea
                      name="injuryOrBody"
                      value={formData.injuryOrBody}
                      onChange={handleChange}
                      maxLength={500}
                      placeholder="예: 오른쪽 손목이 가끔 시려요, 체력이 많이 부족해요 등"
                      rows="2"
                      className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:border-accent outline-none transition text-base resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-dark/80">
                      준코너에게 궁금한 점이나 기대하는 점을 편하게 적어주세요! (선택)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      placeholder="예: 스텝 위주로 제대로 배워보고 싶어요! 복싱 용품은 대여가 되나요? 등"
                      rows="2"
                      className="w-full px-4 py-3 bg-white border border-dark/10 rounded-xl focus:border-accent outline-none transition text-base resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 하단 네비게이션 제어 컨트롤러 영역 */}
            <div className="flex gap-4 pt-4 border-t border-dark/5">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 py-3.5 px-4 border border-dark/20 text-dark/80 rounded-xl font-bold text-base hover:bg-dark/5 transition"
                >
                  이전으로
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentStep === 1 && !isFirstStepValid}
                  className={`py-3.5 px-4 rounded-xl font-bold text-base transition text-center ${
                    currentStep === 1 ? 'w-full' : 'flex-1'
                  } ${
                    currentStep === 1 && !isFirstStepValid 
                      ? 'bg-dark/10 text-dark/40 cursor-not-allowed' 
                      : 'bg-dark text-white hover:opacity-90'
                  }`}
                >
                  다음 단계
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 bg-accent text-white py-3.5 px-4 rounded-xl font-bold text-base hover:opacity-90 transition shadow-sm"
                >
                  제출하고 예약 완료하기
                </button>
              )}
            </div>
          </form>

        </div>
      </div>
      
      {/* 푸터 보조 문구 */}
      <p className="text-center text-xs text-dark/40 px-6 mt-12">
        작성해주신 정보는 개별 맞춤형 수업 구성 및 상담 연락을 위해서만 안전하게 보관됩니다.
      </p>
    </div>
  );
}