import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HelpContact() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">Help & Contact</h1>

        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I check the weather?",
                a: "Click on the 'Check Weather' button on the homepage and enter your city.",
              },
              {
                q: "Can I use TripClime on mobile?",
                a: "Yes, TripClime is fully responsive and works well on mobile devices.",
              },
              {
                q: "Is TripClime free to use?",
                a: "Yes! It's completely free for personal use.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                <p className="text-gray-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-md p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">Have questions or feedback? Reach out to us below.</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded w-full"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded w-full h-32"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
