import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {
  // EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

const FeedCard = props => {
  const { img } = props;

  const handleFavouriteClick = () => {
    alert('clicked');
  };

  return (
    <div className="overflow-hidden py-4 w-full h-full">
      <Card sx={{ maxWidth: 400 }}>
        <div className="flex justify-between w-full h-auto">
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
            title="Modern Global Race Training Run"
            subheader="August 30, 2022"
          />
          <div onClick={handleFavouriteClick}>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
        <CardMedia component="img" height="194" image={img} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Important Information for Training Run # Modern Global Race will be
            on August 30, 2022 which is the main event. # Only those who have
            registered for 30th August event will get a “I am Training for
            Modern Global Race” t-shirt. # To register for 30th August event,
            click on the link-
            https://bgrm.coachravinder.com/event-details.html. # Registration
            for Training Run on 31st Aug is FREE. # Your participation helps
            Modern Food donate 20 slices of bread per registration to the needy
            and food banks. # There will be no set route for the training run,
            you can run walk as per your current training plan around Decathlon
            store. # Water, Energy Drink, First-Aid, Snack & Tea/coffee will be
            served post run at 7am onwards. #YouRunWeDonate #RunWithUs
            #feedthehungry #familyfitness
          </Typography>
        </CardContent>
        <div className="flex justify-end w-full h-auto">
          <CardActions disableSpacing>
            <IconButton aria-label="share">
              <WhatsappShareButton url={'https://www.taxcryp.com/'}>
                <WhatsappIcon type="button" size={40} round={true} />
              </WhatsappShareButton>
              <FacebookShareButton url={'https://www.taxcryp.com/'}>
                <FacebookIcon type="button" size={40} round={true} />
              </FacebookShareButton>
            </IconButton>
          </CardActions>
        </div>
      </Card>
      {/* <img src={img}  /> */}
    </div>
  );
};

export default FeedCard;
