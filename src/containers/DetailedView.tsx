import React from 'react';
import { BackIcon, DownVoteIcon, HeartIcon, LocationIcon2, ShareIcon, ShowMap, UpvoteIcon } from '@assets/icons';
import Header from '@components/header/Header';

const img = 'https://moneyinc.com/wp-content/uploads/2016/05/eSports-750x500.jpg';
const desc = 'Description DescriptionDescriptionDescrip tionDescript ionDescription DescriptionD escriptionDescription';
const evtName = 'E-Sports 2k22';
const by = 'Shamlikhan CP';
const count = '12';

type DetailsProps = {
  imgUrl?: string;
  title?: string;
  description?: string;
  author?: string;
  netVotes?: number;
};

const DetailedView: React.FC<DetailsProps> = ({
  imgUrl = img,
  description = desc,
  title = evtName,
  author = by,
  netVotes = count
}) => {
  return (
    <div className='h-full bg-white'>
      <Header />
      <div className='relative'>
        <div className='absolute top-2 left-2 p-2 w-8 h-8 text-xl bg-white rounded-full'
          role='presentation'
          onClick={() => history.back()} >
          <BackIcon />
        </div>
        <div className='absolute top-2 right-2 p-2 w-8 h-8 text-xl bg-white rounded-full'>
          <HeartIcon />
        </div>
        <img src={imgUrl} className='w-full'></img>
      </div>
      <div className='p-4 font-inter'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='my-2 text-2xl'>{title}</h2>
            <div>
              <span>by </span>
              <span className='underline'>{author}</span>
            </div>
          </div>
          <div className='flex gap-2 my-auto'>
            <UpvoteIcon />
            <div >
              {netVotes}
            </div>
            <DownVoteIcon />
          </div>

        </div>
        <div className='flex justify-between mt-4'>
          <div className='text-left'>
            <div className='flex'>
              <LocationIcon2 className='my-auto mr-1 w-3 h-3' />
              <div>
                Woot Gaming,
                Kochi
              </div>
            </div>
            <div className='mt-2'>Starts In: 24 mins</div>
          </div>
        </div>
      </div>
      <div className='flex gap-2 justify-around w-full'>
        <div className='flex gap-2 justify-center p-3 w-[46%] bg-black rounded-xl'>
          <div className='my-auto w-3'>
            <ShareIcon fill='white'></ShareIcon>
          </div>
          <div className='text-white'>
            Share
          </div>
        </div>
        <div className='flex gap-2 justify-center p-3 w-[46%] bg-white rounded-xl border'>
          <div className='my-auto w-4'>
            <ShowMap stroke-width='2px' stroke='black' />
          </div>
          <div className='text-black'>
            View On Map
          </div>
        </div>
      </div>
      <div className='p-4 my-2'>
        <h2 className=''>Description</h2>
        <p className='my-2 text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default DetailedView;