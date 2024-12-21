import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import  './Location.css'

const LocationOfHotel = props => {
    return (
       <div >
         <MapContainer center={[21.4272, 92.0058]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[21.4272, 92.0058]}>
                <Popup>
                Welcome to Cox's Bazar, Bangladesh! <br /> Enjoy the world's longest natural sea beach.
                </Popup>
            </Marker>
        </MapContainer>
       </div>
    );
};

LocationOfHotel.propTypes = {

};

export default LocationOfHotel;