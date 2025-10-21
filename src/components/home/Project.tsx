import { MapPin, TrendingUp, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Solar City Initiative',
      location: 'California, USA',
      image: 'https://images.pexels.com/photos/9875447/pexels-photo-9875447.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      capacity: '150 MW',
      households: '50,000',
      co2Saved: '120,000 tons/year',
      description: 'A large-scale solar installation powering an entire city district with clean, renewable energy.'
    },
    {
      id: 2,
      title: 'Industrial Solar Complex',
      location: 'Texas, USA',
      image: 'https://images.pexels.com/photos/9875397/pexels-photo-9875397.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      capacity: '200 MW',
      households: '75,000',
      co2Saved: '180,000 tons/year',
      description: 'Massive industrial solar complex providing sustainable energy solutions for manufacturing facilities.'
    },
    {
      id: 3,
      title: 'Residential Solar Network',
      location: 'Arizona, USA',
      image: 'https://images.pexels.com/photos/9875464/pexels-photo-9875464.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      capacity: '75 MW',
      households: '25,000',
      co2Saved: '60,000 tons/year',
      description: 'Distributed solar network across residential communities, bringing clean energy directly to homes.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-yellow font-semibold text-lg mb-2">Our Projects</h3>
          <h2 className="text-4xl font-bold text-navy mb-6">
            Transforming Communities with Clean Energy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our solar solutions are making a real impact across 
            the globe, powering sustainable futures for communities everywhere.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-teal text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{project.capacity}</div>
                    <div className="text-sm opacity-90">Total Capacity</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-teal mr-2" />
                  <span className="text-teal font-semibold">{project.location}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-navy mb-4">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-neutral rounded-xl">
                    <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-navy mb-1">{project.capacity}</div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                  
                  <div className="text-center p-4 bg-neutral rounded-xl">
                    <Users className="h-8 w-8 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-navy mb-1">{project.households}</div>
                    <div className="text-sm text-gray-600">Households</div>
                  </div>
                  
                  <div className="text-center p-4 bg-neutral rounded-xl">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">CO₂</span>
                    </div>
                    <div className="text-2xl font-bold text-navy mb-1">{project.co2Saved}</div>
                    <div className="text-sm text-gray-600">CO₂ Saved</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="text-center mt-16">
          <button className="bg-teal hover:bg-teal/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;