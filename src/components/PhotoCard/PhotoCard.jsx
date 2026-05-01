import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({photo}) => {
    // console.log(photo);
    return (
        <Card className='rounded-xl border'>
            <div className='relative w-full aspect-square '>
            <Image 
            src={photo?.image_url} 
            alt={photo?.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover rounded-xl '
            
            >
            
            </Image>
            <Chip className='absolute top-2 right-2'>{photo?.category}</Chip>  
        </div>
        <div>
            <h2>{photo?.title}</h2>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
            <p><FaHeart /></p>
            <p>{photo?.likes}</p>

        </div>
        <Separator  orientation='vertical'/>
        <div className='flex gap-2 items-center'>
            <p><BiDownload /></p>
            <p>{photo?.downloads}</p>
        </div>
        </div>
        <Link href={`/all-photos/${photo?.id}`}><Button  variant="outline" className={'w-full'}>View</Button></Link>
        </Card>
    );
};

export default PhotoCard;