import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const articles = [
    {
      id: 1,
      title: 'EcoFlow Energy Launches Revolutionary 700W Solar Panel',
      excerpt: 'Our latest innovation achieves industry-leading 23.5% efficiency, setting new standards for solar technology.',
      image: 'https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2025-01-15',
      category: 'Innovation'
    },
    {
      id: 2,
      title: 'Partnership with Major Energy Provider Announced',
      excerpt: 'Strategic partnership will accelerate renewable energy adoption across 15 states with integrated solutions.',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2025-01-10',
      category: 'Partnership'
    },
    {
      id: 3,
      title: 'Sustainability Report Shows 40% Growth in Clean Energy',
      excerpt: 'Annual report reveals significant progress in reducing carbon emissions and expanding renewable infrastructure.',
      image: 'https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '2025-01-05',
      category: 'Sustainability'
    }
  ];

  return (
    <section id="news" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-yellow font-semibold text-lg mb-2">Latest News</h3>
          <h2 className="text-4xl font-bold text-navy mb-6">
            Stay Updated with Clean Energy Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest insights on renewable energy technology, industry 
            trends, and EcoFlow Energy's continued commitment to sustainability.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 group-hover:text-teal transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <button className="inline-flex items-center space-x-2 text-teal font-semibold hover:text-teal/80 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;