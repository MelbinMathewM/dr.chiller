import React from "react";

type ProductCardProps = {
    title: string;
    image: string;
    description: string;
    points: string[];
};

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    image,
    description,
    points,
}) => {
    return (
        <div className="bg-white shadow-lg border border-gray-300 bg-gray-100 dark:bg-gray-900 dark:border-gray-800 rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-2 w-full">
            {/* Image */}
            <div className="">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col justify-center text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">{title}</h3>
                <p className="text-gray-600 text-base mb-3 text-gray-700 dark:text-gray-300">{description}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    {points.map((point, idx) => (
                        <li key={idx}>
                            <span className="font-medium">
                                {point.split(":")[0]}
                            </span>
                            {point.includes(":") && `: ${point.split(":")[1]}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const WaterChillersSubSection: React.FC = () => {
    return (
        <div className="p-6 sm:p-16 bg-white dark:bg-black">
            <h2 className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-8 text-center">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ProductCard
                    title="Water Cooler"
                    image="/water-cooler.png"
                    description="Compact and efficient cooling unit designed for domestic and light commercial use — ideal for villas, offices and workspaces that need a constant supply of chilled water."
                    points={[
                        "Energy-efficient cooling",
                        "Low maintenance",
                        "Eco-friendly design",
                    ]}
                />

                <ProductCard
                    title="Heat Pump"
                    image="/heat-pump.webp"
                    description="Versatile system that provides both cooling and heating all year round. Engineered for high efficiency, it ensures comfortable indoor temperatures while keeping energy costs low."
                    points={[
                        "Dual heating & cooling",
                        "Cost-effective operation",
                        "Long-lasting durability",
                    ]}
                />
            </div>
        </div>
    );
};

export default WaterChillersSubSection;
