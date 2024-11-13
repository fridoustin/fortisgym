import { PackageCard } from "@/components/Card/packageCard";

export const Membership = () => {
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
};

export default Membership