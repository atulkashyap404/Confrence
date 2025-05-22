import CountdownTimer from "@/components/ui/CountdownTimer";






{
  /* Right Column */
}
<motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-background/90 dark:bg-background/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-border">
               {/* <Image
                src="/pexels-photo-2774556.webp"
                alt="Tech Conference"
                width={500}
                height={500}
                className="rounded-lg h-64 w-full object-cover mb-8"
              /> */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">COUNTDOWN TO TRIPS 2025</h3>
                <CountdownTimer targetDate="2025-08-21T09:00:00" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">100+</div>
                  <div className="text-sm text-muted-foreground">Speakers</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">15+</div>
                  <div className="text-sm text-muted-foreground">Topic</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">5+</div>
                  <div className="text-sm text-muted-foreground">Panel Discussion</div>
                </div>
                <div className="bg-background rounded-lg p-4 text-center border border-border">
                  <div className="text-4xl font-bold text-kesari">2+</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
              </div>
            </div>

            Decorative blurs
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-kesari rounded-full blur-xl z-[-1]" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-kesari/70 rounded-full blur-xl z-[-1]" />
          </motion.div>

