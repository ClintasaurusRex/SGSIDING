
import useEmailjs from "../hooks/useEmailjs";
import "../components/styles/Contact.css";

export default function Contact() {
  const { isSubmitting, status, handleSubmit } = useEmailjs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-md mx-auto">
        {status.message && (
          <div 
            className={`mb-4 p-4 rounded ${
              status.type === "success" 
                ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}
         <div className='contact-card' >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xl font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xl font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
} 