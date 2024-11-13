import { EventCard } from '@/components/Card/eventCard';

export default function Event() {
  const events = [
    {
      imageSrc: '/images/event_images/event1.jpg',
      title: 'Yoga for Beginners',
      description: 'Bergabunglah dengan sesi yoga kami untuk meningkatkan fleksibilitas Anda dan mengurangi stres!',
      date: '14 November 2024',
    },
    {
      imageSrc: '/images/event_images/event2.jpg',
      title: 'Strength Training Workshop',
      description: 'Pelajari dasar-dasar latihan kekuatan dengan pelatih ahli kami!',
      date: '15 November 2024',
    },
    {
      imageSrc: '/images/event_images/event3.jpg',
      title: 'Charity Fitness Marathon',
      description: 'Maraton bagi komunitas lokal untuk menggalang dana bagi badan amal setempat',
      date: '20 November 2024',
    },
    {
      imageSrc: '/images/event_images/event4.jpg',
      title: 'Sunrise Yoga Session',
      description: 'Kelas yoga saat matahari terbit di lokasi yang indah',
      date: '25 November 2024',
    },
    {
      imageSrc: '/images/event_images/event5.jpg',
      title: 'Community Bike Ride',
      description: 'Jelajahi area ini dengan sepeda dan temui pesepeda lain',
      date: '30 November 2024',
    },
    {
      imageSrc: '/images/event_images/event6.jpg',
      title: 'Healthy Living Seminar',
      description: 'Seminar tentang hidup sehat',
      date: '5 Desember 2024',
    },
    {
      imageSrc: '/images/event_images/event7.jpg',
      title: 'New Year’s Fitness Resolution Bootcamp',
      description: 'Bootcamp untuk memulai resolusi Tahun Baru',
      date: '1 Januari 2025',
    },
    {
      imageSrc: '/images/event_images/event8.jpg',
      title: 'Parent-Child Fitness Challenge',
      description: 'Tantangan fitness yang melibatkan orang tua dan anak',
      date: '10 Januari 2025',
    },
    {
      imageSrc: '/images/event_images/event9.jpg',
      title: 'Push-Up Contest',
      description: 'Kontes untuk melihat siapa yang dapat melakukan push-up terbanyak',
      date: '15 Januari 2025',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-3xl font-bold text-black text-center mb-8">Upcoming Events at Fortis Gym</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard 
            key={index} 
            imageSrc={event.imageSrc} 
            title={event.title} 
            description={event.description} 
            date={event.date} 
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600">Stay tuned for more exciting events!</p>
      </div>
    </div>
  );
}
