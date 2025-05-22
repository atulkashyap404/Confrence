import { MessageCircle } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section id="contact" className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-kesari mb-8">Contact Us</h1>

        <div className="rounded-xl shadow-lg border border-border bg-background p-6 space-y-6 text-left">
          <div>
            <h2 className="text-lg font-semibold">Address:</h2>
            <p>
              Centre for Nanosciences, Department of Chemical Engineering, Indian Institute of Technology Kanpur,<br/>
              Kalyanpur, Kanpur, Uttar Pradesh, India, Pin code-208016
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Contact Person:</h2>
            <p className="font-medium">Mr. Yogesh R.G. Singh</p>
            <p className="flex items-center gap-2">
              Contact: 8737074576 <MessageCircle className="w-5 h-5 text-green-600" /> (available on WhatsApp)
            </p>
          </div>

          <div>
            <p className="font-medium">Dr. Prerna Sinha</p>
            <p className="flex items-center gap-2">
              Contact: 9936526009 <MessageCircle className="w-5 h-5 text-green-600" /> (available on WhatsApp)
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Email:</h2>
            <p>contact@trips2025.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
