import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * @function DisplayImage
 * @description Displays the image stored in the amazon s3 bucket
 */
/***********************************************/
function DisplayImage() {
/***********************************************/
    //The URL of the public image
    const URL = 'https://sweng861-tpz5005.s3.us-east-1.amazonaws.com/amazon_s3_image.jpg';

    /////////////////////////////////////////////

    return (
        <div>
            <img 
                src={URL}
                alt="Amazon S3 Image"
                onError={(e) => console.error('[ERROR] Image loading failure:', e)}
            />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DisplayImage />
    </React.StrictMode>
);