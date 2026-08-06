const base = import.meta.env.BASE_URL;

/** base 경로를 붙인 내부 링크를 만든다. link('about/') → '/Butterfly/about/' */
export const link = (path = '') => `${base}/${path}`.replace(/\/{2,}/g, '/');

export const nav = [
  { key: 'about', label: '대학안내', href: link('about/') },
  { key: 'guide', label: '학사안내', href: link('guide/') },
  { key: 'calendar', label: '학사일정', href: link('calendar/') },
  { key: 'apply', label: '모집요강', href: link('apply/') },
  { key: 'notice', label: '공지사항', href: link('notice/') },
];

export const lnb: Record<string, { label: string; href: string }[]> = {
  guide: [
    { label: '운영 시스템', href: link('guide/#system') },
    { label: '감염 단계', href: link('guide/#infection') },
    { label: '능력치 배분', href: link('guide/#stats') },
    { label: '학사일정', href: link('calendar/') },
  ],
  calendar: [
    { label: '전체 일정표', href: link('calendar/#table') },
    { label: '월간 달력', href: link('calendar/#month') },
    { label: '운영 방식', href: link('calendar/#howto') },
    { label: '학사안내', href: link('guide/') },
  ],
  apply: [
    { label: '모집 개요', href: link('apply/#summary') },
    { label: '포지션 안내', href: link('apply/#position') },
    { label: '신청 절차', href: link('apply/#step') },
    { label: '자주 묻는 질문', href: link('apply/#faq') },
  ],
  notice: [
    { label: '전체 공지', href: link('notice/') },
    { label: '학사', href: link('notice/category/academic/') },
    { label: '보건 · 안전', href: link('notice/category/health/') },
    { label: '상황실 알림', href: link('notice/category/situation/') },
  ],
};
