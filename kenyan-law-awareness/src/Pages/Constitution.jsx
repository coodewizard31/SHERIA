function Constitution() {
  return (
    <div style={{ marginLeft: "200px" }}>
      <h1 style={{ marginBottom: "25px", marginTop: "7px" }}>
        Constitution of Kenya
      </h1>
      <p>
        The Constitution of Kenya 2010 is the supreme law of the Republic of
        Kenya.
      </p>
      {/* DOTTED DARK BLUE DOWNLOAD BOX */}
      <div className="download-container">
        <a
          href="/constitution"
         
        >
          <button className="learn-more-btn">Download</button>
        </a>
      </div>
    </div>
  );
}

export default Constitution;
