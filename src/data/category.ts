interface CategoryType {
  id: number;
  name: string;
  image: any;
}

export const categories: CategoryType[] = [
  {
    id: 1,
    name: 'River',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708807129/beach_1_2_vs7dzn.png',
  },
  {
    id: 2,
    name: 'Beach',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708807129/creek_1_qe3tw7.png',
  },
  {
    id: 3,
    name: 'Camp',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708807129/tent_1_1_ainsf9.png',
  },
  {
    id: 4,
    name: 'Hills',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708807065/hill-station_1_etemhg.png',
  },
];
