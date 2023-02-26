export const initialFilters = {
  page: 1,
  search: '',
  ordering: '',
  platforms: '4',
};

export const sort = [
  { title: 'Relevance', dataValue: '' },
  { title: 'High Rating', dataValue: '-rating' },
  { title: 'Low Rating', dataValue: 'rating' },
  { title: 'New Release', dataValue: '-released' },
  { title: 'Old Release', dataValue: 'released' },
];

export const platforms = [
  { title: 'PC', dataValue: '4' },
  { title: 'PlayStation', dataValue: '18,167,16' },
  { title: 'XBox', dataValue: '1,186,14' },
  { title: 'Nintendo', dataValue: '7,8,9' },
  { title: 'MacOS', dataValue: '5' },
];
