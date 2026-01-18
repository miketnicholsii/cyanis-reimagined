import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import StatCard from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Users,
  Plane
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We deliver accurate, reliable data that you can trust for critical decisions.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Safety is our top priority in every flight operation we conduct.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all client relationships.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'We continuously adopt cutting-edge technology to serve you better.',
  },
];

const certifications = [
  'FAA Part 107 Certified',
  'Fully Insured & Bonded',
  'TRUST Certified',
  'DJI Enterprise Partner',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-light rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
              Pioneering Aerial Innovation in Oklahoma
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Cyanis LLC was founded with a simple mission: to make professional drone 
              services accessible, affordable, and reliable for businesses across Oklahoma.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Drone aerial photography"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                  <div className="flex items-center gap-3">
                    <Plane className="w-8 h-8 text-accent" />
                    <div>
                      <div className="text-2xl font-bold text-foreground">Since 2019</div>
                      <div className="text-sm text-muted-foreground">Serving Oklahoma</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Built on Expertise & Passion
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cyanis LLC emerged from a passion for aviation and a vision to transform how 
                  businesses collect and utilize aerial data. Based in Tulsa, Oklahoma, we've 
                  quickly become a trusted partner for companies seeking professional drone services.
                </p>
                <p>
                  Our team combines years of aviation experience with cutting-edge drone technology 
                  and data processing expertise. We understand that every project is unique, which 
                  is why we take the time to understand your specific needs and deliver tailored solutions.
                </p>
                <p>
                  From construction sites to agricultural fields, from real estate properties to 
                  infrastructure inspections, we've helped countless clients gain valuable insights 
                  from above. Our commitment to safety, precision, and customer satisfaction drives 
                  everything we do.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection>
              <StatCard value="100+" label="Projects Completed" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <StatCard value="50+" label="Happy Clients" />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <StatCard value="10K+" label="Flight Hours" />
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <StatCard value="100%" label="Safety Record" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide businesses with accurate, affordable, and accessible aerial data 
                  solutions that drive informed decision-making and operational efficiency. 
                  We're committed to pushing the boundaries of what's possible with drone 
                  technology while maintaining the highest standards of safety and professionalism.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-card rounded-2xl p-8 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Oklahoma's most trusted drone services provider, recognized for our 
                  technical excellence, innovative solutions, and unwavering commitment to 
                  client success. We envision a future where aerial data is integral to 
                  business operations across every industry.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              These principles guide every decision we make and every service we deliver.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-primary-foreground/70">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">Credentials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Certified & Professional
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We maintain all required certifications and insurance to ensure every 
                operation is conducted safely and legally. Your peace of mind is our priority.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={cert} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Work With Us</h3>
                    <p className="text-muted-foreground">Let's discuss your project</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Whether you're planning a construction project, need agricultural insights, 
                  or require infrastructure inspections, we're here to help.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-accent hover:bg-cyan-dark text-accent-foreground btn-glow">
                    Start a Conversation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Experience the Cyanis difference. Contact us today for a free consultation 
              and discover how we can elevate your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-cyan-dark text-accent-foreground px-8">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="px-8">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
