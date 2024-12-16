'use client';
import Link from 'next/link';
export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Arrange items in a vertical column
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        height: '100vh', // Full viewport height
        fontFamily: "'Hiragino Mincho Pro', serif",
        textAlign: 'center', // Center-align text
      }}
    >
      <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>Dora ドラ</h1>
      <h3 style={{  paddingTop: '10px' }}>生活の中に銅鑼の音を</h3>
      {/* Image of Dora */}
      <img
        src="/dora-image-sample.png" 
        alt="Dora image"
        style={{ width: '400px', height: '200px', margin: '40px 0', objectFit: 'contain' }}
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
    </div>
  );
}
