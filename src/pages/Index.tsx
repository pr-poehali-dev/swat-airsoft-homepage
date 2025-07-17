import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-swat-dark to-swat-DEFAULT overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-tactical-orange rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-tactical-orange/60 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-tactical-orange/40 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-tactical-orange/80 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-swat-DEFAULT/95 backdrop-blur-sm border-b border-tactical-orange/20 sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Icon name="Shield" className="text-tactical-orange drop-shadow-lg" size={36} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-tactical-orange rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-tactical-white tracking-wider">SWAT ARENA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#experience" className="text-tactical-white hover:text-tactical-orange transition-all duration-300 font-medium uppercase tracking-wide">Experience</a>
              <a href="#packages" className="text-tactical-white hover:text-tactical-orange transition-all duration-300 font-medium uppercase tracking-wide">Packages</a>
              <a href="#gallery" className="text-tactical-white hover:text-tactical-orange transition-all duration-300 font-medium uppercase tracking-wide">Gallery</a>
              <a href="#contact" className="text-tactical-white hover:text-tactical-orange transition-all duration-300 font-medium uppercase tracking-wide">Contact</a>
            </div>
            <Button className="bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
              Book Mission
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 min-h-[90vh] flex items-center">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Mission Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-tactical-orange/20 border border-tactical-orange/40 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-tactical-orange rounded-full animate-pulse"></div>
              <span className="text-tactical-orange font-mono text-sm uppercase tracking-widest">Mission Status: Active</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-tactical-white mb-6 font-mono leading-none">
              <span className="block">SWAT</span>
              <span className="text-tactical-orange drop-shadow-2xl">ARENA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-tactical-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              Enter the ultimate tactical battlefield. Professional airsoft arena designed for <span className="text-tactical-orange font-semibold">elite training</span>, <span className="text-tactical-orange font-semibold">corporate team building</span>, and <span className="text-tactical-orange font-semibold">unforgettable experiences</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white px-10 py-6 text-lg font-bold uppercase tracking-wide shadow-2xl hover:shadow-tactical-orange/25 transition-all duration-300">
                <Icon name="Target" className="mr-3" size={24} />
                Deploy Mission
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-tactical-orange text-tactical-orange hover:bg-tactical-orange hover:text-tactical-white px-10 py-6 text-lg font-bold uppercase tracking-wide transition-all duration-300">
                <Icon name="Play" className="mr-3" size={24} />
                Watch Briefing
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-swat-light/50 border border-tactical-orange/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-tactical-orange mb-2">500+</div>
                <div className="text-tactical-white font-medium">Missions Completed</div>
              </div>
              <div className="bg-swat-light/50 border border-tactical-orange/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-tactical-orange mb-2">15</div>
                <div className="text-tactical-white font-medium">Tactical Scenarios</div>
              </div>
              <div className="bg-swat-light/50 border border-tactical-orange/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-tactical-orange mb-2">98%</div>
                <div className="text-tactical-white font-medium">Mission Success Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tactical Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-l border-tactical-orange/20"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-swat-DEFAULT to-transparent"></div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-swat-light/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-tactical-orange/20 border border-tactical-orange/40 rounded-full px-4 py-2 mb-6">
              <Icon name="Crosshair" className="text-tactical-orange" size={16} />
              <span className="text-tactical-orange font-mono text-sm uppercase tracking-widest">Combat Experience</span>
            </div>
            <h2 className="text-5xl font-bold text-tactical-white mb-6">Choose Your Mission</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              From first-time recruits to seasoned operators, we provide immersive tactical experiences tailored to your skill level and objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-swat-light/50 border-tactical-orange/30 hover:border-tactical-orange transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Users" className="text-tactical-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-tactical-white mb-2">First-Time Operators</h3>
                    <p className="text-tactical-gray">Perfect for beginners, bachelor parties, and corporate events</p>
                  </div>
                </div>
                <ul className="space-y-3 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Complete tactical gear provided
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Professional safety briefing
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Guided mission scenarios
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Team building exercises
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-swat-light/50 border-tactical-orange/30 hover:border-tactical-orange transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Target" className="text-tactical-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-tactical-white mb-2">Elite Operators</h3>
                    <p className="text-tactical-gray">Advanced scenarios for experienced airsoft players</p>
                  </div>
                </div>
                <ul className="space-y-3 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Military-grade equipment
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Complex tactical scenarios
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Night vision operations
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-3" size={16} />
                    Competitive tournaments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Packages Section */}
      <section id="packages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-tactical-orange/20 border border-tactical-orange/40 rounded-full px-4 py-2 mb-6">
              <Icon name="Package" className="text-tactical-orange" size={16} />
              <span className="text-tactical-orange font-mono text-sm uppercase tracking-widest">Mission Packages</span>
            </div>
            <h2 className="text-5xl font-bold text-tactical-white mb-6">Select Your Operation</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Choose from our carefully crafted mission packages designed to deliver maximum tactical engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-swat-light/50 border-tactical-gray/20 hover:border-tactical-orange/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-tactical-white" size={24} />
                </div>
                <CardTitle className="text-tactical-white text-2xl">RECRUIT</CardTitle>
                <CardDescription className="text-tactical-gray">
                  Entry-level tactical experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-tactical-orange">$99</span>
                  <span className="text-tactical-gray">/operator</span>
                </div>
                <ul className="space-y-2 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Full tactical gear
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    2-hour mission
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Safety briefing
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Photo documentation
                  </li>
                </ul>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white font-bold uppercase tracking-wide">
                  Deploy Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-swat-light/50 border-tactical-orange/50 hover:border-tactical-orange transition-all duration-300 transform hover:scale-105 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-tactical-orange text-tactical-white uppercase tracking-wide">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Target" className="text-tactical-white" size={24} />
                </div>
                <CardTitle className="text-tactical-white text-2xl">OPERATIVE</CardTitle>
                <CardDescription className="text-tactical-gray">
                  Advanced tactical operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-tactical-orange">$149</span>
                  <span className="text-tactical-gray">/operator</span>
                </div>
                <ul className="space-y-2 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Premium equipment
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    4-hour mission
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Multiple scenarios
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Personal instructor
                  </li>
                </ul>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white font-bold uppercase tracking-wide">
                  Deploy Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-swat-light/50 border-tactical-gray/20 hover:border-tactical-orange/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Crown" className="text-tactical-white" size={24} />
                </div>
                <CardTitle className="text-tactical-white text-2xl">ELITE</CardTitle>
                <CardDescription className="text-tactical-gray">
                  VIP tactical experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-tactical-orange">$249</span>
                  <span className="text-tactical-gray">/operator</span>
                </div>
                <ul className="space-y-2 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Military-grade gear
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Full-day operation
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Custom scenarios
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Catering included
                  </li>
                </ul>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white font-bold uppercase tracking-wide">
                  Deploy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-swat-light/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-tactical-orange/20 border border-tactical-orange/40 rounded-full px-4 py-2 mb-6">
              <Icon name="Camera" className="text-tactical-orange" size={16} />
              <span className="text-tactical-orange font-mono text-sm uppercase tracking-widest">Mission Gallery</span>
            </div>
            <h2 className="text-5xl font-bold text-tactical-white mb-6">Combat Operations</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Experience the intensity and professionalism of our tactical arena through real mission footage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg border-2 border-tactical-orange/20 hover:border-tactical-orange transition-all duration-300">
              <img 
                src="/img/a973ab0b-5edb-4493-a0d7-90ca2cce843f.jpg" 
                alt="Tactical Arena Command Center" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-swat-DEFAULT/70 group-hover:bg-swat-DEFAULT/50 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Play" className="text-tactical-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" size={48} />
                  <p className="text-tactical-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Command Center</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg border-2 border-tactical-orange/20 hover:border-tactical-orange transition-all duration-300">
              <img 
                src="/img/2e37fba4-5a78-4b68-8317-971f23bb9b52.jpg" 
                alt="Elite SWAT Training Session" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-swat-DEFAULT/70 group-hover:bg-swat-DEFAULT/50 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Play" className="text-tactical-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" size={48} />
                  <p className="text-tactical-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Training Operations</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg border-2 border-tactical-orange/20 hover:border-tactical-orange transition-all duration-300">
              <img 
                src="/img/c7dfb1b8-ffee-4677-9859-275e7183dbae.jpg" 
                alt="Professional Tactical Equipment" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-swat-DEFAULT/70 group-hover:bg-swat-DEFAULT/50 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Play" className="text-tactical-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2" size={48} />
                  <p className="text-tactical-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Equipment Arsenal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Mission Briefing Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-tactical-orange/20 border border-tactical-orange/40 rounded-full px-4 py-2 mb-6">
              <Icon name="Radio" className="text-tactical-orange" size={16} />
              <span className="text-tactical-orange font-mono text-sm uppercase tracking-widest">Mission Briefing</span>
            </div>
            <h2 className="text-5xl font-bold text-tactical-white mb-6">Deploy Your Team</h2>
            <p className="text-xl text-tactical-gray max-w-3xl mx-auto">
              Ready to engage? Contact our tactical command center to plan your next mission.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-tactical-white" size={24} />
                </div>
                <div>
                  <h4 className="text-tactical-white font-bold text-xl mb-2">Base of Operations</h4>
                  <p className="text-tactical-gray">1547 Tactical Boulevard, Combat City, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-tactical-white" size={24} />
                </div>
                <div>
                  <h4 className="text-tactical-white font-bold text-xl mb-2">Command Center</h4>
                  <p className="text-tactical-gray">+1 (555) SWAT-OPS</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-tactical-white" size={24} />
                </div>
                <div>
                  <h4 className="text-tactical-white font-bold text-xl mb-2">Mission Hours</h4>
                  <p className="text-tactical-gray">Mon-Sun: 0800 - 2200 Hours</p>
                </div>
              </div>
              
              <div className="bg-swat-light/50 border border-tactical-orange/30 rounded-lg p-6">
                <h4 className="text-tactical-white font-bold text-xl mb-4">Corporate Operations</h4>
                <p className="text-tactical-gray mb-4">
                  Planning a team building event? Our corporate packages are designed to strengthen bonds and build leadership skills through tactical challenges.
                </p>
                <Button className="bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white font-bold uppercase tracking-wide">
                  Request Corporate Brief
                </Button>
              </div>
            </div>
            
            <Card className="bg-swat-light/50 border-tactical-orange/30 hover:border-tactical-orange transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-tactical-white text-2xl">Mission Request</CardTitle>
                <CardDescription className="text-tactical-gray">
                  Submit your tactical operation request and we'll coordinate the details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-tactical-white font-medium">Operator Name</label>
                  <Input className="bg-swat-dark border-tactical-orange/30 text-tactical-white focus:border-tactical-orange" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-tactical-white font-medium">Contact Frequency</label>
                  <Input className="bg-swat-dark border-tactical-orange/30 text-tactical-white focus:border-tactical-orange" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-tactical-white font-medium">Mission Type</label>
                  <select className="w-full bg-swat-dark border border-tactical-orange/30 text-tactical-white focus:border-tactical-orange rounded-md p-2">
                    <option>Select mission type</option>
                    <option>First-Time Operation</option>
                    <option>Corporate Event</option>
                    <option>Bachelor Party</option>
                    <option>Advanced Training</option>
                    <option>Tournament</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-tactical-white font-medium">Mission Brief</label>
                  <Textarea className="bg-swat-dark border-tactical-orange/30 text-tactical-white focus:border-tactical-orange" placeholder="Describe your tactical objectives and requirements..." />
                </div>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white font-bold uppercase tracking-wide">
                  <Icon name="Send" className="mr-2" size={16} />
                  Deploy Mission Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-swat-DEFAULT py-16 px-4 border-t border-tactical-orange/20">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Icon name="Shield" className="text-tactical-orange" size={40} />
              <span className="text-3xl font-bold text-tactical-white tracking-wider">SWAT ARENA</span>
            </div>
            <p className="text-tactical-gray mb-8 text-lg max-w-2xl mx-auto">
              Elite tactical training facility delivering unmatched airsoft experiences for operators of all skill levels.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-tactical-gray hover:text-tactical-orange transition-colors duration-300">
                <Icon name="Instagram" size={28} />
              </a>
              <a href="#" className="text-tactical-gray hover:text-tactical-orange transition-colors duration-300">
                <Icon name="Facebook" size={28} />
              </a>
              <a href="#" className="text-tactical-gray hover:text-tactical-orange transition-colors duration-300">
                <Icon name="Youtube" size={28} />
              </a>
              <a href="#" className="text-tactical-gray hover:text-tactical-orange transition-colors duration-300">
                <Icon name="Twitter" size={28} />
              </a>
            </div>
            <Separator className="bg-tactical-orange/20 mb-8" />
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-tactical-gray text-sm mb-4 md:mb-0">
                © 2024 SWAT Arena. All tactical operations secured.
              </p>
              <div className="flex space-x-6 text-tactical-gray text-sm">
                <a href="#" className="hover:text-tactical-orange transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-tactical-orange transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-tactical-orange transition-colors">Safety Guidelines</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;