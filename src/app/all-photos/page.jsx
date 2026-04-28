import PhotoCard from '@/components/PhotoCard/PhotoCard';
import React from 'react';

const AllPhotoPage = async () => {
    const res = await fetch('https://ai-pic-generator-livid.vercel.app/data.json');
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <h1 className='mt-5'>All Photos</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    data.map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotoPage;