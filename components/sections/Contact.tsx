import ContactForm from "@/components/ContactForm";

import contactImg from "@/assets/contact-img.svg";
import Image from "next/image";

const Contact = () => {
    return (
        // bg-gradient-to-r from-slate-900 to-violet-950
        <div className="h-auto min-h-screen bg-gradient-contact ">
            <div className="h-full w-full flex flex-col md:flex-row flex-nowrap justify-between text-white">
                <div className="left-side  w-full hidden md:flex justify-center items-center">
                    <Image src={contactImg} alt="Contact image" />
                </div>
                <div className="right-side w-full pt-20">
                    <div className="flex flex-col w-[90%] gap-8 p-12">
                        <h1 className="text-[4rem] font-bold pl-4">
                            Get In Touch
                        </h1>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
