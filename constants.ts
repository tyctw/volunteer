import { RegionLink, RegionCategory } from './types';

export const PORTAL_DATA: RegionLink[] = [
  // North
  {
    id: 'ttk',
    name: '基北區 (基隆/台北/新北)',
    url: 'https://ttk.entry.edu.tw',
    category: RegionCategory.NORTH,
    description: '基北區高級中等學校免試入學委員會',
    tags: ['志願選填', '序位查詢'],
  },
  {
    id: 'tyc',
    name: '桃連區 (桃園/連江)',
    url: 'https://tyc.entry.edu.tw',
    category: RegionCategory.NORTH,
    description: '桃連區高級中等學校免試入學系統',
    tags: ['志願選填', '序位查詢'],
  },
  {
    id: 'hhm',
    name: '竹苗區 (新竹/苗栗)',
    url: 'https://hhm.entry.edu.tw',
    category: RegionCategory.NORTH,
    description: '竹苗區高級中等學校免試入學委員會',
    tags: ['志願選填', '榜單查詢'],
  },
  {
    id: 'iln',
    name: '宜蘭區',
    url: 'https://iln.entry.edu.tw/',
    category: RegionCategory.NORTH,
    description: '宜蘭區高級中等學校免試入學作業平台',
    tags: ['放榜查詢', '志願選填'],
  },

  // Central
  {
    id: 'ct',
    name: '中投區 (台中/南投)',
    url: 'https://ct.entry.edu.tw',
    category: RegionCategory.CENTRAL,
    description: '中投區高級中等學校免試入學系統',
    tags: ['志願選填', '序位查詢'],
  },
  {
    id: 'chc',
    name: '彰化區',
    url: 'https://chc.entry.edu.tw',
    category: RegionCategory.CENTRAL,
    description: '彰化區高級中等學校免試入學委員會',
    tags: ['志願選填', '免試入學'],
  },
  {
    id: 'ylc',
    name: '雲林區',
    url: 'https://ylc.entry.edu.tw',
    category: RegionCategory.CENTRAL,
    description: '雲林區高級中等學校免試入學平台',
    tags: ['志願選填', '序位查詢'],
  },
  {
    id: 'cyc',
    name: '嘉義區',
    url: 'https://cyc.entry.edu.tw',
    category: RegionCategory.CENTRAL,
    description: '嘉義區高級中等學校免試入學委員會',
    tags: ['志願選填', '序位查詢'],
  },

  // South
  {
    id: 'tn',
    name: '台南區',
    url: 'https://tn.entry.edu.tw',
    category: RegionCategory.SOUTH,
    description: '台南區高級中等學校免試入學作業平台',
    tags: ['志願選填', '序位查詢'],
  },
  {
    id: 'kh',
    name: '高雄區',
    url: 'https://kh.entry.edu.tw',
    category: RegionCategory.SOUTH,
    description: '高雄區高級中等學校免試入學委員會',
    tags: ['志願選填', '序位查詢'],
  },
  {
    id: 'ptc',
    name: '屏東區',
    url: 'https://ptc.entry.edu.tw',
    category: RegionCategory.SOUTH,
    description: '屏東區高級中等學校免試入學委員會',
    tags: ['志願選填', '序位查詢'],
  },

  // East
  {
    id: 'hlc',
    name: '花蓮區',
    url: 'https://hlc.entry.edu.tw/',
    category: RegionCategory.EAST,
    description: '花蓮區高級中等學校免試入學平台',
    tags: ['放榜查詢', '志願選填'],
  },
  {
    id: 'ttf',
    name: '台東區',
    url: 'https://ttf.entry.edu.tw/',
    category: RegionCategory.EAST,
    description: '台東區高級中等學校免試入學系統',
    tags: ['放榜查詢', '志願選填'],
  },

  // Islands
  {
    id: 'ph',
    name: '澎湖區',
    url: 'https://ph.entry.edu.tw',
    category: RegionCategory.ISLANDS,
    description: '澎湖區高級中等學校免試入學委員會',
    tags: ['志願選填', '序位查詢'],
  },
  {
    id: 'km',
    name: '金門區',
    url: 'https://km.entry.edu.tw',
    category: RegionCategory.ISLANDS,
    description: '金門區高級中等學校免試入學作業平台',
    tags: ['志願選填', '序位查詢'],
  },
];