import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function OrganizingCommittee() {
  return (
    <>
      <section
        id="committee"
        className="py-16 px-4 md:px-10 lg:px-20 bg-muted/50 text-muted-foreground"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl font-bold text-kesari mb-4">Patron</h1>
              <Card className="shadow-md border border-border bg-white">
                <CardContent className="p-6">
                  <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
                    <Image
                      src="/committee/Prof. Manindra Agarwal.jpg"
                      alt="Prof. Manindra Agrawal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2"></h2>
                  <p className="font-medium">Prof. Manindra Agrawal</p>
                  <p>Director, IIT Kanpur</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-kesari mb-4">
                Chairperson
              </h1>
              <Card className="shadow-md border border-border bg-white">
                <CardContent className="p-6">
                  <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
                    <Image
                      src="/committee/Prof. Ashutosh Sharma.jpg"
                      alt="Prof. Ashutosh Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                  </h2>
                  <p className="font-medium">Prof. Ashutosh Sharma</p>
                  <p>President INSA & Institute Chair Professor, IIT Kanpur</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        id="committee"
        className="py-16 px-4 md:px-10 lg:px-20 bg-muted/50 text-muted-foreground"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-kesari mb-10">
            <span className="text-black">Organizing</span> Committee
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md border border-border bg-background">
              <CardContent className="p-6">
                <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
                  <Image
                    src="/committee/Prof. Yogesh M. Joshi.jpg"
                    alt="Prof. Ashutosh Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">Convenor</h2>
                <p className="font-medium">Prof Yogesh M. Joshi</p>
                <p>Professor, Department of Chemical Engineering, IIT Kanpur</p>
              </CardContent>
            </Card>

            <Card className="shadow-md border border-border bg-background">
              <CardContent className="p-6">
                <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
                  <Image
                    src="/committee/Prof. Sri Sivakumar.jpg"
                    alt="Prof. Yogesh M. Joshi"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">Co-Convenor</h2>
                <p className="font-medium">Prof Sri Sivakumar</p>
                <p>Professor, Department of Chemical Engineering, IIT Kanpur</p>
              </CardContent>
            </Card>
            <Card className="shadow-md border border-border bg-background md:col-span-2">
              <CardContent className="p-6">
                <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
                  <Image
                    src="/committee/Dr. Sandip Patil.jpg"
                    alt="Dr. Sandip Patil"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Organizing Secretary
                </h2>
                <p className="font-medium">Dr Sandip Patil</p>
                <p>Director, E-Spin Nanotech Pvt Ltd</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// export default function OrganizingCommitteePage() {
//   return (
//     <section
//       id="committee"
//       className="py-16 px-4 md:px-10 lg:px-20 bg-muted/50 text-muted-foreground"
//     >
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-kesari mb-10">
//           Organizing Committee
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Card className="shadow-md border border-border bg-background md:col-span-2">
//             <CardContent className="p-6">
//               <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
//                 <Image
//                   src="/committee/Prof. Manindra Agarwal.jpg"
//                   alt="Dr. Sandip Patil"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold mb-2">
//                 Chief Patron
//               </h2>
//               <p className="font-medium">Prof. Manindra Agarwal</p>
//               <p>Director, IIT Kanpur</p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-md border border-border bg-background">
//             <CardContent className="p-6">
//               <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
//                 <Image
//                   src="/committee/Prof. Ashutosh Sharma.jpg"
//                   alt="Prof. Manindra Agarwal"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold mb-2">Honorary Chairperson</h2>
//               <p className="font-medium">Prof. Ashutosh Sharma</p>{" "}
//               <p>President INSA & Institute Chair Professor IIT Kanpur</p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-md border border-border bg-background">
//             <CardContent className="p-6">
//               <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
//                 <Image
//                   src="/committee/Prof. Yogesh M. Joshi.jpg"
//                   alt="Prof. Ashutosh Sharma"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold mb-2">
//                 Convenor
//               </h2>
//               <p className="font-medium">Prof Yogesh M. Joshi</p>
//               <p>Professor, Department of Chemical Engineering, IIT Kanpur</p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-md border border-border bg-background">
//             <CardContent className="p-6">
//               <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
//                 <Image
//                   src="/committee/Prof. Sri Sivakumar.jpg"
//                   alt="Prof. Yogesh M. Joshi"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold mb-2">Co-Convenor</h2>
//               <p className="font-medium">Prof Sri Sivakumar</p>
//               <p>Professor, Department of Chemical Engineering, IIT Kanpur</p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-md border border-border bg-background">
//             <CardContent className="p-6">
//               <div className="w-40 h-40 mx-auto mb-4 relative rounded-lg overflow-hidden">
//                 <Image
//                   src="/committee/Dr. Sandip Patil.jpg"
//                   alt="Prof. Sri Sivakumar"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold mb-2">Organizing Secretary</h2>
//               <p className="font-medium">Dr Sandip Patil</p>
//               <p>Director, E-Spin Nanotech Pvt Ltd</p>
//             </CardContent>
//           </Card>

//         </div>
//       </div>
//     </section>
//   );
// }
