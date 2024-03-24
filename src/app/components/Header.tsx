import Link from "next/link";
import Image from "next/image"; // Import Image component

const Header = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-amber-900">
            <div>
                {/* Gunakan komponen Image */}
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <ul className="flex list-none m-0 p-0">
                <li className="mr-4">
                    <Link href="/">
                        <div className=" text-white hover:text-black cursor-pointer">Home</div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/about">
                        <div className=" text-white hover:text-black cursor-pointer">About Us</div>
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/services">
                        <div className=" text-white hover:text-black cursor-pointer">Services</div>
                    </Link>
                </li>
                <li>
                    <Link href="/Teams">
                        <div className=" text-white hover:text-black cursor-pointer">Teams</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
