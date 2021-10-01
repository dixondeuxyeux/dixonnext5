import * as React from 'react'
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Typography } from '@material-ui/core'
import useStyles from '../utils/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SimpleAccordion() {
  const classes = useStyles()
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.lower5}>
            Information about Dixon / Deux Yeux Photographie
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              {' '}
              My name is Martin Dixon and for over forty years I have been
              making images for corporate, editorial, and advertising clients.
              During my personal time, I managed to produce five books over
              twenty years and spanning thirty-two countries. <br />
              <br />I came of age in the 1980s. We learned photography by
              shooting with &apos;4x5&apos; inch sheets of film and black cloths
              over our heads. We learned to meter light by eye, gauging the
              sun&apos;s intensity by instinct. We learned color theory by
              shootig Kodachrome64, the most unforgiving slide film ever made.
              And we flipping loved it.
              <br />
              <br />
              The &apos;Eighties&apos; were at once exciting and terrifying
              times. Grafitti artists were handcuffed and sometimes beaten to
              death. AIDS and HIV become the talk of the day. The Roxy, The
              Tunnel, and Studio 54 were in full swing. New York City nightlife
              resembled the cult film, &quot;The Warriors.&quot; Note to self,
              be careful if you &quot;come out and play.&quot;
              <br /> <br />
              After completing my undergradute degree at The Cooper Union in
              1988 and my graduate degree from The University of Michigan in
              1991, it was time to step into the light and make my voice heard.
              My study abroad experience in Paris gave me the travel bug. And
              I&apos;ve had this intense fever ever since. Traveling makes us
              look at things differently. What we think we know is aften wrong,
              or simply not culturally relevant. have you ever seen someone
              sweep the desert or mop a pool? I have. In the Gambia, I watched a
              buxom woman lose her wig while diving in the pool. I was going to
              help her but first I needed my camera. Unfortunately, my
              disobedient son dove down and retrieved it for her before I
              grabbed my medium format camera. My wry sense of humor does not
              shy away from the sillier, or uglier sides of life. Nothing is
              off-limits, nothing too taboo to discuss and film. Art demands
              courage.
              <br /> <br />
              When I tell people I don&apos;t make pretty pictures, I am
              indirectly saying that I don&apos;t believe photography is meant
              to be cute and light-hearted. Certainly I make beautiful images
              but they pack a punch, and sometimes these punches hurt the soul.
              You don&apos;t need to be Brice Willis in the &apos;Sixth
              Sense&apos; to see dead people. I have lived in Africa ten years.
              You see it often. I have as much respect for Agence France Press
              and Magnum photographers as I do Demerchelier, Leibowitz, and all
              the top commercial artists. We don&apos;t get to pick where we
              were born, our parents and siblings, or our complexions and hair.
              We either learn to become comfortable in our own skins or continue
              to live a tortured existence.
              <br />
              <br />
              And so I am pleased to open my archives to you, one and all. See
              the world through my eyes. Step into my shoes and walk a mile with
              me. You will find that I have a very distinct and unique
              photographic vision. And every week I will add more images to the
              product pages of this ecommerce shop. (The image watermark comes
              off when you purchase a print. I have to keep you honest). Dixon /
              Deux Yeux was created because more often than not, when I
              photograph personal work, I tend to use a Leica rangefinder. And
              when I began forty-one years ago, it was an old Leica M3 with the
              35mm Summicron bug-eyed attachment over the viewfinder. Looking at
              me back then one would have thought that I had one human eye and
              the other mechanical. And I think they were right.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.lower5}>
            Some Information about Digital Prints
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              Today&apos;s digital prints offer fantastic longevity if properly
              stored and displayed. The first rule for anyone displaying prints
              is to ensure the glass you use is to use UV-Filtered glass from a
              reputable company. The sun&apos;s harsh UV rays can reduce and
              even destroy a beautiful print in a matter of months. Visit any
              gallery from the Modern in New York to the Tate Modern in London
              and you will see they display their classic B/W and Color prints
              in subdued light with adequate ventilation and UV protective
              glass.
              <br />
              <br />
              I have had clients tell me that the saturation of the prints faded
              over time and I assured them I was using InkPress&apos;s Metallic
              Satin paper - some of the best paper on the market - only to find
              out that they made no provisions for protecting the images from
              direct sunlight. Please protect your investments.
              <br />
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.lower5}>
            Some Information about Shipping
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              I strictly use Fed-Ex and DHL carriers because I insure the prints
              against damage in transit. The prints are gently rolled and placed
              inside a carton tube with end-caps. Then the tube is placed inside
              another carton with suitable paddign like popcorn foam or air bags
              to ensure against movement. Every effort is made to guarantee
              safety and timely delivery of your product.
              <br />
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.lower5}>
            Some Information about Print Sizes and Signed Editions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              To ensure safe delivery, I have limited the print sizes to
              &apos;12 x 19&apos; on &apos;13 x 19&apos; paper. Some photographs
              are larger and have been printed on photographic canvas. They
              measure roughly &apos;39 inches by 27 inches&apos;. As such, they
              are priced accordingly and treated with a light UV protective
              spray.
              <br />
              <br />I sign each edition print on the back and incrementally
              raise the price after every sale. A signed and stated print out
              accompanies your purchase and with your edition number.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
