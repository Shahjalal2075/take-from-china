import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {

    const banners = [
        "/images/banner/home-banner.png",
        "/images/banner/home-banner-2.png",
        "/images/banner/home-banner.png",
        "/images/banner/home-banner-2.png",
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if (current < banners.length - 1) {
            setCurrent(current + 1);
        }
    };

    const prevSlide = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const progressWidth = ((current + 1) / banners.length) * 100;

    return (
        <div className="mt-7 relative w-full">
            {/* Banner Image */}
            <div className="overflow-hidden rounded-2xl">
                <img
                    src={banners[current]}
                    alt={`banner-${current}`}
                    className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-2 mt-2">
                <button
                    onClick={prevSlide}
                    disabled={current === 0}
                    className={` p-1 rounded-full ${current === 0
                        ? "text-gray-300"
                        : "text-gray-500 hover:text-black cursor-pointer"
                        }`}
                >
                    <ChevronLeft
                        size={14}
                    />
                </button>
                <div className="relative w-[180px] h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className="absolute left-0 top-0 h-2 rounded-full bg-black transition-all duration-300"
                        style={{ width: `${progressWidth}%` }}
                    ></div>
                </div>
                <button
                    onClick={nextSlide}
                    disabled={current === banners.length - 1}
                    className={`p-1 rounded-full ${current === banners.length - 1
                        ? "text-gray-300"
                        : "text-gray-500 hover:text-black cursor-pointer"
                        }`}
                >
                    <ChevronRight
                        size={14}
                    />
                </button>
            </div>
        </div>
    );
};

export default Banner;