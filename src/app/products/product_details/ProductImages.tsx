import { useState } from 'react';

interface ProductProps {
    src: string;
    alt: string;
}

function ProductImages() {
    const [selectedImage, setSelectedImage] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    const images: ProductProps[] = [
        { src: '/images/products/p1_sm.svg', alt: 'product 1' },
        { src: '/images/products/p2_sm.svg', alt: 'product 2' },
        { src: '/images/products/p3_sm.svg', alt: 'product 3' },
        { src: '/images/products/p4_sm.svg', alt: 'product 4' },
    ];

    return (
        <>
            <div className="col-span-1">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`cursor-pointer ${index === selectedImage ? 'border-1 transform scale-105' : ''
                            }`}
                    >
                        <img
                            src={image.src}
                            width={60}
                            height={40}
                            alt={image.alt}
                            className="me-auto rounded mb-2"
                        />
                    </div>
                ))}
            </div>
            <div className="col-span-9">
                <div className="mx-5">
                    <img
                        src={images[selectedImage].src.replace('p1.svg', '.svg')}
                        width={400}
                        height={400}
                        alt={images[selectedImage].alt}
                        className="rounded-lg w-full"
                    />
                </div>
            </div>
        </>


    );
}

export default ProductImages;

