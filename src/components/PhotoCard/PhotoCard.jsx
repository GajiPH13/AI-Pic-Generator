import { Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({photo}) => {
    console.log(photo);
    return (
        <Card className='rounded-xl border'>
            <div className='relative w-full aspect-square'>
            <Image 
            src={photo.imageUrl} 
            alt={photo.title} 
            fill
            className='object-cover rounded-xl'
            
            >

            </Image>
        </div>
        <div>
            <h2>{photo.title}</h2>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
            <p><FaHeart /></p>
            <p>{photo.likes}</p>

        </div>
        <Separator  orientation='vertical'/>
        <div className='flex gap-2 items-center'>
            <p><BiDownload /></p>
            <p>{photo.downloads}</p>
        </div>
        </div>
        </Card>
    );
};

export default PhotoCard;