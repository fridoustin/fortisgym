import { EventCardProps } from "./interfaces/eventCardProps";
import Image from 'next/image'

export const EventCard: React.FC<EventCardProps> = ({ imageSrc, title, description, date }) => (
    <div className="card bg-gray-800 text-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        <figure>
            <Image src={imageSrc} alt={title} width={600} height={200} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
            <div className="text-sm text-gray-400 mb-2">{date}</div>
            <h2 className="card-title text-lg font-bold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-warning">Register Now</button>
            </div>
        </div>
    </div>
);