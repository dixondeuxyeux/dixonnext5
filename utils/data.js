import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'Martin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Joseph',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Belle Isle Hipsters',
      slug: 'belle-isle-hipsters',
      category: 'Belle Isle',
      image: '/images/belleisleScooter2.png',
      isFeatured: true,
      featuredImage: '/images/banner4.jpg',
      price: 350,
      surface: 'Photo Luster',
      rating: 4.5,
      numReviews: 10,
      countInStock: 22,
      description: 'Photographs from the Belle Isle, Detroit series',
    },
    {
      name: 'Ethiopia Sunrise',
      slug: 'ethiopia-sunrise',
      category: 'Kingdom of Original Man',
      image: '/images/Translucent-Dress.jpg',
      // isFeatured: true,
      // featuredImage: '/images/banner8.jpg',
      price: 350,
      surface: 'Photo Matte',
      rating: 4.5,
      numReviews: 10,
      countInStock: 22,
      description: 'Photographs from the Kingdom of Original Man Monograph',
    },
    {
      name: 'Iceland Glacier',
      slug: 'iceland-glacier',
      category: 'Distant Travels',
      image: '/images/langjoskull-glacier2.png',
      isFeatured: true,
      featuredImage: '/images/banner6.jpg',
      price: 350,
      surface: 'Metallic Satin',
      rating: 4.5,
      numReviews: 10,
      countInStock: 22,
      description: 'Photographs from the Distant Travels Monograph',
    },
    {
      name: 'The Golden Triangle',
      slug: 'the-golden-triangle',
      category: 'Small World',
      image: '/images/veranasi-ghats.jpg',
      price: 350,
      surface: 'Photo Luster',
      rating: 4.5,
      numReviews: 10,
      countInStock: 22,
      description: 'Photographs from the Small World Monograph',
    },
    {
      name: 'Street Sweeper',
      slug: 'street-sweeper',
      category: 'Kingdom of Original Man',
      image: '/images/street-sweeper.jpg',
      price: 350,
      surface: 'Metallic Satin',
      rating: 4.5,
      numReviews: 10,
      countInStock: 22,
      description: 'Photographs from the Kingdom of Original Man Monograph',
    },
    {
      name: 'Rasta Mural',
      slug: 'rasta-mural',
      category: 'Dakar Noir',
      image: '/images/rsta-graf.jpg',
      price: 350,
      surface: 'Photo Luster',
      rating: 4.5,
      numReviews: 10,
      countInStock: 22,
      description: 'Photographs from the Dakar Noir Monograph',
    },
  ],
}

export default data