import _ from "lodash";
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Episodes = ({ data, onClick }) => {
  const renderEpisode = (episode) => (
    <AccordionDetails className="episodes-accordion__item" key={episode.id}>
      <Typography className="episodes-accordion__item-number">
        {`${episode.number}.`}
      </Typography>
      <Typography className="episodes-accordion__item-name" data-id={episode.id} onClick={onClick}>
        {episode.name}
      </Typography>
    </AccordionDetails>
  );

  const renderSeasons = (seasonEpisodes, seasonNumber) =>
    <Accordion className="episodes-accordion" key={seasonNumber}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">Season {seasonNumber}</Typography>
      </AccordionSummary>
      {seasonEpisodes.map(episode => renderEpisode(episode))}
    </Accordion>

  return (
    <Box className="episodes">
      <Typography variant="h3">List of Episodes by Season</Typography>
      {data && _.map(data, (value, key) => renderSeasons(value, key))}
    </Box>
  );
}

export default Episodes;
