"use client"
import { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"; //library
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icon
import { Phone } from "lucide-react";

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [selectedService, setSelectedService] = useState("Web Development");
    const [price, setPrice] = useState("100$");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Specify the parameter type as string
    const handleServiceChange = (service: string) => {
        setSelectedService(service);
        switch (service) {
            case "Web Development":
                setPrice("100$");
                break;
            case "UI/UX Design":
                setPrice("40$");
                break;
            case "Consultation":
                setPrice("Free");
                break;
            default:
                setPrice("0$");
        }
    };

    // Specify the parameter type as React.FormEvent<HTMLFormElement>
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setShowAlert(true); // Show the alert

        // Reset form
        setFormData({
            name: "",
            email: "",
            message: "",
        });

        // Hide alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    return (
        <main>
            <Header />
            <div className="flex flex-col items-center py-10 px-5 bg-gradient-to-b from-[#060338] to-[#1a2335] text-[#e5e7eb]">
                <h2 className="text-3xl font-bold text-[#fbbf24] mb-6">Get in Touch</h2>

                {/* Quick Contact Links */}
                <div className="flex gap-4 mb-6">
                    <a  href="tel:03472824847" className="flex items-center hover:text-[#fbbf24]">
                        <Phone color="#f5f5f5" className="mr-2 " /> 03472824847
                    </a>
                    <p className="flex items-center hover:text-[#fbbf24]">
                        <FaEnvelope className="mr-2" />{" "}
                        <a href="mailto:afzalahsankhan283@gmail.com" className="text-[#fbbf24]">
                            afzalahsankhan283@gmail.com
                        </a>
                    </p>
                    <a
                        href="https://www.linkedin.com/in/ahsan-khan-6a8b902b4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#fbbf24]"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                </div>

                {/* Alert */}
                {showAlert && (
                    <Alert className="bg-green-600">
                        <AlertTitle>Thank you for reaching us!</AlertTitle>
                        <AlertDescription>
                            You will be served shortly.
                        </AlertDescription>
                    </Alert>
                )}

                {/* Contact Form */}
                <form className="w-full max-w-md bg-[#141415] p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <label className="block text-sm font-bold mb-2">
                        Name
                        <input
                            type="text"
                            className="w-full p-2 rounded bg-[#1a1b1f] text-[#e5e7eb]"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </label>

                    <label className="block text-sm font-bold mb-2">
                        Email
                        <input
                            type="email"
                            className="w-full p-2 rounded bg-[#1a1b1f] text-[#e5e7eb]"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </label>

                    <label className="block text-sm font-bold mb-2">
                        Service
                        <select
                            className="w-full p-2 rounded bg-[#1a1b1f] text-[#e5e7eb]"
                            onChange={(e) => handleServiceChange(e.target.value)}
                            value={selectedService}
                        >
                            <option value="Web Development">Web Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Consultation">Consultation</option>
                        </select>
                    </label>

                    {/* Price Display */}
                    <p className="text-sm mb-4">Estimated Price: <span className="font-bold text-[#fbbf24]">{price}</span></p>

                    <label className="block text-sm font-bold mb-2">
                        Message (Optional)
                        <textarea
                            rows={3}
                            className="w-full p-2 rounded bg-[#1a1b1f] text-[#e5e7eeb]"
                            placeholder="Write your message here"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-[#fbbf24] text-[#1a1b1f] font-bold py-2 mt-4 rounded hover:bg-[#e5e7eb] transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <Footer />
        </main>
    );
};

export default Contact;
