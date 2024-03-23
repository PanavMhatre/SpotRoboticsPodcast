import React from 'react';

function Post(props: { imageUrl: any; title: any; description: any; author: any; }) {
    const { imageUrl, title, description, author } = props;

    return (
        <div className="max-w-full mx-auto mt-10 ml-10 mr-10">
            <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start w-full">

                <div className="relative w-48 h-48 flex-shrink-0">
                    <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={imageUrl} alt="Post"/>
                </div>

                <div className="flex flex-col gap-2 py-2">

                    <p className="text-2xl font-bold">{title}</p>

                    <p className="text-gray-500 w-full">{description}</p>

                    <span className="flex items-center justify-start text-gray-500">
                        <a href="#">By {author}</a>
                    </span>

                </div>

            </div>

        </div>
    );
}

export default Post;
