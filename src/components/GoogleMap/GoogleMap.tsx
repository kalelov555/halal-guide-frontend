import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: { text: any }) => (
  <div>{text}</div>
);

type Props = {
  fullWidth?: boolean;
};

export const GoogleMap = ({ fullWidth = false }: Props) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={
        fullWidth
          ? { height: "200px", width: "100%" }
          : { height: "200px", width: "250px" }
      }>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
