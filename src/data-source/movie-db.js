export const db = {
  languages: [
    { name: 'hindi', checked: true },
    { name: 'english', checked: true },
    { name: 'telugu', checked: true },
    { name: 'punjabi', checked: true }
  ],
  genres: [
    { name: 'action', checked: true },
    { name: 'fantasy', checked: true },
    { name: 'romance', checked: true },
    { name: 'horror', checked: true }
  ],
  movies: [
    {
      id: 1,
      title: 'Superman is flying',
      image:
        'https://i.picsum.photos/id/650/300/200.jpg?hmac=nuRnzrByBYKU6fsTl1xwz3MIpNrNjb0PjLJA5ypiOqU',
      ratings: 3.4,
      genre: 'fantasy',
      length: 119,
      releasedDate: '28/12/2012',
      language: 'Telugu',
      showTime: '21:00',
      price: 300,
      available: true
    },
    {
      id: 2,
      title: 'Batman is watching',
      image:
        'https://i.picsum.photos/id/650/300/200.jpg?hmac=nuRnzrByBYKU6fsTl1xwz3MIpNrNjb0PjLJA5ypiOqU',
      ratings: 3.9,
      genre: 'horror',
      length: 124,
      releasedDate: '14/7/2014',
      language: 'English',
      showTime: '15:00',
      price: 370,
      available: true
    },
    {
      id: 3,
      title: 'Ashwins',
      image:
        'https://i.picsum.photos/id/650/300/200.jpg?hmac=nuRnzrByBYKU6fsTl1xwz3MIpNrNjb0PjLJA5ypiOqU',
      ratings: 3.9,
      genre: 'horror',
      length: 124,
      releasedDate: '14/7/2014',
      language: 'English',
      showTime: '15:00',
      price: 370,
      available: true
    }
  ]
}
