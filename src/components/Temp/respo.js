export default function ResponsiveDemo() {
  return (
    <div style={{ padding: '1rem' }}>
      {/* px version */}
      <div style={{ width: '800px', padding: '20px', background: 'lightcoral', fontSize: '16px', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '24px' }}>❌ Fixed Pixel Box</h2>
        <p>This box uses <strong>px</strong>. It doesn't adjust well on different screen sizes.</p>
        <button style={{ padding: '10px 20px', fontSize: '14px' }}>Click Me</button>
      </div>

      {/* responsive version */}
      <div style={{ width: '90%', padding: '2rem', background: 'lightgreen', fontSize: '1rem' }}>
        <h2 style={{ fontSize: '2rem' }}>✅ Responsive Box</h2>
        <p>This box uses <strong>%</strong>, <strong>rem</strong>, and <strong>em</strong>. It adjusts smoothly on any screen.</p>
        <button style={{ padding: '0.75em 1.5em', fontSize: '1rem' }}>Click Me</button>
      </div>
    </div>
  );
}
