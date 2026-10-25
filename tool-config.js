export const tool = {
  "id": "E028",
  "title": "축 토크 동력 계산기",
  "inputs_text": "토크 T [N·m], 회전수 n [rpm]",
  "formula": "P = T ω,  ω = 2π n / 60 (n: rpm)",
  "output_text": "축 기계동력 P [W]",
  "assumptions": "같은 회전축의 양의 방향을 정한 뒤 토크와 회전속도의 부호를 입력합니다. 두 부호가 같으면 양의 전달동력, 다르면 음의 동력입니다. 전기 입력동력이 아니며 모터 효율·기동 피크는 포함하지 않습니다.",
  "purpose": "토크 rpm 출력 계산 / 모터 사양·회전축 실험",
  "sources": [
    {
      "label": "OpenStax · Work and Power for Rotational Motion",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/10-8-work-and-power-for-rotational-motion"
    }
  ],
  "slug": "eng-shaft-power",
  "category": "역학",
  "result_label": "축 기계동력 P",
  "result_dimension": "power",
  "fields": [
    {
      "key": "t",
      "label": "축 토크 T",
      "dimension": "torque",
      "example": 10,
      "constraint": "signed",
      "display_unit": "Nm",
      "display_value": "10"
    },
    {
      "key": "omega",
      "label": "축 각속도 ω (rpm 선택 가능)",
      "dimension": "angularSpeed",
      "example": 157.07963267948966,
      "constraint": "signed",
      "display_unit": "rpm",
      "display_value": "1500"
    }
  ],
  "site": "https://nanalab.kr/eng-shaft-power/",
  "repository": "https://github.com/NaNaCompany/eng-shaft-power",
  "condition": "",
  "output_unit": "W"
};
