import React from "react";
import Image from "next/image";

const ServicesPage = () => {
    return (
        <div className="pt-9 bg-orange-100 mb-1">
            <h1 className="text-2xl font-extrabold mb-4">Our Services</h1>
            <p className="text-lg">Here are the services we offer:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-2">Roastery beans coffee</h2>
                    <div className="w-full h-80 rounded-lg overflow-hidden">
                        <Image src="/roasting.jpg" alt="Roastery beans coffee" layout="responsive" width={500} height={400} />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-2">Selling coffee equipment</h2>
                    <div className="w-full h-80 rounded-lg overflow-hidden">
                        <Image src="/sellingcoffee.jpg" alt="Selling coffee equipment" layout="responsive" width={500} height={400} />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-2">Consultant coffee</h2>
                    <div className="w-full h-80 rounded-lg overflow-hidden">
                        <Image src="/consultantcoffee.jpg" alt="Consultant coffee" layout="responsive" width={500} height={400} />
                    </div>
                </div>
                {/* Tambahkan layanan lainnya di sini */}
            </div>
        </div>
    );
}

export default ServicesPage;
