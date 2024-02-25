export interface PlaceType {
  id: number;
  city: string;
  state: string;
  rate: number;
  image: string;
}

export const places: PlaceType[] = [
  {
    id: 1,
    city: 'Maldives',
    state: 'South Asia',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708862509/my%20photo/311657007_kejy0g.jpg',
    rate: 4.2,
  },
  {
    id: 2,
    city: 'Taj Mahal',
    state: 'Inida',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708863756/my%20photo/Taj_Mahal_2__Agra__India_pcayiz.jpg',
    rate: 3.2,
  },
  {
    id: 3,
    city: 'Brihadeeswarar',
    state: 'Thanjavur ',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708862509/my%20photo/thanjavur-brihadeeshwara_dmhccd.jpg',
    rate: 4.5,
  },
  {
    id: 4,
    city: 'Thiruvalluvar',
    state: 'Kanyakumari  ',
    image:
      'https://res.cloudinary.com/dwwmdn5p4/image/upload/v1708862509/my%20photo/package-157_sur3uq.jpg',
    rate: 4.3,
  },
];
