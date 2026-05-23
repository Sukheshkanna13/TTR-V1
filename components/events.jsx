/* global React, Ico */

const EventsPage = ({ go }) => {
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

  return (
    <div className="tt-page" style={{ paddingTop: 32, paddingBottom: 96 }}>
      <div style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
        <span style={{ cursor: 'pointer' }} onClick={() => go('home')}>Home</span><span>/</span>
        <span style={{ cursor: 'pointer' }} onClick={() => go('retreat')}>Nature Retreat</span><span>/</span>
        <span style={{ color: 'var(--ink)' }}>Events</span>
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
        <div className="tt-eyebrow">Nature Retreat Events</div>
        <h1 className="tt-h1" style={{ marginTop: 12, marginBottom: 16 }}>
          Meaningful <span className="tt-italic-soft" style={{ color: 'var(--accent)' }}>memories.</span>
        </h1>
        <p style={{ color: 'var(--text-soft)', fontSize: 18, lineHeight: 1.6 }}>
          At TempleAndTowns Nature Retreat — enjoy simple, thoughtfully curated experiences 
          that connect you with nature, local culture and the peaceful spirit of Auroville. 🪷
        </p>
      </div>

      {/* Experiences — alternating layout */}
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 56 }}>
          {experiences.map((exp, i) => (
            <div key={exp.title} style={{ display: 'flex', gap: 40, alignItems: 'center', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
              <div style={{ flex: 1, height: 320, borderRadius: 10, overflow: 'hidden' }}>
                <img src={exp.img} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ flex: 1, padding: 8 }}>
                <div className="tt-eyebrow" style={{ marginBottom: 8 }}>Auroville</div>
                <h3 className="tt-h3" style={{ marginBottom: 12, fontSize: 22 }}>{exp.title}</h3>
                <p className="tt-muted" style={{ fontSize: 16, lineHeight: 1.65, marginBottom: 28 }}>{exp.desc}</p>
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

      {/* CTA */}
      <div style={{ marginTop: 80, textAlign: 'center', padding: 48, background: 'var(--bg-soft)', borderRadius: 12 }}>
        <h2 className="tt-h2" style={{ margin: '0 0 16px' }}>Want to see the property?</h2>
        <p className="tt-muted" style={{ fontSize: 16, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          Explore the Nature Retreat — 12 rooms, swimming pool, garden, and more.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="tt-btn tt-btn-primary" onClick={() => go('retreat')}>
            View Nature Retreat
          </button>
          <button className="tt-btn tt-btn-ghost" onClick={() => go('property', { propertyId: 'p4' })}>
            View Rooms <Ico name="arrow" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

window.EventsPage = EventsPage;
