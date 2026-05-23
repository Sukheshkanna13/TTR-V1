/* global React, StripeImg, Ico */

const NatureRetreatScreen = ({ go }) => {
  const experiences = [
    {
      title: 'Experience Local Artisans',
      desc: 'Discover the charm of local craftsmanship through simple demonstrations and hands-on workshops. Meet local artisans, explore handmade jewellery, weaving and jute crafts. Take home a little piece of Auroville with you.',
      label: 'craft', tone: 'oklch(0.85 0.06 30)'
    },
    {
      title: 'Garden Fun for Kids',
      desc: 'Let the little hands explore nature through simple gardening and outdoor activities. A fun and joyful way for children to play, learn and enjoy the beauty of nature.',
      label: 'garden', tone: 'oklch(0.84 0.07 145)'
    },
    {
      title: 'Poolside Evenings & Summer Fun',
      desc: 'Relax, unwind and enjoy refreshing moments by the pool. During special weekends and group stays - guests can enjoy cheerful poolside gatherings, family fun and summer vibes.',
      label: 'coastal', tone: 'oklch(0.87 0.05 200)'
    },
    {
      title: 'Robotics & Creative Tech',
      desc: 'Beginner-friendly robotics and creative technology sessions designed for curious young minds. Led by our in-house tech enthusiast - children can explore, build, and learn through hands-on activities.',
      label: 'tech', tone: 'oklch(0.86 0.05 250)'
    }
  ];

  return (
    <div className="tt-page" style={{ paddingTop: 32, paddingBottom: 96 }}>
      <div style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
        <span style={{ cursor: 'pointer' }} onClick={() => go('home')}>Home</span><span>/</span>
        <span style={{ color: 'var(--ink)' }}>Nature Retreat</span>
      </div>

      <div style={{ marginBottom: 32, textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
        <div className="tt-eyebrow">Auroville</div>
        <h1 className="tt-h1" style={{ marginTop: 12, marginBottom: 16 }}>TempleAndTowns Nature Retreat</h1>
        <p style={{ color: 'var(--text-soft)', fontSize: 18, lineHeight: 1.6 }}>
          Nestled in the peaceful surroundings of Auroville, designed for resting and simple living. 
          Enjoy thoughtfully curated experiences that connect you with nature, local culture, and the peaceful spirit of Auroville. 🪷
        </p>
      </div>

      <div style={{ height: 480, borderRadius: 12, overflow: 'hidden', position: 'relative', marginBottom: 64 }}>
        <StripeImg label="resort" tone="oklch(0.88 0.04 145)" ratio="auto" />
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 className="tt-h2" style={{ textAlign: 'center', marginBottom: 40 }}>Meaningful memories, curated for you.</h2>
        <div style={{ display: 'grid', gap: 32 }}>
          {experiences.map((exp, i) => (
            <div key={exp.title} style={{ display: 'flex', gap: 32, alignItems: 'center', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
              <div style={{ flex: 1, height: 280, borderRadius: 8, overflow: 'hidden' }}>
                <StripeImg label={exp.label} tone={exp.tone} ratio="auto" />
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
      
      <div style={{ marginTop: 80, textAlign: 'center', padding: 48, background: 'var(--bg-soft)', borderRadius: 12 }}>
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
