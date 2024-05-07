function Map() {
  return (
    <div className="map-section">
      <div className="container">
        <div className="rwo">
          <div className="col-lg-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d330643.1132524465!2d89.83973691721877!3d23.707236766895445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1695798721116!5m2!1sen!2sbd"
                width="1320"
                height="560"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
