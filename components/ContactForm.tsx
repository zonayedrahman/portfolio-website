"use client";

import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import "@/index.css";

const ContactForm = () => {
    const [sent, setSent] = useState(false);
    const form = useRef(null);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const sendEmail = (data: any) => {
        console.log("sending email", data);
        emailjs
            .sendForm("service_9t8lgmj", "template_4wf4jrk", form.current!, {
                publicKey: "_N0B8Mxk3VijOLpDz",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setSent(true);
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );
    };

    const onSubmit = async (data: any) => {
        // const interval = setInterval(() => {}, 1000);
        try {
            await new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });
            // throw new Error("haha error");
            console.log("data", data);
            sendEmail(data);
        } catch (error: any) {
            setError("root", { message: error.message });
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className=" h-full flex flex-col"
        >
            <div className="contact-groups">
                <div className="h-full w-full flex flex-col gap-2">
                    <input
                        {...register("first_name", {
                            required: "First Name is required!",
                            minLength: {
                                value: 2,
                                message:
                                    "First Name must be at least 2 characters",
                            },
                        })}
                        type="text"
                        placeholder="First Name"
                        className="form-input"
                    />
                    {errors.first_name && (
                        <p className="pl-4 pt-2 ">
                            {errors.first_name.message?.toString()}
                        </p>
                    )}
                </div>
                <div className="h-full w-full">
                    <input
                        {...register("last_name", {
                            required: "Last Name is required!",
                        })}
                        type="text"
                        placeholder="Last Name"
                        className="form-input"
                    />
                    {errors.last_name! && (
                        <p className="pl-4 pt-4 ">
                            {errors.last_name.message?.toString()}
                        </p>
                    )}
                </div>
            </div>
            <div className="contact-groups">
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="form-input"
                />
                <input
                    {...register("phone_number")}
                    type="text"
                    placeholder="Phone Number"
                    className="form-input"
                />
            </div>

            <textarea
                {...register("message")}
                placeholder="Message"
                className=" h-80  bg-white bg-opacity-10 border rounded-small p-4 placeholder:text-white text-lg resize-none hover:border-primary focus:outline-none focus:border focus:border-secondary focus:ring-2 focus:ring-secondary focus:ring-opacity-100    "
            ></textarea>

            <Button
                disabled={isSubmitting}
                type="submit"
                className="w-40 h-20 mt-6 bg-white rounded-none text-black text-[1.2em] font-extrabold hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out"
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {errors.root && <p>{errors.root.message}</p>}
            {sent && <p className="pt-4">Message sent successfully!</p>}
        </form>
    );
};

export default ContactForm;
