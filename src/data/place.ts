export interface PlaceType {
  id: number;
  city: string;
  state: string;
  rate: number;
  Urls: string[];
}

export const places: PlaceType[] = [
  {
    id: 1,
    city: 'Maldives',
    state: 'South Asia',
    rate: 4.2,
    Urls: [
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708862509/my%20photo/311657007_kejy0g.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Beach_at_Fort_Lauderdale_iy2p9h.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/12845_1_jyrzwg.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Exterior-view-facilities-Bangalore-airport-bengaluru-India_bmttmp.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888653/my%20photo/Dubai-Airport-Duty-Free_wqbhgq.jpg',
    ],
  },
  {
    id: 2,
    city: 'Taj Mahal',
    state: 'India',
    rate: 3.2,
    Urls: [
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708863756/my%20photo/Taj_Mahal_2__Agra__India_pcayiz.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Beach_at_Fort_Lauderdale_iy2p9h.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/12845_1_jyrzwg.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Exterior-view-facilities-Bangalore-airport-bengaluru-India_bmttmp.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888653/my%20photo/Dubai-Airport-Duty-Free_wqbhgq.jpg',
    ],
  },
  {
    id: 3,
    city: 'Brihadeeswarar',
    state: 'Thanjavur',
    rate: 4.5,
    Urls: [
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708862509/my%20photo/thanjavur-brihadeeshwara_dmhccd.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Beach_at_Fort_Lauderdale_iy2p9h.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/12845_1_jyrzwg.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Exterior-view-facilities-Bangalore-airport-bengaluru-India_bmttmp.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888653/my%20photo/Dubai-Airport-Duty-Free_wqbhgq.jpg',
    ],
  },
  {
    id: 4,
    city: 'Thiruvalluvar',
    state: 'Kanyakumari  ',
    rate: 4.3,
    Urls: [
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708862509/my%20photo/package-157_sur3uq.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Beach_at_Fort_Lauderdale_iy2p9h.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/12845_1_jyrzwg.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888654/my%20photo/Exterior-view-facilities-Bangalore-airport-bengaluru-India_bmttmp.jpg',
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708888653/my%20photo/Dubai-Airport-Duty-Free_wqbhgq.jpg',
    ],
  },
];
