export default function HowToReachPage() {
  return (
    <section id="howtoreach" className="py-16 px-4 md:px-10 lg:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-kesari mb-10"><span className="text-black">How to Reach</span> IIT Kanpur</h1>

        <div className="grid grid-cols-1 gap-6">
          <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="p-6 text-left space-y-4">
              <h2 className="text-2xl font-bold text-center text-black">A. Arrival by Air</h2>

              <div>
                <h3 className="text-lg font-bold">1. Lucknow Airport (LKO – Chaudhary Charan Singh International Airport)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Located approximately 90 km from IIT Kanpur, Lucknow is the nearest international airport with direct flights to all major Indian cities.</li>
                  <li><span className="font-semibold">Travel Time to IIT Kanpur:</span> ~2.5 hours by road</li>
                  <li><span className="font-semibold">Taxi Fare:</span> ₹2500 (Sedan), ₹1600 (Ola Outstation)</li>
                  <li><span className="font-semibold">Travel Tip:</span> Prepaid taxis and Ola Outstation cabs are available at the airport exit.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold">2. Kanpur Airport (KNU)</h3>
                <p>Kanpur has a domestic airport with limited flight connectivity. It is the most convenient option if a suitable flight is available.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-semibold">Distance to IIT Kanpur:</span> ~25 km</li>
                  <li><span className="font-semibold">Travel Time:</span> ~1 hour</li>
                  <li><span className="font-semibold">Taxi Fare:</span> ₹1200–₹1500</li>
                  <li>Ola/Uber services are available.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold">3. Delhi Airport (DEL – Indira Gandhi International Airport)</h3>
                <p>Delhi is a major international hub with connections to all Indian cities and key global destinations. Distance to Kanpur: ~450 km</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Take a connecting flight to Kanpur or Lucknow.</li>
                  <li>Trains from Delhi to Kanpur are frequent and reliable.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="p-6 text-left space-y-4">
              <h2 className="text-2xl font-bold text-center text-black">B. Arrival by Train</h2>

              <div>
                <h3 className="text-lg font-bold">1. Kanpur Central Railway Station (CNB)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>One of the busiest stations in India, well-connected via the Delhi–Kolkata rail corridor.</li>
                  <li>Exit from Platform 1 (Cantonment Side) for easier access to transport.</li>
                  <li><span className="font-semibold">Distance to IIT Kanpur:</span> ~16 km</li>
                  <li><span className="font-semibold">Travel Time:</span> ~40 minutes</li>
                  <li><span className="font-semibold">Taxi Fare:</span> ₹500</li>
                  <li><span className="font-semibold">Auto Rickshaw Fare:</span> ₹250</li>
                  <li>Ride Options: Ola/Uber services are available in Kanpur city.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="p-6 text-left space-y-4">
              <h2 className="text-2xl font-bold text-center text-kesari"><span className="text-black">Arrival at</span> IIT Kanpur Campus</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>All guests should arrive at the Main Gate of IIT Kanpur.</li>
                <li>At the gate, you’ll encounter a security checkpoint. Please inform the security personnel of your visit.</li>
                <li>Share the Summit details and the residence address, which will be provided in advance by a member of the TRIPS 2025 Team.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
