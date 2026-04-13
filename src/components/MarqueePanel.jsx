function MarqueePanel() {
  const text = " /// UI/UX DESIGNER /// WEB DEVELOPER /// FULL STACK DEVELOPER ";

  return (
    <div className="marquee-container hover-target">
      <div className="marquee-content hover-target">
        {text.repeat(10)}
      </div>
    </div>
  );
}

export default MarqueePanel;
