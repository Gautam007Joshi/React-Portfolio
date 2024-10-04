import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast'; //
import { FiSend } from "react-icons/fi";

const ContactForm = ({ isDarkMode }) => { // Destructure the prop
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is Required";
        if (!formData.email) {
            errors.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message) errors.message = "Message is Required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_7g78uqf",
                    "template_fw84f3o",
                    formData,
                    "-xqiRYnLR_bJ-L9YJ"
                )
                .then((response) => {
                    toast.success("Message Sent Successfully");
                    setFormData({ name: "", email: "", message: "" });
                })
                .catch((error) => { 
                    console.log("FAILED....", error);
                    toast.error("Failed to send message. Please try again later.");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="p-4 lg:w-3/4" id="contact">
            <Toaster />
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex space-x-4">
                    <div className="lg:w-1/2">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className={`mb-8 w-full appearance-none rounded-lg border ${isDarkMode ? 'border-stone-50/30' : 'border-black'} bg-transparent px-3 py-2 text-sm focus:outline-none`} // Updated conditional class
                        />
                        {errors.name && (
                            <p className="text-sm text-rose-800">{errors.name}</p>
                        )}
                    </div>

                    <div className="lg:w-1/2">
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className={`mb-8 w-full appearance-none rounded-lg border ${isDarkMode ? 'border-stone-50/30' : 'border-black'} bg-transparent px-3 py-2 text-sm focus:outline-none`} // Updated conditional class
                        />
                        {errors.email && (
                            <p className="text-sm text-rose-800">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div className="mb-4">
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        placeholder="Message"
                        onChange={handleChange}
                        className={`mb-8 w-full appearance-none rounded-lg border ${isDarkMode ? 'border-stone-50/30' : 'border-black'} bg-transparent px-3 py-2 text-sm focus:outline-none`} // Updated conditional class
                        rows="6"
                    />
                    {errors.message && (
                        <p className="text-sm text-rose-800">{errors.message}</p>
                    )}
                </div>
                
                <button 
                    type="submit" 
                    className={`mb-8 w-full rounded border bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`} 
                    disabled={isSending}
                >
                    <div className="flex items-center justify-center gap-2">
                        {isSending ? "Sending..." : "Send"}
                        <FiSend />
                    </div>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
