import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pro Clean Corp Commercial Cleaning Services Sydney NSW';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #041c30 0%, #062744 60%, #01be48 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              background: '#01be48',
              borderRadius: '12px',
              width: '16px',
              height: '60px',
              marginRight: '20px',
            }}
          />
          <span
            style={{
              color: '#01be48',
              fontSize: '28px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Pro Clean Corp
          </span>
        </div>

        <h1
          style={{
            color: '#ffffff',
            fontSize: '52px',
            fontWeight: '800',
            textAlign: 'center',
            lineHeight: '1.2',
            margin: '0 0 24px 0',
            maxWidth: '900px',
          }}
        >
          Professional Commercial Cleaning Services Sydney NSW
        </h1>

        <p
          style={{
            color: '#a0c4d0',
            fontSize: '26px',
            textAlign: 'center',
            margin: '0 0 40px 0',
          }}
        >
          Licensed &amp; Insured · 9+ Years Experience · 1,200+ Businesses Served
        </p>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['Office Cleaning', 'Warehouse Cleaning', 'Medical Centres', 'Gyms & Retail'].map(
            (service) => (
              <div
                key={service}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(1,190,72,0.5)',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  color: '#ffffff',
                  fontSize: '18px',
                }}
              >
                {service}
              </div>
            )
          )}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            color: '#6b9aaa',
            fontSize: '18px',
          }}
        >
          procleancorp.com.au · 1300 494 983
        </div>
      </div>
    ),
    { ...size }
  );
}
