"use client";
import { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"; 
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
            <div className="contact-container">
                <h2 className="contact-header">Get in Touch</h2>

                {/* Quick Contact Links */}
                <div className="quick-contact">
                    <a href="tel:03472824847" className="flex items-center hover:text-[#fbbf24]">
                        <Phone color="#f5f5f5" className="mr-2" /> 03472824847
                    </a>
                    <p className="flex items-center hover:text-[#fbbf24]">
                        <FaEnvelope className="mr-2" />
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
                    <Alert>
                        <AlertTitle>Thank you for reaching us!</AlertTitle>
                        <AlertDescription>You will be served shortly.</AlertDescription>
                    </Alert>
                )}

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </label>

                    <label>
                        Service
                        <select
                            onChange={(e) => handleServiceChange(e.target.value)}
                            value={selectedService}
                        >
                            <option value="Web Development">Web Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Consultation">Consultation</option>
                        </select>
                    </label>

                    {/* Price Display */}
                    <p className="price-display">
                        Estimated Price: <span className="price-highlight">{price}</span>
                    </p>

                    <label>
                        Message (Optional)
                        <textarea
                            rows={3}
                            placeholder="Write your message here"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </label>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </main>
    );
};

export default Contact;
