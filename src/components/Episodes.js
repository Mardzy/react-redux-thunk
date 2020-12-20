import _ from "lodash";
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Episodes = (episodes) => {

  const renderEpisode = (episode) => (
    <AccordionDetails key={episode.id}>
      <Typography>
        {episode.name}
      </Typography>
    </AccordionDetails>
  );

  const renderSeasons = (seasonEpisodes, seasonNumber) =>
    <Accordion key={seasonNumber}>
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
      {_.map(episodes, (value, key) => renderSeasons(value, key))}
    </Box>
  );
}

export default Episodes;
