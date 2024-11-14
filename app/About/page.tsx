import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      {/* About Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">About Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-black">Fortis GYM</h3>
            <p className="text-lg text-justify text-black">
              Fortiss Gym adalah tempat yang dirancang untuk membantu Anda mencapai kesehatan dan kebugaran optimal.
              Dengan fasilitas modern, peralatan kebugaran terkini, serta pelatih profesional yang siap mendampingi,
              kami berkomitmen untuk menyediakan lingkungan yang mendukung dan inspiratif bagi siapa saja yang ingin hidup lebih sehat.
              Di Fortiss Gym, kami percaya bahwa kebugaran bukan hanya tentang latihan fisik, tetapi juga tentang perjalanan untuk menemukan versi terbaik dari diri Anda.
              Fortiss Gym bukan sekadar tempat berolahraga ini adalah tempat di mana Anda bisa menemukan energi baru dan membangun gaya hidup yang lebih baik.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image src="/images/about_images/about_us.jpg" alt="Gym Image" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around mt-8 space-y-4 md:space-y-0 pt-4">
          <div className="md:w-1/2 text-center text-black">
            <h3 className="text-xl font-semibold mb-2">Visi</h3>
            <p>Bangun Hidup Sehat & Berkualitas Bersama Fortis GYM.</p>
          </div>
          <div className="md:w-1/2 text-center text-black">
            <h3 className="text-xl font-semibold mb-2">Misi</h3>
            <p>Membangun Lingkungan Yang Sehat, Kuat, Serta Gaya Hidup Lebih Baik.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12 pt-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-gray-100 text-black shadow-lg">
            <div className="card-body items-center text-center">
              <Image src="/images/about_images/whyChooseUs1.webp" alt="Reason 1" width={200} height={200} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="card-title mt-4">Profesional Trainers</h3>
              <p>Pelatih yang berpengalaman dan profesional siap membantu mencapai tujuan kebugaran Anda.</p>
            </div>
          </div>
          <div className="card bg-gray-100 text-black shadow-lg">
            <div className="card-body items-center text-center">
              <Image src="/images/about_images/whyChooseUs2.jpg" alt="Reason 2" width={200} height={200} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="card-title mt-4">Modern Equipment</h3>
              <p>Fasilitas dan peralatan modern untuk mendukung berbagai jenis latihan Anda.</p>
            </div>
          </div>
          <div className="card bg-gray-100 text-black shadow-lg">
            <div className="card-body items-center text-center">
              <Image src="/images/about_images/whyChooseUs3.jpg" alt="Reason 3" width={200} height={200} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="card-title mt-4">Motivating Environment</h3>
              <p>Suasana gym yang inspiratif dan penuh motivasi untuk Anda berlatih.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="mb-12 pt-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-gray-100 text-black shadow-lg">
            <div className="card-body items-center text-center">
              <span className="text-4xl">📞</span>
              <h3 className="card-title mt-4">Phone</h3>
              <p>+62 123 4567 890</p>
            </div>
          </div>
          <div className="card bg-gray-100 text-black shadow-lg">
            <div className="card-body items-center text-center">
              <span className="text-4xl">📧</span>
              <h3 className="card-title mt-4">Email</h3>
              <p>contact@fortisgym.com</p>
            </div>
          </div>
          <div className="card bg-gray-100 text-black shadow-lg">
            <div className="card-body items-center text-center">
              <span className="text-4xl">📍</span>
              <h3 className="card-title mt-4">Location</h3>
              <p>Makassar, Sulawesi Selatan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
