import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function OrganizingCommitteePage() {
  return (
    <section id="committee" className="py-16 px-4 md:px-10 lg:px-20 bg-muted/50 text-muted-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-10">Organizing Committee</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-md border border-border bg-background">
            <CardContent className="p-6">
              <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/images/manindra-agarwal.jpg" alt="Prof. Manindra Agarwal" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Chief Patron</h2>
              <p className="font-medium">Prof. Manindra Agarwal</p>
              <p>Director, IIT Kanpur</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border border-border bg-background">
            <CardContent className="p-6">
              <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/images/ashutosh-sharma.jpg" alt="Prof. Ashutosh Sharma" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Honorary Chairperson</h2>
              <p className="font-medium">Prof. Ashutosh Sharma</p>
              <p>President INSA & Institute Chair Professor, IIT Kanpur</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border border-border bg-background">
            <CardContent className="p-6">
              <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/images/yogesh-joshi.jpg" alt="Prof. Yogesh M. Joshi" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Convenor</h2>
              <p className="font-medium">Prof. Yogesh M. Joshi</p>
              <p>Professor, Department of Chemical Engineering, IIT Kanpur</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border border-border bg-background">
            <CardContent className="p-6">
              <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/images/sri-sivakumar.jpg" alt="Prof. Sri Sivakumar" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Co-Convenor</h2>
              <p className="font-medium">Prof. Sri Sivakumar</p>
              <p>Professor, Department of Chemical Engineering, IIT Kanpur</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border border-border bg-background md:col-span-2">
            <CardContent className="p-6">
              <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src="/images/sandip-patil.jpg" alt="Dr. Sandip Patil" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Organizing Secretary</h2>
              <p className="font-medium">Dr. Sandip Patil</p>
              <p>Director, E-Spin Nanotech Pvt Ltd</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-64 relative rounded-xl overflow-hidden">
            <Image src="/images/iitk-campus-1.jpg" alt="IITK Campus 1" fill className="object-cover" />
          </div>
          <div className="w-full h-64 relative rounded-xl overflow-hidden">
            <Image src="/images/iitk-campus-2.jpg" alt="IITK Campus 2" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
