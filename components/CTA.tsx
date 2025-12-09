export default function CTA() {
  const emailLink = 'mailto:patrick.federi@ergon.ch?subject=Pragmatic UX Design Inquiry&body=Hello Patrick,%0D%0A%0D%0AI would like to discuss how we can implement pragmatic UX Design principles in my project.%0D%0A%0D%0ABest regards'

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-primary/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 sm:p-6 md:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Need Help Implementing These Principles?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
            We'd love to help you apply these pragmatic UX Design principles to your project. Let's work together to create better user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={emailLink}
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Get in Touch
            </a>
            <a
              href="/about"
              className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-primary/30 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:scale-105 text-sm sm:text-base"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
