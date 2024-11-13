import { PackageCardProps } from "./interfaces/interfacePackage"

export const PackageCard: React.FC<PackageCardProps> = ({title, price, oldPrice, benefits}) => {
    return(
        <div className="card bg-white outline outline-slate-500 w-80 text-black shadow-x2 p-6 mb-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="card-body ">
                <h2 className="card-title text-3xl font-semibold mb-4 flex justify-center items-center">
                    {title}
                </h2>
                <p className="text-lg font-semibold text-red-500 text-center mb-2">
                {price} <span className="line-through text-gray-500 text-base">{oldPrice}</span>
                </p>
                <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
                <div className="card-actions justify-center mt-4">
                    <button className="py-2 px-6 text-lg bg-yellow-500 hover:bg-red-600 text-black font-semibold rounded">Buy Now</button>
                </div>
            </div>
        </div>
    )
}