import React, { Component } from 'react';
import imageData from '../main/imageData.json';
import imathes from '../../images/gallery/mathes.JPG';
import i20170101_113857 from '../../images/gallery/20170101_113857.jpg';
import i20170319_124057 from '../../images/gallery/20170319_124057.jpg';
import iDSCF0218 from '../../images/gallery/DSCF0218.JPG';
import iDSCF0397 from '../../images/gallery/DSCF0397.JPG';
import iDSCF0534 from '../../images/gallery/DSCF0534.JPG';
import iDSCF0540 from '../../images/gallery/DSCF0540.JPG';
import iDSCF0660 from '../../images/gallery/DSCF0660.JPG';
import iDSCF0901 from '../../images/gallery/DSCF0901.JPG';
import iDSCF0905 from '../../images/gallery/DSCF0905.JPG';
import iIMG_2064 from '../../images/gallery/IMG_2064.jpg';
import iIMG_2089 from '../../images/gallery/IMG_2089.jpg';
import iIMG_2211 from '../../images/gallery/IMG_2211.jpg';
import iIMG_2392 from '../../images/gallery/IMG_2392.jpg';
import iIMG_2435 from '../../images/gallery/IMG_2435.jpg';
import iIMG_2451 from '../../images/gallery/IMG_2451.jpg';
import iIMG_2575 from '../../images/gallery/IMG_2575.jpg';

class Pictures extends Component {
	constructor() {
		super()
		this.state = {
			enlarged: false,
			images: {
				'imathes': imathes,
				'i20170101_113857': i20170101_113857,
				'i20170319_124057': i20170319_124057,
				'iDSCF0218': iDSCF0218,
				'iDSCF0397': iDSCF0397,
				'iDSCF0534': iDSCF0534,
				'iDSCF0540': iDSCF0540,
				'iDSCF0660': iDSCF0660,
				'iDSCF0901': iDSCF0901,
				'iDSCF0905': iDSCF0905,
				'iIMG_2064': iIMG_2064,
				'iIMG_2089': iIMG_2089,
				'iIMG_2211': iIMG_2211,
				'iIMG_2392': iIMG_2392,
				'iIMG_2435': iIMG_2435,
				'iIMG_2451': iIMG_2451,
				'iIMG_2575': iIMG_2575,
			}
		}

		this.enlarge = this.enlarge.bind(this);
		this.getImageData = this.getImageData.bind(this);
		this.buildThumb = this.buildThumb.bind(this);
	}

	enlarge(mainUrl, meta, altText, classes) {
		this.setState({ enlarged: !this.state.enlarged, imageUrl: mainUrl, imageMeta: meta, altText: altText, classes: classes });
	}

	getImageData() {
		let data = imageData.data;
		let thumbs = data.map( picture => {
			return this.buildThumb(picture);
		});

		return <div className="thumbs-container">{thumbs}</div>;
	}

	photo() {
		if(this.state.enlarged) {

			return (<div className="photo-background" onClick={this.enlarge} >
				<div className="photo-container">
					<img src={this.state.images['i' + this.state.imageUrl]} className={"photo-header " + this.state.classes} alt={this.state.altText}/>
					<div className="photo-scroll">
						<div className="meta-info">
							<div className="scroll-label">
								Scroll Up
							</div>
							<h3>{this.state.imageMeta}</h3>

						</div>
					</div>
				</div>
			</div>);
		} else {
			return '';
		}
			
	}

	buildThumb(picture) {
		let url = this.state.images['i' + picture.mainUrl];

		return (<div key={picture.key} onClick={() => { this.enlarge(picture.mainUrl, picture.meta, picture.altText, picture.classes ); }} className="thumb">
			<div className={"thumb-image " + picture.classes} style={{backgroundImage: 'url("' + url + '")'}}></div>
		</div>);
	}

  	render() {
  		let photoModal = this.photo();
  		let thumbs = this.getImageData();

    	return (
      		<div className="pages pictures">
        		<h2>All The Colors</h2>
        		{thumbs}
    			{photoModal}
      		</div>
    	);
  	}
}

export default Pictures;
