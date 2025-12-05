import React from "react";

const GoogleMap: React.FC = () => (
  <div className="overflow-hidden rounded-lg shadow">
    <iframe
      title="Service area map"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Bromley`}
      width="100%"
      height="350"
      allowFullScreen
      loading="lazy"
    />
  </div>
);

export default GoogleMap;
