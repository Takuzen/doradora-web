'use client';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <style global jsx>{`
        :root {
          color-scheme: light; /* Force light mode */
        }

        @media (prefers-color-scheme: dark) {
          html {
            filter: invert(0) !important;
            background-color: white !important;
            color: black !important;
          }
        }
      `}</style>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontFamily: "'Hiragino Mincho Pro', serif",
        textAlign: 'center',
	margin: '0 5vw',
      }}
    >
      <img
	src="/doradora-chinese-character.png"
	alt="Doradora Chinese Character"
	style={{ width: '300px', height: '150px', margin: '40px 0', objectFit: 'contain' }}
      />

      <img
	src="dora-image-sample.png"
        alt="Dora image"
        style={{ width: '400px', height: '200px', margin: '0px 0 80px 0', objectFit: 'contain' }}
      />

      <div
	style={{
	  display: 'flex',
	  gap: '20px',
	}}
      >

      <div
	style={{
	  display: 'flex',
	  flexDirection: 'column',
      }}
    >
      {/* Image button jumping to TestFlight URL */}
      <a href="https://testflight.apple.com/join/example" target="_blank" rel="noopener noreferrer">
        <img
          src="/app-store-img.png"
          alt="Download on TestFlight"
          style={{ width: '150px', height: '50px', cursor: 'pointer' }}
        />
      </a>
      <p>iPhoneの方</p>
      </div>
      <div style={{ margin: '20px 10px', }}>
	<h3 style={{ textDecoration: 'underline' }}>
	  <Link href="/player">
    	    その他の携帯/ウェブ→
  	  </Link>
	</h3>
      </div>

	</div>

	<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0 20px 0', textAlign: 'center' }}>
  <img
    src="/doradora-pro.png"
    alt="Pro"
    width="400"
    height="200"
    style={{ margin: '0 auto' }}
  />
  <Link href="https://masuken.jp/column/ningenkokuhou51/">
  <h3 style={{ lineHeight: '2', fontWeight: 'bold', textDecoration: 'underline', color: 'blue', margin: '0 0 0 20px' }}>
    魚住為楽「砂張銅鑼」
  </h3>
	  </Link>
  <h3 style={{ lineHeight: '2' }}>
    茶席の準備が出来たことを知らせるために鳴らす「銅鑼（どら）」。この銅鑼づくりで平成14年に重要無形文化財保持者（人間国宝）に認定されたのが、３代魚住為楽氏です。武家屋敷が並び城下町らしさの漂う長町の一画に工房を構え、鋳型づくりから仕上げまで一貫しての作業を行っています。
  </h3>
  <h3 style={{ lineHeight: '2' }}>・高機能ステレオマイクで収録した高音質</h3>
  <h3 style={{ lineHeight: '2' }}>・お茶向け機能</h3>
  <h3 style={{ lineHeight: '2' }}>・小中大の音の強弱が選択可能</h3>
  <h3 style={{ lineHeight: '2' }}>・三連打など連続打ち</h3>
  <h3 style={{ lineHeight: '2' }}>・より高いカスタマイズ性</h3>
</div>

	  <footer style={{ margin: '20px 0' }}>Copyright ©︎ Dora Dora All Rights Reserved</footer>

      </div>
    </>
  );
}
