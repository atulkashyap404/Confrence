export default function HowToReachPage() {
  return (
    <section
      id="howtoreach"
      className="py-16 px-4 md:px-10 lg:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-kesari mb-10">
          <span className="text-black">How to Reach</span> IIT Kanpur
        </h1>

        <p className="mb-8 text-lg text-center">
          Pick-up and drop-off service from the airport and railway station will
          be arranged by the <strong>TRIPS 2025 Team</strong>!
        </p>

        <div className="grid grid-cols-1 gap-6">
          {/* AIR ARRIVAL SECTION */}
          <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="p-6 text-left space-y-6">
              <h2 className="text-2xl font-bold text-center text-black">A. Arrival by Air</h2>

              {/* Kanpur Airport */}
              <div>
                <h3 className="text-lg font-bold">1. Kanpur Airport (KNU)</h3>
                <p>
                  Kanpur has a domestic airport with limited flight connectivity,
                  primarily serving cities like Delhi, Mumbai, Bengaluru, and
                  Hyderabad. While options may be fewer, it is the most convenient
                  mode of travel for those who find a suitable direct flight.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Distance:</strong> ~25 km</li>
                  <li><strong>Travel Time:</strong> ~1 hour</li>
                  <li><strong>Taxi Fare:</strong> ₹1200–₹1500</li>
                  <li>Ola/Uber services are available.</li>
                </ul>

                {/* Flight Table */}
                <div className="overflow-x-auto mt-4">
                  <h4 className="text-md font-semibold mb-2">Flights to Kanpur</h4>
                  <table className="min-w-full table-auto border border-collapse border-gray-300 dark:border-gray-600">
                    <thead className="bg-gray-200 dark:bg-gray-700">
                      <tr>
                        <th className="border px-4 py-2">S. No.</th>
                        <th className="border px-4 py-2">Flight</th>
                        <th className="border px-4 py-2">From</th>
                        <th className="border px-4 py-2">Arrival Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-4 py-2">1</td><td className="border px-4 py-2">IndiGo 6E5396</td><td className="border px-4 py-2">New Delhi (DEL)</td><td className="border px-4 py-2">14:14</td></tr>
                      <tr><td className="border px-4 py-2">2</td><td className="border px-4 py-2">IndiGo 6E824</td><td className="border px-4 py-2">Mumbai (BOM)</td><td className="border px-4 py-2">15:10</td></tr>
                      <tr><td className="border px-4 py-2">3</td><td className="border px-4 py-2">IndiGo 6E307</td><td className="border px-4 py-2">Bengaluru (BLR)</td><td className="border px-4 py-2">12:06</td></tr>
                      <tr><td className="border px-4 py-2">4</td><td className="border px-4 py-2">IndiGo 6E6817</td><td className="border px-4 py-2">Hyderabad (HYD)</td><td className="border px-4 py-2">10:53</td></tr>
                    </tbody>
                  </table>

                  <h4 className="text-md font-semibold mt-6 mb-2">Flights from Kanpur</h4>
                  <table className="min-w-full table-auto border border-collapse border-gray-300 dark:border-gray-600">
                    <thead className="bg-gray-200 dark:bg-gray-700">
                      <tr>
                        <th className="border px-4 py-2">S. No.</th>
                        <th className="border px-4 py-2">Flight</th>
                        <th className="border px-4 py-2">To</th>
                        <th className="border px-4 py-2">Departure Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-4 py-2">5</td><td className="border px-4 py-2">IndiGo 6E2192</td><td className="border px-4 py-2">New Delhi (DEL)</td><td className="border px-4 py-2">15:08</td></tr>
                      <tr><td className="border px-4 py-2">6</td><td className="border px-4 py-2">IndiGo 6E308</td><td className="border px-4 py-2">Bengaluru (BLR)</td><td className="border px-4 py-2">13:10</td></tr>
                      <tr><td className="border px-4 py-2">7</td><td className="border px-4 py-2">IndiGo 6E6819</td><td className="border px-4 py-2">Hyderabad (HYD)</td><td className="border px-4 py-2">11:30</td></tr>
                      <tr><td className="border px-4 py-2">8</td><td className="border px-4 py-2">IndiGo 6E827</td><td className="border px-4 py-2">Mumbai (BOM)</td><td className="border px-4 py-2">16:01</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Lucknow Airport */}
              <div>
                <h3 className="text-lg font-bold">2. Lucknow Airport (LKO – Chaudhary Charan Singh International Airport)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Located approximately 90 km from IIT Kanpur.</li>
                  <li>Offers direct flights to all major Indian cities.</li>
                  <li><strong>Travel Time:</strong> ~2.5–3 hours by road</li>
                </ul>
              </div>

              {/* Delhi Airport */}
              <div>
                <h3 className="text-lg font-bold">3. Delhi Airport (DEL – Indira Gandhi International Airport)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Major international hub with connections across India and the world.</li>
                  <li>Take a connecting flight to Kanpur or Lucknow, or travel by train to Kanpur.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TRAIN ARRIVAL SECTION */}
          <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="p-6 text-left space-y-4">
              <h2 className="text-2xl font-bold text-center text-black">B. Arrival by Train</h2>
              <div>
                <h3 className="text-lg font-bold">1. Kanpur Central Railway Station (CNB)</h3>
                <p>
                  One of the busiest and most important railway stations in India,
                  located on the Delhi-Kolkata rail corridor. Well-connected with
                  regular express and superfast trains to all major cities.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Distance:</strong> ~16 km</li>
                  <li><strong>Travel Time:</strong> ~40 minutes</li>
                  <li><strong>Taxi Fare:</strong> ₹500</li>
                  <li><strong>Auto Rickshaw Fare:</strong> ₹250</li>
                  <li>Exit from Platform 1 (Cantonment Side) recommended.</li>
                  <li>Ride Options: Ola/Uber are available in the city.</li>
                  <li><strong>Note:</strong> Pick-up and drop-off services will be arranged by the TRIPS 2025 team.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ARRIVAL ON CAMPUS */}
          <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="p-6 text-left space-y-4">
              <h2 className="text-2xl font-bold text-center text-kesari">
                <span className="text-black">Arrival at</span> IIT Kanpur Campus
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>All guests should arrive at the Main Gate of IIT Kanpur.</li>
                <li>Inform the security personnel of your visit at the gate checkpoint.</li>
                <li>Share the Summit details and your residence address provided by the TRIPS 2025 Team in advance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









