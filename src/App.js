import React, { useCallback, useState } from "react";
import SimpleGallery from "react-photo-gallery";
import {photos} from './photos';
import logo from './assets/void-logo.svg';
import footerLogo1 from './assets/footer-logo.svg';
import footerLogo2 from './assets/footer-logo-2.svg';
import workation from './assets/workation.svg';
import Carousel, { Modal, ModalGateway } from "react-images";

function App() {
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  
    return(
      <div className="app">
      <div className='header'>
        <img className='void' src={logo} alt="VOID" />
        <img className='workation' src={workation} alt="WORKATION" />
        <div className='workers'>
          <span>Lucas Garcia</span>
          <span>Ruben Rodrigues</span>
          <span>Octávio Dominguez</span>
        </div>
      </div>
      <div className='photos'>
         <SimpleGallery photos={photos} direction={`column`} onClick={openLightbox} />
         <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
      <div className='footer'>
        <img className='footer-logo-1' src={footerLogo1} alt="AMSTERDAM" />
        <span>Powered by <u>Void Software</u></span>
        <img className='footer-logo-2' src={footerLogo2} alt="AMSTERDAM" />
        <p>Designed and programmed under no effects or substances *wink* *wink*</p>
      </div>
    </div>
    )
}

export default App;