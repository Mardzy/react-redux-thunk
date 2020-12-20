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

  const renderSeasons = (value, key) =>
    <Accordion key={key}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h4">Season {key}</Typography>
      </AccordionSummary>
      {value.map(episode => renderEpisode(episode))}
    </Accordion>

  return (
    <Box className="episodes">
      <Typography variant="h3">List of Episodes by Season</Typography>
      {_.map(episodes, (value, key) => renderSeasons(value, key))}
    </Box>
  );
}

export default Episodes;
