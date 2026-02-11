export enum RegionCategory {
  NORTH = '北部',
  CENTRAL = '中部',
  SOUTH = '南部',
  EAST = '東部',
  ISLANDS = '離島',
}

export interface RegionLink {
  id: string;
  name: string;
  url: string;
  category: RegionCategory;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}