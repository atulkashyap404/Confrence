import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HowToReachPage() {
  return (
    <section id="howtoreach" className="py-16 px-4 md:px-10 lg:px-20 bg-white text-muted-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-kesari mb-6">Contact Information</h1>
        <Card className="mb-12 shadow-lg border border-border bg-background">
          <CardContent className="p-6 text-base space-y-3">
            <p className="font-semibold text-lg">Department of Civil Engineering</p>
            <p>Indian Institute of Technology Kanpur</p>
            <p>Kanpur, 208016</p>
            <Separator className="my-4" />
            <div className="space-y-1">
              <p className="font-medium">Phone:</p>
              <ul className="list-none space-y-1">
                <li>+91-512-259 7765 (Off.)</li>
                <li>+91-512-259 2011 (Off.)</li>
                <li>+91-7029789302 (Mob.)</li>
              </ul>
            </div>
            <p><strong>Email:</strong> <a href="mailto:h2oclimate.iitk@gmail.com" className="text-kesari hover:underline">h2oclimate.iitk@gmail.com</a></p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-semibold text-kesari mb-6">How to Reach IIT Kanpur</h2>

        <Card className="mb-10 shadow-md border border-border bg-background">
          <CardContent className="p-6 text-base space-y-4 text-left">
            <h3 className="text-xl font-semibold mb-2 text-center">A) Arrival by Air</h3>
            <p><strong>Lucknow Airport (LKO):</strong> Nearest international airport (~90 km). Prepaid taxis or Ola Outstation (~Rs. 1600–2500). Drive time: ~2.5 hours.</p>
            <p><strong>Kanpur Airport (KNU):</strong> Limited flights. ~25 km from IITK. Ola/Uber available. Cost: Rs. 1200–1500.</p>
            <p><strong>Delhi Airport (DEL):</strong> Major international hub. Flights to Kanpur available. Also connected via trains.</p>
          </CardContent>
        </Card>

        <Card className="mb-10 shadow-md border border-border bg-background">
          <CardContent className="p-6 text-base space-y-4 text-left">
            <h3 className="text-xl font-semibold mb-2 text-center">B) Arrival by Train</h3>
            <p><strong>Kanpur Central Railway Station (CNB):</strong> Major junction on Delhi–Kolkata route. Exit from Platform 1 (Cantonment side).</p>
            <p>Distance to IITK: ~16 km. Taxis (~Rs. 500) or auto rickshaws (~Rs. 250) available. Ola/Uber also available. Drive time: ~40 minutes.</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-border bg-background">
          <CardContent className="p-6 text-base space-y-4 text-left">
            <h3 className="text-xl font-semibold mb-2 text-center">Arrival at IIT Kanpur Campus</h3>
            <p>Reach the <strong>main gate</strong> of IIT Kanpur. Stop at the security checkpoint and inform them you are attending the <strong>H2O & Climate Conference</strong> and staying in <strong>VH1/VH2</strong>.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