// export default function HowToReachPage() {
//   return (
//     <section id="howtoreach" className="py-16 px-4 md:px-10 lg:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-kesari mb-10"><span className="text-black">How to Reach</span> IIT Kanpur</h1>

//         <div className="grid grid-cols-1 gap-6">
//           <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
//             <div className="p-6 text-left space-y-4">
//               <h2 className="text-2xl font-bold text-center text-black">A. Arrival by Air</h2>

//               <div>
//                 <h3 className="text-lg font-bold">1. Lucknow Airport (LKO – Chaudhary Charan Singh International Airport)</h3>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>Located approximately 90 km from IIT Kanpur, Lucknow is the nearest international airport with direct flights to all major Indian cities.</li>
//                   <li><span className="font-semibold">Travel Time to IIT Kanpur:</span> ~2.5 hours by road</li>
//                   <li><span className="font-semibold">Taxi Fare:</span> ₹2500 (Sedan), ₹1600 (Ola Outstation)</li>
//                   <li><span className="font-semibold">Travel Tip:</span> Prepaid taxis and Ola Outstation cabs are available at the airport exit.</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-bold">2. Kanpur Airport (KNU)</h3>
//                 <p>Kanpur has a domestic airport with limited flight connectivity. It is the most convenient option if a suitable flight is available.</p>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li><span className="font-semibold">Distance to IIT Kanpur:</span> ~25 km</li>
//                   <li><span className="font-semibold">Travel Time:</span> ~1 hour</li>
//                   <li><span className="font-semibold">Taxi Fare:</span> ₹1200–₹1500</li>
//                   <li>Ola/Uber services are available.</li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-lg font-bold">3. Delhi Airport (DEL – Indira Gandhi International Airport)</h3>
//                 <p>Delhi is a major international hub with connections to all Indian cities and key global destinations. Distance to Kanpur: ~450 km</p>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>Take a connecting flight to Kanpur or Lucknow.</li>
//                   <li>Trains from Delhi to Kanpur are frequent and reliable.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
//             <div className="p-6 text-left space-y-4">
//               <h2 className="text-2xl font-bold text-center text-black">B. Arrival by Train</h2>

//               <div>
//                 <h3 className="text-lg font-bold">1. Kanpur Central Railway Station (CNB)</h3>
//                 <ul className="list-disc list-inside space-y-1">
//                   <li>One of the busiest stations in India, well-connected via the Delhi–Kolkata rail corridor.</li>
//                   <li>Exit from Platform 1 (Cantonment Side) for easier access to transport.</li>
//                   <li><span className="font-semibold">Distance to IIT Kanpur:</span> ~16 km</li>
//                   <li><span className="font-semibold">Travel Time:</span> ~40 minutes</li>
//                   <li><span className="font-semibold">Taxi Fare:</span> ₹500</li>
//                   <li><span className="font-semibold">Auto Rickshaw Fare:</span> ₹250</li>
//                   <li>Ride Options: Ola/Uber services are available in Kanpur city.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
//             <div className="p-6 text-left space-y-4">
//               <h2 className="text-2xl font-bold text-center text-kesari"><span className="text-black">Arrival at</span> IIT Kanpur Campus</h2>
//               <ul className="list-disc list-inside space-y-1">
//                 <li>All guests should arrive at the Main Gate of IIT Kanpur.</li>
//                 <li>At the gate, you’ll encounter a security checkpoint. Please inform the security personnel of your visit.</li>
//                 <li>Share the Summit details and the residence address, which will be provided in advance by a member of the TRIPS 2025 Team.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
