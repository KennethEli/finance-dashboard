import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            animi eum expedita non tenetur, distinctio reprehenderit labore
            dolore autem quod iusto quidem saepe porro accusantium tempore
            aperiam assumenda. Modi, molestias!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            animi eum expedita non tenetur, distinctio reprehenderit labore
            dolore autem quod iusto quidem saepe porro accusantium tempore
            aperiam assumenda. Modi, molestias!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            animi eum expedita non tenetur, distinctio reprehenderit labore
            dolore autem quod iusto quidem saepe porro accusantium tempore
            aperiam assumenda. Modi, molestias!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            animi eum expedita non tenetur, distinctio reprehenderit labore
            dolore autem quod iusto quidem saepe porro accusantium tempore
            aperiam assumenda. Modi, molestias!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            animi eum expedita non tenetur, distinctio reprehenderit labore
            dolore autem quod iusto quidem saepe porro accusantium tempore
            aperiam assumenda. Modi, molestias!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            animi eum expedita non tenetur, distinctio reprehenderit labore
            dolore autem quod iusto quidem saepe porro accusantium tempore
            aperiam assumenda. Modi, molestias!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
