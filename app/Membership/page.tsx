import React from 'react'

function PackageCard(props: { title: any; price: any; oldPrice: any; benefits: any; }) {
  const { title, price, oldPrice, benefits } = props;

  return (
    <div className="card bg-base-100 w-80 shadow-x2 p-6 mb-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold text-center mb-4">{title}</h2>
        <p className="text-lg font-semibold text-red-500 text-center">
          {price} <span className="line-through text-gray-500 text-base">{oldPrice}</span>
        </p>
        <ul className="text-white-700 list-disc pl-5 space-y-2">
          {benefits.map((benefit: any, index: any) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <div className="card-actions justify-center mt-4">
          <button className="py-2 px-6 text-lg bg-yellow-500 hover:bg-red-600 text-black font-semibold rounded">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

function Membership() {
  return (
    <main className="bg-white flex justify-center items-center min-h-screen p-6 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PackageCard
          title="Paket Basic"
          price="Rp225.000/bulan"
          oldPrice="Rp300.000/bulan"
          benefits={[
            "Akses terbatas ke gym dan fasilitas",
            "Gratis 1 sesi personal training per bulan"
          ]}
        />
        <PackageCard
          title="Paket Premium"
          price="Rp300.000/bulan"
          oldPrice="Rp500.000/bulan"
          benefits={[
            "Akses tak terbatas ke gym dan fasilitas",
            "Gratis 4 sesi personal training per bulan",
            "Akses kelas yoga, pilates, Zumba"
          ]}
        />
        <PackageCard
          title="Paket Platinum"
          price="Rp400.000/bulan"
          oldPrice="Rp800.000/bulan"
          benefits={[
            "Akses tak terbatas ke gym dan fasilitas",
            "Gratis 8 sesi personal training per bulan",
            "Akses kelas yoga, pilates, Zumba",
            "Gratis konsultasi gizi"
          ]}
        />
      </div>
    </main>
  );
}


  

export default Membership