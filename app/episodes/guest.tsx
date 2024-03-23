import React from "react";
import Image from "next/image";

type GuestProps = {
    image: any;
    name: any;
    fieldOfWork: any;
    link: string;
};

const Guest: React.FC<GuestProps> = ({ image, name, fieldOfWork, link }) => {
    return (
        <div>
            <a href={link} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-10 mt-10">
                <div className="flex flex-col items-center pb-3 mt-5">
                    <Image
                        src={image}
                        width={150}
                        height={50}
                        alt="Picture of the author"
                        className="mb-3 rounded-full"
                        objectFit="cover"
                        quality={100}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {fieldOfWork}
                    </span>
                </div>
            </a>
        </div>
    );
};

export default Guest;
