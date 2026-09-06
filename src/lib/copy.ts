/** Korean copy shell — EN literals stay in components so honesty locks keep grepping source. */
export type Locale = 'en' | 'ko'

export const copy = {
  ko: {
    hero: {
      independence: '독립 비수탁 지갑 · 텔레그램 제품 아님',
      keyword: '비수탁',
      h1After: ' 지갑 — 생성, 전송, 스왑을 명확히 검토',
      body: '생성·가져오기, 잔액 확인, 전송, 스왑 리뷰 — 텔레그램 봇과 미니앱에서 사용. 소프트 팁 도그푸드 — 다듬는 중. 알림과 더 스마트한 트레이딩은 로드맵에 있습니다.',
      keysLine: '비수탁 · 키는 기기에 남습니다',
    },
    graphic: {
      reviewLabel: '리뷰 · 자동 거래 아님',
      from: '보내는 곳',
      fromValue: '— · 내 지갑',
      to: '받는 곳',
      toValue: '— · 먼저 리뷰',
      fees: '수수료',
      feesValue: '확인 전에 표시',
      bubbleIn1: '지갑을 만들거나 가져오세요. 키는 기기에 남습니다.',
      bubbleOut: '확인하기 전에 이 스왑을 리뷰합니다.',
      bubbleIn2: '명확한 리뷰 — 견적과 수수료가 먼저. 소프트 도그푸드, 다듬는 중.',
      caption: '브랜드 아트 · Coming — 라이브 네트워크 목록이 아님',
    },
    trust: {
      eyebrow: '신뢰',
      title: '키는 기기에 남습니다',
      body: 'Porta는 비수탁 이더리움 스마트 컨트랙트 지갑이며 계정 추상화(ERC-4337 / EIP-4337)를 씁니다. 모든 스왑은 리뷰이며 자동 거래가 아닙니다. 소프트 도그푸드: 다듬는 중, 정직한 주장만.',
      panel: '독립 지갑. 모든 스왑을 리뷰. 키는 기기를 떠나지 않습니다.',
    },
    how: {
      eyebrow: '이용 방법',
      title: '생성 → 입금 → 리뷰',
      steps: [
        {
          title: '생성',
          body: '지갑을 만들거나 가져옵니다. 키는 기기에 남습니다 — Porta는 비수탁입니다.',
        },
        {
          title: '입금',
          body: '이미 가진 자산을 가져오세요. 라이브 온램프 주장 없음 — 준비되면 옮기면 됩니다.',
        },
        {
          title: '리뷰',
          body: '전송과 스왑은 확인 전에 검토합니다. 소프트 도그푸드 — 다듬는 중.',
        },
      ],
    },
    live: {
      lede:
        '오늘 쓸 수 있는 것. Porta는 검토 중 — 소프트 팁 {tip}. 기본 진입은 {handle}. 완벽이 아니라 다듬기를 기대하세요. 시드나 키는 여기에 올리지 않습니다.',
      botBody: '기본 진입. 생성 또는 가져오기 후, 채팅에서 전송과 스왑을 리뷰합니다 — 자동 거래 아님.',
      chromeDesc: '텔레그램과 함께 쓰는 브라우저 지갑.',
      chromeCta: 'Chrome Web Store Unlisted — 곧',
      apkDesc: '사이드로드 테스트용 플레이스홀더 빌드 — Play Store 출시 아님. 라이브 아님.',
    },
    roadmap: {
      lede: '근거 있는 목표. 아래는 소프트 팁 {tip}에서 라이브가 아닙니다.',
      items: [
        {
          title: '확인 전에 모든 스왑을 본다',
          body: '견적, 수수료, 리뷰 문구를 더 분명하게. 스왑은 리뷰이지 자동 거래가 아닙니다.',
        },
        {
          title: '리뷰를 여는 알림 — 거래가 아님',
          body: '알림은 Porta 안 리뷰 흐름으로 연결됩니다. 텔레그램은 표면일 뿐 — 텔레그램 제품 아님.',
        },
        {
          title: '선택적 보호 스왑',
          body: '스왑 주변 옵트인 보호. MEV-proof로 홍보하지 않습니다 — 되는 것과 안 되는 것을 정직하게.',
        },
        {
          title: '복구 & 세션 한도',
          body: '복구와 세션 한도는 진행 중. 오늘은 가스리스가 아니며, 그렇다고 주장하지 않습니다.',
        },
        {
          title: '소셜 트레이딩 (이후)',
          body: '카피·커뮤니티 트레이딩은 이후 로드맵. tip 00044-47z에서는 라이브 소셜 트레이딩 제품이 아닙니다.',
        },
        {
          title: 'AI 봇 트레이딩',
          body: 'AI 지원 트레이딩 봇은 로드맵. tip 00044-47z에서는 라이브 AI 트레이딩 제품이 아닙니다.',
        },
      ],
    },
    updates: {
      eyebrow: '업데이트',
      title: '소셜 게시물',
      lede: '공식 게시물은 여기에 모입니다. LinkedIn·텔레그램 URL은 나중에 — 지금 숫자를 만들지 않습니다.',
      empty: 'Posts go live as we ship',
    },
    contact: {
      body: '팀에 메일 주세요. Porta는 독립 비수탁 지갑이며 텔레그램 제품이 아닙니다. 소프트 팁 {tip}. 시드 문구를 요구하지 않습니다.',
      never: '시드, 키, 복구 문구를 보내지 마세요. 폼 없음. 공식 이메일만.',
    },
    footer: {
      blurb: '정직한 주장만. 비수탁 — 키는 기기에 남습니다. 공식 X 없음.',
    },
  },
} as const

export type KoCopy = (typeof copy)['ko']
