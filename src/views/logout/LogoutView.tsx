import { Grid } from '@mui/material';
import RegisterForm from '@/components/offerToRegister/OfferToRegister';

export default function LogoutView() {
  return (
    <Grid
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap', paddingTop: '20px' }}
    >
        <RegisterForm />
    </Grid>
  );
};