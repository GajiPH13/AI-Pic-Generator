import Image from 'next/image';
import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const TopGenPhotos = async () => {
    const res = await fetch('https://ai-pic-generator-livid.vercel.app/data.json');
    const data = await res.json();
    console.log(data);
    const topPhotos = data.slice(0, 8);
    console.log(topPhotos);
    return (
        <div>
            <h1 className='mt-5'>Top Generated Photos</h1>
           <div className='grid grid-cols-4 gap-4'>
             {
                topPhotos.map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                    
                )
            }
           </div>
        </div>
    );
};

export default TopGenPhotos;