import React, { useEffect, useState } from 'react';
import CountDown from '@components/count-down/CountDown';
import { BackIcon, DownVoteIcon, HeartIcon, LocationIcon2, ShareIcon, ShowMap, UpvoteIcon } from '@assets/icons';
import { RootState } from '@store/reducers';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';

const img = '/images/eSports.webp';
const desc = 'Explore this awesome event nearby.';
const evtName = 'E-Sports 2k22';
const by = 'Shamlikhan CP';
const count = '12';
const dateTime = '2022-08-28T18:29:29.940Z';

type DetailsProps = {
  imgUrl?: string;
  title?: string;
  description?: string;
  author?: string;
  netVotes?: number;
  time?: string;
};

const DetailedView: React.FC<DetailsProps> = ({
  imgUrl = img,
  description = desc,
  title = evtName,
  author = by,
  netVotes = count,
  time = dateTime
}) => {
  const [event, setEvent] = useState<any>({});
  const { id } = useParams();
  const { events } = useSelector(
    (state: RootState) => state.rootReducer.eventsReducer
  );
  const navigate = useNavigate();

  useEffect(() => {
    const e = events.find((item) => item.properties.id == id)?.properties || {};
    setEvent(e);
  }, []);

  return (
    <div className='h-full bg-white'>
      <Header />
      <div className='relative'>
        <div className='absolute top-2 left-2 p-2 w-8 h-8 text-xl bg-white rounded-full'
          role='presentation'
          onClick={() => navigate(-1)} >
          <BackIcon />
        </div>
        <div className='absolute top-2 right-2 p-2 w-8 h-8 text-xl bg-white rounded-full'>
          <HeartIcon />
        </div>
        <img src={event?.image || imgUrl} className='w-full h-[350px]'></img>
      </div>
      <div className='p-4 font-inter'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='my-2 text-2xl'>{event?.title || title}</h2>
            <div>
              <span>by </span>
              <span className='underline'>{author}</span>
            </div>
          </div>
          {/* <div> */}
          <div className='flex gap-2 justify-center my-auto'>
            <UpvoteIcon />
            <div>
              {netVotes}
            </div>
            <DownVoteIcon />
          </div>
          {/* </div> */}

        </div>
        <div className='mt-4'>
          <div className='text-left'>
            <div className='flex'>
              <LocationIcon2 className='my-auto mr-1 w-3 h-3' />
              <div>
                {event?.location || 'Kochi'}
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='mt-2 p-1'><CountDown eventStartDate={event?.start_time || time} /></div>
            <div className='flex justify-center gap-2 my-auto'>
              <div className='mt-1 text-xs text-center'>Saved by 9 people</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-1 justify-around w-full'>
        <div className='flex gap-2 justify-center p-3 w-[46%] bg-black rounded-xl'>
          <div className='my-auto w-3'>
            <ShareIcon fill='white'></ShareIcon>
          </div>
          <div className='text-white'>
            Share
          </div>
        </div>
        <div className='flex gap-2 justify-center p-3 w-[46%] bg-white rounded-xl border'>
          <div className='my-auto w-3'>
            <ShowMap strokeWidth='2px' stroke='black' />
          </div>
          <div className='text-black'>
            View On Map
          </div>
        </div>
      </div>
      <div className='p-4 my-2'>
        <h2 className=''>Overview</h2>
        <p className='my-2 text-sm'>{event?.description || description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailedView;