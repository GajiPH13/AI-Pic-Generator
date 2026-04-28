import PhotoCard from '@/components/PhotoCard/PhotoCard';
import { Card } from '@heroui/react';
import React from 'react';

const PhotoDetailsPage =async ({params}) => {
    const { id } =await params
    const res = await fetch(`https://ai-pic-generator-livid.vercel.app/data.json`);
    const photos = await res.json();
    console.log(photos);

    const photo = photos.find((photo) => photo.id === parseInt(id));
    console.log(photo);
    return (
        <div>
            <h1>PhotoDetailsPage</h1>
            <Card><PhotoCard photo={photo}></PhotoCard></Card>
            
        </div>
    );
};

export default PhotoDetailsPage;