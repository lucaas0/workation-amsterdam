import React, { useCallback, useState } from "react";
import SimpleGallery from "react-photo-gallery";
import {photos} from './photos';
import logo from './assets/void-logo.svg';
import logoPrivate from './assets/private/void-private.svg';
import footerLogo1 from './assets/footer-logo.svg';
import footerLogo2 from './assets/footer-logo-2.svg';
import workation from './assets/workation.svg';
import workationPrivate from './assets/private/workation-private.png';
import logoAmsterdam from './assets/private/logo-amsterdam.png';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photosPrivate } from "./photosPrivate";

function Home(props) {
    const { isPrivate } = props;
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    console.log(isPrivate);

    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const openInNewTab = url => {
      window.open('https://void.software', '_blank', 'noopener,noreferrer');
    };

    const photosArr = isPrivate ? photosPrivate : photos;
  
    return (
    <div className={`app ${isPrivate && 'private-cursor'}`}>
      <div className='header'>
        <img className='void' src={isPrivate ? logoPrivate : logo} alt="VOID" onClick={openInNewTab} />
        <div className="header-wrapper">
            {
                isPrivate && (
                    <img className='amsterdam-logo' src={logoAmsterdam} alt="AMSTERDAM" />
                )
            }
            <img className='workation' src={isPrivate ? workationPrivate : workation} alt="WORKATION" />
            {
                isPrivate && (
                    <img className='amsterdam-logo' src={logoAmsterdam} alt="AMSTERDAM" />
                )
            }
        </div>
        {
            !isPrivate && (
                <div className='workers'>
                    <span>Lucas Garcia</span>
                    <span>Ruben Rodrigues</span>
                    <span>Octávio Dominguez</span>
                </div>
            )
        }
      </div>
      <div className='photos'>
         <SimpleGallery photos={photosArr} direction={`column`} onClick={openLightbox} />
         <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photosArr.map(x => ({
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
        <span>Powered by <u onClick={openInNewTab}>Void Software</u></span>
        <img className='footer-logo-2' src={footerLogo2} alt="AMSTERDAM" />
        <p>Designed and programmed under no effects or substances *wink* *wink*</p>
      </div>
    </div>
    )
}

export default Home;