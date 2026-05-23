/* global React, Ico */

const NatureRetreatScreen = ({ go }) => {
  const experiences = [
    {
      title: 'Experience Local Artisans',
      desc: 'Discover the charm of local craftsmanship through simple demonstrations and hands-on workshops. Meet local artisans, explore handmade jewellery, weaving and jute crafts. Take home a little piece of Auroville with you.',
      img: 'images/Natures-retreat/1.jpeg'
    },
    {
      title: 'Garden Fun for Kids',
      desc: 'Let the little hands explore nature through simple gardening and outdoor activities. A fun and joyful way for children to play, learn and enjoy the beauty of nature.',
      img: 'images/Natures-retreat/2.jpeg'
    },
    {
      title: 'Poolside Evenings & Summer Fun',
      desc: 'Relax, unwind and enjoy refreshing moments by the pool. During special weekends and group stays - guests can enjoy cheerful poolside gatherings, family fun and summer vibes.',
      img: 'images/Natures-retreat/3.jpeg'
    },
    {
      title: 'Robotics & Creative Tech',
      desc: 'Beginner-friendly robotics and creative technology sessions designed for curious young minds. Led by our in-house tech enthusiast - children can explore, build, and learn through hands-on activities.',
      img: 'images/Auroville/5.jpeg'
    }
  ];

  const property = TT_DATA.properties.find(p => p.id === 'p4');
  const galleryImgs = (property?.images || []).slice(0, 8);

  return (
    <div className="tt-page" style={{ paddingTop: 32, paddingBottom: 96 }}>
      <div style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
        <span style={{ cursor: 'pointer' }} onClick={() => go('home')}>Home</span><span>/</span>
        <span style={{ color: 'var(--ink)' }}>Nature Retreat</span>
      </div>

      {/* Nature Retreat Logo + Header */}
      <div style={{ marginBottom: 48, textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
        <img 
          src="images/Natures-retreat/natureretreat-Logo.jpeg" 
          alt="Nature Retreat Logo" 
          style={{ width: 120, height: 120, objectFit: 'contain', borderRadius: 12, marginBottom: 20 }}
        />
        <div className="tt-eyebrow">Auroville</div>
        <h1 className="tt-h1" style={{ marginTop: 12, marginBottom: 16 }}>TempleAndTowns Nature Retreat</h1>
        <p style={{ color: 'var(--text-soft)', fontSize: 18, lineHeight: 1.6 }}>
          Nestled in the peaceful surroundings of Auroville, designed for resting and simple living. 
          Enjoy thoughtfully curated experiences that connect you with nature, local culture, and the peaceful spirit of Auroville. 🪷
        </p>
      </div>

      {/* Hero Image */}
      <div style={{ height: 480, borderRadius: 12, overflow: 'hidden', position: 'relative', marginBottom: 64 }}>
        <img src="images/Auroville/1.jpeg" alt="Nature Retreat" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* Curated Experiences */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 className="tt-h2" style={{ textAlign: 'center', marginBottom: 40 }}>Meaningful memories, curated for you.</h2>
        <div style={{ display: 'grid', gap: 48 }}>
          {experiences.map((exp, i) => (
            <div key={exp.title} style={{ display: 'flex', gap: 32, alignItems: 'center', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
              <div style={{ flex: 1, height: 280, borderRadius: 8, overflow: 'hidden' }}>
                <img src={exp.img} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ flex: 1, padding: 16 }}>
                <h3 className="tt-h3" style={{ marginBottom: 12 }}>{exp.title}</h3>
                <p className="tt-muted" style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>{exp.desc}</p>
                <button 
                  className="tt-btn tt-btn-primary" 
                  onClick={() => {
                    const msg = `Hi, I am interested in booking the "${exp.title}" experience at the Nature Retreat in Auroville.`;
                    window.open(`https://wa.me/918553441449?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                >
                  <Ico name="arrow" size={14} /> Request to book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Preview */}
      <div style={{ marginTop: 80 }}>
        <h2 className="tt-h2" style={{ textAlign: 'center', marginBottom: 32 }}>A glimpse of the retreat</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, borderRadius: 8, overflow: 'hidden' }}>
          {galleryImgs.map((src, i) => (
            <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
              <img src={src} alt={`Nature Retreat ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} 
                   onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} 
                   onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div style={{ marginTop: 80, textAlign: 'center', padding: 48, background: 'var(--bg-soft)', borderRadius: 12 }}>
        <img 
          src="images/Natures-retreat/natureretreat-Logo.jpeg" 
          alt="Nature Retreat Logo" 
          style={{ width: 64, height: 64, objectFit: 'contain', borderRadius: 8, marginBottom: 16 }}
        />
        <h2 className="tt-h2" style={{ margin: '0 0 16px' }}>Ready to disconnect?</h2>
        <p className="tt-muted" style={{ fontSize: 16, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          Reserve your stay at the Nature Retreat and embrace the simple living.
        </p>
        <button className="tt-btn tt-btn-primary" onClick={() => go('property', { propertyId: 'p4' })}>
          View Property Details
        </button>
      </div>
    </div>
  );
};

window.NatureRetreatScreen = NatureRetreatScreen;
