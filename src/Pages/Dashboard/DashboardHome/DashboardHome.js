import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Calendar date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Appointments date={date} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;