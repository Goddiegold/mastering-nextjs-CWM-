"use client";

import React, { useState } from "react";
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CldImage } from 'next-cloudinary';


const UploadPage = () => {
    const [publicId, setPublicId] = useState('')
    return (
        <>
            {publicId && <CldImage src={publicId} width={300} height={300} alt="Uploaded image" />}
            <CldUploadWidget
                options={{
                    sources: ["local"], multiple: false, maxFiles: 3,
                    styles: {
                        //
                    }
                }}
                onSuccess={({ event, info }) => {
                    if (event !== 'success') return;
                    const result = info as CloudinaryUploadWidgetInfo;
                    setPublicId(result.public_id)
                }}
                uploadPreset="tk9cg6mf-nextapp">
                {({ open }) => {
                    return (
                        <button onClick={() => open()} className="btn btn-primary">
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>
        </>
    );
}

export default UploadPage;