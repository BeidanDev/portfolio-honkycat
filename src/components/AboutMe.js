import React from 'react';

import './AboutMe.css';

import kitty from '../assets/img/kitty.jpg';

export const AboutMe = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img src={ kitty } className="img-fluid mx-auto" alt="Imagen honkycat"></img>
                    </div>
                    <div className="col-md-5 mt-md-5 mb-5">
                        <h2 className="text-center display-6">¿Quién soy?</h2>
                        <p className="mt-4 h4 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec bibendum lectus. Vivamus in mauris ipsum. Nam aliquam ipsum vel tellus eleifend mollis. Aenean facilisis mi eget ipsum placerat tempor. Vestibulum sed sapien eros. Morbi vel tellus urna. Nullam id mi eget libero molestie convallis eleifend nec sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris viverra tellus erat, blandit finibus eros accumsan sed. Morbi dolor leo, ultrices sit amet risus ac, ultrices faucibus libero. In finibus sem quis tincidunt bibendum. Suspendisse ac faucibus mi, ut volutpat lacus. In hac habitasse platea dictumst. Vivamus sed ante dolor. Morbi eget lorem bibendum, accumsan dolor eget, fringilla risus. Phasellus nec scelerisque sapien.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}