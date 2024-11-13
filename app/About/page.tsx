import React from 'react'

const About = () => {
    return (
        <>
            <div className="hero pt-20 px-10">  {/* Padding kiri dan kanan */}
                <div className="card w-full bg-base-100 shadow-lg my-4 transition transform hover:shadow-2xl hover:-translate-y-2">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h3 className="card-title text-primary font-bold text-2xl">Fortis GYM</h3>
                        <p className='text-lg text-justify'>
                        Fortiss Gym adalah tempat yang dirancang untuk membantu Anda mencapai kesehatan dan kebugaran optimal. Dengan fasilitas modern, peralatan kebugaran terkini, serta pelatih profesional yang siap mendampingi, kami berkomitmen untuk menyediakan lingkungan yang mendukung dan inspiratif bagi siapa saja yang ingin hidup lebih sehat. Di Fortiss Gym, kami percaya bahwa kebugaran bukan hanya tentang latihan fisik, tetapi juga tentang perjalanan untuk menemukan versi terbaik dari diri Anda.Fortiss Gym bukan sekadar tempat berolahraga ini adalah tempat di mana Anda bisa menemukan energi baru dan membangun gaya hidup yang lebih baik.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero mt-0 px-4">
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="w-full md:w-1/2 pr-4">
                        <div className="card bg-base-100 shadow-lg my-4 transition transform hover:shadow-2xl hover:-translate-y-2">
                            <div className="card-body flex flex-col items-center justify-center text-center">
                                <h3 className="card-title text-primary font-bold text-2xl">Visi.</h3>
                                    <p className="text-lg text-justify">
                                        Bangun Hidup Sehat & Berkualitas Bersama Fortis GYM.
                                    </p>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan */}
                <div className="w-full md:w-1/2 pl-4">
                    <div className="card bg-base-100 shadow-lg my-4 transition transform hover:shadow-2xl hover:-translate-y-2">
                        <div className="card-body flex flex-col items-center justify-center text-center">
                            <h3 className="card-title text-primary font-bold text-2xl">Misi.</h3>
                            <p className="text-lg text-justify">
                            Membangun Lingkungan Yang Sehat, Kuat, Serta Gaya HIdup Lebih Baik.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default About
