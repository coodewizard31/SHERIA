function Wakili() {
  return (
    <div style={{ marginLeft: "200px" }} className="wakili-map-container">
      <h1 style={{ marginBottom: "25px", marginTop: "7px" }}>Resources</h1>
      <p>Find the right Lawyers near you.</p>
      <iframe
        title="Lawyers Near Me Map"
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127642.12450259833!2d36.75841022839958!3d-1.288225577660232!2m3!1f0!2f0!3f0!3m2!1i1024!2768!4f13.1!2m1!1slawyers%20and%20advocates%20in%20nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Wakili;