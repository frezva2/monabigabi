import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-full bg-midnight">
        <div className="flex flex-row w-full">
            <div className="hidden md:flex flex-row w-full mr-5">
                <Image
                    src="/images/Charcuterie.png"
                    alt="Mon Abi Gabi Instagram"
                    width={582}
                    height={530}
                />
            </div>
            <div className="flex flex-col text-white md:w-1/2 justify-center items-start m-10">
                <h2 className="text-4xl text-white font-baskerville text-start">Mon Abi Gabi Chicago</h2>
                <p className="text-sm text-grayish text-start mt-0 italic">CHANGE LOCATION</p>
                <div className="flex flex-col mt-10">
                    <div className="flex flex-row mb-1">
                        <p className="text-sm text-grayish text-start font-outfit">Mon - Thu</p>
                        <p className="text-sm text-grayish text-start font-outfit ml-20">5:00pm - 9:30pm</p>
                    </div>
                    <div className="flex flex-row mb-1">
                        <p className="text-sm text-grayish text-start font-outfit">Fri - Sat</p>
                        <p className="text-sm text-grayish text-start font-outfit ml-23">5:00pm - 10:30pm</p>
                    </div>
                    <div className="flex flex-row mb-1">
                        <p className="text-sm text-grayish text-start font-outfit">Sun Brunch</p>
                        <p className="text-sm text-grayish text-start font-outfit ml-18">10:00am - 2:00pm</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-sm text-grayish text-start font-outfit">Sunday</p>
                        <p className="text-sm text-grayish text-start font-outfit ml-24">5:00pm - 8:30pm</p>
                    </div>
                </div>
                <div className="flex flex-row mt-10">
                    <div>
                        <Image
                            src="/icons/envelope.png"
                            alt="Mon Abi Gabi Instagram"
                            width={25}
                            height={25}
                        />
                    </div>
                    <a href="/contact" className="text-sm text-grayish text-start font-outfit ml-4 mt-1">Contact Us</a>
                </div>
                <div className="flex flex-row mt-3">
                    <div>
                        <Image
                            src="/icons/telephone.png"
                            alt="Mon Abi Gabi Instagram"
                            width={25}
                            height={25}
                        />
                    </div>
                    <p className="text-sm text-grayish text-start font-outfit ml-4 mt-1">773.348.8886</p>
                </div>
                <div className="flex flex-row mt-3">
                    <div>
                        <Image
                            src="/icons/location.png"
                            alt="Mon Abi Gabi Instagram"
                            width={25}
                            height={25}
                        />
                    </div>
                    <div>
                        <p className="text-sm text-grayish text-start font-outfit ml-4 mt-1">2300 N. Lincoln Park West <br/> Chicago, IL 60614</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex flex-row bg-blackish justify-around items-center h-12">
            <div className="flex flex-row justify-center items-center">
                <a href="#" className="text-sm text-grayish text-center font-outfit">Frequent Diner</a>
            </div>
            <div className="flex flex-row justify-center items-center">
                <a href="#" className="text-sm text-grayish text-center font-outfit">Gift Cards</a>
            </div>
            <div className="flex flex-row justify-center items-center">
                <a href="#" className="text-sm text-grayish text-center font-outfit">Employment</a>
            </div>
            <div className="flex flex-row justify-center items-center">
                <a href="#" className="text-sm text-grayish text-center font-outfit">LEYE.COM</a>
            </div>
            <div className="flex flex-row justify-center items-center">
                <a href="#" className="text-sm text-grayish text-center font-outfit">Terms of Use</a>
            </div>
            <div className="flex flex-row justify-center items-center">
                <a href="#" className="text-sm text-grayish text-center font-outfit">Privacy Policy</a>
            </div>
        </div>
        <div className="block md:hidden flex-col">
            <div className="flex flex-row bg-blackish justify-around items-center h-12">
                <div className="flex flex-row justify-center items-center">
                    <a href="#" className="text-sm text-grayish text-center font-outfit">Frequent Diner</a>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <a href="#" className="text-sm text-grayish text-center font-outfit">Gift Cards</a>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <a href="#" className="text-sm text-grayish text-center font-outfit">Employment</a>
                </div>
            </div>
            <div className="flex flex-row bg-blackish justify-around items-center h-12">
                <div className="flex flex-row justify-center items-center">
                    <a href="#" className="text-sm text-grayish text-center font-outfit">LEYE.COM</a>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <a href="#" className="text-sm text-grayish text-center font-outfit">Terms of Use</a>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <a href="#" className="text-sm text-grayish text-center font-outfit">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
