import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails,
  Checkbox, FormControlLabel, Slider, Button,
  Typography, Box, FormGroup
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterSidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([2000, 30000]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300, p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Subseries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Value Series With MD 2.0" />
            <FormControlLabel control={<Checkbox />} label="Value Series Essential" />
            <FormControlLabel control={<Checkbox />} label="Snack & Spice" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filter By Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom>Price: </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={2000}
            max={30000}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>₹{priceRange[0]}</Typography>
            <Typography>₹{priceRange[1]}</Typography>
          </Box>
          <Button variant="contained" color="primary" fullWidth>
            Filter
          </Button>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Case Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Bullet" />
            <FormControlLabel control={<Checkbox />} label="Dome" />
            <FormControlLabel control={<Checkbox />} label="Turret" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Resolution</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="2 MP" />
            <FormControlLabel control={<Checkbox />} label="4 MP" />
            <FormControlLabel control={<Checkbox />} label="8 MP" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      {/* Add more accordions as needed */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Lens Type</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Low-Light Imaging</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Illumination Distance</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Environmental Protection</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Power Supply</Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};

export default FilterSidebar;